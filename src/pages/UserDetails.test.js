
import { html, render } from 'lit-html';
import UserDetails from './UserDetails';
import users from '../utils/userDetails';



jest.mock('../pages/components/UserAddress', () => () => '<div>Address Component</div>');
jest.mock('../pages/components/UserAccount', () => () => '<div>Account Component</div>');
jest.mock('../pages/components/UserTransaction', () => () => '<div>Transaction Component</div>');
jest.mock('../pages/components/Footer', () => () => '<div>Footer</div>');
jest.mock('../pages/components/Nav', () => () => '<div>Nav</div>');


describe('UserDetails', () => {
    let container;
    const userId = 1;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
    });

    const mockLocation = (path) => {
        delete window.location;
        window.location = {
            pathname: path,
            search: '',
            hash: '',
            assign: jest.fn(),
            replace: jest.fn(),
            reload: jest.fn(),
        };
    };

    it('renders the user details correctly when a valid user ID is provided', () => {
        mockLocation(`/user-details/${userId}`);

        render(UserDetails(), container); // Use the correct render function

        // Add your assertions
        expect(container.querySelector('h2').textContent).toBe('User Details');
        // Further checks for the user details
    });

    it('displays a "User not found" message when the user ID is invalid', () => {
        const invalidUserId = 9999;
        mockLocation(`/user-details/${invalidUserId}`);

        render(UserDetails(), container);

        expect(container.querySelector('h2').textContent).toBe('User not found');
    });
})