import { register } from "module";
import { string } from "yup";

export interface ICategory {
  id: string;
  name: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  slug: string;
}

//...............create category................//
export interface ICreate {
  id: string;
  name: string;
}
interface ICreatePayload {
  id: string;
  status: string;
  message: string;
  data: {
    name: string;
    isDeleted: Boolean;
    _id: string;
    slug: string;
  };
}
export interface IcreateResponse extends ICreatePayload {
  data: ICreatePayload;
}
//.........................//