export function createReducer(actionsMap, initialState) {
  return (state = initialState, action) => {
    const actionHandller = actionsMap[action.type];
    return actionHandller ? actionHandller(state, action) : state;
  }
}