import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    createdDate: {
        type: Date,
        required: true,
        default: new Date(),
    },
});

export const UserModel = mongoose.model("users", UserSchema);
