import './App.css'
import Main from './components/Main'
import Authenticate from './components/Authenticate'
import Login from './components/Login'
import Authorized from './components/Authorized'
import AboutUs from './components/AboutUs'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import { Router } from 'react-router'
import { AuthProvider } from './utilities/AuthContext'
import { Switch, Route } from 'react-router-dom'
import history from './utilities/history'
import ScrollToTop from './components/ScrollToTop'


function App() {

  return (
    <div className="App">
      <AuthProvider>
        <Router history={history}>
          <ScrollToTop>
            <Navbar />

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

            <Footer />
          </ScrollToTop>
        </Router>

      </AuthProvider>
    </div>
  );
}

export default App;
