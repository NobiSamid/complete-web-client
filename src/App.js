import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navigation from './pages/shared/Navigation';
import Home from './pages/home/home/Home';
import Appoinment from './pages/Appoinment/Appoinment/Appoinment';
import Login from './pages/login/Login';
import Register from './pages/login/register/Register';
import AuthProvider from './context/authprovicer/AuthProvider';
import PrivateRoute from './pages/login/privateroute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navigation></Navigation>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <PrivateRoute path="/appoinment">
              <Appoinment></Appoinment>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
