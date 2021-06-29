(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _js_Chat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/Chat */ "./assets/js/Chat.js");
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/app.css */ "./assets/styles/app.css");




react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_js_Chat__WEBPACK_IMPORTED_MODULE_2__.default, null), document.getElementById("root"));

/***/ }),

/***/ "./assets/js/Chat.js":
/*!***************************!*\
  !*** ./assets/js/Chat.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var twilio_video__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! twilio-video */ "./node_modules/twilio-video/es5/index.js");
/* harmony import */ var twilio_video__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(twilio_video__WEBPACK_IMPORTED_MODULE_15__);














function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var Chat = function Chat() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      roomName = _useState2[0],
      setRoomName = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      hasJoinedRoom = _useState4[0],
      setHasJoinedRoom = _useState4[1];

  var joinChat = function joinChat(event) {
    event.preventDefault();

    if (roomName) {
      axios__WEBPACK_IMPORTED_MODULE_14___default().post('/access_token', {
        roomName: roomName
      }).then(function (response) {
        connectToRoom(response.data.token);
        setHasJoinedRoom(true);
        setRoomName('');
      })["catch"](function (error) {
        console.log(error);
      });
    } else {
      alert("You need to enter a room name");
    }
  };

  var connectToRoom = function connectToRoom(token) {
    var connect = (twilio_video__WEBPACK_IMPORTED_MODULE_15___default().connect),
        createLocalVideoTrack = (twilio_video__WEBPACK_IMPORTED_MODULE_15___default().createLocalVideoTrack);
    var connectOption = {
      name: roomName
    };
    connect(token, connectOption).then(function (room) {
      console.log("Successfully joined a Room: ".concat(room));
      var videoChatWindow = document.getElementById('video-chat-window');
      createLocalVideoTrack().then(function (track) {
        videoChatWindow.appendChild(track.attach());
      });
      room.on('participantConnected', function (participant) {
        console.log("Participant \"".concat(participant.identity, "\" connected"));
        participant.tracks.forEach(function (publication) {
          if (publication.isSubscribed) {
            var track = publication.track;
            videoChatWindow.appendChild(track.attach());
          }
        });
        participant.on('trackSubscribed', function (track) {
          videoChatWindow.appendChild(track.attach());
        });
      });
    }, function (error) {
      console.error("Unable to connect to Room: ".concat(error.message));
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("div", {
    className: "col-md-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("h1", {
    className: "text-title"
  }, "Symfony React Video Chat")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("div", {
    className: "col-md-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("div", {
    className: "mb-5 mt-5"
  }, !hasJoinedRoom && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("form", {
    className: "form-inline",
    onSubmit: joinChat
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("input", {
    type: "text",
    name: 'roomName',
    className: "form-control",
    id: "roomName",
    placeholder: "Enter a room name",
    value: roomName,
    onChange: function onChange(event) {
      return setRoomName(event.target.value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("button", {
    type: "submit",
    className: "btn btn-primary"
  }, "Join Room"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("div", {
    id: "video-chat-window"
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Chat);

/***/ }),

/***/ "./assets/styles/app.css":
/*!*******************************!*\
  !*** ./assets/styles/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_axios_index_js-node_modules_core-js_modules_es_array_for-each_js-node_mo-684f25"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9DaGF0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLmNzcyJdLCJuYW1lcyI6WyJSZWFjdERPTSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJDaGF0IiwidXNlU3RhdGUiLCJyb29tTmFtZSIsInNldFJvb21OYW1lIiwiaGFzSm9pbmVkUm9vbSIsInNldEhhc0pvaW5lZFJvb20iLCJqb2luQ2hhdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJheGlvcyIsInRoZW4iLCJyZXNwb25zZSIsImNvbm5lY3RUb1Jvb20iLCJkYXRhIiwidG9rZW4iLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJhbGVydCIsImNvbm5lY3QiLCJWaWRlbyIsImNyZWF0ZUxvY2FsVmlkZW9UcmFjayIsImNvbm5lY3RPcHRpb24iLCJuYW1lIiwicm9vbSIsInZpZGVvQ2hhdFdpbmRvdyIsInRyYWNrIiwiYXBwZW5kQ2hpbGQiLCJhdHRhY2giLCJvbiIsInBhcnRpY2lwYW50IiwiaWRlbnRpdHkiLCJ0cmFja3MiLCJmb3JFYWNoIiwicHVibGljYXRpb24iLCJpc1N1YnNjcmliZWQiLCJtZXNzYWdlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsNkNBQUEsZUFBZ0IsaURBQUMsNkNBQUQsT0FBaEIsRUFBeUJDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixNQUF4QixDQUF6QixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUNmLGtCQUFnQ0MsZ0RBQVEsQ0FBQyxFQUFELENBQXhDO0FBQUE7QUFBQSxNQUFP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QUFnRSxNQUFFLEVBQUMsVUFBbkU7QUFDTyxlQUFXLEVBQUMsbUJBRG5CO0FBQ3VDLFNBQUssRUFBRUosUUFEOUM7QUFDd0QsWUFBUSxFQUFFLGtCQUFBSyxLQUFLO0FBQUEsYUFBSUosV0FBVyxDQUFDSSxLQUFLLENBQUM4QixNQUFOLENBQWFDLEtBQWQsQ0FBZjtBQUFBO0FBRHZFLElBREosZUFJUTtBQUFRLFFBQUksRUFBQyxRQUFiO0FBQXNCLGFBQVMsRUFBQztBQUFoQyxpQkFKUixDQUZSLENBREosZUFhSTtBQUFLLE1BQUUsRUFBQztBQUFSLElBYkosQ0FMSixDQURKO0FBdUJILENBN0VEOztBQStFQSxpRUFBZXRDLElBQWYsRTs7Ozs7Ozs7Ozs7O0FDbkZBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xuaW1wb3J0IENoYXQgZnJvbSAnLi9qcy9DaGF0JztcbmltcG9ydCAnLi9zdHlsZXMvYXBwLmNzcydcblxuUmVhY3RET00ucmVuZGVyKDxDaGF0Lz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKSk7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgVmlkZW8gZnJvbSBcInR3aWxpby12aWRlb1wiO1xuXG5jb25zdCBDaGF0ID0gKCkgPT4ge1xuICAgIGNvbnN0IFtyb29tTmFtZSwgc2V0Um9vbU5hbWVdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtoYXNKb2luZWRSb29tLCBzZXRIYXNKb2luZWRSb29tXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnN0IGpvaW5DaGF0ID0gZXZlbnQgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAocm9vbU5hbWUpIHtcbiAgICAgICAgICAgIGF4aW9zLnBvc3QoJy9hY2Nlc3NfdG9rZW4nLCB7IHJvb21OYW1lIH0sICkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBjb25uZWN0VG9Sb29tKHJlc3BvbnNlLmRhdGEudG9rZW4pO1xuICAgICAgICAgICAgICAgIHNldEhhc0pvaW5lZFJvb20odHJ1ZSk7XG4gICAgICAgICAgICAgICAgc2V0Um9vbU5hbWUoJycpO1xuXG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWxlcnQoXCJZb3UgbmVlZCB0byBlbnRlciBhIHJvb20gbmFtZVwiKVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGNvbm5lY3RUb1Jvb20gPSAodG9rZW4pID0+IHtcbiAgICAgICAgY29uc3QgeyBjb25uZWN0LCBjcmVhdGVMb2NhbFZpZGVvVHJhY2sgfSA9IFZpZGVvO1xuXG4gICAgICAgIGxldCBjb25uZWN0T3B0aW9uID0geyBuYW1lOiByb29tTmFtZSB9O1xuXG4gICAgICAgIGNvbm5lY3QoIHRva2VuLCBjb25uZWN0T3B0aW9uKS50aGVuKHJvb20gPT4ge1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgU3VjY2Vzc2Z1bGx5IGpvaW5lZCBhIFJvb206ICR7cm9vbX1gKTtcblxuICAgICAgICAgICAgY29uc3QgdmlkZW9DaGF0V2luZG93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZGVvLWNoYXQtd2luZG93Jyk7XG5cbiAgICAgICAgICAgIGNyZWF0ZUxvY2FsVmlkZW9UcmFjaygpLnRoZW4odHJhY2sgPT4ge1xuICAgICAgICAgICAgICAgIHZpZGVvQ2hhdFdpbmRvdy5hcHBlbmRDaGlsZCh0cmFjay5hdHRhY2goKSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcm9vbS5vbigncGFydGljaXBhbnRDb25uZWN0ZWQnLCBwYXJ0aWNpcGFudCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFBhcnRpY2lwYW50IFwiJHtwYXJ0aWNpcGFudC5pZGVudGl0eX1cIiBjb25uZWN0ZWRgKTtcblxuICAgICAgICAgICAgICAgIHBhcnRpY2lwYW50LnRyYWNrcy5mb3JFYWNoKHB1YmxpY2F0aW9uID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHB1YmxpY2F0aW9uLmlzU3Vic2NyaWJlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdHJhY2sgPSBwdWJsaWNhdGlvbi50cmFjaztcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZGVvQ2hhdFdpbmRvdy5hcHBlbmRDaGlsZCh0cmFjay5hdHRhY2goKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHBhcnRpY2lwYW50Lm9uKCd0cmFja1N1YnNjcmliZWQnLCB0cmFjayA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHZpZGVvQ2hhdFdpbmRvdy5hcHBlbmRDaGlsZCh0cmFjay5hdHRhY2goKSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgVW5hYmxlIHRvIGNvbm5lY3QgdG8gUm9vbTogJHtlcnJvci5tZXNzYWdlfWApO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiY29sLW1kLTEyXCJ9PlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXRpdGxlXCI+U3ltZm9ueSBSZWFjdCBWaWRlbyBDaGF0PC9oMT5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wibWItNSBtdC01XCJ9PlxuICAgICAgICAgICAgICAgICAgICB7IWhhc0pvaW5lZFJvb20gJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZm9ybS1pbmxpbmVcIiBvblN1Ym1pdD17am9pbkNoYXR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9eydyb29tTmFtZSd9IGNsYXNzTmFtZT17XCJmb3JtLWNvbnRyb2xcIn0gaWQ9XCJyb29tTmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgYSByb29tIG5hbWVcIiB2YWx1ZT17cm9vbU5hbWV9IG9uQ2hhbmdlPXtldmVudCA9PiBzZXRSb29tTmFtZShldmVudC50YXJnZXQudmFsdWUpfS8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+Sm9pbiBSb29tPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJ2aWRlby1jaGF0LXdpbmRvd1wiPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENoYXQ7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sInNvdXJjZVJvb3QiOiIifQ==