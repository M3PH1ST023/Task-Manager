import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Info from "../Info";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import High from "../components/High";
import Medium from "../components/Medium";
import Low from "../components/Low";
import { useState } from "react";

const Dashboard = () => {
    const navigate = useNavigate();
    const id = Cookies.get("id");
    const user = Cookies.get("username");

    const [addDisplay, setAddDisplay] = useState("none");

    const logout = () => {
        toast.info("logging out ...");
        setTimeout(() => {
            Cookies.remove("id");
            Cookies.remove("username");
            navigate("/");
        }, 2500);
    };

    const addTask = (e) => {
        e.preventDefault();

        let priority = document.getElementById("priority");
        let status = document.getElementById("status");

        let body = {
            taskName: document.getElementById("taskName").value,
            taskDesc: document.getElementById("taskDesc").value,
            priority: priority.options[priority.selectedIndex].text,
            status: status.options[status.selectedIndex].text,
            taskOwner: id,
        };

        axios.post(Info.server + "/api/v1/task", body).then((resp) => {
            if (resp.data == true) {
                toast.success("Task added !");
                setTimeout(() => {
                    window.location.reload(true);
                }, 2500);
            }
        });
    };

    return (
        <div className="page-container">
            <ToastContainer autoClose={2000} theme="colored" />

            <div className="welcome">
                Hello <span>{user}</span> !
            </div>

            <div className="tasks flex f-column f-around">
                <High />
                <Medium />
                <Low />
            </div>

            <div
                className="add-task-container auth-container flex f-center"
                style={{ display: addDisplay }}
            >
                <form
                    onSubmit={addTask}
                    className="add-form auth-form flex f-column f-center"
                >
                    <div
                        className="close"
                        onClick={() => {
                            setAddDisplay("none");
                        }}
                    >
                        X
                    </div>
                    <h2>Add Task</h2>
                    <div className="inp flex f-column">
                        <label>Task Name</label>
                        <input
                            id="taskName"
                            type="text"
                            placeholder="Enter Task name"
                        />
                    </div>
                    <div className="inp flex f-column">
                        <label>Task Description</label>
                        <input
                            id="taskDesc"
                            type="text"
                            placeholder="Enter Task description"
                        />
                    </div>
                    <div className="inp flex f-column">
                        <label htmlFor="">Priority</label>
                        <select id="priority">
                            <option value="">High</option>
                            <option value="">Medium</option>
                            <option value="">Low</option>
                        </select>
                    </div>
                    <div className="inp flex f-column">
                        <label htmlFor="">Status</label>
                        <select id="status">
                            <option value="">Pending</option>
                            <option value="">On Progress</option>
                            <option value="">Completed</option>
                        </select>
                    </div>
                    <button type="submit">Add</button>
                </form>
            </div>

            <div className="icons flex f-column">
                <img
                    onClick={() => {
                        setAddDisplay("");
                    }}
                    src={Info.images.add}
                />
                <img onClick={() => logout()} src={Info.images.logout} />
            </div>
        </div>
    );
};

export default Dashboard;
