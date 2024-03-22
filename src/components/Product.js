import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router'
import { BASE_URL } from './data'
import Rating from './Rating'
import ProductRate from './ProductRate'
import { Link } from 'react-router-dom'

const Product = () => {
    const [product, setProduct] = useState({})
    let { id } = useParams()


    const getProducts = async () => {
        const response = await fetch(BASE_URL)
        const data = await response.json()
        const product = data.find((p) => p.id == id)
        setProduct(product)

    }



    useEffect(() => {
        getProducts()
    }, [])
    return (
        <div className='container '>
            <div className='row d-flex justify-content-center'>
                <Link to={'/'}><i className="fa-3x fa-solid fa-angle-left"></i></Link>
                <div className='col-8'>
                    <div className="card mb-2">
                        <img className="card-img-top img-fluid rounded-circle" src={product.image} alt="Title" />
                        <div className="card-body">
                            <h4 className="card-title">{product.title}</h4>
                            <p className="card-text">{product.description}</p>
                            <p className='text-danger'><strong>{product.price} kr </strong></p>
                            <Rating rating={product.rating} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
