import * as cons from 'constants/auth';

const initState = {
  token: '',
  authErrMsg: '',
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

    default:
      return state;
  }
};
