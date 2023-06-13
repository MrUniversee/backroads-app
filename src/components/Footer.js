import PageLink from './PageLink'
import SocialLink from './SocialLink'
import { socialLinks } from '../Data'
const Footer = () => {
  return (
    <footer className="section footer">
      <PageLink parentClass="footer-links" itemClass="footer-link" />
      <ul className="footer-icons">
        {socialLinks.map((link) => {
          const { id } = link
          return <SocialLink key={id} link={link} itemClass="footer-icon" />
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  )
}
export default Footer
