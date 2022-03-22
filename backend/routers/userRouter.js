import express from "express";
import expressAsyncHandler from "express-async-handler";
import req from "express/lib/request.js";
import res from "express/lib/response.js";
import data from "../data.js";
import User from "../models/userModel.js";

const useRouter = express.Router();

useRouter.get('/seed', expressAsyncHandler(async(req, res) =>{
await User.remove({});
const createdUsers = await User.insertMany(data.users);
res.send({createdUsers});
}));

export default useRouter;