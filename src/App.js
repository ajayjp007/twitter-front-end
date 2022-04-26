import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './Pages/Login';
import ErrorPage from './Pages/404page';
import Welcome from "./Pages/welcome"
import SignUp from './Pages/SignUp';

function App() {
 
  return (
   
    <Switch>
        <Route path="/" exact>
          <Redirect to="/twitter-login"></Redirect>
        </Route>
        <Route path="/twitter-login" exact>
          <Login />
        </Route>
        <Route path="/twitter-welcome">
          <Welcome />
        </Route>
        <Route path="/twitter-signUp">
          <SignUp />
        </Route>
        <Route path='*'>
          <ErrorPage />
        </Route>
      </Switch>
  );
}

export default App;
