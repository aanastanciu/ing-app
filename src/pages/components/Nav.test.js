import { render } from 'lit-html';
import '@testing-library/jest-dom';
import Nav from '../components/Nav';
import { fireEvent } from '@testing-library/dom';


beforeEach(() => {
    jest.spyOn(Storage.prototype, 'removeItem');
    jest.spyOn(window.history, 'pushState');
});

afterEach(() => {
    jest.restoreAllMocks();
});

describe('Nav', () => {
    it('removes items from localStorage and navigates to the login page when logout is clicked', () => {
        const container = document.createElement('div');
        document.body.appendChild(container);

        render(Nav(), container);

        const logoutLink = container.querySelector('a#logout-link');

        fireEvent.click(logoutLink);

        expect(localStorage.removeItem).toHaveBeenCalledWith('isLoggedIn');
        expect(localStorage.removeItem).toHaveBeenCalledWith('user');

        expect(window.history.pushState).toHaveBeenCalledWith({}, '', '/login');
    });

    it('renders the navigation with correct links', () => {
        const container = document.createElement('div');
        document.body.appendChild(container);

        render(Nav(), container);

        const homeLink = container.querySelector('a#home-link');
        const logoutLink = container.querySelector('a#logout-link');

        expect(homeLink).toBeInTheDocument();
        expect(logoutLink).toBeInTheDocument();
    });

});
