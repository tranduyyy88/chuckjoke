import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { MContext } from "../../App";

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
  const context = useContext(MContext);
  const [data, setData] = useState([]);
  const { register, handleSubmit } = useForm();
  const onSubmit = (value) => {
    axios
      .get(
        `https://api.chucknorris.io/jokes/search?query=${value.search || "all"}`
      )
      .then(function (response) {
        props.parentCallback(response.data.result);
        setData(response.data.result);
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
            />
          </Search>
        </form>
      </div>
    </div>
  );
};

export default Header;
