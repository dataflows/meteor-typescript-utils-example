/// <reference path="../typings/meteor/meteor.d.ts"/>
/// <reference path="../typings/meteor/ironrouter.d.ts"/>

module sampleapp.router {
    Router.configure({
        layoutTemplate: "Layout"
    });

    Router.route("Main", { name: "/", controller: "MainController" });

    export interface ISingleClickRouteParams { clickId: string; }
    Router.route("SingleClick", { path: "/click/:clickId", controller: "SingleClickController" });
}
