import { html, render } from 'lit-html';
import '@lion/form';
import '@lion/ui/define/lion-pagination.js';
import '../styles/home.css';
import users from "../utils/userDetails"
import Footer from '../pages/components/Footer';
import Nav from '../pages/components/Nav';
import { navigateTo } from '../index';




let currentPage = 1;
const usersPerPage = 6;

let userData = [];

const fetchUsers = () => {
  try {
    setTimeout(() => {
      userData = users;
    }, 1000);
  } catch (error) {
    reject('Error fetching users:', error);
  }

};
const getUsersForCurrentPage = () => {
  const startIndex = (currentPage - 1) * usersPerPage;
  const endIndex = currentPage * usersPerPage;
  return users.slice(startIndex, endIndex);
};

const handleRowClick = (id) => {
  navigateTo(`/user-details/${id}`);

};

const handlePageChange = (ev) => {
  currentPage = ev.target.current;
  renderPage();
};

const renderPage = () => {
  render(Home(), document.getElementById('app'));
};


const Home = () => {
  const user = JSON.parse(localStorage.getItem('user')) || {};
  fetchUsers();
  const displayedUsers = getUsersForCurrentPage();

  return html`

  ${Nav()} 
<div class="home-page">
  <h1>Welcome to the Home Page</h1>
  <p>Hello, ${user.emailAddress || 'User'}!</p>

  <table class="user-table">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Created At</th>
      </tr>
    </thead>
    <tbody>
    ${displayedUsers.map(
    (user) => html`
        <tr @click="${() => handleRowClick(user.id)}">
          <td>${user.id}</td>
          <td>${user.name}</td>
          <td>${user.email}</td>
          <td>${new Date(user.createdAt).toLocaleDateString()}</td>
        </tr>
      `
  )}
  </tbody>
  </table>
  <lion-pagination
        .count="${Math.ceil(users.length / usersPerPage)}" 
        .current="${currentPage}" 
        @current-changed="${handlePageChange}">
      </lion-pagination>
        </div>
        ${Footer()}
`;
};


export default Home;