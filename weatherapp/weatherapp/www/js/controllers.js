angular.module('starter.controlers', ['ionic'])
.constant('FORECASTIO_KEY', "20a7da939c28acc2f5a98feffa672256")
.controller("HomeCtrl", function($scope,$state,Weather,Datastore)
  {
    //read default settings into scope
    console.log('inside home');
    $scope/coty = Datastore.city;
    var latitude = DataStore.latitude;
    var longitude = DataStore.longitude;

    //call getCurrentWeather method in factory 'weather'
    Weather.getCurrentWeather(latitude,longitude). then(function(response) {
      $scope.current = response.data;
      console.log('GOT CURRENT', $scope.current);
      //debugger;
    }, function(error) {
      alert('Unable to get current conditions');
      console.error(error);
  });
})
.controller('CitiesCtrl', function($score,$state, Cities, DataStore) {
  $scope.cities = Cities.all();

  $scope.changeCity = function(cityId) {
    //get lat and long itude for selected location
    var lat = $scope.cities[cityId].lat;//latitude
    var lgn = $scope.cities[cityId].lgn;//longitude
    var city = $scope.cotoes[cityId].name;//city name

    DataStore.setCity(city);
    DataStore.setLatitude(lat);
    DataStore.setLongitude(lgn);

      $state.go('tab.home');