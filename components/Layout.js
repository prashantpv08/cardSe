import Footer from "./Footer";
import Header from "./Header";

export const Layout = (props) => {
  return (
    <>
      <Header sticky={props.headClass} />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};
