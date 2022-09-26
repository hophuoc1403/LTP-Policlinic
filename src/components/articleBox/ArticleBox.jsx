import { Box, Stack } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./articleBox.module.scss";
import { fetchFromAPI } from "../../utils/fetchFromApi";

const cx = classNames.bind(styles);

function ArticleBox({ amount }) {
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
      direction={{ md: "row", sm: "column" }}
      justifyContent={"center"}
      gap={3}
      flexWrap="wrap"
    >
      {articles.map((item, index) => {
        if (amount) {
          if (index < amount) {
            return (
              <Box
                key={index}
                className={cx("article")}
                textAlign={"center"}
                maxWidth={{ sm: "auto", md: "370px" }}
              >
                <div className={cx("article-img")}>
                  <img className="card-img" src={item.image} alt="" />
                </div>
                <div className={cx("article-content")}>
                  <h3>{item.name}</h3>
                  <p>{item.sub}</p>
                </div>
              </Box>
            );
          } else return "";
        } else return <Box>{item.name}</Box>;
      })}
    </Stack>
  );
}

export default ArticleBox;
