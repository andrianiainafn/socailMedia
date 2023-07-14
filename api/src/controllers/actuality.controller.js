const mongoose = require('mongoose')
const actualityModel = require('../models/actuality.model')

exports.actuality = async(req,res)=>{
    try{
    //  const token = req.cookies.user
    //  if(!token){
    //     return res
    //     .status(403)
    //     .json({message: 'Unauthorized'})
    //  }   
    // const user_id = req.userId     
     const actuality = await actualityModel.find().populate({
        path:'actu',
        model:'post',
        populate:[{
            path: 'author',
            select:['firstname', 'lastname','profilepicture']
        },{
            path: 'love',
            select:['firstname', 'lastname','profilepicture']
        }
    ],
     }).lean()
     res 
     .status(200)
     .json({message:JSON.stringify(actuality, null, 2)})

    }catch(e){
        console.error(e)
        res
        .status(500)
        .json({message:'Internal Srveur Error'})
    }
}