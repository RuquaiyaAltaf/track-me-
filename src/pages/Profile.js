import styles from "./Profile.module.css";
const Profile = () => {
  return (
    <div className={styles.profile}>
      <img
        className={styles.navebarbottombarIcon}
        alt=""
        src="/navebarbottombar.svg"
      />
      <div className={styles.bgParent}>
        <div className={styles.bg} />
        <div className={styles.groupChild} />
        <div className={styles.groupItem} />
        <div className={styles.groupInner} />
        <div className={styles.rectangleDiv} />
        <div className={styles.logout}>
          <img className={styles.logoutChild} alt="" src="/group-109.svg" />
          <img
            className={styles.iconlylightOutlinearrowR}
            alt=""
            src="/iconlylightoutlinearrow--right-6.svg"
          />
          <div className={styles.appointmnet}>Logout</div>
        </div>
        <div className={styles.faqs}>
          <img className={styles.logoutChild} alt="" src="/group-108.svg" />
          <img
            className={styles.iconlylightOutlinearrowR}
            alt=""
            src="/iconlylightoutlinearrow--right-6.svg"
          />
          <div className={styles.appointmnet}>FAQs</div>
        </div>
        <div className={styles.appointment}>
          <img className={styles.logoutChild} alt="" src="/group-106.svg" />
          <img
            className={styles.iconlylightOutlinearrowR}
            alt=""
            src="/iconlylightoutlinearrow--right-6.svg"
          />
          <div className={styles.appointmnet}>Complaint History</div>
        </div>
        <div className={styles.mySave}>
          <img className={styles.logoutChild} alt="" src="/group-49.svg" />
          <div className={styles.appointmnet}>My Saved</div>
          <img
            className={styles.iconlylightOutlinearrowR}
            alt=""
            src="/iconlylightoutlinearrow--right-6.svg"
          />
        </div>
      </div>
      <div className={styles.profile1}>
        <div className={styles.ameliaRenata}>Amelia Renata</div>
        <img className={styles.imageIcon} alt="" src="/image.svg" />
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
    </div>
  );
};

export default Profile;
