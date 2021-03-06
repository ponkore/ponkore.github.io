goog.provide('cljs.core');
goog.require('goog.array');
goog.require('goog.object');
goog.require('goog.string.format');
goog.require('goog.string.StringBuffer');
goog.require('goog.string');
cljs.core._STAR_unchecked_if_STAR_ = false;
/**
* Each runtime environment provides a diffenent way to print output.
* Whatever function *print-fn* is bound to will be passed any
* Strings which should be printed.
*/
cljs.core._STAR_print_fn_STAR_ = (function _STAR_print_fn_STAR_(_){
throw (new Error("No *print-fn* fn set for evaluation environment"));
});
/**
* bound in a repl thread to the most recent value printed
*/
cljs.core._STAR_1 = undefined;
/**
* bound in a repl thread to the second most recent value printed
*/
cljs.core._STAR_2 = undefined;
/**
* bound in a repl thread to the third most recent value printed
*/
cljs.core._STAR_3 = undefined;
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){
return (x != null && x !== false);
});
/**
* Tests if 2 arguments are the same object
*/
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){
return (x === y);
});
/**
* Returns true if x is nil, false otherwise.
*/
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return (x == null);
});
/**
* Returns true if x is logical false, false otherwise.
*/
cljs.core.not = (function not(x){
if(cljs.core.truth_(x))
{return false;
} else
{return true;
}
});
/**
* Internal - do not use!
*/
cljs.core.type_satisfies_ = (function type_satisfies_(p,x){
var x__$1 = (((x == null))?null:x);
if((p[goog.typeOf(x__$1)]))
{return true;
} else
{if((p["_"]))
{return true;
} else
{if("\uFDD0:else")
{return false;
} else
{return null;
}
}
}
});
cljs.core.is_proto_ = (function is_proto_(x){
return (x.constructor.prototype === x);
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.missing_protocol = (function missing_protocol(proto,obj){
return Error(["No protocol method ",proto," defined for type ",goog.typeOf(obj),": ",obj].join(""));
});
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(array_like){
return array_like.slice();
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){
return Array.prototype.slice.call(arguments);
});
cljs.core.make_array = (function() {
var make_array = null;
var make_array__1 = (function (size){
return (new Array(size));
});
var make_array__2 = (function (type,size){
return make_array.cljs$lang$arity$1(size);
});
make_array = function(type,size){
switch(arguments.length){
case 1:
return make_array__1.call(this,type);
case 2:
return make_array__2.call(this,type,size);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
make_array.cljs$lang$arity$1 = make_array__1;
make_array.cljs$lang$arity$2 = make_array__2;
return make_array;
})()
;
cljs.core.apply = undefined;
/**
* Returns the value at the index.
* @param {...*} var_args
*/
cljs.core.aget = (function() {
var aget = null;
var aget__2 = (function (array,i){
return (array[i]);
});
var aget__3 = (function() { 
var G__25616__delegate = function (array,i,idxs){
return (cljs.core.apply.cljs$lang$arity$3 ? cljs.core.apply.cljs$lang$arity$3(aget,aget.cljs$lang$arity$2(array,i),idxs) : cljs.core.apply.call(null,aget,aget.cljs$lang$arity$2(array,i),idxs));
};
var G__25616 = function (array,i,var_args){
var idxs = null;
if (goog.isDef(var_args)) {
  idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__25616__delegate.call(this, array, i, idxs);
};
G__25616.cljs$lang$maxFixedArity = 2;
G__25616.cljs$lang$applyTo = (function (arglist__25617){
var array = cljs.core.first(arglist__25617);
var i = cljs.core.first(cljs.core.next(arglist__25617));
var idxs = cljs.core.rest(cljs.core.next(arglist__25617));
return G__25616__delegate(array, i, idxs);
});
G__25616.cljs$lang$arity$variadic = G__25616__delegate;
return G__25616;
})()
;
aget = function(array,i,var_args){
var idxs = var_args;
switch(arguments.length){
case 2:
return aget__2.call(this,array,i);
default:
return aget__3.cljs$lang$arity$variadic(array,i, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
aget.cljs$lang$maxFixedArity = 2;
aget.cljs$lang$applyTo = aget__3.cljs$lang$applyTo;
aget.cljs$lang$arity$2 = aget__2;
aget.cljs$lang$arity$variadic = aget__3.cljs$lang$arity$variadic;
return aget;
})()
;
/**
* Sets the value at the index.
*/
cljs.core.aset = (function aset(array,i,val){
return (array[i] = val);
});
/**
* Returns the length of the array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){
return array.length;
});
cljs.core.reduce = undefined;
cljs.core.into_array = (function() {
var into_array = null;
var into_array__1 = (function (aseq){
return into_array.cljs$lang$arity$2(null,aseq);
});
var into_array__2 = (function (type,aseq){
return (cljs.core.reduce.cljs$lang$arity$3 ? cljs.core.reduce.cljs$lang$arity$3((function (a,x){
a.push(x);
return a;
}),[],aseq) : cljs.core.reduce.call(null,(function (a,x){
a.push(x);
return a;
}),[],aseq));
});
into_array = function(type,aseq){
switch(arguments.length){
case 1:
return into_array__1.call(this,type);
case 2:
return into_array__2.call(this,type,aseq);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
into_array.cljs$lang$arity$1 = into_array__1;
into_array.cljs$lang$arity$2 = into_array__2;
return into_array;
})()
;
cljs.core.Fn = {};
cljs.core.IFn = {};
cljs.core._invoke = (function() {
var _invoke = null;
var _invoke__1 = (function (this$){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.cljs$core$IFn$_invoke$arity$1;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$1(this$);
} else
{var x__5845__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (cljs.core._invoke[goog.typeOf(x__5845__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._invoke["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.cljs$core$IFn$_invoke$arity$2;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
} else
{var x__5845__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (cljs.core._invoke[goog.typeOf(x__5845__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._invoke["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.cljs$core$IFn$_invoke$arity$3;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
} else
{var x__5845__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (cljs.core._invoke[goog.typeOf(x__5845__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._invoke["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.cljs$core$IFn$_invoke$arity$4;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
} else
{var x__5845__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (cljs.core._invoke[goog.typeOf(x__5845__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._invoke["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.cljs$core$IFn$_invoke$arity$5;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
} else
{var x__5845__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (cljs.core._invoke[goog.typeOf(x__5845__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._invoke["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.cljs$core$IFn$_invoke$arity$6;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
} else
{var x__5845__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (cljs.core._invoke[goog.typeOf(x__5845__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._invoke["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.cljs$core$IFn$_invoke$arity$7;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
} else
{var x__5845__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (cljs.core._invoke[goog.typeOf(x__5845__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._invoke["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.cljs$core$IFn$_invoke$arity$8;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
} else
{var x__5845__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (cljs.core._invoke[goog.typeOf(x__5845__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._invoke["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.cljs$core$IFn$_invoke$arity$9;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
} else
{var x__5845__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (cljs.core._invoke[goog.typeOf(x__5845__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._invoke["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.cljs$core$IFn$_invoke$arity$10;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else
{var x__5845__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (cljs.core._invoke[goog.typeOf(x__5845__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._invoke["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.cljs$core$IFn$_invoke$arity$11;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else
{var x__5845__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (cljs.core._invoke[goog.typeOf(x__5845__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._invoke["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.cljs$core$IFn$_invoke$arity$12;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{var x__5845__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (cljs.core._invoke[goog.typeOf(x__5845__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._invoke["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.cljs$core$IFn$_invoke$arity$13;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{var x__5845__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (cljs.core._invoke[goog.typeOf(x__5845__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._invoke["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.cljs$core$IFn$_invoke$arity$14;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{var x__5845__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (cljs.core._invoke[goog.typeOf(x__5845__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._invoke["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.cljs$core$IFn$_invoke$arity$15;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{var x__5845__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (cljs.core._invoke[goog.typeOf(x__5845__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._invoke["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.cljs$core$IFn$_invoke$arity$16;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{var x__5845__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (cljs.core._invoke[goog.typeOf(x__5845__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._invoke["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.cljs$core$IFn$_invoke$arity$17;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{var x__5845__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (cljs.core._invoke[goog.typeOf(x__5845__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._invoke["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.cljs$core$IFn$_invoke$arity$18;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{var x__5845__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (cljs.core._invoke[goog.typeOf(x__5845__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._invoke["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.cljs$core$IFn$_invoke$arity$19;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{var x__5845__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (cljs.core._invoke[goog.typeOf(x__5845__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._invoke["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.cljs$core$IFn$_invoke$arity$20;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{var x__5845__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (cljs.core._invoke[goog.typeOf(x__5845__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._invoke["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.cljs$core$IFn$_invoke$arity$21;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{var x__5845__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (cljs.core._invoke[goog.typeOf(x__5845__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._invoke["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
});
_invoke = function(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
switch(arguments.length){
case 1:
return _invoke__1.call(this,this$);
case 2:
return _invoke__2.call(this,this$,a);
case 3:
return _invoke__3.call(this,this$,a,b);
case 4:
return _invoke__4.call(this,this$,a,b,c);
case 5:
return _invoke__5.call(this,this$,a,b,c,d);
case 6:
return _invoke__6.call(this,this$,a,b,c,d,e);
case 7:
return _invoke__7.call(this,this$,a,b,c,d,e,f);
case 8:
return _invoke__8.call(this,this$,a,b,c,d,e,f,g);
case 9:
return _invoke__9.call(this,this$,a,b,c,d,e,f,g,h);
case 10:
return _invoke__10.call(this,this$,a,b,c,d,e,f,g,h,i);
case 11:
return _invoke__11.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case 12:
return _invoke__12.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return _invoke__13.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return _invoke__14.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return _invoke__15.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return _invoke__16.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return _invoke__17.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return _invoke__18.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return _invoke__19.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case 20:
return _invoke__20.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case 21:
return _invoke__21.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_invoke.cljs$lang$arity$1 = _invoke__1;
_invoke.cljs$lang$arity$2 = _invoke__2;
_invoke.cljs$lang$arity$3 = _invoke__3;
_invoke.cljs$lang$arity$4 = _invoke__4;
_invoke.cljs$lang$arity$5 = _invoke__5;
_invoke.cljs$lang$arity$6 = _invoke__6;
_invoke.cljs$lang$arity$7 = _invoke__7;
_invoke.cljs$lang$arity$8 = _invoke__8;
_invoke.cljs$lang$arity$9 = _invoke__9;
_invoke.cljs$lang$arity$10 = _invoke__10;
_invoke.cljs$lang$arity$11 = _invoke__11;
_invoke.cljs$lang$arity$12 = _invoke__12;
_invoke.cljs$lang$arity$13 = _invoke__13;
_invoke.cljs$lang$arity$14 = _invoke__14;
_invoke.cljs$lang$arity$15 = _invoke__15;
_invoke.cljs$lang$arity$16 = _invoke__16;
_invoke.cljs$lang$arity$17 = _invoke__17;
_invoke.cljs$lang$arity$18 = _invoke__18;
_invoke.cljs$lang$arity$19 = _invoke__19;
_invoke.cljs$lang$arity$20 = _invoke__20;
_invoke.cljs$lang$arity$21 = _invoke__21;
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$ICounted$_count$arity$1;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$ICounted$_count$arity$1(coll);
} else
{var x__5845__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (cljs.core._count[goog.typeOf(x__5845__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._count["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol("ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var x__5845__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (cljs.core._empty[goog.typeOf(x__5845__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._empty["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol("IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$ICollection$_conj$arity$2;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else
{var x__5845__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (cljs.core._conj[goog.typeOf(x__5845__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._conj["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol("ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});
cljs.core.IIndexed = {};
cljs.core._nth = (function() {
var _nth = null;
var _nth__2 = (function (coll,n){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$IIndexed$_nth$arity$2;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{var x__5845__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (cljs.core._nth[goog.typeOf(x__5845__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._nth["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol("IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$IIndexed$_nth$arity$3;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
} else
{var x__5845__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (cljs.core._nth[goog.typeOf(x__5845__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._nth["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol("IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return _nth__2.call(this,coll,n);
case 3:
return _nth__3.call(this,coll,n,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_nth.cljs$lang$arity$2 = _nth__2;
_nth.cljs$lang$arity$3 = _nth__3;
return _nth;
})()
;
cljs.core.ASeq = {};
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$ISeq$_first$arity$1;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$ISeq$_first$arity$1(coll);
} else
{var x__5845__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (cljs.core._first[goog.typeOf(x__5845__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._first["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol("ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$ISeq$_rest$arity$1;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else
{var x__5845__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (cljs.core._rest[goog.typeOf(x__5845__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._rest["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol("ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.INext = {};
cljs.core._next = (function _next(coll){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$INext$_next$arity$1;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$INext$_next$arity$1(coll);
} else
{var x__5845__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (cljs.core._next[goog.typeOf(x__5845__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._next["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol("INext.-next",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ILookup = {};
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__2 = (function (o,k){
if((function (){var and__3941__auto__ = o;
if(and__3941__auto__)
{return o.cljs$core$ILookup$_lookup$arity$2;
} else
{return and__3941__auto__;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else
{var x__5845__auto__ = (((o == null))?null:o);
return (function (){var or__3943__auto__ = (cljs.core._lookup[goog.typeOf(x__5845__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._lookup["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol("ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){
if((function (){var and__3941__auto__ = o;
if(and__3941__auto__)
{return o.cljs$core$ILookup$_lookup$arity$3;
} else
{return and__3941__auto__;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
} else
{var x__5845__auto__ = (((o == null))?null:o);
return (function (){var or__3943__auto__ = (cljs.core._lookup[goog.typeOf(x__5845__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._lookup["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol("ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case 2:
return _lookup__2.call(this,o,k);
case 3:
return _lookup__3.call(this,o,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_lookup.cljs$lang$arity$2 = _lookup__2;
_lookup.cljs$lang$arity$3 = _lookup__3;
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else
{var x__5845__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (cljs.core._contains_key_QMARK_[goog.typeOf(x__5845__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._contains_key_QMARK_["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol("IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$IAssociative$_assoc$arity$3;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else
{var x__5845__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (cljs.core._assoc[goog.typeOf(x__5845__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._assoc["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol("IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$IMap$_dissoc$arity$2;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else
{var x__5845__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (cljs.core._dissoc[goog.typeOf(x__5845__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._dissoc["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol("IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.IMapEntry = {};
cljs.core._key = (function _key(coll){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$IMapEntry$_key$arity$1;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else
{var x__5845__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (cljs.core._key[goog.typeOf(x__5845__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._key["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol("IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});
cljs.core._val = (function _val(coll){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$IMapEntry$_val$arity$1;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else
{var x__5845__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (cljs.core._val[goog.typeOf(x__5845__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._val["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol("IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$ISet$_disjoin$arity$2;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else
{var x__5845__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (cljs.core._disjoin[goog.typeOf(x__5845__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._disjoin["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol("ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$IStack$_peek$arity$1;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$IStack$_peek$arity$1(coll);
} else
{var x__5845__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (cljs.core._peek[goog.typeOf(x__5845__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._peek["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol("IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$IStack$_pop$arity$1;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$IStack$_pop$arity$1(coll);
} else
{var x__5845__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (cljs.core._pop[goog.typeOf(x__5845__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._pop["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol("IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$IVector$_assoc_n$arity$3;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else
{var x__5845__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (cljs.core._assoc_n[goog.typeOf(x__5845__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._assoc_n["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol("IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if((function (){var and__3941__auto__ = o;
if(and__3941__auto__)
{return o.cljs$core$IDeref$_deref$arity$1;
} else
{return and__3941__auto__;
}
})())
{return o.cljs$core$IDeref$_deref$arity$1(o);
} else
{var x__5845__auto__ = (((o == null))?null:o);
return (function (){var or__3943__auto__ = (cljs.core._deref[goog.typeOf(x__5845__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._deref["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol("IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if((function (){var and__3941__auto__ = o;
if(and__3941__auto__)
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else
{return and__3941__auto__;
}
})())
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else
{var x__5845__auto__ = (((o == null))?null:o);
return (function (){var or__3943__auto__ = (cljs.core._deref_with_timeout[goog.typeOf(x__5845__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._deref_with_timeout["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol("IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if((function (){var and__3941__auto__ = o;
if(and__3941__auto__)
{return o.cljs$core$IMeta$_meta$arity$1;
} else
{return and__3941__auto__;
}
})())
{return o.cljs$core$IMeta$_meta$arity$1(o);
} else
{var x__5845__auto__ = (((o == null))?null:o);
return (function (){var or__3943__auto__ = (cljs.core._meta[goog.typeOf(x__5845__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._meta["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol("IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if((function (){var and__3941__auto__ = o;
if(and__3941__auto__)
{return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else
{return and__3941__auto__;
}
})())
{return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else
{var x__5845__auto__ = (((o == null))?null:o);
return (function (){var or__3943__auto__ = (cljs.core._with_meta[goog.typeOf(x__5845__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._with_meta["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol("IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});
cljs.core.IReduce = {};
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__2 = (function (coll,f){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$IReduce$_reduce$arity$2;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else
{var x__5845__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (cljs.core._reduce[goog.typeOf(x__5845__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._reduce["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol("IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$IReduce$_reduce$arity$3;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
} else
{var x__5845__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (cljs.core._reduce[goog.typeOf(x__5845__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._reduce["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol("IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case 2:
return _reduce__2.call(this,coll,f);
case 3:
return _reduce__3.call(this,coll,f,start);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_reduce.cljs$lang$arity$2 = _reduce__2;
_reduce.cljs$lang$arity$3 = _reduce__3;
return _reduce;
})()
;
cljs.core.IKVReduce = {};
cljs.core._kv_reduce = (function _kv_reduce(coll,f,init){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else
{var x__5845__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (cljs.core._kv_reduce[goog.typeOf(x__5845__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._kv_reduce["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol("IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if((function (){var and__3941__auto__ = o;
if(and__3941__auto__)
{return o.cljs$core$IEquiv$_equiv$arity$2;
} else
{return and__3941__auto__;
}
})())
{return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else
{var x__5845__auto__ = (((o == null))?null:o);
return (function (){var or__3943__auto__ = (cljs.core._equiv[goog.typeOf(x__5845__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._equiv["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol("IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if((function (){var and__3941__auto__ = o;
if(and__3941__auto__)
{return o.cljs$core$IHash$_hash$arity$1;
} else
{return and__3941__auto__;
}
})())
{return o.cljs$core$IHash$_hash$arity$1(o);
} else
{var x__5845__auto__ = (((o == null))?null:o);
return (function (){var or__3943__auto__ = (cljs.core._hash[goog.typeOf(x__5845__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._hash["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol("IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if((function (){var and__3941__auto__ = o;
if(and__3941__auto__)
{return o.cljs$core$ISeqable$_seq$arity$1;
} else
{return and__3941__auto__;
}
})())
{return o.cljs$core$ISeqable$_seq$arity$1(o);
} else
{var x__5845__auto__ = (((o == null))?null:o);
return (function (){var or__3943__auto__ = (cljs.core._seq[goog.typeOf(x__5845__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._seq["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol("ISeqable.-seq",o);
}
}
})().call(null,o);
}
});
cljs.core.ISequential = {};
cljs.core.IList = {};
cljs.core.IRecord = {};
cljs.core.IReversible = {};
cljs.core._rseq = (function _rseq(coll){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$IReversible$_rseq$arity$1;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else
{var x__5845__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (cljs.core._rseq[goog.typeOf(x__5845__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._rseq["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol("IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISorted = {};
cljs.core._sorted_seq = (function _sorted_seq(coll,ascending_QMARK_){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else
{var x__5845__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (cljs.core._sorted_seq[goog.typeOf(x__5845__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._sorted_seq["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol("ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});
cljs.core._sorted_seq_from = (function _sorted_seq_from(coll,k,ascending_QMARK_){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else
{var x__5845__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (cljs.core._sorted_seq_from[goog.typeOf(x__5845__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._sorted_seq_from["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol("ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});
cljs.core._entry_key = (function _entry_key(coll,entry){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$ISorted$_entry_key$arity$2;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else
{var x__5845__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (cljs.core._entry_key[goog.typeOf(x__5845__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._entry_key["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol("ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});
cljs.core._comparator = (function _comparator(coll){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$ISorted$_comparator$arity$1;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else
{var x__5845__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (cljs.core._comparator[goog.typeOf(x__5845__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._comparator["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol("ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if((function (){var and__3941__auto__ = o;
if(and__3941__auto__)
{return o.cljs$core$IPrintable$_pr_seq$arity$2;
} else
{return and__3941__auto__;
}
})())
{return o.cljs$core$IPrintable$_pr_seq$arity$2(o,opts);
} else
{var x__5845__auto__ = (((o == null))?null:o);
return (function (){var or__3943__auto__ = (cljs.core._pr_seq[goog.typeOf(x__5845__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._pr_seq["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol("IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IWriter = {};
cljs.core._write = (function _write(writer,s){
if((function (){var and__3941__auto__ = writer;
if(and__3941__auto__)
{return writer.cljs$core$IWriter$_write$arity$2;
} else
{return and__3941__auto__;
}
})())
{return writer.cljs$core$IWriter$_write$arity$2(writer,s);
} else
{var x__5845__auto__ = (((writer == null))?null:writer);
return (function (){var or__3943__auto__ = (cljs.core._write[goog.typeOf(x__5845__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._write["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol("IWriter.-write",writer);
}
}
})().call(null,writer,s);
}
});
cljs.core._flush = (function _flush(writer){
if((function (){var and__3941__auto__ = writer;
if(and__3941__auto__)
{return writer.cljs$core$IWriter$_flush$arity$1;
} else
{return and__3941__auto__;
}
})())
{return writer.cljs$core$IWriter$_flush$arity$1(writer);
} else
{var x__5845__auto__ = (((writer == null))?null:writer);
return (function (){var or__3943__auto__ = (cljs.core._flush[goog.typeOf(x__5845__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._flush["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol("IWriter.-flush",writer);
}
}
})().call(null,writer);
}
});
cljs.core.IPrintWithWriter = {};
cljs.core._pr_writer = (function _pr_writer(o,writer,opts){
if((function (){var and__3941__auto__ = o;
if(and__3941__auto__)
{return o.cljs$core$IPrintWithWriter$_pr_writer$arity$3;
} else
{return and__3941__auto__;
}
})())
{return o.cljs$core$IPrintWithWriter$_pr_writer$arity$3(o,writer,opts);
} else
{var x__5845__auto__ = (((o == null))?null:o);
return (function (){var or__3943__auto__ = (cljs.core._pr_writer[goog.typeOf(x__5845__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._pr_writer["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol("IPrintWithWriter.-pr-writer",o);
}
}
})().call(null,o,writer,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if((function (){var and__3941__auto__ = d;
if(and__3941__auto__)
{return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else
{return and__3941__auto__;
}
})())
{return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else
{var x__5845__auto__ = (((d == null))?null:d);
return (function (){var or__3943__auto__ = (cljs.core._realized_QMARK_[goog.typeOf(x__5845__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._realized_QMARK_["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol("IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else
{var x__5845__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (cljs.core._notify_watches[goog.typeOf(x__5845__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._notify_watches["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol("IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else
{var x__5845__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (cljs.core._add_watch[goog.typeOf(x__5845__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._add_watch["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol("IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else
{var x__5845__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (cljs.core._remove_watch[goog.typeOf(x__5845__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._remove_watch["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol("IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
cljs.core.IEditableCollection = {};
cljs.core._as_transient = (function _as_transient(coll){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else
{var x__5845__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (cljs.core._as_transient[goog.typeOf(x__5845__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._as_transient["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol("IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ITransientCollection = {};
cljs.core._conj_BANG_ = (function _conj_BANG_(tcoll,val){
if((function (){var and__3941__auto__ = tcoll;
if(and__3941__auto__)
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else
{return and__3941__auto__;
}
})())
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{var x__5845__auto__ = (((tcoll == null))?null:tcoll);
return (function (){var or__3943__auto__ = (cljs.core._conj_BANG_[goog.typeOf(x__5845__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._conj_BANG_["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol("ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});
cljs.core._persistent_BANG_ = (function _persistent_BANG_(tcoll){
if((function (){var and__3941__auto__ = tcoll;
if(and__3941__auto__)
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else
{return and__3941__auto__;
}
})())
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else
{var x__5845__auto__ = (((tcoll == null))?null:tcoll);
return (function (){var or__3943__auto__ = (cljs.core._persistent_BANG_[goog.typeOf(x__5845__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._persistent_BANG_["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol("ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientAssociative = {};
cljs.core._assoc_BANG_ = (function _assoc_BANG_(tcoll,key,val){
if((function (){var and__3941__auto__ = tcoll;
if(and__3941__auto__)
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else
{return and__3941__auto__;
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else
{var x__5845__auto__ = (((tcoll == null))?null:tcoll);
return (function (){var or__3943__auto__ = (cljs.core._assoc_BANG_[goog.typeOf(x__5845__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._assoc_BANG_["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol("ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});
cljs.core.ITransientMap = {};
cljs.core._dissoc_BANG_ = (function _dissoc_BANG_(tcoll,key){
if((function (){var and__3941__auto__ = tcoll;
if(and__3941__auto__)
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else
{return and__3941__auto__;
}
})())
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else
{var x__5845__auto__ = (((tcoll == null))?null:tcoll);
return (function (){var or__3943__auto__ = (cljs.core._dissoc_BANG_[goog.typeOf(x__5845__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._dissoc_BANG_["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol("ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});
cljs.core.ITransientVector = {};
cljs.core._assoc_n_BANG_ = (function _assoc_n_BANG_(tcoll,n,val){
if((function (){var and__3941__auto__ = tcoll;
if(and__3941__auto__)
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else
{return and__3941__auto__;
}
})())
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else
{var x__5845__auto__ = (((tcoll == null))?null:tcoll);
return (function (){var or__3943__auto__ = (cljs.core._assoc_n_BANG_[goog.typeOf(x__5845__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._assoc_n_BANG_["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol("ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});
cljs.core._pop_BANG_ = (function _pop_BANG_(tcoll){
if((function (){var and__3941__auto__ = tcoll;
if(and__3941__auto__)
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else
{return and__3941__auto__;
}
})())
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else
{var x__5845__auto__ = (((tcoll == null))?null:tcoll);
return (function (){var or__3943__auto__ = (cljs.core._pop_BANG_[goog.typeOf(x__5845__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._pop_BANG_["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol("ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientSet = {};
cljs.core._disjoin_BANG_ = (function _disjoin_BANG_(tcoll,v){
if((function (){var and__3941__auto__ = tcoll;
if(and__3941__auto__)
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else
{return and__3941__auto__;
}
})())
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else
{var x__5845__auto__ = (((tcoll == null))?null:tcoll);
return (function (){var or__3943__auto__ = (cljs.core._disjoin_BANG_[goog.typeOf(x__5845__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._disjoin_BANG_["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol("ITransientSet.-disjoin!",tcoll);
}
}
})().call(null,tcoll,v);
}
});
cljs.core.IComparable = {};
cljs.core._compare = (function _compare(x,y){
if((function (){var and__3941__auto__ = x;
if(and__3941__auto__)
{return x.cljs$core$IComparable$_compare$arity$2;
} else
{return and__3941__auto__;
}
})())
{return x.cljs$core$IComparable$_compare$arity$2(x,y);
} else
{var x__5845__auto__ = (((x == null))?null:x);
return (function (){var or__3943__auto__ = (cljs.core._compare[goog.typeOf(x__5845__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._compare["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol("IComparable.-compare",x);
}
}
})().call(null,x,y);
}
});
cljs.core.IChunk = {};
cljs.core._drop_first = (function _drop_first(coll){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$IChunk$_drop_first$arity$1;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$IChunk$_drop_first$arity$1(coll);
} else
{var x__5845__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (cljs.core._drop_first[goog.typeOf(x__5845__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._drop_first["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol("IChunk.-drop-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedSeq = {};
cljs.core._chunked_first = (function _chunked_first(coll){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1(coll);
} else
{var x__5845__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (cljs.core._chunked_first[goog.typeOf(x__5845__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._chunked_first["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol("IChunkedSeq.-chunked-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._chunked_rest = (function _chunked_rest(coll){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
} else
{var x__5845__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (cljs.core._chunked_rest[goog.typeOf(x__5845__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._chunked_rest["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol("IChunkedSeq.-chunked-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedNext = {};
cljs.core._chunked_next = (function _chunked_next(coll){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
} else
{var x__5845__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (cljs.core._chunked_next[goog.typeOf(x__5845__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._chunked_next["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol("IChunkedNext.-chunked-next",coll);
}
}
})().call(null,coll);
}
});
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){
if((coll == null))
{return null;
} else
{if(cljs.core.truth_((function (){var G__25619 = coll;
if(G__25619)
{if(cljs.core.truth_((function (){var or__3943__auto__ = (G__25619.cljs$lang$protocol_mask$partition0$ & 32);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__25619.cljs$core$ASeq$;
}
})()))
{return true;
} else
{if((!G__25619.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.ASeq,G__25619);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.ASeq,G__25619);
}
})()))
{return coll;
} else
{return cljs.core._seq(coll);
}
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){
if((coll == null))
{return null;
} else
{if(cljs.core.truth_((function (){var G__25621 = coll;
if(G__25621)
{if(cljs.core.truth_((function (){var or__3943__auto__ = (G__25621.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__25621.cljs$core$ISeq$;
}
})()))
{return true;
} else
{if((!G__25621.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.ISeq,G__25621);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.ISeq,G__25621);
}
})()))
{return cljs.core._first(coll);
} else
{var s = cljs.core.seq(coll);
if((s == null))
{return null;
} else
{return cljs.core._first(s);
}
}
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){
if(!((coll == null)))
{if(cljs.core.truth_((function (){var G__25623 = coll;
if(G__25623)
{if(cljs.core.truth_((function (){var or__3943__auto__ = (G__25623.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__25623.cljs$core$ISeq$;
}
})()))
{return true;
} else
{if((!G__25623.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.ISeq,G__25623);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.ISeq,G__25623);
}
})()))
{return cljs.core._rest(coll);
} else
{var s = cljs.core.seq(coll);
if(!((s == null)))
{return cljs.core._rest(s);
} else
{return cljs.core.List.EMPTY;
}
}
} else
{return cljs.core.List.EMPTY;
}
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){
if((coll == null))
{return null;
} else
{if(cljs.core.truth_((function (){var G__25625 = coll;
if(G__25625)
{if(cljs.core.truth_((function (){var or__3943__auto__ = (G__25625.cljs$lang$protocol_mask$partition0$ & 128);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__25625.cljs$core$INext$;
}
})()))
{return true;
} else
{if((!G__25625.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.INext,G__25625);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.INext,G__25625);
}
})()))
{return cljs.core._next(coll);
} else
{return cljs.core.seq(cljs.core.rest(coll));
}
}
});
/**
* Equality. Returns true if x equals y, false if not. Compares
* numbers and collections in a type-independent manner.  Clojure's immutable data
* structures define -equiv (and thus =) as a value, not an identity,
* comparison.
* @param {...*} var_args
*/
cljs.core._EQ_ = (function() {
var _EQ_ = null;
var _EQ___1 = (function (x){
return true;
});
var _EQ___2 = (function (x,y){
var or__3943__auto__ = (x === y);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return cljs.core._equiv(x,y);
}
});
var _EQ___3 = (function() { 
var G__25626__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ_.cljs$lang$arity$2(x,y)))
{if(cljs.core.next(more))
{{
var G__25627 = y;
var G__25628 = cljs.core.first(more);
var G__25629 = cljs.core.next(more);
x = G__25627;
y = G__25628;
more = G__25629;
continue;
}
} else
{return _EQ_.cljs$lang$arity$2(y,cljs.core.first(more));
}
} else
{return false;
}
break;
}
};
var G__25626 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__25626__delegate.call(this, x, y, more);
};
G__25626.cljs$lang$maxFixedArity = 2;
G__25626.cljs$lang$applyTo = (function (arglist__25630){
var x = cljs.core.first(arglist__25630);
var y = cljs.core.first(cljs.core.next(arglist__25630));
var more = cljs.core.rest(cljs.core.next(arglist__25630));
return G__25626__delegate(x, y, more);
});
G__25626.cljs$lang$arity$variadic = G__25626__delegate;
return G__25626;
})()
;
_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ___1.call(this,x);
case 2:
return _EQ___2.call(this,x,y);
default:
return _EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_EQ_.cljs$lang$maxFixedArity = 2;
_EQ_.cljs$lang$applyTo = _EQ___3.cljs$lang$applyTo;
_EQ_.cljs$lang$arity$1 = _EQ___1;
_EQ_.cljs$lang$arity$2 = _EQ___2;
_EQ_.cljs$lang$arity$variadic = _EQ___3.cljs$lang$arity$variadic;
return _EQ_;
})()
;
cljs.core.type = (function type(x){
if((x == null))
{return null;
} else
{return x.constructor;
}
});
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){
return (o instanceof t);
});
cljs.core.hash_map = undefined;
cljs.core.list = undefined;
cljs.core.equiv_sequential = undefined;
(cljs.core.IHash["null"] = true);
(cljs.core._hash["null"] = (function (o){
return 0;
}));
(cljs.core.ILookup["null"] = true);
(cljs.core._lookup["null"] = (function() {
var G__25631 = null;
var G__25631__2 = (function (o,k){
return null;
});
var G__25631__3 = (function (o,k,not_found){
return not_found;
});
G__25631 = function(o,k,not_found){
switch(arguments.length){
case 2:
return G__25631__2.call(this,o,k);
case 3:
return G__25631__3.call(this,o,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__25631;
})()
);
(cljs.core.IAssociative["null"] = true);
(cljs.core._assoc["null"] = (function (_,k,v){
return (cljs.core.hash_map.cljs$lang$arity$2 ? cljs.core.hash_map.cljs$lang$arity$2(k,v) : cljs.core.hash_map.call(null,k,v));
}));
(cljs.core.INext["null"] = true);
(cljs.core._next["null"] = (function (_){
return null;
}));
(cljs.core.IPrintWithWriter["null"] = true);
(cljs.core._pr_writer["null"] = (function (o,writer,_){
return cljs.core._write(writer,"nil");
}));
(cljs.core.ICollection["null"] = true);
(cljs.core._conj["null"] = (function (_,o){
return (cljs.core.list.cljs$lang$arity$1 ? cljs.core.list.cljs$lang$arity$1(o) : cljs.core.list.call(null,o));
}));
(cljs.core.IReduce["null"] = true);
(cljs.core._reduce["null"] = (function() {
var G__25632 = null;
var G__25632__2 = (function (_,f){
return (f.cljs$lang$arity$0 ? f.cljs$lang$arity$0() : f.call(null));
});
var G__25632__3 = (function (_,f,start){
return start;
});
G__25632 = function(_,f,start){
switch(arguments.length){
case 2:
return G__25632__2.call(this,_,f);
case 3:
return G__25632__3.call(this,_,f,start);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__25632;
})()
);
(cljs.core.IPrintable["null"] = true);
(cljs.core._pr_seq["null"] = (function (o){
return (cljs.core.list.cljs$lang$arity$1 ? cljs.core.list.cljs$lang$arity$1("nil") : cljs.core.list.call(null,"nil"));
}));
(cljs.core.ISet["null"] = true);
(cljs.core._disjoin["null"] = (function (_,v){
return null;
}));
(cljs.core.ICounted["null"] = true);
(cljs.core._count["null"] = (function (_){
return 0;
}));
(cljs.core.IStack["null"] = true);
(cljs.core._peek["null"] = (function (_){
return null;
}));
(cljs.core._pop["null"] = (function (_){
return null;
}));
(cljs.core.ISeq["null"] = true);
(cljs.core._first["null"] = (function (_){
return null;
}));
(cljs.core._rest["null"] = (function (_){
return (cljs.core.list.cljs$lang$arity$0 ? cljs.core.list.cljs$lang$arity$0() : cljs.core.list.call(null));
}));
(cljs.core.IEquiv["null"] = true);
(cljs.core._equiv["null"] = (function (_,o){
return (o == null);
}));
(cljs.core.IWithMeta["null"] = true);
(cljs.core._with_meta["null"] = (function (_,meta){
return null;
}));
(cljs.core.IMeta["null"] = true);
(cljs.core._meta["null"] = (function (_){
return null;
}));
(cljs.core.IIndexed["null"] = true);
(cljs.core._nth["null"] = (function() {
var G__25633 = null;
var G__25633__2 = (function (_,n){
return null;
});
var G__25633__3 = (function (_,n,not_found){
return not_found;
});
G__25633 = function(_,n,not_found){
switch(arguments.length){
case 2:
return G__25633__2.call(this,_,n);
case 3:
return G__25633__3.call(this,_,n,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__25633;
})()
);
(cljs.core.IEmptyableCollection["null"] = true);
(cljs.core._empty["null"] = (function (_){
return null;
}));
(cljs.core.IMap["null"] = true);
(cljs.core._dissoc["null"] = (function (_,k){
return null;
}));
Date.prototype.cljs$core$IEquiv$ = true;
Date.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var and__3941__auto__ = cljs.core.instance_QMARK_(Date,other);
if(and__3941__auto__)
{return (o.toString() === other.toString());
} else
{return and__3941__auto__;
}
});
(cljs.core.IHash["number"] = true);
(cljs.core._hash["number"] = (function (o){
return (Math.floor(o) % 2147483647);
}));
(cljs.core.IEquiv["number"] = true);
(cljs.core._equiv["number"] = (function (x,o){
return (x === o);
}));
(cljs.core.IHash["boolean"] = true);
(cljs.core._hash["boolean"] = (function (o){
if((o === true))
{return 1;
} else
{return 0;
}
}));
cljs.core.with_meta = undefined;
(cljs.core.IWithMeta["function"] = true);
(cljs.core._with_meta["function"] = (function (f,meta){
return (cljs.core.with_meta.cljs$lang$arity$2 ? cljs.core.with_meta.cljs$lang$arity$2((function (){if((void 0 === cljs.core.t25634))
{goog.provide('cljs.core.t25634');

/**
* @constructor
*/
cljs.core.t25634 = (function (meta,f,meta25635){
this.meta = meta;
this.f = f;
this.meta25635 = meta25635;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
cljs.core.t25634.cljs$lang$type = true;
cljs.core.t25634.cljs$lang$ctorPrSeq = (function (this__5785__auto__){
return (cljs.core.list.cljs$lang$arity$1 ? cljs.core.list.cljs$lang$arity$1("cljs.core/t25634") : cljs.core.list.call(null,"cljs.core/t25634"));
});
cljs.core.t25634.cljs$lang$ctorPrWriter = (function (this__5785__auto__,writer__5786__auto__,opt__5787__auto__){
return cljs.core._write(writer__5786__auto__,"cljs.core/t25634");
});
cljs.core.t25634.prototype.call = (function() { 
var G__25638__delegate = function (self__,args){
var self____$1 = this;
var _ = self____$1;
return (cljs.core.apply.cljs$lang$arity$2 ? cljs.core.apply.cljs$lang$arity$2(self__.f,args) : cljs.core.apply.call(null,self__.f,args));
};
var G__25638 = function (self__,var_args){
var self__ = this;
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__25638__delegate.call(this, self__, args);
};
G__25638.cljs$lang$maxFixedArity = 1;
G__25638.cljs$lang$applyTo = (function (arglist__25639){
var self__ = cljs.core.first(arglist__25639);
var args = cljs.core.rest(arglist__25639);
return G__25638__delegate(self__, args);
});
G__25638.cljs$lang$arity$variadic = G__25638__delegate;
return G__25638;
})()
;
cljs.core.t25634.prototype.apply = (function (self__,args25637){
var self__ = this;
return self__.call.apply(self__,[self__].concat(args25637.slice()));
});
cljs.core.t25634.prototype.cljs$core$Fn$ = true;
cljs.core.t25634.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25636){
var self__ = this;
return self__.meta25635;
});
cljs.core.t25634.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25636,meta25635__$1){
var self__ = this;
return (new cljs.core.t25634(self__.meta,self__.f,meta25635__$1));
});
} else
{}
return (new cljs.core.t25634(meta,f,null));
})(),meta) : cljs.core.with_meta.call(null,(function (){if((void 0 === cljs.core.t25634))
{
/**
* @constructor
*/
cljs.core.t25634 = (function (meta,f,meta25635){
this.meta = meta;
this.f = f;
this.meta25635 = meta25635;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
cljs.core.t25634.cljs$lang$type = true;
cljs.core.t25634.cljs$lang$ctorPrSeq = (function (this__5785__auto__){
return (cljs.core.list.cljs$lang$arity$1 ? cljs.core.list.cljs$lang$arity$1("cljs.core/t25634") : cljs.core.list.call(null,"cljs.core/t25634"));
});
cljs.core.t25634.cljs$lang$ctorPrWriter = (function (this__5785__auto__,writer__5786__auto__,opt__5787__auto__){
return cljs.core._write(writer__5786__auto__,"cljs.core/t25634");
});
cljs.core.t25634.prototype.call = (function() { 
var G__25640__delegate = function (self__,args){
var self____$1 = this;
var _ = self____$1;
return (cljs.core.apply.cljs$lang$arity$2 ? cljs.core.apply.cljs$lang$arity$2(self__.f,args) : cljs.core.apply.call(null,self__.f,args));
};
var G__25640 = function (self__,var_args){
var self__ = this;
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__25640__delegate.call(this, self__, args);
};
G__25640.cljs$lang$maxFixedArity = 1;
G__25640.cljs$lang$applyTo = (function (arglist__25641){
var self__ = cljs.core.first(arglist__25641);
var args = cljs.core.rest(arglist__25641);
return G__25640__delegate(self__, args);
});
G__25640.cljs$lang$arity$variadic = G__25640__delegate;
return G__25640;
})()
;
cljs.core.t25634.prototype.apply = (function (self__,args25637){
var self__ = this;
return self__.call.apply(self__,[self__].concat(args25637.slice()));
});
cljs.core.t25634.prototype.cljs$core$Fn$ = true;
cljs.core.t25634.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25636){
var self__ = this;
return self__.meta25635;
});
cljs.core.t25634.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25636,meta25635__$1){
var self__ = this;
return (new cljs.core.t25634(self__.meta,self__.f,meta25635__$1));
});
} else
{}
return (new cljs.core.t25634(meta,f,null));
})(),meta));
}));
(cljs.core.IMeta["function"] = true);
(cljs.core._meta["function"] = (function (_){
return null;
}));
(cljs.core.Fn["function"] = true);
(cljs.core.IHash["_"] = true);
(cljs.core._hash["_"] = (function (o){
return goog.getUid(o);
}));
/**
* Returns a number one greater than num.
*/
cljs.core.inc = (function inc(x){
return (x + 1);
});
cljs.core.deref = undefined;
goog.provide('cljs.core.Reduced');

/**
* @constructor
*/
cljs.core.Reduced = (function (val){
this.val = val;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32768;
})
cljs.core.Reduced.cljs$lang$type = true;
cljs.core.Reduced.cljs$lang$ctorPrSeq = (function (this__5785__auto__){
return (cljs.core.list.cljs$lang$arity$1 ? cljs.core.list.cljs$lang$arity$1("cljs.core/Reduced") : cljs.core.list.call(null,"cljs.core/Reduced"));
});
cljs.core.Reduced.cljs$lang$ctorPrWriter = (function (this__5785__auto__,writer__5786__auto__,opt__5787__auto__){
return cljs.core._write(writer__5786__auto__,"cljs.core/Reduced");
});
cljs.core.Reduced.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){
var self__ = this;
return self__.val;
});
/**
* Wraps x in a way such that a reduce will terminate with the value x
*/
cljs.core.reduced = (function reduced(x){
return (new cljs.core.Reduced(x));
});
/**
* Returns true if x is the result of a call to reduced
*/
cljs.core.reduced_QMARK_ = (function reduced_QMARK_(r){
return cljs.core.instance_QMARK_(cljs.core.Reduced,r);
});
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__2 = (function (cicoll,f){
var cnt = cljs.core._count(cicoll);
if((cnt === 0))
{return (f.cljs$lang$arity$0 ? f.cljs$lang$arity$0() : f.call(null));
} else
{var val = cljs.core._nth.cljs$lang$arity$2(cicoll,0);
var n = 1;
while(true){
if((n < cnt))
{var nval = (f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(val,cljs.core._nth.cljs$lang$arity$2(cicoll,n)) : f.call(null,val,cljs.core._nth.cljs$lang$arity$2(cicoll,n)));
if(cljs.core.reduced_QMARK_(nval))
{return (cljs.core.deref.cljs$lang$arity$1 ? cljs.core.deref.cljs$lang$arity$1(nval) : cljs.core.deref.call(null,nval));
} else
{{
var G__25642 = nval;
var G__25643 = (n + 1);
val = G__25642;
n = G__25643;
continue;
}
}
} else
{return val;
}
break;
}
}
});
var ci_reduce__3 = (function (cicoll,f,val){
var cnt = cljs.core._count(cicoll);
var val__$1 = val;
var n = 0;
while(true){
if((n < cnt))
{var nval = (f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(val__$1,cljs.core._nth.cljs$lang$arity$2(cicoll,n)) : f.call(null,val__$1,cljs.core._nth.cljs$lang$arity$2(cicoll,n)));
if(cljs.core.reduced_QMARK_(nval))
{return (cljs.core.deref.cljs$lang$arity$1 ? cljs.core.deref.cljs$lang$arity$1(nval) : cljs.core.deref.call(null,nval));
} else
{{
var G__25644 = nval;
var G__25645 = (n + 1);
val__$1 = G__25644;
n = G__25645;
continue;
}
}
} else
{return val__$1;
}
break;
}
});
var ci_reduce__4 = (function (cicoll,f,val,idx){
var cnt = cljs.core._count(cicoll);
var val__$1 = val;
var n = idx;
while(true){
if((n < cnt))
{var nval = (f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(val__$1,cljs.core._nth.cljs$lang$arity$2(cicoll,n)) : f.call(null,val__$1,cljs.core._nth.cljs$lang$arity$2(cicoll,n)));
if(cljs.core.reduced_QMARK_(nval))
{return (cljs.core.deref.cljs$lang$arity$1 ? cljs.core.deref.cljs$lang$arity$1(nval) : cljs.core.deref.call(null,nval));
} else
{{
var G__25646 = nval;
var G__25647 = (n + 1);
val__$1 = G__25646;
n = G__25647;
continue;
}
}
} else
{return val__$1;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case 2:
return ci_reduce__2.call(this,cicoll,f);
case 3:
return ci_reduce__3.call(this,cicoll,f,val);
case 4:
return ci_reduce__4.call(this,cicoll,f,val,idx);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ci_reduce.cljs$lang$arity$2 = ci_reduce__2;
ci_reduce.cljs$lang$arity$3 = ci_reduce__3;
ci_reduce.cljs$lang$arity$4 = ci_reduce__4;
return ci_reduce;
})()
;
cljs.core.array_reduce = (function() {
var array_reduce = null;
var array_reduce__2 = (function (arr,f){
var cnt = arr.length;
if((arr.length === 0))
{return (f.cljs$lang$arity$0 ? f.cljs$lang$arity$0() : f.call(null));
} else
{var val = (arr[0]);
var n = 1;
while(true){
if((n < cnt))
{var nval = (f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(val,(arr[n])) : f.call(null,val,(arr[n])));
if(cljs.core.reduced_QMARK_(nval))
{return (cljs.core.deref.cljs$lang$arity$1 ? cljs.core.deref.cljs$lang$arity$1(nval) : cljs.core.deref.call(null,nval));
} else
{{
var G__25648 = nval;
var G__25649 = (n + 1);
val = G__25648;
n = G__25649;
continue;
}
}
} else
{return val;
}
break;
}
}
});
var array_reduce__3 = (function (arr,f,val){
var cnt = arr.length;
var val__$1 = val;
var n = 0;
while(true){
if((n < cnt))
{var nval = (f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(val__$1,(arr[n])) : f.call(null,val__$1,(arr[n])));
if(cljs.core.reduced_QMARK_(nval))
{return (cljs.core.deref.cljs$lang$arity$1 ? cljs.core.deref.cljs$lang$arity$1(nval) : cljs.core.deref.call(null,nval));
} else
{{
var G__25650 = nval;
var G__25651 = (n + 1);
val__$1 = G__25650;
n = G__25651;
continue;
}
}
} else
{return val__$1;
}
break;
}
});
var array_reduce__4 = (function (arr,f,val,idx){
var cnt = arr.length;
var val__$1 = val;
var n = idx;
while(true){
if((n < cnt))
{var nval = (f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(val__$1,(arr[n])) : f.call(null,val__$1,(arr[n])));
if(cljs.core.reduced_QMARK_(nval))
{return (cljs.core.deref.cljs$lang$arity$1 ? cljs.core.deref.cljs$lang$arity$1(nval) : cljs.core.deref.call(null,nval));
} else
{{
var G__25652 = nval;
var G__25653 = (n + 1);
val__$1 = G__25652;
n = G__25653;
continue;
}
}
} else
{return val__$1;
}
break;
}
});
array_reduce = function(arr,f,val,idx){
switch(arguments.length){
case 2:
return array_reduce__2.call(this,arr,f);
case 3:
return array_reduce__3.call(this,arr,f,val);
case 4:
return array_reduce__4.call(this,arr,f,val,idx);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
array_reduce.cljs$lang$arity$2 = array_reduce__2;
array_reduce.cljs$lang$arity$3 = array_reduce__3;
array_reduce.cljs$lang$arity$4 = array_reduce__4;
return array_reduce;
})()
;
cljs.core.hash_coll = undefined;
cljs.core.cons = undefined;
cljs.core.pr_str = undefined;
cljs.core.RSeq = undefined;
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var G__25655 = x;
if(G__25655)
{if(cljs.core.truth_((function (){var or__3943__auto__ = (G__25655.cljs$lang$protocol_mask$partition0$ & 2);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__25655.cljs$core$ICounted$;
}
})()))
{return true;
} else
{if((!G__25655.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.ICounted,G__25655);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.ICounted,G__25655);
}
});
/**
* Returns true if coll implements nth in constant time
*/
cljs.core.indexed_QMARK_ = (function indexed_QMARK_(x){
var G__25657 = x;
if(G__25657)
{if(cljs.core.truth_((function (){var or__3943__auto__ = (G__25657.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__25657.cljs$core$IIndexed$;
}
})()))
{return true;
} else
{if((!G__25657.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.IIndexed,G__25657);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IIndexed,G__25657);
}
});
goog.provide('cljs.core.IndexedSeq');

/**
* @constructor
*/
cljs.core.IndexedSeq = (function (a,i){
this.a = a;
this.i = i;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 166199550;
})
cljs.core.IndexedSeq.cljs$lang$type = true;
cljs.core.IndexedSeq.cljs$lang$ctorPrSeq = (function (this__5785__auto__){
return (cljs.core.list.cljs$lang$arity$1 ? cljs.core.list.cljs$lang$arity$1("cljs.core/IndexedSeq") : cljs.core.list.call(null,"cljs.core/IndexedSeq"));
});
cljs.core.IndexedSeq.cljs$lang$ctorPrWriter = (function (this__5785__auto__,writer__5786__auto__,opt__5787__auto__){
return cljs.core._write(writer__5786__auto__,"cljs.core/IndexedSeq");
});
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
return (cljs.core.hash_coll.cljs$lang$arity$1 ? cljs.core.hash_coll.cljs$lang$arity$1(coll) : cljs.core.hash_coll.call(null,coll));
});
cljs.core.IndexedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var self__ = this;
if(((self__.i + 1) < self__.a.length))
{return (new cljs.core.IndexedSeq(self__.a,(self__.i + 1)));
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
return (cljs.core.cons.cljs$lang$arity$2 ? cljs.core.cons.cljs$lang$arity$2(o,coll) : cljs.core.cons.call(null,o,coll));
});
cljs.core.IndexedSeq.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var self__ = this;
var c = coll.cljs$core$ICounted$_count$arity$1(coll);
if((c > 0))
{return (new cljs.core.RSeq(coll,(c - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.IndexedSeq.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return (cljs.core.pr_str.cljs$lang$arity$1 ? cljs.core.pr_str.cljs$lang$arity$1(this$) : cljs.core.pr_str.call(null,this$));
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
if(cljs.core.counted_QMARK_(self__.a))
{return cljs.core.ci_reduce.cljs$lang$arity$4(self__.a,f,(self__.a[self__.i]),(self__.i + 1));
} else
{return cljs.core.ci_reduce.cljs$lang$arity$4(coll,f,(self__.a[self__.i]),0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
if(cljs.core.counted_QMARK_(self__.a))
{return cljs.core.ci_reduce.cljs$lang$arity$4(self__.a,f,start,self__.i);
} else
{return cljs.core.ci_reduce.cljs$lang$arity$4(coll,f,start,0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
return this$;
});
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
return (self__.a.length - self__.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var self__ = this;
return (self__.a[self__.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var self__ = this;
if(((self__.i + 1) < self__.a.length))
{return (new cljs.core.IndexedSeq(self__.a,(self__.i + 1)));
} else
{return (cljs.core.list.cljs$lang$arity$0 ? cljs.core.list.cljs$lang$arity$0() : cljs.core.list.call(null));
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return (cljs.core.equiv_sequential.cljs$lang$arity$2 ? cljs.core.equiv_sequential.cljs$lang$arity$2(coll,other) : cljs.core.equiv_sequential.call(null,coll,other));
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var self__ = this;
var i__$1 = (n + self__.i);
if((i__$1 < self__.a.length))
{return (self__.a[i__$1]);
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var self__ = this;
var i__$1 = (n + self__.i);
if((i__$1 < self__.a.length))
{return (self__.a[i__$1]);
} else
{return not_found;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return cljs.core.List.EMPTY;
});
cljs.core.prim_seq = (function() {
var prim_seq = null;
var prim_seq__1 = (function (prim){
return prim_seq.cljs$lang$arity$2(prim,0);
});
var prim_seq__2 = (function (prim,i){
if((i < prim.length))
{return (new cljs.core.IndexedSeq(prim,i));
} else
{return null;
}
});
prim_seq = function(prim,i){
switch(arguments.length){
case 1:
return prim_seq__1.call(this,prim);
case 2:
return prim_seq__2.call(this,prim,i);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prim_seq.cljs$lang$arity$1 = prim_seq__1;
prim_seq.cljs$lang$arity$2 = prim_seq__2;
return prim_seq;
})()
;
cljs.core.array_seq = (function() {
var array_seq = null;
var array_seq__1 = (function (array){
return cljs.core.prim_seq.cljs$lang$arity$2(array,0);
});
var array_seq__2 = (function (array,i){
return cljs.core.prim_seq.cljs$lang$arity$2(array,i);
});
array_seq = function(array,i){
switch(arguments.length){
case 1:
return array_seq__1.call(this,array);
case 2:
return array_seq__2.call(this,array,i);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
array_seq.cljs$lang$arity$1 = array_seq__1;
array_seq.cljs$lang$arity$2 = array_seq__2;
return array_seq;
})()
;
(cljs.core.IReduce["array"] = true);
(cljs.core._reduce["array"] = (function() {
var G__25658 = null;
var G__25658__2 = (function (array,f){
return cljs.core.ci_reduce.cljs$lang$arity$2(array,f);
});
var G__25658__3 = (function (array,f,start){
return cljs.core.ci_reduce.cljs$lang$arity$3(array,f,start);
});
G__25658 = function(array,f,start){
switch(arguments.length){
case 2:
return G__25658__2.call(this,array,f);
case 3:
return G__25658__3.call(this,array,f,start);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__25658;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__25659 = null;
var G__25659__2 = (function (array,k){
return (array[k]);
});
var G__25659__3 = (function (array,k,not_found){
return cljs.core._nth.cljs$lang$arity$3(array,k,not_found);
});
G__25659 = function(array,k,not_found){
switch(arguments.length){
case 2:
return G__25659__2.call(this,array,k);
case 3:
return G__25659__3.call(this,array,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__25659;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__25660 = null;
var G__25660__2 = (function (array,n){
if((n < array.length))
{return (array[n]);
} else
{return null;
}
});
var G__25660__3 = (function (array,n,not_found){
if((n < array.length))
{return (array[n]);
} else
{return not_found;
}
});
G__25660 = function(array,n,not_found){
switch(arguments.length){
case 2:
return G__25660__2.call(this,array,n);
case 3:
return G__25660__3.call(this,array,n,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__25660;
})()
);
(cljs.core.ICounted["array"] = true);
(cljs.core._count["array"] = (function (a){
return a.length;
}));
(cljs.core.ISeqable["array"] = true);
(cljs.core._seq["array"] = (function (array){
return cljs.core.array_seq.cljs$lang$arity$2(array,0);
}));
cljs.core.with_meta = undefined;
goog.provide('cljs.core.RSeq');

/**
* @constructor
*/
cljs.core.RSeq = (function (ci,i,meta){
this.ci = ci;
this.i = i;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850574;
})
cljs.core.RSeq.cljs$lang$type = true;
cljs.core.RSeq.cljs$lang$ctorPrSeq = (function (this__5785__auto__){
return (cljs.core.list.cljs$lang$arity$1 ? cljs.core.list.cljs$lang$arity$1("cljs.core/RSeq") : cljs.core.list.call(null,"cljs.core/RSeq"));
});
cljs.core.RSeq.cljs$lang$ctorPrWriter = (function (this__5785__auto__,writer__5786__auto__,opt__5787__auto__){
return cljs.core._write(writer__5786__auto__,"cljs.core/RSeq");
});
cljs.core.RSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
return (cljs.core.hash_coll.cljs$lang$arity$1 ? cljs.core.hash_coll.cljs$lang$arity$1(coll) : cljs.core.hash_coll.call(null,coll));
});
cljs.core.RSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
return (cljs.core.cons.cljs$lang$arity$2 ? cljs.core.cons.cljs$lang$arity$2(o,coll) : cljs.core.cons.call(null,o,coll));
});
cljs.core.RSeq.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return (cljs.core.pr_str.cljs$lang$arity$1 ? cljs.core.pr_str.cljs$lang$arity$1(this$) : cljs.core.pr_str.call(null,this$));
});
cljs.core.RSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
return coll;
});
cljs.core.RSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
return (self__.i + 1);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
return cljs.core._nth.cljs$lang$arity$2(self__.ci,self__.i);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
if((self__.i > 0))
{return (new cljs.core.RSeq(self__.ci,(self__.i - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.RSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return (cljs.core.equiv_sequential.cljs$lang$arity$2 ? cljs.core.equiv_sequential.cljs$lang$arity$2(coll,other) : cljs.core.equiv_sequential.call(null,coll,other));
});
cljs.core.RSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var self__ = this;
return (new cljs.core.RSeq(self__.ci,self__.i,new_meta));
});
cljs.core.RSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
cljs.core.RSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return (cljs.core.with_meta.cljs$lang$arity$2 ? cljs.core.with_meta.cljs$lang$arity$2(cljs.core.List.EMPTY,self__.meta) : cljs.core.with_meta.call(null,cljs.core.List.EMPTY,self__.meta));
});
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){
return cljs.core.first(cljs.core.next(coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){
return cljs.core.first(cljs.core.first(coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){
return cljs.core.next(cljs.core.first(coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){
return cljs.core.first(cljs.core.next(coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){
return cljs.core.next(cljs.core.next(coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){
while(true){
var sn = cljs.core.next(s);
if(!((sn == null)))
{{
var G__25661 = sn;
s = G__25661;
continue;
}
} else
{return cljs.core.first(s);
}
break;
}
});
(cljs.core.IEquiv["_"] = true);
(cljs.core._equiv["_"] = (function (x,o){
return (x === o);
}));
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj = (function() {
var conj = null;
var conj__2 = (function (coll,x){
return cljs.core._conj(coll,x);
});
var conj__3 = (function() { 
var G__25662__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__25663 = conj.cljs$lang$arity$2(coll,x);
var G__25664 = cljs.core.first(xs);
var G__25665 = cljs.core.next(xs);
coll = G__25663;
x = G__25664;
xs = G__25665;
continue;
}
} else
{return conj.cljs$lang$arity$2(coll,x);
}
break;
}
};
var G__25662 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__25662__delegate.call(this, coll, x, xs);
};
G__25662.cljs$lang$maxFixedArity = 2;
G__25662.cljs$lang$applyTo = (function (arglist__25666){
var coll = cljs.core.first(arglist__25666);
var x = cljs.core.first(cljs.core.next(arglist__25666));
var xs = cljs.core.rest(cljs.core.next(arglist__25666));
return G__25662__delegate(coll, x, xs);
});
G__25662.cljs$lang$arity$variadic = G__25662__delegate;
return G__25662;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case 2:
return conj__2.call(this,coll,x);
default:
return conj__3.cljs$lang$arity$variadic(coll,x, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__3.cljs$lang$applyTo;
conj.cljs$lang$arity$2 = conj__2;
conj.cljs$lang$arity$variadic = conj__3.cljs$lang$arity$variadic;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){
return cljs.core._empty(coll);
});
cljs.core.accumulating_seq_count = (function accumulating_seq_count(coll){
var s = cljs.core.seq(coll);
var acc = 0;
while(true){
if(cljs.core.counted_QMARK_(s))
{return (acc + cljs.core._count(s));
} else
{{
var G__25667 = cljs.core.next(s);
var G__25668 = (acc + 1);
s = G__25667;
acc = G__25668;
continue;
}
}
break;
}
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){
if(cljs.core.counted_QMARK_(coll))
{return cljs.core._count(coll);
} else
{return cljs.core.accumulating_seq_count(coll);
}
});
cljs.core.linear_traversal_nth = (function() {
var linear_traversal_nth = null;
var linear_traversal_nth__2 = (function (coll,n){
while(true){
if((coll == null))
{throw (new Error("Index out of bounds"));
} else
{if((n === 0))
{if(cljs.core.seq(coll))
{return cljs.core.first(coll);
} else
{throw (new Error("Index out of bounds"));
}
} else
{if(cljs.core.indexed_QMARK_(coll))
{return cljs.core._nth.cljs$lang$arity$2(coll,n);
} else
{if(cljs.core.seq(coll))
{{
var G__25669 = cljs.core.next(coll);
var G__25670 = (n - 1);
coll = G__25669;
n = G__25670;
continue;
}
} else
{if("\uFDD0:else")
{throw (new Error("Index out of bounds"));
} else
{return null;
}
}
}
}
}
break;
}
});
var linear_traversal_nth__3 = (function (coll,n,not_found){
while(true){
if((coll == null))
{return not_found;
} else
{if((n === 0))
{if(cljs.core.seq(coll))
{return cljs.core.first(coll);
} else
{return not_found;
}
} else
{if(cljs.core.indexed_QMARK_(coll))
{return cljs.core._nth.cljs$lang$arity$3(coll,n,not_found);
} else
{if(cljs.core.seq(coll))
{{
var G__25671 = cljs.core.next(coll);
var G__25672 = (n - 1);
var G__25673 = not_found;
coll = G__25671;
n = G__25672;
not_found = G__25673;
continue;
}
} else
{if("\uFDD0:else")
{return not_found;
} else
{return null;
}
}
}
}
}
break;
}
});
linear_traversal_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return linear_traversal_nth__2.call(this,coll,n);
case 3:
return linear_traversal_nth__3.call(this,coll,n,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
linear_traversal_nth.cljs$lang$arity$2 = linear_traversal_nth__2;
linear_traversal_nth.cljs$lang$arity$3 = linear_traversal_nth__3;
return linear_traversal_nth;
})()
;
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__2 = (function (coll,n){
if((coll == null))
{return null;
} else
{if(cljs.core.truth_((function (){var G__25676 = coll;
if(G__25676)
{if(cljs.core.truth_((function (){var or__3943__auto__ = (G__25676.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__25676.cljs$core$IIndexed$;
}
})()))
{return true;
} else
{if((!G__25676.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.IIndexed,G__25676);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IIndexed,G__25676);
}
})()))
{return cljs.core._nth.cljs$lang$arity$2(coll,Math.floor(n));
} else
{return cljs.core.linear_traversal_nth.cljs$lang$arity$2(coll,Math.floor(n));
}
}
});
var nth__3 = (function (coll,n,not_found){
if(!((coll == null)))
{if(cljs.core.truth_((function (){var G__25677 = coll;
if(G__25677)
{if(cljs.core.truth_((function (){var or__3943__auto__ = (G__25677.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__25677.cljs$core$IIndexed$;
}
})()))
{return true;
} else
{if((!G__25677.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.IIndexed,G__25677);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IIndexed,G__25677);
}
})()))
{return cljs.core._nth.cljs$lang$arity$3(coll,Math.floor(n),not_found);
} else
{return cljs.core.linear_traversal_nth.cljs$lang$arity$3(coll,Math.floor(n),not_found);
}
} else
{return not_found;
}
});
nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return nth__2.call(this,coll,n);
case 3:
return nth__3.call(this,coll,n,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
nth.cljs$lang$arity$2 = nth__2;
nth.cljs$lang$arity$3 = nth__3;
return nth;
})()
;
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__2 = (function (o,k){
return cljs.core._lookup.cljs$lang$arity$2(o,k);
});
var get__3 = (function (o,k,not_found){
return cljs.core._lookup.cljs$lang$arity$3(o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case 2:
return get__2.call(this,o,k);
case 3:
return get__3.call(this,o,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get.cljs$lang$arity$2 = get__2;
get.cljs$lang$arity$3 = get__3;
return get;
})()
;
/**
* assoc[iate]. When applied to a map, returns a new map of the
* same (hashed/sorted) type, that contains the mapping of key(s) to
* val(s). When applied to a vector, returns a new vector that
* contains val at index.
* @param {...*} var_args
*/
cljs.core.assoc = (function() {
var assoc = null;
var assoc__3 = (function (coll,k,v){
return cljs.core._assoc(coll,k,v);
});
var assoc__4 = (function() { 
var G__25678__delegate = function (coll,k,v,kvs){
while(true){
var ret = assoc.cljs$lang$arity$3(coll,k,v);
if(cljs.core.truth_(kvs))
{{
var G__25679 = ret;
var G__25680 = cljs.core.first(kvs);
var G__25681 = cljs.core.second(kvs);
var G__25682 = cljs.core.nnext(kvs);
coll = G__25679;
k = G__25680;
v = G__25681;
kvs = G__25682;
continue;
}
} else
{return ret;
}
break;
}
};
var G__25678 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__25678__delegate.call(this, coll, k, v, kvs);
};
G__25678.cljs$lang$maxFixedArity = 3;
G__25678.cljs$lang$applyTo = (function (arglist__25683){
var coll = cljs.core.first(arglist__25683);
var k = cljs.core.first(cljs.core.next(arglist__25683));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__25683)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__25683)));
return G__25678__delegate(coll, k, v, kvs);
});
G__25678.cljs$lang$arity$variadic = G__25678__delegate;
return G__25678;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 3:
return assoc__3.call(this,coll,k,v);
default:
return assoc__4.cljs$lang$arity$variadic(coll,k,v, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__4.cljs$lang$applyTo;
assoc.cljs$lang$arity$3 = assoc__3;
assoc.cljs$lang$arity$variadic = assoc__4.cljs$lang$arity$variadic;
return assoc;
})()
;
/**
* dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
* that does not contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc = (function() {
var dissoc = null;
var dissoc__1 = (function (coll){
return coll;
});
var dissoc__2 = (function (coll,k){
return cljs.core._dissoc(coll,k);
});
var dissoc__3 = (function() { 
var G__25684__delegate = function (coll,k,ks){
while(true){
var ret = dissoc.cljs$lang$arity$2(coll,k);
if(cljs.core.truth_(ks))
{{
var G__25685 = ret;
var G__25686 = cljs.core.first(ks);
var G__25687 = cljs.core.next(ks);
coll = G__25685;
k = G__25686;
ks = G__25687;
continue;
}
} else
{return ret;
}
break;
}
};
var G__25684 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__25684__delegate.call(this, coll, k, ks);
};
G__25684.cljs$lang$maxFixedArity = 2;
G__25684.cljs$lang$applyTo = (function (arglist__25688){
var coll = cljs.core.first(arglist__25688);
var k = cljs.core.first(cljs.core.next(arglist__25688));
var ks = cljs.core.rest(cljs.core.next(arglist__25688));
return G__25684__delegate(coll, k, ks);
});
G__25684.cljs$lang$arity$variadic = G__25684__delegate;
return G__25684;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return dissoc__1.call(this,coll);
case 2:
return dissoc__2.call(this,coll,k);
default:
return dissoc__3.cljs$lang$arity$variadic(coll,k, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__3.cljs$lang$applyTo;
dissoc.cljs$lang$arity$1 = dissoc__1;
dissoc.cljs$lang$arity$2 = dissoc__2;
dissoc.cljs$lang$arity$variadic = dissoc__3.cljs$lang$arity$variadic;
return dissoc;
})()
;
/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){
return cljs.core._with_meta(o,meta);
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){
if(cljs.core.truth_((function (){var G__25690 = o;
if(G__25690)
{if(cljs.core.truth_((function (){var or__3943__auto__ = (G__25690.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__25690.cljs$core$IMeta$;
}
})()))
{return true;
} else
{if((!G__25690.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.IMeta,G__25690);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IMeta,G__25690);
}
})()))
{return cljs.core._meta(o);
} else
{return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){
return cljs.core._peek(coll);
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){
return cljs.core._pop(coll);
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__1 = (function (coll){
return coll;
});
var disj__2 = (function (coll,k){
return cljs.core._disjoin(coll,k);
});
var disj__3 = (function() { 
var G__25691__delegate = function (coll,k,ks){
while(true){
var ret = disj.cljs$lang$arity$2(coll,k);
if(cljs.core.truth_(ks))
{{
var G__25692 = ret;
var G__25693 = cljs.core.first(ks);
var G__25694 = cljs.core.next(ks);
coll = G__25692;
k = G__25693;
ks = G__25694;
continue;
}
} else
{return ret;
}
break;
}
};
var G__25691 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__25691__delegate.call(this, coll, k, ks);
};
G__25691.cljs$lang$maxFixedArity = 2;
G__25691.cljs$lang$applyTo = (function (arglist__25695){
var coll = cljs.core.first(arglist__25695);
var k = cljs.core.first(cljs.core.next(arglist__25695));
var ks = cljs.core.rest(cljs.core.next(arglist__25695));
return G__25691__delegate(coll, k, ks);
});
G__25691.cljs$lang$arity$variadic = G__25691__delegate;
return G__25691;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return disj__1.call(this,coll);
case 2:
return disj__2.call(this,coll,k);
default:
return disj__3.cljs$lang$arity$variadic(coll,k, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__3.cljs$lang$applyTo;
disj.cljs$lang$arity$1 = disj__1;
disj.cljs$lang$arity$2 = disj__2;
disj.cljs$lang$arity$variadic = disj__3.cljs$lang$arity$variadic;
return disj;
})()
;
cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
cljs.core.add_to_string_hash_cache = (function add_to_string_hash_cache(k){
var h = goog.string.hashCode(k);
(cljs.core.string_hash_cache[k] = h);
cljs.core.string_hash_cache_count = (cljs.core.string_hash_cache_count + 1);
return h;
});
cljs.core.check_string_hash_cache = (function check_string_hash_cache(k){
if((cljs.core.string_hash_cache_count > 255))
{cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
} else
{}
var h = (cljs.core.string_hash_cache[k]);
if(!((h == null)))
{return h;
} else
{return cljs.core.add_to_string_hash_cache(k);
}
});
cljs.core.hash = (function() {
var hash = null;
var hash__1 = (function (o){
return hash.cljs$lang$arity$2(o,true);
});
var hash__2 = (function (o,check_cache){
if(cljs.core.truth_((function (){var and__3941__auto__ = goog.isString(o);
if(and__3941__auto__)
{return check_cache;
} else
{return and__3941__auto__;
}
})()))
{return cljs.core.check_string_hash_cache(o);
} else
{return cljs.core._hash(o);
}
});
hash = function(o,check_cache){
switch(arguments.length){
case 1:
return hash__1.call(this,o);
case 2:
return hash__2.call(this,o,check_cache);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hash.cljs$lang$arity$1 = hash__1;
hash.cljs$lang$arity$2 = hash__2;
return hash;
})()
;
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){
var or__3943__auto__ = (coll == null);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return cljs.core.not(cljs.core.seq(coll));
}
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){
if((x == null))
{return false;
} else
{var G__25697 = x;
if(G__25697)
{if(cljs.core.truth_((function (){var or__3943__auto__ = (G__25697.cljs$lang$protocol_mask$partition0$ & 8);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__25697.cljs$core$ICollection$;
}
})()))
{return true;
} else
{if((!G__25697.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.ICollection,G__25697);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.ICollection,G__25697);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){
if((x == null))
{return false;
} else
{var G__25699 = x;
if(G__25699)
{if(cljs.core.truth_((function (){var or__3943__auto__ = (G__25699.cljs$lang$protocol_mask$partition0$ & 4096);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__25699.cljs$core$ISet$;
}
})()))
{return true;
} else
{if((!G__25699.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.ISet,G__25699);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.ISet,G__25699);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var G__25701 = x;
if(G__25701)
{if(cljs.core.truth_((function (){var or__3943__auto__ = (G__25701.cljs$lang$protocol_mask$partition0$ & 512);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__25701.cljs$core$IAssociative$;
}
})()))
{return true;
} else
{if((!G__25701.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.IAssociative,G__25701);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IAssociative,G__25701);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var G__25703 = x;
if(G__25703)
{if(cljs.core.truth_((function (){var or__3943__auto__ = (G__25703.cljs$lang$protocol_mask$partition0$ & 16777216);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__25703.cljs$core$ISequential$;
}
})()))
{return true;
} else
{if((!G__25703.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.ISequential,G__25703);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.ISequential,G__25703);
}
});
/**
* Returns true if coll satisfies IReduce
*/
cljs.core.reduceable_QMARK_ = (function reduceable_QMARK_(x){
var G__25705 = x;
if(G__25705)
{if(cljs.core.truth_((function (){var or__3943__auto__ = (G__25705.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__25705.cljs$core$IReduce$;
}
})()))
{return true;
} else
{if((!G__25705.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.IReduce,G__25705);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IReduce,G__25705);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if((x == null))
{return false;
} else
{var G__25707 = x;
if(G__25707)
{if(cljs.core.truth_((function (){var or__3943__auto__ = (G__25707.cljs$lang$protocol_mask$partition0$ & 1024);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__25707.cljs$core$IMap$;
}
})()))
{return true;
} else
{if((!G__25707.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.IMap,G__25707);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IMap,G__25707);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var G__25709 = x;
if(G__25709)
{if(cljs.core.truth_((function (){var or__3943__auto__ = (G__25709.cljs$lang$protocol_mask$partition0$ & 16384);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__25709.cljs$core$IVector$;
}
})()))
{return true;
} else
{if((!G__25709.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.IVector,G__25709);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IVector,G__25709);
}
});
cljs.core.chunked_seq_QMARK_ = (function chunked_seq_QMARK_(x){
var G__25711 = x;
if(G__25711)
{if(cljs.core.truth_((function (){var or__3943__auto__ = (G__25711.cljs$lang$protocol_mask$partition1$ & 512);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__25711.cljs$core$IChunkedSeq$;
}
})()))
{return true;
} else
{if((!G__25711.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_(cljs.core.IChunkedSeq,G__25711);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IChunkedSeq,G__25711);
}
});
/**
* @param {...*} var_args
*/
cljs.core.js_obj = (function() {
var js_obj = null;
var js_obj__0 = (function (){
return {};
});
var js_obj__1 = (function() { 
var G__25712__delegate = function (keyvals){
return (cljs.core.apply.cljs$lang$arity$2 ? cljs.core.apply.cljs$lang$arity$2(goog.object.create,keyvals) : cljs.core.apply.call(null,goog.object.create,keyvals));
};
var G__25712 = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__25712__delegate.call(this, keyvals);
};
G__25712.cljs$lang$maxFixedArity = 0;
G__25712.cljs$lang$applyTo = (function (arglist__25713){
var keyvals = cljs.core.seq(arglist__25713);;
return G__25712__delegate(keyvals);
});
G__25712.cljs$lang$arity$variadic = G__25712__delegate;
return G__25712;
})()
;
js_obj = function(var_args){
var keyvals = var_args;
switch(arguments.length){
case 0:
return js_obj__0.call(this);
default:
return js_obj__1.cljs$lang$arity$variadic(cljs.core.array_seq(arguments, 0));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
js_obj.cljs$lang$maxFixedArity = 0;
js_obj.cljs$lang$applyTo = js_obj__1.cljs$lang$applyTo;
js_obj.cljs$lang$arity$0 = js_obj__0;
js_obj.cljs$lang$arity$variadic = js_obj__1.cljs$lang$arity$variadic;
return js_obj;
})()
;
cljs.core.js_keys = (function js_keys(obj){
var keys = [];
goog.object.forEach(obj,(function (val,key,obj__$1){
return keys.push(key);
}));
return keys;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.array_copy = (function array_copy(from,i,to,j,len){
var i__$1 = i;
var j__$1 = j;
var len__$1 = len;
while(true){
if((len__$1 === 0))
{return to;
} else
{(to[j__$1] = (from[i__$1]));
{
var G__25714 = (i__$1 + 1);
var G__25715 = (j__$1 + 1);
var G__25716 = (len__$1 - 1);
i__$1 = G__25714;
j__$1 = G__25715;
len__$1 = G__25716;
continue;
}
}
break;
}
});
cljs.core.array_copy_downward = (function array_copy_downward(from,i,to,j,len){
var i__$1 = (i + (len - 1));
var j__$1 = (j + (len - 1));
var len__$1 = len;
while(true){
if((len__$1 === 0))
{return to;
} else
{(to[j__$1] = (from[i__$1]));
{
var G__25717 = (i__$1 - 1);
var G__25718 = (j__$1 - 1);
var G__25719 = (len__$1 - 1);
i__$1 = G__25717;
j__$1 = G__25718;
len__$1 = G__25719;
continue;
}
}
break;
}
});
cljs.core.lookup_sentinel = {};
/**
* Returns true if x is the value false, false otherwise.
*/
cljs.core.false_QMARK_ = (function false_QMARK_(x){
return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
cljs.core.true_QMARK_ = (function true_QMARK_(x){
return x === true;
});
cljs.core.undefined_QMARK_ = (function undefined_QMARK_(x){
return (void 0 === x);
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){
if((s == null))
{return false;
} else
{var G__25721 = s;
if(G__25721)
{if(cljs.core.truth_((function (){var or__3943__auto__ = (G__25721.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__25721.cljs$core$ISeq$;
}
})()))
{return true;
} else
{if((!G__25721.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.ISeq,G__25721);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.ISeq,G__25721);
}
}
});
/**
* Return true if s satisfies ISeqable
*/
cljs.core.seqable_QMARK_ = (function seqable_QMARK_(s){
var G__25723 = s;
if(G__25723)
{if(cljs.core.truth_((function (){var or__3943__auto__ = (G__25723.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__25723.cljs$core$ISeqable$;
}
})()))
{return true;
} else
{if((!G__25723.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.ISeqable,G__25723);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.ISeqable,G__25723);
}
});
cljs.core.boolean$ = (function boolean$(x){
if(cljs.core.truth_(x))
{return true;
} else
{return false;
}
});
cljs.core.string_QMARK_ = (function string_QMARK_(x){
var and__3941__auto__ = goog.isString(x);
if(and__3941__auto__)
{return cljs.core.not((function (){var or__3943__auto__ = (x.charAt(0) === "\uFDD0");
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return (x.charAt(0) === "\uFDD1");
}
})());
} else
{return and__3941__auto__;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3941__auto__ = goog.isString(x);
if(and__3941__auto__)
{return (x.charAt(0) === "\uFDD0");
} else
{return and__3941__auto__;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3941__auto__ = goog.isString(x);
if(and__3941__auto__)
{return (x.charAt(0) === "\uFDD1");
} else
{return and__3941__auto__;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber(n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
var or__3943__auto__ = goog.isFunction(f);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var G__25725 = f;
if(G__25725)
{if(cljs.core.truth_((function (){var or__3943__auto____$1 = null;
if(cljs.core.truth_(or__3943__auto____$1))
{return or__3943__auto____$1;
} else
{return G__25725.cljs$core$Fn$;
}
})()))
{return true;
} else
{if((!G__25725.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_(cljs.core.Fn,G__25725);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.Fn,G__25725);
}
}
});
cljs.core.ifn_QMARK_ = (function ifn_QMARK_(f){
var or__3943__auto__ = cljs.core.fn_QMARK_(f);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var G__25727 = f;
if(G__25727)
{if(cljs.core.truth_((function (){var or__3943__auto____$1 = (G__25727.cljs$lang$protocol_mask$partition0$ & 1);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{return G__25727.cljs$core$IFn$;
}
})()))
{return true;
} else
{if((!G__25727.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.IFn,G__25727);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IFn,G__25727);
}
}
});
/**
* Returns true if n is an integer.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3941__auto__ = cljs.core.number_QMARK_(n);
if(and__3941__auto__)
{var and__3941__auto____$1 = !(isNaN(n));
if(and__3941__auto____$1)
{var and__3941__auto____$2 = !((n === Infinity));
if(and__3941__auto____$2)
{return (parseFloat(n) === parseInt(n,10));
} else
{return and__3941__auto____$2;
}
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
cljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){
if((cljs.core._lookup.cljs$lang$arity$3(coll,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){
if(cljs.core.truth_((function (){var and__3941__auto__ = !((coll == null));
if(and__3941__auto__)
{var and__3941__auto____$1 = cljs.core.associative_QMARK_(coll);
if(and__3941__auto____$1)
{return cljs.core.contains_QMARK_(coll,k);
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
})()))
{return cljs.core.PersistentVector.fromArray([k,cljs.core._lookup.cljs$lang$arity$2(coll,k)], true);
} else
{return null;
}
});
/**
* Returns true if no two of the arguments are =
* @param {...*} var_args
*/
cljs.core.distinct_QMARK_ = (function() {
var distinct_QMARK_ = null;
var distinct_QMARK___1 = (function (x){
return true;
});
var distinct_QMARK___2 = (function (x,y){
return !(cljs.core._EQ_.cljs$lang$arity$2(x,y));
});
var distinct_QMARK___3 = (function() { 
var G__25728__delegate = function (x,y,more){
if(!(cljs.core._EQ_.cljs$lang$arity$2(x,y)))
{var s = cljs.core.PersistentHashSet.fromArray([y,x]);
var xs = more;
while(true){
var x__$1 = cljs.core.first(xs);
var etc = cljs.core.next(xs);
if(cljs.core.truth_(xs))
{if(cljs.core.contains_QMARK_(s,x__$1))
{return false;
} else
{{
var G__25729 = cljs.core.conj.cljs$lang$arity$2(s,x__$1);
var G__25730 = etc;
s = G__25729;
xs = G__25730;
continue;
}
}
} else
{return true;
}
break;
}
} else
{return false;
}
};
var G__25728 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__25728__delegate.call(this, x, y, more);
};
G__25728.cljs$lang$maxFixedArity = 2;
G__25728.cljs$lang$applyTo = (function (arglist__25731){
var x = cljs.core.first(arglist__25731);
var y = cljs.core.first(cljs.core.next(arglist__25731));
var more = cljs.core.rest(cljs.core.next(arglist__25731));
return G__25728__delegate(x, y, more);
});
G__25728.cljs$lang$arity$variadic = G__25728__delegate;
return G__25728;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return distinct_QMARK___1.call(this,x);
case 2:
return distinct_QMARK___2.call(this,x,y);
default:
return distinct_QMARK___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___3.cljs$lang$applyTo;
distinct_QMARK_.cljs$lang$arity$1 = distinct_QMARK___1;
distinct_QMARK_.cljs$lang$arity$2 = distinct_QMARK___2;
distinct_QMARK_.cljs$lang$arity$variadic = distinct_QMARK___3.cljs$lang$arity$variadic;
return distinct_QMARK_;
})()
;
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses IComparable if available and google.array.defaultCompare for objects
* of the same type and special-cases nil to be less than any other object.
*/
cljs.core.compare = (function compare(x,y){
if((x === y))
{return 0;
} else
{if((x == null))
{return -1;
} else
{if((y == null))
{return 1;
} else
{if((cljs.core.type(x) === cljs.core.type(y)))
{if(cljs.core.truth_((function (){var G__25733 = x;
if(G__25733)
{if(cljs.core.truth_((function (){var or__3943__auto__ = (G__25733.cljs$lang$protocol_mask$partition1$ & 2048);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__25733.cljs$core$IComparable$;
}
})()))
{return true;
} else
{if((!G__25733.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_(cljs.core.IComparable,G__25733);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IComparable,G__25733);
}
})()))
{return cljs.core._compare(x,y);
} else
{return goog.array.defaultCompare(x,y);
}
} else
{if("\uFDD0:else")
{throw (new Error("compare on non-nil objects of different types"));
} else
{return null;
}
}
}
}
}
});
/**
* Compare indexed collection.
*/
cljs.core.compare_indexed = (function() {
var compare_indexed = null;
var compare_indexed__2 = (function (xs,ys){
var xl = cljs.core.count(xs);
var yl = cljs.core.count(ys);
if((xl < yl))
{return -1;
} else
{if((xl > yl))
{return 1;
} else
{if("\uFDD0:else")
{return compare_indexed.cljs$lang$arity$4(xs,ys,xl,0);
} else
{return null;
}
}
}
});
var compare_indexed__4 = (function (xs,ys,len,n){
while(true){
var d = cljs.core.compare(cljs.core.nth.cljs$lang$arity$2(xs,n),cljs.core.nth.cljs$lang$arity$2(ys,n));
if(cljs.core.truth_((function (){var and__3941__auto__ = (d === 0);
if(and__3941__auto__)
{return ((n + 1) < len);
} else
{return and__3941__auto__;
}
})()))
{{
var G__25734 = xs;
var G__25735 = ys;
var G__25736 = len;
var G__25737 = (n + 1);
xs = G__25734;
ys = G__25735;
len = G__25736;
n = G__25737;
continue;
}
} else
{return d;
}
break;
}
});
compare_indexed = function(xs,ys,len,n){
switch(arguments.length){
case 2:
return compare_indexed__2.call(this,xs,ys);
case 4:
return compare_indexed__4.call(this,xs,ys,len,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compare_indexed.cljs$lang$arity$2 = compare_indexed__2;
compare_indexed.cljs$lang$arity$4 = compare_indexed__4;
return compare_indexed;
})()
;
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){
if(cljs.core._EQ_.cljs$lang$arity$2(f,cljs.core.compare))
{return cljs.core.compare;
} else
{return (function (x,y){
var r = (f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(x,y) : f.call(null,x,y));
if(cljs.core.number_QMARK_(r))
{return r;
} else
{if(cljs.core.truth_(r))
{return -1;
} else
{if(cljs.core.truth_((f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(y,x) : f.call(null,y,x))))
{return 1;
} else
{return 0;
}
}
}
});
}
});
cljs.core.to_array = undefined;
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__1 = (function (coll){
return sort.cljs$lang$arity$2(cljs.core.compare,coll);
});
var sort__2 = (function (comp,coll){
if(cljs.core.seq(coll))
{var a = (cljs.core.to_array.cljs$lang$arity$1 ? cljs.core.to_array.cljs$lang$arity$1(coll) : cljs.core.to_array.call(null,coll));
goog.array.stableSort(a,cljs.core.fn__GT_comparator(comp));
return cljs.core.seq(a);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case 1:
return sort__1.call(this,comp);
case 2:
return sort__2.call(this,comp,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sort.cljs$lang$arity$1 = sort__1;
sort.cljs$lang$arity$2 = sort__2;
return sort;
})()
;
/**
* Returns a sorted sequence of the items in coll, where the sort
* order is determined by comparing (keyfn item).  Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort_by = (function() {
var sort_by = null;
var sort_by__2 = (function (keyfn,coll){
return sort_by.cljs$lang$arity$3(keyfn,cljs.core.compare,coll);
});
var sort_by__3 = (function (keyfn,comp,coll){
return cljs.core.sort.cljs$lang$arity$2((function (x,y){
return cljs.core.fn__GT_comparator(comp).call(null,(keyfn.cljs$lang$arity$1 ? keyfn.cljs$lang$arity$1(x) : keyfn.call(null,x)),(keyfn.cljs$lang$arity$1 ? keyfn.cljs$lang$arity$1(y) : keyfn.call(null,y)));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case 2:
return sort_by__2.call(this,keyfn,comp);
case 3:
return sort_by__3.call(this,keyfn,comp,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sort_by.cljs$lang$arity$2 = sort_by__2;
sort_by.cljs$lang$arity$3 = sort_by__3;
return sort_by;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__2 = (function (f,coll){
var temp__4090__auto__ = cljs.core.seq(coll);
if(temp__4090__auto__)
{var s = temp__4090__auto__;
return (cljs.core.reduce.cljs$lang$arity$3 ? cljs.core.reduce.cljs$lang$arity$3(f,cljs.core.first(s),cljs.core.next(s)) : cljs.core.reduce.call(null,f,cljs.core.first(s),cljs.core.next(s)));
} else
{return (f.cljs$lang$arity$0 ? f.cljs$lang$arity$0() : f.call(null));
}
});
var seq_reduce__3 = (function (f,val,coll){
var val__$1 = val;
var coll__$1 = cljs.core.seq(coll);
while(true){
if(coll__$1)
{var nval = (f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(val__$1,cljs.core.first(coll__$1)) : f.call(null,val__$1,cljs.core.first(coll__$1)));
if(cljs.core.reduced_QMARK_(nval))
{return (cljs.core.deref.cljs$lang$arity$1 ? cljs.core.deref.cljs$lang$arity$1(nval) : cljs.core.deref.call(null,nval));
} else
{{
var G__25738 = nval;
var G__25739 = cljs.core.next(coll__$1);
val__$1 = G__25738;
coll__$1 = G__25739;
continue;
}
}
} else
{return val__$1;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return seq_reduce__2.call(this,f,val);
case 3:
return seq_reduce__3.call(this,f,val,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
seq_reduce.cljs$lang$arity$2 = seq_reduce__2;
seq_reduce.cljs$lang$arity$3 = seq_reduce__3;
return seq_reduce;
})()
;
cljs.core.vec = undefined;
/**
* Return a random permutation of coll
*/
cljs.core.shuffle = (function shuffle(coll){
var a = (cljs.core.to_array.cljs$lang$arity$1 ? cljs.core.to_array.cljs$lang$arity$1(coll) : cljs.core.to_array.call(null,coll));
goog.array.shuffle(a);
return (cljs.core.vec.cljs$lang$arity$1 ? cljs.core.vec.cljs$lang$arity$1(a) : cljs.core.vec.call(null,a));
});
/**
* f should be a function of 2 arguments. If val is not supplied,
* returns the result of applying f to the first 2 items in coll, then
* applying f to that result and the 3rd item, etc. If coll contains no
* items, f must accept no arguments as well, and reduce returns the
* result of calling f with no arguments.  If coll has only 1 item, it
* is returned and f is not called.  If val is supplied, returns the
* result of applying f to val and the first item in coll, then
* applying f to that result and the 2nd item, etc. If coll contains no
* items, returns val and f is not called.
*/
cljs.core.reduce = (function() {
var reduce = null;
var reduce__2 = (function (f,coll){
if(cljs.core.truth_((function (){var G__25742 = coll;
if(G__25742)
{if(cljs.core.truth_((function (){var or__3943__auto__ = (G__25742.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__25742.cljs$core$IReduce$;
}
})()))
{return true;
} else
{if((!G__25742.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.IReduce,G__25742);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IReduce,G__25742);
}
})()))
{return cljs.core._reduce.cljs$lang$arity$2(coll,f);
} else
{return cljs.core.seq_reduce.cljs$lang$arity$2(f,coll);
}
});
var reduce__3 = (function (f,val,coll){
if(cljs.core.truth_((function (){var G__25743 = coll;
if(G__25743)
{if(cljs.core.truth_((function (){var or__3943__auto__ = (G__25743.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__25743.cljs$core$IReduce$;
}
})()))
{return true;
} else
{if((!G__25743.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.IReduce,G__25743);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IReduce,G__25743);
}
})()))
{return cljs.core._reduce.cljs$lang$arity$3(coll,f,val);
} else
{return cljs.core.seq_reduce.cljs$lang$arity$3(f,val,coll);
}
});
reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return reduce__2.call(this,f,val);
case 3:
return reduce__3.call(this,f,val,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reduce.cljs$lang$arity$2 = reduce__2;
reduce.cljs$lang$arity$3 = reduce__3;
return reduce;
})()
;
/**
* Reduces an associative collection. f should be a function of 3
* arguments. Returns the result of applying f to init, the first key
* and the first value in coll, then applying f to that result and the
* 2nd key and value, etc. If coll contains no entries, returns init
* and f is not called. Note that reduce-kv is supported on vectors,
* where the keys will be the ordinals.
*/
cljs.core.reduce_kv = (function reduce_kv(f,init,coll){
return cljs.core._kv_reduce(coll,f,init);
});
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___0 = (function (){
return 0;
});
var _PLUS___1 = (function (x){
return x;
});
var _PLUS___2 = (function (x,y){
return (x + y);
});
var _PLUS___3 = (function() { 
var G__25744__delegate = function (x,y,more){
return cljs.core.reduce.cljs$lang$arity$3(_PLUS_,(x + y),more);
};
var G__25744 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__25744__delegate.call(this, x, y, more);
};
G__25744.cljs$lang$maxFixedArity = 2;
G__25744.cljs$lang$applyTo = (function (arglist__25745){
var x = cljs.core.first(arglist__25745);
var y = cljs.core.first(cljs.core.next(arglist__25745));
var more = cljs.core.rest(cljs.core.next(arglist__25745));
return G__25744__delegate(x, y, more);
});
G__25744.cljs$lang$arity$variadic = G__25744__delegate;
return G__25744;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _PLUS___0.call(this);
case 1:
return _PLUS___1.call(this,x);
case 2:
return _PLUS___2.call(this,x,y);
default:
return _PLUS___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___3.cljs$lang$applyTo;
_PLUS_.cljs$lang$arity$0 = _PLUS___0;
_PLUS_.cljs$lang$arity$1 = _PLUS___1;
_PLUS_.cljs$lang$arity$2 = _PLUS___2;
_PLUS_.cljs$lang$arity$variadic = _PLUS___3.cljs$lang$arity$variadic;
return _PLUS_;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core._ = (function() {
var _ = null;
var ___1 = (function (x){
return (- x);
});
var ___2 = (function (x,y){
return (x - y);
});
var ___3 = (function() { 
var G__25746__delegate = function (x,y,more){
return cljs.core.reduce.cljs$lang$arity$3(_,(x - y),more);
};
var G__25746 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__25746__delegate.call(this, x, y, more);
};
G__25746.cljs$lang$maxFixedArity = 2;
G__25746.cljs$lang$applyTo = (function (arglist__25747){
var x = cljs.core.first(arglist__25747);
var y = cljs.core.first(cljs.core.next(arglist__25747));
var more = cljs.core.rest(cljs.core.next(arglist__25747));
return G__25746__delegate(x, y, more);
});
G__25746.cljs$lang$arity$variadic = G__25746__delegate;
return G__25746;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return ___1.call(this,x);
case 2:
return ___2.call(this,x,y);
default:
return ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___3.cljs$lang$applyTo;
_.cljs$lang$arity$1 = ___1;
_.cljs$lang$arity$2 = ___2;
_.cljs$lang$arity$variadic = ___3.cljs$lang$arity$variadic;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___0 = (function (){
return 1;
});
var _STAR___1 = (function (x){
return x;
});
var _STAR___2 = (function (x,y){
return (x * y);
});
var _STAR___3 = (function() { 
var G__25748__delegate = function (x,y,more){
return cljs.core.reduce.cljs$lang$arity$3(_STAR_,(x * y),more);
};
var G__25748 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__25748__delegate.call(this, x, y, more);
};
G__25748.cljs$lang$maxFixedArity = 2;
G__25748.cljs$lang$applyTo = (function (arglist__25749){
var x = cljs.core.first(arglist__25749);
var y = cljs.core.first(cljs.core.next(arglist__25749));
var more = cljs.core.rest(cljs.core.next(arglist__25749));
return G__25748__delegate(x, y, more);
});
G__25748.cljs$lang$arity$variadic = G__25748__delegate;
return G__25748;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _STAR___0.call(this);
case 1:
return _STAR___1.call(this,x);
case 2:
return _STAR___2.call(this,x,y);
default:
return _STAR___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___3.cljs$lang$applyTo;
_STAR_.cljs$lang$arity$0 = _STAR___0;
_STAR_.cljs$lang$arity$1 = _STAR___1;
_STAR_.cljs$lang$arity$2 = _STAR___2;
_STAR_.cljs$lang$arity$variadic = _STAR___3.cljs$lang$arity$variadic;
return _STAR_;
})()
;
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___1 = (function (x){
return _SLASH_.cljs$lang$arity$2(1,x);
});
var _SLASH___2 = (function (x,y){
return (x / y);
});
var _SLASH___3 = (function() { 
var G__25750__delegate = function (x,y,more){
return cljs.core.reduce.cljs$lang$arity$3(_SLASH_,_SLASH_.cljs$lang$arity$2(x,y),more);
};
var G__25750 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__25750__delegate.call(this, x, y, more);
};
G__25750.cljs$lang$maxFixedArity = 2;
G__25750.cljs$lang$applyTo = (function (arglist__25751){
var x = cljs.core.first(arglist__25751);
var y = cljs.core.first(cljs.core.next(arglist__25751));
var more = cljs.core.rest(cljs.core.next(arglist__25751));
return G__25750__delegate(x, y, more);
});
G__25750.cljs$lang$arity$variadic = G__25750__delegate;
return G__25750;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _SLASH___1.call(this,x);
case 2:
return _SLASH___2.call(this,x,y);
default:
return _SLASH___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___3.cljs$lang$applyTo;
_SLASH_.cljs$lang$arity$1 = _SLASH___1;
_SLASH_.cljs$lang$arity$2 = _SLASH___2;
_SLASH_.cljs$lang$arity$variadic = _SLASH___3.cljs$lang$arity$variadic;
return _SLASH_;
})()
;
/**
* Returns non-nil if nums are in monotonically increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT_ = (function() {
var _LT_ = null;
var _LT___1 = (function (x){
return true;
});
var _LT___2 = (function (x,y){
return (x < y);
});
var _LT___3 = (function() { 
var G__25752__delegate = function (x,y,more){
while(true){
if((x < y))
{if(cljs.core.next(more))
{{
var G__25753 = y;
var G__25754 = cljs.core.first(more);
var G__25755 = cljs.core.next(more);
x = G__25753;
y = G__25754;
more = G__25755;
continue;
}
} else
{return (y < cljs.core.first(more));
}
} else
{return false;
}
break;
}
};
var G__25752 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__25752__delegate.call(this, x, y, more);
};
G__25752.cljs$lang$maxFixedArity = 2;
G__25752.cljs$lang$applyTo = (function (arglist__25756){
var x = cljs.core.first(arglist__25756);
var y = cljs.core.first(cljs.core.next(arglist__25756));
var more = cljs.core.rest(cljs.core.next(arglist__25756));
return G__25752__delegate(x, y, more);
});
G__25752.cljs$lang$arity$variadic = G__25752__delegate;
return G__25752;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT___1.call(this,x);
case 2:
return _LT___2.call(this,x,y);
default:
return _LT___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___3.cljs$lang$applyTo;
_LT_.cljs$lang$arity$1 = _LT___1;
_LT_.cljs$lang$arity$2 = _LT___2;
_LT_.cljs$lang$arity$variadic = _LT___3.cljs$lang$arity$variadic;
return _LT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT__EQ_ = (function() {
var _LT__EQ_ = null;
var _LT__EQ___1 = (function (x){
return true;
});
var _LT__EQ___2 = (function (x,y){
return (x <= y);
});
var _LT__EQ___3 = (function() { 
var G__25757__delegate = function (x,y,more){
while(true){
if((x <= y))
{if(cljs.core.next(more))
{{
var G__25758 = y;
var G__25759 = cljs.core.first(more);
var G__25760 = cljs.core.next(more);
x = G__25758;
y = G__25759;
more = G__25760;
continue;
}
} else
{return (y <= cljs.core.first(more));
}
} else
{return false;
}
break;
}
};
var G__25757 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__25757__delegate.call(this, x, y, more);
};
G__25757.cljs$lang$maxFixedArity = 2;
G__25757.cljs$lang$applyTo = (function (arglist__25761){
var x = cljs.core.first(arglist__25761);
var y = cljs.core.first(cljs.core.next(arglist__25761));
var more = cljs.core.rest(cljs.core.next(arglist__25761));
return G__25757__delegate(x, y, more);
});
G__25757.cljs$lang$arity$variadic = G__25757__delegate;
return G__25757;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT__EQ___1.call(this,x);
case 2:
return _LT__EQ___2.call(this,x,y);
default:
return _LT__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___3.cljs$lang$applyTo;
_LT__EQ_.cljs$lang$arity$1 = _LT__EQ___1;
_LT__EQ_.cljs$lang$arity$2 = _LT__EQ___2;
_LT__EQ_.cljs$lang$arity$variadic = _LT__EQ___3.cljs$lang$arity$variadic;
return _LT__EQ_;
})()
;
/**
* Returns non-nil if nums are in monotonically decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT_ = (function() {
var _GT_ = null;
var _GT___1 = (function (x){
return true;
});
var _GT___2 = (function (x,y){
return (x > y);
});
var _GT___3 = (function() { 
var G__25762__delegate = function (x,y,more){
while(true){
if((x > y))
{if(cljs.core.next(more))
{{
var G__25763 = y;
var G__25764 = cljs.core.first(more);
var G__25765 = cljs.core.next(more);
x = G__25763;
y = G__25764;
more = G__25765;
continue;
}
} else
{return (y > cljs.core.first(more));
}
} else
{return false;
}
break;
}
};
var G__25762 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__25762__delegate.call(this, x, y, more);
};
G__25762.cljs$lang$maxFixedArity = 2;
G__25762.cljs$lang$applyTo = (function (arglist__25766){
var x = cljs.core.first(arglist__25766);
var y = cljs.core.first(cljs.core.next(arglist__25766));
var more = cljs.core.rest(cljs.core.next(arglist__25766));
return G__25762__delegate(x, y, more);
});
G__25762.cljs$lang$arity$variadic = G__25762__delegate;
return G__25762;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT___1.call(this,x);
case 2:
return _GT___2.call(this,x,y);
default:
return _GT___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___3.cljs$lang$applyTo;
_GT_.cljs$lang$arity$1 = _GT___1;
_GT_.cljs$lang$arity$2 = _GT___2;
_GT_.cljs$lang$arity$variadic = _GT___3.cljs$lang$arity$variadic;
return _GT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT__EQ_ = (function() {
var _GT__EQ_ = null;
var _GT__EQ___1 = (function (x){
return true;
});
var _GT__EQ___2 = (function (x,y){
return (x >= y);
});
var _GT__EQ___3 = (function() { 
var G__25767__delegate = function (x,y,more){
while(true){
if((x >= y))
{if(cljs.core.next(more))
{{
var G__25768 = y;
var G__25769 = cljs.core.first(more);
var G__25770 = cljs.core.next(more);
x = G__25768;
y = G__25769;
more = G__25770;
continue;
}
} else
{return (y >= cljs.core.first(more));
}
} else
{return false;
}
break;
}
};
var G__25767 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__25767__delegate.call(this, x, y, more);
};
G__25767.cljs$lang$maxFixedArity = 2;
G__25767.cljs$lang$applyTo = (function (arglist__25771){
var x = cljs.core.first(arglist__25771);
var y = cljs.core.first(cljs.core.next(arglist__25771));
var more = cljs.core.rest(cljs.core.next(arglist__25771));
return G__25767__delegate(x, y, more);
});
G__25767.cljs$lang$arity$variadic = G__25767__delegate;
return G__25767;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT__EQ___1.call(this,x);
case 2:
return _GT__EQ___2.call(this,x,y);
default:
return _GT__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___3.cljs$lang$applyTo;
_GT__EQ_.cljs$lang$arity$1 = _GT__EQ___1;
_GT__EQ_.cljs$lang$arity$2 = _GT__EQ___2;
_GT__EQ_.cljs$lang$arity$variadic = _GT__EQ___3.cljs$lang$arity$variadic;
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljs.core.dec = (function dec(x){
return (x - 1);
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljs.core.max = (function() {
var max = null;
var max__1 = (function (x){
return x;
});
var max__2 = (function (x,y){
return ((x > y) ? x : y);
});
var max__3 = (function() { 
var G__25772__delegate = function (x,y,more){
return cljs.core.reduce.cljs$lang$arity$3(max,((x > y) ? x : y),more);
};
var G__25772 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__25772__delegate.call(this, x, y, more);
};
G__25772.cljs$lang$maxFixedArity = 2;
G__25772.cljs$lang$applyTo = (function (arglist__25773){
var x = cljs.core.first(arglist__25773);
var y = cljs.core.first(cljs.core.next(arglist__25773));
var more = cljs.core.rest(cljs.core.next(arglist__25773));
return G__25772__delegate(x, y, more);
});
G__25772.cljs$lang$arity$variadic = G__25772__delegate;
return G__25772;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return max__1.call(this,x);
case 2:
return max__2.call(this,x,y);
default:
return max__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__3.cljs$lang$applyTo;
max.cljs$lang$arity$1 = max__1;
max.cljs$lang$arity$2 = max__2;
max.cljs$lang$arity$variadic = max__3.cljs$lang$arity$variadic;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__1 = (function (x){
return x;
});
var min__2 = (function (x,y){
return ((x < y) ? x : y);
});
var min__3 = (function() { 
var G__25774__delegate = function (x,y,more){
return cljs.core.reduce.cljs$lang$arity$3(min,((x < y) ? x : y),more);
};
var G__25774 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__25774__delegate.call(this, x, y, more);
};
G__25774.cljs$lang$maxFixedArity = 2;
G__25774.cljs$lang$applyTo = (function (arglist__25775){
var x = cljs.core.first(arglist__25775);
var y = cljs.core.first(cljs.core.next(arglist__25775));
var more = cljs.core.rest(cljs.core.next(arglist__25775));
return G__25774__delegate(x, y, more);
});
G__25774.cljs$lang$arity$variadic = G__25774__delegate;
return G__25774;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return min__1.call(this,x);
case 2:
return min__2.call(this,x,y);
default:
return min__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__3.cljs$lang$applyTo;
min.cljs$lang$arity$1 = min__1;
min.cljs$lang$arity$2 = min__2;
min.cljs$lang$arity$variadic = min__3.cljs$lang$arity$variadic;
return min;
})()
;
cljs.core.fix = (function fix(q){
if((q >= 0))
{return (Math.floor.cljs$lang$arity$1 ? Math.floor.cljs$lang$arity$1(q) : Math.floor.call(null,q));
} else
{return (Math.ceil.cljs$lang$arity$1 ? Math.ceil.cljs$lang$arity$1(q) : Math.ceil.call(null,q));
}
});
/**
* Coerce to int by stripping decimal places.
*/
cljs.core.int$ = (function int$(x){
return cljs.core.fix(x);
});
/**
* Coerce to long by stripping decimal places. Identical to `int'.
*/
cljs.core.long$ = (function long$(x){
return cljs.core.fix(x);
});
/**
* Modulus of num and div with original javascript behavior. i.e. bug for negative numbers
*/
cljs.core.js_mod = (function js_mod(n,d){
return (n % d);
});
/**
* Modulus of num and div. Truncates toward negative infinity.
*/
cljs.core.mod = (function mod(n,d){
return (((n % d) + d) % d);
});
/**
* quot[ient] of dividing numerator by denominator.
*/
cljs.core.quot = (function quot(n,d){
var rem = (n % d);
return cljs.core.fix(((n - rem) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q = cljs.core.quot(n,d);
return (n - (d * q));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){
return (Math.random.cljs$lang$arity$0 ? Math.random.cljs$lang$arity$0() : Math.random.call(null));
});
var rand__1 = (function (n){
return (n * rand.cljs$lang$arity$0());
});
rand = function(n){
switch(arguments.length){
case 0:
return rand__0.call(this);
case 1:
return rand__1.call(this,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rand.cljs$lang$arity$0 = rand__0;
rand.cljs$lang$arity$1 = rand__1;
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return cljs.core.fix(cljs.core.rand.cljs$lang$arity$1(n));
});
/**
* Bitwise exclusive or
*/
cljs.core.bit_xor = (function bit_xor(x,y){
return (x ^ y);
});
/**
* Bitwise and
*/
cljs.core.bit_and = (function bit_and(x,y){
return (x & y);
});
/**
* Bitwise or
*/
cljs.core.bit_or = (function bit_or(x,y){
return (x | y);
});
/**
* Bitwise and
*/
cljs.core.bit_and_not = (function bit_and_not(x,y){
return (x & ~y);
});
/**
* Clear bit at index n
*/
cljs.core.bit_clear = (function bit_clear(x,n){
return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
cljs.core.bit_flip = (function bit_flip(x,n){
return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
cljs.core.bit_not = (function bit_not(x){
return (~ x);
});
/**
* Set bit at index n
*/
cljs.core.bit_set = (function bit_set(x,n){
return (x | (1 << n));
});
/**
* Test bit at index n
*/
cljs.core.bit_test = (function bit_test(x,n){
return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
cljs.core.bit_shift_left = (function bit_shift_left(x,n){
return (x << n);
});
/**
* Bitwise shift right
*/
cljs.core.bit_shift_right = (function bit_shift_right(x,n){
return (x >> n);
});
/**
* Bitwise shift right with zero fill
*/
cljs.core.bit_shift_right_zero_fill = (function bit_shift_right_zero_fill(x,n){
return (x >>> n);
});
/**
* Counts the number of bits set in n
*/
cljs.core.bit_count = (function bit_count(v){
var v__$1 = (v - ((v >> 1) & 1431655765));
var v__$2 = ((v__$1 & 858993459) + ((v__$1 >> 2) & 858993459));
return ((((v__$2 + (v__$2 >> 4)) & 252645135) * 16843009) >> 24);
});
/**
* Returns non-nil if nums all have the equivalent
* value, otherwise false. Behavior on non nums is
* undefined.
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___1 = (function (x){
return true;
});
var _EQ__EQ___2 = (function (x,y){
return cljs.core._equiv(x,y);
});
var _EQ__EQ___3 = (function() { 
var G__25776__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.cljs$lang$arity$2(x,y)))
{if(cljs.core.next(more))
{{
var G__25777 = y;
var G__25778 = cljs.core.first(more);
var G__25779 = cljs.core.next(more);
x = G__25777;
y = G__25778;
more = G__25779;
continue;
}
} else
{return _EQ__EQ_.cljs$lang$arity$2(y,cljs.core.first(more));
}
} else
{return false;
}
break;
}
};
var G__25776 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__25776__delegate.call(this, x, y, more);
};
G__25776.cljs$lang$maxFixedArity = 2;
G__25776.cljs$lang$applyTo = (function (arglist__25780){
var x = cljs.core.first(arglist__25780);
var y = cljs.core.first(cljs.core.next(arglist__25780));
var more = cljs.core.rest(cljs.core.next(arglist__25780));
return G__25776__delegate(x, y, more);
});
G__25776.cljs$lang$arity$variadic = G__25776__delegate;
return G__25776;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ__EQ___1.call(this,x);
case 2:
return _EQ__EQ___2.call(this,x,y);
default:
return _EQ__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___3.cljs$lang$applyTo;
_EQ__EQ_.cljs$lang$arity$1 = _EQ__EQ___1;
_EQ__EQ_.cljs$lang$arity$2 = _EQ__EQ___2;
_EQ__EQ_.cljs$lang$arity$variadic = _EQ__EQ___3.cljs$lang$arity$variadic;
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){
return (n > 0);
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){
return (n === 0);
});
/**
* Returns true if num is less than zero, else false
*/
cljs.core.neg_QMARK_ = (function neg_QMARK_(x){
return (x < 0);
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
cljs.core.nthnext = (function nthnext(coll,n){
var n__$1 = n;
var xs = cljs.core.seq(coll);
while(true){
if(cljs.core.truth_((function (){var and__3941__auto__ = xs;
if(and__3941__auto__)
{return (n__$1 > 0);
} else
{return and__3941__auto__;
}
})()))
{{
var G__25781 = (n__$1 - 1);
var G__25782 = cljs.core.next(xs);
n__$1 = G__25781;
xs = G__25782;
continue;
}
} else
{return xs;
}
break;
}
});
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___0 = (function (){
return "";
});
var str_STAR___1 = (function (x){
if((x == null))
{return "";
} else
{if("\uFDD0:else")
{return x.toString();
} else
{return null;
}
}
});
var str_STAR___2 = (function() { 
var G__25783__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__25784 = sb.append(str_STAR_.cljs$lang$arity$1(cljs.core.first(more)));
var G__25785 = cljs.core.next(more);
sb = G__25784;
more = G__25785;
continue;
}
} else
{return str_STAR_.cljs$lang$arity$1(sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.cljs$lang$arity$1(x))),ys);
};
var G__25783 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__25783__delegate.call(this, x, ys);
};
G__25783.cljs$lang$maxFixedArity = 1;
G__25783.cljs$lang$applyTo = (function (arglist__25786){
var x = cljs.core.first(arglist__25786);
var ys = cljs.core.rest(arglist__25786);
return G__25783__delegate(x, ys);
});
G__25783.cljs$lang$arity$variadic = G__25783__delegate;
return G__25783;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case 0:
return str_STAR___0.call(this);
case 1:
return str_STAR___1.call(this,x);
default:
return str_STAR___2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___2.cljs$lang$applyTo;
str_STAR_.cljs$lang$arity$0 = str_STAR___0;
str_STAR_.cljs$lang$arity$1 = str_STAR___1;
str_STAR_.cljs$lang$arity$variadic = str_STAR___2.cljs$lang$arity$variadic;
return str_STAR_;
})()
;
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljs.core.str = (function() {
var str = null;
var str__0 = (function (){
return "";
});
var str__1 = (function (x){
if(cljs.core.symbol_QMARK_(x))
{return x.substring(2,x.length);
} else
{if(cljs.core.keyword_QMARK_(x))
{return cljs.core.str_STAR_.cljs$lang$arity$variadic(":",cljs.core.array_seq([x.substring(2,x.length)], 0));
} else
{if((x == null))
{return "";
} else
{if("\uFDD0:else")
{return x.toString();
} else
{return null;
}
}
}
}
});
var str__2 = (function() { 
var G__25787__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__25788 = sb.append(str.cljs$lang$arity$1(cljs.core.first(more)));
var G__25789 = cljs.core.next(more);
sb = G__25788;
more = G__25789;
continue;
}
} else
{return cljs.core.str_STAR_.cljs$lang$arity$1(sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.cljs$lang$arity$1(x))),ys);
};
var G__25787 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__25787__delegate.call(this, x, ys);
};
G__25787.cljs$lang$maxFixedArity = 1;
G__25787.cljs$lang$applyTo = (function (arglist__25790){
var x = cljs.core.first(arglist__25790);
var ys = cljs.core.rest(arglist__25790);
return G__25787__delegate(x, ys);
});
G__25787.cljs$lang$arity$variadic = G__25787__delegate;
return G__25787;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case 0:
return str__0.call(this);
case 1:
return str__1.call(this,x);
default:
return str__2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__2.cljs$lang$applyTo;
str.cljs$lang$arity$0 = str__0;
str.cljs$lang$arity$1 = str__1;
str.cljs$lang$arity$variadic = str__2.cljs$lang$arity$variadic;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__2 = (function (s,start){
return s.substring(start);
});
var subs__3 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case 2:
return subs__2.call(this,s,start);
case 3:
return subs__3.call(this,s,start,end);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
subs.cljs$lang$arity$2 = subs__2;
subs.cljs$lang$arity$3 = subs__3;
return subs;
})()
;
cljs.core.map = undefined;
/**
* Formats a string using goog.string.format.
* @param {...*} var_args
*/
cljs.core.format = (function() { 
var format__delegate = function (fmt,args){
var args__$1 = (cljs.core.map.cljs$lang$arity$2 ? cljs.core.map.cljs$lang$arity$2((function (x){
if(cljs.core.truth_((function (){var or__3943__auto__ = cljs.core.keyword_QMARK_(x);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return cljs.core.symbol_QMARK_(x);
}
})()))
{return [cljs.core.str(x)].join('');
} else
{return x;
}
}),args) : cljs.core.map.call(null,(function (x){
if(cljs.core.truth_((function (){var or__3943__auto__ = cljs.core.keyword_QMARK_(x);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return cljs.core.symbol_QMARK_(x);
}
})()))
{return [cljs.core.str(x)].join('');
} else
{return x;
}
}),args));
return (cljs.core.apply.cljs$lang$arity$3 ? cljs.core.apply.cljs$lang$arity$3(goog.string.format,fmt,args__$1) : cljs.core.apply.call(null,goog.string.format,fmt,args__$1));
};
var format = function (fmt,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return format__delegate.call(this, fmt, args);
};
format.cljs$lang$maxFixedArity = 1;
format.cljs$lang$applyTo = (function (arglist__25791){
var fmt = cljs.core.first(arglist__25791);
var args = cljs.core.rest(arglist__25791);
return format__delegate(fmt, args);
});
format.cljs$lang$arity$variadic = format__delegate;
return format;
})()
;
/**
* Returns a Symbol with the given namespace and name.
*/
cljs.core.symbol = (function() {
var symbol = null;
var symbol__1 = (function (name){
if(cljs.core.symbol_QMARK_(name))
{return name;
} else
{if(cljs.core.keyword_QMARK_(name))
{return cljs.core.str_STAR_.cljs$lang$arity$variadic("\uFDD1",cljs.core.array_seq(["'",cljs.core.subs.cljs$lang$arity$2(name,2)], 0));
} else
{if("\uFDD0:else")
{return cljs.core.str_STAR_.cljs$lang$arity$variadic("\uFDD1",cljs.core.array_seq(["'",name], 0));
} else
{return null;
}
}
}
});
var symbol__2 = (function (ns,name){
return symbol.cljs$lang$arity$1(cljs.core.str_STAR_.cljs$lang$arity$variadic(ns,cljs.core.array_seq(["/",name], 0)));
});
symbol = function(ns,name){
switch(arguments.length){
case 1:
return symbol__1.call(this,ns);
case 2:
return symbol__2.call(this,ns,name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
symbol.cljs$lang$arity$1 = symbol__1;
symbol.cljs$lang$arity$2 = symbol__2;
return symbol;
})()
;
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__1 = (function (name){
if(cljs.core.keyword_QMARK_(name))
{return name;
} else
{if(cljs.core.symbol_QMARK_(name))
{return cljs.core.str_STAR_.cljs$lang$arity$variadic("\uFDD0",cljs.core.array_seq([":",cljs.core.subs.cljs$lang$arity$2(name,2)], 0));
} else
{if("\uFDD0:else")
{return cljs.core.str_STAR_.cljs$lang$arity$variadic("\uFDD0",cljs.core.array_seq([":",name], 0));
} else
{return null;
}
}
}
});
var keyword__2 = (function (ns,name){
return keyword.cljs$lang$arity$1(cljs.core.str_STAR_.cljs$lang$arity$variadic(ns,cljs.core.array_seq(["/",name], 0)));
});
keyword = function(ns,name){
switch(arguments.length){
case 1:
return keyword__1.call(this,ns);
case 2:
return keyword__2.call(this,ns,name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
keyword.cljs$lang$arity$1 = keyword__1;
keyword.cljs$lang$arity$2 = keyword__2;
return keyword;
})()
;
/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){
return cljs.core.boolean$(((cljs.core.sequential_QMARK_(y))?(function (){var xs = cljs.core.seq(x);
var ys = cljs.core.seq(y);
while(true){
if((xs == null))
{return (ys == null);
} else
{if((ys == null))
{return false;
} else
{if(cljs.core._EQ_.cljs$lang$arity$2(cljs.core.first(xs),cljs.core.first(ys)))
{{
var G__25792 = cljs.core.next(xs);
var G__25793 = cljs.core.next(ys);
xs = G__25792;
ys = G__25793;
continue;
}
} else
{if("\uFDD0:else")
{return false;
} else
{return null;
}
}
}
}
break;
}
})():null));
});
cljs.core.hash_combine = (function hash_combine(seed,hash){
return (seed ^ (((hash + 2654435769) + (seed << 6)) + (seed >> 2)));
});
cljs.core.hash_coll = (function hash_coll(coll){
return cljs.core.reduce.cljs$lang$arity$3((function (p1__25794_SHARP_,p2__25795_SHARP_){
return cljs.core.hash_combine(p1__25794_SHARP_,cljs.core.hash.cljs$lang$arity$2(p2__25795_SHARP_,false));
}),cljs.core.hash.cljs$lang$arity$2(cljs.core.first(coll),false),cljs.core.next(coll));
});
cljs.core.key = undefined;
cljs.core.val = undefined;
cljs.core.hash_imap = (function hash_imap(m){
var h = 0;
var s = cljs.core.seq(m);
while(true){
if(s)
{var e = cljs.core.first(s);
{
var G__25796 = ((h + (cljs.core.hash.cljs$lang$arity$1((cljs.core.key.cljs$lang$arity$1 ? cljs.core.key.cljs$lang$arity$1(e) : cljs.core.key.call(null,e))) ^ cljs.core.hash.cljs$lang$arity$1((cljs.core.val.cljs$lang$arity$1 ? cljs.core.val.cljs$lang$arity$1(e) : cljs.core.val.call(null,e))))) % 4503599627370496);
var G__25797 = cljs.core.next(s);
h = G__25796;
s = G__25797;
continue;
}
} else
{return h;
}
break;
}
});
cljs.core.hash_iset = (function hash_iset(s){
var h = 0;
var s__$1 = cljs.core.seq(s);
while(true){
if(s__$1)
{var e = cljs.core.first(s__$1);
{
var G__25798 = ((h + cljs.core.hash.cljs$lang$arity$1(e)) % 4503599627370496);
var G__25799 = cljs.core.next(s__$1);
h = G__25798;
s__$1 = G__25799;
continue;
}
} else
{return h;
}
break;
}
});
cljs.core.name = undefined;
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__25802_25804 = cljs.core.seq(fn_map);
while(true){
if(G__25802_25804)
{var vec__25803_25805 = cljs.core.first(G__25802_25804);
var key_name_25806 = cljs.core.nth.cljs$lang$arity$3(vec__25803_25805,0,null);
var f_25807 = cljs.core.nth.cljs$lang$arity$3(vec__25803_25805,1,null);
var str_name_25808 = (cljs.core.name.cljs$lang$arity$1 ? cljs.core.name.cljs$lang$arity$1(key_name_25806) : cljs.core.name.call(null,key_name_25806));
(obj[str_name_25808] = f_25807);
{
var G__25809 = cljs.core.next(G__25802_25804);
G__25802_25804 = G__25809;
continue;
}
} else
{}
break;
}
return obj;
});
goog.provide('cljs.core.List');

/**
* @constructor
*/
cljs.core.List = (function (meta,first,rest,count,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 65413358;
})
cljs.core.List.cljs$lang$type = true;
cljs.core.List.cljs$lang$ctorPrSeq = (function (this__5785__auto__){
return (cljs.core.list.cljs$lang$arity$1 ? cljs.core.list.cljs$lang$arity$1("cljs.core/List") : cljs.core.list.call(null,"cljs.core/List"));
});
cljs.core.List.cljs$lang$ctorPrWriter = (function (this__5785__auto__,writer__5786__auto__,opt__5787__auto__){
return cljs.core._write(writer__5786__auto__,"cljs.core/List");
});
cljs.core.List.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__5666__auto__ = self__.__hash;
if(!((h__5666__auto__ == null)))
{return h__5666__auto__;
} else
{var h__5666__auto____$1 = cljs.core.hash_coll(coll);
self__.__hash = h__5666__auto____$1;
return h__5666__auto____$1;
}
});
cljs.core.List.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
if((self__.count === 1))
{return null;
} else
{return self__.rest;
}
});
cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
return (new cljs.core.List(self__.meta,o,coll,(self__.count + 1),null));
});
cljs.core.List.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return (cljs.core.pr_str.cljs$lang$arity$1 ? cljs.core.pr_str.cljs$lang$arity$1(this$) : cljs.core.pr_str.call(null,this$));
});
cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
return self__.count;
});
cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var self__ = this;
return self__.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var self__ = this;
return coll.cljs$core$ISeq$_rest$arity$1(coll);
});
cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
return self__.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
if((self__.count === 1))
{return cljs.core.List.EMPTY;
} else
{return self__.rest;
}
});
cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
return (new cljs.core.List(meta__$1,self__.first,self__.rest,self__.count,self__.__hash));
});
cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return cljs.core.List.EMPTY;
});
goog.provide('cljs.core.EmptyList');

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 65413326;
})
cljs.core.EmptyList.cljs$lang$type = true;
cljs.core.EmptyList.cljs$lang$ctorPrSeq = (function (this__5785__auto__){
return (cljs.core.list.cljs$lang$arity$1 ? cljs.core.list.cljs$lang$arity$1("cljs.core/EmptyList") : cljs.core.list.call(null,"cljs.core/EmptyList"));
});
cljs.core.EmptyList.cljs$lang$ctorPrWriter = (function (this__5785__auto__,writer__5786__auto__,opt__5787__auto__){
return cljs.core._write(writer__5786__auto__,"cljs.core/EmptyList");
});
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
return (new cljs.core.List(self__.meta,o,null,1,null));
});
cljs.core.EmptyList.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return (cljs.core.pr_str.cljs$lang$arity$1 ? cljs.core.pr_str.cljs$lang$arity$1(this$) : cljs.core.pr_str.call(null,this$));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var self__ = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var self__ = this;
throw (new Error("Can't pop empty list"));
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
return cljs.core.List.EMPTY;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
return (new cljs.core.EmptyList(meta__$1));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return coll;
});
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
cljs.core.reversible_QMARK_ = (function reversible_QMARK_(coll){
var G__25811 = coll;
if(G__25811)
{if(cljs.core.truth_((function (){var or__3943__auto__ = (G__25811.cljs$lang$protocol_mask$partition0$ & 134217728);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__25811.cljs$core$IReversible$;
}
})()))
{return true;
} else
{if((!G__25811.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.IReversible,G__25811);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IReversible,G__25811);
}
});
cljs.core.rseq = (function rseq(coll){
return cljs.core._rseq(coll);
});
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){
if(cljs.core.reversible_QMARK_(coll))
{return cljs.core.rseq(coll);
} else
{return cljs.core.reduce.cljs$lang$arity$3(cljs.core.conj,cljs.core.List.EMPTY,coll);
}
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function() {
var list = null;
var list__0 = (function (){
return cljs.core.List.EMPTY;
});
var list__1 = (function (x){
return cljs.core.conj.cljs$lang$arity$2(cljs.core.List.EMPTY,x);
});
var list__2 = (function (x,y){
return cljs.core.conj.cljs$lang$arity$2(list.cljs$lang$arity$1(y),x);
});
var list__3 = (function (x,y,z){
return cljs.core.conj.cljs$lang$arity$2(list.cljs$lang$arity$2(y,z),x);
});
var list__4 = (function() { 
var G__25812__delegate = function (x,y,z,items){
return cljs.core.conj.cljs$lang$arity$2(cljs.core.conj.cljs$lang$arity$2(cljs.core.conj.cljs$lang$arity$2(cljs.core.reduce.cljs$lang$arity$3(cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse(items)),z),y),x);
};
var G__25812 = function (x,y,z,var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__25812__delegate.call(this, x, y, z, items);
};
G__25812.cljs$lang$maxFixedArity = 3;
G__25812.cljs$lang$applyTo = (function (arglist__25813){
var x = cljs.core.first(arglist__25813);
var y = cljs.core.first(cljs.core.next(arglist__25813));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__25813)));
var items = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__25813)));
return G__25812__delegate(x, y, z, items);
});
G__25812.cljs$lang$arity$variadic = G__25812__delegate;
return G__25812;
})()
;
list = function(x,y,z,var_args){
var items = var_args;
switch(arguments.length){
case 0:
return list__0.call(this);
case 1:
return list__1.call(this,x);
case 2:
return list__2.call(this,x,y);
case 3:
return list__3.call(this,x,y,z);
default:
return list__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
list.cljs$lang$maxFixedArity = 3;
list.cljs$lang$applyTo = list__4.cljs$lang$applyTo;
list.cljs$lang$arity$0 = list__0;
list.cljs$lang$arity$1 = list__1;
list.cljs$lang$arity$2 = list__2;
list.cljs$lang$arity$3 = list__3;
list.cljs$lang$arity$variadic = list__4.cljs$lang$arity$variadic;
return list;
})()
;
goog.provide('cljs.core.Cons');

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 65405164;
})
cljs.core.Cons.cljs$lang$type = true;
cljs.core.Cons.cljs$lang$ctorPrSeq = (function (this__5785__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/Cons");
});
cljs.core.Cons.cljs$lang$ctorPrWriter = (function (this__5785__auto__,writer__5786__auto__,opt__5787__auto__){
return cljs.core._write(writer__5786__auto__,"cljs.core/Cons");
});
cljs.core.Cons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__5666__auto__ = self__.__hash;
if(!((h__5666__auto__ == null)))
{return h__5666__auto__;
} else
{var h__5666__auto____$1 = cljs.core.hash_coll(coll);
self__.__hash = h__5666__auto____$1;
return h__5666__auto____$1;
}
});
cljs.core.Cons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
if((self__.rest == null))
{return null;
} else
{return cljs.core._seq(self__.rest);
}
});
cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
return (new cljs.core.Cons(null,o,coll,self__.__hash));
});
cljs.core.Cons.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return (cljs.core.pr_str.cljs$lang$arity$1 ? cljs.core.pr_str.cljs$lang$arity$1(this$) : cljs.core.pr_str.call(null,this$));
});
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
return self__.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
if((self__.rest == null))
{return cljs.core.List.EMPTY;
} else
{return self__.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
return (new cljs.core.Cons(meta__$1,self__.first,self__.rest,self__.__hash));
});
cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,coll){
if(cljs.core.truth_((function (){var or__3943__auto__ = (coll == null);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var G__25815 = coll;
if(G__25815)
{if(cljs.core.truth_((function (){var or__3943__auto____$1 = (G__25815.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{return G__25815.cljs$core$ISeq$;
}
})()))
{return true;
} else
{if((!G__25815.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.ISeq,G__25815);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.ISeq,G__25815);
}
}
})()))
{return (new cljs.core.Cons(null,x,coll,null));
} else
{return (new cljs.core.Cons(null,x,cljs.core.seq(coll),null));
}
});
cljs.core.list_QMARK_ = (function list_QMARK_(x){
var G__25817 = x;
if(G__25817)
{if(cljs.core.truth_((function (){var or__3943__auto__ = (G__25817.cljs$lang$protocol_mask$partition0$ & 33554432);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__25817.cljs$core$IList$;
}
})()))
{return true;
} else
{if((!G__25817.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.IList,G__25817);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IList,G__25817);
}
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__25818 = null;
var G__25818__2 = (function (string,f){
return cljs.core.ci_reduce.cljs$lang$arity$2(string,f);
});
var G__25818__3 = (function (string,f,start){
return cljs.core.ci_reduce.cljs$lang$arity$3(string,f,start);
});
G__25818 = function(string,f,start){
switch(arguments.length){
case 2:
return G__25818__2.call(this,string,f);
case 3:
return G__25818__3.call(this,string,f,start);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__25818;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__25819 = null;
var G__25819__2 = (function (string,k){
return cljs.core._nth.cljs$lang$arity$2(string,k);
});
var G__25819__3 = (function (string,k,not_found){
return cljs.core._nth.cljs$lang$arity$3(string,k,not_found);
});
G__25819 = function(string,k,not_found){
switch(arguments.length){
case 2:
return G__25819__2.call(this,string,k);
case 3:
return G__25819__3.call(this,string,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__25819;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__25820 = null;
var G__25820__2 = (function (string,n){
if((n < cljs.core._count(string)))
{return string.charAt(n);
} else
{return null;
}
});
var G__25820__3 = (function (string,n,not_found){
if((n < cljs.core._count(string)))
{return string.charAt(n);
} else
{return not_found;
}
});
G__25820 = function(string,n,not_found){
switch(arguments.length){
case 2:
return G__25820__2.call(this,string,n);
case 3:
return G__25820__3.call(this,string,n,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__25820;
})()
);
(cljs.core.ICounted["string"] = true);
(cljs.core._count["string"] = (function (s){
return s.length;
}));
(cljs.core.ISeqable["string"] = true);
(cljs.core._seq["string"] = (function (string){
return cljs.core.prim_seq.cljs$lang$arity$2(string,0);
}));
(cljs.core.IHash["string"] = true);
(cljs.core._hash["string"] = (function (o){
return goog.string.hashCode(o);
}));
goog.provide('cljs.core.Keyword');

/**
* @constructor
*/
cljs.core.Keyword = (function (k){
this.k = k;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 1;
})
cljs.core.Keyword.cljs$lang$type = true;
cljs.core.Keyword.cljs$lang$ctorPrSeq = (function (this__5785__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/Keyword");
});
cljs.core.Keyword.cljs$lang$ctorPrWriter = (function (this__5785__auto__,writer__5786__auto__,opt__5787__auto__){
return cljs.core._write(writer__5786__auto__,"cljs.core/Keyword");
});
cljs.core.Keyword.prototype.call = (function() {
var G__25822 = null;
var G__25822__2 = (function (self__,coll){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
if((coll == null))
{return null;
} else
{var strobj = coll.strobj;
if((strobj == null))
{return cljs.core._lookup.cljs$lang$arity$3(coll,self__.k,null);
} else
{return (strobj[self__.k]);
}
}
});
var G__25822__3 = (function (self__,coll,not_found){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
if((coll == null))
{return not_found;
} else
{return cljs.core._lookup.cljs$lang$arity$3(coll,self__.k,not_found);
}
});
G__25822 = function(self__,coll,not_found){
switch(arguments.length){
case 2:
return G__25822__2.call(this,self__,coll);
case 3:
return G__25822__3.call(this,self__,coll,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__25822;
})()
;
cljs.core.Keyword.prototype.apply = (function (self__,args25821){
var self__ = this;
return self__.call.apply(self__,[self__].concat(args25821.slice()));
});
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__25824 = null;
var G__25824__2 = (function (self__,coll){
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.cljs$lang$arity$3(coll,this$.toString(),null);
});
var G__25824__3 = (function (self__,coll,not_found){
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.cljs$lang$arity$3(coll,this$.toString(),not_found);
});
G__25824 = function(self__,coll,not_found){
switch(arguments.length){
case 2:
return G__25824__2.call(this,self__,coll);
case 3:
return G__25824__3.call(this,self__,coll,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__25824;
})()
;
String.prototype.apply = (function (self__,args25823){
return self__.call.apply(self__,[self__].concat(args25823.slice()));
});
String.prototype.apply = (function (s,args){
if((cljs.core.count(args) < 2))
{return cljs.core._lookup.cljs$lang$arity$3((args[0]),s,null);
} else
{return cljs.core._lookup.cljs$lang$arity$3((args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x = lazy_seq.x;
if(lazy_seq.realized)
{return x;
} else
{lazy_seq.x = (x.cljs$lang$arity$0 ? x.cljs$lang$arity$0() : x.call(null));
lazy_seq.realized = true;
return lazy_seq.x;
}
});
goog.provide('cljs.core.LazySeq');

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,realized,x,__hash){
this.meta = meta;
this.realized = realized;
this.x = x;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850700;
})
cljs.core.LazySeq.cljs$lang$type = true;
cljs.core.LazySeq.cljs$lang$ctorPrSeq = (function (this__5785__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/LazySeq");
});
cljs.core.LazySeq.cljs$lang$ctorPrWriter = (function (this__5785__auto__,writer__5786__auto__,opt__5787__auto__){
return cljs.core._write(writer__5786__auto__,"cljs.core/LazySeq");
});
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__5666__auto__ = self__.__hash;
if(!((h__5666__auto__ == null)))
{return h__5666__auto__;
} else
{var h__5666__auto____$1 = cljs.core.hash_coll(coll);
self__.__hash = h__5666__auto____$1;
return h__5666__auto____$1;
}
});
cljs.core.LazySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
return cljs.core._seq(coll.cljs$core$ISeq$_rest$arity$1(coll));
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
return cljs.core.cons(o,coll);
});
cljs.core.LazySeq.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return (cljs.core.pr_str.cljs$lang$arity$1 ? cljs.core.pr_str.cljs$lang$arity$1(this$) : cljs.core.pr_str.call(null,this$));
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
return cljs.core.seq(cljs.core.lazy_seq_value(coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
return cljs.core.first(cljs.core.lazy_seq_value(coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
return cljs.core.rest(cljs.core.lazy_seq_value(coll));
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
return (new cljs.core.LazySeq(meta__$1,self__.realized,self__.x,self__.__hash));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});
cljs.core.ArrayChunk = undefined;
goog.provide('cljs.core.ChunkBuffer');

/**
* @constructor
*/
cljs.core.ChunkBuffer = (function (buf,end){
this.buf = buf;
this.end = end;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2;
})
cljs.core.ChunkBuffer.cljs$lang$type = true;
cljs.core.ChunkBuffer.cljs$lang$ctorPrSeq = (function (this__5785__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/ChunkBuffer");
});
cljs.core.ChunkBuffer.cljs$lang$ctorPrWriter = (function (this__5785__auto__,writer__5786__auto__,opt__5787__auto__){
return cljs.core._write(writer__5786__auto__,"cljs.core/ChunkBuffer");
});
cljs.core.ChunkBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
return self__.end;
});
cljs.core.ChunkBuffer.prototype.add = (function (o){
var self__ = this;
var _ = this;
(self__.buf[self__.end] = o);
return self__.end = (self__.end + 1);
});
cljs.core.ChunkBuffer.prototype.chunk = (function (o){
var self__ = this;
var _ = this;
var ret = (new cljs.core.ArrayChunk(self__.buf,0,self__.end));
self__.buf = null;
return ret;
});
cljs.core.chunk_buffer = (function chunk_buffer(capacity){
return (new cljs.core.ChunkBuffer(cljs.core.make_array.cljs$lang$arity$1(capacity),0));
});
goog.provide('cljs.core.ArrayChunk');

/**
* @constructor
*/
cljs.core.ArrayChunk = (function (arr,off,end){
this.arr = arr;
this.off = off;
this.end = end;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 524306;
})
cljs.core.ArrayChunk.cljs$lang$type = true;
cljs.core.ArrayChunk.cljs$lang$ctorPrSeq = (function (this__5785__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/ArrayChunk");
});
cljs.core.ArrayChunk.cljs$lang$ctorPrWriter = (function (this__5785__auto__,writer__5786__auto__,opt__5787__auto__){
return cljs.core._write(writer__5786__auto__,"cljs.core/ArrayChunk");
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
return cljs.core.array_reduce.cljs$lang$arity$4(self__.arr,f,(self__.arr[self__.off]),(self__.off + 1));
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
return cljs.core.array_reduce.cljs$lang$arity$4(self__.arr,f,start,self__.off);
});
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$ = true;
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$_drop_first$arity$1 = (function (coll){
var self__ = this;
if((self__.off === self__.end))
{throw (new Error("-drop-first of empty chunk"));
} else
{return (new cljs.core.ArrayChunk(self__.arr,(self__.off + 1),self__.end));
}
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,i){
var self__ = this;
return (self__.arr[(self__.off + i)]);
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,i,not_found){
var self__ = this;
if(cljs.core.truth_((function (){var and__3941__auto__ = (i >= 0);
if(and__3941__auto__)
{return (i < (self__.end - self__.off));
} else
{return and__3941__auto__;
}
})()))
{return (self__.arr[(self__.off + i)]);
} else
{return not_found;
}
});
cljs.core.ArrayChunk.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
return (self__.end - self__.off);
});
cljs.core.array_chunk = (function() {
var array_chunk = null;
var array_chunk__1 = (function (arr){
return array_chunk.cljs$lang$arity$3(arr,0,arr.length);
});
var array_chunk__2 = (function (arr,off){
return array_chunk.cljs$lang$arity$3(arr,off,arr.length);
});
var array_chunk__3 = (function (arr,off,end){
return (new cljs.core.ArrayChunk(arr,off,end));
});
array_chunk = function(arr,off,end){
switch(arguments.length){
case 1:
return array_chunk__1.call(this,arr);
case 2:
return array_chunk__2.call(this,arr,off);
case 3:
return array_chunk__3.call(this,arr,off,end);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
array_chunk.cljs$lang$arity$1 = array_chunk__1;
array_chunk.cljs$lang$arity$2 = array_chunk__2;
array_chunk.cljs$lang$arity$3 = array_chunk__3;
return array_chunk;
})()
;
goog.provide('cljs.core.ChunkedCons');

/**
* @constructor
*/
cljs.core.ChunkedCons = (function (chunk,more,meta,__hash){
this.chunk = chunk;
this.more = more;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 31850604;
this.cljs$lang$protocol_mask$partition1$ = 1536;
})
cljs.core.ChunkedCons.cljs$lang$type = true;
cljs.core.ChunkedCons.cljs$lang$ctorPrSeq = (function (this__5785__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/ChunkedCons");
});
cljs.core.ChunkedCons.cljs$lang$ctorPrWriter = (function (this__5785__auto__,writer__5786__auto__,opt__5787__auto__){
return cljs.core._write(writer__5786__auto__,"cljs.core/ChunkedCons");
});
cljs.core.ChunkedCons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__5666__auto__ = self__.__hash;
if(!((h__5666__auto__ == null)))
{return h__5666__auto__;
} else
{var h__5666__auto____$1 = cljs.core.hash_coll(coll);
self__.__hash = h__5666__auto____$1;
return h__5666__auto____$1;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,o){
var self__ = this;
return cljs.core.cons(o,this$);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
return coll;
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
return cljs.core._nth.cljs$lang$arity$2(self__.chunk,0);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
if((cljs.core._count(self__.chunk) > 1))
{return (new cljs.core.ChunkedCons(cljs.core._drop_first(self__.chunk),self__.more,self__.meta,null));
} else
{if((self__.more == null))
{return cljs.core.List.EMPTY;
} else
{return self__.more;
}
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var self__ = this;
if((self__.more == null))
{return null;
} else
{return self__.more;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.ChunkedCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var self__ = this;
return (new cljs.core.ChunkedCons(self__.chunk,self__.more,m,self__.__hash));
});
cljs.core.ChunkedCons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
cljs.core.ChunkedCons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var self__ = this;
return self__.chunk;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var self__ = this;
if((self__.more == null))
{return cljs.core.List.EMPTY;
} else
{return self__.more;
}
});
cljs.core.chunk_cons = (function chunk_cons(chunk,rest){
if((cljs.core._count(chunk) === 0))
{return rest;
} else
{return (new cljs.core.ChunkedCons(chunk,rest,null,null));
}
});
cljs.core.chunk_append = (function chunk_append(b,x){
return b.add(x);
});
cljs.core.chunk = (function chunk(b){
return b.chunk();
});
cljs.core.chunk_first = (function chunk_first(s){
return cljs.core._chunked_first(s);
});
cljs.core.chunk_rest = (function chunk_rest(s){
return cljs.core._chunked_rest(s);
});
cljs.core.chunk_next = (function chunk_next(s){
if(cljs.core.truth_((function (){var G__25826 = s;
if(G__25826)
{if(cljs.core.truth_((function (){var or__3943__auto__ = (G__25826.cljs$lang$protocol_mask$partition1$ & 1024);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__25826.cljs$core$IChunkedNext$;
}
})()))
{return true;
} else
{if((!G__25826.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_(cljs.core.IChunkedNext,G__25826);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IChunkedNext,G__25826);
}
})()))
{return cljs.core._chunked_next(s);
} else
{return cljs.core.seq(cljs.core._chunked_rest(s));
}
});
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary = [];
var s__$1 = s;
while(true){
if(cljs.core.seq(s__$1))
{ary.push(cljs.core.first(s__$1));
{
var G__25827 = cljs.core.next(s__$1);
s__$1 = G__25827;
continue;
}
} else
{return ary;
}
break;
}
});
/**
* Returns a (potentially-ragged) 2-dimensional array
* containing the contents of coll.
*/
cljs.core.to_array_2d = (function to_array_2d(coll){
var ret = cljs.core.make_array.cljs$lang$arity$1(cljs.core.count(coll));
var i_25828 = 0;
var xs_25829 = cljs.core.seq(coll);
while(true){
if(xs_25829)
{(ret[i_25828] = cljs.core.to_array(cljs.core.first(xs_25829)));
{
var G__25830 = (i_25828 + 1);
var G__25831 = cljs.core.next(xs_25829);
i_25828 = G__25830;
xs_25829 = G__25831;
continue;
}
} else
{}
break;
}
return ret;
});
cljs.core.long_array = (function() {
var long_array = null;
var long_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_(size_or_seq))
{return long_array.cljs$lang$arity$2(size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_(size_or_seq))
{return cljs.core.into_array.cljs$lang$arity$1(size_or_seq);
} else
{if("\uFDD0:else")
{throw (new Error("long-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var long_array__2 = (function (size,init_val_or_seq){
var a = cljs.core.make_array.cljs$lang$arity$1(size);
if(cljs.core.seq_QMARK_(init_val_or_seq))
{var s = cljs.core.seq(init_val_or_seq);
var i = 0;
var s__$1 = s;
while(true){
if(cljs.core.truth_((function (){var and__3941__auto__ = s__$1;
if(and__3941__auto__)
{return (i < size);
} else
{return and__3941__auto__;
}
})()))
{(a[i] = cljs.core.first(s__$1));
{
var G__25832 = (i + 1);
var G__25833 = cljs.core.next(s__$1);
i = G__25832;
s__$1 = G__25833;
continue;
}
} else
{return a;
}
break;
}
} else
{var n__6007__auto___25834 = size;
var i_25835 = 0;
while(true){
if((i_25835 < n__6007__auto___25834))
{(a[i_25835] = init_val_or_seq);
{
var G__25836 = (i_25835 + 1);
i_25835 = G__25836;
continue;
}
} else
{}
break;
}
return a;
}
});
long_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return long_array__1.call(this,size);
case 2:
return long_array__2.call(this,size,init_val_or_seq);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
long_array.cljs$lang$arity$1 = long_array__1;
long_array.cljs$lang$arity$2 = long_array__2;
return long_array;
})()
;
cljs.core.double_array = (function() {
var double_array = null;
var double_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_(size_or_seq))
{return double_array.cljs$lang$arity$2(size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_(size_or_seq))
{return cljs.core.into_array.cljs$lang$arity$1(size_or_seq);
} else
{if("\uFDD0:else")
{throw (new Error("double-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var double_array__2 = (function (size,init_val_or_seq){
var a = cljs.core.make_array.cljs$lang$arity$1(size);
if(cljs.core.seq_QMARK_(init_val_or_seq))
{var s = cljs.core.seq(init_val_or_seq);
var i = 0;
var s__$1 = s;
while(true){
if(cljs.core.truth_((function (){var and__3941__auto__ = s__$1;
if(and__3941__auto__)
{return (i < size);
} else
{return and__3941__auto__;
}
})()))
{(a[i] = cljs.core.first(s__$1));
{
var G__25837 = (i + 1);
var G__25838 = cljs.core.next(s__$1);
i = G__25837;
s__$1 = G__25838;
continue;
}
} else
{return a;
}
break;
}
} else
{var n__6007__auto___25839 = size;
var i_25840 = 0;
while(true){
if((i_25840 < n__6007__auto___25839))
{(a[i_25840] = init_val_or_seq);
{
var G__25841 = (i_25840 + 1);
i_25840 = G__25841;
continue;
}
} else
{}
break;
}
return a;
}
});
double_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return double_array__1.call(this,size);
case 2:
return double_array__2.call(this,size,init_val_or_seq);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
double_array.cljs$lang$arity$1 = double_array__1;
double_array.cljs$lang$arity$2 = double_array__2;
return double_array;
})()
;
cljs.core.object_array = (function() {
var object_array = null;
var object_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_(size_or_seq))
{return object_array.cljs$lang$arity$2(size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_(size_or_seq))
{return cljs.core.into_array.cljs$lang$arity$1(size_or_seq);
} else
{if("\uFDD0:else")
{throw (new Error("object-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var object_array__2 = (function (size,init_val_or_seq){
var a = cljs.core.make_array.cljs$lang$arity$1(size);
if(cljs.core.seq_QMARK_(init_val_or_seq))
{var s = cljs.core.seq(init_val_or_seq);
var i = 0;
var s__$1 = s;
while(true){
if(cljs.core.truth_((function (){var and__3941__auto__ = s__$1;
if(and__3941__auto__)
{return (i < size);
} else
{return and__3941__auto__;
}
})()))
{(a[i] = cljs.core.first(s__$1));
{
var G__25842 = (i + 1);
var G__25843 = cljs.core.next(s__$1);
i = G__25842;
s__$1 = G__25843;
continue;
}
} else
{return a;
}
break;
}
} else
{var n__6007__auto___25844 = size;
var i_25845 = 0;
while(true){
if((i_25845 < n__6007__auto___25844))
{(a[i_25845] = init_val_or_seq);
{
var G__25846 = (i_25845 + 1);
i_25845 = G__25846;
continue;
}
} else
{}
break;
}
return a;
}
});
object_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return object_array__1.call(this,size);
case 2:
return object_array__2.call(this,size,init_val_or_seq);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
object_array.cljs$lang$arity$1 = object_array__1;
object_array.cljs$lang$arity$2 = object_array__2;
return object_array;
})()
;
cljs.core.bounded_count = (function bounded_count(s,n){
if(cljs.core.counted_QMARK_(s))
{return cljs.core.count(s);
} else
{var s__$1 = s;
var i = n;
var sum = 0;
while(true){
if(cljs.core.truth_((function (){var and__3941__auto__ = (i > 0);
if(and__3941__auto__)
{return cljs.core.seq(s__$1);
} else
{return and__3941__auto__;
}
})()))
{{
var G__25847 = cljs.core.next(s__$1);
var G__25848 = (i - 1);
var G__25849 = (sum + 1);
s__$1 = G__25847;
i = G__25848;
sum = G__25849;
continue;
}
} else
{return sum;
}
break;
}
}
});
cljs.core.spread = (function spread(arglist){
if((arglist == null))
{return null;
} else
{if((cljs.core.next(arglist) == null))
{return cljs.core.seq(cljs.core.first(arglist));
} else
{if("\uFDD0:else")
{return cljs.core.cons(cljs.core.first(arglist),spread(cljs.core.next(arglist)));
} else
{return null;
}
}
}
});
/**
* Returns a lazy seq representing the concatenation of the elements in the supplied colls.
* @param {...*} var_args
*/
cljs.core.concat = (function() {
var concat = null;
var concat__0 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
}),null));
});
var concat__1 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
}),null));
});
var concat__2 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s = cljs.core.seq(x);
if(s)
{if(cljs.core.chunked_seq_QMARK_(s))
{return cljs.core.chunk_cons(cljs.core.chunk_first(s),concat.cljs$lang$arity$2(cljs.core.chunk_rest(s),y));
} else
{return cljs.core.cons(cljs.core.first(s),concat.cljs$lang$arity$2(cljs.core.rest(s),y));
}
} else
{return y;
}
}),null));
});
var concat__3 = (function() { 
var G__25850__delegate = function (x,y,zs){
var cat = (function cat(xys,zs__$1){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__$1 = cljs.core.seq(xys);
if(xys__$1)
{if(cljs.core.chunked_seq_QMARK_(xys__$1))
{return cljs.core.chunk_cons(cljs.core.chunk_first(xys__$1),cat(cljs.core.chunk_rest(xys__$1),zs__$1));
} else
{return cljs.core.cons(cljs.core.first(xys__$1),cat(cljs.core.rest(xys__$1),zs__$1));
}
} else
{if(cljs.core.truth_(zs__$1))
{return cat(cljs.core.first(zs__$1),cljs.core.next(zs__$1));
} else
{return null;
}
}
}),null));
});
return cat(concat.cljs$lang$arity$2(x,y),zs);
};
var G__25850 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__25850__delegate.call(this, x, y, zs);
};
G__25850.cljs$lang$maxFixedArity = 2;
G__25850.cljs$lang$applyTo = (function (arglist__25851){
var x = cljs.core.first(arglist__25851);
var y = cljs.core.first(cljs.core.next(arglist__25851));
var zs = cljs.core.rest(cljs.core.next(arglist__25851));
return G__25850__delegate(x, y, zs);
});
G__25850.cljs$lang$arity$variadic = G__25850__delegate;
return G__25850;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return concat__0.call(this);
case 1:
return concat__1.call(this,x);
case 2:
return concat__2.call(this,x,y);
default:
return concat__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__3.cljs$lang$applyTo;
concat.cljs$lang$arity$0 = concat__0;
concat.cljs$lang$arity$1 = concat__1;
concat.cljs$lang$arity$2 = concat__2;
concat.cljs$lang$arity$variadic = concat__3.cljs$lang$arity$variadic;
return concat;
})()
;
/**
* Creates a new list containing the items prepended to the rest, the
* last of which will be treated as a sequence.
* @param {...*} var_args
*/
cljs.core.list_STAR_ = (function() {
var list_STAR_ = null;
var list_STAR___1 = (function (args){
return cljs.core.seq(args);
});
var list_STAR___2 = (function (a,args){
return cljs.core.cons(a,args);
});
var list_STAR___3 = (function (a,b,args){
return cljs.core.cons(a,cljs.core.cons(b,args));
});
var list_STAR___4 = (function (a,b,c,args){
return cljs.core.cons(a,cljs.core.cons(b,cljs.core.cons(c,args)));
});
var list_STAR___5 = (function() { 
var G__25852__delegate = function (a,b,c,d,more){
return cljs.core.cons(a,cljs.core.cons(b,cljs.core.cons(c,cljs.core.cons(d,cljs.core.spread(more)))));
};
var G__25852 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__25852__delegate.call(this, a, b, c, d, more);
};
G__25852.cljs$lang$maxFixedArity = 4;
G__25852.cljs$lang$applyTo = (function (arglist__25853){
var a = cljs.core.first(arglist__25853);
var b = cljs.core.first(cljs.core.next(arglist__25853));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__25853)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__25853))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__25853))));
return G__25852__delegate(a, b, c, d, more);
});
G__25852.cljs$lang$arity$variadic = G__25852__delegate;
return G__25852;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return list_STAR___1.call(this,a);
case 2:
return list_STAR___2.call(this,a,b);
case 3:
return list_STAR___3.call(this,a,b,c);
case 4:
return list_STAR___4.call(this,a,b,c,d);
default:
return list_STAR___5.cljs$lang$arity$variadic(a,b,c,d, cljs.core.array_seq(arguments, 4));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___5.cljs$lang$applyTo;
list_STAR_.cljs$lang$arity$1 = list_STAR___1;
list_STAR_.cljs$lang$arity$2 = list_STAR___2;
list_STAR_.cljs$lang$arity$3 = list_STAR___3;
list_STAR_.cljs$lang$arity$4 = list_STAR___4;
list_STAR_.cljs$lang$arity$variadic = list_STAR___5.cljs$lang$arity$variadic;
return list_STAR_;
})()
;
cljs.core.transient$ = (function transient$(coll){
return cljs.core._as_transient(coll);
});
cljs.core.persistent_BANG_ = (function persistent_BANG_(tcoll){
return cljs.core._persistent_BANG_(tcoll);
});
cljs.core.conj_BANG_ = (function conj_BANG_(tcoll,val){
return cljs.core._conj_BANG_(tcoll,val);
});
cljs.core.assoc_BANG_ = (function assoc_BANG_(tcoll,key,val){
return cljs.core._assoc_BANG_(tcoll,key,val);
});
cljs.core.dissoc_BANG_ = (function dissoc_BANG_(tcoll,key){
return cljs.core._dissoc_BANG_(tcoll,key);
});
cljs.core.pop_BANG_ = (function pop_BANG_(tcoll){
return cljs.core._pop_BANG_(tcoll);
});
cljs.core.disj_BANG_ = (function disj_BANG_(tcoll,val){
return cljs.core._disjoin_BANG_(tcoll,val);
});
cljs.core.apply_to = (function apply_to(f,argc,args){
var args__$1 = cljs.core.seq(args);
if((argc === 0))
{return (f.cljs$lang$arity$0 ? f.cljs$lang$arity$0() : f.call(null));
} else
{var a = cljs.core._first(args__$1);
var args__$2 = cljs.core._rest(args__$1);
if((argc === 1))
{if(f.cljs$lang$arity$1)
{return f.cljs$lang$arity$1(a);
} else
{return (f.cljs$lang$arity$1 ? f.cljs$lang$arity$1(a) : f.call(null,a));
}
} else
{var b = cljs.core._first(args__$2);
var args__$3 = cljs.core._rest(args__$2);
if((argc === 2))
{if(f.cljs$lang$arity$2)
{return f.cljs$lang$arity$2(a,b);
} else
{return (f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(a,b) : f.call(null,a,b));
}
} else
{var c = cljs.core._first(args__$3);
var args__$4 = cljs.core._rest(args__$3);
if((argc === 3))
{if(f.cljs$lang$arity$3)
{return f.cljs$lang$arity$3(a,b,c);
} else
{return (f.cljs$lang$arity$3 ? f.cljs$lang$arity$3(a,b,c) : f.call(null,a,b,c));
}
} else
{var d = cljs.core._first(args__$4);
var args__$5 = cljs.core._rest(args__$4);
if((argc === 4))
{if(f.cljs$lang$arity$4)
{return f.cljs$lang$arity$4(a,b,c,d);
} else
{return (f.cljs$lang$arity$4 ? f.cljs$lang$arity$4(a,b,c,d) : f.call(null,a,b,c,d));
}
} else
{var e = cljs.core._first(args__$5);
var args__$6 = cljs.core._rest(args__$5);
if((argc === 5))
{if(f.cljs$lang$arity$5)
{return f.cljs$lang$arity$5(a,b,c,d,e);
} else
{return (f.cljs$lang$arity$5 ? f.cljs$lang$arity$5(a,b,c,d,e) : f.call(null,a,b,c,d,e));
}
} else
{var f__$1 = cljs.core._first(args__$6);
var args__$7 = cljs.core._rest(args__$6);
if((argc === 6))
{if(f__$1.cljs$lang$arity$6)
{return f__$1.cljs$lang$arity$6(a,b,c,d,e,f__$1);
} else
{return (f__$1.cljs$lang$arity$6 ? f__$1.cljs$lang$arity$6(a,b,c,d,e,f__$1) : f__$1.call(null,a,b,c,d,e,f__$1));
}
} else
{var g = cljs.core._first(args__$7);
var args__$8 = cljs.core._rest(args__$7);
if((argc === 7))
{if(f__$1.cljs$lang$arity$7)
{return f__$1.cljs$lang$arity$7(a,b,c,d,e,f__$1,g);
} else
{return (f__$1.cljs$lang$arity$7 ? f__$1.cljs$lang$arity$7(a,b,c,d,e,f__$1,g) : f__$1.call(null,a,b,c,d,e,f__$1,g));
}
} else
{var h = cljs.core._first(args__$8);
var args__$9 = cljs.core._rest(args__$8);
if((argc === 8))
{if(f__$1.cljs$lang$arity$8)
{return f__$1.cljs$lang$arity$8(a,b,c,d,e,f__$1,g,h);
} else
{return (f__$1.cljs$lang$arity$8 ? f__$1.cljs$lang$arity$8(a,b,c,d,e,f__$1,g,h) : f__$1.call(null,a,b,c,d,e,f__$1,g,h));
}
} else
{var i = cljs.core._first(args__$9);
var args__$10 = cljs.core._rest(args__$9);
if((argc === 9))
{if(f__$1.cljs$lang$arity$9)
{return f__$1.cljs$lang$arity$9(a,b,c,d,e,f__$1,g,h,i);
} else
{return (f__$1.cljs$lang$arity$9 ? f__$1.cljs$lang$arity$9(a,b,c,d,e,f__$1,g,h,i) : f__$1.call(null,a,b,c,d,e,f__$1,g,h,i));
}
} else
{var j = cljs.core._first(args__$10);
var args__$11 = cljs.core._rest(args__$10);
if((argc === 10))
{if(f__$1.cljs$lang$arity$10)
{return f__$1.cljs$lang$arity$10(a,b,c,d,e,f__$1,g,h,i,j);
} else
{return (f__$1.cljs$lang$arity$10 ? f__$1.cljs$lang$arity$10(a,b,c,d,e,f__$1,g,h,i,j) : f__$1.call(null,a,b,c,d,e,f__$1,g,h,i,j));
}
} else
{var k = cljs.core._first(args__$11);
var args__$12 = cljs.core._rest(args__$11);
if((argc === 11))
{if(f__$1.cljs$lang$arity$11)
{return f__$1.cljs$lang$arity$11(a,b,c,d,e,f__$1,g,h,i,j,k);
} else
{return (f__$1.cljs$lang$arity$11 ? f__$1.cljs$lang$arity$11(a,b,c,d,e,f__$1,g,h,i,j,k) : f__$1.call(null,a,b,c,d,e,f__$1,g,h,i,j,k));
}
} else
{var l = cljs.core._first(args__$12);
var args__$13 = cljs.core._rest(args__$12);
if((argc === 12))
{if(f__$1.cljs$lang$arity$12)
{return f__$1.cljs$lang$arity$12(a,b,c,d,e,f__$1,g,h,i,j,k,l);
} else
{return (f__$1.cljs$lang$arity$12 ? f__$1.cljs$lang$arity$12(a,b,c,d,e,f__$1,g,h,i,j,k,l) : f__$1.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l));
}
} else
{var m = cljs.core._first(args__$13);
var args__$14 = cljs.core._rest(args__$13);
if((argc === 13))
{if(f__$1.cljs$lang$arity$13)
{return f__$1.cljs$lang$arity$13(a,b,c,d,e,f__$1,g,h,i,j,k,l,m);
} else
{return (f__$1.cljs$lang$arity$13 ? f__$1.cljs$lang$arity$13(a,b,c,d,e,f__$1,g,h,i,j,k,l,m) : f__$1.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m));
}
} else
{var n = cljs.core._first(args__$14);
var args__$15 = cljs.core._rest(args__$14);
if((argc === 14))
{if(f__$1.cljs$lang$arity$14)
{return f__$1.cljs$lang$arity$14(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n);
} else
{return (f__$1.cljs$lang$arity$14 ? f__$1.cljs$lang$arity$14(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n) : f__$1.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n));
}
} else
{var o = cljs.core._first(args__$15);
var args__$16 = cljs.core._rest(args__$15);
if((argc === 15))
{if(f__$1.cljs$lang$arity$15)
{return f__$1.cljs$lang$arity$15(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o);
} else
{return (f__$1.cljs$lang$arity$15 ? f__$1.cljs$lang$arity$15(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o) : f__$1.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o));
}
} else
{var p = cljs.core._first(args__$16);
var args__$17 = cljs.core._rest(args__$16);
if((argc === 16))
{if(f__$1.cljs$lang$arity$16)
{return f__$1.cljs$lang$arity$16(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p);
} else
{return (f__$1.cljs$lang$arity$16 ? f__$1.cljs$lang$arity$16(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p) : f__$1.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p));
}
} else
{var q = cljs.core._first(args__$17);
var args__$18 = cljs.core._rest(args__$17);
if((argc === 17))
{if(f__$1.cljs$lang$arity$17)
{return f__$1.cljs$lang$arity$17(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (f__$1.cljs$lang$arity$17 ? f__$1.cljs$lang$arity$17(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q) : f__$1.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q));
}
} else
{var r = cljs.core._first(args__$18);
var args__$19 = cljs.core._rest(args__$18);
if((argc === 18))
{if(f__$1.cljs$lang$arity$18)
{return f__$1.cljs$lang$arity$18(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r);
} else
{return (f__$1.cljs$lang$arity$18 ? f__$1.cljs$lang$arity$18(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r) : f__$1.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r));
}
} else
{var s = cljs.core._first(args__$19);
var args__$20 = cljs.core._rest(args__$19);
if((argc === 19))
{if(f__$1.cljs$lang$arity$19)
{return f__$1.cljs$lang$arity$19(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s);
} else
{return (f__$1.cljs$lang$arity$19 ? f__$1.cljs$lang$arity$19(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s) : f__$1.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s));
}
} else
{var t = cljs.core._first(args__$20);
var args__$21 = cljs.core._rest(args__$20);
if((argc === 20))
{if(f__$1.cljs$lang$arity$20)
{return f__$1.cljs$lang$arity$20(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
} else
{return (f__$1.cljs$lang$arity$20 ? f__$1.cljs$lang$arity$20(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t) : f__$1.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t));
}
} else
{throw (new Error("Only up to 20 arguments supported on functions"));
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
}
}
}
}
}
});
/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__2 = (function (f,args){
var fixed_arity = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc = cljs.core.bounded_count(args,(fixed_arity + 1));
if((bc <= fixed_arity))
{return cljs.core.apply_to(f,bc,args);
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array(args));
}
});
var apply__3 = (function (f,x,args){
var arglist = cljs.core.list_STAR_.cljs$lang$arity$2(x,args);
var fixed_arity = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc = cljs.core.bounded_count(arglist,(fixed_arity + 1));
if((bc <= fixed_arity))
{return cljs.core.apply_to(f,bc,arglist);
} else
{return f.cljs$lang$applyTo(arglist);
}
} else
{return f.apply(f,cljs.core.to_array(arglist));
}
});
var apply__4 = (function (f,x,y,args){
var arglist = cljs.core.list_STAR_.cljs$lang$arity$3(x,y,args);
var fixed_arity = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc = cljs.core.bounded_count(arglist,(fixed_arity + 1));
if((bc <= fixed_arity))
{return cljs.core.apply_to(f,bc,arglist);
} else
{return f.cljs$lang$applyTo(arglist);
}
} else
{return f.apply(f,cljs.core.to_array(arglist));
}
});
var apply__5 = (function (f,x,y,z,args){
var arglist = cljs.core.list_STAR_.cljs$lang$arity$4(x,y,z,args);
var fixed_arity = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc = cljs.core.bounded_count(arglist,(fixed_arity + 1));
if((bc <= fixed_arity))
{return cljs.core.apply_to(f,bc,arglist);
} else
{return f.cljs$lang$applyTo(arglist);
}
} else
{return f.apply(f,cljs.core.to_array(arglist));
}
});
var apply__6 = (function() { 
var G__25854__delegate = function (f,a,b,c,d,args){
var arglist = cljs.core.cons(a,cljs.core.cons(b,cljs.core.cons(c,cljs.core.cons(d,cljs.core.spread(args)))));
var fixed_arity = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc = cljs.core.bounded_count(arglist,(fixed_arity + 1));
if((bc <= fixed_arity))
{return cljs.core.apply_to(f,bc,arglist);
} else
{return f.cljs$lang$applyTo(arglist);
}
} else
{return f.apply(f,cljs.core.to_array(arglist));
}
};
var G__25854 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__25854__delegate.call(this, f, a, b, c, d, args);
};
G__25854.cljs$lang$maxFixedArity = 5;
G__25854.cljs$lang$applyTo = (function (arglist__25855){
var f = cljs.core.first(arglist__25855);
var a = cljs.core.first(cljs.core.next(arglist__25855));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__25855)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__25855))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__25855)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__25855)))));
return G__25854__delegate(f, a, b, c, d, args);
});
G__25854.cljs$lang$arity$variadic = G__25854__delegate;
return G__25854;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return apply__2.call(this,f,a);
case 3:
return apply__3.call(this,f,a,b);
case 4:
return apply__4.call(this,f,a,b,c);
case 5:
return apply__5.call(this,f,a,b,c,d);
default:
return apply__6.cljs$lang$arity$variadic(f,a,b,c,d, cljs.core.array_seq(arguments, 5));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__6.cljs$lang$applyTo;
apply.cljs$lang$arity$2 = apply__2;
apply.cljs$lang$arity$3 = apply__3;
apply.cljs$lang$arity$4 = apply__4;
apply.cljs$lang$arity$5 = apply__5;
apply.cljs$lang$arity$variadic = apply__6.cljs$lang$arity$variadic;
return apply;
})()
;
/**
* Returns an object of the same type and value as obj, with
* (apply f (meta obj) args) as its metadata.
* @param {...*} var_args
*/
cljs.core.vary_meta = (function() { 
var vary_meta__delegate = function (obj,f,args){
return cljs.core.with_meta(obj,cljs.core.apply.cljs$lang$arity$3(f,cljs.core.meta(obj),args));
};
var vary_meta = function (obj,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return vary_meta__delegate.call(this, obj, f, args);
};
vary_meta.cljs$lang$maxFixedArity = 2;
vary_meta.cljs$lang$applyTo = (function (arglist__25856){
var obj = cljs.core.first(arglist__25856);
var f = cljs.core.first(cljs.core.next(arglist__25856));
var args = cljs.core.rest(cljs.core.next(arglist__25856));
return vary_meta__delegate(obj, f, args);
});
vary_meta.cljs$lang$arity$variadic = vary_meta__delegate;
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___1 = (function (x){
return false;
});
var not_EQ___2 = (function (x,y){
return !(cljs.core._EQ_.cljs$lang$arity$2(x,y));
});
var not_EQ___3 = (function() { 
var G__25857__delegate = function (x,y,more){
return cljs.core.not(cljs.core.apply.cljs$lang$arity$4(cljs.core._EQ_,x,y,more));
};
var G__25857 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__25857__delegate.call(this, x, y, more);
};
G__25857.cljs$lang$maxFixedArity = 2;
G__25857.cljs$lang$applyTo = (function (arglist__25858){
var x = cljs.core.first(arglist__25858);
var y = cljs.core.first(cljs.core.next(arglist__25858));
var more = cljs.core.rest(cljs.core.next(arglist__25858));
return G__25857__delegate(x, y, more);
});
G__25857.cljs$lang$arity$variadic = G__25857__delegate;
return G__25857;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return not_EQ___1.call(this,x);
case 2:
return not_EQ___2.call(this,x,y);
default:
return not_EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___3.cljs$lang$applyTo;
not_EQ_.cljs$lang$arity$1 = not_EQ___1;
not_EQ_.cljs$lang$arity$2 = not_EQ___2;
not_EQ_.cljs$lang$arity$variadic = not_EQ___3.cljs$lang$arity$variadic;
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){
if(cljs.core.seq(coll))
{return coll;
} else
{return null;
}
});
/**
* Returns true if (pred x) is logical true for every x in coll, else
* false.
*/
cljs.core.every_QMARK_ = (function every_QMARK_(pred,coll){
while(true){
if((cljs.core.seq(coll) == null))
{return true;
} else
{if(cljs.core.truth_((pred.cljs$lang$arity$1 ? pred.cljs$lang$arity$1(cljs.core.first(coll)) : pred.call(null,cljs.core.first(coll)))))
{{
var G__25859 = pred;
var G__25860 = cljs.core.next(coll);
pred = G__25859;
coll = G__25860;
continue;
}
} else
{if("\uFDD0:else")
{return false;
} else
{return null;
}
}
}
break;
}
});
/**
* Returns false if (pred x) is logical true for every x in
* coll, else true.
*/
cljs.core.not_every_QMARK_ = (function not_every_QMARK_(pred,coll){
return !(cljs.core.every_QMARK_(pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){
while(true){
if(cljs.core.seq(coll))
{var or__3943__auto__ = (pred.cljs$lang$arity$1 ? pred.cljs$lang$arity$1(cljs.core.first(coll)) : pred.call(null,cljs.core.first(coll)));
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{{
var G__25861 = pred;
var G__25862 = cljs.core.next(coll);
pred = G__25861;
coll = G__25862;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Returns false if (pred x) is logical true for any x in coll,
* else true.
*/
cljs.core.not_any_QMARK_ = (function not_any_QMARK_(pred,coll){
return cljs.core.not(cljs.core.some(pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){
if(cljs.core.integer_QMARK_(n))
{return ((n & 1) === 0);
} else
{throw (new Error([cljs.core.str("Argument must be an integer: "),cljs.core.str(n)].join('')));
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){
return !(cljs.core.even_QMARK_(n));
});
cljs.core.identity = (function identity(x){
return x;
});
/**
* Takes a fn f and returns a fn that takes the same arguments as f,
* has the same effects, if any, and returns the opposite truth value.
*/
cljs.core.complement = (function complement(f){
return (function() {
var G__25863 = null;
var G__25863__0 = (function (){
return cljs.core.not((f.cljs$lang$arity$0 ? f.cljs$lang$arity$0() : f.call(null)));
});
var G__25863__1 = (function (x){
return cljs.core.not((f.cljs$lang$arity$1 ? f.cljs$lang$arity$1(x) : f.call(null,x)));
});
var G__25863__2 = (function (x,y){
return cljs.core.not((f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(x,y) : f.call(null,x,y)));
});
var G__25863__3 = (function() { 
var G__25864__delegate = function (x,y,zs){
return cljs.core.not(cljs.core.apply.cljs$lang$arity$4(f,x,y,zs));
};
var G__25864 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__25864__delegate.call(this, x, y, zs);
};
G__25864.cljs$lang$maxFixedArity = 2;
G__25864.cljs$lang$applyTo = (function (arglist__25865){
var x = cljs.core.first(arglist__25865);
var y = cljs.core.first(cljs.core.next(arglist__25865));
var zs = cljs.core.rest(cljs.core.next(arglist__25865));
return G__25864__delegate(x, y, zs);
});
G__25864.cljs$lang$arity$variadic = G__25864__delegate;
return G__25864;
})()
;
G__25863 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return G__25863__0.call(this);
case 1:
return G__25863__1.call(this,x);
case 2:
return G__25863__2.call(this,x,y);
default:
return G__25863__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__25863.cljs$lang$maxFixedArity = 2;
G__25863.cljs$lang$applyTo = G__25863__3.cljs$lang$applyTo;
return G__25863;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__25866__delegate = function (args){
return x;
};
var G__25866 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__25866__delegate.call(this, args);
};
G__25866.cljs$lang$maxFixedArity = 0;
G__25866.cljs$lang$applyTo = (function (arglist__25867){
var args = cljs.core.seq(arglist__25867);;
return G__25866__delegate(args);
});
G__25866.cljs$lang$arity$variadic = G__25866__delegate;
return G__25866;
})()
;
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* @param {...*} var_args
*/
cljs.core.comp = (function() {
var comp = null;
var comp__0 = (function (){
return cljs.core.identity;
});
var comp__1 = (function (f){
return f;
});
var comp__2 = (function (f,g){
return (function() {
var G__25868 = null;
var G__25868__0 = (function (){
return (f.cljs$lang$arity$1 ? f.cljs$lang$arity$1((g.cljs$lang$arity$0 ? g.cljs$lang$arity$0() : g.call(null))) : f.call(null,(g.cljs$lang$arity$0 ? g.cljs$lang$arity$0() : g.call(null))));
});
var G__25868__1 = (function (x){
return (f.cljs$lang$arity$1 ? f.cljs$lang$arity$1((g.cljs$lang$arity$1 ? g.cljs$lang$arity$1(x) : g.call(null,x))) : f.call(null,(g.cljs$lang$arity$1 ? g.cljs$lang$arity$1(x) : g.call(null,x))));
});
var G__25868__2 = (function (x,y){
return (f.cljs$lang$arity$1 ? f.cljs$lang$arity$1((g.cljs$lang$arity$2 ? g.cljs$lang$arity$2(x,y) : g.call(null,x,y))) : f.call(null,(g.cljs$lang$arity$2 ? g.cljs$lang$arity$2(x,y) : g.call(null,x,y))));
});
var G__25868__3 = (function (x,y,z){
return (f.cljs$lang$arity$1 ? f.cljs$lang$arity$1((g.cljs$lang$arity$3 ? g.cljs$lang$arity$3(x,y,z) : g.call(null,x,y,z))) : f.call(null,(g.cljs$lang$arity$3 ? g.cljs$lang$arity$3(x,y,z) : g.call(null,x,y,z))));
});
var G__25868__4 = (function() { 
var G__25869__delegate = function (x,y,z,args){
return (f.cljs$lang$arity$1 ? f.cljs$lang$arity$1(cljs.core.apply.cljs$lang$arity$5(g,x,y,z,args)) : f.call(null,cljs.core.apply.cljs$lang$arity$5(g,x,y,z,args)));
};
var G__25869 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__25869__delegate.call(this, x, y, z, args);
};
G__25869.cljs$lang$maxFixedArity = 3;
G__25869.cljs$lang$applyTo = (function (arglist__25870){
var x = cljs.core.first(arglist__25870);
var y = cljs.core.first(cljs.core.next(arglist__25870));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__25870)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__25870)));
return G__25869__delegate(x, y, z, args);
});
G__25869.cljs$lang$arity$variadic = G__25869__delegate;
return G__25869;
})()
;
G__25868 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__25868__0.call(this);
case 1:
return G__25868__1.call(this,x);
case 2:
return G__25868__2.call(this,x,y);
case 3:
return G__25868__3.call(this,x,y,z);
default:
return G__25868__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__25868.cljs$lang$maxFixedArity = 3;
G__25868.cljs$lang$applyTo = G__25868__4.cljs$lang$applyTo;
return G__25868;
})()
});
var comp__3 = (function (f,g,h){
return (function() {
var G__25871 = null;
var G__25871__0 = (function (){
return (f.cljs$lang$arity$1 ? f.cljs$lang$arity$1((g.cljs$lang$arity$1 ? g.cljs$lang$arity$1((h.cljs$lang$arity$0 ? h.cljs$lang$arity$0() : h.call(null))) : g.call(null,(h.cljs$lang$arity$0 ? h.cljs$lang$arity$0() : h.call(null))))) : f.call(null,(g.cljs$lang$arity$1 ? g.cljs$lang$arity$1((h.cljs$lang$arity$0 ? h.cljs$lang$arity$0() : h.call(null))) : g.call(null,(h.cljs$lang$arity$0 ? h.cljs$lang$arity$0() : h.call(null))))));
});
var G__25871__1 = (function (x){
return (f.cljs$lang$arity$1 ? f.cljs$lang$arity$1((g.cljs$lang$arity$1 ? g.cljs$lang$arity$1((h.cljs$lang$arity$1 ? h.cljs$lang$arity$1(x) : h.call(null,x))) : g.call(null,(h.cljs$lang$arity$1 ? h.cljs$lang$arity$1(x) : h.call(null,x))))) : f.call(null,(g.cljs$lang$arity$1 ? g.cljs$lang$arity$1((h.cljs$lang$arity$1 ? h.cljs$lang$arity$1(x) : h.call(null,x))) : g.call(null,(h.cljs$lang$arity$1 ? h.cljs$lang$arity$1(x) : h.call(null,x))))));
});
var G__25871__2 = (function (x,y){
return (f.cljs$lang$arity$1 ? f.cljs$lang$arity$1((g.cljs$lang$arity$1 ? g.cljs$lang$arity$1((h.cljs$lang$arity$2 ? h.cljs$lang$arity$2(x,y) : h.call(null,x,y))) : g.call(null,(h.cljs$lang$arity$2 ? h.cljs$lang$arity$2(x,y) : h.call(null,x,y))))) : f.call(null,(g.cljs$lang$arity$1 ? g.cljs$lang$arity$1((h.cljs$lang$arity$2 ? h.cljs$lang$arity$2(x,y) : h.call(null,x,y))) : g.call(null,(h.cljs$lang$arity$2 ? h.cljs$lang$arity$2(x,y) : h.call(null,x,y))))));
});
var G__25871__3 = (function (x,y,z){
return (f.cljs$lang$arity$1 ? f.cljs$lang$arity$1((g.cljs$lang$arity$1 ? g.cljs$lang$arity$1((h.cljs$lang$arity$3 ? h.cljs$lang$arity$3(x,y,z) : h.call(null,x,y,z))) : g.call(null,(h.cljs$lang$arity$3 ? h.cljs$lang$arity$3(x,y,z) : h.call(null,x,y,z))))) : f.call(null,(g.cljs$lang$arity$1 ? g.cljs$lang$arity$1((h.cljs$lang$arity$3 ? h.cljs$lang$arity$3(x,y,z) : h.call(null,x,y,z))) : g.call(null,(h.cljs$lang$arity$3 ? h.cljs$lang$arity$3(x,y,z) : h.call(null,x,y,z))))));
});
var G__25871__4 = (function() { 
var G__25872__delegate = function (x,y,z,args){
return (f.cljs$lang$arity$1 ? f.cljs$lang$arity$1((g.cljs$lang$arity$1 ? g.cljs$lang$arity$1(cljs.core.apply.cljs$lang$arity$5(h,x,y,z,args)) : g.call(null,cljs.core.apply.cljs$lang$arity$5(h,x,y,z,args)))) : f.call(null,(g.cljs$lang$arity$1 ? g.cljs$lang$arity$1(cljs.core.apply.cljs$lang$arity$5(h,x,y,z,args)) : g.call(null,cljs.core.apply.cljs$lang$arity$5(h,x,y,z,args)))));
};
var G__25872 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__25872__delegate.call(this, x, y, z, args);
};
G__25872.cljs$lang$maxFixedArity = 3;
G__25872.cljs$lang$applyTo = (function (arglist__25873){
var x = cljs.core.first(arglist__25873);
var y = cljs.core.first(cljs.core.next(arglist__25873));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__25873)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__25873)));
return G__25872__delegate(x, y, z, args);
});
G__25872.cljs$lang$arity$variadic = G__25872__delegate;
return G__25872;
})()
;
G__25871 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__25871__0.call(this);
case 1:
return G__25871__1.call(this,x);
case 2:
return G__25871__2.call(this,x,y);
case 3:
return G__25871__3.call(this,x,y,z);
default:
return G__25871__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__25871.cljs$lang$maxFixedArity = 3;
G__25871.cljs$lang$applyTo = G__25871__4.cljs$lang$applyTo;
return G__25871;
})()
});
var comp__4 = (function() { 
var G__25874__delegate = function (f1,f2,f3,fs){
var fs__$1 = cljs.core.reverse(cljs.core.list_STAR_.cljs$lang$arity$4(f1,f2,f3,fs));
return (function() { 
var G__25875__delegate = function (args){
var ret = cljs.core.apply.cljs$lang$arity$2(cljs.core.first(fs__$1),args);
var fs__$2 = cljs.core.next(fs__$1);
while(true){
if(fs__$2)
{{
var G__25876 = cljs.core.first(fs__$2).call(null,ret);
var G__25877 = cljs.core.next(fs__$2);
ret = G__25876;
fs__$2 = G__25877;
continue;
}
} else
{return ret;
}
break;
}
};
var G__25875 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__25875__delegate.call(this, args);
};
G__25875.cljs$lang$maxFixedArity = 0;
G__25875.cljs$lang$applyTo = (function (arglist__25878){
var args = cljs.core.seq(arglist__25878);;
return G__25875__delegate(args);
});
G__25875.cljs$lang$arity$variadic = G__25875__delegate;
return G__25875;
})()
;
};
var G__25874 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__25874__delegate.call(this, f1, f2, f3, fs);
};
G__25874.cljs$lang$maxFixedArity = 3;
G__25874.cljs$lang$applyTo = (function (arglist__25879){
var f1 = cljs.core.first(arglist__25879);
var f2 = cljs.core.first(cljs.core.next(arglist__25879));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__25879)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__25879)));
return G__25874__delegate(f1, f2, f3, fs);
});
G__25874.cljs$lang$arity$variadic = G__25874__delegate;
return G__25874;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case 0:
return comp__0.call(this);
case 1:
return comp__1.call(this,f1);
case 2:
return comp__2.call(this,f1,f2);
case 3:
return comp__3.call(this,f1,f2,f3);
default:
return comp__4.cljs$lang$arity$variadic(f1,f2,f3, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__4.cljs$lang$applyTo;
comp.cljs$lang$arity$0 = comp__0;
comp.cljs$lang$arity$1 = comp__1;
comp.cljs$lang$arity$2 = comp__2;
comp.cljs$lang$arity$3 = comp__3;
comp.cljs$lang$arity$variadic = comp__4.cljs$lang$arity$variadic;
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* @param {...*} var_args
*/
cljs.core.partial = (function() {
var partial = null;
var partial__2 = (function (f,arg1){
return (function() { 
var G__25880__delegate = function (args){
return cljs.core.apply.cljs$lang$arity$3(f,arg1,args);
};
var G__25880 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__25880__delegate.call(this, args);
};
G__25880.cljs$lang$maxFixedArity = 0;
G__25880.cljs$lang$applyTo = (function (arglist__25881){
var args = cljs.core.seq(arglist__25881);;
return G__25880__delegate(args);
});
G__25880.cljs$lang$arity$variadic = G__25880__delegate;
return G__25880;
})()
;
});
var partial__3 = (function (f,arg1,arg2){
return (function() { 
var G__25882__delegate = function (args){
return cljs.core.apply.cljs$lang$arity$4(f,arg1,arg2,args);
};
var G__25882 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__25882__delegate.call(this, args);
};
G__25882.cljs$lang$maxFixedArity = 0;
G__25882.cljs$lang$applyTo = (function (arglist__25883){
var args = cljs.core.seq(arglist__25883);;
return G__25882__delegate(args);
});
G__25882.cljs$lang$arity$variadic = G__25882__delegate;
return G__25882;
})()
;
});
var partial__4 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__25884__delegate = function (args){
return cljs.core.apply.cljs$lang$arity$5(f,arg1,arg2,arg3,args);
};
var G__25884 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__25884__delegate.call(this, args);
};
G__25884.cljs$lang$maxFixedArity = 0;
G__25884.cljs$lang$applyTo = (function (arglist__25885){
var args = cljs.core.seq(arglist__25885);;
return G__25884__delegate(args);
});
G__25884.cljs$lang$arity$variadic = G__25884__delegate;
return G__25884;
})()
;
});
var partial__5 = (function() { 
var G__25886__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__25887__delegate = function (args){
return cljs.core.apply.cljs$lang$arity$5(f,arg1,arg2,arg3,cljs.core.concat.cljs$lang$arity$2(more,args));
};
var G__25887 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__25887__delegate.call(this, args);
};
G__25887.cljs$lang$maxFixedArity = 0;
G__25887.cljs$lang$applyTo = (function (arglist__25888){
var args = cljs.core.seq(arglist__25888);;
return G__25887__delegate(args);
});
G__25887.cljs$lang$arity$variadic = G__25887__delegate;
return G__25887;
})()
;
};
var G__25886 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__25886__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__25886.cljs$lang$maxFixedArity = 4;
G__25886.cljs$lang$applyTo = (function (arglist__25889){
var f = cljs.core.first(arglist__25889);
var arg1 = cljs.core.first(cljs.core.next(arglist__25889));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__25889)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__25889))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__25889))));
return G__25886__delegate(f, arg1, arg2, arg3, more);
});
G__25886.cljs$lang$arity$variadic = G__25886__delegate;
return G__25886;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return partial__2.call(this,f,arg1);
case 3:
return partial__3.call(this,f,arg1,arg2);
case 4:
return partial__4.call(this,f,arg1,arg2,arg3);
default:
return partial__5.cljs$lang$arity$variadic(f,arg1,arg2,arg3, cljs.core.array_seq(arguments, 4));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__5.cljs$lang$applyTo;
partial.cljs$lang$arity$2 = partial__2;
partial.cljs$lang$arity$3 = partial__3;
partial.cljs$lang$arity$4 = partial__4;
partial.cljs$lang$arity$variadic = partial__5.cljs$lang$arity$variadic;
return partial;
})()
;
/**
* Takes a function f, and returns a function that calls f, replacing
* a nil first argument to f with the supplied value x. Higher arity
* versions can replace arguments in the second and third
* positions (y, z). Note that the function f can take any number of
* arguments, not just the one(s) being nil-patched.
*/
cljs.core.fnil = (function() {
var fnil = null;
var fnil__2 = (function (f,x){
return (function() {
var G__25890 = null;
var G__25890__1 = (function (a){
return (f.cljs$lang$arity$1 ? f.cljs$lang$arity$1((((a == null))?x:a)) : f.call(null,(((a == null))?x:a)));
});
var G__25890__2 = (function (a,b){
return (f.cljs$lang$arity$2 ? f.cljs$lang$arity$2((((a == null))?x:a),b) : f.call(null,(((a == null))?x:a),b));
});
var G__25890__3 = (function (a,b,c){
return (f.cljs$lang$arity$3 ? f.cljs$lang$arity$3((((a == null))?x:a),b,c) : f.call(null,(((a == null))?x:a),b,c));
});
var G__25890__4 = (function() { 
var G__25891__delegate = function (a,b,c,ds){
return cljs.core.apply.cljs$lang$arity$5(f,(((a == null))?x:a),b,c,ds);
};
var G__25891 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__25891__delegate.call(this, a, b, c, ds);
};
G__25891.cljs$lang$maxFixedArity = 3;
G__25891.cljs$lang$applyTo = (function (arglist__25892){
var a = cljs.core.first(arglist__25892);
var b = cljs.core.first(cljs.core.next(arglist__25892));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__25892)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__25892)));
return G__25891__delegate(a, b, c, ds);
});
G__25891.cljs$lang$arity$variadic = G__25891__delegate;
return G__25891;
})()
;
G__25890 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 1:
return G__25890__1.call(this,a);
case 2:
return G__25890__2.call(this,a,b);
case 3:
return G__25890__3.call(this,a,b,c);
default:
return G__25890__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__25890.cljs$lang$maxFixedArity = 3;
G__25890.cljs$lang$applyTo = G__25890__4.cljs$lang$applyTo;
return G__25890;
})()
});
var fnil__3 = (function (f,x,y){
return (function() {
var G__25893 = null;
var G__25893__2 = (function (a,b){
return (f.cljs$lang$arity$2 ? f.cljs$lang$arity$2((((a == null))?x:a),(((b == null))?y:b)) : f.call(null,(((a == null))?x:a),(((b == null))?y:b)));
});
var G__25893__3 = (function (a,b,c){
return (f.cljs$lang$arity$3 ? f.cljs$lang$arity$3((((a == null))?x:a),(((b == null))?y:b),c) : f.call(null,(((a == null))?x:a),(((b == null))?y:b),c));
});
var G__25893__4 = (function() { 
var G__25894__delegate = function (a,b,c,ds){
return cljs.core.apply.cljs$lang$arity$5(f,(((a == null))?x:a),(((b == null))?y:b),c,ds);
};
var G__25894 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__25894__delegate.call(this, a, b, c, ds);
};
G__25894.cljs$lang$maxFixedArity = 3;
G__25894.cljs$lang$applyTo = (function (arglist__25895){
var a = cljs.core.first(arglist__25895);
var b = cljs.core.first(cljs.core.next(arglist__25895));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__25895)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__25895)));
return G__25894__delegate(a, b, c, ds);
});
G__25894.cljs$lang$arity$variadic = G__25894__delegate;
return G__25894;
})()
;
G__25893 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__25893__2.call(this,a,b);
case 3:
return G__25893__3.call(this,a,b,c);
default:
return G__25893__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__25893.cljs$lang$maxFixedArity = 3;
G__25893.cljs$lang$applyTo = G__25893__4.cljs$lang$applyTo;
return G__25893;
})()
});
var fnil__4 = (function (f,x,y,z){
return (function() {
var G__25896 = null;
var G__25896__2 = (function (a,b){
return (f.cljs$lang$arity$2 ? f.cljs$lang$arity$2((((a == null))?x:a),(((b == null))?y:b)) : f.call(null,(((a == null))?x:a),(((b == null))?y:b)));
});
var G__25896__3 = (function (a,b,c){
return (f.cljs$lang$arity$3 ? f.cljs$lang$arity$3((((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c)) : f.call(null,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c)));
});
var G__25896__4 = (function() { 
var G__25897__delegate = function (a,b,c,ds){
return cljs.core.apply.cljs$lang$arity$5(f,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c),ds);
};
var G__25897 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__25897__delegate.call(this, a, b, c, ds);
};
G__25897.cljs$lang$maxFixedArity = 3;
G__25897.cljs$lang$applyTo = (function (arglist__25898){
var a = cljs.core.first(arglist__25898);
var b = cljs.core.first(cljs.core.next(arglist__25898));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__25898)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__25898)));
return G__25897__delegate(a, b, c, ds);
});
G__25897.cljs$lang$arity$variadic = G__25897__delegate;
return G__25897;
})()
;
G__25896 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__25896__2.call(this,a,b);
case 3:
return G__25896__3.call(this,a,b,c);
default:
return G__25896__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__25896.cljs$lang$maxFixedArity = 3;
G__25896.cljs$lang$applyTo = G__25896__4.cljs$lang$applyTo;
return G__25896;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case 2:
return fnil__2.call(this,f,x);
case 3:
return fnil__3.call(this,f,x,y);
case 4:
return fnil__4.call(this,f,x,y,z);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fnil.cljs$lang$arity$2 = fnil__2;
fnil.cljs$lang$arity$3 = fnil__3;
fnil.cljs$lang$arity$4 = fnil__4;
return fnil;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to 0
* and the first item of coll, followed by applying f to 1 and the second
* item in coll, etc, until coll is exhausted. Thus function f should
* accept 2 arguments, index and item.
*/
cljs.core.map_indexed = (function map_indexed(f,coll){
var mapi = (function mapi(idx,coll__$1){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4092__auto__ = cljs.core.seq(coll__$1);
if(temp__4092__auto__)
{var s = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_(s))
{var c = cljs.core.chunk_first(s);
var size = cljs.core.count(c);
var b = cljs.core.chunk_buffer(size);
var n__6007__auto___25899 = size;
var i_25900 = 0;
while(true){
if((i_25900 < n__6007__auto___25899))
{cljs.core.chunk_append(b,(f.cljs$lang$arity$2 ? f.cljs$lang$arity$2((idx + i_25900),cljs.core._nth.cljs$lang$arity$2(c,i_25900)) : f.call(null,(idx + i_25900),cljs.core._nth.cljs$lang$arity$2(c,i_25900))));
{
var G__25901 = (i_25900 + 1);
i_25900 = G__25901;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons(cljs.core.chunk(b),mapi((idx + size),cljs.core.chunk_rest(s)));
} else
{return cljs.core.cons((f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(idx,cljs.core.first(s)) : f.call(null,idx,cljs.core.first(s))),mapi((idx + 1),cljs.core.rest(s)));
}
} else
{return null;
}
}),null));
});
return (mapi.cljs$lang$arity$2 ? mapi.cljs$lang$arity$2(0,coll) : mapi.call(null,0,coll));
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4092__auto__ = cljs.core.seq(coll);
if(temp__4092__auto__)
{var s = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_(s))
{var c = cljs.core.chunk_first(s);
var size = cljs.core.count(c);
var b = cljs.core.chunk_buffer(size);
var n__6007__auto___25902 = size;
var i_25903 = 0;
while(true){
if((i_25903 < n__6007__auto___25902))
{var x_25904 = (f.cljs$lang$arity$1 ? f.cljs$lang$arity$1(cljs.core._nth.cljs$lang$arity$2(c,i_25903)) : f.call(null,cljs.core._nth.cljs$lang$arity$2(c,i_25903)));
if((x_25904 == null))
{} else
{cljs.core.chunk_append(b,x_25904);
}
{
var G__25905 = (i_25903 + 1);
i_25903 = G__25905;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons(cljs.core.chunk(b),keep(f,cljs.core.chunk_rest(s)));
} else
{var x = (f.cljs$lang$arity$1 ? f.cljs$lang$arity$1(cljs.core.first(s)) : f.call(null,cljs.core.first(s)));
if((x == null))
{return keep(f,cljs.core.rest(s));
} else
{return cljs.core.cons(x,keep(f,cljs.core.rest(s)));
}
}
} else
{return null;
}
}),null));
});
/**
* Returns a lazy sequence of the non-nil results of (f index item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep_indexed = (function keep_indexed(f,coll){
var keepi = (function keepi(idx,coll__$1){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4092__auto__ = cljs.core.seq(coll__$1);
if(temp__4092__auto__)
{var s = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_(s))
{var c = cljs.core.chunk_first(s);
var size = cljs.core.count(c);
var b = cljs.core.chunk_buffer(size);
var n__6007__auto___25912 = size;
var i_25913 = 0;
while(true){
if((i_25913 < n__6007__auto___25912))
{var x_25914 = (f.cljs$lang$arity$2 ? f.cljs$lang$arity$2((idx + i_25913),cljs.core._nth.cljs$lang$arity$2(c,i_25913)) : f.call(null,(idx + i_25913),cljs.core._nth.cljs$lang$arity$2(c,i_25913)));
if((x_25914 == null))
{} else
{cljs.core.chunk_append(b,x_25914);
}
{
var G__25915 = (i_25913 + 1);
i_25913 = G__25915;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons(cljs.core.chunk(b),keepi((idx + size),cljs.core.chunk_rest(s)));
} else
{var x = (f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(idx,cljs.core.first(s)) : f.call(null,idx,cljs.core.first(s)));
if((x == null))
{return keepi((idx + 1),cljs.core.rest(s));
} else
{return cljs.core.cons(x,keepi((idx + 1),cljs.core.rest(s)));
}
}
} else
{return null;
}
}),null));
});
return (keepi.cljs$lang$arity$2 ? keepi.cljs$lang$arity$2(0,coll) : keepi.call(null,0,coll));
});
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
cljs.core.every_pred = (function() {
var every_pred = null;
var every_pred__1 = (function (p){
return (function() {
var ep1 = null;
var ep1__0 = (function (){
return true;
});
var ep1__1 = (function (x){
return cljs.core.boolean$((p.cljs$lang$arity$1 ? p.cljs$lang$arity$1(x) : p.call(null,x)));
});
var ep1__2 = (function (x,y){
return cljs.core.boolean$((function (){var and__3941__auto__ = (p.cljs$lang$arity$1 ? p.cljs$lang$arity$1(x) : p.call(null,x));
if(cljs.core.truth_(and__3941__auto__))
{return (p.cljs$lang$arity$1 ? p.cljs$lang$arity$1(y) : p.call(null,y));
} else
{return and__3941__auto__;
}
})());
});
var ep1__3 = (function (x,y,z){
return cljs.core.boolean$((function (){var and__3941__auto__ = (p.cljs$lang$arity$1 ? p.cljs$lang$arity$1(x) : p.call(null,x));
if(cljs.core.truth_(and__3941__auto__))
{var and__3941__auto____$1 = (p.cljs$lang$arity$1 ? p.cljs$lang$arity$1(y) : p.call(null,y));
if(cljs.core.truth_(and__3941__auto____$1))
{return (p.cljs$lang$arity$1 ? p.cljs$lang$arity$1(z) : p.call(null,z));
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
})());
});
var ep1__4 = (function() { 
var G__25922__delegate = function (x,y,z,args){
return cljs.core.boolean$((function (){var and__3941__auto__ = ep1.cljs$lang$arity$3(x,y,z);
if(cljs.core.truth_(and__3941__auto__))
{return cljs.core.every_QMARK_(p,args);
} else
{return and__3941__auto__;
}
})());
};
var G__25922 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__25922__delegate.call(this, x, y, z, args);
};
G__25922.cljs$lang$maxFixedArity = 3;
G__25922.cljs$lang$applyTo = (function (arglist__25923){
var x = cljs.core.first(arglist__25923);
var y = cljs.core.first(cljs.core.next(arglist__25923));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__25923)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__25923)));
return G__25922__delegate(x, y, z, args);
});
G__25922.cljs$lang$arity$variadic = G__25922__delegate;
return G__25922;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep1__0.call(this);
case 1:
return ep1__1.call(this,x);
case 2:
return ep1__2.call(this,x,y);
case 3:
return ep1__3.call(this,x,y,z);
default:
return ep1__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__4.cljs$lang$applyTo;
ep1.cljs$lang$arity$0 = ep1__0;
ep1.cljs$lang$arity$1 = ep1__1;
ep1.cljs$lang$arity$2 = ep1__2;
ep1.cljs$lang$arity$3 = ep1__3;
ep1.cljs$lang$arity$variadic = ep1__4.cljs$lang$arity$variadic;
return ep1;
})()
});
var every_pred__2 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__0 = (function (){
return true;
});
var ep2__1 = (function (x){
return cljs.core.boolean$((function (){var and__3941__auto__ = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(x) : p1.call(null,x));
if(cljs.core.truth_(and__3941__auto__))
{return (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(x) : p2.call(null,x));
} else
{return and__3941__auto__;
}
})());
});
var ep2__2 = (function (x,y){
return cljs.core.boolean$((function (){var and__3941__auto__ = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(x) : p1.call(null,x));
if(cljs.core.truth_(and__3941__auto__))
{var and__3941__auto____$1 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(y) : p1.call(null,y));
if(cljs.core.truth_(and__3941__auto____$1))
{var and__3941__auto____$2 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(x) : p2.call(null,x));
if(cljs.core.truth_(and__3941__auto____$2))
{return (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(y) : p2.call(null,y));
} else
{return and__3941__auto____$2;
}
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
})());
});
var ep2__3 = (function (x,y,z){
return cljs.core.boolean$((function (){var and__3941__auto__ = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(x) : p1.call(null,x));
if(cljs.core.truth_(and__3941__auto__))
{var and__3941__auto____$1 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(y) : p1.call(null,y));
if(cljs.core.truth_(and__3941__auto____$1))
{var and__3941__auto____$2 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(z) : p1.call(null,z));
if(cljs.core.truth_(and__3941__auto____$2))
{var and__3941__auto____$3 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(x) : p2.call(null,x));
if(cljs.core.truth_(and__3941__auto____$3))
{var and__3941__auto____$4 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(y) : p2.call(null,y));
if(cljs.core.truth_(and__3941__auto____$4))
{return (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(z) : p2.call(null,z));
} else
{return and__3941__auto____$4;
}
} else
{return and__3941__auto____$3;
}
} else
{return and__3941__auto____$2;
}
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
})());
});
var ep2__4 = (function() { 
var G__25924__delegate = function (x,y,z,args){
return cljs.core.boolean$((function (){var and__3941__auto__ = ep2.cljs$lang$arity$3(x,y,z);
if(cljs.core.truth_(and__3941__auto__))
{return cljs.core.every_QMARK_((function (p1__25906_SHARP_){
var and__3941__auto____$1 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(p1__25906_SHARP_) : p1.call(null,p1__25906_SHARP_));
if(cljs.core.truth_(and__3941__auto____$1))
{return (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(p1__25906_SHARP_) : p2.call(null,p1__25906_SHARP_));
} else
{return and__3941__auto____$1;
}
}),args);
} else
{return and__3941__auto__;
}
})());
};
var G__25924 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__25924__delegate.call(this, x, y, z, args);
};
G__25924.cljs$lang$maxFixedArity = 3;
G__25924.cljs$lang$applyTo = (function (arglist__25925){
var x = cljs.core.first(arglist__25925);
var y = cljs.core.first(cljs.core.next(arglist__25925));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__25925)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__25925)));
return G__25924__delegate(x, y, z, args);
});
G__25924.cljs$lang$arity$variadic = G__25924__delegate;
return G__25924;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep2__0.call(this);
case 1:
return ep2__1.call(this,x);
case 2:
return ep2__2.call(this,x,y);
case 3:
return ep2__3.call(this,x,y,z);
default:
return ep2__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__4.cljs$lang$applyTo;
ep2.cljs$lang$arity$0 = ep2__0;
ep2.cljs$lang$arity$1 = ep2__1;
ep2.cljs$lang$arity$2 = ep2__2;
ep2.cljs$lang$arity$3 = ep2__3;
ep2.cljs$lang$arity$variadic = ep2__4.cljs$lang$arity$variadic;
return ep2;
})()
});
var every_pred__3 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__0 = (function (){
return true;
});
var ep3__1 = (function (x){
return cljs.core.boolean$((function (){var and__3941__auto__ = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(x) : p1.call(null,x));
if(cljs.core.truth_(and__3941__auto__))
{var and__3941__auto____$1 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(x) : p2.call(null,x));
if(cljs.core.truth_(and__3941__auto____$1))
{return (p3.cljs$lang$arity$1 ? p3.cljs$lang$arity$1(x) : p3.call(null,x));
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
})());
});
var ep3__2 = (function (x,y){
return cljs.core.boolean$((function (){var and__3941__auto__ = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(x) : p1.call(null,x));
if(cljs.core.truth_(and__3941__auto__))
{var and__3941__auto____$1 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(x) : p2.call(null,x));
if(cljs.core.truth_(and__3941__auto____$1))
{var and__3941__auto____$2 = (p3.cljs$lang$arity$1 ? p3.cljs$lang$arity$1(x) : p3.call(null,x));
if(cljs.core.truth_(and__3941__auto____$2))
{var and__3941__auto____$3 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(y) : p1.call(null,y));
if(cljs.core.truth_(and__3941__auto____$3))
{var and__3941__auto____$4 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(y) : p2.call(null,y));
if(cljs.core.truth_(and__3941__auto____$4))
{return (p3.cljs$lang$arity$1 ? p3.cljs$lang$arity$1(y) : p3.call(null,y));
} else
{return and__3941__auto____$4;
}
} else
{return and__3941__auto____$3;
}
} else
{return and__3941__auto____$2;
}
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
})());
});
var ep3__3 = (function (x,y,z){
return cljs.core.boolean$((function (){var and__3941__auto__ = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(x) : p1.call(null,x));
if(cljs.core.truth_(and__3941__auto__))
{var and__3941__auto____$1 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(x) : p2.call(null,x));
if(cljs.core.truth_(and__3941__auto____$1))
{var and__3941__auto____$2 = (p3.cljs$lang$arity$1 ? p3.cljs$lang$arity$1(x) : p3.call(null,x));
if(cljs.core.truth_(and__3941__auto____$2))
{var and__3941__auto____$3 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(y) : p1.call(null,y));
if(cljs.core.truth_(and__3941__auto____$3))
{var and__3941__auto____$4 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(y) : p2.call(null,y));
if(cljs.core.truth_(and__3941__auto____$4))
{var and__3941__auto____$5 = (p3.cljs$lang$arity$1 ? p3.cljs$lang$arity$1(y) : p3.call(null,y));
if(cljs.core.truth_(and__3941__auto____$5))
{var and__3941__auto____$6 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(z) : p1.call(null,z));
if(cljs.core.truth_(and__3941__auto____$6))
{var and__3941__auto____$7 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(z) : p2.call(null,z));
if(cljs.core.truth_(and__3941__auto____$7))
{return (p3.cljs$lang$arity$1 ? p3.cljs$lang$arity$1(z) : p3.call(null,z));
} else
{return and__3941__auto____$7;
}
} else
{return and__3941__auto____$6;
}
} else
{return and__3941__auto____$5;
}
} else
{return and__3941__auto____$4;
}
} else
{return and__3941__auto____$3;
}
} else
{return and__3941__auto____$2;
}
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
})());
});
var ep3__4 = (function() { 
var G__25926__delegate = function (x,y,z,args){
return cljs.core.boolean$((function (){var and__3941__auto__ = ep3.cljs$lang$arity$3(x,y,z);
if(cljs.core.truth_(and__3941__auto__))
{return cljs.core.every_QMARK_((function (p1__25907_SHARP_){
var and__3941__auto____$1 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(p1__25907_SHARP_) : p1.call(null,p1__25907_SHARP_));
if(cljs.core.truth_(and__3941__auto____$1))
{var and__3941__auto____$2 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(p1__25907_SHARP_) : p2.call(null,p1__25907_SHARP_));
if(cljs.core.truth_(and__3941__auto____$2))
{return (p3.cljs$lang$arity$1 ? p3.cljs$lang$arity$1(p1__25907_SHARP_) : p3.call(null,p1__25907_SHARP_));
} else
{return and__3941__auto____$2;
}
} else
{return and__3941__auto____$1;
}
}),args);
} else
{return and__3941__auto__;
}
})());
};
var G__25926 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__25926__delegate.call(this, x, y, z, args);
};
G__25926.cljs$lang$maxFixedArity = 3;
G__25926.cljs$lang$applyTo = (function (arglist__25927){
var x = cljs.core.first(arglist__25927);
var y = cljs.core.first(cljs.core.next(arglist__25927));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__25927)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__25927)));
return G__25926__delegate(x, y, z, args);
});
G__25926.cljs$lang$arity$variadic = G__25926__delegate;
return G__25926;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep3__0.call(this);
case 1:
return ep3__1.call(this,x);
case 2:
return ep3__2.call(this,x,y);
case 3:
return ep3__3.call(this,x,y,z);
default:
return ep3__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__4.cljs$lang$applyTo;
ep3.cljs$lang$arity$0 = ep3__0;
ep3.cljs$lang$arity$1 = ep3__1;
ep3.cljs$lang$arity$2 = ep3__2;
ep3.cljs$lang$arity$3 = ep3__3;
ep3.cljs$lang$arity$variadic = ep3__4.cljs$lang$arity$variadic;
return ep3;
})()
});
var every_pred__4 = (function() { 
var G__25928__delegate = function (p1,p2,p3,ps){
var ps__$1 = cljs.core.list_STAR_.cljs$lang$arity$4(p1,p2,p3,ps);
return (function() {
var epn = null;
var epn__0 = (function (){
return true;
});
var epn__1 = (function (x){
return cljs.core.every_QMARK_((function (p1__25908_SHARP_){
return (p1__25908_SHARP_.cljs$lang$arity$1 ? p1__25908_SHARP_.cljs$lang$arity$1(x) : p1__25908_SHARP_.call(null,x));
}),ps__$1);
});
var epn__2 = (function (x,y){
return cljs.core.every_QMARK_((function (p1__25909_SHARP_){
var and__3941__auto__ = (p1__25909_SHARP_.cljs$lang$arity$1 ? p1__25909_SHARP_.cljs$lang$arity$1(x) : p1__25909_SHARP_.call(null,x));
if(cljs.core.truth_(and__3941__auto__))
{return (p1__25909_SHARP_.cljs$lang$arity$1 ? p1__25909_SHARP_.cljs$lang$arity$1(y) : p1__25909_SHARP_.call(null,y));
} else
{return and__3941__auto__;
}
}),ps__$1);
});
var epn__3 = (function (x,y,z){
return cljs.core.every_QMARK_((function (p1__25910_SHARP_){
var and__3941__auto__ = (p1__25910_SHARP_.cljs$lang$arity$1 ? p1__25910_SHARP_.cljs$lang$arity$1(x) : p1__25910_SHARP_.call(null,x));
if(cljs.core.truth_(and__3941__auto__))
{var and__3941__auto____$1 = (p1__25910_SHARP_.cljs$lang$arity$1 ? p1__25910_SHARP_.cljs$lang$arity$1(y) : p1__25910_SHARP_.call(null,y));
if(cljs.core.truth_(and__3941__auto____$1))
{return (p1__25910_SHARP_.cljs$lang$arity$1 ? p1__25910_SHARP_.cljs$lang$arity$1(z) : p1__25910_SHARP_.call(null,z));
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
}),ps__$1);
});
var epn__4 = (function() { 
var G__25929__delegate = function (x,y,z,args){
return cljs.core.boolean$((function (){var and__3941__auto__ = epn.cljs$lang$arity$3(x,y,z);
if(cljs.core.truth_(and__3941__auto__))
{return cljs.core.every_QMARK_((function (p1__25911_SHARP_){
return cljs.core.every_QMARK_(p1__25911_SHARP_,args);
}),ps__$1);
} else
{return and__3941__auto__;
}
})());
};
var G__25929 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__25929__delegate.call(this, x, y, z, args);
};
G__25929.cljs$lang$maxFixedArity = 3;
G__25929.cljs$lang$applyTo = (function (arglist__25930){
var x = cljs.core.first(arglist__25930);
var y = cljs.core.first(cljs.core.next(arglist__25930));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__25930)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__25930)));
return G__25929__delegate(x, y, z, args);
});
G__25929.cljs$lang$arity$variadic = G__25929__delegate;
return G__25929;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return epn__0.call(this);
case 1:
return epn__1.call(this,x);
case 2:
return epn__2.call(this,x,y);
case 3:
return epn__3.call(this,x,y,z);
default:
return epn__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__4.cljs$lang$applyTo;
epn.cljs$lang$arity$0 = epn__0;
epn.cljs$lang$arity$1 = epn__1;
epn.cljs$lang$arity$2 = epn__2;
epn.cljs$lang$arity$3 = epn__3;
epn.cljs$lang$arity$variadic = epn__4.cljs$lang$arity$variadic;
return epn;
})()
};
var G__25928 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__25928__delegate.call(this, p1, p2, p3, ps);
};
G__25928.cljs$lang$maxFixedArity = 3;
G__25928.cljs$lang$applyTo = (function (arglist__25931){
var p1 = cljs.core.first(arglist__25931);
var p2 = cljs.core.first(cljs.core.next(arglist__25931));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__25931)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__25931)));
return G__25928__delegate(p1, p2, p3, ps);
});
G__25928.cljs$lang$arity$variadic = G__25928__delegate;
return G__25928;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return every_pred__1.call(this,p1);
case 2:
return every_pred__2.call(this,p1,p2);
case 3:
return every_pred__3.call(this,p1,p2,p3);
default:
return every_pred__4.cljs$lang$arity$variadic(p1,p2,p3, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__4.cljs$lang$applyTo;
every_pred.cljs$lang$arity$1 = every_pred__1;
every_pred.cljs$lang$arity$2 = every_pred__2;
every_pred.cljs$lang$arity$3 = every_pred__3;
every_pred.cljs$lang$arity$variadic = every_pred__4.cljs$lang$arity$variadic;
return every_pred;
})()
;
/**
* Takes a set of predicates and returns a function f that returns the first logical true value
* returned by one of its composing predicates against any of its arguments, else it returns
* logical false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical true result against the original predicates.
* @param {...*} var_args
*/
cljs.core.some_fn = (function() {
var some_fn = null;
var some_fn__1 = (function (p){
return (function() {
var sp1 = null;
var sp1__0 = (function (){
return null;
});
var sp1__1 = (function (x){
return (p.cljs$lang$arity$1 ? p.cljs$lang$arity$1(x) : p.call(null,x));
});
var sp1__2 = (function (x,y){
var or__3943__auto__ = (p.cljs$lang$arity$1 ? p.cljs$lang$arity$1(x) : p.call(null,x));
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return (p.cljs$lang$arity$1 ? p.cljs$lang$arity$1(y) : p.call(null,y));
}
});
var sp1__3 = (function (x,y,z){
var or__3943__auto__ = (p.cljs$lang$arity$1 ? p.cljs$lang$arity$1(x) : p.call(null,x));
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (p.cljs$lang$arity$1 ? p.cljs$lang$arity$1(y) : p.call(null,y));
if(cljs.core.truth_(or__3943__auto____$1))
{return or__3943__auto____$1;
} else
{return (p.cljs$lang$arity$1 ? p.cljs$lang$arity$1(z) : p.call(null,z));
}
}
});
var sp1__4 = (function() { 
var G__25933__delegate = function (x,y,z,args){
var or__3943__auto__ = sp1.cljs$lang$arity$3(x,y,z);
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return cljs.core.some(p,args);
}
};
var G__25933 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__25933__delegate.call(this, x, y, z, args);
};
G__25933.cljs$lang$maxFixedArity = 3;
G__25933.cljs$lang$applyTo = (function (arglist__25934){
var x = cljs.core.first(arglist__25934);
var y = cljs.core.first(cljs.core.next(arglist__25934));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__25934)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__25934)));
return G__25933__delegate(x, y, z, args);
});
G__25933.cljs$lang$arity$variadic = G__25933__delegate;
return G__25933;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp1__0.call(this);
case 1:
return sp1__1.call(this,x);
case 2:
return sp1__2.call(this,x,y);
case 3:
return sp1__3.call(this,x,y,z);
default:
return sp1__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__4.cljs$lang$applyTo;
sp1.cljs$lang$arity$0 = sp1__0;
sp1.cljs$lang$arity$1 = sp1__1;
sp1.cljs$lang$arity$2 = sp1__2;
sp1.cljs$lang$arity$3 = sp1__3;
sp1.cljs$lang$arity$variadic = sp1__4.cljs$lang$arity$variadic;
return sp1;
})()
});
var some_fn__2 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__0 = (function (){
return null;
});
var sp2__1 = (function (x){
var or__3943__auto__ = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(x) : p1.call(null,x));
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(x) : p2.call(null,x));
}
});
var sp2__2 = (function (x,y){
var or__3943__auto__ = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(x) : p1.call(null,x));
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(y) : p1.call(null,y));
if(cljs.core.truth_(or__3943__auto____$1))
{return or__3943__auto____$1;
} else
{var or__3943__auto____$2 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(x) : p2.call(null,x));
if(cljs.core.truth_(or__3943__auto____$2))
{return or__3943__auto____$2;
} else
{return (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(y) : p2.call(null,y));
}
}
}
});
var sp2__3 = (function (x,y,z){
var or__3943__auto__ = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(x) : p1.call(null,x));
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(y) : p1.call(null,y));
if(cljs.core.truth_(or__3943__auto____$1))
{return or__3943__auto____$1;
} else
{var or__3943__auto____$2 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(z) : p1.call(null,z));
if(cljs.core.truth_(or__3943__auto____$2))
{return or__3943__auto____$2;
} else
{var or__3943__auto____$3 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(x) : p2.call(null,x));
if(cljs.core.truth_(or__3943__auto____$3))
{return or__3943__auto____$3;
} else
{var or__3943__auto____$4 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(y) : p2.call(null,y));
if(cljs.core.truth_(or__3943__auto____$4))
{return or__3943__auto____$4;
} else
{return (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(z) : p2.call(null,z));
}
}
}
}
}
});
var sp2__4 = (function() { 
var G__25935__delegate = function (x,y,z,args){
var or__3943__auto__ = sp2.cljs$lang$arity$3(x,y,z);
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return cljs.core.some((function (p1__25916_SHARP_){
var or__3943__auto____$1 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(p1__25916_SHARP_) : p1.call(null,p1__25916_SHARP_));
if(cljs.core.truth_(or__3943__auto____$1))
{return or__3943__auto____$1;
} else
{return (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(p1__25916_SHARP_) : p2.call(null,p1__25916_SHARP_));
}
}),args);
}
};
var G__25935 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__25935__delegate.call(this, x, y, z, args);
};
G__25935.cljs$lang$maxFixedArity = 3;
G__25935.cljs$lang$applyTo = (function (arglist__25936){
var x = cljs.core.first(arglist__25936);
var y = cljs.core.first(cljs.core.next(arglist__25936));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__25936)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__25936)));
return G__25935__delegate(x, y, z, args);
});
G__25935.cljs$lang$arity$variadic = G__25935__delegate;
return G__25935;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp2__0.call(this);
case 1:
return sp2__1.call(this,x);
case 2:
return sp2__2.call(this,x,y);
case 3:
return sp2__3.call(this,x,y,z);
default:
return sp2__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__4.cljs$lang$applyTo;
sp2.cljs$lang$arity$0 = sp2__0;
sp2.cljs$lang$arity$1 = sp2__1;
sp2.cljs$lang$arity$2 = sp2__2;
sp2.cljs$lang$arity$3 = sp2__3;
sp2.cljs$lang$arity$variadic = sp2__4.cljs$lang$arity$variadic;
return sp2;
})()
});
var some_fn__3 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__0 = (function (){
return null;
});
var sp3__1 = (function (x){
var or__3943__auto__ = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(x) : p1.call(null,x));
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(x) : p2.call(null,x));
if(cljs.core.truth_(or__3943__auto____$1))
{return or__3943__auto____$1;
} else
{return (p3.cljs$lang$arity$1 ? p3.cljs$lang$arity$1(x) : p3.call(null,x));
}
}
});
var sp3__2 = (function (x,y){
var or__3943__auto__ = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(x) : p1.call(null,x));
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(x) : p2.call(null,x));
if(cljs.core.truth_(or__3943__auto____$1))
{return or__3943__auto____$1;
} else
{var or__3943__auto____$2 = (p3.cljs$lang$arity$1 ? p3.cljs$lang$arity$1(x) : p3.call(null,x));
if(cljs.core.truth_(or__3943__auto____$2))
{return or__3943__auto____$2;
} else
{var or__3943__auto____$3 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(y) : p1.call(null,y));
if(cljs.core.truth_(or__3943__auto____$3))
{return or__3943__auto____$3;
} else
{var or__3943__auto____$4 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(y) : p2.call(null,y));
if(cljs.core.truth_(or__3943__auto____$4))
{return or__3943__auto____$4;
} else
{return (p3.cljs$lang$arity$1 ? p3.cljs$lang$arity$1(y) : p3.call(null,y));
}
}
}
}
}
});
var sp3__3 = (function (x,y,z){
var or__3943__auto__ = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(x) : p1.call(null,x));
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(x) : p2.call(null,x));
if(cljs.core.truth_(or__3943__auto____$1))
{return or__3943__auto____$1;
} else
{var or__3943__auto____$2 = (p3.cljs$lang$arity$1 ? p3.cljs$lang$arity$1(x) : p3.call(null,x));
if(cljs.core.truth_(or__3943__auto____$2))
{return or__3943__auto____$2;
} else
{var or__3943__auto____$3 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(y) : p1.call(null,y));
if(cljs.core.truth_(or__3943__auto____$3))
{return or__3943__auto____$3;
} else
{var or__3943__auto____$4 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(y) : p2.call(null,y));
if(cljs.core.truth_(or__3943__auto____$4))
{return or__3943__auto____$4;
} else
{var or__3943__auto____$5 = (p3.cljs$lang$arity$1 ? p3.cljs$lang$arity$1(y) : p3.call(null,y));
if(cljs.core.truth_(or__3943__auto____$5))
{return or__3943__auto____$5;
} else
{var or__3943__auto____$6 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(z) : p1.call(null,z));
if(cljs.core.truth_(or__3943__auto____$6))
{return or__3943__auto____$6;
} else
{var or__3943__auto____$7 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(z) : p2.call(null,z));
if(cljs.core.truth_(or__3943__auto____$7))
{return or__3943__auto____$7;
} else
{return (p3.cljs$lang$arity$1 ? p3.cljs$lang$arity$1(z) : p3.call(null,z));
}
}
}
}
}
}
}
}
});
var sp3__4 = (function() { 
var G__25937__delegate = function (x,y,z,args){
var or__3943__auto__ = sp3.cljs$lang$arity$3(x,y,z);
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return cljs.core.some((function (p1__25917_SHARP_){
var or__3943__auto____$1 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(p1__25917_SHARP_) : p1.call(null,p1__25917_SHARP_));
if(cljs.core.truth_(or__3943__auto____$1))
{return or__3943__auto____$1;
} else
{var or__3943__auto____$2 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(p1__25917_SHARP_) : p2.call(null,p1__25917_SHARP_));
if(cljs.core.truth_(or__3943__auto____$2))
{return or__3943__auto____$2;
} else
{return (p3.cljs$lang$arity$1 ? p3.cljs$lang$arity$1(p1__25917_SHARP_) : p3.call(null,p1__25917_SHARP_));
}
}
}),args);
}
};
var G__25937 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__25937__delegate.call(this, x, y, z, args);
};
G__25937.cljs$lang$maxFixedArity = 3;
G__25937.cljs$lang$applyTo = (function (arglist__25938){
var x = cljs.core.first(arglist__25938);
var y = cljs.core.first(cljs.core.next(arglist__25938));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__25938)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__25938)));
return G__25937__delegate(x, y, z, args);
});
G__25937.cljs$lang$arity$variadic = G__25937__delegate;
return G__25937;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp3__0.call(this);
case 1:
return sp3__1.call(this,x);
case 2:
return sp3__2.call(this,x,y);
case 3:
return sp3__3.call(this,x,y,z);
default:
return sp3__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__4.cljs$lang$applyTo;
sp3.cljs$lang$arity$0 = sp3__0;
sp3.cljs$lang$arity$1 = sp3__1;
sp3.cljs$lang$arity$2 = sp3__2;
sp3.cljs$lang$arity$3 = sp3__3;
sp3.cljs$lang$arity$variadic = sp3__4.cljs$lang$arity$variadic;
return sp3;
})()
});
var some_fn__4 = (function() { 
var G__25939__delegate = function (p1,p2,p3,ps){
var ps__$1 = cljs.core.list_STAR_.cljs$lang$arity$4(p1,p2,p3,ps);
return (function() {
var spn = null;
var spn__0 = (function (){
return null;
});
var spn__1 = (function (x){
return cljs.core.some((function (p1__25918_SHARP_){
return (p1__25918_SHARP_.cljs$lang$arity$1 ? p1__25918_SHARP_.cljs$lang$arity$1(x) : p1__25918_SHARP_.call(null,x));
}),ps__$1);
});
var spn__2 = (function (x,y){
return cljs.core.some((function (p1__25919_SHARP_){
var or__3943__auto__ = (p1__25919_SHARP_.cljs$lang$arity$1 ? p1__25919_SHARP_.cljs$lang$arity$1(x) : p1__25919_SHARP_.call(null,x));
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return (p1__25919_SHARP_.cljs$lang$arity$1 ? p1__25919_SHARP_.cljs$lang$arity$1(y) : p1__25919_SHARP_.call(null,y));
}
}),ps__$1);
});
var spn__3 = (function (x,y,z){
return cljs.core.some((function (p1__25920_SHARP_){
var or__3943__auto__ = (p1__25920_SHARP_.cljs$lang$arity$1 ? p1__25920_SHARP_.cljs$lang$arity$1(x) : p1__25920_SHARP_.call(null,x));
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (p1__25920_SHARP_.cljs$lang$arity$1 ? p1__25920_SHARP_.cljs$lang$arity$1(y) : p1__25920_SHARP_.call(null,y));
if(cljs.core.truth_(or__3943__auto____$1))
{return or__3943__auto____$1;
} else
{return (p1__25920_SHARP_.cljs$lang$arity$1 ? p1__25920_SHARP_.cljs$lang$arity$1(z) : p1__25920_SHARP_.call(null,z));
}
}
}),ps__$1);
});
var spn__4 = (function() { 
var G__25940__delegate = function (x,y,z,args){
var or__3943__auto__ = spn.cljs$lang$arity$3(x,y,z);
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return cljs.core.some((function (p1__25921_SHARP_){
return cljs.core.some(p1__25921_SHARP_,args);
}),ps__$1);
}
};
var G__25940 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__25940__delegate.call(this, x, y, z, args);
};
G__25940.cljs$lang$maxFixedArity = 3;
G__25940.cljs$lang$applyTo = (function (arglist__25941){
var x = cljs.core.first(arglist__25941);
var y = cljs.core.first(cljs.core.next(arglist__25941));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__25941)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__25941)));
return G__25940__delegate(x, y, z, args);
});
G__25940.cljs$lang$arity$variadic = G__25940__delegate;
return G__25940;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return spn__0.call(this);
case 1:
return spn__1.call(this,x);
case 2:
return spn__2.call(this,x,y);
case 3:
return spn__3.call(this,x,y,z);
default:
return spn__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__4.cljs$lang$applyTo;
spn.cljs$lang$arity$0 = spn__0;
spn.cljs$lang$arity$1 = spn__1;
spn.cljs$lang$arity$2 = spn__2;
spn.cljs$lang$arity$3 = spn__3;
spn.cljs$lang$arity$variadic = spn__4.cljs$lang$arity$variadic;
return spn;
})()
};
var G__25939 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__25939__delegate.call(this, p1, p2, p3, ps);
};
G__25939.cljs$lang$maxFixedArity = 3;
G__25939.cljs$lang$applyTo = (function (arglist__25942){
var p1 = cljs.core.first(arglist__25942);
var p2 = cljs.core.first(cljs.core.next(arglist__25942));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__25942)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__25942)));
return G__25939__delegate(p1, p2, p3, ps);
});
G__25939.cljs$lang$arity$variadic = G__25939__delegate;
return G__25939;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return some_fn__1.call(this,p1);
case 2:
return some_fn__2.call(this,p1,p2);
case 3:
return some_fn__3.call(this,p1,p2,p3);
default:
return some_fn__4.cljs$lang$arity$variadic(p1,p2,p3, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__4.cljs$lang$applyTo;
some_fn.cljs$lang$arity$1 = some_fn__1;
some_fn.cljs$lang$arity$2 = some_fn__2;
some_fn.cljs$lang$arity$3 = some_fn__3;
some_fn.cljs$lang$arity$variadic = some_fn__4.cljs$lang$arity$variadic;
return some_fn;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.map = (function() {
var map = null;
var map__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4092__auto__ = cljs.core.seq(coll);
if(temp__4092__auto__)
{var s = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_(s))
{var c = cljs.core.chunk_first(s);
var size = cljs.core.count(c);
var b = cljs.core.chunk_buffer(size);
var n__6007__auto___25943 = size;
var i_25944 = 0;
while(true){
if((i_25944 < n__6007__auto___25943))
{cljs.core.chunk_append(b,(f.cljs$lang$arity$1 ? f.cljs$lang$arity$1(cljs.core._nth.cljs$lang$arity$2(c,i_25944)) : f.call(null,cljs.core._nth.cljs$lang$arity$2(c,i_25944))));
{
var G__25945 = (i_25944 + 1);
i_25944 = G__25945;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons(cljs.core.chunk(b),map.cljs$lang$arity$2(f,cljs.core.chunk_rest(s)));
} else
{return cljs.core.cons((f.cljs$lang$arity$1 ? f.cljs$lang$arity$1(cljs.core.first(s)) : f.call(null,cljs.core.first(s))),map.cljs$lang$arity$2(f,cljs.core.rest(s)));
}
} else
{return null;
}
}),null));
});
var map__3 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1 = cljs.core.seq(c1);
var s2 = cljs.core.seq(c2);
if(cljs.core.truth_((function (){var and__3941__auto__ = s1;
if(and__3941__auto__)
{return s2;
} else
{return and__3941__auto__;
}
})()))
{return cljs.core.cons((f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(cljs.core.first(s1),cljs.core.first(s2)) : f.call(null,cljs.core.first(s1),cljs.core.first(s2))),map.cljs$lang$arity$3(f,cljs.core.rest(s1),cljs.core.rest(s2)));
} else
{return null;
}
}),null));
});
var map__4 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1 = cljs.core.seq(c1);
var s2 = cljs.core.seq(c2);
var s3 = cljs.core.seq(c3);
if(cljs.core.truth_((function (){var and__3941__auto__ = s1;
if(and__3941__auto__)
{var and__3941__auto____$1 = s2;
if(and__3941__auto____$1)
{return s3;
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
})()))
{return cljs.core.cons((f.cljs$lang$arity$3 ? f.cljs$lang$arity$3(cljs.core.first(s1),cljs.core.first(s2),cljs.core.first(s3)) : f.call(null,cljs.core.first(s1),cljs.core.first(s2),cljs.core.first(s3))),map.cljs$lang$arity$4(f,cljs.core.rest(s1),cljs.core.rest(s2),cljs.core.rest(s3)));
} else
{return null;
}
}),null));
});
var map__5 = (function() { 
var G__25946__delegate = function (f,c1,c2,c3,colls){
var step = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss = map.cljs$lang$arity$2(cljs.core.seq,cs);
if(cljs.core.every_QMARK_(cljs.core.identity,ss))
{return cljs.core.cons(map.cljs$lang$arity$2(cljs.core.first,ss),step(map.cljs$lang$arity$2(cljs.core.rest,ss)));
} else
{return null;
}
}),null));
});
return map.cljs$lang$arity$2((function (p1__25932_SHARP_){
return cljs.core.apply.cljs$lang$arity$2(f,p1__25932_SHARP_);
}),step(cljs.core.conj.cljs$lang$arity$variadic(colls,c3,cljs.core.array_seq([c2,c1], 0))));
};
var G__25946 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__25946__delegate.call(this, f, c1, c2, c3, colls);
};
G__25946.cljs$lang$maxFixedArity = 4;
G__25946.cljs$lang$applyTo = (function (arglist__25947){
var f = cljs.core.first(arglist__25947);
var c1 = cljs.core.first(cljs.core.next(arglist__25947));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__25947)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__25947))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__25947))));
return G__25946__delegate(f, c1, c2, c3, colls);
});
G__25946.cljs$lang$arity$variadic = G__25946__delegate;
return G__25946;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return map__2.call(this,f,c1);
case 3:
return map__3.call(this,f,c1,c2);
case 4:
return map__4.call(this,f,c1,c2,c3);
default:
return map__5.cljs$lang$arity$variadic(f,c1,c2,c3, cljs.core.array_seq(arguments, 4));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__5.cljs$lang$applyTo;
map.cljs$lang$arity$2 = map__2;
map.cljs$lang$arity$3 = map__3;
map.cljs$lang$arity$4 = map__4;
map.cljs$lang$arity$variadic = map__5.cljs$lang$arity$variadic;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.
*/
cljs.core.take = (function take(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
if((n > 0))
{var temp__4092__auto__ = cljs.core.seq(coll);
if(temp__4092__auto__)
{var s = temp__4092__auto__;
return cljs.core.cons(cljs.core.first(s),take((n - 1),cljs.core.rest(s)));
} else
{return null;
}
} else
{return null;
}
}),null));
});
/**
* Returns a lazy sequence of all but the first n items in coll.
*/
cljs.core.drop = (function drop(n,coll){
var step = (function (n__$1,coll__$1){
while(true){
var s = cljs.core.seq(coll__$1);
if(cljs.core.truth_((function (){var and__3941__auto__ = (n__$1 > 0);
if(and__3941__auto__)
{return s;
} else
{return and__3941__auto__;
}
})()))
{{
var G__25948 = (n__$1 - 1);
var G__25949 = cljs.core.rest(s);
n__$1 = G__25948;
coll__$1 = G__25949;
continue;
}
} else
{return s;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step(n,coll);
}),null));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__1 = (function (s){
return drop_last.cljs$lang$arity$2(1,s);
});
var drop_last__2 = (function (n,s){
return cljs.core.map.cljs$lang$arity$3((function (x,_){
return x;
}),s,cljs.core.drop(n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case 1:
return drop_last__1.call(this,n);
case 2:
return drop_last__2.call(this,n,s);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_last.cljs$lang$arity$1 = drop_last__1;
drop_last.cljs$lang$arity$2 = drop_last__2;
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){
var s = cljs.core.seq(coll);
var lead = cljs.core.seq(cljs.core.drop(n,coll));
while(true){
if(lead)
{{
var G__25950 = cljs.core.next(s);
var G__25951 = cljs.core.next(lead);
s = G__25950;
lead = G__25951;
continue;
}
} else
{return s;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step = (function (pred__$1,coll__$1){
while(true){
var s = cljs.core.seq(coll__$1);
if(cljs.core.truth_((function (){var and__3941__auto__ = s;
if(and__3941__auto__)
{return (pred__$1.cljs$lang$arity$1 ? pred__$1.cljs$lang$arity$1(cljs.core.first(s)) : pred__$1.call(null,cljs.core.first(s)));
} else
{return and__3941__auto__;
}
})()))
{{
var G__25952 = pred__$1;
var G__25953 = cljs.core.rest(s);
pred__$1 = G__25952;
coll__$1 = G__25953;
continue;
}
} else
{return s;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step(pred,coll);
}),null));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4092__auto__ = cljs.core.seq(coll);
if(temp__4092__auto__)
{var s = temp__4092__auto__;
return cljs.core.concat.cljs$lang$arity$2(s,cycle(s));
} else
{return null;
}
}),null));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){
return cljs.core.PersistentVector.fromArray([cljs.core.take(n,coll),cljs.core.drop(n,coll)], true);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__1 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons(x,repeat.cljs$lang$arity$1(x));
}),null));
});
var repeat__2 = (function (n,x){
return cljs.core.take(n,repeat.cljs$lang$arity$1(x));
});
repeat = function(n,x){
switch(arguments.length){
case 1:
return repeat__1.call(this,n);
case 2:
return repeat__2.call(this,n,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
repeat.cljs$lang$arity$1 = repeat__1;
repeat.cljs$lang$arity$2 = repeat__2;
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
cljs.core.replicate = (function replicate(n,x){
return cljs.core.take(n,cljs.core.repeat.cljs$lang$arity$1(x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__1 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons((f.cljs$lang$arity$0 ? f.cljs$lang$arity$0() : f.call(null)),repeatedly.cljs$lang$arity$1(f));
}),null));
});
var repeatedly__2 = (function (n,f){
return cljs.core.take(n,repeatedly.cljs$lang$arity$1(f));
});
repeatedly = function(n,f){
switch(arguments.length){
case 1:
return repeatedly__1.call(this,n);
case 2:
return repeatedly__2.call(this,n,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
repeatedly.cljs$lang$arity$1 = repeatedly__1;
repeatedly.cljs$lang$arity$2 = repeatedly__2;
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){
return cljs.core.cons(x,(new cljs.core.LazySeq(null,false,(function (){
return iterate(f,(f.cljs$lang$arity$1 ? f.cljs$lang$arity$1(x) : f.call(null,x)));
}),null)));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__2 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1 = cljs.core.seq(c1);
var s2 = cljs.core.seq(c2);
if(cljs.core.truth_((function (){var and__3941__auto__ = s1;
if(and__3941__auto__)
{return s2;
} else
{return and__3941__auto__;
}
})()))
{return cljs.core.cons(cljs.core.first(s1),cljs.core.cons(cljs.core.first(s2),interleave.cljs$lang$arity$2(cljs.core.rest(s1),cljs.core.rest(s2))));
} else
{return null;
}
}),null));
});
var interleave__3 = (function() { 
var G__25954__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss = cljs.core.map.cljs$lang$arity$2(cljs.core.seq,cljs.core.conj.cljs$lang$arity$variadic(colls,c2,cljs.core.array_seq([c1], 0)));
if(cljs.core.every_QMARK_(cljs.core.identity,ss))
{return cljs.core.concat.cljs$lang$arity$2(cljs.core.map.cljs$lang$arity$2(cljs.core.first,ss),cljs.core.apply.cljs$lang$arity$2(interleave,cljs.core.map.cljs$lang$arity$2(cljs.core.rest,ss)));
} else
{return null;
}
}),null));
};
var G__25954 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__25954__delegate.call(this, c1, c2, colls);
};
G__25954.cljs$lang$maxFixedArity = 2;
G__25954.cljs$lang$applyTo = (function (arglist__25955){
var c1 = cljs.core.first(arglist__25955);
var c2 = cljs.core.first(cljs.core.next(arglist__25955));
var colls = cljs.core.rest(cljs.core.next(arglist__25955));
return G__25954__delegate(c1, c2, colls);
});
G__25954.cljs$lang$arity$variadic = G__25954__delegate;
return G__25954;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return interleave__2.call(this,c1,c2);
default:
return interleave__3.cljs$lang$arity$variadic(c1,c2, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__3.cljs$lang$applyTo;
interleave.cljs$lang$arity$2 = interleave__2;
interleave.cljs$lang$arity$variadic = interleave__3.cljs$lang$arity$variadic;
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
cljs.core.interpose = (function interpose(sep,coll){
return cljs.core.drop(1,cljs.core.interleave.cljs$lang$arity$2(cljs.core.repeat.cljs$lang$arity$1(sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){
var cat = (function cat(coll,colls__$1){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4090__auto__ = cljs.core.seq(coll);
if(temp__4090__auto__)
{var coll__$1 = temp__4090__auto__;
return cljs.core.cons(cljs.core.first(coll__$1),cat(cljs.core.rest(coll__$1),colls__$1));
} else
{if(cljs.core.seq(colls__$1))
{return cat(cljs.core.first(colls__$1),cljs.core.rest(colls__$1));
} else
{return null;
}
}
}),null));
});
return cat(null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__2 = (function (f,coll){
return cljs.core.flatten1(cljs.core.map.cljs$lang$arity$2(f,coll));
});
var mapcat__3 = (function() { 
var G__25956__delegate = function (f,coll,colls){
return cljs.core.flatten1(cljs.core.apply.cljs$lang$arity$4(cljs.core.map,f,coll,colls));
};
var G__25956 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__25956__delegate.call(this, f, coll, colls);
};
G__25956.cljs$lang$maxFixedArity = 2;
G__25956.cljs$lang$applyTo = (function (arglist__25957){
var f = cljs.core.first(arglist__25957);
var coll = cljs.core.first(cljs.core.next(arglist__25957));
var colls = cljs.core.rest(cljs.core.next(arglist__25957));
return G__25956__delegate(f, coll, colls);
});
G__25956.cljs$lang$arity$variadic = G__25956__delegate;
return G__25956;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return mapcat__2.call(this,f,coll);
default:
return mapcat__3.cljs$lang$arity$variadic(f,coll, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__3.cljs$lang$applyTo;
mapcat.cljs$lang$arity$2 = mapcat__2;
mapcat.cljs$lang$arity$variadic = mapcat__3.cljs$lang$arity$variadic;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4092__auto__ = cljs.core.seq(coll);
if(temp__4092__auto__)
{var s = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_(s))
{var c = cljs.core.chunk_first(s);
var size = cljs.core.count(c);
var b = cljs.core.chunk_buffer(size);
var n__6007__auto___25958 = size;
var i_25959 = 0;
while(true){
if((i_25959 < n__6007__auto___25958))
{if(cljs.core.truth_((pred.cljs$lang$arity$1 ? pred.cljs$lang$arity$1(cljs.core._nth.cljs$lang$arity$2(c,i_25959)) : pred.call(null,cljs.core._nth.cljs$lang$arity$2(c,i_25959)))))
{cljs.core.chunk_append(b,cljs.core._nth.cljs$lang$arity$2(c,i_25959));
} else
{}
{
var G__25960 = (i_25959 + 1);
i_25959 = G__25960;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons(cljs.core.chunk(b),filter(pred,cljs.core.chunk_rest(s)));
} else
{var f = cljs.core.first(s);
var r = cljs.core.rest(s);
if(cljs.core.truth_((pred.cljs$lang$arity$1 ? pred.cljs$lang$arity$1(f) : pred.call(null,f))))
{return cljs.core.cons(f,filter(pred,r));
} else
{return filter(pred,r);
}
}
} else
{return null;
}
}),null));
});
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns false. pred must be free of side-effects.
*/
cljs.core.remove = (function remove(pred,coll){
return cljs.core.filter(cljs.core.complement(pred),coll);
});
/**
* Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
* branch? must be a fn of one arg that returns true if passed a node
* that can have children (but may not).  children must be a fn of one
* arg that returns a sequence of the children. Will only be called on
* nodes for which branch? returns true. Root is the root node of the
* tree.
*/
cljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){
var walk = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons(node,(cljs.core.truth_((branch_QMARK_.cljs$lang$arity$1 ? branch_QMARK_.cljs$lang$arity$1(node) : branch_QMARK_.call(null,node)))?cljs.core.mapcat.cljs$lang$arity$2(walk,(children.cljs$lang$arity$1 ? children.cljs$lang$arity$1(node) : children.call(null,node))):null));
}),null));
});
return walk(root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter((function (p1__25961_SHARP_){
return !(cljs.core.sequential_QMARK_(p1__25961_SHARP_));
}),cljs.core.rest(cljs.core.tree_seq(cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
if(cljs.core.truth_((function (){var G__25963 = to;
if(G__25963)
{if(cljs.core.truth_((function (){var or__3943__auto__ = (G__25963.cljs$lang$protocol_mask$partition1$ & 4);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__25963.cljs$core$IEditableCollection$;
}
})()))
{return true;
} else
{if((!G__25963.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_(cljs.core.IEditableCollection,G__25963);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IEditableCollection,G__25963);
}
})()))
{return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$lang$arity$3(cljs.core._conj_BANG_,cljs.core.transient$(to),from));
} else
{return cljs.core.reduce.cljs$lang$arity$3(cljs.core._conj,to,from);
}
});
/**
* Returns a vector consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.mapv = (function() {
var mapv = null;
var mapv__2 = (function (f,coll){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$lang$arity$3((function (v,o){
return cljs.core.conj_BANG_(v,(f.cljs$lang$arity$1 ? f.cljs$lang$arity$1(o) : f.call(null,o)));
}),cljs.core.transient$(cljs.core.PersistentVector.EMPTY),coll));
});
var mapv__3 = (function (f,c1,c2){
return cljs.core.into(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$lang$arity$3(f,c1,c2));
});
var mapv__4 = (function (f,c1,c2,c3){
return cljs.core.into(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$lang$arity$4(f,c1,c2,c3));
});
var mapv__5 = (function() { 
var G__25964__delegate = function (f,c1,c2,c3,colls){
return cljs.core.into(cljs.core.PersistentVector.EMPTY,cljs.core.apply.cljs$lang$arity$variadic(cljs.core.map,f,c1,c2,c3,cljs.core.array_seq([colls], 0)));
};
var G__25964 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__25964__delegate.call(this, f, c1, c2, c3, colls);
};
G__25964.cljs$lang$maxFixedArity = 4;
G__25964.cljs$lang$applyTo = (function (arglist__25965){
var f = cljs.core.first(arglist__25965);
var c1 = cljs.core.first(cljs.core.next(arglist__25965));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__25965)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__25965))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__25965))));
return G__25964__delegate(f, c1, c2, c3, colls);
});
G__25964.cljs$lang$arity$variadic = G__25964__delegate;
return G__25964;
})()
;
mapv = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return mapv__2.call(this,f,c1);
case 3:
return mapv__3.call(this,f,c1,c2);
case 4:
return mapv__4.call(this,f,c1,c2,c3);
default:
return mapv__5.cljs$lang$arity$variadic(f,c1,c2,c3, cljs.core.array_seq(arguments, 4));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapv.cljs$lang$maxFixedArity = 4;
mapv.cljs$lang$applyTo = mapv__5.cljs$lang$applyTo;
mapv.cljs$lang$arity$2 = mapv__2;
mapv.cljs$lang$arity$3 = mapv__3;
mapv.cljs$lang$arity$4 = mapv__4;
mapv.cljs$lang$arity$variadic = mapv__5.cljs$lang$arity$variadic;
return mapv;
})()
;
/**
* Returns a vector of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filterv = (function filterv(pred,coll){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$lang$arity$3((function (v,o){
if(cljs.core.truth_((pred.cljs$lang$arity$1 ? pred.cljs$lang$arity$1(o) : pred.call(null,o))))
{return cljs.core.conj_BANG_(v,o);
} else
{return v;
}
}),cljs.core.transient$(cljs.core.PersistentVector.EMPTY),coll));
});
/**
* Returns a lazy sequence of lists of n items each, at offsets step
* apart. If step is not supplied, defaults to n, i.e. the partitions
* do not overlap. If a pad collection is supplied, use its elements as
* necessary to complete last partition upto n items. In case there are
* not enough padding elements, return a partition with less than n items.
*/
cljs.core.partition = (function() {
var partition = null;
var partition__2 = (function (n,coll){
return partition.cljs$lang$arity$3(n,n,coll);
});
var partition__3 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4092__auto__ = cljs.core.seq(coll);
if(temp__4092__auto__)
{var s = temp__4092__auto__;
var p = cljs.core.take(n,s);
if((n === cljs.core.count(p)))
{return cljs.core.cons(p,partition.cljs$lang$arity$3(n,step,cljs.core.drop(step,s)));
} else
{return null;
}
} else
{return null;
}
}),null));
});
var partition__4 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4092__auto__ = cljs.core.seq(coll);
if(temp__4092__auto__)
{var s = temp__4092__auto__;
var p = cljs.core.take(n,s);
if((n === cljs.core.count(p)))
{return cljs.core.cons(p,partition.cljs$lang$arity$4(n,step,pad,cljs.core.drop(step,s)));
} else
{return cljs.core.list.cljs$lang$arity$1(cljs.core.take(n,cljs.core.concat.cljs$lang$arity$2(p,pad)));
}
} else
{return null;
}
}),null));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case 2:
return partition__2.call(this,n,step);
case 3:
return partition__3.call(this,n,step,pad);
case 4:
return partition__4.call(this,n,step,pad,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$lang$arity$2 = partition__2;
partition.cljs$lang$arity$3 = partition__3;
partition.cljs$lang$arity$4 = partition__4;
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of keys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljs.core.get_in = (function() {
var get_in = null;
var get_in__2 = (function (m,ks){
return get_in.cljs$lang$arity$3(m,ks,null);
});
var get_in__3 = (function (m,ks,not_found){
var sentinel = cljs.core.lookup_sentinel;
var m__$1 = m;
var ks__$1 = cljs.core.seq(ks);
while(true){
if(ks__$1)
{if(cljs.core.not((function (){var G__25967 = m__$1;
if(G__25967)
{if(cljs.core.truth_((function (){var or__3943__auto__ = (G__25967.cljs$lang$protocol_mask$partition0$ & 256);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__25967.cljs$core$ILookup$;
}
})()))
{return true;
} else
{if((!G__25967.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.ILookup,G__25967);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.ILookup,G__25967);
}
})()))
{return not_found;
} else
{var m__$2 = cljs.core._lookup.cljs$lang$arity$3(m__$1,cljs.core.first(ks__$1),sentinel);
if((sentinel === m__$2))
{return not_found;
} else
{{
var G__25968 = sentinel;
var G__25969 = m__$2;
var G__25970 = cljs.core.next(ks__$1);
sentinel = G__25968;
m__$1 = G__25969;
ks__$1 = G__25970;
continue;
}
}
}
} else
{return m__$1;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case 2:
return get_in__2.call(this,m,ks);
case 3:
return get_in__3.call(this,m,ks,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_in.cljs$lang$arity$2 = get_in__2;
get_in.cljs$lang$arity$3 = get_in__3;
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__25971,v){
var vec__25973 = p__25971;
var k = cljs.core.nth.cljs$lang$arity$3(vec__25973,0,null);
var ks = cljs.core.nthnext(vec__25973,1);
if(cljs.core.truth_(ks))
{return cljs.core.assoc.cljs$lang$arity$3(m,k,assoc_in(cljs.core._lookup.cljs$lang$arity$3(m,k,null),ks,v));
} else
{return cljs.core.assoc.cljs$lang$arity$3(m,k,v);
}
});
/**
* 'Updates' a value in a nested associative structure, where ks is a
* sequence of keys and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* nested structure.  If any levels do not exist, hash-maps will be
* created.
* @param {...*} var_args
*/
cljs.core.update_in = (function() { 
var update_in__delegate = function (m,p__25974,f,args){
var vec__25976 = p__25974;
var k = cljs.core.nth.cljs$lang$arity$3(vec__25976,0,null);
var ks = cljs.core.nthnext(vec__25976,1);
if(cljs.core.truth_(ks))
{return cljs.core.assoc.cljs$lang$arity$3(m,k,cljs.core.apply.cljs$lang$arity$5(update_in,cljs.core._lookup.cljs$lang$arity$3(m,k,null),ks,f,args));
} else
{return cljs.core.assoc.cljs$lang$arity$3(m,k,cljs.core.apply.cljs$lang$arity$3(f,cljs.core._lookup.cljs$lang$arity$3(m,k,null),args));
}
};
var update_in = function (m,p__25974,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__25974, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__25977){
var m = cljs.core.first(arglist__25977);
var p__25974 = cljs.core.first(cljs.core.next(arglist__25977));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__25977)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__25977)));
return update_in__delegate(m, p__25974, f, args);
});
update_in.cljs$lang$arity$variadic = update_in__delegate;
return update_in;
})()
;
goog.provide('cljs.core.Vector');

/**
* @constructor
*/
cljs.core.Vector = (function (meta,array,__hash){
this.meta = meta;
this.array = array;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32400159;
})
cljs.core.Vector.cljs$lang$type = true;
cljs.core.Vector.cljs$lang$ctorPrSeq = (function (this__5785__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/Vector");
});
cljs.core.Vector.cljs$lang$ctorPrWriter = (function (this__5785__auto__,writer__5786__auto__,opt__5787__auto__){
return cljs.core._write(writer__5786__auto__,"cljs.core/Vector");
});
cljs.core.Vector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__5666__auto__ = self__.__hash;
if(!((h__5666__auto__ == null)))
{return h__5666__auto__;
} else
{var h__5666__auto____$1 = cljs.core.hash_coll(coll);
self__.__hash = h__5666__auto____$1;
return h__5666__auto____$1;
}
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var self__ = this;
var new_array = self__.array.slice();
(new_array[k] = v);
return (new cljs.core.Vector(self__.meta,new_array,null));
});
cljs.core.Vector.prototype.call = (function() {
var G__25979 = null;
var G__25979__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$2(coll,k);
});
var G__25979__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,not_found);
});
G__25979 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__25979__2.call(this,self__,k);
case 3:
return G__25979__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__25979;
})()
;
cljs.core.Vector.prototype.apply = (function (self__,args25978){
var self__ = this;
return self__.call.apply(self__,[self__].concat(args25978.slice()));
});
cljs.core.Vector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var new_array = self__.array.slice();
new_array.push(o);
return (new cljs.core.Vector(self__.meta,new_array,null));
});
cljs.core.Vector.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return (cljs.core.pr_str.cljs$lang$arity$1 ? cljs.core.pr_str.cljs$lang$arity$1(this$) : cljs.core.pr_str.call(null,this$));
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var self__ = this;
return cljs.core.ci_reduce.cljs$lang$arity$2(self__.array,f);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var self__ = this;
return cljs.core.ci_reduce.cljs$lang$arity$3(self__.array,f,start);
});
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
if((self__.array.length > 0))
{var vector_seq = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < self__.array.length))
{return cljs.core.cons((self__.array[i]),vector_seq((i + 1)));
} else
{return null;
}
}),null));
});
return vector_seq(0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
return self__.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var self__ = this;
var count = self__.array.length;
if((count > 0))
{return (self__.array[(count - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var self__ = this;
if((self__.array.length > 0))
{var new_array = self__.array.slice();
new_array.pop();
return (new cljs.core.Vector(self__.meta,new_array,null));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var self__ = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
return (new cljs.core.Vector(meta__$1,self__.array,self__.__hash));
});
cljs.core.Vector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var self__ = this;
if(cljs.core.truth_((function (){var and__3941__auto__ = (0 <= n);
if(and__3941__auto__)
{return (n < self__.array.length);
} else
{return and__3941__auto__;
}
})()))
{return (self__.array[n]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var self__ = this;
if(cljs.core.truth_((function (){var and__3941__auto__ = (0 <= n);
if(and__3941__auto__)
{return (n < self__.array.length);
} else
{return and__3941__auto__;
}
})()))
{return (self__.array[n]);
} else
{return not_found;
}
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return cljs.core.with_meta(cljs.core.Vector.EMPTY,self__.meta);
});
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,[],0));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs,null));
});
goog.provide('cljs.core.VectorNode');

/**
* @constructor
*/
cljs.core.VectorNode = (function (edit,arr){
this.edit = edit;
this.arr = arr;
})
cljs.core.VectorNode.cljs$lang$type = true;
cljs.core.VectorNode.cljs$lang$ctorPrSeq = (function (this__5788__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/VectorNode");
});
cljs.core.VectorNode.cljs$lang$ctorPrWriter = (function (this__5788__auto__,writer__5789__auto__,opts__5790__auto__){
return cljs.core._write(writer__5789__auto__,"cljs.core/VectorNode");
});
cljs.core.pv_fresh_node = (function pv_fresh_node(edit){
return (new cljs.core.VectorNode(edit,cljs.core.make_array.cljs$lang$arity$1(32)));
});
cljs.core.pv_aget = (function pv_aget(node,idx){
return (node.arr[idx]);
});
cljs.core.pv_aset = (function pv_aset(node,idx,val){
return (node.arr[idx] = val);
});
cljs.core.pv_clone_node = (function pv_clone_node(node){
return (new cljs.core.VectorNode(node.edit,node.arr.slice()));
});
cljs.core.tail_off = (function tail_off(pv){
var cnt = pv.cnt;
if((cnt < 32))
{return 0;
} else
{return (((cnt - 1) >>> 5) << 5);
}
});
cljs.core.new_path = (function new_path(edit,level,node){
var ll = level;
var ret = node;
while(true){
if((ll === 0))
{return ret;
} else
{var embed = ret;
var r = cljs.core.pv_fresh_node(edit);
var _ = cljs.core.pv_aset(r,0,embed);
{
var G__25980 = (ll - 5);
var G__25981 = r;
ll = G__25980;
ret = G__25981;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret = cljs.core.pv_clone_node(parent);
var subidx = (((pv.cnt - 1) >>> level) & 31);
if((5 === level))
{cljs.core.pv_aset(ret,subidx,tailnode);
return ret;
} else
{var child = cljs.core.pv_aget(parent,subidx);
if(!((child == null)))
{var node_to_insert = push_tail(pv,(level - 5),child,tailnode);
cljs.core.pv_aset(ret,subidx,node_to_insert);
return ret;
} else
{var node_to_insert = cljs.core.new_path(null,(level - 5),tailnode);
cljs.core.pv_aset(ret,subidx,node_to_insert);
return ret;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if(cljs.core.truth_((function (){var and__3941__auto__ = (0 <= i);
if(and__3941__auto__)
{return (i < pv.cnt);
} else
{return and__3941__auto__;
}
})()))
{if((i >= cljs.core.tail_off(pv)))
{return pv.tail;
} else
{var node = pv.root;
var level = pv.shift;
while(true){
if((level > 0))
{{
var G__25982 = cljs.core.pv_aget(node,((i >>> level) & 31));
var G__25983 = (level - 5);
node = G__25982;
level = G__25983;
continue;
}
} else
{return node.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in vector of length "),cljs.core.str(pv.cnt)].join('')));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret = cljs.core.pv_clone_node(node);
if((level === 0))
{cljs.core.pv_aset(ret,(i & 31),val);
return ret;
} else
{var subidx = ((i >>> level) & 31);
cljs.core.pv_aset(ret,subidx,do_assoc(pv,(level - 5),cljs.core.pv_aget(node,subidx),i,val));
return ret;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx = (((pv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child = pop_tail(pv,(level - 5),cljs.core.pv_aget(node,subidx));
if(cljs.core.truth_((function (){var and__3941__auto__ = (new_child == null);
if(and__3941__auto__)
{return (subidx === 0);
} else
{return and__3941__auto__;
}
})()))
{return null;
} else
{var ret = cljs.core.pv_clone_node(node);
cljs.core.pv_aset(ret,subidx,new_child);
return ret;
}
} else
{if((subidx === 0))
{return null;
} else
{if("\uFDD0:else")
{var ret = cljs.core.pv_clone_node(node);
cljs.core.pv_aset(ret,subidx,null);
return ret;
} else
{return null;
}
}
}
});
cljs.core.tv_editable_root = undefined;
cljs.core.tv_editable_tail = undefined;
cljs.core.TransientVector = undefined;
cljs.core.deref = undefined;
cljs.core.pr_sequential = undefined;
cljs.core.pr_sequential_writer = undefined;
cljs.core.pr_writer = undefined;
cljs.core.chunked_seq = undefined;
goog.provide('cljs.core.PersistentVector');

/**
* @constructor
*/
cljs.core.PersistentVector = (function (meta,cnt,shift,root,tail,__hash){
this.meta = meta;
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 4;
this.cljs$lang$protocol_mask$partition0$ = 167668511;
})
cljs.core.PersistentVector.cljs$lang$type = true;
cljs.core.PersistentVector.cljs$lang$ctorPrSeq = (function (this__5785__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/PersistentVector");
});
cljs.core.PersistentVector.cljs$lang$ctorPrWriter = (function (this__5785__auto__,writer__5786__auto__,opt__5787__auto__){
return cljs.core._write(writer__5786__auto__,"cljs.core/PersistentVector");
});
cljs.core.PersistentVector.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var self__ = this;
return (new cljs.core.TransientVector(self__.cnt,self__.shift,(cljs.core.tv_editable_root.cljs$lang$arity$1 ? cljs.core.tv_editable_root.cljs$lang$arity$1(self__.root) : cljs.core.tv_editable_root.call(null,self__.root)),(cljs.core.tv_editable_tail.cljs$lang$arity$1 ? cljs.core.tv_editable_tail.cljs$lang$arity$1(self__.tail) : cljs.core.tv_editable_tail.call(null,self__.tail))));
});
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__5666__auto__ = self__.__hash;
if(!((h__5666__auto__ == null)))
{return h__5666__auto__;
} else
{var h__5666__auto____$1 = cljs.core.hash_coll(coll);
self__.__hash = h__5666__auto____$1;
return h__5666__auto____$1;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var self__ = this;
if(cljs.core.truth_((function (){var and__3941__auto__ = (0 <= k);
if(and__3941__auto__)
{return (k < self__.cnt);
} else
{return and__3941__auto__;
}
})()))
{if((cljs.core.tail_off(coll) <= k))
{var new_tail = self__.tail.slice();
(new_tail[(k & 31)] = v);
return (new cljs.core.PersistentVector(self__.meta,self__.cnt,self__.shift,self__.root,new_tail,null));
} else
{return (new cljs.core.PersistentVector(self__.meta,self__.cnt,self__.shift,cljs.core.do_assoc(coll,self__.shift,self__.root,k,v),self__.tail,null));
}
} else
{if((k === self__.cnt))
{return coll.cljs$core$ICollection$_conj$arity$2(coll,v);
} else
{if("\uFDD0:else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(k),cljs.core.str(" out of bounds  [0,"),cljs.core.str(self__.cnt),cljs.core.str("]")].join('')));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.call = (function() {
var G__25985 = null;
var G__25985__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$2(coll,k);
});
var G__25985__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,not_found);
});
G__25985 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__25985__2.call(this,self__,k);
case 3:
return G__25985__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__25985;
})()
;
cljs.core.PersistentVector.prototype.apply = (function (self__,args25984){
var self__ = this;
return self__.call.apply(self__,[self__].concat(args25984.slice()));
});
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (v,f,init){
var self__ = this;
var step_init = [0,init];
var i = 0;
while(true){
if((i < self__.cnt))
{var arr = cljs.core.array_for(v,i);
var len = arr.length;
var init__$1 = (function (){var j = 0;
var init__$1 = (step_init[1]);
while(true){
if((j < len))
{var init__$2 = (f.cljs$lang$arity$3 ? f.cljs$lang$arity$3(init__$1,(j + i),(arr[j])) : f.call(null,init__$1,(j + i),(arr[j])));
if(cljs.core.reduced_QMARK_(init__$2))
{return init__$2;
} else
{{
var G__25986 = (j + 1);
var G__25987 = init__$2;
j = G__25986;
init__$1 = G__25987;
continue;
}
}
} else
{(step_init[0] = len);
(step_init[1] = init__$1);
return init__$1;
}
break;
}
})();
if(cljs.core.reduced_QMARK_(init__$1))
{return (cljs.core.deref.cljs$lang$arity$1 ? cljs.core.deref.cljs$lang$arity$1(init__$1) : cljs.core.deref.call(null,init__$1));
} else
{{
var G__25988 = (i + (step_init[0]));
i = G__25988;
continue;
}
}
} else
{return (step_init[1]);
}
break;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
if(((self__.cnt - cljs.core.tail_off(coll)) < 32))
{var new_tail = self__.tail.slice();
new_tail.push(o);
return (new cljs.core.PersistentVector(self__.meta,(self__.cnt + 1),self__.shift,self__.root,new_tail,null));
} else
{var root_overflow_QMARK_ = ((self__.cnt >>> 5) > (1 << self__.shift));
var new_shift = ((root_overflow_QMARK_)?(self__.shift + 5):self__.shift);
var new_root = ((root_overflow_QMARK_)?(function (){var n_r = cljs.core.pv_fresh_node(null);
cljs.core.pv_aset(n_r,0,self__.root);
cljs.core.pv_aset(n_r,1,cljs.core.new_path(null,self__.shift,(new cljs.core.VectorNode(null,self__.tail))));
return n_r;
})():cljs.core.push_tail(coll,self__.shift,self__.root,(new cljs.core.VectorNode(null,self__.tail))));
return (new cljs.core.PersistentVector(self__.meta,(self__.cnt + 1),new_shift,new_root,[o],null));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var self__ = this;
if((self__.cnt > 0))
{return (new cljs.core.RSeq(coll,(self__.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (coll){
var self__ = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,0);
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (coll){
var self__ = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,1);
});
cljs.core.PersistentVector.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return (cljs.core.pr_str.cljs$lang$arity$1 ? cljs.core.pr_str.cljs$lang$arity$1(this$) : cljs.core.pr_str.call(null,this$));
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var self__ = this;
return cljs.core.ci_reduce.cljs$lang$arity$2(v,f);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var self__ = this;
return cljs.core.ci_reduce.cljs$lang$arity$3(v,f,start);
});
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
if((self__.cnt === 0))
{return null;
} else
{return (cljs.core.chunked_seq.cljs$lang$arity$3 ? cljs.core.chunked_seq.cljs$lang$arity$3(coll,0,0) : cljs.core.chunked_seq.call(null,coll,0,0));
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
return self__.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var self__ = this;
if((self__.cnt > 0))
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,(self__.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var self__ = this;
if((self__.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === self__.cnt))
{return cljs.core._with_meta(cljs.core.PersistentVector.EMPTY,self__.meta);
} else
{if((1 < (self__.cnt - cljs.core.tail_off(coll))))
{return (new cljs.core.PersistentVector(self__.meta,(self__.cnt - 1),self__.shift,self__.root,self__.tail.slice(0,-1),null));
} else
{if("\uFDD0:else")
{var new_tail = cljs.core.array_for(coll,(self__.cnt - 2));
var nr = cljs.core.pop_tail(coll,self__.shift,self__.root);
var new_root = (((nr == null))?cljs.core.PersistentVector.EMPTY_NODE:nr);
var cnt_1 = (self__.cnt - 1);
if(cljs.core.truth_((function (){var and__3941__auto__ = (5 < self__.shift);
if(and__3941__auto__)
{return (cljs.core.pv_aget(new_root,1) == null);
} else
{return and__3941__auto__;
}
})()))
{return (new cljs.core.PersistentVector(self__.meta,cnt_1,(self__.shift - 5),cljs.core.pv_aget(new_root,0),new_tail,null));
} else
{return (new cljs.core.PersistentVector(self__.meta,cnt_1,self__.shift,new_root,new_tail,null));
}
} else
{return null;
}
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var self__ = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
return (new cljs.core.PersistentVector(meta__$1,self__.cnt,self__.shift,self__.root,self__.tail,self__.__hash));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var self__ = this;
return (cljs.core.array_for(coll,n)[(n & 31)]);
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var self__ = this;
if(cljs.core.truth_((function (){var and__3941__auto__ = (0 <= n);
if(and__3941__auto__)
{return (n < self__.cnt);
} else
{return and__3941__auto__;
}
})()))
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,self__.meta);
});
cljs.core.PersistentVector.EMPTY_NODE = cljs.core.pv_fresh_node(null);
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,0,5,cljs.core.PersistentVector.EMPTY_NODE,[],0));
cljs.core.PersistentVector.fromArray = (function (xs,no_clone){
var l = xs.length;
var xs__$1 = (((no_clone === true))?xs:xs.slice());
if((l < 32))
{return (new cljs.core.PersistentVector(null,l,5,cljs.core.PersistentVector.EMPTY_NODE,xs__$1,null));
} else
{var node = xs__$1.slice(0,32);
var v = (new cljs.core.PersistentVector(null,32,5,cljs.core.PersistentVector.EMPTY_NODE,node,null));
var i = 32;
var out = cljs.core._as_transient(v);
while(true){
if((i < l))
{{
var G__25989 = (i + 1);
var G__25990 = cljs.core.conj_BANG_(out,(xs__$1[i]));
i = G__25989;
out = G__25990;
continue;
}
} else
{return cljs.core.persistent_BANG_(out);
}
break;
}
}
});
cljs.core.vec = (function vec(coll){
return cljs.core._persistent_BANG_(cljs.core.reduce.cljs$lang$arity$3(cljs.core._conj_BANG_,cljs.core._as_transient(cljs.core.PersistentVector.EMPTY),coll));
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function() { 
var vector__delegate = function (args){
return cljs.core.vec(args);
};
var vector = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return vector__delegate.call(this, args);
};
vector.cljs$lang$maxFixedArity = 0;
vector.cljs$lang$applyTo = (function (arglist__25991){
var args = cljs.core.seq(arglist__25991);;
return vector__delegate(args);
});
vector.cljs$lang$arity$variadic = vector__delegate;
return vector;
})()
;
goog.provide('cljs.core.ChunkedSeq');

/**
* @constructor
*/
cljs.core.ChunkedSeq = (function (vec,node,i,off,meta,__hash){
this.vec = vec;
this.node = node;
this.i = i;
this.off = off;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 31719660;
this.cljs$lang$protocol_mask$partition1$ = 1536;
})
cljs.core.ChunkedSeq.cljs$lang$type = true;
cljs.core.ChunkedSeq.cljs$lang$ctorPrSeq = (function (this__5785__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/ChunkedSeq");
});
cljs.core.ChunkedSeq.cljs$lang$ctorPrWriter = (function (this__5785__auto__,writer__5786__auto__,opt__5787__auto__){
return cljs.core._write(writer__5786__auto__,"cljs.core/ChunkedSeq");
});
cljs.core.ChunkedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__5666__auto__ = self__.__hash;
if(!((h__5666__auto__ == null)))
{return h__5666__auto__;
} else
{var h__5666__auto____$1 = cljs.core.hash_coll(coll);
self__.__hash = h__5666__auto____$1;
return h__5666__auto____$1;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
if(((self__.off + 1) < self__.node.length))
{var s = (cljs.core.chunked_seq.cljs$lang$arity$4 ? cljs.core.chunked_seq.cljs$lang$arity$4(self__.vec,self__.node,self__.i,(self__.off + 1)) : cljs.core.chunked_seq.call(null,self__.vec,self__.node,self__.i,(self__.off + 1)));
if((s == null))
{return null;
} else
{return s;
}
} else
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
return cljs.core.cons(o,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
return coll;
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
return (self__.node[self__.off]);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
if(((self__.off + 1) < self__.node.length))
{var s = (cljs.core.chunked_seq.cljs$lang$arity$4 ? cljs.core.chunked_seq.cljs$lang$arity$4(self__.vec,self__.node,self__.i,(self__.off + 1)) : cljs.core.chunked_seq.call(null,self__.vec,self__.node,self__.i,(self__.off + 1)));
if((s == null))
{return cljs.core.List.EMPTY;
} else
{return s;
}
} else
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var self__ = this;
var l = self__.node.length;
var s = ((((self__.i + l) < cljs.core._count(self__.vec)))?(cljs.core.chunked_seq.cljs$lang$arity$3 ? cljs.core.chunked_seq.cljs$lang$arity$3(self__.vec,(self__.i + l),0) : cljs.core.chunked_seq.call(null,self__.vec,(self__.i + l),0)):null);
if((s == null))
{return null;
} else
{return s;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var self__ = this;
return (cljs.core.chunked_seq.cljs$lang$arity$5 ? cljs.core.chunked_seq.cljs$lang$arity$5(self__.vec,self__.node,self__.i,self__.off,m) : cljs.core.chunked_seq.call(null,self__.vec,self__.node,self__.i,self__.off,m));
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,self__.meta);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var self__ = this;
return cljs.core.array_chunk.cljs$lang$arity$2(self__.node,self__.off);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var self__ = this;
var l = self__.node.length;
var s = ((((self__.i + l) < cljs.core._count(self__.vec)))?(cljs.core.chunked_seq.cljs$lang$arity$3 ? cljs.core.chunked_seq.cljs$lang$arity$3(self__.vec,(self__.i + l),0) : cljs.core.chunked_seq.call(null,self__.vec,(self__.i + l),0)):null);
if((s == null))
{return cljs.core.List.EMPTY;
} else
{return s;
}
});
cljs.core.chunked_seq = (function() {
var chunked_seq = null;
var chunked_seq__3 = (function (vec,i,off){
return chunked_seq.cljs$lang$arity$5(vec,cljs.core.array_for(vec,i),i,off,null);
});
var chunked_seq__4 = (function (vec,node,i,off){
return chunked_seq.cljs$lang$arity$5(vec,node,i,off,null);
});
var chunked_seq__5 = (function (vec,node,i,off,meta){
return (new cljs.core.ChunkedSeq(vec,node,i,off,meta,null));
});
chunked_seq = function(vec,node,i,off,meta){
switch(arguments.length){
case 3:
return chunked_seq__3.call(this,vec,node,i);
case 4:
return chunked_seq__4.call(this,vec,node,i,off);
case 5:
return chunked_seq__5.call(this,vec,node,i,off,meta);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chunked_seq.cljs$lang$arity$3 = chunked_seq__3;
chunked_seq.cljs$lang$arity$4 = chunked_seq__4;
chunked_seq.cljs$lang$arity$5 = chunked_seq__5;
return chunked_seq;
})()
;
cljs.core.build_subvec = undefined;
goog.provide('cljs.core.Subvec');

/**
* @constructor
*/
cljs.core.Subvec = (function (meta,v,start,end,__hash){
this.meta = meta;
this.v = v;
this.start = start;
this.end = end;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32400159;
})
cljs.core.Subvec.cljs$lang$type = true;
cljs.core.Subvec.cljs$lang$ctorPrSeq = (function (this__5785__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/Subvec");
});
cljs.core.Subvec.cljs$lang$ctorPrWriter = (function (this__5785__auto__,writer__5786__auto__,opt__5787__auto__){
return cljs.core._write(writer__5786__auto__,"cljs.core/Subvec");
});
cljs.core.Subvec.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__5666__auto__ = self__.__hash;
if(!((h__5666__auto__ == null)))
{return h__5666__auto__;
} else
{var h__5666__auto____$1 = cljs.core.hash_coll(coll);
self__.__hash = h__5666__auto____$1;
return h__5666__auto____$1;
}
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,key,val){
var self__ = this;
var v_pos = (self__.start + key);
return (cljs.core.build_subvec.cljs$lang$arity$5 ? cljs.core.build_subvec.cljs$lang$arity$5(self__.meta,cljs.core._assoc(self__.v,v_pos,val),self__.start,((self__.end > (v_pos + 1)) ? self__.end : (v_pos + 1)),null) : cljs.core.build_subvec.call(null,self__.meta,cljs.core._assoc(self__.v,v_pos,val),self__.start,((self__.end > (v_pos + 1)) ? self__.end : (v_pos + 1)),null));
});
cljs.core.Subvec.prototype.call = (function() {
var G__25993 = null;
var G__25993__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$2(coll,k);
});
var G__25993__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,not_found);
});
G__25993 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__25993__2.call(this,self__,k);
case 3:
return G__25993__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__25993;
})()
;
cljs.core.Subvec.prototype.apply = (function (self__,args25992){
var self__ = this;
return self__.call.apply(self__,[self__].concat(args25992.slice()));
});
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
return (cljs.core.build_subvec.cljs$lang$arity$5 ? cljs.core.build_subvec.cljs$lang$arity$5(self__.meta,cljs.core._assoc_n(self__.v,self__.end,o),self__.start,(self__.end + 1),null) : cljs.core.build_subvec.call(null,self__.meta,cljs.core._assoc_n(self__.v,self__.end,o),self__.start,(self__.end + 1),null));
});
cljs.core.Subvec.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return (cljs.core.pr_str.cljs$lang$arity$1 ? cljs.core.pr_str.cljs$lang$arity$1(this$) : cljs.core.pr_str.call(null,this$));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
return cljs.core.ci_reduce.cljs$lang$arity$2(coll,f);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start__$1){
var self__ = this;
return cljs.core.ci_reduce.cljs$lang$arity$3(coll,f,start__$1);
});
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var subvec_seq = (function subvec_seq(i){
if((i === self__.end))
{return null;
} else
{return cljs.core.cons(cljs.core._nth.cljs$lang$arity$2(self__.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq((i + 1));
}),null)));
}
});
return subvec_seq(self__.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
return (self__.end - self__.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var self__ = this;
return cljs.core._nth.cljs$lang$arity$2(self__.v,(self__.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var self__ = this;
if((self__.start === self__.end))
{throw (new Error("Can't pop empty vector"));
} else
{return (cljs.core.build_subvec.cljs$lang$arity$5 ? cljs.core.build_subvec.cljs$lang$arity$5(self__.meta,self__.v,self__.start,(self__.end - 1),null) : cljs.core.build_subvec.call(null,self__.meta,self__.v,self__.start,(self__.end - 1),null));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var self__ = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
return (cljs.core.build_subvec.cljs$lang$arity$5 ? cljs.core.build_subvec.cljs$lang$arity$5(meta__$1,self__.v,self__.start,self__.end,self__.__hash) : cljs.core.build_subvec.call(null,meta__$1,self__.v,self__.start,self__.end,self__.__hash));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var self__ = this;
return cljs.core._nth.cljs$lang$arity$2(self__.v,(self__.start + n));
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var self__ = this;
return cljs.core._nth.cljs$lang$arity$3(self__.v,(self__.start + n),not_found);
});
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return cljs.core.with_meta(cljs.core.Vector.EMPTY,self__.meta);
});
cljs.core.build_subvec = (function build_subvec(meta,v,start,end,__hash){
var c = cljs.core.count(v);
if(cljs.core.truth_((function (){var or__3943__auto__ = (start < 0);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (end < 0);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{var or__3943__auto____$2 = (start > c);
if(or__3943__auto____$2)
{return or__3943__auto____$2;
} else
{return (end > c);
}
}
}
})()))
{throw (new Error("Index out of bounds"));
} else
{}
return (new cljs.core.Subvec(meta,v,start,end,__hash));
});
/**
* Returns a persistent vector of the items in vector from
* start (inclusive) to end (exclusive).  If end is not supplied,
* defaults to (count vector). This operation is O(1) and very fast, as
* the resulting vector shares structure with the original and no
* trimming is done.
*/
cljs.core.subvec = (function() {
var subvec = null;
var subvec__2 = (function (v,start){
return subvec.cljs$lang$arity$3(v,start,cljs.core.count(v));
});
var subvec__3 = (function (v,start,end){
return cljs.core.build_subvec(null,v,start,end,null);
});
subvec = function(v,start,end){
switch(arguments.length){
case 2:
return subvec__2.call(this,v,start);
case 3:
return subvec__3.call(this,v,start,end);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
subvec.cljs$lang$arity$2 = subvec__2;
subvec.cljs$lang$arity$3 = subvec__3;
return subvec;
})()
;
cljs.core.tv_ensure_editable = (function tv_ensure_editable(edit,node){
if((edit === node.edit))
{return node;
} else
{return (new cljs.core.VectorNode(edit,node.arr.slice()));
}
});
cljs.core.tv_editable_root = (function tv_editable_root(node){
return (new cljs.core.VectorNode({},node.arr.slice()));
});
cljs.core.tv_editable_tail = (function tv_editable_tail(tl){
var ret = cljs.core.make_array.cljs$lang$arity$1(32);
cljs.core.array_copy(tl,0,ret,0,tl.length);
return ret;
});
cljs.core.tv_push_tail = (function tv_push_tail(tv,level,parent,tail_node){
var ret = cljs.core.tv_ensure_editable(tv.root.edit,parent);
var subidx = (((tv.cnt - 1) >>> level) & 31);
cljs.core.pv_aset(ret,subidx,(((level === 5))?tail_node:(function (){var child = cljs.core.pv_aget(ret,subidx);
if(!((child == null)))
{return tv_push_tail(tv,(level - 5),child,tail_node);
} else
{return cljs.core.new_path(tv.root.edit,(level - 5),tail_node);
}
})()));
return ret;
});
cljs.core.tv_pop_tail = (function tv_pop_tail(tv,level,node){
var node__$1 = cljs.core.tv_ensure_editable(tv.root.edit,node);
var subidx = (((tv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child = tv_pop_tail(tv,(level - 5),cljs.core.pv_aget(node__$1,subidx));
if(cljs.core.truth_((function (){var and__3941__auto__ = (new_child == null);
if(and__3941__auto__)
{return (subidx === 0);
} else
{return and__3941__auto__;
}
})()))
{return null;
} else
{cljs.core.pv_aset(node__$1,subidx,new_child);
return node__$1;
}
} else
{if((subidx === 0))
{return null;
} else
{if("\uFDD0:else")
{cljs.core.pv_aset(node__$1,subidx,null);
return node__$1;
} else
{return null;
}
}
}
});
cljs.core.editable_array_for = (function editable_array_for(tv,i){
if(cljs.core.truth_((function (){var and__3941__auto__ = (0 <= i);
if(and__3941__auto__)
{return (i < tv.cnt);
} else
{return and__3941__auto__;
}
})()))
{if((i >= cljs.core.tail_off(tv)))
{return tv.tail;
} else
{var root = tv.root;
var node = root;
var level = tv.shift;
while(true){
if((level > 0))
{{
var G__25994 = cljs.core.tv_ensure_editable(root.edit,cljs.core.pv_aget(node,((i >>> level) & 31)));
var G__25995 = (level - 5);
node = G__25994;
level = G__25995;
continue;
}
} else
{return node.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in transient vector of length "),cljs.core.str(tv.cnt)].join('')));
}
});
goog.provide('cljs.core.TransientVector');

/**
* @constructor
*/
cljs.core.TransientVector = (function (cnt,shift,root,tail){
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.cljs$lang$protocol_mask$partition0$ = 275;
this.cljs$lang$protocol_mask$partition1$ = 88;
})
cljs.core.TransientVector.cljs$lang$type = true;
cljs.core.TransientVector.cljs$lang$ctorPrSeq = (function (this__5785__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/TransientVector");
});
cljs.core.TransientVector.cljs$lang$ctorPrWriter = (function (this__5785__auto__,writer__5786__auto__,opt__5787__auto__){
return cljs.core._write(writer__5786__auto__,"cljs.core/TransientVector");
});
cljs.core.TransientVector.prototype.call = (function() {
var G__25997 = null;
var G__25997__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$2(coll,k);
});
var G__25997__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,not_found);
});
G__25997 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__25997__2.call(this,self__,k);
case 3:
return G__25997__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__25997;
})()
;
cljs.core.TransientVector.prototype.apply = (function (self__,args25996){
var self__ = this;
return self__.call.apply(self__,[self__].concat(args25996.slice()));
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var self__ = this;
if(self__.root.edit)
{return (cljs.core.array_for(coll,n)[(n & 31)]);
} else
{throw (new Error("nth after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var self__ = this;
if(cljs.core.truth_((function (){var and__3941__auto__ = (0 <= n);
if(and__3941__auto__)
{return (n < self__.cnt);
} else
{return and__3941__auto__;
}
})()))
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
if(self__.root.edit)
{return self__.cnt;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (tcoll,n,val){
var self__ = this;
if(self__.root.edit)
{if(cljs.core.truth_((function (){var and__3941__auto__ = (0 <= n);
if(and__3941__auto__)
{return (n < self__.cnt);
} else
{return and__3941__auto__;
}
})()))
{if((cljs.core.tail_off(tcoll) <= n))
{(self__.tail[(n & 31)] = val);
return tcoll;
} else
{var new_root = (function go(level,node){
var node__$1 = cljs.core.tv_ensure_editable(self__.root.edit,node);
if((level === 0))
{cljs.core.pv_aset(node__$1,(n & 31),val);
return node__$1;
} else
{var subidx = ((n >>> level) & 31);
cljs.core.pv_aset(node__$1,subidx,go((level - 5),cljs.core.pv_aget(node__$1,subidx)));
return node__$1;
}
}).call(null,self__.shift,self__.root);
self__.root = new_root;
return tcoll;
}
} else
{if((n === self__.cnt))
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{if("\uFDD0:else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(n),cljs.core.str(" out of bounds for TransientVector of length"),cljs.core.str(self__.cnt)].join('')));
} else
{return null;
}
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_pop_BANG_$arity$1 = (function (tcoll){
var self__ = this;
if(self__.root.edit)
{if((self__.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === self__.cnt))
{self__.cnt = 0;
return tcoll;
} else
{if((((self__.cnt - 1) & 31) > 0))
{self__.cnt = (self__.cnt - 1);
return tcoll;
} else
{if("\uFDD0:else")
{var new_tail = cljs.core.editable_array_for(tcoll,(self__.cnt - 2));
var new_root = (function (){var nr = cljs.core.tv_pop_tail(tcoll,self__.shift,self__.root);
if(!((nr == null)))
{return nr;
} else
{return (new cljs.core.VectorNode(self__.root.edit,cljs.core.make_array.cljs$lang$arity$1(32)));
}
})();
if(cljs.core.truth_((function (){var and__3941__auto__ = (5 < self__.shift);
if(and__3941__auto__)
{return (cljs.core.pv_aget(new_root,1) == null);
} else
{return and__3941__auto__;
}
})()))
{var new_root__$1 = cljs.core.tv_ensure_editable(self__.root.edit,cljs.core.pv_aget(new_root,0));
self__.root = new_root__$1;
self__.shift = (self__.shift - 5);
self__.cnt = (self__.cnt - 1);
self__.tail = new_tail;
return tcoll;
} else
{self__.root = new_root;
self__.cnt = (self__.cnt - 1);
self__.tail = new_tail;
return tcoll;
}
} else
{return null;
}
}
}
}
} else
{throw (new Error("pop! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var self__ = this;
return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,key,val);
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var self__ = this;
if(self__.root.edit)
{if(((self__.cnt - cljs.core.tail_off(tcoll)) < 32))
{(self__.tail[(self__.cnt & 31)] = o);
self__.cnt = (self__.cnt + 1);
return tcoll;
} else
{var tail_node = (new cljs.core.VectorNode(self__.root.edit,self__.tail));
var new_tail = cljs.core.make_array.cljs$lang$arity$1(32);
(new_tail[0] = o);
self__.tail = new_tail;
if(((self__.cnt >>> 5) > (1 << self__.shift)))
{var new_root_array = cljs.core.make_array.cljs$lang$arity$1(32);
var new_shift = (self__.shift + 5);
(new_root_array[0] = self__.root);
(new_root_array[1] = cljs.core.new_path(self__.root.edit,self__.shift,tail_node));
self__.root = (new cljs.core.VectorNode(self__.root.edit,new_root_array));
self__.shift = new_shift;
self__.cnt = (self__.cnt + 1);
return tcoll;
} else
{var new_root = cljs.core.tv_push_tail(tcoll,self__.shift,self__.root,tail_node);
self__.root = new_root;
self__.cnt = (self__.cnt + 1);
return tcoll;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var self__ = this;
if(self__.root.edit)
{self__.root.edit = null;
var len = (self__.cnt - cljs.core.tail_off(tcoll));
var trimmed_tail = cljs.core.make_array.cljs$lang$arity$1(len);
cljs.core.array_copy(self__.tail,0,trimmed_tail,0,len);
return (new cljs.core.PersistentVector(null,self__.cnt,self__.shift,self__.root,trimmed_tail,null));
} else
{throw (new Error("persistent! called twice"));
}
});
goog.provide('cljs.core.PersistentQueueSeq');

/**
* @constructor
*/
cljs.core.PersistentQueueSeq = (function (meta,front,rear,__hash){
this.meta = meta;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.PersistentQueueSeq.cljs$lang$type = true;
cljs.core.PersistentQueueSeq.cljs$lang$ctorPrSeq = (function (this__5785__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.cljs$lang$ctorPrWriter = (function (this__5785__auto__,writer__5786__auto__,opt__5787__auto__){
return cljs.core._write(writer__5786__auto__,"cljs.core/PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__5666__auto__ = self__.__hash;
if(!((h__5666__auto__ == null)))
{return h__5666__auto__;
} else
{var h__5666__auto____$1 = cljs.core.hash_coll(coll);
self__.__hash = h__5666__auto____$1;
return h__5666__auto____$1;
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
return cljs.core.cons(o,coll);
});
cljs.core.PersistentQueueSeq.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return (cljs.core.pr_str.cljs$lang$arity$1 ? cljs.core.pr_str.cljs$lang$arity$1(this$) : cljs.core.pr_str.call(null,this$));
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
return cljs.core._first(self__.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var temp__4090__auto__ = cljs.core.next(self__.front);
if(temp__4090__auto__)
{var f1 = temp__4090__auto__;
return (new cljs.core.PersistentQueueSeq(self__.meta,f1,self__.rear,null));
} else
{if((self__.rear == null))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{return (new cljs.core.PersistentQueueSeq(self__.meta,self__.rear,null,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
return (new cljs.core.PersistentQueueSeq(meta__$1,self__.front,self__.rear,self__.__hash));
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});
goog.provide('cljs.core.PersistentQueue');

/**
* @constructor
*/
cljs.core.PersistentQueue = (function (meta,count,front,rear,__hash){
this.meta = meta;
this.count = count;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31858766;
})
cljs.core.PersistentQueue.cljs$lang$type = true;
cljs.core.PersistentQueue.cljs$lang$ctorPrSeq = (function (this__5785__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/PersistentQueue");
});
cljs.core.PersistentQueue.cljs$lang$ctorPrWriter = (function (this__5785__auto__,writer__5786__auto__,opt__5787__auto__){
return cljs.core._write(writer__5786__auto__,"cljs.core/PersistentQueue");
});
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__5666__auto__ = self__.__hash;
if(!((h__5666__auto__ == null)))
{return h__5666__auto__;
} else
{var h__5666__auto____$1 = cljs.core.hash_coll(coll);
self__.__hash = h__5666__auto____$1;
return h__5666__auto____$1;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
if(cljs.core.truth_(self__.front))
{return (new cljs.core.PersistentQueue(self__.meta,(self__.count + 1),self__.front,cljs.core.conj.cljs$lang$arity$2((function (){var or__3943__auto__ = self__.rear;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),o),null));
} else
{return (new cljs.core.PersistentQueue(self__.meta,(self__.count + 1),cljs.core.conj.cljs$lang$arity$2(self__.front,o),cljs.core.PersistentVector.EMPTY,null));
}
});
cljs.core.PersistentQueue.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return (cljs.core.pr_str.cljs$lang$arity$1 ? cljs.core.pr_str.cljs$lang$arity$1(this$) : cljs.core.pr_str.call(null,this$));
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var rear__$1 = cljs.core.seq(self__.rear);
if(cljs.core.truth_((function (){var or__3943__auto__ = self__.front;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return rear__$1;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,self__.front,cljs.core.seq(rear__$1),null));
} else
{return null;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
return self__.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var self__ = this;
return cljs.core._first(self__.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var self__ = this;
if(cljs.core.truth_(self__.front))
{var temp__4090__auto__ = cljs.core.next(self__.front);
if(temp__4090__auto__)
{var f1 = temp__4090__auto__;
return (new cljs.core.PersistentQueue(self__.meta,(self__.count - 1),f1,self__.rear,null));
} else
{return (new cljs.core.PersistentQueue(self__.meta,(self__.count - 1),cljs.core.seq(self__.rear),cljs.core.PersistentVector.EMPTY,null));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
return cljs.core.first(self__.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
return cljs.core.rest(cljs.core.seq(coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
return (new cljs.core.PersistentQueue(meta__$1,self__.count,self__.front,self__.rear,self__.__hash));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return cljs.core.PersistentQueue.EMPTY;
});
cljs.core.PersistentQueue.EMPTY = (new cljs.core.PersistentQueue(null,0,null,cljs.core.PersistentVector.EMPTY,0));
goog.provide('cljs.core.NeverEquiv');

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2097152;
})
cljs.core.NeverEquiv.cljs$lang$type = true;
cljs.core.NeverEquiv.cljs$lang$ctorPrSeq = (function (this__5785__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/NeverEquiv");
});
cljs.core.NeverEquiv.cljs$lang$ctorPrWriter = (function (this__5785__auto__,writer__5786__auto__,opt__5787__auto__){
return cljs.core._write(writer__5786__auto__,"cljs.core/NeverEquiv");
});
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
return false;
});
cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){
return cljs.core.boolean$(((cljs.core.map_QMARK_(y))?(((cljs.core.count(x) === cljs.core.count(y)))?cljs.core.every_QMARK_(cljs.core.identity,cljs.core.map.cljs$lang$arity$2((function (xkv){
return cljs.core._EQ_.cljs$lang$arity$2(cljs.core._lookup.cljs$lang$arity$3(y,cljs.core.first(xkv),cljs.core.never_equiv),cljs.core.second(xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){
var len = array.length;
var i = 0;
while(true){
if((i < len))
{if((k === (array[i])))
{return i;
} else
{{
var G__25998 = (i + incr);
i = G__25998;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__$1 = cljs.core.hash.cljs$lang$arity$1(a);
var b__$1 = cljs.core.hash.cljs$lang$arity$1(b);
if((a__$1 < b__$1))
{return -1;
} else
{if((a__$1 > b__$1))
{return 1;
} else
{if("\uFDD0:else")
{return 0;
} else
{return null;
}
}
}
});
cljs.core.obj_map__GT_hash_map = (function obj_map__GT_hash_map(m,k,v){
var ks = m.keys;
var len = ks.length;
var so = m.strobj;
var mm = cljs.core.meta(m);
var i = 0;
var out = cljs.core.transient$(cljs.core.PersistentHashMap.EMPTY);
while(true){
if((i < len))
{var k__$1 = (ks[i]);
{
var G__25999 = (i + 1);
var G__26000 = cljs.core.assoc_BANG_(out,k__$1,(so[k__$1]));
i = G__25999;
out = G__26000;
continue;
}
} else
{return cljs.core.with_meta(cljs.core.persistent_BANG_(cljs.core.assoc_BANG_(out,k,v)),mm);
}
break;
}
});
cljs.core.obj_clone = (function obj_clone(obj,ks){
var new_obj = {};
var l = ks.length;
var i_26002 = 0;
while(true){
if((i_26002 < l))
{var k_26003 = (ks[i_26002]);
(new_obj[k_26003] = (obj[k_26003]));
{
var G__26004 = (i_26002 + 1);
i_26002 = G__26004;
continue;
}
} else
{}
break;
}
return new_obj;
});
goog.provide('cljs.core.ObjMap');

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj,update_count,__hash){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
this.update_count = update_count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 4;
this.cljs$lang$protocol_mask$partition0$ = 16123663;
})
cljs.core.ObjMap.cljs$lang$type = true;
cljs.core.ObjMap.cljs$lang$ctorPrSeq = (function (this__5785__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/ObjMap");
});
cljs.core.ObjMap.cljs$lang$ctorPrWriter = (function (this__5785__auto__,writer__5786__auto__,opt__5787__auto__){
return cljs.core._write(writer__5786__auto__,"cljs.core/ObjMap");
});
cljs.core.ObjMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var self__ = this;
return cljs.core.transient$(cljs.core.into((cljs.core.hash_map.cljs$lang$arity$0 ? cljs.core.hash_map.cljs$lang$arity$0() : cljs.core.hash_map.call(null)),coll));
});
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__5666__auto__ = self__.__hash;
if(!((h__5666__auto__ == null)))
{return h__5666__auto__;
} else
{var h__5666__auto____$1 = cljs.core.hash_imap(coll);
self__.__hash = h__5666__auto____$1;
return h__5666__auto____$1;
}
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
if(cljs.core.truth_((function (){var and__3941__auto__ = goog.isString(k);
if(and__3941__auto__)
{return !((cljs.core.scan_array(1,k,self__.keys) == null));
} else
{return and__3941__auto__;
}
})()))
{return (self__.strobj[k]);
} else
{return not_found;
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var self__ = this;
if(goog.isString(k))
{if(cljs.core.truth_((function (){var or__3943__auto__ = (self__.update_count > cljs.core.ObjMap.HASHMAP_THRESHOLD);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return (self__.keys.length >= cljs.core.ObjMap.HASHMAP_THRESHOLD);
}
})()))
{return cljs.core.obj_map__GT_hash_map(coll,k,v);
} else
{if(!((cljs.core.scan_array(1,k,self__.keys) == null)))
{var new_strobj = cljs.core.obj_clone(self__.strobj,self__.keys);
(new_strobj[k] = v);
return (new cljs.core.ObjMap(self__.meta,self__.keys,new_strobj,(self__.update_count + 1),null));
} else
{var new_strobj = cljs.core.obj_clone(self__.strobj,self__.keys);
var new_keys = self__.keys.slice();
(new_strobj[k] = v);
new_keys.push(k);
return (new cljs.core.ObjMap(self__.meta,new_keys,new_strobj,(self__.update_count + 1),null));
}
}
} else
{return cljs.core.obj_map__GT_hash_map(coll,k,v);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var self__ = this;
if(cljs.core.truth_((function (){var and__3941__auto__ = goog.isString(k);
if(and__3941__auto__)
{return !((cljs.core.scan_array(1,k,self__.keys) == null));
} else
{return and__3941__auto__;
}
})()))
{return true;
} else
{return false;
}
});
cljs.core.ObjMap.prototype.call = (function() {
var G__26006 = null;
var G__26006__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$2(coll,k);
});
var G__26006__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,not_found);
});
G__26006 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__26006__2.call(this,self__,k);
case 3:
return G__26006__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__26006;
})()
;
cljs.core.ObjMap.prototype.apply = (function (self__,args26005){
var self__ = this;
return self__.call.apply(self__,[self__].concat(args26005.slice()));
});
cljs.core.ObjMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var self__ = this;
var len = self__.keys.length;
var keys__$1 = self__.keys.sort(cljs.core.obj_map_compare_keys);
var init__$1 = init;
while(true){
if(cljs.core.seq(keys__$1))
{var k = cljs.core.first(keys__$1);
var init__$2 = (f.cljs$lang$arity$3 ? f.cljs$lang$arity$3(init__$1,k,(self__.strobj[k])) : f.call(null,init__$1,k,(self__.strobj[k])));
if(cljs.core.reduced_QMARK_(init__$2))
{return (cljs.core.deref.cljs$lang$arity$1 ? cljs.core.deref.cljs$lang$arity$1(init__$2) : cljs.core.deref.call(null,init__$2));
} else
{{
var G__26007 = cljs.core.rest(keys__$1);
var G__26008 = init__$2;
keys__$1 = G__26007;
init__$1 = G__26008;
continue;
}
}
} else
{return init__$1;
}
break;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var self__ = this;
if(cljs.core.vector_QMARK_(entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.cljs$lang$arity$2(entry,0),cljs.core._nth.cljs$lang$arity$2(entry,1));
} else
{return cljs.core.reduce.cljs$lang$arity$3(cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return (cljs.core.pr_str.cljs$lang$arity$1 ? cljs.core.pr_str.cljs$lang$arity$1(this$) : cljs.core.pr_str.call(null,this$));
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
if((self__.keys.length > 0))
{return cljs.core.map.cljs$lang$arity$2((function (p1__26001_SHARP_){
return cljs.core.vector.cljs$lang$arity$variadic(cljs.core.array_seq([p1__26001_SHARP_,(self__.strobj[p1__26001_SHARP_])], 0));
}),self__.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
return self__.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return cljs.core.equiv_map(coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
return (new cljs.core.ObjMap(meta__$1,self__.keys,self__.strobj,self__.update_count,self__.__hash));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return cljs.core.with_meta(cljs.core.ObjMap.EMPTY,self__.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var self__ = this;
if(cljs.core.truth_((function (){var and__3941__auto__ = goog.isString(k);
if(and__3941__auto__)
{return !((cljs.core.scan_array(1,k,self__.keys) == null));
} else
{return and__3941__auto__;
}
})()))
{var new_keys = self__.keys.slice();
var new_strobj = cljs.core.obj_clone(self__.strobj,self__.keys);
new_keys.splice(cljs.core.scan_array(1,k,new_keys),1);
cljs.core.js_delete(new_strobj,k);
return (new cljs.core.ObjMap(self__.meta,new_keys,new_strobj,(self__.update_count + 1),null));
} else
{return coll;
}
});
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,[],{},0,0));
cljs.core.ObjMap.HASHMAP_THRESHOLD = 32;
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj,0,null));
});
goog.provide('cljs.core.HashMap');

/**
* @constructor
*/
cljs.core.HashMap = (function (meta,count,hashobj,__hash){
this.meta = meta;
this.count = count;
this.hashobj = hashobj;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 15075087;
})
cljs.core.HashMap.cljs$lang$type = true;
cljs.core.HashMap.cljs$lang$ctorPrSeq = (function (this__5785__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/HashMap");
});
cljs.core.HashMap.cljs$lang$ctorPrWriter = (function (this__5785__auto__,writer__5786__auto__,opt__5787__auto__){
return cljs.core._write(writer__5786__auto__,"cljs.core/HashMap");
});
cljs.core.HashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__5666__auto__ = self__.__hash;
if(!((h__5666__auto__ == null)))
{return h__5666__auto__;
} else
{var h__5666__auto____$1 = cljs.core.hash_imap(coll);
self__.__hash = h__5666__auto____$1;
return h__5666__auto____$1;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
var bucket = (self__.hashobj[cljs.core.hash.cljs$lang$arity$1(k)]);
var i = (cljs.core.truth_(bucket)?cljs.core.scan_array(2,k,bucket):null);
if(cljs.core.truth_(i))
{return (bucket[(i + 1)]);
} else
{return not_found;
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var self__ = this;
var h = cljs.core.hash.cljs$lang$arity$1(k);
var bucket = (self__.hashobj[h]);
if(cljs.core.truth_(bucket))
{var new_bucket = bucket.slice();
var new_hashobj = goog.object.clone(self__.hashobj);
(new_hashobj[h] = new_bucket);
var temp__4090__auto__ = cljs.core.scan_array(2,k,new_bucket);
if(cljs.core.truth_(temp__4090__auto__))
{var i = temp__4090__auto__;
(new_bucket[(i + 1)] = v);
return (new cljs.core.HashMap(self__.meta,self__.count,new_hashobj,null));
} else
{new_bucket.push(k,v);
return (new cljs.core.HashMap(self__.meta,(self__.count + 1),new_hashobj,null));
}
} else
{var new_hashobj = goog.object.clone(self__.hashobj);
(new_hashobj[h] = [k,v]);
return (new cljs.core.HashMap(self__.meta,(self__.count + 1),new_hashobj,null));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var self__ = this;
var bucket = (self__.hashobj[cljs.core.hash.cljs$lang$arity$1(k)]);
var i = (cljs.core.truth_(bucket)?cljs.core.scan_array(2,k,bucket):null);
if(cljs.core.truth_(i))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__26011 = null;
var G__26011__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$2(coll,k);
});
var G__26011__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,not_found);
});
G__26011 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__26011__2.call(this,self__,k);
case 3:
return G__26011__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__26011;
})()
;
cljs.core.HashMap.prototype.apply = (function (self__,args26010){
var self__ = this;
return self__.call.apply(self__,[self__].concat(args26010.slice()));
});
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var self__ = this;
if(cljs.core.vector_QMARK_(entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.cljs$lang$arity$2(entry,0),cljs.core._nth.cljs$lang$arity$2(entry,1));
} else
{return cljs.core.reduce.cljs$lang$arity$3(cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return (cljs.core.pr_str.cljs$lang$arity$1 ? cljs.core.pr_str.cljs$lang$arity$1(this$) : cljs.core.pr_str.call(null,this$));
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
if((self__.count > 0))
{var hashes = cljs.core.js_keys(self__.hashobj).sort();
return cljs.core.mapcat.cljs$lang$arity$2((function (p1__26009_SHARP_){
return cljs.core.map.cljs$lang$arity$2(cljs.core.vec,cljs.core.partition.cljs$lang$arity$2(2,(self__.hashobj[p1__26009_SHARP_])));
}),hashes);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
return self__.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return cljs.core.equiv_map(coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
return (new cljs.core.HashMap(meta__$1,self__.count,self__.hashobj,self__.__hash));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return cljs.core.with_meta(cljs.core.HashMap.EMPTY,self__.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var self__ = this;
var h = cljs.core.hash.cljs$lang$arity$1(k);
var bucket = (self__.hashobj[h]);
var i = (cljs.core.truth_(bucket)?cljs.core.scan_array(2,k,bucket):null);
if(cljs.core.not(i))
{return coll;
} else
{var new_hashobj = goog.object.clone(self__.hashobj);
if((3 > bucket.length))
{cljs.core.js_delete(new_hashobj,h);
} else
{var new_bucket_26012 = bucket.slice();
new_bucket_26012.splice(i,2);
(new_hashobj[h] = new_bucket_26012);
}
return (new cljs.core.HashMap(self__.meta,(self__.count - 1),new_hashobj,null));
}
});
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,{},0));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len = ks.length;
var i = 0;
var out = cljs.core.HashMap.EMPTY;
while(true){
if((i < len))
{{
var G__26013 = (i + 1);
var G__26014 = cljs.core.assoc.cljs$lang$arity$3(out,(ks[i]),(vs[i]));
i = G__26013;
out = G__26014;
continue;
}
} else
{return out;
}
break;
}
});
cljs.core.array_map_index_of = (function array_map_index_of(m,k){
var arr = m.arr;
var len = arr.length;
var i = 0;
while(true){
if((len <= i))
{return -1;
} else
{if(cljs.core._EQ_.cljs$lang$arity$2((arr[i]),k))
{return i;
} else
{if("\uFDD0:else")
{{
var G__26015 = (i + 2);
i = G__26015;
continue;
}
} else
{return null;
}
}
}
break;
}
});
cljs.core.TransientArrayMap = undefined;
goog.provide('cljs.core.PersistentArrayMap');

/**
* @constructor
*/
cljs.core.PersistentArrayMap = (function (meta,cnt,arr,__hash){
this.meta = meta;
this.cnt = cnt;
this.arr = arr;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 4;
this.cljs$lang$protocol_mask$partition0$ = 16123663;
})
cljs.core.PersistentArrayMap.cljs$lang$type = true;
cljs.core.PersistentArrayMap.cljs$lang$ctorPrSeq = (function (this__5785__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/PersistentArrayMap");
});
cljs.core.PersistentArrayMap.cljs$lang$ctorPrWriter = (function (this__5785__auto__,writer__5786__auto__,opt__5787__auto__){
return cljs.core._write(writer__5786__auto__,"cljs.core/PersistentArrayMap");
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var self__ = this;
return (new cljs.core.TransientArrayMap({},self__.arr.length,self__.arr.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__5666__auto__ = self__.__hash;
if(!((h__5666__auto__ == null)))
{return h__5666__auto__;
} else
{var h__5666__auto____$1 = cljs.core.hash_imap(coll);
self__.__hash = h__5666__auto____$1;
return h__5666__auto____$1;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
var idx = cljs.core.array_map_index_of(coll,k);
if((idx === -1))
{return not_found;
} else
{return (self__.arr[(idx + 1)]);
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var self__ = this;
var idx = cljs.core.array_map_index_of(coll,k);
if((idx === -1))
{if((self__.cnt < cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))
{return (new cljs.core.PersistentArrayMap(self__.meta,(self__.cnt + 1),(function (){var G__26017 = self__.arr.slice();
G__26017.push(k);
G__26017.push(v);
return G__26017;
})(),null));
} else
{return cljs.core.with_meta(cljs.core.assoc.cljs$lang$arity$3(cljs.core.into(cljs.core.PersistentHashMap.EMPTY,coll),k,v),self__.meta);
}
} else
{if((v === (self__.arr[(idx + 1)])))
{return coll;
} else
{if("\uFDD0:else")
{return (new cljs.core.PersistentArrayMap(self__.meta,self__.cnt,(function (){var G__26018 = self__.arr.slice();
(G__26018[(idx + 1)] = v);
return G__26018;
})(),null));
} else
{return null;
}
}
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var self__ = this;
return !((cljs.core.array_map_index_of(coll,k) === -1));
});
cljs.core.PersistentArrayMap.prototype.call = (function() {
var G__26019 = null;
var G__26019__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$2(coll,k);
});
var G__26019__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,not_found);
});
G__26019 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__26019__2.call(this,self__,k);
case 3:
return G__26019__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__26019;
})()
;
cljs.core.PersistentArrayMap.prototype.apply = (function (self__,args26016){
var self__ = this;
return self__.call.apply(self__,[self__].concat(args26016.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var self__ = this;
var len = self__.arr.length;
var i = 0;
var init__$1 = init;
while(true){
if((i < len))
{var init__$2 = (f.cljs$lang$arity$3 ? f.cljs$lang$arity$3(init__$1,(self__.arr[i]),(self__.arr[(i + 1)])) : f.call(null,init__$1,(self__.arr[i]),(self__.arr[(i + 1)])));
if(cljs.core.reduced_QMARK_(init__$2))
{return (cljs.core.deref.cljs$lang$arity$1 ? cljs.core.deref.cljs$lang$arity$1(init__$2) : cljs.core.deref.call(null,init__$2));
} else
{{
var G__26020 = (i + 2);
var G__26021 = init__$2;
i = G__26020;
init__$1 = G__26021;
continue;
}
}
} else
{return init__$1;
}
break;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var self__ = this;
if(cljs.core.vector_QMARK_(entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.cljs$lang$arity$2(entry,0),cljs.core._nth.cljs$lang$arity$2(entry,1));
} else
{return cljs.core.reduce.cljs$lang$arity$3(cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentArrayMap.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return (cljs.core.pr_str.cljs$lang$arity$1 ? cljs.core.pr_str.cljs$lang$arity$1(this$) : cljs.core.pr_str.call(null,this$));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
if((self__.cnt > 0))
{var len = self__.arr.length;
var array_map_seq = ((function (len){
return (function array_map_seq(i){
return (new cljs.core.LazySeq(null,false,((function (len){
return (function (){
if((i < len))
{return cljs.core.cons(cljs.core.PersistentVector.fromArray([(self__.arr[i]),(self__.arr[(i + 1)])], true),array_map_seq((i + 2)));
} else
{return null;
}
});})(len))
,null));
});})(len))
;
return array_map_seq(0);
} else
{return null;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
return self__.cnt;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return cljs.core.equiv_map(coll,other);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
return (new cljs.core.PersistentArrayMap(meta__$1,self__.cnt,self__.arr,self__.__hash));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return cljs.core._with_meta(cljs.core.PersistentArrayMap.EMPTY,self__.meta);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var self__ = this;
var idx = cljs.core.array_map_index_of(coll,k);
if((idx >= 0))
{var len = self__.arr.length;
var new_len = (len - 2);
if((new_len === 0))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var new_arr = cljs.core.make_array.cljs$lang$arity$1(new_len);
var s = 0;
var d = 0;
while(true){
if((s >= len))
{return (new cljs.core.PersistentArrayMap(self__.meta,(self__.cnt - 1),new_arr,null));
} else
{if(cljs.core._EQ_.cljs$lang$arity$2(k,(self__.arr[s])))
{{
var G__26022 = (s + 2);
var G__26023 = d;
s = G__26022;
d = G__26023;
continue;
}
} else
{if("\uFDD0:else")
{(new_arr[d] = (self__.arr[s]));
(new_arr[(d + 1)] = (self__.arr[(s + 1)]));
{
var G__26024 = (s + 2);
var G__26025 = (d + 2);
s = G__26024;
d = G__26025;
continue;
}
} else
{return null;
}
}
}
break;
}
}
} else
{return coll;
}
});
cljs.core.PersistentArrayMap.EMPTY = (new cljs.core.PersistentArrayMap(null,0,[],null));
cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD = 16;
cljs.core.PersistentArrayMap.fromArrays = (function (ks,vs){
var len = cljs.core.count(ks);
var i = 0;
var out = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < len))
{{
var G__26026 = (i + 1);
var G__26027 = cljs.core.assoc_BANG_(out,(ks[i]),(vs[i]));
i = G__26026;
out = G__26027;
continue;
}
} else
{return cljs.core.persistent_BANG_(out);
}
break;
}
});
cljs.core.array__GT_transient_hash_map = undefined;
goog.provide('cljs.core.TransientArrayMap');

/**
* @constructor
*/
cljs.core.TransientArrayMap = (function (editable_QMARK_,len,arr){
this.editable_QMARK_ = editable_QMARK_;
this.len = len;
this.arr = arr;
this.cljs$lang$protocol_mask$partition1$ = 56;
this.cljs$lang$protocol_mask$partition0$ = 258;
})
cljs.core.TransientArrayMap.cljs$lang$type = true;
cljs.core.TransientArrayMap.cljs$lang$ctorPrSeq = (function (this__5785__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/TransientArrayMap");
});
cljs.core.TransientArrayMap.cljs$lang$ctorPrWriter = (function (this__5785__auto__,writer__5786__auto__,opt__5787__auto__){
return cljs.core._write(writer__5786__auto__,"cljs.core/TransientArrayMap");
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var self__ = this;
if(cljs.core.truth_(self__.editable_QMARK_))
{var idx = cljs.core.array_map_index_of(tcoll,key);
if((idx >= 0))
{(self__.arr[idx] = (self__.arr[(self__.len - 2)]));
(self__.arr[(idx + 1)] = (self__.arr[(self__.len - 1)]));
var G__26028_26030 = self__.arr;
G__26028_26030.pop();
G__26028_26030.pop();
self__.len = (self__.len - 2);
} else
{}
return tcoll;
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var self__ = this;
if(cljs.core.truth_(self__.editable_QMARK_))
{var idx = cljs.core.array_map_index_of(tcoll,key);
if((idx === -1))
{if(((self__.len + 2) <= (2 * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)))
{self__.len = (self__.len + 2);
self__.arr.push(key);
self__.arr.push(val);
return tcoll;
} else
{return cljs.core.assoc_BANG_((cljs.core.array__GT_transient_hash_map.cljs$lang$arity$2 ? cljs.core.array__GT_transient_hash_map.cljs$lang$arity$2(self__.len,self__.arr) : cljs.core.array__GT_transient_hash_map.call(null,self__.len,self__.arr)),key,val);
}
} else
{if((val === (self__.arr[(idx + 1)])))
{return tcoll;
} else
{(self__.arr[(idx + 1)] = val);
return tcoll;
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var self__ = this;
if(cljs.core.truth_(self__.editable_QMARK_))
{if(cljs.core.truth_((function (){var G__26029 = o;
if(G__26029)
{if(cljs.core.truth_((function (){var or__3943__auto__ = (G__26029.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__26029.cljs$core$IMapEntry$;
}
})()))
{return true;
} else
{if((!G__26029.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.IMapEntry,G__26029);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IMapEntry,G__26029);
}
})()))
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,(cljs.core.key.cljs$lang$arity$1 ? cljs.core.key.cljs$lang$arity$1(o) : cljs.core.key.call(null,o)),(cljs.core.val.cljs$lang$arity$1 ? cljs.core.val.cljs$lang$arity$1(o) : cljs.core.val.call(null,o)));
} else
{var es = cljs.core.seq(o);
var tcoll__$1 = tcoll;
while(true){
var temp__4090__auto__ = cljs.core.first(es);
if(cljs.core.truth_(temp__4090__auto__))
{var e = temp__4090__auto__;
{
var G__26031 = cljs.core.next(es);
var G__26032 = tcoll__$1.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll__$1,(cljs.core.key.cljs$lang$arity$1 ? cljs.core.key.cljs$lang$arity$1(e) : cljs.core.key.call(null,e)),(cljs.core.val.cljs$lang$arity$1 ? cljs.core.val.cljs$lang$arity$1(e) : cljs.core.val.call(null,e)));
es = G__26031;
tcoll__$1 = G__26032;
continue;
}
} else
{return tcoll__$1;
}
break;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var self__ = this;
if(cljs.core.truth_(self__.editable_QMARK_))
{self__.editable_QMARK_ = false;
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot(self__.len,2),self__.arr,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var self__ = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,k,null);
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var self__ = this;
if(cljs.core.truth_(self__.editable_QMARK_))
{var idx = cljs.core.array_map_index_of(tcoll,k);
if((idx === -1))
{return not_found;
} else
{return (self__.arr[(idx + 1)]);
}
} else
{throw (new Error("lookup after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var self__ = this;
if(cljs.core.truth_(self__.editable_QMARK_))
{return cljs.core.quot(self__.len,2);
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientHashMap = undefined;
cljs.core.array__GT_transient_hash_map = (function array__GT_transient_hash_map(len,arr){
var out = cljs.core.transient$(cljs.core.ObjMap.EMPTY);
var i = 0;
while(true){
if((i < len))
{{
var G__26033 = cljs.core.assoc_BANG_(out,(arr[i]),(arr[(i + 1)]));
var G__26034 = (i + 2);
out = G__26033;
i = G__26034;
continue;
}
} else
{return out;
}
break;
}
});
goog.provide('cljs.core.Box');

/**
* @constructor
*/
cljs.core.Box = (function (val){
this.val = val;
})
cljs.core.Box.cljs$lang$type = true;
cljs.core.Box.cljs$lang$ctorPrSeq = (function (this__5788__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/Box");
});
cljs.core.Box.cljs$lang$ctorPrWriter = (function (this__5788__auto__,writer__5789__auto__,opts__5790__auto__){
return cljs.core._write(writer__5789__auto__,"cljs.core/Box");
});
cljs.core.create_inode_seq = undefined;
cljs.core.create_array_node_seq = undefined;
cljs.core.reset_BANG_ = undefined;
cljs.core.create_node = undefined;
cljs.core.atom = undefined;
cljs.core.deref = undefined;
cljs.core.key_test = (function key_test(key,other){
if(goog.isString(key))
{return (key === other);
} else
{return cljs.core._EQ_.cljs$lang$arity$2(key,other);
}
});
cljs.core.mask = (function mask(hash,shift){
return ((hash >>> shift) & 31);
});
cljs.core.clone_and_set = (function() {
var clone_and_set = null;
var clone_and_set__3 = (function (arr,i,a){
var G__26037 = arr.slice();
(G__26037[i] = a);
return G__26037;
});
var clone_and_set__5 = (function (arr,i,a,j,b){
var G__26038 = arr.slice();
(G__26038[i] = a);
(G__26038[j] = b);
return G__26038;
});
clone_and_set = function(arr,i,a,j,b){
switch(arguments.length){
case 3:
return clone_and_set__3.call(this,arr,i,a);
case 5:
return clone_and_set__5.call(this,arr,i,a,j,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
clone_and_set.cljs$lang$arity$3 = clone_and_set__3;
clone_and_set.cljs$lang$arity$5 = clone_and_set__5;
return clone_and_set;
})()
;
cljs.core.remove_pair = (function remove_pair(arr,i){
var new_arr = cljs.core.make_array.cljs$lang$arity$1((arr.length - 2));
cljs.core.array_copy(arr,0,new_arr,0,(2 * i));
cljs.core.array_copy(arr,(2 * (i + 1)),new_arr,(2 * i),(new_arr.length - (2 * i)));
return new_arr;
});
cljs.core.bitmap_indexed_node_index = (function bitmap_indexed_node_index(bitmap,bit){
return cljs.core.bit_count((bitmap & (bit - 1)));
});
cljs.core.bitpos = (function bitpos(hash,shift){
return (1 << ((hash >>> shift) & 0x01f));
});
cljs.core.edit_and_set = (function() {
var edit_and_set = null;
var edit_and_set__4 = (function (inode,edit,i,a){
var editable = inode.ensure_editable(edit);
(editable.arr[i] = a);
return editable;
});
var edit_and_set__6 = (function (inode,edit,i,a,j,b){
var editable = inode.ensure_editable(edit);
(editable.arr[i] = a);
(editable.arr[j] = b);
return editable;
});
edit_and_set = function(inode,edit,i,a,j,b){
switch(arguments.length){
case 4:
return edit_and_set__4.call(this,inode,edit,i,a);
case 6:
return edit_and_set__6.call(this,inode,edit,i,a,j,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
edit_and_set.cljs$lang$arity$4 = edit_and_set__4;
edit_and_set.cljs$lang$arity$6 = edit_and_set__6;
return edit_and_set;
})()
;
cljs.core.inode_kv_reduce = (function inode_kv_reduce(arr,f,init){
var len = arr.length;
var i = 0;
var init__$1 = init;
while(true){
if((i < len))
{var init__$2 = (function (){var k = (arr[i]);
if(!((k == null)))
{return (f.cljs$lang$arity$3 ? f.cljs$lang$arity$3(init__$1,k,(arr[(i + 1)])) : f.call(null,init__$1,k,(arr[(i + 1)])));
} else
{var node = (arr[(i + 1)]);
if(!((node == null)))
{return node.kv_reduce(f,init__$1);
} else
{return init__$1;
}
}
})();
if(cljs.core.reduced_QMARK_(init__$2))
{return (cljs.core.deref.cljs$lang$arity$1 ? cljs.core.deref.cljs$lang$arity$1(init__$2) : cljs.core.deref.call(null,init__$2));
} else
{{
var G__26039 = (i + 2);
var G__26040 = init__$2;
i = G__26039;
init__$1 = G__26040;
continue;
}
}
} else
{return init__$1;
}
break;
}
});
cljs.core.ArrayNode = undefined;
goog.provide('cljs.core.BitmapIndexedNode');

/**
* @constructor
*/
cljs.core.BitmapIndexedNode = (function (edit,bitmap,arr){
this.edit = edit;
this.bitmap = bitmap;
this.arr = arr;
})
cljs.core.BitmapIndexedNode.cljs$lang$type = true;
cljs.core.BitmapIndexedNode.cljs$lang$ctorPrSeq = (function (this__5785__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/BitmapIndexedNode");
});
cljs.core.BitmapIndexedNode.cljs$lang$ctorPrWriter = (function (this__5785__auto__,writer__5786__auto__,opt__5787__auto__){
return cljs.core._write(writer__5786__auto__,"cljs.core/BitmapIndexedNode");
});
cljs.core.BitmapIndexedNode.prototype.edit_and_remove_pair = (function (e,bit,i){
var self__ = this;
var inode = this;
if((self__.bitmap === bit))
{return null;
} else
{var editable = inode.ensure_editable(e);
var earr = editable.arr;
var len = earr.length;
editable.bitmap = (bit ^ editable.bitmap);
cljs.core.array_copy(earr,(2 * (i + 1)),earr,(2 * i),(len - (2 * (i + 1))));
(earr[(len - 2)] = null);
(earr[(len - 1)] = null);
return editable;
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_ = (function (edit__$1,shift,hash,key,val,added_leaf_QMARK_){
var self__ = this;
var inode = this;
var bit = (1 << ((hash >>> shift) & 0x01f));
var idx = cljs.core.bitmap_indexed_node_index(self__.bitmap,bit);
if(((self__.bitmap & bit) === 0))
{var n = cljs.core.bit_count(self__.bitmap);
if(((2 * n) < self__.arr.length))
{var editable = inode.ensure_editable(edit__$1);
var earr = editable.arr;
added_leaf_QMARK_.val = true;
cljs.core.array_copy_downward(earr,(2 * idx),earr,(2 * (idx + 1)),(2 * (n - idx)));
(earr[(2 * idx)] = key);
(earr[((2 * idx) + 1)] = val);
editable.bitmap = (editable.bitmap | bit);
return editable;
} else
{if((n >= 16))
{var nodes = cljs.core.make_array.cljs$lang$arity$1(32);
var jdx = ((hash >>> shift) & 0x01f);
(nodes[jdx] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit__$1,(shift + 5),hash,key,val,added_leaf_QMARK_));
var i_26041 = 0;
var j_26042 = 0;
while(true){
if((i_26041 < 32))
{if((((self__.bitmap >>> i_26041) & 1) === 0))
{{
var G__26043 = (i_26041 + 1);
var G__26044 = j_26042;
i_26041 = G__26043;
j_26042 = G__26044;
continue;
}
} else
{(nodes[i_26041] = ((!(((self__.arr[j_26042]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit__$1,(shift + 5),cljs.core.hash.cljs$lang$arity$1((self__.arr[j_26042])),(self__.arr[j_26042]),(self__.arr[(j_26042 + 1)]),added_leaf_QMARK_):(self__.arr[(j_26042 + 1)])));
{
var G__26045 = (i_26041 + 1);
var G__26046 = (j_26042 + 2);
i_26041 = G__26045;
j_26042 = G__26046;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(edit__$1,(n + 1),nodes));
} else
{if("\uFDD0:else")
{var new_arr = cljs.core.make_array.cljs$lang$arity$1((2 * (n + 4)));
cljs.core.array_copy(self__.arr,0,new_arr,0,(2 * idx));
(new_arr[(2 * idx)] = key);
(new_arr[((2 * idx) + 1)] = val);
cljs.core.array_copy(self__.arr,(2 * idx),new_arr,(2 * (idx + 1)),(2 * (n - idx)));
added_leaf_QMARK_.val = true;
var editable = inode.ensure_editable(edit__$1);
editable.arr = new_arr;
editable.bitmap = (editable.bitmap | bit);
return editable;
} else
{return null;
}
}
}
} else
{var key_or_nil = (self__.arr[(2 * idx)]);
var val_or_node = (self__.arr[((2 * idx) + 1)]);
if((key_or_nil == null))
{var n = val_or_node.inode_assoc_BANG_(edit__$1,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n === val_or_node))
{return inode;
} else
{return cljs.core.edit_and_set.cljs$lang$arity$4(inode,edit__$1,((2 * idx) + 1),n);
}
} else
{if(cljs.core.key_test(key,key_or_nil))
{if((val === val_or_node))
{return inode;
} else
{return cljs.core.edit_and_set.cljs$lang$arity$4(inode,edit__$1,((2 * idx) + 1),val);
}
} else
{if("\uFDD0:else")
{added_leaf_QMARK_.val = true;
return cljs.core.edit_and_set.cljs$lang$arity$6(inode,edit__$1,(2 * idx),null,((2 * idx) + 1),(cljs.core.create_node.cljs$lang$arity$7 ? cljs.core.create_node.cljs$lang$arity$7(edit__$1,(shift + 5),key_or_nil,val_or_node,hash,key,val) : cljs.core.create_node.call(null,edit__$1,(shift + 5),key_or_nil,val_or_node,hash,key,val)));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_seq = (function (){
var self__ = this;
var inode = this;
return (cljs.core.create_inode_seq.cljs$lang$arity$1 ? cljs.core.create_inode_seq.cljs$lang$arity$1(self__.arr) : cljs.core.create_inode_seq.call(null,self__.arr));
});
cljs.core.BitmapIndexedNode.prototype.inode_without_BANG_ = (function (edit__$1,shift,hash,key,removed_leaf_QMARK_){
var self__ = this;
var inode = this;
var bit = (1 << ((hash >>> shift) & 0x01f));
if(((self__.bitmap & bit) === 0))
{return inode;
} else
{var idx = cljs.core.bitmap_indexed_node_index(self__.bitmap,bit);
var key_or_nil = (self__.arr[(2 * idx)]);
var val_or_node = (self__.arr[((2 * idx) + 1)]);
if((key_or_nil == null))
{var n = val_or_node.inode_without_BANG_(edit__$1,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n === val_or_node))
{return inode;
} else
{if(!((n == null)))
{return cljs.core.edit_and_set.cljs$lang$arity$4(inode,edit__$1,((2 * idx) + 1),n);
} else
{if((self__.bitmap === bit))
{return null;
} else
{if("\uFDD0:else")
{return inode.edit_and_remove_pair(edit__$1,bit,idx);
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test(key,key_or_nil))
{(removed_leaf_QMARK_[0] = true);
return inode.edit_and_remove_pair(edit__$1,bit,idx);
} else
{if("\uFDD0:else")
{return inode;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.ensure_editable = (function (e){
var self__ = this;
var inode = this;
if((e === self__.edit))
{return inode;
} else
{var n = cljs.core.bit_count(self__.bitmap);
var new_arr = cljs.core.make_array.cljs$lang$arity$1((((n < 0))?4:(2 * (n + 1))));
cljs.core.array_copy(self__.arr,0,new_arr,0,(2 * n));
return (new cljs.core.BitmapIndexedNode(e,self__.bitmap,new_arr));
}
});
cljs.core.BitmapIndexedNode.prototype.kv_reduce = (function (f,init){
var self__ = this;
var inode = this;
return cljs.core.inode_kv_reduce(self__.arr,f,init);
});
cljs.core.BitmapIndexedNode.prototype.inode_find = (function (shift,hash,key,not_found){
var self__ = this;
var inode = this;
var bit = (1 << ((hash >>> shift) & 0x01f));
if(((self__.bitmap & bit) === 0))
{return not_found;
} else
{var idx = cljs.core.bitmap_indexed_node_index(self__.bitmap,bit);
var key_or_nil = (self__.arr[(2 * idx)]);
var val_or_node = (self__.arr[((2 * idx) + 1)]);
if((key_or_nil == null))
{return val_or_node.inode_find((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test(key,key_or_nil))
{return cljs.core.PersistentVector.fromArray([key_or_nil,val_or_node], true);
} else
{if("\uFDD0:else")
{return not_found;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_without = (function (shift,hash,key){
var self__ = this;
var inode = this;
var bit = (1 << ((hash >>> shift) & 0x01f));
if(((self__.bitmap & bit) === 0))
{return inode;
} else
{var idx = cljs.core.bitmap_indexed_node_index(self__.bitmap,bit);
var key_or_nil = (self__.arr[(2 * idx)]);
var val_or_node = (self__.arr[((2 * idx) + 1)]);
if((key_or_nil == null))
{var n = val_or_node.inode_without((shift + 5),hash,key);
if((n === val_or_node))
{return inode;
} else
{if(!((n == null)))
{return (new cljs.core.BitmapIndexedNode(null,self__.bitmap,cljs.core.clone_and_set.cljs$lang$arity$3(self__.arr,((2 * idx) + 1),n)));
} else
{if((self__.bitmap === bit))
{return null;
} else
{if("\uFDD0:else")
{return (new cljs.core.BitmapIndexedNode(null,(self__.bitmap ^ bit),cljs.core.remove_pair(self__.arr,idx)));
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test(key,key_or_nil))
{return (new cljs.core.BitmapIndexedNode(null,(self__.bitmap ^ bit),cljs.core.remove_pair(self__.arr,idx)));
} else
{if("\uFDD0:else")
{return inode;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var self__ = this;
var inode = this;
var bit = (1 << ((hash >>> shift) & 0x01f));
var idx = cljs.core.bitmap_indexed_node_index(self__.bitmap,bit);
if(((self__.bitmap & bit) === 0))
{var n = cljs.core.bit_count(self__.bitmap);
if((n >= 16))
{var nodes = cljs.core.make_array.cljs$lang$arity$1(32);
var jdx = ((hash >>> shift) & 0x01f);
(nodes[jdx] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_));
var i_26047 = 0;
var j_26048 = 0;
while(true){
if((i_26047 < 32))
{if((((self__.bitmap >>> i_26047) & 1) === 0))
{{
var G__26049 = (i_26047 + 1);
var G__26050 = j_26048;
i_26047 = G__26049;
j_26048 = G__26050;
continue;
}
} else
{(nodes[i_26047] = ((!(((self__.arr[j_26048]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),cljs.core.hash.cljs$lang$arity$1((self__.arr[j_26048])),(self__.arr[j_26048]),(self__.arr[(j_26048 + 1)]),added_leaf_QMARK_):(self__.arr[(j_26048 + 1)])));
{
var G__26051 = (i_26047 + 1);
var G__26052 = (j_26048 + 2);
i_26047 = G__26051;
j_26048 = G__26052;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(null,(n + 1),nodes));
} else
{var new_arr = cljs.core.make_array.cljs$lang$arity$1((2 * (n + 1)));
cljs.core.array_copy(self__.arr,0,new_arr,0,(2 * idx));
(new_arr[(2 * idx)] = key);
(new_arr[((2 * idx) + 1)] = val);
cljs.core.array_copy(self__.arr,(2 * idx),new_arr,(2 * (idx + 1)),(2 * (n - idx)));
added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,(self__.bitmap | bit),new_arr));
}
} else
{var key_or_nil = (self__.arr[(2 * idx)]);
var val_or_node = (self__.arr[((2 * idx) + 1)]);
if((key_or_nil == null))
{var n = val_or_node.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n === val_or_node))
{return inode;
} else
{return (new cljs.core.BitmapIndexedNode(null,self__.bitmap,cljs.core.clone_and_set.cljs$lang$arity$3(self__.arr,((2 * idx) + 1),n)));
}
} else
{if(cljs.core.key_test(key,key_or_nil))
{if((val === val_or_node))
{return inode;
} else
{return (new cljs.core.BitmapIndexedNode(null,self__.bitmap,cljs.core.clone_and_set.cljs$lang$arity$3(self__.arr,((2 * idx) + 1),val)));
}
} else
{if("\uFDD0:else")
{added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,self__.bitmap,cljs.core.clone_and_set.cljs$lang$arity$5(self__.arr,(2 * idx),null,((2 * idx) + 1),(cljs.core.create_node.cljs$lang$arity$6 ? cljs.core.create_node.cljs$lang$arity$6((shift + 5),key_or_nil,val_or_node,hash,key,val) : cljs.core.create_node.call(null,(shift + 5),key_or_nil,val_or_node,hash,key,val)))));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var self__ = this;
var inode = this;
var bit = (1 << ((hash >>> shift) & 0x01f));
if(((self__.bitmap & bit) === 0))
{return not_found;
} else
{var idx = cljs.core.bitmap_indexed_node_index(self__.bitmap,bit);
var key_or_nil = (self__.arr[(2 * idx)]);
var val_or_node = (self__.arr[((2 * idx) + 1)]);
if((key_or_nil == null))
{return val_or_node.inode_lookup((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test(key,key_or_nil))
{return val_or_node;
} else
{if("\uFDD0:else")
{return not_found;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.EMPTY = (new cljs.core.BitmapIndexedNode(null,0,cljs.core.make_array.cljs$lang$arity$1(0)));
cljs.core.pack_array_node = (function pack_array_node(array_node,edit,idx){
var arr = array_node.arr;
var len = (2 * (array_node.cnt - 1));
var new_arr = cljs.core.make_array.cljs$lang$arity$1(len);
var i = 0;
var j = 1;
var bitmap = 0;
while(true){
if((i < len))
{if(cljs.core.truth_((function (){var and__3941__auto__ = !((i === idx));
if(and__3941__auto__)
{return !(((arr[i]) == null));
} else
{return and__3941__auto__;
}
})()))
{(new_arr[j] = (arr[i]));
{
var G__26053 = (i + 1);
var G__26054 = (j + 2);
var G__26055 = (bitmap | (1 << i));
i = G__26053;
j = G__26054;
bitmap = G__26055;
continue;
}
} else
{{
var G__26056 = (i + 1);
var G__26057 = j;
var G__26058 = bitmap;
i = G__26056;
j = G__26057;
bitmap = G__26058;
continue;
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,bitmap,new_arr));
}
break;
}
});
goog.provide('cljs.core.ArrayNode');

/**
* @constructor
*/
cljs.core.ArrayNode = (function (edit,cnt,arr){
this.edit = edit;
this.cnt = cnt;
this.arr = arr;
})
cljs.core.ArrayNode.cljs$lang$type = true;
cljs.core.ArrayNode.cljs$lang$ctorPrSeq = (function (this__5785__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/ArrayNode");
});
cljs.core.ArrayNode.cljs$lang$ctorPrWriter = (function (this__5785__auto__,writer__5786__auto__,opt__5787__auto__){
return cljs.core._write(writer__5786__auto__,"cljs.core/ArrayNode");
});
cljs.core.ArrayNode.prototype.inode_assoc_BANG_ = (function (edit__$1,shift,hash,key,val,added_leaf_QMARK_){
var self__ = this;
var inode = this;
var idx = ((hash >>> shift) & 0x01f);
var node = (self__.arr[idx]);
if((node == null))
{var editable = cljs.core.edit_and_set.cljs$lang$arity$4(inode,edit__$1,idx,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit__$1,(shift + 5),hash,key,val,added_leaf_QMARK_));
editable.cnt = (editable.cnt + 1);
return editable;
} else
{var n = node.inode_assoc_BANG_(edit__$1,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n === node))
{return inode;
} else
{return cljs.core.edit_and_set.cljs$lang$arity$4(inode,edit__$1,idx,n);
}
}
});
cljs.core.ArrayNode.prototype.inode_seq = (function (){
var self__ = this;
var inode = this;
return (cljs.core.create_array_node_seq.cljs$lang$arity$1 ? cljs.core.create_array_node_seq.cljs$lang$arity$1(self__.arr) : cljs.core.create_array_node_seq.call(null,self__.arr));
});
cljs.core.ArrayNode.prototype.inode_without_BANG_ = (function (edit__$1,shift,hash,key,removed_leaf_QMARK_){
var self__ = this;
var inode = this;
var idx = ((hash >>> shift) & 0x01f);
var node = (self__.arr[idx]);
if((node == null))
{return inode;
} else
{var n = node.inode_without_BANG_(edit__$1,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n === node))
{return inode;
} else
{if((n == null))
{if((self__.cnt <= 8))
{return cljs.core.pack_array_node(inode,edit__$1,idx);
} else
{var editable = cljs.core.edit_and_set.cljs$lang$arity$4(inode,edit__$1,idx,n);
editable.cnt = (editable.cnt - 1);
return editable;
}
} else
{if("\uFDD0:else")
{return cljs.core.edit_and_set.cljs$lang$arity$4(inode,edit__$1,idx,n);
} else
{return null;
}
}
}
}
});
cljs.core.ArrayNode.prototype.ensure_editable = (function (e){
var self__ = this;
var inode = this;
if((e === self__.edit))
{return inode;
} else
{return (new cljs.core.ArrayNode(e,self__.cnt,self__.arr.slice()));
}
});
cljs.core.ArrayNode.prototype.kv_reduce = (function (f,init){
var self__ = this;
var inode = this;
var len = self__.arr.length;
var i = 0;
var init__$1 = init;
while(true){
if((i < len))
{var node = (self__.arr[i]);
if(!((node == null)))
{var init__$2 = node.kv_reduce(f,init__$1);
if(cljs.core.reduced_QMARK_(init__$2))
{return (cljs.core.deref.cljs$lang$arity$1 ? cljs.core.deref.cljs$lang$arity$1(init__$2) : cljs.core.deref.call(null,init__$2));
} else
{{
var G__26059 = (i + 1);
var G__26060 = init__$2;
i = G__26059;
init__$1 = G__26060;
continue;
}
}
} else
{return null;
}
} else
{return init__$1;
}
break;
}
});
cljs.core.ArrayNode.prototype.inode_find = (function (shift,hash,key,not_found){
var self__ = this;
var inode = this;
var idx = ((hash >>> shift) & 0x01f);
var node = (self__.arr[idx]);
if(!((node == null)))
{return node.inode_find((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode.prototype.inode_without = (function (shift,hash,key){
var self__ = this;
var inode = this;
var idx = ((hash >>> shift) & 0x01f);
var node = (self__.arr[idx]);
if(!((node == null)))
{var n = node.inode_without((shift + 5),hash,key);
if((n === node))
{return inode;
} else
{if((n == null))
{if((self__.cnt <= 8))
{return cljs.core.pack_array_node(inode,null,idx);
} else
{return (new cljs.core.ArrayNode(null,(self__.cnt - 1),cljs.core.clone_and_set.cljs$lang$arity$3(self__.arr,idx,n)));
}
} else
{if("\uFDD0:else")
{return (new cljs.core.ArrayNode(null,self__.cnt,cljs.core.clone_and_set.cljs$lang$arity$3(self__.arr,idx,n)));
} else
{return null;
}
}
}
} else
{return inode;
}
});
cljs.core.ArrayNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var self__ = this;
var inode = this;
var idx = ((hash >>> shift) & 0x01f);
var node = (self__.arr[idx]);
if((node == null))
{return (new cljs.core.ArrayNode(null,(self__.cnt + 1),cljs.core.clone_and_set.cljs$lang$arity$3(self__.arr,idx,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_))));
} else
{var n = node.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n === node))
{return inode;
} else
{return (new cljs.core.ArrayNode(null,self__.cnt,cljs.core.clone_and_set.cljs$lang$arity$3(self__.arr,idx,n)));
}
}
});
cljs.core.ArrayNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var self__ = this;
var inode = this;
var idx = ((hash >>> shift) & 0x01f);
var node = (self__.arr[idx]);
if(!((node == null)))
{return node.inode_lookup((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.hash_collision_node_find_index = (function hash_collision_node_find_index(arr,cnt,key){
var lim = (2 * cnt);
var i = 0;
while(true){
if((i < lim))
{if(cljs.core.key_test(key,(arr[i])))
{return i;
} else
{{
var G__26061 = (i + 2);
i = G__26061;
continue;
}
}
} else
{return -1;
}
break;
}
});
goog.provide('cljs.core.HashCollisionNode');

/**
* @constructor
*/
cljs.core.HashCollisionNode = (function (edit,collision_hash,cnt,arr){
this.edit = edit;
this.collision_hash = collision_hash;
this.cnt = cnt;
this.arr = arr;
})
cljs.core.HashCollisionNode.cljs$lang$type = true;
cljs.core.HashCollisionNode.cljs$lang$ctorPrSeq = (function (this__5785__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/HashCollisionNode");
});
cljs.core.HashCollisionNode.cljs$lang$ctorPrWriter = (function (this__5785__auto__,writer__5786__auto__,opt__5787__auto__){
return cljs.core._write(writer__5786__auto__,"cljs.core/HashCollisionNode");
});
cljs.core.HashCollisionNode.prototype.inode_assoc_BANG_ = (function (edit__$1,shift,hash,key,val,added_leaf_QMARK_){
var self__ = this;
var inode = this;
if((hash === self__.collision_hash))
{var idx = cljs.core.hash_collision_node_find_index(self__.arr,self__.cnt,key);
if((idx === -1))
{if((self__.arr.length > (2 * self__.cnt)))
{var editable = cljs.core.edit_and_set.cljs$lang$arity$6(inode,edit__$1,(2 * self__.cnt),key,((2 * self__.cnt) + 1),val);
added_leaf_QMARK_.val = true;
editable.cnt = (editable.cnt + 1);
return editable;
} else
{var len = self__.arr.length;
var new_arr = cljs.core.make_array.cljs$lang$arity$1((len + 2));
cljs.core.array_copy(self__.arr,0,new_arr,0,len);
(new_arr[len] = key);
(new_arr[(len + 1)] = val);
added_leaf_QMARK_.val = true;
return inode.ensure_editable_array(edit__$1,(self__.cnt + 1),new_arr);
}
} else
{if(((self__.arr[(idx + 1)]) === val))
{return inode;
} else
{return cljs.core.edit_and_set.cljs$lang$arity$4(inode,edit__$1,(idx + 1),val);
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit__$1,(1 << ((self__.collision_hash >>> shift) & 0x01f)),[null,inode,null,null])).inode_assoc_BANG_(edit__$1,shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_seq = (function (){
var self__ = this;
var inode = this;
return (cljs.core.create_inode_seq.cljs$lang$arity$1 ? cljs.core.create_inode_seq.cljs$lang$arity$1(self__.arr) : cljs.core.create_inode_seq.call(null,self__.arr));
});
cljs.core.HashCollisionNode.prototype.inode_without_BANG_ = (function (edit__$1,shift,hash,key,removed_leaf_QMARK_){
var self__ = this;
var inode = this;
var idx = cljs.core.hash_collision_node_find_index(self__.arr,self__.cnt,key);
if((idx === -1))
{return inode;
} else
{(removed_leaf_QMARK_[0] = true);
if((self__.cnt === 1))
{return null;
} else
{var editable = inode.ensure_editable(edit__$1);
var earr = editable.arr;
(earr[idx] = (earr[((2 * self__.cnt) - 2)]));
(earr[(idx + 1)] = (earr[((2 * self__.cnt) - 1)]));
(earr[((2 * self__.cnt) - 1)] = null);
(earr[((2 * self__.cnt) - 2)] = null);
editable.cnt = (editable.cnt - 1);
return editable;
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable = (function (e){
var self__ = this;
var inode = this;
if((e === self__.edit))
{return inode;
} else
{var new_arr = cljs.core.make_array.cljs$lang$arity$1((2 * (self__.cnt + 1)));
cljs.core.array_copy(self__.arr,0,new_arr,0,(2 * self__.cnt));
return (new cljs.core.HashCollisionNode(e,self__.collision_hash,self__.cnt,new_arr));
}
});
cljs.core.HashCollisionNode.prototype.kv_reduce = (function (f,init){
var self__ = this;
var inode = this;
return cljs.core.inode_kv_reduce(self__.arr,f,init);
});
cljs.core.HashCollisionNode.prototype.inode_find = (function (shift,hash,key,not_found){
var self__ = this;
var inode = this;
var idx = cljs.core.hash_collision_node_find_index(self__.arr,self__.cnt,key);
if((idx < 0))
{return not_found;
} else
{if(cljs.core.key_test(key,(self__.arr[idx])))
{return cljs.core.PersistentVector.fromArray([(self__.arr[idx]),(self__.arr[(idx + 1)])], true);
} else
{if("\uFDD0:else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_without = (function (shift,hash,key){
var self__ = this;
var inode = this;
var idx = cljs.core.hash_collision_node_find_index(self__.arr,self__.cnt,key);
if((idx === -1))
{return inode;
} else
{if((self__.cnt === 1))
{return null;
} else
{if("\uFDD0:else")
{return (new cljs.core.HashCollisionNode(null,self__.collision_hash,(self__.cnt - 1),cljs.core.remove_pair(self__.arr,cljs.core.quot(idx,2))));
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var self__ = this;
var inode = this;
if((hash === self__.collision_hash))
{var idx = cljs.core.hash_collision_node_find_index(self__.arr,self__.cnt,key);
if((idx === -1))
{var len = self__.arr.length;
var new_arr = cljs.core.make_array.cljs$lang$arity$1((len + 2));
cljs.core.array_copy(self__.arr,0,new_arr,0,len);
(new_arr[len] = key);
(new_arr[(len + 1)] = val);
added_leaf_QMARK_.val = true;
return (new cljs.core.HashCollisionNode(null,self__.collision_hash,(self__.cnt + 1),new_arr));
} else
{if(cljs.core._EQ_.cljs$lang$arity$2((self__.arr[idx]),val))
{return inode;
} else
{return (new cljs.core.HashCollisionNode(null,self__.collision_hash,self__.cnt,cljs.core.clone_and_set.cljs$lang$arity$3(self__.arr,(idx + 1),val)));
}
}
} else
{return (new cljs.core.BitmapIndexedNode(null,(1 << ((self__.collision_hash >>> shift) & 0x01f)),[null,inode])).inode_assoc(shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var self__ = this;
var inode = this;
var idx = cljs.core.hash_collision_node_find_index(self__.arr,self__.cnt,key);
if((idx < 0))
{return not_found;
} else
{if(cljs.core.key_test(key,(self__.arr[idx])))
{return (self__.arr[(idx + 1)]);
} else
{if("\uFDD0:else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable_array = (function (e,count,array){
var self__ = this;
var inode = this;
if((e === self__.edit))
{self__.arr = array;
self__.cnt = count;
return inode;
} else
{return (new cljs.core.HashCollisionNode(self__.edit,self__.collision_hash,count,array));
}
});
cljs.core.create_node = (function() {
var create_node = null;
var create_node__6 = (function (shift,key1,val1,key2hash,key2,val2){
var key1hash = cljs.core.hash.cljs$lang$arity$1(key1);
if((key1hash === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK_ = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift,key1hash,key1,val1,added_leaf_QMARK_).inode_assoc(shift,key2hash,key2,val2,added_leaf_QMARK_);
}
});
var create_node__7 = (function (edit,shift,key1,val1,key2hash,key2,val2){
var key1hash = cljs.core.hash.cljs$lang$arity$1(key1);
if((key1hash === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK_ = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,shift,key1hash,key1,val1,added_leaf_QMARK_).inode_assoc_BANG_(edit,shift,key2hash,key2,val2,added_leaf_QMARK_);
}
});
create_node = function(edit,shift,key1,val1,key2hash,key2,val2){
switch(arguments.length){
case 6:
return create_node__6.call(this,edit,shift,key1,val1,key2hash,key2);
case 7:
return create_node__7.call(this,edit,shift,key1,val1,key2hash,key2,val2);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
create_node.cljs$lang$arity$6 = create_node__6;
create_node.cljs$lang$arity$7 = create_node__7;
return create_node;
})()
;
goog.provide('cljs.core.NodeSeq');

/**
* @constructor
*/
cljs.core.NodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.NodeSeq.cljs$lang$type = true;
cljs.core.NodeSeq.cljs$lang$ctorPrSeq = (function (this__5785__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/NodeSeq");
});
cljs.core.NodeSeq.cljs$lang$ctorPrWriter = (function (this__5785__auto__,writer__5786__auto__,opt__5787__auto__){
return cljs.core._write(writer__5786__auto__,"cljs.core/NodeSeq");
});
cljs.core.NodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__5666__auto__ = self__.__hash;
if(!((h__5666__auto__ == null)))
{return h__5666__auto__;
} else
{var h__5666__auto____$1 = cljs.core.hash_coll(coll);
self__.__hash = h__5666__auto____$1;
return h__5666__auto____$1;
}
});
cljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
return cljs.core.cons(o,coll);
});
cljs.core.NodeSeq.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return (cljs.core.pr_str.cljs$lang$arity$1 ? cljs.core.pr_str.cljs$lang$arity$1(this$) : cljs.core.pr_str.call(null,this$));
});
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
return this$;
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
if((self__.s == null))
{return cljs.core.PersistentVector.fromArray([(self__.nodes[self__.i]),(self__.nodes[(self__.i + 1)])], true);
} else
{return cljs.core.first(self__.s);
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
if((self__.s == null))
{return (cljs.core.create_inode_seq.cljs$lang$arity$3 ? cljs.core.create_inode_seq.cljs$lang$arity$3(self__.nodes,(self__.i + 2),null) : cljs.core.create_inode_seq.call(null,self__.nodes,(self__.i + 2),null));
} else
{return (cljs.core.create_inode_seq.cljs$lang$arity$3 ? cljs.core.create_inode_seq.cljs$lang$arity$3(self__.nodes,self__.i,cljs.core.next(self__.s)) : cljs.core.create_inode_seq.call(null,self__.nodes,self__.i,cljs.core.next(self__.s)));
}
});
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
return (new cljs.core.NodeSeq(meta__$1,self__.nodes,self__.i,self__.s,self__.__hash));
});
cljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});
cljs.core.create_inode_seq = (function() {
var create_inode_seq = null;
var create_inode_seq__1 = (function (nodes){
return create_inode_seq.cljs$lang$arity$3(nodes,0,null);
});
var create_inode_seq__3 = (function (nodes,i,s){
if((s == null))
{var len = nodes.length;
var j = i;
while(true){
if((j < len))
{if(!(((nodes[j]) == null)))
{return (new cljs.core.NodeSeq(null,nodes,j,null,null));
} else
{var temp__4090__auto__ = (nodes[(j + 1)]);
if(cljs.core.truth_(temp__4090__auto__))
{var node = temp__4090__auto__;
var temp__4090__auto____$1 = node.inode_seq();
if(cljs.core.truth_(temp__4090__auto____$1))
{var node_seq = temp__4090__auto____$1;
return (new cljs.core.NodeSeq(null,nodes,(j + 2),node_seq,null));
} else
{{
var G__26062 = (j + 2);
j = G__26062;
continue;
}
}
} else
{{
var G__26063 = (j + 2);
j = G__26063;
continue;
}
}
}
} else
{return null;
}
break;
}
} else
{return (new cljs.core.NodeSeq(null,nodes,i,s,null));
}
});
create_inode_seq = function(nodes,i,s){
switch(arguments.length){
case 1:
return create_inode_seq__1.call(this,nodes);
case 3:
return create_inode_seq__3.call(this,nodes,i,s);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
create_inode_seq.cljs$lang$arity$1 = create_inode_seq__1;
create_inode_seq.cljs$lang$arity$3 = create_inode_seq__3;
return create_inode_seq;
})()
;
goog.provide('cljs.core.ArrayNodeSeq');

/**
* @constructor
*/
cljs.core.ArrayNodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.ArrayNodeSeq.cljs$lang$type = true;
cljs.core.ArrayNodeSeq.cljs$lang$ctorPrSeq = (function (this__5785__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/ArrayNodeSeq");
});
cljs.core.ArrayNodeSeq.cljs$lang$ctorPrWriter = (function (this__5785__auto__,writer__5786__auto__,opt__5787__auto__){
return cljs.core._write(writer__5786__auto__,"cljs.core/ArrayNodeSeq");
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__5666__auto__ = self__.__hash;
if(!((h__5666__auto__ == null)))
{return h__5666__auto__;
} else
{var h__5666__auto____$1 = cljs.core.hash_coll(coll);
self__.__hash = h__5666__auto____$1;
return h__5666__auto____$1;
}
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
return cljs.core.cons(o,coll);
});
cljs.core.ArrayNodeSeq.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return (cljs.core.pr_str.cljs$lang$arity$1 ? cljs.core.pr_str.cljs$lang$arity$1(this$) : cljs.core.pr_str.call(null,this$));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
return this$;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
return cljs.core.first(self__.s);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
return (cljs.core.create_array_node_seq.cljs$lang$arity$4 ? cljs.core.create_array_node_seq.cljs$lang$arity$4(null,self__.nodes,self__.i,cljs.core.next(self__.s)) : cljs.core.create_array_node_seq.call(null,null,self__.nodes,self__.i,cljs.core.next(self__.s)));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
return (new cljs.core.ArrayNodeSeq(meta__$1,self__.nodes,self__.i,self__.s,self__.__hash));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});
cljs.core.create_array_node_seq = (function() {
var create_array_node_seq = null;
var create_array_node_seq__1 = (function (nodes){
return create_array_node_seq.cljs$lang$arity$4(null,nodes,0,null);
});
var create_array_node_seq__4 = (function (meta,nodes,i,s){
if((s == null))
{var len = nodes.length;
var j = i;
while(true){
if((j < len))
{var temp__4090__auto__ = (nodes[j]);
if(cljs.core.truth_(temp__4090__auto__))
{var nj = temp__4090__auto__;
var temp__4090__auto____$1 = nj.inode_seq();
if(cljs.core.truth_(temp__4090__auto____$1))
{var ns = temp__4090__auto____$1;
return (new cljs.core.ArrayNodeSeq(meta,nodes,(j + 1),ns,null));
} else
{{
var G__26064 = (j + 1);
j = G__26064;
continue;
}
}
} else
{{
var G__26065 = (j + 1);
j = G__26065;
continue;
}
}
} else
{return null;
}
break;
}
} else
{return (new cljs.core.ArrayNodeSeq(meta,nodes,i,s,null));
}
});
create_array_node_seq = function(meta,nodes,i,s){
switch(arguments.length){
case 1:
return create_array_node_seq__1.call(this,meta);
case 4:
return create_array_node_seq__4.call(this,meta,nodes,i,s);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
create_array_node_seq.cljs$lang$arity$1 = create_array_node_seq__1;
create_array_node_seq.cljs$lang$arity$4 = create_array_node_seq__4;
return create_array_node_seq;
})()
;
cljs.core.TransientHashMap = undefined;
goog.provide('cljs.core.PersistentHashMap');

/**
* @constructor
*/
cljs.core.PersistentHashMap = (function (meta,cnt,root,has_nil_QMARK_,nil_val,__hash){
this.meta = meta;
this.cnt = cnt;
this.root = root;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 4;
this.cljs$lang$protocol_mask$partition0$ = 16123663;
})
cljs.core.PersistentHashMap.cljs$lang$type = true;
cljs.core.PersistentHashMap.cljs$lang$ctorPrSeq = (function (this__5785__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/PersistentHashMap");
});
cljs.core.PersistentHashMap.cljs$lang$ctorPrWriter = (function (this__5785__auto__,writer__5786__auto__,opt__5787__auto__){
return cljs.core._write(writer__5786__auto__,"cljs.core/PersistentHashMap");
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var self__ = this;
return (new cljs.core.TransientHashMap({},self__.root,self__.cnt,self__.has_nil_QMARK_,self__.nil_val));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__5666__auto__ = self__.__hash;
if(!((h__5666__auto__ == null)))
{return h__5666__auto__;
} else
{var h__5666__auto____$1 = cljs.core.hash_imap(coll);
self__.__hash = h__5666__auto____$1;
return h__5666__auto____$1;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
if((k == null))
{if(self__.has_nil_QMARK_)
{return self__.nil_val;
} else
{return not_found;
}
} else
{if((self__.root == null))
{return not_found;
} else
{if("\uFDD0:else")
{return self__.root.inode_lookup(0,cljs.core.hash.cljs$lang$arity$1(k),k,not_found);
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var self__ = this;
if((k == null))
{if(cljs.core.truth_((function (){var and__3941__auto__ = self__.has_nil_QMARK_;
if(and__3941__auto__)
{return (v === self__.nil_val);
} else
{return and__3941__auto__;
}
})()))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(self__.meta,((self__.has_nil_QMARK_)?self__.cnt:(self__.cnt + 1)),self__.root,true,v,null));
}
} else
{var added_leaf_QMARK_ = (new cljs.core.Box(false));
var new_root = (((self__.root == null))?cljs.core.BitmapIndexedNode.EMPTY:self__.root).inode_assoc(0,cljs.core.hash.cljs$lang$arity$1(k),k,v,added_leaf_QMARK_);
if((new_root === self__.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(self__.meta,((added_leaf_QMARK_.val)?(self__.cnt + 1):self__.cnt),new_root,self__.has_nil_QMARK_,self__.nil_val,null));
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var self__ = this;
if((k == null))
{return self__.has_nil_QMARK_;
} else
{if((self__.root == null))
{return false;
} else
{if("\uFDD0:else")
{return !((self__.root.inode_lookup(0,cljs.core.hash.cljs$lang$arity$1(k),k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel));
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.call = (function() {
var G__26067 = null;
var G__26067__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$2(coll,k);
});
var G__26067__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,not_found);
});
G__26067 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__26067__2.call(this,self__,k);
case 3:
return G__26067__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__26067;
})()
;
cljs.core.PersistentHashMap.prototype.apply = (function (self__,args26066){
var self__ = this;
return self__.call.apply(self__,[self__].concat(args26066.slice()));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var self__ = this;
var init__$1 = ((self__.has_nil_QMARK_)?(f.cljs$lang$arity$3 ? f.cljs$lang$arity$3(init,null,self__.nil_val) : f.call(null,init,null,self__.nil_val)):init);
if(cljs.core.reduced_QMARK_(init__$1))
{return (cljs.core.deref.cljs$lang$arity$1 ? cljs.core.deref.cljs$lang$arity$1(init__$1) : cljs.core.deref.call(null,init__$1));
} else
{if(!((self__.root == null)))
{return self__.root.kv_reduce(f,init__$1);
} else
{if("\uFDD0:else")
{return init__$1;
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var self__ = this;
if(cljs.core.vector_QMARK_(entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.cljs$lang$arity$2(entry,0),cljs.core._nth.cljs$lang$arity$2(entry,1));
} else
{return cljs.core.reduce.cljs$lang$arity$3(cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentHashMap.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return (cljs.core.pr_str.cljs$lang$arity$1 ? cljs.core.pr_str.cljs$lang$arity$1(this$) : cljs.core.pr_str.call(null,this$));
});
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
if((self__.cnt > 0))
{var s = ((!((self__.root == null)))?self__.root.inode_seq():null);
if(self__.has_nil_QMARK_)
{return cljs.core.cons(cljs.core.PersistentVector.fromArray([null,self__.nil_val], true),s);
} else
{return s;
}
} else
{return null;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
return self__.cnt;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return cljs.core.equiv_map(coll,other);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
return (new cljs.core.PersistentHashMap(meta__$1,self__.cnt,self__.root,self__.has_nil_QMARK_,self__.nil_val,self__.__hash));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return cljs.core._with_meta(cljs.core.PersistentHashMap.EMPTY,self__.meta);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var self__ = this;
if((k == null))
{if(self__.has_nil_QMARK_)
{return (new cljs.core.PersistentHashMap(self__.meta,(self__.cnt - 1),self__.root,false,null,null));
} else
{return coll;
}
} else
{if((self__.root == null))
{return coll;
} else
{if("\uFDD0:else")
{var new_root = self__.root.inode_without(0,cljs.core.hash.cljs$lang$arity$1(k),k);
if((new_root === self__.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(self__.meta,(self__.cnt - 1),new_root,self__.has_nil_QMARK_,self__.nil_val,null));
}
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.EMPTY = (new cljs.core.PersistentHashMap(null,0,null,false,null,0));
cljs.core.PersistentHashMap.fromArrays = (function (ks,vs){
var len = ks.length;
var i = 0;
var out = cljs.core.transient$(cljs.core.PersistentHashMap.EMPTY);
while(true){
if((i < len))
{{
var G__26068 = (i + 1);
var G__26069 = cljs.core.assoc_BANG_(out,(ks[i]),(vs[i]));
i = G__26068;
out = G__26069;
continue;
}
} else
{return cljs.core.persistent_BANG_(out);
}
break;
}
});
goog.provide('cljs.core.TransientHashMap');

/**
* @constructor
*/
cljs.core.TransientHashMap = (function (edit,root,count,has_nil_QMARK_,nil_val){
this.edit = edit;
this.root = root;
this.count = count;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.cljs$lang$protocol_mask$partition1$ = 56;
this.cljs$lang$protocol_mask$partition0$ = 258;
})
cljs.core.TransientHashMap.cljs$lang$type = true;
cljs.core.TransientHashMap.cljs$lang$ctorPrSeq = (function (this__5785__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/TransientHashMap");
});
cljs.core.TransientHashMap.cljs$lang$ctorPrWriter = (function (this__5785__auto__,writer__5786__auto__,opt__5787__auto__){
return cljs.core._write(writer__5786__auto__,"cljs.core/TransientHashMap");
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var self__ = this;
return tcoll.without_BANG_(key);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var self__ = this;
return tcoll.assoc_BANG_(key,val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,val){
var self__ = this;
return tcoll.conj_BANG_(val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var self__ = this;
return tcoll.persistent_BANG_();
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var self__ = this;
if((k == null))
{if(self__.has_nil_QMARK_)
{return self__.nil_val;
} else
{return null;
}
} else
{if((self__.root == null))
{return null;
} else
{return self__.root.inode_lookup(0,cljs.core.hash.cljs$lang$arity$1(k),k);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var self__ = this;
if((k == null))
{if(self__.has_nil_QMARK_)
{return self__.nil_val;
} else
{return not_found;
}
} else
{if((self__.root == null))
{return not_found;
} else
{return self__.root.inode_lookup(0,cljs.core.hash.cljs$lang$arity$1(k),k,not_found);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
if(self__.edit)
{return self__.count;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.conj_BANG_ = (function (o){
var self__ = this;
var tcoll = this;
if(self__.edit)
{if(cljs.core.truth_((function (){var G__26070 = o;
if(G__26070)
{if(cljs.core.truth_((function (){var or__3943__auto__ = (G__26070.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__26070.cljs$core$IMapEntry$;
}
})()))
{return true;
} else
{if((!G__26070.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.IMapEntry,G__26070);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IMapEntry,G__26070);
}
})()))
{return tcoll.assoc_BANG_((cljs.core.key.cljs$lang$arity$1 ? cljs.core.key.cljs$lang$arity$1(o) : cljs.core.key.call(null,o)),(cljs.core.val.cljs$lang$arity$1 ? cljs.core.val.cljs$lang$arity$1(o) : cljs.core.val.call(null,o)));
} else
{var es = cljs.core.seq(o);
var tcoll__$1 = tcoll;
while(true){
var temp__4090__auto__ = cljs.core.first(es);
if(cljs.core.truth_(temp__4090__auto__))
{var e = temp__4090__auto__;
{
var G__26071 = cljs.core.next(es);
var G__26072 = tcoll__$1.assoc_BANG_((cljs.core.key.cljs$lang$arity$1 ? cljs.core.key.cljs$lang$arity$1(e) : cljs.core.key.call(null,e)),(cljs.core.val.cljs$lang$arity$1 ? cljs.core.val.cljs$lang$arity$1(e) : cljs.core.val.call(null,e)));
es = G__26071;
tcoll__$1 = G__26072;
continue;
}
} else
{return tcoll__$1;
}
break;
}
}
} else
{throw (new Error("conj! after persistent"));
}
});
cljs.core.TransientHashMap.prototype.assoc_BANG_ = (function (k,v){
var self__ = this;
var tcoll = this;
if(self__.edit)
{if((k == null))
{if((self__.nil_val === v))
{} else
{self__.nil_val = v;
}
if(self__.has_nil_QMARK_)
{} else
{self__.count = (self__.count + 1);
self__.has_nil_QMARK_ = true;
}
return tcoll;
} else
{var added_leaf_QMARK_ = (new cljs.core.Box(false));
var node = (((self__.root == null))?cljs.core.BitmapIndexedNode.EMPTY:self__.root).inode_assoc_BANG_(self__.edit,0,cljs.core.hash.cljs$lang$arity$1(k),k,v,added_leaf_QMARK_);
if((node === self__.root))
{} else
{self__.root = node;
}
if(added_leaf_QMARK_.val)
{self__.count = (self__.count + 1);
} else
{}
return tcoll;
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.without_BANG_ = (function (k){
var self__ = this;
var tcoll = this;
if(self__.edit)
{if((k == null))
{if(self__.has_nil_QMARK_)
{self__.has_nil_QMARK_ = false;
self__.nil_val = null;
self__.count = (self__.count - 1);
return tcoll;
} else
{return tcoll;
}
} else
{if((self__.root == null))
{return tcoll;
} else
{var removed_leaf_QMARK_ = (new cljs.core.Box(false));
var node = self__.root.inode_without_BANG_(self__.edit,0,cljs.core.hash.cljs$lang$arity$1(k),k,removed_leaf_QMARK_);
if((node === self__.root))
{} else
{self__.root = node;
}
if(cljs.core.truth_((removed_leaf_QMARK_[0])))
{self__.count = (self__.count - 1);
} else
{}
return tcoll;
}
}
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.persistent_BANG_ = (function (){
var self__ = this;
var tcoll = this;
if(self__.edit)
{self__.edit = null;
return (new cljs.core.PersistentHashMap(null,self__.count,self__.root,self__.has_nil_QMARK_,self__.nil_val,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.tree_map_seq_push = (function tree_map_seq_push(node,stack,ascending_QMARK_){
var t = node;
var stack__$1 = stack;
while(true){
if(!((t == null)))
{{
var G__26073 = ((ascending_QMARK_)?t.left:t.right);
var G__26074 = cljs.core.conj.cljs$lang$arity$2(stack__$1,t);
t = G__26073;
stack__$1 = G__26074;
continue;
}
} else
{return stack__$1;
}
break;
}
});
goog.provide('cljs.core.PersistentTreeMapSeq');

/**
* @constructor
*/
cljs.core.PersistentTreeMapSeq = (function (meta,stack,ascending_QMARK_,cnt,__hash){
this.meta = meta;
this.stack = stack;
this.ascending_QMARK_ = ascending_QMARK_;
this.cnt = cnt;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850574;
})
cljs.core.PersistentTreeMapSeq.cljs$lang$type = true;
cljs.core.PersistentTreeMapSeq.cljs$lang$ctorPrSeq = (function (this__5785__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/PersistentTreeMapSeq");
});
cljs.core.PersistentTreeMapSeq.cljs$lang$ctorPrWriter = (function (this__5785__auto__,writer__5786__auto__,opt__5787__auto__){
return cljs.core._write(writer__5786__auto__,"cljs.core/PersistentTreeMapSeq");
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__5666__auto__ = self__.__hash;
if(!((h__5666__auto__ == null)))
{return h__5666__auto__;
} else
{var h__5666__auto____$1 = cljs.core.hash_coll(coll);
self__.__hash = h__5666__auto____$1;
return h__5666__auto____$1;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
return cljs.core.cons(o,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return (cljs.core.pr_str.cljs$lang$arity$1 ? cljs.core.pr_str.cljs$lang$arity$1(this$) : cljs.core.pr_str.call(null,this$));
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
return this$;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
if((self__.cnt < 0))
{return (cljs.core.count(cljs.core.next(coll)) + 1);
} else
{return self__.cnt;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var self__ = this;
return cljs.core.peek(self__.stack);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var self__ = this;
var t = cljs.core.first(self__.stack);
var next_stack = cljs.core.tree_map_seq_push(((self__.ascending_QMARK_)?t.right:t.left),cljs.core.next(self__.stack),self__.ascending_QMARK_);
if(!((next_stack == null)))
{return (new cljs.core.PersistentTreeMapSeq(null,next_stack,self__.ascending_QMARK_,(self__.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
return (new cljs.core.PersistentTreeMapSeq(meta__$1,self__.stack,self__.ascending_QMARK_,self__.cnt,self__.__hash));
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});
cljs.core.create_tree_map_seq = (function create_tree_map_seq(tree,ascending_QMARK_,cnt){
return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.tree_map_seq_push(tree,null,ascending_QMARK_),ascending_QMARK_,cnt,null));
});
cljs.core.RedNode = undefined;
cljs.core.BlackNode = undefined;
cljs.core.balance_left = (function balance_left(key,val,ins,right){
if(cljs.core.instance_QMARK_(cljs.core.RedNode,ins))
{if(cljs.core.instance_QMARK_(cljs.core.RedNode,ins.left))
{return (new cljs.core.RedNode(ins.key,ins.val,ins.left.blacken(),(new cljs.core.BlackNode(key,val,ins.right,right,null)),null));
} else
{if(cljs.core.instance_QMARK_(cljs.core.RedNode,ins.right))
{return (new cljs.core.RedNode(ins.right.key,ins.right.val,(new cljs.core.BlackNode(ins.key,ins.val,ins.left,ins.right.left,null)),(new cljs.core.BlackNode(key,val,ins.right.right,right,null)),null));
} else
{if("\uFDD0:else")
{return (new cljs.core.BlackNode(key,val,ins,right,null));
} else
{return null;
}
}
}
} else
{return (new cljs.core.BlackNode(key,val,ins,right,null));
}
});
cljs.core.balance_right = (function balance_right(key,val,left,ins){
if(cljs.core.instance_QMARK_(cljs.core.RedNode,ins))
{if(cljs.core.instance_QMARK_(cljs.core.RedNode,ins.right))
{return (new cljs.core.RedNode(ins.key,ins.val,(new cljs.core.BlackNode(key,val,left,ins.left,null)),ins.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_(cljs.core.RedNode,ins.left))
{return (new cljs.core.RedNode(ins.left.key,ins.left.val,(new cljs.core.BlackNode(key,val,left,ins.left.left,null)),(new cljs.core.BlackNode(ins.key,ins.val,ins.left.right,ins.right,null)),null));
} else
{if("\uFDD0:else")
{return (new cljs.core.BlackNode(key,val,left,ins,null));
} else
{return null;
}
}
}
} else
{return (new cljs.core.BlackNode(key,val,left,ins,null));
}
});
cljs.core.balance_left_del = (function balance_left_del(key,val,del,right){
if(cljs.core.instance_QMARK_(cljs.core.RedNode,del))
{return (new cljs.core.RedNode(key,val,del.blacken(),right,null));
} else
{if(cljs.core.instance_QMARK_(cljs.core.BlackNode,right))
{return cljs.core.balance_right(key,val,del,right.redden());
} else
{if(cljs.core.truth_((function (){var and__3941__auto__ = cljs.core.instance_QMARK_(cljs.core.RedNode,right);
if(and__3941__auto__)
{return cljs.core.instance_QMARK_(cljs.core.BlackNode,right.left);
} else
{return and__3941__auto__;
}
})()))
{return (new cljs.core.RedNode(right.left.key,right.left.val,(new cljs.core.BlackNode(key,val,del,right.left.left,null)),cljs.core.balance_right(right.key,right.val,right.left.right,right.right.redden()),null));
} else
{if("\uFDD0:else")
{throw (new Error("red-black tree invariant violation"));
} else
{return null;
}
}
}
}
});
cljs.core.balance_right_del = (function balance_right_del(key,val,left,del){
if(cljs.core.instance_QMARK_(cljs.core.RedNode,del))
{return (new cljs.core.RedNode(key,val,left,del.blacken(),null));
} else
{if(cljs.core.instance_QMARK_(cljs.core.BlackNode,left))
{return cljs.core.balance_left(key,val,left.redden(),del);
} else
{if(cljs.core.truth_((function (){var and__3941__auto__ = cljs.core.instance_QMARK_(cljs.core.RedNode,left);
if(and__3941__auto__)
{return cljs.core.instance_QMARK_(cljs.core.BlackNode,left.right);
} else
{return and__3941__auto__;
}
})()))
{return (new cljs.core.RedNode(left.right.key,left.right.val,cljs.core.balance_left(left.key,left.val,left.left.redden(),left.right.left),(new cljs.core.BlackNode(key,val,left.right.right,del,null)),null));
} else
{if("\uFDD0:else")
{throw (new Error("red-black tree invariant violation"));
} else
{return null;
}
}
}
}
});
cljs.core.tree_map_kv_reduce = (function tree_map_kv_reduce(node,f,init){
var init__$1 = ((!((node.left == null)))?tree_map_kv_reduce(node.left,f,init):init);
if(cljs.core.reduced_QMARK_(init__$1))
{return (cljs.core.deref.cljs$lang$arity$1 ? cljs.core.deref.cljs$lang$arity$1(init__$1) : cljs.core.deref.call(null,init__$1));
} else
{var init__$2 = (f.cljs$lang$arity$3 ? f.cljs$lang$arity$3(init__$1,node.key,node.val) : f.call(null,init__$1,node.key,node.val));
if(cljs.core.reduced_QMARK_(init__$2))
{return (cljs.core.deref.cljs$lang$arity$1 ? cljs.core.deref.cljs$lang$arity$1(init__$2) : cljs.core.deref.call(null,init__$2));
} else
{var init__$3 = ((!((node.right == null)))?tree_map_kv_reduce(node.right,f,init__$2):init__$2);
if(cljs.core.reduced_QMARK_(init__$3))
{return (cljs.core.deref.cljs$lang$arity$1 ? cljs.core.deref.cljs$lang$arity$1(init__$3) : cljs.core.deref.call(null,init__$3));
} else
{return init__$3;
}
}
}
});
goog.provide('cljs.core.BlackNode');

/**
* @constructor
*/
cljs.core.BlackNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32402207;
})
cljs.core.BlackNode.cljs$lang$type = true;
cljs.core.BlackNode.cljs$lang$ctorPrSeq = (function (this__5785__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/BlackNode");
});
cljs.core.BlackNode.cljs$lang$ctorPrWriter = (function (this__5785__auto__,writer__5786__auto__,opt__5787__auto__){
return cljs.core._write(writer__5786__auto__,"cljs.core/BlackNode");
});
cljs.core.BlackNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__5666__auto__ = self__.__hash;
if(!((h__5666__auto__ == null)))
{return h__5666__auto__;
} else
{var h__5666__auto____$1 = cljs.core.hash_coll(coll);
self__.__hash = h__5666__auto____$1;
return h__5666__auto____$1;
}
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var self__ = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var self__ = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var self__ = this;
return cljs.core.assoc.cljs$lang$arity$3(cljs.core.PersistentVector.fromArray([self__.key,self__.val], true),k,v);
});
cljs.core.BlackNode.prototype.call = (function() {
var G__26076 = null;
var G__26076__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var node = self____$1;
return node.cljs$core$ILookup$_lookup$arity$2(node,k);
});
var G__26076__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var node = self____$1;
return node.cljs$core$ILookup$_lookup$arity$3(node,k,not_found);
});
G__26076 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__26076__2.call(this,self__,k);
case 3:
return G__26076__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__26076;
})()
;
cljs.core.BlackNode.prototype.apply = (function (self__,args26075){
var self__ = this;
return self__.call.apply(self__,[self__].concat(args26075.slice()));
});
cljs.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var self__ = this;
return cljs.core.PersistentVector.fromArray([self__.key,self__.val,o], true);
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var self__ = this;
return self__.key;
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var self__ = this;
return self__.val;
});
cljs.core.BlackNode.prototype.add_right = (function (ins){
var self__ = this;
var node = this;
return ins.balance_right(node);
});
cljs.core.BlackNode.prototype.redden = (function (){
var self__ = this;
var node = this;
return (new cljs.core.RedNode(self__.key,self__.val,self__.left,self__.right,null));
});
cljs.core.BlackNode.prototype.remove_right = (function (del){
var self__ = this;
var node = this;
return cljs.core.balance_right_del(self__.key,self__.val,self__.left,del);
});
cljs.core.BlackNode.prototype.replace = (function (key__$1,val__$1,left__$1,right__$1){
var self__ = this;
var node = this;
return (new cljs.core.BlackNode(key__$1,val__$1,left__$1,right__$1,null));
});
cljs.core.BlackNode.prototype.kv_reduce = (function (f,init){
var self__ = this;
var node = this;
return cljs.core.tree_map_kv_reduce(node,f,init);
});
cljs.core.BlackNode.prototype.remove_left = (function (del){
var self__ = this;
var node = this;
return cljs.core.balance_left_del(self__.key,self__.val,del,self__.right);
});
cljs.core.BlackNode.prototype.add_left = (function (ins){
var self__ = this;
var node = this;
return ins.balance_left(node);
});
cljs.core.BlackNode.prototype.balance_left = (function (parent){
var self__ = this;
var node = this;
return (new cljs.core.BlackNode(parent.key,parent.val,node,parent.right,null));
});
cljs.core.BlackNode.prototype.toString = (function() {
var G__26077 = null;
var G__26077__0 = (function (){
var self__ = this;
var this$ = this;
return (cljs.core.pr_str.cljs$lang$arity$1 ? cljs.core.pr_str.cljs$lang$arity$1(this$) : cljs.core.pr_str.call(null,this$));
});
G__26077 = function(){
switch(arguments.length){
case 0:
return G__26077__0.call(this);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__26077;
})()
;
cljs.core.BlackNode.prototype.balance_right = (function (parent){
var self__ = this;
var node = this;
return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node,null));
});
cljs.core.BlackNode.prototype.blacken = (function (){
var self__ = this;
var node = this;
return node;
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var self__ = this;
return cljs.core.ci_reduce.cljs$lang$arity$2(node,f);
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var self__ = this;
return cljs.core.ci_reduce.cljs$lang$arity$3(node,f,start);
});
cljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var self__ = this;
return cljs.core.list.cljs$lang$arity$2(self__.key,self__.val);
});
cljs.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var self__ = this;
return 2;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var self__ = this;
return self__.val;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var self__ = this;
return cljs.core.PersistentVector.fromArray([self__.key], true);
});
cljs.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var self__ = this;
return cljs.core._assoc_n(cljs.core.PersistentVector.fromArray([self__.key,self__.val], true),n,v);
});
cljs.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var self__ = this;
return cljs.core.with_meta(cljs.core.PersistentVector.fromArray([self__.key,self__.val], true),meta);
});
cljs.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var self__ = this;
return null;
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var self__ = this;
if((n === 0))
{return self__.key;
} else
{if((n === 1))
{return self__.val;
} else
{if("\uFDD0:else")
{return null;
} else
{return null;
}
}
}
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){
var self__ = this;
if((n === 0))
{return self__.key;
} else
{if((n === 1))
{return self__.val;
} else
{if("\uFDD0:else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.BlackNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){
var self__ = this;
return cljs.core.PersistentVector.EMPTY;
});
goog.provide('cljs.core.RedNode');

/**
* @constructor
*/
cljs.core.RedNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32402207;
})
cljs.core.RedNode.cljs$lang$type = true;
cljs.core.RedNode.cljs$lang$ctorPrSeq = (function (this__5785__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/RedNode");
});
cljs.core.RedNode.cljs$lang$ctorPrWriter = (function (this__5785__auto__,writer__5786__auto__,opt__5787__auto__){
return cljs.core._write(writer__5786__auto__,"cljs.core/RedNode");
});
cljs.core.RedNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__5666__auto__ = self__.__hash;
if(!((h__5666__auto__ == null)))
{return h__5666__auto__;
} else
{var h__5666__auto____$1 = cljs.core.hash_coll(coll);
self__.__hash = h__5666__auto____$1;
return h__5666__auto____$1;
}
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var self__ = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var self__ = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var self__ = this;
return cljs.core.assoc.cljs$lang$arity$3(cljs.core.PersistentVector.fromArray([self__.key,self__.val], true),k,v);
});
cljs.core.RedNode.prototype.call = (function() {
var G__26079 = null;
var G__26079__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var node = self____$1;
return node.cljs$core$ILookup$_lookup$arity$2(node,k);
});
var G__26079__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var node = self____$1;
return node.cljs$core$ILookup$_lookup$arity$3(node,k,not_found);
});
G__26079 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__26079__2.call(this,self__,k);
case 3:
return G__26079__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__26079;
})()
;
cljs.core.RedNode.prototype.apply = (function (self__,args26078){
var self__ = this;
return self__.call.apply(self__,[self__].concat(args26078.slice()));
});
cljs.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var self__ = this;
return cljs.core.PersistentVector.fromArray([self__.key,self__.val,o], true);
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var self__ = this;
return self__.key;
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var self__ = this;
return self__.val;
});
cljs.core.RedNode.prototype.add_right = (function (ins){
var self__ = this;
var node = this;
return (new cljs.core.RedNode(self__.key,self__.val,self__.left,ins,null));
});
cljs.core.RedNode.prototype.redden = (function (){
var self__ = this;
var node = this;
throw (new Error("red-black tree invariant violation"));
});
cljs.core.RedNode.prototype.remove_right = (function (del){
var self__ = this;
var node = this;
return (new cljs.core.RedNode(self__.key,self__.val,self__.left,del,null));
});
cljs.core.RedNode.prototype.replace = (function (key__$1,val__$1,left__$1,right__$1){
var self__ = this;
var node = this;
return (new cljs.core.RedNode(key__$1,val__$1,left__$1,right__$1,null));
});
cljs.core.RedNode.prototype.kv_reduce = (function (f,init){
var self__ = this;
var node = this;
return cljs.core.tree_map_kv_reduce(node,f,init);
});
cljs.core.RedNode.prototype.remove_left = (function (del){
var self__ = this;
var node = this;
return (new cljs.core.RedNode(self__.key,self__.val,del,self__.right,null));
});
cljs.core.RedNode.prototype.add_left = (function (ins){
var self__ = this;
var node = this;
return (new cljs.core.RedNode(self__.key,self__.val,ins,self__.right,null));
});
cljs.core.RedNode.prototype.balance_left = (function (parent){
var self__ = this;
var node = this;
if(cljs.core.instance_QMARK_(cljs.core.RedNode,self__.left))
{return (new cljs.core.RedNode(self__.key,self__.val,self__.left.blacken(),(new cljs.core.BlackNode(parent.key,parent.val,self__.right,parent.right,null)),null));
} else
{if(cljs.core.instance_QMARK_(cljs.core.RedNode,self__.right))
{return (new cljs.core.RedNode(self__.right.key,self__.right.val,(new cljs.core.BlackNode(self__.key,self__.val,self__.left,self__.right.left,null)),(new cljs.core.BlackNode(parent.key,parent.val,self__.right.right,parent.right,null)),null));
} else
{if("\uFDD0:else")
{return (new cljs.core.BlackNode(parent.key,parent.val,node,parent.right,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.toString = (function() {
var G__26080 = null;
var G__26080__0 = (function (){
var self__ = this;
var this$ = this;
return (cljs.core.pr_str.cljs$lang$arity$1 ? cljs.core.pr_str.cljs$lang$arity$1(this$) : cljs.core.pr_str.call(null,this$));
});
G__26080 = function(){
switch(arguments.length){
case 0:
return G__26080__0.call(this);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__26080;
})()
;
cljs.core.RedNode.prototype.balance_right = (function (parent){
var self__ = this;
var node = this;
if(cljs.core.instance_QMARK_(cljs.core.RedNode,self__.right))
{return (new cljs.core.RedNode(self__.key,self__.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,self__.left,null)),self__.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_(cljs.core.RedNode,self__.left))
{return (new cljs.core.RedNode(self__.left.key,self__.left.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,self__.left.left,null)),(new cljs.core.BlackNode(self__.key,self__.val,self__.left.right,self__.right,null)),null));
} else
{if("\uFDD0:else")
{return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.blacken = (function (){
var self__ = this;
var node = this;
return (new cljs.core.BlackNode(self__.key,self__.val,self__.left,self__.right,null));
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var self__ = this;
return cljs.core.ci_reduce.cljs$lang$arity$2(node,f);
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var self__ = this;
return cljs.core.ci_reduce.cljs$lang$arity$3(node,f,start);
});
cljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var self__ = this;
return cljs.core.list.cljs$lang$arity$2(self__.key,self__.val);
});
cljs.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var self__ = this;
return 2;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var self__ = this;
return self__.val;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var self__ = this;
return cljs.core.PersistentVector.fromArray([self__.key], true);
});
cljs.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var self__ = this;
return cljs.core._assoc_n(cljs.core.PersistentVector.fromArray([self__.key,self__.val], true),n,v);
});
cljs.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var self__ = this;
return cljs.core.with_meta(cljs.core.PersistentVector.fromArray([self__.key,self__.val], true),meta);
});
cljs.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var self__ = this;
return null;
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var self__ = this;
if((n === 0))
{return self__.key;
} else
{if((n === 1))
{return self__.val;
} else
{if("\uFDD0:else")
{return null;
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){
var self__ = this;
if((n === 0))
{return self__.key;
} else
{if((n === 1))
{return self__.val;
} else
{if("\uFDD0:else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){
var self__ = this;
return cljs.core.PersistentVector.EMPTY;
});
cljs.core.tree_map_add = (function tree_map_add(comp,tree,k,v,found){
if((tree == null))
{return (new cljs.core.RedNode(k,v,null,null,null));
} else
{var c = (comp.cljs$lang$arity$2 ? comp.cljs$lang$arity$2(k,tree.key) : comp.call(null,k,tree.key));
if((c === 0))
{(found[0] = tree);
return null;
} else
{if((c < 0))
{var ins = tree_map_add(comp,tree.left,k,v,found);
if(!((ins == null)))
{return tree.add_left(ins);
} else
{return null;
}
} else
{if("\uFDD0:else")
{var ins = tree_map_add(comp,tree.right,k,v,found);
if(!((ins == null)))
{return tree.add_right(ins);
} else
{return null;
}
} else
{return null;
}
}
}
}
});
cljs.core.tree_map_append = (function tree_map_append(left,right){
if((left == null))
{return right;
} else
{if((right == null))
{return left;
} else
{if(cljs.core.instance_QMARK_(cljs.core.RedNode,left))
{if(cljs.core.instance_QMARK_(cljs.core.RedNode,right))
{var app = tree_map_append(left.right,right.left);
if(cljs.core.instance_QMARK_(cljs.core.RedNode,app))
{return (new cljs.core.RedNode(app.key,app.val,(new cljs.core.RedNode(left.key,left.val,left.left,app.left,null)),(new cljs.core.RedNode(right.key,right.val,app.right,right.right,null)),null));
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,(new cljs.core.RedNode(right.key,right.val,app,right.right,null)),null));
}
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,tree_map_append(left.right,right),null));
}
} else
{if(cljs.core.instance_QMARK_(cljs.core.RedNode,right))
{return (new cljs.core.RedNode(right.key,right.val,tree_map_append(left,right.left),right.right,null));
} else
{if("\uFDD0:else")
{var app = tree_map_append(left.right,right.left);
if(cljs.core.instance_QMARK_(cljs.core.RedNode,app))
{return (new cljs.core.RedNode(app.key,app.val,(new cljs.core.BlackNode(left.key,left.val,left.left,app.left,null)),(new cljs.core.BlackNode(right.key,right.val,app.right,right.right,null)),null));
} else
{return cljs.core.balance_left_del(left.key,left.val,left.left,(new cljs.core.BlackNode(right.key,right.val,app,right.right,null)));
}
} else
{return null;
}
}
}
}
}
});
cljs.core.tree_map_remove = (function tree_map_remove(comp,tree,k,found){
if(!((tree == null)))
{var c = (comp.cljs$lang$arity$2 ? comp.cljs$lang$arity$2(k,tree.key) : comp.call(null,k,tree.key));
if((c === 0))
{(found[0] = tree);
return cljs.core.tree_map_append(tree.left,tree.right);
} else
{if((c < 0))
{var del = tree_map_remove(comp,tree.left,k,found);
if(cljs.core.truth_((function (){var or__3943__auto__ = !((del == null));
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return !(((found[0]) == null));
}
})()))
{if(cljs.core.instance_QMARK_(cljs.core.BlackNode,tree.left))
{return cljs.core.balance_left_del(tree.key,tree.val,del,tree.right);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,del,tree.right,null));
}
} else
{return null;
}
} else
{if("\uFDD0:else")
{var del = tree_map_remove(comp,tree.right,k,found);
if(cljs.core.truth_((function (){var or__3943__auto__ = !((del == null));
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return !(((found[0]) == null));
}
})()))
{if(cljs.core.instance_QMARK_(cljs.core.BlackNode,tree.right))
{return cljs.core.balance_right_del(tree.key,tree.val,tree.left,del);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,tree.left,del,null));
}
} else
{return null;
}
} else
{return null;
}
}
}
} else
{return null;
}
});
cljs.core.tree_map_replace = (function tree_map_replace(comp,tree,k,v){
var tk = tree.key;
var c = (comp.cljs$lang$arity$2 ? comp.cljs$lang$arity$2(k,tk) : comp.call(null,k,tk));
if((c === 0))
{return tree.replace(tk,v,tree.left,tree.right);
} else
{if((c < 0))
{return tree.replace(tk,tree.val,tree_map_replace(comp,tree.left,k,v),tree.right);
} else
{if("\uFDD0:else")
{return tree.replace(tk,tree.val,tree.left,tree_map_replace(comp,tree.right,k,v));
} else
{return null;
}
}
}
});
cljs.core.key = undefined;
goog.provide('cljs.core.PersistentTreeMap');

/**
* @constructor
*/
cljs.core.PersistentTreeMap = (function (comp,tree,cnt,meta,__hash){
this.comp = comp;
this.tree = tree;
this.cnt = cnt;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 418776847;
})
cljs.core.PersistentTreeMap.cljs$lang$type = true;
cljs.core.PersistentTreeMap.cljs$lang$ctorPrSeq = (function (this__5785__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/PersistentTreeMap");
});
cljs.core.PersistentTreeMap.cljs$lang$ctorPrWriter = (function (this__5785__auto__,writer__5786__auto__,opt__5787__auto__){
return cljs.core._write(writer__5786__auto__,"cljs.core/PersistentTreeMap");
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__5666__auto__ = self__.__hash;
if(!((h__5666__auto__ == null)))
{return h__5666__auto__;
} else
{var h__5666__auto____$1 = cljs.core.hash_imap(coll);
self__.__hash = h__5666__auto____$1;
return h__5666__auto____$1;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
var n = coll.entry_at(k);
if(!((n == null)))
{return n.val;
} else
{return not_found;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var self__ = this;
var found = [null];
var t = cljs.core.tree_map_add(self__.comp,self__.tree,k,v,found);
if((t == null))
{var found_node = cljs.core.nth.cljs$lang$arity$2(found,0);
if(cljs.core._EQ_.cljs$lang$arity$2(v,found_node.val))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(self__.comp,cljs.core.tree_map_replace(self__.comp,self__.tree,k,v),self__.cnt,self__.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(self__.comp,t.blacken(),(self__.cnt + 1),self__.meta,null));
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var self__ = this;
return !((coll.entry_at(k) == null));
});
cljs.core.PersistentTreeMap.prototype.call = (function() {
var G__26082 = null;
var G__26082__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$2(coll,k);
});
var G__26082__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,not_found);
});
G__26082 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__26082__2.call(this,self__,k);
case 3:
return G__26082__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__26082;
})()
;
cljs.core.PersistentTreeMap.prototype.apply = (function (self__,args26081){
var self__ = this;
return self__.call.apply(self__,[self__].concat(args26081.slice()));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var self__ = this;
if(!((self__.tree == null)))
{return cljs.core.tree_map_kv_reduce(self__.tree,f,init);
} else
{return init;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var self__ = this;
if(cljs.core.vector_QMARK_(entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.cljs$lang$arity$2(entry,0),cljs.core._nth.cljs$lang$arity$2(entry,1));
} else
{return cljs.core.reduce.cljs$lang$arity$3(cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var self__ = this;
if((self__.cnt > 0))
{return cljs.core.create_tree_map_seq(self__.tree,false,self__.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return (cljs.core.pr_str.cljs$lang$arity$1 ? cljs.core.pr_str.cljs$lang$arity$1(this$) : cljs.core.pr_str.call(null,this$));
});
cljs.core.PersistentTreeMap.prototype.entry_at = (function (k){
var self__ = this;
var coll = this;
var t = self__.tree;
while(true){
if(!((t == null)))
{var c = (self__.comp.cljs$lang$arity$2 ? self__.comp.cljs$lang$arity$2(k,t.key) : self__.comp.call(null,k,t.key));
if((c === 0))
{return t;
} else
{if((c < 0))
{{
var G__26083 = t.left;
t = G__26083;
continue;
}
} else
{if("\uFDD0:else")
{{
var G__26084 = t.right;
t = G__26084;
continue;
}
} else
{return null;
}
}
}
} else
{return null;
}
break;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var self__ = this;
if((self__.cnt > 0))
{return cljs.core.create_tree_map_seq(self__.tree,ascending_QMARK_,self__.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var self__ = this;
if((self__.cnt > 0))
{var stack = null;
var t = self__.tree;
while(true){
if(!((t == null)))
{var c = (self__.comp.cljs$lang$arity$2 ? self__.comp.cljs$lang$arity$2(k,t.key) : self__.comp.call(null,k,t.key));
if((c === 0))
{return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.conj.cljs$lang$arity$2(stack,t),ascending_QMARK_,-1,null));
} else
{if(cljs.core.truth_(ascending_QMARK_))
{if((c < 0))
{{
var G__26085 = cljs.core.conj.cljs$lang$arity$2(stack,t);
var G__26086 = t.left;
stack = G__26085;
t = G__26086;
continue;
}
} else
{{
var G__26087 = stack;
var G__26088 = t.right;
stack = G__26087;
t = G__26088;
continue;
}
}
} else
{if("\uFDD0:else")
{if((c > 0))
{{
var G__26089 = cljs.core.conj.cljs$lang$arity$2(stack,t);
var G__26090 = t.right;
stack = G__26089;
t = G__26090;
continue;
}
} else
{{
var G__26091 = stack;
var G__26092 = t.left;
stack = G__26091;
t = G__26092;
continue;
}
}
} else
{return null;
}
}
}
} else
{if((stack == null))
{return null;
} else
{return (new cljs.core.PersistentTreeMapSeq(null,stack,ascending_QMARK_,-1,null));
}
}
break;
}
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var self__ = this;
return (cljs.core.key.cljs$lang$arity$1 ? cljs.core.key.cljs$lang$arity$1(entry) : cljs.core.key.call(null,entry));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var self__ = this;
return self__.comp;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
if((self__.cnt > 0))
{return cljs.core.create_tree_map_seq(self__.tree,true,self__.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
return self__.cnt;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return cljs.core.equiv_map(coll,other);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
return (new cljs.core.PersistentTreeMap(self__.comp,self__.tree,self__.cnt,meta__$1,self__.__hash));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return cljs.core.with_meta(cljs.core.PersistentTreeMap.EMPTY,self__.meta);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var self__ = this;
var found = [null];
var t = cljs.core.tree_map_remove(self__.comp,self__.tree,k,found);
if((t == null))
{if((cljs.core.nth.cljs$lang$arity$2(found,0) == null))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(self__.comp,null,0,self__.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(self__.comp,t.blacken(),(self__.cnt - 1),self__.meta,null));
}
});
cljs.core.PersistentTreeMap.EMPTY = (new cljs.core.PersistentTreeMap(cljs.core.compare,null,0,null,0));
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in$ = cljs.core.seq(keyvals);
var out = cljs.core.transient$(cljs.core.PersistentHashMap.EMPTY);
while(true){
if(in$)
{{
var G__26093 = cljs.core.nnext(in$);
var G__26094 = cljs.core.assoc_BANG_(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__26093;
out = G__26094;
continue;
}
} else
{return cljs.core.persistent_BANG_(out);
}
break;
}
};
var hash_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return hash_map__delegate.call(this, keyvals);
};
hash_map.cljs$lang$maxFixedArity = 0;
hash_map.cljs$lang$applyTo = (function (arglist__26095){
var keyvals = cljs.core.seq(arglist__26095);;
return hash_map__delegate(keyvals);
});
hash_map.cljs$lang$arity$variadic = hash_map__delegate;
return hash_map;
})()
;
/**
* keyval => key val
* Returns a new array map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.array_map = (function() { 
var array_map__delegate = function (keyvals){
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot(cljs.core.count(keyvals),2),cljs.core.apply.cljs$lang$arity$2(cljs.core.array,keyvals),null));
};
var array_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return array_map__delegate.call(this, keyvals);
};
array_map.cljs$lang$maxFixedArity = 0;
array_map.cljs$lang$applyTo = (function (arglist__26096){
var keyvals = cljs.core.seq(arglist__26096);;
return array_map__delegate(keyvals);
});
array_map.cljs$lang$arity$variadic = array_map__delegate;
return array_map;
})()
;
/**
* keyval => key val
* Returns a new object map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.obj_map = (function() { 
var obj_map__delegate = function (keyvals){
var ks = [];
var obj = {};
var kvs = cljs.core.seq(keyvals);
while(true){
if(kvs)
{ks.push(cljs.core.first(kvs));
(obj[cljs.core.first(kvs)] = cljs.core.second(kvs));
{
var G__26097 = cljs.core.nnext(kvs);
kvs = G__26097;
continue;
}
} else
{return (cljs.core.ObjMap.fromObject.cljs$lang$arity$2 ? cljs.core.ObjMap.fromObject.cljs$lang$arity$2(ks,obj) : cljs.core.ObjMap.fromObject.call(null,ks,obj));
}
break;
}
};
var obj_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return obj_map__delegate.call(this, keyvals);
};
obj_map.cljs$lang$maxFixedArity = 0;
obj_map.cljs$lang$applyTo = (function (arglist__26098){
var keyvals = cljs.core.seq(arglist__26098);;
return obj_map__delegate(keyvals);
});
obj_map.cljs$lang$arity$variadic = obj_map__delegate;
return obj_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.sorted_map = (function() { 
var sorted_map__delegate = function (keyvals){
var in$ = cljs.core.seq(keyvals);
var out = cljs.core.PersistentTreeMap.EMPTY;
while(true){
if(in$)
{{
var G__26099 = cljs.core.nnext(in$);
var G__26100 = cljs.core.assoc.cljs$lang$arity$3(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__26099;
out = G__26100;
continue;
}
} else
{return out;
}
break;
}
};
var sorted_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return sorted_map__delegate.call(this, keyvals);
};
sorted_map.cljs$lang$maxFixedArity = 0;
sorted_map.cljs$lang$applyTo = (function (arglist__26101){
var keyvals = cljs.core.seq(arglist__26101);;
return sorted_map__delegate(keyvals);
});
sorted_map.cljs$lang$arity$variadic = sorted_map__delegate;
return sorted_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings, using the supplied comparator.
* @param {...*} var_args
*/
cljs.core.sorted_map_by = (function() { 
var sorted_map_by__delegate = function (comparator,keyvals){
var in$ = cljs.core.seq(keyvals);
var out = (new cljs.core.PersistentTreeMap(cljs.core.fn__GT_comparator(comparator),null,0,null,0));
while(true){
if(in$)
{{
var G__26102 = cljs.core.nnext(in$);
var G__26103 = cljs.core.assoc.cljs$lang$arity$3(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__26102;
out = G__26103;
continue;
}
} else
{return out;
}
break;
}
};
var sorted_map_by = function (comparator,var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return sorted_map_by__delegate.call(this, comparator, keyvals);
};
sorted_map_by.cljs$lang$maxFixedArity = 1;
sorted_map_by.cljs$lang$applyTo = (function (arglist__26104){
var comparator = cljs.core.first(arglist__26104);
var keyvals = cljs.core.rest(arglist__26104);
return sorted_map_by__delegate(comparator, keyvals);
});
sorted_map_by.cljs$lang$arity$variadic = sorted_map_by__delegate;
return sorted_map_by;
})()
;
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){
return cljs.core.seq(cljs.core.map.cljs$lang$arity$2(cljs.core.first,hash_map));
});
/**
* Returns the key of the map entry.
*/
cljs.core.key = (function key(map_entry){
return cljs.core._key(map_entry);
});
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){
return cljs.core.seq(cljs.core.map.cljs$lang$arity$2(cljs.core.second,hash_map));
});
/**
* Returns the value in the map entry.
*/
cljs.core.val = (function val(map_entry){
return cljs.core._val(map_entry);
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function() { 
var merge__delegate = function (maps){
if(cljs.core.truth_(cljs.core.some(cljs.core.identity,maps)))
{return cljs.core.reduce.cljs$lang$arity$2((function (p1__26105_SHARP_,p2__26106_SHARP_){
return cljs.core.conj.cljs$lang$arity$2((function (){var or__3943__auto__ = p1__26105_SHARP_;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),p2__26106_SHARP_);
}),maps);
} else
{return null;
}
};
var merge = function (var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return merge__delegate.call(this, maps);
};
merge.cljs$lang$maxFixedArity = 0;
merge.cljs$lang$applyTo = (function (arglist__26107){
var maps = cljs.core.seq(arglist__26107);;
return merge__delegate(maps);
});
merge.cljs$lang$arity$variadic = merge__delegate;
return merge;
})()
;
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by calling (f val-in-result val-in-latter).
* @param {...*} var_args
*/
cljs.core.merge_with = (function() { 
var merge_with__delegate = function (f,maps){
if(cljs.core.truth_(cljs.core.some(cljs.core.identity,maps)))
{var merge_entry = (function (m,e){
var k = cljs.core.first(e);
var v = cljs.core.second(e);
if(cljs.core.contains_QMARK_(m,k))
{return cljs.core.assoc.cljs$lang$arity$3(m,k,(f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(cljs.core._lookup.cljs$lang$arity$3(m,k,null),v) : f.call(null,cljs.core._lookup.cljs$lang$arity$3(m,k,null),v)));
} else
{return cljs.core.assoc.cljs$lang$arity$3(m,k,v);
}
});
var merge2 = ((function (merge_entry){
return (function (m1,m2){
return cljs.core.reduce.cljs$lang$arity$3(merge_entry,(function (){var or__3943__auto__ = m1;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),cljs.core.seq(m2));
});})(merge_entry))
;
return cljs.core.reduce.cljs$lang$arity$2(merge2,maps);
} else
{return null;
}
};
var merge_with = function (f,var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return merge_with__delegate.call(this, f, maps);
};
merge_with.cljs$lang$maxFixedArity = 1;
merge_with.cljs$lang$applyTo = (function (arglist__26108){
var f = cljs.core.first(arglist__26108);
var maps = cljs.core.rest(arglist__26108);
return merge_with__delegate(f, maps);
});
merge_with.cljs$lang$arity$variadic = merge_with__delegate;
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret = cljs.core.ObjMap.EMPTY;
var keys = cljs.core.seq(keyseq);
while(true){
if(keys)
{var key = cljs.core.first(keys);
var entry = cljs.core._lookup.cljs$lang$arity$3(map,key,"\uFDD0:cljs.core/not-found");
{
var G__26109 = ((cljs.core.not_EQ_.cljs$lang$arity$2(entry,"\uFDD0:cljs.core/not-found"))?cljs.core.assoc.cljs$lang$arity$3(ret,key,entry):ret);
var G__26110 = cljs.core.next(keys);
ret = G__26109;
keys = G__26110;
continue;
}
} else
{return ret;
}
break;
}
});
cljs.core.TransientHashSet = undefined;
goog.provide('cljs.core.PersistentHashSet');

/**
* @constructor
*/
cljs.core.PersistentHashSet = (function (meta,hash_map,__hash){
this.meta = meta;
this.hash_map = hash_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 4;
this.cljs$lang$protocol_mask$partition0$ = 15077647;
})
cljs.core.PersistentHashSet.cljs$lang$type = true;
cljs.core.PersistentHashSet.cljs$lang$ctorPrSeq = (function (this__5785__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/PersistentHashSet");
});
cljs.core.PersistentHashSet.cljs$lang$ctorPrWriter = (function (this__5785__auto__,writer__5786__auto__,opt__5787__auto__){
return cljs.core._write(writer__5786__auto__,"cljs.core/PersistentHashSet");
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var self__ = this;
return (new cljs.core.TransientHashSet(cljs.core.transient$(self__.hash_map)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__5666__auto__ = self__.__hash;
if(!((h__5666__auto__ == null)))
{return h__5666__auto__;
} else
{var h__5666__auto____$1 = cljs.core.hash_iset(coll);
self__.__hash = h__5666__auto____$1;
return h__5666__auto____$1;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var self__ = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var self__ = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_(self__.hash_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentHashSet.prototype.call = (function() {
var G__26113 = null;
var G__26113__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$2(coll,k);
});
var G__26113__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,not_found);
});
G__26113 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__26113__2.call(this,self__,k);
case 3:
return G__26113__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__26113;
})()
;
cljs.core.PersistentHashSet.prototype.apply = (function (self__,args26112){
var self__ = this;
return self__.call.apply(self__,[self__].concat(args26112.slice()));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
return (new cljs.core.PersistentHashSet(self__.meta,cljs.core.assoc.cljs$lang$arity$3(self__.hash_map,o,null),null));
});
cljs.core.PersistentHashSet.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return (cljs.core.pr_str.cljs$lang$arity$1 ? cljs.core.pr_str.cljs$lang$arity$1(this$) : cljs.core.pr_str.call(null,this$));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
return cljs.core.keys(self__.hash_map);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var self__ = this;
return (new cljs.core.PersistentHashSet(self__.meta,cljs.core.dissoc.cljs$lang$arity$2(self__.hash_map,v),null));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
return cljs.core.count(cljs.core.seq(coll));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var and__3941__auto__ = cljs.core.set_QMARK_(other);
if(and__3941__auto__)
{var and__3941__auto____$1 = (cljs.core.count(coll) === cljs.core.count(other));
if(and__3941__auto____$1)
{return cljs.core.every_QMARK_((function (p1__26111_SHARP_){
return cljs.core.contains_QMARK_(coll,p1__26111_SHARP_);
}),other);
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
return (new cljs.core.PersistentHashSet(meta__$1,self__.hash_map,self__.__hash));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return cljs.core.with_meta(cljs.core.PersistentHashSet.EMPTY,self__.meta);
});
cljs.core.PersistentHashSet.EMPTY = (new cljs.core.PersistentHashSet(null,cljs.core.hash_map(),0));
cljs.core.PersistentHashSet.fromArray = (function (items){
var len = cljs.core.count(items);
var i = 0;
var out = cljs.core.transient$(cljs.core.PersistentHashSet.EMPTY);
while(true){
if((i < len))
{{
var G__26114 = (i + 1);
var G__26115 = cljs.core.conj_BANG_(out,(items[i]));
i = G__26114;
out = G__26115;
continue;
}
} else
{return cljs.core.persistent_BANG_(out);
}
break;
}
});
goog.provide('cljs.core.TransientHashSet');

/**
* @constructor
*/
cljs.core.TransientHashSet = (function (transient_map){
this.transient_map = transient_map;
this.cljs$lang$protocol_mask$partition0$ = 259;
this.cljs$lang$protocol_mask$partition1$ = 136;
})
cljs.core.TransientHashSet.cljs$lang$type = true;
cljs.core.TransientHashSet.cljs$lang$ctorPrSeq = (function (this__5785__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/TransientHashSet");
});
cljs.core.TransientHashSet.cljs$lang$ctorPrWriter = (function (this__5785__auto__,writer__5786__auto__,opt__5787__auto__){
return cljs.core._write(writer__5786__auto__,"cljs.core/TransientHashSet");
});
cljs.core.TransientHashSet.prototype.call = (function() {
var G__26118 = null;
var G__26118__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var tcoll = self____$1;
if((cljs.core._lookup.cljs$lang$arity$3(self__.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return null;
} else
{return k;
}
});
var G__26118__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var tcoll = self____$1;
if((cljs.core._lookup.cljs$lang$arity$3(self__.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return k;
}
});
G__26118 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__26118__2.call(this,self__,k);
case 3:
return G__26118__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__26118;
})()
;
cljs.core.TransientHashSet.prototype.apply = (function (self__,args26117){
var self__ = this;
return self__.call.apply(self__,[self__].concat(args26117.slice()));
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,v){
var self__ = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,v,null);
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,v,not_found){
var self__ = this;
if((cljs.core._lookup.cljs$lang$arity$3(self__.transient_map,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return v;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var self__ = this;
return cljs.core.count(self__.transient_map);
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (tcoll,v){
var self__ = this;
self__.transient_map = cljs.core.dissoc_BANG_(self__.transient_map,v);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var self__ = this;
self__.transient_map = cljs.core.assoc_BANG_(self__.transient_map,o,null);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var self__ = this;
return (new cljs.core.PersistentHashSet(null,cljs.core.persistent_BANG_(self__.transient_map),null));
});
goog.provide('cljs.core.PersistentTreeSet');

/**
* @constructor
*/
cljs.core.PersistentTreeSet = (function (meta,tree_map,__hash){
this.meta = meta;
this.tree_map = tree_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 417730831;
})
cljs.core.PersistentTreeSet.cljs$lang$type = true;
cljs.core.PersistentTreeSet.cljs$lang$ctorPrSeq = (function (this__5785__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/PersistentTreeSet");
});
cljs.core.PersistentTreeSet.cljs$lang$ctorPrWriter = (function (this__5785__auto__,writer__5786__auto__,opt__5787__auto__){
return cljs.core._write(writer__5786__auto__,"cljs.core/PersistentTreeSet");
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__5666__auto__ = self__.__hash;
if(!((h__5666__auto__ == null)))
{return h__5666__auto__;
} else
{var h__5666__auto____$1 = cljs.core.hash_iset(coll);
self__.__hash = h__5666__auto____$1;
return h__5666__auto____$1;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var self__ = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var self__ = this;
var n = self__.tree_map.entry_at(v);
if(!((n == null)))
{return n.key;
} else
{return not_found;
}
});
cljs.core.PersistentTreeSet.prototype.call = (function() {
var G__26120 = null;
var G__26120__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$2(coll,k);
});
var G__26120__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,not_found);
});
G__26120 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__26120__2.call(this,self__,k);
case 3:
return G__26120__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__26120;
})()
;
cljs.core.PersistentTreeSet.prototype.apply = (function (self__,args26119){
var self__ = this;
return self__.call.apply(self__,[self__].concat(args26119.slice()));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
return (new cljs.core.PersistentTreeSet(self__.meta,cljs.core.assoc.cljs$lang$arity$3(self__.tree_map,o,null),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var self__ = this;
return cljs.core.map.cljs$lang$arity$2(cljs.core.key,cljs.core.rseq(self__.tree_map));
});
cljs.core.PersistentTreeSet.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return (cljs.core.pr_str.cljs$lang$arity$1 ? cljs.core.pr_str.cljs$lang$arity$1(this$) : cljs.core.pr_str.call(null,this$));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var self__ = this;
return cljs.core.map.cljs$lang$arity$2(cljs.core.key,cljs.core._sorted_seq(self__.tree_map,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var self__ = this;
return cljs.core.map.cljs$lang$arity$2(cljs.core.key,cljs.core._sorted_seq_from(self__.tree_map,k,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var self__ = this;
return entry;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var self__ = this;
return cljs.core._comparator(self__.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
return cljs.core.keys(self__.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var self__ = this;
return (new cljs.core.PersistentTreeSet(self__.meta,cljs.core.dissoc.cljs$lang$arity$2(self__.tree_map,v),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
return cljs.core.count(self__.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var and__3941__auto__ = cljs.core.set_QMARK_(other);
if(and__3941__auto__)
{var and__3941__auto____$1 = (cljs.core.count(coll) === cljs.core.count(other));
if(and__3941__auto____$1)
{return cljs.core.every_QMARK_((function (p1__26116_SHARP_){
return cljs.core.contains_QMARK_(coll,p1__26116_SHARP_);
}),other);
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
return (new cljs.core.PersistentTreeSet(meta__$1,self__.tree_map,self__.__hash));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return cljs.core.with_meta(cljs.core.PersistentTreeSet.EMPTY,self__.meta);
});
cljs.core.PersistentTreeSet.EMPTY = (new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map(),0));
/**
* @param {...*} var_args
*/
cljs.core.hash_set = (function() {
var hash_set = null;
var hash_set__0 = (function (){
return cljs.core.PersistentHashSet.EMPTY;
});
var hash_set__1 = (function() { 
var G__26121__delegate = function (keys){
var in$ = cljs.core.seq(keys);
var out = cljs.core.transient$(cljs.core.PersistentHashSet.EMPTY);
while(true){
if(cljs.core.seq(in$))
{{
var G__26122 = cljs.core.next(in$);
var G__26123 = cljs.core.conj_BANG_(out,cljs.core.first(in$));
in$ = G__26122;
out = G__26123;
continue;
}
} else
{return cljs.core.persistent_BANG_(out);
}
break;
}
};
var G__26121 = function (var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__26121__delegate.call(this, keys);
};
G__26121.cljs$lang$maxFixedArity = 0;
G__26121.cljs$lang$applyTo = (function (arglist__26124){
var keys = cljs.core.seq(arglist__26124);;
return G__26121__delegate(keys);
});
G__26121.cljs$lang$arity$variadic = G__26121__delegate;
return G__26121;
})()
;
hash_set = function(var_args){
var keys = var_args;
switch(arguments.length){
case 0:
return hash_set__0.call(this);
default:
return hash_set__1.cljs$lang$arity$variadic(cljs.core.array_seq(arguments, 0));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hash_set.cljs$lang$maxFixedArity = 0;
hash_set.cljs$lang$applyTo = hash_set__1.cljs$lang$applyTo;
hash_set.cljs$lang$arity$0 = hash_set__0;
hash_set.cljs$lang$arity$variadic = hash_set__1.cljs$lang$arity$variadic;
return hash_set;
})()
;
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
return cljs.core.apply.cljs$lang$arity$2(cljs.core.hash_set,coll);
});
/**
* Returns a new sorted set with supplied keys.
* @param {...*} var_args
*/
cljs.core.sorted_set = (function() { 
var sorted_set__delegate = function (keys){
return cljs.core.reduce.cljs$lang$arity$3(cljs.core._conj,cljs.core.PersistentTreeSet.EMPTY,keys);
};
var sorted_set = function (var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return sorted_set__delegate.call(this, keys);
};
sorted_set.cljs$lang$maxFixedArity = 0;
sorted_set.cljs$lang$applyTo = (function (arglist__26125){
var keys = cljs.core.seq(arglist__26125);;
return sorted_set__delegate(keys);
});
sorted_set.cljs$lang$arity$variadic = sorted_set__delegate;
return sorted_set;
})()
;
/**
* Returns a new sorted set with supplied keys, using the supplied comparator.
* @param {...*} var_args
*/
cljs.core.sorted_set_by = (function() { 
var sorted_set_by__delegate = function (comparator,keys){
return cljs.core.reduce.cljs$lang$arity$3(cljs.core._conj,(new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map_by(comparator),0)),keys);
};
var sorted_set_by = function (comparator,var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return sorted_set_by__delegate.call(this, comparator, keys);
};
sorted_set_by.cljs$lang$maxFixedArity = 1;
sorted_set_by.cljs$lang$applyTo = (function (arglist__26127){
var comparator = cljs.core.first(arglist__26127);
var keys = cljs.core.rest(arglist__26127);
return sorted_set_by__delegate(comparator, keys);
});
sorted_set_by.cljs$lang$arity$variadic = sorted_set_by__delegate;
return sorted_set_by;
})()
;
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap
*/
cljs.core.replace = (function replace(smap,coll){
if(cljs.core.vector_QMARK_(coll))
{var n = cljs.core.count(coll);
return cljs.core.reduce.cljs$lang$arity$3((function (v,i){
var temp__4090__auto__ = cljs.core.find(smap,cljs.core.nth.cljs$lang$arity$2(v,i));
if(cljs.core.truth_(temp__4090__auto__))
{var e = temp__4090__auto__;
return cljs.core.assoc.cljs$lang$arity$3(v,i,cljs.core.second(e));
} else
{return v;
}
}),coll,cljs.core.take(n,cljs.core.iterate(cljs.core.inc,0)));
} else
{return cljs.core.map.cljs$lang$arity$2((function (p1__26126_SHARP_){
var temp__4090__auto__ = cljs.core.find(smap,p1__26126_SHARP_);
if(cljs.core.truth_(temp__4090__auto__))
{var e = temp__4090__auto__;
return cljs.core.second(e);
} else
{return p1__26126_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__26134,seen__$1){
while(true){
var vec__26135 = p__26134;
var f = cljs.core.nth.cljs$lang$arity$3(vec__26135,0,null);
var xs__$1 = vec__26135;
var temp__4092__auto__ = cljs.core.seq(xs__$1);
if(temp__4092__auto__)
{var s = temp__4092__auto__;
if(cljs.core.contains_QMARK_(seen__$1,f))
{{
var G__26136 = cljs.core.rest(s);
var G__26137 = seen__$1;
p__26134 = G__26136;
seen__$1 = G__26137;
continue;
}
} else
{return cljs.core.cons(f,step(cljs.core.rest(s),cljs.core.conj.cljs$lang$arity$2(seen__$1,f)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
}),null));
});
return step(coll,cljs.core.PersistentHashSet.EMPTY);
});
cljs.core.butlast = (function butlast(s){
var ret = cljs.core.PersistentVector.EMPTY;
var s__$1 = s;
while(true){
if(cljs.core.next(s__$1))
{{
var G__26138 = cljs.core.conj.cljs$lang$arity$2(ret,cljs.core.first(s__$1));
var G__26139 = cljs.core.next(s__$1);
ret = G__26138;
s__$1 = G__26139;
continue;
}
} else
{return cljs.core.seq(ret);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){
if(cljs.core.string_QMARK_(x))
{return x;
} else
{if(cljs.core.truth_((function (){var or__3943__auto__ = cljs.core.keyword_QMARK_(x);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return cljs.core.symbol_QMARK_(x);
}
})()))
{var i = x.lastIndexOf("/",(x.length - 2));
if((i < 0))
{return cljs.core.subs.cljs$lang$arity$2(x,2);
} else
{return cljs.core.subs.cljs$lang$arity$2(x,(i + 1));
}
} else
{if("\uFDD0:else")
{throw (new Error([cljs.core.str("Doesn't support name: "),cljs.core.str(x)].join('')));
} else
{return null;
}
}
}
});
/**
* Returns the namespace String of a symbol or keyword, or nil if not present.
*/
cljs.core.namespace = (function namespace(x){
if(cljs.core.truth_((function (){var or__3943__auto__ = cljs.core.keyword_QMARK_(x);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return cljs.core.symbol_QMARK_(x);
}
})()))
{var i = x.lastIndexOf("/",(x.length - 2));
if((i > -1))
{return cljs.core.subs.cljs$lang$arity$3(x,2,i);
} else
{return null;
}
} else
{throw (new Error([cljs.core.str("Doesn't support namespace: "),cljs.core.str(x)].join('')));
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){
var map = cljs.core.ObjMap.EMPTY;
var ks = cljs.core.seq(keys);
var vs = cljs.core.seq(vals);
while(true){
if(cljs.core.truth_((function (){var and__3941__auto__ = ks;
if(and__3941__auto__)
{return vs;
} else
{return and__3941__auto__;
}
})()))
{{
var G__26142 = cljs.core.assoc.cljs$lang$arity$3(map,cljs.core.first(ks),cljs.core.first(vs));
var G__26143 = cljs.core.next(ks);
var G__26144 = cljs.core.next(vs);
map = G__26142;
ks = G__26143;
vs = G__26144;
continue;
}
} else
{return map;
}
break;
}
});
/**
* Returns the x for which (k x), a number, is greatest.
* @param {...*} var_args
*/
cljs.core.max_key = (function() {
var max_key = null;
var max_key__2 = (function (k,x){
return x;
});
var max_key__3 = (function (k,x,y){
if(((k.cljs$lang$arity$1 ? k.cljs$lang$arity$1(x) : k.call(null,x)) > (k.cljs$lang$arity$1 ? k.cljs$lang$arity$1(y) : k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__4 = (function() { 
var G__26147__delegate = function (k,x,y,more){
return cljs.core.reduce.cljs$lang$arity$3((function (p1__26140_SHARP_,p2__26141_SHARP_){
return max_key.cljs$lang$arity$3(k,p1__26140_SHARP_,p2__26141_SHARP_);
}),max_key.cljs$lang$arity$3(k,x,y),more);
};
var G__26147 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__26147__delegate.call(this, k, x, y, more);
};
G__26147.cljs$lang$maxFixedArity = 3;
G__26147.cljs$lang$applyTo = (function (arglist__26148){
var k = cljs.core.first(arglist__26148);
var x = cljs.core.first(cljs.core.next(arglist__26148));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__26148)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__26148)));
return G__26147__delegate(k, x, y, more);
});
G__26147.cljs$lang$arity$variadic = G__26147__delegate;
return G__26147;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return max_key__2.call(this,k,x);
case 3:
return max_key__3.call(this,k,x,y);
default:
return max_key__4.cljs$lang$arity$variadic(k,x,y, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__4.cljs$lang$applyTo;
max_key.cljs$lang$arity$2 = max_key__2;
max_key.cljs$lang$arity$3 = max_key__3;
max_key.cljs$lang$arity$variadic = max_key__4.cljs$lang$arity$variadic;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__2 = (function (k,x){
return x;
});
var min_key__3 = (function (k,x,y){
if(((k.cljs$lang$arity$1 ? k.cljs$lang$arity$1(x) : k.call(null,x)) < (k.cljs$lang$arity$1 ? k.cljs$lang$arity$1(y) : k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__4 = (function() { 
var G__26149__delegate = function (k,x,y,more){
return cljs.core.reduce.cljs$lang$arity$3((function (p1__26145_SHARP_,p2__26146_SHARP_){
return min_key.cljs$lang$arity$3(k,p1__26145_SHARP_,p2__26146_SHARP_);
}),min_key.cljs$lang$arity$3(k,x,y),more);
};
var G__26149 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__26149__delegate.call(this, k, x, y, more);
};
G__26149.cljs$lang$maxFixedArity = 3;
G__26149.cljs$lang$applyTo = (function (arglist__26150){
var k = cljs.core.first(arglist__26150);
var x = cljs.core.first(cljs.core.next(arglist__26150));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__26150)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__26150)));
return G__26149__delegate(k, x, y, more);
});
G__26149.cljs$lang$arity$variadic = G__26149__delegate;
return G__26149;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return min_key__2.call(this,k,x);
case 3:
return min_key__3.call(this,k,x,y);
default:
return min_key__4.cljs$lang$arity$variadic(k,x,y, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__4.cljs$lang$applyTo;
min_key.cljs$lang$arity$2 = min_key__2;
min_key.cljs$lang$arity$3 = min_key__3;
min_key.cljs$lang$arity$variadic = min_key__4.cljs$lang$arity$variadic;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__2 = (function (n,coll){
return partition_all.cljs$lang$arity$3(n,n,coll);
});
var partition_all__3 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4092__auto__ = cljs.core.seq(coll);
if(temp__4092__auto__)
{var s = temp__4092__auto__;
return cljs.core.cons(cljs.core.take(n,s),partition_all.cljs$lang$arity$3(n,step,cljs.core.drop(step,s)));
} else
{return null;
}
}),null));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case 2:
return partition_all__2.call(this,n,step);
case 3:
return partition_all__3.call(this,n,step,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_all.cljs$lang$arity$2 = partition_all__2;
partition_all.cljs$lang$arity$3 = partition_all__3;
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.take_while = (function take_while(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4092__auto__ = cljs.core.seq(coll);
if(temp__4092__auto__)
{var s = temp__4092__auto__;
if(cljs.core.truth_((pred.cljs$lang$arity$1 ? pred.cljs$lang$arity$1(cljs.core.first(s)) : pred.call(null,cljs.core.first(s)))))
{return cljs.core.cons(cljs.core.first(s),take_while(pred,cljs.core.rest(s)));
} else
{return null;
}
} else
{return null;
}
}),null));
});
cljs.core.mk_bound_fn = (function mk_bound_fn(sc,test,key){
return (function (e){
var comp = cljs.core._comparator(sc);
return (test.cljs$lang$arity$2 ? test.cljs$lang$arity$2((comp.cljs$lang$arity$2 ? comp.cljs$lang$arity$2(cljs.core._entry_key(sc,e),key) : comp.call(null,cljs.core._entry_key(sc,e),key)),0) : test.call(null,(comp.cljs$lang$arity$2 ? comp.cljs$lang$arity$2(cljs.core._entry_key(sc,e),key) : comp.call(null,cljs.core._entry_key(sc,e),key)),0));
});
});
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
cljs.core.subseq = (function() {
var subseq = null;
var subseq__3 = (function (sc,test,key){
var include = cljs.core.mk_bound_fn(sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._GT_,cljs.core._GT__EQ_]).call(null,test)))
{var temp__4092__auto__ = cljs.core._sorted_seq_from(sc,key,true);
if(cljs.core.truth_(temp__4092__auto__))
{var vec__26153 = temp__4092__auto__;
var e = cljs.core.nth.cljs$lang$arity$3(vec__26153,0,null);
var s = vec__26153;
if(cljs.core.truth_((include.cljs$lang$arity$1 ? include.cljs$lang$arity$1(e) : include.call(null,e))))
{return s;
} else
{return cljs.core.next(s);
}
} else
{return null;
}
} else
{return cljs.core.take_while(include,cljs.core._sorted_seq(sc,true));
}
});
var subseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__4092__auto__ = cljs.core._sorted_seq_from(sc,start_key,true);
if(cljs.core.truth_(temp__4092__auto__))
{var vec__26154 = temp__4092__auto__;
var e = cljs.core.nth.cljs$lang$arity$3(vec__26154,0,null);
var s = vec__26154;
return cljs.core.take_while(cljs.core.mk_bound_fn(sc,end_test,end_key),(cljs.core.truth_(cljs.core.mk_bound_fn(sc,start_test,start_key).call(null,e))?s:cljs.core.next(s)));
} else
{return null;
}
});
subseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return subseq__3.call(this,sc,start_test,start_key);
case 5:
return subseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
subseq.cljs$lang$arity$3 = subseq__3;
subseq.cljs$lang$arity$5 = subseq__5;
return subseq;
})()
;
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a reverse seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
cljs.core.rsubseq = (function() {
var rsubseq = null;
var rsubseq__3 = (function (sc,test,key){
var include = cljs.core.mk_bound_fn(sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._LT_,cljs.core._LT__EQ_]).call(null,test)))
{var temp__4092__auto__ = cljs.core._sorted_seq_from(sc,key,false);
if(cljs.core.truth_(temp__4092__auto__))
{var vec__26157 = temp__4092__auto__;
var e = cljs.core.nth.cljs$lang$arity$3(vec__26157,0,null);
var s = vec__26157;
if(cljs.core.truth_((include.cljs$lang$arity$1 ? include.cljs$lang$arity$1(e) : include.call(null,e))))
{return s;
} else
{return cljs.core.next(s);
}
} else
{return null;
}
} else
{return cljs.core.take_while(include,cljs.core._sorted_seq(sc,false));
}
});
var rsubseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__4092__auto__ = cljs.core._sorted_seq_from(sc,end_key,false);
if(cljs.core.truth_(temp__4092__auto__))
{var vec__26158 = temp__4092__auto__;
var e = cljs.core.nth.cljs$lang$arity$3(vec__26158,0,null);
var s = vec__26158;
return cljs.core.take_while(cljs.core.mk_bound_fn(sc,start_test,start_key),(cljs.core.truth_(cljs.core.mk_bound_fn(sc,end_test,end_key).call(null,e))?s:cljs.core.next(s)));
} else
{return null;
}
});
rsubseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return rsubseq__3.call(this,sc,start_test,start_key);
case 5:
return rsubseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rsubseq.cljs$lang$arity$3 = rsubseq__3;
rsubseq.cljs$lang$arity$5 = rsubseq__5;
return rsubseq;
})()
;
goog.provide('cljs.core.Range');

/**
* @constructor
*/
cljs.core.Range = (function (meta,start,end,step,__hash){
this.meta = meta;
this.start = start;
this.end = end;
this.step = step;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32375006;
})
cljs.core.Range.cljs$lang$type = true;
cljs.core.Range.cljs$lang$ctorPrSeq = (function (this__5785__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/Range");
});
cljs.core.Range.cljs$lang$ctorPrWriter = (function (this__5785__auto__,writer__5786__auto__,opt__5787__auto__){
return cljs.core._write(writer__5786__auto__,"cljs.core/Range");
});
cljs.core.Range.prototype.cljs$core$IHash$_hash$arity$1 = (function (rng){
var self__ = this;
var h__5666__auto__ = self__.__hash;
if(!((h__5666__auto__ == null)))
{return h__5666__auto__;
} else
{var h__5666__auto____$1 = cljs.core.hash_coll(rng);
self__.__hash = h__5666__auto____$1;
return h__5666__auto____$1;
}
});
cljs.core.Range.prototype.cljs$core$INext$_next$arity$1 = (function (rng){
var self__ = this;
if((self__.step > 0))
{if(((self__.start + self__.step) < self__.end))
{return (new cljs.core.Range(self__.meta,(self__.start + self__.step),self__.end,self__.step,null));
} else
{return null;
}
} else
{if(((self__.start + self__.step) > self__.end))
{return (new cljs.core.Range(self__.meta,(self__.start + self__.step),self__.end,self__.step,null));
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICollection$_conj$arity$2 = (function (rng,o){
var self__ = this;
return cljs.core.cons(o,rng);
});
cljs.core.Range.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return (cljs.core.pr_str.cljs$lang$arity$1 ? cljs.core.pr_str.cljs$lang$arity$1(this$) : cljs.core.pr_str.call(null,this$));
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (rng,f){
var self__ = this;
return cljs.core.ci_reduce.cljs$lang$arity$2(rng,f);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (rng,f,s){
var self__ = this;
return cljs.core.ci_reduce.cljs$lang$arity$3(rng,f,s);
});
cljs.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (rng){
var self__ = this;
if((self__.step > 0))
{if((self__.start < self__.end))
{return rng;
} else
{return null;
}
} else
{if((self__.start > self__.end))
{return rng;
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICounted$_count$arity$1 = (function (rng){
var self__ = this;
if(cljs.core.not(rng.cljs$core$ISeqable$_seq$arity$1(rng)))
{return 0;
} else
{return Math.ceil(((self__.end - self__.start) / self__.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1 = (function (rng){
var self__ = this;
return self__.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1 = (function (rng){
var self__ = this;
if(!((rng.cljs$core$ISeqable$_seq$arity$1(rng) == null)))
{return (new cljs.core.Range(self__.meta,(self__.start + self__.step),self__.end,self__.step,null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (rng,other){
var self__ = this;
return cljs.core.equiv_sequential(rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (rng,meta__$1){
var self__ = this;
return (new cljs.core.Range(meta__$1,self__.start,self__.end,self__.step,self__.__hash));
});
cljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1 = (function (rng){
var self__ = this;
return self__.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (rng,n){
var self__ = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (self__.start + (n * self__.step));
} else
{if(cljs.core.truth_((function (){var and__3941__auto__ = (self__.start > self__.end);
if(and__3941__auto__)
{return (self__.step === 0);
} else
{return and__3941__auto__;
}
})()))
{return self__.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (rng,n,not_found){
var self__ = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (self__.start + (n * self__.step));
} else
{if(cljs.core.truth_((function (){var and__3941__auto__ = (self__.start > self__.end);
if(and__3941__auto__)
{return (self__.step === 0);
} else
{return and__3941__auto__;
}
})()))
{return self__.start;
} else
{return not_found;
}
}
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (rng){
var self__ = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__0 = (function (){
return range.cljs$lang$arity$3(0,Number.MAX_VALUE,1);
});
var range__1 = (function (end){
return range.cljs$lang$arity$3(0,end,1);
});
var range__2 = (function (start,end){
return range.cljs$lang$arity$3(start,end,1);
});
var range__3 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step,null));
});
range = function(start,end,step){
switch(arguments.length){
case 0:
return range__0.call(this);
case 1:
return range__1.call(this,start);
case 2:
return range__2.call(this,start,end);
case 3:
return range__3.call(this,start,end,step);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range.cljs$lang$arity$0 = range__0;
range.cljs$lang$arity$1 = range__1;
range.cljs$lang$arity$2 = range__2;
range.cljs$lang$arity$3 = range__3;
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.
*/
cljs.core.take_nth = (function take_nth(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4092__auto__ = cljs.core.seq(coll);
if(temp__4092__auto__)
{var s = temp__4092__auto__;
return cljs.core.cons(cljs.core.first(s),take_nth(n,cljs.core.drop(n,s)));
} else
{return null;
}
}),null));
});
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){
return cljs.core.PersistentVector.fromArray([cljs.core.take_while(pred,coll),cljs.core.drop_while(pred,coll)], true);
});
/**
* Applies f to each value in coll, splitting it each time f returns
* a new value.  Returns a lazy seq of partitions.
*/
cljs.core.partition_by = (function partition_by(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4092__auto__ = cljs.core.seq(coll);
if(temp__4092__auto__)
{var s = temp__4092__auto__;
var fst = cljs.core.first(s);
var fv = (f.cljs$lang$arity$1 ? f.cljs$lang$arity$1(fst) : f.call(null,fst));
var run = cljs.core.cons(fst,cljs.core.take_while(((function (fst,fv){
return (function (p1__26159_SHARP_){
return cljs.core._EQ_.cljs$lang$arity$2(fv,(f.cljs$lang$arity$1 ? f.cljs$lang$arity$1(p1__26159_SHARP_) : f.call(null,p1__26159_SHARP_)));
});})(fst,fv))
,cljs.core.next(s)));
return cljs.core.cons(run,partition_by(f,cljs.core.seq(cljs.core.drop(cljs.core.count(run),s))));
} else
{return null;
}
}),null));
});
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljs.core.frequencies = (function frequencies(coll){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$lang$arity$3((function (counts,x){
return cljs.core.assoc_BANG_(counts,x,(cljs.core._lookup.cljs$lang$arity$3(counts,x,0) + 1));
}),cljs.core.transient$(cljs.core.ObjMap.EMPTY),coll));
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4090__auto__ = cljs.core.seq(coll);
if(temp__4090__auto__)
{var s = temp__4090__auto__;
return reductions.cljs$lang$arity$3(f,cljs.core.first(s),cljs.core.rest(s));
} else
{return cljs.core.list.cljs$lang$arity$1((f.cljs$lang$arity$0 ? f.cljs$lang$arity$0() : f.call(null)));
}
}),null));
});
var reductions__3 = (function (f,init,coll){
return cljs.core.cons(init,(new cljs.core.LazySeq(null,false,(function (){
var temp__4092__auto__ = cljs.core.seq(coll);
if(temp__4092__auto__)
{var s = temp__4092__auto__;
return reductions.cljs$lang$arity$3(f,(f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(init,cljs.core.first(s)) : f.call(null,init,cljs.core.first(s))),cljs.core.rest(s));
} else
{return null;
}
}),null)));
});
reductions = function(f,init,coll){
switch(arguments.length){
case 2:
return reductions__2.call(this,f,init);
case 3:
return reductions__3.call(this,f,init,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reductions.cljs$lang$arity$2 = reductions__2;
reductions.cljs$lang$arity$3 = reductions__3;
return reductions;
})()
;
/**
* Takes a set of functions and returns a fn that is the juxtaposition
* of those fns.  The returned fn takes a variable number of args, and
* returns a vector containing the result of applying each fn to the
* args (left-to-right).
* ((juxt a b c) x) => [(a x) (b x) (c x)]
* @param {...*} var_args
*/
cljs.core.juxt = (function() {
var juxt = null;
var juxt__1 = (function (f){
return (function() {
var G__26170 = null;
var G__26170__0 = (function (){
return cljs.core.vector.cljs$lang$arity$variadic(cljs.core.array_seq([(f.cljs$lang$arity$0 ? f.cljs$lang$arity$0() : f.call(null))], 0));
});
var G__26170__1 = (function (x){
return cljs.core.vector.cljs$lang$arity$variadic(cljs.core.array_seq([(f.cljs$lang$arity$1 ? f.cljs$lang$arity$1(x) : f.call(null,x))], 0));
});
var G__26170__2 = (function (x,y){
return cljs.core.vector.cljs$lang$arity$variadic(cljs.core.array_seq([(f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(x,y) : f.call(null,x,y))], 0));
});
var G__26170__3 = (function (x,y,z){
return cljs.core.vector.cljs$lang$arity$variadic(cljs.core.array_seq([(f.cljs$lang$arity$3 ? f.cljs$lang$arity$3(x,y,z) : f.call(null,x,y,z))], 0));
});
var G__26170__4 = (function() { 
var G__26171__delegate = function (x,y,z,args){
return cljs.core.vector.cljs$lang$arity$variadic(cljs.core.array_seq([cljs.core.apply.cljs$lang$arity$5(f,x,y,z,args)], 0));
};
var G__26171 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__26171__delegate.call(this, x, y, z, args);
};
G__26171.cljs$lang$maxFixedArity = 3;
G__26171.cljs$lang$applyTo = (function (arglist__26172){
var x = cljs.core.first(arglist__26172);
var y = cljs.core.first(cljs.core.next(arglist__26172));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__26172)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__26172)));
return G__26171__delegate(x, y, z, args);
});
G__26171.cljs$lang$arity$variadic = G__26171__delegate;
return G__26171;
})()
;
G__26170 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__26170__0.call(this);
case 1:
return G__26170__1.call(this,x);
case 2:
return G__26170__2.call(this,x,y);
case 3:
return G__26170__3.call(this,x,y,z);
default:
return G__26170__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26170.cljs$lang$maxFixedArity = 3;
G__26170.cljs$lang$applyTo = G__26170__4.cljs$lang$applyTo;
return G__26170;
})()
});
var juxt__2 = (function (f,g){
return (function() {
var G__26173 = null;
var G__26173__0 = (function (){
return cljs.core.vector.cljs$lang$arity$variadic(cljs.core.array_seq([(f.cljs$lang$arity$0 ? f.cljs$lang$arity$0() : f.call(null)),(g.cljs$lang$arity$0 ? g.cljs$lang$arity$0() : g.call(null))], 0));
});
var G__26173__1 = (function (x){
return cljs.core.vector.cljs$lang$arity$variadic(cljs.core.array_seq([(f.cljs$lang$arity$1 ? f.cljs$lang$arity$1(x) : f.call(null,x)),(g.cljs$lang$arity$1 ? g.cljs$lang$arity$1(x) : g.call(null,x))], 0));
});
var G__26173__2 = (function (x,y){
return cljs.core.vector.cljs$lang$arity$variadic(cljs.core.array_seq([(f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(x,y) : f.call(null,x,y)),(g.cljs$lang$arity$2 ? g.cljs$lang$arity$2(x,y) : g.call(null,x,y))], 0));
});
var G__26173__3 = (function (x,y,z){
return cljs.core.vector.cljs$lang$arity$variadic(cljs.core.array_seq([(f.cljs$lang$arity$3 ? f.cljs$lang$arity$3(x,y,z) : f.call(null,x,y,z)),(g.cljs$lang$arity$3 ? g.cljs$lang$arity$3(x,y,z) : g.call(null,x,y,z))], 0));
});
var G__26173__4 = (function() { 
var G__26174__delegate = function (x,y,z,args){
return cljs.core.vector.cljs$lang$arity$variadic(cljs.core.array_seq([cljs.core.apply.cljs$lang$arity$5(f,x,y,z,args),cljs.core.apply.cljs$lang$arity$5(g,x,y,z,args)], 0));
};
var G__26174 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__26174__delegate.call(this, x, y, z, args);
};
G__26174.cljs$lang$maxFixedArity = 3;
G__26174.cljs$lang$applyTo = (function (arglist__26175){
var x = cljs.core.first(arglist__26175);
var y = cljs.core.first(cljs.core.next(arglist__26175));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__26175)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__26175)));
return G__26174__delegate(x, y, z, args);
});
G__26174.cljs$lang$arity$variadic = G__26174__delegate;
return G__26174;
})()
;
G__26173 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__26173__0.call(this);
case 1:
return G__26173__1.call(this,x);
case 2:
return G__26173__2.call(this,x,y);
case 3:
return G__26173__3.call(this,x,y,z);
default:
return G__26173__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26173.cljs$lang$maxFixedArity = 3;
G__26173.cljs$lang$applyTo = G__26173__4.cljs$lang$applyTo;
return G__26173;
})()
});
var juxt__3 = (function (f,g,h){
return (function() {
var G__26176 = null;
var G__26176__0 = (function (){
return cljs.core.vector.cljs$lang$arity$variadic(cljs.core.array_seq([(f.cljs$lang$arity$0 ? f.cljs$lang$arity$0() : f.call(null)),(g.cljs$lang$arity$0 ? g.cljs$lang$arity$0() : g.call(null)),(h.cljs$lang$arity$0 ? h.cljs$lang$arity$0() : h.call(null))], 0));
});
var G__26176__1 = (function (x){
return cljs.core.vector.cljs$lang$arity$variadic(cljs.core.array_seq([(f.cljs$lang$arity$1 ? f.cljs$lang$arity$1(x) : f.call(null,x)),(g.cljs$lang$arity$1 ? g.cljs$lang$arity$1(x) : g.call(null,x)),(h.cljs$lang$arity$1 ? h.cljs$lang$arity$1(x) : h.call(null,x))], 0));
});
var G__26176__2 = (function (x,y){
return cljs.core.vector.cljs$lang$arity$variadic(cljs.core.array_seq([(f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(x,y) : f.call(null,x,y)),(g.cljs$lang$arity$2 ? g.cljs$lang$arity$2(x,y) : g.call(null,x,y)),(h.cljs$lang$arity$2 ? h.cljs$lang$arity$2(x,y) : h.call(null,x,y))], 0));
});
var G__26176__3 = (function (x,y,z){
return cljs.core.vector.cljs$lang$arity$variadic(cljs.core.array_seq([(f.cljs$lang$arity$3 ? f.cljs$lang$arity$3(x,y,z) : f.call(null,x,y,z)),(g.cljs$lang$arity$3 ? g.cljs$lang$arity$3(x,y,z) : g.call(null,x,y,z)),(h.cljs$lang$arity$3 ? h.cljs$lang$arity$3(x,y,z) : h.call(null,x,y,z))], 0));
});
var G__26176__4 = (function() { 
var G__26177__delegate = function (x,y,z,args){
return cljs.core.vector.cljs$lang$arity$variadic(cljs.core.array_seq([cljs.core.apply.cljs$lang$arity$5(f,x,y,z,args),cljs.core.apply.cljs$lang$arity$5(g,x,y,z,args),cljs.core.apply.cljs$lang$arity$5(h,x,y,z,args)], 0));
};
var G__26177 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__26177__delegate.call(this, x, y, z, args);
};
G__26177.cljs$lang$maxFixedArity = 3;
G__26177.cljs$lang$applyTo = (function (arglist__26178){
var x = cljs.core.first(arglist__26178);
var y = cljs.core.first(cljs.core.next(arglist__26178));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__26178)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__26178)));
return G__26177__delegate(x, y, z, args);
});
G__26177.cljs$lang$arity$variadic = G__26177__delegate;
return G__26177;
})()
;
G__26176 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__26176__0.call(this);
case 1:
return G__26176__1.call(this,x);
case 2:
return G__26176__2.call(this,x,y);
case 3:
return G__26176__3.call(this,x,y,z);
default:
return G__26176__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26176.cljs$lang$maxFixedArity = 3;
G__26176.cljs$lang$applyTo = G__26176__4.cljs$lang$applyTo;
return G__26176;
})()
});
var juxt__4 = (function() { 
var G__26179__delegate = function (f,g,h,fs){
var fs__$1 = cljs.core.list_STAR_.cljs$lang$arity$4(f,g,h,fs);
return (function() {
var G__26180 = null;
var G__26180__0 = (function (){
return cljs.core.reduce.cljs$lang$arity$3((function (p1__26160_SHARP_,p2__26161_SHARP_){
return cljs.core.conj.cljs$lang$arity$2(p1__26160_SHARP_,(p2__26161_SHARP_.cljs$lang$arity$0 ? p2__26161_SHARP_.cljs$lang$arity$0() : p2__26161_SHARP_.call(null)));
}),cljs.core.PersistentVector.EMPTY,fs__$1);
});
var G__26180__1 = (function (x){
return cljs.core.reduce.cljs$lang$arity$3((function (p1__26162_SHARP_,p2__26163_SHARP_){
return cljs.core.conj.cljs$lang$arity$2(p1__26162_SHARP_,(p2__26163_SHARP_.cljs$lang$arity$1 ? p2__26163_SHARP_.cljs$lang$arity$1(x) : p2__26163_SHARP_.call(null,x)));
}),cljs.core.PersistentVector.EMPTY,fs__$1);
});
var G__26180__2 = (function (x,y){
return cljs.core.reduce.cljs$lang$arity$3((function (p1__26164_SHARP_,p2__26165_SHARP_){
return cljs.core.conj.cljs$lang$arity$2(p1__26164_SHARP_,(p2__26165_SHARP_.cljs$lang$arity$2 ? p2__26165_SHARP_.cljs$lang$arity$2(x,y) : p2__26165_SHARP_.call(null,x,y)));
}),cljs.core.PersistentVector.EMPTY,fs__$1);
});
var G__26180__3 = (function (x,y,z){
return cljs.core.reduce.cljs$lang$arity$3((function (p1__26166_SHARP_,p2__26167_SHARP_){
return cljs.core.conj.cljs$lang$arity$2(p1__26166_SHARP_,(p2__26167_SHARP_.cljs$lang$arity$3 ? p2__26167_SHARP_.cljs$lang$arity$3(x,y,z) : p2__26167_SHARP_.call(null,x,y,z)));
}),cljs.core.PersistentVector.EMPTY,fs__$1);
});
var G__26180__4 = (function() { 
var G__26181__delegate = function (x,y,z,args){
return cljs.core.reduce.cljs$lang$arity$3((function (p1__26168_SHARP_,p2__26169_SHARP_){
return cljs.core.conj.cljs$lang$arity$2(p1__26168_SHARP_,cljs.core.apply.cljs$lang$arity$5(p2__26169_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.EMPTY,fs__$1);
};
var G__26181 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__26181__delegate.call(this, x, y, z, args);
};
G__26181.cljs$lang$maxFixedArity = 3;
G__26181.cljs$lang$applyTo = (function (arglist__26182){
var x = cljs.core.first(arglist__26182);
var y = cljs.core.first(cljs.core.next(arglist__26182));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__26182)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__26182)));
return G__26181__delegate(x, y, z, args);
});
G__26181.cljs$lang$arity$variadic = G__26181__delegate;
return G__26181;
})()
;
G__26180 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__26180__0.call(this);
case 1:
return G__26180__1.call(this,x);
case 2:
return G__26180__2.call(this,x,y);
case 3:
return G__26180__3.call(this,x,y,z);
default:
return G__26180__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26180.cljs$lang$maxFixedArity = 3;
G__26180.cljs$lang$applyTo = G__26180__4.cljs$lang$applyTo;
return G__26180;
})()
};
var G__26179 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__26179__delegate.call(this, f, g, h, fs);
};
G__26179.cljs$lang$maxFixedArity = 3;
G__26179.cljs$lang$applyTo = (function (arglist__26183){
var f = cljs.core.first(arglist__26183);
var g = cljs.core.first(cljs.core.next(arglist__26183));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__26183)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__26183)));
return G__26179__delegate(f, g, h, fs);
});
G__26179.cljs$lang$arity$variadic = G__26179__delegate;
return G__26179;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case 1:
return juxt__1.call(this,f);
case 2:
return juxt__2.call(this,f,g);
case 3:
return juxt__3.call(this,f,g,h);
default:
return juxt__4.cljs$lang$arity$variadic(f,g,h, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__4.cljs$lang$applyTo;
juxt.cljs$lang$arity$1 = juxt__1;
juxt.cljs$lang$arity$2 = juxt__2;
juxt.cljs$lang$arity$3 = juxt__3;
juxt.cljs$lang$arity$variadic = juxt__4.cljs$lang$arity$variadic;
return juxt;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. dorun can
* be used to force any effects. Walks through the successive nexts of
* the seq, does not retain the head and returns nil.
*/
cljs.core.dorun = (function() {
var dorun = null;
var dorun__1 = (function (coll){
while(true){
if(cljs.core.seq(coll))
{{
var G__26184 = cljs.core.next(coll);
coll = G__26184;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__2 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3941__auto__ = cljs.core.seq(coll);
if(and__3941__auto__)
{return (n > 0);
} else
{return and__3941__auto__;
}
})()))
{{
var G__26185 = (n - 1);
var G__26186 = cljs.core.next(coll);
n = G__26185;
coll = G__26186;
continue;
}
} else
{return null;
}
break;
}
});
dorun = function(n,coll){
switch(arguments.length){
case 1:
return dorun__1.call(this,n);
case 2:
return dorun__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dorun.cljs$lang$arity$1 = dorun__1;
dorun.cljs$lang$arity$2 = dorun__2;
return dorun;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. doall can
* be used to force any effects. Walks through the successive nexts of
* the seq, retains the head and returns it, thus causing the entire
* seq to reside in memory at one time.
*/
cljs.core.doall = (function() {
var doall = null;
var doall__1 = (function (coll){
cljs.core.dorun.cljs$lang$arity$1(coll);
return coll;
});
var doall__2 = (function (n,coll){
cljs.core.dorun.cljs$lang$arity$2(n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case 1:
return doall__1.call(this,n);
case 2:
return doall__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
doall.cljs$lang$arity$1 = doall__1;
doall.cljs$lang$arity$2 = doall__2;
return doall;
})()
;
cljs.core.regexp_QMARK_ = (function regexp_QMARK_(o){
return o instanceof RegExp;
});
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){
var matches = re.exec(s);
if(cljs.core._EQ_.cljs$lang$arity$2(cljs.core.first(matches),s))
{if((cljs.core.count(matches) === 1))
{return cljs.core.first(matches);
} else
{return cljs.core.vec(matches);
}
} else
{return null;
}
});
/**
* Returns the first regex match, if any, of s to re, using
* re.exec(s). Returns a vector, containing first the matching
* substring, then any capturing groups if the regular expression contains
* capturing groups.
*/
cljs.core.re_find = (function re_find(re,s){
var matches = re.exec(s);
if((matches == null))
{return null;
} else
{if((cljs.core.count(matches) === 1))
{return cljs.core.first(matches);
} else
{return cljs.core.vec(matches);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data = cljs.core.re_find(re,s);
var match_idx = s.search(re);
var match_str = ((cljs.core.coll_QMARK_(match_data))?cljs.core.first(match_data):match_data);
var post_match = cljs.core.subs.cljs$lang$arity$2(s,(match_idx + cljs.core.count(match_str)));
if(cljs.core.truth_(match_data))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons(match_data,re_seq(re,post_match));
}),null));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__26189 = cljs.core.re_find(/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var _ = cljs.core.nth.cljs$lang$arity$3(vec__26189,0,null);
var flags = cljs.core.nth.cljs$lang$arity$3(vec__26189,1,null);
var pattern = cljs.core.nth.cljs$lang$arity$3(vec__26189,2,null);
return (new RegExp(pattern,flags));
});
/**
* Do not use this.  It is kept for backwards compatibility with the
* old IPrintable protocol.
*/
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.cljs$lang$arity$variadic(cljs.core.PersistentVector.fromArray([begin], true),cljs.core.flatten1(cljs.core.interpose(cljs.core.PersistentVector.fromArray([sep], true),cljs.core.map.cljs$lang$arity$2((function (p1__26187_SHARP_){
return (print_one.cljs$lang$arity$2 ? print_one.cljs$lang$arity$2(p1__26187_SHARP_,opts) : print_one.call(null,p1__26187_SHARP_,opts));
}),coll))),cljs.core.array_seq([cljs.core.PersistentVector.fromArray([end], true)], 0));
});
cljs.core.pr_sequential_writer = (function pr_sequential_writer(writer,print_one,begin,sep,end,opts,coll){
cljs.core._write(writer,begin);
if(cljs.core.seq(coll))
{(print_one.cljs$lang$arity$3 ? print_one.cljs$lang$arity$3(cljs.core.first(coll),writer,opts) : print_one.call(null,cljs.core.first(coll),writer,opts));
} else
{}
var G__26191_26192 = cljs.core.seq(cljs.core.next(coll));
while(true){
if(G__26191_26192)
{var o_26193 = cljs.core.first(G__26191_26192);
cljs.core._write(writer,sep);
(print_one.cljs$lang$arity$3 ? print_one.cljs$lang$arity$3(o_26193,writer,opts) : print_one.call(null,o_26193,writer,opts));
{
var G__26194 = cljs.core.next(G__26191_26192);
G__26191_26192 = G__26194;
continue;
}
} else
{}
break;
}
return cljs.core._write(writer,end);
});
/**
* @param {...*} var_args
*/
cljs.core.write_all = (function() { 
var write_all__delegate = function (writer,ss){
var G__26196 = cljs.core.seq(ss);
while(true){
if(G__26196)
{var s = cljs.core.first(G__26196);
cljs.core._write(writer,s);
{
var G__26197 = cljs.core.next(G__26196);
G__26196 = G__26197;
continue;
}
} else
{return null;
}
break;
}
};
var write_all = function (writer,var_args){
var ss = null;
if (goog.isDef(var_args)) {
  ss = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return write_all__delegate.call(this, writer, ss);
};
write_all.cljs$lang$maxFixedArity = 1;
write_all.cljs$lang$applyTo = (function (arglist__26198){
var writer = cljs.core.first(arglist__26198);
var ss = cljs.core.rest(arglist__26198);
return write_all__delegate(writer, ss);
});
write_all.cljs$lang$arity$variadic = write_all__delegate;
return write_all;
})()
;
cljs.core.string_print = (function string_print(x){
(cljs.core._STAR_print_fn_STAR_.cljs$lang$arity$1 ? cljs.core._STAR_print_fn_STAR_.cljs$lang$arity$1(x) : cljs.core._STAR_print_fn_STAR_.call(null,x));
return null;
});
cljs.core.flush = (function flush(){
return null;
});
goog.provide('cljs.core.StringBufferWriter');

/**
* @constructor
*/
cljs.core.StringBufferWriter = (function (sb){
this.sb = sb;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 1073741824;
})
cljs.core.StringBufferWriter.cljs$lang$type = true;
cljs.core.StringBufferWriter.cljs$lang$ctorPrSeq = (function (this__5785__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/StringBufferWriter");
});
cljs.core.StringBufferWriter.cljs$lang$ctorPrWriter = (function (this__5785__auto__,writer__5786__auto__,opt__5787__auto__){
return cljs.core._write(writer__5786__auto__,"cljs.core/StringBufferWriter");
});
cljs.core.StringBufferWriter.prototype.cljs$core$IWriter$_write$arity$2 = (function (_,s){
var self__ = this;
return self__.sb.append(s);
});
cljs.core.StringBufferWriter.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
return null;
});
/**
* Do not use this.  It is kept for backwards compatibility with the
* old IPrintable protocol.
*/
cljs.core.pr_seq = (function pr_seq(obj,opts){
if((obj == null))
{return cljs.core.list.cljs$lang$arity$1("nil");
} else
{if((void 0 === obj))
{return cljs.core.list.cljs$lang$arity$1("#<undefined>");
} else
{if("\uFDD0:else")
{return cljs.core.concat.cljs$lang$arity$2((cljs.core.truth_((function (){var and__3941__auto__ = cljs.core._lookup.cljs$lang$arity$3(opts,"\uFDD0:meta",null);
if(cljs.core.truth_(and__3941__auto__))
{var and__3941__auto____$1 = (function (){var G__26201 = obj;
if(G__26201)
{if(cljs.core.truth_((function (){var or__3943__auto__ = (G__26201.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__26201.cljs$core$IMeta$;
}
})()))
{return true;
} else
{if((!G__26201.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.IMeta,G__26201);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IMeta,G__26201);
}
})();
if(cljs.core.truth_(and__3941__auto____$1))
{return cljs.core.meta(obj);
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
})())?cljs.core.concat.cljs$lang$arity$variadic(cljs.core.PersistentVector.fromArray(["^"], true),pr_seq(cljs.core.meta(obj),opts),cljs.core.array_seq([cljs.core.PersistentVector.fromArray([" "], true)], 0)):null),(cljs.core.truth_((function (){var and__3941__auto__ = !((obj == null));
if(and__3941__auto__)
{return obj.cljs$lang$type;
} else
{return and__3941__auto__;
}
})())?obj.cljs$lang$ctorPrSeq(obj):(cljs.core.truth_((function (){var G__26202 = obj;
if(G__26202)
{if(cljs.core.truth_((function (){var or__3943__auto__ = (G__26202.cljs$lang$protocol_mask$partition0$ & 536870912);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__26202.cljs$core$IPrintable$;
}
})()))
{return true;
} else
{if((!G__26202.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.IPrintable,G__26202);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IPrintable,G__26202);
}
})())?cljs.core._pr_seq(obj,opts):(cljs.core.truth_(cljs.core.regexp_QMARK_(obj))?cljs.core.list.cljs$lang$arity$3("#\"",obj.source,"\""):(("\uFDD0:else")?cljs.core.list.cljs$lang$arity$3("#<",[cljs.core.str(obj)].join(''),">"):null)))));
} else
{return null;
}
}
}
});
/**
* Prefer this to pr-seq, because it makes the printing function
* configurable, allowing efficient implementations such as appending
* to a StringBuffer.
*/
cljs.core.pr_writer = (function pr_writer(obj,writer,opts){
if((obj == null))
{return cljs.core._write(writer,"nil");
} else
{if((void 0 === obj))
{return cljs.core._write(writer,"#<undefined>");
} else
{if("\uFDD0:else")
{if(cljs.core.truth_((function (){var and__3941__auto__ = cljs.core._lookup.cljs$lang$arity$3(opts,"\uFDD0:meta",null);
if(cljs.core.truth_(and__3941__auto__))
{var and__3941__auto____$1 = (function (){var G__26206 = obj;
if(G__26206)
{if(cljs.core.truth_((function (){var or__3943__auto__ = (G__26206.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__26206.cljs$core$IMeta$;
}
})()))
{return true;
} else
{if((!G__26206.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.IMeta,G__26206);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IMeta,G__26206);
}
})();
if(cljs.core.truth_(and__3941__auto____$1))
{return cljs.core.meta(obj);
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
})()))
{cljs.core._write(writer,"^");
pr_writer(cljs.core.meta(obj),writer,opts);
cljs.core._write(writer," ");
} else
{}
if(cljs.core.truth_((function (){var and__3941__auto__ = !((obj == null));
if(and__3941__auto__)
{return obj.cljs$lang$type;
} else
{return and__3941__auto__;
}
})()))
{return obj.cljs$lang$ctorPrWriter(obj,writer,opts);
} else
{if(cljs.core.truth_((function (){var G__26207 = obj;
if(G__26207)
{if(cljs.core.truth_((function (){var or__3943__auto__ = (G__26207.cljs$lang$protocol_mask$partition0$ & 2147483648);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__26207.cljs$core$IPrintWithWriter$;
}
})()))
{return true;
} else
{if((!G__26207.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.IPrintWithWriter,G__26207);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IPrintWithWriter,G__26207);
}
})()))
{return cljs.core._pr_writer(obj,writer,opts);
} else
{if(cljs.core.truth_((function (){var G__26208 = obj;
if(G__26208)
{if(cljs.core.truth_((function (){var or__3943__auto__ = (G__26208.cljs$lang$protocol_mask$partition0$ & 536870912);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__26208.cljs$core$IPrintable$;
}
})()))
{return true;
} else
{if((!G__26208.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.IPrintable,G__26208);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IPrintable,G__26208);
}
})()))
{return cljs.core.apply.cljs$lang$arity$3(cljs.core.write_all,writer,cljs.core._pr_seq(obj,opts));
} else
{if(cljs.core.truth_(cljs.core.regexp_QMARK_(obj)))
{return cljs.core.write_all.cljs$lang$arity$variadic(writer,cljs.core.array_seq(["#\"",obj.source,"\""], 0));
} else
{if("\uFDD0:else")
{return cljs.core.write_all.cljs$lang$arity$variadic(writer,cljs.core.array_seq(["#<",[cljs.core.str(obj)].join(''),">"], 0));
} else
{return null;
}
}
}
}
}
} else
{return null;
}
}
}
});
cljs.core.pr_seq_writer = (function pr_seq_writer(objs,writer,opts){
cljs.core.pr_writer(cljs.core.first(objs),writer,opts);
var G__26210 = cljs.core.seq(cljs.core.next(objs));
while(true){
if(G__26210)
{var obj = cljs.core.first(G__26210);
cljs.core._write(writer," ");
cljs.core.pr_writer(obj,writer,opts);
{
var G__26211 = cljs.core.next(G__26210);
G__26210 = G__26211;
continue;
}
} else
{return null;
}
break;
}
});
cljs.core.pr_sb_with_opts = (function pr_sb_with_opts(objs,opts){
var sb = (new goog.string.StringBuffer());
var writer = (new cljs.core.StringBufferWriter(sb));
cljs.core.pr_seq_writer(objs,writer,opts);
cljs.core._flush(writer);
return sb;
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
if(cljs.core.empty_QMARK_(objs))
{return "";
} else
{return [cljs.core.str(cljs.core.pr_sb_with_opts(objs,opts))].join('');
}
});
/**
* Same as pr-str-with-opts followed by (newline)
*/
cljs.core.prn_str_with_opts = (function prn_str_with_opts(objs,opts){
if(cljs.core.empty_QMARK_(objs))
{return "\n";
} else
{var sb = cljs.core.pr_sb_with_opts(objs,opts);
sb.append("\n");
return [cljs.core.str(sb)].join('');
}
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
return cljs.core.string_print(cljs.core.pr_str_with_opts(objs,opts));
});
cljs.core.newline = (function newline(opts){
cljs.core.string_print("\n");
if(cljs.core.truth_(cljs.core._lookup.cljs$lang$arity$3(opts,"\uFDD0:flush-on-newline",null)))
{return cljs.core.flush();
} else
{return null;
}
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core.pr_opts = (function pr_opts(){
return cljs.core.ObjMap.fromObject(["\uFDD0:flush-on-newline","\uFDD0:readably","\uFDD0:meta","\uFDD0:dup"],{"\uFDD0:flush-on-newline":cljs.core._STAR_flush_on_newline_STAR_,"\uFDD0:readably":cljs.core._STAR_print_readably_STAR_,"\uFDD0:meta":cljs.core._STAR_print_meta_STAR_,"\uFDD0:dup":cljs.core._STAR_print_dup_STAR_});
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintable.
* @param {...*} var_args
*/
cljs.core.pr_str = (function() { 
var pr_str__delegate = function (objs){
return cljs.core.pr_str_with_opts(objs,cljs.core.pr_opts());
};
var pr_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr_str__delegate.call(this, objs);
};
pr_str.cljs$lang$maxFixedArity = 0;
pr_str.cljs$lang$applyTo = (function (arglist__26212){
var objs = cljs.core.seq(arglist__26212);;
return pr_str__delegate(objs);
});
pr_str.cljs$lang$arity$variadic = pr_str__delegate;
return pr_str;
})()
;
/**
* Same as pr-str followed by (newline)
* @param {...*} var_args
*/
cljs.core.prn_str = (function() { 
var prn_str__delegate = function (objs){
return cljs.core.prn_str_with_opts(objs,cljs.core.pr_opts());
};
var prn_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn_str__delegate.call(this, objs);
};
prn_str.cljs$lang$maxFixedArity = 0;
prn_str.cljs$lang$applyTo = (function (arglist__26213){
var objs = cljs.core.seq(arglist__26213);;
return prn_str__delegate(objs);
});
prn_str.cljs$lang$arity$variadic = prn_str__delegate;
return prn_str;
})()
;
/**
* Prints the object(s) using string-print.  Prints the
* object(s), separated by spaces if there is more than one.
* By default, pr and prn print in a way that objects can be
* read by the reader
* @param {...*} var_args
*/
cljs.core.pr = (function() { 
var pr__delegate = function (objs){
return cljs.core.pr_with_opts(objs,cljs.core.pr_opts());
};
var pr = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr__delegate.call(this, objs);
};
pr.cljs$lang$maxFixedArity = 0;
pr.cljs$lang$applyTo = (function (arglist__26214){
var objs = cljs.core.seq(arglist__26214);;
return pr__delegate(objs);
});
pr.cljs$lang$arity$variadic = pr__delegate;
return pr;
})()
;
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
cljs.core.print = (function() { 
var cljs_core_print__delegate = function (objs){
return cljs.core.pr_with_opts(objs,cljs.core.assoc.cljs$lang$arity$3(cljs.core.pr_opts(),"\uFDD0:readably",false));
};
var cljs_core_print = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return cljs_core_print__delegate.call(this, objs);
};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__26215){
var objs = cljs.core.seq(arglist__26215);;
return cljs_core_print__delegate(objs);
});
cljs_core_print.cljs$lang$arity$variadic = cljs_core_print__delegate;
return cljs_core_print;
})()
;
/**
* print to a string, returning it
* @param {...*} var_args
*/
cljs.core.print_str = (function() { 
var print_str__delegate = function (objs){
return cljs.core.pr_str_with_opts(objs,cljs.core.assoc.cljs$lang$arity$3(cljs.core.pr_opts(),"\uFDD0:readably",false));
};
var print_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return print_str__delegate.call(this, objs);
};
print_str.cljs$lang$maxFixedArity = 0;
print_str.cljs$lang$applyTo = (function (arglist__26216){
var objs = cljs.core.seq(arglist__26216);;
return print_str__delegate(objs);
});
print_str.cljs$lang$arity$variadic = print_str__delegate;
return print_str;
})()
;
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function() { 
var println__delegate = function (objs){
cljs.core.pr_with_opts(objs,cljs.core.assoc.cljs$lang$arity$3(cljs.core.pr_opts(),"\uFDD0:readably",false));
return cljs.core.newline(cljs.core.pr_opts());
};
var println = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println__delegate.call(this, objs);
};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__26217){
var objs = cljs.core.seq(arglist__26217);;
return println__delegate(objs);
});
println.cljs$lang$arity$variadic = println__delegate;
return println;
})()
;
/**
* println to a string, returning it
* @param {...*} var_args
*/
cljs.core.println_str = (function() { 
var println_str__delegate = function (objs){
return cljs.core.prn_str_with_opts(objs,cljs.core.assoc.cljs$lang$arity$3(cljs.core.pr_opts(),"\uFDD0:readably",false));
};
var println_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println_str__delegate.call(this, objs);
};
println_str.cljs$lang$maxFixedArity = 0;
println_str.cljs$lang$applyTo = (function (arglist__26218){
var objs = cljs.core.seq(arglist__26218);;
return println_str__delegate(objs);
});
println_str.cljs$lang$arity$variadic = println_str__delegate;
return println_str;
})()
;
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function() { 
var prn__delegate = function (objs){
cljs.core.pr_with_opts(objs,cljs.core.pr_opts());
return cljs.core.newline(cljs.core.pr_opts());
};
var prn = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn__delegate.call(this, objs);
};
prn.cljs$lang$maxFixedArity = 0;
prn.cljs$lang$applyTo = (function (arglist__26219){
var objs = cljs.core.seq(arglist__26219);;
return prn__delegate(objs);
});
prn.cljs$lang$arity$variadic = prn__delegate;
return prn;
})()
;
/**
* Prints formatted output, as per format
* @param {...*} var_args
*/
cljs.core.printf = (function() { 
var printf__delegate = function (fmt,args){
return cljs.core.print.cljs$lang$arity$variadic(cljs.core.array_seq([cljs.core.apply.cljs$lang$arity$3(cljs.core.format,fmt,args)], 0));
};
var printf = function (fmt,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return printf__delegate.call(this, fmt, args);
};
printf.cljs$lang$maxFixedArity = 1;
printf.cljs$lang$applyTo = (function (arglist__26220){
var fmt = cljs.core.first(arglist__26220);
var args = cljs.core.rest(arglist__26220);
return printf__delegate(fmt, args);
});
printf.cljs$lang$arity$variadic = printf__delegate;
return printf;
})()
;
cljs.core.char_escapes = cljs.core.ObjMap.fromObject(["\"","\\","\b","\f","\n","\r","\t"],{"\"":"\\\"","\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t"});
cljs.core.quote_string = (function quote_string(s){
return [cljs.core.str("\""),cljs.core.str(s.replace(RegExp("[\\\\\"\b\f\n\r\t]","g"),(function (match){
return cljs.core._lookup.cljs$lang$arity$3(cljs.core.char_escapes,match,null);
}))),cljs.core.str("\"")].join('');
});
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair = (function (keyval){
return cljs.core.pr_sequential(cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential(pr_pair,"{",", ","}",opts,coll);
});
(cljs.core.IPrintable["number"] = true);
(cljs.core._pr_seq["number"] = (function (n,opts){
return cljs.core.list.cljs$lang$arity$1([cljs.core.str(n)].join(''));
}));
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Subvec.prototype.cljs$core$IPrintable$ = true;
cljs.core.Subvec.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.ChunkedCons.prototype.cljs$core$IPrintable$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair = (function (keyval){
return cljs.core.pr_sequential(cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential(pr_pair,"{",", ","}",opts,coll);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair = (function (keyval){
return cljs.core.pr_sequential(cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential(pr_pair,"{",", ","}",opts,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"#queue ["," ","]",opts,cljs.core.seq(coll));
});
cljs.core.LazySeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.RSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.RSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
(cljs.core.IPrintable["boolean"] = true);
(cljs.core._pr_seq["boolean"] = (function (bool,opts){
return cljs.core.list.cljs$lang$arity$1([cljs.core.str(bool)].join(''));
}));
(cljs.core.IPrintable["string"] = true);
(cljs.core._pr_seq["string"] = (function (obj,opts){
if(cljs.core.keyword_QMARK_(obj))
{return cljs.core.list.cljs$lang$arity$1([cljs.core.str(":"),cljs.core.str((function (){var temp__4092__auto__ = cljs.core.namespace(obj);
if(cljs.core.truth_(temp__4092__auto__))
{var nspc = temp__4092__auto__;
return [cljs.core.str(nspc),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name(obj))].join(''));
} else
{if(cljs.core.symbol_QMARK_(obj))
{return cljs.core.list.cljs$lang$arity$1([cljs.core.str((function (){var temp__4092__auto__ = cljs.core.namespace(obj);
if(cljs.core.truth_(temp__4092__auto__))
{var nspc = temp__4092__auto__;
return [cljs.core.str(nspc),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name(obj))].join(''));
} else
{if("\uFDD0:else")
{return cljs.core.list.cljs$lang$arity$1((cljs.core.truth_((new cljs.core.Keyword("\uFDD0:readably")).call(null,opts))?cljs.core.quote_string(obj):obj));
} else
{return null;
}
}
}
}));
cljs.core.NodeSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.NodeSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.RedNode.prototype.cljs$core$IPrintable$ = true;
cljs.core.RedNode.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair = (function (keyval){
return cljs.core.pr_sequential(cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential(pr_pair,"{",", ","}",opts,coll);
});
cljs.core.Vector.prototype.cljs$core$IPrintable$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.List.prototype.cljs$core$IPrintable$ = true;
cljs.core.List.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["array"] = true);
(cljs.core._pr_seq["array"] = (function (a,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"#<Array [",", ","]>",opts,a);
}));
(cljs.core.IPrintable["function"] = true);
(cljs.core._pr_seq["function"] = (function (this$){
return cljs.core.list.cljs$lang$arity$3("#<",[cljs.core.str(this$)].join(''),">");
}));
cljs.core.EmptyList.prototype.cljs$core$IPrintable$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.list.cljs$lang$arity$1("()");
});
cljs.core.BlackNode.prototype.cljs$core$IPrintable$ = true;
cljs.core.BlackNode.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"["," ","]",opts,coll);
});
Date.prototype.cljs$core$IPrintable$ = true;
Date.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (d,_){
var normalize = (function (n,len){
var ns = [cljs.core.str(n)].join('');
while(true){
if((cljs.core.count(ns) < len))
{{
var G__26221 = [cljs.core.str("0"),cljs.core.str(ns)].join('');
ns = G__26221;
continue;
}
} else
{return ns;
}
break;
}
});
return cljs.core.list.cljs$lang$arity$1([cljs.core.str("#inst \""),cljs.core.str(d.getUTCFullYear()),cljs.core.str("-"),cljs.core.str(normalize((d.getUTCMonth() + 1),2)),cljs.core.str("-"),cljs.core.str(normalize(d.getUTCDate(),2)),cljs.core.str("T"),cljs.core.str(normalize(d.getUTCHours(),2)),cljs.core.str(":"),cljs.core.str(normalize(d.getUTCMinutes(),2)),cljs.core.str(":"),cljs.core.str(normalize(d.getUTCSeconds(),2)),cljs.core.str("."),cljs.core.str(normalize(d.getUTCMilliseconds(),3)),cljs.core.str("-"),cljs.core.str("00:00\"")].join(''));
});
cljs.core.Cons.prototype.cljs$core$IPrintable$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Range.prototype.cljs$core$IPrintable$ = true;
cljs.core.Range.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair = (function (keyval){
return cljs.core.pr_sequential(cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential(pr_pair,"{",", ","}",opts,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.HashMap.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var pr_pair = (function (keyval){
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer(writer,pr_pair,"{",", ","}",opts,coll);
});
(cljs.core.IPrintWithWriter["number"] = true);
(cljs.core._pr_writer["number"] = (function (n,writer,opts){
(1 / 0);
return cljs.core._write(writer,[cljs.core.str(n)].join(''));
}));
cljs.core.IndexedSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll);
});
cljs.core.Subvec.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.Subvec.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"["," ","]",opts,coll);
});
cljs.core.ChunkedCons.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var pr_pair = (function (keyval){
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer(writer,pr_pair,"{",", ","}",opts,coll);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var pr_pair = (function (keyval){
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer(writer,pr_pair,"{",", ","}",opts,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"#queue ["," ","]",opts,cljs.core.seq(coll));
});
cljs.core.LazySeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll);
});
cljs.core.RSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.RSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"#{"," ","}",opts,coll);
});
(cljs.core.IPrintWithWriter["boolean"] = true);
(cljs.core._pr_writer["boolean"] = (function (bool,writer,opts){
return cljs.core._write(writer,[cljs.core.str(bool)].join(''));
}));
(cljs.core.IPrintWithWriter["string"] = true);
(cljs.core._pr_writer["string"] = (function (obj,writer,opts){
if(cljs.core.keyword_QMARK_(obj))
{cljs.core._write(writer,":");
var temp__4092__auto___26222 = cljs.core.namespace(obj);
if(cljs.core.truth_(temp__4092__auto___26222))
{var nspc_26223 = temp__4092__auto___26222;
cljs.core.write_all.cljs$lang$arity$variadic(writer,cljs.core.array_seq([[cljs.core.str(nspc_26223)].join(''),"/"], 0));
} else
{}
return cljs.core._write(writer,cljs.core.name(obj));
} else
{if(cljs.core.symbol_QMARK_(obj))
{var temp__4092__auto___26224 = cljs.core.namespace(obj);
if(cljs.core.truth_(temp__4092__auto___26224))
{var nspc_26225 = temp__4092__auto___26224;
cljs.core.write_all.cljs$lang$arity$variadic(writer,cljs.core.array_seq([[cljs.core.str(nspc_26225)].join(''),"/"], 0));
} else
{}
return cljs.core._write(writer,cljs.core.name(obj));
} else
{if("\uFDD0:else")
{if(cljs.core.truth_((new cljs.core.Keyword("\uFDD0:readably")).call(null,opts)))
{return cljs.core._write(writer,cljs.core.quote_string(obj));
} else
{return cljs.core._write(writer,obj);
}
} else
{return null;
}
}
}
}));
cljs.core.NodeSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.NodeSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll);
});
cljs.core.RedNode.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.RedNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"["," ","]",opts,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var pr_pair = (function (keyval){
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer(writer,pr_pair,"{",", ","}",opts,coll);
});
cljs.core.Vector.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"["," ","]",opts,coll);
});
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"#{"," ","}",opts,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"["," ","]",opts,coll);
});
cljs.core.List.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.List.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll);
});
(cljs.core.IPrintWithWriter["array"] = true);
(cljs.core._pr_writer["array"] = (function (a,writer,opts){
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"#<Array [",", ","]>",opts,a);
}));
(cljs.core.IPrintWithWriter["function"] = true);
(cljs.core._pr_writer["function"] = (function (this$,writer,_){
return cljs.core.write_all.cljs$lang$arity$variadic(writer,cljs.core.array_seq(["#<",[cljs.core.str(this$)].join(''),">"], 0));
}));
cljs.core.EmptyList.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core._write(writer,"()");
});
cljs.core.BlackNode.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.BlackNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"["," ","]",opts,coll);
});
Date.prototype.cljs$core$IPrintWithWriter$ = true;
Date.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (d,writer,_){
var normalize = (function (n,len){
var ns = [cljs.core.str(n)].join('');
while(true){
if((cljs.core.count(ns) < len))
{{
var G__26226 = [cljs.core.str("0"),cljs.core.str(ns)].join('');
ns = G__26226;
continue;
}
} else
{return ns;
}
break;
}
});
return cljs.core.write_all.cljs$lang$arity$variadic(writer,cljs.core.array_seq(["#inst \"",[cljs.core.str(d.getUTCFullYear())].join(''),"-",normalize((d.getUTCMonth() + 1),2),"-",normalize(d.getUTCDate(),2),"T",normalize(d.getUTCHours(),2),":",normalize(d.getUTCMinutes(),2),":",normalize(d.getUTCSeconds(),2),".",normalize(d.getUTCMilliseconds(),3),"-","00:00\""], 0));
});
cljs.core.Cons.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll);
});
cljs.core.Range.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.Range.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var pr_pair = (function (keyval){
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer(writer,pr_pair,"{",", ","}",opts,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$IComparable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IComparable$_compare$arity$2 = (function (x,y){
return cljs.core.compare_indexed.cljs$lang$arity$2(x,y);
});
goog.provide('cljs.core.Atom');

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2690809856;
this.cljs$lang$protocol_mask$partition1$ = 2;
})
cljs.core.Atom.cljs$lang$type = true;
cljs.core.Atom.cljs$lang$ctorPrSeq = (function (this__5785__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/Atom");
});
cljs.core.Atom.cljs$lang$ctorPrWriter = (function (this__5785__auto__,writer__5786__auto__,opt__5787__auto__){
return cljs.core._write(writer__5786__auto__,"cljs.core/Atom");
});
cljs.core.Atom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
return goog.getUid(this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var G__26227 = cljs.core.seq(self__.watches);
while(true){
if(G__26227)
{var vec__26228 = cljs.core.first(G__26227);
var key = cljs.core.nth.cljs$lang$arity$3(vec__26228,0,null);
var f = cljs.core.nth.cljs$lang$arity$3(vec__26228,1,null);
(f.cljs$lang$arity$4 ? f.cljs$lang$arity$4(key,this$,oldval,newval) : f.call(null,key,this$,oldval,newval));
{
var G__26229 = cljs.core.next(G__26227);
G__26227 = G__26229;
continue;
}
} else
{return null;
}
break;
}
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
return this$.watches = cljs.core.assoc.cljs$lang$arity$3(self__.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
return this$.watches = cljs.core.dissoc.cljs$lang$arity$2(self__.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var self__ = this;
cljs.core._write(writer,"#<Atom: ");
cljs.core._pr_writer(self__.state,writer,opts);
return cljs.core._write(writer,">");
});
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (a,opts){
var self__ = this;
return cljs.core.concat.cljs$lang$arity$variadic(cljs.core.PersistentVector.fromArray(["#<Atom: "], true),cljs.core._pr_seq(self__.state,opts),cljs.core.array_seq([">"], 0));
});
cljs.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
return self__.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
return self__.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
return (o === other);
});
/**
* Creates and returns an Atom with an initial value of x and zero or
* more options (in any order):
* 
* :meta metadata-map
* 
* :validator validate-fn
* 
* If metadata-map is supplied, it will be come the metadata on the
* atom. validate-fn must be nil or a side-effect-free fn of one
* argument, which will be passed the intended new state on any state
* change. If the new state is unacceptable, the validate-fn should
* return false or throw an Error.  If either of these error conditions
* occur, then the value of the atom will not change.
* @param {...*} var_args
*/
cljs.core.atom = (function() {
var atom = null;
var atom__1 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__2 = (function() { 
var G__26233__delegate = function (x,p__26230){
var map__26232 = p__26230;
var map__26232__$1 = ((cljs.core.seq_QMARK_(map__26232))?cljs.core.apply.cljs$lang$arity$2(cljs.core.hash_map,map__26232):map__26232);
var validator = cljs.core._lookup.cljs$lang$arity$3(map__26232__$1,"\uFDD0:validator",null);
var meta = cljs.core._lookup.cljs$lang$arity$3(map__26232__$1,"\uFDD0:meta",null);
return (new cljs.core.Atom(x,meta,validator,null));
};
var G__26233 = function (x,var_args){
var p__26230 = null;
if (goog.isDef(var_args)) {
  p__26230 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__26233__delegate.call(this, x, p__26230);
};
G__26233.cljs$lang$maxFixedArity = 1;
G__26233.cljs$lang$applyTo = (function (arglist__26234){
var x = cljs.core.first(arglist__26234);
var p__26230 = cljs.core.rest(arglist__26234);
return G__26233__delegate(x, p__26230);
});
G__26233.cljs$lang$arity$variadic = G__26233__delegate;
return G__26233;
})()
;
atom = function(x,var_args){
var p__26230 = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
return atom__2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__2.cljs$lang$applyTo;
atom.cljs$lang$arity$1 = atom__1;
atom.cljs$lang$arity$variadic = atom__2.cljs$lang$arity$variadic;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__4092__auto___26235 = a.validator;
if(cljs.core.truth_(temp__4092__auto___26235))
{var validate_26236 = temp__4092__auto___26235;
if(cljs.core.truth_((validate_26236.cljs$lang$arity$1 ? validate_26236.cljs$lang$arity$1(new_value) : validate_26236.call(null,new_value))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0:line",6752,"\uFDD0:column",13))], 0)))].join('')));
}
} else
{}
var old_value_26237 = a.state;
a.state = new_value;
cljs.core._notify_watches(a,old_value_26237,new_value);
return new_value;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
cljs.core.swap_BANG_ = (function() {
var swap_BANG_ = null;
var swap_BANG___2 = (function (a,f){
return cljs.core.reset_BANG_(a,(f.cljs$lang$arity$1 ? f.cljs$lang$arity$1(a.state) : f.call(null,a.state)));
});
var swap_BANG___3 = (function (a,f,x){
return cljs.core.reset_BANG_(a,(f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(a.state,x) : f.call(null,a.state,x)));
});
var swap_BANG___4 = (function (a,f,x,y){
return cljs.core.reset_BANG_(a,(f.cljs$lang$arity$3 ? f.cljs$lang$arity$3(a.state,x,y) : f.call(null,a.state,x,y)));
});
var swap_BANG___5 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_(a,(f.cljs$lang$arity$4 ? f.cljs$lang$arity$4(a.state,x,y,z) : f.call(null,a.state,x,y,z)));
});
var swap_BANG___6 = (function() { 
var G__26238__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_(a,cljs.core.apply.cljs$lang$arity$variadic(f,a.state,x,y,z,cljs.core.array_seq([more], 0)));
};
var G__26238 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__26238__delegate.call(this, a, f, x, y, z, more);
};
G__26238.cljs$lang$maxFixedArity = 5;
G__26238.cljs$lang$applyTo = (function (arglist__26239){
var a = cljs.core.first(arglist__26239);
var f = cljs.core.first(cljs.core.next(arglist__26239));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__26239)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__26239))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__26239)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__26239)))));
return G__26238__delegate(a, f, x, y, z, more);
});
G__26238.cljs$lang$arity$variadic = G__26238__delegate;
return G__26238;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return swap_BANG___2.call(this,a,f);
case 3:
return swap_BANG___3.call(this,a,f,x);
case 4:
return swap_BANG___4.call(this,a,f,x,y);
case 5:
return swap_BANG___5.call(this,a,f,x,y,z);
default:
return swap_BANG___6.cljs$lang$arity$variadic(a,f,x,y,z, cljs.core.array_seq(arguments, 5));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___6.cljs$lang$applyTo;
swap_BANG_.cljs$lang$arity$2 = swap_BANG___2;
swap_BANG_.cljs$lang$arity$3 = swap_BANG___3;
swap_BANG_.cljs$lang$arity$4 = swap_BANG___4;
swap_BANG_.cljs$lang$arity$5 = swap_BANG___5;
swap_BANG_.cljs$lang$arity$variadic = swap_BANG___6.cljs$lang$arity$variadic;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){
if(cljs.core._EQ_.cljs$lang$arity$2(a.state,oldval))
{cljs.core.reset_BANG_(a,newval);
return true;
} else
{return false;
}
});
cljs.core.deref = (function deref(o){
return cljs.core._deref(o);
});
/**
* Sets the validator-fn for an atom. validator-fn must be nil or a
* side-effect-free fn of one argument, which will be passed the intended
* new state on any state change. If the new state is unacceptable, the
* validator-fn should return false or throw an Error. If the current state
* is not acceptable to the new validator, an Error will be thrown and the
* validator will not be changed.
*/
cljs.core.set_validator_BANG_ = (function set_validator_BANG_(iref,val){
return iref.validator = val;
});
/**
* Gets the validator-fn for a var/ref/agent/atom.
*/
cljs.core.get_validator = (function get_validator(iref){
return iref.validator;
});
/**
* Atomically sets the metadata for a namespace/var/ref/agent/atom to be:
* 
* (apply f its-current-meta args)
* 
* f must be free of side-effects
* @param {...*} var_args
*/
cljs.core.alter_meta_BANG_ = (function() { 
var alter_meta_BANG___delegate = function (iref,f,args){
return iref.meta = cljs.core.apply.cljs$lang$arity$3(f,iref.meta,args);
};
var alter_meta_BANG_ = function (iref,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return alter_meta_BANG___delegate.call(this, iref, f, args);
};
alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__26240){
var iref = cljs.core.first(arglist__26240);
var f = cljs.core.first(cljs.core.next(arglist__26240));
var args = cljs.core.rest(cljs.core.next(arglist__26240));
return alter_meta_BANG___delegate(iref, f, args);
});
alter_meta_BANG_.cljs$lang$arity$variadic = alter_meta_BANG___delegate;
return alter_meta_BANG_;
})()
;
/**
* Atomically resets the metadata for an atom
*/
cljs.core.reset_meta_BANG_ = (function reset_meta_BANG_(iref,m){
return iref.meta = m;
});
/**
* Alpha - subject to change.
* 
* Adds a watch function to an atom reference. The watch fn must be a
* fn of 4 args: a key, the reference, its old-state, its
* new-state. Whenever the reference's state might have been changed,
* any registered watches will have their functions called. The watch
* fn will be called synchronously. Note that an atom's state
* may have changed again prior to the fn call, so use old/new-state
* rather than derefing the reference. Keys must be unique per
* reference, and can be used to remove the watch with remove-watch,
* but are otherwise considered opaque by the watch mechanism.  Bear in
* mind that regardless of the result or action of the watch fns the
* atom's value will change.  Example:
* 
* (def a (atom 0))
* (add-watch a :inc (fn [k r o n] (assert (== 0 n))))
* (swap! a inc)
* ;; Assertion Error
* (deref a)
* ;=> 1
*/
cljs.core.add_watch = (function add_watch(iref,key,f){
return cljs.core._add_watch(iref,key,f);
});
/**
* Alpha - subject to change.
* 
* Removes a watch (set by add-watch) from a reference
*/
cljs.core.remove_watch = (function remove_watch(iref,key){
return cljs.core._remove_watch(iref,key);
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__0 = (function (){
return gensym.cljs$lang$arity$1("G__");
});
var gensym__1 = (function (prefix_string){
if((cljs.core.gensym_counter == null))
{cljs.core.gensym_counter = cljs.core.atom.cljs$lang$arity$1(0);
} else
{}
return cljs.core.symbol.cljs$lang$arity$1([cljs.core.str(prefix_string),cljs.core.str(cljs.core.swap_BANG_.cljs$lang$arity$2(cljs.core.gensym_counter,cljs.core.inc))].join(''));
});
gensym = function(prefix_string){
switch(arguments.length){
case 0:
return gensym__0.call(this);
case 1:
return gensym__1.call(this,prefix_string);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gensym.cljs$lang$arity$0 = gensym__0;
gensym.cljs$lang$arity$1 = gensym__1;
return gensym;
})()
;
cljs.core.fixture1 = 1;
cljs.core.fixture2 = 2;
goog.provide('cljs.core.Delay');

/**
* @constructor
*/
cljs.core.Delay = (function (state,f){
this.state = state;
this.f = f;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 32768;
})
cljs.core.Delay.cljs$lang$type = true;
cljs.core.Delay.cljs$lang$ctorPrSeq = (function (this__5785__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/Delay");
});
cljs.core.Delay.cljs$lang$ctorPrWriter = (function (this__5785__auto__,writer__5786__auto__,opt__5787__auto__){
return cljs.core._write(writer__5786__auto__,"cljs.core/Delay");
});
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (d){
var self__ = this;
return (new cljs.core.Keyword("\uFDD0:done")).call(null,cljs.core.deref(self__.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
return (new cljs.core.Keyword("\uFDD0:value")).call(null,cljs.core.swap_BANG_.cljs$lang$arity$2(self__.state,(function (p__26241){
var map__26242 = p__26241;
var map__26242__$1 = ((cljs.core.seq_QMARK_(map__26242))?cljs.core.apply.cljs$lang$arity$2(cljs.core.hash_map,map__26242):map__26242);
var curr_state = map__26242__$1;
var done = cljs.core._lookup.cljs$lang$arity$3(map__26242__$1,"\uFDD0:done",null);
if(cljs.core.truth_(done))
{return curr_state;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0:done","\uFDD0:value"],{"\uFDD0:done":true,"\uFDD0:value":(self__.f.cljs$lang$arity$0 ? self__.f.cljs$lang$arity$0() : self__.f.call(null))});
}
})));
});
/**
* returns true if x is a Delay created with delay
*/
cljs.core.delay_QMARK_ = (function delay_QMARK_(x){
return cljs.core.instance_QMARK_(cljs.core.Delay,x);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljs.core.force = (function force(x){
if(cljs.core.delay_QMARK_(x))
{return cljs.core.deref(x);
} else
{return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){
return cljs.core._realized_QMARK_(d);
});
cljs.core.IEncodeJS = {};
cljs.core._clj__GT_js = (function _clj__GT_js(x){
if((function (){var and__3941__auto__ = x;
if(and__3941__auto__)
{return x.cljs$core$IEncodeJS$_clj__GT_js$arity$1;
} else
{return and__3941__auto__;
}
})())
{return x.cljs$core$IEncodeJS$_clj__GT_js$arity$1(x);
} else
{var x__5845__auto__ = (((x == null))?null:x);
return (function (){var or__3943__auto__ = (cljs.core._clj__GT_js[goog.typeOf(x__5845__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._clj__GT_js["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol("IEncodeJS.-clj->js",x);
}
}
})().call(null,x);
}
});
cljs.core._key__GT_js = (function _key__GT_js(x){
if((function (){var and__3941__auto__ = x;
if(and__3941__auto__)
{return x.cljs$core$IEncodeJS$_key__GT_js$arity$1;
} else
{return and__3941__auto__;
}
})())
{return x.cljs$core$IEncodeJS$_key__GT_js$arity$1(x);
} else
{var x__5845__auto__ = (((x == null))?null:x);
return (function (){var or__3943__auto__ = (cljs.core._key__GT_js[goog.typeOf(x__5845__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._key__GT_js["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol("IEncodeJS.-key->js",x);
}
}
})().call(null,x);
}
});
(cljs.core.IEncodeJS["null"] = true);
(cljs.core._clj__GT_js["null"] = (function (x){
return null;
}));
(cljs.core.IEncodeJS["_"] = true);
(cljs.core._key__GT_js["_"] = (function (k){
if(cljs.core.truth_((function (){var or__3943__auto__ = cljs.core.string_QMARK_(k);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = cljs.core.number_QMARK_(k);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{var or__3943__auto____$2 = cljs.core.keyword_QMARK_(k);
if(or__3943__auto____$2)
{return or__3943__auto____$2;
} else
{return cljs.core.symbol_QMARK_(k);
}
}
}
})()))
{return cljs.core._clj__GT_js(k);
} else
{return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([k], 0));
}
}));
(cljs.core._clj__GT_js["_"] = (function (x){
if(cljs.core.keyword_QMARK_(x))
{return cljs.core.name(x);
} else
{if(cljs.core.symbol_QMARK_(x))
{return [cljs.core.str(x)].join('');
} else
{if(cljs.core.map_QMARK_(x))
{var m = {};
var G__26243_26245 = cljs.core.seq(x);
while(true){
if(G__26243_26245)
{var vec__26244_26246 = cljs.core.first(G__26243_26245);
var k_26247 = cljs.core.nth.cljs$lang$arity$3(vec__26244_26246,0,null);
var v_26248 = cljs.core.nth.cljs$lang$arity$3(vec__26244_26246,1,null);
(m[cljs.core._key__GT_js(k_26247)] = cljs.core._clj__GT_js(v_26248));
{
var G__26249 = cljs.core.next(G__26243_26245);
G__26243_26245 = G__26249;
continue;
}
} else
{}
break;
}
return m;
} else
{if(cljs.core.coll_QMARK_(x))
{return cljs.core.apply.cljs$lang$arity$2(cljs.core.array,cljs.core.map.cljs$lang$arity$2(cljs.core._clj__GT_js,x));
} else
{if("\uFDD0:else")
{return x;
} else
{return null;
}
}
}
}
}
}));
/**
* Recursively transforms ClojureScript values to JavaScript.
* sets/vectors/lists become Arrays, Keywords and Symbol become Strings,
* Maps become Objects. Arbitrary keys are encoded to by key->js.
*/
cljs.core.clj__GT_js = (function clj__GT_js(x){
return cljs.core._clj__GT_js(x);
});
cljs.core.IEncodeClojure = {};
cljs.core._js__GT_clj = (function() {
var _js__GT_clj = null;
var _js__GT_clj__1 = (function (x){
if((function (){var and__3941__auto__ = x;
if(and__3941__auto__)
{return x.cljs$core$IEncodeClojure$_js__GT_clj$arity$1;
} else
{return and__3941__auto__;
}
})())
{return x.cljs$core$IEncodeClojure$_js__GT_clj$arity$1(x);
} else
{var x__5845__auto__ = (((x == null))?null:x);
return (function (){var or__3943__auto__ = (cljs.core._js__GT_clj[goog.typeOf(x__5845__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._js__GT_clj["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol("IEncodeClojure.-js->clj",x);
}
}
})().call(null,x);
}
});
var _js__GT_clj__2 = (function (x,options){
if((function (){var and__3941__auto__ = x;
if(and__3941__auto__)
{return x.cljs$core$IEncodeClojure$_js__GT_clj$arity$2;
} else
{return and__3941__auto__;
}
})())
{return x.cljs$core$IEncodeClojure$_js__GT_clj$arity$2(x,options);
} else
{var x__5845__auto__ = (((x == null))?null:x);
return (function (){var or__3943__auto__ = (cljs.core._js__GT_clj[goog.typeOf(x__5845__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._js__GT_clj["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol("IEncodeClojure.-js->clj",x);
}
}
})().call(null,x,options);
}
});
_js__GT_clj = function(x,options){
switch(arguments.length){
case 1:
return _js__GT_clj__1.call(this,x);
case 2:
return _js__GT_clj__2.call(this,x,options);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_js__GT_clj.cljs$lang$arity$1 = _js__GT_clj__1;
_js__GT_clj.cljs$lang$arity$2 = _js__GT_clj__2;
return _js__GT_clj;
})()
;
(cljs.core.IEncodeClojure["_"] = true);
(cljs.core._js__GT_clj["_"] = (function() {
var G__26255 = null;
var G__26255__1 = (function (x){
return cljs.core._js__GT_clj.cljs$lang$arity$2(x,cljs.core.ObjMap.fromObject(["\uFDD0:keywordize-keys"],{"\uFDD0:keywordize-keys":false}));
});
var G__26255__2 = (function (x,options){
var map__26250 = options;
var map__26250__$1 = ((cljs.core.seq_QMARK_(map__26250))?cljs.core.apply.cljs$lang$arity$2(cljs.core.hash_map,map__26250):map__26250);
var keywordize_keys = cljs.core._lookup.cljs$lang$arity$3(map__26250__$1,"\uFDD0:keywordize-keys",null);
var keyfn = (cljs.core.truth_(keywordize_keys)?cljs.core.keyword:cljs.core.str);
var f = ((function (map__26250,map__26250__$1,keywordize_keys,keyfn){
return (function thisfn(x__$1){
if(cljs.core.seq_QMARK_(x__$1))
{return cljs.core.doall.cljs$lang$arity$1(cljs.core.map.cljs$lang$arity$2(thisfn,x__$1));
} else
{if(cljs.core.coll_QMARK_(x__$1))
{return cljs.core.into(cljs.core.empty(x__$1),cljs.core.map.cljs$lang$arity$2(thisfn,x__$1));
} else
{if(cljs.core.truth_(goog.isArray(x__$1)))
{return cljs.core.vec(cljs.core.map.cljs$lang$arity$2(thisfn,x__$1));
} else
{if((cljs.core.type(x__$1) === Object))
{return cljs.core.into(cljs.core.ObjMap.EMPTY,(function (){var iter__5942__auto__ = ((function (map__26250,map__26250__$1,keywordize_keys,keyfn){
return (function iter__26253(s__26254){
return (new cljs.core.LazySeq(null,false,((function (map__26250,map__26250__$1,keywordize_keys,keyfn){
return (function (){
var s__26254__$1 = s__26254;
while(true){
var temp__4092__auto__ = cljs.core.seq(s__26254__$1);
if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;
var k = cljs.core.first(xs__4579__auto__);
return cljs.core.cons(cljs.core.PersistentVector.fromArray([(keyfn.cljs$lang$arity$1 ? keyfn.cljs$lang$arity$1(k) : keyfn.call(null,k)),thisfn((x__$1[k]))], true),iter__26253(cljs.core.rest(s__26254__$1)));
} else
{return null;
}
break;
}
});})(map__26250,map__26250__$1,keywordize_keys,keyfn))
,null));
});})(map__26250,map__26250__$1,keywordize_keys,keyfn))
;
return iter__5942__auto__(cljs.core.js_keys(x__$1));
})());
} else
{if("\uFDD0:else")
{return x__$1;
} else
{return null;
}
}
}
}
}
});})(map__26250,map__26250__$1,keywordize_keys,keyfn))
;
return f(x);
});
G__26255 = function(x,options){
switch(arguments.length){
case 1:
return G__26255__1.call(this,x);
case 2:
return G__26255__2.call(this,x,options);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__26255;
})()
);
/**
* Recursively transforms JavaScript arrays into ClojureScript
* vectors, and JavaScript objects into ClojureScript maps.  With
* option ':keywordize-keys true' will convert object fields from
* strings to keywords.
* @param {...*} var_args
*/
cljs.core.js__GT_clj = (function() { 
var js__GT_clj__delegate = function (x,opts){
return cljs.core._js__GT_clj.cljs$lang$arity$2(x,cljs.core.apply.cljs$lang$arity$2(cljs.core.array_map,opts));
};
var js__GT_clj = function (x,var_args){
var opts = null;
if (goog.isDef(var_args)) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, opts);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__26256){
var x = cljs.core.first(arglist__26256);
var opts = cljs.core.rest(arglist__26256);
return js__GT_clj__delegate(x, opts);
});
js__GT_clj.cljs$lang$arity$variadic = js__GT_clj__delegate;
return js__GT_clj;
})()
;
/**
* Returns a memoized version of a referentially transparent function. The
* memoized version of the function keeps a cache of the mapping from arguments
* to results and, when calls with the same arguments are repeated often, has
* higher performance at the expense of higher memory use.
*/
cljs.core.memoize = (function memoize(f){
var mem = cljs.core.atom.cljs$lang$arity$1(cljs.core.ObjMap.EMPTY);
return (function() { 
var G__26257__delegate = function (args){
var temp__4090__auto__ = cljs.core._lookup.cljs$lang$arity$3(cljs.core.deref(mem),args,null);
if(cljs.core.truth_(temp__4090__auto__))
{var v = temp__4090__auto__;
return v;
} else
{var ret = cljs.core.apply.cljs$lang$arity$2(f,args);
cljs.core.swap_BANG_.cljs$lang$arity$4(mem,cljs.core.assoc,args,ret);
return ret;
}
};
var G__26257 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__26257__delegate.call(this, args);
};
G__26257.cljs$lang$maxFixedArity = 0;
G__26257.cljs$lang$applyTo = (function (arglist__26258){
var args = cljs.core.seq(arglist__26258);;
return G__26257__delegate(args);
});
G__26257.cljs$lang$arity$variadic = G__26257__delegate;
return G__26257;
})()
;
});
/**
* trampoline can be used to convert algorithms requiring mutual
* recursion without stack consumption. Calls f with supplied args, if
* any. If f returns a fn, calls that fn with no arguments, and
* continues to repeat, until the return value is not a fn, then
* returns that non-fn value. Note that if you want to return a fn as a
* final value, you must wrap it in some data structure and unpack it
* after trampoline returns.
* @param {...*} var_args
*/
cljs.core.trampoline = (function() {
var trampoline = null;
var trampoline__1 = (function (f){
while(true){
var ret = (f.cljs$lang$arity$0 ? f.cljs$lang$arity$0() : f.call(null));
if(cljs.core.fn_QMARK_(ret))
{{
var G__26259 = ret;
f = G__26259;
continue;
}
} else
{return ret;
}
break;
}
});
var trampoline__2 = (function() { 
var G__26260__delegate = function (f,args){
return trampoline.cljs$lang$arity$1((function (){
return cljs.core.apply.cljs$lang$arity$2(f,args);
}));
};
var G__26260 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__26260__delegate.call(this, f, args);
};
G__26260.cljs$lang$maxFixedArity = 1;
G__26260.cljs$lang$applyTo = (function (arglist__26261){
var f = cljs.core.first(arglist__26261);
var args = cljs.core.rest(arglist__26261);
return G__26260__delegate(f, args);
});
G__26260.cljs$lang$arity$variadic = G__26260__delegate;
return G__26260;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case 1:
return trampoline__1.call(this,f);
default:
return trampoline__2.cljs$lang$arity$variadic(f, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__2.cljs$lang$applyTo;
trampoline.cljs$lang$arity$1 = trampoline__1;
trampoline.cljs$lang$arity$variadic = trampoline__2.cljs$lang$arity$variadic;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){
return rand.cljs$lang$arity$1(1);
});
var rand__1 = (function (n){
return ((Math.random.cljs$lang$arity$0 ? Math.random.cljs$lang$arity$0() : Math.random.call(null)) * n);
});
rand = function(n){
switch(arguments.length){
case 0:
return rand__0.call(this);
case 1:
return rand__1.call(this,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rand.cljs$lang$arity$0 = rand__0;
rand.cljs$lang$arity$1 = rand__1;
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return (Math.floor.cljs$lang$arity$1 ? Math.floor.cljs$lang$arity$1(((Math.random.cljs$lang$arity$0 ? Math.random.cljs$lang$arity$0() : Math.random.call(null)) * n)) : Math.floor.call(null,((Math.random.cljs$lang$arity$0 ? Math.random.cljs$lang$arity$0() : Math.random.call(null)) * n)));
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
cljs.core.rand_nth = (function rand_nth(coll){
return cljs.core.nth.cljs$lang$arity$2(coll,cljs.core.rand_int(cljs.core.count(coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljs.core.group_by = (function group_by(f,coll){
return cljs.core.reduce.cljs$lang$arity$3((function (ret,x){
var k = (f.cljs$lang$arity$1 ? f.cljs$lang$arity$1(x) : f.call(null,x));
return cljs.core.assoc.cljs$lang$arity$3(ret,k,cljs.core.conj.cljs$lang$arity$2(cljs.core._lookup.cljs$lang$arity$3(ret,k,cljs.core.PersistentVector.EMPTY),x));
}),cljs.core.ObjMap.EMPTY,coll);
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){
return cljs.core.ObjMap.fromObject(["\uFDD0:parents","\uFDD0:descendants","\uFDD0:ancestors"],{"\uFDD0:parents":cljs.core.ObjMap.EMPTY,"\uFDD0:descendants":cljs.core.ObjMap.EMPTY,"\uFDD0:ancestors":cljs.core.ObjMap.EMPTY});
});
cljs.core.global_hierarchy = cljs.core.atom.cljs$lang$arity$1(cljs.core.make_hierarchy());
/**
* Returns true if (= child parent), or child is directly or indirectly derived from
* parent, either via a JavaScript type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___2 = (function (child,parent){
return isa_QMARK_.cljs$lang$arity$3(cljs.core.deref(cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___3 = (function (h,child,parent){
var or__3943__auto__ = cljs.core._EQ_.cljs$lang$arity$2(child,parent);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = cljs.core.contains_QMARK_((new cljs.core.Keyword("\uFDD0:ancestors")).call(null,h).call(null,child),parent);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{var and__3941__auto__ = cljs.core.vector_QMARK_(parent);
if(and__3941__auto__)
{var and__3941__auto____$1 = cljs.core.vector_QMARK_(child);
if(and__3941__auto____$1)
{var and__3941__auto____$2 = (cljs.core.count(parent) === cljs.core.count(child));
if(and__3941__auto____$2)
{var ret = true;
var i = 0;
while(true){
if(cljs.core.truth_((function (){var or__3943__auto____$2 = cljs.core.not(ret);
if(or__3943__auto____$2)
{return or__3943__auto____$2;
} else
{return (i === cljs.core.count(parent));
}
})()))
{return ret;
} else
{{
var G__26262 = isa_QMARK_.cljs$lang$arity$3(h,(child.cljs$lang$arity$1 ? child.cljs$lang$arity$1(i) : child.call(null,i)),(parent.cljs$lang$arity$1 ? parent.cljs$lang$arity$1(i) : parent.call(null,i)));
var G__26263 = (i + 1);
ret = G__26262;
i = G__26263;
continue;
}
}
break;
}
} else
{return and__3941__auto____$2;
}
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case 2:
return isa_QMARK___2.call(this,h,child);
case 3:
return isa_QMARK___3.call(this,h,child,parent);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
isa_QMARK_.cljs$lang$arity$2 = isa_QMARK___2;
isa_QMARK_.cljs$lang$arity$3 = isa_QMARK___3;
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a JavaScript type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.parents = (function() {
var parents = null;
var parents__1 = (function (tag){
return parents.cljs$lang$arity$2(cljs.core.deref(cljs.core.global_hierarchy),tag);
});
var parents__2 = (function (h,tag){
return cljs.core.not_empty(cljs.core._lookup.cljs$lang$arity$3((new cljs.core.Keyword("\uFDD0:parents")).call(null,h),tag,null));
});
parents = function(h,tag){
switch(arguments.length){
case 1:
return parents__1.call(this,h);
case 2:
return parents__2.call(this,h,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
parents.cljs$lang$arity$1 = parents__1;
parents.cljs$lang$arity$2 = parents__2;
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a JavaScript type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.ancestors = (function() {
var ancestors = null;
var ancestors__1 = (function (tag){
return ancestors.cljs$lang$arity$2(cljs.core.deref(cljs.core.global_hierarchy),tag);
});
var ancestors__2 = (function (h,tag){
return cljs.core.not_empty(cljs.core._lookup.cljs$lang$arity$3((new cljs.core.Keyword("\uFDD0:ancestors")).call(null,h),tag,null));
});
ancestors = function(h,tag){
switch(arguments.length){
case 1:
return ancestors__1.call(this,h);
case 2:
return ancestors__2.call(this,h,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ancestors.cljs$lang$arity$1 = ancestors__1;
ancestors.cljs$lang$arity$2 = ancestors__2;
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on JavaScript type inheritance
* relationships.
*/
cljs.core.descendants = (function() {
var descendants = null;
var descendants__1 = (function (tag){
return descendants.cljs$lang$arity$2(cljs.core.deref(cljs.core.global_hierarchy),tag);
});
var descendants__2 = (function (h,tag){
return cljs.core.not_empty(cljs.core._lookup.cljs$lang$arity$3((new cljs.core.Keyword("\uFDD0:descendants")).call(null,h),tag,null));
});
descendants = function(h,tag){
switch(arguments.length){
case 1:
return descendants__1.call(this,h);
case 2:
return descendants__2.call(this,h,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
descendants.cljs$lang$arity$1 = descendants__1;
descendants.cljs$lang$arity$2 = descendants__2;
return descendants;
})()
;
/**
* Establishes a parent/child relationship between parent and
* tag. Parent must be a namespace-qualified symbol or keyword and
* child can be either a namespace-qualified symbol or keyword or a
* class. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.derive = (function() {
var derive = null;
var derive__2 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace(parent)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([cljs.core.with_meta(cljs.core.list("\uFDD1'namespace","\uFDD1'parent"),cljs.core.hash_map("\uFDD0:line",7082,"\uFDD0:column",12))], 0)))].join('')));
}
cljs.core.swap_BANG_.cljs$lang$arity$4(cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__3 = (function (h,tag,parent){
if(cljs.core.not_EQ_.cljs$lang$arity$2(tag,parent))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([cljs.core.with_meta(cljs.core.list("\uFDD1'not=","\uFDD1'tag","\uFDD1'parent"),cljs.core.hash_map("\uFDD0:line",7086,"\uFDD0:column",12))], 0)))].join('')));
}
var tp = (new cljs.core.Keyword("\uFDD0:parents")).call(null,h);
var td = (new cljs.core.Keyword("\uFDD0:descendants")).call(null,h);
var ta = (new cljs.core.Keyword("\uFDD0:ancestors")).call(null,h);
var tf = ((function (tp,td,ta){
return (function (m,source,sources,target,targets){
return cljs.core.reduce.cljs$lang$arity$3(((function (tp,td,ta){
return (function (ret,k){
return cljs.core.assoc.cljs$lang$arity$3(ret,k,cljs.core.reduce.cljs$lang$arity$3(cljs.core.conj,cljs.core._lookup.cljs$lang$arity$3(targets,k,cljs.core.PersistentHashSet.EMPTY),cljs.core.cons(target,(targets.cljs$lang$arity$1 ? targets.cljs$lang$arity$1(target) : targets.call(null,target)))));
});})(tp,td,ta))
,m,cljs.core.cons(source,(sources.cljs$lang$arity$1 ? sources.cljs$lang$arity$1(source) : sources.call(null,source))));
});})(tp,td,ta))
;
var or__3943__auto__ = ((cljs.core.contains_QMARK_((tp.cljs$lang$arity$1 ? tp.cljs$lang$arity$1(tag) : tp.call(null,tag)),parent))?null:(function (){if(cljs.core.contains_QMARK_((ta.cljs$lang$arity$1 ? ta.cljs$lang$arity$1(tag) : ta.call(null,tag)),parent))
{throw (new Error([cljs.core.str(tag),cljs.core.str("already has"),cljs.core.str(parent),cljs.core.str("as ancestor")].join('')));
} else
{}
if(cljs.core.contains_QMARK_((ta.cljs$lang$arity$1 ? ta.cljs$lang$arity$1(parent) : ta.call(null,parent)),tag))
{throw (new Error([cljs.core.str("Cyclic derivation:"),cljs.core.str(parent),cljs.core.str("has"),cljs.core.str(tag),cljs.core.str("as ancestor")].join('')));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0:parents","\uFDD0:ancestors","\uFDD0:descendants"],{"\uFDD0:parents":cljs.core.assoc.cljs$lang$arity$3((new cljs.core.Keyword("\uFDD0:parents")).call(null,h),tag,cljs.core.conj.cljs$lang$arity$2(cljs.core._lookup.cljs$lang$arity$3(tp,tag,cljs.core.PersistentHashSet.EMPTY),parent)),"\uFDD0:ancestors":tf((new cljs.core.Keyword("\uFDD0:ancestors")).call(null,h),tag,td,parent,ta),"\uFDD0:descendants":tf((new cljs.core.Keyword("\uFDD0:descendants")).call(null,h),parent,ta,tag,td)});
})());
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case 2:
return derive__2.call(this,h,tag);
case 3:
return derive__3.call(this,h,tag,parent);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
derive.cljs$lang$arity$2 = derive__2;
derive.cljs$lang$arity$3 = derive__3;
return derive;
})()
;
/**
* Removes a parent/child relationship between parent and
* tag. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.underive = (function() {
var underive = null;
var underive__2 = (function (tag,parent){
cljs.core.swap_BANG_.cljs$lang$arity$4(cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__3 = (function (h,tag,parent){
var parentMap = (new cljs.core.Keyword("\uFDD0:parents")).call(null,h);
var childsParents = (cljs.core.truth_((parentMap.cljs$lang$arity$1 ? parentMap.cljs$lang$arity$1(tag) : parentMap.call(null,tag)))?cljs.core.disj.cljs$lang$arity$2((parentMap.cljs$lang$arity$1 ? parentMap.cljs$lang$arity$1(tag) : parentMap.call(null,tag)),parent):cljs.core.PersistentHashSet.EMPTY);
var newParents = (cljs.core.truth_(cljs.core.not_empty(childsParents))?cljs.core.assoc.cljs$lang$arity$3(parentMap,tag,childsParents):cljs.core.dissoc.cljs$lang$arity$2(parentMap,tag));
var deriv_seq = cljs.core.flatten(cljs.core.map.cljs$lang$arity$2(((function (parentMap,childsParents,newParents){
return (function (p1__26264_SHARP_){
return cljs.core.cons(cljs.core.first(p1__26264_SHARP_),cljs.core.interpose(cljs.core.first(p1__26264_SHARP_),cljs.core.second(p1__26264_SHARP_)));
});})(parentMap,childsParents,newParents))
,cljs.core.seq(newParents)));
if(cljs.core.contains_QMARK_((parentMap.cljs$lang$arity$1 ? parentMap.cljs$lang$arity$1(tag) : parentMap.call(null,tag)),parent))
{return cljs.core.reduce.cljs$lang$arity$3((function (p1__26265_SHARP_,p2__26266_SHARP_){
return cljs.core.apply.cljs$lang$arity$3(cljs.core.derive,p1__26265_SHARP_,p2__26266_SHARP_);
}),cljs.core.make_hierarchy(),cljs.core.partition.cljs$lang$arity$2(2,deriv_seq));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case 2:
return underive__2.call(this,h,tag);
case 3:
return underive__3.call(this,h,tag,parent);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
underive.cljs$lang$arity$2 = underive__2;
underive.cljs$lang$arity$3 = underive__3;
return underive;
})()
;
cljs.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){
cljs.core.swap_BANG_.cljs$lang$arity$2(method_cache,(function (_){
return cljs.core.deref(method_table);
}));
return cljs.core.swap_BANG_.cljs$lang$arity$2(cached_hierarchy,(function (_){
return cljs.core.deref(hierarchy);
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){
var xprefs = cljs.core.deref(prefer_table).call(null,x);
var or__3943__auto__ = (cljs.core.truth_((function (){var and__3941__auto__ = xprefs;
if(cljs.core.truth_(and__3941__auto__))
{return (xprefs.cljs$lang$arity$1 ? xprefs.cljs$lang$arity$1(y) : xprefs.call(null,y));
} else
{return and__3941__auto__;
}
})())?true:null);
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (function (){var ps = cljs.core.parents.cljs$lang$arity$1(y);
while(true){
if((cljs.core.count(ps) > 0))
{if(cljs.core.truth_(prefers_STAR_(x,cljs.core.first(ps),prefer_table)))
{} else
{}
{
var G__26267 = cljs.core.rest(ps);
ps = G__26267;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3943__auto____$1))
{return or__3943__auto____$1;
} else
{var or__3943__auto____$2 = (function (){var ps = cljs.core.parents.cljs$lang$arity$1(x);
while(true){
if((cljs.core.count(ps) > 0))
{if(cljs.core.truth_(prefers_STAR_(cljs.core.first(ps),y,prefer_table)))
{} else
{}
{
var G__26268 = cljs.core.rest(ps);
ps = G__26268;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3943__auto____$2))
{return or__3943__auto____$2;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3943__auto__ = cljs.core.prefers_STAR_(x,y,prefer_table);
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return cljs.core.isa_QMARK_.cljs$lang$arity$2(x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry = cljs.core.reduce.cljs$lang$arity$3((function (be,p__26271){
var vec__26272 = p__26271;
var k = cljs.core.nth.cljs$lang$arity$3(vec__26272,0,null);
var _ = cljs.core.nth.cljs$lang$arity$3(vec__26272,1,null);
var e = vec__26272;
if(cljs.core.isa_QMARK_.cljs$lang$arity$3(cljs.core.deref(hierarchy),dispatch_val,k))
{var be2 = (cljs.core.truth_((function (){var or__3943__auto__ = (be == null);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return cljs.core.dominates(k,cljs.core.first(be),prefer_table);
}
})())?e:be);
if(cljs.core.truth_(cljs.core.dominates(cljs.core.first(be2),k,prefer_table)))
{} else
{throw (new Error([cljs.core.str("Multiple methods in multimethod '"),cljs.core.str(name),cljs.core.str("' match dispatch value: "),cljs.core.str(dispatch_val),cljs.core.str(" -> "),cljs.core.str(k),cljs.core.str(" and "),cljs.core.str(cljs.core.first(be2)),cljs.core.str(", and neither is preferred")].join('')));
}
return be2;
} else
{return be;
}
}),null,cljs.core.deref(method_table));
if(cljs.core.truth_(best_entry))
{if(cljs.core._EQ_.cljs$lang$arity$2(cljs.core.deref(cached_hierarchy),cljs.core.deref(hierarchy)))
{cljs.core.swap_BANG_.cljs$lang$arity$4(method_cache,cljs.core.assoc,dispatch_val,cljs.core.second(best_entry));
return cljs.core.second(best_entry);
} else
{cljs.core.reset_cache(method_cache,method_table,cached_hierarchy,hierarchy);
return find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else
{return null;
}
});
cljs.core.IMultiFn = {};
cljs.core._reset = (function _reset(mf){
if((function (){var and__3941__auto__ = mf;
if(and__3941__auto__)
{return mf.cljs$core$IMultiFn$_reset$arity$1;
} else
{return and__3941__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_reset$arity$1(mf);
} else
{var x__5845__auto__ = (((mf == null))?null:mf);
return (function (){var or__3943__auto__ = (cljs.core._reset[goog.typeOf(x__5845__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._reset["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol("IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if((function (){var and__3941__auto__ = mf;
if(and__3941__auto__)
{return mf.cljs$core$IMultiFn$_add_method$arity$3;
} else
{return and__3941__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_add_method$arity$3(mf,dispatch_val,method);
} else
{var x__5845__auto__ = (((mf == null))?null:mf);
return (function (){var or__3943__auto__ = (cljs.core._add_method[goog.typeOf(x__5845__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._add_method["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol("IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if((function (){var and__3941__auto__ = mf;
if(and__3941__auto__)
{return mf.cljs$core$IMultiFn$_remove_method$arity$2;
} else
{return and__3941__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf,dispatch_val);
} else
{var x__5845__auto__ = (((mf == null))?null:mf);
return (function (){var or__3943__auto__ = (cljs.core._remove_method[goog.typeOf(x__5845__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._remove_method["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol("IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if((function (){var and__3941__auto__ = mf;
if(and__3941__auto__)
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3;
} else
{return and__3941__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf,dispatch_val,dispatch_val_y);
} else
{var x__5845__auto__ = (((mf == null))?null:mf);
return (function (){var or__3943__auto__ = (cljs.core._prefer_method[goog.typeOf(x__5845__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._prefer_method["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol("IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if((function (){var and__3941__auto__ = mf;
if(and__3941__auto__)
{return mf.cljs$core$IMultiFn$_get_method$arity$2;
} else
{return and__3941__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_get_method$arity$2(mf,dispatch_val);
} else
{var x__5845__auto__ = (((mf == null))?null:mf);
return (function (){var or__3943__auto__ = (cljs.core._get_method[goog.typeOf(x__5845__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._get_method["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol("IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if((function (){var and__3941__auto__ = mf;
if(and__3941__auto__)
{return mf.cljs$core$IMultiFn$_methods$arity$1;
} else
{return and__3941__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_methods$arity$1(mf);
} else
{var x__5845__auto__ = (((mf == null))?null:mf);
return (function (){var or__3943__auto__ = (cljs.core._methods[goog.typeOf(x__5845__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._methods["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol("IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if((function (){var and__3941__auto__ = mf;
if(and__3941__auto__)
{return mf.cljs$core$IMultiFn$_prefers$arity$1;
} else
{return and__3941__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_prefers$arity$1(mf);
} else
{var x__5845__auto__ = (((mf == null))?null:mf);
return (function (){var or__3943__auto__ = (cljs.core._prefers[goog.typeOf(x__5845__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._prefers["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol("IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if((function (){var and__3941__auto__ = mf;
if(and__3941__auto__)
{return mf.cljs$core$IMultiFn$_dispatch$arity$2;
} else
{return and__3941__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_dispatch$arity$2(mf,args);
} else
{var x__5845__auto__ = (((mf == null))?null:mf);
return (function (){var or__3943__auto__ = (cljs.core._dispatch[goog.typeOf(x__5845__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._dispatch["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol("IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val = cljs.core.apply.cljs$lang$arity$2(dispatch_fn,args);
var target_fn = cljs.core._get_method(mf,dispatch_val);
if(cljs.core.truth_(target_fn))
{} else
{throw (new Error([cljs.core.str("No method in multimethod '"),cljs.core.str(cljs.core.name),cljs.core.str("' for dispatch value: "),cljs.core.str(dispatch_val)].join('')));
}
return cljs.core.apply.cljs$lang$arity$2(target_fn,args);
});
goog.provide('cljs.core.MultiFn');

/**
* @constructor
*/
cljs.core.MultiFn = (function (name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
this.name = name;
this.dispatch_fn = dispatch_fn;
this.default_dispatch_val = default_dispatch_val;
this.hierarchy = hierarchy;
this.method_table = method_table;
this.prefer_table = prefer_table;
this.method_cache = method_cache;
this.cached_hierarchy = cached_hierarchy;
this.cljs$lang$protocol_mask$partition0$ = 4194304;
this.cljs$lang$protocol_mask$partition1$ = 256;
})
cljs.core.MultiFn.cljs$lang$type = true;
cljs.core.MultiFn.cljs$lang$ctorPrSeq = (function (this__5785__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/MultiFn");
});
cljs.core.MultiFn.cljs$lang$ctorPrWriter = (function (this__5785__auto__,writer__5786__auto__,opt__5787__auto__){
return cljs.core._write(writer__5786__auto__,"cljs.core/MultiFn");
});
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
return goog.getUid(this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1 = (function (mf){
var self__ = this;
cljs.core.swap_BANG_.cljs$lang$arity$2(self__.method_table,(function (mf__$1){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.cljs$lang$arity$2(self__.method_cache,(function (mf__$1){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.cljs$lang$arity$2(self__.prefer_table,(function (mf__$1){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.cljs$lang$arity$2(self__.cached_hierarchy,(function (mf__$1){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3 = (function (mf,dispatch_val,method){
var self__ = this;
cljs.core.swap_BANG_.cljs$lang$arity$4(self__.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache(self__.method_cache,self__.method_table,self__.cached_hierarchy,self__.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2 = (function (mf,dispatch_val){
var self__ = this;
cljs.core.swap_BANG_.cljs$lang$arity$3(self__.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache(self__.method_cache,self__.method_table,self__.cached_hierarchy,self__.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2 = (function (mf,dispatch_val){
var self__ = this;
if(cljs.core._EQ_.cljs$lang$arity$2(cljs.core.deref(self__.cached_hierarchy),cljs.core.deref(self__.hierarchy)))
{} else
{cljs.core.reset_cache(self__.method_cache,self__.method_table,self__.cached_hierarchy,self__.hierarchy);
}
var temp__4090__auto__ = cljs.core.deref(self__.method_cache).call(null,dispatch_val);
if(cljs.core.truth_(temp__4090__auto__))
{var target_fn = temp__4090__auto__;
return target_fn;
} else
{var temp__4090__auto____$1 = cljs.core.find_and_cache_best_method(self__.name,dispatch_val,self__.hierarchy,self__.method_table,self__.prefer_table,self__.method_cache,self__.cached_hierarchy);
if(cljs.core.truth_(temp__4090__auto____$1))
{var target_fn = temp__4090__auto____$1;
return target_fn;
} else
{return cljs.core.deref(self__.method_table).call(null,self__.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3 = (function (mf,dispatch_val_x,dispatch_val_y){
var self__ = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_(dispatch_val_x,dispatch_val_y,self__.prefer_table)))
{throw (new Error([cljs.core.str("Preference conflict in multimethod '"),cljs.core.str(self__.name),cljs.core.str("': "),cljs.core.str(dispatch_val_y),cljs.core.str(" is already preferred to "),cljs.core.str(dispatch_val_x)].join('')));
} else
{}
cljs.core.swap_BANG_.cljs$lang$arity$2(self__.prefer_table,(function (old){
return cljs.core.assoc.cljs$lang$arity$3(old,dispatch_val_x,cljs.core.conj.cljs$lang$arity$2(cljs.core._lookup.cljs$lang$arity$3(old,dispatch_val_x,cljs.core.PersistentHashSet.EMPTY),dispatch_val_y));
}));
return cljs.core.reset_cache(self__.method_cache,self__.method_table,self__.cached_hierarchy,self__.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1 = (function (mf){
var self__ = this;
return cljs.core.deref(self__.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = (function (mf){
var self__ = this;
return cljs.core.deref(self__.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch$arity$2 = (function (mf,args){
var self__ = this;
return cljs.core.do_dispatch(mf,self__.dispatch_fn,args);
});
cljs.core.MultiFn.prototype.call = (function() { 
var G__26273__delegate = function (_,args){
var self = this;
return cljs.core._dispatch(self,args);
};
var G__26273 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__26273__delegate.call(this, _, args);
};
G__26273.cljs$lang$maxFixedArity = 1;
G__26273.cljs$lang$applyTo = (function (arglist__26274){
var _ = cljs.core.first(arglist__26274);
var args = cljs.core.rest(arglist__26274);
return G__26273__delegate(_, args);
});
G__26273.cljs$lang$arity$variadic = G__26273__delegate;
return G__26273;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){
var self = this;
return cljs.core._dispatch(self,args);
});
/**
* Removes all of the methods of multimethod.
*/
cljs.core.remove_all_methods = (function remove_all_methods(multifn){
return cljs.core._reset(multifn);
});
/**
* Removes the method of multimethod associated with dispatch-value.
*/
cljs.core.remove_method = (function remove_method(multifn,dispatch_val){
return cljs.core._remove_method(multifn,dispatch_val);
});
/**
* Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
* when there is a conflict
*/
cljs.core.prefer_method = (function prefer_method(multifn,dispatch_val_x,dispatch_val_y){
return cljs.core._prefer_method(multifn,dispatch_val_x,dispatch_val_y);
});
/**
* Given a multimethod, returns a map of dispatch values -> dispatch fns
*/
cljs.core.methods$ = (function methods$(multifn){
return cljs.core._methods(multifn);
});
/**
* Given a multimethod and a dispatch value, returns the dispatch fn
* that would apply to that value, or nil if none apply and no default
*/
cljs.core.get_method = (function get_method(multifn,dispatch_val){
return cljs.core._get_method(multifn,dispatch_val);
});
/**
* Given a multimethod, returns a map of preferred value -> set of other values
*/
cljs.core.prefers = (function prefers(multifn){
return cljs.core._prefers(multifn);
});
goog.provide('cljs.core.UUID');

/**
* @constructor
*/
cljs.core.UUID = (function (uuid){
this.uuid = uuid;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2690646016;
})
cljs.core.UUID.cljs$lang$type = true;
cljs.core.UUID.cljs$lang$ctorPrSeq = (function (this__5785__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/UUID");
});
cljs.core.UUID.cljs$lang$ctorPrWriter = (function (this__5785__auto__,writer__5786__auto__,opt__5787__auto__){
return cljs.core._write(writer__5786__auto__,"cljs.core/UUID");
});
cljs.core.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
return goog.string.hashCode(cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this$], 0)));
});
cljs.core.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,___$1){
var self__ = this;
return cljs.core._write(writer,[cljs.core.str("#uuid \""),cljs.core.str(self__.uuid),cljs.core.str("\"")].join(''));
});
cljs.core.UUID.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (_,___$1){
var self__ = this;
return cljs.core.list.cljs$lang$arity$1([cljs.core.str("#uuid \""),cljs.core.str(self__.uuid),cljs.core.str("\"")].join(''));
});
cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var and__3941__auto__ = cljs.core.instance_QMARK_(cljs.core.UUID,other);
if(and__3941__auto__)
{return (self__.uuid === other.uuid);
} else
{return and__3941__auto__;
}
});
cljs.core.UUID.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this$], 0));
});
goog.provide('cljs.core.ExceptionInfo');

/**
* @constructor
*/
cljs.core.ExceptionInfo = (function (message,data,cause){
this.message = message;
this.data = data;
this.cause = cause;
})
cljs.core.ExceptionInfo.cljs$lang$type = true;
cljs.core.ExceptionInfo.cljs$lang$ctorPrSeq = (function (this__5788__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/ExceptionInfo");
});
cljs.core.ExceptionInfo.cljs$lang$ctorPrWriter = (function (this__5788__auto__,writer__5789__auto__,opts__5790__auto__){
return cljs.core._write(writer__5789__auto__,"cljs.core/ExceptionInfo");
});
cljs.core.ExceptionInfo.prototype = (new Error());
cljs.core.ExceptionInfo.prototype.constructor = cljs.core.ExceptionInfo;
/**
* Alpha - subject to change.
* Create an instance of ExceptionInfo, an Error type that carries a
* map of additional data.
*/
cljs.core.ex_info = (function() {
var ex_info = null;
var ex_info__2 = (function (msg,map){
return (new cljs.core.ExceptionInfo(msg,map,null));
});
var ex_info__3 = (function (msg,map,cause){
return (new cljs.core.ExceptionInfo(msg,map,cause));
});
ex_info = function(msg,map,cause){
switch(arguments.length){
case 2:
return ex_info__2.call(this,msg,map);
case 3:
return ex_info__3.call(this,msg,map,cause);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ex_info.cljs$lang$arity$2 = ex_info__2;
ex_info.cljs$lang$arity$3 = ex_info__3;
return ex_info;
})()
;
/**
* Alpha - subject to change.
* Returns exception data (a map) if ex is an ExceptionInfo.
* Otherwise returns nil.
*/
cljs.core.ex_data = (function ex_data(ex){
if(cljs.core.instance_QMARK_(cljs.core.ExceptionInfo,ex))
{return ex.data;
} else
{return null;
}
});
/**
* Alpha - subject to change.
* Returns the message attached to the given Error / ExceptionInfo object.
* For non-Errors returns nil.
*/
cljs.core.ex_message = (function ex_message(ex){
if(cljs.core.instance_QMARK_(Error,ex))
{return ex.message;
} else
{return null;
}
});
/**
* Alpha - subject to change.
* Returns exception cause (an Error / ExceptionInfo) if ex is an
* ExceptionInfo.
* Otherwise returns nil.
*/
cljs.core.ex_cause = (function ex_cause(ex){
if(cljs.core.instance_QMARK_(cljs.core.ExceptionInfo,ex))
{return ex.cause;
} else
{return null;
}
});
/**
* Returns an JavaScript compatible comparator based upon pred.
*/
cljs.core.comparator = (function comparator(pred){
return (function (x,y){
if(cljs.core.truth_((pred.cljs$lang$arity$2 ? pred.cljs$lang$arity$2(x,y) : pred.call(null,x,y))))
{return -1;
} else
{if(cljs.core.truth_((pred.cljs$lang$arity$2 ? pred.cljs$lang$arity$2(y,x) : pred.call(null,y,x))))
{return 1;
} else
{if("\uFDD0:else")
{return 0;
} else
{return null;
}
}
}
});
});
