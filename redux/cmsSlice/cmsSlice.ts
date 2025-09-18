import axiosInstance from "@/api/axios/axios";
import { endPoints } from "@/api/endPoints/endPoints";
import { ICategory, ICreateList } from "@/typeScript/cms.interface";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

const initialState = {
  categoryListData: [{}],
};

//...........................Create Category ...........//

export const categoryList = createAsyncThunk<
  ICategory,
  { rejectValue: { status: false; message: string } }
>("category", async () => {
  let res = await axiosInstance.get<ICategory>(endPoints.cms.categoryList);
  let resData = res?.data;
  return resData;
});

//...........................Create List ...........//
export const categoryCreate = createAsyncThunk<
  ICreateList,
  { rejectValue: { status: false; message: string } }
>("category", async () => {
  let res = await axiosInstance.post<ICreateList>(endPoints.cms.categoryList);
  let resData = res?.data;
  return resData;
});

//.............................................................................................//

export const cmsSlice = createSlice({
  name: "Authentication",
  initialState,
  reducers: {},
  extraReducers: (dev) => {
    dev
      .addCase(categoryList.pending, (state, { payload }) => {})
      .addCase(categoryList.fulfilled, (state, { payload }) => {
        if (payload.status === true) {
          state.categoryListData = payload.data;
          toast.success(payload.message);
        } else {
          toast.error(payload.message);
        }
      })
      .addCase(categoryList.rejected, (state, action) => {});
  },
});

export const {} = cmsSlice.actions;
export default cmsSlice;
//........................................///
