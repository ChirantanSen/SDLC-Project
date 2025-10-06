import LandingPage from "@/pages/cms/landingPage/landingPage";
import { categoryList } from "@/redux/cmsSlice/cmsSlice";

export const endPoints = {
  auth: {
    login: "/auth/login",
    profile: "/auth/profile",
    register: "/auth/register",
    updatePassword: "/auth/update-password",
    reset: "/auth/reset-password-link",
    otp: "/auth/verify/email",
  },
  // crud:{
  //     create:'/api/post/create',
  //     list:'/api/post/list',
  //     update:'/api/post/update',
  //     detail:'/api/post',
  //     delete:'/api/delete',
  // }
  cms: {
    categoryList: "/category/list",
    categoryCreate: "/category/create",
    LandingPage: "/landingPage/landingpage",
  },
};
