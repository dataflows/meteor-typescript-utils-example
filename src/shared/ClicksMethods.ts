/// <reference path="../typings/meteor/meteor.d.ts"/>
/// <reference path="../typings/meteor-typescript-utils/meteor-typescript-utils.d.ts"/>

module sampleapp.model {

    import MeteorMethod = meteorts.MeteorMethod;

    export interface ISaveClickArgs {
        name: string;
    }
    export var SaveClick = new MeteorMethod<ISaveClickArgs, void>("SaveClick");

}
