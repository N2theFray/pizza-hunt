const router = require('express').Router()

const {
    getAllPizza,
    getPizzaById,
    createPizza,
    updatePizza,
    deletePizza
} = require ('../../controllers/pizza-controller')

//set up GET and Post at api/pizzas

router
    .route('/')
    .get(getAllPizza)
    .post(createPizza);

//set up GET one, put, and delete at /api/pizza/:id

router
    .route('/:id')
    .get(getPizzaById)
    .put(updatePizza)
    .delete(deletePizza)


   
  

module.exports = router