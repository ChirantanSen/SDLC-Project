import { categoryList } from "../../../redux/cmsSlice/cmsSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function CategoryList() {
  const { categoryListData } = useSelector((state) => state.Cms);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(categoryList());
  }, []);
  console.log(categoryListData, "categoryListData");

  return <></>;
}

export default CategoryList;
