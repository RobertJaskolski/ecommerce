import userTypes from "./user.types";

const INIT_STATE = {
  currentUser: null,
};
const userReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case userTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
      };
    case userTypes.SIGN_OUT_USER_SUCCESS:
      return { ...state, ...INIT_STATE };
    default:
      return state;
  }
};

export default userReducer;
