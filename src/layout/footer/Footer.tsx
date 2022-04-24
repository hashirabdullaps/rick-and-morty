import { Layout } from "antd";

import './Footer.css';

const Footer = () => {
    return <Layout.Footer className="footer">
        <a className="footer__link" href='/'>
            Rick and Morty by Hashir © 2022
        </a>
    </Layout.Footer>
}

export default Footer;