import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Home from './pages/Home/Home/Home';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import Login from './pages/Login/Login/Login';
import AllProducts from './pages/AllProducts/AllProducts';
import PrivatRoute from './pages/Login/PrivatRoute/PrivatRoute';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Register from './pages/Login/Register/Register';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';

function App() {

  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/all-products">
            <AllProducts />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <PrivatRoute path="/place-order/:productId">
            <PlaceOrder />
          </PrivatRoute>
          <PrivatRoute path="/dashboard">
            <Dashboard />
          </PrivatRoute>
          <Route path="*">
            <NotFoundPage />
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
