namespace fauna.Services {
  export class AnimalService {
    public animal;
    public isAdmin;
    private ANIMAL_RESOURCE = this.$resource('/api/fauna/:id', null,
  {
    'update' : {method: 'PUT'}
  });
    static $inject = ['$resource', '$state'];
    constructor (private $resource, private $state) {}

    public addAnimal (animal) {
      return this.ANIMAL_RESOURCE.save(animal).$promise;
    }
    public deleteAnAnimal (id) {
      if (sessionStorage.getItem("admin") === 'true') {
      return this.ANIMAL_RESOURCE.remove({id:id}).$promise;
    }}
    public getAllAnimal () {
      return this.ANIMAL_RESOURCE.query();
    }
    public getOneAnimal (id) {
      return this.animal = this.ANIMAL_RESOURCE.get({id: id})

    }
    public updateAnAnimal (id) {
      if (sessionStorage.getItem("admin") === 'true') {
      return this.ANIMAL_RESOURCE.update({id:id}, this.animal).$promise;
    }}
    public displayOne (id) {
      this.getOneAnimal(id);
      return;
    }
  }
  angular.module('fauna').service('animalService', AnimalService);
}
