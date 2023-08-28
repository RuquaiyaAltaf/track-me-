import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Onboarding2.module.css";
const Onboarding2 = () => {
  const navigate = useNavigate();

  const onImageContainerClick = useCallback(() => {
    navigate("/onboarding-3");
  }, [navigate]);

  const onLoginButtonContainerClick = useCallback(() => {
    navigate("/onboarding-3");
  }, [navigate]);

  return (
    <div className={styles.onboarding2}>
      <div className={styles.image} onClick={onImageContainerClick}>
        <img className={styles.xm2Icon} alt="" src="/7xm-2@2x.png" />
        <img className={styles.image13Icon} alt="" src="/image-13@2x.png" />
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
            src="/cellular-connection3.svg"
          />
          <div className={styles.timeStyle}>
            <div className={styles.time}>9:41</div>
          </div>
        </div>
      </div>
      <div className={styles.group}>
        <div className={styles.bg} />
        <img className={styles.sliderIcon} alt="" src="/slider4.svg" />
        <b className={styles.headline}>Find a lot of assistance in one place</b>
        <div
          className={styles.loginButton}
          onClick={onLoginButtonContainerClick}
        >
          <div className={styles.loginButtonChild} />
          <div className={styles.next}>Next</div>
        </div>
        <div className={styles.skip}>Skip</div>
      </div>
    </div>
  );
};

export default Onboarding2;
