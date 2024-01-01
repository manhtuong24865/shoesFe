import React, { useEffect, useRef, useState } from "react";
import SliderComponent from "../../SliderComponent/SliderComponent";
import slider1 from '../../assets/images/slider1.jpg'
import slider2 from '../../assets/images/banner6.png'
import slider3 from '../../assets/images/banner2.png'
import CardComponent from "../../components/CardComponent/CardComponent";
import TextTitleComponent from "../../components/TextTitleComponent/TextTitleComponent";
import { TitleTextNew, WrapperButtonHover, WrapperProducts, WrapperTextName, WrapperTextcontent, Wrappercontent } from "./style";
import { Col, Row } from "antd";
// import Adidas from "../../assets/thuonghieu/adidas.jpg"
import { Divider } from 'antd';

// import Puma from "../../assets/thuonghieu/PUMA.jpg"
// import Converse from "../../assets/thuonghieu/Converse.jpg"
// import Assics from "../../assets/thuonghieu/Asics.png"
// import Crocs from "../../assets/thuonghieu/Crocs.png"
// import Vans from "../../assets/thuonghieu/Vans.png"
// import MLB from "../../assets/thuonghieu/MLB.png"
// import Nike from "../../assets/thuonghieu/nike.jpg"
import Avatar1 from "../../assets/avatar/avarts.jpg"
import Avatar2 from "../../assets/avatar/avatar1.jpg"
import Avatar3 from "../../assets/avatar/avatar2.jpg"
import Content from "../../assets/avatar/content.jpg"
import SliderLogoComponent from "../../components/SliderLogoComponent/SliderLogoComponent";
import SliderCardComponent from "../../components/SliderCardComponent/SliderCardComponent";
import { useQuery } from "@tanstack/react-query";
import * as ProductServices from '../../services/ProductServices'
import { useSelector } from "react-redux";
import LoadingComponent from "../../components/LoadingComponent/LoadingComponent";
import { useDebounce } from "../../hooks/useDebounce";


