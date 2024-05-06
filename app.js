
import Index from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = new Index();
import { routes} from "./src/router/index.js";

app.use('/', routes)

try {
    await app.listen(process.env.PORT || 8000, ()=>{
        console.log("Server listening at port: ", process.env.PORT)
    });
} catch (e) {
    console.error(e)
}