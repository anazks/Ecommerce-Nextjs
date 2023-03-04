// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import styles from '@/styles/Home.module.css'
import productModel from '../../models/ProductMOdel'
import DbConnect from '@/utils/Db';
import type { NextApiRequest, NextApiResponse } from 'next'
import { getOneProduct } from '@/Helpers/FindOneProduct';
type Data = {
  name: string
}
 DbConnect();
export default  async   (req: NextApiRequest,res: NextApiResponse) =>{
        try {
            console.log(req.body)
         let ResultProduct =  await getOneProduct(req.body.ProductId)
         res.json(ResultProduct)
        } catch (error) {
            console.log(error)
             res.json({error:true})
        }   
} 
     
