import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Frame6.module.css";
const Frame6 = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/frame-44");
  }, [navigate]);

  return (
    <div className={styles.splashScreenParent} onClick={onFrameContainerClick}>
      <div className={styles.splashScreen}>
        <div className={styles.homeIndicator}>
          <div className={styles.homeIndicatorChild} />
          <div className={styles.homeIndicator1} />
        </div>
        <div className={styles.logo}>
          <img className={styles.logoIcon} alt="" src="/logo1.svg" />
          <b className={styles.helthio}>Track Me</b>
        </div>
        <div className={styles.topBar}>
          <div className={styles.iphoneXstatusBarsstatusBa}>
            <div className={styles.rectangle} />
            <div className={styles.battery}>
              <div className={styles.border} />
              <img className={styles.capIcon} alt="" src="/cap1.svg" />
              <div className={styles.capacity} />
            </div>
            <img className={styles.wifiIcon} alt="" src="/wifi4.svg" />
            <img
              className={styles.cellularConnectionIcon}
              alt=""
              src="/cellular-connection5.svg"
            />
            <div className={styles.timeStyle}>
              <div className={styles.time}>9:41</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame6;
