import DbConnect from '../../utils/Db';
import type { NextApiRequest, NextApiResponse } from 'next'
import ProductMOdel from '../../models/ProductMOdel'
import { getProduct } from '@/Helpers/ProductHelper'
export default  async  function(req: NextApiRequest,res: NextApiResponse){
    try {
          //await DbConnect();
          let products =   await getProduct();
              if(products){
                res.json(products)
              }else{
                  console.log("no products")
              }
           } catch (error) {
        res.json({error})
    }
} 
     
