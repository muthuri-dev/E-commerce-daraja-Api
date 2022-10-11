import{BrowserRouter as Switch, Routes, Route} from 'react-router-dom';
import Home from './views/home';

function App() {
  return (
    <div className="App">
      <Switch>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
        </Routes>
      </Switch>
    </div>
  );
}

export default App;
