import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ResetPasswordVerifyCode1.module.css";
const ResetPasswordVerifyCode1 = () => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/reset-password-phone1");
  }, [navigate]);

  return (
    <div className={styles.resetPasswordVerifyCode}>
      <div className={styles.homeIndicator}>
        <div className={styles.homeIndicatorChild} />
        <div className={styles.homeIndicator1} />
      </div>
      <div className={styles.keyboard}>
        <div className={styles.background}>
          <div className={styles.background1} />
        </div>
        <div className={styles.homeIndicator2}>
          <div className={styles.homeIndicator3} />
        </div>
        <div className={styles.keys}>
          <img className={styles.deleteIcon} alt="" src="/delete.svg" />
          <div className={styles.div}>
            <img
              className={styles.keyBackgroundIcon}
              alt=""
              src="/key-background.svg"
            />
            <div className={styles.number}>0</div>
          </div>
          <div className={styles.div1}>
            <img
              className={styles.keyBackgroundIcon}
              alt=""
              src="/key-background1.svg"
            />
            <b className={styles.label}>WXYZ</b>
            <div className={styles.number1}>9</div>
          </div>
          <div className={styles.div2}>
            <img
              className={styles.keyBackgroundIcon}
              alt=""
              src="/key-background1.svg"
            />
            <b className={styles.label}>TUV</b>
            <div className={styles.number1}>8</div>
          </div>
          <div className={styles.div3}>
            <img
              className={styles.keyBackgroundIcon}
              alt=""
              src="/key-background1.svg"
            />
            <b className={styles.label}>PQRS</b>
            <div className={styles.number1}>7</div>
          </div>
          <div className={styles.div4}>
            <img
              className={styles.keyBackgroundIcon}
              alt=""
              src="/key-background1.svg"
            />
            <b className={styles.label}>MNO</b>
            <div className={styles.number1}>6</div>
          </div>
          <div className={styles.div5}>
            <img
              className={styles.keyBackgroundIcon}
              alt=""
              src="/key-background1.svg"
            />
            <b className={styles.label}>JKL</b>
            <div className={styles.number1}>5</div>
          </div>
          <div className={styles.div6}>
            <img
              className={styles.keyBackgroundIcon}
              alt=""
              src="/key-background1.svg"
            />
            <b className={styles.label}>GHI</b>
            <div className={styles.number1}>4</div>
          </div>
          <div className={styles.div7}>
            <img
              className={styles.keyBackgroundIcon}
              alt=""
              src="/key-background.svg"
            />
            <b className={styles.label}>DEF</b>
            <div className={styles.number1}>3</div>
          </div>
          <div className={styles.div8}>
            <img
              className={styles.keyBackgroundIcon}
              alt=""
              src="/key-background.svg"
            />
            <b className={styles.label}>ABC</b>
            <div className={styles.number1}>2</div>
          </div>
          <div className={styles.div9}>
            <img
              className={styles.keyBackgroundIcon}
              alt=""
              src="/key-background.svg"
            />
            <div className={styles.label}>{` `}</div>
            <div className={styles.number1}>1</div>
          </div>
        </div>
      </div>
      <div className={styles.resendLink}>
        <div className={styles.didntReceiveThe}>Didn’t receive the code?</div>
        <div className={styles.resend}>Resend</div>
      </div>
      <div className={styles.button} onClick={onButtonContainerClick}>
        <div className={styles.buttonChild} />
        <div className={styles.verify}>Verify</div>
      </div>
      <div className={styles.inputOtpview}>
        <div className={styles.input}>
          <div className={styles.input1}>
            <div className={styles.inputChild} />
            <b className={styles.b}>5</b>
          </div>
          <div className={styles.input2}>
            <div className={styles.inputItem} />
            <b className={styles.b}>6</b>
          </div>
          <div className={styles.input3}>
            <div className={styles.inputChild} />
            <b className={styles.b}>4</b>
          </div>
          <div className={styles.input4}>
            <div className={styles.rectangleDiv} />
            <div className={styles.div10}>5</div>
          </div>
        </div>
      </div>
      <div className={styles.text}>
        <b className={styles.enterVerificationCode}>Enter Verification Code</b>
        <div className={styles.enterCodeThatContainer}>
          <span>{`Enter code that we have sent to your number `}</span>
          <span className={styles.span}>{`08528188*** `}</span>
        </div>
      </div>
      <div className={styles.topBar}>
        <div className={styles.rectangle} />
        <img className={styles.topBarChild} alt="" src="/frame-62.svg" />
        <div className={styles.topBar1}>
          <div className={styles.iphoneXstatusBarsstatusBa}>
            <div className={styles.background} />
            <div className={styles.battery}>
              <div className={styles.border} />
              <img className={styles.capIcon} alt="" src="/cap.svg" />
              <div className={styles.capacity} />
            </div>
            <img className={styles.wifiIcon} alt="" src="/wifi6.svg" />
            <img
              className={styles.cellularConnectionIcon}
              alt=""
              src="/cellular-connection10.svg"
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

export default ResetPasswordVerifyCode1;
