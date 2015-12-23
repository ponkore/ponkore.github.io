goog.provide('hello');
goog.require('cljs.core');
hello.myalert = (function myalert(msg){
return window.alert([cljs.core.str("Hello, "),cljs.core.str(msg)].join(''));
});
goog.exportSymbol('hello.myalert', hello.myalert);
