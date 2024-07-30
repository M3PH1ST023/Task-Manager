import { useEffect, useState } from "react";
import axios from "axios";
import Info from "../Info";
import Cookies from "js-cookie";

const Low = () => {
    const id = Cookies.get("id");
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        axios
            .get(`${Info.server}/api/v1/task?taskOwner=${id}&priority=Low`)
            .then((resp) => setTasks(resp.data));
    }, []);

    const handleDelete = (taskId) => {
        let choice = prompt("Confirm to delete [Y / N]:");
        if (choice == "Y" || choice == "y") {
            axios
                .delete(`${Info.server}/api/v1/task/${taskId}`)
                .then((resp) => {
                    if (resp.data == true) {
                        window.location.reload(true);
                    }
                });
        }
    };

    return (
        <div className="task-container flex f-wrap">
            {tasks.map((task) => {
                if (task.status != "Completed") {
                    return (
                        <div
                            key={task._id}
                            className={`task ${task.status} flex f-column f-around `}
                        >
                            <div>{task.taskName}</div>
                            <div>{task.taskDesc}</div>
                            <div className="buttons flex f-center">
                                <img src={Info.images.done} />
                                <img src={Info.images.edit} />
                                <img
                                    onClick={() => handleDelete(task._id)}
                                    src={Info.images.bin}
                                />
                            </div>
                        </div>
                    );
                }
            })}
        </div>
    );
};

export default Low;
