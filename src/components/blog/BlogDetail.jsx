import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchFromAPI } from "../../utils/fetchFromApi";
import classNames from "classnames/bind";
import styles from "./Blog.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";

const cx = classNames.bind(styles);

function BlogDetail() {
  const { id } = useParams();

  const [article, setArticle] = useState({});
  const [author, setAuthor] = useState({});

  const date = new Date();

  useEffect(() => {
    fetchFromAPI(`article/${id}`).then((data) => {
      setArticle(data);
      fetchFromAPI(`doctor/${data.doctor_id}`).then((data) => setAuthor(data));
    });
  }, [id]);

  return (
    <div className={cx("blog-detail")}>
      <div className={cx("banner")}>
        <p>Welcome to {author.name} channel</p>
      </div>

      <div className={cx("container")}>
        <div className="d-flex justify-content-around align-items-start flex-wrap">
          <div className={cx("content")}>
            <span className={cx("date")}>{date.toString()}</span>
            <h1>{article.name}</h1>
            <div className={cx("img")}>
              <img className="card-img" src={article.image} alt="" />
              <img
                className={cx("card-img", "author_img")}
                src={author.img}
                alt=""
              />
            </div>
            <p>{article.sub}</p>
            <p>
              Isn’t saw fill green open brought grass lights darkness doesn’t
              seas, stars tree void fowl god Replenish had third, make lights
              likeness years above night, creeping is divide let first may
              after. Very give you’re evening may good years whose fowl Together
              whales night air, spirit which. Whose creepeth can’t dry second
              and whales. Their herb winged.
            </p>
            <p>
              Kind fowl beginning, every man saying, so fish without replenish
              made won’t good, face i. Beginning. Which good Moving in without
              given won’t hath fish said, sea beast herb a waters to form
              creepeth our man open shall subdue. Him whose.
            </p>

            <div className={cx("share")}>
              <span>Share on : </span>
              <div>
                <FontAwesomeIcon className={cx("icon")} icon={faFacebook} />
                <FontAwesomeIcon className={cx("icon")} icon={faInstagram} />
              </div>
            </div>
          </div>

          <div className={cx("doctor-info")}>
            <div className={cx("card", "card-custom")}>
              <Link to={`/doctor/${author.id}`}>
                <div className={cx("card-custom-img")}>
                  <img
                    className={cx("card-img-top", "card-img-h")}
                    src={author.img}
                    alt="Card  cap"
                  />
                </div>
              </Link>
              <div className="card-body">
                <h5 className="card-title">{author.name}</h5>
                <p className="card-text">{author.position}</p>
                <hr />
                <div className="d-flex justify-content-around px-5">
                  <i>
                    <FontAwesomeIcon icon={faFacebook} />
                  </i>
                  <i>
                    {" "}
                    <FontAwesomeIcon icon={faTwitterSquare} />
                  </i>
                  <i>
                    {" "}
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogDetail;
