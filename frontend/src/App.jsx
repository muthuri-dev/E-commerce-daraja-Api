import{BrowserRouter as Switch, Routes, Route} from 'react-router-dom';
import Navbar from './components/navbar';
import Electronics from './utils/electronics';
import Fashions from './utils/fashion';
import Furnature from './utils/furnature';
import Admin from './views/admin';
import Dashboard from './views/admin.dashboard';
import Home from './views/home';

function App() {
  return (
    <div className="App">
      <Switch>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/admin' element={<Admin/>}/>
          <Route exact path= '/dash' element={<Dashboard/>}/>
          <Route exact path='/electronics' element={<Electronics/>}/>
          <Route exact path='/furnitures' element={<Furnature/>}/>
          <Route exact path='/fashions' element={<Fashions/>}/>
        </Routes>
      </Switch>
    </div>
  );
}

export default App;
