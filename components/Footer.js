import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { useRouter } from "next/router";

//images
import logo from "../public/cardSe_logo.png";
import Playstore from "../public/googlePlay.png";

//css
import styles from "../styles/scss/Footer.module.scss";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Footer = () => {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push("/");
  };
  return (
    <>
      <Container className={styles.footer}>
        <Row>
          <Col md={4}>
            <Image
              onClick={handleClick}
              className="cursor"
              alt="CardSe Logo"
              src={logo}
              width={160}
              height={60}
            />
            <div className={styles.footInfo}>
              <h6>Brought to you by</h6>
              <strong>Zerone Microsystems Private Limited</strong>
              <h6>CIN: U72900DL2009PTC194966</h6>
              <ul className={`${styles.social} d-flex`}>
                <li>
                  <a
                    href="https://www.facebook.com/CardSeapp/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/cardse"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/channel/UCAliPrks0P2scIru4WDrwmg"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/cardseapp/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/CardSeapp"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </li>
              </ul>
            </div>
          </Col>
          <Col md={4}>
            <div className={styles.footerSection}>
              <h2>Useful Links</h2>
              <ul className={styles.footLink}>
                <li>
                  <Link href="/privacy">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/mspa">Master Services Payment Agreement</Link>
                </li>
                <li>
                  <Link href="/terms-conditions">T&C</Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col md={4}>
            <div className={styles.footerSection}>
              <h2>Download Now</h2>
              <a
                href="https://play.google.com/store/apps/details?id=com.zup.merchant&hl=en_IN&gl=US"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={Playstore}
                  width={213}
                  height={63}
                  alt="Playstore"
                />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
      <div className={styles.one}>
        <h2>One Nation One Payment</h2>
      </div>
      <h4 className={styles.copyright}>
        Copyright © 2022 Zerone Microsystems Private Limited. Made with{" "}
        <FontAwesomeIcon icon={faHeart} color="#ff5000" /> in India
      </h4>
    </>
  );
};

export default Footer;
