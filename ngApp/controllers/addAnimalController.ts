namespace fauna.Controllers {
  export class AddAnimalController {
    public animal;
    public newDiet;
    public newHabitat;
    public habitat;
    public diet;
    static $inject = ['animalService', '$state'];
    constructor (private animalService, private $state) {
      this.animal = {};
      this.animal.diet = [];
      this.animal.habitat = [];
    }
    public addAnimal() {
      if (this.animal.cuddleStatus != 'cuddly' && this.animal.cuddleStatus != 'not cuddly') {
        this.animal.cuddleStatus = '';
        alert('Valid values for Cuddle Status are: cuddly and not cuddly');
        return;}

      this.animalService.addAnimal(this.animal)
      .then(() => this.$state.go('getAllAnimals'))
      .catch((err) => console.error(err));
    }
    public addAnimalHabitat () {
      let newHabitat = {location:''};
      newHabitat.location = this.habitat.location;
      this.animal.habitat.unshift(newHabitat);
      this.habitat.location = '';
    }
    public addAnimalDiet () {
      let newDiet = {food:''};
      newDiet.food = this.diet.food;
      this.animal.diet.unshift(newDiet);
      this.diet.food = '';
    }
  }
}
