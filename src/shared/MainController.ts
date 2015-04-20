/// <reference path='../typings/meteor-typescript-utils/meteor-typescript-utils.d.ts'/>
/// <reference path='../typings/meteor/meteor.d.ts'/>

/// <reference path='./ClicksCollection'/>

module sampleapp.controller {

    import RouteControllerBase = meteorts.RouteControllerBase;

    export class MainController extends RouteControllerBase<void> {
        public template: string = "MainTemplate";

        public waitOn(): any {
            return [Meteor.subscribe(model.AllClicksPublication)];
        }

        public data(): any {
            return {
                clicks: ClicksCollection.find({}, {sort: { time: -1 }}).fetch()
            };
        }
    }
}

declare var MainController: RouteController;
MainController = RouteController.extend(new sampleapp.controller.MainController());
