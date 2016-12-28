
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym,e){sym.stop();
var movie=sym.$("blackScreen");
movie.html('<video id="myvideo" width= "100%" height="100%" src = "video/myChaplin.mp4" type = "video/mpeg" controls ="controls" autoplay </video>');

});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_vpPlayBtn}", "mouseover", function(sym,e){sym.$("vpPlayBtn").css("background","url(images/VideoPlayerSkinPart_09over.svg) no-repeat");sym.$("vpPlayBtn").css("background-size","cover");});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_vpPlayBtn}", "mouseout", function(sym,e){sym.$("vpPlayBtn").css("background","url(images/VideoPlayerSkinPart_09.svg) no-repeat");sym.$("vpPlayBtn").css("background-size","cover");});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_vpSideBtnL}", "mouseover", function(sym,e){sym.$("vpSideBtnL").css("background","url(images/VideoPlayerSkinPart_SideBtnOver.svg) no-repeat");sym.$("vpSideBtnL").css("background-size","100% 100%");});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_vpSideBtnL}", "mouseout", function(sym,e){sym.$("vpSideBtnL").css("background","url(images/VideoPlayerSkinPart_SideBtn.svg) no-repeat");sym.$("vpSideBtnL").css("background-size","100% 100%");});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_vpSideBtnT}", "mouseout", function(sym,e){sym.$("vpSideBtnT").css("background","url(images/VideoPlayerSkinPart_SideBtn.svg) no-repeat");sym.$("vpSideBtnT").css("background-size","100% 100%");});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_vpSideBtnT}", "mouseover", function(sym,e){sym.$("vpSideBtnT").css("background","url(images/VideoPlayerSkinPart_SideBtnOver.svg) no-repeat");sym.$("vpSideBtnT").css("background-size","100% 100%");});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_vpSideBtnR}", "mouseover", function(sym,e){sym.$("vpSideBtnR").css("background","url(images/VideoPlayerSkinPart_SideBtnOver.svg) no-repeat");sym.$("vpSideBtnR").css("background-size","100% 100%");});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_vpSideBtnR}", "mouseout", function(sym,e){sym.$("vpSideBtnR").css("background","url(images/VideoPlayerSkinPart_SideBtn.svg) no-repeat");sym.$("vpSideBtnR").css("background-size","100% 100%");});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_vpSideBtnB}", "mouseover", function(sym,e){sym.$("vpSideBtnB").css("background","url(images/VideoPlayerSkinPart_SideBtnOver.svg) no-repeat");sym.$("vpSideBtnB").css("background-size","100% 100%");});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_vpSideBtnB}", "mouseout", function(sym,e){sym.$("vpSideBtnB").css("background","url(images/VideoPlayerSkinPart_SideBtn.svg) no-repeat");sym.$("vpSideBtnB").css("background-size","100% 100%");});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_vpPlayBtn}", "click", function(sym,e){sym.play();
$("#myvideo").play();
});
//Edge binding end
})("stage");
   //Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'OpeningScreen'
(function(symbolName){})("OpeningScreen");
   //Edge symbol end:'OpeningScreen'

})(jQuery, AdobeEdge, "HiddenClass");