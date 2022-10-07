import {
  faClock,
  faClockRotateLeft,
  faLocation,
  faMailBulk,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Container, Stack } from "@mui/system";
import classNames from "classnames/bind";
import { aboutImg, BookForm } from "..";
import styles from "./contact.module.scss";

const cx = classNames.bind(styles);

function Contact() {
  return (
    <div className={cx("contact")}>
      <div className={cx("banner")}>
        <h1>Contact Us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
          quam voluptate omnis quos cum corrupti optio ipsum labore ab provident
          voluptatibus, neque amet sit? Beatae vitae in sint voluptate voluptas.
        </p>
      </div>
      <div className={cx("container", "faq-fline")}>
        <div className={cx("row ")}>
          <div className="col-lg-4 col-md-12 col-sm-12">
            <div className="mb-md-5">
              <h5>Get in Touch</h5>
              <h3>How we can help you?</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,
                quas facere tempore non fugiat vel facilis. Odio necessitatibus
                error, ipsa exercitationem alias iste? Sint illo,
              </p>
            </div>
          </div>
          <div className={cx("col-lg-4 col-md-6 col-sm-12 ")}>
            <div className={cx("mb-sm-5", "office")}>
              <h6>Office Hour</h6>
              <div className="d-flex align-items-center">
                <FontAwesomeIcon className={cx("icon")} icon={faClock} />
                <p>
                  Monday - Thursday <br /> <span>(07.00 AM - 05.00 PM)</span>
                </p>
              </div>
              <div className="d-flex align-items-center">
                <FontAwesomeIcon className={cx("icon")} icon={faClock} />
                <p>
                  Friday - Saturday <br /> <span>(07.00 AM - 03.00 PM)</span>
                </p>
              </div>
              <div className="d-flex align-items-center">
                <FontAwesomeIcon className={cx("icon")} icon={faClock} />
                <p>
                  Sunday <br /> <span>Close</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
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
          </div>
        </div>
      </div>
      <img
        style={{ height: "500px" }}
        className="card-img"
        src={aboutImg}
        alt=""
      />
      <Container>
        <Stack direction={{ md: "row", sm: "column" }}>
          <Box
            className={cx("visit")}
            sx={{ width: { md: "40%", sm: "100%" } }}
          >
            <h5>Visit Us</h5>
            <h3>Need More Information</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>

            <Stack className={cx("location")} direction={"row"}>
              <FontAwesomeIcon className={cx("icon")} icon={faLocation} />
              <p>
                Location <br />{" "}
                <span>Jln Cempaka Wangi No 22, Jakarta - Indonesia</span>
              </p>
            </Stack>
            <Stack className={cx("location")} direction={"row"}>
              <FontAwesomeIcon className={cx("icon")} icon={faMailBulk} />
              <p>
                Email Us
                <br /> <span>anonymous@gmail.com</span>
              </p>
            </Stack>
          </Box>
          <Box marginTop={{ md: "-100px", sm: "20px" }} sx={{ flexGrow: "1" }}>
            <BookForm contact />
          </Box>
        </Stack>
      </Container>
      <iframe
        style={{ width: "98vw", height: "400px", marginTop: "40px" }}
        title="myFrame"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.85130270834!2d105.84345621391392!3d20.998596894185507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac719ab89935%3A0xfe232e08b5ca8e09!2zTmcuIDg0IFAuIFRy4bqnbiDEkOG6oWkgTmdoxKlhLCDEkOG7k25nIFTDom0sIEhhaSBCw6AgVHLGsG5nLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1664361668875!5m2!1svi!2s"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Contact;
