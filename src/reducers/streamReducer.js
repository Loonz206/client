import omit from "lodash.omit";
import mapKeys from "lodash.mapkeys";
import {
  FETCH_STREAM,
  FETCH_STREAMS,
  CREATE_STREAM,
  EDIT_STREAM,
  DELETE_STREAM
} from "../actions/types";

// streamsReducers
export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAM: {
      return {
        ...state,
        [action.payload.id]: action.payload
      };
    }
    case FETCH_STREAMS: {
      return {
        ...state,
        ...mapKeys(action.payload, "id")
      };
    }
    case CREATE_STREAM: {
      return {
        ...state,
        [action.payload.id]: action.payload
      };
    }
    case EDIT_STREAM: {
      return {
        ...state,
        [action.payload.id]: action.payload
      };
    }
    case DELETE_STREAM: {
      return omit(state, action.payload);
    }
    default:
      return state;
  }
};
