import React from 'react';
import './index.css'
import Counter from './components/Counter';
import User from './components/User';
import store from './app/store';
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <Counter />
      <User />
    </Provider>
  );
}

export default App;
