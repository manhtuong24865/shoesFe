import styled from "styled-components";
import { Card } from "antd"
export const WrapperCardStyle = styled(Card)`
width: 250px;
 & img{
    height: 250px;
    width: 250px;
 }
`
export const StyleNameProduct = styled.div`
font-weight: 400;
font-size: 15px;
line-height: 16px;
color:#000;
font-weight: 400;
display:flex ;
text-align: center;
flex-wrap: wrap;
`
export const WrapperReportText = styled.div`
 font-size: 15px;
 color: rgb(128,128,137);
 display: flex;
 align-items: center;
 margin: 6px 0 0px;
`
export const WrapperPriceText = styled.div`
 color:111;
 font-size: 15px;
 font-weight:600 ;
 padding:5px;

`

