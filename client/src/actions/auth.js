import axios from 'axios';
import * as cons from 'constants/auth';

const saveToken = ({
  response: {
    data: { token },
  },
  dispatch,
  cb = () => {},
}) => {
  localStorage.setItem('token', token);
  dispatch({ type: cons.UPDATE_TOKEN, token });
  cb();
};

export const signup = ({ formData, cb }) => (dispatch) => {
  axios
    .post('http://localhost:3090/signup', formData)
    .then((response) => {
      saveToken({ response, dispatch, cb });
    })
    .catch((e) => {
      const { error: authErrMsg } = e.response.data;
      dispatch({
        type: cons.UPDATE_USER_AUTH_ERR_MSG,
        authErrMsg,
      });
    });
};

export const signin = ({ formData, cb }) => (dispatch) => {
  axios
    .post('http://localhost:3090/signin', formData)
    .then((response) => {
      saveToken({ response, dispatch, cb });
    })
    .catch(() => {
      dispatch({
        type: cons.UPDATE_USER_AUTH_ERR_MSG,
        authErrMsg: 'Invalid login credentials',
      });
    });
};

export const resetAuthErrMsg = () => {
  return {
    type: cons.RESET_USER_AUTH_ERR_MSG,
  };
};

export const logout = () => {
  localStorage.removeItem('token');
  return {
    type: cons.UPDATE_TOKEN,
    token: '',
  };
};

export const getUserGreetings = () => (dispatch, getState) => {
  const token = getState().auth.token;
  axios
    .get('http://localhost:3090/', { headers: { authorization: token } })
    .then((response) => {
      dispatch({ type: cons.GET_USER_GREETINGS, payload: response.data });
    });
};
