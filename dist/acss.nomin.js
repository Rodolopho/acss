/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/static/staticClassNames.js

// export default  
let staticClassNames={ 
  'align-content-center': 'align-content: center',
  acc: 'align-content: center',

  'align-content-flex-end': 'align-content: flex-end',
  acfe: 'align-content: flex-end',

  'align-content-flex-start': 'align-content: flex-start',
  acfs: 'align-content: flex-start',

  'align-content-space-around': 'align-content: space-around',
  acsa: 'align-content: space-around',

  'align-content-space-between': 'align-content: space-between',
  acsb: 'align-content: space-between',

  'align-content-stretch': 'align-content: stretch',
  acs: 'align-content: stretch',

  'animation-direction-alternate-reverse': 'animation-direction: alternate-reverse',
  adar: 'animation-direction: alternate-reverse',

  'animation-direction-alternate': 'animation-direction: alternate',
  ada: 'animation-direction: alternate',

  'animation-direction-normal': 'animation-direction: normal',
  adnl: 'animation-direction: normal',
  adn: 'animation-direction: normal',

  'animation-direction-reverse': 'animation-direction: reverse',
  adr: 'animation-direction: reverse',

  'animation-fill-mode-backwards': 'animation-fill-mode: backwards',
  afmb: 'animation-fill-mode: backwards',

  'animation-fill-mode-both': 'animation-fill-mode: both',
  afmbo: 'animation-fill-mode: both',
  afmb2: 'animation-fill-mode: both',

  'animation-fill-mode-forwards': 'animation-fill-mode: forwards',
  afmf: 'animation-fill-mode: forwards',

  'animation-fill-mode-none': 'animation-fill-mode: none',
  afmn: 'animation-fill-mode: none',

  'align-items-baseline': 'align-items: baseline',
  aib: 'align-items: baseline',

  'animation-iteration-count-infinite': 'animation-iteration-count: infinite',
  aici: 'animation-iteration-count: infinite',

  'align-items-center': 'align-items: center',
  aic: 'align-items: center',

  'align-items-flex-end': 'align-items: flex-end',
  aife: 'align-items: flex-end',

  'align-items-flex-start': 'align-items: flex-start',
  aifs: 'align-items: flex-start',

  'all-inherit': 'all: inherit',
  ain: 'all: inherit',

  'align-items-stretch': 'align-items: stretch',
  ais: 'align-items: stretch',

  'all-initial': 'all: initial',
  ai: 'all: initial',

  'animation-name-none': 'animation-name: none',
  ann: 'animation-name: none',

  'animation-play-state-paused': 'animation-play-state: paused',
  apsp: 'animation-play-state: paused',

  'animation-play-state-running': 'animation-play-state: running',
  apsr: 'animation-play-state: running',

  'align-self-auto': 'align-self: auto',
  asa: 'align-self: auto',

  'align-self-baseline': 'align-self: baseline',
  asb: 'align-self: baseline',

  'align-self-center': 'align-self: center',
  asc: 'align-self: center',

  'align-self-flex-end': 'align-self: flex-end',
  asfe: 'align-self: flex-end',

  'align-self-flex-start': 'align-self: flex-start',
  asfs: 'align-self: flex-start',

  'align-self-stretch': 'align-self: stretch',
  ass: 'align-self: stretch',

  'animation-timing-function-ease-in-out': 'animation-timing-function: ease-in-out',
  atfeio: 'animation-timing-function: ease-in-out',

  'animation-timing-function-ease-in': 'animation-timing-function: ease-in',
  atfei: 'animation-timing-function: ease-in',

  'animation-timing-function-ease-out': 'animation-timing-function: ease-out',
  atfeo: 'animation-timing-function: ease-out',

  'animation-timing-function-ease': 'animation-timing-function: ease',
  atfe: 'animation-timing-function: ease',

  'animation-timing-function-linear': 'animation-timing-function: linear',
  atfl: 'animation-timing-function: linear',

  'animation-timing-function-step-end': 'animation-timing-function: step-end',
  atfse: 'animation-timing-function: step-end',

  'animation-timing-function-step-start': 'animation-timing-function: step-start',
  atfss: 'animation-timing-function: step-start',

  'all-unset': 'all: unset',
  au: 'all: unset',

  'border-0': 'border:0',
  b0: 'border:0',

  'border-width-0': 'border:0',
  bw0: 'border-width:0',

  'border-radius-0': 'border-radius:0',
  br0: 'border-radius:0',

  'border-bottom-0': 'border-bottom:0',
  bb0: 'border-bottom:0',

  'border-top-0': 'border-top:0',
  bt0: 'border-top:0',

  'border-right-0': 'border-right:0',
  brt0: 'border-right:0',

  'border-left-0': 'border-left:0',
  bl0: 'border-left:0',

  'break-after-avoid-column': 'break-after: avoid-column',
  baac: 'break-after: avoid-column',

  'box-align-after': 'box-align: after',
  baf: 'box-align: after',

  'break-after-always': 'break-after: always',
  baal: 'break-after: always',
  baa3: 'break-after: always',

  'break-after-avoid-page': 'break-after: avoid-page',
  baap: 'break-after: avoid-page',

  'break-after-auto': 'break-after: auto',
  baa: 'break-after: auto',

  'break-after-avoid': 'break-after: avoid',
  baav: 'break-after: avoid',
  baa2: 'break-after: avoid',

  'box-align-baseline': 'box-align: baseline',
  babl: 'box-align: baseline',
  bab2: 'box-align: baseline',

  'box-align-before': 'box-align: before',
  bab: 'box-align: before',

  'break-after-column': 'break-after: column',
  bac: 'break-after: column',

  'break-after-left': 'break-after: left',
  bal: 'break-after: left',

  'box-align-middle': 'box-align: middle',
  bam: 'box-align: middle',

  'break-after-page': 'break-after: page',
  bap: 'break-after: page',

  'break-after-right': 'break-after: right',
  bar: 'break-after: right',

  'bottom-auto': 'bottom: auto',
  btma: 'bottom: auto',
  ba: 'bottom: auto',

  'box-align-stretch': 'box-align: stretch',
  bas: 'box-align: stretch',

  'break-before-avoid-column': 'break-before: avoid-column',
  bbac: 'break-before: avoid-column',

  'break-before-always': 'break-before: always',
  bbal: 'break-before: always',
  bba3: 'break-before: always',

  'break-before-avoid-page': 'break-before: avoid-page',
  bbap: 'break-before: avoid-page',

  'break-before-auto': 'break-before: auto',
  bba: 'break-before: auto',

  'break-before-avoid': 'break-before: avoid',
  bbav: 'break-before: avoid',
  bba2: 'break-before: avoid',

  'border-bottom-color-transparent': 'border-bottom-color: transparent',
  bbc_t: 'border-bottom-color: transparent',
  bbct: 'border-bottom-color: transparent',

  'border-bottom-color-none': 'border-bottom-color:none',
  bbcn: 'border-bottom-color:none',

  'border-bottom-inherit': 'border-bottom: inherit',
  bbcin: 'border-bottom: inherit',
  bbc_in: 'border-bottom: inherit',

  'break-before-column': 'break-before: column',
  bbc: 'break-before: column',

  'break-before-left': 'break-before: left',
  bbl: 'break-before: left',

  'break-before-page': 'break-before: page',
  bbp: 'break-before: page',

  'break-before-right': 'break-before: right',
  bbr: 'break-before: right',

  'border-bottom-style-double': 'border-bottom-style: double',
  bbsdb: 'border-bottom-style: double',

  'border-bottom-style-dashed': 'border-bottom-style: dashed',
  bbsds: 'border-bottom-style: dashed',

  'border-bottom-style-dotted': 'border-bottom-style: dotted',
  bbsdt: 'border-bottom-style: dotted',
  bbsd2: 'border-bottom-style: double',
  bbsd: 'border-bottom-style: dashed',
  bbsd3: 'border-bottom-style: dotted',

  'border-bottom-style-groove': 'border-bottom-style: groove',
  bbsg: 'border-bottom-style: groove',

  'border-bottom-style-hidden': 'border-bottom-style: hidden',
  bbsh: 'border-bottom-style: hidden',

  'border-bottom-style-inset': 'border-bottom-style: inset',
  bbsi: 'border-bottom-style: inset',

  'border-bottom-style-none': 'border-bottom-style: none',
  bbsn: 'border-bottom-style: none',

  'border-bottom-style-outset': 'border-bottom-style: outset',
  bbso: 'border-bottom-style: outset',

  'border-bottom-style-ridge': 'border-bottom-style: ridge',
  bbsr: 'border-bottom-style: ridge',

  'border-bottom-style-solid': 'border-bottom-style: solid',
  bbss: 'border-bottom-style: solid',

  'border-bottom-width-auto': 'border-bottom-width: auto',
  bbwa: 'border-bottom-width: auto',

  'border-bottom-width-initial': 'border-bottom-width: initial',
  bbwi: 'border-bottom-width: initial',

  'border-bottom-width-medium': 'border-bottom-width: medium',
  bbwm: 'border-bottom-width: medium',

  'border-bottom-width-thick': 'border-bottom-width: thick',
  bbwt: 'border-bottom-width: thick',

  'border-bottom-width-thin': 'border-bottom-width: thin',
  bbwtn: 'border-bottom-width: thin',
  bbwt2: 'border-bottom-width: thin',

  'border-color-transparent': 'border-color: transparent',
  bc_t: 'border-color: transparent',
  bct: 'border-color: transparent',

  'border-color-inherit': 'border-color: inherit',
  bcin: 'border-color: inherit',
  bci: 'border-color: inherit',

  'border-color-initial': 'border-color: initial',
  bci2: 'border-color: initial',
  bc_in: 'border-color: inherit',

  'border-color-none': 'border-color:none',
  bcn: 'border-color:none',

  'border-collapse-collapse': 'border-collapse: collapse',
  bcc: 'border-collapse: collapse',

  'border-collapse-separate': 'border-collapse: separate',
  bcs: 'border-collapse: separate',

  'box-decoration-break-clone': 'box-decoration-break: clone',
  bdbc: 'box-decoration-break: clone',

  'box-decoration-break-slice': 'box-decoration-break: slice',
  bdbs: 'box-decoration-break: slice',

  'background-attachment-fixed': 'background-attachment: fixed',
  bgaf: 'background-attachment: fixed',

  'background-attachment-local': 'background-attachment: local',
  bgal: 'background-attachment: local',

  'background-attachment-scroll': 'background-attachment: scroll',
  bgas: 'background-attachment: scroll',

  'background-clip-border-box': 'background-clip: border-box',
  bgcbb: 'background-clip: border-box',

  'background-clip-content-box': 'background-clip: content-box',
  bgccb: 'background-clip: content-box',

  'background-color-inherit': 'background-color:inherit',
  bgcin: 'background-color:inherit',
  bgc_in: 'background-color:inherit',

  'background-clip-padding-box': 'background-clip: padding-box',
  bgcpb: 'background-clip: padding-box',

  'background-color-transparent': 'background-color: transparent',
  bgct: 'background-color: transparent',

  'background-transparent': 'background: transparent',
  bgt: 'background: transparent',

  'background-none': 'background:none',
  bgn: 'background:none',

  'background-color-none': 'background-color:none',
  bgcn: 'background-color:none',
  bgc_t: 'background-color: transparent',

  'background-image-none': 'background-image: none',
  bgin: 'background-image: none',

  'background-origin-border-box': 'background-origin: border-box',
  bgobb: 'background-origin: border-box',

  'background-origin-content-box': 'background-origin: content-box',
  bgocb: 'background-origin: content-box',

  'background-origin-inherit': 'background-origin: inherit',
  bgoin: 'background-origin: inherit',

  'background-origin-padding-box': 'background-origin: padding-box',
  bgopb: 'background-origin: padding-box',

  'background-position-center-center': 'background-position: center center',
  bgpc: 'background-position: center center',

  'background-position-left-top': 'background-position: left top',
  bgpl: 'background-position: left top',

  'background-position-right-bottom': 'background-position: right bottom',
  bgpr: 'background-position: right bottom',

  'background-repeat-no-repeat': 'background-repeat: no-repeat',
  bgrn: 'background-repeat: no-repeat',

  'background-repeat-repeat-no-repeat': 'background-repeat: repeat no-repeat',
  bgrnr: 'background-repeat: repeat no-repeat',
  bgrrn: 'background-repeat: repeat no-repeat',
  bgrrnr: 'background-repeat: repeat no-repeat',
  bgpct: 'background-position: center center',
  bgplt: 'background-position: left top',
  bgprb: 'background-position: right bottom',
  bgnr: 'background-repeat: no-repeat',

  'background-repeat-repeat': 'background-repeat: repeat',
  bgrr: 'background-repeat: repeat',

  'background-repeat-round': 'background-repeat: round',
  bgrro: 'background-repeat: round',

  'background-repeat-space': 'background-repeat: space',
  bgrs: 'background-repeat: space',

  'background-repeat-repeat-x': 'background-repeat: repeat-x',
  bgrx: 'background-repeat: repeat-x',
  bgrrx: 'background-repeat: repeat-x',

  'background-repeat-repeat-y': 'background-repeat: repeat-y',
  bgry: 'background-repeat: repeat-y',
  bgrry: 'background-repeat: repeat-y',

  'background-size-auto': 'background-size: auto',
  bgsa: 'background-size: auto',

  'background-size-contain': 'background-size:contain',
  bgscon: 'background-size: contain',

  'background-size-cover': 'background-size: cover',
  bgsc: 'background-size: cover',
  bgsc2: 'background-size:contain',

  'break-inside-avoid-column': 'break-inside: avoid-column',
  biac: 'break-inside: avoid-column',

  'break-inside-avoid-page': 'break-inside: avoid-page',
  biap: 'break-inside: avoid-page',

  'break-inside-auto': 'break-inside: auto',
  bia: 'break-inside: auto',

  'break-inside-avoid': 'break-inside: avoid',
  biav: 'break-inside: avoid',
  bia2: 'break-inside: avoid',

  'border-image-repeat-round': 'border-image-repeat: round',
  birro: 'border-image-repeat: round',

  'border-image-repeat-repeat': 'border-image-repeat: repeat',
  birr: 'border-image-repeat: repeat',
  bir2: 'border-image-repeat: repeat',

  'border-image-repeat-stretch': 'border-image-repeat: stretch',
  birsth: 'border-image-repeat: stretch',
  birs2: 'border-image-repeat: stretch',

  'border-image-repeat-space': 'border-image-repeat: space',
  birs: 'border-image-repeat: space',

  'border-image-source-none': 'border-image-source: none',
  bisn: 'border-image-source: none',

  'border-left-color-transparent': 'border-left-color: transparent',
  blc_t: 'border-left-color: transparent',
  blct: 'border-left-color: transparent',

  'border-left-color-none': 'border-left-color: none',
  blcn: 'border-left-color: none',

  'border-left-style-double': 'border-left-style: double',
  blsdb: 'border-left-style: double',

  'border-left-style-dashed': 'border-left-style: dashed',
  blsds: 'border-left-style: dashed',

  'border-left-style-dotted': 'border-left-style: dotted',
  blsdt: 'border-left-style: dotted',
  blsd2: 'border-left-style: double',
  blsd: 'border-left-style: dashed',
  blsd3: 'border-left-style: dotted',

  'border-left-style-groove': 'border-left-style: groove',
  blsg: 'border-left-style: groove',

  'border-left-style-hidden': 'border-left-style: hidden',
  blsh: 'border-left-style: hidden',

  'border-left-style-inset': 'border-left-style: inset',
  blsi: 'border-left-style: inset',

  'border-left-style-none': 'border-left-style: none',
  blsn: 'border-left-style: none',

  'border-left-style-outset': 'border-left-style: outset',
  blso: 'border-left-style: outset',

  'border-left-style-ridge': 'border-left-style: ridge',
  blsr: 'border-left-style: ridge',

  'border-left-style-solid': 'border-left-style: solid',
  blss: 'border-left-style: solid',

  'border-left-width-auto': 'border-left-width: auto',
  blwa: 'border-left-width: auto',

  'border-left-width-initial': 'border-left-width: initial',
  blwi: 'border-left-width: initial',

  'border-left-width-medium': 'border-left-width: medium',
  blwm: 'border-left-width: medium',

  'border-left-width-thick': 'border-left-width: thick',
  blwt: 'border-left-width: thick',

  'border-left-width-thin': 'border-left-width: thin',
  blwtn: 'border-left-width: thin',
  blwt2: 'border-left-width: thin',

  'border-none': 'border:none',
  bn: 'border:none',

  'border-radius-none': 'border-radius:none',
  brn: 'border-radius:none',

  'border-bottom-none': 'border-bottom:none',
  bbn: 'border-bottom:none',

  'border-right-none': 'border-right:none',
  brtn: 'border-right:none',

  'border-top-none': 'border-top:none',
  btno: 'border-top:none',

  'border-left-none': 'border-left:none',
  bln: 'border-left:none',

  'border-right-color-none': 'border-right-color: none',
  brcn: 'border-right-color: none',

  'border-right-color-transparent': 'border-right-color: transparent',
  brc_t: 'border-right-color: transparent',
  brct: 'border-right-color: transparent',

  'border-right-style-double': 'border-right-style: double',
  brsdb: 'border-right-style: double',

  'border-right-style-dashed': 'border-right-style: dashed',
  brsds: 'border-right-style: dashed',

  'border-right-style-dotted': 'border-right-style: dotted',
  brsdt: 'border-right-style: dotted',
  brsd2: 'border-right-style: double',
  brsd: 'border-right-style: dashed',
  brsd3: 'border-right-style: dotted',

  'border-right-style-groove': 'border-right-style: groove',
  brsg: 'border-right-style: groove',

  'border-right-style-hidden': 'border-right-style: hidden',
  brsh: 'border-right-style: hidden',

  'border-right-style-inset': 'border-right-style: inset',
  brsi: 'border-right-style: inset',

  'border-right-style-none': 'border-right-style: none',
  brsn: 'border-right-style: none',

  'border-right-style-outset': 'border-right-style: outset',
  brso: 'border-right-style: outset',

  'border-right-style-ridge': 'border-right-style: ridge',
  brsr: 'border-right-style: ridge',

  'border-right-style-solid': 'border-right-style: solid',
  brss: 'border-right-style: solid',

  'border-right-width-auto': 'border-right-width: auto',
  brwa: 'border-right-width: auto',

  'border-right-width-initial': 'border-right-width: initial',
  brwi: 'border-right-width: initial',

  'border-right-width-medium': 'border-right-width: medium',
  brwm: 'border-right-width: medium',

  'border-right-width-thick': 'border-right-width: thick',
  brwt: 'border-right-width: thick',

  'border-right-width-thin': 'border-right-width: thin',
  brwtn: 'border-right-width: thin',
  brwt2: 'border-right-width: thin',

  'box-sizing-border-box': 'box-sizing: border-box',
  bsbb: 'box-sizing: border-box',

  'box-sizing-content-box': 'box-sizing: content-box',
  bscb: 'box-sizing: content-box',

  'border-style-double': 'border-style: double',
  bsdb: 'border-style: double',

  'border-style-dashed': 'border-style: dashed',
  bsds: 'border-style: dashed',

  'border-style-dotted': 'border-style: dotted',
  bsdt: 'border-style: dotted',
  bsd2: 'border-style: double',
  bsd: 'border-style: dashed',
  bsd3: 'border-style: dotted',

  'border-style-groove': 'border-style: groove',
  bsg: 'border-style: groove',

  'border-style-hidden': 'border-style: hidden',
  bsh: 'border-style: hidden',

  'border-style-inset': 'border-style: inset',
  bsi: 'border-style: inset',

  'box-sizing-inherit': 'box-sizing:inherit',
  bsin: 'box-sizing:inherit',
  bsi2: 'box-sizing:inherit',

  'border-style-none': 'border-style: none',
  bsn: 'border-style: none',

  'box-shadow-none': 'box-shadow: none',
  bxsn: 'box-shadow: none',

  'border-style-outset': 'border-style: outset',
  bso: 'border-style: outset',

  'box-sizing-padding-box': 'box-sizing: padding-box',
  bspb: 'box-sizing: padding-box',

  'border-style-ridge': 'border-style: ridge',
  bsr: 'border-style: ridge',

  'border-style-solid': 'border-style: solid',
  bss: 'border-style: solid',

  'border-top-color-transparent': 'border-top-color: transparent',
  btc_t: 'border-top-color: transparent',
  btct: 'border-top-color: transparent',

  'border-top-color-none': 'border-top-color: none',
  btcn: 'border-top-color: none',

  'border-top-style-double': 'border-top-style: double',
  btsdb: 'border-top-style: double',

  'border-top-style-dashed': 'border-top-style: dashed',
  btsds: 'border-top-style: dashed',

  'border-top-style-dotted': 'border-top-style: dotted',
  btsdt: 'border-top-style: dotted',
  btsd2: 'border-top-style: double',
  btsd: 'border-top-style: dashed',
  btsd3: 'border-top-style: dotted',

  'border-top-style-groove': 'border-top-style: groove',
  btsg: 'border-top-style: groove',

  'border-top-style-hidden': 'border-top-style: hidden',
  btsh: 'border-top-style: hidden',

  'border-top-style-inset': 'border-top-style: inset',
  btsi: 'border-top-style: inset',

  'border-top-style-none': 'border-top-style: none',
  btsn: 'border-top-style: none',

  'border-top-style-outset': 'border-top-style: outset',
  btso: 'border-top-style: outset',

  'border-top-style-ridge': 'border-top-style: ridge',
  btsr: 'border-top-style: ridge',

  'border-top-style-solid': 'border-top-style: solid',
  btss: 'border-top-style: solid',

  'border-top-width-auto': 'border-top-width: auto',
  btwa: 'border-top-width: auto',

  'border-top-width-initial': 'border-top-width: initial',
  btwi: 'border-top-width: initial',

  'border-top-width-medium': 'border-top-width: medium',
  btwm: 'border-top-width: medium',

  'border-top-width-thick': 'border-top-width: thick',
  btwt: 'border-top-width: thick',

  'border-top-width-thin': 'border-top-width: thin',
  btwtn: 'border-top-width: thin',
  btwt2: 'border-top-width: thin',

  'backface-visibility-hidden': 'backface-visibility: hidden',
  bvh: 'backface-visibility: hidden',

  'backface-visibility-visible': 'backface-visibility: visible',
  bvv: 'backface-visibility: visible',

  'border-width-auto': 'border-width: auto',
  bwa: 'border-width: auto',

  'border-width-initial': 'border-width: initial',
  bwi: 'border-width: initial',

  'border-width-medium': 'border-width: medium',
  bwm: 'border-width: medium',

  'border-width-thick': 'border-width: thick',
  bwt: 'border-width: thick',

  'border-width-thin': 'border-width: thin',
  bwtn: 'border-width: thin',
  bwt2: 'border-width: thin',

  'color-currentColor': 'color:currentColor',
  ccc: 'color:currentColor',

  'cursor-copy': 'cursor: copy',
  cc: 'cursor: copy',
  c_cc: 'color:currentColor',

  'color-inherit': 'color:inherit',
  c_in: 'color:inherit',
  ci: 'color:inherit',

  'clear-after-both': 'clear-after: both',
  cab: 'clear-after: both',

  'clear-after-bottom': 'clear-after: bottom',
  cabtm: 'clear-after: bottom',
  cab2: 'clear-after: bottom',

  'clear-after-descendants': 'clear-after: descendants',
  cad: 'clear-after: descendants',

  'clear-after-end': 'clear-after: end',
  cae: 'clear-after: end',

  'clear-after-inside': 'clear-after: inside',
  cai: 'clear-after: inside',

  'cursor-alias': 'cursor: alias',
  cal: 'cursor: alias',

  'clear-after-none': 'clear-after: none',
  can: 'clear-after: none',

  'clear-after-outside': 'clear-after: outside',
  cao: 'clear-after: outside',

  'clear-after-right': 'clear-after: right',
  car: 'clear-after: right',

  'clear-after-start': 'clear-after: start',
  cast: 'clear-after: start',
  cas2: 'clear-after: start',

  'cursor-all-scroll': 'cursor: all-scroll',
  cas: 'cursor: all-scroll',

  'clear-after-top': 'clear-after: top',
  cat: 'clear-after: top',

  'clip-auto': 'clip: auto',
  cla: 'clip: auto',
  ca3: 'clip: auto',
  ca2: 'cursor: alias',

  'cursor-auto': 'cursor: auto',
  ca: 'cursor: auto',

  'clear-both': 'clear: both',
  cb: 'clear: both',

  'column-count-auto': 'column-count: auto',
  cca: 'column-count: auto',

  'cursor-crosshair': 'cursor: crosshair',
  cch: 'cursor: crosshair',

  'cursor-cell': 'cursor: cell',
  ccl: 'cursor: cell',

  'cursor-context-menu': 'cursor: context-menu',
  ccm: 'cursor: context-menu',

  'content-close-quote': 'content: close-quote',
  concq: 'content: close-quote',

  'cursor-col-resize': 'cursor: col-resize',
  ccr: 'cursor: col-resize',

  'cursor-default': 'cursor: default',
  cd: 'cursor: default',

  'cursor-e-resize': 'cursor: e-resize',
  cer: 'cursor: e-resize',

  'cursor-ew-resize': 'cursor: ew-resize',
  cewr: 'cursor: ew-resize',

  'column-fill-auto': 'column-fill: auto',
  cfa: 'column-fill: auto',

  'column-fill-balance': 'column-fill: balance',
  cfb: 'column-fill: balance',

  'column-gap-normal': 'column-gap: normal',
  cgnl: 'column-gap: normal',

  'cursor-help': 'cursor: help',
  ch: 'cursor: help',

  'color-honeydew': 'color:honeydew',
  c_honeydew: 'color:honeydew',

  'counter-increment-inherit': 'counter-increment: inherit',
  ciin: 'counter-increment: inherit',
  cii: 'counter-increment: inherit',

  'counter-increment-list-item': 'counter-increment: list-item',
  cili: 'counter-increment: list-item',

  'counter-increment-none': 'counter-increment: none',
  cin: 'counter-increment: none',

  'content-icon': 'content: icon',
  coni: 'content: icon',
  ci2: 'content: icon',

  'clear-left': 'clear: left',
  cl: 'clear: left',

  'cursor-move': 'cursor: move',
  cm: 'cursor: move',

  'cursor-not-allowed': 'cursor: not-allowed',
  cna: 'cursor: not-allowed',

  'content-no-close-quote': 'content: no-close-quote',
  conncq: 'content: no-close-quote',
  cncq: 'content: no-close-quote',

  'cursor-no-drop': 'cursor: no-drop',
  cnd: 'cursor: no-drop',

  'cursor-ne-resize': 'cursor: ne-resize',
  cner: 'cursor: ne-resize',
  cnr8: 'cursor: ne-resize',
  cnr7: 'cursor: ne-resize',

  'cursor-nesw-resize': 'cursor: nesw-resize',
  cneswr: 'cursor: nesw-resize',
  cnr6: 'cursor: nesw-resize',
  cnr5: 'cursor: nesw-resize',

  'content-normal': 'content: normal',
  connl: 'content: normal',
  cn4: 'content: normal',

  'content-no-open-quote': 'content: no-open-quote',
  connoq: 'content: no-open-quote',
  cnoq: 'content: no-open-quote',

  'cursor-ns-resize': 'cursor: ns-resize',
  cnsr: 'cursor: ns-resize',

  'cursor-nw-resize': 'cursor: nw-resize',
  cnwr: 'cursor: nw-resize',

  'cursor-nwse-resize': 'cursor: nwse-resize',
  cnwser: 'cursor: nwse-resize',

  'cursor-n-resize': 'cursor: n-resize',
  cnr: 'cursor: n-resize',
  cnr2: 'cursor: ns-resize',
  cnr3: 'cursor: nw-resize',
  cnr4: 'cursor: nwse-resize',

  'clear-none': 'clear: none',
  cn: 'clear: none',

  'content-""': 'content:" "',
  con: 'content:" "',

  'content-none': 'content: none',
  conn: 'content: none',
  cn3: 'content: none',

  'cursor-none': 'cursor: none',
  cnone: 'cursor: none',
  cn2: 'cursor: none',

  'content-open-quote': 'content: open-quote',
  coq: 'content: open-quote',

  'cursor-progress': 'cursor: progress',
  cpg: 'cursor: progress',
  cp2: 'cursor: progress',

  'cursor-pointer': 'cursor: pointer',
  cp: 'cursor: pointer',

  'counter-reset-inherit': 'counter-reset: inherit',
  crin: 'counter-reset: inherit',
  cri: 'counter-reset: inherit',

  'counter-reset-list-item': 'counter-reset: list-item',
  crli: 'counter-reset: list-item',

  'counter-reset-none': 'counter-reset: none',
  crn: 'counter-reset: none',

  'cursor-row-resize': 'cursor: row-resize',
  crr: 'cursor: row-resize',

  'column-rule-style-double': 'column-rule-style: double',
  crsdb: 'column-rule-style: double',
  crsd2: 'column-rule-style: double',

  'column-rule-style-dashed': 'column-rule-style: dashed',
  crsds: 'column-rule-style: dashed',
  crsd: 'column-rule-style: dashed',

  'column-rule-style-dotted': 'column-rule-style: dotted',
  crsdt: 'column-rule-style: dotted',
  crsd3: 'column-rule-style: dotted',

  'column-rule-style-groove': 'column-rule-style: groove',
  crsg: 'column-rule-style: groove',

  'column-rule-style-hidden': 'column-rule-style: hidden',
  crsh: 'column-rule-style: hidden',

  'column-rule-style-inset': 'column-rule-style: inset',
  crsi: 'column-rule-style: inset',

  'column-rule-style-none': 'column-rule-style: none',
  crsn: 'column-rule-style: none',

  'column-rule-style-outset': 'column-rule-style: outset',
  crso: 'column-rule-style: outset',

  'column-rule-style-ridge': 'column-rule-style: ridge',
  crsr: 'column-rule-style: ridge',

  'column-rule-style-solid': 'column-rule-style: solid',
  crss: 'column-rule-style: solid',

  'column-rule-width-medium': 'column-rule-width: medium',
  crwm: 'column-rule-width: medium',

  'column-rule-width-thick': 'column-rule-width: thick',
  crwt: 'column-rule-width: thick',

  'column-rule-width-thin': 'column-rule-width: thin',
  crwtn: 'column-rule-width: thin',
  crwt2: 'column-rule-width: thin',

  'clear-right': 'clear: right',
  cr: 'clear: right',

  'column-span-all': 'column-span: all',
  csa: 'column-span: all',

  'caption-side-bottom': 'caption-side: bottom',
  csbtm: 'caption-side: bottom',

  'cursor-se-resize': 'cursor: se-resize',
  cser: 'cursor: se-resize',
  csr3: 'cursor: se-resize',

  'column-span-none': 'column-span: none',
  csn: 'column-span: none',

  'cursor-s-resize': 'cursor: s-resize',
  csr: 'cursor: s-resize',

  'caption-side-top': 'caption-side: top',
  cst: 'caption-side: top',

  'cursor-sw-resize': 'cursor: sw-resize',
  cswr: 'cursor: sw-resize',
  csr2: 'cursor: sw-resize',

  'color-transparent': 'color:transparent',
  c_t: 'color:transparent',
  ct2: 'color:transparent',

  'cursor-text': 'cursor: text',
  ct: 'cursor: text',

  'cursor-vertical-text': 'cursor: vertical-text',
  cvt: 'cursor: vertical-text',

  'column-width-auto': 'column-width: auto',
  cwa: 'column-width: auto',

  'cursor-w-resize': 'cursor: w-resize',
  cwr: 'cursor: w-resize',

  'cursor-wait': 'cursor: wait',
  cw: 'cursor: wait',

  'cursor-zoom-in': 'cursor: zoom-in',
  czi: 'cursor: zoom-in',

  'cursor-zoom-out': 'cursor: zoom-out',
  czo: 'cursor: zoom-out',

  'display-block': 'display: block',
  db: 'display: block',

  'display-compact': 'display: compact',
  dcp: 'display: compact',
  dc2: 'display: compact',

  'display-container': 'display: container',
  dc: 'display: container',

  'display-flex': 'display: flex',
  df: 'display: flex',

  'display-inline-block': 'display: inline-block',
  dib: 'display: inline-block',

  'display-inline-flex': 'display: inline-flex',
  dif: 'display: inline-flex',

  'display-inline-table': 'display: inline-table',
  dit: 'display: inline-table',

  'display-inline': 'display: inline',
  di: 'display: inline',

  'display-list-item': 'display: list-item',
  dli: 'display: list-item',

  'display-none': 'display: none',
  dn: 'display: none',

  'display-run-in': 'display: run-in',
  dri: 'display: run-in',

  'display-table-column-group': 'display: table-column-group',
  dtcg: 'display: table-column-group',

  'display-table-cell': 'display: table-cell',
  dtcl: 'display: table-cell',
  dtc3: 'display: table-cell',

  'display-table-caption': 'display: table-caption',
  dtcp: 'display: table-caption',
  dtc2: 'display: table-caption',

  'display-table-column': 'display: table-column',
  dtc: 'display: table-column',

  'display-table-footer-group': 'display: table-footer-group',
  dtfg: 'display: table-footer-group',

  'display-table-header-group': 'display: table-header-group',
  dthg: 'display: table-header-group',

  'display-table-row-group': 'display: table-row-group',
  dtrg: 'display: table-row-group',

  'display-table-row': 'display: table-row',
  dtr: 'display: table-row',

  'display-table': 'display: table',
  dt: 'display: table',

  'empty-cells-hide': 'empty-cells: hide',
  ech: 'empty-cells: hide',

  'empty-cells-show': 'empty-cells: show',
  ecs: 'empty-cells: show',

  'flex-auto': 'flex: auto',
  fa: 'flex: auto',

  'flex-basis-0': 'flex-basis: 0',
  fb0: 'flex-basis: 0',

  'flex-basis-auto': 'flex-basis: auto',
  fba: 'flex-basis: auto',

  'flex-basis-content': 'flex-basis:content',
  fbc: 'flex-basis:content',

  'flex-basis-inherit': 'flex-basis: inherit',
  fbin: 'flex-basis: inherit',

  'flex-direction-column': 'flex-direction: column',
  ffc: 'flex-direction: column',
  fdc: 'flex-direction: column',

  'flex-flow-columnnowrap': 'flex-flow: column nowrap',
  ffcn: 'flex-flow: column nowrap',

  'flex-direction-column-reverse': 'flex-direction: column-reverse',
  ffcr: 'flex-direction: column-reverse',
  fdcr: 'flex-direction: column-reverse',

  'flex-flow-column-reversenowrap': 'flex-flow: column-reverse nowrap',
  ffcrn: 'flex-flow: column-reverse nowrap',

  'flex-flow-column-reversewrap-reverse': 'flex-flow:column-reverse wrap-reverse',
  ffcrwr: 'flex-flow:column-reverse wrap-reverse',

  'flex-flow-column-reversewrap': 'flex-flow: column-reverse wrap',
  ffcrw: 'flex-flow: column-reverse wrap',

  'font-family-cursive': 'font-family: cursive',
  ffcu: 'font-family: cursive',

  'flex-flow-columnwrap-reverse': 'flex-flow: column wrap-reverse',
  ffcwr: 'flex-flow: column wrap-reverse',

  'flex-flow-columnwrap': 'flex-flow:column wrap',
  ffcw: 'flex-flow:column wrap',

  'font-family-fantasy': 'font-family: fantasy',
  fff: 'font-family: fantasy',

  'font-family-inherit': 'font-family: inherit',
  ffin: 'font-family: inherit',

  'font-family-initial': 'font-family:initial',
  ffin2: 'font-family: initial',
  ffi: 'font-family: inherit',
  ffi2: 'font-family:initial',

  'font-family-monospace': 'font-family: monospace',
  ffm: 'font-family: monospace',

  'flex-wrap-nowrap': 'flex-wrap: nowrap',
  ffn: 'flex-wrap: nowrap',
  fwn: 'flex-wrap: nowrap',

  'flex-direction-row': 'flex-direction: row',
  ffr: 'flex-direction: row',
  fdr: 'flex-direction: row',

  'flex-flow-rownowrap': 'flex-flow:row nowrap',
  ffrn: 'flex-flow:row nowrap',

  'flex-direction-row-reverse': 'flex-direction: row-reverse',
  ffrr: 'flex-direction: row-reverse',
  fdrr: 'flex-direction: row-reverse',

  'flex-flow-row-reversenowrap': 'flex-flow: row-reverse nowrap',
  ffrrn: 'flex-flow: row-reverse nowrap',

  'flex-flow-row-reversewrap-reverse': 'flex-flow: row-reverse wrap-reverse',
  ffrrwr: 'flex-flow: row-reverse wrap-reverse',

  'flex-flow-row-reversewrap': 'flex-flow:row-reverse wrap',
  ffrrw: 'flex-flow:row-reverse wrap',

  'flex-flow-rowwrap-reverse': 'flex-flow:row wrap-reverse',
  ffrwr: 'flex-flow:row wrap-reverse',

  'flex-flow-rowwrap': 'flex-flow: row wrap',
  ffrw: 'flex-flow: row wrap',

  'font-family-sans-serif': 'font-family: sans-serif',
  ffss: 'font-family: sans-serif',

  'font-family-serif': 'font-family: serif',
  ffs: 'font-family: serif',

  'flex-flow-wrap-wrap': 'flex-flow-wrap: wrap',
  ffw: 'flex-flow-wrap: wrap',

  'flex-wrap-wrap': 'flex-wrap: wrap',
  fww: 'flex-wrap: wrap',

  'flex-flow-wrap-wrap-reverse': 'flex-flow-wrap: wrap-reverse',
  ffwp: 'flex-flow-wrap: wrap-reverse',

  'flex-wrap-wrap-reverse': 'flex-wrap: wrap-reverse',
  fwwr: 'flex-wrap: wrap-reverse',

  'flex-grow-inherit': 'flex-grow:inherit',
  fgin: 'flex-grow:inherit',
  fgi: 'flex-grow:inherit',

  'flex-item-align-auto': 'flex-item-align: auto',
  fiaa: 'flex-item-align: auto',

  'flex-item-align-baseline': 'flex-item-align: baseline',
  fiab: 'flex-item-align: baseline',

  'flex-item-align-center': 'flex-item-align: center',
  fiac: 'flex-item-align: center',

  'flex-item-align-end': 'flex-item-align: end',
  fiae: 'flex-item-align: end',

  'flex-item-align-stretch': 'flex-item-align: stretch',
  fiasth: 'flex-item-align: stretch',
  fias2: 'flex-item-align: stretch',

  'flex-item-align-start': 'flex-item-align: start',
  fias: 'flex-item-align: start',

  'flex-initial': 'flex: initial',
  fi2: 'flex: initial',

  'font-inherit': 'font:inherit',
  fin: 'font:inherit',
  fi: 'font:inherit',

  'font-kerning-auto': 'font-kerning: auto',
  fka: 'font-kerning: auto',

  'font-kerning-normal': 'font-kerning: normal',
  fknl: 'font-kerning: normal',
  fkn2: 'font-kerning: normal',

  'font-kerning-none': 'font-kerning: none',
  fkn: 'font-kerning: none',

  'filter-inherit': 'filter: inherit',
  flin: 'filter: inherit',

  'filter-initial': 'filter: initial',
  fli: 'filter: initial',

  'filter-unset': 'filter: unset',
  flu: 'filter: unset',
  fi4: 'filter: inherit',
  fi3: 'filter: initial',
  fu: 'filter: unset',

  'flex-line-pack-center': 'flex-line-pack: center',
  flpc: 'flex-line-pack: center',

  'flex-line-pack-distribute': 'flex-line-pack: distribute',
  flpd: 'flex-line-pack: distribute',

  'flex-line-pack-end': 'flex-line-pack: end',
  flpe: 'flex-line-pack: end',

  'flex-line-pack-justify': 'flex-line-pack: justify',
  flpj: 'flex-line-pack: justify',

  'flex-line-pack-stretch': ' flex-line-pack: stretch',
  flpsth: ' flex-line-pack: stretch',
  flps2: ' flex-line-pack: stretch',

  'flex-line-pack-start': 'flex-line-pack: start',
  flps: 'flex-line-pack: start',

  'float-left': 'float: left',
  fl: 'float: left',

  'float-none': 'float: none',
  fn: 'float: none',

  'float-right': 'float: right',
  fr: 'float: right',

  'font-size-adjust-inherit': 'font-size-adjust: inherit',
  fsain: 'font-size-adjust: inherit',
  fsai: 'font-size-adjust: inherit',

  'font-size-adjust-none': 'font-size-adjust: none',
  fsan: 'font-size-adjust: none',

  'font-stretch-condensed': 'font-stretch: condensed',
  fsc: 'font-stretch: condensed',

  'font-stretch-extra-condensed': 'font-stretch: extra-condensed',
  fsec: 'font-stretch: extra-condensed',

  'font-stretch-extra-expanded': 'font-stretch: extra-expanded',
  fsee: 'font-stretch: extra-expanded',

  'font-stretch-expanded': 'font-stretch: expanded',
  fse: 'font-stretch: expanded',

  'flex-shrink-inherit': 'flex-shrink:inherit',
  fskin: 'flex-shrink:inherit',
  fsi3: 'flex-shrink:inherit',

  'font-size-inherit': 'font-size:inherit',
  fsin: 'font-size:inherit',
  fsi2: 'font-size:inherit',

  'font-style-italic': 'font-style: italic',
  fsi: 'font-style: italic',

  'font-size-larger': 'font-size: larger',
  fslr: 'font-size: larger',
  fsl2: 'font-size: larger',

  'font-size-large': 'font-size: large',
  fsl: 'font-size: large',

  'font-size-medium': 'font-size: medium',
  fsm: 'font-size: medium',

  'font-stretch-normal': 'font-stretch: normal',
  fsnml: 'font-stretch: normal',
  fsn3: 'font-stretch: normal',

  'font-style-normal': 'font-style: normal',
  fsnl: 'font-style: normal',
  fsn2: 'font-style: normal',

  'font-synthesis-none': 'font-synthesis: none',
  fsn: 'font-synthesis: none',

  'font-style-oblique': 'font-style: oblique',
  fso: 'font-style: oblique',

  'font-stretch-semi-condensed': 'font-stretch: semi-condensed',
  fssc: 'font-stretch: semi-condensed',

  'font-stretch-semi-expanded': 'font-stretch: semi-expanded',
  fsse: 'font-stretch: semi-expanded',

  'font-size-smaller': 'font-size: smaller',
  fssr: 'font-size: smaller',
  fss2: 'font-size: smaller',

  'font-size-small': 'font-size: small',
  fss: 'font-size: small',

  'font-stretch-ultra-condensed': 'font-stretch: ultra-condensed',
  fsuc: 'font-stretch: ultra-condensed',

  'font-stretch-ultra-expanded': 'font-stretch: ultra-expanded',
  fsue: 'font-stretch: ultra-expanded',

  'font-synthesis-weightstyle': 'font-synthesis: weight style',
  fsws: 'font-synthesis: weight style',

  'font-synthesis-weight': 'font-synthesis: weight',
  fsw: 'font-synthesis: weight',

  'font-size-x-large': 'font-size: x-large',
  fsxl: 'font-size: x-large',

  'font-size-x-small': 'font-size: x-small',
  fsxs: 'font-size: x-small',

  'font-size-xx-large': 'font-size: xx-large',
  fsxxl: 'font-size: xx-large',
  fsxl2: 'font-size: xx-large',

  'font-size-xx-small': 'font-size: xx-small',
  fsxxs: 'font-size: xx-small',
  fsxs2: 'font-size: xx-small',

  'font-variant-all-petite-caps': 'font-variant: all-petite-caps',
  fvapc: 'font-variant: all-petite-caps',

  'font-variant-all-small-caps': 'font-variant: all-small-caps',
  fvasc: 'font-variant: all-small-caps',

  'font-variant-caps-all-petite-caps': 'font-variant-caps: all-petite-caps',
  fvcapc: 'font-variant-caps: all-petite-caps',

  'font-variant-caps-all-small-caps': 'font-variant-caps: all-small-caps',
  fvcasc: 'font-variant-caps: all-small-caps',

  'font-variant-caps-normal': 'font-variant-caps: normal',
  fvcn: 'font-variant-caps: normal',
  fvcnl: 'font-variant-caps: normal',

  'font-variant-caps-petite-caps': 'font-variant-caps: petite-caps',
  fvcpc: 'font-variant-caps: petite-caps',

  'font-variant-caps-small-caps': 'font-variant-caps: small-caps',
  fvcsc: 'font-variant-caps: small-caps',

  'font-variant-caps-titling-caps': 'font-variant-caps: titling-caps',
  fvctc: 'font-variant-caps: titling-caps',

  'font-variant-caps-unicase': 'font-variant-caps: unicase',
  fvcu: 'font-variant-caps: unicase',

  'font-variant-normal': 'font-variant: normal',
  fvnl: 'font-variant: normal',

  'font-variant-petite-caps': 'font-variant: petite-caps',
  fvpc: 'font-variant: petite-caps',

  'font-variant-small-caps': 'font-variant: small-caps',
  fvsc: 'font-variant: small-caps',

  'font-variant-titling-caps': 'font-variant: titling-caps',
  fvtc: 'font-variant: titling-caps',

  'font-variant-unicase': 'font-variant: unicase',
  fvu: 'font-variant: unicase',

  'font-weight-100': 'font-weight: 100',
  fw1: 'font-weight: 100',

  'font-weight-200': 'font-weight: 200',
  fw2: 'font-weight: 200',

  'font-weight-300': 'font-weight: 300',
  fw3: 'font-weight: 300',

  'font-weight-400': 'font-weight: 400',
  fw4: 'font-weight: 400',

  'font-weight-500': 'font-weight: 500',
  fw5: 'font-weight: 500',

  'font-weight-600': 'font-weight: 600',
  fw6: 'font-weight: 600',

  'font-weight-700': 'font-weight: 700',
  fw7: 'font-weight: 700',

  'font-weight-800': 'font-weight: 800',
  fw8: 'font-weight: 800',

  'font-weight-900': 'font-weight: 900',
  fw9: 'font-weight: 900',

  'font-weight-bold': 'font-weight: bold',
  fwb: 'font-weight: bold',

  'font-weight-bolder': 'font-weight: bolder',
  fwbr: 'font-weight: bolder',
  fwb2: 'font-weight: bolder',

  'font-weight-lighter': 'font-weight: lighter',
  fwl: 'font-weight: lighter',

  'font-weight-normal': 'font-weight: normal',
  fwnl: 'font-weight: normal',
  fwn2: 'font-weight: normal',

  'hyphens-auto': 'hyphens: auto',
  ha: 'hyphens: auto',

  'hyphens-manual': 'hyphens: manual',
  hm: 'hyphens: manual',

  'hyphens-none': 'hyphens: none',
  hn: 'hyphens: none',

  'hanging-punctuation-allow-end': 'hanging-punctuation: allow-end',
  hpae: 'hanging-punctuation: allow-end',

  'hanging-punctuation-firstallow-end': 'hanging-punctuation: first allow-end',
  hpfae: 'hanging-punctuation: first allow-end',

  'hanging-punctuation-force-end': 'hanging-punctuation: force-end',
  hpfe: 'hanging-punctuation: force-end',

  'hanging-punctuation-firstforce-end': 'hanging-punctuation: first force-end',
  hpffe: 'hanging-punctuation: first force-end',

  'hanging-punctuation-first': 'hanging-punctuation: first',
  hpf: 'hanging-punctuation: first',

  'hanging-punctuation-lastallow-end': 'hanging-punctuation: last allow-end',
  hplae: 'hanging-punctuation: last allow-end',

  'hanging-punctuation-lastforce-end': 'hanging-punctuation: last force-end',
  hplfe: 'hanging-punctuation: last force-end',

  'hanging-punctuation-last': 'hanging-punctuation: last',
  hpl: 'hanging-punctuation: last',

  'hanging-punctuation-none': 'hanging-punctuation: none',
  hpn: 'hanging-punctuation: none',

  'icon-auto': 'icon: auto',
  ia: 'icon: auto',

  'include-font-padding-true':'include-font-padding:true',
  'ifpt':'include-font-padding:true',
  'include-font-padding-false':'include-font-padding:false',
  'ifpf':'include-font-padding:false',

  'image-orientation-flip': 'image-orientation: flip',
  iof: 'image-orientation: flip',

  'image-orientation-inherit': 'image-orientation: inherit',
  ioin: 'image-orientation: inherit',
  ioi: 'image-orientation: inherit',

  'justify-content-center': 'justify-content: center',
  jcc: 'justify-content: center',

  'justify-content-space-evenly': 'justify-content: space-evenly',
  jcse: 'justify-content: space-evenly',

  'justify-content-flex-end': 'justify-content: flex-end',
  jcfe: 'justify-content: flex-end',

  'justify-content-flex-start': 'justify-content: flex-start',
  jcfs: 'justify-content: flex-start',

  'justify-content-space-around': 'justify-content: space-around',
  jcsa: 'justify-content: space-around',

  'justify-content-space-between': 'justify-content: space-between',
  jcsb: 'justify-content: space-between',

  'left-auto': 'left: auto',
  la: 'left: auto',

  'line-break-auto': 'line-break: auto',
  lba: 'line-break: auto',

  'line-break-loose': 'line-break: loose',
  lbl: 'line-break: loose',

  'line-break-normal': 'line-break: normal',
  lbnl: 'line-break: normal',
  lbn: 'line-break: normal',

  'line-break-strict': 'line-break: strict',
  lbs: 'line-break: strict',

  'line-height-normal': 'line-height: normal',
  lhnl: 'line-height: normal',
  lhn: 'line-height: normal',

  'line-height-inherit': 'line-height:inherit',
  lhin: 'line-height:inherit',
  lhi: 'line-height:inherit',

  'line-height-initial': 'line-height:initial',
  lhi2: 'line-height:initial',

  'list-style-type-armenian': 'list-style-type: armenian',
  lsa: 'list-style-type: armenian',
  lsta: 'list-style-type: armenian',

  'list-style-type-circle': 'list-style-type: circle',
  lsc: 'list-style-type: circle',
  lstc: 'list-style-type: circle',

  'list-style-type-disc': 'list-style-type: disc',
  lsd: 'list-style-type: disc',
  lstd: 'list-style-type: disc',

  'list-style-type-decimal': 'list-style-type: decimal',
  lsdc: 'list-style-type: decimal',
  lsd2: 'list-style-type: decimal',
  lstd2: 'list-style-type: decimal',

  'list-style-type-decimal-leading-zero': 'list-style-type: decimal-leading-zero',
  lsdlz: 'list-style-type: decimal-leading-zero',
  lstdlz: 'list-style-type: decimal-leading-zero',

  'list-style-type-georgian': 'list-style-type: georgian',
  lsg: 'list-style-type: georgian',
  lstg: 'list-style-type: georgian',

  'list-style-image-none': 'list-style-image: none',
  lsin: 'list-style-image: none',

  'list-style-type-lower-alpha': 'list-style-type: lower-alpha',
  lsla: 'list-style-type: lower-alpha',
  lstla: 'list-style-type: lower-alpha',

  'list-style-type-lower-greek': 'list-style-type: lower-greek',
  lslg: 'list-style-type: lower-greek',
  lstlg: 'list-style-type: lower-greek',

  'list-style-type-lower-latin': 'list-style-type: lower-latin',
  lsll: 'list-style-type: lower-latin',
  lstll: 'list-style-type: lower-latin',

  'list-style-type-lower-roman': 'list-style-type: lower-roman',
  lslr: 'list-style-type: lower-roman',
  lstlr: 'list-style-type: lower-roman',

  'list-style-none': 'list-style: none',
  lsn: 'list-style: none',

  'list-style-type-none': 'list-style-type: none',
  lstn: 'list-style-type: none',

  'letter-spacing-normal': 'letter-spacing: normal',
  lesnl: 'letter-spacing: normal',
  lsnl: 'letter-spacing: normal',
  lsn2: 'letter-spacing: normal',

  'list-style-position-inside': 'list-style-position: inside',
  lspi: 'list-style-position: inside',

  'list-style-position-outside': 'list-style-position: outside',
  lspo: 'list-style-position: outside',

  'list-style-type-square': 'list-style-type: square',
  lss: 'list-style-type: square',
  lsts: 'list-style-type: square',

  'list-style-type-upper-alpha': 'list-style-type: upper-alpha',
  lsua: 'list-style-type: upper-alpha',
  lstua: 'list-style-type: upper-alpha',

  'list-style-type-upper-latin': 'list-style-type: upper-latin',
  lsul: 'list-style-type: upper-latin',
  lstul: 'list-style-type: upper-latin',

  'list-style-type-upper-roman': 'list-style-type: upper-roman',
  lsur: 'list-style-type: upper-roman',
  lstur: 'list-style-type: upper-roman',

  'margin-bottom-auto': 'margin-bottom: auto',
  mba: 'margin-bottom: auto',

  'min-height-auto': 'min-height: auto',
  mha: 'min-height: auto',

  'margin-left-auto': 'margin-left: auto',
  mla: 'margin-left: auto',

  'margin-right-auto': 'margin-right: auto',
  mra: 'margin-right: auto',

  'margin-top-auto': 'margin-top: auto',
  mta: 'margin-top: auto',

  'min-width-auto': 'min-width: auto',
  mwa: 'min-width: auto',
  olw2px:'outline-width: 2px',
  'opacity-0': 'opacity:0',
  o0: 'opacity:0',

  'opacity-1': 'opacity:1',
  o1: 'opacity:1',

  'opacity-0.1': 'opacity:0.1',
  o0d1: 'opacity:0.1',

  'opacity-0.2': 'opacity:0.2',
  o0d2: 'opacity:0.2',

  'opacity-0.3': 'opacity:0.3',
  o0d3: 'opacity:0.3',

  'opacity-0.4': 'opacity:0.4',
  o0d4: 'opacity:0.4',

  'opacity-0.5': 'opacity:0.5',
  o0d5: 'opacity:0.5',

  'opacity-0.6': 'opacity:0.6',
  o0d6: 'opacity:0.6',

  'opacity-0.7': 'opacity:0.7',
  o0d7: 'opacity:0.7',

  'opacity-0.8': 'opacity:0.8',
  o0d8: 'opacity:0.8',

  'opacity-0.9': 'opacity:0.9',
  o0d9: 'opacity:0.9',

  'overflow-auto': 'overflow: auto',
  oa: 'overflow: auto',

  'outline-0': 'outline:0',
  ol0: 'outline:0',

  'outline-none': 'outline:none',
  oln: 'outline:none',

  'outline-color-invert': 'outline-color: invert',
  olci: 'outline-color: invert',
  oci: 'outline-color: invert',

  'outline-color-inherit': 'outline-color:inherit',
  oci2: 'outline-color: inherit',

  'outline-color-transparent': 'outline-color:transparent',
  oct: 'outline-color:transparent',
  olct: 'outline-color:transparent',
  olc_t: 'outline-color:transparent',
  oc_t: 'outline-color:transparent',
  olc_in: 'outline-color:inherit',
  oc_in: 'outline-color:inherit',

  'object-fit-contain': 'object-fit: contain',
  ofcon: 'object-fit: contain',

  'object-fit-cover': 'object-fit: cover',
  ofc: 'object-fit: cover',

  'object-fit-fill': 'object-fit: fill',
  off: 'object-fit: fill',

  'object-fit-none': 'object-fit: none',
  ofn: 'object-fit: none',

  'object-fit-scale-down': 'object-fit: scale-down',
  ofsd: 'object-fit: scale-down',

  'overflow-hidden': 'overflow: hidden',
  oh: 'overflow: hidden',

  'outline-offset-inherit': 'outline-offset: inherit',
  ooin: 'outline-offset: inherit',
  ooi: 'outline-offset: inherit',

  'object-position-centercenter': 'object-position: center center',
  opcc: 'object-position: center center',

  'object-position-lefttop': 'object-position: left top',
  oplt: 'object-position: left top',

  'object-position-rightbottom': 'object-position: right bottom',
  oprb: 'object-position: right bottom',

  'order-inherit': 'order:inherit',
  ordin: 'order:inherit',

  'orphans-inherit': 'orphans: inherit',
  orpin: 'orphans: inherit',

  'outline-style-auto': 'outline-style: auto',
  osa: 'outline-style: auto',

  'outline-style-double': 'outline-style: double',
  osdb: 'outline-style: double',

  'outline-style-dashed': 'outline-style: dashed',
  osds: 'outline-style: dashed',

  'outline-style-dotted': 'outline-style: dotted',
  osdt: 'outline-style: dotted',
  osd2: 'outline-style: double',
  osd: 'outline-style: dashed',
  osd3: 'outline-style: dotted',

  'outline-style-groove': 'outline-style: groove',
  osg: 'outline-style: groove',

  'outline-style-inset': 'outline-style: inset',
  osi: 'outline-style: inset',

  'outline-style-none': 'outline-style: none',
  osn: 'outline-style: none',

  'outline-style-outset': 'outline-style: outset',
  oso: 'outline-style: outset',

  'outline-style-ridge': 'outline-style: ridge',
  osr: 'outline-style: ridge',

  'outline-style-solid': 'outline-style: solid',
  oss: 'outline-style: solid',

  'overflow-scroll': 'overflow: scroll',
  os: 'overflow: scroll',

  'overflow-visible': 'overflow: visible',
  ov: 'overflow: visible',

  'overflow-wrap-break-word': 'overflow-wrap: break-word',
  owbw: 'overflow-wrap: break-word',

  'outline-width-medium': 'outline-width: medium',
  owm: 'outline-width: medium',

  'overflow-wrap-normal': 'overflow-wrap: normal',
  ownl: 'overflow-wrap: normal',
  own: 'overflow-wrap: normal',

  'outline-width-thick': 'outline-width: thick',
  owt: 'outline-width: thick',

  'outline-width-thin': 'outline-width: thin',
  owtn: 'outline-width: thin',
  owt2: 'outline-width: thin',

  'overflow-wrap-word-wrap': 'overflow-wrap: word-wrap',
  owww: 'overflow-wrap: word-wrap',

  'overflow-x-auto': 'overflow-x: auto',
  oxa: 'overflow-x: auto',

  'overflow-x-hidden': 'overflow-x: hidden',
  oxh: 'overflow-x: hidden',

  'overflow-x-scroll': 'overflow-x: scroll',
  oxs: 'overflow-x: scroll',

  'overflow-x-visible': 'overflow-x: visible',
  oxv: 'overflow-x: visible',

  'overflow-y-auto': 'overflow-y: auto',
  oya: 'overflow-y: auto',

  'overflow-y-hidden': 'overflow-y: hidden',
  oyh: 'overflow-y: hidden',

  'overflow-y-scroll': 'overflow-y: scroll',
  oys: 'overflow-y: scroll',

  'overflow-y-visible': 'overflow-y: visible',
  oyv: 'overflow-y: visible',

  'position-absolute': 'position: absolute',
  pa: 'position: absolute',

  'page-break-after-always': 'page-break-after: always',
  pbaal: 'page-break-after: always',
  pbaa3: 'page-break-after: always',

  'page-break-after-avoid': 'page-break-after: avoid',
  pbaav: 'page-break-after: avoid',
  pbaa2: 'page-break-after: avoid',

  'page-break-after-auto': 'page-break-after: auto',
  pbaa: 'page-break-after: auto',

  'page-break-after-left': 'page-break-after: left',
  pbal: 'page-break-after: left',

  'page-break-after-right': 'page-break-after: right',
  pbar: 'page-break-after: right',

  'page-break-before-always': 'page-break-before: always',
  pbbal: 'page-break-before: always',
  pbba3: 'page-break-before: always',

  'page-break-before-avoid': 'page-break-before: avoid',
  pbbav: 'page-break-before: avoid',
  pbba2: 'page-break-before: avoid',

  'page-break-before-auto': 'page-break-before: auto',
  pbba: 'page-break-before: auto',

  'page-break-before-left': 'page-break-before: left',
  pbbl: 'page-break-before: left',

  'page-break-before-right': 'page-break-before: right',
  pbbr: 'page-break-before: right',

  'page-break-inside-auto': 'page-break-inside: auto',
  pbia: 'page-break-inside: auto',

  'page-break-inside-avoid': 'page-break-inside: avoid',
  pbiav: 'page-break-inside: avoid',
  pbia2: 'page-break-inside: avoid',

  'position-center': 'position: center',
  pc: 'position: center',

  'pointer-events-auto': 'pointer-events: auto',
  pea: 'pointer-events: auto',

  'pointer-events-none': 'pointer-events: none',
  pen: 'pointer-events: none',

  'position-fixed': 'position: fixed',
  pf: 'position: fixed',

  'perspective-inherit': 'perspective: inherit',
  pin: 'perspective: inherit',
  pi: 'perspective: inherit',

  'perspective-none': 'perspective: none',
  pn: 'perspective: none',

  'perspective-origin-bottomleft': 'perspective-origin: bottom left',
  pobl: 'perspective-origin: bottom left',

  'perspective-origin-bottomright': 'perspective-origin: bottom right',
  pobr: 'perspective-origin: bottom right',

  'perspective-origin-bottom': 'perspective-origin: bottom',
  pobtm: 'perspective-origin: bottom',
  pob: 'perspective-origin: bottom',

  'perspective-origin-center': 'perspective-origin: center',
  poc: 'perspective-origin: center',

  'perspective-origin-inherit': 'perspective-origin: inherit',
  poin: 'perspective-origin: inherit',
  poi: 'perspective-origin: inherit',

  'perspective-origin-left': 'perspective-origin: left',
  pol: 'perspective-origin: left',

  'perspective-origin-right': 'perspective-origin: right',
  por: 'perspective-origin: right',

  'perspective-origin-topleft': 'perspective-origin: top left',
  potl: 'perspective-origin: top left',

  'perspective-origin-topright': 'perspective-origin: top right',
  potr: 'perspective-origin: top right',

  'perspective-origin-top': 'perspective-origin: top',
  pot: 'perspective-origin: top',

  'position-page': 'position: page',
  pp: 'position: page',

  'position-relative': 'position: relative',
  pr: 'position: relative',

  'position-static': 'position: static',
  ps: 'position: static',

  'position-sticky': 'position: sticky',
  pst: 'position: sticky',
  ps2: 'position: sticky',

  'quotes-none': 'quotes: none',
  qn: 'quotes: none',

  'right-auto': 'right: auto',
  ra: 'right: auto',

  'resize-both': 'resize: both',
  rb: 'resize: both',

  'resize-horizontal': 'resize: horizontal',
  rh: 'resize: horizontal',

  'resize-vertical': 'resize: vertical',
  rv: 'resize: vertical',

  'text-align-center': 'text-align: center',
  tac: 'text-align: center',

  'text-align-end': 'text-align: end',
  tae: 'text-align: end',

  'text-align-justify': 'text-align: justify',
  taj: 'text-align: justify',

  'text-align-last-auto': 'text-align-last: auto',
  tala: 'text-align-last: auto',

  'text-align-last-center': 'text-align-last: center',
  talc: 'text-align-last: center',

  'text-align-last-end': 'text-align-last: end',
  tale: 'text-align-last: end',

  'text-align-last-justify': 'text-align-last: justify',
  talj: 'text-align-last: justify',

  'text-align-last-left': 'text-align-last: left',
  tall: 'text-align-last: left',

  'text-align-last-right': 'text-align-last: right',
  talr: 'text-align-last: right',

  'text-align-last-start': 'text-align-last: start',
  tals: 'text-align-last: start',

  'text-align-left': 'text-align: left',
  tal: 'text-align: left',

  'text-align-match-parent': 'text-align: match-parent',
  tamp: 'text-align: match-parent',

  'text-align-right': 'text-align: right',
  tar: 'text-align: right',

  'text-align-startend': 'text-align: start end',
  tase: 'text-align: start end',

  'text-align-start': 'text-align: start',
  tas: 'text-align: start',

  'text-align-vertical-auto':'text-align-vertical-auto',
  'tava':'text-align-vertical-auto',

  'text-align-vertical-top':'text-align-vertical-top',
  'tavt':'text-align-vertical-top',

  'text-align-vertical-bottom':'text-align-vertical-bottom',
  'tavb':'text-align-vertical-bottom',

  'text-align-vertical-center':'text-align-vertical-center',
  'tavc':'text-align-vertical-center',

  'top-auto': 'top: auto',
  ta: 'top: auto',

  'text-combine-horizontal-all': 'text-combine-horizontal: all',
  tcha: 'text-combine-horizontal: all',

  'text-combine-horizontal-digits': 'text-combine-horizontal: digits ',
  tchd: 'text-combine-horizontal: digits ',

  'text-combine-horizontal-none': 'text-combine-horizontal: none',
  tchn: 'text-combine-horizontal: none',

  'text-decoration-dashed': 'text-decoration: dashed',
  tdds: 'text-decoration: dashed',

  'text-decoration-style-dashed': 'text-decoration-style: dashed',
  tdsds: 'text-decoration-style: dashed',
  tdd: 'text-decoration: dashed',

  'text-decoration-style-double': 'text-decoration-style: double',
  tdsd: 'text-decoration-style: double',

  'text-decoration-blink': 'text-decoration: blink',
  tdb: 'text-decoration: blink',

  'text-decoration-line-blink': 'text-decoration-line: blink',
  tdlb: 'text-decoration-line: blink',

  'text-decoration-color-inherit': 'text-decoration-color: inherit',
  tdc_in: 'text-decoration-color: inherit',
  tdcin: 'text-decoration-color: inherit',

  'text-decoration-color-transparent': 'text-decoration-color: transparent',
  tdc_t: 'text-decoration-color: transparent',
  tdct: 'text-decoration-color: transparent',

  'text-decoration-double': 'text-decoration: double',
  tddb: 'text-decoration: double',
  tdsdb: 'text-decoration-style: double',

  'text-decoration-dotted': 'text-decoration: dotted',
  tddt: 'text-decoration: dotted',

  'text-decoration-style-dotted': 'text-decoration-style: dotted',
  tdsdt: 'text-decoration-style: dotted',
  tdd2: 'text-decoration: double',
  tdsd2: 'text-decoration-style: dashed',
  tdd3: 'text-decoration: dotted',
  tdsd3: 'text-decoration-style: dotted',

  'text-decoration-inherit': 'text-decoration:inherit',
  tdin: 'text-decoration:inherit ',
  tdi: 'text-decoration:inherit',

  'transition-duration-inherit': 'transition-duration: inherit',
  tduin: 'transition-duration: inherit',
  tdui2: 'transition-duration: inherit',

  'transition-delay-initial': 'transition-delay: initial',
  tdli: 'transition-delay: initial',

  'text-decoration-line-through': 'text-decoration: line-through',
  tdlt: 'text-decoration: line-through',

  'text-decoration-line-line-through': 'text-decoration-line: line-through',
  tdllt: 'text-decoration-line: line-through', 

  'text-decoration-line-none': 'text-decoration-line: none',
  tdln: 'text-decoration-line: none',

   'text-decoration-line-underline': 'text-decoration-line: underline',
  tdlu: 'text-decoration-line: underline',

   'text-decoration-line-underline-line-through': 'text-decoration-line: underline line-through',
  tdlult: 'text-decoration-line: underline line-through',

  'text-decoration-none': 'text-decoration: none',
  tdn: 'text-decoration: none',

  'text-decoration-overline': 'text-decoration: overline',
  tdo: 'text-decoration: overline',
  tdlo: 'text-decoration: overline',

  'text-decoration-skip-box-decoration': 'text-decoration-skip: box-decoration',
  tdsbd: 'text-decoration-skip: box-decoration',

  'text-decoration-skip-edges': 'text-decoration-skip: edges',
  tdse: 'text-decoration-skip: edges',

  'text-decoration-skip-ink': 'text-decoration-skip: ink',
  tdsi: 'text-decoration-skip: ink',

  'text-decoration-skip-none': 'text-decoration-skip: none',
  tdsn: 'text-decoration-skip: none',

  'text-decoration-skip-objects': 'text-decoration-skip: objects',
  tdso: 'text-decoration-skip: objects',

  'text-decoration-skip-spaces': 'text-decoration-skip: spaces',
  tdssp: 'text-decoration-skip: spaces',

  'text-decoration-style-solid': 'text-decoration-style: solid',
  tdss: 'text-decoration-style: solid',

  'text-decoration-style-wavy': 'text-decoration-style: wavy',
  tdsw: 'text-decoration-style: wavy',

  'text-decoration-underline': 'text-decoration: underline',
  tdu: 'text-decoration: underline',
  tdlu: 'text-decoration: underline',

  'text-decoration-unset': 'text-decoration: unset',
  tdus: 'text-decoration: unset',

  'text-decoration-wavy': 'text-decoration: wavy',
  tdw: 'text-decoration: wavy',

  'text-emphasis-color-transparent': 'text-emphasis-color:transparent ',
  tec_t: 'text-emphasis-color:transparent ',
  tect: 'text-emphasis-color:transparent ',

  'text-emphasis-position-belowleft': 'text-emphasis-position: below left',
  tepbl: 'text-emphasis-position: below left',

  'text-emphasis-position-belowright': 'text-emphasis-position: below right',
  tepbr: 'text-emphasis-position: below right',

  'text-emphasis-position-overleft': 'text-emphasis-position: over left',
  tepol: 'text-emphasis-position: over left',

  'text-emphasis-position-overright': 'text-emphasis-position: over right',
  tepor: 'text-emphasis-position: over right',

  'text-emphasis-style-circle': 'text-emphasis-style: circle',
  tesc: 'text-emphasis-style: circle',

  'text-emphasis-style-double-circle': 'text-emphasis-style: double-circle',
  tesdc: 'text-emphasis-style: double-circle',

  'text-emphasis-style-dot': 'text-emphasis-style: dot',
  tesd: 'text-emphasis-style: dot',

  'text-emphasis-style-filled': 'text-emphasis-style: filled',
  tesf: 'text-emphasis-style: filled',

  'text-emphasis-style-none': 'text-emphasis-style: none',
  tesn: 'text-emphasis-style: none',

  'text-emphasis-style-open': 'text-emphasis-style: open',
  teso: 'text-emphasis-style: open',

  'text-emphasis-style-sesame': 'text-emphasis-style: sesame',
  tess: 'text-emphasis-style: sesame',

  'text-emphasis-style-triangle': 'text-emphasis-style: triangle',
  test: 'text-emphasis-style: triangle',

  'text-emphasis-text-emphasis-position': 'text-emphasis: text-emphasis-position',
  tetep: 'text-emphasis: text-emphasis-position',

  'text-indent-each-line': 'text-indent: each-line',
  tiel: 'text-indent: each-line',

  'text-indent-hanging': 'text-indent: hanging',
  tih: 'text-indent: hanging',

  'text-indent-inherit': 'text-indent: inherit',
  tiin: 'text-indent: inherit',
  tii: 'text-indent: inherit',

  'text-justify-auto': 'text-justify: auto',
  tja: 'text-justify: auto',

  'text-justify-distribute': 'text-justify: distribute',
  tjd: 'text-justify: distribute',

  'text-justify-inter-word': 'text-justify: inter-word',
  tjiw: 'text-justify: inter-word',

  'text-justify-none': 'text-justify: none',
  tjn: 'text-justify: none',

  'table-layout-auto': 'table-layout: auto',
  tla: 'table-layout: auto',

  'table-layout-fixed': 'table-layout: fixed',
  tlf: 'table-layout: fixed',

  'transform-none': 'transform: none',
  tn: 'transform: none',

  'transform-origin-bottom': 'transform-origin: bottom',
  tobtm: 'transform-origin: bottom',
  tob: 'transform-origin: bottom',

  'transform-origin-centerleft': 'transform-origin: center  left',
  tocl: 'transform-origin: center  left',

  'text-overflow-clip': 'text-overflow: clip',
  toc2: 'text-overflow: clip',

  'transform-origin-leftcenter': 'transform-origin: left center',
  tolc: 'transform-origin: left center',

  'transform-origin-lefttop': 'transform-origin: left top',
  tolt: 'transform-origin: left top',

  'transform-origin-leftbottom': 'transform-origin: left bottom',
  tolb: 'transform-origin: left bottom',

  'transform-origin-rightbottom': 'transform-origin: right  bottom',
  torb: 'transform-origin: right  bottom',

  'transform-origin-righttop': 'transform-origin: right  top',
  tort: 'transform-origin: right  top',

  'transform-origin-rightcenter': 'transform-origin: right  center',
  torc: 'transform-origin: right  center',

  'transform-origin-centercenter': 'transform-origin: center  center',
  tocc: 'transform-origin: center  center',

  'transform-origin-centerbottom': 'transform-origin: center  bottom',
  tocb: 'transform-origin: center  bottom',

  'transform-origin-centertop': 'transform-origin: center  top',
  toct: 'transform-origin: center  top',

  'transform-origin-centerright': 'transform-origin: center  right',
  tocr: 'transform-origin: center  right',

  'transform-origin-topcenter': 'transform-origin: top center  ',
  totc: 'transform-origin: top center  ',

  'transform-origin-topright': 'transform-origin: top right  ',
  totr: 'transform-origin: top right  ',

  'transform-origin-topleft': 'transform-origin: top left  ',
  totl: 'transform-origin: top left  ',

  'transform-origin-bottomcenter': 'transform-origin: bottom center  ',
  tobc: 'transform-origin: bottom center  ',

  'transform-origin-bottomleft': 'transform-origin: bottom left  ',
  tobl: 'transform-origin: bottom left  ',

  'transform-origin-bottomright': 'transform-origin: bottom right  ',
  tobr: 'transform-origin: bottom right  ',

  'transform-origin-center': 'transform-origin: center',
  toc: 'transform-origin: center',

  'text-overflow-ellipsis': 'text-overflow: ellipsis',
  toe: 'text-overflow: ellipsis',

  'transform-origin-left': 'transform-origin: left',
  tol: 'transform-origin: left',

  'text-orientation-mixed': 'text-orientation: mixed',
  tom: 'text-orientation: mixed',

  'transform-origin-right': 'transform-origin: right',
  tor: 'transform-origin: right',

  'text-orientation-sideways-left': 'text-orientation: sideways-left',
  tosl: 'text-orientation: sideways-left',

  'text-orientation-sideways-right': 'text-orientation: sideways-right',
  tosr: 'text-orientation: sideways-right',

  'text-orientation-sideways': 'text-orientation: sideways',
  tos: 'text-orientation: sideways',

  'transform-origin-top': 'transform-origin: top',
  tot: 'transform-origin: top',

  'text-orientation-use-glyph-orientation': 'text-orientation: use-glyph-orientation',
  tougo: 'text-orientation: use-glyph-orientation',

  'text-orientation-upright': 'text-orientation: upright',
  tou: 'text-orientation: upright',

  'transition-property-all': 'transition-property: all',
  tpa: 'transition-property: all',

  'transition-property-none': 'transition-property: none',
  tpn: 'transition-property: none',

  'text-rendering-auto': 'text-rendering: auto',
  tra: 'text-rendering: auto',

  'text-rendering-geometricPrecision': 'text-rendering: geometricPrecision',
  trgp: 'text-rendering: geometricPrecision',
  trg: 'text-rendering: geometricPrecision',

  'text-rendering-inherit': 'text-rendering: inherit',
  trin: 'text-rendering: inherit',
  tri: 'text-rendering: inherit',

  'text-rendering-optimizeLegibility': 'text-rendering: optimizeLegibility',
  trop: 'text-rendering: optimizeLegibility',
  tro: 'text-rendering: optimizeLegibility',

  'text-rendering-optimizeSpeed': 'text-rendering: optimizeSpeed',
  tros: 'text-rendering: optimizeSpeed',
  tro2: 'text-rendering: optimizeSpeed',

  'transform-style-flat': 'transform-style: flat',
  tsf: 'transform-style: flat',

  'text-shadow-inherit': 'text-shadow: inherit',
  tsi: 'text-shadow: inherit',
  tsin: 'text-shadow: inherit',

  'transform-style-inherit': 'transform-style: inherit',
  tsi2: 'transform-style: inherit',
  tsin2: 'transform-style: inherit',

  'text-shadow-none': 'text-shadow: none',
  tsn: 'text-shadow: none',

  'transform-style-preserve-3d': 'transform-style: preserve-3d',
  tsp3d: 'transform-style: preserve-3d',
  tsp3: 'transform-style: preserve-3d',

  'text-transform-capitalize': 'text-transform: capitalize',
  ttc: 'text-transform: capitalize',

  'transition-timing-function-ease-in-out': 'transition-timing-function: ease-in-out',
  ttfeio: 'transition-timing-function: ease-in-out',

  'transition-timing-function-ease-in': 'transition-timing-function: ease-in',
  ttfei: 'transition-timing-function: ease-in',

  'transition-timing-function-ease-out': 'transition-timing-function: ease-out',
  ttfeo: 'transition-timing-function: ease-out',

  'transition-timing-function-ease': 'transition-timing-function: ease',
  ttfe: 'transition-timing-function: ease',

  'transition-timing-function-linear': 'transition-timing-function: linear',
  ttfl: 'transition-timing-function: linear',

  'transition-timing-function-step-end': 'transition-timing-function: step-end',
  ttfse: 'transition-timing-function: step-end',

  'transition-timing-function-step-start': 'transition-timing-function: step-start',
  ttfss: 'transition-timing-function: step-start',

  'text-transform-full-width': 'text-transform: full-width',
  ttfw: 'text-transform: full-width',

  'text-transform-lowercase': 'text-transform: lowercase',
  ttl: 'text-transform: lowercase',

  'text-transform-none': 'text-transform: none',
  ttn: 'text-transform: none',

  'text-transform-uppercase': 'text-transform: uppercase',
  ttu: 'text-transform: uppercase',

  'text-underline-position-auto': 'text-underline-position: auto',
  tupa: 'text-underline-position: auto',

  'text-underline-position-left': 'text-underline-position: left',
  tupl: 'text-underline-position: left',

  'text-underline-position-right': 'text-underline-position: right',
  tupr: 'text-underline-position: right',

  'text-underline-position-underleft': 'text-underline-position: under left',
  tupul: 'text-underline-position: under left',

  'text-underline-position-underright': 'text-underline-position: under right',
  tupur: 'text-underline-position: under right',

  'text-underline-position-under': 'text-underline-position: under',
  tupu: 'text-underline-position: under',

  'unicode-bidi-bidi-override': 'unicode-bidi: bidi-override',
  ubbo: 'unicode-bidi: bidi-override',

  'unicode-bidi-embed': 'unicode-bidi: embed',
  ube: 'unicode-bidi: embed',

  'unicode-bidi-normal': 'unicode-bidi: normal',
  ubnl: 'unicode-bidi: normal',
  ubn: 'unicode-bidi: normal',

  'vertical-align-baseline': 'vertical-align: baseline',
  vab: 'vertical-align: baseline',

  'vertical-align-bottom': 'vertical-align: bottom',
  vab2: 'vertical-align: bottom',
  vabtm: 'vertical-align: bottom',

  'vertical-align-middle': 'vertical-align: middle',
  vam: 'vertical-align: middle',

  'vertical-align-sub': 'vertical-align: sub',
  vasb: 'vertical-align: sub',

  'vertical-align-super': 'vertical-align: super',
  vas: 'vertical-align: super',

  'vertical-align-text-bottom': 'vertical-align: text-bottom',
  vatb: 'vertical-align: text-bottom',

  'vertical-align-text-top': 'vertical-align: text-top',
  vatt: 'vertical-align: text-top',

  'vertical-align-top': 'vertical-align: top',
  vat: 'vertical-align: top',

  'visibility-collapse': 'visibility: collapse',
  vc: 'visibility: collapse',

  'visibility-hidden': 'visibility: hidden',
  vh: 'visibility: hidden',

  'visibility-visible': 'visibility: visible',
  vv: 'visibility: visible',

  'width-auto': 'width: auto',
  wa: 'width: auto',

  'word-break-break-all': 'word-break: break-all',
  wbba: 'word-break: break-all',

  'word-break-keep-all': 'word-break: keep-all',
  wbka: 'word-break: keep-all',

  'word-break-normal': 'word-break: normal',
  wbnl: 'word-break: normal',
  wbn: 'word-break: normal',

  'writing-mode-horizontal-tb': 'writing-mode: horizontal-tb',
  wmht: 'writing-mode: horizontal-tb',

  'writing-mode-vertical-lr': 'writing-mode: vertical-lr',
  wmvl: 'writing-mode: vertical-lr',
  wmvlr: 'writing-mode: vertical-lr',

  'writing-mode-vertical-rl': 'writing-mode: vertical-rl',
  wmvr: 'writing-mode: vertical-rl',
  wmvrl: 'writing-mode: vertical-rl',

  "writing-direction-auto":"writing-direction-auto",
  "wda":"writing-direction-auto",

  "writing-direction-ltr":"writing-direction-ltr",
  "wdltr":"writing-direction-ltr",
  "wdl":"writing-direction-ltr",

  "writing-direction-rtl":"writing-direction-rtl",
  "wdrtl":"writing-direction-rtl",
  "wdr":"writing-direction-rtl",

  'white-space-nowrap': 'white-space: nowrap',
  wsn: 'white-space: nowrap',

  'white-space-nowarp': 'white-space: nowarp',
  wsnw: 'white-space: nowarp',

  'white-space-normal': 'white-space: normal',
  wsnl: 'white-space: normal',
  wsn2: 'white-space: normal',

  'word-spacing-normal': 'word-spacing:normal',
  wosnl: 'word-spacing: normal',
  wsn3: 'word-spacing:normal',

  'white-space-pre-line': 'white-space: pre-line',
  wspl: 'white-space: pre-line',

  'white-space-pre-wrap': 'white-space: pre-wrap',
  wspw: 'white-space: pre-wrap',

  'white-space-pre': 'white-space: pre',
  wsp: 'white-space: pre',

  'word-wrap-break-word': 'word-wrap: break-word',
  wwbw: 'word-wrap: break-word',

  'word-wrap-normal': 'word-wrap: normal',
  wwnl: 'word-wrap: normal',
  wwn: 'word-wrap: normal',

  'word-wrap-overflow-wrap': 'word-wrap: overflow-wrap',
  wwow: 'word-wrap: overflow-wrap',

  'max-height-none': 'max-height: none',
  xhn: 'max-height: none',

  'max-width-none': 'max-width: none',
  xwn: 'max-width: none',

  'z-index-auto': 'z-index: auto',
  zia: 'z-index: auto' };



