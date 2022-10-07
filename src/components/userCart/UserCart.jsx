import { useContext, useEffect } from "react";
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

  // console.log(dataRedux);

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const removeProduct = (productIndex) => {
    dispatch(removeCart({ productIndex, userId: currentAccount.account.id }));
    // console.log(dataRedux);
  };

  useEffect(() => {
    const data = JSON.parse(
      localStorage.getItem(`cart${currentAccount.account.id}`) || "[]"
    );
    setProducts(data);
  }, [currentAccount.account.id, dataRedux]);

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
                                src="http://lorempixel.com/output/technics-q-c-300-300-4.jpg"
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
                                  type="text"
                                  className={cx("qty")}
                                  placeholder="1"
                                />{" "}
                                x ${product.price}
                              </p>

                              <p className={cx("stockStatus")}> In Stock</p>
                            </div>

                            <div className={("prodTotal", "cartSection")}>
                              <p>$15.00</p>
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
                <li className="totalRow final">
                  <span className={cx("label")}>Total</span>
                  <span className={cx("value")}>$44.00</span>
                </li>
                <li className={cx("totalRow")}>
                  <a href="#3" className="btn continue">
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
