import {INCREAMENT_COUNT} from './constant';
export const increamentCount = count => {
  return {
    type: INCREAMENT_COUNT,
    payload: count,
  };
};
