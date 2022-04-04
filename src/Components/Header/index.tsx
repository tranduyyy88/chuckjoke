import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { getPostSearch, getPost } from "../../Services/posts.services.ts";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const Header = (props) => {
  const [data, setData] = useState([]);
  const [dataSearch, setDataSearch] = useState([]);
  const [valuesSearch, setValuesSearch] = useState([]);
  const { register, handleSubmit } = useForm();
  const onSubmit = (value) => {
    getPostSearch(value.search)
      .then(function (response) {
        props.parentCallback(response.data.result);
        setData(response.data.result);
      })
      .catch(function (error) {})
      .then(function () {
        // always executed
      });
  };
  const handleSearch = (values) => {
    setValuesSearch(values);
    getPostSearch(values)
      .then(function (response) {
        setDataSearch(response.data.result);
      })
      .catch(function (error) {})
      .then(function () {
        // always executed
      });
  };

  return (
    <div className="Header">
      <ul className="Header__nav">
        <li>
          <Link to={"/"}>So Funktioniert's</Link>
        </li>
        <li>
          <Link to={"/"}>So Funktioniert's</Link>
        </li>
      </ul>
      <div className="Header__banner">
        <Typography variant="h2">The Joke Bible</Typography>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
        <div
          className={
            (dataSearch.length <= 8 && "Header__banner--form ") ||
            "Header__banner--form scroll"
          }
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <Search>
              <button type="submit">
                <SearchIcon />
              </button>
              <StyledInputBase
                fullWidth
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                {...register("search")}
                onChange={(e) => handleSearch(e.target.value)}
              />
            </Search>
          </form>

          <ul
            className={
              (valuesSearch.length === 0 && "formatResult hide") ||
              "formatResult"
            }
          >
            {dataSearch.length === 0 && (
              <li>
                <p>No Result</p>
              </li>
            )}
            {dataSearch.map((item, key) => {
              return (
                <li key={key}>
                  <Link
                    to={`/content/${item.id}`}
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <p>{item.value}</p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
