(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-script-revision-script-revision-module"],{

/***/ "./node_modules/bs-stepper/dist/js/bs-stepper.js":
/*!*******************************************************!*\
  !*** ./node_modules/bs-stepper/dist/js/bs-stepper.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * bsStepper v1.7.0 (https://github.com/Johann-S/bs-stepper)
 * Copyright 2018 - 2019 Johann-S <johann.servoire@gmail.com>
 * Licensed under MIT (https://github.com/Johann-S/bs-stepper/blob/master/LICENSE)
 */
(function (global, factory) {
   true ? module.exports = factory() :
  undefined;
}(this, function () { 'use strict';

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  var matches = window.Element.prototype.matches;

  var closest = function closest(element, selector) {
    return element.closest(selector);
  };

  var WinEvent = function WinEvent(inType, params) {
    return new window.Event(inType, params);
  };

  var createCustomEvent = function createCustomEvent(eventName, params) {
    var cEvent = new window.CustomEvent(eventName, params);
    return cEvent;
  };
  /* istanbul ignore next */


  function polyfill() {
    if (!window.Element.prototype.matches) {
      matches = window.Element.prototype.msMatchesSelector || window.Element.prototype.webkitMatchesSelector;
    }

    if (!window.Element.prototype.closest) {
      closest = function closest(element, selector) {
        if (!document.documentElement.contains(element)) {
          return null;
        }

        do {
          if (matches.call(element, selector)) {
            return element;
          }

          element = element.parentElement || element.parentNode;
        } while (element !== null && element.nodeType === 1);

        return null;
      };
    }

    if (!window.Event || typeof window.Event !== 'function') {
      WinEvent = function WinEvent(inType, params) {
        params = params || {};
        var e = document.createEvent('Event');
        e.initEvent(inType, Boolean(params.bubbles), Boolean(params.cancelable));
        return e;
      };
    }

    if (typeof window.CustomEvent !== 'function') {
      var originPreventDefault = window.Event.prototype.preventDefault;

      createCustomEvent = function createCustomEvent(eventName, params) {
        var evt = document.createEvent('CustomEvent');
        params = params || {
          bubbles: false,
          cancelable: false,
          detail: null
        };
        evt.initCustomEvent(eventName, params.bubbles, params.cancelable, params.detail);

        evt.preventDefault = function () {
          if (!this.cancelable) {
            return;
          }

          originPreventDefault.call(this);
          Object.defineProperty(this, 'defaultPrevented', {
            get: function get() {
              return true;
            }
          });
        };

        return evt;
      };
    }
  }

  polyfill();

  var MILLISECONDS_MULTIPLIER = 1000;
  var ClassName = {
    ACTIVE: 'active',
    LINEAR: 'linear',
    BLOCK: 'dstepper-block',
    NONE: 'dstepper-none',
    FADE: 'fade',
    VERTICAL: 'vertical'
  };
  var transitionEndEvent = 'transitionend';
  var customProperty = 'bsStepper';

  var show = function show(stepperNode, indexStep, options, done) {
    var stepper = stepperNode[customProperty];

    if (stepper._steps[indexStep].classList.contains(ClassName.ACTIVE) || stepper._stepsContents[indexStep].classList.contains(ClassName.ACTIVE)) {
      return;
    }

    var showEvent = createCustomEvent('show.bs-stepper', {
      cancelable: true,
      detail: {
        from: stepper._currentIndex,
        to: indexStep,
        indexStep: indexStep
      }
    });
    stepperNode.dispatchEvent(showEvent);

    var activeStep = stepper._steps.filter(function (step) {
      return step.classList.contains(ClassName.ACTIVE);
    });

    var activeContent = stepper._stepsContents.filter(function (content) {
      return content.classList.contains(ClassName.ACTIVE);
    });

    if (showEvent.defaultPrevented) {
      return;
    }

    if (activeStep.length) {
      activeStep[0].classList.remove(ClassName.ACTIVE);
    }

    if (activeContent.length) {
      activeContent[0].classList.remove(ClassName.ACTIVE);

      if (!stepperNode.classList.contains(ClassName.VERTICAL) && !stepper.options.animation) {
        activeContent[0].classList.remove(ClassName.BLOCK);
      }
    }

    showStep(stepperNode, stepper._steps[indexStep], stepper._steps, options);
    showContent(stepperNode, stepper._stepsContents[indexStep], stepper._stepsContents, activeContent, done);
  };

  var showStep = function showStep(stepperNode, step, stepList, options) {
    stepList.forEach(function (step) {
      var trigger = step.querySelector(options.selectors.trigger);
      trigger.setAttribute('aria-selected', 'false'); // if stepper is in linear mode, set disabled attribute on the trigger

      if (stepperNode.classList.contains(ClassName.LINEAR)) {
        trigger.setAttribute('disabled', 'disabled');
      }
    });
    step.classList.add(ClassName.ACTIVE);
    var currentTrigger = step.querySelector(options.selectors.trigger);
    currentTrigger.setAttribute('aria-selected', 'true'); // if stepper is in linear mode, remove disabled attribute on current

    if (stepperNode.classList.contains(ClassName.LINEAR)) {
      currentTrigger.removeAttribute('disabled');
    }
  };

  var showContent = function showContent(stepperNode, content, contentList, activeContent, done) {
    var stepper = stepperNode[customProperty];
    var toIndex = contentList.indexOf(content);
    var shownEvent = createCustomEvent('shown.bs-stepper', {
      cancelable: true,
      detail: {
        from: stepper._currentIndex,
        to: toIndex,
        indexStep: toIndex
      }
    });

    function complete() {
      content.classList.add(ClassName.BLOCK);
      content.removeEventListener(transitionEndEvent, complete);
      stepperNode.dispatchEvent(shownEvent);
      done();
    }

    if (content.classList.contains(ClassName.FADE)) {
      content.classList.remove(ClassName.NONE);
      var duration = getTransitionDurationFromElement(content);
      content.addEventListener(transitionEndEvent, complete);

      if (activeContent.length) {
        activeContent[0].classList.add(ClassName.NONE);
      }

      content.classList.add(ClassName.ACTIVE);
      emulateTransitionEnd(content, duration);
    } else {
      content.classList.add(ClassName.ACTIVE);
      content.classList.add(ClassName.BLOCK);
      stepperNode.dispatchEvent(shownEvent);
      done();
    }
  };

  var getTransitionDurationFromElement = function getTransitionDurationFromElement(element) {
    if (!element) {
      return 0;
    } // Get transition-duration of the element


    var transitionDuration = window.getComputedStyle(element).transitionDuration;
    var floatTransitionDuration = parseFloat(transitionDuration); // Return 0 if element or transition duration is not found

    if (!floatTransitionDuration) {
      return 0;
    } // If multiple durations are defined, take the first


    transitionDuration = transitionDuration.split(',')[0];
    return parseFloat(transitionDuration) * MILLISECONDS_MULTIPLIER;
  };

  var emulateTransitionEnd = function emulateTransitionEnd(element, duration) {
    var called = false;
    var durationPadding = 5;
    var emulatedDuration = duration + durationPadding;

    function listener() {
      called = true;
      element.removeEventListener(transitionEndEvent, listener);
    }

    element.addEventListener(transitionEndEvent, listener);
    window.setTimeout(function () {
      if (!called) {
        element.dispatchEvent(WinEvent(transitionEndEvent));
      }

      element.removeEventListener(transitionEndEvent, listener);
    }, emulatedDuration);
  };

  var detectAnimation = function detectAnimation(contentList, options) {
    if (options.animation) {
      contentList.forEach(function (content) {
        content.classList.add(ClassName.FADE);
        content.classList.add(ClassName.NONE);
      });
    }
  };

  var buildClickStepLinearListener = function buildClickStepLinearListener() {
    return function clickStepLinearListener(event) {
      event.preventDefault();
    };
  };

  var buildClickStepNonLinearListener = function buildClickStepNonLinearListener(options) {
    return function clickStepNonLinearListener(event) {
      event.preventDefault();
      var step = closest(event.target, options.selectors.steps);
      var stepperNode = closest(step, options.selectors.stepper);
      var stepper = stepperNode[customProperty];

      var stepIndex = stepper._steps.indexOf(step);

      show(stepperNode, stepIndex, options, function () {
        stepper._currentIndex = stepIndex;
      });
    };
  };

  var DEFAULT_OPTIONS = {
    linear: true,
    animation: false,
    selectors: {
      steps: '.step',
      trigger: '.step-trigger',
      stepper: '.bs-stepper'
    }
  };

  var Stepper =
  /*#__PURE__*/
  function () {
    function Stepper(element, _options) {
      var _this = this;

      if (_options === void 0) {
        _options = {};
      }

      this._element = element;
      this._currentIndex = 0;
      this._stepsContents = [];
      this.options = _extends({}, DEFAULT_OPTIONS, {}, _options);
      this.options.selectors = _extends({}, DEFAULT_OPTIONS.selectors, {}, this.options.selectors);

      if (this.options.linear) {
        this._element.classList.add(ClassName.LINEAR);
      }

      this._steps = [].slice.call(this._element.querySelectorAll(this.options.selectors.steps));

      this._steps.filter(function (step) {
        return step.hasAttribute('data-target');
      }).forEach(function (step) {
        _this._stepsContents.push(_this._element.querySelector(step.getAttribute('data-target')));
      });

      detectAnimation(this._stepsContents, this.options);

      this._setLinkListeners();

      Object.defineProperty(this._element, customProperty, {
        value: this,
        writable: true
      });

      if (this._steps.length) {
        show(this._element, this._currentIndex, this.options, function () {});
      }
    } // Private


    var _proto = Stepper.prototype;

    _proto._setLinkListeners = function _setLinkListeners() {
      var _this2 = this;

      this._steps.forEach(function (step) {
        var trigger = step.querySelector(_this2.options.selectors.trigger);

        if (_this2.options.linear) {
          _this2._clickStepLinearListener = buildClickStepLinearListener(_this2.options);
          trigger.addEventListener('click', _this2._clickStepLinearListener);
        } else {
          _this2._clickStepNonLinearListener = buildClickStepNonLinearListener(_this2.options);
          trigger.addEventListener('click', _this2._clickStepNonLinearListener);
        }
      });
    } // Public
    ;

    _proto.next = function next() {
      var _this3 = this;

      var nextStep = this._currentIndex + 1 <= this._steps.length - 1 ? this._currentIndex + 1 : this._steps.length - 1;
      show(this._element, nextStep, this.options, function () {
        _this3._currentIndex = nextStep;
      });
    };

    _proto.previous = function previous() {
      var _this4 = this;

      var previousStep = this._currentIndex - 1 >= 0 ? this._currentIndex - 1 : 0;
      show(this._element, previousStep, this.options, function () {
        _this4._currentIndex = previousStep;
      });
    };

    _proto.to = function to(stepNumber) {
      var _this5 = this;

      var tempIndex = stepNumber - 1;
      var nextStep = tempIndex >= 0 && tempIndex < this._steps.length ? tempIndex : 0;
      show(this._element, nextStep, this.options, function () {
        _this5._currentIndex = nextStep;
      });
    };

    _proto.reset = function reset() {
      var _this6 = this;

      show(this._element, 0, this.options, function () {
        _this6._currentIndex = 0;
      });
    };

    _proto.destroy = function destroy() {
      var _this7 = this;

      this._steps.forEach(function (step) {
        var trigger = step.querySelector(_this7.options.selectors.trigger);

        if (_this7.options.linear) {
          trigger.removeEventListener('click', _this7._clickStepLinearListener);
        } else {
          trigger.removeEventListener('click', _this7._clickStepNonLinearListener);
        }
      });

      this._element[customProperty] = undefined;
      this._element = undefined;
      this._currentIndex = undefined;
      this._steps = undefined;
      this._stepsContents = undefined;
      this._clickStepLinearListener = undefined;
      this._clickStepNonLinearListener = undefined;
    };

    return Stepper;
  }();

  return Stepper;

}));
//# sourceMappingURL=bs-stepper.js.map


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/script-revision/add-script/add-script.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/script-revision/add-script/add-script.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"welcome-container\">\n  <div class=\"row\">\n    <div class=\"col-xl-12 col-lg-12 col-md-12 col-12\">\n      <div class=\"header-title\">\n        <h2>Welcome to Script Revision</h2>\n      </div>\n      <div class=\"top-nav\">\n        <a>About</a>\n        <a>Script Guide</a>\n        <a>conditions and restrictions</a>\n        <a>before you start</a>\n        <a>need help?</a>\n      </div>\n\n      <div>\n        <div class=\"container\">\n          <div id=\"stepper1\" class=\"bs-stepper\">\n            <div class=\"bs-stepper-header\">\n              <div class=\"step\" data-target=\"#test-l-1\">\n                <button class=\"step-trigger\">\n                  <!-- <span class=\"bs-stepper-circle\">1</span> -->\n                  <span class=\"bs-stepper-label\">Let's collect some info</span>\n                </button>\n              </div>\n              <div class=\"step\" data-target=\"#test-l-2\">\n                <button class=\"step-trigger\">\n                  <!-- <span class=\"bs-stepper-circle\">2</span> -->\n                  <span class=\"bs-stepper-label\">Submit your materials</span>\n                </button>\n              </div>\n              <div class=\"step\" data-target=\"#test-l-3\">\n                <button class=\"step-trigger\">\n                  <!-- <span class=\"bs-stepper-circle\">2</span> -->\n                  <span class=\"bs-stepper-label\">Terms and conditions</span>\n                </button>\n              </div>\n              <div class=\"step\" data-target=\"#test-l-4\">\n                <button class=\"step-trigger\">\n                  <!-- <span class=\"bs-stepper-circle\">3</span> -->\n                  <span class=\"bs-stepper-label\">We are done!</span>\n                </button>\n              </div>\n            </div>\n            <div class=\"bs-stepper-content\">\n              <form (ngSubmit)=\"onSubmit()\">\n                <div id=\"test-l-1\" class=\"content\">\n                  <div class=\"row text-left\">\n                    <div class=\"col-sm-12\">\n                      <div class=\"\">\n                        <div class=\"card-content\">\n                          <div class=\"form-content\">\n                            <form\n                              [formGroup]=\"regularForm\"\n                              (ngSubmit)=\"onReactiveFormSubmit()\"\n                              novalidate\n                            >\n                              <div class=\"col-xl-4 col-lg-4 col-md-6 col-6\">\n                                <div class=\"form-group\">\n                                  <label for=\"inputname\"\n                                    >What is your script name?</label\n                                  >\n                                  <div class=\"input-content\">\n                                    <i class=\"icon-check\" id=\"icon\" [ngClass]=\"{'success-icon': !f.name.invalid && f.name.touched && f.name.dirty}\"></i>\n                                    <input\n                                      type=\"text\"\n                                      class=\"form-control\"\n                                      id=\"inputname\"\n                                      formControlName=\"name\"\n                                      \n                                    />\n                                  </div>\n                                </div>\n\n                                <div class=\"form-group\">\n                                  <label for=\"inputname\"\n                                    >What is your script Language?</label\n                                  >\n                                  <div class=\"input-content\">\n                                    <i class=\"icon-check\" id=\"icon\" [ngClass]=\"{'success-icon': selectedLanguage}\"></i>\n                                    <ng-select [items]=\"languages\" bindLabel=\"name\" placeholder=\"Choose language\" formControlName=\"language\" [(ngModel)]=\"selectedLanguage\">\n                                    </ng-select>\n                                  \n                                  \n                                   \n                                  </div>\n                                </div>\n\n                                <div class=\"form-group\">\n                                  <label for=\"inputname\"\n                                    >Will your script be translated into other\n                                    Languages?</label\n                                  >\n                                  <div class=\"input-content\">\n                                    <i class=\"icon-check\" id=\"icon\" [ngClass]=\"{'success-icon':!f.formcheck1.errors?.required && f.formcheck1.dirty}\"></i>\n                                    <div class=\"\" style=\"margin-top: 6px;\">\n                                      <div\n                                        class=\"custom-control custom-radio d-block float-left\"\n                                      >\n                                        <input\n                                          type=\"radio\"\n                                          id=\"radio1\"\n                                          name=\"formcheck1\"\n                                          value=\"yes\"\n                                          class=\"custom-control-input form-control\"\n                                          formControlName=\"formcheck1\"\n                                          \n                                        />\n                                        <label\n                                          class=\"custom-control-label\"\n                                          for=\"radio1\"\n                                          >Yes</label\n                                        >\n                                      </div>\n                                      <div\n                                        class=\"custom-control custom-radio d-block float-left ml-1\"\n                                      >\n                                        <input\n                                          type=\"radio\"\n                                          id=\"radio2\"\n                                          name=\"formcheck1\"\n                                          value=\"no\"\n                                          formControlName=\"formcheck1\"\n                                          class=\"custom-control-input form-control\"\n                                        />\n                                        <label\n                                          class=\"custom-control-label\"\n                                          for=\"radio2\"\n                                          >No</label\n                                        >\n                                      </div>\n                                    </div>\n                                  </div>\n                                </div>\n\n                                <div class=\"form-group\">\n                                  <label for=\"inputname\"\n                                    >What is your script genra?</label\n                                  >\n                                  <div class=\"input-content\">\n                                    <i class=\"icon-check\" id=\"icon\" [ngClass]=\"{'success-icon': selectedgenra}\"></i>\n                                    <ng-select [items]=\"genra\" bindLabel=\"name\" placeholder=\"Choose genra\" formControlName=\"genra\"                                    [(ngModel)]=\"selectedgenra\">\n                                    </ng-select>\n                                  </div>\n                                </div>\n\n                                <div class=\"form-group\">\n                                  <label for=\"inputname\"\n                                    >What is your script sub genra?</label\n                                  >\n                                  <div class=\"input-content\">\n                                    <i class=\"icon-check\" id=\"icon\" [ngClass]=\"{'success-icon': selectedSubgenra}\"></i>\n                                    <ng-select [items]=\"subgenra\" bindLabel=\"name\"  placeholder=\"Choose Sub genra\" formControlName=\"subGenra\" [(ngModel)]=\"selectedSubgenra\">\n                                    </ng-select>\n                                  </div>\n                                </div>\n\n                                <div class=\"form-group\">\n                                  <label for=\"inputname\"\n                                    >How do you rate your script content?</label\n                                  >\n                                  <div class=\"input-content\">\n                                    <i class=\"icon-check\" id=\"icon\" [ngClass]=\"{'success-icon': selectedeating}\"></i>\n                                    <ng-select [items]=\"rating\" bindLabel=\"name\" placeholder=\"Choose Rating\" formControlName=\"movie\" [(ngModel)]=\"selectedeating\">\n                                    </ng-select>\n                                  </div>\n                                </div>\n                              </div>\n                              <div class=\"col-xl-4 col-lg-4 col-md-6 col-6\">\n                                <div class=\"form-group\">\n                                  <label for=\"inputname\"\n                                    >Your script is for:</label\n                                  >\n                                  <div class=\"input-content\">\n                                    <i class=\"icon-check\" id=\"icon\" [ngClass]=\"{'success-icon':!f.formcheck2.errors?.required && f.formcheck2.dirty}\"></i>\n                                    <div class=\"\" style=\"margin-top: 6px;\">\n                                      <div\n                                        class=\"custom-control custom-radio d-block float-left\" style=\"width: 100%;\"\n                                      >\n                                        <input\n                                          type=\"radio\"\n                                          id=\"radio3\"\n                                          name=\"formcheck2\"\n                                          value=\"Feature\"\n                                          formControlName=\"formcheck2\"\n                                          class=\"custom-control-input form-control\"\n                                          \n                                        />\n                                        <label\n                                          class=\"custom-control-label\"\n                                          for=\"radio3\"\n                                          >Feature film</label\n                                        >\n                                      </div>\n                                      <div\n                                        class=\"custom-control custom-radio d-block float-left \" style=\"width: 100%;\"\n                                      >\n                                        <input\n                                          type=\"radio\"\n                                          id=\"radio4\"\n                                          name=\"formcheck2\"\n                                          value=\"Live\"\n                                          formControlName=\"formcheck2\"\n                                          class=\"custom-control-input form-control\"\n                                          \n                                        />\n                                        <label\n                                          class=\"custom-control-label\"\n                                          for=\"radio4\"\n                                          >Live-action TV series</label\n                                        >\n                                      </div>\n                                      <div\n                                      class=\"custom-control custom-radio d-block float-left \" style=\"width: 100%;\"\n                                    >\n                                      <input\n                                        type=\"radio\"\n                                        id=\"radio5\"\n                                        name=\"formcheck2\"\n                                        formControlName=\"formcheck2\"\n                                        value=\"short\"\n                                        class=\"custom-control-input form-control\"\n                                        \n                                      />\n                                      <label\n                                        class=\"custom-control-label\"\n                                        for=\"radio5\"\n                                        >short- form film and video content</label\n                                      >\n                                    </div>\n                                    <div\n                                    class=\"custom-control custom-radio d-block float-left \" style=\"width: 100%;\"\n                                  >\n                                    <input\n                                      type=\"radio\"\n                                      id=\"radio6\"\n                                      name=\"formcheck2\"\n                                      formControlName=\"formcheck2\"\n                                      value=\"Animated\"\n                                      class=\"custom-control-input form-control\"\n                                      \n                                    />\n                                    <label\n                                      class=\"custom-control-label\"\n                                      for=\"radio6\"\n                                      >Animated Film/Series</label\n                                    >\n                                  </div>\n                                  <div\n                                  class=\"custom-control custom-radio d-block float-left \" style=\"width: 100%;\"\n                                >\n                                  <input\n                                    type=\"radio\"\n                                    id=\"radio7\"\n                                    name=\"formcheck2\"\n                                    formControlName=\"formcheck2\"\n                                    value=\"TV\"\n                                    class=\"custom-control-input form-control\"\n                                    \n                                  />\n                                  <label\n                                    class=\"custom-control-label\"\n                                    for=\"radio7\"\n                                    >TV Show</label\n                                  >\n                                </div>\n                                <div\n                                class=\"custom-control custom-radio d-block float-left \" style=\"width: 100%;\"\n                              >\n                                <input\n                                  type=\"radio\"\n                                  id=\"radio8\"\n                                  name=\"formcheck2\"\n                                  formControlName=\"formcheck2\"\n                                  value=\"web\"\n                                  class=\"custom-control-input form-control\"\n                                  \n                                />\n                                <label\n                                  class=\"custom-control-label\"\n                                  for=\"radio8\"\n                                  >Short web series</label\n                                >\n                              </div>\n                                    </div>\n                                  </div>\n                                </div>\n                                <div class=\"form-group\">\n                                  <label for=\"inputname\"\n                                    >Is this script genuinely yours?</label\n                                  >\n                                  <div class=\"input-content\">\n                                    <i class=\"icon-check\" id=\"icon\" [ngClass]=\"{'success-icon':!f.formcheck3.errors?.required && f.formcheck3.dirty}\"></i>\n                                    <div class=\"\" style=\"margin-top: 6px;\">\n                                      <div\n                                        class=\"custom-control custom-radio d-block float-left\"\n                                      >\n                                        <input\n                                          type=\"radio\"\n                                          id=\"radio9\"\n                                          name=\"formcheck3\"\n                                          value=\"Yes\"\n                                          formControlName=\"formcheck3\"\n                                          class=\"custom-control-input form-control\"\n                                          (change)=\"handlechangeScript($event)\"\n                                          \n                                        />\n                                        <label\n                                          class=\"custom-control-label\"\n                                          for=\"radio9\"\n                                          >Yes</label\n                                        >\n                                      </div>\n                                      <div\n                                        class=\"custom-control custom-radio d-block float-left ml-1\"\n                                      >\n                                        <input\n                                          type=\"radio\"\n                                          id=\"radio10\"\n                                          name=\"formcheck3\"\n                                          formControlName=\"formcheck3\"\n                                          value=\"No\"\n                                          (change)=\"handlechangeScript($event)\"\n                                          class=\"custom-control-input form-control\"\n                                          \n                                        />\n                                        <label\n                                          class=\"custom-control-label\"\n                                          for=\"radio10\"\n                                          >No</label\n                                        >\n                                      </div>\n                                    </div>\n                                  </div>\n                                </div>\n                                <div *ngIf=\"showscriptLink\">\n\n                                <div class=\"form-group\">\n                                  <label for=\"inputname\"\n                                    >Your script is based on:</label\n                                  >\n                                  <div class=\"input-content\">\n                                    <i class=\"icon-check\" id=\"icon\" [ngClass]=\"{'success-icon': selectscript}\"></i>\n                                    <ng-select [items]=\"scripts\" bindLabel=\"name\" placeholder=\"Choose script\" formControlName=\"script\" [(ngModel)]=\"selectscript\">\n                                    </ng-select>\n                                  \n                                  \n                                   \n                                  </div>\n                                </div>\n\n                                <div class=\"form-group\">\n                                  <label for=\"inputname\"\n                                    >Link us to the source of your work</label\n                                  >\n                                  <div class=\"input-content\">\n                                    <i class=\"icon-check\" id=\"icon\" [ngClass]=\"{'success-icon': !f.source.invalid && f.source.touched && f.source.dirty}\"></i>\n                                    <input\n                                      type=\"text\"\n                                      class=\"form-control\"\n                                      id=\"inputname\"\n                                      formControlName=\"source\"\n                                      \n                                    />\n                                  </div>\n                                </div>\n\n                               \n                                <div class=\"form-group\">\n                                  <label for=\"inputname\"\n                                    >Do you have an authorization letter to use this work from the owner?</label\n                                  >\n                                  <div class=\"input-content\">\n                                    <i class=\"icon-check\" id=\"icon\" [ngClass]=\"{'success-icon':!f.formcheck4.errors?.required && f.formcheck4.dirty}\"></i>\n                                    <div class=\"\" style=\"margin-top: 6px;\">\n                                      <div\n                                        class=\"custom-control custom-radio d-block float-left\"\n                                      >\n                                        <input\n                                          type=\"radio\"\n                                          id=\"radio11\"\n                                          name=\"formcheck4\"\n                                          value=\"yes\"\n                                          formControlName=\"formcheck4\"\n                                          class=\"custom-control-input form-control\"\n                                          \n                                        />\n                                        <label\n                                          class=\"custom-control-label\"\n                                          for=\"radio11\"\n                                          >Yes</label\n                                        >\n                                      </div>\n                                      <div\n                                        class=\"custom-control custom-radio d-block float-left ml-1\"\n                                      >\n                                        <input\n                                          type=\"radio\"\n                                          id=\"radio12\"\n                                          formControlName=\"formcheck4\"\n                                          name=\"formcheck4\"\n                                          value=\"no\"\n                                          class=\"custom-control-input form-control\"\n                                          \n                                        />\n                                        <label\n                                          class=\"custom-control-label\"\n                                          for=\"radio12\"\n                                          >No</label\n                                        >\n                                      </div>\n                                    </div>\n                                  </div>\n                                </div>\n\n                              </div>\n\n\n                               \n\n                               \n\n                              \n                              </div>\n                              <div class=\"col-xl-4 col-lg-4 col-md-6 col-6\">\n                                <div class=\"form-group lastformgroup\">\n                                  <label for=\"inputname\"\n                                    >Tell us a summary about your script content</label\n                                  >\n                                  <div class=\"input-content\">\n                                    <div class=\"textarea-content\">\n                                      <i class=\"icon-check\" id=\"icon\" [ngClass]=\"{'success-icon': !f.summery.invalid && f.summery.touched && f.summery.dirty}\"></i>\n                                      <textarea id=\"textarea\" rows=\"8\" class=\"form-control\" name=\"summery\" placeholder=\"\" formControlName=\"summery\"\n                                      required></textarea>\n                                    </div>\n                                   \n\n                                    <div class=\"nextcontent\">\n                                      <button\n                                        type=\"button\"\n                                        (click)=\"next()\"\n                                        class=\"btn btnnext\"\n                                        id=\"btn\"\n                                        [disabled]=\"!(selectedLanguage && selectedeating && selectedgenra && selectedSubgenra\n                                        && f.summery.valid && f.name.valid && f.formcheck1.dirty && f.formcheck2.dirty && (f.formcheck3.dirty && f.formcheck3.value== 'Yes' && !showscriptLink) || (f.formcheck3.dirty && f.formcheck3.value== 'No' && showscriptLink && selectscript && f.formcheck4.dirty && f.source.valid))\"\n                                        [ngClass]=\"{ 'success-upload': selectedLanguage && selectedeating && selectedgenra && selectedSubgenra\n                                        && f.summery.valid && f.name.valid && f.formcheck1.dirty && f.formcheck2.dirty && (f.formcheck3.dirty && f.formcheck3.value== 'Yes' && !showscriptLink) || (f.formcheck3.dirty && f.formcheck3.value== 'No' && showscriptLink && selectscript && f.formcheck4.dirty && f.source.valid)\n                                       }\"\n                                        \n                                      >\n                                        Next Step\n                                        <i class=\"ft-chevron-right\"></i>\n                                      </button>\n                                    </div>\n\n                                  \n                                  </div>\n                                </div>\n                              </div>\n\n                            \n                            </form>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                 \n                </div>\n                <div id=\"test-l-2\" class=\"content\">\n                  <div class=\"materials\">\n                    <div class=\"row\">\n                      <div class=\"col-xl-10 col-lg-10 col-md-10 col-10\">\n                        <div class=\"upload-material\">\n                          <h4>Please upload your script/content file here</h4>\n                          <div class=\"upload-content\">\n                            <i\n                              class=\"icon-check\"\n                              id=\"icon\"\n                              [ngClass]=\"{ 'success-upload': fileToUpload }\"\n                            ></i>\n                            <div\n                              class=\"upload\"\n                              (click)=\"uploadfile()\"\n                              [ngClass]=\"{ 'success-upload': fileToUpload }\"\n                            >\n                              <img\n                                src=\"../../../../assets/img/new/upload.png\"\n                              />\n                              <p>Drop files or click to chose</p>\n                            </div>\n                          </div>\n                        </div>\n                        <ul>\n                          <li>- Accepted formats : PDF, WORD, RAR, ZIP</li>\n                          <li>\n                            - You can include photo reference or concept visual\n                            arts if needed.\n                          </li>\n                          <li>\n                            - You need to include authorization letter from your\n                            work owner in case of any.\n                          </li>\n                          <li>- No scanned papers</li>\n                          <li>\n                            - For multiple files, please compress into a RAR or\n                            ZIP file.\n                          </li>\n                        </ul>\n                      </div>\n\n                      <div class=\"col-xl-2 col-lg-2 col-md-2 col-2\">\n                        <div class=\"nextcontent\">\n                          <button\n                            [ngClass]=\"{ 'success-upload': fileToUpload }\"\n                            (click)=\"next()\"\n                            type=\"button\"\n                            class=\"btn btnnext\"\n                            id=\"btn-m-upload\"\n                            [disabled]=\"!fileToUpload\"\n                          >\n                            Next Step\n                            <i class=\"ft-chevron-right\"></i>\n                          </button>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"form-group\" hidden>\n                    <input\n                      (change)=\"onFileChanged($event.target.files)\"\n                      type=\"file\"\n                      class=\"form-control\"\n                      id=\"Inputupload\"\n                    />\n                  </div>\n                </div>\n\n                <!-- <button (click)=\"next()\" class=\"btn btn-primary\">Next</button> -->\n                <div id=\"test-l-3\" class=\"content\">\n                  <div class=\"terms\">\n                    <div class=\"row\">\n                      <div class=\"col-xl-10 col-lg-10 col-md-10 col-10\">\n                        <h4>Please read the terms and conditions carefuly</h4>\n                        <div class=\"condtion\">\n                          <p>\n                            Sed ut perspiciatis unde omnis iste natus error sit\n                            voluptatem accusantium doloremque laudantium, totam\n                            rem aperiam, eaque ipsa quae ab illo inventore\n                            veritatis et quasi architecto beatae vitae dicta\n                            sunt explicabo. Nemo enim ipsam voluptatem quia\n                            voluptas sit aspernatur aut odit aut fugit, sed quia\n                            consequuntur magni dolores eos qui ratione\n                            voluptatem sequi nesciunt. Neque porro quisquam est,\n                            qui dolorem ipsum quia dolor sit amet, consectetur,\n                            adipisci velit, sed quia non numquam eius modi\n                            tempora incidunt ut labore et dolore magnam aliquam\n                            quaerat voluptatem. Ut enim ad minima veniam, quis\n                            nostrum exercitationem ullam corporis suscipit\n                            laboriosam, nisi ut aliquid ex ea commodi\n                            consequatur? Quis autem vel eum iure reprehenderit\n                            qui in ea voluptate velit esse quam nihil molestiae\n                            consequatur, vel illum qui dolorem eum fugiat quo\n                            voluptas nulla pariatur?\n                          </p>\n                          <p>\n                            Sed ut perspiciatis unde omnis iste natus error sit\n                            voluptatem accusantium doloremque laudantium, totam\n                            rem aperiam, eaque ipsa quae ab illo inventore\n                            veritatis et quasi architecto beatae vitae dicta\n                            sunt explicabo. Nemo enim ipsam voluptatem quia\n                            voluptas sit aspernatur aut odit aut fugit, sed quia\n                            consequuntur magni dolores eos qui ratione\n                            voluptatem sequi nesciunt. Neque porro quisquam est,\n                            qui dolorem ipsum quia dolor sit amet, consectetur,\n                            adipisci velit, sed quia non numquam eius modi\n                            tempora incidunt ut labore et dolore magnam aliquam\n                            quaerat voluptatem. Ut enim ad minima veniam, quis\n                            nostrum exercitationem ullam corporis suscipit\n                            laboriosam, nisi ut aliquid ex ea commodi\n                            consequatur? Quis autem vel eum iure reprehenderit\n                            qui in ea voluptate velit esse quam nihil molestiae\n                            consequatur, vel illum qui dolorem eum fugiat quo\n                            voluptas nulla pariatur?\n                          </p>\n                          <p>\n                            Sed ut perspiciatis unde omnis iste natus error sit\n                            voluptatem accusantium doloremque laudantium, totam\n                            rem aperiam, eaque ipsa quae ab illo inventore\n                            veritatis et quasi architecto beatae vitae dicta\n                            sunt explicabo. Nemo enim ipsam voluptatem quia\n                            voluptas sit aspernatur aut odit aut fugit, sed quia\n                            consequuntur magni dolores eos qui ratione\n                            voluptatem sequi nesciunt. Neque porro quisquam est,\n                            qui dolorem ipsum quia dolor sit amet, consectetur,\n                            adipisci velit, sed quia non numquam eius modi\n                            tempora incidunt ut labore et dolore magnam aliquam\n                            quaerat voluptatem. Ut enim ad minima veniam, quis\n                            nostrum exercitationem ullam corporis suscipit\n                            laboriosam, nisi ut aliquid ex ea commodi\n                            consequatur? Quis autem vel eum iure reprehenderit\n                            qui in ea voluptate velit esse quam nihil molestiae\n                            consequatur, vel illum qui dolorem eum fugiat quo\n                            voluptas nulla pariatur?\n                          </p>\n                          <p>\n                            Sed ut perspiciatis unde omnis iste natus error sit\n                            voluptatem accusantium doloremque laudantium, totam\n                            rem aperiam, eaque ipsa quae ab illo inventore\n                            veritatis et quasi architecto beatae vitae dicta\n                            sunt explicabo. Nemo enim ipsam voluptatem quia\n                            voluptas sit aspernatur aut odit aut fugit, sed quia\n                            consequuntur magni dolores eos qui ratione\n                            voluptatem sequi nesciunt. Neque porro quisquam est,\n                            qui dolorem ipsum quia dolor sit amet, consectetur,\n                            adipisci velit, sed quia non numquam eius modi\n                            tempora incidunt ut labore et dolore magnam aliquam\n                            quaerat voluptatem. Ut enim ad minima veniam, quis\n                            nostrum exercitationem ullam corporis suscipit\n                            laboriosam, nisi ut aliquid ex ea commodi\n                            consequatur? Quis autem vel eum iure reprehenderit\n                            qui in ea voluptate velit esse quam nihil molestiae\n                            consequatur, vel illum qui dolorem eum fugiat quo\n                            voluptas nulla pariatur?\n                          </p>\n                          <p>\n                            Sed ut perspiciatis unde omnis iste natus error sit\n                            voluptatem accusantium doloremque laudantium, totam\n                            rem aperiam, eaque ipsa quae ab illo inventore\n                            veritatis et quasi architecto beatae vitae dicta\n                            sunt explicabo. Nemo enim ipsam voluptatem quia\n                            voluptas sit aspernatur aut odit aut fugit, sed quia\n                            consequuntur magni dolores eos qui ratione\n                            voluptatem sequi nesciunt. Neque porro quisquam est,\n                            qui dolorem ipsum quia dolor sit amet, consectetur,\n                            adipisci velit, sed quia non numquam eius modi\n                            tempora incidunt ut labore et dolore magnam aliquam\n                            quaerat voluptatem. Ut enim ad minima veniam, quis\n                            nostrum exercitationem ullam corporis suscipit\n                            laboriosam, nisi ut aliquid ex ea commodi\n                            consequatur? Quis autem vel eum iure reprehenderit\n                            qui in ea voluptate velit esse quam nihil molestiae\n                            consequatur, vel illum qui dolorem eum fugiat quo\n                            voluptas nulla pariatur?\n                          </p>\n                          <p>\n                            Sed ut perspiciatis unde omnis iste natus error sit\n                            voluptatem accusantium doloremque laudantium, totam\n                            rem aperiam, eaque ipsa quae ab illo inventore\n                            veritatis et quasi architecto beatae vitae dicta\n                            sunt explicabo. Nemo enim ipsam voluptatem quia\n                            voluptas sit aspernatur aut odit aut fugit, sed quia\n                            consequuntur magni dolores eos qui ratione\n                            voluptatem sequi nesciunt. Neque porro quisquam est,\n                            qui dolorem ipsum quia dolor sit amet, consectetur,\n                            adipisci velit, sed quia non numquam eius modi\n                            tempora incidunt ut labore et dolore magnam aliquam\n                            quaerat voluptatem. Ut enim ad minima veniam, quis\n                            nostrum exercitationem ullam corporis suscipit\n                            laboriosam, nisi ut aliquid ex ea commodi\n                            consequatur? Quis autem vel eum iure reprehenderit\n                            qui in ea voluptate velit esse quam nihil molestiae\n                            consequatur, vel illum qui dolorem eum fugiat quo\n                            voluptas nulla pariatur?\n                          </p>\n                          <br />\n                        </div>\n\n                        <div class=\"accept\" id=\"accept\">\n                          <div style=\"display: flex\">\n                            <i class=\"icon-check\" id=\"icon\"></i>\n                            <p>I agree on all the terms and conditions above</p>\n                          </div>\n\n                          <div class=\"form-group\">\n                            <div\n                              class=\"custom-control custom-radio d-block float-left\"\n                            >\n                              <input\n                                type=\"radio\"\n                                name=\"radiostep3\"\n                                id=\"radio1condtion\"\n                                class=\"custom-control-input form-control\"\n                                (change)=\"handelchange($event)\"\n                                value=\"Yes\"\n                              />\n                              <label\n                                class=\"custom-control-label\"\n                                for=\"radio1condtion\"\n                                >Yes</label\n                              >\n                            </div>\n                            <div\n                              class=\"custom-control custom-radio d-block float-left ml-1\"\n                            >\n                              <input\n                                type=\"radio\"\n                                name=\"radiostep3\"\n                                class=\"custom-control-input form-control\"\n                                id=\"radio2condtion\"\n                                value=\"No\"\n                                (change)=\"handelchange($event)\"\n                              />\n                              <label\n                                class=\"custom-control-label\"\n                                for=\"radio2condtion\"\n                                \n                                >No</label\n                              >\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n\n                      <div class=\"col-xl-2 col-lg-2 col-md-2 col-2\">\n                        <div class=\"nextcontent\">\n                          <button\n                            type=\"button\"\n                            (click)=\"next()\"\n                            class=\"btn btnnext\"\n                            id=\"btnstep3\"\n                            [disabled]=\"!acceptCondtion\"\n                          >\n                            Next Step\n                            <i class=\"ft-chevron-right\"></i>\n                          </button>\n                        </div>\n                      </div>\n                    </div>\n\n                    <div></div>\n                  </div>\n                  <!-- <div class=\"form-group\">\n                    <label for=\"exampleInputPassword1\">Password</label>\n                    <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\" />\n                  </div> -->\n                  <!-- <button (click)=\"next()\" class=\"btn btn-primary\">Next</button> -->\n                </div>\n                <div id=\"test-l-4\" class=\"content text-center\">\n                  <div class=\"final-step\">\n                    <img src=\"../../../../assets/img/new/done.png\" />\n                    <p>\n                      Thank you, we are uploading your content now,\n                      <br />\n                      you may find your request and it’s under process,\n                      <br />\n                      you can check your request progress at your\n                      <br />\n                      home page top panel\n                    </p>\n                    <h4>\n                      Do you want to submit another script revision request?\n                    </h4>\n                  </div>\n                  <button class=\"addbtn\" type=\"button\" (click)=\"onSubmit()\">\n                    <i class=\"icon-plus\"></i>\n                    <a> Add New</a>\n                  </button>\n                  <!-- <button type=\"submit\" class=\"btn btn-primary mt-5\">\n                    Submit\n                  </button> -->\n                </div>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/script-revision/welcome-script/welcome-script.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/script-revision/welcome-script/welcome-script.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"welcome-container\">\n  <div class=\"row\">\n    <div class=\"col-xl-12 col-lg-12 col-md-12 col-12\">\n      <div class=\"header-title\">\n        <h2>Welcome to Script Revision</h2>\n      </div>\n      <div class=\"top-nav\">\n\n        <a>About</a>\n        <a>Script Guide</a>\n        <a>conditions and restrictions</a>\n        <a>before you start</a>\n        <a>need help?</a>\n\n      </div>\n      <div class=\"choose\">\n        <button (click)=\"addservice()\">\n          <i class=\"icon-plus\"></i>\n          <a>  Add New</a>\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/script-revision/add-script/add-script.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/pages/script-revision/add-script/add-script.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n.title\r\n{\r\n    font-size: 0.9rem;\r\n}\r\n.header-title\r\n{\r\npadding-left: 0.5rem;\r\n}\r\n.header-title h2\r\n{\r\n    letter-spacing: 0px;\r\n    color: #6E1946;\r\n    font-family: sans-serif;\r\n    font-size: 18px;\r\n}\r\n.welcome-container\r\n{\r\n    padding: 60px 10px;\r\n    text-align: center;\r\n}\r\n.welcome-container h2\r\n{\r\n    font-size: 23px;\r\n    font-weight: 600;\r\n}\r\n.choose p \r\n{\r\n    margin-top: 15%;\r\n    font-family: sans-serif;\r\n    font-size: 25px;\r\n    font-weight: bold;\r\n    color: #0A7523;\r\n}\r\n.choose button\r\n{\r\n\r\n    background-color: #6E1946;\r\n    color: #fff;\r\n    padding: 8px 38px 8px 12px;    border-radius: 20px;\r\n    font-size: 13px;\r\n    font-family: sans-serif;\r\n    margin-top: 15%;\r\n    border: none;\r\n}\r\n.choose a\r\n{\r\n    margin-left: 3px;\r\n    color: #fff;\r\n  \r\n}\r\n.choose i\r\n{\r\n    font-size: 17px;\r\n}\r\n.top-nav\r\n{\r\n    display: flex;\r\n    text-align: center;\r\n    justify-content: space-between;\r\n    width: 52%;\r\n    margin: auto;\r\n}\r\n.top-nav a{\r\n    font-family: sans-serif;\r\n    color: #949494;\r\n    font-size: 12px;\r\n    font-weight: 600;\r\n}\r\n.top-nav a::after\r\n{\r\n    content: \"\";\r\n    border-right: 2px solid #949494;\r\n    width: 3px;\r\n    height: 3px;\r\n    margin: 0 20px;\r\n}\r\n.top-nav a:last-child:after\r\n{\r\n    content: \"\";\r\n    border-right: none\r\n\r\n}\r\n/*!\r\n * bsStepper v1.7.0 (https://github.com/Johann-S/bs-stepper)\r\n * Copyright 2018 - 2019 Johann-S <johann.servoire@gmail.com>\r\n * Licensed under MIT (https://github.com/Johann-S/bs-stepper/blob/master/LICENSE)\r\n */\r\n.bs-stepper .step-trigger{display:inline-flex;flex-wrap:wrap;align-items:center;justify-content:center;padding:20px;font-size:1rem;font-weight:700;line-height:1.5;color:#6c757d;text-align:center;text-decoration:none;white-space:nowrap;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:transparent;border:none;border-radius:.25rem;transition:background-color .15s ease-out,color .15s ease-out}\r\n.bs-stepper .step-trigger:not(:disabled):not(.disabled){cursor:pointer}\r\n.bs-stepper .step-trigger.disabled,.bs-stepper .step-trigger:disabled{pointer-events:none;opacity:.65}\r\n.bs-stepper .step-trigger:focus{color:#007bff;outline:0}\r\n.bs-stepper .step-trigger:hover{text-decoration:none;background-color:rgba(0,0,0,.06)}\r\n@media (max-width:520px){.bs-stepper .step-trigger{flex-direction:column;padding:10px}}\r\n.bs-stepper-label{display:inline-block;margin:.25rem}\r\n.bs-stepper-header{display:flex;align-items:center}\r\n@media (max-width:520px){.bs-stepper-header{margin:0 -10px;text-align:center}}\r\n.bs-stepper .line,.bs-stepper-line{flex:1 0 32px;min-width:1px;min-height:1px;margin:auto;background-color:rgba(0,0,0,.12)}\r\n@media (max-width:400px){.bs-stepper .line,.bs-stepper-line{flex-basis:20px}}\r\n.bs-stepper-circle{display:inline-flex;align-content:center;justify-content:center;width:2em;height:2em;padding:.5em 0;margin:.25rem;line-height:1em;color:#fff;background-color:#6c757d;border-radius:1em}\r\n.active .bs-stepper-circle{background-color:#007bff}\r\n.bs-stepper-content{padding:0 20px 20px}\r\n@media (max-width:520px){.bs-stepper-content{padding:0}}\r\n.bs-stepper.vertical{display:flex}\r\n.bs-stepper.vertical .bs-stepper-header{flex-direction:column;align-items:stretch;margin:0}\r\n.bs-stepper.vertical .bs-stepper-pane,.bs-stepper.vertical .content{display:block}\r\n.bs-stepper.vertical .bs-stepper-pane:not(.fade),.bs-stepper.vertical .content:not(.fade){display:block;visibility:hidden}\r\n.bs-stepper .content:not(.fade),.bs-stepper-pane:not(.fade){display:none}\r\n.bs-stepper .content.fade,.bs-stepper-pane.fade{visibility:hidden;transition-duration:.3s;transition-property:opacity}\r\n.bs-stepper .content.fade.active,.bs-stepper-pane.fade.active{visibility:visible;opacity:1}\r\n.bs-stepper .content.active:not(.fade),.bs-stepper-pane.active:not(.fade){display:block;visibility:visible}\r\n.bs-stepper .content.dstepper-block,.bs-stepper-pane.dstepper-block{display:block}\r\n.bs-stepper:not(.vertical) .bs-stepper-pane.dstepper-none,.bs-stepper:not(.vertical) .content.dstepper-none{display:none}\r\n.vertical .bs-stepper-pane.fade.dstepper-none,.vertical .content.fade.dstepper-none{visibility:hidden}\r\n.bs-stepper-header {\n  justify-content: space-between;\n  border-bottom: 1px solid #707070;\n  margin: 2rem 0 3rem 0;\n}\r\n.bs-stepper .step-trigger {\n  font-weight: bold !important;\n  padding: 10px 20px !important;\n  color: #A9A9A9 !important;\n}\r\n.bs-stepper .step-trigger:not(:disabled):not(.disabled) {\n  color: #6E1946 !important;\n}\r\n.terms h4 {\n  font-family: sans-serif;\n  font-size: 16px;\n  font-weight: 600;\n}\r\n.terms p {\n  font-family: sans-serif;\n  font-size: 12px;\n  text-align: left;\n  font-weight: 600;\n  margin-bottom: 0;\n  line-height: 17px;\n  color: #2E2E2E;\n}\r\n.condtion {\n  max-height: 570px;\n  overflow: hidden;\n  overflow-y: scroll;\n}\r\n.condtion::-webkit-scrollbar {\n  width: 0 !important;\n}\r\n.accept {\n  background-color: #6E1946;\n  display: flex;\n  padding: 8px 5px 8px 20px;\n}\r\n.accept .form-group {\n  margin-bottom: 0;\n  margin-top: -2px;\n}\r\n.accept p {\n  color: #fff;\n  font-weight: 100;\n  margin: 0 10px 0 6px;\n}\r\n.accept i {\n  background-color: #A9A9A9;\n  border-radius: 50%;\n  font-size: 20px;\n  color: #6e1946;\n  border: none;\n  font-weight: bold;\n  height: 20px;\n}\r\n.custom-radio .custom-control-label::before {\n  border-radius: 0;\n}\r\nform label {\n  color: #fff;\n  font-family: sans-serif;\n}\r\n.custom-control {\n  margin-right: 18px;\n}\r\n.custom-control-input:checked ~ .custom-control-label::before {\n  border-color: #fff;\n  border: 2px solid #fff;\n  background-color: #6E1946;\n}\r\n.custom-radio .custom-control-input:checked ~ .custom-control-label::after {\n  background-image: none;\n}\r\n.acceptcon, .greenbtn {\n  background-color: #0a7523 !important;\n}\r\n.checkicon {\n  background-color: #fff !important;\n  color: #0a7523 !important;\n}\r\n.btnnext {\n  background-color: #6E1946;\n  color: #fff;\n  border-radius: 17px;\n  padding: 5px 9px 5px 30px;\n}\r\n.nextcontent {\n  margin-top: 27rem;\n}\r\n.nextcontent i {\n  margin-left: 6px;\n}\r\n.addbtn {\n  background-color: #6E1946;\n  color: #fff;\n  padding: 8px 38px 8px 12px;\n  border-radius: 20px;\n  font-size: 15px;\n  font-family: sans-serif;\n  margin-top: 3vh;\n  border: none;\n}\r\n.final-step {\n  width: 60%;\n  margin: auto;\n}\r\n.final-step img {\n  width: 50px;\n  height: 50px;\n  margin-bottom: 30px;\n}\r\n.final-step p {\n  color: #6E1946;\n  font-family: sans-serif;\n  font-size: 18px;\n  margin-bottom: 35px;\n}\r\n.final-step h4 {\n  color: #6E1946;\n  font-size: 15px;\n  font-family: sans-serif;\n}\r\n.upload-material {\n  width: 38%;\n  margin: auto;\n  padding-top: 15vh;\n}\r\n.upload-material h4 {\n  font-family: sans-serif;\n  font-size: 14px;\n  font-weight: bold;\n  color: #272727;\n}\r\n.upload {\n  background-color: #6E1946;\n  width: 80%;\n  margin-left: 0.6rem;\n  border-radius: 10px;\n  color: #fff;\n  text-align: center;\n  padding: 16px 12px;\n  cursor: pointer;\n}\r\n.upload-content {\n  display: flex;\n  margin: 23px 0 32px 0;\n}\r\n.upload-content i {\n  background-color: #A9A9A9;\n  width: 21px;\n  height: 22px;\n  font-size: 23px;\n  border-radius: 50%;\n  color: #fff;\n  border: none;\n}\r\n.materials ul {\n  width: 38%;\n  margin: auto;\n  list-style-type: none;\n  text-align: left;\n}\r\n.materials ul li {\n  font-family: sans-serif;\n  line-height: 1.5rem;\n  font-size: 14px;\n}\r\n.success-upload, .success-icon {\n  background-color: #0A7523 !important;\n  color: #fff !important;\n}\r\n.form-content form {\n  display: flex;\n  color: #000;\n}\r\n.form-content .form-group {\n  padding: 0 20px 0 0 !important;\n}\r\n.form-content form label {\n  color: #272727;\n  margin-left: 1.8rem;\n  font-family: unset;\n  font-size: 12px;\n  font-weight: 400;\n  text-transform: capitalize;\n  font-family: sans-serif;\n}\r\n.input-content {\n  display: flex;\n}\r\n.input-content .icon-check {\n  background-color: #A9A9A9;\n  width: 21px;\n  height: 21px;\n  font-size: 23px;\n  border-radius: 50%;\n  color: #fff;\n  border: none;\n  margin: 7px 7px 0 0;\n}\r\n.input-content input {\n  border: 2px solid #6E1946;\n  border-radius: 14px;\n}\r\n.input-content input:focus {\n  border-color: #6E1946 !important;\n  box-shadow: none !important;\n}\r\n.input-content .ng-select .ng-select-container {\n  border: 2px solid #6E1946 !important;\n  border-radius: 14px !important;\n  background-color: #6E1946 !important;\n  color: #fff !important;\n  -webkit-appearance: none !important;\n     -moz-appearance: none !important;\n          appearance: none !important;\n  padding-right: 15px !important;\n  background: url('arrow.svg') 97%/10% no-repeat #6E1946 !important;\n}\r\n::ng-deep.ng-select {\n  width: 100%;\n}\r\n::ng-deep.ng-select .ng-select-container .ng-value-container .ng-placeholder {\n  color: #fff !important;\n}\r\n::ng-deep.ng-dropdown-panel .ng-dropdown-panel-items .ng-option {\n  color: #fff !important;\n  background-color: #6e1946 !important;\n}\r\n::ng-deep.ng-dropdown-panel .ng-dropdown-panel-items .ng-option:hover {\n  color: #fff !important;\n  background-color: #6e1946 !important;\n}\r\n::ng-deep.ng-select-container {\n  border: 2px solid #6E1946 !important;\n  border-radius: 14px !important;\n  background-color: #6E1946 !important;\n  color: #fff !important;\n  -webkit-appearance: none !important;\n     -moz-appearance: none !important;\n          appearance: none !important;\n  padding-right: 15px !important;\n  background: url('arrow.svg') 97%/9% no-repeat #6E1946 !important;\n}\r\n::ng-deep.ng-select .ng-arrow-wrapper {\n  display: none !important;\n}\r\n.lastformgroup .input-content {\n  display: block;\n}\r\n.lastformgroup .nextcontent {\n  margin-top: 13rem;\n}\r\n.lastformgroup .nextcontent button {\n  float: right;\n}\r\n.textarea-content {\n  display: flex;\n}\r\n.textarea-content textarea {\n  border: 2px solid #6e1946;\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2NyaXB0LXJldmlzaW9uL3dlbGNvbWUtc2NyaXB0L3dlbGNvbWUtc2NyaXB0LmNvbXBvbmVudC5zY3NzIiwibm9kZV9tb2R1bGVzL2JzLXN0ZXBwZXIvZGlzdC9jc3MvLi5cXC4uXFxzcmNcXGNzc1xcYnMtc3RlcHBlci5jc3MiLCJub2RlX21vZHVsZXMvYnMtc3RlcHBlci9kaXN0L2Nzcy9kaXN0XFxjc3NcXGJzLXN0ZXBwZXIuY3NzIiwic3JjL2FwcC9wYWdlcy9zY3JpcHQtcmV2aXNpb24vYWRkLXNjcmlwdC9EOlxccmVoYWJcXGZyZWVcXEZjL3NyY1xcYXBwXFxwYWdlc1xcc2NyaXB0LXJldmlzaW9uXFxhZGQtc2NyaXB0XFxhZGQtc2NyaXB0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9zY3JpcHQtcmV2aXNpb24vYWRkLXNjcmlwdC9hZGQtc2NyaXB0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7O0lBRUksaUJBQWlCO0FBQ3JCO0FBQ0E7O0FBRUEsb0JBQW9CO0FBQ3BCO0FBQ0E7O0lBRUksbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsZUFBZTtBQUNuQjtBQUVBOztJQUVJLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7QUFFQTs7SUFFSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCO0FBR0E7O0lBRUksZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7QUFFQTs7O0lBR0kseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCwwQkFBMEIsS0FBSyxtQkFBbUI7SUFDbEQsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsWUFBWTtBQUNoQjtBQUNBOztJQUVJLGdCQUFnQjtJQUNoQixXQUFXOztBQUVmO0FBQ0E7O0lBRUksZUFBZTtBQUNuQjtBQUVBOztJQUVJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsOEJBQThCO0lBQzlCLFVBQVU7SUFDVixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsK0JBQStCO0lBQy9CLFVBQVU7SUFDVixXQUFXO0lBQ1gsY0FBYztBQUNsQjtBQUVBOztJQUVJLFdBQVc7SUFDWDs7QUFFSjtBQzNGQTs7OztFQU1BO0FBQUEsMEJBQ0UsbUJBQ0EsQ0FBQSxjQUNBLENBQUEsa0JBQ0EsQ0FBQSxzQkFDQSxDQUFBLFlBQ0EsQ0FBQSxjQUNBLENBQUEsZUFDQSxDQUFBLGVBQ0EsQ0FBQSxhQUNBLENBQUEsaUJBQ0EsQ0FBQSxvQkFDQSxDQUFBLGtCQUNBLENBQUEscUJBQ0EsQ0FBQSx3QkFBQSxDQUFBLHFCQUFBLENBQUEsb0JBQUEsQ0FBQSxnQkFDQSxDQUFBLDRCQUNBLENBQUEsV0FDQSxDQUFBLG9CQUNBLENBQUEsNkRBR0Y7QUFBQSx3REFDRSxjQ1dGO0FBQUEsc0VETkUsbUJBQ0EsQ0FBQSxXQUdGO0FBQUEsZ0NBQ0UsYUFDQSxDQUFBLFNBR0Y7QUFBQSxnQ0FDRSxvQkFDQSxDQUFBLGdDQUdGO0FBQUEseUJBQ0UsMEJBQ0UscUJBQ0EsQ0FBQSxZQUlKLENBQUE7QUFBQSxrQkFDRSxvQkFDQSxDQUFBLGFBR0Y7QUFBQSxtQkFDRSxZQUNBLENBQUEsa0JBR0Y7QUFBQSx5QkFDRSxtQkFDRSxjQUNBLENBQUEsaUJDZUosQ0FBQTtBQUFBLG1DRFRFLGFBQ0EsQ0FBQSxhQUNBLENBQUEsY0FDQSxDQUFBLFdBQ0EsQ0FBQSxnQ0FHRjtBQUFBLHlCQ2FFLG1DRFZFLGVBSUosQ0FBQTtBQUFBLG1CQUNFLG1CQUNBLENBQUEsb0JBQ0EsQ0FBQSxzQkFDQSxDQUFBLFNBQ0EsQ0FBQSxVQUNBLENBQUEsY0FDQSxDQUFBLGFBQ0EsQ0FBQSxlQUNBLENBQUEsVUFDQSxDQUFBLHdCQUNBLENBQUEsaUJBR0Y7QUFBQSwyQkFDRSx3QkFHRjtBQUFBLG9CQUNFLG1CQUdGO0FBQUEseUJBQ0Usb0JBQ0UsU0FJSixDQUFBO0FBQUEscUJBQ0UsWUFHRjtBQUFBLHdDQUNFLHFCQUNBLENBQUEsbUJBQ0EsQ0FBQSxRQUdGO0FBQUEsb0VBRUUsYUFHRjtBQUFBLDBGQUVFLGFBQ0EsQ0FBQSxpQkNzQkY7QUFBQSw0RERqQkUsWUFHRjtBQUFBLGdEQUVFLGlCQUNBLENBQUEsdUJBQ0EsQ0FBQSwyQkNzQkY7QUFBQSw4RERqQkUsa0JBQ0EsQ0FBQSxTQ3NCRjtBQUFBLDBFRGpCRSxhQUNBLENBQUEsa0JDc0JGO0FBQUEsb0VEakJFLGFBR0Y7QUFBQSw0R0FFRSxZQUdGO0FBQUEsb0ZBRUUsaUJBQUE7QUV2S0Y7RUFFSSw4QkFBQTtFQUNBLGdDQUFBO0VBQ0EscUJBQUE7QUNISjtBRE9BO0VBRUksNEJBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0FDTEo7QURTQTtFQUVHLHlCQUFBO0FDUEg7QURXQTtFQUVJLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDVEo7QURZQTtFQUVJLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ1ZKO0FEYUE7RUFFSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNYSjtBRGNBO0VBQStCLG1CQUFBO0FDVi9CO0FEWUE7RUFFSSx5QkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBQ1ZKO0FEWUE7RUFFSSxnQkFBQTtFQUNBLGdCQUFBO0FDVko7QURjQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FDWEo7QURlQTtFQUVJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNiSjtBRGdCQTtFQUVJLGdCQUFBO0FDZEo7QURpQkE7RUFFSSxXQUFBO0VBQ0EsdUJBQUE7QUNmSjtBRGlCQTtFQUVJLGtCQUFBO0FDZko7QURrQkE7RUFFSSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7QUNoQko7QURrQkE7RUFFSSxzQkFBQTtBQ2hCSjtBRG1CQTtFQUVJLG9DQUFBO0FDakJKO0FEbUJBO0VBRUksaUNBQUE7RUFFQSx5QkFBQTtBQ2xCSjtBRHVCQTtFQUVJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUNyQko7QUR1QkE7RUFFSSxpQkFBQTtBQ3JCSjtBRHVCQTtFQUNJLGdCQUFBO0FDcEJKO0FENEJBO0VBR0kseUJBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7RUFBK0IsbUJBQUE7RUFDL0IsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUMxQko7QUQ2QkE7RUFFSSxVQUFBO0VBQ0EsWUFBQTtBQzNCSjtBRDZCQTtFQUVJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUMzQko7QUQ2QkE7RUFFSSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUMzQko7QUQ2QkE7RUFFSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FDM0JKO0FEOEJBO0VBRUksVUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQzVCSjtBRCtCQTtFQUVJLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQzdCSjtBRGlDQTtFQUVJLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUMvQko7QURrQ0E7RUFFSSxhQUFBO0VBQ0EscUJBQUE7QUNoQ0o7QURvQ0E7RUFFSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNsQ0o7QURvQ0E7RUFFSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUNsQ0o7QURvQ0E7RUFFSSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ2xDSjtBRHFDQTtFQUVJLG9DQUFBO0VBQ0Esc0JBQUE7QUNuQ0o7QURzQ0E7RUFFSSxhQUFBO0VBQ0EsV0FBQTtBQ3BDSjtBRHNDQTtFQUVJLDhCQUFBO0FDcENKO0FEdUNBO0VBRUksY0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLHVCQUFBO0FDckNKO0FEd0NBO0VBRUksYUFBQTtBQ3RDSjtBRHdDQTtFQUVJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDdENKO0FEd0NBO0VBRUkseUJBQUE7RUFDQSxtQkFBQTtBQ3RDSjtBRHlDQTtFQUVJLGdDQUFBO0VBQ0EsMkJBQUE7QUN2Q0o7QUQyQ0E7RUFFSSxvQ0FBQTtFQUNBLDhCQUFBO0VBQ0Esb0NBQUE7RUFDQSxzQkFBQTtFQUNBLG1DQUFBO0tBQUEsZ0NBQUE7VUFBQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsaUVBQUE7QUN6Q0o7QURnREE7RUFFSSxXQUFBO0FDOUNKO0FEZ0RBO0VBRUEsc0JBQUE7QUM5Q0E7QURpREE7RUFFSSxzQkFBQTtFQUNBLG9DQUFBO0FDL0NKO0FEaURBO0VBRUksc0JBQUE7RUFDQSxvQ0FBQTtBQy9DSjtBRGtEQTtFQUNJLG9DQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsbUNBQUE7S0FBQSxnQ0FBQTtVQUFBLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnRUFBQTtBQy9DSjtBRGlEQztFQUVJLHdCQUFBO0FDL0NMO0FEbURDO0VBRUksY0FBQTtBQ2pETDtBRG9EQztFQUVHLGlCQUFBO0FDbERKO0FEcURDO0VBRUUsWUFBQTtBQ25ESDtBRHFEQztFQUVJLGFBQUE7QUNuREw7QURxREM7RUFFRyx5QkFBQTtBQ25ESiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NjcmlwdC1yZXZpc2lvbi9hZGQtc2NyaXB0L2FkZC1zY3JpcHQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi50aXRsZVxyXG57XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxufVxyXG4uaGVhZGVyLXRpdGxlXHJcbntcclxucGFkZGluZy1sZWZ0OiAwLjVyZW07XHJcbn1cclxuLmhlYWRlci10aXRsZSBoMlxyXG57XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gICAgY29sb3I6ICM2RTE5NDY7XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLndlbGNvbWUtY29udGFpbmVyXHJcbntcclxuICAgIHBhZGRpbmc6IDYwcHggMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLndlbGNvbWUtY29udGFpbmVyIGgyXHJcbntcclxuICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcblxyXG4uY2hvb3NlIHAgXHJcbntcclxuICAgIG1hcmdpbi10b3A6IDE1JTtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogIzBBNzUyMztcclxufVxyXG5cclxuLmNob29zZSBidXR0b25cclxue1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2RTE5NDY7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDhweCAzOHB4IDhweCAxMnB4OyAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICBtYXJnaW4tdG9wOiAxNSU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuLmNob29zZSBhXHJcbntcclxuICAgIG1hcmdpbi1sZWZ0OiAzcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICBcclxufVxyXG4uY2hvb3NlIGlcclxue1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG59XHJcblxyXG4udG9wLW5hdlxyXG57XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgd2lkdGg6IDUyJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG4udG9wLW5hdiBhe1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogIzk0OTQ5NDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi50b3AtbmF2IGE6OmFmdGVyXHJcbntcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjOTQ5NDk0O1xyXG4gICAgd2lkdGg6IDNweDtcclxuICAgIGhlaWdodDogM3B4O1xyXG4gICAgbWFyZ2luOiAwIDIwcHg7XHJcbn1cclxuXHJcbi50b3AtbmF2IGE6bGFzdC1jaGlsZDphZnRlclxyXG57XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lXHJcblxyXG59IiwiLyohXHJcbiAqIGJzU3RlcHBlciB2MS43LjAgKGh0dHBzOi8vZ2l0aHViLmNvbS9Kb2hhbm4tUy9icy1zdGVwcGVyKVxyXG4gKiBDb3B5cmlnaHQgMjAxOCAtIDIwMTkgSm9oYW5uLVMgPGpvaGFubi5zZXJ2b2lyZUBnbWFpbC5jb20+XHJcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL0pvaGFubi1TL2JzLXN0ZXBwZXIvYmxvYi9tYXN0ZXIvTElDRU5TRSlcclxuICovXHJcblxyXG4uYnMtc3RlcHBlciAuc3RlcC10cmlnZ2VyIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgY29sb3I6ICM2Yzc1N2Q7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4xNXMgZWFzZS1vdXQsIGNvbG9yIC4xNXMgZWFzZS1vdXQ7XHJcbn1cclxuXHJcbi5icy1zdGVwcGVyIC5zdGVwLXRyaWdnZXI6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmJzLXN0ZXBwZXIgLnN0ZXAtdHJpZ2dlcjpkaXNhYmxlZCxcclxuLmJzLXN0ZXBwZXIgLnN0ZXAtdHJpZ2dlci5kaXNhYmxlZCB7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgb3BhY2l0eTogLjY1O1xyXG59XHJcblxyXG4uYnMtc3RlcHBlciAuc3RlcC10cmlnZ2VyOmZvY3VzIHtcclxuICBjb2xvcjogIzAwN2JmZjtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4uYnMtc3RlcHBlciAuc3RlcC10cmlnZ2VyOmhvdmVyIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuMDYpO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTIwcHgpIHtcclxuICAuYnMtc3RlcHBlciAuc3RlcC10cmlnZ2VyIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmJzLXN0ZXBwZXItbGFiZWwge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW46IC4yNXJlbTtcclxufVxyXG5cclxuLmJzLXN0ZXBwZXItaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1MjBweCkge1xyXG4gIC5icy1zdGVwcGVyLWhlYWRlciB7XHJcbiAgICBtYXJnaW46IDAgLTEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4uYnMtc3RlcHBlci1saW5lLFxyXG4uYnMtc3RlcHBlciAubGluZSB7XHJcbiAgZmxleDogMSAwIDMycHg7XHJcbiAgbWluLXdpZHRoOiAxcHg7XHJcbiAgbWluLWhlaWdodDogMXB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC4xMik7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCkge1xyXG4gIC5icy1zdGVwcGVyLWxpbmUsXHJcbiAgLmJzLXN0ZXBwZXIgLmxpbmUge1xyXG4gICAgZmxleC1iYXNpczogMjBweDtcclxuICB9XHJcbn1cclxuXHJcbi5icy1zdGVwcGVyLWNpcmNsZSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHdpZHRoOiAyZW07XHJcbiAgaGVpZ2h0OiAyZW07XHJcbiAgcGFkZGluZzogLjVlbSAwO1xyXG4gIG1hcmdpbjogLjI1cmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxZW07XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZjNzU3ZDtcclxuICBib3JkZXItcmFkaXVzOiAxZW07XHJcbn1cclxuXHJcbi5hY3RpdmUgLmJzLXN0ZXBwZXItY2lyY2xlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xyXG59XHJcblxyXG4uYnMtc3RlcHBlci1jb250ZW50IHtcclxuICBwYWRkaW5nOiAwIDIwcHggMjBweDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDUyMHB4KSB7XHJcbiAgLmJzLXN0ZXBwZXItY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxufVxyXG5cclxuLmJzLXN0ZXBwZXIudmVydGljYWwge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5icy1zdGVwcGVyLnZlcnRpY2FsIC5icy1zdGVwcGVyLWhlYWRlciB7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5icy1zdGVwcGVyLnZlcnRpY2FsIC5icy1zdGVwcGVyLXBhbmUsXHJcbi5icy1zdGVwcGVyLnZlcnRpY2FsIC5jb250ZW50IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmJzLXN0ZXBwZXIudmVydGljYWwgLmJzLXN0ZXBwZXItcGFuZTpub3QoLmZhZGUpLFxyXG4uYnMtc3RlcHBlci52ZXJ0aWNhbCAuY29udGVudDpub3QoLmZhZGUpIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuXHJcbi5icy1zdGVwcGVyLXBhbmU6bm90KC5mYWRlKSxcclxuLmJzLXN0ZXBwZXIgLmNvbnRlbnQ6bm90KC5mYWRlKSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmJzLXN0ZXBwZXIgLmNvbnRlbnQuZmFkZSxcclxuLmJzLXN0ZXBwZXItcGFuZS5mYWRlIHtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjNzO1xyXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IG9wYWNpdHk7XHJcbn1cclxuXHJcbi5icy1zdGVwcGVyLXBhbmUuZmFkZS5hY3RpdmUsXHJcbi5icy1zdGVwcGVyIC5jb250ZW50LmZhZGUuYWN0aXZlIHtcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5icy1zdGVwcGVyLXBhbmUuYWN0aXZlOm5vdCguZmFkZSksXHJcbi5icy1zdGVwcGVyIC5jb250ZW50LmFjdGl2ZTpub3QoLmZhZGUpIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG59XHJcblxyXG4uYnMtc3RlcHBlci1wYW5lLmRzdGVwcGVyLWJsb2NrLFxyXG4uYnMtc3RlcHBlciAuY29udGVudC5kc3RlcHBlci1ibG9jayB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5icy1zdGVwcGVyOm5vdCgudmVydGljYWwpIC5icy1zdGVwcGVyLXBhbmUuZHN0ZXBwZXItbm9uZSxcclxuLmJzLXN0ZXBwZXI6bm90KC52ZXJ0aWNhbCkgLmNvbnRlbnQuZHN0ZXBwZXItbm9uZSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnZlcnRpY2FsIC5icy1zdGVwcGVyLXBhbmUuZmFkZS5kc3RlcHBlci1ub25lLFxyXG4udmVydGljYWwgLmNvbnRlbnQuZmFkZS5kc3RlcHBlci1ub25lIHtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuIiwiLyohXHJcbiAqIGJzU3RlcHBlciB2MS43LjAgKGh0dHBzOi8vZ2l0aHViLmNvbS9Kb2hhbm4tUy9icy1zdGVwcGVyKVxyXG4gKiBDb3B5cmlnaHQgMjAxOCAtIDIwMTkgSm9oYW5uLVMgPGpvaGFubi5zZXJ2b2lyZUBnbWFpbC5jb20+XHJcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL0pvaGFubi1TL2JzLXN0ZXBwZXIvYmxvYi9tYXN0ZXIvTElDRU5TRSlcclxuICovXHJcblxyXG4uYnMtc3RlcHBlciAuc3RlcC10cmlnZ2VyIHtcclxuICBkaXNwbGF5OiAtbXMtaW5saW5lLWZsZXhib3g7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgLW1zLWZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgY29sb3I6ICM2Yzc1N2Q7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjE1cyBlYXNlLW91dCwgY29sb3IgLjE1cyBlYXNlLW91dDtcclxufVxyXG5cclxuLmJzLXN0ZXBwZXIgLnN0ZXAtdHJpZ2dlcjpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYnMtc3RlcHBlciAuc3RlcC10cmlnZ2VyOmRpc2FibGVkLFxyXG4uYnMtc3RlcHBlciAuc3RlcC10cmlnZ2VyLmRpc2FibGVkIHtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICBvcGFjaXR5OiAuNjU7XHJcbn1cclxuXHJcbi5icy1zdGVwcGVyIC5zdGVwLXRyaWdnZXI6Zm9jdXMge1xyXG4gIGNvbG9yOiAjMDA3YmZmO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5icy1zdGVwcGVyIC5zdGVwLXRyaWdnZXI6aG92ZXIge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC4wNik7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1MjBweCkge1xyXG4gIC5icy1zdGVwcGVyIC5zdGVwLXRyaWdnZXIge1xyXG4gICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uYnMtc3RlcHBlci1sYWJlbCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbjogLjI1cmVtO1xyXG59XHJcblxyXG4uYnMtc3RlcHBlci1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDUyMHB4KSB7XHJcbiAgLmJzLXN0ZXBwZXItaGVhZGVyIHtcclxuICAgIG1hcmdpbjogMCAtMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbn1cclxuXHJcbi5icy1zdGVwcGVyLWxpbmUsXHJcbi5icy1zdGVwcGVyIC5saW5lIHtcclxuICAtbXMtZmxleDogMSAwIDMycHg7XHJcbiAgICAgIGZsZXg6IDEgMCAzMnB4O1xyXG4gIG1pbi13aWR0aDogMXB4O1xyXG4gIG1pbi1oZWlnaHQ6IDFweDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuMTIpO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDAwcHgpIHtcclxuICAuYnMtc3RlcHBlci1saW5lLFxyXG4gIC5icy1zdGVwcGVyIC5saW5lIHtcclxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGZsZXgtYmFzaXM6IDIwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uYnMtc3RlcHBlci1jaXJjbGUge1xyXG4gIGRpc3BsYXk6IC1tcy1pbmxpbmUtZmxleGJveDtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAtbXMtZmxleC1saW5lLXBhY2s6IGNlbnRlcjtcclxuICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgd2lkdGg6IDJlbTtcclxuICBoZWlnaHQ6IDJlbTtcclxuICBwYWRkaW5nOiAuNWVtIDA7XHJcbiAgbWFyZ2luOiAuMjVyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDFlbTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmM3NTdkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcclxufVxyXG5cclxuLmFjdGl2ZSAuYnMtc3RlcHBlci1jaXJjbGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XHJcbn1cclxuXHJcbi5icy1zdGVwcGVyLWNvbnRlbnQge1xyXG4gIHBhZGRpbmc6IDAgMjBweCAyMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTIwcHgpIHtcclxuICAuYnMtc3RlcHBlci1jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG59XHJcblxyXG4uYnMtc3RlcHBlci52ZXJ0aWNhbCB7XHJcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmJzLXN0ZXBwZXIudmVydGljYWwgLmJzLXN0ZXBwZXItaGVhZGVyIHtcclxuICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAtbXMtZmxleC1hbGlnbjogc3RyZXRjaDtcclxuICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uYnMtc3RlcHBlci52ZXJ0aWNhbCAuYnMtc3RlcHBlci1wYW5lLFxyXG4uYnMtc3RlcHBlci52ZXJ0aWNhbCAuY29udGVudCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5icy1zdGVwcGVyLnZlcnRpY2FsIC5icy1zdGVwcGVyLXBhbmU6bm90KC5mYWRlKSxcclxuLmJzLXN0ZXBwZXIudmVydGljYWwgLmNvbnRlbnQ6bm90KC5mYWRlKSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcblxyXG4uYnMtc3RlcHBlci1wYW5lOm5vdCguZmFkZSksXHJcbi5icy1zdGVwcGVyIC5jb250ZW50Om5vdCguZmFkZSkge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5icy1zdGVwcGVyIC5jb250ZW50LmZhZGUsXHJcbi5icy1zdGVwcGVyLXBhbmUuZmFkZSB7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IC4zcztcclxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBvcGFjaXR5O1xyXG59XHJcblxyXG4uYnMtc3RlcHBlci1wYW5lLmZhZGUuYWN0aXZlLFxyXG4uYnMtc3RlcHBlciAuY29udGVudC5mYWRlLmFjdGl2ZSB7XHJcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4uYnMtc3RlcHBlci1wYW5lLmFjdGl2ZTpub3QoLmZhZGUpLFxyXG4uYnMtc3RlcHBlciAuY29udGVudC5hY3RpdmU6bm90KC5mYWRlKSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxufVxyXG5cclxuLmJzLXN0ZXBwZXItcGFuZS5kc3RlcHBlci1ibG9jayxcclxuLmJzLXN0ZXBwZXIgLmNvbnRlbnQuZHN0ZXBwZXItYmxvY2sge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uYnMtc3RlcHBlcjpub3QoLnZlcnRpY2FsKSAuYnMtc3RlcHBlci1wYW5lLmRzdGVwcGVyLW5vbmUsXHJcbi5icy1zdGVwcGVyOm5vdCgudmVydGljYWwpIC5jb250ZW50LmRzdGVwcGVyLW5vbmUge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi52ZXJ0aWNhbCAuYnMtc3RlcHBlci1wYW5lLmZhZGUuZHN0ZXBwZXItbm9uZSxcclxuLnZlcnRpY2FsIC5jb250ZW50LmZhZGUuZHN0ZXBwZXItbm9uZSB7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcblxyXG4vKiMgc291cmNlTWFwcGluZ1VSTD1icy1zdGVwcGVyLmNzcy5tYXAgKi8iLCJAaW1wb3J0IHVybCgnLi4vd2VsY29tZS1zY3JpcHQvd2VsY29tZS1zY3JpcHQuY29tcG9uZW50LnNjc3MnKTtcclxuQGltcG9ydCAnfmJzLXN0ZXBwZXIvZGlzdC9jc3MvYnMtc3RlcHBlci5taW4uY3NzJztcclxuXHJcblxyXG5cclxuLmJzLXN0ZXBwZXItaGVhZGVyIHtcclxuICBcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNzA3MDcwO1xyXG4gICAgbWFyZ2luOiAycmVtIDAgM3JlbSAwO31cclxuXHJcblxyXG5cclxuLmJzLXN0ZXBwZXIgLnN0ZXAtdHJpZ2dlclxyXG57XHJcbiAgICBmb250LXdlaWdodDogYm9sZCFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHghaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICNBOUE5QTkhaW1wb3J0YW50O1xyXG5cclxufVxyXG5cclxuLmJzLXN0ZXBwZXIgLnN0ZXAtdHJpZ2dlcjpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKVxyXG57XHJcbiAgIGNvbG9yOiAjNkUxOTQ2IWltcG9ydGFudDtcclxuXHJcbn1cclxuXHJcbi50ZXJtcyBoNFxyXG57XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi50ZXJtcyBwXHJcbntcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE3cHg7XHJcbiAgICBjb2xvcjogIzJFMkUyRTtcclxufVxyXG5cclxuLmNvbmR0aW9uXHJcbntcclxuICAgIG1heC1oZWlnaHQ6IDU3MHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxufVxyXG5cclxuLmNvbmR0aW9uOjotd2Via2l0LXNjcm9sbGJhciB7IHdpZHRoOiAwICFpbXBvcnRhbnQgfVxyXG5cclxuLmFjY2VwdFxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNkUxOTQ2O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmc6IDhweCAgNXB4IDhweCAyMHB4O1xyXG59XHJcbi5hY2NlcHQgLmZvcm0tZ3JvdXBcclxue1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIG1hcmdpbi10b3A6IC0ycHg7XHJcblxyXG59XHJcblxyXG4uYWNjZXB0IHB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICBtYXJnaW46IDAgMTBweCAwIDZweDtcclxuXHJcbn1cclxuXHJcbi5hY2NlcHQgIGlcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0E5QTlBOTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiAjNmUxOTQ2O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5jdXN0b20tcmFkaW8gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmVcclxue1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxufVxyXG5cclxuZm9ybSBsYWJlbFxyXG57XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG59XHJcbi5jdXN0b20tY29udHJvbFxyXG57XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE4cHg7XHJcbn1cclxuXHJcbi5jdXN0b20tY29udHJvbC1pbnB1dDpjaGVja2VkIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmVcclxue1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2RTE5NDY7XHJcbn1cclxuLmN1c3RvbS1yYWRpbyAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Y2hlY2tlZCB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YWZ0ZXJcclxue1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxufVxyXG5cclxuLmFjY2VwdGNvbiAsIC5ncmVlbmJ0blxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGE3NTIzIWltcG9ydGFudDtcclxufVxyXG4uY2hlY2tpY29uXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYhaW1wb3J0YW50O1xyXG4gICAgXHJcbiAgICBjb2xvcjogIzBhNzUyMyFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG5cclxuLmJ0bm5leHRcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZFMTk0NjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTdweDtcclxuICAgIHBhZGRpbmc6IDVweCA5cHggNXB4IDMwcHg7XHJcbn1cclxuLm5leHRjb250ZW50XHJcbntcclxuICAgIG1hcmdpbi10b3A6IDI3cmVtO1xyXG59XHJcbi5uZXh0Y29udGVudCBpe1xyXG4gICAgbWFyZ2luLWxlZnQ6IDZweDtcclxufVxyXG5cclxuLmN1c3RvbS1jb250cm9sLWlucHV0OmZpcnN0LWNoaWxkXHJcbntcclxuXHJcbn1cclxuXHJcbi5hZGRidG5cclxue1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2RTE5NDY7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDhweCAzOHB4IDhweCAxMnB4OyAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICBtYXJnaW4tdG9wOiAzdmg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5maW5hbC1zdGVwXHJcbntcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuLmZpbmFsLXN0ZXAgaW1nXHJcbntcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG4uZmluYWwtc3RlcCBwXHJcbntcclxuICAgIGNvbG9yOiAjNkUxOTQ2O1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzNXB4O1xyXG59XHJcbi5maW5hbC1zdGVwIGg0XHJcbntcclxuICAgIGNvbG9yOiAjNkUxOTQ2O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi51cGxvYWQtbWF0ZXJpYWxcclxue1xyXG4gICAgd2lkdGg6IDM4JTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBhZGRpbmctdG9wOiAxNXZoO1xyXG59XHJcblxyXG4udXBsb2FkLW1hdGVyaWFsIGg0XHJcbntcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogIzI3MjcyNztcclxuXHJcbn1cclxuXHJcbi51cGxvYWRcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZFMTk0NjtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMC42cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTZweCAxMnB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4udXBsb2FkLWNvbnRlbnQgXHJcbntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW46IDIzcHggMCAzMnB4IDA7XHJcbn1cclxuXHJcblxyXG4udXBsb2FkLWNvbnRlbnQgaVxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTlBOUE5O1xyXG4gICAgd2lkdGg6IDIxcHg7XHJcbiAgICBoZWlnaHQ6IDIycHg7XHJcbiAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG4ubWF0ZXJpYWxzIHVsXHJcbntcclxuICAgIHdpZHRoOiAzOCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi5tYXRlcmlhbHMgdWwgbGlcclxue1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICBsaW5lLWhlaWdodDogMS41cmVtO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uc3VjY2Vzcy11cGxvYWQgLCAuc3VjY2Vzcy1pY29uXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwQTc1MjMhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICNmZmYhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZm9ybS1jb250ZW50IGZvcm0gXHJcbntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBjb2xvcjogIzAwMDtcclxufVxyXG4uZm9ybS1jb250ZW50ICAuZm9ybS1ncm91cFxyXG57XHJcbiAgICBwYWRkaW5nOiAwIDIwcHggMCAwIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZvcm0tY29udGVudCBmb3JtIGxhYmVsXHJcbntcclxuICAgIGNvbG9yOiAjMjcyNzI3O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEuOHJlbTtcclxuICAgIGZvbnQtZmFtaWx5OiB1bnNldDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uaW5wdXQtY29udGVudFxyXG57XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5pbnB1dC1jb250ZW50ICAuaWNvbi1jaGVja1xyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTlBOUE5O1xyXG4gICAgd2lkdGg6IDIxcHg7XHJcbiAgICBoZWlnaHQ6IDIxcHg7XHJcbiAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG1hcmdpbjogN3B4IDdweCAwIDA7XHJcbn1cclxuLmlucHV0LWNvbnRlbnQgaW5wdXRcclxue1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzZFMTk0NjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcblxyXG59XHJcbi5pbnB1dC1jb250ZW50IGlucHV0OmZvY3VzXHJcbntcclxuICAgIGJvcmRlci1jb2xvcjogICM2RTE5NDYhaW1wb3J0YW50O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZSFpbXBvcnRhbnQ7XHJcblxyXG59XHJcblxyXG4uaW5wdXQtY29udGVudCAubmctc2VsZWN0IC5uZy1zZWxlY3QtY29udGFpbmVyXHJcbntcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICM2RTE5NDYhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTRweCFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNkUxOTQ2IWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjZmZmIWltcG9ydGFudDtcclxuICAgIGFwcGVhcmFuY2U6IG5vbmUhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTVweCFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvbmV3L2Fycm93LnN2ZycpIDk3JSAvIDEwJSBuby1yZXBlYXQgIzZFMTk0NiFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pbnB1dC1jb250ZW50IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YWZ0ZXJcclxue1xyXG4gICBcclxufVxyXG46Om5nLWRlZXAubmctc2VsZWN0XHJcbntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbjo6bmctZGVlcC5uZy1zZWxlY3QgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctcGxhY2Vob2xkZXJcclxue1xyXG5jb2xvcjogI2ZmZiFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcC5uZy1kcm9wZG93bi1wYW5lbCAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGlvblxyXG57XHJcbiAgICBjb2xvcjogI2ZmZiFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmUxOTQ2IWltcG9ydGFudDtcclxufVxyXG46Om5nLWRlZXAubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRpb246aG92ZXJcclxue1xyXG4gICAgY29sb3I6ICNmZmYhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZlMTk0NiFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcC5uZy1zZWxlY3QtY29udGFpbmVyIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICM2RTE5NDYhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTRweCFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNkUxOTQ2IWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjZmZmIWltcG9ydGFudDtcclxuICAgIGFwcGVhcmFuY2U6IG5vbmUhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTVweCFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvbmV3L2Fycm93LnN2ZycpIDk3JSAvIDklIG5vLXJlcGVhdCAjNkUxOTQ2IWltcG9ydGFudDtcclxuIH1cclxuIDo6bmctZGVlcC5uZy1zZWxlY3QgLm5nLWFycm93LXdyYXBwZXIgXHJcbiB7XHJcbiAgICAgZGlzcGxheTogbm9uZSFpbXBvcnRhbnQ7XHJcbiAgICAgXHJcbiB9XHJcblxyXG4gLmxhc3Rmb3JtZ3JvdXAgLmlucHV0LWNvbnRlbnRcclxuIHtcclxuICAgICBkaXNwbGF5OiBibG9jaztcclxuIH1cclxuXHJcbiAubGFzdGZvcm1ncm91cCAubmV4dGNvbnRlbnRcclxuIHtcclxuICAgIG1hcmdpbi10b3A6IDEzcmVtO1xyXG4gfVxyXG5cclxuIC5sYXN0Zm9ybWdyb3VwIC5uZXh0Y29udGVudCBidXR0b25cclxuIHtcclxuICAgZmxvYXQ6IHJpZ2h0O1xyXG4gfVxyXG4gLnRleHRhcmVhLWNvbnRlbnRcclxuIHtcclxuICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gfVxyXG4gLnRleHRhcmVhLWNvbnRlbnQgdGV4dGFyZWFcclxuIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICM2ZTE5NDY7XHJcbiB9XHJcbiIsIkBpbXBvcnQgdXJsKFwiLi4vd2VsY29tZS1zY3JpcHQvd2VsY29tZS1zY3JpcHQuY29tcG9uZW50LnNjc3NcIik7XG5AaW1wb3J0ICd+YnMtc3RlcHBlci9kaXN0L2Nzcy9icy1zdGVwcGVyLm1pbi5jc3MnO1xuLmJzLXN0ZXBwZXItaGVhZGVyIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzcwNzA3MDtcbiAgbWFyZ2luOiAycmVtIDAgM3JlbSAwO1xufVxuXG4uYnMtc3RlcHBlciAuc3RlcC10cmlnZ2VyIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMTBweCAyMHB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjQTlBOUE5ICFpbXBvcnRhbnQ7XG59XG5cbi5icy1zdGVwcGVyIC5zdGVwLXRyaWdnZXI6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkge1xuICBjb2xvcjogIzZFMTk0NiAhaW1wb3J0YW50O1xufVxuXG4udGVybXMgaDQge1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4udGVybXMgcCB7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICBjb2xvcjogIzJFMkUyRTtcbn1cblxuLmNvbmR0aW9uIHtcbiAgbWF4LWhlaWdodDogNTcwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuLmNvbmR0aW9uOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5hY2NlcHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNkUxOTQ2O1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiA4cHggNXB4IDhweCAyMHB4O1xufVxuXG4uYWNjZXB0IC5mb3JtLWdyb3VwIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgbWFyZ2luLXRvcDogLTJweDtcbn1cblxuLmFjY2VwdCBwIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIG1hcmdpbjogMCAxMHB4IDAgNnB4O1xufVxuXG4uYWNjZXB0IGkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTlBOUE5O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICM2ZTE5NDY7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGhlaWdodDogMjBweDtcbn1cblxuLmN1c3RvbS1yYWRpbyAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG5cbmZvcm0gbGFiZWwge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG59XG5cbi5jdXN0b20tY29udHJvbCB7XG4gIG1hcmdpbi1yaWdodDogMThweDtcbn1cblxuLmN1c3RvbS1jb250cm9sLWlucHV0OmNoZWNrZWQgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gIGJvcmRlci1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZFMTk0Njtcbn1cblxuLmN1c3RvbS1yYWRpbyAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Y2hlY2tlZCB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xufVxuXG4uYWNjZXB0Y29uLCAuZ3JlZW5idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGE3NTIzICFpbXBvcnRhbnQ7XG59XG5cbi5jaGVja2ljb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMGE3NTIzICFpbXBvcnRhbnQ7XG59XG5cbi5idG5uZXh0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZFMTk0NjtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDE3cHg7XG4gIHBhZGRpbmc6IDVweCA5cHggNXB4IDMwcHg7XG59XG5cbi5uZXh0Y29udGVudCB7XG4gIG1hcmdpbi10b3A6IDI3cmVtO1xufVxuXG4ubmV4dGNvbnRlbnQgaSB7XG4gIG1hcmdpbi1sZWZ0OiA2cHg7XG59XG5cbi5hZGRidG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNkUxOTQ2O1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogOHB4IDM4cHggOHB4IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIG1hcmdpbi10b3A6IDN2aDtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uZmluYWwtc3RlcCB7XG4gIHdpZHRoOiA2MCU7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmZpbmFsLXN0ZXAgaW1nIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLmZpbmFsLXN0ZXAgcCB7XG4gIGNvbG9yOiAjNkUxOTQ2O1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW4tYm90dG9tOiAzNXB4O1xufVxuXG4uZmluYWwtc3RlcCBoNCB7XG4gIGNvbG9yOiAjNkUxOTQ2O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xufVxuXG4udXBsb2FkLW1hdGVyaWFsIHtcbiAgd2lkdGg6IDM4JTtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nLXRvcDogMTV2aDtcbn1cblxuLnVwbG9hZC1tYXRlcmlhbCBoNCB7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzI3MjcyNztcbn1cblxuLnVwbG9hZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2RTE5NDY7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbi1sZWZ0OiAwLjZyZW07XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE2cHggMTJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udXBsb2FkLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDIzcHggMCAzMnB4IDA7XG59XG5cbi51cGxvYWQtY29udGVudCBpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0E5QTlBOTtcbiAgd2lkdGg6IDIxcHg7XG4gIGhlaWdodDogMjJweDtcbiAgZm9udC1zaXplOiAyM3B4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5tYXRlcmlhbHMgdWwge1xuICB3aWR0aDogMzglO1xuICBtYXJnaW46IGF1dG87XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLm1hdGVyaWFscyB1bCBsaSB7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMS41cmVtO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5zdWNjZXNzLXVwbG9hZCwgLnN1Y2Nlc3MtaWNvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwQTc1MjMgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cblxuLmZvcm0tY29udGVudCBmb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi5mb3JtLWNvbnRlbnQgLmZvcm0tZ3JvdXAge1xuICBwYWRkaW5nOiAwIDIwcHggMCAwICFpbXBvcnRhbnQ7XG59XG5cbi5mb3JtLWNvbnRlbnQgZm9ybSBsYWJlbCB7XG4gIGNvbG9yOiAjMjcyNzI3O1xuICBtYXJnaW4tbGVmdDogMS44cmVtO1xuICBmb250LWZhbWlseTogdW5zZXQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xufVxuXG4uaW5wdXQtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5pbnB1dC1jb250ZW50IC5pY29uLWNoZWNrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0E5QTlBOTtcbiAgd2lkdGg6IDIxcHg7XG4gIGhlaWdodDogMjFweDtcbiAgZm9udC1zaXplOiAyM3B4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IG5vbmU7XG4gIG1hcmdpbjogN3B4IDdweCAwIDA7XG59XG5cbi5pbnB1dC1jb250ZW50IGlucHV0IHtcbiAgYm9yZGVyOiAycHggc29saWQgIzZFMTk0NjtcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcbn1cblxuLmlucHV0LWNvbnRlbnQgaW5wdXQ6Zm9jdXMge1xuICBib3JkZXItY29sb3I6ICM2RTE5NDYgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uaW5wdXQtY29udGVudCAubmctc2VsZWN0IC5uZy1zZWxlY3QtY29udGFpbmVyIHtcbiAgYm9yZGVyOiAycHggc29saWQgIzZFMTk0NiAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAxNHB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2RTE5NDYgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgYXBwZWFyYW5jZTogbm9uZSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvbmV3L2Fycm93LnN2Z1wiKSA5NyUvMTAlIG5vLXJlcGVhdCAjNkUxOTQ2ICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcC5uZy1zZWxlY3Qge1xuICB3aWR0aDogMTAwJTtcbn1cblxuOjpuZy1kZWVwLm5nLXNlbGVjdCAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcC5uZy1kcm9wZG93bi1wYW5lbCAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGlvbiB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2ZTE5NDYgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwLm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyAubmctb3B0aW9uOmhvdmVyIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZlMTk0NiAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAubmctc2VsZWN0LWNvbnRhaW5lciB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM2RTE5NDYgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMTRweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNkUxOTQ2ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIGFwcGVhcmFuY2U6IG5vbmUgIWltcG9ydGFudDtcbiAgcGFkZGluZy1yaWdodDogMTVweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1nL25ldy9hcnJvdy5zdmdcIikgOTclLzklIG5vLXJlcGVhdCAjNkUxOTQ2ICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcC5uZy1zZWxlY3QgLm5nLWFycm93LXdyYXBwZXIge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5sYXN0Zm9ybWdyb3VwIC5pbnB1dC1jb250ZW50IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5sYXN0Zm9ybWdyb3VwIC5uZXh0Y29udGVudCB7XG4gIG1hcmdpbi10b3A6IDEzcmVtO1xufVxuXG4ubGFzdGZvcm1ncm91cCAubmV4dGNvbnRlbnQgYnV0dG9uIHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4udGV4dGFyZWEtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi50ZXh0YXJlYS1jb250ZW50IHRleHRhcmVhIHtcbiAgYm9yZGVyOiAycHggc29saWQgIzZlMTk0Njtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/script-revision/add-script/add-script.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/script-revision/add-script/add-script.component.ts ***!
  \**************************************************************************/
/*! exports provided: AddScriptComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddScriptComponent", function() { return AddScriptComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var bs_stepper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bs-stepper */ "./node_modules/bs-stepper/dist/js/bs-stepper.js");
/* harmony import */ var bs_stepper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bs_stepper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var AddScriptComponent = /** @class */ (function () {
    function AddScriptComponent(router) {
        this.router = router;
        this.showscriptLink = false;
        this.languages = [
            { id: 1, name: 'Arabic' },
            { id: 2, name: 'English' },
            { id: 4, name: 'French' },
            { id: 5, name: 'Russian' },
            { id: 1, name: 'Japanese' },
            { id: 2, name: 'Korean' },
            { id: 4, name: 'Chinese' },
        ];
        this.genra = [
            { id: 1, name: 'Action' },
            { id: 2, name: 'Comedy' },
            { id: 3, name: 'Drama' },
            { id: 4, name: 'Fantasy' },
            { id: 5, name: 'Horror' },
            { id: 6, name: 'Mystery' },
            { id: 7, name: 'Historical' },
            { id: 8, name: 'Religious' }
        ];
        this.subgenra = [
            { id: 1, name: 'War and military action' },
            { id: 1, name: 'spy and espionage action' },
            { id: 1, name: 'Martial arts action' },
            { id: 1, name: 'Western shoot Em up action' },
            { id: 1, name: 'Action hybrid genras' },
        ];
        this.scripts = [
            { id: 1, name: 'script1' },
            { id: 1, name: 'script2' },
        ];
        this.rating = [
            { id: 1, name: '18+' },
            { id: 1, name: '16+' },
            { id: 1, name: '12+' },
            { id: 1, name: 'Family Guidance' },
        ];
        this.acceptCondtion = false;
    }
    AddScriptComponent.prototype.next = function () {
        this.stepper.next();
    };
    AddScriptComponent.prototype.onSubmit = function () {
        // return false;
        this.router.navigateByUrl('/services/addscript');
        // window.reload
        window.location.reload();
    };
    AddScriptComponent.prototype.onReactiveFormSubmit = function () {
        this.regularForm.reset();
    };
    AddScriptComponent.prototype.ngOnInit = function () {
        this.stepper = new bs_stepper__WEBPACK_IMPORTED_MODULE_2___default.a(document.querySelector('#stepper1'), {
            linear: true,
            animation: true,
            // orientation: 'vertical'
            selectors: {
                steps: '.step',
                trigger: '.step-trigger',
            }
        });
        this.regularForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            source: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            script: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            subGenra: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            movie: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            genra: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            language: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            // location: new FormControl(null, [Validators.required]),
            summery: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            formcheck4: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('Option one is this', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            formcheck1: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('Option one is this', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            formcheck2: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('Option one is this', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            formcheck3: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('Option one is this', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
        });
    };
    AddScriptComponent.prototype.handelchange = function (event) {
        console.log("change", event.target.value);
        if (event.target.value == 'Yes') {
            this.acceptCondtion = true;
            document.getElementById('accept').classList.add('acceptcon');
            document.getElementById('icon').classList.add('checkicon');
            document.getElementById('btnstep3').classList.add('greenbtn');
            // document.getElementById('btn').removeAttribute('disabled')
        }
        else {
            this.acceptCondtion = false;
            document.getElementById('accept').classList.remove('acceptcon');
            document.getElementById('icon').classList.remove('checkicon');
            document.getElementById('btnstep3').classList.remove('greenbtn');
            // document.getElementById('btn').setAttribute('disabled', 'disabled')
        }
    };
    AddScriptComponent.prototype.handlechangeScript = function (event) {
        if (event.target.value == 'No') {
            this.showscriptLink = true;
        }
        else {
            this.showscriptLink = false;
        }
    };
    AddScriptComponent.prototype.onFileChanged = function (files) {
        this.fileToUpload = files[files.length - 1];
    };
    AddScriptComponent.prototype.uploadfile = function () {
        document.getElementById('Inputupload').click();
    };
    Object.defineProperty(AddScriptComponent.prototype, "f", {
        get: function () {
            return this.regularForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    AddScriptComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"])
    ], AddScriptComponent.prototype, "floatingLabelForm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('vform', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"])
    ], AddScriptComponent.prototype, "validationForm", void 0);
    AddScriptComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-script',
            template: __webpack_require__(/*! raw-loader!./add-script.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/script-revision/add-script/add-script.component.html"),
            styles: [__webpack_require__(/*! ./add-script.component.scss */ "./src/app/pages/script-revision/add-script/add-script.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AddScriptComponent);
    return AddScriptComponent;
}());



/***/ }),

