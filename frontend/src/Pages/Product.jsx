import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import { Breadcrum } from '../Components/Breadcrums/Breadcrum';
import { ProductDisplay } from '../Components/ProductDisplay/ProductDisplay';
import { DescriptionBox } from '../Components/DescriptionBox/DescriptionBox';
export const Product = () => {
  const {all_product}=useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e)=> e.id=== Number(productId));
  return (
    <div>
      <Breadcrum product = {product}></Breadcrum>
      <ProductDisplay product = {product}/>
      <DescriptionBox></DescriptionBox>
    </div>
  )
  
}

export default Product