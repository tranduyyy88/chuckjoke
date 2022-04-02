import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import icon_right from "../../Assets/images/right.png";
import icon_down from "../../Assets/images/down.png";
const ContentList = (props) => {
  const [visible, setVisible] = useState(6);
  const loadMore = () => {
    setVisible((visible) => visible + 6);
  };

  console.log();

  return (
    <React.Fragment>
      <div className="main">
        {props.data.length === 0 && "No Post"}
        {props.data.slice(0, visible).map((item, key) => {
          return (
            <div key={key} className="fade-in main_Item">
              <div className="main_Item--content">
                <img src={item.icon_url} />
                <h2>{item.categories}</h2>
                <p>{item.value}</p>
                <Link
                  to={`/content/${item.id}`}
                  style={{
                    textDecoration: "none",
                    display: "flex",
                    justifyContent: "right",
                  }}
                >
                  <Button color="warning" variant="text">
                    <span>See Stats</span>
                    <img src={icon_right} />
                  </Button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      {visible < props.data.length && (
        <div className="button_Loadmore">
          <Button
            size="large"
            variant="outlined"
            onClick={loadMore}
            color="warning"
          >
            <span>View More</span>
            <img src={icon_down} />
          </Button>
        </div>
      )}
    </React.Fragment>
  );
};

export default ContentList;
