import { html } from 'lit-html';
import '@lion/ui/define/lion-collapsible.js';
const UserAccount = ({ account }) => {
  if (!account) {
    return html`<div><strong>Account information not available.</strong></div>`;
  }

  return html`
  <lion-collapsible>
      <button class="demo-custom-collapsible-invoker" slot="invoker">MORE ABOUT ACCOUNT</button>
      <div class="content" slot="content">
        <p><strong>Account Number:</strong> ${account.accountNumber}</p>
        <p><strong>Balance:</strong> $${account.balance}</p>
        <p><strong>Account Type:</strong> ${account.accountType}</p>
      </div>
    </lion-collapsible>
  `;
};

export default UserAccount;