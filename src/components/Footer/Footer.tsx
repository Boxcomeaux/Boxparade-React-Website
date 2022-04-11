import _c from './Footer.module.css';
import Bxp_logo from '../../Images/boxparade_logo59x59.png';
const Footer = () => {
    const year = new Date().getFullYear() === 2022 ? '' : '-' + new Date().getFullYear();

    return <footer className={_c.footer}>
        <div>
            <div>
                <img src={Bxp_logo} alt="BOXPARADE_LOGO"/>
            </div>
            <div>
                <span>Copyright &copy; 2022{year} Boxparade. All rights reserved.</span>
            </div>
        </div>
    </footer>
};

export default Footer;