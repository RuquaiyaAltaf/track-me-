import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Location2.module.css";
const Location2 = () => {
  const navigate = useNavigate();

  const onButtonIconClick = useCallback(() => {
    navigate("/frame-43");
  }, [navigate]);

  const onButtonConfirmContainerClick = useCallback(() => {
    navigate("/frame-39");
  }, [navigate]);

  return (
    <div className={styles.location}>
      <img className={styles.mapmapIcon} alt="" src="/mapmap@2x.png" />
      <div className={styles.homeIndicator}>
        <div className={styles.homeIndicatorChild} />
        <div className={styles.homeIndicator1} />
      </div>
      <img className={styles.mapIcon} alt="" src="/map1.svg" />
      <div className={styles.topBar}>
        <div className={styles.topBarChild} />
        <div className={styles.topBar}>
          <div className={styles.rectangle} />
          <div className={styles.buttonParent}>
            <img
              className={styles.buttonIcon}
              alt=""
              src="/button3.svg"
              onClick={onButtonIconClick}
            />
            <b className={styles.ambulance}>
              <p className={styles.homeInvasion}>Home Invasion</p>
            </b>
          </div>
          <div className={styles.topBar2}>
            <div className={styles.iphoneXstatusBarsstatusBa}>
              <div className={styles.rectangle} />
              <div className={styles.battery}>
                <div className={styles.border} />
                <img className={styles.capIcon} alt="" src="/cap3.svg" />
                <div className={styles.capacity} />
              </div>
              <img className={styles.wifiIcon} alt="" src="/wifi5.svg" />
              <img
                className={styles.cellularConnectionIcon}
                alt=""
                src="/cellular-connection7.svg"
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
        <div
          className={styles.buttonConfirm}
          onClick={onButtonConfirmContainerClick}
        >
          <div className={styles.buttonConfirmChild} />
          <b className={styles.confirmLocation}> OK</b>
        </div>
        <img
          className={styles.confirmYourAddressItem}
          alt=""
          src="/group-117.svg"
        />
        <div className={styles.line} />
        <div className={styles.confirmYourAddressContainer}>
          <p className={styles.homeInvasion}>
            <span
              className={styles.span}
            >{`                               `}</span>
            <span className={styles.detail1}>Detail</span>
            <span>{` `}</span>
          </p>
          <p className={styles.homeInvasion}>&nbsp;</p>
          <p className={styles.homeInvasion}> They will catch you soon</p>
        </div>
      </div>
    </div>
  );
};

export default Location2;
