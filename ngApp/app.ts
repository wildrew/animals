namespace fauna {

    angular.module('fauna', ['ui.router', 'ngResource', 'ui.bootstrap']).config((
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider
    ) => {
        // Define routes
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/ngApp/views/home.html',
                controller: fauna.Controllers.HomeController,
                controllerAs: 'controller'
            })
            .state('about', {
                url: '/about',
                templateUrl: '/ngApp/views/about.html',
                controller: fauna.Controllers.AboutController,
                controllerAs: 'controller'
            })
            .state('addAnimal', {
                url: '/addAnimal',
                templateUrl: '/ngApp/views/addAnimal.html',
                controller: fauna.Controllers.AddAnimalController,
                controllerAs: 'controller'
            })
            .state('deleteAnimal', {
                url: '/deleteAnimal',
                templateUrl: '/ngApp/views/deleteAnimal.html',
                controller: fauna.Controllers.DeleteAnimalController,
                controllerAs: 'controller'
            })
            .state('getAllAnimals', {
                url: '/getAllAnimals',
                templateUrl: '/ngApp/views/getAllAnimals.html',
                controller: fauna.Controllers.GetAllAnimalsController,
                controllerAs: 'controller'
            })
            .state('getOneAnimal', {
                url: '/getOneAnimal/:id',
                templateUrl: '/ngApp/views/getOneAnimal.html',
                controller: fauna.Controllers.GetOneAnimalController,
                controllerAs: 'controller'
            })
            .state('updateAnimal', {
                url: '/updateAnimal/:id',
                templateUrl: '/ngApp/views/updateAnimal.html',
                controller: fauna.Controllers.UpdateAnimalController,
                controllerAs: 'controller'
            })
            .state('login', {
                url: '/login',
                templateUrl: '/ngApp/views/login.html',
                controller: fauna.Controllers.LoginController,
                controllerAs: 'controller'
            })
            .state('notFound', {
                url: '/notFound',
                templateUrl: '/ngApp/views/notFound.html'
            });

        // Handle request for non-existent route
        $urlRouterProvider.otherwise('/notFound');

        // Enable HTML5 navigation
        $locationProvider.html5Mode(true);
    });



}
