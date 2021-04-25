import React from 'react'
import ReactDOM from 'react-dom';

import { 
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

/* Importamos componentes */
import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';
import InstructorPage from '../Instructor';
import ResponsiblePersonPage from '../ResponsiblePerson';
import StudentPage from '../Student';
 
import * as ROUTES from './../constants/routes';

class App extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <Router>
        <div>
          <Navigation />

          <hr />

          {/* Dependiendo de la ruta se cargara el componente*/}
          <Route exact path={ROUTES.LANDING} component={LandingPage} />
          <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
          <Route path={ROUTES.SIGN_IN} component={SignInPage} />
          <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
          <Route path={ROUTES.HOME} component={HomePage} />
          <Route path={ROUTES.ACCOUNT} component={AccountPage} />
          <Route path={ROUTES.ADMIN} component={AdminPage} />
          <Route path={ROUTES.INSTRUCTOR} component={InstructorPage} />
          <Route path={ROUTES.RESPONSIBLE_PERSON} component={ResponsiblePersonPage} />
          <Route path={ROUTES.STUDENT} component={StudentPage} />
        </div>
      </Router>
    );
  }
}

export default App;
