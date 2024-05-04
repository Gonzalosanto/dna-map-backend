import {Server} from 'hyper-express';

const app = new Server()
import { routes} from "./src/router/index.js";

app.use('/', routes)

try {
    await app.listen(process.env.PORT || 8000);
} catch (e) {
    console.error(e)
}