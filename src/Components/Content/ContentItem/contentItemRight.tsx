import React, { useState, useEffect } from "react";
import { getPost } from "../../../Services/posts.services.ts";
import { Link } from "react-router-dom";
const ContentItemRight = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getPost()
      .then(function (response) {
        setData(response.data.result);
      })
      .catch(function (error) {
        // handle error
      })
      .then(function () {
        // always executed
      });
  }, []);
  return (
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
  );
};

export default ContentItemRight;
