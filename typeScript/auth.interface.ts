//......Register Start......//
//send data from Register //
export interface RegisterData {
  id: string;
  name: string;
  email: string;
  password: string;
  role: string;
  skills: string[];
  bio: string;
  imagePath: File;
}
// received data//
interface registerPayload {
  status: boolean;
  message: string;
  data: {
    id: string;
    name: string;
    email: string;
    password: string;
    isVerfied: boolean;
  };
}

export interface IResgisterResponse extends registerPayload {
  data: registerPayload;
}

//..........Login Start.......//
//..........send data from login ..................//

export interface LoginData {
  id: string;
  email: string;
  password: string;
}
interface loginPayload {
  status: Boolean;
  message: string;
  user: {
    _id: string;
    email: string;
  };
  token: string;
}

export interface ILoginResponse extends loginPayload {
  data: loginPayload;
}



//....Verify email via OTP.....//
//.....send data from  Verify email.....//

export interface Otp {
  id: string;
  email: string;
  otp: string;
}

interface OtpPayload {
  status: Boolean;
  message: string;
}
export interface IOtpResponse extends OtpPayload {
  data: OtpPayload;
}
//..............................//

//................Upadate Password.....//

export interface UpdatePassword{
    currentPassword:string;
    newPassword:string;
    confirmPassword:string;
}

interface UpadatePasswordPayLoad{
    status: Boolean;
    message: string;
}
export interface IUpdatePasswordResponse extends UpadatePasswordPayLoad{
  data:UpadatePasswordPayLoad;
}
