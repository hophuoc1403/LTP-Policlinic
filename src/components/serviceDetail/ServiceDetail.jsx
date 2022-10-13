import { useParams } from "react-router-dom";
import styles from "./serviceDetail.module.scss";
import classNames from "classnames/bind";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faClockRotateLeft,
} from "@fortawesome/free-solid-svg-icons";
import { BookForm, ArticleBox, family, ButtonBox } from "../";
import { Box } from "@mui/system";
import { Stack } from "@mui/material";

const cx = classNames.bind(styles);

const serviceList = [
  {
    name: "Cardiology",
    describe:
      "Class nisi consequat tellus venenatis finibus interdum feugiat. Quisque ligula bibendum lacus amet nunc ultricies vitae. Facilisi nulla letius justo. Non malesuada dis rhoncus vehicula habitant ante.",
  },
  {
    name: "Dental",
    describe:
      "Class nisi consequat tellus venenatis finibus interdum feugiat. Quisque ligula bibendum lacus amet nunc ultricies vitae. Facilisi nulla letius justo. Non malesuada dis rhoncus vehicula habitant ante.",
  },
  {
    name: "Neurology",
    describe:
      "Class nisi consequat tellus venenatis finibus interdum feugiat. Quisque ligula bibendum lacus amet nunc ultricies vitae. Facilisi nulla letius justo. Non malesuada dis rhoncus vehicula habitant ante.",
  },
  {
    name: "Ophthalmologist",
    describe:
      "Class nisi consequat tellus venenatis finibus interdum feugiat. Quisque ligula bibendum lacus amet nunc ultricies vitae. Facilisi nulla letius justo. Non malesuada dis rhoncus vehicula habitant ante.",
  },
  {
    name: "Obstetrician",
    describe:
      "Class nisi consequat tellus venenatis finibus interdum feugiat. Quisque ligula bibendum lacus amet nunc ultricies vitae. Facilisi nulla letius justo. Non malesuada dis rhoncus vehicula habitant ante.",
  },
  {
    name: "Pediatrician",
    describe:
      "Class nisi consequat tellus venenatis finibus interdum feugiat. Quisque ligula bibendum lacus amet nunc ultricies vitae. Facilisi nulla letius justo. Non malesuada dis rhoncus vehicula habitant ante.",
  },
];

function ServiceDetail() {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className={cx("serviceDetail")}>
      <div className={cx("banner")}>
        <h1>{serviceList[id - 1].name}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
          quam voluptate omnis quos cum corrupti optio ipsum labore ab provident
          voluptatibus, neque amet sit? Beatae vitae in sint voluptate voluptas.
        </p>
      </div>

      <hr />

      <div className="container-fluid mt-3">
        <div className="row">
          <div className="col-lg-7 col-md-7 col-sm-12">
            <div className={cx("detail-left")}>
              <img
                className="card-img"
                src="https://demo.moxcreative.com/mediscare/wp-content/uploads/sites/51/2021/07/consultations-with-doctors-and-portrait-of-female-doctor-e1625293300719.jpg"
                alt=""
              />
              <h4>Description</h4>
              <p>{serviceList[id - 1].describe}</p>
              <p>
                Natoque sodales elementum inceptos consequat. Litora tellus
                torquent nibh parturient velit posuere. Si curabitur ad ac non
                dis nostra. Potenti ipsum diam vivamus. Scelerisque magna id
                dictum.
              </p>
              <div className={cx("details_sub")}>
                <h4>Conditions Treated</h4>
                <div className="d-flex align-items-center">
                  <FontAwesomeIcon
                    style={{ color: "var(--primary-color)" }}
                    icon={faCheckCircle}
                  />
                  <span style={{ marginLeft: "10px" }}>Consectetur odio</span>
                </div>
                <div className="d-flex align-items-center">
                  <FontAwesomeIcon
                    style={{ color: "var(--primary-color)" }}
                    icon={faCheckCircle}
                  />
                  <span style={{ marginLeft: "10px" }}>Vulputate mus</span>
                </div>
                <div className="d-flex align-items-center">
                  <FontAwesomeIcon
                    style={{ color: "var(--primary-color)" }}
                    icon={faCheckCircle}
                  />
                  <span style={{ marginLeft: "10px" }}>Ultrices fermentum</span>
                </div>
                <div className="d-flex align-items-center">
                  <FontAwesomeIcon
                    style={{ color: "var(--primary-color)" }}
                    icon={faCheckCircle}
                  />
                  <span style={{ marginLeft: "10px" }}>
                    Tristique parturient condimentum
                  </span>
                </div>
                <h4>Tests and Treatments Offered</h4>
                <div className="d-flex align-items-center">
                  <FontAwesomeIcon
                    style={{ color: "var(--primary-color)" }}
                    icon={faCheckCircle}
                  />
                  <span style={{ marginLeft: "10px" }}>Consectetur odio</span>
                </div>
                <div className="d-flex align-items-center">
                  <FontAwesomeIcon
                    style={{ color: "var(--primary-color)" }}
                    icon={faCheckCircle}
                  />
                  <span style={{ marginLeft: "10px" }}>Vulputate mus</span>
                </div>
                <div className="d-flex align-items-center">
                  <FontAwesomeIcon
                    style={{ color: "var(--primary-color)" }}
                    icon={faCheckCircle}
                  />
                  <span style={{ marginLeft: "10px" }}>Ultrices fermentum</span>
                </div>
                <div className="d-flex align-items-center">
                  <FontAwesomeIcon
                    style={{ color: "var(--primary-color)" }}
                    icon={faCheckCircle}
                  />
                  <span style={{ marginLeft: "10px" }}>
                    Tristique parturient condimentum
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-12">
            <div className={cx("emergency")}>
              <h3>Emergency</h3>
              <div className="d-flex align-items-center justify-content-center">
                <FontAwesomeIcon
                  style={{ color: "var(--primary-color)", fontSize: "30px" }}
                  icon={faClockRotateLeft}
                />
                <div className="">
                  <p>24 Hour Ready</p>
                  <p>Call Us for Emergency</p>
                </div>
              </div>
              <div className="line-break"></div>
              <strong>+146.002</strong>
              <p>(Free Toll)</p>
            </div>
            <BookForm appointment />
          </div>
        </div>
      </div>
      <div className={cx("howWork")}>
        <h6>How It Works</h6>
        <h3>Procedure and Process Treatment</h3>
        <ArticleBox treatment={true} amount={4} />
      </div>
      <Stack
        direction={{ sm: "column", md: "row", xl: "row" }}
        className={cx("family")}
        overflow="hidden"
        sx={{ pb: { xs: "10px", md: "60px" } }}
      >
        <Box
          className={cx("family-img")}
          sx={{ ml: { sm: "auto", md: "30px" } }}
        >
          <img className="card-img" src={family} alt="" />
        </Box>
        <Box
          sx={{
            transform: {
              xs: "unset",
              md: "translateX(-70px) translateY(100px);",
            },
            width: { sm: "90vw", md: "max-content" },
          }}
          className={cx("family-content")}
        >
          <h3>Patient & Family Resources</h3>
          <p>
            Donec litora sollicitudin erat arcu sociosqu hac. Porta orci dapibus
            dignissim ullamcorper ligula aliquam molestie rutrum ultricies
            semper lectus. Quis sem sit et orci nec lobortis dignissim maecenas.
            Class bibendum cubilia tempus tincidunt metus dictumst.
          </p>
          <ButtonBox big content={"View full story"} />
        </Box>
      </Stack>
    </div>
  );
}

export default ServiceDetail;
