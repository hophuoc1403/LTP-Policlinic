import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { fetchFromAPI } from "../../utils/fetchFromApi";
import styles from "./Cart.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/userReducer";
import { useContext } from "react";
import { StoreContext } from "../../GlobalState";
import { toast } from "react-toastify";
import Sweetpagination from "sweetpagination";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartPlus, faInfo} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Cart() {
  const [medicine, setMedicine] = useState([]);
  const [currentPageData, setCurrentPageData] = useState(medicine);
  const notify = () =>
    toast.success("🦄 go to your cart and check now!", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const dispatch = useDispatch();
  const { currentAccount } = useContext(StoreContext);

  const addProductCart = (item) => {
    dispatch(addToCart({ product: item, userId: currentAccount.account.id }));
    notify();
  };

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  useEffect(() => {
    fetchFromAPI("medicine").then((data) => setMedicine(data));
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className={cx("banner")}>
        <h1>Medicines</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
          quam voluptate omnis quos cum corrupti optio ipsum labore ab provident
          voluptatibus, neque amet sit? Beatae vitae in sint voluptate voluptas.
        </p>
      </div>
      <div className="container ">
        <h1 style={{ textAlign: "center", marginBlock: "30px" }}>
          Medicines recommend for you
        </h1>

        <div className="row pt-5">
          {currentPageData.map((item) => (
            <div className="col-lg-4 col-md-6 col-sm-12">
                <div className={cx("wrapper")}>
                    <div className={cx("container")}>
                        <div className={cx("top")}>
                            <img className={"card-img-h"} src={item.images} alt="" />
                        </div>
                        <div className={cx("bottom")}>
                            <div className={cx("left")}>
                                <div className={cx("details")}>
                                    <h1>{item.name}</h1>
                                    <p>${numberWithCommas(item.price)}</p>
                                </div>
                                <div className={cx("buy")}><FontAwesomeIcon className={cx("material-icons")} icon={faCartPlus} /></div>
                            </div>
                            <div className={cx("right")}>
                                <div className={cx("done")}><i className={cx("material-icons")}>done</i></div>
                                <div className={cx("details")}>
                                    <h1>Chair</h1>
                                    <p>Added to your cart</p>
                                </div>
                                <div className={cx("remove")}><i className={cx("material-icons")}>clear</i></div>
                            </div>
                        </div>
                    </div>
                    <div className={cx("inside")}>
                        <div className={cx("icon")}><FontAwesomeIcon className={cx("material-icons")} icon={faInfo} /></div>
                        <div className={cx("contents")}>
                            <table>
                                <tr>
                                    <th>Ingredients</th>
                                    <th>affect</th>
                                </tr>
                                <tr>
                                    <td>paracetamol </td>
                                    <td>normal</td>
                                </tr>
                                <tr>
                                    <td>ascorbic</td>
                                    <td>immune system</td>
                                </tr>
                                <tr>
                                    <td>atorvastatin</td>
                                    <td>digest system</td>
                                </tr>


                            </table>
                        </div>
                    </div>
                </div>
            </div>
          ))}
        </div>
      </div>
      <Sweetpagination
        currentPageData={setCurrentPageData}
        getData={medicine}
        dataPerPage={6}
        navigation={true}
      />

    </>
  );
}

export default Cart;
