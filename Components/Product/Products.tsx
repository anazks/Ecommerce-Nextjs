import React from 'react'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'


function Products({ product }) {

  return (
    <div className={styles.products}>
        


            <div className={styles.productCards}>
                <Link href={`/Product/${product._id}`}>
                                <img src={product.url} className={styles.productImg}></img>
                </Link>
                        
                        <div className={styles.cardContents}>
                        <span><b>{product.title.shortTitle}</b></span>
                        <span><i> <br/> ₹ {product.price.cost}</i></span> <br/>
                        <b>Discount </b>
                        <span style={{color:"green"}}>{product.price.discount}</span>
                        </div>
                        
                    <div className={styles.buttons}>
                       
                            <button className={styles.cartbtn}>Add to Cart</button>
                            <button className={styles.buyNOw}>Buy Now</button>
                    </div>
            </div>




    </div>
  )
}

export default Products