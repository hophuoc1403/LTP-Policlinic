import {BookForm} from "../index";
import classNames from "classnames/bind";
import styles from "./AppointPage.module.scss"

const cx = classNames.bind(styles)

function AppointPage() {
  return <div className={cx("appoint")}>
    <div className={cx("appoint-box")}>
      <BookForm appointment />
    </div>
  </div>;
}

export default AppointPage;
