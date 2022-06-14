import Image from "next/image";
import { Button, Col, Container } from "react-bootstrap";
import Routings from "./Routings";
import { useRouter } from "next/router";
//images
import logo from "../public/cardSe_logo.png";
//css
import styles from "../styles/scss/Header.module.scss";

const Header = (props) => {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <>
      <div className={`${styles.header} ${props.sticky && styles.sticky}`}>
        <Container className={`py-3`}>
          <div className="d-flex justify-content-between align-items-center">
            <Image
              onClick={handleClick}
              alt="CardSe Logo"
              src={logo}
              width={170}
              height={60}
              className="cursor"
            />

            <div className="d-flex align-items-center">
              <Routings />
              <Button
                className={styles.download}
                as="a"
                href="https://play.google.com/store/apps/details?id=com.zup.merchant&hl=en_IN&gl=US"
                target="_blank"
              >
                Download
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;
