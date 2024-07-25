import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import Cookies from "js-cookie";
import Info from "../../Info";

const Login = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        axios
            .get(
                Info.server +
                    `/api/v1/auth?username=${username}&password=${password}`
            )
            .then((resp) => {
                if (resp.data.id) {
                    Cookies.set("id", resp.data.id);
                    Cookies.set("username", resp.data.username);
                    toast.success("Login Successsful !");
                    setTimeout(() => {
                        navigate("/dashboard");
                    }, 2500);
                } else {
                    toast.error("Login failed !");
                }
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div className="auth-container flex f-center">
            <ToastContainer autoClose={2000} theme="colored" />
            <form
                onSubmit={handleSubmit}
                className="auth-form flex f-center f-column"
            >
                <h2>LOGIN</h2>
                <div className="inp flex f-column">
                    <label>Username</label>
                    <input
                        type="text"
                        placeholder="Enter username"
                        onChange={(e) => {
                            setUsername(e.target.value);
                        }}
                    />
                </div>
                <div className="inp flex f-column">
                    <label>Password</label>
                    <input
                        type="password"
                        placeholder="Enter password"
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                </div>
                <div className="auth-redirect flex f-between">
                    New User?
                    <Link to="/signup" className="link">
                        Register
                    </Link>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Login;
