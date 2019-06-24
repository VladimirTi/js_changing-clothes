export const START_EDIT_ITEM = 'startEditItem';
export const END_EDIT_ITEM = 'endEditItem';

export function startEditItem(index) {
  return {
    type: START_EDIT_ITEM,
    payload: index
  };
}

export function endEditItem(value) {
  return {
    type: END_EDIT_ITEM,
    payload: value
  };
}
