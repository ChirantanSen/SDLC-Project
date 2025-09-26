import Footer from "../footer/footer";
import Header from "../header/header";

interface MyComponentProps {
  children: Function;
}
const Wrapper: React.FC<MyComponentProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Wrapper;
