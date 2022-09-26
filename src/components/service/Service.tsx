import React from "react";
import classNames from "classnames/bind";
import { useEffect } from "react";
import styles from "./service.module.scss";

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
    </div>
  );
}

export default Service;
