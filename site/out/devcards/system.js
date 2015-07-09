// Compiled by ClojureScript 0.0-3269 {}
goog.provide('devcards.system');
goog.require('cljs.core');
goog.require('devcards.util.edn_renderer');
goog.require('goog.history.EventType');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('goog.History');
goog.require('goog.events');
goog.require('clojure.string');
devcards.system.l = (function devcards$system$l(x){
console.log(x);

return x;
});
devcards.system.devcards_app_element_id = "com-rigsomelight-devcards-main";
devcards.system.devcards_rendered_card_class = "com-rigsomelight-devcards_rendered-card";
devcards.system.prevent__GT_ = (function devcards$system$prevent__GT_(f){
return (function (e){
e.preventDefault();

return f.call(null,e);
});
});
devcards.system.get_element_by_id = (function devcards$system$get_element_by_id(id){
return document.getElementById(id);
});
devcards.system.devcards_app_node = (function devcards$system$devcards_app_node(){
return devcards.system.get_element_by_id.call(null,devcards.system.devcards_app_element_id);
});
devcards.system.path__GT_unique_card_id = (function devcards$system$path__GT_unique_card_id(path){
return clojure.string.join.call(null,".",cljs.core.map.call(null,(function (x){
return [cljs.core.str("["),cljs.core.str(x),cljs.core.str("]")].join('');
}),cljs.core.map.call(null,cljs.core.name,cljs.core.cons.call(null,new cljs.core.Keyword(null,"cardpath","cardpath",-1078069311),path))));
});
devcards.system.unique_card_id__GT_path = (function devcards$system$unique_card_id__GT_path(card_id){
return cljs.core.mapv.call(null,cljs.core.keyword,cljs.core.rest.call(null,clojure.string.split.call(null,cljs.core.subs.call(null,card_id,(1),(cljs.core.count.call(null,card_id) - (1))),/\].\[/)));
});
devcards.system.create_style_element = (function devcards$system$create_style_element(id,style_text){
var el = document.createElement("style");
el.id = id;

el.appendChild(document.createTextNode(style_text));

return el;
});
devcards.system.prepend_child = (function devcards$system$prepend_child(node,node2){
var temp__4423__auto__ = node.firstChild;
if(cljs.core.truth_(temp__4423__auto__)){
var first_child = temp__4423__auto__;
return node.insertBefore(node2,first_child);
} else {
return node.appendChild(node2);
}
});
devcards.system.add_css_if_necessary_BANG_ = (function devcards$system$add_css_if_necessary_BANG_(){
var temp__4423__auto__ = document.getElementsByTagName("head");
if(cljs.core.truth_(temp__4423__auto__)){
var heads = temp__4423__auto__;
var head = (heads[(0)]);
if(cljs.core.truth_(devcards.system.get_element_by_id.call(null,"com-rigsomelight-devcards-css"))){
} else {
head.appendChild(devcards.system.create_style_element.call(null,"com-rigsomelight-devcards-css","body {\n    margin: 0px;\n    background-color: rgb(233,234,237); \n}\n\n#com-rigsomelight-devcards-main {\n    padding-bottom: 10em;\n}\n\n.com-rigsomelight-devcards_rendered-card {\n  position: relative;\n}\n\n.com-rigsomelight-devcards-body {\n    background-color: rgb(233,234,237);\n}\n\n.com-rigsomelight-devcards-markdown pre,\n.com-rigsomelight-devcards-test-line.com-rigsomelight-devcards-test-doc .com-rigsomelight-devcards-markdown pre\n{\n  display: block;\n  padding: 9.5px;\n  margin: 0px 0px 10px;\n  font-size: 13px;\n  line-height: 1.42857143;\n  word-break: normal;\n  word-wrap: normal;\n  overflow-x: scroll;\n  color: #333;\n  background-color: #f5f5f5;\n  border: 1px solid #e1e1e1;  \n  margin-left: -14px;\n  margin-right: -14px;  \n  border-left: 0px;\n  border-right: 0px; \n /*  border-radius: 4px;  */\n}\n\n.com-rigsomelight-devcards-padding-top-border {\n    border-top: 1px solid #f5f5f5;\n    margin-top: 14px;\n    padding-top: 14px;\n}\n\n.com-rigsomelight-devcards-markdown code {\n  padding: 2px 4px;\n  font-size: 90%;\n  color: #c7254e;\n  background-color: #f9f2f4;\n  white-space: nowrap;\n  border-radius: 4px;\n}\n\n.com-rigsomelight-devcards-markdown pre code {\n  padding: 0;\n  font-size: inherit;\n  color: inherit;\n  white-space: pre; \n  background-color: transparent;\n  border-radius: 0;\n}\n\n\n\n.com-rigsomelight-devcards-base,\n.com-rigsomelight-devcards-markdown {\n    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    font-size: 14px;\n    line-height: 1.42857143;\n\n}\n\n.com-rigsomelight-devcards-markdown h1,\n.com-rigsomelight-devcards-markdown h2,\n.com-rigsomelight-devcards-markdown h3,\n.com-rigsomelight-devcards-markdown h4,\n.com-rigsomelight-devcards-markdown h5,\n.com-rigsomelight-devcards-base h1,\n.com-rigsomelight-devcards-base h2,\n.com-rigsomelight-devcards-base h3,\n.com-rigsomelight-devcards-base h4,\n.com-rigsomelight-devcards-base h5 {\n    font-weight: 500;\n}\n\n.com-rigsomelight-devcards-markdown h1:first-child,\n.com-rigsomelight-devcards-markdown h2:first-child,\n.com-rigsomelight-devcards-markdown h3:first-child,\n.com-rigsomelight-devcards-markdown h4:first-child,\n.com-rigsomelight-devcards-markdown h5:first-child {\n    margin-top: 14px;\n}\n                                           \n.com-rigsomelight-devcards-base a {\n    color: #428bca;\n    text-decoration: none;\n}\n\n.com-rigsomelight-devcards-markdown code,\n.com-rigsomelight-devcards-markdown kbd,\n.com-rigsomelight-devcards-markdown pre,\n.com-rigsomelight-devcards-markdown samp {\n  font-family: Menlo,Monaco,Consolas,\"Courier New\",monospace;\n}\n\n.com-rigsomelight-devcards-navbar {\n    background-color: rgb(60,90,153);\n    border-color: rgb(50,80,153);\n    color: #fff;\n    height: 50px;\n}\n\n.com-rigsomelight-devcards-brand {\n    color: #ccc;\n    font-size: 18px;\n    line-height: 50px; \n}\n\n.com-rigsomelight-devcards-container {\n /* margin: auto;\n    width: 80%;*/\n}\n\n.com-rigsomelight-devcards-card-base {\n    background: #fff;\n\n    padding: 8px 15px;     \n    margin-top: 20px;\n}\n\n.com-rigsomelight-devcards-card-base-no-pad {\n    background: #fff;\n    border-top:  1px solid;\n    border-color: #e5e6e9 #dfe0e4 #d0d1d5;\n    border-color: #e5e6e9 #dfe0e4 #d0d1d5;     \n    margin-top: 20px;\n}\n\n.com-rigsomelight-devcards-breadcrumbs {\n    font-size: 16px;\n    line-height: 1.5em;\n}\n\n.com-rigsomelight-devcards-breadcrumb-sep {\n    display: inline-block;\n    padding: 0px 5px;\n    color: #ccc;\n}\n\n.com-rigsomelight-devcards-list-group-item {\n    color: #555;\n    position: relative;\n    display: block;\n    padding: 10px 15px;\n    margin-bottom: -1px;\n    border-bottom: 1px solid #ddd;\n}\n\n.com-rigsomelight-devcards-badge {\n  display: inline-block;\n  min-width: 10px;\n  padding: 3px 7px;\n  font-size: 12px;\n  font-weight: 700;\n  color: #fff;\n  line-height: 1;\n  vertical-align: baseline;\n  white-space: nowrap;\n  text-align: center;\n  background-color: #999;\n  border-radius: 10px;\n}\n\nbutton.com-rigsomelight-devcards-badge {\n    border: none;\n    padding: 3px 19px;\n}\n\n.com-rigsomelight-devcards-panel-heading {\n    padding: 8px 15px;\n    font-size: 16px;\n    line-height: 1.5em;\n    color: #333;\n    background-color: #fcfcfc;\n    background-color: #f5f5f5;\n}\n\n.com-rigsomelight-devcards-panel-heading a {\n    color: #333;\n}\n\n.com-rigsomelight-devcards-devcard-padding {\n    margin-top: 14px;\n    padding-left: 14px;\n    padding-right: 14px;\n    padding-bottom: 14px;\n}\n\n.com-rigsomelight-devcards-test-line {\n  position: relative;\n  display: block;\n  padding: 10px 15px;\n  border: none;\n  border-top: solid 1px #fafafa;  \n}\n\n.com-rigsomelight-devcards-test-line pre {\n  margin: 0px;\n  word-break: normal;\n  word-wrap: normal;\n  overflow-x: scroll;    \n}\n\n.com-rigsomelight-devcards-pass {\n  color: #3c763d;\n  background-color: #dff0d8;\n}\n\n.com-rigsomelight-devcards-fail {\n  color: #a94442;\n  background-color: #f2dede;\n}\n\n.com-rigsomelight-devcards-error {\n  color: #a94442;\n  border-left: 2px solid #a94442;    \n  background-color: #f2dede;\n}\n\n.com-rigsomelight-devcards-test-message {\n    display: block;\n    margin-top: -5px;    \n}\n\n.com-rigsomelight-devcards-pass .com-rigsomelight-devcards-test-message {\n    color: #386739;\n}\n\n.com-rigsomelight-devcards-fail .com-rigsomelight-devcards-test-message {\n    color: #994745;\n}\n\n.com-rigsomelight-devcards-history-control-small-arrow {\n    display: inline-block;\n    height: 0px;\n    width: 0px;\n    border: 8px solid transparent;\n    border-left-width: 9px;\n    border-left-color: #666;\n    margin-right: -10px;\n}\n\n.com-rigsomelight-devcards-history-control-block {\n    display: inline-block;\n    height: 16px;\n    width: 3px;\n    background-color: #666;\n}    \n\n.com-rigsomelight-devcards-history-control-right {\n    display: inline-block;\n    height: 0px;\n    width: 0px;\n    border: 8px solid transparent;\n    border-left-width: 16px;\n    border-left-color: #666;\n    margin-right: -10px;\n}\n\n.com-rigsomelight-devcards-history-control-left {\n    display: inline-block;\n    height: 0px;\n    width: 0px;\n    border: 8px solid transparent;\n    border-right-width: 16px;\n    border-right-color: #666;\n    margin-left: -10px;\n}\n\n.com-rigsomelight-devcards-history-stop {\n    display: inline-block;\n    height: 17px;\n    width: 17px;\n    background-color: #D88282;\n    border-radius: 3px;\n}\n\n.com-rigsomelight-devcards-history-control-bar {\n    background-color: #f5f5f5;\n    padding-top: 5px;\n    padding-bottom: 3px;    \n    margin: 14px 0px;\n    padding-left: 14px;\n    padding-right: 14px;\n    text-align: right;\n    /* position: absolute;\n    top: 0px;\n    right: 0px; */\n}\n\n.com-rigsomelight-devcards-history-control-bar button {\n    background: transparent;\n    border: none;\n    margin: 0px 4px;\n    height: 20px;\n    padding: 1px 28px;\n}\n\n.com-rigsomelight-devcards-history-control-bar + .com-rigsomelight-devcards-padding-top-border {\n    border: none;\n    padding-top: 0px;\n}\n\n.com-rigsomelight-devcards-devcard-padding .com-rigsomelight-devcards-history-control-bar {\n    /* margin-top: -14px; */\n    margin: 14px -14px;\n}\n\n\n@media (min-width: 768px) {\n\n .com-rigsomelight-devcards-container {\n    margin: auto;\n    width: 750px;\n }\n\n button.com-rigsomelight-devcards-badge {\n    border: none;\n    padding: 3px 9px;\n }\n\n .com-rigsomelight-devcards-history-control-bar button {\n     padding: 1px 6px;\n }\n\n .com-rigsomelight-devcards-card-base,\n .com-rigsomelight-devcards-card-base-no-pad {\n     border-radius: 3px;\n     border:  1px solid;\n     border-color: #e5e6e9 #dfe0e4 #d0d1d5;      \n } \n}\n\n\n@media (min-width: 1200px) {\n  .com-rigsomelight-devcards-container {    \n    margin: auto;\n    width: 970px;\n  }\n}\n\n\n\n"));
}

if(cljs.core.truth_(devcards.system.get_element_by_id.call(null,"com-rigsomelight-edn-css"))){
return null;
} else {
return head.appendChild(devcards.system.create_style_element.call(null,"com-rigsomelight-edn-css",".com-rigsomelight-rendered-edn .collection {\n    display: flex;\n    display: -webkit-flex;\n}\n\n.com-rigsomelight-rendered-edn .keyval {\n    display: flex;\n    display: -webkit-flex;    \n    flex-wrap: wrap;\n    -webkit-flex-wrap: wrap;    \n}\n\n.com-rigsomelight-rendered-edn .keyval > .keyword {\n    color: #a94442; \n}\n\n.com-rigsomelight-rendered-edn .keyval > *:first-child {\n    margin: 0px 3px;\n    flex-shrink: 0;\n    -webkit-flex-shrink: 0;\n}\n\n.com-rigsomelight-rendered-edn .keyval > *:last-child {\n    margin: 0px 3px;\n}\n\n.com-rigsomelight-rendered-edn .opener {\n    color: #999;\n    margin: 0px 4px;\n    flex-shrink: 0;\n    -webkit-flex-shrink: 0;    \n}\n\n.com-rigsomelight-rendered-edn .closer {\n    display: flex;\n    display: -webkit-flex;\n    flex-direction: column-reverse;\n    -webkit-flex-direction: column-reverse;\n    margin: 0px 3px;    \n    color: #999;\n}\n\n.com-rigsomelight-rendered-edn .string {\n    color: #428bca;\n}\n\n.com-rigsomelight-rendered-edn .string .opener,\n.com-rigsomelight-rendered-edn .string .closer {\n    display: inline;\n    margin: 0px;\n    color: #428bca;    \n}\n"));
}
} else {
return null;
}
});
devcards.system.render_base_if_necessary_BANG_ = (function devcards$system$render_base_if_necessary_BANG_(){
devcards.system.add_css_if_necessary_BANG_.call(null);

if(cljs.core.truth_(devcards.system.devcards_app_node.call(null))){
return null;
} else {
var el = document.createElement("div");
el.id = devcards.system.devcards_app_element_id;

return devcards.system.prepend_child.call(null,document.body,el);
}
});
if(typeof devcards.system.history !== 'undefined'){
} else {
devcards.system.history = (function (){var h = (new goog.History());
h.setEnabled(true);

return h;
})();
}
devcards.system.path__GT_token = (function devcards$system$path__GT_token(path){
return [cljs.core.str("!/"),cljs.core.str(clojure.string.join.call(null,"/",cljs.core.map.call(null,cljs.core.name,path)))].join('');
});
devcards.system.token__GT_path = (function devcards$system$token__GT_path(token){
return cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.keyword,clojure.string.split.call(null,clojure.string.replace.call(null,token,/!\//,""),/\//)));
});
devcards.system.hash_navigate = (function devcards$system$hash_navigate(path){
return devcards.system.history.setToken(devcards.system.path__GT_token.call(null,path));
});
devcards.system.hash_routing_init = (function devcards$system$hash_routing_init(state_atom){
goog.events.listen(devcards.system.history,goog.history.EventType.NAVIGATE,(function (p1__43819_SHARP_){
return cljs.core.swap_BANG_.call(null,state_atom,devcards.system.set_current_path,devcards.system.token__GT_path.call(null,p1__43819_SHARP_.token));
}));

var temp__4425__auto__ = devcards.system.history.getToken();
if(cljs.core.truth_(temp__4425__auto__)){
var token = temp__4425__auto__;
return cljs.core.swap_BANG_.call(null,state_atom,devcards.system.set_current_path,devcards.system.token__GT_path.call(null,token));
} else {
return null;
}
});
devcards.system.devcard_QMARK_ = (function devcards$system$devcard_QMARK_(d){
var and__16050__auto__ = cljs.core.map_QMARK_.call(null,d);
if(and__16050__auto__){
var and__16050__auto____$1 = new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(d);
if(cljs.core.truth_(and__16050__auto____$1)){
var and__16050__auto____$2 = new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(d);
if(cljs.core.truth_(and__16050__auto____$2)){
var and__16050__auto____$3 = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(d);
if(cljs.core.truth_(and__16050__auto____$3)){
return d;
} else {
return and__16050__auto____$3;
}
} else {
return and__16050__auto____$2;
}
} else {
return and__16050__auto____$1;
}
} else {
return and__16050__auto__;
}
});
devcards.system.path_collision = (function devcards$system$path_collision(state,path){
var temp__4423__auto__ = cljs.core.get.call(null,new cljs.core.Keyword(null,"path-collision-count","path-collision-count",-425032351).cljs$core$IFn$_invoke$arity$1(state),path);
if(cljs.core.truth_(temp__4423__auto__)){
var c = temp__4423__auto__;
return cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.butlast.call(null,cljs.core.vec.call(null,path)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,[cljs.core.str(cljs.core.name.call(null,cljs.core.last.call(null,path))),cljs.core.str("-"),cljs.core.str(c)].join(''))], null)));
} else {
return path;
}
});
devcards.system.register_collision = (function devcards$system$register_collision(state,path){
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path-collision-count","path-collision-count",-425032351),path], null),cljs.core.inc);
});
if(typeof devcards.system.dev_trans !== 'undefined'){
} else {
devcards.system.dev_trans = (function (){var method_table__16957__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__16958__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__16959__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__16960__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__16961__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"devcards.system","dev-trans"),cljs.core.first,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__16961__auto__,method_table__16957__auto__,prefer_table__16958__auto__,method_cache__16959__auto__,cached_hierarchy__16960__auto__));
})();
}
cljs.core._add_method.call(null,devcards.system.dev_trans,new cljs.core.Keyword(null,"default","default",-1987822328),(function (msg,state){
return state;
}));
cljs.core._add_method.call(null,devcards.system.dev_trans,new cljs.core.Keyword(null,"register-card","register-card",-1375971588),(function (p__43820,state){
var vec__43821 = p__43820;
var _ = cljs.core.nth.call(null,vec__43821,(0),null);
var map__43822 = cljs.core.nth.call(null,vec__43821,(1),null);
var map__43822__$1 = ((cljs.core.seq_QMARK_.call(null,map__43822))?cljs.core.apply.call(null,cljs.core.hash_map,map__43822):map__43822);
var path = cljs.core.get.call(null,map__43822__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var options = cljs.core.get.call(null,map__43822__$1,new cljs.core.Keyword(null,"options","options",99638489));
var func = cljs.core.get.call(null,map__43822__$1,new cljs.core.Keyword(null,"func","func",-238706040));
var position = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(state);
var new_path = devcards.system.path_collision.call(null,state,path);
return devcards.system.register_collision.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912)], null),cljs.core.inc),cljs.core.cons.call(null,new cljs.core.Keyword(null,"cards","cards",169174038),new_path),((function (position,new_path,vec__43821,_,map__43822,map__43822__$1,path,options,func){
return (function (dc){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),new_path,new cljs.core.Keyword(null,"func","func",-238706040),func,new cljs.core.Keyword(null,"position","position",-2011731912),position], null);
});})(position,new_path,vec__43821,_,map__43822,map__43822__$1,path,options,func))
),path);
}));
devcards.system.devcard_initial_data = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"current-path","current-path",-113759954),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"position","position",-2011731912),(0),new cljs.core.Keyword(null,"cards","cards",169174038),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"path-collision-count","path-collision-count",-425032351),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"frame","frame",-1711082588),true,new cljs.core.Keyword(null,"heading","heading",-1312171873),true,new cljs.core.Keyword(null,"padding","padding",1660304693),true,new cljs.core.Keyword(null,"hidden","hidden",-312506092),false,new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),false,new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),true,new cljs.core.Keyword(null,"history","history",-247395220),false], null)], null);
if(typeof devcards.system.app_state !== 'undefined'){
} else {
devcards.system.app_state = cljs.core.atom.call(null,devcards.system.devcard_initial_data);
}
devcards.system.valid_path_QMARK_ = (function devcards$system$valid_path_QMARK_(state,path){
var or__16062__auto__ = cljs.core._EQ_.call(null,cljs.core.PersistentVector.EMPTY,path);
if(or__16062__auto__){
return or__16062__auto__;
} else {
return cljs.core.get_in.call(null,new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(state),path);
}
});
devcards.system.enforce_valid_path = (function devcards$system$enforce_valid_path(state,path){
return cljs.core.vec.call(null,(cljs.core.truth_(devcards.system.valid_path_QMARK_.call(null,state,path))?path:cljs.core.PersistentVector.EMPTY));
});
devcards.system.add_to_current_path = (function devcards$system$add_to_current_path(p__43823,path){
var map__43825 = p__43823;
var map__43825__$1 = ((cljs.core.seq_QMARK_.call(null,map__43825))?cljs.core.apply.call(null,cljs.core.hash_map,map__43825):map__43825);
var state = map__43825__$1;
var current_path = cljs.core.get.call(null,map__43825__$1,new cljs.core.Keyword(null,"current-path","current-path",-113759954));
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"current-path","current-path",-113759954),devcards.system.enforce_valid_path.call(null,state,cljs.core.conj.call(null,current_path,cljs.core.keyword.call(null,path))));
});
devcards.system.set_current_path = (function devcards$system$set_current_path(p__43826,path){
var map__43828 = p__43826;
var map__43828__$1 = ((cljs.core.seq_QMARK_.call(null,map__43828))?cljs.core.apply.call(null,cljs.core.hash_map,map__43828):map__43828);
var state = map__43828__$1;
var current_path = cljs.core.get.call(null,map__43828__$1,new cljs.core.Keyword(null,"current-path","current-path",-113759954));
var path__$1 = cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.keyword,path));
if(cljs.core.not_EQ_.call(null,current_path,path__$1)){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"current-path","current-path",-113759954),devcards.system.enforce_valid_path.call(null,state,path__$1));
} else {
return state;
}
});
devcards.system.set_current_path_BANG_ = (function devcards$system$set_current_path_BANG_(state_atom,path){
cljs.core.swap_BANG_.call(null,state_atom,devcards.system.set_current_path,path);

return devcards.system.hash_navigate.call(null,path);
});
devcards.system.current_page = (function devcards$system$current_page(data){
var and__16050__auto__ = new cljs.core.Keyword(null,"current-path","current-path",-113759954).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(and__16050__auto__)){
var and__16050__auto____$1 = new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(and__16050__auto____$1)){
return cljs.core.get_in.call(null,new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"current-path","current-path",-113759954).cljs$core$IFn$_invoke$arity$1(data));
} else {
return and__16050__auto____$1;
}
} else {
return and__16050__auto__;
}
});
devcards.system.display_single_card_QMARK_ = (function devcards$system$display_single_card_QMARK_(state){
return devcards.system.devcard_QMARK_.call(null,devcards.system.current_page.call(null,state));
});
devcards.system.display_dir_paths = (function devcards$system$display_dir_paths(state){
var cur = devcards.system.current_page.call(null,state);
return cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.comp.call(null,devcards.system.devcard_QMARK_,cljs.core.second)),cur);
});
devcards.system.display_cards = (function devcards$system$display_cards(state){
var cur = devcards.system.current_page.call(null,state);
return cljs.core.filter.call(null,cljs.core.comp.call(null,((function (cur){
return (function (p1__43829_SHARP_){
var and__16050__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"delete-card","delete-card",1559096851).cljs$core$IFn$_invoke$arity$1(p1__43829_SHARP_));
if(and__16050__auto__){
return devcards.system.devcard_QMARK_.call(null,p1__43829_SHARP_);
} else {
return and__16050__auto__;
}
});})(cur))
,cljs.core.second),cur);
});
devcards.system._STAR_devcard_data_STAR_ = null;
devcards.system.card_template = (function devcards$system$card_template(state_atom,p__43830){
var map__43833 = p__43830;
var map__43833__$1 = ((cljs.core.seq_QMARK_.call(null,map__43833))?cljs.core.apply.call(null,cljs.core.hash_map,map__43833):map__43833);
var card = map__43833__$1;
var path = cljs.core.get.call(null,map__43833__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var options = cljs.core.get.call(null,map__43833__$1,new cljs.core.Keyword(null,"options","options",99638489));
var func = cljs.core.get.call(null,map__43833__$1,new cljs.core.Keyword(null,"func","func",-238706040));
return React.createElement("div",{"key": devcards.system.path__GT_unique_card_id.call(null,path)},(function (){var _STAR_devcard_data_STAR_43834 = devcards.system._STAR_devcard_data_STAR_;
devcards.system._STAR_devcard_data_STAR_ = card;

return sablono.interpreter.interpret.call(null,(function (){try{return func.call(null);
}finally {devcards.system._STAR_devcard_data_STAR_ = _STAR_devcard_data_STAR_43834;
}})());
})());
});
devcards.system.render_cards = (function devcards$system$render_cards(cards,state_atom){
return cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.partial.call(null,devcards.system.card_template,state_atom),cljs.core.second),cljs.core.sort_by.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.second),cards));
});
devcards.system.main_cards_template = (function devcards$system$main_cards_template(state_atom){
var data = cljs.core.deref.call(null,state_atom);
if(cljs.core.truth_(devcards.system.display_single_card_QMARK_.call(null,data))){
return devcards.system.card_template.call(null,state_atom,devcards.system.current_page.call(null,data));
} else {
return devcards.system.render_cards.call(null,devcards.system.display_cards.call(null,data),state_atom);
}
});
devcards.system.breadcrumbs = (function devcards$system$breadcrumbs(p__43835){
var map__43837 = p__43835;
var map__43837__$1 = ((cljs.core.seq_QMARK_.call(null,map__43837))?cljs.core.apply.call(null,cljs.core.hash_map,map__43837):map__43837);
var state = map__43837__$1;
var current_path = cljs.core.get.call(null,map__43837__$1,new cljs.core.Keyword(null,"current-path","current-path",-113759954));
var cpath = cljs.core.map.call(null,cljs.core.name,cljs.core.cons.call(null,new cljs.core.Keyword(null,"home","home",-74557309),current_path));
var crumbs = cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.last,cljs.core.rest),cljs.core.rest.call(null,cljs.core.map_indexed.call(null,((function (cpath,map__43837,map__43837__$1,state,current_path){
return (function (i,v){
return cljs.core.subvec.call(null,v,(0),i);
});})(cpath,map__43837,map__43837__$1,state,current_path))
,cljs.core.take.call(null,(cljs.core.count.call(null,cpath) + (1)),cljs.core.repeat.call(null,cljs.core.vec.call(null,cpath))))));
return crumbs;
});
devcards.system.breadcrumbs_templ = (function devcards$system$breadcrumbs_templ(crumbs,state_atom){
var attrs43843 = cljs.core.interpose.call(null,React.createElement("span",{"className": "com-rigsomelight-devcards-breadcrumb-sep"},"/"),cljs.core.map.call(null,(function (p__43846){
var vec__43847 = p__43846;
var n = cljs.core.nth.call(null,vec__43847,(0),null);
var path = cljs.core.nth.call(null,vec__43847,(1),null);
return React.createElement("span",{"style": {"display": "inline-block"}},React.createElement("a",{"href": "#", "onClick": devcards.system.prevent__GT_.call(null,((function (vec__43847,n,path){
return (function (){
return devcards.system.set_current_path_BANG_.call(null,state_atom,path);
});})(vec__43847,n,path))
), "className": "com-rigsomelight-devcards_set-current-path"},sablono.interpreter.interpret.call(null,n)));
}),crumbs));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs43843))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-card-base","com-rigsomelight-devcards-breadcrumbs"], null)], null),attrs43843)):{"className": "com-rigsomelight-devcards-card-base com-rigsomelight-devcards-breadcrumbs"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs43843))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs43843)], null))));
});
devcards.system.navigate_to_path = (function devcards$system$navigate_to_path(key,state_atom){
return cljs.core.swap_BANG_.call(null,state_atom,(function (s){
var new_s = devcards.system.add_to_current_path.call(null,s,key);
devcards.system.hash_navigate.call(null,new cljs.core.Keyword(null,"current-path","current-path",-113759954).cljs$core$IFn$_invoke$arity$1(new_s));

return new_s;
}));
});
devcards.system.dir_links = (function devcards$system$dir_links(dirs,state_atom){
if(cljs.core.empty_QMARK_.call(null,dirs)){
return null;
} else {
var attrs43853 = cljs.core.map.call(null,(function (p__43854){
var vec__43855 = p__43854;
var key = cljs.core.nth.call(null,vec__43855,(0),null);
var child_tree = cljs.core.nth.call(null,vec__43855,(1),null);
return React.createElement("a",{"href": "#", "onClick": devcards.system.prevent__GT_.call(null,((function (vec__43855,key,child_tree){
return (function (e){
return devcards.system.navigate_to_path.call(null,key,state_atom);
});})(vec__43855,key,child_tree))
), "className": "com-rigsomelight-devcards-list-group-item"},React.createElement("span",{"style": {"float": "right"}, "className": "com-rigsomelight-devcards-badge"},sablono.interpreter.interpret.call(null,cljs.core.count.call(null,child_tree))),React.createElement("span",null," ",sablono.interpreter.interpret.call(null,cljs.core.name.call(null,key))));
}),cljs.core.sort_by.call(null,(function (p__43856){
var vec__43857 = p__43856;
var _ = cljs.core.nth.call(null,vec__43857,(0),null);
var child_tree = cljs.core.nth.call(null,vec__43857,(1),null);
return (- new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.first.call(null,child_tree))));
}),dirs));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs43853))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-card-base-no-pad"], null)], null),attrs43853)):{"className": "com-rigsomelight-devcards-card-base-no-pad"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs43853))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs43853)], null))));
}
});
devcards.system.main_template = (function devcards$system$main_template(state_atom){
var data = cljs.core.deref.call(null,state_atom);
return React.createElement("div",{"className": "com-rigsomelight-devcards-base"},React.createElement("div",{"className": "com-rigsomelight-devcards-navbar"},React.createElement("div",{"className": "com-rigsomelight-devcards-container"},React.createElement("span",{"className": "com-rigsomelight-devcards-brand"},"(:devcards ClojureScript)"))),(function (){var attrs43865 = (function (){var temp__4425__auto__ = devcards.system.breadcrumbs.call(null,data);
if(cljs.core.truth_(temp__4425__auto__)){
var crumbs = temp__4425__auto__;
return devcards.system.breadcrumbs_templ.call(null,crumbs,state_atom);
} else {
return null;
}
})();
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs43865))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-container"], null)], null),attrs43865)):{"className": "com-rigsomelight-devcards-container"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs43865))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(devcards.system.display_single_card_QMARK_.call(null,data))?null:(function (){var dir_paths = devcards.system.display_dir_paths.call(null,data);
return sablono.interpreter.interpret.call(null,devcards.system.dir_links.call(null,dir_paths,state_atom));
})()),(function (){var attrs43866 = devcards.system.main_cards_template.call(null,state_atom);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs43866))?sablono.interpreter.attributes.call(null,attrs43866):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs43866))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs43866)], null))));
})()], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs43865),(cljs.core.truth_(devcards.system.display_single_card_QMARK_.call(null,data))?null:(function (){var dir_paths = devcards.system.display_dir_paths.call(null,data);
return sablono.interpreter.interpret.call(null,devcards.system.dir_links.call(null,dir_paths,state_atom));
})()),(function (){var attrs43867 = devcards.system.main_cards_template.call(null,state_atom);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs43867))?sablono.interpreter.attributes.call(null,attrs43867):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs43867))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs43867)], null))));
})()], null))));
})());
});
devcards.system.renderer = (function devcards$system$renderer(state_atom){
return React.render((function (){var attrs43869 = devcards.system.main_template.call(null,state_atom);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs43869))?sablono.interpreter.attributes.call(null,attrs43869):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs43869))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs43869)], null))));
})(),devcards.system.devcards_app_node.call(null));
});
devcards.system.merge_in_new_data = (function devcards$system$merge_in_new_data(state,new_state){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"path-collision-count","path-collision-count",-425032351),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(new_state),new cljs.core.Keyword(null,"cards","cards",169174038),cljs.core.merge.call(null,new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(new_state)));
});
/**
 * Run sequential messages off the books outside of the atom and
 * then difference the result so we can only display the new cards
 * that have arrived. This prevents multiple renders and allows us
 * to delete cards live.
 */
