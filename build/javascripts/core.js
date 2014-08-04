/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas. Dual MIT/BSD license */
/*! NOTE: If you're already including a window.matchMedia polyfill via Modernizr or otherwise, you don't need this part */
window.matchMedia=window.matchMedia||function(e,t){var n,r=e.documentElement,i=r.firstElementChild||r.firstChild,s=e.createElement("body"),o=e.createElement("div");return o.id="mq-test-1",o.style.cssText="position:absolute;top:-100em",s.style.background="none",s.appendChild(o),function(e){return o.innerHTML='&shy;<style media="'+e+'"> #mq-test-1 { width: 42px; }</style>',r.insertBefore(s,i),n=o.offsetWidth==42,r.removeChild(s),{matches:n,media:e}}}(document),function(e){function S(){b(!0)}e.respond={},respond.update=function(){},respond.mediaQueriesSupported=e.matchMedia&&e.matchMedia("only all").matches;if(respond.mediaQueriesSupported)return;var t=e.document,n=t.documentElement,r=[],i=[],s=[],o={},u=30,a=t.getElementsByTagName("head")[0]||n,f=t.getElementsByTagName("base")[0],l=a.getElementsByTagName("link"),c=[],h=function(){var t=l,n=t.length,r=0,i,s,u,a;for(;r<n;r++)i=t[r],s=i.href,u=i.media,a=i.rel&&i.rel.toLowerCase()==="stylesheet",!!s&&a&&!o[s]&&(i.styleSheet&&i.styleSheet.rawCssText?(d(i.styleSheet.rawCssText,s,u),o[s]=!0):(!/^([a-zA-Z:]*\/\/)/.test(s)&&!f||s.replace(RegExp.$1,"").split("/")[0]===e.location.host)&&c.push({href:s,media:u}));p()},p=function(){if(c.length){var e=c.shift();w(e.href,function(t){d(t,e.href,e.media),o[e.href]=!0,p()})}},d=function(e,t,n){var s=e.match(/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi),o=s&&s.length||0,t=t.substring(0,t.lastIndexOf("/")),u=function(e){return e.replace(/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,"$1"+t+"$2$3")},a=!o&&n,f=0,l,c,h,p,d;t.length&&(t+="/"),a&&(o=1);for(;f<o;f++){l=0,a?(c=n,i.push(u(e))):(c=s[f].match(/@media *([^\{]+)\{([\S\s]+?)$/)&&RegExp.$1,i.push(RegExp.$2&&u(RegExp.$2))),p=c.split(","),d=p.length;for(;l<d;l++)h=p[l],r.push({media:h.split("(")[0].match(/(only\s+)?([a-zA-Z]+)\s?/)&&RegExp.$2||"all",rules:i.length-1,hasquery:h.indexOf("(")>-1,minw:h.match(/\(min\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:h.match(/\(max\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}b()},v,m,g=function(){var e,r=t.createElement("div"),i=t.body,s=!1;return r.style.cssText="position:absolute;font-size:1em;width:1em",i||(i=s=t.createElement("body"),i.style.background="none"),i.appendChild(r),n.insertBefore(i,n.firstChild),e=r.offsetWidth,s?n.removeChild(i):i.removeChild(r),e=y=parseFloat(e),e},y,b=function(e){var o="clientWidth",f=n[o],c=t.compatMode==="CSS1Compat"&&f||t.body[o]||f,h={},p=l[l.length-1],d=(new Date).getTime();if(e&&v&&d-v<u){clearTimeout(m),m=setTimeout(b,u);return}v=d;for(var w in r){var E=r[w],S=E.minw,x=E.maxw,T=S===null,N=x===null,C="em";!S||(S=parseFloat(S)*(S.indexOf(C)>-1?y||g():1)),!x||(x=parseFloat(x)*(x.indexOf(C)>-1?y||g():1));if(!E.hasquery||(!T||!N)&&(T||c>=S)&&(N||c<=x))h[E.media]||(h[E.media]=[]),h[E.media].push(i[E.rules])}for(var w in s)s[w]&&s[w].parentNode===a&&a.removeChild(s[w]);for(var w in h){var L=t.createElement("style"),A=h[w].join("\n");L.type="text/css",L.media=w,a.insertBefore(L,p.nextSibling),L.styleSheet?L.styleSheet.cssText=A:L.appendChild(t.createTextNode(A)),s.push(L)}},w=function(e,t){var n=E();if(!n)return;n.open("GET",e,!0),n.onreadystatechange=function(){if(n.readyState!=4||n.status!=200&&n.status!=304)return;t(n.responseText)};if(n.readyState==4)return;n.send(null)},E=function(){var e=!1;try{e=new XMLHttpRequest}catch(t){e=new ActiveXObject("Microsoft.XMLHTTP")}return function(){return e}}();h(),respond.update=h,e.addEventListener?e.addEventListener("resize",S,!1):e.attachEvent&&e.attachEvent("onresize",S)}(this);