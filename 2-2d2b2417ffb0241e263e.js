(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{254:function(e,t,a){"use strict";a.d(t,"b",function(){return o});var r=a(0),n=a.n(r),i=a(70),l=a.n(i);a.d(t,"a",function(){return l.a});a(255),a(9).default.enqueue;var s=n.a.createContext({});function c(e){var t=e.staticQueryData,a=e.data,r=e.query,i=e.render,l=a?a.data:t[r]&&t[r].data;return n.a.createElement(n.a.Fragment,null,l&&i(l),!l&&n.a.createElement("div",null,"Loading (StaticQuery)"))}var o=function(e){var t=e.data,a=e.query,r=e.render,i=e.children;return n.a.createElement(s.Consumer,null,function(e){return n.a.createElement(c,{data:t,query:a,render:r||i,staticQueryData:e})})}},255:function(e,t,a){var r;e.exports=(r=a(261))&&r.default||r},256:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=a(264),l=a(266),s=a(265),c=a(234),o=a.n(c);t.a=function(){return n.a.createElement("ul",{className:o.a.list},n.a.createElement("li",{className:o.a.list__item},n.a.createElement("a",{className:o.a.list__icon,href:"https://www.twitter.com/alilynnet"},n.a.createElement(i.a,{icon:l.d}))),n.a.createElement("li",{className:o.a.list__item},n.a.createElement("a",{className:o.a.list__icon,href:"https://dev.to/alilynne"},n.a.createElement(i.a,{icon:l.a}))),n.a.createElement("li",{className:o.a.list__item},n.a.createElement("a",{className:o.a.list__icon,href:"https://www.github.com/alilynne"},n.a.createElement(i.a,{icon:l.b}))),n.a.createElement("li",{className:o.a.list__item},n.a.createElement("a",{className:o.a.list__icon,href:"https://www.linkedin.com/in/alilynne/"},n.a.createElement(i.a,{icon:l.c}))),n.a.createElement("li",{className:o.a.list__item},n.a.createElement("a",{className:o.a.list__icon,href:"mailto:ali@alilynne.com"},n.a.createElement(i.a,{icon:s.c}))))}},257:function(e,t,a){"use strict";var r=a(263),n=a(0),i=a.n(n),l=a(267),s=a(254),c=function(e){var t=e.title,a=e.description,n=e.image,c=e.pathname,d=e.article;return i.a.createElement(s.b,{query:o,render:function(e){var r=e.site.siteMetadata,s=r.defaultTitle,o=r.titleTemplate,u=r.defaultDescription,m=r.siteUrl,f=r.defaultImage,p=r.twitterUsername,g={title:t||s,description:a||u,image:""+m+(n||f),url:""+m+(c||"/")};return i.a.createElement(i.a.Fragment,null,i.a.createElement(l.Helmet,{title:g.title,titleTemplate:o},i.a.createElement("meta",{name:"description",content:g.description}),i.a.createElement("meta",{name:"image",content:g.image}),g.url&&i.a.createElement("meta",{property:"og:url",content:g.url}),!d?null:i.a.createElement("meta",{property:"og:type",content:"article"}),g.title&&i.a.createElement("meta",{property:"og:title",content:g.title}),g.description&&i.a.createElement("meta",{property:"og:description",content:g.description}),g.image&&i.a.createElement("meta",{property:"og:image",content:g.image}),i.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),p&&i.a.createElement("meta",{name:"twitter:creator",content:p}),g.title&&i.a.createElement("meta",{name:"twitter:title",content:g.title}),g.description&&i.a.createElement("meta",{name:"twitter:description",content:g.description}),g.image&&i.a.createElement("meta",{name:"twitter:image",content:g.image})))},data:r})};t.a=c;var o="1376445457";c.defaultProps={title:null,description:null,image:null,pathname:null,article:!1}},258:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=a(259),l=a(256),s=a(235),c=a.n(s),o=function(){var e=i.data;return n.a.createElement("footer",{className:c.a.footer},n.a.createElement("p",null,"Created by ",e.site.siteMetadata.author," © ",(new Date).getFullYear()),n.a.createElement(l.a,null))},d=a(260),u=a(254),m=a(262),f=a.n(m),p=a(236),g=a.n(p),h=function(){var e=d.data;return n.a.createElement("header",{className:g.a.header},n.a.createElement(u.a,{className:g.a.title,to:"/"},n.a.createElement("h1",{className:g.a.titleHeader},n.a.createElement(f.a,null),e.site.siteMetadata.title)),n.a.createElement("ul",{className:g.a.navList},n.a.createElement("li",null,n.a.createElement(u.a,{className:g.a.navItem,activeClassName:g.a.activeNavItem,to:"/"},"Home")),n.a.createElement("li",null,n.a.createElement(u.a,{className:g.a.navItem,activeClassName:g.a.activeNavItem,to:"/about",partiallyActive:!0},"About")),n.a.createElement("li",null,n.a.createElement(u.a,{className:g.a.navItem,to:"/contact",activeClassName:g.a.activeNavItem,partiallyActive:!0},"Contact")),n.a.createElement("li",null,n.a.createElement(u.a,{className:g.a.navItem,to:"/blog",activeClassName:g.a.activeNavItem,partiallyActive:!0},"Blog")),n.a.createElement("li",null,n.a.createElement(u.a,{className:g.a.navItem,to:"/projects",activeClassName:g.a.activeNavItem,partiallyActive:!0},"Projects"))))},v=(a(237),a(238),a(239)),E=a.n(v);t.a=function(e){var t=e.children;return n.a.createElement("div",{className:E.a.container},n.a.createElement("div",{className:E.a.content},n.a.createElement(h,null),t),n.a.createElement(o,null))}},259:function(e){e.exports={data:{site:{siteMetadata:{author:"Ali Lynne Thompson"}}}}},260:function(e){e.exports={data:{site:{siteMetadata:{title:"AliLynne"}}}}},261:function(e,t,a){"use strict";a.r(t);a(18);var r=a(0),n=a.n(r),i=a(97);t.default=function(e){var t=e.location,a=e.pageResources;return a?n.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null}},262:function(e,t,a){var r=a(0);function n(e){return r.createElement("svg",e,r.createElement("g",null,[r.createElement("path",{d:"M379.769,153.431c-29.777,55.586-17.604,99.504-6.645,139.039C378.717,312.648,384,331.708,384,351.889   c0,15.897-2.956,30.873-8.785,44.51c-5.727,13.396-14.104,25.212-24.898,35.12C327.169,452.768,294.555,464,256,464   s-71.169-11.232-94.316-32.481c-10.795-9.908-19.172-21.725-24.898-35.12c-5.829-13.637-8.785-28.612-8.785-44.51   c0-31.65,6.92-55.999,21.775-76.626c13.061-18.134,32.646-34.094,63.505-51.749l6.506-3.725   c20.197-11.57,27.001-15.467,43.976-23.588c31.845-15.234,66.513-28.387,103.041-39.094   C371.088,155.851,375.412,154.625,379.769,153.431 M416,128c-18.863,4.163-36.75,8.786-53.697,13.753   c-40.457,11.858-75.509,25.693-105.445,40.015c-19.271,9.219-26.236,13.393-51.522,27.859C147.001,243,112,278.926,112,351.889   S167.635,480,256,480s144-55.148,144-128.111S338.999,224,416,128L416,128z",key:0}),r.createElement("path",{d:"M133.516,123.147c21.432,6.955,47.724,16.977,69.799,29.846c6.385,3.723,12.092,7.493,17.092,11.291   c-5.504,2.905-10.895,5.855-16.138,8.833c-7.212,4.096-14.359,8.362-21.243,12.679c-10.484,6.574-20.435,13.308-29.789,20.156   C152.637,180.034,147.555,151.15,133.516,123.147 M96,96c41.475,47.079,44.624,103.891,39.382,144.741   c12.772-11.274,31.177-25.734,56.144-41.389c6.442-4.041,13.312-8.158,20.645-12.322c11.578-6.575,23.538-12.822,35.834-18.765   c-9.113-10.898-22.07-20.606-36.631-29.095C162.631,110.756,96,96,96,96L96,96z",key:1}),r.createElement("path",{d:"M344.629,80.697c5.309,7.227,12.393,17.661,17.66,27.726c-29.863,8.433-65.994,21.145-94.967,33.476   c-5.963-6.235-12.982-12.294-21.006-18.135c17.437-15.757,38.773-27.668,63.652-35.506   C324.518,83.675,337.016,81.612,344.629,80.697 M352,64c0,0-78.623,2.321-130.681,62.469c16.629,9.903,29.735,20.503,38.959,31.533   l2.724,3.257c37.152-16.794,88.131-34.085,120.998-42.009C377.617,95.827,352,64,352,64L352,64z",key:2}),r.createElement("path",{d:"M181.229,53.532c9.241,6.122,22.68,16.481,35.999,31.924c-4.851,4.201-9.487,8.623-13.888,13.247   c-14.024-7.088-24.951-12.192-36.826-16.602C170.174,73.63,175.095,63.788,181.229,53.532 M176,32   c-15.256,22.406-25.684,45.299-30.336,59.997c21.111,6.355,35.475,13.215,61.389,26.574c9.505-11.4,20.415-21.626,32.605-30.543   C210.342,47.655,176,32,176,32L176,32z",key:3})]))}n.defaultProps={height:"100px",width:"100px",fill:"#ba2d65",version:"1.1",x:"0px",y:"0px",viewBox:"0 0 512 512",enableBackground:"new 0 0 512 512",xmlSpace:"preserve"},e.exports=n,n.default=n},263:function(e){e.exports={data:{site:{siteMetadata:{defaultTitle:"AliLynne",titleTemplate:"%s | AliLynne",defaultDescription:"Where Ali talks about programming and life. She focuses on JavaScript, React, & Gatsby as well as crochet and sewing.",siteUrl:"https://www.alilynne.com",defaultImage:"/src/images/rosePink.png",twitterUsername:"@alilynnet"}}}}},271:function(e,t,a){"use strict";a(23),a(24),a(13),a(72),a(149),a(286);var r=a(17);t.__esModule=!0,t.default=void 0;var n,i=r(a(77)),l=r(a(76)),s=r(a(150)),c=r(a(151)),o=r(a(0)),d=r(a(54)),u=function(e){var t=(0,c.default)({},e),a=t.resolutions,r=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=b([].concat(t.fluid))),t.fixed&&(t.fixed=b([].concat(t.fixed))),t},m=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},f=Object.create({}),p=function(e){var t=u(e),a=m(t);return f[a]||!1},g="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,v=h&&window.IntersectionObserver,E=new WeakMap;function y(e){return e.map(function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return o.default.createElement(o.default.Fragment,{key:t},r&&o.default.createElement("source",{type:"image/webp",media:n,srcSet:r,sizes:i}),o.default.createElement("source",{media:n,srcSet:a,sizes:i}))})}function b(e){var t=[],a=[];return e.forEach(function(e){return(e.media?t:a).push(e)}),[].concat(t,a)}function S(e){return e.map(function(e){var t=e.src,a=e.media,r=e.tracedSVG;return o.default.createElement("source",{key:t,media:a,srcSet:r})})}function w(e){return e.map(function(e){var t=e.src,a=e.media,r=e.base64;return o.default.createElement("source",{key:t,media:a,srcSet:r})})}function L(e,t){var a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?r:a)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var N=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver(function(e){e.forEach(function(e){if(E.has(e.target)){var t=E.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),E.delete(e.target),t())}})},{rootMargin:"200px"})),n);return a&&(a.observe(e),E.set(e,t)),function(){a.unobserve(e),E.delete(e)}},I=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",c=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",o=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map(function(e){return(e.srcSetWebp?L(e,!0):"")+L(e)}).join("")+"<img "+o+l+s+a+r+t+i+n+c+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},C=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,n=e.spreadProps,i=o.default.createElement(_,(0,c.default)({src:t},n));return a.length>1?o.default.createElement("picture",null,r(a),i):i},_=o.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,n=e.src,i=e.style,l=e.onLoad,d=e.onError,u=e.loading,m=e.draggable,f=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return o.default.createElement("img",(0,c.default)({sizes:a,srcSet:r,src:n},f,{onLoad:l,onError:d,ref:t,loading:u,draggable:m,style:(0,c.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))});_.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var R=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&p(t),a.addNoScript=!(t.critical&&!t.fadeIn),a.useIOSupport=!g&&v&&!t.critical&&!a.seenBefore;var r=t.critical||"eager"==t.loading||h&&(g||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=o.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,i.default)(a)),a.handleRef=a.handleRef.bind((0,i.default)(a)),a}(0,l.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=N(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=m(t),f[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,l=e.imgStyle,s=void 0===l?{}:l,d=e.placeholderStyle,m=void 0===d?{}:d,f=e.placeholderClassName,p=e.fluid,g=e.fixed,h=e.backgroundColor,v=e.durationFadeIn,E=e.Tag,b=e.itemProp,L=e.loading,N=e.draggable,R=!1===this.state.fadeIn||this.state.imgLoaded,z=!0===this.state.fadeIn&&!this.state.imgCached,O=(0,c.default)({opacity:R?1:0,transition:z?"opacity "+v+"ms":"none"},s),x="boolean"==typeof h?"lightgray":h,M={transitionDelay:v+"ms"},V=(0,c.default)({opacity:this.state.imgLoaded?0:1},z&&M,{},s,{},m),k={title:t,alt:this.state.isVisible?"":a,style:V,className:f};if(p){var T=p,P=T[0];return o.default.createElement(E,{className:(r||"")+" gatsby-image-wrapper",style:(0,c.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(P.srcSet)},o.default.createElement(E,{style:{width:"100%",paddingBottom:100/P.aspectRatio+"%"}}),x&&o.default.createElement(E,{title:t,style:(0,c.default)({backgroundColor:x,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},z&&M)}),P.base64&&o.default.createElement(C,{src:P.base64,spreadProps:k,imageVariants:T,generateSources:w}),P.tracedSVG&&o.default.createElement(C,{src:P.tracedSVG,spreadProps:k,imageVariants:T,generateSources:S}),this.state.isVisible&&o.default.createElement("picture",null,y(T),o.default.createElement(_,{alt:a,title:t,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:b,loading:L,draggable:N})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,c.default)({alt:a,title:t,loading:L},P,{imageVariants:T}))}}))}if(g){var j=g,q=j[0],A=(0,c.default)({position:"relative",overflow:"hidden",display:"inline-block",width:q.width,height:q.height},i);return"inherit"===i.display&&delete A.display,o.default.createElement(E,{className:(r||"")+" gatsby-image-wrapper",style:A,ref:this.handleRef,key:"fixed-"+JSON.stringify(q.srcSet)},x&&o.default.createElement(E,{title:t,style:(0,c.default)({backgroundColor:x,width:q.width,opacity:this.state.imgLoaded?0:1,height:q.height},z&&M)}),q.base64&&o.default.createElement(C,{src:q.base64,spreadProps:k,imageVariants:j,generateSources:w}),q.tracedSVG&&o.default.createElement(C,{src:q.tracedSVG,spreadProps:k,imageVariants:j,generateSources:S}),this.state.isVisible&&o.default.createElement("picture",null,y(j),o.default.createElement(_,{alt:a,title:t,width:q.width,height:q.height,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:b,loading:L,draggable:N})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,c.default)({alt:a,title:t,loading:L},q,{imageVariants:j}))}}))}return null},t}(o.default.Component);R.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var z=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),O=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string});R.propTypes={resolutions:z,sizes:O,fixed:d.default.oneOfType([z,d.default.arrayOf(z)]),fluid:d.default.oneOfType([O,d.default.arrayOf(O)]),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var x=R;t.default=x},286:function(e,t,a){"use strict";a(287)("fixed",function(e){return function(){return e(this,"tt","","")}})},287:function(e,t,a){var r=a(1),n=a(7),i=a(33),l=/"/g,s=function(e,t,a,r){var n=String(i(e)),s="<"+t;return""!==a&&(s+=" "+a+'="'+String(r).replace(l,"&quot;")+'"'),s+">"+n+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(s),r(r.P+r.F*n(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}}}]);
//# sourceMappingURL=2-2d2b2417ffb0241e263e.js.map