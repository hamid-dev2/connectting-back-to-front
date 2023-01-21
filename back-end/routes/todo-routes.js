const { Router } = require('express');
const router = Router()
const {
    create,
    getAll,
    getByTitle,
    updateByTitle,
    deleteByTitle,
    deleteAll
} = require('../controllers/todo-controllers');

router.post('/', create)
router.get('/', getAll)
router.get('/:todoTitle', getByTitle)
router.patch('/:todoTitle', updateByTitle)
router.delete('/:todoTitle', deleteByTitle)
router.delete('/', deleteAll)

module.exports = router