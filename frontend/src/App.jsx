import{BrowserRouter as Switch, Routes, Route} from 'react-router-dom';
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
        </Routes>
      </Switch>
    </div>
  );
}

export default App;
