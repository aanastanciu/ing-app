import { render } from 'lit-html';
import { fireEvent } from '@testing-library/dom';
import UserAccount from '../components/UserAccount';
import '@testing-library/jest-dom';

describe('UserAccount', () => {
    let container;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
    });

    it('collapses and expands the account details when the collapsible button is clicked', async () => {
        const account = {
            accountNumber: '123456789',
            balance: 5000,
            accountType: 'Savings',
        };

        render(UserAccount({ account }), container);

        const collapsibleButton = container.querySelector('.demo-custom-collapsible-invoker');
        let content = container.querySelector('.content');

        expect(content).toHaveStyle('display: none');

        fireEvent.click(collapsibleButton);


        await new Promise(resolve => setTimeout(resolve, 500));
        content = container.querySelector('.content');


        expect(content).toHaveStyle('display: block');

        fireEvent.click(collapsibleButton);

        await new Promise(resolve => setTimeout(resolve, 500));

        content = container.querySelector('.content');

        expect(content).toHaveStyle('display: none');
    });
});
