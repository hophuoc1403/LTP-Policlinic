import { useContext, useEffect, useRef } from "react";
import { StoreContext } from "../../GlobalState";
import styles from "./UserCart.module.scss";
import classNames from "classnames/bind";
import createMixins from "@mui/material/styles/createMixins";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeCart } from "../../redux/userReducer";

const cx = classNames.bind(styles);

function UserCart() {
  const { currentAccount } = useContext(StoreContext);
  const [products, setProducts] = useState([]);
  const dataRedux = useSelector((state) => state.productCart);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState({});
  const [total, setTotal] = useState(0);

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const removeProduct = (productIndex) => {
    dispatch(removeCart({ productIndex, userId: currentAccount.account.id }));
  };

  const getTotal = (products, currentAmount) => {
    let total_check = 0;
    for (let key in products) {
      if (currentAmount) {
        total_check += currentAccount * products[key].price;
        continue;
      }
      if (amount[key]) {
        total_check += +amount[key] * +products[key].price;
      } else {
        total_check += +products[key].price;
      }
    }
    setTotal(total_check);
  };

  useEffect(() => {
    const data = JSON.parse(
      localStorage.getItem(`cart${currentAccount.account.id}`) || "[]"
    );
    setProducts(data);
    getTotal(data);
  }, [currentAccount.account.id, dataRedux, amount]);

  const getAmount = (e, currentAmount) => {
    setAmount((prev) => ({ ...prev, [e.target.name]: +e.target.value }));
    getTotal(products);
  };

  // console.log(products);
  return (
    <div>
      {currentAccount.state ? (
        <div className="">
          <div className={cx("wrap", "cf")}>
            <h1 className={cx("projTitle")}>
              Responsive Table<span>-Less</span> Shopping Cart
            </h1>
            <div className={cx("heading", "cf")}>
              <h1>My Cart</h1>
              <a href="#1" className={cx("continue")}>
                Continue Shopping
              </a>
            </div>
            <div className={cx("cart")}>
              {/* <!--    <ul className="tableHead">
      <li className="prodHeader">Product</li>
      <li>Quantity</li>
      <li>Total</li>
       <li>Remove</li>
    </ul>--> */}
              <ul className={cx("cartWrap")}>
                {products.length >= 1 ? (
                  <>
                    {" "}
                    {products.map((product, index) => {
                      return (
                        <li className={cx("items", "odd")}>
                          <div className={cx("infoWrap")}>
                            <div className={cx("cartSection")}>
                              <img
                                src={product.images}
                                alt=""
                                className={cx("itemImg")}
                              />
                              <p className={cx("itemNumber")}>
                                #QUE-007544-002
                              </p>
                              <h3>{product.name}</h3>

                              <p>
                                {" "}
                                <input
                                  type="tex"
                                  name={index}
                                  className={cx("qty")}
                                  placeholder="1"
                                  width={"200px !important"}
                                  defaultValue={1}
                                  onChange={(e) => getAmount(e)}
                                />{" "}
                                x ${numberWithCommas(product.price)}
                              </p>

                              <p className={cx("stockStatus")}> In Stock</p>
                            </div>

                            <div className={("prodTotal", "cartSection")}>
                              <p>
                                $
                                {amount[index]
                                  ? numberWithCommas(
                                      +product.price * +amount[index]
                                    )
                                  : numberWithCommas(product.price)}
                              </p>
                            </div>
                            <div className={cx("cartSection", "removeWrap")}>
                              <strong
                                onClick={() => removeProduct(index)}
                                href="#2"
                                className={cx("remove")}
                              >
                                x
                              </strong>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </>
                ) : (
                  <p>no Product to show</p>
                )}
              </ul>
            </div>

            <div className={cx("promoCode")}>
              <label htmlFor="promo">Have A Promo Code?</label>
              <input type="text" name="promo" placeholder="Enter Code" />
              <a href="#5" className={cx("btn")}>
                aksda
              </a>
            </div>

            <div className={cx("subtotal", "cf")}>
              <ul>
                <li className={cx("totalRow")}>
                  <span className={cx("label")}>Subtotal</span>
                  <span className={cx("value")}>$35.00</span>
                </li>

                <li className={cx("totalRow")}>
                  <span className={cx("label")}>Shipping</span>
                  <span className={cx("value")}>$5.00</span>
                </li>

                <li className={cx("totalRow")}>
                  <span className={cx("label")}>Tax</span>
                  <span className={cx("value")}>$4.00</span>
                </li>
                <li className={cx("totalRow", "final")}>
                  <span className={cx("label")}>Total</span>
                  <span className={cx("value")}>
                    ${numberWithCommas(total)}
                  </span>
                </li>
                <li className={cx("totalRow")}>
                  <a href="#3" className={cx("btn", "continue")}>
                    Checkout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <strong>
          <p style={{ textAlign: "center", fontSize: "25px" }}>
            Please sign in to use your cart
          </p>
        </strong>
      )}
    </div>
  );
}

export default UserCart;
