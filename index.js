import { createStore } from '../node_modules/redux/es/redux.mjs';
import { getNextState } from './redux/reducer.js';
import { startEditItem, endEditItem } from './redux/actions.js';

const store = createStore(getNextState);

store.subscribe(() => {
  render();
})

const root = document.querySelector('#root');

render();

function render() {
  while (root.firstElementChild) {
    root.firstElementChild.remove();
  }
  store.getState().list.forEach((food, index) => {
    const li = document.createElement('li');
    if (store.getState().selectedIndex === index) {
      const input = document.createElement('input');
      li.append(input);
      input.type = 'text';
      input.value = food;
      input.addEventListener('keyup', event => {
        if (event.keyCode === 13) {
          store.dispatch(endEditItem(event.target.value));
        }
      });
    } else {
      li.innerText = food;
      li.addEventListener('click', () => {
        store.dispatch(startEditItem(index));
      });
    }
    root.append(li);
  });
}
