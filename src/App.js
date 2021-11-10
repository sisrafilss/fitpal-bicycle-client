import './App.css';
import { Typography } from '@mui/material';
import Login from './pages/Login/Login/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AuthProvider from './contexts/AuthProvider/AuthProvider';

function App() {
  return (
    <div className="App">

      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Typography variant="h1">
                Welcome to <span style={{ color: "red" }}>FitPal Bicycle</span>
              </Typography>
              <Login />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>


    </div>
  );
}

export default App;
