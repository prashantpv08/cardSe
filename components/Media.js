import Image from "next/image";
import { useEffect, useState } from "react";
import { mediaConstant } from "../constant/media";

//css
import styles from "../styles/scss/Home.module.scss";

const Media = (props) => {
  const [mediaList, setMediaList] = useState([]);

  useEffect(() => {
    if (props.home) {
      const homeMedia = mediaConstant.slice(0, 6);
      setMediaList(homeMedia);
    } else setMediaList(mediaConstant);
  }, []);

  const mediaListHandle = () => {
    return mediaList.map((val, i) => {
      return (
        <li key={i}>
          <div>
            <a href={val.link} rel="noreferrer" target="_blank">
              <Image src={val.img} alt="" />
            </a>
            <div>
              <h4>{val.title}</h4>
              {val.desc && <p>{val.desc}</p>}
            </div>
          </div>
        </li>
      );
    });
  };

  return (
    <>
      {!props.heading && (
        <h2>
          Media <span>Coverage</span>
        </h2>
      )}

      <ul
        className={`d-grid ${styles.mediaList} ${props.heading && "pt-5 my-5"}`}
      >
        {mediaListHandle()}
      </ul>
    </>
  );
};

export default Media;
