const router = require('express').Router();
const { Category, Product } = require('../../models');

router.get('/', (req, res) => {
  Category.findAll({
    include: {
      model: Product,
      attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
    }
  })
    .then(dbCatData => {
      if(!dbCatData) {
        res.status(404).json({message: 'No categories found'});
        return;
      }
      res.json(dbCatData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err)
    });
});

router.get('/:id', (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: {
      model: Product,
      attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
    }
  })
    .then(dbCatData => {
      if(!dbCatData) {
        res.status(404).json({message: 'No categories found'});
        return;
      }
      res.json(dbCatData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err)
    });
});

// create new category
router.post('/', (req, res) => {
  Category.create({
    category_name: req.body.category_name
  })
    .then(dbCatData => res.json(dbCatData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// update category by its id value
router.put('/:id', (req, res) => {
  Category.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(dbCatData => {
      if (!dbCatData) {
        res.status(404).json({message:'No category found with this id'});
        return;
      }
      res.json(dbCatData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// delete category by its id value
router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbCatData => {
      if (!dbCatData){
        res.status(404).json({message: 'No category found with that id.'});
        return;
      }
      res.json(dbCatData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;