import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Login } from './pages/Login';
import { Registration } from './pages/Registration';
import { RecoverPassword } from './pages/RecoverPassword';
import { EmailConfirmation } from './pages/EmailConfirmation';
import { Home } from './pages/Home';
import { Charge } from './pages/Charge';
import { CreateCharges } from './pages/CreateCharges';

function App() {
  return (
  <BrowserRouter>
  <Switch>
    <Route path="/" exact component={Login}/>
    <Route path="/home" component={Home}/>
    <Route path="/charge" component={Charge}/>
    <Route path="/createcharges" component={CreateCharges}/>
    <Route path="/registration" component={Registration}/>
    <Route path="/recoverPassword" component={RecoverPassword}/>
    <Route path="/emailConfirmation" component={EmailConfirmation}/>
  </Switch>
  </BrowserRouter>
  );
}

export default App;
