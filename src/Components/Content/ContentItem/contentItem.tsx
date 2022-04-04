import React from "react";
import ContentItemLeft from "./contentItemLeft.tsx";
import ContentItemRight from "./contentItemRight.tsx";

const ContentItem = () => {
  return (
    <div className="wrapper">
      <div className="mainItem">
        <div className="mainItem__button"></div>
        <div className="mainItem__content">
          <ContentItemLeft />
          <ContentItemRight />
        </div>
      </div>
    </div>
  );
};

export default ContentItem;
