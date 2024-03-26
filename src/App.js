import "bootstrap/dist/css/bootstrap.css";
/*import "mdb-react-ui-kit/dist/css/mdb.min.css";*/
import "@fortawesome/fontawesome-free/css/all.min.css";
import './App.css';
import { useState } from 'react';
import Home from './components/Home';
import { Provider } from 'react-redux';
import store from './redux/store';
import Shop from './components/Shop';

function App() {
  const [ shop, setShop ] = useState(false)
  return (
    <Provider store={store}>
      { 
      !shop ? <Home setShop={setShop}/> : <Shop setShop={setShop}/>
      }
    </Provider>
  );
}

export default App;
