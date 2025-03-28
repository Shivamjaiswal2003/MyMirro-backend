import mongoose from 'mongoose';
const interactionSchema = new mongoose.Schema({
    userId: { 
        type: mongoose.Schema.Types.ObjectId,
         ref: 'User' 
        },
    productId: { 
        type: mongoose.Schema.Types.ObjectId,
         ref: 'Product' 
        },
    interactionType: String, // 'view', 'like', 'purchase'
});

export default mongoose.model('Interaction', interactionSchema);