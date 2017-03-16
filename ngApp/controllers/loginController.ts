namespace fauna.Controllers {
  export class LoginController {
    public userId;
    public password;
    public isAdmin;
    static $inject = ['loginService', '$state'];
    constructor (private loginService, private $state) {}

    public login() {
      this.isAdmin = this.loginService.authorize(this.userId, this.password);
      return this.$state.go('getAllAnimals');
    }
  }
}
