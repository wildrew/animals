import * as express from 'express';
import * as mongodb from 'mongodb';
import animal from '../models/fauna';
import Animal from '../models/fauna';

let router = express.Router();

// add animal
router.post('/', (req, res) => {
  let animal = new Animal();
  animal.name = req.body.name;
  animal.conservationStatus = req.body.conservationStatus;
  animal.diet = req.body.diet;
  animal.habitat = req.body.habitat;
  animal.cuddleStatus = req.body.cuddleStatus;
  animal.scientificName = req.body.scientificName;
  animal.picture = req.body.picture;
  animal.save().then((newAnimal) => {
    res.json(newAnimal);
  })
  .catch((err) => {
    console.log(err);
    res.status(400).json(err);
  });
});

// kill animal
router.delete('/:id', (req, res) => {
  let animalId = req.params['id'];
  animal.remove({_id: animalId})
  .then(() => {
    res.sendStatus(200);
  })
  .catch((err) => {
    console.log(err);
    res.status(400).json(err);
  });
});

// get all animals
router.get('/', (req, res) => {
  Animal.find().then((animals) => {
    res.json(animals);
  }).catch ((err) => {
    console.log(err);
    res.status(400).json(err);
  });
});

// get one animal
router.get('/:id', (req, res) => {
  animal.findById(req.params.id)
  .then ((animal) => {
    res.json(animal);
  })
  .catch((err) => {
    console.log(err);
    res.status(400).json(err);
  });
});

// update animal
function removeNull (inputArray) {
  let outputArray =[];
  for (let element of inputArray) {
    if (element.location != '' && element.food != '') {
      outputArray.push(element);
    }
  }
  return outputArray;
};
router.put('/:id', (req, res) => {
  let animalId = req.params.id;
  Animal.findOne({_id: req.params.id})
  .then((animal) => {
    animal.name = req.body.name;
    animal.conservationStatus = req.body.conservationStatus;
    animal.diet = removeNull(req.body.diet);
    console.log(req.body.habitat);
    animal.habitat = removeNull(req.body.habitat);
    animal.cuddleStatus = req.body.cuddleStatus;
    animal.scientificName = req.body.scientificName;
    animal.picture = req.body.picture;

    animal.save().then((updatedAnimal) => {
      res.json(updatedAnimal);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
  })
});
export default router;
