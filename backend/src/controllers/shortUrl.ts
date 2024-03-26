import express from "express";
import { urlModel } from "../models/shortUrl";

export const createUrl=async (req:express.Request,res:express.Response)=>{
    try{
        console.log("The full Url is:",req.body.fullUrl);
        const {fullUrl}=req.body;
        const urlFound=await urlModel.find({fullUrl})
        if (urlFound.length>0){
            res.status(409)
            res.send(urlFound)
        }else{
            const shorturl=await urlModel.create({fullUrl})
            res.status(201).send(shorturl)
        }
        
    }
    catch(error){
        res.status(500).send({message:"Something went wrong"})
        console.log(error);
    }
}
export const getAllurl=async (req:express.Request,res:express.Response)=>{
    try{
        const shorturls=await urlModel.find()
        if(shorturls.length<0){
            res.status(404).send({message:"ShortUrls not been found"})
        }
        else{
            res.status(200).send(shorturls)
        }
        
    }
    catch(error){
        res.status(500).send({message:"Something went wrong"})
    }
}
export const getUrl = async (req: express.Request, res: express.Response) => {
    
    try {
        const shortUrl=await urlModel.findOne({shortUrl: req.params.id})
        if(!shortUrl){
            res.status(404).send({message:"Full url not found"})
        }else{
            shortUrl.clicks++;
            shortUrl.save()
            res.redirect(`${shortUrl.fullUrl}`)
        }
    } catch (error) {
        res.status(500).send({message:"Something went wrong"})
    }
}

export const deleteUrl=async (req:express.Request,res:express.Response)=>{
    try{
        const shortUrl=await urlModel.findByIdAndDelete({_id:req.params.id})
        if(shortUrl){
            res.status(200).send({message:"Requested url deleted"})
        }else{
            res.send({message:"Not found"})
        }

    }
    catch(error){
        res.status(500).send({message:"Something went wrong"})
    }
}