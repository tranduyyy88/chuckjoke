import React from "react";
import { useEffect, useState, useContext } from "react";
import Category from "./category.tsx";
import ContentList from "../Content/contentList.tsx";
import { MContext } from "../../App";
import { getPost } from "../../Services/posts.services.ts";
const Content = () => {
  const dataSearch = useContext(MContext);
  const [data, setData] = useState([]);
  const [tmpdata, setTmpData] = useState([]);

  useEffect(() => {
    setData(dataSearch);
  }, [dataSearch]);

  useEffect(() => {
    getPost()
      .then(function (response) {
        setData(response.data.result);
        setTmpData(response.data.result);
      })
      .catch(function (error) {
        // handle error
      })
      .then(function () {
        // always executed
      });
  }, []);

  return (
    <div className="wrapper">
      <Category tmpdata={tmpdata} setData={setData} />
      <ContentList data={data} />
    </div>
  );
};

export default Content;
