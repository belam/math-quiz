define([
    "dojo/_base/declare",
    "dojo/_base/lang",
    "dojo/dom-construct",
    "dijit/layout/BorderContainer",
    "dijit/layout/ContentPane",
    "dijit/_TemplatedMixin",
    "dijit/_WidgetBase",
    "dojo/text!./templates/App.html",
    "quiz/FlashCard"
], function(
    declare, lang, construct, BorderContainer, ContentPane, TemplatedMixin, 
    WidgetBase, template, FlashCard
){
    return declare("quiz.app", [WidgetBase, TemplatedMixin], {
        
        baseClass : "quiz",
        templateString : template,
        intStart : 0,
        intEnd : 12,
        
        postCreate : function(){
            this.inherited(arguments);
            
            this._buildLayout();
            this._buildRange();
            
            this.foo();            
        },
        
        foo : function(){
            this.card = new FlashCard({
                topNumber : 9,
                bottomNumber : 6,
                operator : "+"
            });
            
            this.center.addChild(this.card);
        },
        
        _buildRange : function(){
            var i;
            for (i=this.intStart; i<=this.intEnd; i++){
                construct.create("input", {
                    id : "s"+i,
                    name : "startInt",
                    type : "radio",
                    value : i,
                    checked : i === this.intStart ? "checked" : false
                }, this.rangeFromNode, "last");
                
                construct.create("label", {
                    for : "s"+i,
                    innerHTML : i
                }, this.rangeFromNode, "last");
                
                construct.create("input", {
                    id : "e"+i,
                    name : "endInt",
                    type : "radio",
                    value : i,
                    checked : i === this.intStart ? "checked" : false
                }, this.rangeToNode, "last");
                
                construct.create("label", {
                    for : "e"+i,
                    innerHTML : i
                }, this.rangeToNode, "last");                
            }
        },
        
        _buildLayout : function(){
            this.bc = new BorderContainer({
                style : "height:100%; width:100%;"
            }, this.contentNode);
            
            this.top = new ContentPane({
                region : "top",
                content : "Math Quiz"
            });
            
            this.left = new ContentPane({
                region : "left",
                style : "width:30%;"
            }, this.leftNode);
            
            this.center = new ContentPane({
                region : "center",
                content : "Center",
                style : "width:70%;"
            }, this.centerNode);
            
            this.bc.addChild(this.top);
            this.bc.addChild(this.left);
            this.bc.addChild(this.center);
            
            this.bc.startup();
            this.inherited(arguments);
        }
        
    });
});

