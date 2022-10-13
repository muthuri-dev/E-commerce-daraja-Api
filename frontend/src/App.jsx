import{BrowserRouter as Switch, Routes, Route} from 'react-router-dom';
import Furnature from './utils/furnature';
import Admin from './views/admin';
import Stock from './views/admin.panel';
import Home from './views/home';

function App() {
  return (
    <div className="App">
      <Switch>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/admin' element={<Admin/>}/>
          <Route exact path ='/stock' element={<Stock/>}/>
          <Route exact path='/furnitures' element={<Furnature/>}/>
        </Routes>
      </Switch>
    </div>
  );
}

export default App;
