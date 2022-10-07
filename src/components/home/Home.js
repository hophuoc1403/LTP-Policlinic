import classNames from "classnames/bind";
import { Box, Stack } from "@mui/material";
import styles from "./home.module.scss";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faMedal,
  faPrescriptionBottleMedical,
  faStethoscope,
  faTimeline,
  faUserDoctor,
} from "@fortawesome/free-solid-svg-icons";
import useIsInViewport from "../../customeHooks/isInViewPort";
import { useRef } from "react";
import "aos/dist/aos.css";

import {
  Banner,
  about1,
  ServiceBox,
  aboutImg,
  about2,
  lam,
  tu,
  me,
  whyChoose,
  family,
  ButtonBox,
  ArticleBox,
} from "../";

const cx = classNames.bind(styles);

/* Call this function with a string containing the ID name to
 * the element containing the number you want to do a count animation on.*/

function Home() {
  const [raiseNum, setRaiseNum] = useState(0);
  const [raiseNum2, setRaiseNum2] = useState(0);

  const aboutUsRef = useRef(null);

  function incEltNbr(ref) {
    incNbrRec(0, Math.floor(Math.random() * (70 - 30) + 50), ref);
  }

  /*A recursive function to increase the number.*/
  function incNbrRec(i, endNbr, elt) {
    if (i <= endNbr) {
      elt(i);
      setTimeout(function () {
        //Delay a bit before calling the function again.
        incNbrRec(i + 1, endNbr, elt);
      }, 50);
    }
  }

  // useEffect(() => {
  //   incEltNbr(setRaiseNum);
  //   incEltNbr(setRaiseNum2);
  // }, []);

  let checkAppear = useIsInViewport(aboutUsRef);

  useEffect(() => {
    incEltNbr(setRaiseNum);
    incEltNbr(setRaiseNum2);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkAppear]);

  return (
    <div className="">
      <Banner />

      <Stack
        data-aos="fade-zoom-in"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
        gap={5}
        className={cx("about")}
        ref={aboutUsRef}
        sx={{
          marginInline: "10px",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <div className={cx("about-img")}>
          <img className="card-img" src={aboutImg} alt="" />
        </div>
        <Box
          sx={{ textAlign: { xs: "center", md: "start" } }}
          className={cx("about-content")}
        >
          <h6>About Us</h6>
          <h2>Dedicated to Hope, Healing, and Recovery.</h2>
          <p>
            Sodales ante facilisis natoque eros quisque suspendisse. Pretium sed
            sit habitasse cras ipsum fermentum. Dui semper mi gravida hac vel
            imperdiet luctus diam tempus.
          </p>

          <Stack justifyContent={"space-around"} direction={"row"}>
            <Stack
              direction={"row"}
              alignItems="center"
              // justifyContent={"space-around"}
              className={cx("about-content-last")}
            >
              <img src={about1} alt="" />
              <Box>
                <h4>
                  {raiseNum} <span>+</span>
                </h4>
                <span>Years Experienced</span>
              </Box>
            </Stack>
            <Stack
              direction={"row"}
              alignItems="center"
              // justifyContent={"space-around"}
              className={cx("about-content-last")}
            >
              <img src={about2} alt="" />
              <Box>
                <h4>
                  {raiseNum2} <span>+</span>
                </h4>
                <span>Years Experienced</span>
              </Box>
            </Stack>
          </Stack>
        </Box>
      </Stack>

      {/* // what we do */}

      <Box className={cx("responsible")}>
        <h6>What we do</h6>
        <h3>Believe in us, we won’t let you down</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
      </Box>

      <Stack
        data-aos="fade-zoom-in"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
        sx={{
          marginInline: "50px",
          marginTop: "-200px",
        }}
        direction={{ md: "column", lg: "row" }}
        justifyContent={"space-around"}
        gap={{ sm: 1, md: 8 }}
      >
        <div id={cx("experiment")}>
          <div className={cx("cube")}>
            <div className={cx("face", "front")}>
              <div className={cx("icon")}>
                <FontAwesomeIcon icon={faStethoscope} />
              </div>
              <h3>Medical Service</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
                adipisci esse distinctio officiis! Ut illo quae vel corrupti
                necessitatibus
              </p>
            </div>
            <div class={cx("face", "side")}>
              {" "}
              <h3 style={{ marginTop: "50px" }}>Medical Service</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
                adipisci esse distinctio officiis! Ut illo quae vel corrupti
                necessitatibus
              </p>
              <button>Learn More</button>
            </div>
          </div>
        </div>
        <div id={cx("experiment")}>
          <div className={cx("cube")}>
            <div className={cx("face", "front")}>
              <div className={cx("icon")}>
                <FontAwesomeIcon icon={faPrescriptionBottleMedical} />
              </div>
              <h3>Medical Service</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
                adipisci esse distinctio officiis! Ut illo quae vel corrupti
                necessitatibus
              </p>
            </div>
            <div class={cx("face", "side")}>
              {" "}
              <h3 style={{ marginTop: "50px" }}>Medical Service</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
                adipisci esse distinctio officiis! Ut illo quae vel corrupti
                necessitatibus
              </p>
              <button>Learn More</button>
            </div>
          </div>
        </div>
        <div id={cx("experiment")}>
          <div className={cx("cube")}>
            <div className={cx("face", "front")}>
              <div className={cx("icon")}>
                <FontAwesomeIcon icon={faUserDoctor} />
              </div>
              <h3>Medical Service</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
                adipisci esse distinctio officiis! Ut illo quae vel corrupti
                necessitatibus
              </p>
            </div>
            <div class={cx("face", "side")}>
              {" "}
              <h3 style={{ marginTop: "50px" }}>Medical Service</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
                adipisci esse distinctio officiis! Ut illo quae vel corrupti
                necessitatibus
              </p>
              <button>Learn More</button>
            </div>
          </div>
        </div>
      </Stack>

      {/* demo doctor */}
      <Stack
        data-aos="fade-zoom-in"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
        direction={{ sm: "column", md: "column", lg: "row" }}
        className={cx("doctor")}
      >
        <Box
          className={cx("doctor-logo")}
          sx={{ marginLeft: { sm: "80px", md: "50px" } }}
        >
          <img className={cx("picture-abs", "card-img")} src={lam} alt="" />
          <img className={cx("picture-abs", "card-img")} src={tu} alt="" />
          <img className={cx("picture", "card-img")} src={me} alt="" />
        </Box>
        <Box
          textAlign={"left"}
          sx={{ marginTop: { xs: "70px", md: "0" } }}
          className={cx("doctor-content")}
        >
          <h3>We are on the side of humanity.</h3>
          <p>
            Lectus himenaeos magnis pretium elementum litora odio diam. Sodales
            volutpat magnis blandit. Congue magna urna volutpat.{" "}
          </p>
          <Stack gap={2} direction={{ sm: "column", md: "row" }}>
            <Box className={cx("doctor-content-box")}>
              <h5>1. Diagnosis and Treatment</h5>
              <p>
                Gravida in fusce auctor conubia pretium efficitur massa vehicula
                senectus ex
              </p>
              <span>
                Learn more
                <FontAwesomeIcon
                  style={{ marginLeft: "10px" }}
                  icon={faArrowRight}
                />
              </span>
            </Box>
            <Box className={cx("doctor-content-box")}>
              <h5>2. Find a Doctor</h5>
              <p>
                Gravida in fusce auctor conubia pretium efficitur massa vehicula
                senectus ex
              </p>
              <span>
                Learn more
                <FontAwesomeIcon
                  style={{ marginLeft: "10px" }}
                  icon={faArrowRight}
                />
              </span>
            </Box>
          </Stack>
          <Stack gap={2} direction={{ sm: "column", md: "row" }}>
            <Box className={cx("doctor-content-box")}>
              <h5>3. Clinical Trials</h5>
              <p>
                Gravida in fusce auctor conubia pretium efficitur massa vehicula
                senectus ex
              </p>
              <span>
                Learn more
                <FontAwesomeIcon
                  style={{ marginLeft: "10px" }}
                  icon={faArrowRight}
                />
              </span>
            </Box>
            <Box className={cx("doctor-content-box")}>
              <h5>4. Make an Appointment</h5>
              <p>
                Gravida in fusce auctor conubia pretium efficitur massa vehicula
                senectus ex
              </p>
              <span>
                Learn more
                <FontAwesomeIcon
                  style={{ marginLeft: "10px" }}
                  icon={faArrowRight}
                />
              </span>
            </Box>
          </Stack>
        </Box>
      </Stack>

      <ServiceBox />

      <Stack
        className={cx("whyChoose")}
        direction={{ xs: "column", md: "row" }}
        gap={5}
      >
        <Box className={cx("whyChoose-img")}>
          <img className="card-img-h" src={whyChoose} alt="" />
        </Box>
        <Box className={cx("whyChoose-content")}>
          <h5>Why Choose Us</h5>
          <h3>We are on the side of humanity</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis vel fugit perferendis, recusandae culpa sint facere sed
            sapiente ad debitis
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
                  Lorem ipsum dolor sit amet, consectetur adipisi cing elit, sed
                  do eiusmod tempor incididunt ut abore et dolore magna
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
                  Lorem ipsum dolor sit amet, consectetur adipisi cing elit, sed
                  do eiusmod tempor incididunt ut abore et dolore magna
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
                  Lorem ipsum dolor sit amet, consectetur adipisi cing elit, sed
                  do eiusmod tempor incididunt ut abore et dolore magna
                </p>
              </Box>
            </Stack>
          </Box>
        </Box>
      </Stack>

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
      <div className={cx("article")}>
        <Stack padding={2} direction={"row"} justifyContent={"space-between"}>
          <h3>News & Article</h3>
          <ButtonBox small content={"View All Article"} />
        </Stack>
        <Stack>
          <ArticleBox amount={3} />
        </Stack>
      </div>
      <div
        className=""
        data-aos="fade-zoom-in"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
      ></div>
    </div>
  );
}

export default Home;
