import React from "react";
import Slider from "react-slick";
import CardComponent from "../CardComponent/CardComponent";
import { SectionCard } from "./style";
import { StyleNameProduct } from "../CardComponent/style";

const SliderCardComponent = (props) => {
    const { countInStock, description, image, name, price, type } = props


    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000
    };
    return (
        <>
            <SectionCard>
                <div>
                    <Slider {...settings}>
                        <div>
                            <CardComponent name={name} price={price} />
                        </div>
                        <div>
                            <CardComponent name={name} price={price} />
                        </div>
                        <div>
                            <CardComponent name={name} price={price} />
                        </div>
                        <div>
                            <CardComponent name={name} price={price} />
                        </div>
                        <div>
                            <CardComponent name={name} price={price} />
                        </div>
                        <div>
                            <CardComponent name={name} price={price} />
                        </div>
                    </Slider>

                </div>
            </SectionCard>

        </>
    )
}
export default SliderCardComponent