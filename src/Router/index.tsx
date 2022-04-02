import React from "react";
import { Routes, Route } from "react-router-dom";
import { PATH } from "../Constants/path.ts";
import Content from "./../Components/Content/content.tsx";
import ContentItem from "./../Components/Content/contentItem.tsx";
const Router = () => {
  return (
    <Routes>
      <Route path={PATH.HOME} element={<Content />} />
      <Route path={PATH.CONTENT_ITEM} element={<ContentItem />} />
    </Routes>
  );
};

export default Router;
