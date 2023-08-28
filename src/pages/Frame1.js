import styles from "./Frame1.module.css";
const Frame1 = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
    </div>
  );
};

export default Frame1;
