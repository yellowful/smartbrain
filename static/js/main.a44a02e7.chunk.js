(this.webpackJsonpsmartbrain=this.webpackJsonpsmartbrain||[]).push([[0],{29:function(e,t,a){e.exports=a(73)},34:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(23),r=a.n(l),i=(a(34),a(24)),s=a(25),o=a(28),m=a(27),d=a(26),u=a.n(d),f=function(){return c.a.createElement("div",{className:"flex justify-end"},c.a.createElement("nav",{className:"f5 code mh5 mv3 grow pointer"},"sign in"))},h=function(){return c.a.createElement("div",null,c.a.createElement("div",{id:"logo",className:"f6 tc ba bw1 br3 fl w-10 ml3 mt5 shadow-3 grow f2-l"},"logo brain"))},g=function(e){var t=e.onSending,a=e.onTyping,n=e.searchField;return c.a.createElement("div",{className:"mt5 tc flex flex-column"},c.a.createElement("h3",null,"give it a try"),c.a.createElement("div",{className:"flex justify-center items-center mh7"},c.a.createElement("input",{type:"search",className:"fl w5 w-70-l f3-l f6",onChange:a,value:n}),c.a.createElement("button",{className:"fl w4 tc w-30-l f3-l f6",onClick:t},"send")))},p=function(e){var t=e.imageUrl,a=e.answer;return""!==a?c.a.createElement("div",{className:"mt1 tc flex flex-column justify-center"},c.a.createElement("div",null,c.a.createElement("p",null,"The celebrity is ",c.a.createElement("span",{className:"f3 dark-blue"},a),".")),c.a.createElement("div",{className:"mh6 mw-50 shadow"},c.a.createElement("img",{alt:"celebrity",src:t}))):c.a.createElement("div",{className:"mt1 tc mh6 mw-50 shadow"},c.a.createElement("img",{alt:"celebrity",src:t}))},v=(a(72),new u.a.App({apiKey:"a40220c771334acaafb67dd020f7f9d0"})),w=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).onTyping=function(t){e.setState({searchField:t.target.value})},e.onSending=function(){e.getFaceData(e.state.searchField),e.setState({URL:e.state.searchField})},e.getFaceData=function(t){v.models.predict("e466caa0619f444ab97497640cefc4dc",t).then((function(t){var a=t.rawData.outputs[0].data.regions[0].data.concepts[0].name;e.setState({predictName:a}),e.setState({searchField:""})}))},e.state={searchField:"",URL:"https://samples.clarifai.com/celebrity.jpeg",predictName:""},e}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"flex flex-column"},c.a.createElement(f,null),c.a.createElement(h,null),c.a.createElement(g,{onSending:this.onSending,onTyping:this.onTyping,searchField:this.state.searchField}),c.a.createElement(p,{imageUrl:this.state.URL,answer:this.state.predictName}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.a44a02e7.chunk.js.map