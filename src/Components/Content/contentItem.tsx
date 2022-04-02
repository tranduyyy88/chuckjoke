import React, { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import icon_like from "../../Assets/images/like.png";
import icon_dislike from "../../Assets/images/dislike.png";
import icon_next from "../../Assets/images/next.png";
import icon_prev from "../../Assets/images/prev.png";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ContentItem = () => {
  let navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [countLike, setCountLike] = useState(
    +localStorage.getItem("CountLike")
  );

  useEffect(() => {
    axios
      .get("https://api.chucknorris.io/jokes/search?query=all")
      .then(function (response) {
        setData(response.data.result);
      })
      .catch(function (error) {
        // handle error
      })
      .then(function () {
        // always executed
      });
  }, [id]);

  const handlePost = () => {
    axios
      .get("https://api.chucknorris.io/jokes/random")
      .then(function (response) {
        navigate(`/content/${response.data.id}`);
      })
      .catch(function (error) {
        // handle error
      })
      .then(function () {
        // always executed
      });
  };

  const [countDislike, setCountDislike] = useState(0);

  const handleLike = () => {
    setCountLike((countLike) => countLike + 1);
    localStorage.setItem("CountLike", countLike + 1);
  };
  const handleDisLike = () => {
    setCountDislike((countDislike) => countDislike + 1);
    localStorage.setItem("CountDislike", countDislike + 1);
  };

  return (
    <div className="wrapper">
      <div className="mainItem">
        <div className="mainItem__button"></div>
        <div className="mainItem__content">
          <div className="mainItem__content--left">
            {data.map((item, key) => {
              if (id == item.id) {
                return (
                  <div key={key} className="content--left__text">
                    <img src={item.icon_url} />
                    <h2>{item.categories}</h2>
                    <p>{item.value}</p>
                  </div>
                );
              }
            })}
            <div className="content--left__button">
              <div className="gr_Button">
                <div className="button_Left">
                  <Button
                    variant="contained"
                    color="success"
                    style={{
                      borderRadius: "50%",
                    }}
                    onClick={() => handleLike()}
                  >
                    <img src={icon_like} />
                  </Button>
                  <p>{localStorage.getItem("CountLike")}</p>
                </div>
                <div className="button_Right">
                  <Button
                    variant="contained"
                    color="error"
                    style={{
                      borderRadius: "50%",
                    }}
                    onClick={() => handleDisLike()}
                  >
                    <img src={icon_dislike} />
                  </Button>
                  <p>{localStorage.getItem("CountDislike")}</p>
                </div>
              </div>
              <div className="button_PrevNext">
                <Button
                  size="large"
                  variant="outlined"
                  color="warning"
                  onClick={() => handlePost()}
                >
                  <img src={icon_prev} />
                  <span>Prev</span>
                </Button>
                <Button
                  size="large"
                  variant="outlined"
                  color="warning"
                  onClick={() => handlePost()}
                >
                  <span>Next</span>
                  <img src={icon_next} />
                </Button>
              </div>
            </div>
          </div>
          <div className="mainItem__content--right">
            <ul>
              <li>
                <h2>Top 10</h2>
              </li>
              {data.slice(0, 10).map((item, key) => {
                return (
                  <li key={key}>
                    <Link to={`/content/${item.id}`}>{item.value}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentItem;
