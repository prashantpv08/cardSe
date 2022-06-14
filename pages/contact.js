import React from "react";
import { Container } from "react-bootstrap";

import styles from "../styles/scss/Faq.module.scss";

const contact = () => {
  return (
    <>
      <div className="text-center my-5">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSc0VYbpx0cXrBhMZeZl_qZoXjFydJAyI-f6JfUko2dFU9F4sw/viewform?embedded=true"
          width="640"
          height="1200"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
        >
          Loading…
        </iframe>
      </div>
      <Container>
        <ul className={`${styles.contact} d-grid`}>
          <li>
            <h4>Email</h4>
            <a
              href="emailto:support@cardse.co"
              target="_blank"
              rel="noreferrer"
            >
              support@cardse.co
            </a>
          </li>
          <li>
            <h4>Call Us</h4>
            <a href="tel:+91-9513631546">+91-9513631546</a>
          </li>
          <li>
            <h4>Time</h4>
            <p>
              Monday - Saturday : 10 AM to 6 PM <br />
              Sunday : Closed
            </p>
          </li>
        </ul>
      </Container>
    </>
  );
};

export default contact;
