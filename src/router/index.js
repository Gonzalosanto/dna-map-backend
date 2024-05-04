import {Router} from 'hyper-express'

export const routes = new Router();

routes.get('/v1/home', (request, response) => {
    //TODO: call panel service to return panel data...
    const body = JSON.stringify([       //Data sample...
        {
            id: 1,
            title: "Sports",
            image: "https://...",
        },
        {
            id: 2,
            title: "Nutrition",
            image: "https://...",
        }
    ])
    response.status(200).send(body);
})

routes.get('/v1/category/:id', (request, response) => {
    response.status(200).send("Categoria enviada")
})

routes.get('/v1/genome/:id', (request, response) => {
    response.status(200).send("Genoma enviado")
})

routes.all('/', (request, response) => response.status(200).send("Hello everyone!"))