import SignInForm from "../../component/sign-in-form/sign-in-forms.component";
import SignUpForm from "../../component/sign-up-form copy/sign-up-forms.component";
import "./authentication.styles.scss";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
