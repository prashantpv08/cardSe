import Head from "next/head";
import Image from "next/image";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudArrowDown,
  faFileSignature,
  faSackDollar,
  faCartShopping,
  faAddressCard,
  faLock,
  faHandHoldingDollar,
} from "@fortawesome/free-solid-svg-icons";
import CountUp from "react-countup";
import { useRouter } from "next/router";
import Media from "../components/Media";

//images
import Banner from "../public/banner.png";
import Playstore from "../public/googlePlay.png";
import How from "../public/howitworks.png";
import Hf from "../public/hf.png";
import Payment from "../public/payment/amex.png";
import Payment1 from "../public/payment/bhimupi.png";
import Payment2 from "../public/payment/dhani.jpeg";
import Payment3 from "../public/payment/gpay.png";
import Payment6 from "../public/payment/mastercard.png";
import Payment7 from "../public/payment/onecard.png";
import Payment8 from "../public/payment/paytm.png";
import Payment9 from "../public/payment/phonepe.png";
import Payment10 from "../public/payment/rupay.png";
import Payment11 from "../public/payment/slice.png";
import Payment12 from "../public/payment/visa.png";
import Award from "../public/award/award1.png";
import Award2 from "../public/award/award2.png";
import Award3 from "../public/award/award3.png";
import Award4 from "../public/award/award4.png";
import Award5 from "../public/award/award5.png";
import Award6 from "../public/award/award6.png";
import Search from "../public/options/search.png";
import Bulb from "../public/options/bulb.png";
import Hand from "../public/options/hand.png";
import Seo from "../public/options/seo.png";
import Pencil from "../public/options/pencil.png";
import Support from "../public/options/support.png";
import Card from "../public/card.svg";
import Scan from "../public/scan.svg";
import Qr from "../public/qr.svg";
import SFA from "../public/sfa.png";
import InvestorLogoOne from "../public/investors/logo1.png";
import InvestorLogoTwo from "../public/investors/logo2.png";
import InvestorLogoThree from "../public/investors/logo3.png";
import PartnerOne from "../public/client/npci.png";
import PartnerTwo from "../public/client/apolo.png";
import PartnerThree from "../public/client/aug.png";
import PartnerFour from "../public/client/jana.png";
import PartnerFive from "../public/client/vehicleCare.png";
import Feedback from "../public/feedback.png";
import News from "../public/newspartner.png";

//css
import styles from "../styles/scss/Home.module.scss";
import Slider from "react-slick/lib/slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: false,
  arrows: false,
  lazyLoad: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  initialSlide: 5,
  autoplay: true,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
};

const settingsAwards = {
  dots: false,
  arrows: false,
  lazyLoad: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 4,
  autoplay: true,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
};

const investSettings = {
  dots: false,
  arrows: false,
  lazyLoad: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 2,
  initialSlide: 2,
  autoplay: true,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
};

