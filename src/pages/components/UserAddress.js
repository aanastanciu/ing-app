import { html } from 'lit-html';
import '@lion/ui/define/lion-collapsible.js';
const UserAddress = ({ address }) => {

    if (!address) {
        return html`<div><strong>Account information not available.</strong></div>`;
    }

    return html`
    <lion-collapsible>
      <button class="demo-custom-collapsible-invoker" slot="invoker">MORE ABOUT ADDRESS</button>
      <div class="content" slot="content">
        <p><strong>Street:</strong> ${address.street}</p>
        <p><strong>City:</strong> ${address.city}</p>
        <p><strong>State:</strong> ${address.state}</p>
        <p><strong>Postal Code:</strong> ${address.postalCode}</p>
        <p><strong>Country:</strong> ${address.country}</p>
      </div>
    </lion-collapsible>
  `;
};

export default UserAddress;