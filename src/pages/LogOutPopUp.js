import styles from "./LogOutPopUp.module.css";
const LogOutPopUp = () => {
  return (
    <div className={styles.logOutPopUp}>
      <div className={styles.bg} />
      <img className={styles.navebarIcon} alt="" src="/navebar.svg" />
      <div className={styles.content}>
        <div className={styles.contentChild} />
        <div className={styles.contentItem} />
        <div className={styles.contentInner} />
        <div className={styles.rectangleDiv} />
        <div className={styles.logout}>
          <img className={styles.logoutChild} alt="" src="/group-1091.svg" />
          <img
            className={styles.iconlylightOutlinearrowR}
            alt=""
            src="/iconlylightoutlinearrow--right-6.svg"
          />
          <div className={styles.paymentMethod}>Logout</div>
        </div>
        <div className={styles.faqs}>
          <img className={styles.logoutChild} alt="" src="/group-108.svg" />
          <img
            className={styles.iconlylightOutlinearrowR}
            alt=""
            src="/iconlylightoutlinearrow--right-6.svg"
          />
          <div className={styles.paymentMethod}>FAQs</div>
        </div>
        <div className={styles.payment}>
          <img className={styles.logoutChild} alt="" src="/group-107.svg" />
          <img
            className={styles.iconlylightOutlinearrowR2}
            alt=""
            src="/iconlylightoutlinearrow--right-6.svg"
          />
          <div className={styles.paymentMethod}>Payment Method</div>
        </div>
        <div className={styles.appointment}>
          <img className={styles.logoutChild} alt="" src="/group-106.svg" />
          <img
            className={styles.iconlylightOutlinearrowR}
            alt=""
            src="/iconlylightoutlinearrow--right-6.svg"
          />
          <div className={styles.paymentMethod}>Appointmnet</div>
        </div>
        <div className={styles.mySave}>
          <img className={styles.logoutChild} alt="" src="/group-49.svg" />
          <div className={styles.paymentMethod}>My Saved</div>
          <img
            className={styles.iconlylightOutlinearrowR}
            alt=""
            src="/iconlylightoutlinearrow--right-6.svg"
          />
        </div>
      </div>
      <div className={styles.healthTracking}>
        <div className={styles.groupParent}>
          <div className={styles.calParent}>
            <div className={styles.cal}>756cal</div>
            <div className={styles.calories}>Calories</div>
          </div>
          <img className={styles.fireIcon} alt="" src="/fire.svg" />
        </div>
        <div className={styles.groupContainer}>
          <div className={styles.bpmParent}>
            <div className={styles.cal}>215bpm</div>
            <div className={styles.heartRate}>Heart rate</div>
          </div>
          <img className={styles.heartbeatIcon} alt="" src="/heartbeat.svg" />
        </div>
        <div className={styles.groupDiv}>
          <div className={styles.lbsParent}>
            <div className={styles.cal}>103lbs</div>
            <div className={styles.weight}>Weight</div>
          </div>
          <img className={styles.fireIcon} alt="" src="/barbell.svg" />
        </div>
        <div className={styles.healthTrackingChild} />
        <div className={styles.healthTrackingItem} />
      </div>
      <div className={styles.profile}>
        <div className={styles.ameliaRenata}>Amelia Renata</div>
        <img className={styles.imageIcon} alt="" src="/image1.svg" />
      </div>
      <div className={styles.topBar}>
        <div className={styles.iphoneXstatusBarsstatusBa}>
          <div className={styles.rectangle} />
          <div className={styles.battery}>
            <div className={styles.border} />
            <img className={styles.capIcon} alt="" src="/cap6.svg" />
            <div className={styles.capacity} />
          </div>
          <img className={styles.wifiIcon} alt="" src="/wifi3.svg" />
          <img
            className={styles.cellularConnectionIcon}
            alt=""
            src="/cellular-connection9.svg"
          />
          <div className={styles.timeStyle}>
            <div className={styles.time}>9:41</div>
          </div>
        </div>
        <img className={styles.component1Icon} alt="" src="/component-1.svg" />
      </div>
      <div className={styles.overlay} />
      <div className={styles.popUp}>
        <img className={styles.popUpChild} alt="" src="/group-135.svg" />
        <div className={styles.text}>
          <b className={styles.areYouSure}>
            Are you sure to log out of your account?
          </b>
        </div>
        <div className={styles.button}>
          <div className={styles.buttonChild} />
          <div className={styles.logOut}>Log Out</div>
        </div>
        <div className={styles.button1}>
          <div className={styles.buttonItem} />
          <div className={styles.cancel}>Cancel</div>
        </div>
      </div>
    </div>
  );
};

export default LogOutPopUp;
