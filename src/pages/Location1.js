import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Location1.module.css";
const Location1 = () => {
  const navigate = useNavigate();

  const onButtonIconClick = useCallback(() => {
    navigate("/top-doctor");
  }, [navigate]);

  const onRectangle6Click = useCallback(() => {
    navigate("/frame-47");
  }, [navigate]);

  return (
    <div className={styles.location}>
      <img className={styles.mapmapIcon} alt="" src="/mapmap@2x.png" />
      <div className={styles.homeIndicator}>
        <div className={styles.homeIndicatorChild} />
        <div className={styles.homeIndicator1} />
      </div>
      <img className={styles.mapIcon} alt="" src="/map.svg" />
      <div className={styles.search}>
        <div className={styles.searchChild} />
        <div className={styles.searchLocationZip}>
          Search location, ZIP code..
        </div>
        <img
          className={styles.iconlylightOutlinesearch}
          alt=""
          src="/iconlylightoutlinesearch.svg"
        />
      </div>
      <div className={styles.topBar}>
        <div className={styles.topBarChild} />
        <div className={styles.topBar1}>
          <div className={styles.rectangle} />
          <div className={styles.buttonParent}>
            <img
              className={styles.buttonIcon}
              alt=""
              src="/button3.svg"
              onClick={onButtonIconClick}
            />
            <b className={styles.ambulance}>Ambulance</b>
          </div>
          <div className={styles.topBar2}>
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
                src="/cellular-connection3.svg"
              />
              <div className={styles.timeStyle}>
                <div className={styles.time}>9:41</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.confirmYourAddress}>
        <div className={styles.confirmYourAddressChild} />
        <div className={styles.buttonConfirm}>
          <div
            className={styles.buttonConfirmChild}
            onClick={onRectangle6Click}
          />
          <b className={styles.confirmLocation}>Complete</b>
        </div>
      </div>
    </div>
  );
};

export default Location1;
