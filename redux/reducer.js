import { START_EDIT_ITEM, END_EDIT_ITEM, startEditItem, endEditItem } from './actions.js';
import { createReducer } from './createReducer.js';

const initialState = {
  list: ['Apron', 'Belt', 'Cardigan', 'Dress', 'Earrings', 'Fur coat', 'Gloves', 'Hat'],
  selectedIndex: null,
};

const actionsMap = {
  [START_EDIT_ITEM]: (state, action) => {
    return {
      ...state,
      selectedIndex: action.payload,
    }
  },

  [END_EDIT_ITEM]: (state, action) => {
    const newList = [...state.list];
    if (action.payload) {
      newList[state.selectedIndex] = action.payload;
    } else {
      newList.splice(state.selectedIndex, 1)
    }
    return {
      list: newList,
      selectedIndex: null,
    };
  }
};

export const getNextState = createReducer(actionsMap, initialState);
