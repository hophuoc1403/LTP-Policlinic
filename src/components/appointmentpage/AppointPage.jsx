import {BookForm} from "../index";
import classNames from "classnames/bind";
import styles from "./AppointPage.module.scss"
import {useEffect} from "react";

const cx = classNames.bind(styles)

function AppointPage() {

  useEffect(() => {
    window.scrollTo(0,0)
  }, []);


  return <div className={cx("appoint")}>

    <h1>Make Your Appointment</h1>
    <div className={cx("appoint-box")}>
      <BookForm page appointment />
    </div>
  </div>;
}

export default AppointPage;
