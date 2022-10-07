import classNames from "classnames/bind";
import styles from "./header.module.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { logo } from "../";
import {
  faBars,
  faCaretDown,
  faCartPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useRef, useState } from "react";
import autoAnimate from "@formkit/auto-animate";
import { ButtonBox } from "../";
import { StoreContext } from "../../GlobalState";
import { Avatar } from "@mui/material";

const cx = classNames.bind(styles);
const listMenu = [
  { name: "Home", href: "/" },
  { name: "About us", href: "about" },
  { name: "Service", href: "/service" },
  { name: "Contact", href: "/contact" },
  { name: "Drugs", href: "medicine" },
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

  const { currentAccount, setCurrentAccount } = useContext(StoreContext);
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
        <Link to={"/"}>
          <img
            onClick={() => getActiveMenu(0)}
            className="card-img-h"
            src={logo}
            alt=""
          />
        </Link>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
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
                  // last menu list
                  <div style={{ display: "flex" }}>
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
                        <div>
                          <span
                            onClick={() => {
                              setOpenMenuResponse(false);
                            }}
                          >
                            <Link to={"/faq"} className="link">
                              FAQ
                            </Link>
                          </span>
                        </div>
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
                          <Link to="/blog" className="link">
                            Blog
                          </Link>
                        </span>
                      </div>
                    </span>
                  </div>
                );
              } else {
                return (
                  <div
                    style={{ position: "relative" }}
                    className={cx("div_span")}
                  >
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
                    <div className={cx("line_under_header")}></div>
                  </div>
                );
              }
            })}
          </div>
        </div>
        {currentAccount.state === false ? (
          <Link to={"/login"} className="link">
            {" "}
            <ButtonBox big content={"Sign In"} />
          </Link>
        ) : (
          <div className={cx("user", "d-flex")}>
            <div className={cx("user-logo")}>
              <Avatar
                alt=""
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7yjqw5tzypfIAlOvMgrt8047s9uiuxqX9yw&usqp=CAU"
              />
              <span>{currentAccount.account.name}</span>
              <Link to={"/cart"} className="link">
                <span style={{ marginLeft: "10px" }}>
                  <FontAwesomeIcon icon={faCartPlus} />
                </span>
              </Link>
            </div>
            <ul className={cx("user-dropdown")}>
              <Link to={"/appointment"} className={"link"}>
                <li>Make appointment</li>
              </Link>
              <li>
                <Link className="link" to={"/patient"}>
                  Profile
                </Link>
              </li>
              <Link className={"link"} to={"/"}>
                <li
                  onClick={() =>
                    setCurrentAccount({ account: "", state: false })
                  }
                >
                  Log out
                </li>
              </Link>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
