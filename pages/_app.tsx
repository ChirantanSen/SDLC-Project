// import "@/styles/globals.css";
// import type { AppProps } from "next/app";

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />;
// }


import type { AppProps } from "next/app";
import Footer from "@/layout/footer/footer";
import "@/styles/globals.css";
import Wrapper from "@/layout/wrapper/wrapper";
import { Provider } from "react-redux";
import { store } from "@/redux/store/store";
import NewsletterSection from "@/component/newsletter/newsletter";
import OurServices from "./cms/ourServices/ourServices";
import toast, { Toaster } from 'react-hot-toast';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
   <Provider store={store}>
     <Wrapper>
      <Component {...pageProps} />
      {/* <OurServices/> */}
      {/* <NewsletterSection/> */}
      {/* <Footer /> */}
      <Toaster/>
    </Wrapper>
   </Provider>
   
     
    </>
  );
}
