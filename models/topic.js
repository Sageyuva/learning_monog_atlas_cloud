import mongoose, { Schema } from "mongoose";


const topicSchema = new Schema({
    title: String,
    discription: String,

}, {
    timestamps: true,
});

const topic = mongoose.models.topics || mongoose.model("topics", topicSchema);

export default topic