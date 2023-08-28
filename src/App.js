import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Frame from "./pages/Frame";
import Frame1 from "./pages/Frame1";
import Rectangle from "./pages/Rectangle";
import Rectangle1 from "./pages/Rectangle1";
import CreateNewPasswordSuccess from "./pages/CreateNewPasswordSuccess";
import CreateNewPassword from "./pages/CreateNewPassword";
import Frame2 from "./pages/Frame2";
import ResetPasswordEmail from "./pages/ResetPasswordEmail";
import ResetPasswordPhone from "./pages/ResetPasswordPhone";
import ResetPasswordVerifyCode from "./pages/ResetPasswordVerifyCode";
import SignUpSuccess from "./pages/SignUpSuccess";
import SignUp from "./pages/SignUp";
import Frame3 from "./pages/Frame3";
import Frame4 from "./pages/Frame4";
import TopDoctor from "./pages/TopDoctor";
import Frame5 from "./pages/Frame5";
import Location1 from "./pages/Location1";
import Onboarding7 from "./pages/Onboarding7";
import Onboarding6 from "./pages/Onboarding6";
import Onboarding5 from "./pages/Onboarding5";
import Frame6 from "./pages/Frame6";
import Frame7 from "./pages/Frame7";
import Frame8 from "./pages/Frame8";
import Location2 from "./pages/Location2";
import Frame9 from "./pages/Frame9";
import Frame10 from "./pages/Frame10";
import Frame11 from "./pages/Frame11";
import Frame12 from "./pages/Frame12";
import Frame13 from "./pages/Frame13";
import Frame14 from "./pages/Frame14";
import Frame15 from "./pages/Frame15";
import Profile from "./pages/Profile";
import LogOutPopUp from "./pages/LogOutPopUp";
import Location3 from "./pages/Location3";
import ResetPasswordEmail1 from "./pages/ResetPasswordEmail1";
import ResetPasswordPhone1 from "./pages/ResetPasswordPhone1";
import ResetPasswordVerifyCode1 from "./pages/ResetPasswordVerifyCode1";
import CreateNewPasswordSuccess1 from "./pages/CreateNewPasswordSuccess1";
import CreateNewPassword1 from "./pages/CreateNewPassword1";
import SignUp1 from "./pages/SignUp1";
import SignUpSuccess1 from "./pages/SignUpSuccess1";
import Onboarding2 from "./pages/Onboarding2";
import Onboarding3 from "./pages/Onboarding3";
import Onboarding4 from "./pages/Onboarding4";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/frame-50":
        title = "";
        metaDescription = "";
        break;
      case "/rectangle-972":
        title = "";
        metaDescription = "";
        break;
      case "/rectangle-970":
        title = "";
        metaDescription = "";
        break;
      case "/create-new-password-success":
        title = "";
        metaDescription = "";
        break;
      case "/create-new-password":
        title = "";
        metaDescription = "";
        break;
      case "/frame-49":
        title = "";
        metaDescription = "";
        break;
      case "/reset-password-email1":
        title = "";
        metaDescription = "";
        break;
      case "/reset-password-phone":
        title = "";
        metaDescription = "";
        break;
      case "/reset-password-verify-code":
        title = "";
        metaDescription = "";
        break;
      case "/sign-up-success":
        title = "";
        metaDescription = "";
        break;
      case "/sign-up":
        title = "";
        metaDescription = "";
        break;
      case "/frame-48":
        title = "";
        metaDescription = "";
        break;
      case "/frame-47":
        title = "";
        metaDescription = "";
        break;
      case "/top-doctor":
        title = "";
        metaDescription = "";
        break;
      case "/frame-42":
        title = "";
        metaDescription = "";
        break;
      case "/location":
        title = "";
        metaDescription = "";
        break;
      case "/onboarding-7":
        title = "";
        metaDescription = "";
        break;
      case "/onboarding-6":
        title = "";
        metaDescription = "";
        break;
      case "/onboarding-5":
        title = "";
        metaDescription = "";
        break;
      case "/frame-45":
        title = "";
        metaDescription = "";
        break;
      case "/frame-44":
        title = "";
        metaDescription = "";
        break;
      case "/frame-43":
        title = "";
        metaDescription = "";
        break;
      case "/location1":
        title = "";
        metaDescription = "";
        break;
      case "/frame-41":
        title = "";
        metaDescription = "";
        break;
      case "/frame-40":
        title = "";
        metaDescription = "";
        break;
      case "/frame-39":
        title = "";
        metaDescription = "";
        break;
      case "/frame-37":
        title = "";
        metaDescription = "";
        break;
      case "/frame-31":
        title = "";
        metaDescription = "";
        break;
      case "/frame-30":
        title = "";
        metaDescription = "";
        break;
      case "/frame-29":
        title = "";
        metaDescription = "";
        break;
      case "/profile":
        title = "";
        metaDescription = "";
        break;
      case "/log-out-pop-up":
        title = "";
        metaDescription = "";
        break;
      case "/location2":
        title = "";
        metaDescription = "";
        break;
      case "/reset-password-email":
        title = "";
        metaDescription = "";
        break;
      case "/reset-password-phone1":
        title = "";
        metaDescription = "";
        break;
      case "/reset-password-verify-code1":
        title = "";
        metaDescription = "";
        break;
      case "/create-new-password-success1":
        title = "";
        metaDescription = "";
        break;
      case "/create-new-password1":
        title = "";
        metaDescription = "";
        break;
      case "/sign-up1":
        title = "";
        metaDescription = "";
        break;
      case "/sign-up-success1":
        title = "";
        metaDescription = "";
        break;
      case "/onboarding-2":
        title = "";
        metaDescription = "";
        break;
      case "/onboarding-3":
        title = "";
        metaDescription = "";
        break;
      case "/onboarding-4":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Frame />} />
      <Route path="/frame-50" element={<Frame1 />} />
      <Route path="/rectangle-972" element={<Rectangle />} />
      <Route path="/rectangle-970" element={<Rectangle1 />} />
      <Route
        path="/create-new-password-success"
        element={<CreateNewPasswordSuccess />}
      />
      <Route path="/create-new-password" element={<CreateNewPassword />} />
      <Route path="/frame-49" element={<Frame2 />} />
      <Route path="/reset-password-email1" element={<ResetPasswordEmail />} />
      <Route path="/reset-password-phone" element={<ResetPasswordPhone />} />
      <Route
        path="/reset-password-verify-code"
        element={<ResetPasswordVerifyCode />}
      />
      <Route path="/sign-up-success" element={<SignUpSuccess />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/frame-48" element={<Frame3 />} />
      <Route path="/frame-47" element={<Frame4 />} />
      <Route path="/top-doctor" element={<TopDoctor />} />
      <Route path="/frame-42" element={<Frame5 />} />
      <Route path="/location" element={<Location1 />} />
      <Route path="/onboarding-7" element={<Onboarding7 />} />
      <Route path="/onboarding-6" element={<Onboarding6 />} />
      <Route path="/onboarding-5" element={<Onboarding5 />} />
      <Route path="/frame-45" element={<Frame6 />} />
      <Route path="/frame-44" element={<Frame7 />} />
      <Route path="/frame-43" element={<Frame8 />} />
      <Route path="/location1" element={<Location2 />} />
      <Route path="/frame-41" element={<Frame9 />} />
      <Route path="/frame-40" element={<Frame10 />} />
      <Route path="/frame-39" element={<Frame11 />} />
      <Route path="/frame-37" element={<Frame12 />} />
      <Route path="/frame-31" element={<Frame13 />} />
      <Route path="/frame-30" element={<Frame14 />} />
      <Route path="/frame-29" element={<Frame15 />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/log-out-pop-up" element={<LogOutPopUp />} />
      <Route path="/location2" element={<Location3 />} />
      <Route path="/reset-password-email" element={<ResetPasswordEmail1 />} />
      <Route path="/reset-password-phone1" element={<ResetPasswordPhone1 />} />
      <Route
        path="/reset-password-verify-code1"
        element={<ResetPasswordVerifyCode1 />}
      />
      <Route
        path="/create-new-password-success1"
        element={<CreateNewPasswordSuccess1 />}
      />
      <Route path="/create-new-password1" element={<CreateNewPassword1 />} />
      <Route path="/sign-up1" element={<SignUp1 />} />
      <Route path="/sign-up-success1" element={<SignUpSuccess1 />} />
      <Route path="/onboarding-2" element={<Onboarding2 />} />
      <Route path="/onboarding-3" element={<Onboarding3 />} />
      <Route path="/onboarding-4" element={<Onboarding4 />} />
    </Routes>
  );
}
export default App;
