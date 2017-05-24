!function(e){function t(n){if(o[n])return o[n].exports;var i=o[n]={exports:{},id:n,loaded:!1};return e[n].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}([function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var i=o(9),r=(n(i),o(1)),l=(n(r),o(6)),a=n(l),c=o(5),s=n(c),f=function(e){return document.getElementById(e)};window.onload=function(e){a.default.init(),f("index")&&(0,s.default)()}},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.GoogleAnalytics=void 0;var r=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),l=o(4),a=n(l),c=o(2),s=n(c);a.default.initialize(s.default.track.ga);var f=!1,m=t.GoogleAnalytics=function(){function e(){i(this,e),f&&console.log("Visitor tracker constructor"),f&&console.log("Submitting visitor tracking data"),a.default.pageview(window.location.pathname?window.location.pathname:"/"),a.default.plugin("displayfeatures")}return r(e,[{key:"event",value:function(e,t,o){a.default.event(e,t,{eventLabel:o})}}]),e}();t.default=new m},function(e,t,o){(function(t){"use strict";e.exports={identity:{title:"Website",desc:"Description of website",logo:"logo.jpg"},system:{public:t+"/../docs/",source:t+"/../src/",url:{NODE_ENV:"production"}.local?"http://localhost:3000/":"https://actuallymentor.github.io/win-matcha/",gverification:void 0,year:(new Date).getFullYear()},author:{firstname:"True",lastname:"Matcha",email:"mentor@palokaj.co",twitter:"@actuallymentor",facebook:"1299359953416544",url:"http://www.truematcha.nl/"},track:{ga:"UA-XXXXXXXX-XX"}}}).call(t,"/")},function(e,t){"use strict";e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var o=this[t];o[2]?e.push("@media "+o[2]+"{"+o[1]+"}"):e.push(o[1])}return e.join("")},e.i=function(t,o){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},i=0;i<this.length;i++){var r=this[i][0];"number"==typeof r&&(n[r]=!0)}for(i=0;i<t.length;i++){var l=t[i];"number"==typeof l[0]&&n[l[0]]||(o&&!l[2]?l[2]=o:o&&(l[2]="("+l[2]+") and ("+o+")"),e.push(l))}},e}},function(e,t,o){var n,i,r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};/*!
	 * universal-ga v1.1.0
	 * https://github.com/daxko/universal-ga 
	 *
	 * Copyright (c) 2017 Daxko
	 * MIT License
	 */
