import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Frame11.module.css";
const Frame11 = () => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/frame-41");
  }, [navigate]);

  return (
    <div className={styles.topDoctorParent}>
      <div className={styles.topDoctor}>
        <div className={styles.topDoctorChild} onClick={onRectangleClick} />
        <div className={styles.location}>LOCATION</div>
        <div className={styles.location}>LOCATION</div>
        <div className={styles.location}>LOCATION</div>
        <img
          className={styles.topDoctorItem}
          alt=""
          src="/rectangle-959@2x.png"
        />
        <div className={styles.groupParent}>
          <img className={styles.groupChild} alt="" src="/group-15.svg" />
          <div className={styles.drMarcusHorizon}>Home Invasion</div>
        </div>
        <div className={styles.doctor8}>
          <div className={styles.doctor8Child} />
          <img
            className={styles.doctor8Item}
            alt=""
            src="/rectangle-9593@2x.png"
          />
          <div className={styles.groupContainer}>
            <img className={styles.groupChild} alt="" src="/group-15.svg" />
            <div className={styles.drMarcusHorizon}>Travel Emergency</div>
          </div>
        </div>
        <div className={styles.doctor6}>
          <div className={styles.doctor6Child} />
          <img
            className={styles.doctor8Item}
            alt=""
            src="/rectangle-9591@2x.png"
          />
          <div className={styles.drMarcusHorizonDWrapper}>
            <div className={styles.drMarcusHorizon2}>MEDICAL HELP</div>
          </div>
        </div>
        <div className={styles.doctor9}>
          <div className={styles.doctor9Child} />
          <img
            className={styles.doctor9Item}
            alt=""
            src="/rectangle-9594@2x.png"
          />
          <div className={styles.groupDiv}>
            <img className={styles.groupInner} alt="" src="/group-15.svg" />
            <div className={styles.drMarcusHorizon3}>FIRE EMERGENCY</div>
          </div>
        </div>
        <div className={styles.topBar}>
          <div className={styles.rectangle} />
          <img className={styles.topBarChild} alt="" src="/frame-7.svg" />
          <div className={styles.topBar1}>
            <div className={styles.iphoneXstatusBarsstatusBa}>
              <div className={styles.rectangle1} />
              <div className={styles.battery}>
                <div className={styles.border} />
                <img className={styles.capIcon} alt="" src="/cap2.svg" />
                <div className={styles.capacity} />
              </div>
              <img className={styles.wifiIcon} alt="" src="/wifi6.svg" />
              <img
                className={styles.cellularConnectionIcon}
                alt=""
                src="/cellular-connection8.svg"
              />
              <div className={styles.timeStyle}>
                <div className={styles.time}>9:41</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.button}>
          <div className={styles.buttonChild} />
          <b className={styles.verify}>YOUR QUERIES</b>
        </div>
      </div>
    </div>
  );
};

export default Frame11;
