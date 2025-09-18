import axiosInstance from "@/api/axios/axios";
import { endPoints } from "@/api/endPoints/endPoints";
import {
  ILoginResponse,
  IResgisterResponse,
  LoginData,
  RegisterData,
  IOtpResponse,
  Otp,
  IUpdatePasswordResponse,
  UpdatePassword,
} from "@/typeScript/auth.interface";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
const initialState = {};

// managing the action state of registerForm with axios and endpoints//
export const registerForm = createAsyncThunk<
  IResgisterResponse,
  RegisterData,
  { rejectValue: { status: false; message: string } }
>("register", async (formData: RegisterData) => {
  let res = await axiosInstance.post<IResgisterResponse>(
    endPoints.auth.register,
    formData
  );
  let resData = res?.data;
  return resData;
});
// .................................Register end..........................//

// managing the action state of login with axios and endpoints//
export const login = createAsyncThunk<
  ILoginResponse,
  LoginData,
  { rejectValue: { status: false; message: string } }
>("login", async (formData: LoginData) => {
  let res = await axiosInstance.post<ILoginResponse>(
    endPoints.auth.login,
    formData
  );
  let resData = res?.data;
  return resData;
});
// .................................Login end..........................//

// managing the action state of otp with axios and endpoints//
export const otp = createAsyncThunk<
  IOtpResponse,
  Otp,
  { rejectValue: { status: false; message: string } }
>("otp", async (formdata: Otp) => {
  let res = await axiosInstance.post<IOtpResponse>(
    endPoints.auth.otp,
    formdata
  );
  let resData = res?.data;
  return resData;
});

//....................OTP END.......................//

export const updatepassword = createAsyncThunk<
  IUpdatePasswordResponse,
  UpdatePassword,
  { rejectValue: { status: false; message: string } }
>("updatepassword", async (formData: UpdatePassword) => {
  let res = await axiosInstance.put<IUpdatePasswordResponse>(
    endPoints.auth.updatePassword,
    formData
  );
  let resData = res?.data;
  return resData;
});

//................Update Password end.............//
export const authSlice = createSlice({
  name: "Authentication",
  initialState,
  reducers: {},
  extraReducers: (dev) => {
    dev
      .addCase(registerForm.pending, (state, { payload }) => {})
      .addCase(registerForm.fulfilled, (state, { payload }) => {
        if (payload.status === true) {
          toast.success(payload.message);
        } else {
          toast.error(payload.message);
        }
      })
      .addCase(registerForm.rejected, (state, action) => {
        const errorMessage =
          action.payload || action.error.message || "Failed to fetch users";

        state.error = errorMessage;
        toast.error(errorMessage);
      })

      .addCase(login.pending, (state, { payload }) => {})
      .addCase(login.fulfilled, (state, { payload }) => {
        if (payload.status === true) {
          toast.success(payload.message);
        }else {
          toast.error("Email and Password Mismatched");
        }
      })
      .addCase(login.rejected, (state, { payload }) => {})

      .addCase(otp.pending, (state, { payload }) => {})
      .addCase(otp.fulfilled, (state, { payload }) => {
        if (payload.status === true) {
          toast.success(payload.message);
        } else {
          toast.error(payload.message);
        }
      })
      .addCase(otp.rejected, (state, action) => {
        const errorMessage =
          action.payload || action.error.message || "Failed to fetch users";

        state.error = errorMessage;
        toast.error(errorMessage);
      })
      .addCase(updatepassword.pending, (state, { payload }) => {})
      .addCase(updatepassword.fulfilled, (state, { payload }) => {
        if (payload.status === true) {
          toast.success(payload.message);
        } else {
          toast.error(payload.message);
        }
      });
  },
});

export const {} = authSlice.actions;

export default authSlice;
