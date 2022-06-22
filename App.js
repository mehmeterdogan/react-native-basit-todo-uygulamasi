// In App.js in a new project

import * as React from 'react';
import AppRout from './router/AppRout';
import { Provider } from 'react-redux';
import Store from './redux/Stores/Store';


function App() {
  return (
    <Provider store={Store}>
    <AppRout/>
    </Provider>
  );
}

export default App;