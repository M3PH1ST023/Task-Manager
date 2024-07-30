import { TaskModel } from "../models/TaskModel.js";

export const addTask = async (req, res) => {
    try {
        let task = new TaskModel(req.body);
        await task.save();
        res.json(true);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getTask = async (req, res) => {
    try {
        let task = await TaskModel.find({
            taskOwner: req.query.taskOwner,
            priority: req.query.priority,
        });
        res.json(task);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteTask = async (req, res) => {
    try {
        let task = await TaskModel.findByIdAndDelete(req.params.id);
        res.json(true);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
