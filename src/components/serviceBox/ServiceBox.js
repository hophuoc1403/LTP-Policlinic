import styles from "./serviceBox.module.scss";
import classNames from "classnames/bind";

import { background } from "../";
import { Box, Stack } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBrain,
  faChildren,
  faEye,
  faHeartPulse,
  faStethoscope,
  faTooth,
} from "@fortawesome/free-solid-svg-icons";

import { ButtonBox } from "../";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function ServiceBox() {
  return (
    <Box className={cx("service")} textAlign="center" padding={3}>
      <h5 style={{ color: "var(--primary-color)" }}>What We Offer</h5>
      <h2>Healing for a better world.</h2>

      <Stack
        direction={{ xs: "column", md: "row" }}
        gap={{ xs: 2, md: 5 }}
        marginTop={7}
      >
        <Box className={cx("service-box")} textAlign="center">
          <Link className="link" to={`/service/1`}>
            <div className={cx("icon")}>
              <FontAwesomeIcon icon={faHeartPulse} />
            </div>
            <h4>Cardiology</h4>
            <p>
              Vel arcu tempus natoque consectetur pede phasellus magnis mattis
              letius consequat ullamcorper
            </p>

            <span>Learn more </span>
            <hr
              style={{ width: "80px", display: "block", margin: "10px auto" }}
            />
          </Link>
        </Box>
        <Box className={cx("service-box")} textAlign="center">
          <Link className="link" to={`/service/2`}>
            <div className={cx("icon")}>
              <FontAwesomeIcon icon={faTooth} />
            </div>
            <h4>Dental</h4>
            <p>
              Vel arcu tempus natoque consectetur pede phasellus magnis mattis
              letius consequat ullamcorper
            </p>

            <span>Learn more </span>
            <hr
              style={{ width: "80px", display: "block", margin: "10px auto" }}
            />
          </Link>
        </Box>
        <Box className={cx("service-box")} textAlign="center">
          <Link className="link" to={`/service/3`}>
            <div className={cx("icon")}>
              <FontAwesomeIcon icon={faBrain} />
            </div>
            <h4>Neurology</h4>
            <p>
              Vel arcu tempus natoque consectetur pede phasellus magnis mattis
              letius consequat ullamcorper
            </p>

            <span>Learn more </span>
            <hr
              style={{ width: "80px", display: "block", margin: "10px auto" }}
            />
          </Link>
        </Box>
      </Stack>
      <Stack
        direction={{ xs: "column", md: "row" }}
        gap={{ xs: 2, md: 5 }}
        marginTop={7}
      >
        <Box className={cx("service-box")} textAlign="center">
          <Link className="link" to={`/service/4`}>
            <div className={cx("icon")}>
              <FontAwesomeIcon icon={faEye} />
            </div>
            <h4>Ophthalmologist</h4>
            <p>
              Vel arcu tempus natoque consectetur pede phasellus magnis mattis
              letius consequat ullamcorper
            </p>

            <span>Learn more </span>
            <hr
              style={{ width: "80px", display: "block", margin: "10px auto" }}
            />
          </Link>
        </Box>
        <Box className={cx("service-box")} textAlign="center">
          <Link className="link" to={`/service/5`}>
            <div className={cx("icon")}>
              <FontAwesomeIcon icon={faChildren} />
            </div>
            <h4>Pediatrician</h4>
            <p>
              Vel arcu tempus natoque consectetur pede phasellus magnis mattis
              letius consequat ullamcorper
            </p>

            <span>Learn more </span>
            <hr
              style={{ width: "80px", display: "block", margin: "10px auto" }}
            />
          </Link>
        </Box>
        <Box className={cx("service-box")} textAlign="center">
          <Link className="link" to={`/service/6`}>
            <div className={cx("icon")}>
              <FontAwesomeIcon icon={faStethoscope} />
            </div>
            <h4>Primary Care</h4>
            <p>
              Vel arcu tempus natoque consectetur pede phasellus magnis mattis
              letius consequat ullamcorper
            </p>

            <span>Learn more </span>
            <hr
              style={{ width: "80px", display: "block", margin: "10px auto" }}
            />
          </Link>
        </Box>
      </Stack>
    </Box>
  );
}

export default ServiceBox;