devcards.system.off_the_books = (function devcards$system$off_the_books(channel,start_data,first_message){
var initial_data = cljs.core.dissoc.call(null,cljs.core.assoc.call(null,start_data,new cljs.core.Keyword(null,"path-collision-count","path-collision-count",-425032351),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"cards","cards",169174038));
var c__19819__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19819__auto__,initial_data){
return (function (){
var f__19820__auto__ = (function (){var switch__19757__auto__ = ((function (c__19819__auto__,initial_data){
return (function (state_43988){
var state_val_43989 = (state_43988[(1)]);
if((state_val_43989 === (7))){
var inst_43984 = (state_43988[(2)]);
var state_43988__$1 = state_43988;
var statearr_43990_44020 = state_43988__$1;
(statearr_43990_44020[(2)] = inst_43984);

(statearr_43990_44020[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43989 === (1))){
var inst_43945 = devcards.system.dev_trans.call(null,first_message,initial_data);
var inst_43946 = inst_43945;
var state_43988__$1 = (function (){var statearr_43991 = state_43988;
(statearr_43991[(7)] = inst_43946);

return statearr_43991;
})();
var statearr_43992_44021 = state_43988__$1;
(statearr_43992_44021[(2)] = null);

(statearr_43992_44021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43989 === (4))){
var inst_43953 = (state_43988[(8)]);
var inst_43953__$1 = (state_43988[(2)]);
var state_43988__$1 = (function (){var statearr_43993 = state_43988;
(statearr_43993[(8)] = inst_43953__$1);

return statearr_43993;
})();
if(cljs.core.truth_(inst_43953__$1)){
var statearr_43994_44022 = state_43988__$1;
(statearr_43994_44022[(1)] = (5));

} else {
var statearr_43995_44023 = state_43988__$1;
(statearr_43995_44023[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43989 === (15))){
var state_43988__$1 = state_43988;
var statearr_43996_44024 = state_43988__$1;
(statearr_43996_44024[(2)] = null);

(statearr_43996_44024[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43989 === (13))){
var inst_43979 = (state_43988[(2)]);
var state_43988__$1 = state_43988;
var statearr_43997_44025 = state_43988__$1;
(statearr_43997_44025[(2)] = inst_43979);

(statearr_43997_44025[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43989 === (6))){
var state_43988__$1 = state_43988;
var statearr_43998_44026 = state_43988__$1;
(statearr_43998_44026[(2)] = null);

(statearr_43998_44026[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43989 === (3))){
var inst_43986 = (state_43988[(2)]);
var state_43988__$1 = state_43988;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43988__$1,inst_43986);
} else {
if((state_val_43989 === (12))){
var state_43988__$1 = state_43988;
var statearr_43999_44027 = state_43988__$1;
(statearr_43999_44027[(1)] = (14));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43989 === (2))){
var inst_43948 = (state_43988[(9)]);
var inst_43948__$1 = cljs.core.async.timeout.call(null,(500));
var inst_43949 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43950 = [channel,inst_43948__$1];
var inst_43951 = (new cljs.core.PersistentVector(null,2,(5),inst_43949,inst_43950,null));
var state_43988__$1 = (function (){var statearr_44001 = state_43988;
(statearr_44001[(9)] = inst_43948__$1);

return statearr_44001;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_43988__$1,(4),inst_43951);
} else {
if((state_val_43989 === (11))){
var inst_43946 = (state_43988[(7)]);
var inst_43967 = devcards.system.merge_in_new_data.call(null,start_data,inst_43946);
var state_43988__$1 = state_43988;
var statearr_44002_44028 = state_43988__$1;
(statearr_44002_44028[(2)] = inst_43967);

(statearr_44002_44028[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43989 === (9))){
var inst_43958 = (state_43988[(10)]);
var inst_43965 = cljs.core._EQ_.call(null,inst_43958,new cljs.core.Keyword(null,"jsreload","jsreload",331693051));
var state_43988__$1 = state_43988;
if(inst_43965){
var statearr_44003_44029 = state_43988__$1;
(statearr_44003_44029[(1)] = (11));

} else {
var statearr_44004_44030 = state_43988__$1;
(statearr_44004_44030[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43989 === (5))){
var inst_43948 = (state_43988[(9)]);
var inst_43953 = (state_43988[(8)]);
var inst_43957 = cljs.core.nth.call(null,inst_43953,(0),null);
var inst_43958 = cljs.core.nth.call(null,inst_43957,(0),null);
var inst_43959 = cljs.core.nth.call(null,inst_43957,(1),null);
var inst_43960 = cljs.core.nth.call(null,inst_43953,(1),null);
var inst_43961 = cljs.core._EQ_.call(null,inst_43960,inst_43948);
var state_43988__$1 = (function (){var statearr_44005 = state_43988;
(statearr_44005[(10)] = inst_43958);

(statearr_44005[(11)] = inst_43959);

return statearr_44005;
})();
if(inst_43961){
var statearr_44006_44031 = state_43988__$1;
(statearr_44006_44031[(1)] = (8));

} else {
var statearr_44007_44032 = state_43988__$1;
(statearr_44007_44032[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43989 === (14))){
var inst_43958 = (state_43988[(10)]);
var inst_43959 = (state_43988[(11)]);
var inst_43946 = (state_43988[(7)]);
var inst_43970 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43971 = [inst_43958,inst_43959];
var inst_43972 = (new cljs.core.PersistentVector(null,2,(5),inst_43970,inst_43971,null));
var inst_43973 = devcards.system.dev_trans.call(null,inst_43972,inst_43946);
var inst_43946__$1 = inst_43973;
var state_43988__$1 = (function (){var statearr_44008 = state_43988;
(statearr_44008[(7)] = inst_43946__$1);

return statearr_44008;
})();
var statearr_44009_44033 = state_43988__$1;
(statearr_44009_44033[(2)] = null);

(statearr_44009_44033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43989 === (16))){
var inst_43977 = (state_43988[(2)]);
var state_43988__$1 = state_43988;
var statearr_44010_44034 = state_43988__$1;
(statearr_44010_44034[(2)] = inst_43977);

(statearr_44010_44034[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43989 === (10))){
var inst_43981 = (state_43988[(2)]);
var state_43988__$1 = state_43988;
var statearr_44011_44035 = state_43988__$1;
(statearr_44011_44035[(2)] = inst_43981);

(statearr_44011_44035[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43989 === (8))){
var inst_43946 = (state_43988[(7)]);
var inst_43963 = devcards.system.merge_in_new_data.call(null,start_data,inst_43946);
var state_43988__$1 = state_43988;
var statearr_44012_44036 = state_43988__$1;
(statearr_44012_44036[(2)] = inst_43963);

(statearr_44012_44036[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19819__auto__,initial_data))
;
return ((function (switch__19757__auto__,c__19819__auto__,initial_data){
return (function() {
var devcards$system$off_the_books_$_state_machine__19758__auto__ = null;
var devcards$system$off_the_books_$_state_machine__19758__auto____0 = (function (){
var statearr_44016 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44016[(0)] = devcards$system$off_the_books_$_state_machine__19758__auto__);

(statearr_44016[(1)] = (1));

return statearr_44016;
});
var devcards$system$off_the_books_$_state_machine__19758__auto____1 = (function (state_43988){
while(true){
var ret_value__19759__auto__ = (function (){try{while(true){
var result__19760__auto__ = switch__19757__auto__.call(null,state_43988);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19760__auto__;
}
break;
}
}catch (e44017){if((e44017 instanceof Object)){
var ex__19761__auto__ = e44017;
var statearr_44018_44037 = state_43988;
(statearr_44018_44037[(5)] = ex__19761__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43988);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44017;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44038 = state_43988;
state_43988 = G__44038;
continue;
} else {
return ret_value__19759__auto__;
}
break;
}
});
devcards$system$off_the_books_$_state_machine__19758__auto__ = function(state_43988){
switch(arguments.length){
case 0:
return devcards$system$off_the_books_$_state_machine__19758__auto____0.call(this);
case 1:
return devcards$system$off_the_books_$_state_machine__19758__auto____1.call(this,state_43988);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$system$off_the_books_$_state_machine__19758__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$system$off_the_books_$_state_machine__19758__auto____0;
devcards$system$off_the_books_$_state_machine__19758__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$system$off_the_books_$_state_machine__19758__auto____1;
return devcards$system$off_the_books_$_state_machine__19758__auto__;
})()
;})(switch__19757__auto__,c__19819__auto__,initial_data))
})();
var state__19821__auto__ = (function (){var statearr_44019 = f__19820__auto__.call(null);
(statearr_44019[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19819__auto__);

return statearr_44019;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19821__auto__);
});})(c__19819__auto__,initial_data))
);

return c__19819__auto__;
});
devcards.system.start_ui = (function devcards$system$start_ui(channel){
if(typeof devcards.system.devcards_ui_setup !== 'undefined'){
return null;
} else {
devcards.system.devcards_ui_setup = (function (){
React.initializeTouchEvents(true);

devcards.system.render_base_if_necessary_BANG_.call(null);

var c__19819__auto___44133 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19819__auto___44133){
return (function (){
var f__19820__auto__ = (function (){var switch__19757__auto__ = ((function (c__19819__auto___44133){
return (function (state_44115){
var state_val_44116 = (state_44115[(1)]);
if((state_val_44116 === (1))){
var inst_44086 = cljs.core.deref.call(null,devcards.system.app_state);
var inst_44087 = cljs.core.PersistentVector.EMPTY;
var inst_44088 = devcards.system.off_the_books.call(null,channel,inst_44086,inst_44087);
var state_44115__$1 = state_44115;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44115__$1,(2),inst_44088);
} else {
if((state_val_44116 === (2))){
var inst_44090 = (state_44115[(2)]);
var inst_44091 = cljs.core.reset_BANG_.call(null,devcards.system.app_state,inst_44090);
var inst_44092 = (function (){return ((function (inst_44090,inst_44091,state_val_44116,c__19819__auto___44133){
return (function (){
return devcards.system.renderer.call(null,devcards.system.app_state);
});
;})(inst_44090,inst_44091,state_val_44116,c__19819__auto___44133))
})();
var inst_44093 = setTimeout(inst_44092,(0));
var inst_44094 = (function (){return ((function (inst_44090,inst_44091,inst_44092,inst_44093,state_val_44116,c__19819__auto___44133){
return (function (){
return cljs.core.add_watch.call(null,devcards.system.app_state,new cljs.core.Keyword(null,"devcards-render","devcards-render",592502782),((function (inst_44090,inst_44091,inst_44092,inst_44093,state_val_44116,c__19819__auto___44133){
return (function (_,___$1,___$2,___$3){
return devcards.system.renderer.call(null,devcards.system.app_state);
});})(inst_44090,inst_44091,inst_44092,inst_44093,state_val_44116,c__19819__auto___44133))
);
});
;})(inst_44090,inst_44091,inst_44092,inst_44093,state_val_44116,c__19819__auto___44133))
})();
var inst_44095 = setTimeout(inst_44094,(0));
var inst_44096 = (function (){return ((function (inst_44090,inst_44091,inst_44092,inst_44093,inst_44094,inst_44095,state_val_44116,c__19819__auto___44133){
return (function (){
return devcards.system.hash_routing_init.call(null,devcards.system.app_state);
});
;})(inst_44090,inst_44091,inst_44092,inst_44093,inst_44094,inst_44095,state_val_44116,c__19819__auto___44133))
})();
var inst_44097 = setTimeout(inst_44096,(0));
var state_44115__$1 = (function (){var statearr_44117 = state_44115;
(statearr_44117[(7)] = inst_44091);

(statearr_44117[(8)] = inst_44093);

(statearr_44117[(9)] = inst_44097);

(statearr_44117[(10)] = inst_44095);

return statearr_44117;
})();
var statearr_44118_44134 = state_44115__$1;
(statearr_44118_44134[(2)] = null);

(statearr_44118_44134[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44116 === (3))){
var state_44115__$1 = state_44115;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44115__$1,(5),channel);
} else {
if((state_val_44116 === (4))){
var inst_44113 = (state_44115[(2)]);
var state_44115__$1 = state_44115;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44115__$1,inst_44113);
} else {
if((state_val_44116 === (5))){
var inst_44100 = (state_44115[(11)]);
var inst_44100__$1 = (state_44115[(2)]);
var state_44115__$1 = (function (){var statearr_44119 = state_44115;
(statearr_44119[(11)] = inst_44100__$1);

return statearr_44119;
})();
if(cljs.core.truth_(inst_44100__$1)){
var statearr_44120_44135 = state_44115__$1;
(statearr_44120_44135[(1)] = (6));

} else {
var statearr_44121_44136 = state_44115__$1;
(statearr_44121_44136[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44116 === (6))){
var inst_44100 = (state_44115[(11)]);
var inst_44102 = cljs.core.deref.call(null,devcards.system.app_state);
var inst_44103 = devcards.system.off_the_books.call(null,channel,inst_44102,inst_44100);
var state_44115__$1 = state_44115;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44115__$1,(9),inst_44103);
} else {
if((state_val_44116 === (7))){
var state_44115__$1 = state_44115;
var statearr_44122_44137 = state_44115__$1;
(statearr_44122_44137[(2)] = null);

(statearr_44122_44137[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44116 === (8))){
var inst_44111 = (state_44115[(2)]);
var state_44115__$1 = state_44115;
var statearr_44123_44138 = state_44115__$1;
(statearr_44123_44138[(2)] = inst_44111);

(statearr_44123_44138[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44116 === (9))){
var inst_44100 = (state_44115[(11)]);
var inst_44105 = (state_44115[(2)]);
var inst_44106 = (function (){var temp__4425__auto__ = inst_44100;
var v = inst_44100;
var new_state = inst_44105;
return ((function (temp__4425__auto__,v,new_state,inst_44100,inst_44105,state_val_44116,c__19819__auto___44133){
return (function (){
return cljs.core.reset_BANG_.call(null,devcards.system.app_state,new_state);
});
;})(temp__4425__auto__,v,new_state,inst_44100,inst_44105,state_val_44116,c__19819__auto___44133))
})();
var inst_44107 = setTimeout(inst_44106,(0));
var state_44115__$1 = (function (){var statearr_44124 = state_44115;
(statearr_44124[(12)] = inst_44107);

return statearr_44124;
})();
var statearr_44125_44139 = state_44115__$1;
(statearr_44125_44139[(2)] = null);

(statearr_44125_44139[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__19819__auto___44133))
;
return ((function (switch__19757__auto__,c__19819__auto___44133){
return (function() {
var devcards$system$start_ui_$_state_machine__19758__auto__ = null;
var devcards$system$start_ui_$_state_machine__19758__auto____0 = (function (){
var statearr_44129 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44129[(0)] = devcards$system$start_ui_$_state_machine__19758__auto__);

(statearr_44129[(1)] = (1));

return statearr_44129;
});
var devcards$system$start_ui_$_state_machine__19758__auto____1 = (function (state_44115){
while(true){
var ret_value__19759__auto__ = (function (){try{while(true){
var result__19760__auto__ = switch__19757__auto__.call(null,state_44115);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19760__auto__;
}
break;
}
}catch (e44130){if((e44130 instanceof Object)){
var ex__19761__auto__ = e44130;
var statearr_44131_44140 = state_44115;
(statearr_44131_44140[(5)] = ex__19761__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44115);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44130;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44141 = state_44115;
state_44115 = G__44141;
continue;
} else {
return ret_value__19759__auto__;
}
break;
}
});
devcards$system$start_ui_$_state_machine__19758__auto__ = function(state_44115){
switch(arguments.length){
case 0:
return devcards$system$start_ui_$_state_machine__19758__auto____0.call(this);
case 1:
return devcards$system$start_ui_$_state_machine__19758__auto____1.call(this,state_44115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$system$start_ui_$_state_machine__19758__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$system$start_ui_$_state_machine__19758__auto____0;
devcards$system$start_ui_$_state_machine__19758__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$system$start_ui_$_state_machine__19758__auto____1;
return devcards$system$start_ui_$_state_machine__19758__auto__;
})()
;})(switch__19757__auto__,c__19819__auto___44133))
})();
var state__19821__auto__ = (function (){var statearr_44132 = f__19820__auto__.call(null);
(statearr_44132[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19819__auto___44133);

return statearr_44132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19821__auto__);
});})(c__19819__auto___44133))
);


return true;
})()
;
}
});