!function(o){"use strict";function l(e){console.warn("[analytics]",e)}function a(){for(var e=[],t=arguments.length,o=0;o<t;o++)e.push(arguments[o]);for(;"undefined"==typeof e[e.length-1];)e.pop();this._namespace&&(e[0]=this._namespace+"."+e[0],this._namespace=null),window&&"function"==typeof window.ga&&window.ga.apply(void 0,e)}var c=function(){return this};c.prototype={initialize:function(e,t){var o="https://www.google-analytics.com/";"object"===("undefined"==typeof e?"undefined":r(e))&&(t=e),t=t||{},t.debug?(o+="analytics_debug.js",delete t.debug):o+="analytics.js",function(e,t,o,n,i,r,l){e.GoogleAnalyticsObject=i,e[i]=e[i]||function(){(e[i].q=e[i].q||[]).push(arguments)},e[i].l=1*new Date,r=t.createElement(o),l=t.getElementsByTagName(o)[0],r.async=1,r.src=n,l.parentNode.insertBefore(r,l)}(window,document,"script",o,"ga"),e&&(t="{}"===JSON.stringify(t)?void 0:t,this.create(e,t))},create:function(e,t){return e?void a.call(this,"create",e,"auto",t):void l("tracking id is required to initialize.")},name:function(e){var t=new c;return t._namespace=e,t},set:function(e,t){return e&&e.length?(a.call(this,"set",e,t),this):void l("set: `key` is required.")},plugin:function(e,t){return e&&e.length?(a.call(this,"require",e,t),this):void l("plugin: `name` is required.")},pageview:function(e,t){return a.call(this,"send","pageview",e,t),this},screenview:function(e,t){return e?(t=t||{},t.screenName=e,a.call(this,"send","screenview",t),this):void l("screenview: `screenName` is required.")},event:function(e,t,o){return e&&t?(o&&"undefined"!=typeof o.eventValue&&"number"!=typeof o.eventValue&&(l("event: expected `options.eventValue` to be a Number."),o.eventValue=void 0),o&&o.nonInteraction&&"boolean"!=typeof o.nonInteraction&&(l("event: expected `options.nonInteraction` to be a boolean."),o.nonInteraction=!1),a.call(this,"send","event",e,t,o),this):void l("event: both `category` and `action` are required.")},timing:function(e,t,o,n){return e&&t&&"undefined"!=typeof o?"number"!=typeof o?l("event: expected `timingValue` to be a Number."):a.call(this,"send","timing",e,t,o,n):l("timing: `timingCategory`, `timingVar`, and `timingValue` are required."),this},exception:function(e,t){return a.call(this,"send","exception",{exDescription:e,exFatal:!!t}),this},custom:function(e,t){return/(dimension|metric)[0-9]+/i.test(e)?(a.call(this,"set",e,t),this):void l("custom: key must match dimension[0-9]+ or metric[0-9]+")}};var s=new c;n=[],i=function(){return s}.apply(t,n),!(void 0!==i&&(e.exports=i))}(void 0)},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=new Date("Jun 12, 2017 18:00:00").getTime(),n=function(e){return document.getElementById(e)},i=function e(t){return setInterval(function(t){var i=(new Date).getTime(),r=o-i,l=Math.floor(r/864e5),a=Math.floor(r%864e5/36e5),c=Math.floor(r%36e5/6e4),s=Math.floor(r%6e4/1e3);n("countdown").innerHTML=l+" dagen, "+a+" uur, "+c+" en "+s+" seconden",r<0&&(clearInterval(e),document.getElementById("COUNTDOWN").innerHTML="Winnaar is bekend!")},1e3)};t.default=i},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),l=o(1),a=n(l),c=function(e){return document.getElementById(e)},s=function(){function e(){i(this,e)}return r(e,[{key:"whymatcha",value:function(){c("index")&&(c("health").addEventListener("click",function(e){return a.default.event("Goal","Indicate","Health")}),c("brain").addEventListener("click",function(e){return a.default.event("Goal","Indicate","Brain")}),c("taste").addEventListener("click",function(e){return a.default.event("Goal","Indicate","Taste")}))}},{key:"init",value:function(){this.whymatcha()}}]),e}();t.default=new s},function(e,t,o){t=e.exports=o(3)(),t.push([e.id,"@import url(https://fonts.googleapis.com/css?family=Roboto:300);",""]),t.push([e.id,'.flow-text{font-weight:300}@media only screen and (min-width:360px){.flow-text{font-size:1rem;line-height:1.7rem}}@media only screen and (min-width:369.8px){.flow-text{font-size:1.002rem;line-height:1.7034rem}}@media only screen and (min-width:379.6px){.flow-text{font-size:1.004rem;line-height:1.7068rem}}@media only screen and (min-width:389.4px){.flow-text{font-size:1.006rem;line-height:1.7102rem}}@media only screen and (min-width:399.2px){.flow-text{font-size:1.008rem;line-height:1.7136rem}}@media only screen and (min-width:409px){.flow-text{font-size:1.01rem;line-height:1.717rem}}@media only screen and (min-width:418.8px){.flow-text{font-size:1.012rem;line-height:1.7204rem}}@media only screen and (min-width:428.6px){.flow-text{font-size:1.014rem;line-height:1.7238rem}}@media only screen and (min-width:438.4px){.flow-text{font-size:1.016rem;line-height:1.7272rem}}@media only screen and (min-width:448.2px){.flow-text{font-size:1.018rem;line-height:1.7306rem}}@media only screen and (min-width:458px){.flow-text{font-size:1.02rem;line-height:1.734rem}}@media only screen and (min-width:467.8px){.flow-text{font-size:1.022rem;line-height:1.7374rem}}@media only screen and (min-width:477.6px){.flow-text{font-size:1.024rem;line-height:1.7408rem}}@media only screen and (min-width:487.4px){.flow-text{font-size:1.026rem;line-height:1.7442rem}}@media only screen and (min-width:497.2px){.flow-text{font-size:1.028rem;line-height:1.7476rem}}@media only screen and (min-width:507px){.flow-text{font-size:1.03rem;line-height:1.751rem}}@media only screen and (min-width:516.8px){.flow-text{font-size:1.032rem;line-height:1.7544rem}}@media only screen and (min-width:526.6px){.flow-text{font-size:1.034rem;line-height:1.7578rem}}@media only screen and (min-width:536.4px){.flow-text{font-size:1.036rem;line-height:1.7612rem}}@media only screen and (min-width:546.2px){.flow-text{font-size:1.038rem;line-height:1.7646rem}}@media only screen and (min-width:556px){.flow-text{font-size:1.04rem;line-height:1.768rem}}@media only screen and (min-width:565.8px){.flow-text{font-size:1.042rem;line-height:1.7714rem}}@media only screen and (min-width:575.6px){.flow-text{font-size:1.044rem;line-height:1.7748rem}}@media only screen and (min-width:585.4px){.flow-text{font-size:1.046rem;line-height:1.7782rem}}@media only screen and (min-width:595.2px){.flow-text{font-size:1.048rem;line-height:1.7816rem}}@media only screen and (min-width:605px){.flow-text{font-size:1.05rem;line-height:1.785rem}}@media only screen and (min-width:614.8px){.flow-text{font-size:1.052rem;line-height:1.7884rem}}@media only screen and (min-width:624.6px){.flow-text{font-size:1.054rem;line-height:1.7918rem}}@media only screen and (min-width:634.4px){.flow-text{font-size:1.056rem;line-height:1.7952rem}}@media only screen and (min-width:644.2px){.flow-text{font-size:1.058rem;line-height:1.7986rem}}@media only screen and (min-width:654px){.flow-text{font-size:1.06rem;line-height:1.802rem}}@media only screen and (min-width:663.8px){.flow-text{font-size:1.062rem;line-height:1.8054rem}}@media only screen and (min-width:673.6px){.flow-text{font-size:1.064rem;line-height:1.8088rem}}@media only screen and (min-width:683.4px){.flow-text{font-size:1.066rem;line-height:1.8122rem}}@media only screen and (min-width:693.2px){.flow-text{font-size:1.068rem;line-height:1.8156rem}}@media only screen and (min-width:703px){.flow-text{font-size:1.07rem;line-height:1.819rem}}@media only screen and (min-width:712.8px){.flow-text{font-size:1.072rem;line-height:1.8224rem}}@media only screen and (min-width:722.6px){.flow-text{font-size:1.074rem;line-height:1.8258rem}}@media only screen and (min-width:732.4px){.flow-text{font-size:1.076rem;line-height:1.8292rem}}@media only screen and (min-width:742.2px){.flow-text{font-size:1.078rem;line-height:1.8326rem}}@media only screen and (min-width:752px){.flow-text{font-size:1.08rem;line-height:1.836rem}}@media only screen and (max-width:360px){.flow-text{font-size:1.2rem}}.container{margin:0 auto;max-width:1280px;width:99%}@media only screen and (min-width:601px){.container{width:85%}}@media only screen and (min-width:993px){.container{width:70%}}.section{padding-top:1rem;padding-bottom:1rem}.section.no-pad{padding:0}.section.no-pad-bot{padding-bottom:0}.section.no-pad-top{padding-top:0}.row{margin-left:auto;margin-right:auto;margin-bottom:20px}.row:after{content:"";display:table;clear:both}.row .col{float:left;box-sizing:border-box;padding:0 .75rem;min-height:1px}.row .col[class*=pull-],.row .col[class*=push-]{position:relative}.row .col.s1{width:8.33333%}.row .col.s1,.row .col.s2{margin-left:auto;left:auto;right:auto}.row .col.s2{width:16.66667%}.row .col.s3{width:25%}.row .col.s3,.row .col.s4{margin-left:auto;left:auto;right:auto}.row .col.s4{width:33.33333%}.row .col.s5{width:41.66667%}.row .col.s5,.row .col.s6{margin-left:auto;left:auto;right:auto}.row .col.s6{width:50%}.row .col.s7{width:58.33333%}.row .col.s7,.row .col.s8{margin-left:auto;left:auto;right:auto}.row .col.s8{width:66.66667%}.row .col.s9{width:75%}.row .col.s9,.row .col.s10{margin-left:auto;left:auto;right:auto}.row .col.s10{width:83.33333%}.row .col.s11{width:91.66667%}.row .col.s11,.row .col.s12{margin-left:auto;left:auto;right:auto}.row .col.s12{width:100%}.row .col.offset-s1{margin-left:8.33333%}.row .col.pull-s1{right:8.33333%}.row .col.push-s1{left:8.33333%}.row .col.offset-s2{margin-left:16.66667%}.row .col.pull-s2{right:16.66667%}.row .col.push-s2{left:16.66667%}.row .col.offset-s3{margin-left:25%}.row .col.pull-s3{right:25%}.row .col.push-s3{left:25%}.row .col.offset-s4{margin-left:33.33333%}.row .col.pull-s4{right:33.33333%}.row .col.push-s4{left:33.33333%}.row .col.offset-s5{margin-left:41.66667%}.row .col.pull-s5{right:41.66667%}.row .col.push-s5{left:41.66667%}.row .col.offset-s6{margin-left:50%}.row .col.pull-s6{right:50%}.row .col.push-s6{left:50%}.row .col.offset-s7{margin-left:58.33333%}.row .col.pull-s7{right:58.33333%}.row .col.push-s7{left:58.33333%}.row .col.offset-s8{margin-left:66.66667%}.row .col.pull-s8{right:66.66667%}.row .col.push-s8{left:66.66667%}.row .col.offset-s9{margin-left:75%}.row .col.pull-s9{right:75%}.row .col.push-s9{left:75%}.row .col.offset-s10{margin-left:83.33333%}.row .col.pull-s10{right:83.33333%}.row .col.push-s10{left:83.33333%}.row .col.offset-s11{margin-left:91.66667%}.row .col.pull-s11{right:91.66667%}.row .col.push-s11{left:91.66667%}.row .col.offset-s12{margin-left:100%}.row .col.pull-s12{right:100%}.row .col.push-s12{left:100%}@media only screen and (min-width:601px){.row .col.m1{width:8.33333%}.row .col.m1,.row .col.m2{margin-left:auto;left:auto;right:auto}.row .col.m2{width:16.66667%}.row .col.m3{width:25%}.row .col.m3,.row .col.m4{margin-left:auto;left:auto;right:auto}.row .col.m4{width:33.33333%}.row .col.m5{width:41.66667%}.row .col.m5,.row .col.m6{margin-left:auto;left:auto;right:auto}.row .col.m6{width:50%}.row .col.m7{width:58.33333%}.row .col.m7,.row .col.m8{margin-left:auto;left:auto;right:auto}.row .col.m8{width:66.66667%}.row .col.m9{width:75%}.row .col.m9,.row .col.m10{margin-left:auto;left:auto;right:auto}.row .col.m10{width:83.33333%}.row .col.m11{width:91.66667%}.row .col.m11,.row .col.m12{margin-left:auto;left:auto;right:auto}.row .col.m12{width:100%}.row .col.offset-m1{margin-left:8.33333%}.row .col.pull-m1{right:8.33333%}.row .col.push-m1{left:8.33333%}.row .col.offset-m2{margin-left:16.66667%}.row .col.pull-m2{right:16.66667%}.row .col.push-m2{left:16.66667%}.row .col.offset-m3{margin-left:25%}.row .col.pull-m3{right:25%}.row .col.push-m3{left:25%}.row .col.offset-m4{margin-left:33.33333%}.row .col.pull-m4{right:33.33333%}.row .col.push-m4{left:33.33333%}.row .col.offset-m5{margin-left:41.66667%}.row .col.pull-m5{right:41.66667%}.row .col.push-m5{left:41.66667%}.row .col.offset-m6{margin-left:50%}.row .col.pull-m6{right:50%}.row .col.push-m6{left:50%}.row .col.offset-m7{margin-left:58.33333%}.row .col.pull-m7{right:58.33333%}.row .col.push-m7{left:58.33333%}.row .col.offset-m8{margin-left:66.66667%}.row .col.pull-m8{right:66.66667%}.row .col.push-m8{left:66.66667%}.row .col.offset-m9{margin-left:75%}.row .col.pull-m9{right:75%}.row .col.push-m9{left:75%}.row .col.offset-m10{margin-left:83.33333%}.row .col.pull-m10{right:83.33333%}.row .col.push-m10{left:83.33333%}.row .col.offset-m11{margin-left:91.66667%}.row .col.pull-m11{right:91.66667%}.row .col.push-m11{left:91.66667%}.row .col.offset-m12{margin-left:100%}.row .col.pull-m12{right:100%}.row .col.push-m12{left:100%}}@media only screen and (min-width:993px){.row .col.l1{width:8.33333%}.row .col.l1,.row .col.l2{margin-left:auto;left:auto;right:auto}.row .col.l2{width:16.66667%}.row .col.l3{width:25%}.row .col.l3,.row .col.l4{margin-left:auto;left:auto;right:auto}.row .col.l4{width:33.33333%}.row .col.l5{width:41.66667%}.row .col.l5,.row .col.l6{margin-left:auto;left:auto;right:auto}.row .col.l6{width:50%}.row .col.l7{width:58.33333%}.row .col.l7,.row .col.l8{margin-left:auto;left:auto;right:auto}.row .col.l8{width:66.66667%}.row .col.l9{width:75%}.row .col.l9,.row .col.l10{margin-left:auto;left:auto;right:auto}.row .col.l10{width:83.33333%}.row .col.l11{width:91.66667%}.row .col.l11,.row .col.l12{margin-left:auto;left:auto;right:auto}.row .col.l12{width:100%}.row .col.offset-l1{margin-left:8.33333%}.row .col.pull-l1{right:8.33333%}.row .col.push-l1{left:8.33333%}.row .col.offset-l2{margin-left:16.66667%}.row .col.pull-l2{right:16.66667%}.row .col.push-l2{left:16.66667%}.row .col.offset-l3{margin-left:25%}.row .col.pull-l3{right:25%}.row .col.push-l3{left:25%}.row .col.offset-l4{margin-left:33.33333%}.row .col.pull-l4{right:33.33333%}.row .col.push-l4{left:33.33333%}.row .col.offset-l5{margin-left:41.66667%}.row .col.pull-l5{right:41.66667%}.row .col.push-l5{left:41.66667%}.row .col.offset-l6{margin-left:50%}.row .col.pull-l6{right:50%}.row .col.push-l6{left:50%}.row .col.offset-l7{margin-left:58.33333%}.row .col.pull-l7{right:58.33333%}.row .col.push-l7{left:58.33333%}.row .col.offset-l8{margin-left:66.66667%}.row .col.pull-l8{right:66.66667%}.row .col.push-l8{left:66.66667%}.row .col.offset-l9{margin-left:75%}.row .col.pull-l9{right:75%}.row .col.push-l9{left:75%}.row .col.offset-l10{margin-left:83.33333%}.row .col.pull-l10{right:83.33333%}.row .col.push-l10{left:83.33333%}.row .col.offset-l11{margin-left:91.66667%}.row .col.pull-l11{right:91.66667%}.row .col.push-l11{left:91.66667%}.row .col.offset-l12{margin-left:100%}.row .col.pull-l12{right:100%}.row .col.push-l12{left:100%}}.full{width:100%}.row{margin-bottom:0}.hide{opacity:0}body{margin:0;padding:0;font-family:Roboto,sans-serif;font-weight:300;display:flex;min-height:100vh;-ms-flex-direction:column;flex-direction:column;background:#fff}.hover,.hover:hover{transition-duration:.5s}.hover:hover{box-shadow:3px 3px 5px #a5a5a5}main{flex:1 0 auto;flex-direction:column}main,main #top{display:-ms-flexbox;display:flex;-ms-flex-direction:column}main #top{z-index:1;position:relative;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;flex-direction:column;height:300px;text-align:center;background-image:url(assets/matcha-background.jpg);background-size:cover;background-repeat:no-repeat;background-position:50%;color:#fff;box-shadow:1px 1px 20px grey}main #top h1{margin-top:0;font-size:40px;padding:10px 40px;background:rgba(0,0,0,.3)}main #countwrap{text-align:center;background:#f1f1f1;font-style:italic}main #maincontainer{-ms-flex:1 0 auto;flex:1 0 auto;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-ms-flex-direction:column;flex-direction:column}main #thebox #form,main #thebox #prize{margin-top:20px}main #thebox #form{padding:20px;background:#b3e5fc;text-align:left;border-radius:5px}main #thebox #form h2{text-align:center;font-size:35px}main #thebox #form #subform{margin-top:60px}main #thebox #prize #giftset{list-style:none;text-align:center;line-height:25px}main #thebox #signup{text-align:center}main #thebox #signup #sterretje{opacity:.8;font-size:12px;text-align:center}main #thebox #signup input{padding:10px;border:0;margin:5px 0;text-align:center}main #thebox #signup input[type=submit]{background-color:#4caf50;color:#fff;font-size:20px;border-radius:3px}main #thebox #signup input[type=checkbox]{margin-right:10px}main .whiteback{background:hsla(0,0%,100%,.5)}#footer{text-align:center;padding:10px;opacity:.6;font-size:13px}',""])},function(e,t,o){function n(e,t){for(var o=0;o<e.length;o++){var n=e[o],i=d[n.id];if(i){i.refs++;for(var r=0;r<i.parts.length;r++)i.parts[r](n.parts[r]);for(;r<n.parts.length;r++)i.parts.push(s(n.parts[r],t))}else{for(var l=[],r=0;r<n.parts.length;r++)l.push(s(n.parts[r],t));d[n.id]={id:n.id,refs:1,parts:l}}}}function i(e){for(var t=[],o={},n=0;n<e.length;n++){var i=e[n],r=i[0],l=i[1],a=i[2],c=i[3],s={css:l,media:a,sourceMap:c};o[r]?o[r].parts.push(s):t.push(o[r]={id:r,parts:[s]})}return t}function r(e,t){var o=p(),n=y[y.length-1];if("top"===e.insertAt)n?n.nextSibling?o.insertBefore(t,n.nextSibling):o.appendChild(t):o.insertBefore(t,o.firstChild),y.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");o.appendChild(t)}}function l(e){e.parentNode.removeChild(e);var t=y.indexOf(e);t>=0&&y.splice(t,1)}function a(e){var t=document.createElement("style");return t.type="text/css",r(e,t),t}function c(e){var t=document.createElement("link");return t.rel="stylesheet",r(e,t),t}function s(e,t){var o,n,i;if(t.singleton){var r=x++;o=g||(g=a(t)),n=f.bind(null,o,r,!1),i=f.bind(null,o,r,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(o=c(t),n=u.bind(null,o),i=function(){l(o),o.href&&URL.revokeObjectURL(o.href)}):(o=a(t),n=m.bind(null,o),i=function(){l(o)});return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else i()}}function f(e,t,o,n){var i=o?"":n.css;if(e.styleSheet)e.styleSheet.cssText=v(t,i);else{var r=document.createTextNode(i),l=e.childNodes;l[t]&&e.removeChild(l[t]),l.length?e.insertBefore(r,l[t]):e.appendChild(r)}}function m(e,t){var o=t.css,n=t.media;if(n&&e.setAttribute("media",n),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}function u(e,t){var o=t.css,n=t.sourceMap;n&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");var i=new Blob([o],{type:"text/css"}),r=e.href;e.href=URL.createObjectURL(i),r&&URL.revokeObjectURL(r)}var d={},h=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},w=h(function(){return/msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())}),p=h(function(){return document.head||document.getElementsByTagName("head")[0]}),g=null,x=0,y=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=w()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var o=i(e);return n(o,t),function(e){for(var r=[],l=0;l<o.length;l++){var a=o[l],c=d[a.id];c.refs--,r.push(c)}if(e){var s=i(e);n(s,t)}for(var l=0;l<r.length;l++){var c=r[l];if(0===c.refs){for(var f=0;f<c.parts.length;f++)c.parts[f]();delete d[c.id]}}}};var v=function(){var e=[];return function(t,o){return e[t]=o,e.filter(Boolean).join("\n")}}()},function(e,t,o){var n=o(7);"string"==typeof n&&(n=[[e.id,n,""]]),o(8)(n,{}),n.locals&&(e.exports=n.locals)}]);
//# sourceMappingURL=app.js.map