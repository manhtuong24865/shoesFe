import React from 'react'
import { useNavigate } from 'react-router-dom'

const TypeProduct = ({ name }) => {
    const navigate = useNavigate()
    const handleNavigatetype = (type) => {
        navigate(`/product/${type}`)
    }
    return (
        <div style={{ padding: '0 10px', cursor: 'pointer' }} onClick={() => handleNavigatetype(name)}>{name}</div>
    )
}

export default TypeProduct