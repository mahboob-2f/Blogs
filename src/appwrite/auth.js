
import { Client, Account, ID } from "appwrite";
import config from "../config/config";
import { use } from "react";

export class AuthService{
    client = new Client();

    account;
    constructor(){
        this.client
            .setEndpoint(config.appWriteUrl)
            .setProject(config.appWriteProjectId);
    }
    account = new Account(this.client);

    async createAccount({email,password,name}){
        try{
            const userAccount =await this.account.create(ID.unique(),email,password,name);
            if(userAccount){
                //  call another method
                return this.login({email,password});

            }else   return userAccount;
        }catch(e){
            throw e;
        }
    }
    async login({email,password}){
        try{
            const user= await this.account.createEmailPasswordSession(email,password);
            return user;
        }catch(e){
            throw e;
        }
    }

    async getCurrentUser(){
        try{
            const user= await this.account.get();
            if(user){
                console.log(user);
                return user;
            }else{
                console.log("user not found");
                return null;
            }
            
        }catch(e){
            throw e;
        }
    }
    async logout(){
        try{
            await this.account.deleteSessions();
        }catch(e){
            throw e;
        }
    }

}



const authService = new AuthService();
export default authService
