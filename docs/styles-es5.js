(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"], {
  /***/
  "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles.scss":
  /*!************************************************************************************************************************************************************************!*\
    !*** ./node_modules/css-loader/dist/cjs.js??ref--13-1!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/dist/cjs.js??ref--13-3!./src/styles.scss ***!
    \************************************************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCssLoaderDistCjsJsNode_modulesPostcssLoaderSrcIndexJsNode_modulesSassLoaderDistCjsJsSrcStylesScss(module, exports, __webpack_require__) {
    // Imports
    var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(
    /*! ../node_modules/css-loader/dist/runtime/api.js */
    "./node_modules/css-loader/dist/runtime/api.js");

    exports = ___CSS_LOADER_API_IMPORT___(true); // Module

    exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\n/*\n *  Owl Carousel - Core\n */\n.owl-carousel {\n  display: none;\n  width: 100%;\n  -webkit-tap-highlight-color: transparent;\n  /* position relative and z-index fix webkit rendering fonts issue */\n  position: relative;\n  z-index: 1;\n}\n.owl-carousel .owl-stage {\n  position: relative;\n  touch-action: manipulation;\n  -moz-backface-visibility: hidden;\n  /* fix firefox animation glitch */\n}\n.owl-carousel .owl-stage:after {\n  content: \".\";\n  display: block;\n  clear: both;\n  visibility: hidden;\n  line-height: 0;\n  height: 0;\n}\n.owl-carousel .owl-stage-outer {\n  position: relative;\n  overflow: hidden;\n  /* fix for flashing background */\n  -webkit-transform: translate3d(0px, 0px, 0px);\n}\n.owl-carousel .owl-wrapper,\n.owl-carousel .owl-item {\n  -webkit-backface-visibility: hidden;\n  -moz-backface-visibility: hidden;\n  -ms-backface-visibility: hidden;\n  -webkit-transform: translate3d(0, 0, 0);\n  -moz-transform: translate3d(0, 0, 0);\n  -ms-transform: translate3d(0, 0, 0);\n}\n.owl-carousel .owl-item {\n  position: relative;\n  min-height: 1px;\n  float: left;\n  -webkit-backface-visibility: hidden;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-touch-callout: none;\n}\n.owl-carousel .owl-item img {\n  display: block;\n  width: 100%;\n}\n.owl-carousel .owl-nav.disabled,\n.owl-carousel .owl-dots.disabled {\n  display: none;\n}\n.owl-carousel .owl-nav .owl-prev,\n.owl-carousel .owl-nav .owl-next,\n.owl-carousel .owl-dot {\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.owl-carousel .owl-nav button.owl-prev,\n.owl-carousel .owl-nav button.owl-next,\n.owl-carousel button.owl-dot {\n  background: none;\n  color: inherit;\n  border: none;\n  padding: 0 !important;\n  font: inherit;\n}\n.owl-carousel.owl-loaded {\n  display: block;\n}\n.owl-carousel.owl-loading {\n  opacity: 0;\n  display: block;\n}\n.owl-carousel.owl-hidden {\n  opacity: 0;\n}\n.owl-carousel.owl-refresh .owl-item {\n  visibility: hidden;\n}\n.owl-carousel.owl-drag .owl-item {\n  touch-action: pan-y;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.owl-carousel.owl-grab {\n  cursor: move;\n  cursor: -webkit-grab;\n  cursor: grab;\n}\n.owl-carousel.owl-rtl {\n  direction: rtl;\n}\n.owl-carousel.owl-rtl .owl-item {\n  float: right;\n}\n/* No Js */\n.no-js .owl-carousel {\n  display: block;\n}\n/*\n *  Owl Carousel - Animate Plugin\n */\n.owl-carousel .animated {\n  -webkit-animation-duration: 1000ms;\n          animation-duration: 1000ms;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n}\n.owl-carousel .owl-animated-in {\n  z-index: 0;\n}\n.owl-carousel .owl-animated-out {\n  z-index: 1;\n}\n.owl-carousel .fadeOut {\n  -webkit-animation-name: fadeOut;\n          animation-name: fadeOut;\n}\n@-webkit-keyframes fadeOut {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@keyframes fadeOut {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n/*\n * \tOwl Carousel - Auto Height Plugin\n */\n.owl-height {\n  transition: height 500ms ease-in-out;\n}\n/*\n * \tOwl Carousel - Lazy Load Plugin\n */\n.owl-carousel .owl-item {\n  /**\n  \tThis is introduced due to a bug in IE11 where lazy loading combined with autoheight plugin causes a wrong\n  \tcalculation of the height of the owl-item that breaks page layouts\n   */\n}\n.owl-carousel .owl-item .owl-lazy {\n  transition: opacity 400ms ease;\n}\n.owl-carousel .owl-item .owl-lazy[src^=\"\"], .owl-carousel .owl-item .owl-lazy:not([src]) {\n  max-height: 0;\n}\n.owl-carousel .owl-item img.owl-lazy {\n  transform-style: preserve-3d;\n}\n*,\n:after,\n:before {\n  box-sizing: border-box;\n}\nhtml, body {\n  padding: 0;\n  margin: 0;\n  height: 100%;\n}\nbody {\n  color: #333;\n  background: #fafafa;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  font-size: 16px;\n  font-weight: 400;\n  font-family: Roboto, sans-serif;\n  line-height: 1.5;\n  overflow-y: scroll;\n}\na {\n  color: #e50032;\n  text-decoration: none;\n}\na:hover {\n  text-decoration: underline;\n}\n.angular-logo__image {\n  display: block;\n  margin: 0 auto;\n}\n.angular-logo__part-one {\n  fill: #dd0031;\n}\n.angular-logo__part-two {\n  fill: #c3002f;\n}\n.angular-logo__letter {\n  fill: #fff;\n}\n.logo {\n  display: block;\n}\n.logo__part-one {\n  fill: #e50032;\n}\n.logo__part-two {\n  fill: #303040;\n}\n.intro {\n  max-width: 480px;\n  margin: 0 auto;\n  padding: 56px 0 92px;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n}\n.intro__logo {\n  margin: 0 auto;\n}\n.intro__version {\n  font-size: 14px;\n  padding: 20px 0 14px;\n}\n.intro__version a {\n  color: #6f7275;\n  text-decoration: none;\n}\n.intro__version a:hover {\n  text-decoration: underline;\n}\n.intro__text {\n  font-size: 17px;\n  line-height: 29px;\n}\n.intro__code {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 16px;\n}\n.intro__code code {\n  background: #ebebeb;\n  color: #666;\n  font-family: \"Courier New\", sans-serif;\n  font-size: 14px;\n  padding: 2px 9px;\n  border-radius: 2px;\n  cursor: pointer;\n  transition: background 0.15s, color 0.15s;\n}\n.intro__code code:hover {\n  background: #e5e5e5;\n  color: inherit;\n}\n.intro__code code:active {\n  background: #e0e0e0;\n  color: inherit;\n}\n.intro__code-caption {\n  font-size: 10px;\n  line-height: 1;\n  text-transform: uppercase;\n  color: #a6a6a6;\n  margin-top: 8px;\n}\n.section {\n  max-width: 920px;\n  display: block;\n  margin: 64px auto 0;\n}\n.example {\n  max-width: 920px;\n  margin: 0 auto;\n  display: block;\n}\n.example + .example {\n  margin-top: 64px;\n}\n.example__body {\n  display: flex;\n}\n.example__image {\n  width: 320px;\n}\n.example__image img {\n  display: block;\n}\n.example__content {\n  margin-left: 56px;\n  margin-top: 20px;\n  flex-grow: 1;\n  width: calc(100% - 320px - 56px);\n}\n.typography {\n  font-size: 16px;\n}\n.typography h1, .typography h2, .typography h3, .typography h4, .typography h5, .typography h6 {\n  line-height: 1.25;\n  margin: 1.5em 0 1em;\n}\n.typography h1:first-child, .typography h2:first-child, .typography h3:first-child, .typography h4:first-child, .typography h5:first-child, .typography h6:first-child {\n  margin-top: 0;\n}\n.typography ol {\n  counter-reset: list;\n  list-style: none;\n  padding: 0;\n}\n.typography ol li {\n  margin: 0.375rem 0;\n  counter-increment: list;\n}\n.typography ol li:before {\n  content: counter(list) \".\";\n  padding-right: 6px;\n}\n.typography code {\n  background: #ebebeb;\n  color: #4d4d4d;\n  font-family: \"Courier New\", sans-serif;\n  font-size: 14px;\n  padding: 0 4px;\n  border-radius: 2px;\n}\n.typography pre {\n  margin: 12px 0 20px;\n}\n.typography pre code {\n  display: block;\n  padding: 4px 9px;\n  overflow-x: auto;\n}\n.typography table {\n  margin: 1.25rem 0;\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 15px;\n}\n.typography th,\n.typography td {\n  border-spacing: 0;\n  padding: 7px 12px;\n}\n.typography table,\n.typography th,\n.typography td {\n  border: 1px solid #e0e0e0;\n}\n.typography tbody th,\n.typography tbody td {\n  text-align: left;\n}\n.typography hr {\n  height: 1px;\n  background: #e0e0e0;\n  border: none;\n  margin: 8px 0;\n}\n.copyright {\n  text-align: center;\n  font-size: 14px;\n  padding: 32px 0;\n  margin-top: 64px;\n}\n.changelog {\n  list-style: none;\n  padding: 0;\n}\n.gallery__thumbnails-list {\n  list-style: none;\n  padding: 0;\n  margin-top: 16px;\n  display: flex;\n}\n.gallery__thumbnail {\n  width: calc((100% - 24px) / 3);\n}\n.gallery__thumbnail + .gallery__thumbnail {\n  margin-left: 12px;\n}\n.gallery__thumbnail img {\n  max-width: 100%;\n  opacity: 0.4;\n}\n.gallery__thumbnail--current img {\n  opacity: 1;\n}\n.button-group {\n  display: flex;\n  font-size: 15px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.button-group label {\n  display: block;\n}\n.button-group input {\n  position: absolute;\n  opacity: 0;\n  pointer-events: none;\n}\n.button-group span {\n  display: block;\n  background: #ebebeb;\n  padding: 2px 10px;\n}\n.button-group label:first-child span {\n  border-top-left-radius: 2.5px;\n  border-bottom-left-radius: 2.5px;\n}\n.button-group label:last-child span {\n  border-top-right-radius: 2.5px;\n  border-bottom-right-radius: 2.5px;\n}\n.button-group input:not(:checked) + span {\n  cursor: pointer;\n}\n.button-group input:not(:checked) + span:hover {\n  background: #e0e0e0;\n}\n.button-group input:not(:checked) + span:active {\n  background: #d9d9d9;\n}\n.button-group input:checked + span {\n  background: #e50032;\n  color: #fff;\n}\n.radio-image {\n  display: flex;\n}\n.radio-image label {\n  display: block;\n}\n.radio-image label + label {\n  margin-left: 10px;\n}\n.radio-image input {\n  position: absolute;\n  pointer-events: none;\n  opacity: 0;\n}\n.radio-image span,\n.radio-image img {\n  display: block;\n}\n.radio-image span {\n  border: 2px solid #ebebeb;\n  border-radius: 2px;\n  padding: 6px;\n  cursor: pointer;\n}\n.radio-image img {\n  width: 60px;\n  height: 60px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 1.5px;\n}\n.radio-image input:checked + span {\n  border-color: #e50032;\n}\n@-webkit-keyframes red-zoom-loader-animation {\n  from {\n    transform: rotateZ(0deg);\n  }\n  to {\n    transform: rotateZ(360deg);\n  }\n}\n@keyframes red-zoom-loader-animation {\n  from {\n    transform: rotateZ(0deg);\n  }\n  to {\n    transform: rotateZ(360deg);\n  }\n}\n.red-zoom {\n  pointer-events: none;\n}\n.red-zoom__overlay,\n.red-zoom__error {\n  position: absolute;\n  left: var(--red-zoom-thumb-x, 0px);\n  top: var(--red-zoom-thumb-y, 0px);\n  width: var(--red-zoom-thumb-w, 0px);\n  height: var(--red-zoom-thumb-h, 0px);\n}\n.red-zoom__lens {\n  display: flex;\n}\n.red-zoom__lens-body {\n  position: relative;\n  overflow: hidden;\n  flex-grow: 1;\n}\n.red-zoom__lens-image {\n  --red-zoom-lens-image-x: calc(\n      var(--red-zoom-lens-image-base-x, 0px) +\n      var(--red-zoom-lens-image-center-offset-x, 0px)\n  );\n  --red-zoom-lens-image-y: calc(\n      var(--red-zoom-lens-image-base-y, 0px) +\n      var(--red-zoom-lens-image-center-offset-y, 0px)\n  );\n  position: absolute;\n  transform: translateX(var(--red-zoom-lens-image-x)) translateY(var(--red-zoom-lens-image-y)) translateZ(0);\n}\n.red-zoom__frame {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: var(--red-zoom-frame-w, 0px);\n  height: var(--red-zoom-frame-h, 0px);\n  transform: translateX(var(--red-zoom-frame-x, 0px)) translateY(var(--red-zoom-frame-y, 0px));\n}\n.red-zoom__frame-body {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n.red-zoom__frame-image {\n  width: var(--red-zoom-thumb-w, 0px);\n  height: var(--red-zoom-thumb-h, 0px);\n  transform: translateX(var(--red-zoom-frame-image-x, 0px)) translateY(var(--red-zoom-frame-image-y, 0px)) translateZ(0);\n}\n.red-zoom--style--window {\n  visibility: hidden;\n  transition: visibility 0s 0.5s;\n}\n.red-zoom--style--window .red-zoom__overlay {\n  background: rgba(229, 0, 50, 0.5);\n  opacity: 0;\n  transition: opacity 0.5s;\n  z-index: 1;\n}\n.red-zoom--style--window .red-zoom__overlay:before {\n  position: relative;\n  display: block;\n  content: \"\";\n  border-width: 2px;\n  border-style: solid;\n  border-color: rgba(255, 255, 255, 0.2);\n  border-top-color: white;\n  left: calc(50% - 20px);\n  top: calc(50% - 20px);\n  width: 40px;\n  height: 40px;\n  border-radius: 100%;\n  -webkit-animation-name: red-zoom-loader-animation;\n          animation-name: red-zoom-loader-animation;\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused;\n  opacity: 0;\n}\n.red-zoom--style--window .red-zoom__frame {\n  opacity: 0;\n  transition: opacity 0.5s;\n  z-index: 1;\n  background: transparent;\n}\n.red-zoom--style--window .red-zoom__frame:after {\n  position: absolute;\n  content: \"\";\n  border: 6px solid #fff;\n  box-sizing: border-box;\n  box-shadow: 0 1px 7px rgba(0, 0, 0, 0.25);\n  left: -6px;\n  top: -6px;\n  width: calc(100% + 12px);\n  height: calc(100% + 12px);\n}\n.red-zoom--style--window .red-zoom__lens {\n  position: absolute;\n  z-index: 2;\n  opacity: 0;\n  transition: opacity 0.5s;\n  background: #fff;\n}\n.red-zoom--style--window .red-zoom__lens:after {\n  position: absolute;\n  content: \"\";\n  border: 6px solid #fff;\n  box-shadow: 0 1px 9px rgba(0, 0, 0, 0.2);\n}\n.red-zoom--style--window .red-zoom__lens:after {\n  left: -6px;\n  top: -6px;\n  width: calc(100% + 12px);\n  height: calc(100% + 12px);\n}\n.red-zoom--style--window .red-zoom__error {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #fff;\n  padding: 32px;\n  visibility: hidden;\n  z-index: 1;\n  opacity: 0;\n  transition: visibility 0s 0.5s, opacity 0.5s;\n}\n.red-zoom--style--window.red-zoom--status--error .red-zoom__frame,\n.red-zoom--style--window.red-zoom--status--error .red-zoom__lens {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 0;\n  height: 0;\n  display: none;\n}\n.red-zoom--style--window.red-zoom--status--error .red-zoom__overlay {\n  background: rgba(255, 0, 0, 0.7);\n}\n.red-zoom--style--window.red-zoom--active {\n  transition-delay: 0s;\n  visibility: visible;\n}\n.red-zoom--style--window.red-zoom--active .red-zoom__overlay {\n  opacity: 1;\n}\n.red-zoom--style--window.red-zoom--active.red-zoom--status--loading .red-zoom__overlay:before {\n  opacity: 1;\n  -webkit-animation-play-state: running;\n          animation-play-state: running;\n}\n.red-zoom--style--window.red-zoom--active.red-zoom--status--loaded .red-zoom__lens,\n.red-zoom--style--window.red-zoom--active.red-zoom--status--loaded .red-zoom__frame {\n  opacity: 1;\n}\n.red-zoom--style--window.red-zoom--active.red-zoom--status--error .red-zoom__error {\n  visibility: visible;\n  transition-delay: 0s;\n  opacity: 1;\n}\n.red-zoom--style--window.red-zoom--disabled {\n  transition-delay: 0s;\n  visibility: hidden;\n}\n.red-zoom--style--window.red-zoom--disabled .red-zoom__overlay,\n.red-zoom--style--window.red-zoom--disabled .red-zoom__frame,\n.red-zoom--style--window.red-zoom--disabled .red-zoom__lens,\n.red-zoom--style--window.red-zoom--disabled .red-zoom__error {\n  transition-duration: 0s !important;\n  opacity: 0 !important;\n}\n.red-zoom--style--window .red-zoom__lens {\n  --window-x: calc(var(--red-zoom-thumb-x, 0px) + var(--red-zoom-thumb-w, 0px) + 32px);\n  left: var(--window-x, 0px);\n  top: var(--red-zoom-thumb-y, 0px);\n  width: var(--red-zoom-thumb-w, 0px);\n  height: var(--red-zoom-thumb-h, 0px);\n}\n.red-zoom--style--magnifier {\n  visibility: hidden;\n  transition: visibility 0s 0.5s;\n}\n.red-zoom--style--magnifier .red-zoom__overlay {\n  opacity: 0;\n  transition: opacity 0.5s;\n  z-index: 1;\n  background: rgba(255, 255, 255, 0.3);\n}\n.red-zoom--style--magnifier .red-zoom__overlay:before {\n  position: relative;\n  display: block;\n  content: \"\";\n  border-width: 2px;\n  border-style: solid;\n  border-color: rgba(255, 255, 255, 0.2);\n  border-top-color: white;\n  left: calc(50% - 20px);\n  top: calc(50% - 20px);\n  width: 40px;\n  height: 40px;\n  border-radius: 100%;\n  -webkit-animation-name: red-zoom-loader-animation;\n          animation-name: red-zoom-loader-animation;\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused;\n  opacity: 0;\n}\n.red-zoom--style--magnifier .red-zoom__frame {\n  display: none;\n}\n.red-zoom--style--magnifier .red-zoom__lens {\n  position: absolute;\n  display: block;\n  left: var(--red-zoom-thumb-x);\n  top: var(--red-zoom-thumb-y);\n  width: var(--red-zoom-thumb-w);\n  height: var(--red-zoom-thumb-h);\n  z-index: 1;\n  opacity: 0;\n  transition: opacity 0.5s;\n  overflow: hidden;\n}\n.red-zoom--style--magnifier .red-zoom__lens:after {\n  position: absolute;\n  content: \"\";\n  box-shadow: 0 1px 9px 2px rgba(0, 0, 0, 0.8);\n  border: 0 solid #fff;\n  opacity: 0.5;\n  border-radius: 20px;\n  left: calc(var(--red-zoom-mouse-x, 0px) - 80px - var(--red-zoom-thumb-x));\n  top: calc(var(--red-zoom-mouse-y, 0px) - 80px - var(--red-zoom-thumb-y));\n  width: 160px;\n  height: 160px;\n}\n.red-zoom--style--magnifier .red-zoom__lens-body {\n  border-radius: 20px;\n  left: calc(var(--red-zoom-mouse-x, 0px) - 80px - var(--red-zoom-thumb-x));\n  top: calc(var(--red-zoom-mouse-y, 0px) - 80px - var(--red-zoom-thumb-y));\n  width: 160px;\n  height: 160px;\n}\n.red-zoom--style--magnifier .red-zoom__lens-image {\n  --red-zoom-lens-image-x: calc(\n      var(--red-zoom-lens-image-base-x, 0px) +\n      var(--red-zoom-lens-image-center-offset-x, 0px) +\n      var(--red-zoom-lens-image-frame-offset-x, 0px)\n  );\n  --red-zoom-lens-image-y: calc(\n      var(--red-zoom-lens-image-base-y, 0px) +\n      var(--red-zoom-lens-image-center-offset-y, 0px) +\n      var(--red-zoom-lens-image-frame-offset-y, 0px)\n  );\n}\n.red-zoom--style--magnifier .red-zoom__error {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #fff;\n  padding: 32px;\n  visibility: hidden;\n  z-index: 1;\n  opacity: 0;\n  transition: visibility 0s 0.5s, opacity 0.5s;\n}\n.red-zoom--style--magnifier.red-zoom--status--error .red-zoom__frame,\n.red-zoom--style--magnifier.red-zoom--status--error .red-zoom__lens {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 0;\n  height: 0;\n  display: none;\n}\n.red-zoom--style--magnifier.red-zoom--status--error .red-zoom__overlay {\n  background: rgba(255, 0, 0, 0.7);\n}\n.red-zoom--style--magnifier.red-zoom--active {\n  transition-delay: 0s;\n  visibility: visible;\n}\n.red-zoom--style--magnifier.red-zoom--active .red-zoom__overlay {\n  opacity: 1;\n}\n.red-zoom--style--magnifier.red-zoom--active.red-zoom--status--loading .red-zoom__overlay:before {\n  opacity: 1;\n  -webkit-animation-play-state: running;\n          animation-play-state: running;\n}\n.red-zoom--style--magnifier.red-zoom--active.red-zoom--status--loaded .red-zoom__lens,\n.red-zoom--style--magnifier.red-zoom--active.red-zoom--status--loaded .red-zoom__frame {\n  opacity: 1;\n}\n.red-zoom--style--magnifier.red-zoom--active.red-zoom--status--error .red-zoom__error {\n  visibility: visible;\n  transition-delay: 0s;\n  opacity: 1;\n}\n.red-zoom--style--magnifier.red-zoom--disabled {\n  transition-delay: 0s;\n  visibility: hidden;\n}\n.red-zoom--style--magnifier.red-zoom--disabled .red-zoom__overlay,\n.red-zoom--style--magnifier.red-zoom--disabled .red-zoom__frame,\n.red-zoom--style--magnifier.red-zoom--disabled .red-zoom__lens,\n.red-zoom--style--magnifier.red-zoom--disabled .red-zoom__error {\n  transition-duration: 0s !important;\n  opacity: 0 !important;\n}\n.red-zoom--style--overlay {\n  visibility: hidden;\n  transition: visibility 0s 0.5s;\n}\n.red-zoom--style--overlay .red-zoom__overlay {\n  opacity: 0;\n  transition: opacity 0.5s;\n  z-index: 1;\n  background: rgba(255, 255, 255, 0.3);\n}\n.red-zoom--style--overlay .red-zoom__overlay:before {\n  position: relative;\n  display: block;\n  content: \"\";\n  border-width: 2px;\n  border-style: solid;\n  border-color: rgba(255, 255, 255, 0.2);\n  border-top-color: white;\n  left: calc(50% - 20px);\n  top: calc(50% - 20px);\n  width: 40px;\n  height: 40px;\n  border-radius: 100%;\n  -webkit-animation-name: red-zoom-loader-animation;\n          animation-name: red-zoom-loader-animation;\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused;\n  opacity: 0;\n}\n.red-zoom--style--overlay .red-zoom__frame {\n  display: none;\n}\n.red-zoom--style--overlay .red-zoom__lens {\n  position: absolute;\n  left: var(--red-zoom-thumb-x);\n  top: var(--red-zoom-thumb-y);\n  width: var(--red-zoom-thumb-w);\n  height: var(--red-zoom-thumb-h);\n  overflow: hidden;\n  z-index: 1;\n  opacity: 0;\n  transition: opacity 0.5s;\n}\n.red-zoom--style--overlay .red-zoom__error {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #fff;\n  padding: 32px;\n  visibility: hidden;\n  z-index: 1;\n  opacity: 0;\n  transition: visibility 0s 0.5s, opacity 0.5s;\n}\n.red-zoom--style--overlay.red-zoom--status--error .red-zoom__frame,\n.red-zoom--style--overlay.red-zoom--status--error .red-zoom__lens {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 0;\n  height: 0;\n  display: none;\n}\n.red-zoom--style--overlay.red-zoom--status--error .red-zoom__overlay {\n  background: rgba(255, 0, 0, 0.7);\n}\n.red-zoom--style--overlay.red-zoom--active {\n  transition-delay: 0s;\n  visibility: visible;\n}\n.red-zoom--style--overlay.red-zoom--active .red-zoom__overlay {\n  opacity: 1;\n}\n.red-zoom--style--overlay.red-zoom--active.red-zoom--status--loading .red-zoom__overlay:before {\n  opacity: 1;\n  -webkit-animation-play-state: running;\n          animation-play-state: running;\n}\n.red-zoom--style--overlay.red-zoom--active.red-zoom--status--loaded .red-zoom__lens,\n.red-zoom--style--overlay.red-zoom--active.red-zoom--status--loaded .red-zoom__frame {\n  opacity: 1;\n}\n.red-zoom--style--overlay.red-zoom--active.red-zoom--status--error .red-zoom__error {\n  visibility: visible;\n  transition-delay: 0s;\n  opacity: 1;\n}\n.red-zoom--style--overlay.red-zoom--disabled {\n  transition-delay: 0s;\n  visibility: hidden;\n}\n.red-zoom--style--overlay.red-zoom--disabled .red-zoom__overlay,\n.red-zoom--style--overlay.red-zoom--disabled .red-zoom__frame,\n.red-zoom--style--overlay.red-zoom--disabled .red-zoom__lens,\n.red-zoom--style--overlay.red-zoom--disabled .red-zoom__error {\n  transition-duration: 0s !important;\n  opacity: 0 !important;\n}\n.zoom {\n  cursor: crosshair;\n}", "", {
      "version": 3,
      "sources": ["F:\\projects\\red-zoom/src\\styles.scss", "F:\\projects\\red-zoom/node_modules\\ngx-owl-carousel-o\\lib\\styles\\scss\\_core.scss", "styles.scss", "F:\\projects\\red-zoom/node_modules\\ngx-owl-carousel-o\\lib\\styles\\scss\\_animate.scss", "F:\\projects\\red-zoom/node_modules\\ngx-owl-carousel-o\\lib\\styles\\scss\\_autoheight.scss", "F:\\projects\\red-zoom/node_modules\\ngx-owl-carousel-o\\lib\\styles\\scss\\_lazyload.scss", "F:\\projects\\red-zoom/src\\scss\\_common.scss", "F:\\projects\\red-zoom/src\\scss\\_angular-logo.scss", "F:\\projects\\red-zoom/src\\scss\\_logo.scss", "F:\\projects\\red-zoom/src\\scss\\_intro.scss", "F:\\projects\\red-zoom/src\\scss\\_section.scss", "F:\\projects\\red-zoom/src\\scss\\_example.scss", "F:\\projects\\red-zoom/src\\scss\\_typography.scss", "F:\\projects\\red-zoom/src\\scss\\_copyright.scss", "F:\\projects\\red-zoom/src\\scss\\_changelog.scss", "F:\\projects\\red-zoom/src\\scss\\_gallery.scss", "F:\\projects\\red-zoom/src\\scss\\_button-group.scss", "F:\\projects\\red-zoom/src\\scss\\_radio-image.scss", "F:\\projects\\red-zoom/src\\scss\\library\\_base.scss", "F:\\projects\\red-zoom/src\\scss\\library\\_style-window.scss", "F:\\projects\\red-zoom/src\\scss\\library\\mixins\\_style-window.scss", "F:\\projects\\red-zoom/src\\scss\\library\\mixins\\_common.scss", "F:\\projects\\red-zoom/src\\scss\\library\\_style-magnifier.scss", "F:\\projects\\red-zoom/src\\scss\\library\\mixins\\_style-magnifier.scss", "F:\\projects\\red-zoom/src\\scss\\library\\_style-overlay.scss", "F:\\projects\\red-zoom/src\\scss\\library\\mixins\\_style-overlay.scss"],
      "names": [],
      "mappings": "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",
      "file": "styles.scss",
      "sourcesContent": ["/* You can add global styles to this file, and also import other style files */\n\n@import '~ngx-owl-carousel-o/lib/styles/scss/owl.carousel';\n\n// site\n@import 'scss/common';\n@import 'scss/angular-logo';\n@import 'scss/logo';\n@import 'scss/intro';\n@import 'scss/section';\n@import 'scss/example';\n@import 'scss/typography';\n@import 'scss/copyright';\n@import 'scss/changelog';\n@import 'scss/gallery';\n@import 'scss/button-group';\n@import 'scss/radio-image';\n// red-zoom\n@import 'scss/library/base';\n@import 'scss/library/style-window';\n@import 'scss/library/style-magnifier';\n@import 'scss/library/style-overlay';\n\n\n.zoom {\n    cursor: crosshair;\n}\n", "/*\r\n *  Owl Carousel - Core\r\n */\r\n.owl-carousel {\r\n\tdisplay: none;\r\n\twidth: 100%;\r\n\t-webkit-tap-highlight-color: transparent;\r\n\t/* position relative and z-index fix webkit rendering fonts issue */\r\n\tposition: relative;\r\n\tz-index: 1;\r\n\r\n\t.owl-stage {\r\n\t\tposition: relative;\r\n\t\t-ms-touch-action: pan-Y;\r\n\t\ttouch-action: manipulation;\r\n\t\t-moz-backface-visibility: hidden; /* fix firefox animation glitch */\r\n\t}\r\n\r\n\t.owl-stage:after {\r\n\t\tcontent: \".\";\r\n\t\tdisplay: block;\r\n\t\tclear: both;\r\n\t\tvisibility: hidden;\r\n\t\tline-height: 0;\r\n\t\theight: 0;\r\n\t}\r\n\r\n\t.owl-stage-outer {\r\n\t\tposition: relative;\r\n\t\toverflow: hidden;\r\n\t\t/* fix for flashing background */\r\n\t\t-webkit-transform: translate3d(0px, 0px, 0px);\r\n\t}\r\n\r\n\t.owl-wrapper,\r\n\t.owl-item{\r\n\t\t-webkit-backface-visibility: hidden;\r\n\t\t-moz-backface-visibility: hidden;\r\n\t\t-ms-backface-visibility: hidden;\r\n\t\t-webkit-transform: translate3d(0,0,0);\r\n\t\t-moz-transform: translate3d(0,0,0);\r\n\t\t-ms-transform: translate3d(0,0,0);\r\n\t}\r\n\r\n\t.owl-item {\r\n\t\tposition: relative;\r\n\t\tmin-height: 1px;\r\n\t\tfloat: left;\r\n\t\t-webkit-backface-visibility: hidden;\r\n\t\t-webkit-tap-highlight-color: transparent;\r\n\t\t-webkit-touch-callout: none;\r\n\t}\r\n\t.owl-item img {\r\n\t\tdisplay: block;\r\n\t\twidth: 100%;\r\n\t}\r\n\r\n\t.owl-nav.disabled,\r\n\t.owl-dots.disabled {\r\n\t\tdisplay: none;\r\n\t}\r\n\r\n\t.owl-nav .owl-prev,\r\n\t.owl-nav .owl-next,\r\n\t.owl-dot {\r\n\t\tcursor: pointer;\r\n\t\t-webkit-user-select: none;\r\n\t\t-khtml-user-select: none;\r\n\t\t-moz-user-select: none;\r\n\t\t-ms-user-select: none;\r\n\t\tuser-select: none;\r\n\t}\r\n\r\n\t.owl-nav button.owl-prev,\r\n\t.owl-nav button.owl-next,\r\n\tbutton.owl-dot {\r\n\t\tbackground: none;\r\n\t\tcolor: inherit;\r\n\t\tborder: none;\r\n\t\tpadding:0!important;\r\n\t\tfont: inherit;\r\n\t}\r\n\r\n\t&.owl-loaded {\r\n\t\tdisplay: block;\r\n\t}\r\n\r\n\t&.owl-loading {\r\n\t\topacity: 0;\r\n\t\tdisplay: block;\r\n\t}\r\n\r\n\t&.owl-hidden {\r\n\t\topacity: 0;\r\n\t}\r\n\r\n\t&.owl-refresh .owl-item {\r\n\t\tvisibility: hidden;\r\n\t}\r\n\r\n\t&.owl-drag .owl-item {\r\n\t\ttouch-action: pan-y;\r\n\t\t-webkit-user-select: none;\r\n\t\t-moz-user-select: none;\r\n\t\t-ms-user-select: none;\r\n\t\tuser-select: none;\r\n\t}\r\n\r\n\t&.owl-grab {\r\n\t\tcursor: move;\r\n\t\tcursor: grab;\r\n\t}\r\n\r\n\t&.owl-rtl {\r\n\t\tdirection: rtl;\r\n\t}\r\n\r\n\t&.owl-rtl .owl-item {\r\n\t\tfloat: right;\r\n\t}\r\n}\r\n\r\n/* No Js */\r\n.no-js .owl-carousel {\r\n\tdisplay: block;\r\n}\r\n", "/* You can add global styles to this file, and also import other style files */\n/*\n *  Owl Carousel - Core\n */\n.owl-carousel {\n  display: none;\n  width: 100%;\n  -webkit-tap-highlight-color: transparent;\n  /* position relative and z-index fix webkit rendering fonts issue */\n  position: relative;\n  z-index: 1;\n}\n.owl-carousel .owl-stage {\n  position: relative;\n  -ms-touch-action: pan-Y;\n  touch-action: manipulation;\n  -moz-backface-visibility: hidden;\n  /* fix firefox animation glitch */\n}\n.owl-carousel .owl-stage:after {\n  content: \".\";\n  display: block;\n  clear: both;\n  visibility: hidden;\n  line-height: 0;\n  height: 0;\n}\n.owl-carousel .owl-stage-outer {\n  position: relative;\n  overflow: hidden;\n  /* fix for flashing background */\n  -webkit-transform: translate3d(0px, 0px, 0px);\n}\n.owl-carousel .owl-wrapper,\n.owl-carousel .owl-item {\n  -webkit-backface-visibility: hidden;\n  -moz-backface-visibility: hidden;\n  -ms-backface-visibility: hidden;\n  -webkit-transform: translate3d(0, 0, 0);\n  -moz-transform: translate3d(0, 0, 0);\n  -ms-transform: translate3d(0, 0, 0);\n}\n.owl-carousel .owl-item {\n  position: relative;\n  min-height: 1px;\n  float: left;\n  -webkit-backface-visibility: hidden;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-touch-callout: none;\n}\n.owl-carousel .owl-item img {\n  display: block;\n  width: 100%;\n}\n.owl-carousel .owl-nav.disabled,\n.owl-carousel .owl-dots.disabled {\n  display: none;\n}\n.owl-carousel .owl-nav .owl-prev,\n.owl-carousel .owl-nav .owl-next,\n.owl-carousel .owl-dot {\n  cursor: pointer;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.owl-carousel .owl-nav button.owl-prev,\n.owl-carousel .owl-nav button.owl-next,\n.owl-carousel button.owl-dot {\n  background: none;\n  color: inherit;\n  border: none;\n  padding: 0 !important;\n  font: inherit;\n}\n.owl-carousel.owl-loaded {\n  display: block;\n}\n.owl-carousel.owl-loading {\n  opacity: 0;\n  display: block;\n}\n.owl-carousel.owl-hidden {\n  opacity: 0;\n}\n.owl-carousel.owl-refresh .owl-item {\n  visibility: hidden;\n}\n.owl-carousel.owl-drag .owl-item {\n  touch-action: pan-y;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.owl-carousel.owl-grab {\n  cursor: move;\n  cursor: grab;\n}\n.owl-carousel.owl-rtl {\n  direction: rtl;\n}\n.owl-carousel.owl-rtl .owl-item {\n  float: right;\n}\n\n/* No Js */\n.no-js .owl-carousel {\n  display: block;\n}\n\n/*\n *  Owl Carousel - Animate Plugin\n */\n.owl-carousel .animated {\n  animation-duration: 1000ms;\n  animation-fill-mode: both;\n}\n.owl-carousel .owl-animated-in {\n  z-index: 0;\n}\n.owl-carousel .owl-animated-out {\n  z-index: 1;\n}\n.owl-carousel .fadeOut {\n  animation-name: fadeOut;\n}\n\n@keyframes fadeOut {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n/*\n * \tOwl Carousel - Auto Height Plugin\n */\n.owl-height {\n  transition: height 500ms ease-in-out;\n}\n\n/*\n * \tOwl Carousel - Lazy Load Plugin\n */\n.owl-carousel .owl-item {\n  /**\n  \tThis is introduced due to a bug in IE11 where lazy loading combined with autoheight plugin causes a wrong\n  \tcalculation of the height of the owl-item that breaks page layouts\n   */\n}\n.owl-carousel .owl-item .owl-lazy {\n  transition: opacity 400ms ease;\n}\n.owl-carousel .owl-item .owl-lazy[src^=\"\"], .owl-carousel .owl-item .owl-lazy:not([src]) {\n  max-height: 0;\n}\n.owl-carousel .owl-item img.owl-lazy {\n  transform-style: preserve-3d;\n}\n\n*,\n:after,\n:before {\n  box-sizing: border-box;\n}\n\nhtml, body {\n  padding: 0;\n  margin: 0;\n  height: 100%;\n}\n\nbody {\n  color: #333;\n  background: #fafafa;\n  backface-visibility: hidden;\n  font-size: 16px;\n  font-weight: 400;\n  font-family: Roboto, sans-serif;\n  line-height: 1.5;\n  overflow-y: scroll;\n}\n\na {\n  color: #e50032;\n  text-decoration: none;\n}\n\na:hover {\n  text-decoration: underline;\n}\n\n.angular-logo__image {\n  display: block;\n  margin: 0 auto;\n}\n\n.angular-logo__part-one {\n  fill: #dd0031;\n}\n\n.angular-logo__part-two {\n  fill: #c3002f;\n}\n\n.angular-logo__letter {\n  fill: #fff;\n}\n\n.logo {\n  display: block;\n}\n\n.logo__part-one {\n  fill: #e50032;\n}\n\n.logo__part-two {\n  fill: #303040;\n}\n\n.intro {\n  max-width: 480px;\n  margin: 0 auto;\n  padding: 56px 0 92px;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n}\n\n.intro__logo {\n  margin: 0 auto;\n}\n\n.intro__version {\n  font-size: 14px;\n  padding: 20px 0 14px;\n}\n.intro__version a {\n  color: #6f7275;\n  text-decoration: none;\n}\n.intro__version a:hover {\n  text-decoration: underline;\n}\n\n.intro__text {\n  font-size: 17px;\n  line-height: 29px;\n}\n\n.intro__code {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 16px;\n}\n.intro__code code {\n  background: #ebebeb;\n  color: #666;\n  font-family: \"Courier New\", sans-serif;\n  font-size: 14px;\n  padding: 2px 9px;\n  border-radius: 2px;\n  cursor: pointer;\n  transition: background 0.15s, color 0.15s;\n}\n.intro__code code:hover {\n  background: #e5e5e5;\n  color: inherit;\n}\n.intro__code code:active {\n  background: #e0e0e0;\n  color: inherit;\n}\n\n.intro__code-caption {\n  font-size: 10px;\n  line-height: 1;\n  text-transform: uppercase;\n  color: #a6a6a6;\n  margin-top: 8px;\n}\n\n.section {\n  max-width: 920px;\n  display: block;\n  margin: 64px auto 0;\n}\n\n.example {\n  max-width: 920px;\n  margin: 0 auto;\n  display: block;\n}\n.example + .example {\n  margin-top: 64px;\n}\n\n.example__body {\n  display: flex;\n}\n\n.example__image {\n  width: 320px;\n}\n.example__image img {\n  display: block;\n}\n\n.example__content {\n  margin-left: 56px;\n  margin-top: 20px;\n  flex-grow: 1;\n  width: calc(100% - 320px - 56px);\n}\n\n.typography {\n  font-size: 16px;\n}\n.typography h1, .typography h2, .typography h3, .typography h4, .typography h5, .typography h6 {\n  line-height: 1.25;\n  margin: 1.5em 0 1em;\n}\n.typography h1:first-child, .typography h2:first-child, .typography h3:first-child, .typography h4:first-child, .typography h5:first-child, .typography h6:first-child {\n  margin-top: 0;\n}\n.typography ol {\n  counter-reset: list;\n  list-style: none;\n  padding: 0;\n}\n.typography ol li {\n  margin: 0.375rem 0;\n  counter-increment: list;\n}\n.typography ol li:before {\n  content: counter(list) \".\";\n  padding-right: 6px;\n}\n.typography code {\n  background: #ebebeb;\n  color: #4d4d4d;\n  font-family: \"Courier New\", sans-serif;\n  font-size: 14px;\n  padding: 0 4px;\n  border-radius: 2px;\n}\n.typography pre {\n  margin: 12px 0 20px;\n}\n.typography pre code {\n  display: block;\n  padding: 4px 9px;\n  overflow-x: auto;\n}\n.typography table {\n  margin: 1.25rem 0;\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 15px;\n}\n.typography th,\n.typography td {\n  border-spacing: 0;\n  padding: 7px 12px;\n}\n.typography table,\n.typography th,\n.typography td {\n  border: 1px solid #e0e0e0;\n}\n.typography tbody th,\n.typography tbody td {\n  text-align: left;\n}\n.typography hr {\n  height: 1px;\n  background: #e0e0e0;\n  border: none;\n  margin: 8px 0;\n}\n\n.copyright {\n  text-align: center;\n  font-size: 14px;\n  padding: 32px 0;\n  margin-top: 64px;\n}\n\n.changelog {\n  list-style: none;\n  padding: 0;\n}\n\n.gallery__thumbnails-list {\n  list-style: none;\n  padding: 0;\n  margin-top: 16px;\n  display: flex;\n}\n\n.gallery__thumbnail {\n  width: calc((100% - 24px) / 3);\n}\n.gallery__thumbnail + .gallery__thumbnail {\n  margin-left: 12px;\n}\n.gallery__thumbnail img {\n  max-width: 100%;\n  opacity: 0.4;\n}\n\n.gallery__thumbnail--current img {\n  opacity: 1;\n}\n\n.button-group {\n  display: flex;\n  font-size: 15px;\n  user-select: none;\n}\n.button-group label {\n  display: block;\n}\n.button-group input {\n  position: absolute;\n  opacity: 0;\n  pointer-events: none;\n}\n.button-group span {\n  display: block;\n  background: #ebebeb;\n  padding: 2px 10px;\n}\n.button-group label:first-child span {\n  border-top-left-radius: 2.5px;\n  border-bottom-left-radius: 2.5px;\n}\n.button-group label:last-child span {\n  border-top-right-radius: 2.5px;\n  border-bottom-right-radius: 2.5px;\n}\n.button-group input:not(:checked) + span {\n  cursor: pointer;\n}\n.button-group input:not(:checked) + span:hover {\n  background: #e0e0e0;\n}\n.button-group input:not(:checked) + span:active {\n  background: #d9d9d9;\n}\n.button-group input:checked + span {\n  background: #e50032;\n  color: #fff;\n}\n\n.radio-image {\n  display: flex;\n}\n.radio-image label {\n  display: block;\n}\n.radio-image label + label {\n  margin-left: 10px;\n}\n.radio-image input {\n  position: absolute;\n  pointer-events: none;\n  opacity: 0;\n}\n.radio-image span,\n.radio-image img {\n  display: block;\n}\n.radio-image span {\n  border: 2px solid #ebebeb;\n  border-radius: 2px;\n  padding: 6px;\n  cursor: pointer;\n}\n.radio-image img {\n  width: 60px;\n  height: 60px;\n  object-fit: cover;\n  border-radius: 1.5px;\n}\n.radio-image input:checked + span {\n  border-color: #e50032;\n}\n\n@keyframes red-zoom-loader-animation {\n  from {\n    transform: rotateZ(0deg);\n  }\n  to {\n    transform: rotateZ(360deg);\n  }\n}\n.red-zoom {\n  pointer-events: none;\n}\n\n.red-zoom__overlay,\n.red-zoom__error {\n  position: absolute;\n  left: var(--red-zoom-thumb-x, 0px);\n  top: var(--red-zoom-thumb-y, 0px);\n  width: var(--red-zoom-thumb-w, 0px);\n  height: var(--red-zoom-thumb-h, 0px);\n}\n\n.red-zoom__lens {\n  display: flex;\n}\n\n.red-zoom__lens-body {\n  position: relative;\n  overflow: hidden;\n  flex-grow: 1;\n}\n\n.red-zoom__lens-image {\n  --red-zoom-lens-image-x: calc(\n      var(--red-zoom-lens-image-base-x, 0px) +\n      var(--red-zoom-lens-image-center-offset-x, 0px)\n  );\n  --red-zoom-lens-image-y: calc(\n      var(--red-zoom-lens-image-base-y, 0px) +\n      var(--red-zoom-lens-image-center-offset-y, 0px)\n  );\n  position: absolute;\n  transform: translateX(var(--red-zoom-lens-image-x)) translateY(var(--red-zoom-lens-image-y)) translateZ(0);\n}\n\n.red-zoom__frame {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: var(--red-zoom-frame-w, 0px);\n  height: var(--red-zoom-frame-h, 0px);\n  transform: translateX(var(--red-zoom-frame-x, 0px)) translateY(var(--red-zoom-frame-y, 0px));\n}\n\n.red-zoom__frame-body {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n\n.red-zoom__frame-image {\n  width: var(--red-zoom-thumb-w, 0px);\n  height: var(--red-zoom-thumb-h, 0px);\n  transform: translateX(var(--red-zoom-frame-image-x, 0px)) translateY(var(--red-zoom-frame-image-y, 0px)) translateZ(0);\n}\n\n.red-zoom--style--window {\n  visibility: hidden;\n  transition: visibility 0s 0.5s;\n}\n.red-zoom--style--window .red-zoom__overlay {\n  background: rgba(229, 0, 50, 0.5);\n  opacity: 0;\n  transition: opacity 0.5s;\n  z-index: 1;\n}\n.red-zoom--style--window .red-zoom__overlay:before {\n  position: relative;\n  display: block;\n  content: \"\";\n  border-width: 2px;\n  border-style: solid;\n  border-color: rgba(255, 255, 255, 0.2);\n  border-top-color: white;\n  left: calc(50% - 20px);\n  top: calc(50% - 20px);\n  width: 40px;\n  height: 40px;\n  border-radius: 100%;\n  animation-name: red-zoom-loader-animation;\n  animation-duration: 0.5s;\n  animation-timing-function: linear;\n  animation-iteration-count: infinite;\n  animation-play-state: paused;\n  opacity: 0;\n}\n.red-zoom--style--window .red-zoom__frame {\n  opacity: 0;\n  transition: opacity 0.5s;\n  z-index: 1;\n  background: transparent;\n}\n.red-zoom--style--window .red-zoom__frame:after {\n  position: absolute;\n  content: \"\";\n  border: 6px solid #fff;\n  box-sizing: border-box;\n  box-shadow: 0 1px 7px rgba(0, 0, 0, 0.25);\n  left: -6px;\n  top: -6px;\n  width: calc(100% + 12px);\n  height: calc(100% + 12px);\n}\n.red-zoom--style--window .red-zoom__lens {\n  position: absolute;\n  z-index: 2;\n  opacity: 0;\n  transition: opacity 0.5s;\n  background: #fff;\n}\n.red-zoom--style--window .red-zoom__lens:after {\n  position: absolute;\n  content: \"\";\n  border: 6px solid #fff;\n  box-shadow: 0 1px 9px rgba(0, 0, 0, 0.2);\n}\n.red-zoom--style--window .red-zoom__lens:after {\n  left: -6px;\n  top: -6px;\n  width: calc(100% + 12px);\n  height: calc(100% + 12px);\n}\n.red-zoom--style--window .red-zoom__error {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #fff;\n  padding: 32px;\n  visibility: hidden;\n  z-index: 1;\n  opacity: 0;\n  transition: visibility 0s 0.5s, opacity 0.5s;\n}\n.red-zoom--style--window.red-zoom--status--error .red-zoom__frame,\n.red-zoom--style--window.red-zoom--status--error .red-zoom__lens {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 0;\n  height: 0;\n  display: none;\n}\n.red-zoom--style--window.red-zoom--status--error .red-zoom__overlay {\n  background: rgba(255, 0, 0, 0.7);\n}\n.red-zoom--style--window.red-zoom--active {\n  transition-delay: 0s;\n  visibility: visible;\n}\n.red-zoom--style--window.red-zoom--active .red-zoom__overlay {\n  opacity: 1;\n}\n.red-zoom--style--window.red-zoom--active.red-zoom--status--loading .red-zoom__overlay:before {\n  opacity: 1;\n  animation-play-state: running;\n}\n.red-zoom--style--window.red-zoom--active.red-zoom--status--loaded .red-zoom__lens,\n.red-zoom--style--window.red-zoom--active.red-zoom--status--loaded .red-zoom__frame {\n  opacity: 1;\n}\n.red-zoom--style--window.red-zoom--active.red-zoom--status--error .red-zoom__error {\n  visibility: visible;\n  transition-delay: 0s;\n  opacity: 1;\n}\n.red-zoom--style--window.red-zoom--disabled {\n  transition-delay: 0s;\n  visibility: hidden;\n}\n.red-zoom--style--window.red-zoom--disabled .red-zoom__overlay,\n.red-zoom--style--window.red-zoom--disabled .red-zoom__frame,\n.red-zoom--style--window.red-zoom--disabled .red-zoom__lens,\n.red-zoom--style--window.red-zoom--disabled .red-zoom__error {\n  transition-duration: 0s !important;\n  opacity: 0 !important;\n}\n.red-zoom--style--window .red-zoom__lens {\n  --window-x: calc(var(--red-zoom-thumb-x, 0px) + var(--red-zoom-thumb-w, 0px) + 32px);\n  left: var(--window-x, 0px);\n  top: var(--red-zoom-thumb-y, 0px);\n  width: var(--red-zoom-thumb-w, 0px);\n  height: var(--red-zoom-thumb-h, 0px);\n}\n\n.red-zoom--style--magnifier {\n  visibility: hidden;\n  transition: visibility 0s 0.5s;\n}\n.red-zoom--style--magnifier .red-zoom__overlay {\n  opacity: 0;\n  transition: opacity 0.5s;\n  z-index: 1;\n  background: rgba(255, 255, 255, 0.3);\n}\n.red-zoom--style--magnifier .red-zoom__overlay:before {\n  position: relative;\n  display: block;\n  content: \"\";\n  border-width: 2px;\n  border-style: solid;\n  border-color: rgba(255, 255, 255, 0.2);\n  border-top-color: white;\n  left: calc(50% - 20px);\n  top: calc(50% - 20px);\n  width: 40px;\n  height: 40px;\n  border-radius: 100%;\n  animation-name: red-zoom-loader-animation;\n  animation-duration: 0.5s;\n  animation-timing-function: linear;\n  animation-iteration-count: infinite;\n  animation-play-state: paused;\n  opacity: 0;\n}\n.red-zoom--style--magnifier .red-zoom__frame {\n  display: none;\n}\n.red-zoom--style--magnifier .red-zoom__lens {\n  position: absolute;\n  display: block;\n  left: var(--red-zoom-thumb-x);\n  top: var(--red-zoom-thumb-y);\n  width: var(--red-zoom-thumb-w);\n  height: var(--red-zoom-thumb-h);\n  z-index: 1;\n  opacity: 0;\n  transition: opacity 0.5s;\n  overflow: hidden;\n}\n.red-zoom--style--magnifier .red-zoom__lens:after {\n  position: absolute;\n  content: \"\";\n  box-shadow: 0 1px 9px 2px rgba(0, 0, 0, 0.8);\n  border: 0 solid #fff;\n  opacity: 0.5;\n  border-radius: 20px;\n  left: calc(var(--red-zoom-mouse-x, 0px) - 80px - var(--red-zoom-thumb-x));\n  top: calc(var(--red-zoom-mouse-y, 0px) - 80px - var(--red-zoom-thumb-y));\n  width: 160px;\n  height: 160px;\n}\n.red-zoom--style--magnifier .red-zoom__lens-body {\n  border-radius: 20px;\n  left: calc(var(--red-zoom-mouse-x, 0px) - 80px - var(--red-zoom-thumb-x));\n  top: calc(var(--red-zoom-mouse-y, 0px) - 80px - var(--red-zoom-thumb-y));\n  width: 160px;\n  height: 160px;\n}\n.red-zoom--style--magnifier .red-zoom__lens-image {\n  --red-zoom-lens-image-x: calc(\n      var(--red-zoom-lens-image-base-x, 0px) +\n      var(--red-zoom-lens-image-center-offset-x, 0px) +\n      var(--red-zoom-lens-image-frame-offset-x, 0px)\n  );\n  --red-zoom-lens-image-y: calc(\n      var(--red-zoom-lens-image-base-y, 0px) +\n      var(--red-zoom-lens-image-center-offset-y, 0px) +\n      var(--red-zoom-lens-image-frame-offset-y, 0px)\n  );\n}\n.red-zoom--style--magnifier .red-zoom__error {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #fff;\n  padding: 32px;\n  visibility: hidden;\n  z-index: 1;\n  opacity: 0;\n  transition: visibility 0s 0.5s, opacity 0.5s;\n}\n.red-zoom--style--magnifier.red-zoom--status--error .red-zoom__frame,\n.red-zoom--style--magnifier.red-zoom--status--error .red-zoom__lens {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 0;\n  height: 0;\n  display: none;\n}\n.red-zoom--style--magnifier.red-zoom--status--error .red-zoom__overlay {\n  background: rgba(255, 0, 0, 0.7);\n}\n.red-zoom--style--magnifier.red-zoom--active {\n  transition-delay: 0s;\n  visibility: visible;\n}\n.red-zoom--style--magnifier.red-zoom--active .red-zoom__overlay {\n  opacity: 1;\n}\n.red-zoom--style--magnifier.red-zoom--active.red-zoom--status--loading .red-zoom__overlay:before {\n  opacity: 1;\n  animation-play-state: running;\n}\n.red-zoom--style--magnifier.red-zoom--active.red-zoom--status--loaded .red-zoom__lens,\n.red-zoom--style--magnifier.red-zoom--active.red-zoom--status--loaded .red-zoom__frame {\n  opacity: 1;\n}\n.red-zoom--style--magnifier.red-zoom--active.red-zoom--status--error .red-zoom__error {\n  visibility: visible;\n  transition-delay: 0s;\n  opacity: 1;\n}\n.red-zoom--style--magnifier.red-zoom--disabled {\n  transition-delay: 0s;\n  visibility: hidden;\n}\n.red-zoom--style--magnifier.red-zoom--disabled .red-zoom__overlay,\n.red-zoom--style--magnifier.red-zoom--disabled .red-zoom__frame,\n.red-zoom--style--magnifier.red-zoom--disabled .red-zoom__lens,\n.red-zoom--style--magnifier.red-zoom--disabled .red-zoom__error {\n  transition-duration: 0s !important;\n  opacity: 0 !important;\n}\n\n.red-zoom--style--overlay {\n  visibility: hidden;\n  transition: visibility 0s 0.5s;\n}\n.red-zoom--style--overlay .red-zoom__overlay {\n  opacity: 0;\n  transition: opacity 0.5s;\n  z-index: 1;\n  background: rgba(255, 255, 255, 0.3);\n}\n.red-zoom--style--overlay .red-zoom__overlay:before {\n  position: relative;\n  display: block;\n  content: \"\";\n  border-width: 2px;\n  border-style: solid;\n  border-color: rgba(255, 255, 255, 0.2);\n  border-top-color: white;\n  left: calc(50% - 20px);\n  top: calc(50% - 20px);\n  width: 40px;\n  height: 40px;\n  border-radius: 100%;\n  animation-name: red-zoom-loader-animation;\n  animation-duration: 0.5s;\n  animation-timing-function: linear;\n  animation-iteration-count: infinite;\n  animation-play-state: paused;\n  opacity: 0;\n}\n.red-zoom--style--overlay .red-zoom__frame {\n  display: none;\n}\n.red-zoom--style--overlay .red-zoom__lens {\n  position: absolute;\n  left: var(--red-zoom-thumb-x);\n  top: var(--red-zoom-thumb-y);\n  width: var(--red-zoom-thumb-w);\n  height: var(--red-zoom-thumb-h);\n  overflow: hidden;\n  z-index: 1;\n  opacity: 0;\n  transition: opacity 0.5s;\n}\n.red-zoom--style--overlay .red-zoom__error {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #fff;\n  padding: 32px;\n  visibility: hidden;\n  z-index: 1;\n  opacity: 0;\n  transition: visibility 0s 0.5s, opacity 0.5s;\n}\n.red-zoom--style--overlay.red-zoom--status--error .red-zoom__frame,\n.red-zoom--style--overlay.red-zoom--status--error .red-zoom__lens {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 0;\n  height: 0;\n  display: none;\n}\n.red-zoom--style--overlay.red-zoom--status--error .red-zoom__overlay {\n  background: rgba(255, 0, 0, 0.7);\n}\n.red-zoom--style--overlay.red-zoom--active {\n  transition-delay: 0s;\n  visibility: visible;\n}\n.red-zoom--style--overlay.red-zoom--active .red-zoom__overlay {\n  opacity: 1;\n}\n.red-zoom--style--overlay.red-zoom--active.red-zoom--status--loading .red-zoom__overlay:before {\n  opacity: 1;\n  animation-play-state: running;\n}\n.red-zoom--style--overlay.red-zoom--active.red-zoom--status--loaded .red-zoom__lens,\n.red-zoom--style--overlay.red-zoom--active.red-zoom--status--loaded .red-zoom__frame {\n  opacity: 1;\n}\n.red-zoom--style--overlay.red-zoom--active.red-zoom--status--error .red-zoom__error {\n  visibility: visible;\n  transition-delay: 0s;\n  opacity: 1;\n}\n.red-zoom--style--overlay.red-zoom--disabled {\n  transition-delay: 0s;\n  visibility: hidden;\n}\n.red-zoom--style--overlay.red-zoom--disabled .red-zoom__overlay,\n.red-zoom--style--overlay.red-zoom--disabled .red-zoom__frame,\n.red-zoom--style--overlay.red-zoom--disabled .red-zoom__lens,\n.red-zoom--style--overlay.red-zoom--disabled .red-zoom__error {\n  transition-duration: 0s !important;\n  opacity: 0 !important;\n}\n\n.zoom {\n  cursor: crosshair;\n}", "/*\r\n *  Owl Carousel - Animate Plugin\r\n */\r\n.owl-carousel{\r\n\t.animated {\r\n\t\tanimation-duration: 1000ms;\r\n\t\tanimation-fill-mode: both;\r\n\t}\r\n\t.owl-animated-in {\r\n\t\tz-index: 0;\r\n\t}\r\n\t.owl-animated-out {\r\n\t\tz-index: 1;\r\n\t}\r\n\t.fadeOut {\r\n\t\tanimation-name: fadeOut;\r\n\t}\r\n}\r\n\r\n@keyframes fadeOut {\r\n\t0% {\r\n\t\topacity: 1;\r\n\t}\r\n\r\n\t100% {\r\n\t\topacity: 0;\r\n\t}\r\n}\r\n", "/*\r\n * \tOwl Carousel - Auto Height Plugin\r\n */\r\n\r\n.owl-height {\r\n\ttransition: height 500ms ease-in-out;\r\n}\r\n", "/*\r\n * \tOwl Carousel - Lazy Load Plugin\r\n */\r\n\r\n.owl-carousel {\r\n\t.owl-item {\r\n\t\t.owl-lazy {\r\n\t\t\t\t// opacity: 0;\r\n\t\t\t\ttransition: opacity 400ms ease;\r\n\t\t}\r\n\r\n\t\t/**\r\n\t\t\tThis is introduced due to a bug in IE11 where lazy loading combined with autoheight plugin causes a wrong\r\n\t\t\tcalculation of the height of the owl-item that breaks page layouts\r\n\t\t */\r\n\t\t.owl-lazy[src^=\"\"], .owl-lazy:not([src]) {\r\n\t\t\tmax-height: 0;\r\n\t\t}\r\n\r\n\t\timg.owl-lazy {\r\n\t\t\ttransform-style: preserve-3d;\r\n\t\t}\r\n\t}\r\n}\r\n\r\n", "*,\r\n:after,\r\n:before {\r\n    box-sizing: border-box;\r\n}\r\n\r\nhtml, body {\r\n    padding: 0;\r\n    margin: 0;\r\n    height: 100%;\r\n}\r\n\r\nbody {\r\n    color: #333;\r\n    background: #fafafa;\r\n    backface-visibility: hidden;\r\n    font-size: 16px;\r\n    font-weight: 400;\r\n    font-family: Roboto, sans-serif;\r\n    line-height: 1.5;\r\n    overflow-y: scroll;\r\n}\r\n\r\na {\r\n    color: #e50032;\r\n    text-decoration: none;\r\n}\r\na:hover {\r\n    text-decoration: underline;\r\n}\r\n", ".angular-logo {\r\n}\r\n.angular-logo__image {\r\n    display: block;\r\n    margin: 0 auto;\r\n}\r\n.angular-logo__part-one {\r\n    fill: #dd0031;\r\n}\r\n.angular-logo__part-two {\r\n    fill: #c3002f;\r\n}\r\n.angular-logo__letter {\r\n    fill: #fff;\r\n}\r\n", ".logo {\r\n    display: block;\r\n}\r\n.logo__part-one {\r\n    fill: #e50032;\r\n}\r\n.logo__part-two {\r\n    fill: #303040;\r\n}\r\n", ".intro {\r\n    max-width: 480px;\r\n    margin: 0 auto;\r\n    padding: 56px 0 92px;\r\n    text-align: center;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n.intro__logo {\r\n    margin: 0 auto;\r\n}\r\n.intro__version {\r\n    font-size: 14px;\r\n    padding: 20px 0 14px;\r\n\r\n    a {\r\n        color: #6f7275;\r\n        text-decoration: none;\r\n    }\r\n    a:hover {\r\n        text-decoration: underline;\r\n    }\r\n}\r\n.intro__text {\r\n    font-size: 17px;\r\n    line-height: 29px;\r\n}\r\n.intro__code {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    margin-top: 16px;\r\n\r\n    code {\r\n        background: #ebebeb;\r\n        color: #666;\r\n        font-family: 'Courier New', sans-serif;\r\n        font-size: 14px;\r\n        padding: 2px 9px;\r\n        border-radius: 2px;\r\n        cursor: pointer;\r\n        transition:\r\n            background .15s,\r\n            color .15s;\r\n\r\n        &:hover {\r\n            background: #e5e5e5;\r\n            color: inherit;\r\n        }\r\n        &:active {\r\n            background: #e0e0e0;\r\n            color: inherit;\r\n        }\r\n    }\r\n}\r\n.intro__code-caption {\r\n    font-size: 10px;\r\n    line-height: 1;\r\n    text-transform: uppercase;\r\n    color: #a6a6a6;\r\n    margin-top: 8px;\r\n}\r\n", ".section {\r\n    max-width: 920px;\r\n    display: block;\r\n    margin: 64px auto 0;\r\n}\r\n", ".example {\r\n    max-width: 920px;\r\n    margin: 0 auto;\r\n    display: block;\r\n\r\n    & + & {\r\n        margin-top: 64px;\r\n    }\r\n}\r\n.example__body {\r\n    display: flex;\r\n}\r\n.example__image {\r\n    width: 320px;\r\n\r\n    img {\r\n        display: block;\r\n    }\r\n}\r\n.example__content {\r\n    margin-left: 56px;\r\n    margin-top: 20px;\r\n    flex-grow: 1;\r\n    width: calc(100% - 320px - 56px);\r\n}\r\n", ".typography {\r\n    font-size: 16px;\r\n\r\n    h1, h2, h3, h4, h5, h6 {\r\n        line-height: 1.25;\r\n        margin: 1.5em 0 1em;\r\n\r\n        &:first-child {\r\n            margin-top: 0;\r\n        }\r\n    }\r\n    ol {\r\n        counter-reset: list;\r\n        list-style: none;\r\n        padding: 0;\r\n\r\n        li {\r\n            margin: .375rem 0;\r\n            counter-increment: list;\r\n\r\n            &:before {\r\n                content: counter(list) '.';\r\n                padding-right: 6px;\r\n            }\r\n        }\r\n    }\r\n    code {\r\n        background: #ebebeb;\r\n        color: #4d4d4d;\r\n        font-family: 'Courier New', sans-serif;\r\n        font-size: 14px;\r\n        padding: 0 4px;\r\n        border-radius: 2px;\r\n    }\r\n    pre {\r\n        margin: 12px 0 20px;\r\n    }\r\n    pre code {\r\n        display: block;\r\n        padding: 4px 9px;\r\n        overflow-x: auto;\r\n    }\r\n    table {\r\n        margin: 1.25rem 0;\r\n        width: 100%;\r\n        border-collapse: collapse;\r\n        font-size: 15px;\r\n    }\r\n    th,\r\n    td {\r\n        border-spacing: 0;\r\n        padding: 7px 12px;\r\n    }\r\n    table,\r\n    th,\r\n    td {\r\n        border: 1px solid #e0e0e0;\r\n    }\r\n    tbody {\r\n        th,\r\n        td {\r\n            text-align: left;\r\n        }\r\n    }\r\n    hr {\r\n        height: 1px;\r\n        background: #e0e0e0;\r\n        border: none;\r\n        margin: 8px 0;\r\n    }\r\n}\r\n", ".copyright {\r\n    text-align: center;\r\n    font-size: 14px;\r\n    padding: 32px 0;\r\n    margin-top: 64px;\r\n}\r\n", ".changelog {\r\n    list-style: none;\r\n    padding: 0;\r\n}\r\n", ".gallery {}\r\n.gallery__thumbnails-list {\r\n    list-style: none;\r\n    padding: 0;\r\n    margin-top: 16px;\r\n    display: flex;\r\n}\r\n.gallery__thumbnail {\r\n    $local-gutter: 12px;\r\n\r\n    width: calc((100% - #{$local-gutter * 2}) / 3);\r\n\r\n    & + & {\r\n        margin-left: $local-gutter;\r\n    }\r\n\r\n    img {\r\n        max-width: 100%;\r\n        opacity: .4;\r\n    }\r\n}\r\n.gallery__thumbnail--current {\r\n    img {\r\n        opacity: 1;\r\n    }\r\n}\r\n", "$local-border-radius: 2.5px;\r\n\r\n.button-group {\r\n    display: flex;\r\n    font-size: 15px;\r\n    user-select: none;\r\n\r\n    label {\r\n        display: block;\r\n    }\r\n\r\n    input {\r\n        position: absolute;\r\n        opacity: 0;\r\n        pointer-events: none;\r\n    }\r\n\r\n    span {\r\n        display: block;\r\n        background: #ebebeb;\r\n        padding: 2px 10px;\r\n    }\r\n\r\n    label:first-child span {\r\n        border-top-left-radius: $local-border-radius;\r\n        border-bottom-left-radius: $local-border-radius;\r\n    }\r\n    label:last-child span {\r\n        border-top-right-radius: $local-border-radius;\r\n        border-bottom-right-radius: $local-border-radius;\r\n    }\r\n\r\n    input:not(:checked) + span {\r\n        cursor: pointer;\r\n\r\n        &:hover {\r\n            background: #e0e0e0;\r\n        }\r\n    }\r\n\r\n    input:not(:checked) + span {\r\n        &:active {\r\n            background: #d9d9d9;\r\n        }\r\n    }\r\n\r\n    input:checked + span {\r\n        background: #e50032;\r\n        color: #fff;\r\n    }\r\n}\r\n", ".radio-image {\r\n    display: flex;\r\n\r\n    label {\r\n        display: block;\r\n    }\r\n\r\n    label + label {\r\n        margin-left: 10px;\r\n    }\r\n\r\n    input {\r\n        position: absolute;\r\n        pointer-events: none;\r\n        opacity: 0;\r\n    }\r\n\r\n    span,\r\n    img {\r\n        display: block;\r\n    }\r\n\r\n    span {\r\n        border: 2px solid #ebebeb;\r\n        border-radius: 2px;\r\n        padding: 6px;\r\n        cursor: pointer;\r\n    }\r\n\r\n    img {\r\n        width: 60px;\r\n        height: 60px;\r\n        object-fit: cover;\r\n        border-radius: 1.5px;\r\n    }\r\n\r\n    input:checked + span {\r\n        border-color: #e50032;\r\n    }\r\n}\r\n", "@keyframes red-zoom-loader-animation {\r\n    from {\r\n        transform: rotateZ(0deg);\r\n    }\r\n    to {\r\n        transform: rotateZ(360deg);\r\n    }\r\n}\r\n\r\n\r\n.red-zoom {\r\n    pointer-events: none;\r\n}\r\n// overlay, error\r\n.red-zoom__overlay,\r\n.red-zoom__error {\r\n    position: absolute;\r\n    left: var(--red-zoom-thumb-x, 0px);\r\n    top: var(--red-zoom-thumb-y, 0px);\r\n    width: var(--red-zoom-thumb-w, 0px);\r\n    height: var(--red-zoom-thumb-h, 0px);\r\n}\r\n// window\r\n.red-zoom__lens {\r\n    display: flex;\r\n}\r\n.red-zoom__lens-body {\r\n    position: relative;\r\n    overflow: hidden;\r\n    flex-grow: 1;\r\n}\r\n.red-zoom__lens-image {\r\n    --red-zoom-lens-image-x: calc(\r\n        var(--red-zoom-lens-image-base-x, 0px) +\r\n        var(--red-zoom-lens-image-center-offset-x, 0px)\r\n    );\r\n    --red-zoom-lens-image-y: calc(\r\n        var(--red-zoom-lens-image-base-y, 0px) +\r\n        var(--red-zoom-lens-image-center-offset-y, 0px)\r\n    );\r\n\r\n    position: absolute;\r\n    transform:\r\n        translateX(var(--red-zoom-lens-image-x))\r\n        translateY(var(--red-zoom-lens-image-y))\r\n        translateZ(0);\r\n}\r\n// lens\r\n.red-zoom__frame {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: var(--red-zoom-frame-w, 0px);\r\n    height: var(--red-zoom-frame-h, 0px);\r\n    transform:\r\n        translateX(var(--red-zoom-frame-x, 0px))\r\n        translateY(var(--red-zoom-frame-y, 0px));\r\n}\r\n.red-zoom__frame-body {\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: hidden;\r\n}\r\n.red-zoom__frame-image {\r\n    width: var(--red-zoom-thumb-w, 0px);\r\n    height: var(--red-zoom-thumb-h, 0px);\r\n    transform:\r\n        translateX(var(--red-zoom-frame-image-x, 0px))\r\n        translateY(var(--red-zoom-frame-image-y, 0px))\r\n        translateZ(0);\r\n}\r\n", "@import './mixins/style-window';\r\n\r\n\r\n.red-zoom--style--window {\r\n    @include red-zoom-style-window(\r\n        $overlay-color: rgba(#e50032, .5)\r\n    );\r\n\r\n    .red-zoom__lens {\r\n        --window-x: calc(var(--red-zoom-thumb-x, 0px) + var(--red-zoom-thumb-w, 0px) + 32px);\r\n\r\n        left: var(--window-x, 0px);\r\n        top: var(--red-zoom-thumb-y, 0px);\r\n        width: var(--red-zoom-thumb-w, 0px);\r\n        height: var(--red-zoom-thumb-h, 0px);\r\n    }\r\n}\r\n", "@import 'common';\r\n\r\n\r\n@mixin red-zoom-style-window(\r\n    $transition-duration:   .5s,\r\n    $overlay-color:         rgba(#fff, .8),\r\n    $loader-color:          #fff,\r\n    $loader-size:           40px,\r\n    // frame\r\n    $frame-visible:         true,\r\n    $frame-bg-color:        transparent,\r\n    $frame-shadow:          0 1px 7px rgba(#000, .25),\r\n    $frame-border-width:    6px,\r\n    $frame-border-color:    #fff,\r\n    $frame-border-position: outside,\r\n    $frame-image-visible:   true,\r\n    // lens\r\n    $lens-bg-color:         #fff,\r\n    $lens-shadow:           0 1px 9px rgba(#000, .2),\r\n    $lens-border-width:     6px,\r\n    $lens-border-color:     #fff,\r\n    $lens-border-position:  outside,\r\n    // error\r\n    $error-overlay-color:   rgba(#f00, .7),\r\n    $error-font-color:      #fff\r\n) {\r\n    visibility: hidden;\r\n    transition: visibility 0s $transition-duration;\r\n\r\n    .red-zoom__overlay {\r\n        background: $overlay-color;\r\n        opacity: 0;\r\n        transition: opacity $transition-duration;\r\n        z-index: 1;\r\n\r\n        &:before {\r\n            @include red-zoom-loader(\r\n                $loader-color: $loader-color,\r\n                $loader-size: $loader-size\r\n            );\r\n        }\r\n    }\r\n\r\n    @if ($frame-visible) {\r\n        .red-zoom__frame {\r\n            opacity: 0;\r\n            transition: opacity $transition-duration;\r\n            z-index: 1;\r\n            background: $frame-bg-color;\r\n\r\n            &:after {\r\n                position: absolute;\r\n                content: '';\r\n                border: $frame-border-width solid $frame-border-color;\r\n                box-sizing: border-box;\r\n                box-shadow: $frame-shadow;\r\n\r\n                @if ($frame-border-position == outside) {\r\n                    left: -$frame-border-width;\r\n                    top: -$frame-border-width;\r\n                    width: calc(100% + #{$frame-border-width * 2});\r\n                    height: calc(100% + #{$frame-border-width * 2});\r\n                } @else if ($frame-border-position == inside) {\r\n                    left: 0;\r\n                    top: 0;\r\n                    width: 100%;\r\n                    height: 100%;\r\n                } @else if ($frame-border-position == center) {\r\n                    left: -#{$frame-border-width / 2};\r\n                    top: -#{$frame-border-width / 2};\r\n                    width: calc(100% + #{$frame-border-width});\r\n                    height: calc(100% + #{$frame-border-width});\r\n                }\r\n            }\r\n        }\r\n        .red-zoom__frame-image {\r\n            @if (not $frame-image-visible) {\r\n                display: none;\r\n            }\r\n        }\r\n    } @else {\r\n        .red-zoom__frame {\r\n            display: none;\r\n        }\r\n    }\r\n\r\n    .red-zoom__lens {\r\n        position: absolute;\r\n        z-index: 2;\r\n        opacity: 0;\r\n        transition: opacity $transition-duration;\r\n        background: $lens-bg-color;\r\n\r\n        &:after {\r\n            position: absolute;\r\n            content: '';\r\n            border: $lens-border-width solid $lens-border-color;\r\n            box-shadow: $lens-shadow;\r\n        }\r\n\r\n        @if ($lens-border-position == outside) {\r\n            &:after {\r\n                left: -$lens-border-width;\r\n                top: -$lens-border-width;\r\n                width: calc(100% + #{$lens-border-width * 2});\r\n                height: calc(100% + #{$lens-border-width * 2});\r\n            }\r\n        } @else if ($lens-border-position == inside) {\r\n            padding: $lens-border-width;\r\n\r\n            &:after {\r\n                left: 0;\r\n                top: 0;\r\n                width: 100%;\r\n                height: 100%;\r\n            }\r\n        } @else if ($lens-border-position == center) {\r\n            padding: $lens-border-width / 2;\r\n\r\n            &:after {\r\n                left: -($lens-border-width / 2);\r\n                top: -($lens-border-width / 2);\r\n                width: calc(100% + #{$lens-border-width});\r\n                height: calc(100% + #{$lens-border-width});\r\n            }\r\n        }\r\n    }\r\n\r\n    @include red-zoom-states($transition-duration, $error-overlay-color, $error-font-color);\r\n}\r\n\r\n@mixin red-zoom-style-window-lens-position() {\r\n\r\n}\r\n", "@mixin red-zoom-loader(\r\n    $loader-color: #fff,\r\n    $loader-size:  40px\r\n) {\r\n    position: relative;\r\n    display: block;\r\n    content: '';\r\n    border-width: 2px;\r\n    border-style: solid;\r\n    border-color: rgba($loader-color, .2);\r\n    border-top-color: rgba($loader-color, 1);\r\n    left: calc(50% - #{$loader-size / 2});\r\n    top: calc(50% - #{$loader-size / 2});\r\n    width: $loader-size;\r\n    height: $loader-size;\r\n    border-radius: 100%;\r\n    animation-name: red-zoom-loader-animation;\r\n    animation-duration: .5s;\r\n    animation-timing-function: linear;\r\n    animation-iteration-count: infinite;\r\n    animation-play-state: paused;\r\n    opacity: 0;\r\n}\r\n\r\n@mixin red-zoom-states(\r\n    $transition-duration,\r\n    $error-overlay-color,\r\n    $error-font-color\r\n) {\r\n    .red-zoom__error {\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        color: $error-font-color;\r\n        padding: 32px;\r\n        visibility: hidden;\r\n        z-index: 1;\r\n        opacity: 0;\r\n        transition:\r\n            visibility 0s $transition-duration,\r\n            opacity $transition-duration;\r\n    }\r\n\r\n    &.red-zoom--status--error {\r\n        .red-zoom__frame,\r\n        .red-zoom__lens {\r\n            position: absolute;\r\n            left: 0;\r\n            top: 0;\r\n            width: 0;\r\n            height: 0;\r\n            display: none;\r\n        }\r\n        .red-zoom__overlay {\r\n            background: $error-overlay-color;\r\n        }\r\n    }\r\n\r\n    &.red-zoom--active {\r\n        transition-delay: 0s;\r\n        visibility: visible;\r\n\r\n        .red-zoom__overlay {\r\n            opacity: 1;\r\n        }\r\n\r\n        &.red-zoom--status--loading {\r\n            .red-zoom__overlay:before {\r\n                opacity: 1;\r\n                animation-play-state: running;\r\n            }\r\n        }\r\n\r\n        &.red-zoom--status--loaded {\r\n            .red-zoom__lens,\r\n            .red-zoom__frame {\r\n                opacity: 1;\r\n            }\r\n        }\r\n\r\n        &.red-zoom--status--error {\r\n            .red-zoom__error {\r\n                visibility: visible;\r\n                transition-delay: 0s;\r\n                opacity: 1;\r\n            }\r\n        }\r\n    }\r\n\r\n    &.red-zoom--disabled {\r\n        transition-delay: 0s;\r\n        visibility: hidden;\r\n\r\n        .red-zoom__overlay,\r\n        .red-zoom__frame,\r\n        .red-zoom__lens,\r\n        .red-zoom__error {\r\n            transition-duration: 0s !important;\r\n            opacity: 0 !important;\r\n        }\r\n    }\r\n}\r\n", "@import './mixins/style-magnifier';\r\n\r\n\r\n.red-zoom--style--magnifier {\r\n    @include red-zoom-style-magnifier();\r\n}\r\n", "@import 'common';\r\n\r\n\r\n@mixin red-zoom-style-magnifier(\r\n    $transition-duration:   .5s,\r\n    $overlay-color:         rgba(#fff, .3),\r\n    $loader-color:          #fff,\r\n    $loader-size:           40px,\r\n    // lens\r\n    $lens-clip:             true,\r\n    $lens-size:             160px,\r\n    $lens-border-radius:    20px,\r\n    $lens-shadow:           0 1px 9px 2px rgba(#000, .8),\r\n    $lens-border-width:     0,\r\n    $lens-border-color:     #fff,\r\n    $lens-border-position:  inside,\r\n    // error\r\n    $error-overlay-color:   rgba(#f00, .7),\r\n    $error-font-color:      #fff\r\n) {\r\n    visibility: hidden;\r\n    transition: visibility 0s $transition-duration;\r\n\r\n    .red-zoom__overlay {\r\n        opacity: 0;\r\n        transition: opacity $transition-duration;\r\n        z-index: 1;\r\n        background: $overlay-color;\r\n\r\n        &:before {\r\n            @include red-zoom-loader(\r\n                $loader-color: $loader-color,\r\n                $loader-size: $loader-size\r\n            );\r\n        }\r\n    }\r\n    .red-zoom__frame {\r\n        display: none;\r\n    }\r\n    .red-zoom__lens {\r\n        position: absolute;\r\n        display: block;\r\n        left: var(--red-zoom-thumb-x);\r\n        top: var(--red-zoom-thumb-y);\r\n        width: var(--red-zoom-thumb-w);\r\n        height: var(--red-zoom-thumb-h);\r\n        z-index: 1;\r\n        opacity: 0;\r\n        transition: opacity $transition-duration;\r\n\r\n        @if ($lens-clip) {\r\n            overflow: hidden;\r\n        }\r\n\r\n        &:after {\r\n            position: absolute;\r\n            content: '';\r\n            box-shadow: $lens-shadow;\r\n            border: $lens-border-width solid $lens-border-color;\r\n            opacity: .5;\r\n\r\n            $local-border-width: 0px;\r\n\r\n            @if ($lens-border-position == outside) {\r\n                $local-border-width: $lens-border-width;\r\n            } @else if ($lens-border-position == center) {\r\n                $local-border-width: $lens-border-width / 2;\r\n            }\r\n\r\n            border-radius: $lens-border-radius + $local-border-width;\r\n            left: calc(var(--red-zoom-mouse-x, 0px) - #{$lens-size / 2 + $local-border-width} - var(--red-zoom-thumb-x));\r\n            top: calc(var(--red-zoom-mouse-y, 0px) - #{$lens-size / 2 + $local-border-width} - var(--red-zoom-thumb-y));\r\n            width: $lens-size + $local-border-width * 2;\r\n            height: $lens-size + $local-border-width * 2;\r\n        }\r\n    }\r\n    .red-zoom__lens-body {\r\n        border-radius: $lens-border-radius;\r\n        left: calc(var(--red-zoom-mouse-x, 0px) - #{$lens-size / 2} - var(--red-zoom-thumb-x));\r\n        top: calc(var(--red-zoom-mouse-y, 0px) - #{$lens-size / 2} - var(--red-zoom-thumb-y));\r\n        width: $lens-size;\r\n        height: $lens-size;\r\n    }\r\n    .red-zoom__lens-image {\r\n        --red-zoom-lens-image-x: calc(\r\n            var(--red-zoom-lens-image-base-x, 0px) +\r\n            var(--red-zoom-lens-image-center-offset-x, 0px) +\r\n            var(--red-zoom-lens-image-frame-offset-x, 0px)\r\n        );\r\n        --red-zoom-lens-image-y: calc(\r\n            var(--red-zoom-lens-image-base-y, 0px) +\r\n            var(--red-zoom-lens-image-center-offset-y, 0px) +\r\n            var(--red-zoom-lens-image-frame-offset-y, 0px)\r\n        );\r\n    }\r\n\r\n    @include red-zoom-states($transition-duration, $error-overlay-color, $error-font-color);\r\n}\r\n", "@import './mixins/style-overlay';\r\n\r\n.red-zoom--style--overlay {\r\n    @include red-zoom-style-overlay();\r\n}\r\n", "@import 'common';\r\n\r\n\r\n@mixin red-zoom-style-overlay(\r\n    $transition-duration:   .5s,\r\n    $overlay-color:         rgba(#fff, .3),\r\n    $loader-color:          #fff,\r\n    $loader-size:           40px,\r\n    // error\r\n    $error-overlay-color:   rgba(#f00, .7),\r\n    $error-font-color:      #fff\r\n) {\r\n    visibility: hidden;\r\n    transition: visibility 0s $transition-duration;\r\n\r\n    .red-zoom__overlay {\r\n        opacity: 0;\r\n        transition: opacity $transition-duration;\r\n        z-index: 1;\r\n        background: $overlay-color;\r\n\r\n        &:before {\r\n            @include red-zoom-loader(\r\n                $loader-color: $loader-color,\r\n                $loader-size: $loader-size\r\n            );\r\n        }\r\n    }\r\n    .red-zoom__frame {\r\n        display: none;\r\n    }\r\n    .red-zoom__lens {\r\n        position: absolute;\r\n        left: var(--red-zoom-thumb-x);\r\n        top: var(--red-zoom-thumb-y);\r\n        width: var(--red-zoom-thumb-w);\r\n        height: var(--red-zoom-thumb-h);\r\n        overflow: hidden;\r\n        z-index: 1;\r\n        opacity: 0;\r\n        transition: opacity $transition-duration;\r\n    }\r\n\r\n    @include red-zoom-states($transition-duration, $error-overlay-color, $error-font-color);\r\n}\r\n"]
    }]); // Exports

    module.exports = exports;
    /***/
  },

  /***/
  "./node_modules/css-loader/dist/runtime/api.js":
  /*!*****************************************************!*\
    !*** ./node_modules/css-loader/dist/runtime/api.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCssLoaderDistRuntimeApiJs(module, exports, __webpack_require__) {
    "use strict";
    /*
      MIT License http://www.opensource.org/licenses/mit-license.php
      Author Tobias Koppers @sokra
    */
    // css base code, injected by the css-loader
    // eslint-disable-next-line func-names

    module.exports = function (useSourceMap) {
      var list = []; // return the list of modules as css string

      list.toString = function toString() {
        return this.map(function (item) {
          var content = cssWithMappingToString(item, useSourceMap);

          if (item[2]) {
            return "@media ".concat(item[2], " {").concat(content, "}");
          }

          return content;
        }).join('');
      }; // import a list of modules into the list
      // eslint-disable-next-line func-names


      list.i = function (modules, mediaQuery, dedupe) {
        if (typeof modules === 'string') {
          // eslint-disable-next-line no-param-reassign
          modules = [[null, modules, '']];
        }

        var alreadyImportedModules = {};

        if (dedupe) {
          for (var i = 0; i < this.length; i++) {
            // eslint-disable-next-line prefer-destructuring
            var id = this[i][0];

            if (id != null) {
              alreadyImportedModules[id] = true;
            }
          }
        }

        for (var _i = 0; _i < modules.length; _i++) {
          var item = [].concat(modules[_i]);

          if (dedupe && alreadyImportedModules[item[0]]) {
            // eslint-disable-next-line no-continue
            continue;
          }

          if (mediaQuery) {
            if (!item[2]) {
              item[2] = mediaQuery;
            } else {
              item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
            }
          }

          list.push(item);
        }
      };

      return list;
    };

    function cssWithMappingToString(item, useSourceMap) {
      var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

      var cssMapping = item[3];

      if (!cssMapping) {
        return content;
      }

      if (useSourceMap && typeof btoa === 'function') {
        var sourceMapping = toComment(cssMapping);
        var sourceURLs = cssMapping.sources.map(function (source) {
          return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
        });
        return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
      }

      return [content].join('\n');
    } // Adapted from convert-source-map (MIT)


    function toComment(sourceMap) {
      // eslint-disable-next-line no-undef
      var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
      var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
      return "/*# ".concat(data, " */");
    }
    /***/

  },

  /***/
  "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
  /*!****************************************************************************!*\
    !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
    \****************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesStyleLoaderDistRuntimeInjectStylesIntoStyleTagJs(module, exports, __webpack_require__) {
    "use strict";

    var isOldIE = function isOldIE() {
      var memo;
      return function memorize() {
        if (typeof memo === 'undefined') {
          // Test for IE <= 9 as proposed by Browserhacks
          // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
          // Tests for existence of standard globals is to allow style-loader
          // to operate correctly into non-standard environments
          // @see https://github.com/webpack-contrib/style-loader/issues/177
          memo = Boolean(window && document && document.all && !window.atob);
        }

        return memo;
      };
    }();

    var getTarget = function getTarget() {
      var memo = {};
      return function memorize(target) {
        if (typeof memo[target] === 'undefined') {
          var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

          if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
            try {
              // This will throw an exception if access to iframe is blocked
              // due to cross-origin restrictions
              styleTarget = styleTarget.contentDocument.head;
            } catch (e) {
              // istanbul ignore next
              styleTarget = null;
            }
          }

          memo[target] = styleTarget;
        }

        return memo[target];
      };
    }();

    var stylesInDom = [];

    function getIndexByIdentifier(identifier) {
      var result = -1;

      for (var i = 0; i < stylesInDom.length; i++) {
        if (stylesInDom[i].identifier === identifier) {
          result = i;
          break;
        }
      }

      return result;
    }

    function modulesToDom(list, options) {
      var idCountMap = {};
      var identifiers = [];

      for (var i = 0; i < list.length; i++) {
        var item = list[i];
        var id = options.base ? item[0] + options.base : item[0];
        var count = idCountMap[id] || 0;
        var identifier = "".concat(id, " ").concat(count);
        idCountMap[id] = count + 1;
        var index = getIndexByIdentifier(identifier);
        var obj = {
          css: item[1],
          media: item[2],
          sourceMap: item[3]
        };

        if (index !== -1) {
          stylesInDom[index].references++;
          stylesInDom[index].updater(obj);
        } else {
          stylesInDom.push({
            identifier: identifier,
            updater: addStyle(obj, options),
            references: 1
          });
        }

        identifiers.push(identifier);
      }

      return identifiers;
    }

    function insertStyleElement(options) {
      var style = document.createElement('style');
      var attributes = options.attributes || {};

      if (typeof attributes.nonce === 'undefined') {
        var nonce = true ? __webpack_require__.nc : undefined;

        if (nonce) {
          attributes.nonce = nonce;
        }
      }

      Object.keys(attributes).forEach(function (key) {
        style.setAttribute(key, attributes[key]);
      });

      if (typeof options.insert === 'function') {
        options.insert(style);
      } else {
        var target = getTarget(options.insert || 'head');

        if (!target) {
          throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        }

        target.appendChild(style);
      }

      return style;
    }

    function removeStyleElement(style) {
      // istanbul ignore if
      if (style.parentNode === null) {
        return false;
      }

      style.parentNode.removeChild(style);
    }
    /* istanbul ignore next  */


    var replaceText = function replaceText() {
      var textStore = [];
      return function replace(index, replacement) {
        textStore[index] = replacement;
        return textStore.filter(Boolean).join('\n');
      };
    }();

    function applyToSingletonTag(style, index, remove, obj) {
      var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

      /* istanbul ignore if  */

      if (style.styleSheet) {
        style.styleSheet.cssText = replaceText(index, css);
      } else {
        var cssNode = document.createTextNode(css);
        var childNodes = style.childNodes;

        if (childNodes[index]) {
          style.removeChild(childNodes[index]);
        }

        if (childNodes.length) {
          style.insertBefore(cssNode, childNodes[index]);
        } else {
          style.appendChild(cssNode);
        }
      }
    }

    function applyToTag(style, options, obj) {
      var css = obj.css;
      var media = obj.media;
      var sourceMap = obj.sourceMap;

      if (media) {
        style.setAttribute('media', media);
      } else {
        style.removeAttribute('media');
      }

      if (sourceMap && btoa) {
        css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
      } // For old IE

      /* istanbul ignore if  */


      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        while (style.firstChild) {
          style.removeChild(style.firstChild);
        }

        style.appendChild(document.createTextNode(css));
      }
    }

    var singleton = null;
    var singletonCounter = 0;

    function addStyle(obj, options) {
      var style;
      var update;
      var remove;

      if (options.singleton) {
        var styleIndex = singletonCounter++;
        style = singleton || (singleton = insertStyleElement(options));
        update = applyToSingletonTag.bind(null, style, styleIndex, false);
        remove = applyToSingletonTag.bind(null, style, styleIndex, true);
      } else {
        style = insertStyleElement(options);
        update = applyToTag.bind(null, style, options);

        remove = function remove() {
          removeStyleElement(style);
        };
      }

      update(obj);
      return function updateStyle(newObj) {
        if (newObj) {
          if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
            return;
          }

          update(obj = newObj);
        } else {
          remove();
        }
      };
    }

    module.exports = function (list, options) {
      options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
      // tags it will allow on a page

      if (!options.singleton && typeof options.singleton !== 'boolean') {
        options.singleton = isOldIE();
      }

      list = list || [];
      var lastIdentifiers = modulesToDom(list, options);
      return function update(newList) {
        newList = newList || [];

        if (Object.prototype.toString.call(newList) !== '[object Array]') {
          return;
        }

        for (var i = 0; i < lastIdentifiers.length; i++) {
          var identifier = lastIdentifiers[i];
          var index = getIndexByIdentifier(identifier);
          stylesInDom[index].references--;
        }

        var newLastIdentifiers = modulesToDom(newList, options);

        for (var _i = 0; _i < lastIdentifiers.length; _i++) {
          var _identifier = lastIdentifiers[_i];

          var _index = getIndexByIdentifier(_identifier);

          if (stylesInDom[_index].references === 0) {
            stylesInDom[_index].updater();

            stylesInDom.splice(_index, 1);
          }
        }

        lastIdentifiers = newLastIdentifiers;
      };
    };
    /***/

  },

  /***/
  "./src/styles.scss":
  /*!*************************!*\
    !*** ./src/styles.scss ***!
    \*************************/

  /*! no static exports found */

  /***/
  function srcStylesScss(module, exports, __webpack_require__) {
    var api = __webpack_require__(
    /*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */
    "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");

    var content = __webpack_require__(
    /*! !../node_modules/css-loader/dist/cjs.js??ref--13-1!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/dist/cjs.js??ref--13-3!./styles.scss */
    "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles.scss");

    content = content.__esModule ? content["default"] : content;

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    var options = {};
    options.insert = "head";
    options.singleton = false;
    var update = api(content, options);
    var exported = content.locals ? content.locals : {};
    module.exports = exported;
    /***/
  },

  /***/
  3:
  /*!*******************************!*\
    !*** multi ./src/styles.scss ***!
    \*******************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! F:\projects\red-zoom\src\styles.scss */
    "./src/styles.scss");
    /***/
  }
}, [[3, "runtime"]]]);
//# sourceMappingURL=styles-es5.js.map