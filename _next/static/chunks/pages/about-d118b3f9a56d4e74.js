(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{65334:function(e,t,a){"use strict";a.d(t,{H1:function(){return f},H2:function(){return p},H3:function(){return m},H4:function(){return h},H5:function(){return g},H6:function(){return y}});var i=a(59499),n=a(57423),r=a(89419),l=a(67465),o=a(93950),u=a(8474);function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){(0,i.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e){var t=r.Z.select({web:{"aria-level":""+e},default:{}});return(0,n.forwardRef)((function(a,i){return n.default.createElement(u.Z,c(c(c({},t),{},{accessibilityRole:"header"},a),{},{style:[b["h"+e],a.style],ref:i}))}))}var f=d(1),p=d(2),m=d(3),h=d(4),g=d(5),y=d(6),b=l.Z.create({h1:{fontSize:(0,o.em)(2),marginVertical:(0,o.em)(.67),fontWeight:"bold"},h2:{fontSize:(0,o.em)(1.5),marginVertical:(0,o.em)(.83),fontWeight:"bold"},h3:{fontSize:(0,o.em)(1.17),marginVertical:(0,o.em)(1),fontWeight:"bold"},h4:{fontSize:(0,o.em)(1),marginVertical:(0,o.em)(1.33),fontWeight:"bold"},h5:{fontSize:(0,o.em)(.83),marginVertical:(0,o.em)(1.67),fontWeight:"bold"},h6:{fontSize:(0,o.em)(.67),marginVertical:(0,o.em)(2.33),fontWeight:"bold"}})},13082:function(e,t,a){var i=a(46594),n=a(57986);e.exports={translations:{en:i,lt:n},defaultLang:"en",useBrowserDefault:!0}},14520:function(e,t,a){"use strict";var i=a(57423),n=a(41664),r=a(70874),l=a(23384),o=a(554),u=a(37039),s=a(70988);i.default.createElement;t.Z=function(){var e=(0,s.default)(),t=(0,u.$G)().t,a=(0,u.gE)().lang;return i.default.createElement(r.$_,{style:[null==e?void 0:e.footer.container]},i.default.createElement(l.P,{style:[null==e?void 0:e.footer.paragraph,{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-around",width:200}]},i.default.createElement(n.default,{passHref:!0,href:{pathname:"/about",query:{lang:a}}},i.default.createElement(o.A,null,t("site.about"))),i.default.createElement(n.default,{passHref:!0,href:{pathname:"/tag",query:{lang:a}}},i.default.createElement(o.A,null,t("site.tags"))),i.default.createElement(n.default,{passHref:!0,href:{pathname:"/posts",query:{lang:a}}},i.default.createElement(o.A,null,t("site.archive")))),i.default.createElement(l.P,{style:[null==e?void 0:e.footer.paragraph]},i.default.createElement(o.A,{href:"https://creativecommons.org/licenses/by/4.0/"},t("site.cc"))),i.default.createElement(l.P,{style:[null==e?void 0:e.footer.paragraph]},t("site.copyright")),i.default.createElement(l.P,{style:[null==e?void 0:e.footer.paragraph]},i.default.createElement(n.default,{passHref:!0,href:{pathname:"/credits",query:{lang:a}}},i.default.createElement(o.A,null,t("site.third-party")))))}},27038:function(e,t,a){"use strict";var i=a(59499),n=a(16835),r=a(57423),l=a(41664),o=a(28890),u=a(1469),s=a(15639),c=a(55347),d=a(70874),f=a(23384),p=a(554),m=a(37039),h=a(13082),g=a(70988),y=a(35858);r.default.createElement;function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function v(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){(0,i.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var E=Object.keys(h.translations),k={en:"\ud83c\uddfa\ud83c\uddf8",lt:"\ud83c\uddf1\ud83c\uddf9"},j=o.Z.createAnimatedComponent(d.h4),O=function(e){var t=e.visible,a=(0,r.useState)((0,y.r)(1,10))[0],i=(0,m.$G)().t,n=(0,g.default)();return r.default.createElement(c.Z,{style:[null==n?void 0:n.profile.container]},r.default.createElement(u.Z,{source:{uri:"/profile/"+a+".jpg"},style:[null==n?void 0:n.profile.image,,{display:t?"flex":"none"}]}),r.default.createElement(f.P,{style:[null==n?void 0:n.text.heading,null==n?void 0:n.profile.text,,{display:t?"flex":"none"}]},i("site.tagline")))};t.Z=function(e){var t=e.opaque,a=e.style,i=(0,g.default)(),d=(0,r.useRef)(new o.Z.Value(0)).current,f=d.interpolate({inputRange:[0,1],outputRange:[null==i?void 0:i.header.transparent.backgroundColor,null==i?void 0:i.header.opaque.backgroundColor]}),h=(0,r.useRef)(new o.Z.Value(0)).current,y=h.interpolate({inputRange:[0,1],outputRange:[null==i?void 0:i.header.transparent.height,null==i?void 0:i.header.opaque.height]}),b=(0,m.gE)().lang,P=(0,m.$G)().t,w=(0,m.cQ)(),Z=(0,n.Z)(w,1)[0],x=new URLSearchParams({lang:b}).toString();return(0,r.useEffect)((function(){o.Z.timing(d,{toValue:+t,duration:300,useNativeDriver:!1}).start(),o.Z.timing(h,{toValue:+t,duration:300,useNativeDriver:!1}).start()}),[t]),r.default.createElement(j,{style:[null==i?void 0:i.header.style,a,{backgroundColor:f,height:y}]},r.default.createElement(O,{visible:t}),r.default.createElement(c.Z,{style:[null==i?void 0:i.header.inner]},r.default.createElement(l.default,{passHref:!0,href:{pathname:"/",query:{lang:b}}},r.default.createElement(p.A,null,r.default.createElement(c.Z,{style:[null==i?void 0:i.header.link]},r.default.createElement(u.Z,{source:{uri:"/favicon.svg"},style:[null==i?void 0:i.header.icon,{marginRight:5}]}),r.default.createElement(s.Z,{style:[t?null==i?void 0:i.header.textOpaque:null==i?void 0:i.header.textTransparent]},P("site.title"))))),r.default.createElement(p.A,{href:"https://tomasrav.me/?"+x},r.default.createElement(c.Z,{style:[null==i?void 0:i.header.link]},r.default.createElement(u.Z,{source:{uri:"/main_logo.svg"},style:[null==i?void 0:i.header.icon]}),r.default.createElement(s.Z,{style:[t?null==i?void 0:i.header.textOpaque:null==i?void 0:i.header.textTransparent]},P("site.main")))),E.map((function(e,t){E.length,++t;return r.default.createElement(l.default,{key:e,passHref:!0,href:{query:v(v({},Z),{},{lang:e})}},r.default.createElement(p.A,{style:[null==i?void 0:i.header.textOpaque,{fontSize:null==i?void 0:i.header.icon.height,marginLeft:5}]},k[e]))}))))}},9186:function(e,t,a){"use strict";a.r(t);var i=a(57423),n=a(1469),r=a(48946),l=a(37645),o=a(55347),u=a(37039),s=a(65334),c=a(23384),d=a(554),f=a(70988),p=a(35858),m=a(27038),h=a(14520);i.default.createElement;t.default=function(){var e=(0,f.default)(),t=(0,u.$G)().t,a=(0,i.useState)(!0),g=a[0],y=a[1],b=(0,i.useState)({uri:"/profile/"+(0,p.r)(1,10)+".jpg"})[0],v=(0,i.useCallback)((function(e){e.nativeEvent.contentOffset.y<=100!==g&&y(e.nativeEvent.contentOffset.y<=100)}),[g]);return i.default.createElement(r.Z,{style:[null==e?void 0:e.main.container]},i.default.createElement(l.Z,{onScroll:v,scrollEventThrottle:100,stickyHeaderIndices:[0],style:[null==e?void 0:e.about.scroller]},i.default.createElement(m.Z,{opaque:g}),i.default.createElement(o.Z,{style:[null==e?void 0:e.about.container]},i.default.createElement(n.Z,{source:b,style:[null==e?void 0:e.about.image]}),i.default.createElement(s.H1,{style:[null==e?void 0:e.text.heading,{alignSelf:"center"}]},t("about.title")),i.default.createElement(c.P,{style:[null==e?void 0:e.text.body]},t("about.p1")),i.default.createElement(c.P,{style:[null==e?void 0:e.text.body]},t("about.p2")),i.default.createElement(c.P,{style:[null==e?void 0:e.text.body]},t("about.p3")),i.default.createElement(c.P,{style:[null==e?void 0:e.text.body]},t("about.p4")),i.default.createElement(c.P,{style:[null==e?void 0:e.text.body]},t("about.p5")," ",i.default.createElement(d.A,{href:"https://tomasrav.me/"},"tomasrav.me")),i.default.createElement(c.P,{style:[null==e?void 0:e.text.body]},t("about.p6"))),i.default.createElement(h.Z,null)))}},35858:function(e,t,a){"use strict";function i(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e}a.d(t,{r:function(){return i}})},74613:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return a(9186)}])},46594:function(e){"use strict";e.exports=JSON.parse('{"hi":"Hello there","site":{"title":"Kitchen Escapades","main":"Main Website","tagline":"Less Escapades, more old recipe book.\\nForgive me.","copyright":"\xa9\ufe0f 2022 Tomas Ravinskas","cc":"Content available under CC-BY 4.0","third-party":"Third party licenses","about":"About","tags":"Tags","archive":"Archive"},"post":{"edited":"Edited on ","published":{"noedit":"Published on ","edited":"Originally published on "},"byline":"by ","via":"Via ","tag":"Tagged: "},"about":{"title":"Tomas\' Kitchen Escapades","p1":"I\'m freelance developer from Kaunas, Lithuania, Northern Europe \ud83e\udd76 And yes, I cook.","p2":"I started helping in the kitchen at an early age and soon I was making simple dishes by myself.","p3":"These days I mostly enjoy Italian \ud83c\uddee\ud83c\uddf9 and Japanese \ud83c\uddef\ud83c\uddf5 cuisine, and French \ud83c\uddeb\ud83c\uddf7 desserts. Of course I have a soft spot for my native Lithuanian \ud83c\uddf1\ud83c\uddf9 kitchen.","p4":"As I try new things and remember old, I try to add them here. I don\'t plan to get into food bloggin. However a sharable and pretty recipe book is nice to have.","p5":"For more about me, check out my portfolio and resume at","p6":"Or go back to main page and keep reading \ud83d\ude01"},"credits":{"name":"Tomas Ravinskas","content":"All content (including, but not limited to, articles and images) ","third-party":"Third party content contains source links and/or copyright information within their respective articles.","graphics1":"Graphics from the wonderful ","graphics2":"use here under ","graphics3":"including, but not limited to:","byline":"by ","tech":"If instead you\'re interested in tools and technologies used to build this website you can find more information, as well as the source code (MIT), ","github":"in the GitHub repository"}}')},57986:function(e){"use strict";e.exports=JSON.parse('{"hi":"Sveiki","site":{"title":"Virtuv\u0117s Nuotykiai","main":"Pagrindinis Puslapis","tagline":"Ma\u017eiau Nuotyki\u0173, daugiau sen\u0173 recept\u0173.\\nAtleiskit.","copyright":"\xa9\ufe0f 2022 Tomas Ravinskas","cc":"Turinys prieinamas pagal CC-BY 4.0","third-party":"Tre\u010di\u0173j\u0173 \u0161ali\u0173 licenzijos","about":"Apie","tags":"\u017dymos","archive":"Archyvas"},"post":{"edited":"Atnaujinta ","published":{"noedit":"Publikuota ","edited":"Pirma kart\u0105 publikuota "},"byline":" ","via":"\u0160altinis: ","tag":"Pa\u017eym\u0117ta: "},"about":{"title":"Tomo Virtuv\u0117s Nuotykiai","p1":"A\u0161 esu laisvai samdomas programuotojas i\u0161 Kauno, Lietuvos, \u0160iaur\u0117s Europos \ud83e\udd76 Ir tikrai taip, a\u0161 m\u0117gstu suktis virtuv\u0117je.","p2":"Pad\u0117ti virtuv\u0117je prad\u0117jau kai dar buvau visai pyplys. Neu\u017eilgo ir pats prad\u0117jau ruo\u0161ti nesud\u0117tingus patiekalus.","p3":"\u0160iom dienom labiausiai m\u0117gaujuosi Itali\u0161ka \ud83c\uddee\ud83c\uddf9 ir Japoni\u0161ka \ud83c\uddef\ud83c\uddf5 virtuve, bei Pranc\u016bzi\u0161kais \ud83c\uddeb\ud83c\uddf7 desertais. \u017dinoma \u0161irdyje turiu vietos ir gimtai Lietuvi\u0161kai \ud83c\uddf1\ud83c\uddf9 virtuvei.","p4":"I\u0161bandydamas naujus receptus ir prisimindamas senus, bandysiu apie juos ra\u0161yti \u010dia. Neplanuoju tapti \\"food blogger\\", bet gra\u017ei recept\u0173 knyga, kuria lengva dalintis yra labai smagus daiktas.","p5":"Jei norit paskaityt daugiau apie mane, pa\u017ei\u016br\u0117kit mano portfolio ir reziume \u010dia","p6":"Arba gr\u012f\u017ekite \u012f pradin\u012f puslap\u012f ir skaitykite toliau \ud83d\ude01"},"credits":{"name":"Tomas Ravinskas","content":"Visas turinys, \u012fskaitant, bet neapsiribojant, straipsniais ir nuotraukomis, ","third-party":"Tre\u010di\u0173j\u0173 \u0161ali\u0173 turinys turi \u0161altinio nuorodas ir/ar autorini\u0173 teisi\u0173 informacij\u0105 atitinkamuose straipsniuose.","graphics1":"Grafika i\u0161 nuostabiojo ","graphics2":"panaudota \u0161iame puslapyje pagal ","graphics3":"\u012fskaitant, bet neapsiribojant:","byline":" ","tech":"Jei Jums \u012fdomiau \u012frankiai ir technologijos naudotos kuriant \u0161\u012f puslap\u012f, daugiau informacijos ir \u0161altinio kod\u0105 (MIT), rasite ","github":"GitHub repozitorijoje"}}')}},function(e){e.O(0,[921,888,774,179],(function(){return t=74613,e(e.s=t);var t}));var t=e.O();_N_E=t}]);