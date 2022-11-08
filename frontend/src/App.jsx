import{BrowserRouter as Switch, Routes, Route} from 'react-router-dom';
import NotFound from './components/notFound';
import About from './views/about';
import Dashboard from './views/dashboard';
import Home from './views/home';
import AdminLogin from './views/login';
import Payment from './views/payment';

function App() {
  return (
    <div className="App">
      <Switch>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/login' element={<AdminLogin/>}/>
          <Route exact path='/dashboard' element={<Dashboard/>}/>
          <Route exact path='/pay' element={<Payment/>}/>
          <Route exact path='/about' element={<About/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </Switch>
    </div>
  );
}

export default App;
