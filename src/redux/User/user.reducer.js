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
    default:
      return state;
  }
};

export default userReducer;
