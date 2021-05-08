import './App.css'
import Main from './components/Main'
import Authenticate from './components/Authenticate'
import Login from './components/Login'
import Authorized from './components/Authorized'
import AboutUs from './components/AboutUs'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import { Router } from 'react-router';
import { AuthProvider } from './utilities/AuthContext'
import { Switch, Route } from 'react-router-dom'
import history from './utilities/history'


function App() {
  return (
    <div className="App">

      <AuthProvider>
        <Router
          history={history}
        >
          <Navbar />
          {/* <div className="container text-center mb-5" > */}

          <Authorized />

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


            <Route path="/about" >
              <AboutUs />
            </Route>

          </Switch>
          {/* </div> */}
          <Footer />
        </Router>

      </AuthProvider>
    </div>
  );
}

export default App;
