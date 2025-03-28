import Product from '../models/Product.js';

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: 'Fetching products failed' });
    }
};

export const addProduct = async (req, res) => {
    try {
        const { name, category, price, image } = req.body;
        const newProduct = new Product({ name, category, price, image });
        await newProduct.save();
        res.status(201).json({ message: 'Product added' });
    } catch (error) {
        res.status(500).json({ error: 'Adding product failed' });
    }
};
