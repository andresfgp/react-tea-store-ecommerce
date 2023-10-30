import './Footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h4>Follow Us</h4>
                    <div className='footer-section-icons'>
                      <a href="https://www.facebook.com" target="blank"><FacebookIcon sx={{ fontSize: 24 }} /></a>
                      <a href="https://www.x.com" target="blank"><TwitterIcon sx={{ fontSize: 24 }} /></a>
                      <a href="https://www.instagram.com" target="blank"><InstagramIcon sx={{ fontSize: 24 }} /></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                &copy; {new Date().getFullYear()} Aussie Tea.
            </div>
        </footer>
    );
}

export default Footer;
