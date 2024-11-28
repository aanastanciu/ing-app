import { html } from 'lit-html';
import '../../styles/nav.css';


const logoutHandler = () => {
  localStorage.removeItem('isLoggedIn');
  localStorage.removeItem('user');
  window.history.pushState({}, '', '/login');

};

const NavPage = () => html`
  <nav class="nav-page">
    <div class="logo-container">
      <img src="../assets/lion-logo.jpg" alt="Lion Logo" class="lion-logo" />
    </div>
    <div class="nav-links">
      <a href="/home" id="home-link">Home</a> |
      <a href="#" id="logout-link" @click="${logoutHandler}">Logout</a>

    </div>
  </nav>
`;

export default NavPage;
