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
              <Card className={cx("cart")} sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={item.images}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.name}
                  </Typography>
                  <Typography
                    gutterBottom
                    sx={{ fontWeight: "bold" }}
                    variant="span"
                    component="div"
                  >
                    {numberWithCommas(item.price)}$
                  </Typography>
                </CardContent>
                <CardActions sx={{ margin: "0 auto", textAlign: "center" }}>
                  <Button
                    onClick={() => addProductCart(item)}
                    variant="contained"
                    size="small"
                  >
                    {/* <Link className="link" to="/cart"> */}
                    Add Cart
                    {/* </Link> */}
                  </Button>
                  <Link className={"link"} to={"/checkout"} >
                      <Button variant="outlined" size="small">
                          Buy Now
                      </Button>
                  </Link>
                </CardActions>
              </Card>
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
