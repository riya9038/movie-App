import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import './index.css';
import App from './components/App';
import rootReducer from './reducers';

const logger= ({dispatch, getState})=>(next)=>(action)=>{
    if(typeof action!=='function')
    {
      console.log('ACTION_TYPE:',action.type)
    }
    next(action)
  }
// const thunk= (dispatch, getState)=>(next)=>(action){
//   if(action.type==='function')
//   {
//     action(dispatch)
//     return;
//   }
//   next(action)
// }
const store= createStore(rootReducer, applyMiddleware(logger, thunk));
console.log(store.getState());

export const StoreContext= createContext();

class Provider extends React.Component{
  render(){
    const {store}= this.props;
    return(
      <StoreContext.Provider value={store}>
        {this.props.children}
      </StoreContext.Provider>
    )
  }
}

// store.dispatch({
//   type: 'ADD_MOVIE',
//   movies:[{name: 'Superman'}]
// })
// console.log(store.getState());
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

