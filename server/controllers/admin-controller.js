const User = require("../models/user-models");
const Contact = require("../models/contact-model");



const getAllusers = async(req, res) => {
    try {
        const users = await User.find({}, {password:0});
        console.log(users)
        if(!users || users.length === 0){
            return res.status(404).json({message:"no users found"});
        }
        return res.status(200).json(users);     
    } catch (error) {
        next(error);     
        // console.log("not connect") 
    }
}

const getUserById = async (req, res) =>{
    try {
        const id = req.params.id;
        const data = await User.findOne({_id:id},{ password: 0 });
        return res.status(200).json(data);
    } catch (error) {
        next(error)   
    }
}



const updateUserById = async (req, res) => {
    try {
        const id = req.params.id
        const updateUserdata = req.body;
        const updateData = await User.updateOne({_id:id},
            {
                $set:updateUserdata,
            });
            return res.status(200).json(updateData);
    } catch (error) {
        next(error);      
    }
}



const deleteUserById = async (req, res) =>{
    try {
        const id = req.params.id;
        await User.deleteOne({_id:id});
        return res.status(200).json({message:"User Deleted Successfully"}); 
    } catch (error) {
        next(error)
    }
}

const getAllcontacts = async(req, res) =>{
    try {
        const contacts = await Contact.find();
        console.log(contacts)
        if(!contacts || contacts.length === 0){
            return res.status(404).json({message:"no contacts found"});
        }
        return res.status(200).json(contacts); 
    } catch (error) {
        next(error);     
        // console.log("not connect") 
    }
}

const deleteContactById = async (req, res, next) => {
    try {
        const id = req.params.id;
        await Contact.deleteOne({ _id: id });
        return res.status(200).json({ message: "Contact deleted successfully" });
    } catch (error) {
        next(error);
    }
}


module.exports = {getAllusers, getAllcontacts, deleteUserById, getUserById , updateUserById,deleteContactById};