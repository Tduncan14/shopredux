import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';



// fetch('https://fakestoreapi.com/products/1')
//             .then(res=>res.json())
//             .then(json=>console.log(json))



const ProductComponent = () => {

    const products = useSelector((state) => state.allProducts.products)

    console.log(products,' the products')
    
    fetch('https://fakestoreapi.com/products/1')
    //             .then(res=>res.json())
    //             .then(json=>console.log(json))





 const renderList = products.map((product) => {

    const {id,title,image,price,category} = product

   return( <div  key ={id} className="four column wide">
       <Link to={`/product/${id}`}>
    <div className="ui link cards">
    <div className="card">
        <div className="image">
            <img src={image} alt={title}/>
         
        </div>
        <div className="content">

        </div>
        <div className="header">
         {title}
        </div>
        <div className="meta price">${price}</div>
        <div className="meta">{category}</div>

    </div>
    </div>
    </Link>
    </div>

    )


 })  


    //  const {id,title,} = products[0]


    return <>{renderList}</>

        

}






export default ProductComponent