import userTypes from "./user.types";

const INIT_STATE = {
  currentUser: null,
  signInSuccess: false,
  signUpSuccess: false,
  signUpError: [],
};
const userReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case userTypes.SET_CURRENT_USER:
      return { ...state, currentUser: action.payload };
    case userTypes.SIGN_IN_SUCCESS:
      return { ...state, signInSuccess: action.payload };
    case userTypes.SIGN_UP_SUCCESS:
      return { ...state, signUpSuccess: action.payload };
    case userTypes.SIGN_UP_ERROR:
      return { ...state, signUpError: action.payload };
    default:
      return state;
  }
};

export default userReducer;
