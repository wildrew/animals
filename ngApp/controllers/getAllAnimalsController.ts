namespace fauna.Controllers {
  export class GetAllAnimalsController {
    public animals;
    public animalId;
    public animal;
    static $inject = ['animalService', '$stateParams', '$state'];

    constructor (private animalService, $stateParams, private $state) {
      this.animals = animalService.getAllAnimal();
    }

    public showOne (id) {
      return this.$state.go('getOneAnimal', {id: id});
    }
  }
}
