import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Onboarding5.module.css";
const Onboarding5 = () => {
  const navigate = useNavigate();

  const onSignupButtonContainerClick = useCallback(() => {
    navigate("/sign-up");
  }, [navigate]);

  const onButtonContainerClick = useCallback(() => {
    navigate("/frame-48");
  }, [navigate]);

  return (
    <div className={styles.onboarding5}>
      <div className={styles.homeIndicator}>
        <div className={styles.homeIndicatorChild} />
        <div className={styles.homeIndicator1} />
      </div>
      <div
        className={styles.signupButton}
        onClick={onSignupButtonContainerClick}
      >
        <div className={styles.signupButtonChild} />
        <div className={styles.signUp}>Sign Up</div>
      </div>
      <div className={styles.content}>
        <div className={styles.text}>
          <div className={styles.loginToEnjoy}>
            Login to enjoy the features we’ve provided, and stay secure!
          </div>
          <b className={styles.headline}>Let’s get started!</b>
        </div>
        <div className={styles.logo}>
          <img className={styles.logoIcon} alt="" src="/logo.svg" />
          <b className={styles.helthio}>Track Me</b>
        </div>
      </div>
      <div className={styles.topBar}>
        <div className={styles.iphoneXstatusBarsstatusBa}>
          <div className={styles.rectangle} />
          <div className={styles.battery}>
            <div className={styles.border} />
            <img className={styles.capIcon} alt="" src="/cap.svg" />
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
      <div className={styles.button} onClick={onButtonContainerClick}>
        <div className={styles.buttonChild} />
        <div className={styles.signUp1}>Login</div>
      </div>
    </div>
  );
};

export default Onboarding5;
