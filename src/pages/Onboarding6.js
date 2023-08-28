import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Onboarding6.module.css";
const Onboarding6 = () => {
  const navigate = useNavigate();

  const onImageContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='image12']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onLoginButtonContainer1Click = useCallback(() => {
    navigate("/onboarding-5");
  }, [navigate]);

  const onSkipTextClick = useCallback(() => {
    navigate("/onboarding-5");
  }, [navigate]);

  return (
    <div className={styles.onboarding6}>
      <div className={styles.image} onClick={onImageContainerClick}>
        <img
          className={styles.image12Icon}
          alt=""
          src="/image-12@2x.png"
          data-scroll-to="image12"
        />
      </div>
      <div className={styles.group}>
        <div className={styles.bg} />
        <img className={styles.sliderIcon} alt="" src="/slider1.svg" />
        <b className={styles.headline}>
          Get connect our Online Consultation Center
        </b>
        <div className={styles.loginButton}>
          <div className={styles.loginButtonChild} />
          <div className={styles.getStarted}>Get Started</div>
        </div>
      </div>
      <div className={styles.topBar}>
        <div className={styles.iphoneXstatusBarsstatusBa}>
          <div className={styles.rectangle} />
          <div className={styles.battery}>
            <div className={styles.border} />
            <img className={styles.capIcon} alt="" src="/cap1.svg" />
            <div className={styles.capacity} />
          </div>
          <img className={styles.wifiIcon} alt="" src="/wifi3.svg" />
          <img
            className={styles.cellularConnectionIcon}
            alt=""
            src="/cellular-connection3.svg"
          />
          <div className={styles.timeStyle}>
            <div className={styles.time}>9:41</div>
          </div>
        </div>
      </div>
      <div className={styles.group1}>
        <div className={styles.bg} />
        <img className={styles.sliderIcon} alt="" src="/slider2.svg" />
        <b className={styles.headline1}>
          Find a lot of assistance in one place
        </b>
        <div
          className={styles.loginButton1}
          onClick={onLoginButtonContainer1Click}
        >
          <div className={styles.loginButtonChild} />
          <div className={styles.next}>Next</div>
        </div>
        <div className={styles.skip} onClick={onSkipTextClick}>
          Skip
        </div>
      </div>
    </div>
  );
};

export default Onboarding6;
