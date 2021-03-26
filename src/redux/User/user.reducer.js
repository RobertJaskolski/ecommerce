import userTypes from "./user.types";

const INIT_STATE = {
  currentUser: null,
  userErr: [],
};
const userReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case userTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        userErr: [],
      };
    case userTypes.SIGN_OUT_USER_SUCCESS:
      return { ...state, ...INIT_STATE };
    case userTypes.USER_ERROR:
      return { ...state, userErr: action.payload };
    default:
      return state;
  }
};

export default userReducer;
