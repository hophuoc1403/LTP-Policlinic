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

const cx = classNames.bind(styles);

function Cart() {
  const [medicine, setMedicine] = useState([]);

  const dispatch = useDispatch();
  const { currentAccount } = useContext(StoreContext);

  const addProductCart = (item) => {
    dispatch(addToCart({ product: item, userId: currentAccount.account.id }));
  };

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  useEffect(() => {
    fetchFromAPI("medicine").then((data) => setMedicine(data));
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
          {medicine.map((item) => (
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
                <CardActions>
                  <Button
                    onClick={() => addProductCart(item)}
                    variant="contained"
                    size="small"
                  >
                    {/* <Link className="link" to="/cart"> */}
                    Add Cart
                    {/* </Link> */}
                  </Button>
                  <Button variant="outlined" size="small">
                    Buy Now
                  </Button>
                </CardActions>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Cart;
