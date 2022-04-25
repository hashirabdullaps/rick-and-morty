import { Outlet } from "react-router-dom";

import { Layout } from "antd";
import { Content } from "antd/lib/layout/layout";

import Header from "./header/Header";
import Footer from "./footer/Footer";

const LayoutWrapper = () => {
    return <Layout style={{ minHeight: '100vh' }}>
        <Header />
        <Content style={{ paddingTop: '64px' }}>
            <Outlet />
        </Content>
        <Footer />
    </Layout>
}

export default LayoutWrapper;