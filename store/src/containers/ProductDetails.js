import {useEffect,useState} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';


const ProductDetails = ({match}) => {

 
    const [product,setProduct] = useState('')


    const getProduct = async () => {

      
      const getProduct =  await axios.get(`https://fakestoreapi.com/products/${match.params.id}`).catch(err => {
 
            console.log(err,'this is the error')


            
        })


        

      setProduct(getProduct.data)
      
      


    }

    useEffect(() => {

        getProduct()




      

        

    },[])


    const Details = () => {

        
        product.map((p) => {
            const {id,title,image,price,category} = p

         return  ( <div  key ={id} className="four column wide">
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
    </div>




        )})

    }


    console.log(product)
    return(<>{Details} </>)
    


    }








export default ProductDetails;