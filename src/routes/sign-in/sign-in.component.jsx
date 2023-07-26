import { signInWithGooglePopup, createUserDocumentFromAuth, signInWithGoogleRedirect } from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../component/sign-up-form/sign-up-forms.component";

const SignIn = () => {

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        createUserDocumentFromAuth(user);
    }

    const logGoogleRedirect = async () => {
        const {user} = await signInWithGoogleRedirect();
        console.log({user});
    }

    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>
                Sign In With Google PopUp
            </button>
            <SignUpForm/>
        </div>
    );
}

export default SignIn;