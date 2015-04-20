/// <reference path='../shared/ClicksCollection'/>

module sampleapp.model {
    Meteor.publish(AllClicksPublication, (): Mongo.Cursor<IClickEntry> => {
        return ClicksCollection.find();
    });
}
