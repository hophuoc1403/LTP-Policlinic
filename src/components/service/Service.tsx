import React from "react";
import classNames from "classnames/bind";
import { useEffect } from "react";
import styles from "./service.module.scss";

import { ButtonBox, ServiceBox, whyChoose } from "../";
import { Box, Container, Stack } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMedal,
  faQuoteLeft,
  faStar,
  faTimeline,
  faUserDoctor,
} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Service() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className={cx("service")}>
      <div className={cx("banner")}>
        <h1>Service</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
          quam voluptate omnis quos cum corrupti optio ipsum labore ab provident
          voluptatibus, neque amet sit? Beatae vitae in sint voluptate voluptas.
        </p>
      </div>

      <Stack
        direction={{ md: "row", sm: "column" }}
        alignItems="center"
        className={cx("service_about")}
      >
        <Box
          sx={{ width: { md: "45%", sm: "100%" } }}
          className={cx("content", "container-fluid")}
        >
          <h5>About Service</h5>
          <h3>Where healing and technology come together.</h3>
          <p>
            Gravida magna felis luctus dui orci est nisl rhoncus nec nullam.
            Fames gravida aenean in aliquet vitae enim arcu vestibulum
            ultricies. Duis libero pulvinar at adipiscing congue ut lacus velit
            viverra.
          </p>
          <ButtonBox big content={"Discover More"} />
        </Box>
        <div className={cx("image")}>
          <img className="card-img" src="images/service-banner.png" alt="" />
        </div>
      </Stack>
      <ServiceBox />

      <Stack
        className={cx("whyChoose")}
        direction={{ xs: "column", md: "row" }}
        gap={5}
      >
        <Container>
          <Box className={cx("whyChoose-img")}>
            <img className="card-img-h" src={whyChoose} alt="" />
          </Box>
          <Box className={cx("whyChoose-content")}>
            <h5>Why Choose Us</h5>
            <h3>We are on the side of humanity</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis vel fugit perferendis, recusandae culpa sint facere
              sed sapiente ad debitis
            </p>
            <Box className={cx("whyChoose-content-box")}>
              <Stack direction={"row"} alignItems={"center"}>
                <Box className={cx("whyChoose-content-box-icon")}>
                  {" "}
                  <FontAwesomeIcon icon={faUserDoctor} />
                </Box>
                <Box>
                  <h4>Experience</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisi cing elit,
                    sed do eiusmod tempor incididunt ut abore et dolore magna
                  </p>
                </Box>
              </Stack>
              <Stack direction={"row"} alignItems="center">
                <Box className={cx("whyChoose-content-box-icon")}>
                  {" "}
                  <FontAwesomeIcon icon={faMedal} />
                </Box>
                <Box>
                  <h4>Prestigious</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisi cing elit,
                    sed do eiusmod tempor incididunt ut abore et dolore magna
                  </p>
                </Box>
              </Stack>
              <Stack direction={"row"} alignItems="center">
                <Box className={cx("whyChoose-content-box-icon")}>
                  {" "}
                  <FontAwesomeIcon icon={faTimeline} />
                </Box>
                <Box>
                  <h4>24/7 Support</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisi cing elit,
                    sed do eiusmod tempor incididunt ut abore et dolore magna
                  </p>
                </Box>
              </Stack>
            </Box>
          </Box>
        </Container>
      </Stack>

      <Container className={cx("patient")}>
        <h5>Patients Story</h5>
        <h3>Loved by our Patients</h3>

        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className={cx("patient-box")}>
              <div className={cx("quote")}>
                <FontAwesomeIcon icon={faQuoteLeft} />
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
                quae. Velit rerum quidem similique provident hic quia cupiditate
                optio non facilis quam laborum quibusdam, sunt sed accusamus
                porro placeat odio.
              </p>
              <div className={cx("star")}>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <div className={cx("user")}>
                <div className={cx("user-logo")}>
                  <img className="card-img" src="./images//lam.png" alt="" />
                </div>
                <h3>Mr. Ho Phuoc</h3>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className={cx("patient-box")}>
              <div className={cx("quote")}>
                <FontAwesomeIcon icon={faQuoteLeft} />
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
                quae. Velit rerum quidem similique provident hic quia cupiditate
                optio non facilis quam laborum quibusdam, sunt sed accusamus
                porro placeat odio.
              </p>
              <div className={cx("star")}>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <div className={cx("user")}>
                <div className={cx("user-logo")}>
                  <img className="card-img" src="./images//lam.png" alt="" />
                </div>
                <h3>Mr. Ho Phuoc</h3>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className={cx("patient-box")}>
              <div className={cx("quote")}>
                <FontAwesomeIcon icon={faQuoteLeft} />
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
                quae. Velit rerum quidem similique provident hic quia cupiditate
                optio non facilis quam laborum quibusdam, sunt sed accusamus
                porro placeat odio.
              </p>
              <div className={cx("star")}>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <div className={cx("user")}>
                <div className={cx("user-logo")}>
                  <img className="card-img" src="./images//lam.png" alt="" />
                </div>
                <h3>Mr. Ho Phuoc</h3>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Service;
