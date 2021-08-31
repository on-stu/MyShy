import { createStore } from "redux";

const GETUSER = "GETUSER";

const getUserObj = (userObj) => {
  return {
    type: GETUSER,
    userObj,
  };
};

const reducer = (state = {}, action) => {
  switch (action.type) {
    case GETUSER:
      return { userObj: action.userObj };
  }
};

const store = createStore(reducer);

export const actionCreators = {
  getUserObj,
};
export default store;
