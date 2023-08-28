import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Frame4.module.css";
const Frame4 = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/top-doctor");
  }, [navigate]);

  return (
    <div className={styles.splashScreenParent} onClick={onFrameContainerClick}>
      <div className={styles.splashScreen}>
        <div className={styles.homeIndicator}>
          <div className={styles.homeIndicatorChild} />
          <div className={styles.homeIndicator1} />
        </div>
        <img className={styles.giphy1Icon} alt="" src="/giphy-1@2x.png" />
        <div className={styles.logo}>
          <b className={styles.helthio}>Thank You</b>
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
      </div>
    </div>
  );
};

export default Frame4;
