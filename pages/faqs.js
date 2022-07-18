import React from "react";
import { Accordion, Button, Container } from "react-bootstrap";

//css
import styles from "../styles/scss/Faq.module.scss";

const faqs = () => {
  return (
    <>
      <Container className={`${styles.faq}`}>
        <h2 className={`text-center`}>Help Center</h2>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>What is the settlement cycle?</Accordion.Header>
            <Accordion.Body>
              QR code settlement takes 1 working day to process. Card
              transactions take 1 working day(excluding bank holidays)
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              How to check settlement in my bank account?
            </Accordion.Header>
            <Accordion.Body>
              Kindly check your registered bank account on the next day of the
              transaction under the name Cashfree.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              When will I receive money in my bank account?
            </Accordion.Header>
            <Accordion.Body>
              All card transactions take 1 working day. All QR code transactions
              take 1 working day
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="26">
            <Accordion.Header>
              Do CardSe provide instant settlements?
            </Accordion.Header>
            <Accordion.Body>
              No, Every settlement takes 1 working day.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              What if I did not receive my settlement/payout?
            </Accordion.Header>
            <Accordion.Body>
              If any settlement takes more than 1 working day , the please share
              transaction details along with phone no on our Merchant support at
              011-49898545 or write to us at support@cardse.co
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>
              Got my money but not full amount of that’s day transaction.
            </Accordion.Header>
            <Accordion.Body>
              Network Charges are deducted. Please reach out to us regarding any
              settlement issues at support@cardse.co or call at 011-49898545.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>
              What are the documents needed for signup(KYC)?
            </Accordion.Header>
            <Accordion.Body>
              Front and back side of Aadhar card, PAN card and selfie.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header>
              Is the KYC process safe? Are my documents and photos stored
              securely?
            </Accordion.Header>
            <Accordion.Body>
              Yes, we are a PCIDSS certified company the KYC process is safe and
              all the documents or photos are only kept for verification
              purposes.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7">
            <Accordion.Header>
              How long does it take to complete KYC verification?
            </Accordion.Header>
            <Accordion.Body>
              It takes 1-2 working days to verify the KYC documents.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="8">
            <Accordion.Header>Can KYC be done for minors?</Accordion.Header>
            <Accordion.Body>
              No, since a PAN card is required for the KYC verification, minors
              cannot do KYC.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="9">
            <Accordion.Header>
              Is KYC mandatory for accepting card payments on CardSe?
            </Accordion.Header>
            <Accordion.Body>Yes</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="10">
            <Accordion.Header>
              Will CardSe app work on all smart phones ?
            </Accordion.Header>
            <Accordion.Body>
              Currently CardSe is available for Android only.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="11">
            <Accordion.Header>
              What are the modes of payment in CardSe ?
            </Accordion.Header>
            <Accordion.Body>
              There are 4 ways you can complete a payment
              <br />
              1. QR Code
              <br />
              2. Card -
              <br />
              Phone Scanner: Scan the debit card using the camera ;
              <br />
              NFC Card: Press NFC card on the back of the smartphone; Entering
              card details manually with the phone
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="12">
            <Accordion.Header>What are set up charges?</Accordion.Header>
            <Accordion.Body>
              There are no charges to setup your account in the CardSe
              application.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="13">
            <Accordion.Header>
              Is there any monthly or annual maintenance fee charged by CardSe?
            </Accordion.Header>
            <Accordion.Body>
              There is no maintenance fee charged by CardSe, we only have
              charges per transaction.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="14">
            <Accordion.Header>
              What are the transaction charges?
            </Accordion.Header>
            <Accordion.Body>
              The transactions charges are different for every card,
              <br />
              Debit card – 0.99%
              <br />
              Credit – 1.99%
              <br />
              QR code and rupay card charges – no charge
              <br />
              Prepaid cards- 2.19%
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="15">
            <Accordion.Header>
              Is there any daily or monthly limit for doing transaction through
              CardSe ?
            </Accordion.Header>
            <Accordion.Body>
              Before KYC – Single transaction Limit– Rs. 5000 per transaction;
              After KYC – Single transaction Limit– Rs. 100000 per transaction;
              Cumulative Transaction Limit– No limit.
              <br /> If the KYC is completed and approved, There is no limit on
              the amount of transactions but there is a limit of Rs 1 lakh per
              transaction otherwise.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="16">
            <Accordion.Header>
              A payment is marked as failed on my Khata but money is debited
              from the customer’s account.
            </Accordion.Header>
            <Accordion.Body>
              For all settlements issues, reach out to us at support@cardse.co
              and please share the screenshot of the debited amount from the
              customer’s app
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="17">
            <Accordion.Header>
              How can I check my transactions history?
            </Accordion.Header>
            <Accordion.Body>
              Transaction history can be viewed on the application itself. Look
              at the upper right side of the application.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="18">
            <Accordion.Header>How do I report Fraud ?</Accordion.Header>
            <Accordion.Body>
              Kindly send a mail to support@cardse.co with the transaction
              details as soon as you get to know about it.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="19">
            <Accordion.Header>
              Transaction is success but money doesn’t reflect in my bank
              account.
            </Accordion.Header>
            <Accordion.Body>
              In such a settlement issue, reach out to us with the details at
              support@cardse.co
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="20">
            <Accordion.Header>
              Do I get a confirmation for payment immediately ?
            </Accordion.Header>
            <Accordion.Body>
              No, confirmations are sent once the settlement is done in the 1
              working day( excluding bank holidays)
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="21">
            <Accordion.Header>
              How can I update my details like bank account/phone number/Email
              ID/Address?
            </Accordion.Header>
            <Accordion.Body>
              If you wish to delete or update your bank account , You will have
              to reach out to us at support@cardse.co The Phone Number cannot be
              changed. E-mail and address can be changed in the profile section
              of the application.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="22">
            <Accordion.Header>What is NFC feature in CardSe?</Accordion.Header>
            <Accordion.Body>
              Using an NFC enabled smartphone and card, it’s possible to receive
              payments by tapping the card on the back of the NFC enabled
              smartphones.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="23">
            <Accordion.Header>
              Contact a Merchant Support Specialist
            </Accordion.Header>
            <Accordion.Body>
              Our Call center is available from Monday to Saturday 9:30 A.M. to
              6:30 P.M.
              <br />
              <a href="tel:+91-9513631546">+91-9513631546</a>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </>
  );
};

export default faqs;
