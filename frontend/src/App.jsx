import{BrowserRouter as Switch, Routes, Route} from 'react-router-dom';
import Electronics from './utils/electronics';
import Fashions from './utils/furnature';
import Furnature from './utils/furnature';
import Admin from './views/admin';
import Dashboard from './views/admin.dashboard';
//import Stock from './views/admin.panel';
import Home from './views/home';

function App() {
  return (
    <div className="App">
      <Switch>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/admin' element={<Admin/>}/>
          <Route exact path ='/fashions' element={<Fashions/>}/>
          <Route exact path='/furnitures' element={<Furnature/>}/>
          <Route exact path= '/dash' element={<Dashboard/>}/>
          <Route exact path='/electronics' element={<Electronics/>}/>
        </Routes>
      </Switch>
    </div>
  );
}

export default App;
