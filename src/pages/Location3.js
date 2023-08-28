import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Location3.module.css";
const Location3 = () => {
  const navigate = useNavigate();

  const onLocationContainerClick = useCallback(() => {
    navigate("/frame-43");
  }, [navigate]);

  const onButtonIconClick = useCallback(() => {
    navigate("/frame-40");
  }, [navigate]);

  return (
    <div className={styles.location} onClick={onLocationContainerClick}>
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
        <div className={styles.buttonConfirm}>
          <div className={styles.buttonConfirmChild} />
          <div className={styles.confirmLocation}>Confirm Location</div>
        </div>
        <div className={styles.abcdRd102AlexandriaVirgiParent}>
          <div className={styles.abcdRd102}>
            1111 abcd Rd #102 Alexandria, Virginia(VA), 22314
          </div>
          <img
            className={styles.iconlyboldlocation}
            alt=""
            src="/group-117.svg"
          />
        </div>
        <div className={styles.line} />
        <div className={styles.confirmYourAddress1}>Confirm your address</div>
      </div>
      <div className={styles.icons8Whatsapp1441Wrapper}>
        <img
          className={styles.icons8Whatsapp1441}
          alt=""
          src="/icons8whatsapp144-1@2x.png"
        />
      </div>
      <div className={styles.vectorParent}>
        <img className={styles.frameChild} alt="" src="/rectangle-9611.svg" />
        <div className={styles.frameItem} />
        <div className={styles.frameInner} />
        <img
          className={styles.icons8Phone641}
          alt=""
          src="/icons8phone64-1@2x.png"
        />
        <img
          className={styles.icons8Whatsapp1442}
          alt=""
          src="/icons8whatsapp144-2@2x.png"
        />
        <div className={styles.div}>030012345678</div>
        <div className={styles.div1}>030012345678</div>
      </div>
    </div>
  );
};

export default Location3;
