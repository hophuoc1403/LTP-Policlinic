import {
  faArrowDown,
  faClock,
  faClockRotateLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Typography,
} from "@mui/material";
import styles from "./faq.module.scss";
import classNames from "classnames/bind";
import { Stack, width } from "@mui/system";

const cx = classNames.bind(styles);

function FAQ() {
  return (
    <div className={cx("faq")}>
      <div className={cx("banner")}>
        <h1>Frequently Asked Questions</h1>
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

      <div className={cx("faq_boxes")}>
        <h6>FAQ</h6>
        <h3>Most Popular Questions</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <Accordion className={cx("faq_box")}>
                <AccordionSummary
                  expandIcon={<FontAwesomeIcon icon={faArrowDown} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={cx("title")}>Accordion 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion className={cx("faq_box")}>
                <AccordionSummary
                  expandIcon={<FontAwesomeIcon icon={faArrowDown} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={cx("title")}>Accordion 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion className={cx("faq_box")}>
                <AccordionSummary
                  expandIcon={<FontAwesomeIcon icon={faArrowDown} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={cx("title")}>Accordion 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion className={cx("faq_box")}>
                <AccordionSummary
                  expandIcon={<FontAwesomeIcon icon={faArrowDown} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={cx("title")}>Accordion 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <Accordion className={cx("faq_box")}>
                <AccordionSummary
                  expandIcon={<FontAwesomeIcon icon={faArrowDown} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={cx("title")}>Accordion 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion className={cx("faq_box")}>
                <AccordionSummary
                  expandIcon={<FontAwesomeIcon icon={faArrowDown} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={cx("title")}>Accordion 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion className={cx("faq_box")}>
                <AccordionSummary
                  expandIcon={<FontAwesomeIcon icon={faArrowDown} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={cx("title")}>Accordion 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion className={cx("faq_box")}>
                <AccordionSummary
                  expandIcon={<FontAwesomeIcon icon={faArrowDown} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={cx("title")}>Accordion 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
