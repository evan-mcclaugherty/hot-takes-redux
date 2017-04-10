import {
  auth,
  googleAuthProvider
} from '../firebase';

export const signIn = () => {
  return (dispatch) => { // redux knows to input dispatch
    dispatch({
      type: 'ATTEMPTING_LOGIN'
    });
    auth.signInWithPopup(googleAuthProvider).then(
      ({user}) => {
        dispatch(signedIn(user));
      });
  };
};

export const signOut = () => {
  return (dispatch) => {
    dispatch({
      type: 'ATTEMPTING_SIGNIN'
    });
    setTimeout(() => {
      dispatch(signedOut());
    }, 2000);
  };
};

const signedIn = (user) => {
  return {
    type: 'SIGN_IN',
    email: user.email,
    displayName: user.displayName,
    photoURL: user.photoURL,
    uid: user.uid
  };
};

const signedOut = () => {
  return {
    type: 'SIGN_OUT'
  };
};