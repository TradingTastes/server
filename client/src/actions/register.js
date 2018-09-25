import axios from 'axios';
import { REGISTER_USER } from './types';

// export const registerUser = (values) => async dispatch => {
//   console.log("action register", values);
//   const res = await axios.post('/register_user', values);
//   console.log("res.data", res.data);
//
//   dispatch({ type: REGISTER_USER, payload: res.data });
// };

export const registerUser = (values) => {
  console.log("values", values);
  return dispatch => {
    return axios.post('/register_user', values)
      .then(response => {
        // return response.headers['content-type'] === 'application/json' ? dispatch({type: REGISTER_USER, payload: response.data}) : Promise.reject(response);
        console.log("response", response);
        dispatch({type: REGISTER_USER, payload: response.data})
      })
      .catch(err => {
        console.log("error registering user");
      });
  }
}
// 
// axios.interceptors.response.use(response => {
//   return response.headers['content-type'] === 'application/json' ? response : Promise.reject(response);
// }, error => Promise.reject(error));
