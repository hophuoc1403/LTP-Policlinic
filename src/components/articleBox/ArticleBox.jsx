import { Box, Stack } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./articleBox.module.scss";
import { fetchFromAPI } from "../../utils/fetchFromApi";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function ArticleBox({ amount, treatment = false }) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // axios
    //   .get("http://localhost:8000/article")
    //   .then((res) => setArticles(res.data));

    fetchFromAPI("article").then((data) => setArticles(data));
  }, []);

  return (
    <Stack
      padding={2}
      direction={{ md: "row", xs: "column" }}
      justifyContent={"space-between"}
      gap={2.5}
      flexWrap={amount < articles.length ? { md: "wrap", sx: "wrap" } : "wrap"}
    >
      {articles.map((item, index) => {
        if (amount) {
          if (amount < articles.length) {
            if (index < amount) {
              return (
                <Box
                  key={index}
                  className={cx("article", { bg_custom: treatment })}
                  textAlign={"center"}
                  minWidth={{ sm: "200px", md: "250px" }}
                >
                  <Link className="link" to={`/article/${index + 1}`}>
                    <div className={cx("article-img")}>
                      <img className="card-img" src={item.image} alt="" />
                    </div>
                    <div className={cx("article-content")}>
                      <h3>{item.name}</h3>
                      <p>{item.sub}</p>
                    </div>
                  </Link>
                </Box>
              );
            }
          } else if (amount === articles.length) {
            return (
              <Box
                key={index}
                className={cx("article")}
                textAlign={"center"}
                minWidth={{ sm: "auto", md: "370px" }}
              >
                <Link className="link" to={`/article/${index + 1}`}>
                  <div className={cx("article-img")}>
                    <img className="card-img" src={item.image} alt="" />
                  </div>
                  <div className={cx("article-content")}>
                    <h3>{item.name}</h3>
                    <p>{item.sub}</p>
                  </div>
                </Link>
              </Box>
            );
          }
        } else return <Box>{item.name}</Box>;
        return "";
      })}
    </Stack>
  );
}

export default ArticleBox;
