import { render } from 'lit-html';
import { fireEvent } from '@testing-library/dom';
import '@testing-library/jest-dom';
import UserTransaction from '../components/UserTransaction';


describe('UserTransaction', () => {
    let container;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
    });

    it('renders transaction details when valid transactions are provided', () => {
        const transactions = [
            { id: 'tx123', amount: 100, date: '2024-01-01' },
            { id: 'tx124', amount: 200, date: '2024-01-02' },
        ];

        render(UserTransaction({ transactions }), container);


        expect(container.querySelector('li').textContent).toContain('Transaction ID: tx123');
        expect(container.querySelectorAll('li')[1].textContent).toContain('Transaction ID: tx124');
    });

    it('should collapse and expand the transaction details when the collapsible button is clicked', async () => {
        const transactions = [
            { id: 'tx123', amount: 100, date: '2024-01-01' },
            { id: 'tx124', amount: 200, date: '2024-01-02' },
        ];


        render(UserTransaction({ transactions }), container);

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

});