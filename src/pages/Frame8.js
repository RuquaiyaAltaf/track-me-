import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Frame8.module.css";
const Frame8 = () => {
  const navigate = useNavigate();

  const onButtonBookingContainerClick = useCallback(() => {
    navigate("/location1");
  }, [navigate]);

  const onButtonIconClick = useCallback(() => {
    navigate("/location2");
  }, [navigate]);

  return (
    <div className={styles.bookingDoctorParent}>
      <div className={styles.bookingDoctor}>
        <div className={styles.homeIndicator}>
          <div className={styles.homeIndicatorChild} />
          <div className={styles.homeIndicator1} />
        </div>
        <div className={styles.summary}>
          <div className={styles.line} />
          <div className={styles.reason}>
            <img className={styles.reasonChild} alt="" src="/group-53.svg" />
            <div className={styles.reason1}>Feedback</div>
            <div className={styles.change}>Change</div>
            <div className={styles.reasonItem} />
          </div>
          <div className={styles.line1} />
        </div>
        <div
          className={styles.buttonBooking}
          onClick={onButtonBookingContainerClick}
        >
          <div className={styles.buttonBookingChild} />
          <div className={styles.bookNow}>
            <b>SEND</b>
            <span className={styles.span}>{` `}</span>
          </div>
          <div className={styles.bookNow}>
            <b>SEND</b>
            <span className={styles.span}>{` `}</span>
          </div>
        </div>
        <div className={styles.profile}>
          <div className={styles.profileChild} />
          <img
            className={styles.profileItem}
            alt=""
            src="/rectangle-9592@2x.png"
          />
          <div className={styles.chardiologistParent}>
            <div className={styles.chardiologist}>
              <p className={styles.inCaseOf}>In case of any threat</p>
              <p className={styles.inCaseOf}>{` at home `}</p>
            </div>
            <div className={styles.drMarcusHorizon}>Home Invasion</div>
          </div>
        </div>
        <div className={styles.topBar}>
          <div className={styles.rectangle} />
          <div className={styles.buttonParent}>
            <img
              className={styles.buttonIcon}
              alt=""
              src="/button4.svg"
              onClick={onButtonIconClick}
            />
            <div className={styles.appointment}>Appointment</div>
          </div>
          <div className={styles.topBar1}>
            <div className={styles.iphoneXstatusBarsstatusBa}>
              <div className={styles.rectangle1} />
              <div className={styles.battery}>
                <div className={styles.border} />
                <img className={styles.capIcon} alt="" src="/cap2.svg" />
                <div className={styles.capacity} />
              </div>
              <img className={styles.wifiIcon} alt="" src="/wifi5.svg" />
              <img
                className={styles.cellularConnectionIcon}
                alt=""
                src="/cellular-connection6.svg"
              />
              <div className={styles.timeStyle}>
                <div className={styles.time}>9:41</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame8;
