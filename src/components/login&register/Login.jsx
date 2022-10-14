import styles from "./login&register.module.scss"

import classNames from "classnames/bind";
import {useForm} from "react-hook-form";
import LoginRegister from "./Login&Register";
import {Link, useNavigate} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {StoreContext} from "../../GlobalState";
import {toast} from "react-toastify";
import {fetchFromAPI} from "../../utils/fetchFromApi";
import axios from "axios";

const cx = classNames.bind(styles)

const Login = (  ) => {
    const { setCurrentAccount } = useContext(StoreContext);
    const [allAccount, setAllAccount] = useState([]);

    const navigate = useNavigate();

    const errorNot = () => {
        toast.error("🦄 invalid account!", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

    const notify = () =>
        toast.success("🦄 account success!", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

    const getAllAccount = () => {
        fetchFromAPI("account").then((data) => setAllAccount(data));
    };

    useEffect(() => {
        getAllAccount();
    }, []);

    const onLogin = (data) => {
        let checkAccountExist = false;
        for (let value of allAccount) {
            if (data.email === value.email && data.pass === value.pass) {
                setCurrentAccount((prev) => ({ ...prev, account: value, state: true }));
                localStorage.setItem("user", JSON.stringify(value));
                checkAccountExist = true;
            }
        }
        if (checkAccountExist) {
            notify();
            navigate("/");
        } else errorNot();
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onRegister = (data) => {
        console.log(data);
        const data4 = data;
        axios
            .post("http://localhost:8000/account", data4)
            .then((res) => {
                console.log(res);
                notify();
            })
            .catch((err) => console.log(err));
        getAllAccount();
    };


    return (
        <LoginRegister>

            <form onSubmit={handleSubmit(onLogin)}>
                {" "}
                <h2>Login</h2>
                <div className={cx("input_div")}>
                    <input
                        placeholder="Your Email"
                        {...register("email", {
                            pattern:
                                /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-z]+)$/,
                        })}
                        type="text"
                    />
                    {errors.email && (
                        <span className={cx("error_mes")}>Email not valid</span>
                    )}
                </div>
                <div className={cx("input_div")}>
                    <input
                        placeholder="Pass Word ..."
                        type="text"
                        {...register("pass", { required: true })}
                    />
                    {errors.pass && (
                        <span className={cx("error_mes")}>Enter your pass</span>
                    )}
                </div>
                <button type="submit">Login</button>
                <p>
                    Do not have account ?{" "}
                    <Link to={"/register"} className={"link"}>
                        <span
                            style={{ textDecoration: "underline", cursor: "pointer" }}
                            onClick={() => {

                            }}
                        >
                    Register here
                  </span>{" "}
                    </Link>
                </p>
            </form>
        </LoginRegister>
    )
}

export default Login