import { Col, Row } from "antd";
import React from "react";
import { WrapperFooterButton, WrapperFooterabout, WrapperFotter, WrapperFotterForm, WrapperFotterInput, WrapperFotterInputGroup, WrapperFotterul } from "./style";
import Link from "antd/es/typography/Link";
const FotterComponent = () => {
    return (
        <WrapperFotter>
            <div>
                <Row justify="center">
                    <Col span={4}>
                        <WrapperFooterabout>
                            <h3>THÔNG TIN LIÊN HỆ</h3>
                            <WrapperFotterul>
                                <li>
                                    <i style={{ marginRight: '10px' }} className="fa-solid fa-location-dot"></i>
                                    Địa chỉ : 02 Trường Sa,Quận Bình Thạnh, Thành Phố Hồ Chí Minh</li>
                                <li>
                                    <i style={{ marginRight: '10px' }} className="fa-solid fa-phone"></i>
                                    Phone:0353955259
                                </li>
                                <li>
                                    <i style={{ marginRight: '10px' }} className="fa-solid fa-envelope"></i>
                                    Email:ShopFP@gmail.com</li>
                            </WrapperFotterul>
                        </WrapperFooterabout>
                    </Col>
                    <Col span={4}>
                        <WrapperFooterabout>
                            <h3>GIỚI THIỆU</h3>
                            <WrapperFotterul>
                                <li>
                                    <Link to="" style={{ color: "#f1f1f1", fontSize: '16px' }}>Về chúng tôi</Link>
                                </li>
                                <li>
                                    <Link to="" style={{ color: "#f1f1f1", fontSize: '16px' }}>Hướng dẫn mua hàng</Link>
                                </li>
                                <li>
                                    <Link to="" style={{ color: "#f1f1f1", fontSize: '16px' }}>Chính sách giao hàng</Link>
                                </li>
                                <li>
                                    <Link to="" style={{ color: "#f1f1f1", fontSize: '16px' }}>Chính sách đổi trả</Link>
                                </li>
                                <li>
                                    <Link to="" style={{ color: "#f1f1f1", fontSize: '16px' }}>Chính sách bảo hành</Link>
                                </li>
                                <li>
                                    <Link to="" style={{ color: "#f1f1f1", fontSize: '16px' }}>Chính sách bảo mật</Link>

                                </li>
                            </WrapperFotterul>
                        </WrapperFooterabout>
                    </Col>
                    <Col span={4}>
                        <WrapperFooterabout>
                            <h3>THƯƠNG HIỆU</h3>
                            <WrapperFotterul>
                                <li>
                                    <Link to="" style={{ color: "#f1f1f1", fontSize: '16px' }}>Giày ADIDAS</Link>
                                </li>
                                <li>
                                    <Link to="" style={{ color: "#f1f1f1", fontSize: '16px' }}>Giày MLB</Link>
                                </li>
                                <li>
                                    <Link to="" style={{ color: "#f1f1f1", fontSize: '16px' }}>Giày NIKE</Link>
                                </li>
                                <li>
                                    <Link to="" style={{ color: "#f1f1f1", fontSize: '16px' }}>Giày ASICS</Link>
                                </li>
                                <li>
                                    <Link to="" style={{ color: "#f1f1f1", fontSize: '16px' }}>Giày CONVERSE</Link>
                                </li>
                                <li>
                                    <Link to="" style={{ color: "#f1f1f1", fontSize: '16px' }}>Giày PUMA</Link>
                                </li>
                                <li>
                                    <Link to="" style={{ color: "#f1f1f1", fontSize: '16px' }}>Giày VANS</Link>
                                </li>
                            </WrapperFotterul>
                        </WrapperFooterabout>
                    </Col>
                    <Col span={4}>
                        <div>
                            <h3>ĐĂNG KÍ NHẬN TIN</h3>
                            <span>Gửi email đăng kí để nhận thông báo mới nhất về khuyến mãi, sự kiện nỗi bật dành cho khách hàng.</span>
                            <WrapperFotterForm action="#">
                                <WrapperFotterInputGroup>
                                    <WrapperFotterInput type="text" placeholder="Nhập email" />
                                    <WrapperFooterButton type="submit" className="button-submit">đăng kí</WrapperFooterButton>
                                </WrapperFotterInputGroup>
                            </WrapperFotterForm>
                        </div>
                    </Col>
                </Row>
            </div>
        </WrapperFotter>
    )
}
export default FotterComponent