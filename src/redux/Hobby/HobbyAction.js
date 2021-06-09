import { ADD_HOBBY } from "./HobbyType";
import { SET_ACTIVE_HOBBY } from "./HobbyType";
export const addNewHobby = (hobby) => {
  return {
    type: ADD_HOBBY,
    payload: hobby,
  };
};

export const setActiveHobby = (hobby) => {
  return {
    type: SET_ACTIVE_HOBBY,
    payload: hobby,
  };
};
