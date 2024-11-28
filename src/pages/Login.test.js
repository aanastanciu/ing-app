
import Login from './Login';
import { navigateTo } from '../index';
import { html, render } from 'lit-html';
import '@lion/ui/define/lion-form.js';
import '@lion/ui/define/lion-input.js';


jest.mock('../index', () => ({
    navigateTo: jest.fn(),
}));


describe('Login Page', () => {
    let container;

    beforeEach(() => {
        // Set up a DOM element container for rendering the component
        container = document.createElement('div');
        document.body.appendChild(container);
    });

    afterEach(() => {
        // Clean up after each test
        jest.clearAllMocks();
        localStorage.clear();
        container.innerHTML = '';
    });

    it('renders the login form correctly', () => {

        render(Login(), container);


        const emailInput = container.querySelector('lion-input[name="emailAddress"]');
        const passwordInput = container.querySelector('lion-input[name="password"]');
        const submitButton = container.querySelector('button');

        expect(emailInput).toBeTruthy();
        expect(passwordInput).toBeTruthy();
        expect(submitButton).toBeTruthy();
    });

    it('submits the form with valid credentials and navigates to the home page', () => {
        render(Login(), container);

        const emailInput = document.querySelector('lion-input[name="emailAddress"]');
        const passwordInput = document.querySelector('lion-input[name="password"]');
        const form = document.querySelector('form');

        emailInput.modelValue = 'test@test.com';
        passwordInput.modelValue = 'pleaseHireMe';

        form.dispatchEvent(new Event('submit'));
    });


    it('shows an alert for invalid credentials', async () => {
        render(Login(), container);

        const emailInput = container.querySelector('lion-input[name="emailAddress"]');
        const passwordInput = container.querySelector('lion-input[name="password"]');
        const form = container.querySelector('form');

        emailInput.modelValue = 'invalid@test.com';
        passwordInput.modelValue = 'wrongPassword';

        window.alert = jest.fn();

        form.dispatchEvent(new Event('submit'));

        await Promise.resolve();

        expect(window.alert).toHaveBeenCalledWith('Invalid email or password. Please try again.');
    });

    it('prevents the form from submitting with empty fields', async () => {
        render(Login(), container);

        const emailInput = container.querySelector('lion-input[name="emailAddress"]');
        const passwordInput = container.querySelector('lion-input[name="password"]');
        const form = container.querySelector('form');

        emailInput.modelValue = '';
        passwordInput.modelValue = '';

        form.dispatchEvent(new Event('submit'));

        await Promise.resolve();

        expect(navigateTo).not.toHaveBeenCalled();
    });
});