import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

import Product from './models/Product.js';

const app = express();
app.use(express.json());

const connetMongoDB = async () => {
    const connection = await mongoose.connect(process.env.MONGODB_URI);
    if (connection) {
        console.log('Connected to MongoDB');
    }
}
connetMongoDB();


app.post('/product', async (req, res) => {

    const { name, price, description } = req.body;

    const product = new Product({
        name: name,
        price: price,
        description: description
    });

    const savedProduct = await product.save();

    res.json({
        success: true,
        data: savedProduct,
        message: 'Product added successfully',
    })
})

app.get('/products', async (req, res) => {

    const products = await Product.find();

    res.json({
        success: true,
        data: products,
        message: 'Product retrived successfully'
    })
})

app.get('/product/:id', async (req, res) => {
    const { id } = req.params;

    const product = await Product.findOne({ _id: id });

    res.json({
        success: true,
        data: product,
        message: 'Product retrieved successfully'
    })

})

app.delete('/product/:id', async (req, res) => {
    const { id } = req.params;

    await Product.deleteOne({ _id: id });

    res.json({
        success: true,
        message: 'Product deleted successfully'
    });

});

app.put('/product/:id', async (req, res) => {
    const { id } = req.params;
    const { name, price, description } = req.body;

    await Product.updateOne({ _id: id }, {
        $set: {
            name: name,
            price: price,
            description: description
    }});
        
        const updatedProduct = await Product.findOne({ _id: id });
        
        res.json({
            success: true,
            data: updatedProduct,
            message: 'Product updated successfully'
        });
});


const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Sever running on port ${PORT}`);
});