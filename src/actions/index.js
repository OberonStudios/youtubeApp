import axios from 'axios';
import { USER_INPUT } from './types';

export const fetchVideoList = (userInput) => async dispatch => {
    const res = await axios.get(`https://aakatev.me/api/test?q=${userInput}`);
    console.log(res)
    dispatch({ type: USER_INPUT, payload: res.data });
  };