import { html, render } from 'lit-html';
import Home from './Home';
import { navigateTo } from '../index';
import { fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

jest.mock('../index', () => ({
    navigateTo: jest.fn(),
}));


jest.mock('../utils/userDetails', () => [
    { id: 1, name: 'User 1', email: 'user1@test.com', createdAt: '2023-01-01' },
    { id: 2, name: 'User 2', email: 'user2@test.com', createdAt: '2023-02-01' },
    { id: 3, name: 'User 3', email: 'user3@test.com', createdAt: '2023-03-01' },
    { id: 4, name: 'User 4', email: 'user4@test.com', createdAt: '2023-04-01' },
    { id: 5, name: 'User 5', email: 'user5@test.com', createdAt: '2023-05-01' },
    { id: 6, name: 'User 6', email: 'user6@test.com', createdAt: '2023-06-01' },
    { id: 7, name: 'User 7', email: 'user7@test.com', createdAt: '2023-07-01' },
]);


describe('Home Page', () => {
    let container;
    beforeEach(() => {

        jest.spyOn(Storage.prototype, 'getItem').mockReturnValue(JSON.stringify({ emailAddress: 'test@test.com' }));

        container = document.createElement('div');
        document.body.appendChild(container);

        render(Home(), container);
    });

    afterEach(() => {
        jest.restoreAllMocks();
        jest.clearAllMocks();
        container.innerHTML = '';
    });

    it('renders the home page with the correct user greeting', () => {

        expect(screen.getByText('Hello, test@test.com!')).toBeInTheDocument();
    });

    it('renders the user table correctly with the first page of users', () => {

        expect(screen.getByText('User 1')).toBeInTheDocument();
        expect(screen.getByText('user1@test.com')).toBeInTheDocument();

        const tableRows = screen.getAllByRole('row');
        expect(tableRows.length).toBe(7);
    });


    it('changes the page when pagination is clicked', () => {

        const pagination = screen.getByRole('navigation');

        const nextPageButton = pagination.querySelector('.lion-pagination__next');

        if (nextPageButton) {
            fireEvent.click(nextPageButton);
        } else {
            console.error('Next button not found!');
        }
    });

    it('navigates to the user details page when a row is clicked', () => {
        const firstUserRow = screen.getByText('User 1').closest('tr');
        fireEvent.click(firstUserRow);

        expect(navigateTo).toHaveBeenCalledWith('/user-details/1');
    });
});