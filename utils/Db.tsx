import mongoose from 'mongoose';

const Dbconnect = () => {
    return mongoose.connect("mongodb+srv://next:123@cluster0.jxpil.mongodb.net/Mearn?retryWrites=true&w=majority")
   // return mongoose.connect("mongodb+srv://zionit:anaz123@cluster0.jxpil.mongodb.net/jwreport?retryWrites=true&w=majority")
}
export default Dbconnect;