/// <reference path='../typings/meteor-typescript-utils/meteor-typescript-utils.d.ts'/>
/// <reference path='../typings/meteor/meteor.d.ts'/>

/// <reference path='./ClicksCollection'/>
/// <reference path='./routes'/>

module sampleapp.controller {

    import RouteControllerBase = meteorts.RouteControllerBase;

    export class SingleClickController extends RouteControllerBase<router.ISingleClickRouteParams> {
        public template: string = "SingleClickTemplate";

        public waitOn(): any {
            return [Meteor.subscribe(model.AllClicksPublication)];
        }

        public data(): any {
            return {
                click: ClicksCollection.findOne({_id: this.params.clickId})
            };
        }
    }
}

declare var SingleClickController: RouteController;
SingleClickController = RouteController.extend(new sampleapp.controller.SingleClickController());
