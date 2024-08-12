import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store'; // Ensure this path is correct
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Dashboard />
      </div>
    </Provider>
  );
}

export default App;

