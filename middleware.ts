// import { NextResponse } from "next/server";

// export function middleware(request: any) {
//   const token = request.cookies.get("token");
//   console.log(token, "token");
//   if (!token) {
//     console.log("Redirecting to /auth/login");
//     return NextResponse.redirect(new URL("/auth/login", request.url));
//   }

//   console.log("Token found, proceeding to next response");

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/auth/updatePassword/updatePassword"],
// };

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/auth/updatePassword/updatePassword","/cms/AboutUs/aboutUs","/cms/ourServices/ourServices"],
};
