

// import type { AppProps } from "next/app";
// import Footer from "@/layout/footer/footer";
// import "@/styles/globals.css";
// import Wrapper from "@/layout/wrapper/wrapper";
// import { Provider } from "react-redux";
// import { store } from "@/redux/store/store";
// import NewsletterSection from "@/component/newsletter/newsletter";
// import OurServices from "./cms/ourServices/ourServices";
// import { Toaster } from "react-hot-toast";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import ChatBot from "@/component/chatBot/chat";
// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { check_token } from "@/redux/authSlice/authSlice";

// function TokenChecker() {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(check_token());
//   }, [dispatch]);

//   return null; // nothing to render
// }

// export default function App({ Component, pageProps }: AppProps) {
//   return (
//     <Provider store={store}>
//       <Wrapper>
//         <TokenChecker /> {/* 🔹 Token check runs here */}
//         <Component {...pageProps} />
//         <ChatBot />
//         <Toaster />
//       </Wrapper>
//     </Provider>
//   );
// }

//.............................................//

import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next"; // ✅ import HOC
import Footer from "@/layout/footer/footer";
import "@/styles/globals.css";
import Wrapper from "@/layout/wrapper/wrapper";
import { Provider } from "react-redux";
import { store } from "@/redux/store/store";
import NewsletterSection from "@/component/newsletter/newsletter";
import OurServices from "./cms/ourServices/ourServices";
import { Toaster } from "react-hot-toast";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ChatBot from "@/component/chatBot/chat";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { check_token } from "@/redux/authSlice/authSlice";

function TokenChecker() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(check_token());
  }, [dispatch]);

  return null;
}

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Wrapper>
        <TokenChecker />
        <Component {...pageProps} />
        <ChatBot />
        <Toaster />
      </Wrapper>
    </Provider>
  );
}

// ✅ export wrapped App without changing its name
export default appWithTranslation(App);
