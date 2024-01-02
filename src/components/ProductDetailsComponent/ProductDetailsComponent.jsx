import { Col, Divider, Image, Row } from "antd";
import React, { useState } from "react";
import imageProduct from "../../assets/Nam/giay-adidas-adizero-sl-nam-den-den-01.jpg"
import imageSmall1 from "../../assets/Nam/giay-adidas-adizero-sl-nam-den-den-02.jpg"
import imageSmall2 from "../../assets/Nam/giay-adidas-adizero-sl-nam-den-den-03.jpg"
import imageSmall3 from "../../assets/Nam/giay-adidas-adizero-sl-nam-den-den-04.jpg"
import imageSmall4 from "../../assets/Nam/giay-adidas-adizero-sl-nam-den-den-05.jpg"
import { ProductSize, WrapperAddressProduct, WrapperContainer, WrapperContainerTitle, WrapperInputNumber, WrapperPriceSale, WrapperPriceTextProduct, WrapperQualityProduct, WrapperSingleProduct, WrapperStyleColSmall, WrapperStyleImageSmall, WrapperStyleNameProduct, WrapperStylePriceProduct, WrapperStyleTextBuy } from "./style";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import * as ProductServices from "../../services/ProductServices";
import { useQuery } from "@tanstack/react-query";
import LoadingComponent from "../LoadingComponent/LoadingComponent";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { addOrderProduct } from "../../redux/slice/OderSlice";
import { convertPrice } from "../../utils";



