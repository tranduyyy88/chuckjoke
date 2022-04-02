import { Link, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <Typography variant="h4">Got Jokes? get paid for submitting</Typography>
        <Link top="/">Submit</Link>
      </div>
    </div>
  );
};

export default Footer;
