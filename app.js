
import Index from 'express';

const app = new Index();
import { routes} from "./src/router/index.js";

app.use('/', routes)

try {
    await app.listen(process.env.PORT || 8000);
} catch (e) {
    console.error(e)
}