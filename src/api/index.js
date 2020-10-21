import axios from 'axios';

// we will define a bunch of API calls here.
const profilesUrl = '/profiles';
const ordersUrl = '/orders';

export const sleep = time =>
  new Promise(resolve => {
    setTimeout(resolve, time);
  });

const getAuthHeader = authState => {
  if (!authState.isAuthenticated) {
    throw new Error('Not authenticated');
  }

  return { Authorization: `Bearer ${authState.idToken}` };
};

const api = authHeader => {
  return axios.create({
    headers: authHeader,
    baseURL: process.env.REACT_APP_API_URI,
  });
};

const getData = async ({ authState, url, defaults }) => {
  try {
    const { data } = await api(getAuthHeader(authState)).get(url);
    return data;
  } catch (error) {
    console.log(error);
    return defaults;
  }
};

const postData = async ({ authState, url, newData }) => {
  try {
    const { data } = await api(getAuthHeader(authState)).post(url, newData);
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const putData = async ({ authState, url, updatedData }) => {
  try {
    const { data } = await api(getAuthHeader(authState)).put(url, updatedData);
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const deleteData = async ({ authState, url }) => {
  try {
    const { data } = await api(getAuthHeader(authState)).delete(url);
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getProfileData = authState =>
  getData({ authState, url: `${profilesUrl}/me`, defaults: [] });

export const editProfileData = (authState, profile) =>
  putData({ authState, url: `${profilesUrl}`, updatedData: profile });

export const getOrderData = authState =>
  getData({ authState, url: ordersUrl, defaults: [] });

export const postOrderData = (authState, order) =>
  postData({ authState, url: ordersUrl, newData: order });

export const deleteOrderData = (authState, id) =>
  deleteData({ authState, url: `${ordersUrl}/${id}` });

export const editOrderData = (authState, id, updatedData) =>
  putData({ authState, url: `${ordersUrl}/${id}`, updatedData });
