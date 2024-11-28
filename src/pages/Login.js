import { html } from 'lit-html';
import '@lion/ui/define/lion-form.js';
import '../styles/login.css';
import '@lion/ui/define/lion-input.js';
import { navigateTo } from '../index';



const authenticateUser = async (credentials) => {

  const mockDatabase = {
    emailAddress: 'test@test.com',
    password: 'pleaseHireMe',
  };

  return (
    credentials.emailAddress === mockDatabase.emailAddress &&
    credentials.password === mockDatabase.password
  );
};

const submitHandler = async (ev) => {
  const formElement = ev.target.querySelector('form');
  const formData = new FormData(formElement);
  const credentials = Object.fromEntries(formData.entries());

  const isValid = await authenticateUser(credentials);

  if (isValid) {
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('user', JSON.stringify(credentials));
    navigateTo('/home');
  } else {
    alert('Invalid email or password. Please try again.');
  }
};


const Login = () => html`
  <lion-form class="login-page" @submit="${submitHandler}">
      <h1>Sign In</h1>
      <form @submit="${ev => ev.preventDefault()}">
        <lion-input name="emailAddress" label="Email Address" .modelValue="" required type="email"
        ></lion-input>
        <lion-input name="password" label="Password" .modelValue="" type="password" required         
        ></lion-input>
        <button class="lion-btn" type="submit">Sign In</button>
      </form>
    </lion-form>
`;


export default Login;