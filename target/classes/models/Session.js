var Session=Backbone.Model.extend({initialize:function(){_.extend(this,Backbone.Events);
_.bindAll(this,"process_session","templates_callback","prefetch_md_models");
if(!(localStorage.getItem("expiration")>(new Date()).getTime())){localStorage.clear()
}var a=(new Date()).getTime()+Settings.LOCALSTORAGE_EXPIRATION;
localStorage.setItem("expiration",a);
$.get("web/../js/templates/editor-templates.htm",this.templates_callback(this));
return false
},templates_callback:function(a){return function(b){$("body").append(b);
a.fetch({success:a.process_session})
}
},error:function(){$(this.form.el).dialog("open")
},process_session:function(b,a){if(localStorage&&localStorage.getItem("session")===null){localStorage.setItem("session",JSON.stringify(a))
}this.model_navigation=_.template($("#template-models").html())({mdModelInfos:a});
this.mdModels={};
this.mdModelInfos=a;
_.delay(this.prefetch_md_models,200);
$(Application.toolbar.el).prependTo($("#header"));
$("#header").show();
Application.ui.unblock();
Application.tabs.render();
Application.tabs.add(new Workspace());
Application.events.trigger("session:new",{session:this})
},prefetch_md_models:function(){if(!this.mdModels){Log.log(JSON.stringify({Message:"categories not initialized",Session:JSON.stringify(this)}));
return
}for(var b=0;
b<this.mdModelInfos.length;
b++){var d=this.mdModelInfos[b];
var a=d.domainId+"/"+d.modelId;
var c=a;
if(localStorage&&localStorage.getItem("md_model."+a)!==null){this.mdModels[a]=new MdModel(JSON.parse(localStorage.getItem("md_model."+a)))
}else{this.mdModels[a]=new MdModel({path:c,key:a});
this.mdModels[a].fetch()
}}if(Backbone.history){Backbone.history.start()
}},url:function(){var a=(navigator.language||navigator.browserLanguage||navigator.systemLanguage||navigator.userLanguage).substring(0,2).toLowerCase();
return encodeURI(Settings.REST_URL+"/discover/"+a)
}});