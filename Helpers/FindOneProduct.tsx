import Dbconnect from "@/utils/Db";
import ProductMOdel from "@/models/ProductMOdel";
Dbconnect();
export const getOneProduct = async (id) =>{
        try {
                let Product = await ProductMOdel.find({_id:id})
                return Product;
        } catch (error) {
                return error
        }
}