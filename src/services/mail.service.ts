import { Injectable } from '@angular/core';


@Injectable()
export class MailService {
    private serviceProxy: any;
    constructor() {
        var cordova: Cordova = window.cordova;
      
            if (cordova) {
 
                this.serviceProxy = cordova.plugins.myService;
                this.serviceProxy.startService(function (r) { this.handleSuccess(r) },
                    function (e) { this.handleError(e) });
            } else {
                console.log("ERROR:Cordova not loaded")
            }
    }

    validateUser(username: string, password: string) {
        console.log("Validating user", username);
        var config = {
            "username": username
        };

       if( this.serviceProxy.validateUser)       
        this.serviceProxy.validateUser(config,
            function (r) { alert("success") },
            function (e) { alert("failed") });
            else{
                alert("Not available")
            }
    }

    handleSuccess(result) {
        alert("success");
    }
    handleError(error) {
       alert("error")
    }
}