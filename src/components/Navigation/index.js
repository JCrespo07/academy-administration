import React from 'react'
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';
import * as ROUTES from './../constants/routes';

class Navigation extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <ul>
          <li>
            < Link to={ROUTES.SIGN_IN}>Sign In</Link>
          </li>
          <li>
            < Link to={ROUTES.LANDING}>Landing</Link>
          </li>
          <li>
            < Link to={ROUTES.HOME}>Home</Link>
          </li>
          <li>
            < Link to={ROUTES.ACCOUNT}>Account</Link>
          </li>
          <li>
            < Link to={ROUTES.ADMIN}>Admin</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navigation;
