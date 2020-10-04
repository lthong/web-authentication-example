import * as cons from 'constants/auth';

const initState = {
  token: '',
  authErrMsg: '',
  userGreeting: '',
};

export default (state = initState, action) => {
  switch (action.type) {
    case cons.UPDATE_TOKEN:
      return {
        ...state,
        token: action.token,
      };

    case cons.UPDATE_USER_AUTH_ERR_MSG:
      return {
        ...state,
        authErrMsg: action.authErrMsg,
      };

    case cons.RESET_USER_AUTH_ERR_MSG:
      return {
        ...state,
        authErrMsg: initState.authErrMsg,
      };

    case cons.GET_USER_GREETINGS:
      return {
        ...state,
        userGreeting: action.payload,
      };

    default:
      return state;
  }
};