const ProductDetailsComponent = ({ idProduct }) => {
    const [numProduct, setNumProduct] = useState(1)
    const user = useSelector((state) => state.user)
    const Navigate = useNavigate()
    const location = useLocation()
    const dispatch = useDispatch()
    const onChange = (value) => {
        setNumProduct(Number(value))
    }

    const fetchGetDetailsProduct = async (context) => {
        const id = context?.queryKey && context?.queryKey[1]
        if (id) {
            const res = await ProductServices.getDetailsProduct(id)
            return res.data
        }
    }



    const handleChangeCount = (type) => {
        if (type === 'increase') {
            setNumProduct(numProduct + 1)
        } else {
            setNumProduct(numProduct - 1)

        }
    }

    const { isPending, data: productDetails } = useQuery({ queryKey: ['products-details', idProduct], queryFn: fetchGetDetailsProduct, enabled: !!idProduct })

    const handleAddOrderProduct = () => {
        if (!user?.id) {
            Navigate('/sign-in', { state: location?.pathname })
        } else {
            dispatch(addOrderProduct({
                orderItem: {
                    name: productDetails?.name,
                    amount: numProduct,
                    image: productDetails?.image,
                    price: productDetails?.price,
                    product: productDetails?._id,
                    countInStock: productDetails?.countInStock
                }
            }))
        }
    }
    return (
        <>
            <LoadingComponent isPending={isPending}>

                <div style={{ padding: '16px', background: '#fff', borderRadius: '4px' }}>
                    <Row >
                        <Col span={10} style={{ borderRight: '1px solid #e5e5e5', paddingRight: '8px' }}>
                            <Image src={productDetails?.image} alt="image product" preview={false} />
                            <Row style={{ paddingTop: '10px', justifyContent: 'space-between' }}>
                                <WrapperStyleColSmall span={6}>
                                    <WrapperStyleImageSmall src={imageSmall2} alt="image small" preview={false} />

                                </WrapperStyleColSmall>
                                <WrapperStyleColSmall span={6}>
                                    <WrapperStyleImageSmall src={imageSmall3} alt="image small" preview={false} />

                                </WrapperStyleColSmall>
                                <WrapperStyleColSmall span={6}>
                                    <WrapperStyleImageSmall src={imageSmall4} alt="image small" preview={false} />

                                </WrapperStyleColSmall>
                                <WrapperStyleColSmall span={6}>
                                    <WrapperStyleImageSmall src={imageProduct} alt="image small" preview={false} />

                                </WrapperStyleColSmall>

                            </Row>
                        </Col>
                        <Col span={14} style={{ paddingLeft: '10px' }}>
                            <WrapperStyleNameProduct>{productDetails?.name}</WrapperStyleNameProduct>
                            <div>
                                <i style={{ fontSize: '15px', color: 'yellow' }} className="fa-solid fa-star"></i>
                                <i style={{ fontSize: '15px', color: 'yellow' }} className="fa-solid fa-star"></i>
                                <i style={{ fontSize: '15px', color: 'yellow' }} className="fa-solid fa-star"></i>
                                <i style={{ fontSize: '15px', color: 'yellow' }} className="fa-solid fa-star"></i>
                                <i style={{ fontSize: '15px', color: 'yellow' }} className="fa-solid fa-star"></i>
                                <WrapperStyleTextBuy>
                                    | Đã bán  99+
                                </WrapperStyleTextBuy>
                            </div>
                            <div>
                                <WrapperStylePriceProduct>
                                    <WrapperPriceTextProduct>{convertPrice(productDetails?.price)}</WrapperPriceTextProduct>
                                    {/* <WrapperPriceSale>1.2000.000đ</WrapperPriceSale> */}

                                </WrapperStylePriceProduct>
                                <WrapperAddressProduct>
                                    <span>Giao đến </span>
                                    <span className="address">{user?.address}</span>
                                    <span className="change-address">Đổi địa chỉ</span>
                                </WrapperAddressProduct>
                            </div>
                            <div>
                            </div>
                            <div style={{ display: 'flex', marginTop: '20px' }}>
                                <span style={{ fontWeight: '500', fontSize: '18px', marginRight: '10px' }}>
                                    Size giày:
                                </span>
                                <ProductSize>
                                    <button>
                                        37
                                    </button>
                                    <button>
                                        38
                                    </button>
                                    <button>
                                        39
                                    </button>
                                    <button>
                                        40
                                    </button>
                                    <button>
                                        41
                                    </button>
                                    <button>
                                        42
                                    </button> <button>
                                        43
                                    </button>

                                </ProductSize>
                            </div>
                            <div style={{ margin: '10px 0 20px', padding: '10px 0', borderTop: '1px solid #e5e5e5', borderBottom: '1px solid #e5e5e5' }}>
                                <div style={{ marginBottom: '10px' }}>Số Lượng </div>
                                <WrapperQualityProduct>
                                    <button style={{ border: 'none', background: 'transparent', cursor: 'pointer' }} onClick={() => handleChangeCount('decrease')}>
                                        <MinusOutlined style={{ color: '#000', fontSize: '20px' }} />
                                    </button>
                                    <WrapperInputNumber onChange={onChange} defaultValue={1} value={numProduct} size='small' />
                                    <button style={{ border: 'none', background: 'transparent', cursor: 'pointer' }} onClick={() => handleChangeCount('increase')}>
                                        <PlusOutlined style={{ color: '#000', fontSize: '20px' }} />
                                    </button>

                                </WrapperQualityProduct>
                            </div>
                            <WrapperSingleProduct>
                                <ul>
                                    <li>
                                        <span>
                                            Trạng thái : Còn hàng, Liên hệ shop để được check size tại cửa hàng.
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            Tình trạng : Hàng mới 100%.
                                        </span>
                                    </li><li>
                                        <span>
                                            Giao nhanh và Thanh toán : Giao hàng trên toàn quốc và thanh toán khi nhận hàng, được đổi size trong vòng 7 ngày.
                                        </span>
                                    </li><li>
                                        <span>
                                            Sản phẩm được bảo hàng 6 tháng lỗi do nhà sản xuất.
                                        </span>
                                    </li>
                                </ul>
                                <div>
                                    <strong style={{ fontWeight: 'bolder', padding: '20px' }}>
                                        <i style={{ marginRight: '3px' }} className="fa-solid fa-check"></i>
                                        Tặng kèm vớ/ tất cổ ngắn khử mùi.
                                    </strong>
                                    <br></br>
                                    <strong style={{ fontWeight: 'bolder', padding: '20px' }}>
                                        <i className="fa-solid fa-check"></i>
                                        Đống Box carton kèm chống sốc, bảo vệ hộp giày nguyên vẹn.
                                    </strong>
                                </div>
                            </WrapperSingleProduct>
                            <div>
                                <ButtonComponent
                                    size={40}
                                    styleButton={{
                                        background: 'rgb(255, 57, 69)',
                                        height: '48px',
                                        width: '220px',
                                        border: 'none',
                                        BorderRadius: '4px',
                                        marginRight: '10px'
                                    }}
                                    onClick={handleAddOrderProduct}
                                    textButton={'MUA NGAY'}
                                    styleTextButton={{ color: '#fff', fontSize: '15px', fontWeight: '700' }}
                                >
                                </ButtonComponent>
                                <ButtonComponent
                                    size={40}
                                    styleButton={{
                                        background: '#686868',
                                        height: '48px',
                                        width: '220px',
                                        border: '1px solid ',
                                        BorderRadius: '4px'
                                    }}
                                    textButton={'THÊM VÀO GIỎ HÀNG'}
                                    styleTextButton={{ color: '#fff', fontSize: '15px' }}
                                >
                                </ButtonComponent>
                            </div>
                        </Col>

                    </Row>
                    <WrapperContainer>
                        <Divider />
                        <div>
                            <WrapperContainerTitle>MÔ TẢ SẢN PHẨM</WrapperContainerTitle>
                        </div>
                        <div>
                            <h4>GIÀY ADIDAS ADIZERO SL 2023 NAM-ĐEN</h4>
                            <span>
                                GIÀY ADIDAS ADIZERO SL 2023 NAM-ĐEN là một sản phẩm giày của nhãn hiệu MLB. Đây là một đôi giày Unisex, có thể phù hợp với mọi giới tính và lứa tuổi. Dù bạn là nam hay nữ, ở lứa tuổi nào đi chăng nữa, bạn đều có thể tìm thấy một bộ trang phục của mình có thể kết hợp một cách hoàn hảo với đôi giày này. Nếu bạn là một người ưa thích sự giản đơn, basic, nhưng lại thích các kiểu dáng thiên hướng thể thao khỏe khắn, đôi giày MLB LA Dodgers Big Ball Chunky A 32SHC1011-07W chắc chắn sẽ là lựa chọn phù hợp.
                            </span>
                            <p style={{ textAlign: 'center' }}>
                                <img style={{ width: '600px', height: 'auto' }} src={imageSmall1} alt="logo" />

                            </p>
                            <br />
                            <p >
                                Thiết kế giày với độ ôm vừa phải mang lại cảm giác nâng đỡ rất linh hoạt, lớp lót êm ái phù hợp mang hàng ngày hay mọi hoạt động thể thao. Phần đế giày được làm bằng cao su cao cấp áp dụng theo công nghệ cao với độ ma sát cao hạn chế trơn trượt, cùng độ nâng phù hợp giúp đôi chân vững vàng hơn khi di chuyển và hoạt động.
                            </p>
                            <br />
                            <p style={{ textAlign: 'center' }}>
                                <img style={{ width: '600px', height: 'auto' }} src={imageSmall2} alt="logo" />
                            </p>
                            <br />
                            <span>
                                Giày đi cực kỳ thoải mái, êm chân, màu sắc đơn giản dễ dàng kết hợp với nhiều trang phục khác nhau và sử dụng trong nhiều hoàn cảnh khác nhau như: đi học, đi chơi, dạo phố, du lịch...
                            </span>
                            <p style={{ textAlign: 'center' }}>
                                <img style={{ width: '600px', height: 'auto' }} src={imageSmall3} alt="logo" />
                            </p>
                            <span>
                                Đôi giày MLB LA Dodgers Big Ball Chunky A phù hợp với những bạn trẻ cá tính và năng động.
                            </span>
                            <span>
                                Thân giày MLB LA Dodgers Big Ball Chunky A 32SHC1011-07W có in logo của đội bóng chày nổi tiếng Los Angeles Dodgers - đây là một trong những đặc điểm đồng nhất trong các thiết kế của giày MLB chính hãng - được lấy cảm hứng từ các đội bóng chày chuyên nghiệp của hiệp hội bóng chày Major League Baseball nước Mỹ. Chính nguồn cảm hứng này khiến mọi thiết kế của nhãn hiệu MLB đều mang phong thái thể thao khỏe khoắn và cực kỳ năng động.
                            </span>
                            <h2 style={{ fontWeight: 'bolder' }}>Hướng dẫn bảo quản những đôi giày thân thương</h2>
                            <p>- Thường xuyên vệ sinh giày, lau sạch.</p>
                            <p>- Không nên giặt bằng máy giặt vì sẽ làm cho đôi giày trở nên biến dạng mất form giày.</p>
                            <p>- Tránh ngâm trong nước quá lâu.</p>
                            <p>- Không sử dụng chất tẩy rửa.</p>
                            <p>- Tránh tiếp xúc với các chất gây loang màu.</p>
                            <p>- Nên để giày trong kệ giày giúp bảo quản giày tốt và bền hơn.</p>
                        </div>
                    </WrapperContainer>
                </div>
            </LoadingComponent>
        </>

    )
}
export default ProductDetailsComponent