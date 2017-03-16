namespace fauna.Controllers {
  export class GetOneAnimalController {
    public animal;
    static $inject = ['animalService', '$stateParams', '$state'];
    constructor (private animalService, $stateParams, private $state) {
      this.animal = animalService.getOneAnimal($stateParams.id);
    }
    public deleteAnimal(id) {
      this.animalService.deleteAnAnimal (this.animal._id);
      return this.$state.go('getAllAnimals');
    }
    public updateAnimal(id) {
      console.log(this.animal.habitat);
      return this.$state.go('updateAnimal', {id: this.animal._id});
    }
  }
}
