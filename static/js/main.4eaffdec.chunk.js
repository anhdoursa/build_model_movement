(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{262:function(e,t,n){e.exports=n(288)},272:function(e,t){},273:function(e,t){},281:function(e,t){},284:function(e,t){},285:function(e,t){},288:function(e,t,n){"use strict";n.r(t);var o=n(26),a=n.n(o),r=n(237),i=n.n(r),s=n(6),c=n.n(s),l=n(14),u=(n(287),n(257)),h=n(258),m=n.n(h),f=function(e){var t=Object(o.useRef)(null),n=Object(o.useRef)(null),r={position:"absolute",marginLeft:"auto",marginRight:"auto",left:0,right:0,textAlign:"center",zIndex:9,width:320,height:240},i=function(){var e=Object(l.a)(c.a.mark(function e(){var t;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a();case 2:t=e.sent,console.log("Posenet loaded"),setInterval(function(){h(t)},100);case 5:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),s=function(t,n){if(t.score>0){var o=t.keypoints;e.mapJoints(o),o.forEach(function(e){var t=e.position.x,o=e.position.y;n.beginPath(),n.arc(t,o,5,0,3*Math.PI),n.fillStyle="Indigo",n.fill()})}},h=function(){var e=Object(l.a)(c.a.mark(function e(o){var a,r,i,l;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("undefined"===typeof t.current||null===t.current||4!==t.current.video.readyState){e.next=12;break}return a=t.current.video,r=a.videoWidth,i=a.videoHeight,t.current.video.width=r,t.current.video.height=i,n.current.width=r,n.current.height=i,e.next=10,o.estimateSinglePose(a);case 10:l=e.sent,s(l,n.current.getContext("2d"));case 12:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return i(),a.a.createElement("div",null,a.a.createElement(m.a,{ref:t,style:r}),a.a.createElement("canvas",{ref:n,style:r}))},p=n(199),d=n(291),g=function(e,t,n,o,a){return e.score>.3&&t.score>.3?(Math.atan2(t.position.y-e.position.y,t.position.x-e.position.x)+n)*a:o*a},b=function(e,t,n){return(n-e)/(t-e)*Math.PI},v=function(e,t,n){if(e.score>.3&&t.score>.3&&n.score>.3){var o=Math.abs(e.position.x-n.position.x),a=Math.abs(t.position.x-n.position.x);return b(-100,100,a-o)-Math.PI/2}return 0},w=function(e,t){if(e.score>.3&&t.score>.3){var n=Math.abs(e.position.y),o=Math.abs(t.position.y);return b(-80,80,o-n)-Math.PI/2}return 0};function y(e){var t,n=Object(o.useRef)(),r=Object(d.a)("model.glb"),i=r.nodes,s=r.materials;return console.log(i),Object(p.b)(function(n,o){(t=e.getJoints())&&(i.Ch36.skeleton.bones[7].rotation.y=g(t[5],t[7],0,0,-1),i.Ch36.skeleton.bones[9].rotation.x=g(t[7],t[9],0,0,1),i.Ch36.skeleton.bones[31].rotation.y=g(t[8],t[6],0,0,-1),i.Ch36.skeleton.bones[33].rotation.x=g(t[10],t[8],0,0,-1),i.Ch36.skeleton.bones[55].rotation.z=g(t[11],t[13],Math.PI/2,Math.PI,-1),i.Ch36.skeleton.bones[60].rotation.z=g(t[12],t[14],Math.PI/2,Math.PI,-1),i.Ch36.skeleton.bones[5].rotation.y=v(t[1],t[2],t[0]),i.Ch36.skeleton.bones[5].rotation.z=w(t[1],t[2]))}),a.a.createElement("group",Object.assign({ref:n},e,{dispose:null}),a.a.createElement("group",{name:"Armature",rotation:[Math.PI/2,0,0],scale:[.01,.01,.01]},a.a.createElement("primitive",{object:i.mixamorig1Hips}),a.a.createElement("skinnedMesh",{geometry:i.Ch36.geometry,material:s.Ch36_Body,skeleton:i.Ch36.skeleton})))}d.a.preload("model.glb");var E=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("ambientLight",{intensity:.4}),a.a.createElement("directionalLight",{castShadow:!0,position:-8,intensity:0,"shadow-mapSize-width":1024,"shadow-mapSize-height":1024,"shadow-camera-far":50,"shadow-camera-left":-10,"shadow-camera-right":10,"shadow-camera-top":10,"shadow-camera-bottom":-10}),a.a.createElement("pointLight",{position:[0,50,0],intensity:2}))};var x=function(){var e;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{style:{position:"relative",width:600,height:600}},a.a.createElement(p.a,{colorManagement:!0,shadowMap:!0,camera:{position:[0,0,2],fov:60}},a.a.createElement(E,null),a.a.createElement(o.Suspense,{fallback:null},a.a.createElement("mesh",{position:[0,-1,0]},a.a.createElement(y,{getJoints:function(){return e}}))))),a.a.createElement(f,{mapJoints:function(t){e=t}}))};i.a.render(a.a.createElement(x,null),document.getElementById("root"))}},[[262,1,2]]]);
//# sourceMappingURL=main.4eaffdec.chunk.js.map