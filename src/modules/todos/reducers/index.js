import _ from 'lodash';

const todos = (state = {}, action) => {
    console.log('action: ', action);
    switch (action.type) {
        case 'ADD_TODO': {
            return {
                ...state,
                [action.id]: {
                    text: action.text,
                    id: action.id,
                    complete: false
                }
            }

        }
        case 'REMOVE_TODO': {
            const nextState = {
                ...state
            }
            delete nextState[action.id];
            return nextState;
        }
        case 'TOGGLE_TODO': {
            const nextState = {
                ...state
            }
            const prevComplete = state[action.id].complete;
            nextState[action.id].complete = !prevComplete;
            return nextState;
        }
      default:
          return state
    }
}

export default todos
