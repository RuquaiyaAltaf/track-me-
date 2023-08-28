import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./TopDoctor.module.css";
const TopDoctor = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/location");
  }, [navigate]);

  const onGroupContainer2Click = useCallback(() => {
    navigate("/location");
  }, [navigate]);

  const onGroupContainer4Click = useCallback(() => {
    navigate("/location");
  }, [navigate]);

  const onGroupContainer6Click = useCallback(() => {
    navigate("/location");
  }, [navigate]);

  return (
    <div className={styles.topDoctor}>
      <div className={styles.topDoctorChild} />
      <div className={styles.location}>LOCATION</div>
      <div className={styles.location}>LOCATION</div>
      <div className={styles.location}>LOCATION</div>
      <b className={styles.discription}>Discription</b>
      <div className={styles.distance5m}>
        <b>Distance:</b>
        <span className={styles.m}> 5m</span>
      </div>
      <div className={styles.rectangleParent} onClick={onGroupContainerClick}>
        <div className={styles.groupChild} />
        <b className={styles.accept}>Accept</b>
      </div>
      <img
        className={styles.topDoctorItem}
        alt=""
        src="/rectangle-959@2x.png"
      />
      <div className={styles.groupParent}>
        <img className={styles.groupItem} alt="" src="/group-15.svg" />
        <div className={styles.drMarcusHorizon}>AZEEM SULTAN</div>
      </div>
      <img className={styles.doctor8Icon} alt="" src="/doctor-8.svg" />
      <div className={styles.doctor6}>
        <div className={styles.doctor6Child} />
        <img
          className={styles.doctor6Item}
          alt=""
          src="/rectangle-9591@2x.png"
        />
      </div>
      <img className={styles.doctor9Icon} alt="" src="/doctor-9.svg" />
      <div className={styles.topBar}>
        <div className={styles.rectangle} />
        <img className={styles.topBarChild} alt="" src="/frame-7.svg" />
        <div className={styles.topBar1}>
          <div className={styles.iphoneXstatusBarsstatusBa}>
            <div className={styles.rectangle1} />
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
      <div className={styles.button}>
        <div className={styles.buttonChild} />
        <b className={styles.verify}>YOUR QUERIES</b>
      </div>
      <div className={styles.topDoctorInner} />
      <b className={styles.discription1}>Discription</b>
      <div className={styles.distance5m1}>
        <b>Distance:</b>
        <span className={styles.m}> 5m</span>
      </div>
      <div className={styles.rectangleGroup} onClick={onGroupContainer2Click}>
        <div className={styles.groupChild} />
        <b className={styles.accept}>Accept</b>
      </div>
      <div className={styles.groupContainer}>
        <img className={styles.groupItem} alt="" src="/group-15.svg" />
        <div className={styles.drMarcusHorizon}>AZEEM SULTAN</div>
      </div>
      <div className={styles.rectangleDiv} />
      <b className={styles.discription2}>Discription</b>
      <div className={styles.distance5m2}>
        <b>Distance:</b>
        <span className={styles.m}> 5m</span>
      </div>
      <div
        className={styles.rectangleContainer}
        onClick={onGroupContainer4Click}
      >
        <div className={styles.groupChild} />
        <b className={styles.accept}>Accept</b>
      </div>
      <div className={styles.groupDiv}>
        <img className={styles.groupItem} alt="" src="/group-15.svg" />
        <div className={styles.drMarcusHorizon}>AZEEM SULTAN</div>
      </div>
      <div className={styles.topDoctorChild1} />
      <b className={styles.discription3}>Discription</b>
      <div className={styles.distance5m3}>
        <b>Distance:</b>
        <span className={styles.m}> 5m</span>
      </div>
      <div className={styles.rectangleParent1} onClick={onGroupContainer6Click}>
        <div className={styles.groupChild} />
        <b className={styles.accept}>Accept</b>
      </div>
      <div className={styles.groupParent1}>
        <img className={styles.groupItem} alt="" src="/group-15.svg" />
        <div className={styles.drMarcusHorizon}>AZEEM SULTAN</div>
      </div>
      <div className={styles.topDoctorChild2} />
    </div>
  );
};

export default TopDoctor;