/***/ "./src/app/pages/script-revision/script-revision-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/script-revision/script-revision-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: ScriptRevisionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScriptRevisionRoutingModule", function() { return ScriptRevisionRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _welcome_script_welcome_script_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./welcome-script/welcome-script.component */ "./src/app/pages/script-revision/welcome-script/welcome-script.component.ts");
/* harmony import */ var _add_script_add_script_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-script/add-script.component */ "./src/app/pages/script-revision/add-script/add-script.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var routes = [
    {
        path: '',
        children: [
            {
                path: 'scriptrevision',
                component: _welcome_script_welcome_script_component__WEBPACK_IMPORTED_MODULE_1__["WelcomeScriptComponent"],
                data: {
                    title: 'script'
                }
            },
            {
                path: 'addscript',
                component: _add_script_add_script_component__WEBPACK_IMPORTED_MODULE_2__["AddScriptComponent"]
            }
        ]
    }
];
var ScriptRevisionRoutingModule = /** @class */ (function () {
    function ScriptRevisionRoutingModule() {
    }
    ScriptRevisionRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
        })
    ], ScriptRevisionRoutingModule);
    return ScriptRevisionRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/script-revision/script-revision.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/script-revision/script-revision.module.ts ***!
  \*****************************************************************/
/*! exports provided: ScriptRevisionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScriptRevisionModule", function() { return ScriptRevisionModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _script_revision_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./script-revision-routing.module */ "./src/app/pages/script-revision/script-revision-routing.module.ts");
/* harmony import */ var _welcome_script_welcome_script_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./welcome-script/welcome-script.component */ "./src/app/pages/script-revision/welcome-script/welcome-script.component.ts");
/* harmony import */ var _add_script_add_script_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-script/add-script.component */ "./src/app/pages/script-revision/add-script/add-script.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");








