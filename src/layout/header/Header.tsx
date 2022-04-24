import { Layout } from "antd";
import { useNavigate } from "react-router-dom";

import Logo from "../../assets/images/logo.png";

import "./Header.css";

const Header = () => {
    const navigate = useNavigate();
    return <Layout.Header className="header">
        <img
            src={Logo}
            alt='logo'
            className="header__logo"
            onClick={() => { navigate('/') }}
        />
    </Layout.Header>
};

export default Header;
