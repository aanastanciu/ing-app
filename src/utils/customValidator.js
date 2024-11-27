import { Validator } from '@lion/form-core';
import { html } from 'lit-html';
import '@lion/input-email/lion-input-email.js';

export const customValidator = () => {
    class GmailOnly extends Validator {
        static get validatorName() {
            return 'GmailOnly';
        }

        execute(value) {
            const hasError = !value.includes('gmail.com');
            return hasError;
        }

        static async getMessage() {
            return 'You can only use gmail.com email addresses.';
        }
    }

    return html`
    <lion-input-email
      .modelValue=""
      .validators="${[new GmailOnly()]}"
      label="Email"
    ></lion-input-email>
  `;
};