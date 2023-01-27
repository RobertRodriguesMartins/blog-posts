import { API_URL } from '../../api';
import generateJsonFormData from '../utils/convertFormToJson';
import getToken from '../utils/getToken';

export const all = (payload) => {
  return {
    type: 'news/all',
    payload: payload,
  };
};

export const byId = (payload) => {
  return {
    type: 'news/byId',
    payload: payload,
  };
};

export const create = (payload) => {
  return {
    type: 'news/create',
    payload: payload,
  };
};

export const maxOffset = (offset) => {
  return {
    type: 'offset/max',
    payload: offset,
  };
};

export const reset = () => {
  return {
    type: 'reset',
  };
};

export const setLastPostsNumber = (payload) => {
  return {
    type: 'set/totalPosts',
    payload: payload,
  };
};

export const setOffset = (offset) => {
  return {
    type: 'offset/add',
    payload: offset,
  };
};

export const setForm = (payload) => {
  return {
    type: 'set/form',
    payload: payload,
  };
};

export const setToken = (payload) => {
  return {
    type: 'auth/token',
    payload: payload,
  };
};

export const maxOffsetThunk = () => async (dispatch) => {
  try {
    const rawData = await fetch(API_URL + 'post/offset', {
      method: 'GET',
    });

    const response = await rawData.json();

    dispatch(maxOffset(response));
  } catch (e) {
    dispatch(maxOffset(0));
  }
};

export const someThunk = (offset) => async (dispatch) => {
  try {
    const rawData = await fetch(API_URL + `post/some?q=${offset}`, {
      method: 'GET',
    });

    const response = await rawData.json();
    if (response.length > 0) {
      return dispatch(all(response));
    }
    dispatch(all([0]));
  } catch (e) {
    dispatch(all([0]));
  }
};

export const createUserThunk = (myform) => async (dispatch) => {
  try {
    const form = new FormData(myform);
    const rawRequestBody = generateJsonFormData(form, [
      'displayName',
      'email',
      'password',
    ]);
    const requestBody = JSON.stringify(rawRequestBody);
    const headers = new Headers();
    headers.set('Content-type', 'application/json');
    const rawData = await fetch(API_URL + `user`, {
      method: 'POST',
      headers,
      body: requestBody,
    });
    const { token } = await rawData.json();
    if (token) {
      localStorage.setItem('token', token);
      dispatch(setToken(true));
      dispatch(create());
      return;
    }
  } catch (e) {
    dispatch(setToken(false));
    console.log(e);
  }
};

export const byIdThunk = (id) => async (dispatch) => {
  try {
    const rawData = await fetch(`${API_URL}${id}`, {
      method: 'GET',
    });

    const response = await rawData.json();

    dispatch(byId(response));
  } catch (e) {
    console.log(e);
  }
};

export const createThunk = (myForm) => async (dispatch) => {
  try {
    const token = await getToken();
    const form = new FormData(myForm);

    const rawRequestBody = generateJsonFormData(form, [
      'content',
      'categories',
      'title',
    ]);
    if(rawRequestBody.categories) {
      rawRequestBody.categories = rawRequestBody.categories.split(',');
    } else {
      rawRequestBody.categories = [];
    }
    const requestBody = JSON.stringify(rawRequestBody);
    const headers = new Headers();
    headers.set('authorization', token);
    headers.set('Content-type', 'application/json');
    await fetch(API_URL + 'post/', {
      method: 'post',
      body: requestBody,
      headers,
      mode: 'cors',
    });
    dispatch(create());
  } catch (e) {
    dispatch(create(e));
  }
};
