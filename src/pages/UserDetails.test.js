import { render, screen } from '@testing-library/dom';
import { html } from 'lit-html';
import UserDetails from './UserDetails';
import users from '../utils/userDetails';



jest.mock('../pages/components/UserAddress', () => () => '<div>Address Component</div>');
jest.mock('../pages/components/UserAccount', () => () => '<div>Account Component</div>');
jest.mock('../pages/components/UserTransaction', () => () => '<div>Transaction Component</div>');
jest.mock('../pages/components/Footer', () => () => '<div>Footer</div>');
jest.mock('../pages/components/Nav', () => () => '<div>Nav</div>');


describe('UserDetails', () => {
    let container;

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
        const userId = '1';
        const user = users.find((user) => user.id.toString() === userId);

        mockLocation(`/user-details/${userId}`);

        render(UserDetails(), container);

        expect(screen.getByText('User Details')).toBeInTheDocument();
        expect(screen.getByText(`ID: ${user.id}`)).toBeInTheDocument();
        expect(screen.getByText(`Name: ${user.name}`)).toBeInTheDocument();
        expect(screen.getByText(`Email: ${user.email}`)).toBeInTheDocument();
        expect(screen.getByText(`Created At: ${new Date(user.createdAt).toLocaleDateString()}`)).toBeInTheDocument();

        expect(screen.getByText('Address Component')).toBeInTheDocument();
        expect(screen.getByText('Account Component')).toBeInTheDocument();
        expect(screen.getByText('Transaction Component')).toBeInTheDocument();
    });

    it('displays a "User not found" message when the user ID is invalid', () => {

        const invalidUserId = '99999';

        mockLocation(`/user-details/${invalidUserId}`);

        render(UserDetails(), container);

        expect(screen.getByText('User not found')).toBeInTheDocument();
    });
})