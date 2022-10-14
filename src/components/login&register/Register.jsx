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
import {string} from "yup";

const cx = classNames.bind(styles)

const Register = () => {
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

    const notify = (type) => {
        if(type === "success") toast.success("🦄 account success!", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

        if(type === "error") toast.error(" available account!", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    const getAllAccount = () => {
        fetchFromAPI("account").then((data) => setAllAccount(data));
    };

    useEffect(() => {
        getAllAccount();
    }, []);


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onRegister = (data) => {

        const currentAcc = data;
        let checkAcc = true
        for (let account  of allAccount ){
            if(account.email === currentAcc.email && account.name === currentAcc.name){
                checkAcc = false
                break;
            }
        }
        if(checkAcc){
        axios
            .post("http://localhost:8000/account", currentAcc)
            .then((res) => {
                console.log(res);
                notify("success");
                navigate("/login")
            })
            .catch((err) => console.log(err));
        }else notify("error")
    };

    return (
       <LoginRegister>
           <form
               style={{ width: "100%" }}
               onSubmit={handleSubmit(onRegister)}
           >

               <h2>Register</h2>
               <div className={cx("input_div")}>
                   <input
                       placeholder="First Name"
                       {...register("name", { required: true })}
                       type="text"
                   />
                   {errors.name && (
                       <span className={cx("error_mes")}>Enter your name</span>
                   )}
               </div>
               <div className={cx("input_div")}>
                   <input
                       {...register("email", {
                           pattern:
                               /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-z]+)$/,
                       })}
                       placeholder="Your Email"
                       type="text"
                   />
                   {errors.email && (
                       <span className={cx("error_mes")}>Email not valid</span>
                   )}
               </div>
               <div className={cx("input_div")}>
                   <input
                       placeholder="Password"
                       type="text"
                       {...register("pass", { required: true })}
                   />
                   {errors.pass && (
                       <span className={cx("error_mes")}>Enter your pass</span>
                   )}
               </div>

               <button type="submit">Register</button>

               <p>
                   Already have account ?{" "}
                   <Link to={"/login"} className={"Link"}>
                       <span
                           style={{ textDecoration: "underline", cursor: "pointer" }}
                       >
                    Login here
                  </span>{" "}
                   </Link>
               </p>
           </form>
       </LoginRegister>
    )
}

export default Register