// CONCATENATED MODULE: ./src/compilers/color.js
function color(color,custom){
	if(typeof custom === "object"){
		if(custom.hasOwnProperty(color)) return custom[color];
	}
	if(color.match(/[-_]/)) color=color.split(/[_-]/)[1];

	//hexadecimal
	if(/^[0-9a-fA-F]{3,6}$/.test(color)){
		return `#${color}`;

	//Name	
	}else if(/^[a-zA-Z]+$/.test(color)){
		return color;
	//rgb/a in number	
	}else if(/^[0-9]{9}/.test(color)){
		//rgb
		let rgb=color.match(/[\d]{3}/g);
		if(color.length===9){
			
			return `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;
		}else{
			let a=color.slice(9).replace("d",".");
			return `rgba(${rgb[0]},${rgb[1]},${rgb[2]},${a})`;
		}
	//rgb/a in pecentage	
	}else if(/[0-9]+p/.test(color) && color.match(/[0-9]+p/g).length===3){
		if(/[\d]p$/.test(color)){
			return "rgb("+ color.replace(/([\d]+)p([\d]+)p([\d]+)p/,"$1%,$2%,$3%") +')';
		}else{
			return ("rgba(" + color.replace(/([\d]+)p([\d]+)p([\d]+)p([\d][d]?[\d]?)/,"$1%,$2%,$3%,$4")+')').replace("d",".");
		}
	//HSL/a	
	}else if(/[0-9]+p/.test(color) && color.match(/[0-9]+p/g).length==2){
		if(/[\d]p$/.test(color)){
			return "hsl("+ color.replace(/([\d]{3})([\d]+)p([\d]+)p/,"$1,$2%,$3%") +')';
		}else{
			return ("hsla(" + color.replace(/([\d]{3})([\d]+)p([\d]+)p([\d][d]?[\d]?)/,"$1,$2%,$3%,$4")+')').replace("d",".");
		}
	}else{

		return false;
	}
}
// CONCATENATED MODULE: ./src/compilers/length.js
function length_length(length,custom){

	if(typeof custom === "object"){
		if(custom.hasOwnProperty(length)) return custom[length];
	}
//-100px100px-100px100px
return length.match(/[-]?[0-9]+[d]?[0-9]*(px|em|p|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc)/g)
			.toString()
			.replace(/p(,)|p$/g,"%$1")
			.replace(/d/g,".")
			.replace(/[,]/g," ");


};

// CONCATENATED MODULE: ./src/compilers/number.js

function number(str,custom){
	if(typeof custom === "object"){
		if(custom.hasOwnProperty(str)) return custom[str];
	}
 return str.replace(/d/,".");

}


// numberonly:{match:/^(aic|cc|f|fg|fs|o|ord|lh|orp|op|zi)([-]?[0-9]+[d]?[0-9]*)$/,
// 			  callFunction:function(each){//console.log("i am a number only");
// 			  var propertyAlias=each.match(this.match)[1],
// 					getProperty=aliasProperty[propertyAlias],
// 					getValue=each.match(this.match)[2];
// 					getValue=getValue.replace(/d/,".");
// 					//fix opacity
// 					if(each.match(/^o[0-9]/) && !getValue.match(/[\.]/)){
// 						if(getValue<11){ getValue=getValue/10;}else{getValue=getValue/100;}
// 					}
// 				return [getProperty,getValue];
// 			  }
// 			},
// CONCATENATED MODULE: ./src/compilers/font.js
function font(str){
	let holder="";
	str.split(/-/).forEach((e)=>{
		if(e.search(/_/)!==-1){
			holder+="\""+e.replace(/_/g," ")+"\" ,";
		}else{
			holder+=e+",";
		}
	});

	return holder.replace(/,$/,"");
}
// CONCATENATED MODULE: ./src/compilers/angleTimeFrequencyResolution.js

function angleTimeFrequencyResolution(data){
	return data.replace(/([0-9])[d]([0-9])/,"$1.$2");

}
// angleTimeFrequencyResolutionProcessor:function(each){
// 			///deg| grad| rad| turn dpi| dpcm| dppxHz| kHz|s|ms/;
// 			var matchitonly=/[-]?[0-9]+[d]?[0-9]*(deg|grad|rad|turn|dpi|dpcm|dppx|Hz|hz|kHz|khz|s|ms)/g;
// 			var lengthArray=each.match(matchitonly);
// 			if(!lengthArray){return false;}
// 			var lengthString=lengthArray.toString();

// 			var valueescapedecimal=lengthString.replace(/([0-9])[d]([0-9])/g,"$1.$2");
// 			return valueescapedecimal.replace(/[,]/g," ");
// 		},
// CONCATENATED MODULE: ./src/compilers/transform.js
function transform(data){
	data=data.replace(/^-/,"");
	let statement="";
	data.split(/--/).forEach((e)=>{
		if(e){
			let result=transformEach(e);
			if(result) statement+=result + " ";
		}
	})

	if(statement) return statement
		return null;
	// let match=/([a-zA-z]+(3d)?)(([-]?[0-9]+[d]?[0-9]*[a-z]*))+/;
	// let func=data.match(match)[1];
	// let statement="";
	// if(tfAlias.hasOwnProperty(func)){
	// 	statement+=tfAlias[func]+"(";
	// 	statement+= data.replace(func,"").replace(/_/g,", ").replace(/(?<=[0-9])[d](?=[0-9])/g,".").replace(/(?<=[0-9])[p](?=[\s|,])/g,"%").replace(/p$/,"%")+")";
	// 	return statement;
	// }

}
function transformEach(data){
	
	
	let match=/([a-zA-z]+(3d)?)(([-]?[0-9]+[d]?[0-9]*[a-z]*))+/;
	let func=data.match(match)[1];
	let statement="";
	if(tfAlias.hasOwnProperty(func)){
		statement+=tfAlias[func]+"(";
		statement+= data.replace(func,"").replace(/_/g,", ").replace(/(?<=[0-9])[d](?=[0-9])/g,".").replace(/(?<=[0-9])[p](?=[\s|,])/g,"%").replace(/p$/,"%")+")";
		return statement;
	}else{
		return null;
	}

}


let tfAlias={
	m: "matrix",
	matrix: "matrix",
	t: "translate",
	translate: "translate",
	tx: "translateX",
	translateX: "translateX",
	ty: "translateY",
	translateY: "translateY",
	s: "scale" ,
	scale: "scale" ,
	sx: "scaleX",
	scaleX: "scaleX",
	 sy: "scaleY",
	 scaleY: "scaleY",
	 r: "rotate",
	 rotate: "rotate",
	 sk:"skew",
	 skew:"skew",
	 skx: "skewX",
	 skewX: "skewX",
	 sky: "skewY",
	 skewY: "skewY",
	 m3d: "matrix3d",
	 matrix3d: "matrix3d",
	 t3d: "translate3d",
	 translate3d: "translate3d",
	 tz: "translateZ",
	 translateZ: "translateZ",
	 s3d: "scale3d",
	 scale3d: "scale3d",
	 sz: "scaleZ",
	 scaleZ: "scaleZ",
	 r3d: "rotate3d",
	 rotate3d: "rotate3d",
	 rx: "rotateX",
	 rotateX: "rotateX",
	 ry: "rotateY",
	 rotateY: "rotateY",
	 rz: "rotateZ",
	 rotateZ: "rotateZ",
	 p: "perspective",
	 perspective: "perspective",
}

// transformProcessor:function(each){
// 			var each=each.replace("tf","");
// 			var tfAlias={
// 				 m: "matrix",t: "translate" ,tx: "translateX",ty: "translateY",s: "scale" ,sx: "scaleX",
// 				 sy: "scaleY",r: "rotate",skx: "skewX",sky: "skewY",m3d: "matrix3d",t3d: "translate3d",
// 				 tz: "translateZ",s3d: "scale3d",sz: "scaleZ",r3d: "rotate3d",rx: "rotateX",ry: "rotateY",
// 				 rz: "rotateZ",p: "perspective",};
// 			var tfFunc="";
// 			var value="";
// 			(function(){
// 			var mLen=each.match(/^(tx|ty|tz|t3d|t|p)[-]?[0-9]/);
// 			if(mLen){tfFunc=tfAlias[mLen[1]];value=compiler.lengthProcessor(each).replace(/[ ]/g,","); return true;}

// 			var mNum=each.match(/^(m3d|m|sx|sy|sz|s3d|s|r3d)[-]?[0-9]/);
// 			if(mNum){
// 				tfFunc=tfAlias[mNum[1]];
// 				eeach=each.replace(/m3d|s3d|r3d/,"");
// 				if(eeach.match(/_/)){eeach=each.replace(/[_]/g,"px"); }
// 				eeach=eeach.concat("px");
// 				if(compiler.lengthProcessor(eeach)){value=compiler.lengthProcessor(eeach).replace(/px/g,",");}
// 				var a ="";
// 				if(each.match(/r3d/) && compiler.angleTimeFrequencyResolutionProcessor(eeach)){a=","+compiler.angleTimeFrequencyResolutionProcessor(eeach);};
// 				value=value.replace(/[,]$/,"")+a;
// 			 return true;
// 	        }
// 	        var mAng=each.match(/^(rx|ry|rz|r|sky|skx)[-]?[0-9]/);
// 			if(mAng){tfFunc=tfAlias[mAng[1]];value=compiler.angleTimeFrequencyResolutionProcessor(each); return true;}
// 			})();
// 			var tfValue=tfFunc+"("+value+")";
// 			return tfValue;
// 		},









// CONCATENATED MODULE: ./src/compilers/transition.js
function transiton(data){
	let holder="";
	
	data.replace(/^-/,"").split(/--/).forEach((e)=>{
		let m=e.match(/^([a-z-]+)([0-9]+[d]?[0-9]*[m]?[s])([\w-_]*)/);
		let tf=m[3].replace(/^-/,"");
		if(tf && func[tf]){
			holder+= m[1].replace(/-$/,"")+" "+m[2].replace(/d/,'.')+ " "+func[tf]+",";
		}else{
			holder+= m[1].replace(/-$/,"")+" "+m[2].replace(/d/,'.')+",";
		}

		
		
	});

	return holder.replace(/[,]$/,"");

}
let func={
	e:"ease",
	ease:"ease",
	linear:"linear",
	l:"linear",
	ei:"ease-in",
	"ease-in":"ease-in",
	eo:"ease-out",
	"ease-out":"ease-out",
	eio:"ease-in-out",
	"ease-in-out":"ease-in-out",
	ss:"step-start",
	"step-start":"step-start",
	se:"step-end",
	"step-end":"step-end",
};

// CONCATENATED MODULE: ./src/compilers/border.js

function border(l,s,c,customColor){
let col=color(c,customColor);
let sty=style.hasOwnProperty(s)?style[s]:'';
let len=l.replace(/d/,".");


return len+" "+sty+" "+col;

}

let style={
	
	n:"none",
	none:"none",
	 s:"solid",
	 solid:"solid",
	 r:"ridge",
	 ridge:"ridge",
	 o :"outset",
	 outset :"outset",
	 i :"inset",
	 inset :"inset",
	 h :"hidden",
	 hidden :"hidden",
	 g : "groove",
	 groove : "groove",
	 db:"double",
	 double:"double",
	 dotted:"dotted",
	 dt:"dotted",
	 ds : "dashed",
	 dashed : "dashed",
}
// (n|none|s|solid|r|ridge|o|outset|i|inset|h|hidden|g|groove|db|double|dt|dotted|ds|dashed)
// match=/(b|border|brt|border-right|bl|border-left|bt|border-top|border-bottom|bb|ol|outline|cr|counter-reset)([-]?[0-9]+[d]?[0-9]*(px|em|p|ex|ch|rem|vw|vh|vmin|vmaxc|m|mm|in|pt|pc|cv))[-]?(n|none|s|solid|r|ridge|o|outset|i|inset|h|hidden|g|groove|db|double|dt|dotted|ds|dashed)[-]([\w]+)/
// letborderLike={match:/^(b|border|brt|border-right|bl|border-left|bt|border-top|border-bottom|bb|ol|outline|cr|counter-reset)[-]?[0-9][\w]+[-]?(s|sn|r|o|i|h|g|db|dt|ds)/,
// 			  callFunction:function(each){//console.log("i am a border");
// 			  	var styleAlias={n:"none",s:"solid", r:"ridge", o :"outset", i :"inset", h :"hidden", g : "groove", db:"double", dt:"dotted", ds : "dashed",};
// 				var propertyAlias=each.match(this.match)[1];
// 			    var getProperty=aliasProperty[propertyAlias];
// 			    var style="", length="", color="";
// 			    if(each.match(/ct|c_t/)){color="transparent";}
// 			    else if(compiler.colorProcessor(each)){color=compiler.colorProcessor(each);}
// 			    if(compiler.lengthProcessor(each)){length=compiler.lengthProcessor(each);};
// 			    if(each.match(/[_|-](s|n|r|o|i|h|g|db|dt|ds)/)){
// 			    	var s=each.match(/[_|-](s|n|r|o|i|h|g|db|dt|ds)/)[1];
// 			    	style=styleAlias[s];
// 			    }
// 			    //getMulipleValue=[];
// 			    getValue=style+" "+length+" "+color;
// 				return [getProperty,getValue];
// 			  }
// 			};
// CONCATENATED MODULE: ./src/compilers/gradient.js

function gradient(grad, data,customColor){
let gradientFunc="";
let holder="";
data=data.replace(/^[-]([a-z])/, "$1")
if(gradient_alias.hasOwnProperty(grad)){
	gradientFunc=gradient_alias[grad];
	let m1=/^[-]?[0-9]+[d]?[0-9]*(deg|grad|rad|turn)/;
	let m2=/^((to-)?(right|left|top|bottom)?[-]?(right|left|top|bottom))|([t]?[rltb]?[rltb])(?=[0-9-])/;
	if(m1.test(data)){
		let m=m1.exec(data);
		holder+=m[0].replace(/[d](?=[0-9])/,".")+", ";
		data=data.replace(m[0],"");
	}else if(m2.test(data)){
		let m=m2.exec(data);
		// console.log(m2.match()[1]);
		if(gradient_alias.hasOwnProperty(m[0])){
			holder+=gradient_alias[m[0]]+", ";
		}
		data=data.replace(m[0],"");

	}
data=data.replace(/^[-]([a-z])/, "$1")
let col=/[-_]?(c|color)[-_][A-Za-z0-9]+/g
	data=data.replace(col,function(m){
		let result=color(m.replace(/^[-_]/,""),customColor);
		return result?", "+result+" ":m;
	});

	 data=data.replace(/(?<=[0-9])[d](?=[0-9])/g,".").replace(/(?<=[0-9])[p](?=[\W]|$)/g,"%");
	 holder+=data.replace(/^[,]/,"").replace(/[_]/g,"");



	return gradientFunc+"( "+holder.replace(/,$/,"")+ ")";

}else{
	return null;
}


}

let gradient_alias={
	//gradient
	lg:"linear-gradient",
	"linear-gradient":"linear-gradient",
	rg:"radical-gradient",
	"radical-gradient":"radical-gradient",
	rlg:"repeating-linear-gradient",
	"repeating-linear-gradient":"repeating-linear-gradient",
	rrg:"repeating-radical-gradient",
	"repeating-radical-gradient":"radical-gradient",
	//direction ((to-)?(right|left|top|bottom)?(right|left|top|bottom))|([t]?[rltb]?[rltb])(?=[0-9-])
	"r":"right", 
	"right":"right",
	"bottom":"bottom",
	"b":"bottom",
	"t":"top",
	"top":"top",
	"l":"left",
	"left":"left",

	"top-left":"top left",
	"top-right":"top rigth",
	"bottom-right":"bottom right",
	"bottom-left":"bottom left",
	"left-top":"left top",
	"right-top":"rigth top",
	"right-bottom":"right bottom",
	"left-bottom":"left bottom",

	"tl":"top left",
	"tr":"top right",
	"br":"bottom right",
	"bl":"bottom left",
	"lt":"left top",
	"rt":"rigth top",
	"rb":"right bottom",
	"lb":"left bottom",

	"tr":"to right",
	"right":"to right",
	"bottom":"to bottom",
	"tb":"to bottom",
	"tt":"to top",
	"top":"to top",
	"tl":"to left",
	"letf":"to left",
	"to-top-left":"to top left",
	"to-top-right":"to top right",
	"to-bottom-right":"to bottom right",
	"to-bottom-left":"to bottom left",
	"to-left-top":"to left top",
	"to-right-top":"to right top",
	"to-right-bottom":"to right bottom",
	"to-left-bottom":"to left bottom",
	//shr
	"ttl":"to top left",
	"ttr":"to top right",
	"tbr":"to bottom right",
	"tbl":"to bottom left",
	"tlt":"to left top",
	"trt":"to  right top",
	"trb":"to right bottom",
	"tlb":"to left bottom",
}
// CONCATENATED MODULE: ./src/compilers/shadow.js




function shadow(data,customColor){
	
	let m=/(([-]?[0-9]+[d]?[0-9]*(px|em|p|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))+)[-_]([\w-]+)/;
	let holder="";
data.split(/--/).forEach((e)=>{
	if(m.test(e)){

		let result=m.exec(e);
		let col=color(result[4],customColor);
		let len=length_length(result[1]);

		holder+=len +" "+col+",";
	}
})
	
	return holder.replace(/[,]$/,"");

}



		// filter:{match:/^fl([b|c|g|h|i|o|s][l|r|e]?)[0-9]+/,
		// 	callFunction:function(each){

		// 		getProperty='filter';
		// 		var funcAlias={bl:'blur',b:'brightness',c:'contrast',g:'grayscale',
		// 			hr:'hue-rotate',i:'invert',o:'opacity',s:'saturate',se:'sepia'};
		// 		if(each.match(/[d]?[0-9]$/)){

		// 			funcValue=each.match(/([0-9]*[d]?[0-9]+)/)[0].replace('d', '.');

		// 		}else if(each.match(/flhr[0-9]+/)){
		// 			funcValue=compiler.angleTimeFrequencyResolutionProcessor(each);
		// 		}else{

		// 			funcValue=compiler.lengthProcessor(each)?compiler.lengthProcessor(each):0;

		// 		}
		// 		getValue=funcAlias[each.match(this.match)[1]] + "(" +funcValue +")";
		// 		return 	[getProperty,getValue];

		// 	}

		// 	},
// CONCATENATED MODULE: ./src/compilers/url.js
function url(data){
				let holder=""
				data.split(/--/).forEach((each)=>{
					let ndir=/^([0-9])[-_]/.exec(each);
				let dir=" url(";
				if(ndir && isFinite(parseInt(ndir[1]))){
					for(let i=0;i<ndir[1];i++){
						
			        dir+="../";
			       }
			       each=each.replace(ndir[0],"");
				}

				each=each.replace(/[-_]([A-Za-z0-9]+$)/,".$1")
					.replace(/[-_]/g,"/");

					holder+=dir + each+ "),"; 
				})
				
		return holder.replace(/[,]$/,"");

					
				//note restriction not use folder with name that uses ../../also need to figure out for
			}
// CONCATENATED MODULE: ./src/compilers/filter.js


function filter(f,v){
		if(f.match(/drop-shadow|ds/)){
			return filter_func[f]+'( '+shadow(v)+' )';
		}

		if(filter_func.hasOwnProperty(f)){
			let fn=filter_func[f];
			if(fn){
				return fn+'( '+v.replace(/p$/,"%").replace(/(?<=[0-9])[d](?=[0-9])/,".")+' )'; 
			}
		}
}


let  filter_func={
b:'blur',
blur:'blur',
br:'brightness',
brightness:'brightness',
'drop-shadow':'drop-shadow',
'ds':'drop-shadow',
c:'contrast',
contrast:'contrast',
g:'grayscale',
grayscale:'grayscale',
hr:'hue-rotate',
'hue-rotate':'hue-rotate',
i:'invert',
invert:'invert',
o:'opacity',
opacity:'opacity',
saturate:'saturate',
s:'saturate',
se:'sepia',
sepia:'sepia'
};

//m=/(filter|f)(drop-shadow|ds|b|blur|br|brightness|c|contrast|g|grayscale|hr|hue-rotate|i|invert|o|opacity|s|saturate|se|sepia)([-]?[0-9][\w-]+)/;

// filter:{match:/^fl([b|c|g|h|i|o|s][l|r|e]?)[0-9]+/,
// 			callFunction:function(each){

// 				getProperty='filter';
// 				var funcAlias={bl:'blur',b:'brightness',c:'contrast',g:'grayscale',
// 					hr:'hue-rotate',i:'invert',o:'opacity',s:'saturate',se:'sepia'};
// 				if(each.match(/[d]?[0-9]$/)){

// 					funcValue=each.match(/([0-9]*[d]?[0-9]+)/)[0].replace('d', '.');

// 				}else if(each.match(/flhr[0-9]+/)){
// 					funcValue=compiler.angleTimeFrequencyResolutionProcessor(each);
// 				}else{

// 					funcValue=compiler.lengthProcessor(each)?compiler.lengthProcessor(each):0;

// 				}
// 				getValue=funcAlias[each.match(this.match)[1]] + "(" +funcValue +")";
// 				return 	[getProperty,getValue];

// 			}

// 			},
// CONCATENATED MODULE: ./src/compilers/timingFunction.js
function timingFunction(data){
	let holder="";
	let cbm=/(cubic-bezier|cb)[-_]?(([0-9][d]?[0-9]*[-|_]?){4})/
	if(cbm.test(data)){
		let fData=cbm.exec(data)[2];
		return "cubic-bezier(" +fData.replace(/[-_]/g,",").replace(/d/g,".")+ " )";
	}else if(/^(e|ease|l|linear|ei|ease-in|eo|ease-out|eio|ease-in-out|ss|step-start|se|step-end)$/.test(data)){
		return timingFunction_func[data];

	}

}
let timingFunction_func={
	e:"ease",
	ease:"ease",
	linear:"linear",
	l:"linear",
	ei:"ease-in",
	"ease-in":"ease-in",
	eo:"ease-out",
	"ease-out":"ease-out",
	eio:"ease-in-out",
	"ease-in-out":"ease-in-out",
	ss:"step-start",
	"step-start":"step-start",
	se:"step-end",
	"step-end":"step-end",
};
// /(cubic-bezier[_-]?[0-9]|cb[-_]?[0-9]|e|ease|l|linear|ei|ease-in|eo|ease-out|eio|ease-in-out|ss|step-start|se|step-end)
// ///((cubic-bezier|cb)[-_]?(([0-9][d]?[0-9]*[-|_]?){4}))|(e|ease|l|linear|ei|ease-in|eo|ease-out|eio|ease-in-out|ss|step-start|se|step-end)
// animation_transition_tf:function(data){
// 	 		console.log(data);
// 			var func="";
// 			var N="";
// 			 var funcAlias={e:"ease",l:"linear",ei:"ease-in",eo:"ease-out",eio:"ease-in-out",ss:"step-start",se:"step-end"};
// 			 if(data.match(/cb[-]?[0-9]/)){
// 			 	if(data.match(/cb[-]/)){N="-"};
// 			 	var getN=data.match(/cb[-]?([0-9]+[d]?[0-9]*[-|_][-|_]?[0-9]+[d]?[0-9]*[-|_][-|_]?[0-9]+[d]?[0-9]*[-|_][-|_]?[0-9]+[d]?[0-9]*)/)[1];
// 			 		var value=getN.replace(/[-|_]([-]?)/g,",$1");
// 			 	value=value.replace(/d/g,".");
// 			 	func="cubic-bezeir("+N+value+")";
// 			 }else{

// 			 if(data.match(/[0-9]?[s|ms]?(e|l|ei|eo|eio|ss|se|s[0-9]+[s|e])/)){
// 			 	if(data.match(/s[0-9]+[s|e]/)){
// 			 		var se="";
// 			 		var eors=data.match(/s([0-9]+)([s|e])/);
// 			 			if(eors[2].match("s")){se="start";}else{se="end";}

// 			 		func="steps("+eors[1]+" ,"+ se+")";
// 			 	}else{
// 			 		func=data.match(/^(l|eo|eio|ss|se|ei|e)/)[1];
// 			 		func=funcAlias[func];
// 		    	}
// 		   	 }
// 			};
// 			return func;
// 		},
// CONCATENATED MODULE: ./src/matcher.js














let matcher={
	device:{match:/^(mob|tab|lab|hd|print|xs|sm|md|lg|xl)(?=[-|_])/, call:function(str){return this.match.exec(str)[1];}},
	selector:{match:/^([-|_])/,call:null},
	//------------------------property and value compilers
	compilers:{
		color:{
			match:/^((background-color|border(-(right|left|top|bottom|text-decoration|text-shadow))?-color|outline-color|color)|(bgc|b[rltb]?c|oc|c|txsc|tdc))[-_]/,
			call:color
		},
		length:{
			match:/(([-]?[a-z])+)(([-]?[0-9]+[d]?[0-9]*(px|em|p|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|cv))+)/,
			call:length_length
		},

		number:{
			match:/^(aic|animation-iteration-count|border-image-slice|text-shadow-radius|txsr|bis|cc|column-count|f|flex|fg|flex-grow|fsk|flex-shrink|font-size|fs|o|opacity|ord|order|lh|ls|letter-spacing|line-height|orp|orphans|op|object-position|zi|z-index)([-]?[0-9]+[d]?[0-9]*)$/,
			call:number
		},
		font:{
			match:/^(font-family|ff)[-]([a-zA-Z0-9-_]+)/,
			call:font
		},
		time:{
			match: /^(adu|animation-duration|adl|animation-delay|tdl|transition-delay|tdu|transition-duration)([-]?[0-9]+[d]?[0-9]*(ms|s))/,
			call:angleTimeFrequencyResolution
		},
		transform:{
			match:/^(tf|transform)(([-](matrix|translate|rotate|skew|scale|perspective))|(m|t|tx|ty|s|sy|sx|r|sk|sky|skx|m3d|t3d|tz|ry|rx|rz|p))/,
			call:transform
		},
		transition:{
			match:/^(tn|transition)[-]([a-z-]+)([0-9]+[d]?[0-9]*[m]?[s])([\w-_]*)/,
			call:transiton
		},
		border:{
			match:/^(b|border|brt|border-right|bl|border-left|bt|border-top|border-bottom|bb|ol|outline|cr|counter-reset)([-]?[0-9]+[d]?[0-9]*(px|em|p|ex|ch|rem|vw|vh|vmin|vmaxc|m|mm|in|pt|pc|cv))[-]?(n|none|s|solid|r|ridge|o|outset|i|inset|h|hidden|g|groove|db|double|dt|dotted|ds|dashed)[-]([\w]*)/,
			call:border
		},
		gradient:{
			match:/(background|bg|bgi|background-image)[-]?(((repeating-)?(linear|radical)-gradient)|(rrg|rg|lg|rlg))([\w_-]+)/,
			call:gradient
		},
		shadow:{
			match:/(bxs|txs|box-shadow|text-shadow)([-]?[0-9]+[d]?[0-9]*(px|em|p|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))+/,//[-_]([\w]+)/,
			call:shadow
		},
		url:{
			match:/(background-image|border-image-source|bis|background|bgi|bg)[-]?url[-_]([\w-]+)/,
			call:url,
		},
		filter:{
			match:/(filter|fl)[-]?(drop-shadow|ds|b|blur|br|brightness|c|contrast|g|grayscale|hr|hue-rotate|i|invert|o|opacity|s|saturate|se|sepia)([-]?[0-9][\w-]+)/,
			call:filter
		},
		timingFunction:{
			match:/(animation-timing-function|atf|transition-timing-function|ttf)[-_]?(cubic-bezier[_-]?[0-9][\w-]+|cb[-_]?[0-9][\w-]+|e|ease|l|linear|ei|ease-in|eo|ease-out|eio|ease-in-out|ss|step-start|se|step-end)/,
			call:timingFunction,
		},
		content:{
			match:/(con|content)[-_]?(url|attr)?[-_]([\w-]+)/,
			call:(u,data)=>{
				//u->url
				if(u==="url"){
					return url(data);
				}else if(u==="attr"){
					return "attr("+data+")";
				}
				return "\""+ data.replace(/[-_]/g," ")+"\"";

			}
		},
		animation:{
			match:/(animation-name|an)[-_]([\w]+)/,
			call:(data)=>{
				return data;
			}
		}


	}

	// -------------for property and value-----------
}
// let t=/(background-color|border(-(right|left|top|bottom))?-color|outline-color|color)|(bgc|b[rltb]?c|c)/,

// CONCATENATED MODULE: ./src/static/propertyAlias.js
let propertyAlias={
	//color
	"color":"color",
	"c":"color",
	"background-color":"background-color",
	"bgc":"background-color",
	"border-color":"border-color",
	"bc":"border-color",
	"border-right-color":"border-right-color",
	"brc":"border-right-color",
	"border-left-color":"border-left-color",
	"blc":"border-left-color",
	"border-top-color":"border-top-color",
	"btc":"border-top-color",
	"border-bottom-color":"border-bottom-color",
	"bbc":"border-bottom-color",
	"outline-color":"outline-color",
	"oc":"outline-color",
	//length
		"border-radius":"border-radius",
		"br"  :"border-radius",

		'border-image-outset':'border-image-outset',
		'bio':'border-image-outset',

		'border-image-slice':'border-image-slice',
		'bis':'border-image-slice',

		'border-image-width':'border-image-width',
		'biw':'border-image-width',

		"bblr":"border-bottom-left-radius",
		"border-bottom-left-radius":"border-bottom-left-radius",

		"bbrr": "border-bottom-right-radius",
		"border-bottom-right-radius": "border-bottom-right-radius",

		"btrr": "border-top-right-radius",
		"border-top-right-radius": "border-top-right-radius",
		"btlr":"border-top-left-radius",
		"border-top-left-radius":"border-top-left-radius",
		"bw"  :"border-width",
		"border-width"  :"border-width",
		"brw"  :"border-right-width",
		"border-right-width"  :"border-right-width",
		"btw"  :"border-top-width",
		"border-top-width"  :"border-top-width",
		"blw"  :"border-left-width",
		"border-left-width"  :"border-left-width",
		"bbw"  :"border-bottom-width",
		"border-bottom-width"  :"border-bottom-width",
		"btm"  :"bottom",//-----------------------#
		"bottom"  :"bottom",//-----------------------#
		"bgp"  :"background-position",//----------
		"background-position"  :"background-position",//----------
		"bgs":"background-size",//-----------
		"background-size":"background-size",//-----------
		"bs"  :"border-spacing",
		"border-spacing"  :"border-spacing",
		"cg":"column-gap",
		"column-gap":"column-gap",
		"crw":"column-rule-width",//#
		"column-rule-width":"column-rule-width",//#
		"cw":"column-width",
		"column-width":"column-width",
		"fb":"flex-basis",
		"flex-basis":"flex-basis",
		"fs":"font-size",
		"font-size":"font-size",
		"h":"height",
		"height":"height",
		"l"  :"left",
		"left"  :"left",
		"ls"  :"letter-spacing",//--------
		"letter-spacing"  :"letter-spacing",//--------
		"lh"  :"line-height",
		"line-height"  :"line-height",
		"m"  :"margin",
		"margin"  :"margin",
		"ma" :"margin",
		"mb"  :"margin-bottom",
		"margin-bottom"  :"margin-bottom",
		"mh"  :"min-height",
		"min-height"  :"min-height",
		"ml"  :"margin-left",
		"margin-left"  :"margin-left",
		"mo"  :"marker-offset",
		"marker-offset"  :"marker-offset",
		"mr"  :"margin-right",
		"margin-right"  :"margin-right",
		"mt"  :"margin-top",
		"margin-top"  :"margin-top",
		"mw"  :"min-width",
		"min-width"  :"min-width",
		"oo":"outline-offset",//---------
		"outline-offset":"outline-offset",//---------
		"ow"  :"outline-width",//--------
		"outline-width"  :"outline-width",//--------
		"op":"object-position",//-----------
		"object-position":"object-position",//-----------
		"p"  :"padding",
		"p"  :"padding",
		"pb"  :"padding-bottom",
		"padding-bottom"  :"padding-bottom",
		"pers":"perspective",//--------
		"perspective":"perspective",//--------
		"po":"perspective-origin",
		"perso":"perspective-origin",
		"perspective-origin":"perspective-origin",
		"pl"  :"padding-left",
		"padding-left"  :"padding-left",
		"pr"  :"padding-right",
		"padding-right"  :"padding-right",
		"pt"  :"padding-top",
		"padding-top"  :"padding-top",
		"r"  :"right",
		"right"  :"right",
		"t"  :"top",
		"top"  :"top",
		"tfo":"transform-origin",//--------
		"to":"transform-origin",
		"transform-origin":"transform-origin",//--------
		"ti" : "text-indent",
		"text-indent" : "text-indent",
		"va":"vertical-align"	,
		"vertical-align":"vertical-align"	,
		"w" :"width",
		"width" :"width",
		"ws":"word-spacing",
		"word-spacing":"word-spacing",
		"xh"  :"max-height",//------
		"max-height"  :"max-height",//------
		"xw"  :"max-width",//----------------
		"max-width"  :"max-width",//----------------

		"aic":"animation-iteration-count",
		"animation-iteration-count":"animation-iteration-count",
		//Number
		"cc":"column-count",
		"column-count":"column-count",
		"f":"flex",
		"flex":"flex",
		"fg":"flex-grow",
		"flex-grow":"flex-grow",
		"fsk":"flex-shrink",
		"flex-shrink":"flex-shrink",
		"ord":"order",//-------
		"order":"order",//-------
		"o":"opacity",
		"opacity":"opacity",
		"orp":"orphans",
		"orphans":"orphans",
		"zi":"z-index",
		"z-index":"z-index",
		//Font-family
		"ff":'font-family',
		"font-family":"font-family",
		//Time
		"adl":"animation-delay",
		"animation-delay":"animation-delay",
		"adu":"animation-duration",
		"animation-duration":"animation-duration",
		"tdl":"transition-delay",
		"transition-delay":"transition-delay",
		"tdu":"transition-duration",
		"transition-duration":"transition-duration",
		//transform
		"tf":"transform",
		'transform':'transform',
		'tn':"transition",
		'transition':"transition",
		//border
			"b":"border",
			"border":"border",
			"brt":"border-right",
			"border-right":"border-right",
			"bl":"border-left",
			"border-left":"border-left",
			"bt":"border-top",
			"border-top":"border-top",
			"bb":"border-bottom",
			"border-bottom":"border-bottom",
			"ol":"outline",
			"outline":"outline",
			"cr":"counter-reset",
			"counter-reset":"counter-reset",
	//gradient and url
	"bgi":"background-image",
	"background-image":"background-image",
	"bg":"background",
	"background":"background",	
	"border-image-source":"border-image-source",
	"bis":"border-image-source",
	//Shadow
	"ts" :"text-shadow",
	txs:"text-shadow",
	"text-shadow":"text-shadow",
	"txsr":"text-shadow",
	"text-shadow-radius":"text-shadow",
	"txsc":"text-shadow-color",
	"tsc":"text-shadow-color",
	"text-shadow-color":"text-shadow-color",
	"text-decoration-color":"text-decoration-color",
	"tdc":"text-decoration-color",
	"bxs":"box-shadow",
	"box-shadow":"box-shadow",
	"filter":'filter',
	// "f":'filter',
	"fl":'filter',
	//timing function
	atf:"animation-timing-function",
	'animation-timing-function':"animation-timing-function",
	ttf:"transition-timing-function",
	'transition-timing-function':"transition-timing-function",
	con:"content",
	content:'content',
	//animation
	'animation-name':"animation-name",
	an:"animation-name",

//
	"":"",
	
}
// CONCATENATED MODULE: ./src/provertyAndValue.js





function propertyAndValue(classname,custom){
	if(!custom) custom={};
	// if(classList.hasOwnProperty(classname)) return classname[classname];
	if(staticClassNames.hasOwnProperty(classname)){
		return staticClassNames[classname];

	//content
	}else if(matcher.compilers.content.match.test(classname)){
		let data=matcher.compilers.content.match.exec(classname);
		 // console.log(data);
		let property=propertyAlias[data[1]];
		if(property){
			let value=matcher.compilers.content.call(data[2],data[3]);
			if(value){
				return property+":"+value;
			}else{
				console.log(`Cannot find  value for classname: '${classname}' `);
				return null;
				}
		}else{
			console.log(`Cannot find property  for classname: '${classname}' `);
			return null;
		}

	//timingFunction	
	}else if(matcher.compilers.timingFunction.match.test(classname)){
		let data=matcher.compilers.timingFunction.match.exec(classname);
		 // console.log(data);
		let property=propertyAlias[data[1]];
		if(property){
			let value=matcher.compilers.timingFunction.call(data[2]);
			if(value){
				return property+":"+value;
			}else{
				console.log(`Cannot find  value for classname: '${classname}' `);
				return null;
				}
		}else{
			console.log(`Cannot find property  for classname: '${classname}' `);
			return null;
		}

	//filter
	}else if(matcher.compilers.filter.match.test(classname)){
		let data=matcher.compilers.filter.match.exec(classname);
		 // console.log(data);
		// let property=(data[1]==="f"?"filter":propertyAlias[data[1]]) //fs12px;
		let property=propertyAlias[data[1]];
		if(property){
			let value=matcher.compilers.filter.call(data[2],data[3]);
			if(value){
				return property+":"+value;
			}else{
				console.log(`Cannot find  value for classname: '${classname}' `);
				return null;
				}
		}else{
			console.log(`Cannot find property  for classname: '${classname}' `);
			return null;
		}

	//color
	}else if(matcher.compilers.color.match.test(classname)){
		let data=matcher.compilers.color.match.exec(classname);
		let property=propertyAlias[data[1]];
		if(property){
			let value=matcher.compilers.color.call(classname.replace(data[0],""), custom.color);
			if(value){
				return property+":"+value;
			}else{
				console.log(`Cannot find  value for classname: '${classname}' `);
				return null;
				}
		}else{
			console.log(`Cannot find property  for classname: '${classname}' `);
			return null;
		}
		
	//url
	}else if(matcher.compilers.url.match.test(classname)){
		let data=matcher.compilers.url.match.exec(classname);
		let property=propertyAlias[data[1]];
		if(property){
			let value=matcher.compilers.url.call(data[2]);
			if(value){
				return property+":"+value;
			}else{
				console.log(`Cannot find  value for classname: '${classname}' `);
			}
		}else{
			console.log(`Cannot find property for classname: '${classname}' `);
		}
		//shadow
	}else if(matcher.compilers.shadow.match.test(classname)){
		let data=matcher.compilers.shadow.match.exec(classname);
		let property=propertyAlias[data[1]];
		if(property){
			let value=matcher.compilers.shadow.call(classname.replace(data[1],""),custom.color);
			if(value){
				return property+":"+value;
			}else{
				console.log(`Cannot find  value for classname: '${classname}' `);
			}
		}else{
			console.log(`Cannot find property for classname: '${classname}' `);
		}
		//border
	}else if(matcher.compilers.border.match.test(classname)){
		let data=matcher.compilers.border.match.exec(classname);
		let property=propertyAlias[data[1]];
		if(property){
			let value=matcher.compilers.border.call(data[2],data[4],data[5],custom.color);
			if(value){
				return property+":"+value;
			}else{
				console.log(`Cannot find  value for classname: '${classname}' `);
			}
		}else{
			console.log(`Cannot find property for classname: '${classname}' `);
		}
		//transform
	}else if(matcher.compilers.transform.match.test(classname)){
		let data=matcher.compilers.transform.match.exec(classname);
		let property=propertyAlias[data[1]];
		if(property){
			let value=matcher.compilers.transform.call(classname.replace(data[1],""));
			if(value){
				return property+":"+value;
			}else{
				console.log(`Cannot find  value for classname: '${classname}' `);
			}
		}else{
			console.log(`Cannot find property for classname: '${classname}' `);
		}
		//transition
	}else if(matcher.compilers.transition.match.test(classname)){
		let data=matcher.compilers.transition.match.exec(classname);
		let property=propertyAlias[data[1]];
		if(property){
			let value=matcher.compilers.transition.call(classname.replace(data[1],""));
			if(value){
				return property+":"+value;
			}else{
				console.log(`Cannot find  value for classname: '${classname}' `);
			}
		}else{
			console.log(`Cannot find property for classname: '${classname}' `);
		}
	//ms s
	}else if(matcher.compilers.time.match.test(classname)){
		let data=matcher.compilers.time.match.exec(classname);
		let property=propertyAlias[data[1]];
		if(property){
			let value=matcher.compilers.time.call(data[2]);
			if(value){
				return property+":"+value;
			}else{
				console.log(`Cannot find  value for classname: '${classname}' `);
			}
		}else{
			console.log(`Cannot find property for classname: '${classname}' `);
		}
		//length
	}else if(matcher.compilers.length.match.test(classname)){
		let data=matcher.compilers.length.match.exec(classname);

		let property=propertyAlias[data[1]];
		if(property){
			let value=matcher.compilers.length.call(data[3],custom.val);
			if(value){
				return property+":"+value;
			}else{
				console.log(`Cannot find  value for classname: '${classname}' `);
			}
		}else{console.log(`Cannot find property for classname: '${classname}' `);}
	//number	
	}else if(matcher.compilers.number.match.test(classname)){
		let data=matcher.compilers.number.match.exec(classname);
		let property=propertyAlias[data[1]];
		if(property){
			let value=matcher.compilers.number.call(data[2]);
			if(value){
				return property+":"+value;
			}else{
				console.log(`Cannot find  value for classname: '${classname}' `);
			}
		}else{
			console.log(`Cannot find property for classname: '${classname}' `);
		}

	//Font	
	}else if(matcher.compilers.font.match.test(classname)){
		let data=matcher.compilers.font.match.exec(classname);
		let property=propertyAlias[data[1]];
		if(property){
			let value=matcher.compilers.font.call(data[2]);
			if(value){
				return property+":"+value;
			}else{
				console.log(`Cannot find  value for classname: '${classname}' `);
			}
		}else{
			console.log(`Cannot find property for classname: '${classname}' `);
		}
	//gradient
	}else if(matcher.compilers.gradient.match.test(classname)){
		let data=matcher.compilers.gradient.match.exec(classname);
		// console.log(data);
		let property=propertyAlias[data[1]];
		if(property){
			let value=matcher.compilers.gradient.call(data[2],data[7],custom.color);
			if(value){
				return property+":"+value;
			}else{
				console.log(`Cannot find  value for classname: '${classname}' `);
				return null;
				}
		}else{
			console.log(`Cannot find property  for classname: '${classname}' `);
			return null;
		}
		
	//animation
	}else if(matcher.compilers.animation.match.test(classname)){

		let data=matcher.compilers.animation.match.exec(classname);
		// console.log(data);
		let property=propertyAlias[data[1]];
		if(property){
			let value=matcher.compilers.animation.call(data[2]);
			if(value){
				return property+":"+value;
			}else{
				console.log(`Cannot find  value for classname: '${classname}' `);
				return null;
				}
		}else{
			console.log(`Cannot find property  for classname: '${classname}' `);
			return null;
		}


	}else{
		console.log(`Cannot find property and value for classname: '${classname}' `);
		return null;
	}//ifelse
}//


// CONCATENATED MODULE: ./src/responsive.js
let deviceAlias={
	match:/^(mob|tab|lab|hd|print|xs|sm|md|lg|xl)(?=[-|_])/,
	"mob":"@media (max-width : 768px) {",
	"tab":"@media  (min-width : 768px){",
	"lap":"@media  (min-width : 992px) {",
	"desk":"@media  (min-width : 1200px) {",
	"hd":"@media  (min-width : 1408px) {",
	"print":"@media print{",
	"xs":"@media (max-width : 576px) {",
	"sm":"@media  (min-width : 576px) {",
	"md":"@media  (min-width : 768px) {",
	"lg":"@media  (min-width : 992px) {",
	"xl":"@media  (min-width : 1200px) {",
};


function deviceHandler(alias, content){
	if( deviceAlias.hasOwnProperty(alias)){
		return deviceAlias[alias]+'\n'+ content+ "\n } ";
	}else{

	}
}
// CONCATENATED MODULE: ./src/static/pseudoSelector.js
let flags={
"--active":":active",//-a
"-a":":active",	

"--after":"::after",//-af
"-af":"::after",//-af

"--after-hover":"::after:hover",
"-afh":"::after:hover",

"--before":"::before",//-bf	
"-bf":"::before",//-bf	

"--before-hover":"::before:hover",//-bfh	
"-bfh":"::before:hover",//-bfh

"--checked":":checked",	//-ck
"-ch":":checked",	//-ck

"--default":":default",	//-df
"-de":":default",	//-df

"--disabled":":disabled",//-ds	
"-di":":disabled",//-ds	

"--empty":":empty",//-em	
"-em":":empty",//-em	

"--enabled":":enabled",//-en
"-en":":enabled",//-en

"--first-child":":first-child",	//-fc
"-fc":":first-child",

"--first-letter":"::first-letter",//-f
"-fl":"::first-letter",//-fl

"--first-line":"::first-line",//-fln	
"-fln":"::first-line",//-fln		

"--first-of-type":":first-of-type",	//-fot
"-fot":":first-of-type",

"--focus":":focus",//-fo	
"-fo":":focus",//-fo	

"--hover":":hover",//-h
"-h":":hover",//-h

"--hover-after":":hover::after",//-haf
"-haf":":hover::after",//-haf

"--hover-before":":hover::before",//-hbf
"-hbf":":hover::before",//-hbf

"--hover-target":":hover:target",//-htg
"-htg":":hover:target",//-htg

"--in-range":":in-range",//-ir	
"-ir":":in-range",//-ir	

"--indeterminate":":indeterminate",//idt
"-ind":":indeterminate",//idt

"--invalid":":invalid",	//-in
"-inv":":invalid",	//-in

"--lang-":":lang(language)",//-ln
"-lan-":":lang(language)",//-ln

"--last-child":":last-child",//-lc	
"-lc":":last-child",//-lc	

"--last-of-type":":last-of-type",//-lot	
"-lot":":last-of-type",//-lot	

"--link":":link",//-l	
"-ln":":link",//-l	

"--not-":":not",//-n-	
"-n-":":not",//-n-

"--nth-child-":":nth-child",//	-nc2n
"-nc-":":nth-child",//	-nc2n

"--nth-last-child-":":nth-last-child",//-nlc2n
"-nlc-":":nth-last-child",//-nlc2n

"--nth-last-of-type-":":nth-last-of-type",	//-nlot2n
"-nlot-":":nth-last-of-type",	//-nlot2n

"--nth-of-type-":":nth-of-type",//-not	
"-not-":":nth-of-type",//-not	

"--only-of-type":":only-of-type",//-oot	
"-oot":":only-of-type",//-oot	


"--only-child":":only-child",//-oc	
"-oc":":only-child",//-oc	 

"--optional":":optional",//-o	
"-op":":optional",//-o	

"--out-of-range":":out-of-range",//-oor	
"-oor":":out-of-range",//-oor	

"--placeholder":"::placeholder",//-ph	
"-ph":"::placeholder",//-ph	

"--read-only":":read-only",//-ro

"-ro":":read-only",//-ro


"--read-write":":read-write",//-rw	
"-rw":":read-write",//-rw	

"--required":":required",//-rq	
"-rq":":required",//-rq	

"--root":":root",//-rt		
"-rt":":root",//-rt		

"--selection":"::selection",//-sl	
"-s":"::selection",//-sl	

"--target":":target",//-tg
"-tg":":target",//-tg

"--valid":":valid",//-vl
"-v":":valid",//-vl

"--visited":":visited",//-vi	
"-vi":":visited",//-vi	


};
// CONCATENATED MODULE: ./src/selector.js


const browserPrefix=["-moz-","-webkit-","-ms-"];


let matchAndCall={
	 element:{
	 	match:/^_[_]?[A-Za-z0-9_]+(?=[_|-])/,
	 	callFunction:elementHandler,

	 },
	 pseduoFullFlag:{
	 	match:/(^--(?!n)[a-z0-9]+(-child|-of-range|-of-type|-before|-after|-hover|-letter|-line|-range|-target|-only|-write)?)(?=[-|_])/,
	 	callFunction:pseduoFullFlag
	 },
	 pseduoNot:{
	 	match:/(^--not-([a-z0-9]+)(?=[-|_]))/,
	 	callFunction:pseduoHandlerNot,
	 },
	pseduoNthChild:{
		match:/(^--nth(-child-|last-child-|last-of-type|of-type-))([0-9]+[n]?)(?=[-|_])/,
		callFunction:pseduoHandlerNthChild,
	},
	 pseduoShortNth:{
	 	match:/^(-(n|nc|nlc|nlot|not)-)([a-z0-9]+)(?=[-|_])/,
	 	callFunction:pseduoShortNth,
	 },
	 pseduoShort:{
	 	match:/^(-(a|af|afh|bf|bfh|ch|de|di|em|en|fc|fl|fln|fot|fo|h|haf|abf|htg|ir|ind|inv|lc|lot|ln|oot|oc|oor|ph|ro|rw|r|rt|s|tg|v|vi))(?=[-|_])/,
	 	callFunction:pseduoShort,
	 }


}

function pseduoFullFlag(classname){
	
		let alias=classname.match(matchAndCall.pseduoFullFlag.match)[0];
			if(flags.hasOwnProperty(alias)){
				classname=classname.replace(alias,"");
				return [classname, flags[alias]];
			}

			return [classname,'']
	

}
function pseduoHandlerNthChild (classname){
			let pseduo="";
			let m=classname.match(matchAndCall.pseduoNthChild.match);
			let alias=m[1];
			let classnamepre=m[0];
			let n=m[3];

			if(flags.hasOwnProperty(alias)){
				pseduo=flags[alias]+"("+n+")";
				classname=classname.replace(classnamepre,"");
			}

		return [classname, pseduo];
}
function pseduoHandlerNot (classname){
			let alias=classname.match(matchAndCall.pseduoNot.match)[0];
			 let pseduo=":not("+classname.match(matchAndCall.pseduoNot.match)[2]+")";
 			classname=classname.replace(alias,"");

 			return [classname, pseduo]

			
}
function pseduoShortNth(classname){
	let match=classname.match(matchAndCall.pseduoShortNth.match);
			 if(flags.hasOwnProperty(match[1])){
			 	return [classname.replace(match[0],''), flags[match[1]]+"("+match[3]+")"];
			 }
 			

 			return [classname, ""];
} 
function pseduoShort(classname){
	let match=classname.match(matchAndCall.pseduoShort.match);
			 if(flags.hasOwnProperty(match[1])){
			 	return [classname.replace(match[0],''), flags[match[1]]];
			 }
 			

 			return [classname, ""];
} 
 function elementHandler(classname){
	let alias=classname.match(matchAndCall.element.match)[0];
	if(alias){
		  let elfy=alias.replace(/____/g," ~ ")
						.replace(/___/g," + ")
						.replace(/__/g," ")
						.replace(/_/g," > ")
						.replace(/[\s]([A-Z])/g,function(e,a){return " ."+a.toLowerCase();})
						.trim();

		return [ classname.replace(alias,"")," "+elfy];
	}
	return [classname, ""];
}

// ---------------while-Match---

function whileMatchNCall(classname){
	let before='';
	
	while(classname){
		let match=false;
		for(let key in matchAndCall){
			if(classname.match(matchAndCall[key].match)){
				match=true;
				let result=matchAndCall[key].callFunction(classname);
				if(!result[1]){
					match=false; 
				} 
				classname=result[0];
				before+=result[1];
				break;
			}else{
				
			}
		}
		// console.log(match);
	if(!match) break; 
	}
	return [classname, before];	
}

//-----------whiel-match-end
// exports.whileMatchNCall=whileMatchNCall;
// exports.pseduoFullFlag=pseduoFullFlag;
// exports.pseduoShort=pseduoShort;
// exports.pseduoShortNth=pseduoShortNth;
// exports.deviceHandler=deviceHandler;
// exports.elementHandler=elementHandler;
// exports.pseduoHandlerNthChild=pseduoHandlerNthChild;
// exports.pseduoHandlerNot=pseduoHandlerNot;
// exports.matchAndCall;

// CONCATENATED MODULE: ./src/static/customColor.js
let customColor_customColor={'primaryDarkest':"hsla(210,43%,24%,1)",
	'primaryDarker':"hsla(211,59%,29%,1)",
	'primaryDark':"hsla(211,61%,41%,1)",
	'primary':"hsla(211,60%,51%,1)",
	'primaryLight':"hsla(210,63%,63%,1)",
	'primaryLighter':"hsla(209,84%,82%,1)",
	'primaryLightest':"hsla(206,100%,97%,1)",

	'darkest':"hsla(218,22%,17%,1)",
	'darker':"hsla(216,13%,43%,1)",
	'dark':"hsla(218,16%,60%,1)",
	'grey':"hsla(210,19%,77%,1)",
	'light':"hsla(214,20%,84%,1)",
	'lighter':"hsla(210,25%,91%,1)",
	'lightest':"hsla(210,17%,98%,1)",

	'infoDarkest':"hsla(179,50%,18%,1)",
	'infoDarker':"hsla(174,48%,26%,1)",
	'infoDark':"hsla(173,46%,39%,1)",
	'info':"hsla(173,42%,48%,1)",
	'infoLight':"hsla(178,55%,65%,1)",
	'infoLighter':"hsla(177,66%,80%,1)",
	'infoLightest':"hsla(177,100%,95%,1)",

	'successDarkest':"hsla(149,50%,21%,1)",
	'successDarker':"hsla(135,53%,31%,1)",
	'successDark':"hsla(135,50%,41%,1)",
	'success':"hsla(135,50%,52%,1)",
	'successLight':"hsla(138,56%,67%,1)",
	'successLighter':"hsla(135,66%,80%,1)",
	'successLightest':"hsla(137,80%,94%,1)",


	'warningDarkest':"hsla(47,100%,18%,1)",
	'warningDarker':"hsla(47,100%,27%,1)",
	'warningDark':"hsla(48,75%,45%,1)",
	'warning':"hsla(46,86%,63%,1)",
	'warningLight':"hsla(47,89%,78%,1)",
	'warningLighter':"hsla(47,91%,91%,1)",
	'warningLightest':"hsla(45,100%,98%,1)",

	'dangerDarkest':"hsla(2,62%,23%,1)",
	'dangerDarker':"hsla(3,71%,31%,1)",
	'dangerDark':"hsla(4,75%,40%,1)",
	'danger':"hsla(3,69%,51%,1)",
	'dangerLight':"hsla(2,67%,63%,1)",
	'dangerLighter':"hsla(2,74%,81%,1)",
	'dangerLightest':"hsla(0,70%,95%,1)",
};
/* harmony default export */ var static_customColor = (customColor_customColor);
// CONCATENATED MODULE: ./src/statementMaker.js







let statementMaker={
	device:null,
	classname:null,
	selector:null,
	propertyAndValue:null,
	hasSuffix:null,
	cache:{
		propertyAndValue:{}
	},
	custom:{},
	addCustom:function(name,obj){
		if(typeof obj==="object"){
			if(!this.custom[name]) this.custom[name]={};
			for(let key in obj){
				this.custom[name][key]=obj[key];
			}
		}
	},
	//Handle !important !default.....
	handleSuffix:function(classname){
			var match=/[-_]([id])$/
		if(classname.match(match)){
			if(classname.match(match)[1]=="i"){
				this.hasSuffix=" !important";
			}else if(classname.match(match)[1]=="d"){
				this.hasSuffix=" !default";
			}
			return classname.replace(match,'');

		}else{
			return classname;
		}
	},//end of Handle suffix

	getPropertyAndValue(classname){
		let result=this.make(classname,null,true);
		if(!result[0] && !result[1]) return result[2];
	},

	make(classname, as,bool){
		//reset 
		[this.device, this.classname,this.selctor,this.propertyAndValue,this.hasSuffix]=[null,null,null,null,null];

		this.classname=as?as:classname;
		// -------------------------responsive----------------
		if(matcher.device.match.test(classname)){
			this.device=matcher.device.call(classname);
			classname=classname.replace(this.device,"");
			}
		//-----------------selector-------------------------

		let selectorResult=whileMatchNCall(classname);
		this.selector=selectorResult[1];
		classname=selectorResult[0].replace(/^[_-]/,"");
		//------------suffix-flag------
		
			classname=this.handleSuffix(classname);		
		//------------proverty and value---------------
		if(this.cache.propertyAndValue.hasOwnProperty(classname)){
			this.propertyAndValue=this.cache.propertyAndValue[classname];
		}else{
			this.propertyAndValue=propertyAndValue(classname,this.custom);
			if(!this.propertyAndValue) return false;
			this.cache.propertyAndValue[classname]=this.propertyAndValue;
		}

		if(bool===true) return[this.device,this.selector,this.propertyAndValue + (this.hasSuffix?this.hasSuffix:'')];

	 	let statement="."+this.classname+this.selector+"{"+this.propertyAndValue + (this.hasSuffix?this.hasSuffix:'')+ " ;}";

		 if(this.device){
		 	return deviceHandler(this.device,statement);
		 }

		 return statement;

	},
	extend:function(a,b){
	if(typeof(a) ==='object' ){
		for(let key in a){
			this.cache.propertyAndValue[key]=a[key];
			// if(this.cachstatementMaker.staticClassNames.hasOwnProperty(key)){
			// 	console.error(Key +": already  in use for '"+key+":"+this.statementMaker.staticClassNames[key]+"' Try with another classname" );
			// }else{
			// 	this.statementMaker.staticClassNames[key]=a[key];
			// }
			
		}
	}else{
		if(a && b){
			this.cache.propertyAndValue[a]=b;
		}
	}

},
styleSheetCompiler:function(content){
	
		const match=/[{][\w|#|\-|:|;|$|\*|\/|\.|\(|\)|\s|\\|\"|\%|\!|\,|\']+[}]?/g;

		const m1=/(?<=[{][\s]*)([A-Za-z0-9_-]+)(?=[\s]*[;])/g;
		const m2=/(?<=[;][\s]*)([A-Za-z0-9_-]+)(?=[\s]*[;])/g;
		const m3=/(?<=[;][\s]*)([A-Za-z0-9-_]+)(?=[\s]*[}])/g;
		const m4=/(?<=[\/][\s]*)([A-Za-z0-9-_]+)(?=[\s]*[;|}])/g;
		const m5=/(?<=[\{][\s]*)([A-Za-z0-9-_]+)(?=[\s]*[}])/g;

		return content.replace(match,(e)=>{
		
			 //1.repalce {.....;
				e=e.replace(m1,(m)=>{
						let result=this.getPropertyAndValue(m);
						return result?result:m;
				});
				//console.log(e);
			
			//2.replace ;.....;
			
			e=e.replace(m2,(m)=>{
					 let result=this.getPropertyAndValue(m);
					return result?result:m;
				});

			// console.log(e);
			// 3.replace ;..}	
			e=e.replace(m3,(m)=>{
					let result= this.getPropertyAndValue(m);
					return result?result:m;
				});

			// 4.replace */..;|}	
			e=e.replace(m4,(m)=>{
					let result= this.getPropertyAndValue(m);
					return result?result:m;
				});

			// 5.replace {...}	
			e=e.replace(m5,(m)=>{
					let result= this.getPropertyAndValue(m);
					return result?result:m;
				});

		 	//console.log(e);
		 	 return e;
			
		 });

	},
	

	groupForJs:function(string,bool){
		if(!string.trim()) return '';
		let jsStyle={};
		let list=string.trim().split(/\s+/);
		list.forEach((e)=>{
			let pNv="";
			if(this.cache.propertyAndValue.hasOwnProperty(e)){
				pNv=this.cache.propertyAndValue[e]
			}else{
				 pNv=propertyAndValue(e, this.custom);
				if(pNv) this.cache.propertyAndValue[e]=pNv;
			}
			if(!pNv) return "";
			let result=pNv.split(":");
			if(result.length===2){
				let key=result[0].replace(/-([a-z])/g, function(e,a){ return a.toUpperCase();});
				let value=bool===true?result[1].replace(/px$/g,""):result[1];
				if(value.trim().match(/^[\d\.]+$/)){
					value=parseFloat(value);
				}

				jsStyle[key]=value;
			}
		});

		return jsStyle;
	},
	groupForStyle:function(str){
		let container="";
		let list=str.trim().split(/\s+/);
		list.forEach((e)=>{
			
					// this.hasSuffix=null;
					// e=this.handleSuffix(e);
					if(this.cache.propertyAndValue.hasOwnProperty(e)){
						container+=this.cache.propertyAndValue[e]+(this.hasSuffix?this.hasSuffix:'')+" ;\n";
					}else{
						let pNv=propertyAndValue(e,this.custom);
						if(pNv){
						 this.cache.propertyAndValue[e]=pNv;
						 container+=pNv+";";//+ (this.hasSuffix?this.hasSuffix:'')+" ;\n";
						}
					}
					
				
		});

		return container;
	},
	fromString:function(string,group){
		if(group){
			return statementMaker.group(string,group);
		}
		let statement='';
		if(!string.trim()) return false;
		let classList=string.split(/\s+/);
		classList.forEach((eachClass)=>{
			 let result=this.make(eachClass);
			if(result){
				statement+=(result+ "\n");
			}
		});
		return statement;
	},
	group:function(str, as){
		let statement="";
		let container="\n";
		let list=str.trim().split(/\s+/);
		list.forEach((e)=>{
			if(matcher.selector.match.test(e) || matcher.device.match.test(e)){
				let result=this.make(e,as);
				if(result) statement+=result+"\n";
				}else{
					this.hasSuffix=null;
					e=this.handleSuffix(e);
					if(this.cache.propertyAndValue.hasOwnProperty(e)){
						container+=this.cache.propertyAndValue[e]+(this.hasSuffix?this.hasSuffix:'')+" ;\n";
					}else{
						let pNv=propertyAndValue(e,this.custom);
						if(pNv){
						 this.cache.propertyAndValue[e]=pNv;
						 container+=pNv+ (this.hasSuffix?this.hasSuffix:'')+" ;\n";
						}
					}
					
				}
		});

		return `${statement} \n .${as} { ${container} }`;

	},
};

statementMaker.addCustom('color',static_customColor);


// CONCATENATED MODULE: ./src/classPrinter.js
 
 /* harmony default export */ var classPrinter = (statementMaker);
 let classPrinter_classPrinter={
 	unvalidLists:[],
 	classLists:[],
 	styleTagExists:false,


 	styleTag:null,
 	createStyleTag:function(){
		if(this.styleTagExists===true){ return this.styleTag}
			let  styleTag=document.createElement("style");
			styleTag.id="styleAlias";
			document.getElementsByTagName("head")[0].appendChild(styleTag);
			this.styleTag=styleTag;
			this.styleTagExists=true;
			return styleTag;
	},
	//you can always apend a class if you like modify the look here if you want
	appendToStyleTag:function(classStatement){
       let createNewClass=document.createTextNode(classStatement);
      this.createStyleTag().appendChild(createNewClass);

	},
	//compile dom stylesheet 
	
	compile:function(){
	  var classes=document.getElementById('styleAlias');
	  if(classes){
	    var preetyPrint=classes.innerHTML.replace(/\}/g,"</br>}</br>").replace(/\{/g,"{</br>&nbsp;&nbsp;&nbsp;&nbsp;");
	    document.write(preetyPrint);
	  }else{
	  	console.warn("There is not ACSS used in this document!!");
	  	alert("Could not found acss statements  in this Document!");
	  }
	},
	

 	print:function(el){
 		if(el.hasAttribute("class")){
 			//has group
			if(el.getAttribute('acss-group')){
				var result=statementMaker.group(el.getAttribute("class").trim(),el.getAttribute('acss-group'));
				if(result){
					this.appendToStyleTag(result);
					// return true;
				}
			}
			//has-test-group(for live update only)
			if(el.getAttribute('acss-group-test')){
				let result=statementMaker.group(el.getAttribute("class").trim(),el.getAttribute('acss-group-test'));
				let styleTag=document.querySelector("style#"+el.getAttribute('acss-group-test'));
				if(result){
					if(styleTag){
						styleTag.innerHTML="";
						var createNewgroup=document.createTextNode(result);
      						styleTag.appendChild(createNewgroup);
						// return true;
					}else{
						let styleTag=document.createElement("style");
						styleTag.id=el.getAttribute('acss-group-test');
						document.getElementsByTagName("head")[0].appendChild(styleTag);
							var createNewgroup=document.createTextNode(result);
      						styleTag.appendChild(createNewgroup);
					}
				}
			}
				//-----------------------end of for live update
			//get class and trim out whitespaces
			let tmpClassList=el.getAttribute("class").trim();
			//make array of classname out of string
			if(tmpClassList.length){
				tmpClassList=tmpClassList.split(/\s+/);
				
			//looping class
			tmpClassList.forEach((eachClass)=>{
					//escape reppeated classname

					if(this.classLists.indexOf(eachClass)==-1 && this.unvalidLists.indexOf(eachClass)==-1){
						//add to classlist for refrerence
						this.classLists.push(eachClass);
						
						// var result=compiler.main(eachClass);
						 var result=statementMaker.make(eachClass);
						 // console.log(result);

						if(result){
								this.appendToStyleTag(result);
						}else{
								//not a valid ACSS clasNames
								this.unvalidLists.push(eachClass);
							}
					}
				});

			}

		 }//if el has class attribute
		 
	 //If elemet is cloning classnames
	// ACSSClone(element);

	},//eomain
	run:function(el){
		var $root=el||document;
		
		//1. HANDLE ACSS STYLESHEETS
		if(document.querySelector("[type='text/acss']")){
			var content=document.querySelector("[type='text/acss']").innerText;
			var compiledcontent=statementMaker.styleSheetCompiler(content);
			
			if(document.querySelector("[data-stylesheets='acss']")){
				var styleTag=document.querySelector("[data-stylesheets='acss']");
				styleTag.appendChild(document.createTextNode(compiledcontent));
				
			}else{
				var styleTag=document.createElement("style");
				styleTag.appendChild(document.createTextNode(compiledcontent));
				styleTag.setAttribute("data-stylesheets","acss")
				document.getElementsByTagName("head")[0].appendChild(styleTag);
			}
			
		}

		//2. HANDLE ACSS CLASSNAMES
		
		Array.prototype.forEach.call($root.getElementsByTagName("*"),(e)=>{
		this.print(e);
		});

	},
 	};






// CONCATENATED MODULE: ./src/acssliveupdate.js

function openAcssRibbionBar(){
var acssDesignBarLocked=false;
var currentElement=null;
var acssInputField;
var infoMsg;
 var infoEle;
function acssDraggable(element){
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(element.id + "header")) {
    document.getElementById(element.id + "header").onmousedown = dragMouseDown;
  } else {
    element.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    element.style.top = (element.offsetTop - pos2) + "px";
    element.style.left = (element.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }


}//end of drragle

function setClassToField(){
    acssInputField.value=currentElement.getAttribute('class');
}
function acssInputHandler(){
    // console.log(acssInputField);
    acssInputField.addEventListener("keydown",function(e){
                if(acssDesignBarLocked){return false;}
                var code = (e.keyCode ? e.keyCode : e.which);
                //if(code==8){getClassList="";}
                if(code==32 ||code==13){
                    if(code==13) e.preventDefault();
                    if(acssInputField.value.trim()){
                            currentElement.setAttribute("class",acssInputField.value.trim());
                            ACSS.classPrinter.print(currentElement);
                    
                    }
                }
                });
}
function buttonRole(){
        var buttonParent=document.getElementById("buttonParent");
        var buttonPrev=document.getElementById("buttonPrev");
        var buttonNext=document.getElementById("buttonNext");
        var buttonChild=document.getElementById("buttonChild"); 
        var buttonCopy=document.getElementById('acssLiveUpadateCopy');
        var buttonPush=document.getElementById('acssPush');
  
       
         let nextElement=function(){
            
                if(currentElement.nextElementSibling && currentElement.nextElementSibling.classList.contains("dont-include")){ return false;}
            return currentElement.nextElementSibling;
        };
        let prevElement=function(){
            return currentElement.previousElementSibling;
        };
       let  childElement=function(){
            return currentElement.firstElementChild;
        };
        let parent=function(){
            return currentElement.parentElement;
        };
        
        buttonNext.onclick=function(){
            if(nextElement()){
                //currentElement.style.border="";
                currentElement=nextElement();
                infoEle.innerText="Element on Target :- "+currentElement.nodeName.toLowerCase()+"#"+currentElement.id;

                   infoMsg.innerHTML="";
                   setClassToField();
                 //settleOldClass(currentElement);
            }else{
                
                infoMsg.innerHTML="<span style='color:orange'>Has no next sibling Element</span>";
                return false;
            }
        };
        buttonPrev.onclick=function(){
            if(prevElement()){
                //currentElement.style.border="";
                currentElement=prevElement();
                infoEle.innerText="Element on Target :- "+currentElement.nodeName.toLowerCase()+"#"+currentElement.id;
                infoMsg.innerHTML="";
                setClassToField();
                 //settleOldClass(currentElement);
            }else{
                //console.log("clicked");
                infoMsg.innerHTML="<span style='color:orange'>Has no Previous sibling Element</span>";
                return false;
            }
        };
        buttonParent.onclick=function(){
            if(parent()){
                //currentElement.style.border="";
                currentElement=parent();
                infoEle.innerText="Element on Target :- "+currentElement.nodeName.toLowerCase()+"#"+currentElement.id;
                infoMsg.innerHTML="";
                setClassToField();
                 //settleOldClass(currentElement);
            }else{
                //console.log("clicked");
                infoMsg.innerHTML="<span style='color:orange'>Has no Parent Element</span>";
                return false;
            }
        };
        buttonChild.onclick=function(){
            if(childElement()){
                //currentElement.style.border="";
                currentElement=childElement();
                infoEle.innerText="Element on Target :- "+ currentElement.nodeName.toLowerCase()+"#"+currentElement.id;
                infoMsg.innerHTML="";
                setClassToField();
                 //settleOldClass(currentElement);
            }else{
                //console.log("clicked");
                infoMsg.innerHTML="<span style='color:orange'>Has no child Element</span>";
                return false;
            }
        };

        buttonCopy.onclick=function(){
            if(currentElement){
                let textarea=document.createElement('textarea');
                document.body.appendChild(textarea);
                textarea.value=currentElement.outerHTML;
                textarea.select();
                if(document.execCommand("copy")){
                    console.log("Successfully! Copied to Clipboard");
                    let title=document.getElementById('acss-title');
                    title.style.color="green";
                    title.innerText="Successfully copied to clipboard!"

                    let st=setTimeout(function(){
                        title.style.color="initial";
                    title.innerText="Acss Live Update 1.0.3";
                    clearTimeout(st);
                    },1500)
                };
                textarea.parentNode.removeChild(textarea);
                }
            };

            buttonPush.onclick=function(){
                if(!ACSS.pushURL) return false;
                let content=document.getElementById("styleAlias").innerText;
                var xhttp = new XMLHttpRequest();
                  xhttp.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                            console.log("Connection successfull");
                        let title=document.getElementById('acss-title');
                        title.style.color="green";
                        title.innerText="Pushed and saved!"

                        let st=setTimeout(function(){
                            title.style.color="initial";
                        title.innerText="Acss Live Update 1.0.3";
                        clearTimeout(st);
                        },3000)
                     
                    }
                  };
                  xhttp.open("POST", ACSS.pushURL, true);
                  xhttp.send(content);
            }
             
               
  
        // buttonSave.onclick=function(){
        //     //doing nothigs now
        // };
        // buttonCancel.onclick=function(){
        //     classNameInput.value=oldClass;
        // }
};
function quickChangeSelectOnClick(element){

        var elements=element ?element:document.getElementsByTagName('*');
        Array.prototype.forEach.call(elements,function(el){
             //if(!el.classList.contains("dont-include")){
                el.addEventListener("click",function(e){
                    //console.log(this);
                    if(!el.classList.contains("dont-include")){
                        
                        //var oldClass=this.getAttribute("class");
                         //classNameInput.value=oldClass;
                         //currentElement.style.border="";
                         currentElement=this;
                         //this.style.boxShadow="0px 0px 5px #ccc";
                         //settleOldClass();
                         infoEle.innerText="Element on Target :- "+this.nodeName.toLowerCase()+"#"+this.id;
                         infoMsg.innerHTML="";
                        let  infoBarMsg="";
                         setClassToField();
                    }
                    
                    e.stopPropagation();
                    e.preventDefault();

                    },false);
            //}
        });
    };//end of quickChangeventilizer

    function quickChangeSelectByIdInput(selector){
        if(selector){
            selector.onchange=function(){
                //console.log(this.value);
                if(document.getElementById(this.value)){
                    
                    currentElement=document.getElementById(this.value);
                    
                    infoEle.innerText="Element on Target :- "+currentElement.nodeName.toLowerCase()+"#"+currentElement.id;
                    setClassToField();
                    infoMsg.innerHTML="";
                    //currentElement.element.style.boxShadow="0px 0px 5px #ccc";
                    //settleOldClass(currentElement);
                }else{
                   infoMsg.innerHTML="<span style='color:orange'> No elemnt with id:"+this.value+"</span>";
                }
                
            };
        }

    };//End of Selector

 
function init(click){
     
    launchQuickChange();
      infoMsg=document.getElementById('infoMsg');
    infoEle=document.getElementById('infoEle');
    acssInputField=document.getElementById('quickChangeAcssInput');

  
 
// action="";
//var acssInputField=document.getElementById('quickChangeAcssInput');
var oldElement="";
      quickChangeSelectOnClick();
      quickChangeSelectByIdInput(document.getElementById("quickChangeIdInput"));
      
      buttonRole();
      acssInputHandler();
      
    document.getElementById("quickChangeMin").onclick=function(){
    if(this.innerHTML=='min'){
        
        this.innerHTML="max";
         document.getElementById("quickChangeBox").style.height="20px";
         document.getElementById("acss-live-editor-content").style.display="none";
         // document.getElementById("acss-live-editor-footer").style.display="none";
        
    }else{
        document.getElementById("quickChangeBox").style.height="200px";
         document.getElementById("acss-live-editor-content").style.display="block";
         // document.getElementById("acss-live-editor-footer").style.display="block";
        this.innerHTML="min";
         
    }
};
document.getElementById("quickChangeClose").onclick=function(){
    if (confirm('Are you sure you want to close Acss Live Editor?\n You can reopen by typing openAcssLiveEditor(); in console')) {
    // Save it!
    var ele=document.getElementById("quickChangeBox");
    ele.parentNode.removeChild(ele);
    

        } else {
            // Do nothing!
        }
        
    
};


    }//end of init
    
//--------------ScriptManager-------------


// --------------------------------HTML Display-----------------------------
function launchQuickChange(){


var newinnerHTML=`<div sid="alias-css-live-editor" id="quickChangeBox" class="bsbb dont-include zi1111111111 pf bxs0px0px1px0px-c-0000000000d5 _input-lhi2 _button-lhi2 ffi2 fs12px bgc-fff w300px h200px b1px-s-00000000002 br5px r5px btm5px bgc-505050 ">\
    <!--Header  -->\
    <div sid="alias-css-live-editorheader" id="quickChangeBoxheader" class="bsbb  br5px5px0p0p bgc-ccc h15px bb1px-s-00000000002 -h-cm mb10px dont-include">\
        <span id="acss-title" class="bsbb fs12px m0px5px ff-arial c-333333 dont-include">Acss Live Update 1.0.3</span>\
        <div class="bsbb  dib fr m0px mt-1px dont-include mr5px">\
            <button id="quickChangeMin" class="bsbb  b0d5px-s-535353 bgc-e3e3e3 --hover-bgc-warning w30px h12px br10px  -fo-oln  dont-include p0px ff-verdana fs9px">min</button>\
            <button id="quickChangeClose" class="bsbb  b0d5px-s-535353 bgc-e3e3e3 w30px --hover-bgc-danger h12px br10px  -fo-oln dont-include p0px ff-verdana fs9px">close</button>\
        </div>\
    </div>\
    <div class="bsbb  w100p dont-include" id="acss-live-editor-content">\
        <!-- input area  -->\
        <div class="bsbb  dont-include w75p fl h160px brt1px-s-606060 p10px pt0px">\
            <!-- input -->\
            <p class="bsbb fs13px m0px p3px dont-include ">\
            <span class="c_bbb dont-include ">Click element-or-input id</span> <input type="text" style="" spellcheck="false" id="quickChangeIdInput" class="dont-include w195px b1px-s-606060 br15px bgc-909090 -fo-oln pl10px" placeholder="input id of element">\
            </p>\
                <!-- text-are -->\
            <div class="bsbb tal dont-include ">\
            <small id="infoEle"class="c-bbb ff-arial fs11px tac dont-include">Input classname/s, press enter</small><small id="infoMsg" class=" fs11px  dont-include"></small>\
                <textarea id="quickChangeAcssInput" class=" dib dont-include bgc-909090 ff-courier h90px w100p oln c-333333 fw9" placeholder="Input ACSS class names " spellcheck="false"> </textarea>\
            </div>\
        </div>\
        <!-- Buttons -->
        <div class="w20p dib fr mr5px dont-include _button-oln _button-ff-verdana _button-w60px _button-bgc-505050 _button-c-ccc  _button-br50px _button-h-c-grey _button-fo-oln _button-fw1  _button-fs9px _button-mb8px">\
            <button class=" dont-include"  id="buttonPrev">Prev</button>\
            <button class=" dont-include"  id="buttonNext">Next</button>\
            <button class=" dont-include"  id="buttonParent">Parent</button>\
            <button class=" dont-include"  id="buttonChild">Child</button>\
            <hr class=" mt0px mb10px bt1px-s-606060 bw1px h0px dont-include">\
            <button id="acssLiveUpadateCopy" class=" dont-include" >copy</button>\
            <button id="acssPush" class="fs7px dont-include"  >&uarr;push</button>\
        </div>\
        
    </div>\
</div>`;
    
var box=document.createElement("div");
box.innerHTML=newinnerHTML;
document.body.append(box);
ACSS.classPrinter.run(box);
acssDraggable(document.getElementById("quickChangeBox"));


};

init();

};
// module.exports=openAcssRibbionBar;









// CONCATENATED MODULE: ./build.js



let build_ACSS={
pushURL:null,
compile:function(classname){
		return this.statementMaker.make(classname);
	},
toString:function(){return "ACSS Object";},
classPrinter:classPrinter_classPrinter,

extend:function(a,b,c){
	this.statementMaker.extend(a,b,c);
},

liveEditor:openAcssRibbionBar,

closeEditor:function(){
	    var ele=document.getElementById("quickChangeBox");
	    if(ele) ele.parentNode.removeChild(ele);
},
appendCss:function(str,group){
	this.classPrinter.appendToStyleTag(this.statementMaker.fromString(str,group));
},
addCustom:function(a,b,c){
this.statementMaker.addCustom(a,b,c);
},
statementMaker:classPrinter,

};

//Adding custom color
// ACSS.addCustom('color',customColor);

 window.addEventListener('load',function(){
 	classPrinter_classPrinter.run();
 });


if(!window.ACSS){
	window.ACSS=build_ACSS;
}
// // module.exports=ACSS;




/***/ })
/******/ ]);