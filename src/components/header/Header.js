import classNames from "classnames/bind";
import styles from "./header.module.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { logo } from "../";
import { faBars, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import autoAnimate from "@formkit/auto-animate";

const cx = classNames.bind(styles);
const listMenu = [
  { name: "Home", href: "/" },
  { name: "About us", href: "about" },
  { name: "Service", href: "/service" },
  { name: "Contact", href: "/contact" },
  { name: "Blog", href: "blog" },
];

function useOutsideAlerter(ref, hide) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        hide(false);
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, hide]);
}

function Header() {
  const [activeMenu, setActiveMenu] = useState(0);
  const [check, setCheck] = useState(false);
  const [openMenuResponse, setOpenMenuResponse] = useState(false);

  const menuRef = useRef();

  const parent = useRef(null);

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  useOutsideAlerter(menuRef, setOpenMenuResponse);

  const getActiveMenu = (indexMenu) => {
    setActiveMenu(indexMenu);
  };

  useEffect(() => {
    setInterval(() => {
      if (window.innerWidth < 1000) {
        setCheck(true);
      } else if (window.innerWidth > 1000) {
        setOpenMenuResponse(false);
        setCheck(false);
      }
    }, 1000);
  }, []);

  return (
    <div className={cx("header")}>
      <div className={cx("logo")}>
        <img className="card-img-h" src={logo} alt="" />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div className={cx("menu")}>
          <FontAwesomeIcon
            icon={faBars}
            onClick={() => setOpenMenuResponse(!openMenuResponse)}
            className={cx(
              { "menu-disappear": check === false },
              "menu_response"
            )}
          />
          <div
            className={cx(
              "menu_appear",
              { "menu-disappear": check },
              { menu_res_appear: openMenuResponse }
            )}
            ref={menuRef}
          >
            {listMenu.map((item, index) => {
              if (index === listMenu.length - 1) {
                return (
                  <span
                    ref={parent}
                    style={{ display: "flex", alignItems: "center" }}
                    key={index}
                    onClick={() => getActiveMenu(index)}
                    className={cx({ active_menu: activeMenu === index })}
                  >
                    {item.name}{" "}
                    <FontAwesomeIcon
                      style={{ marginLeft: "5px" }}
                      icon={faCaretDown}
                    />
                    <div className={cx("sub_menu")}>
                      <span
                        onClick={() => {
                          setOpenMenuResponse(false);
                        }}
                      >
                        <Link to={"/faq"} className="link">
                          FAQ
                        </Link>
                      </span>
                      <span
                        onClick={() => {
                          setOpenMenuResponse(false);
                        }}
                      >
                        <Link to={"/feedback"} className="link">
                          Feedback
                        </Link>
                      </span>
                      <span
                        onClick={() => {
                          setOpenMenuResponse(false);
                        }}
                      >
                        <Link to="/tips" className="link">
                          Healthy Tips
                        </Link>
                      </span>
                    </div>
                  </span>
                );
              } else {
                return (
                  <span
                    key={index}
                    onClick={() => {
                      getActiveMenu(index);
                      setOpenMenuResponse(false);
                    }}
                    className={cx({ active_menu: activeMenu === index })}
                  >
                    <Link to={`${item.href}`} className="link">
                      {item.name}
                    </Link>
                  </span>
                );
              }
            })}
          </div>
        </div>
        <div className={cx("appointment")}>
          <button>Book Appointment</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
