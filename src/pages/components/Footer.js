import { html } from 'lit-html';
import '../../styles/footer.css';
import { navigateTo } from '../../index';


const handleRedirect = () => {
  navigateTo('/home');
};

const Footer = () => html`
<div class="footer">
    <div class="footer-container">
      <div class="footer-links">
        <span @click="${handleRedirect}" class="footer-link">Terms & Conditions</span>
        <span @click="${handleRedirect}" class="footer-link">Privacy Policy</span>
        <span @click="${handleRedirect}" class="footer-link">Security</span>
      </div>
      <div class="footer-copyright">
        <p>&copy; 2024 ING Romania. All rights reserved. Just kiddin' don't sue :)</p>
      </div>
    </div>
</div>
`;

export default Footer;