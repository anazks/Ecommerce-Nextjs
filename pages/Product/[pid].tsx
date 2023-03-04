import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Layout from '../../Components/Layout'
import Axios from '../../utils/Axios'
import styles from '@/styles/Home.module.css'

function DetailedView() {
    const [product, setProduct] = useState()
    const router = useRouter();

    const ProductId =  router.query.pid;
    console.log(ProductId);
   function getData(ProductId){
    
                Axios.post(`/FindProduct`,{ProductId}).then((response)=>{
                    console.log(response.data[0])
                    setProduct(response.data[0])
                })
   }
    
 useEffect(()=>{
    getData(ProductId);
 },[])
               
    return(
        <Layout>
                <div className={styles.detailedImg}>
                            

                            <div className={styles.left}>
                                        {
                                            product ? <img src={product.detailUrl} className={styles.detaildPhoto}/> :""
                                        }
                            </div>
                            <div className={styles.right}>
                                            <div className={styles.details}>
                                                    <h5><i>{product ? product.description :""}</i></h5>
                                                    <h4>RS:{product ? product.price.mrp :""}</h4>
                                                    <h3>Discount:{product ? product.price.discount :""}</h3>
                                            <div className={styles.Rightbtns}>
                                                    <button className={styles.buyNow}>BUY NOW</button>
                                                    <button  className={styles.addTocart}>ADD TO CART</button>
                                            </div>
                                            </div>
                            </div>
                          
                </div>
        </Layout>
    )
}

export default DetailedView