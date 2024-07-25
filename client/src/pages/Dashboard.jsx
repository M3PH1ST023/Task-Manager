import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Info from "../Info";
import { toast, ToastContainer } from "react-toastify";
import High from "../components/High";
import Medium from "../components/Medium";
import Low from "../components/Low";
import { useState } from "react";

const Dashboard = () => {
    const navigate = useNavigate();
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
                className="add-task-container flex f-center"
                style={{ display: addDisplay }}
            >
                <form className="add-form flex f-column f-center">
                    <div
                        className="close"
                        onClick={() => {
                            setAddDisplay("none");
                        }}
                    >
                        X
                    </div>
                    <h2>Add Task</h2>
                    <div className="inp">
                        <label>Task Name</label>
                        <input type="text" placeholder="Enter Task name" />
                    </div>
                    <div className="inp">
                        <label>Task Description</label>
                        <input
                            type="text"
                            placeholder="Enter Task description"
                        />
                    </div>
                    <div className="inp">
                        <label htmlFor="">Priority</label>
                        <select>
                            <option value="">High</option>
                            <option value="">Medium</option>
                            <option value="">Low</option>
                        </select>
                    </div>
                    <div className="inp">
                        <label htmlFor="">Status</label>
                        <select>
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
