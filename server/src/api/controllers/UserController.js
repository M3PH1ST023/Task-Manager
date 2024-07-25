import { UserModel } from "../models/UserModel.js";

export const login = async (req, res) => {
    try {
        let username = req.query.username;
        let password = req.query.password;
        let user = await UserModel.findOne({ username: username });
        if (user.password == password) {
            res.json({ id: user._id, username: user.username });
        } else {
            res.json(false);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const signup = async (req, res) => {
    try {
        let user = new UserModel(req.body);
        await user.save();
        res.json(true);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
