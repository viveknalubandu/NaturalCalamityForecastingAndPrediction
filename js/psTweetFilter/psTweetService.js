'use strict';
/*Author : Vinay Janardhanan*/
angular.module('psTweetService', []).factory('psTweetService', [
    '$rootScope',
    function ($rootScope) {

        var broadcast = function (msg) {
            $rootScope.$broadcast('psTweetService-received-tweet-event', msg);
        };

        PUBNUB.init({
            subscribe_key: 'sub-c-78806dd4-42a6-11e4-aed8-02ee2ddab7fe'
        }).subscribe({
            channel: 'pubnub-twitter',
            message: broadcast
        });


        return {
        };
    }
]);