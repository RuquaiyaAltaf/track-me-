import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Frame2.module.css";
const Frame2 = () => {
  const navigate = useNavigate();

  const onButtonContainer1Click = useCallback(() => {
    navigate("/top-doctor");
  }, [navigate]);

  return (
    <div className={styles.loginSuccessParent}>
      <div className={styles.loginSuccess}>
        <div className={styles.loginSuccessInner}>
          <div className={styles.frameWrapper}>
            <div className={styles.frameWrapper}>
              <div className={styles.homeIndicator}>
                <div className={styles.homeIndicatorChild} />
                <div className={styles.homeIndicator1} />
              </div>
              <div className={styles.loginOptionsParent}>
                <div className={styles.loginOptions}>
                  <div className={styles.buttons}>
                    <div className={styles.buttonWithFacebook}>
                      <div className={styles.roundedRectangle} />
                      <div className={styles.signInWith}>
                        Sign in with Facebook
                      </div>
                      <img
                        className={styles.facebookIcon}
                        alt=""
                        src="/facebook.svg"
                      />
                    </div>
                    <div className={styles.buttonWithApple}>
                      <div className={styles.roundedRectangle} />
                      <div className={styles.signInWith1}>
                        Sign in with Apple
                      </div>
                      <img
                        className={styles.appleIcon}
                        alt=""
                        src="/apple.svg"
                      />
                    </div>
                    <div className={styles.buttonWithGoogle}>
                      <div className={styles.roundedRectangle} />
                      <div className={styles.signInWith2}>
                        Sign in with Google
                      </div>
                      <img
                        className={styles.googleIcon}
                        alt=""
                        src="/google.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.or}>
                    <div className={styles.orChild} />
                    <div className={styles.orItem} />
                    <div className={styles.or1}>OR</div>
                  </div>
                </div>
                <div className={styles.dontHaveAnContainer}>
                  <span>
                    <span className={styles.dontHaveAn}>
                      Don’t have an account?
                    </span>
                    <span className={styles.span}>{` `}</span>
                  </span>
                  <span className={styles.signUp}>Sign Up</span>
                </div>
                <div className={styles.button}>
                  <div className={styles.buttonChild} />
                  <div className={styles.login}>Login</div>
                </div>
                <div className={styles.forgotPassword}>Forgot Password?</div>
                <div className={styles.inputFields}>
                  <div className={styles.buttonWithApple}>
                    <div className={styles.roundedRectangle3} />
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
                      src="/icon--password3.svg"
                    />
                    <img
                      className={styles.iconEyeSlash}
                      alt=""
                      src="/icon--eye-slash2.svg"
                    />
                  </div>
                  <div className={styles.buttonWithGoogle}>
                    <div className={styles.roundedRectangle3} />
                    <div className={styles.xyzgmailcom}>xyz@gmail.com</div>
                    <img
                      className={styles.iconPassword}
                      alt=""
                      src="/icon--email.svg"
                    />
                    <img
                      className={styles.iconCheck}
                      alt=""
                      src="/icon--check.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.topBar}>
                <div className={styles.rectangle} />
                <div className={styles.topWrapper}>
                  <div className={styles.top}>
                    <img
                      className={styles.buttonIcon}
                      alt=""
                      src="/button.svg"
                    />
                    <b className={styles.login1}>Login</b>
                  </div>
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
              <div className={styles.overlay} />
              <div className={styles.popUp}>
                <div className={styles.content} />
                <div
                  className={styles.button1}
                  onClick={onButtonContainer1Click}
                >
                  <div className={styles.buttonChild} />
                  <div className={styles.goToHome}>Go to home</div>
                </div>
                <div className={styles.text}>
                  <div className={styles.onceAgainYouContainer}>
                    <p className={styles.onceAgainYou}>
                      Once again you login successfully
                    </p>
                    <p className={styles.onceAgainYou}>into assistance app</p>
                  </div>
                  <b className={styles.yeayWelcomeBack}>Yeay! Welcome Back</b>
                </div>
                <img className={styles.doneIcon} alt="" src="/done1.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame2;
