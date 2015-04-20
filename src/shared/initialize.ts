/// <reference path='./ClicksCollection'/>

module sampleapp.model {
    ClicksCollection = new Mongo.Collection<IClickEntry>(ClicksCollectionName);
}
