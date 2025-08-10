import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
    Name: {
        type: String,
        required: true
    },
    topic: {
        type: String,
        required: true
    },
    keywords: {
        type: [String],
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model("User", userSchema);