const HomePage = () => {
    const searchProduct = useSelector((state) => state?.product?.search)
    const searchDebounce = useDebounce(searchProduct, 1000)
    const refSearch = useRef()
    const [stateProducts, setStateProducts] = useState([])
    const [limit, setLimit] = useState(4)
    const [loading, setLoading] = useState(false)
    const fetchProductAll = async (context) => {
        const limit = context?.queryKey && context?.queryKey[1]
        const search = context?.queryKey && context?.queryKey[2]
        const res = await ProductServices.getAllProduct(search, limit)
        if (search?.length > 0 || refSearch.current) {
            setStateProducts(res?.data)
            return []
        } else {
            return res
        }
    }

    const { isPending, data: products, isPreviousData } = useQuery({ queryKey: ['products', limit, searchDebounce], queryFn: fetchProductAll, retry: 3, retryDelay: 1000, keepPreviousData: true })


    useEffect(() => {
        if (products?.data?.length > 0) {
            setStateProducts(products?.data)
        }
    }, [products])



    return (
        <LoadingComponent isPending={isPending || loading}>
            <div>
                <SliderComponent arrImages={[slider1, slider2, slider3]} />
                <div id="container" style={{ backgroundColor: '#efefef', height: 'auto', width: '100%' }}>
                    <div>

                        < TextTitleComponent />

                    </div>
                    <WrapperProducts>
                        {stateProducts?.map((product) => {
                            return (
                                <CardComponent
                                    key={product._id}
                                    countInStock={product.countInStock}
                                    description={product.description}
                                    image={product.image}
                                    name={product.name}
                                    price={product.price}
                                    type={product.type}
                                    id={product._id} />


                            )

                        })}
                        {/* <CardComponent />
                        <CardComponent />
                        <CardComponent />
                        <CardComponent /> */}
                    </WrapperProducts>
                    <div style={{ width: "100%", display: "flex", justifyContent: 'center', marginTop: "10px" }}>
                        <WrapperButtonHover textButton="XEM THÊM" type="outline" styleButton={{
                            border: "1px solid rgb(11,116,229)", color: `${products?.total === products?.data?.length ? '#ccc' : 'rgb(11,116,229)'}`,
                            width: "240px", height: "38px", borderRadius: '5px'
                        }}
                            disabled={products?.total === products?.data?.length || products.totalPage === 1}
                            styleTextButton={{ fontWeight: '500', color: products?.total === products?.data?.length && '#fff' }}
                            onClick={() => setLimit((prev) => prev + 4)} />
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '25px' }}>

                        <TitleTextNew> SẢN PHẨM MỚI RA</TitleTextNew>

                    </div>
                    <SliderCardComponent />
                    {/* <div style={{ width: "100%", display: "flex", justifyContent: 'center', marginTop: "10px" }}>
                        <WrapperButtonHover textButton="XEM THÊM" type="outline" styleButton={{
                            border: "1px solid rgb(11,116,229)", color: "rgb(11,116,229)",
                            width: "240px", height: "38px", borderRadius: '5px'
                        }} styleTextButton={{ fontWeight: '500' }} />
                    </div> */}
                    <div style={{ textAlign: 'center', marginTop: '25px' }}>

                        <TitleTextNew >THƯƠNG HIỆU</TitleTextNew>

                    </div>
                    <div style={{ padding: '50px' }}>
                        <div>
                            <SliderLogoComponent />
                        </div>
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '25px' }}>

                        <TitleTextNew> Ý kiến khách hàng</TitleTextNew>

                    </div>
                    <div style={{ marginBottom: "50px" }}>
                        <Row>
                            <Col span={3}>

                            </Col>
                            <Col span={6}>
                                <div style={{ padding: "20px" }}>
                                    <div style={{ textAlign: 'center', background: '#FFFFFF', padding: '20px', borderRadius: '15px' }}>
                                        <div style={{ width: '150px', margin: '0 auto' }}>
                                            <img style={{ width: '145px', height: '146px', objectFit: 'cover', borderRadius: '9999px' }} src={Avatar1} alt="avatar" />
                                        </div>
                                        <div>
                                            <div style={{ marginBottom: '10px' }}>
                                                <WrapperTextName>
                                                    Xuân Thành
                                                </WrapperTextName>
                                            </div>
                                            <div style={{ marginBottom: '10px' }}>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <div>
                                                <span style={{ lineHeight: '1.4' }}>
                                                    Mình tìm các shop giày sneaker trên mạng vô tình thấy được shop đăng hình các mẫu rất thực tế & giá cũng hợp lý nên mua thử. Ai dè rất là thích chất lượng & cách tư vấn nhiệt tình của shop lun ạ.
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col span={6} >
                                <div style={{ padding: "20px", }}>
                                    <div style={{ textAlign: 'center', background: '#FFFFFF', padding: '20px', borderRadius: '15px' }}>
                                        <div style={{ width: '150px', margin: '0 auto' }}>
                                            <img style={{ width: '145px', height: '146px', objectFit: 'cover', borderRadius: '9999px' }} src={Avatar2} alt="avatar" />
                                        </div>
                                        <div>
                                            <div style={{ marginBottom: '10px' }}>
                                                <WrapperTextName>
                                                    Anh Đại
                                                </WrapperTextName>
                                            </div>
                                            <div style={{ marginBottom: '10px' }}>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <div>
                                                <span style={{ lineHeight: '1.4' }}>
                                                    Các mẫu Balenciaga của shop quá chất lun shop. Nhìn không phân biệt được hàng real hay Rep luôn ak. Rất hài lòng khi tìm được 1 shop uy tín để có thể mua hàng online như vậy. Thanks !!!
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col span={6}>
                                <div style={{ padding: "20px" }}>
                                    <div style={{ textAlign: 'center', background: '#FFFFFF', padding: '20px', borderRadius: '15px' }}>
                                        <div style={{ width: '150px', margin: '0 auto' }}>
                                            <img style={{ width: '145px', height: '146px', objectFit: 'cover', borderRadius: '9999px' }} src={Avatar3} alt="avatar" />
                                        </div>
                                        <div>
                                            <div style={{ marginBottom: '10px' }}>
                                                <WrapperTextName>
                                                    Lệ Quyên
                                                </WrapperTextName>
                                            </div>
                                            <div style={{ marginBottom: '10px' }}>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <div>
                                                <span style={{ lineHeight: '1.4' }}>
                                                    Đây là lần đầu em mua giày trên mạng không ngờ là chất lượng lại đẹp như vậy. Trong tương lai sẽ sắm thêm vài đôi nữa đi cho phong phú.Cảm ơn Shop tư vấn nhiệt tình, sẽ ủng hộ thời gian dài !!!.
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col span={3}>

                            </Col>
                        </Row>
                    </div>
                    <div style={{ paddingTop: '30px', paddingBottom: '30px', position: 'relative' }}>
                        <Row>
                            <Col span={3}>
                            </Col>
                            <Col span={9}>
                                <div style={{ marginLeft: 'auto', marginRight: '0', textAlign: 'center' }}>
                                    <h2 style={{ fontSize: '24px', fontWeight: '700' }}>VỀ CHÚNG TÔI</h2>
                                    <h4>SHOPFP.COM</h4>
                                    <WrapperTextcontent>Uy tín lâu năm chuyên cung cấp giày thể thao sneaker nam, nữ hàng Replica 1:1 – Like Auth với chất lượng đảm bảo và giá tốt nhất. Shop có sẵn hàng tại TP HCM.</WrapperTextcontent>
                                    <Wrappercontent>Bạn đang cần tìm một đôi giày thể thao sneaker đẹp và hợp thời trang và đang hot Trends đến từ các thương hiệu lớn nhưng lại không đủ hầu bao để sắm được hàng chính hãng? Hãy đến với shopgiayFP.com – nơi bạn thỏa lòng mong ước mà chỉ phải chi ra 1 phần nhỏ so với dòng chính hãng ngoài store mà vẫn sắm cho mình được một đôi chất lượng từ rep 1:1 đến siêu cấp like auth.</Wrappercontent>
                                </div>
                            </Col>
                            <Col span={9}>
                                <div style={{ paddingTop: '10px', marginLeft: '20px' }}>
                                    <div>
                                        <img src={Content} alt="lego" style={{ width: '100%', borderRadius: '6px' }} />

                                    </div>
                                </div>
                            </Col>
                            <Col span={3}>
                            </Col>
                        </Row>
                    </div>
                </div >
            </div >
        </LoadingComponent>
    )
}
export default HomePage