import { render } from 'lit-html';
import { fireEvent } from '@testing-library/dom';
import '@testing-library/jest-dom';

import UserAddress from '../components/UserAddress';

describe('UserAddress', () => {
    let container;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
    });

    it('renders address details when a valid address is provided', () => {
        const address = {
            street: '123 Main St',
            city: 'Springfield',
            state: 'IL',
            postalCode: '62701',
            country: 'USA',
        };

        render(UserAddress({ address }), container);

        expect(container.querySelector('p').textContent).toContain('Street: 123 Main St');
        expect(container.querySelectorAll('p')[1].textContent).toContain('City: Springfield');
        expect(container.querySelectorAll('p')[2].textContent).toContain('State: IL');
        expect(container.querySelectorAll('p')[3].textContent).toContain('Postal Code: 62701');
        expect(container.querySelectorAll('p')[4].textContent).toContain('Country: USA');
    });

    it('should collapse and expand the address details when the collapsible button is clicked', async () => {
        const address = {
            street: '123 Main St',
            city: 'Springfield',
            state: 'IL',
            postalCode: '62701',
            country: 'USA',
        };

        render(UserAddress({ address }), container);

        const collapsibleButton = container.querySelector('.demo-custom-collapsible-invoker');
        let content = container.querySelector('.content');

        const computedStyleBefore = window.getComputedStyle(content);
        expect(computedStyleBefore.display).toBe('none');

        fireEvent.click(collapsibleButton);

        await new Promise(resolve => setTimeout(resolve, 500));

        content = container.querySelector('.content');
        const computedStyleAfterExpand = window.getComputedStyle(content);

        expect(computedStyleAfterExpand.display).not.toBe('none');

        fireEvent.click(collapsibleButton);

        await new Promise(resolve => setTimeout(resolve, 500));

        content = container.querySelector('.content');
        const computedStyleAfterCollapse = window.getComputedStyle(content);

        expect(computedStyleAfterCollapse.display).toBe('none');
    });

    it('shows a message when no address is provided', () => {
        render(UserAddress({ address: null }), container);

        expect(container.textContent).toContain('Account information not available.');
    });
});