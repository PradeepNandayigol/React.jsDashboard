const User = require("../models/user-models")
const bcrypt = require("bcryptjs");




const home = async (req, res) => {
    try {
        res
            .status(200)
            .send("welcome to the world best mern series by thapa technical using router");
    } catch (error) {
        console.log(error);

    }
};





const register = async (req, res) => {
    try {
        console.log(req.body);

        const { username, email, phone, password } = req.body;

        const userExist = await User.findOne({ email });

        if (userExist) {
            return res.status(400).json({ message: "email already exists" });
        }
        // const saltRound = 10;
        // const hash_password = await bcrypt.hash(password, saltRound)
        const userCreated = await User.create({
            username,
            email,
            phone,
            password
        });

        res
            .status(201)
            .json({
                message: "registration successful",
                token: await userCreated.generateToken(),
                userId: userCreated._id.toString(),
            });

    } catch (error) {
        // res.status(500).json("internal server error ");
        next(error)

    }
}



const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const userExist = await User.findOne({ email });
        // console.log(userExist)

        if (!userExist) {
            return res.status(400).json({ message: "invalid credential" });
        }

        // const user = await bcrypt.compare(password, userExist.password);
        const user = await userExist.comparePassword(password);

        if (user) {
            res.status(200).json({
                message: "login  successful",
                token: await userExist.generateToken(),
                userId: userExist._id.toString(),
            });

        } else {
            res.status(401).json({ message: "invalid email and password" });
        }
    } catch (error) {
        res.status(500).json("internal server error ");
    }
}



const user = async (req, res) =>{
    
    try {
        const userdate = req.user;
        console.log(userdate);
        return res.status(200).json({userdate});
    } catch (error) {
        console.log(`error from the user ${error}`);
      
    }
};

// const user = async(req, res) => {
//     try {
//         res.status(200).json({msg:"hi user"});
//     } catch (error) {
//         console.log(`error from the user root ${error}`);
        
//     }
// }

module.exports = { home, register, login, user};


