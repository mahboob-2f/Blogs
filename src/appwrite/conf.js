import { Client, Account, ID,TablesDB ,Storage,Query } from "appwrite";
import config from "../config/config";


export class Service{
    client = new Client();
    tablesDB;
    bucket;

    constructor(){
        this.client
            .setEndpoint(config.appWriteUrl)
            .setProject(config.appWriteProjectId);
        this.tablesDB  = new TablesDB (this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title,slug,content,featuredImage,status,userId}){
        try{
            return await this.tablesDB.createRow(
                config.appWriteDatabaseId,
                config.appWriteTablesId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        }catch(e){
            console.log(" appwrite error: createPost : ",e);
        }
    }
}

const service = new Service();
export default service;
