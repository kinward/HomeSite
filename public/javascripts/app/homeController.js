/**
 * Copyright 2014 eRealm Sdn.Bhd.
 *
 * Created by dang on 2/08/2014
 */

angular.module('erealm').controller('HomeController', ['$scope','client', '$translate',function($scope, client, $translate) {

    'use strict';

    $scope.subTitle = "Hello, We are",
    $scope.mainTitle = "Erealm Info & Tech",
    $scope.currentPage = "home-page",
    $scope.myInterval = 5000;

    $scope.loadData = function(language) {
        if (!language) language = $translate.proposedLanguage();
        client.getProjectsInfo(language).then(function(response){
            var projects = response.data;
            $scope.projects = projects;
        });
    };
    $scope.loadData();

    client.getTechnologies().then(function(response) {
        $scope.technologies = response.data.technologies;
        $scope.languages = response.data.languages;

    });
}]);
