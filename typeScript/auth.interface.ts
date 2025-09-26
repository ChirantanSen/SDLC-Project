//......Register Start......//

import { BlobOptions } from "buffer";

//send data from Register //
export interface RegisterPayload {
  role: string;
  email: string;
  password: string;
  name: string;
  skills: string;
  bio: string;
  profilePic: File | null;
}

// Backend response
export interface registerResponse {
  message: string;
  payload: {
    status: boolean;
    _id: string;
    name: string;
    email: string;
    password: string;
    isVerified: boolean;
  };
}

// Form values from react-hook-form
export interface RegisterFormValues {
  role: string;
  email: string;
  password: string;
  name: string;
  skills: string;
  bio: string;
  profilePic: File | null;
}

export interface IResgisterResponse extends registerResponse {
  data: registerResponse;
}

//..........Login Start.......//
//..........send data from login ..................//

export interface LoginPayload {
  email: string;
  password: string;
}
interface loginResponse {
  message: string;
  status: boolean;
  user: {
    _id: string;
    email: string;
  };
  token: string;
}

export interface ILoginResponse extends loginResponse {
  data: loginResponse;
}

//....Verify email via OTP.....//
//.....send data from  Verify email.....//

// Request type
export interface OtpPayload {
  email: string;
  otp: string;
}

// Response type
export interface OtpResponse {
  status: boolean;
  message: string;
  data: any;
  user: any;
}

export interface OtpForm {
  otp1: string;
  otp2: string;
  otp3: string;
  otp4: string;
}

//..............................//

//................Upadate Password.....//

export interface UpdatePassword {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

interface UpadatePasswordPayLoad {
  status: Boolean;
  message: string;
}
export interface IUpdatePasswordResponse extends UpadatePasswordPayLoad {
  data: UpadatePasswordPayLoad;
}
