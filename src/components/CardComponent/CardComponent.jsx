import React from "react";
import { Col, Row } from "antd"
import { StyleNameProduct, WrapperCardStyle, WrapperPriceSale, WrapperPriceText, WrapperReportText } from "./style";
import { useNavigate } from "react-router-dom";
import { convertPrice } from "../../utils";
const CardComponent = (props) => {
    const { countInStock, description, image, name, price, type, id } = props
    const navigate = useNavigate()
    const handleDetailsProduct = (id) => {
        navigate(`/product-details/${id}`)
    }
    return (
        <Row style={{ padding: '10px', display: 'block' }}>
            <Col span={3}></Col>
            <Col span={16}>
                <WrapperCardStyle
                    hoverable
                    headStyle={{ width: '280px', height: '280px' }}
                    style={{ width: 280 }}
                    bodyStyle={{ padding: '10px' }}
                    cover={<img alt="example" src={image} />}
                    onClick={() => handleDetailsProduct(id)}
                >

                    <StyleNameProduct>{name}</StyleNameProduct>
                    {/* <WrapperReportText>
                        <span style={{ marginRight: '4px' }}>
                            <i style={{ fontSize: '15px', color: 'yellow' }} class="fa-solid fa-star"></i>
                            <i style={{ fontSize: '15px', color: 'yellow' }} class="fa-solid fa-star"></i>
                            <i style={{ fontSize: '15px', color: 'yellow' }} class="fa-solid fa-star"></i>
                            <i style={{ fontSize: '15px', color: 'yellow' }} class="fa-solid fa-star"></i>
                        </span>

                    </WrapperReportText> */}
                    <WrapperPriceText>
                        {convertPrice(price)}
                    </WrapperPriceText>
                </WrapperCardStyle>
            </Col>
            <Col span={3}></Col>
        </Row>
    )
}
export default CardComponent