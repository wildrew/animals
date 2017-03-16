namespace fauna.Controllers {
  export class UpdateAnimalController {
    public animal;
    public id;
    public habitat;
    public diet;
    static $inject = ['animalService', '$stateParams', '$state'];
    constructor (private animalService, $stateParams, private $state) {
      this.animal = animalService.getOneAnimal($stateParams.id);
    };
      public updateAnimal (id) {
        this.animalService.updateAnAnimal(this.animal._id);
        return this.$state.go('getAllAnimals');
    }
    public addAnimalHabitat () {
      let newHabitat = {location:''};
      newHabitat.location = this.habitat.location;
      this.animal.habitat.unshift(newHabitat);
      this.habitat.name = '';
    }
    public addAnimalDiet () {
      let newDiet = {food:''};
      newDiet.food = this.diet.food;
      this.animal.diet.unshift(newDiet);
      this.diet.food = '';
    }
    }
  }
