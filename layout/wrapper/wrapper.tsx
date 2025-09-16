import Footer from "../footer/footer";
import Header from "../header/header";

const Wrapper: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header/>
      {children}
      <Footer/>
    </>
  );
};

export default Wrapper;