var ScriptRevisionModule = /** @class */ (function () {
    function ScriptRevisionModule() {
    }
    ScriptRevisionModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_welcome_script_welcome_script_component__WEBPACK_IMPORTED_MODULE_4__["WelcomeScriptComponent"], _add_script_add_script_component__WEBPACK_IMPORTED_MODULE_5__["AddScriptComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _script_revision_routing_module__WEBPACK_IMPORTED_MODULE_3__["ScriptRevisionRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"]
            ]
        })
    ], ScriptRevisionModule);
    return ScriptRevisionModule;
}());



/***/ }),

/***/ "./src/app/pages/script-revision/welcome-script/welcome-script.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/pages/script-revision/welcome-script/welcome-script.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title {\n  font-size: 0.9rem;\n}\n\n.header-title {\n  padding-left: 0.5rem;\n}\n\n.header-title h2 {\n  letter-spacing: 0px;\n  color: #6E1946;\n  font-family: sans-serif;\n  font-size: 18px;\n}\n\n.welcome-container {\n  padding: 60px 10px;\n  text-align: center;\n}\n\n.welcome-container h2 {\n  font-size: 23px;\n  font-weight: 600;\n}\n\n.choose p {\n  margin-top: 15%;\n  font-family: sans-serif;\n  font-size: 25px;\n  font-weight: bold;\n  color: #0A7523;\n}\n\n.choose button {\n  background-color: #6E1946;\n  color: #fff;\n  padding: 8px 38px 8px 12px;\n  border-radius: 20px;\n  font-size: 13px;\n  font-family: sans-serif;\n  margin-top: 15%;\n  border: none;\n}\n\n.choose a {\n  margin-left: 3px;\n  color: #fff;\n}\n\n.choose i {\n  font-size: 17px;\n}\n\n.top-nav {\n  display: flex;\n  text-align: center;\n  justify-content: space-between;\n  width: 52%;\n  margin: auto;\n}\n\n.top-nav a {\n  font-family: sans-serif;\n  color: #949494;\n  font-size: 12px;\n  font-weight: 600;\n}\n\n.top-nav a::after {\n  content: \"\";\n  border-right: 2px solid #949494;\n  width: 3px;\n  height: 3px;\n  margin: 0 20px;\n}\n\n.top-nav a:last-child:after {\n  content: \"\";\n  border-right: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2NyaXB0LXJldmlzaW9uL3dlbGNvbWUtc2NyaXB0L0Q6XFxyZWhhYlxcZnJlZVxcRmMvc3JjXFxhcHBcXHBhZ2VzXFxzY3JpcHQtcmV2aXNpb25cXHdlbGNvbWUtc2NyaXB0XFx3ZWxjb21lLXNjcmlwdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvc2NyaXB0LXJldmlzaW9uL3dlbGNvbWUtc2NyaXB0L3dlbGNvbWUtc2NyaXB0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBRUksaUJBQUE7QUNGSjs7QURJQTtFQUVBLG9CQUFBO0FDRkE7O0FESUE7RUFFSSxtQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUNGSjs7QURLQTtFQUVJLGtCQUFBO0VBQ0Esa0JBQUE7QUNISjs7QURNQTtFQUVJLGVBQUE7RUFDQSxnQkFBQTtBQ0pKOztBRFFBO0VBRUksZUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ05KOztBRFNBO0VBR0kseUJBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7RUFBK0IsbUJBQUE7RUFDL0IsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNQSjs7QURTQTtFQUVJLGdCQUFBO0VBQ0EsV0FBQTtBQ1BKOztBRFVBO0VBRUksZUFBQTtBQ1JKOztBRFdBO0VBRUksYUFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQ1RKOztBRFdBO0VBQ0ksdUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDUko7O0FEV0E7RUFFSSxXQUFBO0VBQ0EsK0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUNUSjs7QURZQTtFQUVJLFdBQUE7RUFDQSxrQkFBQTtBQ1ZKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2NyaXB0LXJldmlzaW9uL3dlbGNvbWUtc2NyaXB0L3dlbGNvbWUtc2NyaXB0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4udGl0bGVcclxue1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbn1cclxuLmhlYWRlci10aXRsZVxyXG57XHJcbnBhZGRpbmctbGVmdDogMC41cmVtO1xyXG59XHJcbi5oZWFkZXItdGl0bGUgaDJcclxue1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICAgIGNvbG9yOiAjNkUxOTQ2O1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbi53ZWxjb21lLWNvbnRhaW5lclxyXG57XHJcbiAgICBwYWRkaW5nOiA2MHB4IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi53ZWxjb21lLWNvbnRhaW5lciBoMlxyXG57XHJcbiAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG5cclxuLmNob29zZSBwIFxyXG57XHJcbiAgICBtYXJnaW4tdG9wOiAxNSU7XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICMwQTc1MjM7XHJcbn1cclxuXHJcbi5jaG9vc2UgYnV0dG9uXHJcbntcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNkUxOTQ2O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiA4cHggMzhweCA4cHggMTJweDsgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgbWFyZ2luLXRvcDogMTUlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcbi5jaG9vc2UgYVxyXG57XHJcbiAgICBtYXJnaW4tbGVmdDogM3B4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgXHJcbn1cclxuLmNob29zZSBpXHJcbntcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxufVxyXG5cclxuLnRvcC1uYXZcclxue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHdpZHRoOiA1MiU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuLnRvcC1uYXYgYXtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6ICM5NDk0OTQ7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4udG9wLW5hdiBhOjphZnRlclxyXG57XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgIzk0OTQ5NDtcclxuICAgIHdpZHRoOiAzcHg7XHJcbiAgICBoZWlnaHQ6IDNweDtcclxuICAgIG1hcmdpbjogMCAyMHB4O1xyXG59XHJcblxyXG4udG9wLW5hdiBhOmxhc3QtY2hpbGQ6YWZ0ZXJcclxue1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGJvcmRlci1yaWdodDogbm9uZVxyXG5cclxufSIsIi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuXG4uaGVhZGVyLXRpdGxlIHtcbiAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XG59XG5cbi5oZWFkZXItdGl0bGUgaDIge1xuICBsZXR0ZXItc3BhY2luZzogMHB4O1xuICBjb2xvcjogIzZFMTk0NjtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLndlbGNvbWUtY29udGFpbmVyIHtcbiAgcGFkZGluZzogNjBweCAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi53ZWxjb21lLWNvbnRhaW5lciBoMiB7XG4gIGZvbnQtc2l6ZTogMjNweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmNob29zZSBwIHtcbiAgbWFyZ2luLXRvcDogMTUlO1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMwQTc1MjM7XG59XG5cbi5jaG9vc2UgYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZFMTk0NjtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDhweCAzOHB4IDhweCAxMnB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBtYXJnaW4tdG9wOiAxNSU7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLmNob29zZSBhIHtcbiAgbWFyZ2luLWxlZnQ6IDNweDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5jaG9vc2UgaSB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cblxuLnRvcC1uYXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDUyJTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4udG9wLW5hdiBhIHtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjOTQ5NDk0O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi50b3AtbmF2IGE6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgIzk0OTQ5NDtcbiAgd2lkdGg6IDNweDtcbiAgaGVpZ2h0OiAzcHg7XG4gIG1hcmdpbjogMCAyMHB4O1xufVxuXG4udG9wLW5hdiBhOmxhc3QtY2hpbGQ6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/script-revision/welcome-script/welcome-script.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/script-revision/welcome-script/welcome-script.component.ts ***!
  \**********************************************************************************/
/*! exports provided: WelcomeScriptComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeScriptComponent", function() { return WelcomeScriptComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var WelcomeScriptComponent = /** @class */ (function () {
    function WelcomeScriptComponent(router) {
        this.router = router;
    }
    WelcomeScriptComponent.prototype.ngOnInit = function () {
    };
    WelcomeScriptComponent.prototype.addservice = function () {
        this.router.navigateByUrl('/services/addscript');
    };
    WelcomeScriptComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    WelcomeScriptComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-welcome-script',
            template: __webpack_require__(/*! raw-loader!./welcome-script.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/script-revision/welcome-script/welcome-script.component.html"),
            styles: [__webpack_require__(/*! ./welcome-script.component.scss */ "./src/app/pages/script-revision/welcome-script/welcome-script.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], WelcomeScriptComponent);
    return WelcomeScriptComponent;
}());



/***/ })

}]);
//# sourceMappingURL=pages-script-revision-script-revision-module.js.map