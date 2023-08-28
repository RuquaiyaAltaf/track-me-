import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Frame3.module.css";
const Frame3 = () => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/frame-49");
  }, [navigate]);

  const onForgotPasswordTextClick = useCallback(() => {
    navigate("/create-new-password");
  }, [navigate]);

  return (
    <div className={styles.loginParent}>
      <div className={styles.login}>
        <div className={styles.homeIndicator}>
          <div className={styles.homeIndicatorChild} />
          <div className={styles.homeIndicator1} />
        </div>
        <div className={styles.loginChild} />
        <div className={styles.loginItem} />
        <div className={styles.vectorParent}>
          <img className={styles.frameChild} alt="" src="/vector-35.svg" />
          <div className={styles.or}>OR</div>
          <img className={styles.frameItem} alt="" src="/vector-35.svg" />
        </div>
        <div className={styles.buttonWithGoogle}>
          <div className={styles.roundedRectangle} />
          <div className={styles.signInWith}>Sign in with Google</div>
          <img className={styles.googleIcon} alt="" src="/google.svg" />
        </div>
        <div className={styles.buttonWithApple}>
          <div className={styles.roundedRectangle} />
          <div className={styles.signInWith1}>Sign in with Apple</div>
          <img className={styles.appleIcon} alt="" src="/apple1.svg" />
        </div>
        <div className={styles.buttonWithFacebook}>
          <div className={styles.roundedRectangle} />
          <div className={styles.signInWith2}>Sign in with Facebook</div>
          <img className={styles.facebookIcon} alt="" src="/facebook.svg" />
        </div>
        <div className={styles.signupLink}>
          <div className={styles.dontHaveAn}>Don’t have an account?</div>
          <div className={styles.signUp}>Sign Up</div>
        </div>
        <div className={styles.button} onClick={onButtonContainerClick}>
          <div className={styles.buttonChild} />
          <div className={styles.login1}>Login</div>
        </div>
        <div className={styles.form}>
          <div className={styles.password}>
            <div className={styles.roundedRectangle3} />
            <div className={styles.enterYourPassword}>Enter your password</div>
            <img
              className={styles.iconEyeSlash}
              alt=""
              src="/icon--eye-slash5.svg"
            />
            <img
              className={styles.iconPassword}
              alt=""
              src="/icon--password1.svg"
            />
          </div>
          <div className={styles.email}>
            <div className={styles.roundedRectangle4} />
            <div className={styles.enterYourEmail}>Enter your email</div>
            <img className={styles.iconEmail} alt="" src="/icon--email3.svg" />
          </div>
          <div className={styles.rectangleParent}>
            <div className={styles.groupChild} />
            <div className={styles.email1}>
              <div className={styles.email2}>user</div>
            </div>
            <div className={styles.phone}>
              <div className={styles.roundedRectangle5} />
              <div className={styles.phone1}>Facitilator</div>
            </div>
          </div>
        </div>
        <div
          className={styles.forgotPassword}
          onClick={onForgotPasswordTextClick}
        >
          Forgot Password?
        </div>
        <div className={styles.topBar}>
          <div className={styles.rectangle} />
          <div className={styles.loginWrapper}>
            <b className={styles.login2}>Login</b>
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
    </div>
  );
};

export default Frame3;
