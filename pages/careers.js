import Image from "next/image";
import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

//css
import styles from "../styles/scss/career.module.scss";
// images
import ZeroneLogo from "../public/Zerone-Logo-png.png";
import Glassdoor from "../public/glassdoor.png";
import Ban from "../public/bannerabout.jpeg";
import Ban1 from "../public/aboutbanner2.png";

const Careers = () => {
  return (
    <>
      <div className={styles.blackbg}>
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h2>
                We’re at a transformational moment in our company’s history.
              </h2>
              <Image
                className={styles.zLogo}
                src={ZeroneLogo}
                alt=""
                width="470"
                height="100"
              />
            </Col>
            <Col md={6}>
              <p>
                Zerone Microsystems is a 11 year old company that has been in
                the cutting edge of technology and finance and is not dependent
                on external funding. It is backed by Sanjeev Bajaj, MD & CEO of
                Bajaj Capital, Sanjay Rishi, former Head of American Express,
                South Asia, Richard Rekhy, former CEO of KPMG and many other
                heavyweights from the industry.
              </p>
              <p>
                It has also been backed by NASSCOM 10,000, WeWork labs,
                Microsoft Accelerator and Anthill Incubator.
              </p>
              <p>
                It has been recognized and awarded by Government of India as
                being in the top 10 in its category. Zerone has also been
                recognized by the UK government and was awarded the UK-India
                Finclusion Award. It has also been recognized as the 10 most
                recommended technology service providers of 2021 company by the
                CIO Insider. Zerone has also been recognized by NPCI for its
                contribution in integration Singapore’s NETS payment system with
                India’s UPI payment system.
              </p>
              <p>
                Zerone Microsystems is run by senior industry veterans from the
                payment industry.
              </p>
              <p>
                Zerone Microsystems has a fully owned subsidiary in Singapore,
                run by a Harvard University masters with over two decades of
                experience.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <Container className={`${styles.glassdoor} text-center`}>
        <h2>We’re getting more fluid, agile and fun!</h2>
        <div className="w-100">
          <a
            href="https://www.glassdoor.co.in/Overview/Working-at-Zerone-Microsystems-EI_IE6328304.11,30.htm"
            target="_blank"
            rel="noreferrer"
          >
            Know More
          </a>
        </div>
        <Image src={Glassdoor} alt="" width="200" height="95" />

        <div className={styles.aboutus}>
          <Row className="mx-2 mx-md-0">
            <Col md={6}>
              <Image src={Ban} alt="" />
            </Col>

            <Col md={6} className="text-left">
              <h2>About Us</h2>
              <p>
                Being in the cutting edge FinTech organisation, we focus on
                merchant platform experience, and how to be profitable while
                delivering value to our merchants. We build scalable systems
                that help us handle different amplitudes of demand during
                various events. We have a modern tech stack and the teams work
                with an agile mindset and are strongly aligned with business
                outcomes. With each team, you get the autonomy and the tools to
                work on product features and experiments, take them to your
                users in a short time, and use data to see the effect of your
                work. We are here to build a world-class tech organisation with
                elite engineers and change- agents who would help us get there.
                We are looking for people who are skilled, passionate, driven
                and a wee bit crazy (yes, crazy works!) to onboard our ship.
              </p>
            </Col>
          </Row>
          <Row className="py-5 mx-2 mx-md-0">
            <Col md={6} className="text-left">
              <h2>Benefits</h2>
              <ul>
                <li>Competitive Policies</li>
                <li>Flexible Working Hours</li>
                <li>eBooks</li>
                <li>Generous Compensation & Equity</li>
              </ul>
            </Col>
            <Col md={6}>
              <Image src={Ban1} alt="" />
            </Col>
          </Row>
        </div>
      </Container>
      <div className={styles.position}>
        <Container>
          <h2>Open Positions</h2>
          <h5>We’re Building A Culture Of Curiosity And Learning. You In?</h5>
          <ul className={`${styles.open} d-grid`}>
            <li>
              <h3>SENIOR IOS DEVELOPER</h3>
              <p>
                As an iOS Developer, you will work closely with the backend
                development team and will support the front end teams to develop
                and deploy various payments and related applications. You will
                work as a Subject Matter Expert (SME) for all things related to
                mobile native app development. You will get involved in the
                planning phase and help define the software architecture. As an
                owner of products and its features, you will create and share
                release plans, and achieve release goals including but not
                limited to performance, functional completeness and security.
              </p>
              <Button>Download JD</Button>
            </li>
            <li>
              <h3>SENIOR FULL STACK DEVELOPER</h3>
              <p>
                As a Full Stack Developer, you will work closely with the
                backend development team and will support the front end teams to
                develop and deploy various payments and related applications
                over the cloud. You will work as a Subject Matter Expert (SME)
                for all things related to NodeJS, MongoDB. You will get involved
                in the planning phase and help define the software architecture.
                As an owner of products and its features, you will create and
                share release plans, and achieve release goals including but not
                limited to performance, functional completeness and security.
              </p>
              <Button>Download JD</Button>
            </li>
            <li>
              <h3>SALES HEAD</h3>
              <p>
                We are looking for a Sales Head who can drive merchant
                onboarding and scale revenue to the next level. The incumbent
                will be responsible for not only adding new merchants to our
                network, but also to nurture and grow them and also ensure an
                increase of market share of CardSe in the offline business. In
                addition, the incumbent will be expected to generate revenue
                through multiple products launched as we move forward in our
                journey. The ideal candidate will be responsible architecting a
                field sales strategy and building out a team of Field Sales
                executives across India. The person should be excited by selling
                into new markets, strategizing next steps, negotiating complex
                deals and beating the competition in head to head opportunities.
              </p>
              <Button>Download JD</Button>
            </li>
            <li>
              <h3>DEVOPS ENGINEER</h3>
              <p>
                Excellent knowledge of Linux administration.  • Experience in
                software engineering best practices and design principles.  •
                Extensive hands on CI-CD technology experience.  • Proficient in
                Bash, Chef, Powershell, XML,RESTful, JSON, SOAP, XML  • AWS
                Certified Architect and/or developer, associate considered,
                professional preferred.  • Deep knowledge of multiple monitoring
                tools and how to mine them for advanced data.  • Prior work with
                Kubernetes, Helm, Docker, MongoDB, MySQL, Redis, ElasticSearch,
                microservices, message queues and related technologies.  •
                Understanding of product development lifecycle.
              </p>
              <Button>Download JD</Button>
            </li>
            <li>
              <h3>FIELD SALES EXECUTIVES</h3>
              <p>
                We are looking for a Field Sales Executives who can drive
                merchant onboarding to the next level for CardSe App. The person
                will be responsible for not only adding new merchants to our
                network, but also nurture and grow them and also ensure an
                increase of market share of CardSe in the offline business and
                geographies.
              </p>
              <Button>Download JD</Button>
            </li>
          </ul>
        </Container>
      </div>
      <div className={styles.joinNow}>
        <Container>
          <div
            className={`${styles.join} d-flex justify-content-between align-items-center flex-wrap`}
          >
            <div className="mb-3 mb-lg-0">
              <h2>Join us Now</h2>
              <p>
                Email us with your resume at{" "}
                <a
                  href="mailto:hiring@cardse.co"
                  target="_blank"
                  rel="noreferrer"
                >
                  hiring@cardse.co
                </a>
              </p>
            </div>
            <Button
              className={styles.contactButton}
              as="a"
              href="tel:011-49898545"
            >
              Contact Us
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
};
export default Careers;
