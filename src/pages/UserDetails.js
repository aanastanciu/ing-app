import { html } from 'lit-html';
import users from '../utils/userDetails';
import Footer from '../pages/components/Footer';
import Nav from '../pages/components/Nav';

import '@lion/ui/define/lion-collapsible.js';
import UserAddress from '../pages/components/UserAddress';
import UserAccount from '../pages/components/UserAccount';
import UserTransaction from '../pages/components/UserTransaction';
import '../styles/user-details.css';


const getUserById = (id) => {
  return users.find((user) => user.id === parseInt(id));
};


const UserDetails = () => {
  const userId = window.location.pathname.split('/').pop();
  const user = getUserById(userId);
  if (!user) {
    console.log(user)
    return html`<h2>User not found</h2>`;
  }


  return html`
    ${Nav()}
    <div class="user-details-page">
      <h2>User Details</h2>

      <div class="user-info">
      <p><strong>ID:</strong> ${user.id}</p>
      <p><strong>Name:</strong> ${user.name}</p>
      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>Created At:</strong> ${new Date(user.createdAt).toLocaleDateString()}</p>
      </div>
<div class="user-container">
      <div class="user-section">
      ${UserAddress({ address: user.address })}
     </div>

    <div class="user-section">
      ${UserAccount({
    account: user.account
  })}
    </div>

    <div class="user-section">
      ${UserTransaction({ transactions: user.transactions })}
    </div>
    </div>
    </div>
    ${Footer()}
  `;
};

export default UserDetails;