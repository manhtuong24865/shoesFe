import Slider from "react-slick";
import styled from "styled-components";
export const WrapperSliderStyle = styled(Slider)`
 & .slick-dots {
    z-index: 10;
    bottom: -2px !important;
    li{
        button{
            &::before {
                color: #000000;
            }
        }
    }
    li.active{
        button {
            &::before{
                color:#fff;
            }
        }
    }
 }
`