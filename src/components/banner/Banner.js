import styles from "./Banner.module.scss";
import classNames from "classnames/bind";
import { useEffect, useRef, useState } from "react";
import { Stack } from "@mui/system";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneVolume,
  faPrescriptionBottleMedical,
  faStethoscope,
} from "@fortawesome/free-solid-svg-icons";
import autoAnimate from "@formkit/auto-animate";

import { banner1, banner2, banner3 } from "../";

const cx = classNames.bind(styles);
const listImgBanner = [banner1, banner2, banner3];

function Banner() {
  const [currentImg, setCurrentImg] = useState(banner1);

  useEffect(() => {
    let intervalImg = setInterval(() => {
      let i = Math.floor(Math.random() * 2);
      setCurrentImg(listImgBanner[i]);
    }, 4000);

    // return () => clearInterval(intervalImg);
  }, []);

  return (
    <div>
      <div className={cx("banner")}>
        <div className={cx("banner-img")}>
          <img
            className={cx("card-img-h")}
            src={currentImg || banner1}
            alt=""
          />
        </div>
        <div className={cx("banner-content")}>
          <p>Creating a better tomorrow</p>
          <h3>Health is all we are concerned about.</h3>
          <span>
            Molestie montes neque metus elementum adipiscing odio mi erat sit
            quis potenti
          </span>
          <button>Discover More</button>
        </div>
      </div>

      <div>
        <Stack
          justifyContent={"center"}
          className={cx("under-banner")}
          sx={{
            transform: { xs: "translateY(0)", md: "translateY(-50px)" },
            width: { xs: "98vw", md: "90vw" },
            flexDirection: { xs: "column", md: "row" },
            overflow: "hidden",
          }}
        >
          <div className={cx("content-box")}>
            <div className={cx("icon")}>
              <FontAwesomeIcon icon={faStethoscope} />
            </div>
            <div className={cx("content")}>
              <h4>Medical Service</h4>
              <p>Improve people's health and better social</p>
            </div>
          </div>
          <div className={cx("content-box")}>
            <div className={cx("icon")}>
              <FontAwesomeIcon icon={faPrescriptionBottleMedical} />
            </div>
            <div className={cx("content")}>
              <h4>Medical Service</h4>
              <p>Improve people's health and better social</p>
            </div>
          </div>
          <div className={cx("content-box")}>
            <div className={cx("icon")}>
              <FontAwesomeIcon icon={faPhoneVolume} />
            </div>
            <div className={cx("content")}>
              <h4>Medical Service</h4>
              <p>Improve people's health and better social</p>
            </div>
          </div>
        </Stack>
      </div>
    </div>
  );
}

export default Banner;
