
import React from "react";
import { WrapperInputStyle } from "./style";
const InPutForm = (props) => {
    const { placeholder = "nhập tên", ...rests } = props
    const handleOnchangeInput = (e) => {
        props.onChange(e.target.value)
    }
    return (
        <WrapperInputStyle placeholder={placeholder} value={props.value} {...rests} onChange={handleOnchangeInput} />

    )
}
export default InPutForm