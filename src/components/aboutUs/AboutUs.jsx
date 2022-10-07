import styles from "./aboutUs.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGears,
  faGlasses,
  faHeartPulse,
  faQuoteLeft,
} from "@fortawesome/free-solid-svg-icons";
import { Box, Stack } from "@mui/system";
import { about1, lam, me, signature, tu, ButtonBox } from "../";
import { Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { fetchFromAPI } from "../../utils/fetchFromApi";
import {
  faFacebook,
  faLinkedinIn,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function AboutUs() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchFromAPI("doctor").then((data) => setDoctors(data));
  }, []);

  return (
    <div className={cx("about")}>
      <div className={cx("banner")}>
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
          quam voluptate omnis quos cum corrupti optio ipsum labore ab provident
          voluptatibus, neque amet sit? Beatae vitae in sint voluptate voluptas.
        </p>
      </div>
      <Stack
        marginBottom={"70px"}
        direction={{ sm: "column", md: "column", lg: "row" }}
        className={cx("doctor")}
        gap={{ md: 8, sm: 0 }}
        sx={{ background: "linear-gradient(250deg, #e3ebf4, #fff)" }}
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
          <h3>About Leadership.</h3>
          <h2>If you want to lift yourself up, lift up someone else.</h2>
          <p>
            Lectus himenaeos magnis pretium elementum litora odio diam. Sodales
            volutpat magnis blandit. Congue magna urna volutpat. Natoque laoreet
            maecenas orci placerat. Eleifend conubia odio dui quis tristique
            placerat. Netus etiam amet nostra est. Dolor hac purus ipsum dui.
          </p>
          <p>
            Venenatis odio penatibus tempor accumsan viverra feugiat vivamus.
            Maximus vulputate montes hac quisque suscipit. Lacinia sodales neque
            porta suscipit. Et quisque lacinia libero si litora. Tempor libero
            porta placerat. Felis penatibus dolor natoque lacinia dui laoreet
            leo. Quam turpis himenaeos velit mauris.
          </p>
        </Box>
      </Stack>

      <Stack
        alignItems={"center"}
        direction={{ md: "row", sm: "column" }}
        className={cx("history")}
        marginBottom={{ md: "130px", sm: "30px" }}
      >
        <div className={cx("quote")}>
          <div className={cx("icon")}>
            <FontAwesomeIcon icon={faQuoteLeft} />
          </div>
          <h3>
            “It is health that is the real wealth, and not pieces of gold and
            silver.”
          </h3>
          <p>– Mahatma Gandhi</p>
        </div>
        <Box
          className={cx("detail")}
          width={{ md: "80%", sm: "auto" }}
          sx={{
            transform: { md: "translateY(100px)", sm: "translateY(0)" },
          }}
        >
          <h5>Our History</h5>
          <h3>Progressively improving for a better world.</h3>
          <p>
            Dignissim a malesuada natoque scelerisque turpis urna accumsan.
            Senectus cras pretium adipiscing tristique a. Phasellus dictum
            commodo lorem mollis luctus. Ridiculus integer parturient placerat
            nunc taciti aenean nisl. Curae netus luctus pretium dictumst nibh a.
            Cubilia faucibus condimentum ac. Posuere praesent bibendum
            consectetur nulla est nunc. Auctor aenean accumsan adipiscing
            sagittis.
          </p>
          <p>
            Velit vel metus faucibus. Tristique tortor magnis ligula. Magna
            class eros id. Nascetur letius nam risus tempus donec mauris. Odio
            non integer vel massa et suscipit nostra.
          </p>
        </Box>
      </Stack>

      {/* service box */}
      <Box textAlign={"center"}>
        <p style={{ color: "var(--primary-color)", fontWeight: "500" }}>
          Our Value
        </p>
        <Typography variant="h4" component={"h3"} fontWeight="bold">
          Quality, safety, and security
        </Typography>
      </Box>

      <Container>
        <Stack
          direction={{ xs: "column", md: "row" }}
          gap={{ xs: 2, md: 5 }}
          marginTop={7}
        >
          <Box className={cx("service-box")} textAlign="center">
            <div className={cx("icon")}>
              <FontAwesomeIcon icon={faHeartPulse} />
            </div>
            <h4>Mission</h4>
            <p>
              Vel arcu tempus natoque consectetur pede phasellus magnis mattis
              letius consequat ullamcorper
            </p>

            <span>Learn more </span>
            <hr
              style={{ width: "80px", display: "block", margin: "10px auto" }}
            />
          </Box>
          <Box className={cx("service-box")} textAlign="center">
            <div className={cx("icon")}>
              <FontAwesomeIcon icon={faGlasses} />
            </div>
            <h4>Vision</h4>
            <p>
              Vel arcu tempus natoque consectetur pede phasellus magnis mattis
              letius consequat ullamcorper
            </p>

            <span>Learn more </span>
            <hr
              style={{ width: "80px", display: "block", margin: "10px auto" }}
            />
          </Box>
          <Box className={cx("service-box")} textAlign="center">
            <div className={cx("icon")}>
              <FontAwesomeIcon icon={faGears} />
            </div>
            <h4>Motto</h4>
            <p>
              Vel arcu tempus natoque consectetur pede phasellus magnis mattis
              letius consequat ullamcorper
            </p>

            <span>Learn more </span>
            <hr
              style={{ width: "80px", display: "block", margin: "10px auto" }}
            />
          </Box>
        </Stack>
      </Container>

      {/* messages from founder */}
      <Stack
        direction={{ md: "row", sm: "column" }}
        className={cx("founder")}
        justifyContent="center"
        alignItems={"center"}
      >
        <div className={cx("img")}>
          <img className="card-img" src={me} alt="" />
        </div>
        <Box>
          <h6>Message from Founder</h6>
          <h3>In the time of medical need, we are there to help.</h3>
          <Stack direction={{ md: "row", sm: "column" }} gap={{ md: 4, sm: 1 }}>
            <p>
              Mus nullam dis blandit metus. Suscipit duis class efficitur nam.
              Pharetra velit imperdiet fames senectus dis dictumst porta. Auctor
              phasellus placerat torquent ridiculus justo mus habitasse.
              Accumsan magna dictum malesuada leo elit. Orci fermentum maecenas
              hac purus mattis ex tempor. Est nisl nascetur duis.
            </p>
            <p>
              Potenti ridiculus eros nam nisl nunc. Tortor si felis lorem
              aliquet cras sit sagittis. Suscipit eros conubia tempus. Dictumst
              erat taciti ultricies potenti vitae. Fringilla eu vitae nostra
              vestibulum rhoncus himenaeos diam. Laoreet lacus neque felis.
            </p>
          </Stack>
          <img src={signature} alt="" />
          <h6>Founder & CEO</h6>
        </Box>
      </Stack>

      {/* doctor list */}
      <Box textAlign={"center"}>
        <p
          style={{
            color: "var(--primary-color)",
            fontWeight: "500",
            marginTop: "50px",
          }}
        >
          Meet Doctor
        </p>
        <Typography
          variant="h4"
          component={"h3"}
          marginBottom={5}
          fontWeight="bold"
        >
          Professional Doctors
        </Typography>
      </Box>
      <div className={cx("doctor-list")}>
        {/* <h6>Meet Doctor</h6>
        <h2>Professional Doctors</h2> */}
        <div className="container">
          <div className="row">
            {doctors.map((doctor) => {
              return (
                <div key={doctor.id} className="col-lg-4 col-md-6">
                  <div className={cx("card", "card-custom")}>
                    <Link to={`/doctor/${doctor.id}`}>
                      <div className={cx("card-custom-img")}>
                        <img
                          className={cx("card-img-top", "card-img-h")}
                          src={doctor.img}
                          alt="Card  cap"
                        />
                      </div>
                    </Link>
                    <div className="card-body">
                      <h5 className="card-title">{doctor.name}</h5>
                      <p className="card-text">{doctor.position}</p>
                      <hr />
                      <div className="d-flex justify-content-around px-5">
                        <i>
                          <FontAwesomeIcon icon={faFacebook} />
                        </i>
                        <i>
                          {" "}
                          <FontAwesomeIcon icon={faTwitterSquare} />
                        </i>
                        <i>
                          {" "}
                          <FontAwesomeIcon icon={faLinkedinIn} />
                        </i>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className={cx("join")}>
        <img src={about1} alt="" />
        <h3>You want to join our team?</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <ButtonBox big content={"Contact Us"} />
      </div>
    </div>
  );
}

export default AboutUs;
