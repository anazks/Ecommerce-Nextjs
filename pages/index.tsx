import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '@/Components/Layout'
import Products from '@/Components/Product/Products'
import { useEffect, useState } from 'react'
import Axios from '../utils/Axios'
import Banner from '@/Components/Banner/Banner'
export default function Home() {
  useEffect(() => {
    fetchData();
  }, [])

  const [product, setProduct] = useState([]) 
 const fetchData = async ()=>{
           Axios.get('/ProductsAPI').then((response)=>{
          console.log(response.data)
          setProduct(response.data)
        })
  }

  
  return (
    <>
          <Layout>
            <Banner/>
             <div className={styles.product}>
                    { product ? product.map((product)=>{
                        return     <Products product={product} key= {product._id}> </Products>
                      }) : 

                       <h1>NO Product Found!!!</h1>
                      }
             </div>
             
          </Layout>
    </>
  )
}
