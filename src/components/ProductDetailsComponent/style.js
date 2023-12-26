import { Col, Image, InputNumber } from "antd";
import styled from "styled-components";
export const WrapperStyleImageSmall = styled(Image)`
 width: 64px;
 height: 100px !important;
`
export const WrapperStyleColSmall = styled(Col)`
display: flex;
flex-basis: unset;
`
export const WrapperStyleNameProduct = styled.div`
color : rgb(36,36,36);
font-size: 24px;
font-weight: 700;
line-height: 32px;
word-break:break-word;
`
export const WrapperStyleTextBuy = styled.span`
 font-size: 15px;
 line-height: 24px;
 color: rgb(120, 120, 120 );
`
export const WrapperStylePriceProduct = styled.div`

display: flex;
`
export const WrapperPriceTextProduct = styled.h1`
font-size: 24px;
line-height: 40px;
margin-right: 8px;
font-weight: 500;
padding:10px;
margin-top: 10px;
color: red;
`
export const WrapperPriceSale = styled.h3`
font-size: 18px;
line-height: 40px;
margin-right: 8px;
font-weight: 500;
padding:10px;
margin-top: 10px;
text-decoration-line:line-through;
`
export const WrapperAddressProduct = styled.div`
 span.address{
    text-decoration: underline;
    font-size: 15px;
    line-height: 24px;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
 };
 span.change-address {
    color:rgb(11,116,229);
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
 }
`
export const ProductSize = styled.div`
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 10px;
    margin-bottom: 10px;

`
export const WrapperQualityProduct = styled.div`
   display: flex;
   gap:4px;
   align-items: center;
   border-radius:4px;
   border:1px solid #ccc;
   width: 120px;
`
export const WrapperSingleProduct = styled.div`
 margin-top: 20px;
 margin-bottom: 20px;
 background: #fafafa;
 padding:10px;
 color: #464646;
 font-size: 16px;
`
export const WrapperInputNumber = styled(InputNumber)`
   &.ant-input-number.ant-input-number-sm{
    width: 40px;
    border-top: none;
    border-bottom: none;
    .ant-input-number-handler-wrap{
        display: none !important;
     } }
`
export const WrapperContainer = styled.div`
width: 100%;
padding-right: 15px;
padding-left: 15px;
margin-right: auto;
margin-left: auto;
margin-top: 70px;
`
export const WrapperContainerTitle = styled.h3`
margin-bottom: 10px;
margin-top: 20px;
color: rgb(51,51,51);
font-weight: 600;
font-size: 26px;
`