import React from 'react'
import {createStore} from 'redux';

export const App = () => {
 
  // Reducer 
  const counterReducer = (state = 0, action) => {
    switch (action.type) {
      case '@counter/Increment':
        return state + 1
      case '@counter/Decrement':
        return state - 1;
      default:
           //throw new Error('This action is not supported');
           return state;
    }
  }

  //Actions 
  const actionIncrement = {
    type: '@counter/Increment'
  }

  const actionDecrement = {
    type: '@counter/Decrement'
  }


//store reune los action y los reducers
//permite leer y actualizar el estado de la aplicación
//tiene la responsabilidad de llamar al reducer
const store = createStore(counterReducer);

//permite que cada vez que se reciba un cambio al store, va a
//obtener el getstate
//Permite actucalizar cada vez que encontremos un cambio y mostrarlo
// por consola
store.subscribe(() => {
  console.log(store.getState());
})

  return (
    <div>
       <button
       onClick={() => store.dispatch(actionIncrement)}>Increment</button>
       <button
       onClick={() => store.dispatch( actionDecrement)}>Decrement</button>
    </div>
  )
}
