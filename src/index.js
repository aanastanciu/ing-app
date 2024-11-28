import { render, html } from 'lit-html';
import Login from './pages/Login';
import Home from './pages/Home';
import UserDetails from './pages/UserDetails';
import './styles/styles.css';

export function navigateTo(path) {
    window.history.pushState({}, path, window.location.origin + path);
    renderRoute(path);
}

const routes = {
    '/login': Login,
    '/home': Home,
    '/user-details/:id': UserDetails,
    '/404': () => html`<h2>Page not found</h2>`,
};


function renderRoute(path) {
    let pageComponent;
    // Check if it's a user-details page with dynamic ID
    const userDetailsMatch = path.match(/^\/user-details\/(\d+)$/);
    if (userDetailsMatch) {
        const userId = userDetailsMatch[1]; // Extract the user ID from the URL
        pageComponent = (params) => UserDetails(userId); // Pass the userId to UserDetails
    } else {
        pageComponent = routes[path] || routes['/404']; // Default to /404 if route is not found
    }

    render(pageComponent(), document.getElementById('app'));
}



window.addEventListener('popstate', () => {
    renderRoute(window.location.pathname);
});

renderRoute(window.location.pathname);
