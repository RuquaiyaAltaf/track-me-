import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Frame10.module.css";
const Frame10 = () => {
  const navigate = useNavigate();

  const onConfirmYourAddress1Click = useCallback(() => {
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
            <div className={styles.chestPainParent}>
              <div className={styles.chestPain}>Chest pain</div>
              <img className={styles.groupChild} alt="" src="/group-531.svg" />
            </div>
            <div className={styles.reason1}>Reason</div>
            <div className={styles.change}>Change</div>
          </div>
          <div className={styles.line1} />
        </div>
        <div className={styles.buttonBooking}>
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
            <img className={styles.buttonIcon} alt="" src="/button4.svg" />
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
      </div>
      <div
        className={styles.confirmYourAddress}
        onClick={onConfirmYourAddress1Click}
      >
        <div className={styles.confirmYourAddressChild} />
        <div className={styles.buttonConfirm}>
          <div className={styles.buttonConfirmChild} />
          <b className={styles.confirmLocation}> OK</b>
        </div>
        <img
          className={styles.confirmYourAddressItem}
          alt=""
          src="/group-117.svg"
        />
        <div className={styles.line2} />
        <div className={styles.confirmYourAddressContainer}>
          <p
            className={styles.inCaseOf}
          >{`Your query is send to base station `}</p>
          <p className={styles.inCaseOf}>our member will locate</p>
          <p className={styles.inCaseOf}>{`you soon....  `}</p>
        </div>
      </div>
    </div>
  );
};

export default Frame10;
