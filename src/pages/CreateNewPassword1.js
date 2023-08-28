import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CreateNewPassword1.module.css";
const CreateNewPassword1 = () => {
  const navigate = useNavigate();

  const onFrame1Click = useCallback(() => {
    navigate("/reset-password-email");
  }, [navigate]);

  return (
    <div className={styles.createNewPassword}>
      <div className={styles.keyboard}>
        <div className={styles.homeIndicatorLight}>
          <div className={styles.homeIndicator} />
        </div>
        <div className={styles.keys}>
          <img className={styles.dictationIcon} alt="" src="/dictation.svg" />
          <img className={styles.emojiIcon} alt="" src="/emoji1.svg" />
          <div className={styles.return}>
            <img className={styles.rectangleIcon} alt="" src="/rectangle.svg" />
            <div className={styles.label}>Go</div>
          </div>
          <div className={styles.space}>
            <img
              className={styles.rectangleIcon}
              alt=""
              src="/rectangle1.svg"
            />
            <div className={styles.label}>space</div>
          </div>
          <div className={styles.div}>
            <img
              className={styles.rectangleIcon}
              alt=""
              src="/rectangle2.svg"
            />
            <div className={styles.label}>123</div>
          </div>
          <div className={styles.delete}>
            <div className={styles.keyLight}>
              <img
                className={styles.rectangleIcon}
                alt=""
                src="/rectangle3.svg"
              />
              <div className={styles.label}>{` `}</div>
            </div>
            <img
              className={styles.deleteButtonIcon}
              alt=""
              src="/delete-button2.svg"
            />
          </div>
          <div className={styles.shift}>
            <div className={styles.keyLight}>
              <div className={styles.rectangle} />
              <div className={styles.symbol}>{` `}</div>
            </div>
            <img className={styles.shiftIcon} alt="" src="/shift3.svg" />
          </div>
          <div className={styles.m}>
            <div className={styles.rectangle} />
            <div className={styles.symbol1}>M</div>
          </div>
          <div className={styles.n}>
            <div className={styles.rectangle} />
            <div className={styles.symbol2}>N</div>
          </div>
          <div className={styles.b}>
            <div className={styles.rectangle} />
            <div className={styles.symbol3}>B</div>
          </div>
          <div className={styles.v}>
            <div className={styles.rectangle} />
            <div className={styles.symbol2}>V</div>
          </div>
          <div className={styles.c}>
            <div className={styles.rectangle} />
            <div className={styles.symbol2}>C</div>
          </div>
          <div className={styles.x}>
            <div className={styles.rectangle} />
            <div className={styles.symbol3}>X</div>
          </div>
          <div className={styles.z}>
            <div className={styles.rectangle} />
            <div className={styles.symbol3}>Z</div>
          </div>
          <div className={styles.l}>
            <div className={styles.rectangle} />
            <div className={styles.symbol8}>L</div>
          </div>
          <div className={styles.k}>
            <div className={styles.rectangle} />
            <div className={styles.symbol3}>K</div>
          </div>
          <div className={styles.j}>
            <div className={styles.rectangle} />
            <div className={styles.symbol8}>J</div>
          </div>
          <div className={styles.h}>
            <div className={styles.rectangle} />
            <div className={styles.symbol2}>H</div>
          </div>
          <div className={styles.g}>
            <div className={styles.rectangle} />
            <div className={styles.symbol2}>G</div>
          </div>
          <div className={styles.f}>
            <div className={styles.rectangle} />
            <div className={styles.symbol3}>F</div>
          </div>
          <div className={styles.d}>
            <div className={styles.rectangle} />
            <div className={styles.symbol2}>D</div>
          </div>
          <div className={styles.s}>
            <div className={styles.rectangle} />
            <div className={styles.symbol3}>S</div>
          </div>
          <div className={styles.a}>
            <div className={styles.rectangle} />
            <div className={styles.symbol2}>A</div>
          </div>
          <div className={styles.p}>
            <div className={styles.rectangle} />
            <div className={styles.symbol3}>P</div>
          </div>
          <div className={styles.o}>
            <div className={styles.rectangle} />
            <div className={styles.symbol18}>O</div>
          </div>
          <div className={styles.i}>
            <div className={styles.rectangle} />
            <div className={styles.symbol19}>I</div>
          </div>
          <div className={styles.u}>
            <div className={styles.rectangle} />
            <div className={styles.symbol2}>U</div>
          </div>
          <div className={styles.y}>
            <div className={styles.rectangle} />
            <div className={styles.symbol3}>Y</div>
          </div>
          <div className={styles.t}>
            <div className={styles.rectangle} />
            <div className={styles.symbol3}>T</div>
          </div>
          <div className={styles.r}>
            <div className={styles.rectangle} />
            <div className={styles.symbol3}>R</div>
          </div>
          <div className={styles.e}>
            <div className={styles.rectangle} />
            <div className={styles.symbol3}>E</div>
          </div>
          <div className={styles.w}>
            <div className={styles.rectangle} />
            <div className={styles.symbol25}>W</div>
          </div>
          <div className={styles.q}>
            <div className={styles.rectangle} />
            <div className={styles.symbol18}>Q</div>
          </div>
        </div>
      </div>
      <div className={styles.button}>
        <div className={styles.buttonChild} />
        <div className={styles.createPassword}>Create Password</div>
      </div>
      <div className={styles.form}>
        <div className={styles.input}>
          <div className={styles.roundedRectangle} />
          <div className={styles.enterNewPassword}>Enter new password</div>
          <img
            className={styles.iconPassword}
            alt=""
            src="/icon--password10.svg"
          />
          <img
            className={styles.iconEyeSlash}
            alt=""
            src="/icon--eye-slash10.svg"
          />
        </div>
        <div className={styles.input1}>
          <div className={styles.roundedRectangle} />
          <div className={styles.enterNewPassword}>Confirm password</div>
          <img
            className={styles.iconEyeSlash}
            alt=""
            src="/icon--eye-slash11.svg"
          />
          <img
            className={styles.iconPassword}
            alt=""
            src="/icon--password11.svg"
          />
        </div>
      </div>
      <div className={styles.text}>
        <b className={styles.createNewPassword1}>Create New Password</b>
        <div className={styles.createYourNew}>
          Create your new password to login
        </div>
      </div>
      <div className={styles.topBar}>
        <div className={styles.rectangle27} />
        <img className={styles.topBarChild} alt="" src="/frame-6.svg" />
        <div className={styles.topBar1}>
          <div className={styles.iphoneXstatusBarsstatusBa}>
            <div className={styles.keyLight} />
            <div className={styles.battery}>
              <div className={styles.border} />
              <img className={styles.capIcon} alt="" src="/cap.svg" />
              <div className={styles.capacity} />
            </div>
            <img className={styles.wifiIcon} alt="" src="/wifi6.svg" />
            <img
              className={styles.cellularConnectionIcon}
              alt=""
              src="/cellular-connection11.svg"
            />
            <div className={styles.timeStyle}>
              <div className={styles.time}>9:41</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.createNewPasswordChild} onClick={onFrame1Click} />
    </div>
  );
};

export default CreateNewPassword1;
