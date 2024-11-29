import { render } from 'lit-html';
import '@testing-library/jest-dom';
import Footer from './Footer';
import { fireEvent } from '@testing-library/dom';

describe('Footer', () => {
    let container;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    it('renders the footer with the correct links', () => {
        render(Footer(), container);

        const termsLink = container.querySelector('a[href="/terms"]');
        const privacyLink = container.querySelector('a[href="/privacy"]');
        const securityLink = container.querySelector('a[href="/security"]');

        expect(termsLink).toBeInTheDocument();
        expect(privacyLink).toBeInTheDocument();
        expect(securityLink).toBeInTheDocument();
    });

    it('renders the copyright message', () => {
        render(Footer(), container);

        const copyrightMessage = container.querySelector('.footer-copyright p');

        expect(copyrightMessage).toBeInTheDocument();
        expect(copyrightMessage.textContent).toContain('© 2024 ING Romania');
    });
});
