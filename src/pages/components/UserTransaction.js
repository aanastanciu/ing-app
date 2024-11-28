import { html } from 'lit-html';
import '@lion/ui/define/lion-collapsible.js';

const UserTransaction = ({ transactions }) => {
    return html`
    <lion-collapsible>
      <button class="demo-custom-collapsible-invoker" slot="invoker">MORE ABOUT TRANSACTIONS</button>
      <div class="content"  slot="content">
        <ul>
          ${transactions.map(
        (transaction) => html`
              <li>
                <strong>Transaction ID:</strong> ${transaction.id} |
                <strong>Amount:</strong> $${transaction.amount} |
                <strong>Date:</strong> ${new Date(transaction.date).toLocaleDateString()}
              </li>
            `
    )}
        </ul>
      </div>
    </lion-collapsible>
  `;
};

export default UserTransaction;