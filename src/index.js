import { render } from 'lit-html';
import Login from './pages/Login';
import Home from './pages/Home';
import './styles/styles.css';

const routes = {
    '/login': Login,
    '/home': Home,
    '/404': () => html`<h2>Page not found</h2>`,
};


function renderRoute(path) {
    const pageComponent = routes[path] || Login;
    render(pageComponent(), document.getElementById('app'));
}

function navigateTo(path) {
    window.history.pushState({}, path, window.location.origin + path);
    renderRoute(path);
}

window.addEventListener('popstate', () => {
    renderRoute(window.location.pathname);
});

renderRoute(window.location.pathname);
