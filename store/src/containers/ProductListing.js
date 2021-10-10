import React,{useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import ProductComponent from './ProductComponent';
import axios from 'axios';
import {setProducts} from '../redux/actions/product';



const ProductListing = () => {


 


    const products = useSelector((state) => state);
    const dispatch = useDispatch();


    const getProducts =  async() => {

        const response = await axios.get('https://fakestoreapi.com/products');
        console.log(response.data,'the files you need')


        dispatch(setProducts(response.data))
    }


    useEffect(() =>{




        getProducts()
    },[])


    

    console.log(products.allProducts.products[0])
    return(
        <div className="ui grid container">
            <h1>Product Listing</h1>
            <ProductComponent />
        </div>
    )



}


export default ProductListing