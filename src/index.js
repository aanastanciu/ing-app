import { render, html } from 'lit-html';
import Login from './pages/Login';
import Home from './pages/Home';
import UserDetails from './pages/UserDetails';
import './styles.css';

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

    const userDetailsMatch = path.match(/^\/user-details\/(\d+)$/);
    if (userDetailsMatch) {
        const userId = userDetailsMatch[1];
        pageComponent = (params) => UserDetails(userId);
    } else {
        pageComponent = routes[path] || routes['/404'];
    }

    render(pageComponent(), document.getElementById('app'));
}

const initialRoute = localStorage.getItem('isLoggedIn') === 'true' ? '/home' : '/login';
navigateTo(initialRoute);

window.addEventListener('popstate', () => {
    renderRoute(window.location.pathname);
});

renderRoute(window.location.pathname);
