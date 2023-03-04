import Dbconnect from "@/utils/Db";
import User from '../../models/UserModel'
import type { NextApiRequest, NextApiResponse } from 'next'

Dbconnect();

export default async function handler(req:NextApiRequest,res:NextApiResponse){
    console.log(req.body)
    try {
        const user = await User.create(req.body)
        console.log('user created')
        res.redirect('/')
    } catch (error) {
        res.json({error:true})
    }
}