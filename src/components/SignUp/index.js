import React from 'react'
import ReactDOM from 'react-dom';
import { Link, withRouter } from 'react-router-dom';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../constants/routes';

const INITIAL_STATE = {
  username: '',
  email: '',
  passOne: '',
  passTwo: '',
  error: null,
}

class SignUpPage extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>SignUp</h1>
        <SignUpForm />
      </div>
    );
  }
}

class SignUpFormBase extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = { ...INITIAL_STATE }
  }

  onSubmit = event => {
    const { username, email, passOne } = this.state;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passOne)
      .then(authUser => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState ({ error });
      });

    event.preventDefault();
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value});
  }

  render() {

    const {
      username,
      email,
      passOne,
      passTwo,
      error,
    } = this.state;

    const isInvalid =
      passOne !== passTwo ||
      passOne === '' ||
      email === '' ||
      username === '';

    return (
      <form onSubmit={this.onSubmit}>
        <input
          name="username"
          value={username}
          onChange={this.onChange}
          type="text"
          placeholder="Full Name"
        />
        <input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email"
        />
        <input
          name="passOne"
          value={passOne}
          onChange={this.onChange}
          type="text"
          placeholder="Password"
        />
        <input
          name="passTwo"
          value={passTwo}
          onChange={this.onChange}
          type="text"
          placeholder="Confirm Password"
        />
        <button disabled={isInvalid} type="submit">Sign Up</button>

        {isInvalid && <p>Complete the form to SignUp</p>}
        {error && <p>{error.message}</p>}

      </form>
    );
  }
}

const SignUpMessage = () => {
  return (
    <p>
      Don't have an account? Talk with your administrator <Link to={ROUTES.LANDING}> Return to landing page </Link>
    </p>
  );
}

const SignUpForm = withRouter(withFirebase(SignUpFormBase));

export default SignUpPage;
export { SignUpForm, SignUpMessage };
