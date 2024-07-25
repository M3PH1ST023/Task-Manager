import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import Info from "../../Info";

const Signup = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        let body = {
            username: username,
            password: password,
        };

        axios
            .post(Info.server + "/api/v1/auth", body)
            .then((resp) => {
                if (resp.data == true) {
                    toast.success("User Created Successsful !");
                    setTimeout(() => {
                        navigate("/");
                    }, 2500);
                } else {
                    toast.error("Error Occured, Please try again !");
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
                <h2>SIGNUP</h2>
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
                <div className="inp flex f-column">
                    <label>Confirm Password</label>
                    <input type="password" placeholder="Confirm password" />
                </div>
                <div className="auth-redirect flex f-between">
                    Already an User?
                    <Link to="/" className="link">
                        Login
                    </Link>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Signup;
