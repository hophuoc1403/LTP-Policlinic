import classNames from "classnames/bind";
import styles from "./login&register.module.scss";
import { useState } from "react";
import { Box, Stack } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGoogle,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { StoreContext } from "../../GlobalState";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fetchFromAPI } from "../../utils/fetchFromApi";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);

function LoginAndRegister() {
  const [isRegister, setIsRegister] = useState(false);
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
    setIsRegister(false);
  };
  return (
    <div className={cx("form")}>
      <h2>{isRegister ? "Register" : "Login"}</h2>
      <div className={cx("form_box")}>
        <Stack
          width={{ md: "80%", sm: "90% !important" }}
          direction={{ md: "row", sm: "column" }}
        >
          <Box
            className={cx("form_box_left")}
            // width={{ sm: "100% !important" }}
          >
            <h3>OFFICIAL</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              assumenda ullam minima saepe qui quidem? Nihil exercitationem
              reprehenderit, perspiciatis, amet saepe veli
            </p>
          </Box>
          <Box className={cx("form_box_right")} width={{ sm: "100%" }}>
            {isRegister ? (
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
            ) : (
              <form onSubmit={handleSubmit(onLogin)}>
                {" "}
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
                  <span
                    style={{ textDecoration: "underline", cursor: "pointer" }}
                    onClick={() => setIsRegister(true)}
                  >
                    Register here
                  </span>{" "}
                </p>
              </form>
            )}

            <p>Fast Signup With Your Favourite Social Profile</p>
            <div className={cx("form_rear")}>
              <FontAwesomeIcon className={cx("icon")} icon={faFacebook} />
              <FontAwesomeIcon className={cx("icon")} icon={faYoutube} />
              <FontAwesomeIcon className={cx("icon")} icon={faTwitter} />
              <FontAwesomeIcon className={cx("icon")} icon={faGoogle} />
            </div>
          </Box>
        </Stack>
      </div>
    </div>
  );
}

export default LoginAndRegister;
