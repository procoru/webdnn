!function(e){function t(i){if(a[i])return a[i].exports;var n=a[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var a={};t.m=e,t.c=a,t.i=function(e){return e},t.d=function(e,a,i){t.o(e,a)||Object.defineProperty(e,a,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="https://mil-tokyo.github.io/webdnn",t(t.s=10)}([function(e,t){!function(e,t,a,i,n,r,s){e.GoogleAnalyticsObject=n,e[n]=e[n]||function(){(e[n].q=e[n].q||[]).push(arguments)},e[n].l=1*new Date,r=t.createElement(a),s=t.getElementsByTagName(a)[0],r.async=1,r.src="https://www.google-analytics.com/analytics.js",s.parentNode.insertBefore(r,s)}(window,document,"script",0,"ga"),ga("create","UA-100057100-1","auto"),ga("send","pageview")},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a(2),n=function(){function e(e){this.base=e;var t=e.querySelector(".InitializingView-Message");if(!t)throw Error(".InitializingView-Message not found");this.message=t;var a=e.querySelector(".ProgressBar-Inner");if(!a)throw Error(".ProgressBar-Inner not found");this.progressBar=new i.default(a)}return e.prototype.updateProgress=function(e){this.progressBar.update(e)},e.prototype.updateMessage=function(e){this.message.textContent=e},e.prototype.remove=function(){this.base.parentNode&&this.base.parentNode.removeChild(this.base)},e}();t.default=n},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e){this.bar=e}return e.prototype.update=function(e){this.bar.style.width=100*Math.min(Math.max(e,0),1)+"%"},e}();t.default=i},,,function(e,t,a){"use strict";function i(){if(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia?o=function(e){return navigator.mediaDevices.getUserMedia(e)}:"mozGetUserMedia"in navigator?o=function(e){return navigator.mozGetUserMedia(e)}:"webkitGetUserMedia"in navigator&&(o=function(e){return navigator.webkitGetUserMedia(e)}),"URL"in window?h=window.URL:"webkitURL"in window?h=window.webkitURL:"mozURL"in window?h=window.mozURL:"msURL"in window&&(h=window.msURL),navigator.userAgent.match(/Firefox\D+(\d+)/)&&parseInt(RegExp.$1,10)<21&&(o=null),"object"==typeof navigator.plugins&&"object"==typeof navigator.plugins[l]&&navigator.plugins[l].description&&"object"==typeof navigator.mimeTypes&&navigator.mimeTypes[u]&&navigator.mimeTypes[u].enabledPlugin)v=!0;else if("ActiveXObject"in window)try{var e=new window.ActiveXObject(c);e&&e.GetVariable("$version")&&(v=!0)}catch(e){}g=!0}function n(e){var t=new DataView(e);if(255!=t.getUint8(0)||216!=t.getUint8(1))return console.log("Not a valid JPEG file"),0;for(var a=2;a<e.byteLength;){if(255!=t.getUint8(a))return console.log("Not a valid marker at offset "+a+", found: "+t.getUint8(a)),0;if(225==t.getUint8(a+1)){a+=4;for(var i="",n=0;n<4;n++)i+=String.fromCharCode(t.getUint8(a+n));if("Exif"!=i)return console.log("Not valid EXIF data found"),0;a+=6;var r=null;if(18761==t.getUint16(a))r=!1;else{if(19789!=t.getUint16(a))return console.log("Not valid TIFF data! (no 0x4949 or 0x4D4D)"),0;r=!0}if(42!=t.getUint16(a+2,!r))return console.log("Not valid TIFF data! (no 0x002A)"),0;var s=t.getUint32(a+4,!r);if(s<8)return console.log("Not valid TIFF data! (First offset less than 8)",t.getUint32(a+4,!r)),0;for(var o=a+s,h=t.getUint16(o,!r),l=0;l<h;l++){var c=o+12*l+2;if(274==t.getUint16(c,!r)){var u=t.getUint16(c+2,!r),d=t.getUint32(c+4,!r);if(3!=u&&1!=d)return console.log("Invalid EXIF orientation value type ("+u+") or count ("+d+")"),0;var p=t.getUint16(c+8,!r);return p<1||p>8?(console.log("Invalid EXIF orientation value ("+p+")"),0):p}}}else a+=2+t.getUint16(a+2)}return 0}function r(e,t,a){var i=new Image;i.addEventListener("load",function(){var e=document.createElement("canvas"),n=e.getContext("2d");if(!n)throw Error("null");switch(t<5?(e.width=i.width,e.height=i.height):(e.width=i.height,e.height=i.width),t){case 2:n.transform(-1,0,0,1,i.width,0);break;case 3:n.transform(-1,0,0,-1,i.width,i.height);break;case 4:n.transform(1,0,0,-1,0,i.height);break;case 5:n.transform(0,1,1,0,0,0);break;case 6:n.transform(0,1,-1,0,i.height,0);break;case 7:n.transform(0,-1,-1,0,i.height,i.width);break;case 8:n.transform(0,-1,1,0,0,i.width)}n.drawImage(i,0,0),a.src=e.toDataURL()},!1),i.src=e}var s=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a])};return function(t,a){function i(){this.constructor=t}e(t,a),t.prototype=null===a?Object.create(a):(i.prototype=a.prototype,new i)}}();Object.defineProperty(t,"__esModule",{value:!0});var o,h,l="Shockwave Flash",c="ShockwaveFlash.ShockwaveFlash",u="application/x-shockwave-flash",d=function(e){function t(t){return e.call(this,t)||this}return s(t,e),t}(Error),p=function(e){function t(t){return e.call(this,t)||this}return s(t,e),t}(Error),f=location.protocol.match(/https/i)?"https":"http",m=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),g=!1,v=!1,w={width:0,height:0,dest_width:0,dest_height:0,image_format:"png",jpeg_quality:90,enable_flash:!0,force_flash:!1,flagHorizontalFlip:!1,fps:30,upload_name:"webcam",constraints:null,swfURL:"",noInterfaceFoundText:"No supported webcam interface found.",unfreeze_snap:!0,iosPlaceholderText:"Click here to open camera."},b=function(){function e(e){var t=this;this.previewCanvas=null,this.previewContext=null,this.flagUseUserMedia=!1,this.flagNewUser=!1,this.flagFlashMovieLoaded=!1,this.flagFlashLive=!1,this.video=null,this.container=null,this.peg=null,g||i(),this.params=Object.assign({},w,e),this.hooks={},this.flagUserMedia=!this.params.force_flash&&!!o&&!!window.URL,this.flagUserMedia&&(this.onBeforeUnload=function(){return t.reset()},window.addEventListener("beforeunload",this.onBeforeUnload))}return e.prototype.attach=function(e){var t=this;if("string"==typeof e&&(e=document.querySelector(e)),!e)return this.dispatch("error",new p("Could not locate DOM element to attach to."));this.container=e,this.container.innerHTML="";var a=document.createElement("div");if(e.appendChild(a),this.peg=a,this.params.width||(this.params.width=e.offsetWidth),this.params.height||(this.params.height=e.offsetHeight),!this.params.width||!this.params.height)return this.dispatch("error",new p("No width and/or height for webcam.  Please call set() first, or attach to a visible element."));this.params.dest_width||(this.params.dest_width=this.params.width),this.params.dest_height||(this.params.dest_height=this.params.height),"number"!=typeof this.params.fps&&(this.params.fps=30);var i=this.params.width/this.params.dest_width,s=this.params.height/this.params.dest_height;if(this.flagUserMedia){var l=document.createElement("video");l.setAttribute("autoplay","autoplay"),l.style.width=this.params.dest_width+"px",l.style.height=this.params.dest_height+"px",1==i&&1==s||(this.container.style.overflow="hidden",l.style.transformOrigin="0px 0px",l.style.transform="scaleX("+i+") scaleY("+s+")"),this.container.appendChild(l),this.video=l,o({audio:!1,video:!0}).then(function(e){l.addEventListener("loadedmetadata",function(){t.flagFlashMovieLoaded=!0,t.flagFlashLive=!0,t.dispatch("load"),t.dispatch("live"),t.flip()}),l.src=h.createObjectURL(e)}).catch(function(a){t.params.enable_flash&&v?setTimeout(function(){t.params.force_flash=!0,t.attach(e)},1):t.dispatch("error",a)})}else if(m){var c=document.createElement("div");c.id=this.container.id+"-ios_div",c.className="webcamjs-ios-placeholder",c.style.width=this.params.width+"px",c.style.height=this.params.height+"px",c.style.textAlign="center",c.style.display="table-cell",c.style.verticalAlign="middle",c.style.backgroundRepeat="no-repeat",c.style.backgroundSize="contain",c.style.backgroundPosition="center";var u=document.createElement("span");u.className="webcamjs-ios-text",u.innerHTML=this.params.iosPlaceholderText,c.appendChild(u);var d=document.createElement("img");d.id=this.container.id+"-ios_img",d.style.width=this.params.dest_width+"px",d.style.height=this.params.dest_height+"px",d.style.display="none",c.appendChild(d);var f=document.createElement("input");f.id=this.container.id+"-ios_input",f.setAttribute("type","file"),f.setAttribute("accept","image/*"),f.setAttribute("capture","camera"),f.addEventListener("change",function(e){if(f&&f.files&&f.files.length>0&&0==f.files[0].type.indexOf("image/")){var a=h.createObjectURL(f.files[0]),i=new Image;i.addEventListener("load",function(){var e=document.createElement("canvas");e.width=t.params.dest_width,e.height=t.params.dest_height;var a=e.getContext("2d");if(!a)throw Error("null");var n=Math.min(i.width/t.params.dest_width,i.height/t.params.dest_height),r=t.params.dest_width*n,s=t.params.dest_height*n,o=(i.width-r)/2,h=(i.height-s)/2;a.drawImage(i,o,h,r,s,0,0,t.params.dest_width,t.params.dest_height);var l=e.toDataURL();d.src=l,c.style.backgroundImage="url('"+l+"')"},!1);var s=new FileReader;s.addEventListener("load",function(e){var t=n(s.result);t>1?r(a,t,i):i.src=a},!1);var o=new XMLHttpRequest;o.open("GET",a,!0),o.responseType="blob",o.onload=function(){200!=o.status&&0!==o.status||s.readAsArrayBuffer(o.response)},o.send()}},!1),f.style.display="none",e.appendChild(f),c.addEventListener("click",function(){f.style.display="block",f.focus(),f.click(),f.style.display="none"},!1),e.appendChild(c),this.flagFlashMovieLoaded=!0,this.flagFlashLive=!0}else if(this.params.enable_flash&&v){window.Webcam=this;var g=document.createElement("div");g.innerHTML=this.getSWFHTML(),e.appendChild(g)}else this.dispatch("error",new p(this.params.noInterfaceFoundText));e.style.width=this.params.width+"px",e.style.height=this.params.height+"px"},e.prototype.reset=function(){if(this.flagPreviewIsActive&&this.unfreeze(),this.unflip(),this.flagUseUserMedia&&(this.video=null),this.flagUseUserMedia&&this.flagFlashMovieLoaded&&!m){var e=this.getMovie();e&&"_releaseCamera"in e&&e._releaseCamera()}this.container&&(this.container.innerHTML="",this.container=null),this.flagFlashMovieLoaded=!1,this.flagFlashLive=!1},e.prototype.on=function(e,t){e in this.hooks||(this.hooks[e]=[]),this.hooks[e].push(t)},e.prototype.dispatch=function(e){for(var t=[],a=1;a<arguments.length;a++)t[a-1]=arguments[a];if(!(e in this.hooks)){if("error"!==e)return;throw t[0]}for(var i=this.hooks[e],n=0;n<i.length;n++)i[n].apply(this,t)},e.prototype.getSWFHTML=function(){var e=this,t="";if(!v)return this.dispatch("error",new d("Adobe Flash Player not found. Please install from get.adobe.com/flashplayer and try again.")),"";window.localStorage&&localStorage.getItem("visited")&&(this.flagNewUser=!0,localStorage.setItem("visited","1"));var a=Object.keys(this.params).map(function(t){return t+"="+encodeURIComponent(e.params[t])}).join("&");return t+='<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" type="application/x-shockwave-flash" codebase="'+f+'://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="'+this.params.width+'" height="'+this.params.height+'" id="webcam_movie_obj" align="middle"><param name="wmode" value="opaque" /><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="false" /><param name="movie" value="'+this.params.swfURL+'" /><param name="loop" value="false" /><param name="menu" value="false" /><param name="quality" value="best" /><param name="bgcolor" value="#ffffff" /><param name="flashvars" value="'+a+'" /><embed id="webcam_movie_embed" src="'+this.params.swfURL+'" wmode="opaque" loop="false" menu="false" quality="best" bgcolor="#ffffff" width="'+this.params.width+'" height="'+this.params.height+'"name="webcam_movie_embed" align="middle" allowScriptAccess="always" allowFullScreen="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer"flashvars="'+a+'"></embed></object>'},e.prototype.getMovie=function(){if(!this.flagFlashMovieLoaded)return this.dispatch("error",new d("Flash Movie is not loaded yet"));var e;return e=document.getElementById("webcam_movie_obj"),e&&e._snap||(e=document.getElementById("webcam_movie_embed")),e||this.dispatch("error",new d("Cannot locate Flash movie in DOM")),e},e.prototype.freeze=function(){var e=this;this.flagPreviewIsActive&&this.unfreeze(),this.unflip();var t=this.params.dest_width,a=this.params.dest_height;this.previewCanvas=document.createElement("canvas"),this.previewCanvas.width=t,this.previewCanvas.height=a,this.previewContext=this.previewCanvas.getContext("2d");var i=this.params.width/this.params.dest_width,n=this.params.height/this.params.dest_height;1==i&&1==n||(this.previewCanvas.style.transformOrigin="0px 0px",this.previewCanvas.style.transform="scaleX("+i+") scaleY("+n+")"),this.snap(function(){e.previewCanvas&&e.container&&(e.previewCanvas.style.position="relative",e.previewCanvas.style.left=e.container.scrollLeft+"px",e.previewCanvas.style.top=e.container.scrollTop+"px",e.container.insertBefore(e.previewCanvas,e.peg),e.container.style.overflow="hidden",e.flagPreviewIsActive=!0)},this.previewCanvas)},e.prototype.unfreeze=function(){this.flagPreviewIsActive&&(this.container&&this.previewCanvas&&this.container.removeChild(this.previewCanvas),this.previewContext=null,this.previewCanvas=null,this.flagPreviewIsActive=!1,this.flip())},e.prototype.flip=function(){this.params.flagHorizontalFlip&&this.container&&(this.container.style.transform="scaleX(-1)")},e.prototype.unflip=function(){this.params.flagHorizontalFlip&&this.container&&(this.container.style.transform="scaleX(1)")},e.prototype.savePreview=function(e,t){if(void 0===e&&(e=null),void 0===t&&(t=null),this.previewCanvas){if(!e)return this.dispatch("error",new p("Please provide a callback function or canvas to snap()"));if(t){var a=t.getContext("2d");a&&a.drawImage(this.previewCanvas,0,0)}e(t?null:this.previewCanvas.toDataURL("image/png",this.params.jpeg_quality/100),this.previewCanvas,this.previewContext),this.params.unfreeze_snap&&this.unfreeze()}},e.prototype.snap=function(e,t){var a=this;if(void 0===e&&(e=null),void 0===t&&(t=null),!this.flagFlashMovieLoaded)return this.dispatch("error",new p("Webcam is not loaded yet"));if(!e)return this.dispatch("error",new p("Please provide a callback function or canvas to snap()"));if(this.flagPreviewIsActive)return this.savePreview(e,t);var i=document.createElement("canvas");i.width=this.params.dest_width,i.height=this.params.dest_height;var n=i.getContext("2d");if(!n)throw Error("Context2D Initialization Failed.");this.params.flagHorizontalFlip&&(n.translate(this.params.dest_width,0),n.scale(-1,1));var r,s=function(){if(r&&r.src&&r.width&&r.height&&n&&n.drawImage(r,0,0,a.params.dest_width,a.params.dest_height),t){var s=t.getContext("2d");if(!s)throw Error("null");s.drawImage(i,0,0)}e(t?null:i.toDataURL("image/png",a.params.jpeg_quality/100),i,n)};if(o){if(!this.video)throw Error("video is null");n.drawImage(this.video,0,0,this.params.dest_width,this.params.dest_height),s()}else if(m){if(!this.container)return;var h=document.getElementById(this.container.id+"-ios_div"),l=document.getElementById(this.container.id+"-ios_input");if(r=document.getElementById(this.container.id+"-ios_img"),!h||!r||!l)throw Error("null");var c=function(){s.call(r),r.removeEventListener("load",c),h.style.backgroundImage="none",r.removeAttribute("src"),l.value=""};l.value?c():(r.addEventListener("load",c),l.style.display="block",l.focus(),l.click(),l.style.display="none")}else r=new Image,r.onload=s,r.src="data:image/png;base64,"+this.getMovie()._snap();return null},e.prototype.flashNotify=function(e,t){switch(e){case"flashLoadComplete":this.flagFlashMovieLoaded=!0,this.dispatch("load");break;case"cameraLive":this.flagFlashLive=!0,this.dispatch("live");break;case"error":this.dispatch("error",new d(t))}},e}();t.default=b},,function(e,t){},,,function(e,t,a){"use strict";var i=this&&this.__awaiter||function(e,t,a,i){return new(a||(a=Promise))(function(n,r){function s(e){try{h(i.next(e))}catch(e){r(e)}}function o(e){try{h(i.throw(e))}catch(e){r(e)}}function h(e){e.done?n(e.value):new a(function(t){t(e.value)}).then(s,o)}h((i=i.apply(e,t||[])).next())})},n=this&&this.__generator||function(e,t){function a(e){return function(t){return i([e,t])}}function i(a){if(n)throw new TypeError("Generator is already executing.");for(;h;)try{if(n=1,r&&(s=r[2&a[0]?"return":a[0]?"throw":"next"])&&!(s=s.call(r,a[1])).done)return s;switch(r=0,s&&(a=[0,s.value]),a[0]){case 0:case 1:s=a;break;case 4:return h.label++,{value:a[1],done:!1};case 5:h.label++,r=a[1],a=[0];continue;case 7:a=h.ops.pop(),h.trys.pop();continue;default:if(s=h.trys,!(s=s.length>0&&s[s.length-1])&&(6===a[0]||2===a[0])){h=0;continue}if(3===a[0]&&(!s||a[1]>s[0]&&a[1]<s[3])){h.label=a[1];break}if(6===a[0]&&h.label<s[1]){h.label=s[1],s=a;break}if(s&&h.label<s[2]){h.label=s[2],h.ops.push(a);break}s[2]&&h.ops.pop(),h.trys.pop();continue}a=t.call(e,h)}catch(e){a=[6,e],r=0}finally{n=s=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}var n,r,s,o,h={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o};Object.defineProperty(t,"__esModule",{value:!0}),a(7),a(0);var r,s=a(1),o=a(5);!function(e){e[e.INITIALIZING=0]="INITIALIZING",e[e.STAND_BY=1]="STAND_BY",e[e.RUNNING=2]="RUNNING",e[e.ERROR=3]="ERROR"}(r||(r={}));var h=new(function(){function e(){this.state=r.INITIALIZING,this.lastStatus=""}return e.prototype.initialize=function(){return i(this,void 0,void 0,function(){var e,t,a,a,i,r,o,l,c,u,d,p,f,m,g,v=this;return n(this,function(n){switch(n.label){case 0:if(ga("send","event","NeuralStyleTransfer","launch"),!(e=document.getElementById("backend")))throw Error("#backend is not found.");if(this.backendSelect=e,t=WebDNN.getBackendAvailability(),t.status.webgpu)switch(this.lastStatus=localStorage.getItem("webgpu_last_status")||"none",this.lastStatus){case"none":break;case"running":case"crashed":t.status.webgpu=!1,localStorage.setItem("webgpu_last_status","crashed"),console.warn("This browser supports WebGPU. However, it was crashed at last execution with WebGPU. Therefore, WebDNN disabled WebGPU backend temporally."),localStorage.getItem("flag_webgpu_disabled_alert")||(alert("This browser supports WebGPU. However, it was crashed at last execution with WebGPU. \n\nTherefore, WebDNN disabled WebGPU backend temporally."),localStorage.setItem("flag_webgpu_disabled_alert","1"))}if(t.status.webgpu||(a=document.querySelector('option[value="webgpu"]'),a&&(a.disabled=!0),e.value="webassembly"),!t.status.webassembly)throw a=document.querySelector('option[value="webassembly"]'),a&&(a.disabled=!0),Error("This browser does not support either WebGPU nor WebAssembly/asm.js backends");if(e.addEventListener("change",function(){return v.onBackendSelectChange()}),!(i=document.getElementById("runButton")))throw Error("#runButton is not found.");if(this.runButton=i,this.runButton.addEventListener("click",function(){return h.onPlayButtonClick()}),r=document.getElementById("launchView"),r&&r.parentNode&&(r.parentNode.removeChild(r),r=null),!(o=document.getElementById("dataSource")))throw Error("#dataSource is not found");if(this.dataSourceSelect=o,o.addEventListener("change",function(){return v.onDataSourceSelectChange()}),!(l=document.getElementById("cameraContainer")))throw Error("#cameraContainer is not found");if(this.cameraContainer=l,!(c=document.getElementById("sampleContainer")))throw Error("#sampleContainer is not found");if(this.sampleContainer=c,!(u=document.getElementById("initializingView")))throw Error("#initializingView is not found");return d=new s.default(u),d.updateMessage("Load model data"),this.runners={},[4,this.initBackendAsync(this.backendSelect.value,function(e,t){return d.updateProgress(e/t)})];case 1:if(n.sent(),!(p=document.getElementById("inputCanvas")))throw Error("#inputCanvas is not found");if(this.inputCanvas=p,this.w=p.width,this.h=p.height,!(f=p.getContext("2d")))throw Error("Canvas initialization failed");if(this.inputCtx=f,!(m=document.getElementById("outputCanvas")))throw Error("#outputCanvas is not found");if(!(g=m.getContext("2d")))throw Error("Canvas initialization failed");return this.outputCtx=g,[4,this.updateDataSource()];case 2:return n.sent(),d.remove(),[2]}})})},e.prototype.onDataSourceSelectChange=function(){this.updateDataSource()},e.prototype.onBackendSelectChange=function(){this.initBackendAsync(this.backendSelect.value)},e.prototype.onPlayButtonClick=function(){return i(this,void 0,void 0,function(){var e;return n(this,function(t){switch(t.label){case 0:switch(e=this.state){case r.STAND_BY:return[3,1];case r.RUNNING:return[3,3]}return[3,5];case 1:return[4,this.setState(r.RUNNING)];case 2:return t.sent(),[3,6];case 3:return[4,this.setState(r.STAND_BY)];case 4:return t.sent(),[3,6];case 5:return[3,6];case 6:return[2]}})})},e.prototype.initBackendAsync=function(e,t){return i(this,void 0,void 0,function(){var a,i;return n(this,function(n){switch(n.label){case 0:return[4,this.setState(r.INITIALIZING)];case 1:return n.sent(),[4,WebDNN.init([e])];case 2:return n.sent(),e in this.runners?(this.runner=this.runners[e],[3,5]):[3,3];case 3:return this.runner=this.runners[e]=WebDNN.gpu.createDescriptorRunner(),[4,this.runner.load("./models/neural_style_transfer",t)];case 4:n.sent(),n.label=5;case 5:return a=this,[4,this.runner.getInputViews()];case 6:return a.inputView=n.sent()[0],i=this,[4,this.runner.getOutputViews()];case 7:return i.outputView=n.sent()[0],[4,this.setState(r.STAND_BY)];case 8:return n.sent(),[2]}})})},e.prototype.updateDataSource=function(){return i(this,void 0,void 0,function(){var e;return n(this,function(t){switch(t.label){case 0:switch(this.dataSource=this.dataSourceSelect.value,this.sampleContainer.style.display="sample"==this.dataSource?"block":"none",this.cameraContainer.style.display="video"==this.dataSource||"photo"==this.dataSource?"block":"none",e=this.dataSource){case"photo":case"video":return[3,1];case"sample":return[3,5]}return[3,9];case 1:return[4,this.setState(r.INITIALIZING)];case 2:return t.sent(),[4,this.initializeCamera()];case 3:return t.sent(),[4,this.setState(r.STAND_BY)];case 4:return t.sent(),[3,9];case 5:return[4,this.setState(r.INITIALIZING)];case 6:return t.sent(),this.finalizeCamera(),[4,this.loadSampleImageToPreview()];case 7:return t.sent(),[4,this.setState(r.STAND_BY)];case 8:return t.sent(),[3,9];case 9:return[2]}})})},e.prototype.initializeCamera=function(){var e=this;return new Promise(function(t){e.webcam=new o.default({width:192,height:144,fps:60,flip_horiz:!1,image_format:"png",force_flash:!1,swfURL:"/webdnn/webcam.swf",unfreeze_snap:"video"==e.dataSource}),e.webcam.on("live",t),e.webcam.on("error",function(t){console.error(t),e.setMessage(t),e.setState(r.ERROR)}),e.webcam.attach("#cameraContainer")})},e.prototype.finalizeCamera=function(){this.webcam&&this.webcam.reset()},e.prototype.loadSampleImageToPreview=function(){return i(this,void 0,void 0,function(){var e,t,a;return n(this,function(i){switch(i.label){case 0:return e=Math.floor(6*Math.random()),t="./assets/images/"+e+".png",a=new Image,[4,new Promise(function(e){a.onload=function(){return e(a)},a.src=t})];case 1:return i.sent(),this.inputCtx.drawImage(a,0,0,a.width,a.height,0,0,this.inputCtx.canvas.width,this.inputCtx.canvas.height),[2]}})})},e.prototype.setState=function(e){return i(this,void 0,void 0,function(){var t,a=this;return n(this,function(i){switch(i.label){case 0:switch(this.state=e,t=e){case r.INITIALIZING:return[3,1];case r.STAND_BY:return[3,2];case r.RUNNING:return[3,3];case r.ERROR:return[3,5]}return[3,6];case 1:return this.setMessage("Initializing..."),this.runButton.textContent="Initializing...",this.runButton.disabled=!0,[3,6];case 2:return this.setMessage("Ready(backend: "+this.runner.backend+")"),this.runButton.textContent="Run",this.runButton.disabled=!1,[3,6];case 3:return this.setMessage("Processing..."),this.runButton.disabled=!0,[4,this.transfer()];case 4:return i.sent(),"video"==this.dataSource?(this.setMessage("Running"),this.runButton.textContent="Stop",this.runButton.disabled=!1):setTimeout(function(){return a.setState(r.STAND_BY)}),[3,6];case 5:return this.runButton.textContent="Error",this.runButton.disabled=!0,[3,6];case 6:return[2]}})})},e.prototype.transfer=function(){return i(this,void 0,void 0,function(){var e,t,a=this;return n(this,function(i){switch(i.label){case 0:return this.state!==r.RUNNING?[2]:[4,this.getImageData()];case 1:return i.sent(),"video"!=this.dataSource?[3,3]:[4,this.runner.run()];case 2:return i.sent(),this.setImageData(),requestAnimationFrame(function(){return a.transfer()}),[3,5];case 3:return"webgpu"===this.runner.backend&&"none"===this.lastStatus&&(localStorage.setItem("webgpu_last_status","running"),this.lastStatus="running"),e=performance.now(),[4,this.runner.run()];case 4:i.sent(),t=performance.now()-e,"webgpu"===this.runner.backend&&"running"===this.lastStatus&&(localStorage.setItem("webgpu_last_status","completed"),this.lastStatus="completed"),this.setImageData();try{ga("send","event","NeuralStyleTransfer","play","computation_time",Math.round(t))}catch(e){}i.label=5;case 5:return[2]}})})},e.prototype.getImageData=function(){return i(this,void 0,void 0,function(){var e,t,a,i,r,s=this;return n(this,function(n){switch(n.label){case 0:return e=this.w,t=this.h,"photo"!=this.dataSource?[3,2]:[4,new Promise(function(e){s.webcam.freeze(),s.webcam.snap(e,s.inputCanvas)})];case 1:return n.sent(),[3,4];case 2:return"video"!=this.dataSource?[3,4]:[4,new Promise(function(e){s.webcam.snap(e,s.inputCanvas)})];case 3:n.sent(),n.label=4;case 4:for(a=this.inputCtx.getImageData(0,0,e,t).data,i=0;i<t;i++)for(r=0;r<e;r++)this.inputView[3*(i*e+r)]=a[4*(i*e+r)],this.inputView[3*(i*e+r)+1]=a[4*(i*e+r)+1],this.inputView[3*(i*e+r)+2]=a[4*(i*e+r)+2];return[2]}})})},e.prototype.setImageData=function(){for(var e=this.w,t=this.h,a=new ImageData(e,t),i=0;i<t;i++)for(var n=0;n<e;n++)a.data[4*(i*e+n)]=this.outputView[3*(i*e+n)],a.data[4*(i*e+n)+1]=this.outputView[3*(i*e+n)+1],a.data[4*(i*e+n)+2]=this.outputView[3*(i*e+n)+2],a.data[4*(i*e+n)+3]=255;this.outputCtx.putImageData(a,0,0)},e.prototype.setMessage=function(e){var t=document.getElementById("message");t&&(t.textContent=e)},e}());window.onload=function(){WebDNN.registerTransformDelegate(function(e){var t=e.match(/([^\/]+)(?:\?.*)?$/);return t?"https://mil-tokyo.github.io/webdnn-data/models/neural_style_transfer/"+t[1]+"?raw=true":e});var e=document.getElementById("runAppButton");if(!e)throw Error("#runAppButton is not found");e.addEventListener("click",function(){return h.initialize()}),"?run=1"==location.search&&h.initialize()},window.onerror=function(e,t,a,i,n){ga("send","exception",{exDescription:e,exFatal:!1})}}]);