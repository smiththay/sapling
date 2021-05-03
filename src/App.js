import './App.css';
import Main from './components/Main';
import Authenticate from './components/Authenticate';
import Login from './components/Login'
import Dashboard from './components/Dashboard';

import { AuthProvider } from './utilities/AuthContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>

            <Route exact path='/'>
              <Main />
            </Route>

            <Route path="/register" >
              <Authenticate />
            </Route>

            <Route path="/login" >
              <Login />
            </Route>

            <Route path="/dashboard">
              <Dashboard />
            </Route>
            
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
