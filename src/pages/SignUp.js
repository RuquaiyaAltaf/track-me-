import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SignUp.module.css";
const SignUp = () => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/sign-up-success");
  }, [navigate]);

  const onButtonIconClick = useCallback(() => {
    navigate("/onboarding-5");
  }, [navigate]);

  return (
    <div className={styles.signUp}>
      <div className={styles.homeIndicator}>
        <div className={styles.homeIndicatorChild} />
        <div className={styles.homeIndicator1} />
      </div>
      <div className={styles.logInLink}>
        <div className={styles.alreadyHaveAn}>Already have an account?</div>
        <div className={styles.logIn}>Log In</div>
      </div>
      <div className={styles.button} onClick={onButtonContainerClick}>
        <div className={styles.buttonChild} />
        <div className={styles.signUp1}>Sign Up</div>
      </div>
      <div className={styles.form}>
        <div className={styles.inputedittext}>
          <div className={styles.roundedRectangle} />
          <div className={styles.enterYourPassword}>Enter your password</div>
          <img
            className={styles.iconEyeSlash}
            alt=""
            src="/icon--eye-slash4.svg"
          />
          <img
            className={styles.iconPassword}
            alt=""
            src="/icon--password5.svg"
          />
        </div>
        <div className={styles.inputedittext1}>
          <div className={styles.roundedRectangle} />
          <div className={styles.enterYourPassword}>Enter your email</div>
          <img className={styles.iconPassword} alt="" src="/icon--email3.svg" />
        </div>
        <div className={styles.inputedittext2}>
          <div className={styles.roundedRectangle} />
          <div className={styles.enterYourPassword}>Enter your name</div>
          <img
            className={styles.iconPassword}
            alt=""
            src="/icon--useroutline1.svg"
          />
        </div>
        <div className={styles.termsOfServicePrivacyAgr}>
          <div className={styles.iAgreeToContainer}>
            <p className={styles.iAgreeToTheMedidocTermsO}>
              <span
                className={styles.iAgreeTo}
              >{`I agree to the medidoc `}</span>
              <span>{`Terms of Service `}</span>
            </p>
            <p className={styles.iAgreeToTheMedidocTermsO}>
              and Privacy Policy
            </p>
          </div>
          <img className={styles.checkboxIcon} alt="" src="/checkbox1.svg" />
        </div>
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.email}>
          <div className={styles.email1}>user</div>
        </div>
        <div className={styles.phone}>
          <div className={styles.roundedRectangle3} />
          <div className={styles.phone1}>Facitilator</div>
        </div>
      </div>
      <div className={styles.topBar}>
        <div className={styles.rectangle} />
        <div className={styles.buttonParent}>
          <img
            className={styles.buttonIcon}
            alt=""
            src="/button2.svg"
            onClick={onButtonIconClick}
          />
          <b className={styles.signUp2}>Sign Up</b>
        </div>
        <div className={styles.topBar1}>
          <div className={styles.iphoneXstatusBarsstatusBa}>
            <div className={styles.rectangle1} />
            <div className={styles.battery}>
              <div className={styles.border} />
              <img className={styles.capIcon} alt="" src="/cap.svg" />
              <div className={styles.capacity} />
            </div>
            <img className={styles.wifiIcon} alt="" src="/wifi1.svg" />
            <img
              className={styles.cellularConnectionIcon}
              alt=""
              src="/cellular-connection.svg"
            />
            <div className={styles.timeStyle}>
              <div className={styles.time}>9:41</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
