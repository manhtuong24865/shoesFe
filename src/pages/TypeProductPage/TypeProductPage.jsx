import React from "react";
import NavbarComponents from "../../components/NavbarComponents/NavbarComponent";
import CardComponent from "../../components/CardComponent/CardComponent";
import { Col, Pagination, Row } from "antd";
import { WrapperNavbar, WrapperProducts } from "./style";
import { useLocation } from "react-router-dom";
const TypeProductPage = () => {
    const onChange = () => { }
    return (
        <div style={{ padding: '0 120px', background: '#efefef' }}>
            <Row style={{ flexWrap: 'nowrap', paddingTop: '10px' }}>
                <WrapperNavbar span={4}>
                    <NavbarComponents />
                </WrapperNavbar>
                <Col>
                    <WrapperProducts span={20}>
                        <CardComponent />
                        <CardComponent />
                        <CardComponent />
                        <CardComponent />
                        <CardComponent />
                        <CardComponent />
                        <CardComponent />
                        <CardComponent />
                        <CardComponent />
                        <CardComponent />
                        <CardComponent />
                        <CardComponent />
                        <CardComponent />
                        <CardComponent />
                        <CardComponent />
                        <CardComponent />
                        <CardComponent />
                        <CardComponent />
                        <CardComponent />
                        <CardComponent />

                    </WrapperProducts>
                    <Pagination size="small" total={50}
                        style={{
                            textAlign: "center",
                            marginTop: "10px",
                            fontSize: "16px",
                            fontWeight: '600',
                            height: '34px'
                        }} />
                </Col>
            </Row>
        </div>
    )
}
export default TypeProductPage;