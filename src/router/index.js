import {Router} from "express";

export const routes = new Router();

routes.get('/v1/home', (request, response) => {
    //TODO: call panel service to return panel data...
    const body = JSON.stringify([       //Data sample...
        {
            id: 1,
            title: "Sports",
            description: 'lorem ipsum...',
            categories: [1, 2, 3, 4, 5],
            image: "",
        }
    ])
    response.status(200).send(body);
})

routes.get('/v1/category/:id', (request, response) => {
    const params = request.params;
    if(params.id == ':id' || params.id == null) {
        response.status(401).json({})
    }
    response.status(200).json({
        id:"1",
        title: "aerobic capacity",
        percentage:0.87,
        genome: [
            {
                gen: "NFIA",
                snp: "rs1572312",
                userGenotype: 'GG',
                idealGenotype: 'GC'
            },            {
                gen: "NFIA",
                snp: "rs1572312",
                userGenotype: 'GG',
                idealGenotype: 'GC'
            },            {
                gen: "NFIA",
                snp: "rs1572312",
                userGenotype: 'GG',
                idealGenotype: 'GC'
            },            {
                gen: "NFIA",
                snp: "rs1572312",
                userGenotype: 'GG',
                idealGenotype: 'GC'
            },
        ]

    })
})

routes.get('/v1/genome/:id', (request, response) => {
    const params = request.params;
    console.log(params);
    if(params.id == ':id' || params.id == null) {
        response.status(401).json({})
    }
    else response.status(200).send("Genome sent")
})

routes.all('/', (request, response) => response.status(200).send("Hello everyone!"))