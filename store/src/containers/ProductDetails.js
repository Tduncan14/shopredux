import {useEffect,useState} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { selectedProduct,removeProduct } from '../redux/actions/product';


const ProductDetails = ({match}) => {


    const {id} = useParams();

    console.log(id);


    const product = useSelector(state => state.product)
    const {image,title,price,category,description} = product;
    const dispatch = useDispatch();



    console.log(product,'this is the product')

    const fetchProductDetail =  async () => {

        const response = await axios.get(`https://fakestoreapi.com/products/${id}`).catch(err => console.log(err,'err'));



        
         dispatch(selectedProduct(response.data))
    }


    useEffect(()=>{

        if(id && id !== "")   fetchProductDetail()




        return () => {
            dispatch(removeProduct())
        }


    },[id])




    // const product = useSelector(state => state)
    // const dispatch = useDispatch()

 



    // const getProduct = async () => {
    

    //     console.log(match.params.id)
      
    //   const getProducts =  await axios.get(`https://fakestoreapi.com/products/${match.params.id}`).catch(err => {
 
    //         console.log(err,'this is the error')



    //     })


        

       
    //   dispatch(selectedProduct(getProducts.data))

    
      


    // }

    // useEffect(() => {

    //     getProduct()




    //    console.log(product)

        

    // },[])


    // const Details = () => {

    // const product = product.allProducts.product; 


    // console.log(product,'this is product')

        
    //     product.map((p) => {
    //         const {id,title,image,price,category} = p

    //      return  ( <div  key ={id} className="four column wide">
    // <div className="ui link cards">
    // <div className="card">
    //     <div className="image">
    //         <img src={image} alt={title}/>
         
    //     </div>
    //     <div className="content">
    //          hey 
    //     </div>
    //     <div className="header">
    //      {title}
    //     </div>
    //     <div className="meta price">${price}</div>
    //     <div className="meta">{category}</div>

    // </div>
    // </div>
    // </div>




    //     )})

    // }


    // console.log(Object.values
    //     (product.allProducts.product))
    return(
        <>
         {Object.keys(product).length === 0 ? <div> ... Loading items </div>: (

            
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
    )}   
    </>
    )

    }








export default ProductDetails;