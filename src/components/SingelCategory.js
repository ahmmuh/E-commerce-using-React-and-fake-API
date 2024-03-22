import React from 'react'
import Rating from './Rating'
import { Link } from 'react-router-dom'
const SingelCategory = ({ category }) => {
    return (
        <div className="card mb-2">
            <img className="card-img-top img-fluid " src={category.image} alt="Title" />
            <div className="card-body">
                <h4 className="card-title">{category.title}</h4>
                <p className="card-text">{category.description}</p>
                <p className='text-danger'><strong>{category.price} kr</strong></p>
                <Rating rating={category.rating} />
                <Link to={`/products/product/${category.id}`}>View</Link>

            </div>
        </div>
    )
}

export default SingelCategory
