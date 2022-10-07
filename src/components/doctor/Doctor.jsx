import styles from "./doctor.module.scss";
import classNames from "classnames/bind";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchFromAPI } from "../../utils/fetchFromApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBlenderPhone,
  faCheckCircle,
  faMailForward,
} from "@fortawesome/free-solid-svg-icons";
import { Stack } from "@mui/material";
import { faBuilding, faMessage } from "@fortawesome/free-regular-svg-icons";
import {
  faFacebook,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { BookForm, ArticleBox } from "../";

const cx = classNames.bind(styles);

function Doctor() {
  const [doctor, setDoctor] = useState({});

  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`doctor/${id}`).then((data) => setDoctor(data));
  }, [id]);
  console.log(doctor);

  return (
    <div className={cx("doctor")}>
      <div className={cx("banner")}>
        <div>
          <h1>{doctor.name}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
            quam voluptate omnis quos cum corrupti optio ipsum labore ab
            provident voluptatibus, neque amet sit? Beatae vitae in sint
            voluptate voluptas.
          </p>
        </div>
        <div className={cx("img")}>
          <img className="card-img-h" src={doctor.img} alt="doctor img" />
        </div>
      </div>

      <div className="container">
        <div className="row ">
          <div className="col-lg-7 ">
            <div className={cx("doctor-detail")}>
              <h3>About {doctor.name} </h3>
              <p>
                Magna tristique vulputate faucibus eget egestas elementum.
                Rhoncus in nec a. Iaculis dis tellus tincidunt penatibus id. Vel
                habitasse massa nulla sociosqu curabitur vitae. Eget hendrerit
                duis curae odio. Habitant venenatis dictum etiam ante. Dis
                mollis donec lacinia mi ridiculus. Platea aptent nullam dictumst
                felis.
              </p>
              <p>
                Tellus metus maximus tincidunt odio congue dictum. Etiam non
                curae diam vel lobortis dictumst. Dolor molestie dapibus
                natoque. Magna volutpat posuere montes dictum. Ornare dui
                posuere ultrices fermentum consectetuer. Donec feugiat semper
                mauris per etiam dolor in. Dictumst quam nulla eu posuere
                laoreet dui.
              </p>

              <hr />
              <h3>Department , Center And Programs</h3>
              <div className="d-flex align-items-center">
                <FontAwesomeIcon
                  style={{ color: "var(--primary-color)" }}
                  icon={faCheckCircle}
                />
                <span style={{ marginLeft: "15px" }}>Consectetur odio</span>
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
              <hr />
              <h3>Clinical Interests : </h3>
              <div className={cx("interest", "d-flex justify-content-start")}>
                <div className="">
                  <div className="d-flex align-items-center">
                    <FontAwesomeIcon
                      style={{ color: "var(--primary-color)" }}
                      icon={faCheckCircle}
                    />
                    <span style={{ marginLeft: "15px" }}>Consectetur odio</span>
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
                    <span style={{ marginLeft: "10px" }}>
                      Ultrices fermentum
                    </span>
                  </div>
                </div>
                <div className="">
                  <div className="d-flex align-items-center">
                    <FontAwesomeIcon
                      style={{ color: "var(--primary-color)" }}
                      icon={faCheckCircle}
                    />
                    <span style={{ marginLeft: "15px" }}>Consectetur odio</span>
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
                    <span style={{ marginLeft: "10px" }}>
                      Ultrices fermentum
                    </span>
                  </div>
                </div>
              </div>
              <h3>Treats:</h3>
              <div className="d-flex align-items-center">
                <FontAwesomeIcon
                  style={{ color: "var(--primary-color)" }}
                  icon={faCheckCircle}
                />
                <span style={{ marginLeft: "15px" }}>Adults and Kids</span>
              </div>
              <hr />
              <h3>Training & Credentials</h3>
              <Stack
                direction={{ md: "row", xs: "column" }}
                justifyContent={"space-between"}
                marginRight="30px"
              >
                <h4>Education</h4>
                <div>
                  <div className="d-flex align-items-center">
                    <FontAwesomeIcon
                      style={{ color: "var(--primary-color)" }}
                      icon={faCheckCircle}
                    />
                    <span style={{ marginLeft: "15px" }}>
                      Master of Consectetur odio
                    </span>
                  </div>
                  <div className="d-flex align-items-center">
                    <FontAwesomeIcon
                      style={{ color: "var(--primary-color)" }}
                      icon={faCheckCircle}
                    />
                    <span style={{ marginLeft: "15px" }}>
                      Master of Vulputate mus
                    </span>
                  </div>
                  <div className="d-flex align-items-center">
                    <FontAwesomeIcon
                      style={{ color: "var(--primary-color)" }}
                      icon={faCheckCircle}
                    />
                    <span style={{ marginLeft: "15px" }}>
                      Master of Ultrices fermentum
                    </span>
                  </div>
                </div>
              </Stack>
              <hr />
              <Stack
                direction={{ md: "row", xs: "column" }}
                justifyContent={"space-between"}
                marginRight="30px"
              >
                <h4>Certification</h4>
                <div style={{ width: "50%" }}>
                  <div className="d-flex align-items-center">
                    <FontAwesomeIcon
                      style={{ color: "var(--primary-color)" }}
                      icon={faCheckCircle}
                    />
                    <span style={{ marginLeft: "15px" }}>
                      Egestas blandit quis pharetra aliquet id euismod
                    </span>
                  </div>
                  <div className="d-flex align-items-center">
                    <FontAwesomeIcon
                      style={{ color: "var(--primary-color)" }}
                      icon={faCheckCircle}
                    />
                    <span style={{ marginLeft: "15px" }}>
                      Ut eleifend felis mollis metus lacinia ornare
                    </span>
                  </div>
                  <div className="d-flex align-items-center">
                    <FontAwesomeIcon
                      style={{ color: "var(--primary-color)" }}
                      icon={faCheckCircle}
                    />
                    <span style={{ marginLeft: "15px" }}>
                      Lacus blandit elit eleifend venenatis quisque pharetra
                    </span>
                  </div>
                </div>
              </Stack>
            </div>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-4 pt-sm-3">
            <div className={cx("contact")}>
              <h3>Contact Information</h3>
              <div className="d-flex align-items-center ">
                <FontAwesomeIcon icon={faBuilding} />
                <span>Phuoc Twins Towers</span>
              </div>
              <div className="d-flex align-items-center ">
                <FontAwesomeIcon icon={faBlenderPhone} />
                <span>+385.44.6528(+84)</span>
              </div>
              <div className="d-flex align-items-center ">
                <FontAwesomeIcon icon={faMailForward} />
                <span>anonymousbigtits102@gmail.com</span>
              </div>
              <div className="d-flex align-items-center ">
                <FontAwesomeIcon icon={faMessage} />
                <span>@hophuoc.converse</span>
              </div>
              <FontAwesomeIcon
                style={{ margin: "20px 15px 5px 0px", cursor: "pointer" }}
                icon={faFacebook}
              />
              <FontAwesomeIcon
                style={{ margin: "20px 15px 5px 0px", cursor: "pointer" }}
                icon={faLinkedinIn}
              />
              <FontAwesomeIcon
                style={{ margin: "20px 15px 5px 0px", cursor: "pointer" }}
                icon={faTwitter}
              />
            </div>
            <BookForm appointment />
          </div>
        </div>
      </div>
      <div className={cx("article")}>
        <h3>Article by {doctor.name}</h3>
        <ArticleBox amount={3} />
      </div>
    </div>
  );
}

export default Doctor;
