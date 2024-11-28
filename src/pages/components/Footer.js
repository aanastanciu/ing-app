import { html } from 'lit-html';
import '../../styles/footer.css';


const Footer = () => html`
<div class="footer">
    <div class="footer-container">
      <div class="footer-links">
        <a href="/terms" class="footer-link">Terms & Conditions</a>
        <a href="/privacy" class="footer-link">Privacy Policy</a>
        <a href="/security" class="footer-link">Security</a>
      </div>
      <div class="footer-copyright">
        <p>&copy; 2024 ING Romania. All rights reserved. Just kiddin' don't sue :)</p>
      </div>
    </div>
</div>
`;

export default Footer;