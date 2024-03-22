import React, { useEffect, useState } from 'react'
import Loading from './Loading'
import SingelCategory from './SingelCategory'
import Rating from './Rating'
import { Link, useNavigate } from 'react-router-dom'
import { BASE_URL } from './data'

/* eslint-disable */


const ProductList = () => {

    let navigate = useNavigate()

    let [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    let [categories, setCategories] = useState([])

    const [displayCategory, setDisplayCategory] = useState([])
    const [isCategory, setIsCategory] = useState(false)

    const getProducts = async () => {
        const response = await fetch(BASE_URL);
        let data = await response.json()
        setProducts(data)
        getCategories(data)
        setLoading(false)

    }


    function getCategories(data) {
        let result = data.filter(
            (category, index) => index === data.findIndex(
                other => category.category === other.category
            ));
        setCategories(result)


    }

    const showSingelCategory = (c) => {
        let list = products.filter((newCategory) => newCategory.category === c.category)
        setDisplayCategory(list)
        setIsCategory(true)
        setLoading(false)

    }
    useEffect(() => {
        getProducts();
    }, [])



    return (
        <div className='conatiner'>

            <div className='row'>
                <div className='col-lg-4 bg-light d-flex flex-column p-3 h-100'>
                    <h3>Category</h3>


                    <div className="btn-group d-flex flex-column " role="group" aria-label="Basic example">
                        <>
                            {loading ? <Loading /> :
                                categories.map(c =>
                                    <button key={c.id} type="button" onClick={() => showSingelCategory(c)} className="btn text-white m-2 border-0 text-capitalize " style={{
                                        backgroundColor: '#905424'
                                    }}>{c.category}</button>

                                )
                            }
                        </>
                    </div>

                </div>

                <div className='col-lg-8 px-5'>
                    <div>

                        {
                            isCategory ? displayCategory.map((category) => (
                                <SingelCategory key={category.id} category={category} />

                            )) : products.map((product) => (
                                <div key={product.id}>
                                    <div className="card mb-2">
                                        <img className="card-img-top img-fluid " src={product.image} alt="Title" />
                                        <div className="card-body">
                                            <h4 className="card-title">{product.title}</h4>
                                            <p className="card-text">{product.description}</p>
                                            <p className='text-danger'><strong>{product.price} kr</strong></p>
                                            <Rating rating={product.rating} />
                                            <Link to={`/products/product/${product.id}`}>View</Link>
                                        </div>
                                    </div>


                                </div>

                            ))
                        }

                    </div>
                </div>
            </div>
        </div >
    )
}

export default ProductList
