import styles from "./Frame.module.css";
const Frame = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.profile}>Profile</div>
    </div>
  );
};

export default Frame;
