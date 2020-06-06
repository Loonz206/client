import streams from "../apis/streams";
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM
} from "./types";
// actions
const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

const createStream = formValues => async dispatch => {
  const response = await streams.post("/streams", formValues);
  dispatch({
    type: CREATE_STREAM,
    payload: response.data
  });
};

export {
  signIn,
  signOut,
  createStream
};
