import { Container } from "react-bootstrap";
import Media from "../components/Media";
import styles from "../styles/scss/Home.module.scss";

const MediaWrap = () => {
  return (
    <>
      <Container>
        <div className={styles.mediacoverage}>
          <Media heading={true} />
        </div>
      </Container>
    </>
  );
};

export default MediaWrap;
