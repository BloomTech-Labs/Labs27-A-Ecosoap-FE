import {
  PROFILE_GET_LOADING,
  PROFILE_GET_FAILURE,
  PROFILE_GET_SUCCESS,
} from '../actions/actionTypes';

const initialState = {
  profile: {},
  loading: false,
  error: '',
};

export default function profileReducer(state = initialState, action) {
  switch (action.type) {
    case PROFILE_GET_LOADING:
      return { ...state, loading: true };

    case PROFILE_GET_SUCCESS:
      return { ...state, loading: false, profile: action.payload };

    case PROFILE_GET_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}
