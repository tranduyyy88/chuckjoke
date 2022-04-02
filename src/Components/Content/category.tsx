import React from "react";
import axios from "axios";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";

let color = [
  "#ED9C05",
  "#F71105",
  "#6E10E0",
  "#05B1F7",
  "#00F014",
  "#C7CFFE",
  "#FF4A08",
];

const Category = (props) => {
  const [categories, setCategories] = useState([]);
  const [categoriesActive, setCategoriesActive] = useState("");
  useEffect(() => {
    axios
      .get("https://api.chucknorris.io/jokes/categories")
      .then(function (response) {
        setCategories(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);
  const handleFilter = (index) => {
    const newDATA = [...props.tmpdata].filter(
      (item) =>
        JSON.stringify(item.categories)
          .replace('"', "")
          .replace('"', "")
          .replace("[", "")
          .replace("]", "") === index
    );
    props.tmpdata.map((item) => {
      if (
        JSON.stringify(item.categories)
          .replace('"', "")
          .replace('"', "")
          .replace("[", "")
          .replace("]", "") === index
      ) {
        setCategoriesActive(item.categories);
      }
    });
    props.setData(newDATA);
  };
  return (
    <React.Fragment>
      <ul className="nav_main">
        {categories.map((index, key) => {
          var item = color[Math.floor(Math.random() * color.length)];
          return (
            <li key={key}>
              <Button
                size={"large"}
                fullWidth
                onClick={() => handleFilter(index)}
                value={index}
                variant="contained"
                style={{ backgroundColor: item }}
              >
                {index}
              </Button>
            </li>
          );
        })}
      </ul>
      <div className={categoriesActive === "" ? "hide" : "categoriesActive"}>
        <div className="content">
          <p>{categoriesActive}</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Category;
