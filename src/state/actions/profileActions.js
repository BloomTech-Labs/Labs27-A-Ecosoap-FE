import {
  PROFILE_GET_LOADING,
  PROFILE_GET_FAILURE,
  PROFILE_GET_SUCCESS,
  PROFILE_EDIT_LOADING,
  PROFILE_EDIT_SUCCESS,
  PROFILE_EDIT_FAILURE,
} from '../actions/actionTypes';

import { getProfileData, editProfileData } from '../../api';

// Get a profile

export const getProfile = authState => dispatch => {
  dispatch({
    type: PROFILE_GET_LOADING,
  });

  getProfileData(authState)
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

export const editProfile = (authState, profile, history) => dispatch => {
  dispatch({
    type: PROFILE_EDIT_LOADING,
  });

  editProfileData(authState, profile)
    .then(payload => {
      dispatch({
        type: PROFILE_EDIT_SUCCESS,
        payload,
      });

      history.push('/dashboard');
    })
    .catch(err => {
      dispatch({
        type: PROFILE_EDIT_FAILURE,
        payload: err.message,
      });
    });
};
