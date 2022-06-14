import Link from "next/link";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import styles from "../styles/scss/Header.module.scss";

const Routings = () => {
  return (
    <>
      <Navbar expand="lg">
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className={styles.navbar}>
            <Link href="/">Home</Link>
          </Nav>
          <Nav className={styles.navbar}>
            <Link href="/careers">Careers</Link>
          </Nav>
          <Nav className={styles.navbar}>
            <Link href="/faqs">FAQs</Link>
          </Nav>
          <Nav className={styles.navbar}>
            <Link href="/contact">Contact</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Routings;