const HomePage = () => {
  const router = useRouter();
  const redirect = () => {
    router.push("/faqs");
  };

  return (
    <>
      <Head>
        <title>Home - CardSe</title>
      </Head>
      <Container>
        <div className={`${styles.banner}`}>
          <Row className="align-items-center">
            <Col md={5}>
              <div className={styles.banText}>
                <h2>Accept Card Payments on your Phone</h2>
                <h5>
                  Join our network of over 250k merchants who are <br /> using
                  CardSe SoftPOS
                </h5>
                <span>
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
                </span>
              </div>
            </Col>
            <Col md={7} className="text-center">
              <span className={styles.banImg}>
                <Image src={Banner} width={506} height={650} alt="Banner" />
              </span>
            </Col>
            <svg className="arrows">
              <path className="a1" d="M0 0 L30 32 L60 0"></path>
              <path className="a2" d="M0 20 L30 52 L60 20"></path>
              <path className="a3" d="M0 40 L30 72 L60 40"></path>
            </svg>
          </Row>
        </div>
        <div className={styles.howitworks}>
          <h2>
            How It <span>Works?</span>
          </h2>
          <h4>
            Use your smartphone to collect Credit Card, Debit Card & QR payments
            – <br /> replaces a POS machine
          </h4>
          <Row className="align-items-center">
            <Col md={6}>
              <span>
                <Image src={How} width={540} height={646} alt="How it works" />
              </span>
            </Col>
            <Col md={6}>
              <ul className={styles.list}>
                <li className="d-flex">
                  <span>
                    <FontAwesomeIcon icon={faCloudArrowDown} fontSize="45" />
                  </span>
                  <div>
                    <h3>Download CardSe App </h3>
                    <p>
                      As merchant, Download your Payment Terminal to your phone
                    </p>
                  </div>
                </li>
                <li className="d-flex">
                  <span>
                    <FontAwesomeIcon icon={faFileSignature} fontSize="45" />
                  </span>
                  <div>
                    <h3>Complete your KYC </h3>
                    <p>
                      Enter KYC Details & Bank account where money is to be
                      received
                    </p>
                  </div>
                </li>
                <li className="d-flex">
                  <span>
                    <FontAwesomeIcon icon={faSackDollar} fontSize="45" />
                  </span>
                  <div>
                    <h3>Start collecting payments </h3>
                    <p>
                      Collect Payments from regular credit cards, debit cards,
                      prepaid cards, Dhani, Sliceit, One Card & UPI such as
                      Gpay, PhonePe and PayTM
                    </p>
                  </div>
                </li>
              </ul>
            </Col>
          </Row>
        </div>
        <div className={`${styles.accept} px-2 px-md-0`}>
          <h2>
            <span>We</span> Accept
          </h2>
          <Slider {...settings} className={styles.slider}>
            <div className={styles.img}>
              <Image src={Payment} alt="" width={150} height={50} />
            </div>
            <div className={styles.img}>
              <Image src={Payment1} alt="" width={275} height={77} />
            </div>
            <div className={styles.img}>
              <Image src={Payment2} alt="" width={365} height={138} />
            </div>
            <div className={styles.img}>
              <Image src={Payment3} alt="" width={160} height={85} />
            </div>

            <div className={styles.img}>
              <Image src={Payment6} alt="" width={108} height={85} />
            </div>
            <div className={styles.img}>
              <Image src={Payment7} alt="" width={200} height={200} />
            </div>
            <div className={styles.img}>
              <Image src={Payment8} alt="" width={150} height={50} />
            </div>
            <div className={styles.img}>
              <Image src={Payment9} alt="" width={187} height={68} />
            </div>
            <div className={styles.img}>
              <Image src={Payment10} alt="" width={154} height={41} />
            </div>
            <div className={styles.img}>
              <Image src={Payment11} alt="" width={411} height={123} />
            </div>
            <div className={styles.img}>
              <Image src={Payment12} alt="" width={114} height={37} />
            </div>
          </Slider>
        </div>
      </Container>
      <div className={styles.explore}>
        <Container>
          <Row className="align-items-center">
            <Col md={7}>
              <h2>
                Explore Multiple Payment Options to accept Card and QR Code
                Payments
              </h2>
              <p>Digital Receipts & Transaction Books</p>
            </Col>
            <Col md={5}>
              <Image src={Hf} alt="" width={658} height={737} />
            </Col>
          </Row>
        </Container>
      </div>
      <Container className={`${styles.options} text-center px-2 px-md-0`}>
        <h2>Payment Options</h2>
        <ul className={`${styles.payOption} d-grid justify-content-between`}>
          <li>
            <span>
              <Image src={Card} alt="" width={50} height={50} />
            </span>
            <h4>Tap and Pay </h4>
            <p>
              Use WiFI/NFC enabled Card. Press the Card on the back of the
              phone.
            </p>
          </li>
          <li>
            <span>
              <Image src={Scan} alt="" width={50} height={50} />
            </span>
            <h4>Scan and Pay </h4>
            <p>
              Scan Card using Phone&apos;s Camera to initiate the card payment.
              Works with all Non WIFI/NFC Cards
            </p>
          </li>
          <li>
            <span>
              <Image src={Qr} alt="" width={50} height={50} />
            </span>
            <h4>QR Code Payments </h4>
            <p>
              Collect payment by scanning the QR Code using any UPI based App
            </p>
          </li>
        </ul>
      </Container>
      <div className={styles.why}>
        <Container>
          <h2>Why Choose Us</h2>
          <Col md={7}>
            <ul className={styles.whylist}>
              <li>
                <FontAwesomeIcon icon={faCartShopping} fontSize="40" />
                <div>
                  <h4>No Hardware Needed</h4>
                  <p>
                    Use your phone to accept all Debit, Credit, Prepaid Card and
                    UPI Payments
                  </p>
                </div>
              </li>
              <li>
                <FontAwesomeIcon icon={faAddressCard} fontSize="40" />
                <div>
                  <h4>Simplified digital KYC </h4>
                  <p>Quick start in 2 minutes</p>
                </div>
              </li>
              <li>
                <FontAwesomeIcon icon={faLock} fontSize="40" />
                <div>
                  <h4>Secure at heart </h4>
                  <p>PCI DSS Compliant with all security norms of India</p>
                </div>
              </li>
              <li>
                <FontAwesomeIcon icon={faHandHoldingDollar} fontSize="40" />
                <div>
                  <h4>Easy access to Credit </h4>
                  <p>Based on transaction history</p>
                </div>
              </li>
            </ul>
          </Col>
        </Container>
      </div>
      <div className={`${styles.awards} px-2 px-md-0`}>
        <h2>Awards</h2>
        <Slider {...settingsAwards} className={styles.slider}>
          <div className={styles.img}>
            <Image src={Award} alt="" />
          </div>
          <div className={styles.img}>
            <Image src={Award2} alt="" />
          </div>
          <div className={styles.img}>
            <Image src={Award3} alt="" />
          </div>
          <div className={styles.img}>
            <Image src={Award4} alt="" />
          </div>
          <div className={styles.img}>
            <Image src={Award5} alt="" />
          </div>
          <div className={styles.img}>
            <Image src={Award6} alt="" />
          </div>
        </Slider>
      </div>
      <div className={styles.milestone}>
        <Container>
          <h2>
            <span>Key</span> Milestones
          </h2>
          <Row>
            <Col lg={4}>
              <div className={styles.box}>
                <CountUp end={250000} />
                <span>+</span>
                <h4>TRUSTED MERCHANTS</h4>
                <p>
                  Digital payment solutions for a Billion Indians. 13700% growth
                  in transactions in one year
                </p>
              </div>
            </Col>
            <Col lg={4}>
              <div className={styles.box}>
                <CountUp end={15000} />
                <h4>PINCODES</h4>
                <p>
                  We are one of the leading SOftPOS network in the country
                  present from Ladakh to Nagaland to Andaman & Nicobar islands.
                </p>
              </div>
            </Col>
            <Col lg={4}>
              <div className={styles.box}>
                <CountUp end={2} />
                <h4>COUNTRIES</h4>
                <p>
                  We have a subsidiary in Singapore: Zerone Microsystems Pte
                  Ltd.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        <ul className={`${styles.points} d-grid`}>
          <li>
            <div>
              <Image src={Search} alt="" />
              <p>EASY RECON</p>
            </div>
          </li>
          <li>
            <div>
              <Image src={Bulb} alt="" />
              <p>SECURE</p>
            </div>
          </li>
          <li>
            <div>
              <Image src={Hand} alt="" />
              <p>EASY TO USE</p>
            </div>
          </li>
          <li>
            <div>
              <Image src={Seo} alt="" />
              <p>BUSINESS FRIENDLY</p>
            </div>
          </li>
          <li>
            <div>
              <Image src={Pencil} alt="" />
              <p>INTUITIVE DESIGN</p>
            </div>
          </li>
          <li>
            <div>
              <Image src={Support} alt="" />
              <p>EXCELLENT SUPPORT</p>
            </div>
          </li>
        </ul>
        <Container>
          <Image
            src={SFA}
            width={376}
            height={118}
            alt=""
            className={styles.sfa}
          />
        </Container>
      </div>

      <Container>
        <Row className={styles.about}>
          <Col md={4}>
            <div className={styles.aboutBox}>
              <h2>MERCHANTS</h2>
              <h6>Join the CardSe family</h6>
              <p>
                Transform how you accept payments. Boasts of over 250000+
                merchants and is expanding rapidly
              </p>
            </div>
          </Col>
          <Col md={4}>
            <div className={`${styles.aboutBox} ${styles.red}`}>
              <h2>START-UPS</h2>
              <h6>White Label Solutions</h6>
              <p>
                Use our SDK to natively enable payments acceptance in your App.
                Also get access to our various payment APIs
              </p>
            </div>
          </Col>
          <Col md={4}>
            <div className={styles.aboutBox}>
              <h2>MARKET OUTREACH</h2>
              <h6>Push your products to merchants</h6>
              <p>
                Use our merchant App platform , push your product through
                network of merchants
              </p>
            </div>
          </Col>
        </Row>

        <Row className={styles.mediacoverage}>
          <Media home />
          <Button
            className={styles.readMore}
            onClick={() => router.push("/media")}
          >
            Read More
          </Button>
        </Row>

        <Row className={`${styles.media} px-2 px-md-0`}>
          <h2>
            <span>Investors &</span> Incubators
          </h2>
          <Slider {...investSettings} className={styles.slider}>
            <div className={styles.img}>
              <Image src={InvestorLogoOne} alt="" width={333} height={124} />
            </div>
            <div className={styles.img}>
              <Image src={InvestorLogoTwo} alt="" width={333} height={81} />
            </div>
            <div className={styles.img}>
              <Image src={InvestorLogoThree} alt="" width={218} height={82} />
            </div>
          </Slider>
        </Row>

        <Row className={`${styles.reviews} text-center`}>
          <h2 className="px-2 px-md-0">Merchant Reviews</h2>
          <Col md={4}>
            <div className={styles.reviewBox}>
              <p>
                Superb App. It provides me full transparency of my Business,
                with so many features to boost up my Business. I&apos;m happy
                Merchant of CardSe app.
              </p>
              <div className={styles.reviewerInfo}></div>
            </div>
          </Col>
          <Col md={4}>
            <div className={`${styles.reviewBox}`}>
              <p>
                Nice app for my interior design store , easy to use and simple
                to use and best app for payment acceptance.
              </p>
            </div>
          </Col>
          <Col md={4}>
            <div className={styles.reviewBox}>
              <p>
                Very nice application with user friendly features, turning
                phones into pos machine. Dynamic QR code which will definitely
                reduce number of frauds.
              </p>
            </div>
          </Col>
        </Row>

        <Row className={`text-center ${styles.client} px-2 px-md-0`}>
          <h2>
            Clients <span>& Partners</span>
          </h2>
          <Slider {...settingsAwards} className={styles.slider}>
            <div className={styles.img}>
              <Image src={PartnerOne} alt="" />
            </div>
            <div className={styles.img}>
              <Image src={PartnerTwo} alt="" />
            </div>
            <div className={styles.img}>
              <Image src={PartnerThree} alt="" width={243} height={184} />
            </div>
            <div className={styles.img}>
              <Image src={PartnerFour} alt="" />
            </div>
            <div className={styles.img}>
              <Image src={PartnerFive} alt="" />
            </div>
          </Slider>
        </Row>

        <Row className={`text-center py-5 mb-5 ${styles.feedback}`}>
          <h2>Clients Love us</h2>
          <h3>Feedback from NPCI</h3>
          <Image src={Feedback} alt="" width={768} height={275} />
        </Row>
        <Row className={styles.catch}>
          <Col md={6} className="text-center">
            <h2>Catch us Live on</h2>
            <a
              href="https://play.google.com/store/apps/details?id=com.zup.merchant&hl=en_IN&gl=US"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <Image src={News} alt="" />
            </a>
          </Col>
          <Col md={6}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/pyFRaPU8Eh0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Col>
        </Row>
      </Container>

      <div className={styles.questions}>
        <Container>
          <div
            className={`d-flex justify-content-between align-items-center flex-wrap`}
          >
            <div className="mb-5 mb-lg-0">
              <h2>Have Any Questions?</h2>
              <p>
                If you need any more support please reach out to our call center
                or write to us at
              </p>
              <p>
                <a
                  href="mailto:support@cardse.co"
                  target="_blank"
                  rel="noreferrer"
                >
                  support@cardse.co
                </a>{" "}
                for further assistance.
              </p>
            </div>
            <div>
              <Button onClick={() => redirect()}>Need Help</Button>
              <Button
                className={styles.contactButton}
                onClick={() => router.push("/contact")}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default HomePage;
