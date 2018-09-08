function TextToSpeechConverter()
{
    document.getElementById("Display").innerHTML = "Get the audio played from the search bar"
}
function Display()
{
    document.getElementById("Display").innerHTML = "Signed In";
}
function NutritionProviderFunc()
{
    document.getElementById("Display").innerHTML = "Search for the item bellow to get nutrition details"
}
function Contact()
{
    document.getElementById("Display").innerHTML = "check for the contact bellow"
}function Home()
{
    document.getElementById("Display").innerHTML = "Welcome To Home Page"
}
function Login()
{
    document.getElementById("Display").innerHTML = "Login page"
}
angular.module('NutritionApp',[])

    .controller('NutritionController',function ($scope,$http)
    {
        console.log("welcome to Nutrition Converter");
        $scope.getNutritionApp = function ()
        {
            var link1='https://api.nutritionix.com/v1_1/search/'+$scope.dish+'?results=0:1&fields=*&appId=a8c48e2c&appKey=b110965551e11068c4918f20fc6d5242';
            console.log(link1);
            $http.get(link1).success(function (data)
            {
                console.log(data);
                $scope.Nutritions = data.hits;
            });
        }


    })
.controller('SpeechController',function($scope)
{
    $scope.getspeechtotext = function ()
    {
        var link2='https://stream.watsonplatform.net/text-to-speech/api/v1/synthesize?username=f61d1286-72ec-4d67-a0a2-16969a62acac&password=4AmGC8jSSy5G&text='+$scope.dish+' ';
        var mySound = new Audio( link2 );
        mySound.play();
    }

});