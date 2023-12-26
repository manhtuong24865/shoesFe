import { Row } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const WrapperHeader = styled(Row)`
 padding:10px;
 background-color: #F4F4F4;

    
`
export const WapperTextHeader = styled.span`
 font-size: 14px;
 color: #454545;
 font-weight: 500;
`
export const WapperContactHeader = styled.div`
     display: flex;
    justify-content:space-between;
`
export const WapperTextContactHeader = styled.span`
  font-size: 14px;
  color: #454545;
  font-weight: 500;
  position: relative;
  left: 10px;
  cursor: pointer;
`
export const LogoHeader = styled.div`
 width: 170px;
`
export const WapperMenuHeader = styled.div`
 padding :0;
 background-color:#000000;
 
`
export const MenuUlHeader = styled.ul`
display: flex;
justify-content: space-between;
`
export const MenuLiHeader = styled.li`
list-style: none;
position: relative;
a{
text-decoration: none;
font-size:14px;
color :white;
text-transform: uppercase;
font-weight: bold;
letter-spacing: 2px;
padding:5px 0;
transition: all 0.3s;
display: block;
}
`

export const MenuUlHeaderDropDown = styled.ul`
 background: #F4F4F4;
 display: block;
 position: absolute;
 width: 180px;
 padding: 5px 0;
 transition: all 0.3s;
 list-style: none;
 opacity: 0;
 visibility: hidden; 
 transition: all, 0.3s;
  li{
    a{
      text-transform: capitalize;
      color: black;
      font-weight: 400;
      padding:5px 15px;
    }
  }
`
export const MenuLiHeaderHover = styled(MenuLiHeader)`
  &:hover{
    ul{
      opacity: 1;
      visibility: visible; 
      z-index: 1;
    }
  }
`
export const WrapperContentPopup = styled.p`
cursor: pointer;
&:hover{
  background: #F4F4F4;
  color:#000;
}
`
