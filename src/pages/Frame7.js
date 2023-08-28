import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Frame7.module.css";
const Frame7 = () => {
  const navigate = useNavigate();

  const onLoginButtonContainerClick = useCallback(() => {
    navigate("/onboarding-7");
  }, [navigate]);

  const onSkipTextClick = useCallback(() => {
    navigate("/onboarding-5");
  }, [navigate]);

  return (
    <div className={styles.onboarding1Parent}>
      <div className={styles.onboarding1}>
        <div className={styles.image}>
          <img className={styles.image11Icon} alt="" src="/image-11@2x.png" />
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
        <div className={styles.group}>
          <div className={styles.bg} />
          <img className={styles.sliderIcon} alt="" src="/slider3.svg" />
          <b className={styles.headline}>Connect with the team you trust</b>
          <div
            className={styles.loginButton}
            onClick={onLoginButtonContainerClick}
          >
            <div className={styles.loginButtonChild} />
            <div className={styles.next}>Next</div>
          </div>
          <div className={styles.skip} onClick={onSkipTextClick}>
            Skip
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame7;
