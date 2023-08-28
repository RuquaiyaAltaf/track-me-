import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Onboarding3.module.css";
const Onboarding3 = () => {
  const navigate = useNavigate();

  const onLoginButtonContainer1Click = useCallback(() => {
    navigate("/onboarding-4");
  }, [navigate]);

  return (
    <div className={styles.onboarding3}>
      <div className={styles.image}>
        <img className={styles.image12Icon} alt="" src="/image-12@2x.png" />
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
            <img className={styles.capIcon} alt="" src="/cap5.svg" />
            <div className={styles.capacity} />
          </div>
          <img className={styles.wifiIcon} alt="" src="/wifi3.svg" />
          <img
            className={styles.cellularConnectionIcon}
            alt=""
            src="/cellular-connection4.svg"
          />
          <div className={styles.timeStyle}>
            <div className={styles.time}>9:41</div>
          </div>
        </div>
      </div>
      <div className={styles.bg1} />
      <img className={styles.sliderIcon1} alt="" src="/slider4.svg" />
      <b className={styles.headline1}>Find a lot of assistance in one place</b>
      <div
        className={styles.loginButton1}
        onClick={onLoginButtonContainer1Click}
      >
        <div className={styles.loginButtonChild} />
        <div className={styles.next}>Next</div>
      </div>
      <div className={styles.skip}>Skip</div>
    </div>
  );
};

export default Onboarding3;
