import React from "react";
import Slider from "react-slick";
import { SectionContent, SectionImage, SectionLogo } from "./style";
import Puma from "../../assets/thuonghieu/PUMA.jpg"
import Converse from "../../assets/thuonghieu/Converse.jpg"
import Assics from "../../assets/thuonghieu/Asics.png"
import Crocs from "../../assets/thuonghieu/Crocs.png"
import Vans from "../../assets/thuonghieu/Vans.png"
import MLB from "../../assets/thuonghieu/MLB.png"
import Nike from "../../assets/thuonghieu/nike.jpg"
import Adidas from "../../assets/thuonghieu/Adidass.png"
const SliderLogoComponent = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1000
    };
    return (
        <>
            <SectionLogo>
                <SectionContent>
                    {/* <div>
                        <h3 style={{ textAlign: 'center', color: 'red' }}> NỔI TIẾNG VÀ PHONG CÁCH </h3>
                    </div> */}
                    <Slider {...settings}>
                        <SectionImage>
                            <img style={{ width: '280px', height: '185px', borderRadius: '10px' }} src={Adidas} alt="logo" />
                        </SectionImage>
                        <SectionImage>
                            <img style={{ width: '280px', height: '185px', borderRadius: '10px' }} src={Puma} alt="logo" />
                        </SectionImage>
                        <SectionImage>
                            <img style={{ width: '280px', height: '185px', borderRadius: '10px' }} src={Converse} alt="logo" />
                        </SectionImage>
                        <SectionImage>
                            <img style={{ width: '280px', height: '185px', borderRadius: '10px' }} src={Crocs} alt="logo" />
                        </SectionImage>
                        <SectionImage>
                            <img style={{ width: '280px', height: '185px', borderRadius: '10px' }} src={MLB} alt="logo" />
                        </SectionImage>
                        <SectionImage>
                            <img style={{ width: '280px', height: '185px', borderRadius: '10px' }} src={Nike} alt="logo" />
                        </SectionImage>
                        <SectionImage>
                            <img style={{ width: '280px', height: '185px', borderRadius: '10px' }} src={Vans} alt="logo" />
                        </SectionImage>
                        <SectionImage>
                            <img style={{ width: '280px', height: '185px', borderRadius: '10px' }} src={Assics} alt="logo" />
                        </SectionImage>
                    </Slider>
                </SectionContent>
            </SectionLogo>
        </>
    )
}
export default SliderLogoComponent