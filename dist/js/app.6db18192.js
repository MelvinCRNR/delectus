(function(t){
    function e(e){
        for(var r,i,c=e[0],l=e[1],u=e[2],f=0,p=[];f<c.length;f++)i=c[f],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;
        for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);
        s&&s(e);while(p.length)p.shift()();return a.push.apply(a,u||[]),n()
    }
    function n(){
        for(var t,e=0;e<a.length;e++){
            for(var n=a[e],r=!0,c=1;c<n.length;c++){
                var l=n[c];0!==o[l]&&(r=!1)
            }
            r&&(a.splice(e--,1),t=i(i.s=n[0]))
        }return t
    }
    var r={},o={app:0},a=[];
    function i(e){
        if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}
    };
    return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})
},
i.r=function(t){
    "undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},
    i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;
        if(4&e&&"object"===typeof t&&t&&t.__esModule)
            return t;
        var n=Object.create(null);
        if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),
        2&e&&"string"!=typeof t)
        for(var r in t)i.d(n,r,function(e){
            return t[e]
        }.bind(null,r));
        return n
    },
        i.n=function(t){
            var e=t&&t.__esModule?function(){
                return t["default"]
            }:function(){
                return t
            };return i.d(e,"a",e),e},
            i.o=function(t,e){
                return Object.prototype.hasOwnProperty.call(t,e)
            },
            i.p="/";
            var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);
            c.push=e,c=c.slice();
            for(var u=0;u<c.length;u++)
            e(c[u]);
            var s=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},
            "034f":function(t,e,n){"use strict";n("85ec")},
            "56d7":function(t,e,n){"use strict";
            n.r(e);n("e260"),n("e6cf"),n("cca6"),
            n("a79d");var r=n("2b0e"),
            o=function(){
                var t=this,e=t.$createElement,n=t._self._c||e;
                return n("div",{attrs:{id:"app"}},[n("index")],1)},a=[],
                i=function(){var t=this,e=t.$createElement,n=t._self._c||e;
                    return n("div",[n("div",{staticClass:"jumbotron"},[n("h1",{staticClass:"font-weight-bold"},[t._v("Suppression de mots")]),n("div",{staticClass:"card"},[n("div",{staticClass:"card-body"},
                    t._l(t.arrayTitlte,(function(e){
                        return n("span",{key:e,staticClass:"badge bg-secondary p-1 m-2"},[t._v(" "+t._s(e)+" "),n("button",{staticClass:"btn btn-danger btn-sm",on:{click:function(n){return t.removeTitle(e)}}},[t._v("x")])])})),0)])])])},c=[],l=(n("ac1f"),n("466d"),n("a434"),n("bc3a")),u=n.n(l),s={data:function(){return{todos:[],title:"",arrayTitlte:[]}},mounted:function(){this.getData()},methods:{getData:function(){var t=this;u.a.get("https://jsonplaceholder.typicode.com/todos").then((function(e){t.todos=e.data,t.title=t.todos[0].title,t.arrayTitlte=t.title.match(/("[^"]+"|[^"\s]+)/g)}))},removeTitle:function(t){var e=this.arrayTitlte.indexOf(t);this.arrayTitlte.splice(e,1)}}},f=s,p=n("2877"),d=Object(p["a"])(f,i,c,!1,null,null,null),b=d.exports,v={name:"App",components:{Index:b}},h=v,y=(n("034f"),Object(p["a"])(h,o,a,!1,null,null,null)),g=y.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(g)}}).$mount("#app")},"85ec":function(t,e,n){}});
//# sourceMappingURL=app.6db18192.js.map