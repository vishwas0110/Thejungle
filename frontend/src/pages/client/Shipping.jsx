import React from "react";
import Header from "../../components/Home/Header";
import Sidebar from "../../components/Home/Sidebar";

const Shipping = () => {
    return (
        <div>
            <Header />
            <Sidebar />
            <div className="pt-20 p-5">
                <h1 className="text-center font-bold">Shipping Policy</h1>
                <p className="text-xs mt-2">
                    PLEASE ALLOW 24 HOURS FOR ORDER PROCESSING, PENDING PRODUCT
                    AVAILABILITY AND PAYMENT VERIFICATION. ONCE AN ORDER HAS BEEN PLACED,
                    IT CANNOT BE MODIFIED OR CANCELLED. PLEASE CONFIRM THAT ALL ORDER
                    DETAILS ARE CORRECT BEFORE COMPLETING THE CHECKOUT PROCESS.
                    JUNGLETHETRIBE DOES NOT SHIP ON WEEKENDS OR MAJOR HOLIDAYS. ALL ORDERS
                    SHIP FROM NEW WARANGAL WAREHOUSE, INDIA. YOU WILL RECEIVE AN AUTOMATIC
                    CONFIRMATION EMAIL ONCE YOUR ORDER HAS BEEN PLACED. IF YOU DO NOT SEE
                    THE ORDER CONFIRMATION WITHIN A FEW MINUTES OF ORDERING, PLEASE CHECK
                    YOUR SPAM EMAIL FOLDER.
                </p>
                <p className="text-xs mt-2">
                    ALL ORDERS ARE REVIEWED BY OUR SECURITY TEAM AND CAN BE CANCELLED BY
                    JUNGLETHETRIBE AT ANY TIME. ONCE YOUR ORDER HAS BEEN PROCESSED BY OUR
                    FULFILLMENTS TEAM, YOU WILL RECEIVE A SHIPPING CONFIRMATION EMAIL WITH
                    TRACKING INFORMATION ENCLOSED.
                </p>
                <p className="text-xs mt-2">ORDERS MAY EXPERIENCE SHIPPING DELAYS DURING SPECIAL RELEASES, MAJOR HOLIDAYS, AND MARKDOWN PERIODS. *PRE-ORDER POLICY: ITEMS THAT ARE MARKED AS PRE-ORDER ARE EXPECTED TO SHIP UPON ARRIVAL TO OUR FACILITY. ALL CUSTOMERS ARE CHARGED AT CHECKOUT FOR PRE-ORDER ITEMS TO THE PAYMENT METHOD PROVIDED. ONCE YOUR ORDER HAS BEEN PLACED, WE ARE UNABLE TO CANCEL OR MODIFY.</p>
                <h1 className="font-bold text-base mt-3">SHIPPING METHODS:</h1>
                <p className="text-xs mt-2">FOR ORDERS WITHIN INDIA, “JUNGLETHETRIBE” OFFERS COMPLIMENTARY 5-7 WORKING DAY STANDARD SHIPPING.</p>
            </div>
        </div>
    );
};

export default Shipping;
