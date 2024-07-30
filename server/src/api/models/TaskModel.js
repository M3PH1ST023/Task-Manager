import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
    taskName: {
        type: String,
        required: true,
    },
    taskDesc: {
        type: String,
        required: true,
    },
    priority: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    taskOwner: {
        type: String,
        required: true,
    },
});

export const TaskModel = mongoose.model("task", TaskSchema);
