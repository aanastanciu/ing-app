import { html } from 'lit-html';
import '@lion/form';
import '@lion/ui/define/lion-pagination.js';
import '../styles/home.css';
import users from "../utils/userDetails"
import NavPage from './NavPage';
import { navigateTo } from '../index';



let currentPage = 1;
const usersPerPage = 5;
let userData = [];


const getUsersForCurrentPage = () => {
  const startIndex = (currentPage - 1) * usersPerPage;
  const endIndex = currentPage * usersPerPage;
  return users.slice(startIndex, endIndex);
};



const fetchUsers = () => {
  try {
    setTimeout(() => {
      userData = users;
      console.log('Fetched Users:', users);
    }, 1000);
  } catch (error) {
    reject('Error fetching users:', error);
  }

};



const handleRowClick = (id) => {
  navigateTo(`/user-details/${id}`);

};


const Home = () => {
  const user = JSON.parse(localStorage.getItem('user')) || {};
  fetchUsers();

  return html`
  ${NavPage()} 
 
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
      ${users.map(
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
          .totalItems="${userData.length}"
          .itemsPerPage="${usersPerPage}"
          .currentPage="${currentPage}"
        ></lion-pagination>
</div>
`;
};

export default Home;