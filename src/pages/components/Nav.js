import { html } from 'lit-html';
import '../../styles/nav.css';
import { navigateTo } from '../../index';



const logoutHandler = () => {
  localStorage.removeItem('isLoggedIn');
  localStorage.removeItem('user');
  navigateTo('/login');
};

const handleRedirect = () => {
  navigateTo('/home');
};

const NavPage = () => html`
  <nav class="nav-page">
    <div class="logo-container">
      <img src="/assets/lion-logo.jpg" alt="Lion Logo" class="lion-logo" />
    </div>
    <div class="nav-links">
      <span @click="${handleRedirect}" id="home-link">Home</span> |
      <span id="logout-link" @click="${logoutHandler}">Logout</span>
    </div>
  </nav>
`;

export default NavPage;
