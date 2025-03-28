import Interaction from '../models/Interaction.js';

export const addInteraction = async (req, res) => {
    try {
        const { userId, productId } = req.body;

        if (!userId || !productId) {
            return res.status(400).json({ error: "userId and productId are required" });
        }

        const interaction = new Interaction({ userId, productId });
        await interaction.save();

        res.status(201).json({ message: "Interaction recorded successfully", interaction });
    } catch (error) {
        res.status(500).json({ error: "Failed to add interaction", details: error.message });
    }
};
