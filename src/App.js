import './App.css';
import PropType from 'prop-types'
import { useReducer, useContext, createContext } from 'react'

//actions.js
export const actions = {
  CHANGE_TITLE:'CHANGE_TITLE',
};

//data.js
export const globalState = {
  title: 'O título é esse: ',
  body: 'o body é esse',
  counter: 0
};

//reducer.js
export const reducer = (state, action) => {
  console.log(action)
  return { ...state }
};

//AppContext.jsx
export const Context = createContext();
export const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, globalState);

  const changeTitle = ()=>{
    dispatch({ type: actions.CHANGE_TITLE })
  }

  return (
    <Context.Provider value={{ state, changeTitle }}>
      {children}
    </Context.Provider>
  );
};

AppContext.propTypes = {
  children: PropType.node,
};

//H1 - index.jsx
export const H1 = () => {
  const context = useContext(Context)

  return (
    <h1 onClick={() => context.changeTitle}>
      {context.state.title}
    </h1>
  );
}

//App.jsx
export default function App() {

  return (
    <AppContext>
      <div>
        <H1 />
      </div>
    </AppContext>
  );
};


