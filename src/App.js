import './App.css'
import Main from './components/Main'
import Authenticate from './components/Authenticate'
import Login from './components/Login'
import Authorized from './components/Authorized'
import Navbar from './components/Navbar'
import Footer from './components/Footer'




import { AuthProvider } from './utilities/AuthContext'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
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

          </Switch>
          {/* </div> */}
          <Footer />
        </Router>

      </AuthProvider>
    </div>
  );
}

export default App;
