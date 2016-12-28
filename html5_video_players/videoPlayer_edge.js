/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'screen',
            display:'none',
            type:'rect',
            rect:['143px','25px','285px','1px','auto','auto'],
            borderRadius:["29px 29px","29px 29px","29px 29px","29px 29px"],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'blackScreen',
            display:'none',
            type:'rect',
            rect:['142px','24px','49.5%','38.6%','auto','auto'],
            fill:["rgba(0,0,0,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'vpLeverage',
            type:'rect',
            rect:['405px','7px','auto','auto','auto','auto'],
            transform:[]
         },
         {
            id:'vpHandler',
            type:'image',
            rect:['392px','49px','124px','262px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"VideoPlayerSkinPart_01.svg",'0px','0px']
         },
         {
            id:'vpBackCircle',
            type:'image',
            rect:['375px','-12px','154px','154px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"VideoPlayerSkinPart_08.svg",'0px','0px']
         },
         {
            id:'vpSideBtnL',
            type:'image',
            rect:['374px','49px','57px','26px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"VideoPlayerSkinPart_SideBtn.svg",'0px','0px'],
            transform:[[],['-90']]
         },
         {
            id:'vpSideBtnT',
            type:'image',
            rect:['416px','7px','57px','26px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"VideoPlayerSkinPart_SideBtn.svg",'0px','0px'],
            transform:[]
         },
         {
            id:'vpSideBtnB',
            type:'image',
            rect:['414px','91px','57px','26px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"VideoPlayerSkinPart_SideBtn.svg",'0px','0px'],
            transform:[[],['180']]
         },
         {
            id:'vpSideBtnR',
            type:'image',
            rect:['457px','51px','57px','26px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"VideoPlayerSkinPart_SideBtn.svg",'0px','0px'],
            transform:[[],['90']]
         },
         {
            id:'vpArrowUp',
            type:'image',
            rect:['438px','12px','11px','9px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"VideoPlayerSkinPart_Arrow.svg",'0px','0px'],
            transform:[]
         },
         {
            id:'vpArrowDown',
            type:'image',
            rect:['438px','13px','11px','9px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"VideoPlayerSkinPart_Arrow.svg",'0px','0px'],
            transform:[[],['180']]
         },
         {
            id:'vpDoubleArrowL',
            type:'image',
            rect:['395px','58px','7px','9px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"VideoPlayerSkinPart_DoubleArrow.svg",'0px','0px']
         },
         {
            id:'vpDoubleArrowR',
            type:'image',
            rect:['487px','58px','7px','9px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"VideoPlayerSkinPart_DoubleArrow.svg",'0px','0px'],
            transform:[[],['180']]
         },
         {
            id:'vpPlayBtn',
            type:'image',
            rect:['407px','26px','74px','74px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"VideoPlayerSkinPart_09.svg",'0px','0px']
         }],
         symbolInstances: [
         {
            id:'vpLeverage',
            symbolName:'OpeningScreen'
         }
         ]
      },
   states: {
      "Base State": {
         "${_vpPlayBtn}": [
            ["style", "height", '74px'],
            ["style", "top", '26px'],
            ["style", "left", '407px'],
            ["style", "width", '74px']
         ],
         "${_vpBackCircle}": [
            ["style", "top", '-12px'],
            ["style", "height", '154px'],
            ["style", "left", '375px'],
            ["style", "width", '154px']
         ],
         "${_vpSideBtnL}": [
            ["style", "top", '49px'],
            ["transform", "rotateZ", '-90deg'],
            ["style", "height", '26px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '374px'],
            ["style", "width", '57px']
         ],
         "${_vpSideBtnB}": [
            ["style", "top", '91px'],
            ["transform", "rotateZ", '180deg'],
            ["style", "height", '26px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '414px'],
            ["style", "width", '57px']
         ],
         "${_vpLeverage}": [
            ["style", "-webkit-transform-origin", [41,7], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [41,7],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [41,7],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [41,7],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [41,7],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '0deg']
         ],
         "${_vpArrowDown}": [
            ["style", "top", '13px'],
            ["transform", "rotateZ", '180deg'],
            ["style", "height", '9px'],
            ["style", "-webkit-transform-origin", [50,559], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,559],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,559],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,559],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,559],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '438px'],
            ["style", "width", '11px']
         ],
         "${_vpArrowUp}": [
            ["style", "top", '12px'],
            ["style", "height", '9px'],
            ["style", "-webkit-transform-origin", [50,559], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,559],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,559],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,559],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,559],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '438px'],
            ["style", "width", '11px']
         ],
         "${_vpDoubleArrowR}": [
            ["style", "top", '58px'],
            ["style", "left", '487px'],
            ["transform", "rotateZ", '180deg']
         ],
         "${_vpSideBtnT}": [
            ["style", "top", '7px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '26px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '416px'],
            ["style", "width", '57px']
         ],
         "${_vpHandler}": [
            ["style", "top", '49px'],
            ["style", "height", '262px'],
            ["style", "-webkit-transform-origin", [57,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [57,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [57,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [57,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [57,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '392px'],
            ["style", "width", '124px']
         ],
         "${_blackScreen}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "opacity", '0'],
            ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '51.26%'],
            ["style", "top", '24px'],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '40.06%'],
            ["style", "left", '140px'],
            ["style", "display", 'none']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '550px'],
            ["style", "height", '400px'],
            ["style", "overflow", 'hidden']
         ],
         "${_screen}": [
            ["style", "border-top-left-radius", [11,11], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [11,11], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [11,11], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '292px'],
            ["style", "top", '25px'],
            ["style", "border-bottom-left-radius", [11,11], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "overflow", 'visible'],
            ["style", "display", 'none'],
            ["style", "height", '0px'],
            ["style", "left", '136px']
         ],
         "${_vpDoubleArrowL}": [
            ["style", "left", '395px'],
            ["style", "top", '58px']
         ],
         "${_vpSideBtnR}": [
            ["style", "top", '51px'],
            ["transform", "rotateZ", '90deg'],
            ["style", "height", '26px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '457px'],
            ["style", "width", '57px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3500,
         autoPlay: true,
         timeline: [
            { id: "dg14", tween: [ "style", "${_blackScreen}", "left", '140px', { fromValue: '140px'}], position: 3500, duration: 0, easing: "easeOutBounce" },
            { id: "dg2", tween: [ "style", "${_screen}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "dg3", tween: [ "style", "${_screen}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "dg15", tween: [ "style", "${_blackScreen}", "width", '51.26%', { fromValue: '51.26%'}], position: 3500, duration: 0, easing: "easeOutBounce" },
            { id: "dg13", tween: [ "style", "${_blackScreen}", "opacity", '1', { fromValue: '0'}], position: 3000, duration: 500, easing: "easeOutBounce" },
            { id: "dg5", tween: [ "style", "${_vpHandler}", "-webkit-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [57,50]}], position: 0, duration: 3500, easing: "easeOutBounce" },
            { id: "eid99", tween: [ "style", "${_vpHandler}", "-moz-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [57,50]}], position: 0, duration: 3500, easing: "easeOutBounce" },
            { id: "eid100", tween: [ "style", "${_vpHandler}", "-ms-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [57,50]}], position: 0, duration: 3500, easing: "easeOutBounce" },
            { id: "eid101", tween: [ "style", "${_vpHandler}", "msTransformOrigin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [57,50]}], position: 0, duration: 3500, easing: "easeOutBounce" },
            { id: "eid102", tween: [ "style", "${_vpHandler}", "-o-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [57,50]}], position: 0, duration: 3500, easing: "easeOutBounce" },
            { id: "dg11", tween: [ "style", "${_blackScreen}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "dg12", tween: [ "style", "${_blackScreen}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
            { id: "dg1", tween: [ "transform", "${_vpLeverage}", "rotateZ", '90deg', { fromValue: '0deg'}], position: 0, duration: 2000, easing: "easeOutBounce" },
            { id: "dg4", tween: [ "style", "${_screen}", "height", '163px', { fromValue: '0px'}], position: 2000, duration: 1000, easing: "easeOutBounce" },
            { id: "dg10", tween: [ "style", "${_blackScreen}", "height", '40.06%', { fromValue: '40.06%'}], position: 3500, duration: 0 }         ]
      }
   }
},
"OpeningScreen": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      tf: [[0,0],['-90'],[],[],['94%','47%']],
      r: ['-297px','-24px','364px','97px','auto','auto'],
      id: 'VideoPlayerSkinPart_02',
      t: 'image',
      f: ['rgba(0,0,0,0)','images/VideoPlayerSkinPart_02.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '364px'],
            ["style", "width", '97px']
         ],
         "${_VideoPlayerSkinPart_02}": [
            ["style", "-webkit-transform-origin", [94,47], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [94,47],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [94,47],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [94,47],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [94,47],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '-90deg'],
            ["style", "height", '97px'],
            ["style", "top", '-24px'],
            ["style", "left", '-297px'],
            ["style", "width", '364px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: false,
         timeline: [
         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "HiddenClass");
