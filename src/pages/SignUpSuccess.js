import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SignUpSuccess.module.css";
const SignUpSuccess = () => {
  const navigate = useNavigate();

  const onButtonContainer1Click = useCallback(() => {
    navigate("/top-doctor");
  }, [navigate]);

  return (
    <div className={styles.signUpSuccess}>
      <div className={styles.homeIndicator}>
        <div className={styles.homeIndicatorChild} />
        <div className={styles.homeIndicator1} />
      </div>
      <div className={styles.dontHaveAnAccountSignUpParent}>
        <div className={styles.dontHaveAnContainer}>
          <span>
            <span className={styles.dontHaveAn}>Don’t have an account?</span>
            <span className={styles.span}>{` `}</span>
          </span>
          <span className={styles.signUp}>Sign Up</span>
        </div>
        <div className={styles.button}>
          <div className={styles.buttonChild} />
          <div className={styles.signUp1}>Sign Up</div>
        </div>
        <div className={styles.inputFields}>
          <div className={styles.termsOfServicePrivacyAgr}>
            <div className={styles.iAgreeToContainer}>
              <span>{`I agree to the medidoc `}</span>
              <span className={styles.termsOfService}>
                Terms of Service and Privacy Policy
              </span>
            </div>
            <img className={styles.checkboxIcon} alt="" src="/checkbox.svg" />
          </div>
          <div className={styles.input}>
            <div className={styles.roundedRectangle} />
            <div className={styles.placeholder}>
              <div className={styles.placeholderChild} />
              <div className={styles.placeholderChild} />
              <div className={styles.placeholderChild} />
              <div className={styles.placeholderChild} />
              <div className={styles.placeholderChild} />
              <div className={styles.placeholderChild} />
              <div className={styles.placeholderChild} />
              <div className={styles.placeholderChild} />
            </div>
            <img
              className={styles.iconPassword}
              alt=""
              src="/icon--password4.svg"
            />
            <img
              className={styles.iconEyeSlash}
              alt=""
              src="/icon--eye-slash3.svg"
            />
          </div>
          <div className={styles.input1}>
            <div className={styles.roundedRectangle} />
            <div className={styles.xyzgmailcom}>xyz@gmail.com</div>
            <img
              className={styles.iconPassword}
              alt=""
              src="/icon--email2.svg"
            />
            <img className={styles.iconCheck} alt="" src="/icon--check2.svg" />
          </div>
          <div className={styles.input2}>
            <div className={styles.roundedRectangle} />
            <img
              className={styles.iconPassword}
              alt=""
              src="/icon--useroutline.svg"
            />
            <div className={styles.xyzgmailcom}>James Schleifer</div>
          </div>
        </div>
      </div>
      <div className={styles.topBar}>
        <div className={styles.rectangle} />
        <div className={styles.top}>
          <img className={styles.buttonIcon} alt="" src="/button1.svg" />
          <b className={styles.signUp2}>Sign Up</b>
        </div>
        <div className={styles.topBar1}>
          <div className={styles.iphoneXstatusBarsstatusBa}>
            <div className={styles.rectangle} />
            <div className={styles.battery}>
              <div className={styles.border} />
              <img className={styles.capIcon} alt="" src="/cap.svg" />
              <div className={styles.capacity} />
            </div>
            <img className={styles.wifiIcon} alt="" src="/wifi1.svg" />
            <img
              className={styles.cellularConnectionIcon}
              alt=""
              src="/cellular-connection2.svg"
            />
            <div className={styles.timeStyle}>
              <div className={styles.time}>9:41</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.overlay} />
      <div className={styles.popUp}>
        <div className={styles.button1} onClick={onButtonContainer1Click}>
          <div className={styles.buttonChild} />
          <div className={styles.goToHome}>Go to home</div>
        </div>
        <div className={styles.text}>
          <b className={styles.success}>Success</b>
          <div className={styles.yourAccountHasContainer}>
            <p className={styles.yourAccountHas}>{`Your account has been `}</p>
            <p className={styles.yourAccountHas}>successfully registered</p>
          </div>
        </div>
        <img className={styles.doneIcon} alt="" src="/done2.svg" />
      </div>
    </div>
  );
};

export default SignUpSuccess;
