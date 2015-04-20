module sampleapp.model {

    export interface IClickEntry {
        _id?: string;
        name: string;
        time: string;
    }

    export var ClicksCollectionName = "clicks";
    export var AllClicksPublication = "clicks-all";

}

/* tslint:disable:no-unused-variable */
declare var ClicksCollection: Mongo.Collection<sampleapp.model.IClickEntry>;
/* tslint:enable:no-unused-variable */
