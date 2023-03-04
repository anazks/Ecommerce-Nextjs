import ProductMOdel from "@/models/ProductMOdel"
import Dbconnect from "@/utils/Db";
Dbconnect();
export const getProduct = async ()=>{
            try {
                    let product = await ProductMOdel.find();
                    return product;
            } catch (error) {
                        return error
            }
}