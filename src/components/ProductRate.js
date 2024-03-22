import React from 'react'

const ProductRate = ({ rating }) => {
    return (
        <div>
            <span>{rating?.rate} <i className="fa-solid fa-star" style={{ color: 'orange' }}></i> ({rating?.count})</span>
        </div>
    )
}

export default ProductRate
