import {
  PROFILE_GET_LOADING,
  PROFILE_GET_FAILURE,
  PROFILE_GET_SUCCESS,
} from '../actions/actionTypes';

import { getProfileData } from '../../api';

// Get a profile

export const getProfile = (authState, id) => dispatch => {
  dispatch({
    type: PROFILE_GET_LOADING,
  });

  getProfileData(authState, id)
    .then(payload => {
      dispatch({
        type: PROFILE_GET_SUCCESS,
        payload,
      });
    })
    .catch(err => {
      dispatch({
        type: PROFILE_GET_FAILURE,
        payload: err.message,
      });
    });
};
