_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"2l/u":function(e,t,n){"use strict";n.r(t),n.d(t,"About",(function(){return u}));var r=n("nKUr"),o=(n("q1tI"),function(e){return Object(r.jsxs)("div",{className:"text-white my-8 mx-auto bg-red-800 rounded bg-opacity-50",children:[Object(r.jsx)("div",{className:"text-4xl text-center m-4",children:e.title}),Object(r.jsxs)("div",{className:"w-64",children:[Object(r.jsx)("ul",{className:"m-4",children:e.shortlist.map((function(e){return Object(r.jsx)("li",{children:e})}))}),Object(r.jsx)("p",{className:"m-4",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi aperiam architecto minus at cumque quis quae quia voluptatum repellat, ullam veniam laborum earum reprehenderit illum non necessitatibus totam consectetur cupiditate ratione soluta obcaecati. Natus vitae eum eaque doloribus repellendus nisi sapiente iusto molestias enim fuga! Aut aliquid libero et commodi."})]})]})}),a=n("YFqc"),c=n.n(a),i=function(){return Object(r.jsx)("nav",{className:"p-3 w-4/5 mx-auto my-8 flex justify-between items-center text-white bg-opacity-50",children:Object(r.jsxs)("ul",{className:"flex justify-between w-full h-full cursor-pointer text-sm md:text-md lg:text-lg xl:text-3xl xl:h-16 3xl:text-4xl text-center border border-gray-500 rounded",children:[Object(r.jsx)(c.a,{href:"/",children:Object(r.jsx)("li",{className:"w-full hover:bg-gray-400 my-auto rounded",children:"Home"})}),Object(r.jsx)(c.a,{href:"/projects",children:Object(r.jsx)("li",{className:"w-full hover:bg-gray-400 my-auto rounded",children:"Projects"})}),Object(r.jsx)(c.a,{href:"/resume",children:Object(r.jsx)("li",{className:"w-full hover:bg-gray-400 my-auto rounded",children:"Resume"})}),Object(r.jsx)(c.a,{href:"/contact",children:Object(r.jsx)("li",{className:"w-full hover:bg-gray-400 my-auto rounded",children:"Contact"})})]})})},l=["Who","What","Where","When","Why"],s={Who:["Ali Umar","22 years old","Student","Jr Developer","Software Developer"],What:["Programming/Computer Science","General programming/server stuff","Scripting","Web stuff","Learn","Education"],Where:["Toronto, ON, Canada"],When:["present"],Why:["Loves coding and has fun doing it","Loves working with computers and computer parts","Loves problem solving","Need money to buy food"]},u=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(i,{}),Object(r.jsx)("div",{className:"flex flex-wrap",children:l.map((function(e){return Object(r.jsx)(o,{title:e,shortlist:s[e]})}))})]})};t.default=u},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),o=n("284h");t.__esModule=!0,t.default=void 0;var a=o(n("q1tI")),c=n("elyg"),i=n("nOHt"),l=n("vNVm"),s={};function u(e,t,n,r){if(e&&(0,c.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[t+"%"+n+(o?"%"+o:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,i.useRouter)(),o=n&&n.pathname||"/",f=a.default.useMemo((function(){var t=(0,c.resolveHref)(o,e.href,!0),n=r(t,2),a=n[0],i=n[1];return{href:a,as:e.as?(0,c.resolveHref)(o,e.as):i||a}}),[o,e.href,e.as]),d=f.href,m=f.as,p=e.children,h=e.replace,v=e.shallow,b=e.scroll,j=e.locale;"string"===typeof p&&(p=a.default.createElement("a",null,p));var x=a.Children.only(p),g=x&&"object"===typeof x&&x.ref,y=(0,l.useIntersection)({rootMargin:"200px"}),w=r(y,2),O=w[0],N=w[1],L=a.default.useCallback((function(e){O(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,O]);(0,a.useEffect)((function(){var e=N&&t&&(0,c.isLocalURL)(d),r="undefined"!==typeof j?j:n&&n.locale,o=s[d+"%"+m+(r?"%"+r:"")];e&&!o&&u(n,d,m,{locale:r})}),[m,d,N,j,t,n]);var _={ref:L,onClick:function(e){x.props&&"function"===typeof x.props.onClick&&x.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,i,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:a,locale:l,scroll:i}).then((function(e){e&&i&&document.body.focus()})))}(e,n,d,m,h,v,b,j)},onMouseEnter:function(e){(0,c.isLocalURL)(d)&&(x.props&&"function"===typeof x.props.onMouseEnter&&x.props.onMouseEnter(e),u(n,d,m,{priority:!0}))}};if(e.passHref||"a"===x.type&&!("href"in x.props)){var E="undefined"!==typeof j?j:n&&n.locale,q=n&&n.isLocaleDomain&&(0,c.getDomainLocale)(m,E,n&&n.locales,n&&n.domainLocales);_.href=q||(0,c.addBasePath)((0,c.addLocale)(m,E,n&&n.defaultLocale))}return a.default.cloneElement(x,_)};t.default=f},hIud:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return n("2l/u")}])},vNVm:function(e,t,n){"use strict";var r=n("J4zp");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!c,l=(0,o.useRef)(),s=(0,o.useState)(!1),u=r(s,2),f=u[0],d=u[1],m=(0,o.useCallback)((function(e){l.current&&(l.current(),l.current=void 0),n||f||e&&e.tagName&&(l.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=i.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return i.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,a=r.observer,c=r.elements;return c.set(e,t),a.observe(e),function(){c.delete(e),a.unobserve(e),0===c.size&&(a.disconnect(),i.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return(0,o.useEffect)((function(){if(!c&&!f){var e=(0,a.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,a.cancelIdleCallback)(e)}}}),[f]),[m,f]};var o=n("q1tI"),a=n("0G5g"),c="undefined"!==typeof IntersectionObserver;var i=new Map}},[["hIud",0,1,2]]]);