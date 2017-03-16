namespace fauna.Services {
  export class LoginService {
    public authority;
    public isAdmin;
    public userId;
    public password;
    public login;
    private LOGIN_RESOURCE = this.$resource('/api/login');
    static $inject =['$resource'];
    constructor (private $resource) {}

    public authorize (userId, password) {
      this.isAdmin = this.checkUser(userId, password)
        .then((data) => {sessionStorage.setItem('admin', data.isAdmin)
    });
  }
    private checkUser (userId, password) {
      return this.LOGIN_RESOURCE.get({userId: userId, password: password}).$promise
    };
}
  angular.module('fauna').service('loginService', LoginService);
}
