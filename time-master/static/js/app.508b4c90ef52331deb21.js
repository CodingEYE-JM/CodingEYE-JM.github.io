webpackJsonp([1,2],{138:function(e,t){},139:function(e,t,n){n(380);var r=n(28)(n(140),n(393),null,null);e.exports=r.exports},140:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"app"}},141:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(52),a=n.n(r);t.default={components:{MenuBar:a.a}}},142:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(52),a=n.n(r);t.default={components:{MenuBar:a.a}}},143:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(382),a=n.n(r),o=n(79);t.default={name:"log-in",data:function(){return{msg:"Welcome to Time-Master",m_username:"admin",m_password:"admin"}},methods:{validateSubmit:function(){var e=a()(".form-container .username").val(),t=a()(".form-container .password").val();return""===e?(a()(".form-container .error").fadeOut("fast",function(){a()(this).css("top","27px")}),void a()(".form-container .error").fadeIn("fast",function(){a()(this).parent().find(".username").focus()})):""===t?(a()(".form-container .error").fadeOut("fast",function(){a()(this).css("top","96px")}),void a()(".form-container .error").fadeIn("fast",function(){a()(this).parent().find(".password").focus()})):void(e===this.m_username&&t===this.m_password&&o.a.push("/homepage"))},resetError:function(){a()(".form-container .error").fadeOut("fast")}}}},144:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={}},145:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(52),a=n.n(r);t.default={components:{MenuBar:a.a}}},146:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(147),a=n.n(r),o=n(52),s=n.n(o);t.default={data:function(){return{chart:null,opinion:["吃饭","学习","运动"],opinionData:[{value:26,name:"吃饭"},{value:31,name:"学习"},{value:8,name:"运动"}]}},methods:{drawPie:function(e){this.chart=a.a.init(document.getElementById(e)),this.chart.setOption({title:{text:"当月情况",left:"center",top:10,textStyle:{fontSize:16,fontFamily:"Helvetica",fontWeight:400}},tooltip:{trigger:"item",formatte:"{b}: {c} ({d}%)"},legend:{orient:"vertical",left:5,top:10,data:this.opinion},series:[{name:"当月情况",type:"pie",radius:["30%","50%"],center:["50%","55%"],avoidLabelOverlap:!1,label:{emphasis:{show:!0,textStyle:{fontSize:"16",fontWeight:"bold"}}},labelLine:{normal:{show:!1}},data:this.opinionData,itemStyle:{emphasis:{shadowBlur:10,shadowOffset:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]})}},mounted:function(){this.$nextTick(function(){this.drawPie("report")})},components:{MenuBar:s.a}}},375:function(e,t){},376:function(e,t){},377:function(e,t){},378:function(e,t){},379:function(e,t){},380:function(e,t){},381:function(e,t){},383:function(e,t,n){n(377);var r=n(28)(n(141),n(390),null,null);e.exports=r.exports},384:function(e,t,n){n(376);var r=n(28)(n(142),n(389),null,null);e.exports=r.exports},385:function(e,t,n){n(375);var r=n(28)(n(143),n(388),null,null);e.exports=r.exports},386:function(e,t,n){n(379);var r=n(28)(n(145),n(392),null,null);e.exports=r.exports},387:function(e,t,n){n(381);var r=n(28)(n(146),n(394),null,null);e.exports=r.exports},388:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"log-in"},[n("h1",[e._v(e._s(e.msg))]),e._v(" "),n("div",{staticClass:"form-container"},[n("input",{staticClass:"username",attrs:{type:"text",name:"username",placeholder:"Username"},on:{keydown:e.resetError}}),e._v(" "),n("input",{staticClass:"password",attrs:{type:"password",name:"password",placeholder:"Password"},on:{keydown:e.resetError}}),e._v(" "),n("button",{staticClass:"sign-in",on:{click:e.validateSubmit}},[e._v("Sign In")]),e._v(" "),e._m(0)]),e._v(" "),e._m(1),e._v(" "),n("div",{staticClass:"bg"}),e._v(" "),n("div",{staticClass:"bg-image"}),e._v(" "),n("div")])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"error"},[n("span",[e._v("+")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"connect"},[n("p",[e._v("Or connect with:")]),e._v(" "),n("p",[n("a",{staticClass:"we-chat",attrs:{href:"#"}}),e._v(" "),n("a",{staticClass:"qq",attrs:{href:"#"}})])])}]}},389:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v("\n  This is Home Page\n  "),n("MenuBar")],1)},staticRenderFns:[]}},390:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v("\n  This is About\n  "),n("MenuBar")],1)},staticRenderFns:[]}},391:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"menu-bar"},[n("router-link",{staticClass:"menu-bar-item",attrs:{to:"/homepage"}},[e._v("设定")]),e._v(" "),n("router-link",{staticClass:"menu-bar-item",attrs:{to:"/report"}},[e._v("报表")]),e._v(" "),n("router-link",{staticClass:"menu-bar-item",attrs:{to:"/recommend"}},[e._v("推荐")]),e._v(" "),n("router-link",{staticClass:"menu-bar-item",attrs:{to:"/about"}},[e._v("关于")])],1)},staticRenderFns:[]}},392:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v("\n  This is Recommend\n  "),n("MenuBar")],1)},staticRenderFns:[]}},393:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]}},394:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main_content"},[n("div",{attrs:{id:"report"}}),e._v(" "),n("MenuBar")],1)},staticRenderFns:[]}},431:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(80),a=n(139),o=n.n(a),s=n(79),i=n(138);n.n(i);r.a.config.productionTip=!1,new r.a({el:"#app",router:s.a,template:"<App/>",components:{App:o.a}})},52:function(e,t,n){n(378);var r=n(28)(n(144),n(391),null,null);e.exports=r.exports},79:function(e,t,n){"use strict";var r=n(80),a=n(395),o=n(385),s=n.n(o),i=n(384),c=n.n(i),u=n(387),l=n.n(u),f=n(386),d=n.n(f),p=n(383),m=n.n(p);r.a.use(a.a),t.a=new a.a({routes:[{path:"/",name:"Login",component:s.a},{path:"/homepage",name:"HomePage",component:c.a},{path:"/report",name:"Report",component:l.a},{path:"/recommend",name:"Recommend",component:d.a},{path:"/about",name:"About",component:m.a}]})}},[431]);