import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import Usermodel from '../../../models/UserModel'
import Dbconnect from '@/utils/Db'
Dbconnect();
export default NextAuth ({
        session:{
            strategy:'jwt'
        },
        providers: [
            CredentialsProvider({
                async authorize(credentials, req) {
                    const {email,password} = credentials;
                    console.log(email,password)
                    console.log(credentials,"credential.............")
                    var [userData] = await Usermodel.find({email,password})
                    console.log(userData,"userData----")
                    let user ={
                        email: [userData.email,userData.mobile,userData.password,userData.userName,userData._id],
                       
                    }
                    return user;
                  },
            })
        ],
        secret:"nextpasswords"
})
