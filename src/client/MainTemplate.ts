/// <reference path="../typings/meteor/meteor.d.ts"/>
/// <reference path="../typings/meteor-typescript-utils/meteor-typescript-utils.d.ts"/>
/// <reference path="../typings/meteor/ironrouter.d.ts"/>
/// <reference path='../shared/ClicksMethods'/>
/// <reference path='../shared/ClicksCollection'/>

module sampleapp {

    import MeteorTemplate = meteorts.MeteorTemplate;

    import SaveClick = sampleapp.model.SaveClick;
    import IClickEntry = sampleapp.model.IClickEntry;

    export class MainTemplateData {
        clicks: IClickEntry[];
    }

    class MainTemplateContext extends MainTemplateData {
        @MeteorTemplate.event("click #heybutton")
        buttonClick(event: Meteor.Event, template: Blaze.Template): void {
            let name = template.$("#name").val();
            console.log(name);
            SaveClick.call({ name: name });
        }

        @MeteorTemplate.helper
        clicksCount(): number {
            let count = _.size(this.clicks);
            return count;
        }
    }

    class MainTemplate extends MeteorTemplate.Base<MainTemplateData> {
        constructor() {
            super("MainTemplate", new MainTemplateContext());
        }

        rendered(): void {
            console.log("rendered");
        }
    }

    MeteorTemplate.register(new MainTemplate());
}
