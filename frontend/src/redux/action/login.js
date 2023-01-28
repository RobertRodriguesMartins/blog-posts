import { API_URL } from '../../api';
import generateJsonFormData from '../utils/convertFormToJson';
import { setForm, setToken } from './news'

const loginUserThunk = (myform) => async (dispatch) => {
  try {
    const form = new FormData(myform);
    const rawRequestBody = generateJsonFormData(form, [
      'email',
      'password',
    ]);
    const requestBody = JSON.stringify(rawRequestBody);
    const headers = new Headers();
    headers.set('Content-type', 'application/json');
    const rawData = await fetch(API_URL + `login`, {
      method: 'POST',
      headers,
      body: requestBody,
    });
    const { token } = await rawData.json();
    if (token) {
      localStorage.setItem('token', token);
      dispatch(setToken(true));
      dispatch(setForm('submitted'));
      return;
    }
    throw new Error('dados invalidos')
  } catch (e) {
    dispatch(setToken(false));
    dispatch(setForm('error'))
  }
};

export default loginUserThunk;
