
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Userroute from './route/Userroute';
import Adminroute from './route/Adminroute';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { configstore } from './redux/Store';

function App() {
  const { store, persistor } = configstore();
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Routes>
            <Route exact path='/*' element={<Userroute />} />
            <Route exact path='/admin/*' element={<Adminroute />} />
          </Routes>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
