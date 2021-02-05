const express = require('express');
const router = express.Router();
const Joi = require('joi'); //data validator for JavaScript

const courses = [
    {id: 1, name: "course1"},
    {id: 2, name: "course2"},
    {id: 3, name: "course3"},
];


router.get('/', (req, res) => {
    res.send(courses);
});
router.get('/:id', (req, res) => {
    res.send(req.params.id);
});

router.get('/get_id/:id', (req, res) => {
    let course = courses.find(word => word.id === parseInt(req.params.id));
    if (!course) {
        res.status(404);
        res.send("The course with the given ID not found");
    } else res.send(course);
});

router.get('/:year/:month', (req, res) => {
    res.send(req.params);
});

router.get('/query', (req, res) => {
    res.send(req.query);
});

//post requests
router.post('/', (req, res) => {
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    });

    const result = schema.validate(req.body);

    if (result.error) {
        res.status(400).send(result.error.details[0].message);
    } else {
        const course = {
            id: courses.length + 1, name: req.body.name
        };
        courses.push(course);
        res.send(course);
    }
});


// const schema = Joi.object({ name: Joi.string() .min(6) .required(),
//     email: Joi.string() .min(6) .required() .email(),
//     password: Joi.string() .min(6) .required() });
//
// const validation = schema.validate(req.body);
// res.send(validation);


//put requests

router.put('/:id', (req, res) => {
    let course = courses.find(word => word.id === parseInt(req.params.id));
    if (!course) {
        res.status(404);
        res.send("The course with the given ID not found");
    } else {

        const result = validateCourse(req.body);
        // another variant with object destructuring
        // const {error} = validateCourse(req.body);

        if (result.error) {
            res.status(400).send(result.error.details[0].message);
            return;
        }

        course.name = req.body.name;
        res.send(course);
    }

});

// delete requests
router.delete('/:id', (req, res) => {
    let course = courses.find(arg => arg.id === parseInt(req.params.id));
    if (!course) {
        res.status(404);
        res.send("The course with the given ID not found");
    } else {
        let index = courses.indexOf(course);
        courses.splice(index, 1);
        res.send(course);
    }

});

function validateCourse(course) {
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    });
    return schema.validate(course);
}

module.exports = router;