import React from 'react'
import Card from '../Card/Card'

const ProductList = () => {
    const arr = [{ name: "Asus", price: 2000 }, { name: "DELL", price: 3000 }, { name: "Lenovo", price: 4000 }]

    return (
        <div style={{display: 'flex', justifyContent: 'space-between',flexWrap:"wrap"}} >{arr.map(el =><Card/> )}</div>
    )
}

export default ProductList