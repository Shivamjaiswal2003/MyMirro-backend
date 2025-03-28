import Interaction from '../models/Interaction.js';
import Product from '../models/Product.js';

export const getRecommendations = async (req, res) => {
    try {
        const userId = req.params.userId;
        console.log("Fetching recommendations for user:", userId);
        
        const interactions = await Interaction.find({ userId }).populate('productId');
        console.log("User interactions:", interactions);

        if (!interactions.length) {
            console.log("No interactions found for user.");
            return res.json([]);
        }

        const categories = interactions.map(i => i.productId?.category);
        console.log("Categories of interacted products:", categories);

        const recommendedProducts = await Product.find({ category: { $in: categories } }).limit(5);
        console.log("Recommended products:", recommendedProducts);
        
        res.json(recommendedProducts);
    } catch (error) {
        console.error("Error fetching recommendations:", error);
        res.status(500).json({ error: "Fetching recommendations failed" });
    }
};
