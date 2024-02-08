const express = require('express');
const products = require('../DB/models/ProductSchema');
const router = express.Router();

router.get(`/categorywise/:cat/:subcat`, async (req, res) => {
    const categoryproduts = await products.find({ $and: [{ category: req.params.cat }, { subcategory: req.params.subcat }] });
    if (!categoryproduts) {
        return res.status(500).json({ success: false, "description": "cannot get the items!!!" });
    }
    res.send(categoryproduts);

})

router.get('/', async (req, res) => {
    const allproducts = await products.find();
    if (!allproducts) {
        return res.status(500).json({ success: false, "description": "cannot get the items!!!" });
    }
    res.send(allproducts);
})

router.post('/postproducts', async (req, res) => {
    try {
        const product = new products({
            name: req.body.name,
            description: req.body.description,
            images: req.body.images,
            brand: req.body.brand,
            price: req.body.price,
            category: req.body.category,
            subcategory: req.body.subcategory,
            stock: req.body.stock,
            reviews: req.body.reviews,
            dateCreated: req.body.dateCreated
        })
        const saved = await product.save();
        if (!saved) {
            return res.status(500).json({ success: false, "description": "cannot insert the items!!!" })
        }
        res.status(200).json({
            success: true,
            product
        })
    } catch (err) {
        res.status(200).json({
            success: false,
            message: err.message
        });
    }
});

router.get('/:id', async (req, res) => {
    const item = await products.find({ _id: req.params.id });
    console.log(item);
    if (!item || item == []) {
        return res.status(500).json({ success: false, "description": "cannot get the items!!!" })
    }
    else { res.send(item); }
})

router.delete('/:id', async (req, res) => {
    console.log(req.params.id);
    const deleteditem = await products.deleteOne({ _id: req.params.id });
    if (deleteditem.acknowledged === false) {
        return res.json({ success: false, "description": "cannot delete the items. check your item id" });
    }

    if (deleteditem.acknowledged === true) {
        return res.send({ success: true });
    }
})

router.put('/:id', async (req, res) => {
    try {
        const update = await products.updateOne(
            { _id: req.params.id },
            {
                $set: {
                    name: req.body.name,
                    description: req.body.description,
                    images: req.body.images,
                    brand: req.body.brand,
                    price: req.body.price,
                    category: req.body.category,
                    subcategory: req.body.subcategory,
                    stock: req.body.stock,
                    reviews: req.body.reviews,
                    dateCreated: req.body.dateCreated
                }
            }
        );
        if (!update) {
            return res.json({ success: false, "description": "cannot update the items. check your item id" })
        } else {
            res.status(200).json({
                success: true,
                message: "product updated !"
            });
        }
    } catch (e) {
        res.status(200).json({
            success: false,
            message: e.message
        });
    }
})
module.exports = router;