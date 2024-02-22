const express = require("express");
const crypto = require("crypto");
const axios = require("axios");
const orderModel = require("../DB/models/Order");

const router = express.Router();

const BASE = "https://junglethetribe.com";
const BASE2 = "https://www.api.junglethetribe.com";

// const BASE = "http://localhost:3000"
// const BASE2 = "http://localhost:9000"

router.post("/init", async (req, res) => {
    try {
        var tid;
        function GenerateTransactionID() {
            const timestamp = Date.now();
            const random = Math.floor(Math.random() * 1000000);
            const merchantPrefix = "T";
            tid = `${merchantPrefix}${timestamp}${random}`;
            return tid;
        }

        const userID = req.body.userID;
        const orderID = req.body.orderID;

        const data = {
            merchantId: process.env.MERCHANT_ID,
            merchantTransactionId: GenerateTransactionID(),
            merchantUserId: "MUID9EFW8E9F89EWF8C",
            name: req.body.Name,
            amount: req.body.TotalAmount * 100,
            redirectUrl: `${BASE2}/api/thejungle/payment/status/${tid}/${userID}/${orderID}`,
            redirectMode: "POST",
            mobileNumber: req.body.Mobile,
            callbackUrl: `${BASE2}/api/thejungle/payment/status/${tid}/${userID}/${orderID}`,
            paymentInstrument: {
                type: "PAY_PAGE",
            },
        };

        const payload = JSON.stringify(data);
        const payloadMain = Buffer.from(payload).toString("base64");
        const keyIndex = 1;
        const saltkey = process.env.SALT_KEY;
        const string = payloadMain + "/pg/v1/pay" + saltkey;
        const sha256 = crypto.createHash("sha256").update(string).digest("hex");
        const checksum = sha256 + "###" + keyIndex;

        const URL = "https://api.phonepe.com/apis/hermes/pg/v1/pay"; //production url

        // const URL = "https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay"; //test api


        const options = {
            method: "POST",
            url: URL,
            headers: {
                accept: "application/json",
                "Content-Type": "application/json",
                "X-VERIFY": checksum,
            },
            data: {
                request: payloadMain,
            },
        };

        axios
            .request(options)
            .then(function (response) {
                console.log(response);
                return res
                    .status(200)
                    .send({ url: response.data.data.instrumentResponse.redirectInfo.url });
            })
            .catch((err) => {
                console.log(err);
            });


    } catch (e) {
        res.status(200).json({
            success: false,
            message: e.message,
        });
    }
});

router.post("/status/:id/:uid/:oid", async (req, res) => {
    try {
        const merchantTransactionId = req.params.id;
        const merchantId = process.env.MERCHANT_ID;
        const saltkey = process.env.SALT_KEY;
        const keyIndex = 1;
        const string =
            `/pg/v1/status/${merchantId}/${merchantTransactionId}` + saltkey;
        const sha256 = crypto.createHash("sha256").update(string).digest("hex");
        const checksum = sha256 + "###" + keyIndex;

        const testURL = `https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/status/${merchantId}/${merchantTransactionId}`
        const prodURL = `https://api.phonepe.com/apis/hermes/pg/v1/status/${merchantId}/${merchantTransactionId}`

        const options = {
            method: "GET",
            url: prodURL,
            headers: {
                accept: "application/json",
                "Content-Type": "application/json",
                "X-VERIFY": checksum,
                "X-MERCHANT-ID": `${merchantId}`,
            },
        };

        axios.request(options).then(async resp=>{
            console.log(resp.data);
            if(resp.data.code === "PAYMENT_SUCCESS"){
                const order = await orderModel.findById(req.params.oid);
                if(order){
                    const updated = await orderModel.updateOne({_id:req.params.oid},{
                        $set:{status:true,transactionID:resp.data.data.transactionId,paymentDetails:resp.data.data.paymentInstrument,totalAmount:resp.data.data.amount}
                    })
                    if(updated){
                        res.redirect(`${BASE}/success/${merchantTransactionId}/${req.params.oid}`);
                    }else{
                        throw new Error("Failed to update !")
                    }
                }else{
                    throw new Error("order not found !")
                }
            }
        }).catch(err=>{
            console.log(err);
        })

    } catch (e) {
        res.status(200).json({
            success: false,
            message: e.message
        });
    }
})

module.exports = router;