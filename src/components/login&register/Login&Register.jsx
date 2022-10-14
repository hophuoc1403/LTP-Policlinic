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
import Register from "./Register";
import Login from "./Login";

const cx = classNames.bind(styles);

function LoginAndRegister({children}) {
  return (
    <div className={cx("form")}>
      <div className={cx("form_box")}>
        <Stack
          width={{ md: "70%", sm: "70% !important" }}
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
            {children}

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
