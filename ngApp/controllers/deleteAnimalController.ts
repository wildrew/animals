namespace fauna.Controllers {
  export class DeleteAnimalController {
    public animals;
    public id;
    static $inject = ['animalService'];
    contructor (animalService) {
      this.animals = animalService.deleteAnimal(this.id);
    }
  }
}
