const Joi = require('joi');
const express = require('express');
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;
const genres = [
    {id: 1, name: "baroque"},
    {id: 2, name: "classic"},
    {id: 3, name: "modern"},
    {id: 4, name: "jazz"}
];

app.listen(port, () => console.log(`Listening to the port ${port}`));

app.get('/main/genres', (request, response) => {
    response.send(genres);
});

app.get('/main/genres/:id', (request, response) => {
    const genre = genres.find( e => e.id === parseInt(request.params.id));
    if (genre) {
        response.send(genre)
    } else response.status(404).send("error");
})

app.post('/main/genres', (request, response) => {
    const schema = Joi.object({
        name: Joi.string().required()
    });
    const result = schema.validate(request.body);

    if (result.error) {
        response.status(400).send(result.error.details[0]);
    }
    else{
        genres.push(
            {id: genres.length + 1, name: request.body.name}
        );
        response.send(genres[genres.length-1]);
    }

});

app.put('/main/genres/:id',(request, response) => {
    const genre = genres.find( e => e.id === parseInt(request.params.id));
    if (genre) {
        genre.name = request.body.name;
    }
});

app.delete('/main/genres/:id',(request, response) => {
    const genre = genres.find( e => e.id === parseInt(request.params.id));
    if (genre) {
        const index = genres.indexOf(genre);
        genres.splice(index, 1);
        response.send(genre + " Was deleted")
    } else {
        response.status(404).send("The course with the given ID not found");
    }
});

function validateGenre(genre) {
    const schema = {
        name: Joi.string().min(3).required()
    };

    return schema.validate(genre, schema);
}
