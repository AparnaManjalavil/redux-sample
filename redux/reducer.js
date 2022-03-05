import {INCREAMENT_COUNT} from './constant';
export default countReducer = (
  state = {
    data: {
      count: 0,
    },
  },
  action,
) => {
  switch (action.type) {
    case INCREAMENT_COUNT: {
      return {
        ...state,
        count: action.payload,
      };
    }
    default:
      return state;
  }
};
