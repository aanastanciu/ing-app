import { html } from 'lit-html';
import '@lion/form';
import '@lion/ui/define/lion-form.js';
import '../styles/home.css';


const logoutHandler = () => {
  localStorage.removeItem('isLoggedIn');
  localStorage.removeItem('user');
  window.history.pushState({}, '', '/login');

};


const Home = () => {
  const user = JSON.parse(localStorage.getItem('user')) || {};
  return html`
    <nav>
      <a href="#" id="logout-link" @click="${logoutHandler}">Logout</a>
    </nav>
      <div class="home-page">
        <h1>Welcome to the Home Page</h1>
        <p>Hello, ${user.emailAddress || 'User'}!</p>
      </div>
    `;
};

export default Home;