import styled from "styled-components";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
export const WrapperButtonHover = styled(ButtonComponent)`
&:hover{
    color:#fff;
    background: rgb(13,92,182) ;
    span{
        color:#fff;
    }
}
width: 100%;
text-align: center;
cursor: ${(props) => props.disabled ? 'not-allowed' : 'pointers'};
`
export const WrapperProducts = styled.div`
 display: flex;
 justify-content: center;
 gap:15px;
 margin-top: 20px;
 flex-wrap: wrap;
`
export const TitleTextNew = styled.h1`
font-size: 24px;
font-weight: 600;
text-align: center;
text-transform: uppercase;
text-decoration: underline;
cursor: pointer;
letter-spacing: 2px;
text-shadow: 2px;

margin: 0;
&:hover{
    color:red;
}
`
export const WrapperTextName = styled.div`
font-size: 16px;
font-weight: bolder;
`
export const WrapperTextcontent = styled.span`
font-size: 16px;
font-weight: 500;
text-align: center;
`
export const Wrappercontent = styled.p`
font-size: 16px;
font-weight: 500;
text-align: center;
`
