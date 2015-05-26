define([
    "dojo/_base/declare",
    "dojo/_base/lang",
    "dijit/_TemplatedMixin",
    "dijit/_WidgetBase",
    "dojo/text!./templates/App.html"
], function(
    declare, lang, TemplatedMixin, WidgetBase, template
){
    return declare("quiz.app", [WidgetBase, TemplatedMixin], {
        
        baseClass : "quiz",
        templateString : template
        
    });
});

