import { REGISTER_USER } from '../actions/types';

export default function(state = {}, {type, payload}) {
  switch (type) {
    case REGISTER_USER:
      return payload;
    default:
      return state;
  }
}
