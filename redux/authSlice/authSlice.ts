import axiosInstance from "@/api/axios/axios";
import { endPoints } from "@/api/endPoints/endPoints";
import {
  ILoginResponse,
  IResgisterResponse,
  IOtpResponse,
  Otp,
  IUpdatePasswordResponse,
  UpdatePassword,
  LoginPayload,
  RegisterPayload,
  OtpPayload,
  OtpResponse,
} from "@/typeScript/auth.interface";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

import { Cookies } from "react-cookie";
const initialState = {
  islogin: false,
};

const cookies = new Cookies();
// managing the action state of registerForm with axios and endpoints//
export const registerForm = createAsyncThunk<
  IResgisterResponse,
  RegisterPayload,
  { rejectValue: { status: false; message: string } }
>("register", async (formData: RegisterPayload) => {
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
  LoginPayload,
  { rejectValue: { status: false; message: string } }
>("login", async (formData: LoginPayload) => {
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
  OtpResponse, // ✅ return type
  OtpPayload, // ✅ argument type
  { rejectValue: { status: false; message: string } }
>("otp", async (formdata: OtpPayload, thunkAPI) => {
  try {
    const res = await axiosInstance.post<OtpResponse>(
      endPoints.auth.otp,
      formdata
    );
    return res.data; // must match OtpResponse
  } catch (error: any) {
    return thunkAPI.rejectWithValue({
      status: false,
      message: error?.response?.data?.message || "Something went wrong",
    });
  }
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
  reducers: {
    check_token: (state, { payload }) => {
      let token = cookies.get("token");
      if (token !== null && token !== undefined) {
        state.islogin = true;
      }
    },
    handleLoggedout: (state, { payload }) => {
      console.log("hh");
      cookies.remove("token", {
        path: "/",
        secure: true,
        sameSite: "none",
      });
      state.islogin = false;
    },
  },
  extraReducers: (dev) => {
    dev
      .addCase(registerForm.pending, (state, { payload }) => {})
      .addCase(registerForm.fulfilled, (state, { payload }) => {
        if (payload.status === true) {
          toast.success(payload.message);
          state.islogin = true;
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
          cookies.set("token", payload.token, {
            path: "/",
            secure: true,
            sameSite: "none",
          });
          state.islogin = true;
          toast.success(payload.message);
        } else {
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

export const { handleLoggedout, check_token } = authSlice.actions;

export default authSlice;

//................//

// import axiosInstance from "@/api/axios/axios";
// import { endPoints } from "@/api/endPoints/endPoints";
// import {
//   ILoginResponse,
//   IResgisterResponse,
//   IOtpResponse,
//   Otp,
//   IUpdatePasswordResponse,
//   UpdatePassword,
//   LoginPayload,
//   RegisterPayload,
// } from "@/typeScript/auth.interface";
// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import toast from "react-hot-toast";
// import { Cookies } from "react-cookie";

// const cookies = new Cookies();

// const initialState = {
//   islogin: false,
//   user: null as null | { name?: string; email?: string; profilePic?: string },
//   error: null as null | string,
// };

// // ------------------- Register -------------------
// export const registerForm = createAsyncThunk<
//   IResgisterResponse,
//   RegisterPayload,
//   { rejectValue: { status: false; message: string } }
// >("register", async (formData: RegisterPayload) => {
//   let res = await axiosInstance.post<IResgisterResponse>(
//     endPoints.auth.register,
//     formData
//   );
//   return res.data;
// });

// // ------------------- Login -------------------
// export const login = createAsyncThunk<
//   ILoginResponse,
//   LoginPayload,
//   { rejectValue: { status: false; message: string } }
// >("login", async (formData: LoginPayload) => {
//   let res = await axiosInstance.post<ILoginResponse>(
//     endPoints.auth.login,
//     formData
//   );
//   return res.data;
// });

// // ------------------- OTP -------------------
// export const otp = createAsyncThunk<
//   IOtpResponse,
//   Otp,
//   { rejectValue: { status: false; message: string } }
// >("otp", async (formData: Otp) => {
//   let res = await axiosInstance.post<IOtpResponse>(
//     endPoints.auth.otp,
//     formData
//   );
//   return res.data;
// });

// // ------------------- Update Password -------------------
// export const updatepassword = createAsyncThunk<
//   IUpdatePasswordResponse,
//   UpdatePassword,
//   { rejectValue: { status: false; message: string } }
// >("updatepassword", async (formData: UpdatePassword) => {
//   let res = await axiosInstance.put<IUpdatePasswordResponse>(
//     endPoints.auth.updatePassword,
//     formData
//   );
//   return res.data;
// });

// // ------------------- Slice -------------------
// export const authSlice = createSlice({
//   name: "Authentication",
//   initialState,
//   reducers: {
//     check_token: (state) => {
//       let token = cookies.get("token");
//       if (token) {
//         state.islogin = true;
//       }
//     },
//     handleLoggedout: (state) => {
//       cookies.remove("token", {
//         path: "/",
//         secure: true,
//         sameSite: "none",
//       });
//       state.islogin = false;
//       state.user = null; // clear user info
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       // Register
//       .addCase(registerForm.fulfilled, (state, { payload }) => {
//         if (payload.status === true) {
//           toast.success(payload.message);
//           state.islogin = true;
//           state.user = payload.user || null;
//         } else {
//           toast.error(payload.message);
//         }
//       })
//       .addCase(registerForm.rejected, (state, action) => {
//         const errorMessage =
//           (action.payload as any)?.message ||
//           action.error.message ||
//           "Failed to register";
//         state.error = errorMessage;
//         toast.error(errorMessage);
//       })

//       // Login
//       .addCase(login.fulfilled, (state, { payload }) => {
//         if (payload.status === true) {
//           cookies.set("token", payload.token, {
//             path: "/",
//             secure: true,
//             sameSite: "none",
//           });
//           state.islogin = true;
//           state.user = payload.user || null; // 👈 store user
//           toast.success(payload.message);
//         } else {
//           toast.error("Email and Password Mismatched");
//         }
//       })

//       // OTP
//       .addCase(otp.fulfilled, (state, { payload }) => {
//         if (payload.status === true) {
//           toast.success(payload.message);
//         } else {
//           toast.error(payload.message);
//         }
//       })
//       .addCase(otp.rejected, (state, action) => {
//         const errorMessage =
//           (action.payload as any)?.message ||
//           action.error.message ||
//           "Failed to verify OTP";
//         state.error = errorMessage;
//         toast.error(errorMessage);
//       })

//       // Update Password
//       .addCase(updatepassword.fulfilled, (state, { payload }) => {
//         if (payload.status === true) {
//           toast.success(payload.message);
//         } else {
//           toast.error(payload.message);
//         }
//       });
//   },
// });

// export const { handleLoggedout, check_token } = authSlice.actions;

// export default authSlice.reducer;
