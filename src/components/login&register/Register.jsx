import styles from "./login&register.module.scss"

import classNames from "classnames/bind";
import {useForm} from "react-hook-form";

const cx = classNames.bind(styles)

const Register = ({onRegister,setIsRegister}) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    return (
        <form
            style={{ width: "100%" }}
            onSubmit={handleSubmit(onRegister)}
        >
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
                <span
                    style={{ textDecoration: "underline", cursor: "pointer" }}
                    onClick={() => setIsRegister(false)}
                >
                    Login here
                  </span>{" "}
            </p>
        </form>
    )
}

export default Register