import { ADD_HOBBY } from "./HobbyType";
import { SET_ACTIVE_HOBBY } from "./HobbyType";
const initialState = {
  list: [],
  listID: null,
};
const hobbyReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_HOBBY: {
      const newList = [...state.list];
      newList.push(action.payload);
      return {
        ...state,
        list: newList,
      };
    }

    case SET_ACTIVE_HOBBY: {
      const newActiveId = action.payload.id;
      return {
        ...state,
        activeId: newActiveId,
      };
    }
    default:
      return state;
  }
};

export default hobbyReducer;
