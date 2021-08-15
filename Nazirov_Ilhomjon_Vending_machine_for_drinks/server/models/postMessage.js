import mongoose from 'mongoose';

// Schema for saving information about post
const postSchema = mongoose.Schema({
    title: String,
    price: Number,
    selectedFile: String,
    amount: Number,
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;