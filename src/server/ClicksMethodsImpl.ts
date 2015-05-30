/// <reference path="../typings/meteor/meteor.d.ts"/>
/// <reference path="../typings/meteor-typescript-utils/meteor-typescript-utils.d.ts"/>
/// <reference path='../shared/ClicksCollection'/>
/// <reference path='../shared/ClicksMethods'/>

module sampleapp.model {

    import MeteorMethod = meteorts.MeteorMethod;

    class SaveClickImpl implements MeteorMethod.Impl<ISaveClickArgs, void> {
        apply(args: ISaveClickArgs): void {
            ClicksCollection.insert({
                name: args.name,
                time: new Date()
            });
        }
    }
    MeteorMethod.register(SaveClick, new SaveClickImpl());

}
