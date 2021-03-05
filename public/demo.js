(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Dashboard.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Charts_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Charts/config */ "./resources/js/components/Charts/config.js");
/* harmony import */ var _components_Charts_LineChart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Charts/LineChart */ "./resources/js/components/Charts/LineChart.js");
/* harmony import */ var _components_Charts_BarChart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Charts/BarChart */ "./resources/js/components/Charts/BarChart.js");
/* harmony import */ var _components_BaseProgress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/BaseProgress */ "./resources/js/components/BaseProgress.vue");
/* harmony import */ var _components_Cards_StatsCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Cards/StatsCard */ "./resources/js/components/Cards/StatsCard.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// Charts


 // Components



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    LineChart: _components_Charts_LineChart__WEBPACK_IMPORTED_MODULE_1__["default"],
    BarChart: _components_Charts_BarChart__WEBPACK_IMPORTED_MODULE_2__["default"],
    BaseProgress: _components_BaseProgress__WEBPACK_IMPORTED_MODULE_3__["default"],
    StatsCard: _components_Cards_StatsCard__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      bigLineChart: {
        allData: [[0, 20, 10, 30, 15, 40, 20, 60, 60], [0, 20, 5, 25, 10, 30, 15, 40, 40]],
        activeIndex: 0,
        chartData: {
          datasets: [{
            label: 'Performance',
            data: [0, 20, 10, 30, 15, 40, 20, 60, 60]
          }],
          labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        extraOptions: _components_Charts_config__WEBPACK_IMPORTED_MODULE_0__["blueChartOptions"]
      },
      redBarChart: {
        chartData: {
          labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [{
            label: 'Sales',
            data: [25, 20, 30, 22, 17, 29]
          }]
        },
        extraOptions: _components_Charts_config__WEBPACK_IMPORTED_MODULE_0__["blueChartOptions"]
      }
    };
  },
  methods: {
    initBigChart: function initBigChart(index) {
      var chartData = {
        datasets: [{
          label: 'Performance',
          data: this.bigLineChart.allData[index]
        }],
        labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      };
      this.bigLineChart.chartData = chartData;
      this.bigLineChart.activeIndex = index;
    }
  },
  mounted: function mounted() {
    this.initBigChart(0);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/GoogleMaps.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/GoogleMaps.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Maps_API_KEY__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Maps/API_KEY */ "./resources/js/views/Maps/API_KEY.js");
/* harmony import */ var google_maps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! google-maps */ "./node_modules/google-maps/lib/esm/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


google_maps__WEBPACK_IMPORTED_MODULE_1__["default"].KEY = _Maps_API_KEY__WEBPACK_IMPORTED_MODULE_0__["API_KEY"];
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    initMap: function initMap(google) {
      var map,
          lat = 40.748817,
          lng = -73.985428,
          color = "#5e72e4";
      map = document.getElementById('map-custom');
      var myLatlng = new google.maps.LatLng(lat, lng);
      var mapOptions = {
        zoom: 12,
        scrollwheel: false,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: [{
          "featureType": "administrative",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#444444"
          }]
        }, {
          "featureType": "landscape",
          "elementType": "all",
          "stylers": [{
            "color": "#f2f2f2"
          }]
        }, {
          "featureType": "poi",
          "elementType": "all",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "road",
          "elementType": "all",
          "stylers": [{
            "saturation": -100
          }, {
            "lightness": 45
          }]
        }, {
          "featureType": "road.highway",
          "elementType": "all",
          "stylers": [{
            "visibility": "simplified"
          }]
        }, {
          "featureType": "road.arterial",
          "elementType": "labels.icon",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "transit",
          "elementType": "all",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "water",
          "elementType": "all",
          "stylers": [{
            "color": color
          }, {
            "visibility": "on"
          }]
        }]
      };
      map = new google.maps.Map(map, mapOptions);
      var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        animation: google.maps.Animation.DROP,
        title: 'Hello World!'
      });
      var contentString = '<div class="info-window-content"><h2>Argon Dashboard PRO</h2>' + '<p>A beautiful premium dashboard for Bootstrap 4.</p></div>';
      var infowindow = new google.maps.InfoWindow({
        content: contentString
      });
      google.maps.event.addListener(marker, 'click', function () {
        infowindow.open(map, marker);
      });
    }
  },
  mounted: function mounted() {
    var _this = this;

    google_maps__WEBPACK_IMPORTED_MODULE_1__["default"].load(function (google) {
      _this.initMap(google);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Pages/About.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Pages/About.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Pages/Contact.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Pages/Contact.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  nme: 'reset',
  data: function data() {
    return {
      form: {
        email: '',
        phone: '',
        name: '',
        description: '',
        checked: []
      },
      foods: [{
        text: 'Select One',
        value: null
      }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
      show: true
    };
  },
  methods: {
    onSubmit: function onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset: function onReset(event) {
      var _this = this;

      event.preventDefault(); // Reset our form values

      this.form.email = '';
      this.form.phone = ''; // Trick to reset/clear native browser form validation state

      this.show = false;
      this.$nextTick(function () {
        _this.show = true;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Pages/Forgot.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Pages/Forgot.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'forgot',
  data: function data() {
    return {
      image: '/images/logo.svg',
      form: {
        email: ''
      }
    };
  },
  methods: {
    onSubmit: function onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset: function onReset(event) {
      var _this = this;

      event.preventDefault(); // Reset our form values

      this.form.email = ''; // Trick to reset/clear native browser form validation state

      this.show = false;
      this.$nextTick(function () {
        _this.show = true;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Pages/Login.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Pages/Login.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Forgot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Forgot */ "./resources/js/views/Pages/Forgot.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'login',
  components: {
    ModalForgot: _Forgot__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      form: {
        email: '',
        name: '',
        checked: []
      },
      foods: [{
        text: 'Select One',
        value: null
      }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
      show: true
    };
  },
  methods: {
    onSubmit: function onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset: function onReset(event) {
      var _this = this;

      event.preventDefault(); // Reset our form values

      this.form.email = '';
      this.form.name = '';
      this.form.food = null;
      this.form.checked = []; // Trick to reset/clear native browser form validation state

      this.show = false;
      this.$nextTick(function () {
        _this.show = true;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Pages/Register.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Pages/Register.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  nme: 'login',
  data: function data() {
    return {
      form: {
        email: '',
        name: '',
        checked: []
      },
      foods: [{
        text: 'Select One',
        value: null
      }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
      show: true
    };
  },
  methods: {
    onSubmit: function onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset: function onReset(event) {
      var _this = this;

      event.preventDefault(); // Reset our form values

      this.form.email = '';
      this.form.name = '';
      this.form.food = null;
      this.form.checked = []; // Trick to reset/clear native browser form validation state

      this.show = false;
      this.$nextTick(function () {
        _this.show = true;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Pages/UserProfile.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Pages/UserProfile.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserProfile_EditProfileForm_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserProfile/EditProfileForm.vue */ "./resources/js/views/Pages/UserProfile/EditProfileForm.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    EditProfileForm: _UserProfile_EditProfileForm_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Pages/UserProfile/EditProfileForm.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Pages/UserProfile/EditProfileForm.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      user: {
        company: 'Creative Code Inc.',
        username: 'michael23',
        email: '',
        firstName: 'Mike',
        lastName: 'Andrew',
        address: 'Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09',
        city: 'New York',
        country: 'USA',
        postalCode: '',
        aboutMe: "Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo."
      }
    };
  },
  methods: {
    updateProfile: function updateProfile() {
      alert('Your data: ' + JSON.stringify(this.user));
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Pages/Welcome.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Pages/Welcome.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'welcome',
  data: function data() {
    return {
      count: 0
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/RegularTables.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/RegularTables.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var element_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! element-ui */ "./node_modules/element-ui/lib/element-ui.common.js");
/* harmony import */ var element_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(element_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Tables_projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tables/projects */ "./resources/js/views/Tables/projects.js");
/* harmony import */ var _Tables_users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tables/users */ "./resources/js/views/Tables/users.js");
/* harmony import */ var _Tables_RegularTables_LightTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Tables/RegularTables/LightTable */ "./resources/js/views/Tables/RegularTables/LightTable.vue");
/* harmony import */ var _Tables_RegularTables_DarkTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Tables/RegularTables/DarkTable */ "./resources/js/views/Tables/RegularTables/DarkTable.vue");
var _components;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  components: (_components = {
    LightTable: _Tables_RegularTables_LightTable__WEBPACK_IMPORTED_MODULE_3__["default"],
    DarkTable: _Tables_RegularTables_DarkTable__WEBPACK_IMPORTED_MODULE_4__["default"]
  }, _defineProperty(_components, element_ui__WEBPACK_IMPORTED_MODULE_0__["Dropdown"].name, element_ui__WEBPACK_IMPORTED_MODULE_0__["Dropdown"]), _defineProperty(_components, element_ui__WEBPACK_IMPORTED_MODULE_0__["DropdownItem"].name, element_ui__WEBPACK_IMPORTED_MODULE_0__["DropdownItem"]), _defineProperty(_components, element_ui__WEBPACK_IMPORTED_MODULE_0__["DropdownMenu"].name, element_ui__WEBPACK_IMPORTED_MODULE_0__["DropdownMenu"]), _defineProperty(_components, element_ui__WEBPACK_IMPORTED_MODULE_0__["Table"].name, element_ui__WEBPACK_IMPORTED_MODULE_0__["Table"]), _defineProperty(_components, element_ui__WEBPACK_IMPORTED_MODULE_0__["TableColumn"].name, element_ui__WEBPACK_IMPORTED_MODULE_0__["TableColumn"]), _components),
  data: function data() {
    return {
      projects: _Tables_projects__WEBPACK_IMPORTED_MODULE_1__["default"],
      users: _Tables_users__WEBPACK_IMPORTED_MODULE_2__["default"]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Sales.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Sales.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_clipboard2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-clipboard2 */ "./node_modules/vue-clipboard2/vue-clipboard.js");
/* harmony import */ var vue_clipboard2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_clipboard2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_BaseHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/BaseHeader */ "./resources/js/components/BaseHeader.vue");
/* harmony import */ var element_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! element-ui */ "./node_modules/element-ui/lib/element-ui.common.js");
/* harmony import */ var element_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(element_ui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Tables_projects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Tables/projects */ "./resources/js/views/Tables/projects.js");
/* harmony import */ var _Tables_users__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Tables/users */ "./resources/js/views/Tables/users.js");
/* harmony import */ var _Tables_RegularTables_LightTable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Tables/RegularTables/LightTable */ "./resources/js/views/Tables/RegularTables/LightTable.vue");
/* harmony import */ var _Tables_RegularTables_DarkTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Tables/RegularTables/DarkTable */ "./resources/js/views/Tables/RegularTables/DarkTable.vue");
var _components;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vue_clipboard2__WEBPACK_IMPORTED_MODULE_1___default.a);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'icons',
  components: (_components = {
    BaseHeader: _components_BaseHeader__WEBPACK_IMPORTED_MODULE_2__["default"],
    LightTable: _Tables_RegularTables_LightTable__WEBPACK_IMPORTED_MODULE_6__["default"],
    DarkTable: _Tables_RegularTables_DarkTable__WEBPACK_IMPORTED_MODULE_7__["default"]
  }, _defineProperty(_components, element_ui__WEBPACK_IMPORTED_MODULE_3__["Dropdown"].name, element_ui__WEBPACK_IMPORTED_MODULE_3__["Dropdown"]), _defineProperty(_components, element_ui__WEBPACK_IMPORTED_MODULE_3__["DropdownItem"].name, element_ui__WEBPACK_IMPORTED_MODULE_3__["DropdownItem"]), _defineProperty(_components, element_ui__WEBPACK_IMPORTED_MODULE_3__["DropdownMenu"].name, element_ui__WEBPACK_IMPORTED_MODULE_3__["DropdownMenu"]), _defineProperty(_components, element_ui__WEBPACK_IMPORTED_MODULE_3__["Table"].name, element_ui__WEBPACK_IMPORTED_MODULE_3__["Table"]), _defineProperty(_components, element_ui__WEBPACK_IMPORTED_MODULE_3__["TableColumn"].name, element_ui__WEBPACK_IMPORTED_MODULE_3__["TableColumn"]), _components),
  data: function data() {
    return {
      projects: _Tables_projects__WEBPACK_IMPORTED_MODULE_4__["default"],
      users: _Tables_users__WEBPACK_IMPORTED_MODULE_5__["default"]
    };
  },
  methods: {
    onCopy: function onCopy() {
      this.$notify({
        type: 'info',
        message: 'Copied to clipboard'
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Tables/RegularTables/DarkTable.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Tables/RegularTables/DarkTable.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../projects */ "./resources/js/views/Tables/projects.js");
/* harmony import */ var element_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! element-ui */ "./node_modules/element-ui/lib/element-ui.common.js");
/* harmony import */ var element_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(element_ui__WEBPACK_IMPORTED_MODULE_1__);
var _components;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'light-table',
  components: (_components = {}, _defineProperty(_components, element_ui__WEBPACK_IMPORTED_MODULE_1__["Table"].name, element_ui__WEBPACK_IMPORTED_MODULE_1__["Table"]), _defineProperty(_components, element_ui__WEBPACK_IMPORTED_MODULE_1__["TableColumn"].name, element_ui__WEBPACK_IMPORTED_MODULE_1__["TableColumn"]), _components),
  data: function data() {
    return {
      projects: _projects__WEBPACK_IMPORTED_MODULE_0__["default"],
      currentPage: 1
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Tables/RegularTables/LightTable.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Tables/RegularTables/LightTable.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../projects */ "./resources/js/views/Tables/projects.js");
/* harmony import */ var element_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! element-ui */ "./node_modules/element-ui/lib/element-ui.common.js");
/* harmony import */ var element_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(element_ui__WEBPACK_IMPORTED_MODULE_1__);
var _components;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'light-table',
  components: (_components = {}, _defineProperty(_components, element_ui__WEBPACK_IMPORTED_MODULE_1__["Table"].name, element_ui__WEBPACK_IMPORTED_MODULE_1__["Table"]), _defineProperty(_components, element_ui__WEBPACK_IMPORTED_MODULE_1__["TableColumn"].name, element_ui__WEBPACK_IMPORTED_MODULE_1__["TableColumn"]), _components),
  data: function data() {
    return {
      projects: _projects__WEBPACK_IMPORTED_MODULE_0__["default"],
      currentPage: 1
    };
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Dashboard.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.el-table .cell{\n  padding-left: 0px;\n  padding-right: 0px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/RegularTables.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/RegularTables.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.el-table.table-dark{\n  background-color: #172b4d;\n  color: #f8f9fe;\n}\n.el-table.table-dark th,\n.el-table.table-dark tr{\n  background-color: #172b4d;\n}\n.el-table.table-dark td,\n.el-table.table-dark th.is-leaf{\n  border-bottom: none;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn-bd": "./node_modules/moment/locale/bn-bd.js",
	"./bn-bd.js": "./node_modules/moment/locale/bn-bd.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-in": "./node_modules/moment/locale/en-in.js",
	"./en-in.js": "./node_modules/moment/locale/en-in.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./en-sg": "./node_modules/moment/locale/en-sg.js",
	"./en-sg.js": "./node_modules/moment/locale/en-sg.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-mx": "./node_modules/moment/locale/es-mx.js",
	"./es-mx.js": "./node_modules/moment/locale/es-mx.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fil": "./node_modules/moment/locale/fil.js",
	"./fil.js": "./node_modules/moment/locale/fil.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-deva": "./node_modules/moment/locale/gom-deva.js",
	"./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
	"./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tk": "./node_modules/moment/locale/tk.js",
	"./tk.js": "./node_modules/moment/locale/tk.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-mo": "./node_modules/moment/locale/zh-mo.js",
	"./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Dashboard.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/RegularTables.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/RegularTables.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./RegularTables.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/RegularTables.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard.vue?vue&type=template&id=1f79daf6&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Dashboard.vue?vue&type=template&id=1f79daf6& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "custon-paneldashboard", attrs: { id: "viewStadistic" } },
    [
      _c(
        "div",
        { staticClass: "custon-panelbodydashboard" },
        [
          _c(
            "base-header",
            { staticClass: "pb-6 pb-8 pt-3 pt-sm-5 bg-transparent " },
            [
              _c(
                "b-row",
                [
                  _c(
                    "b-col",
                    { attrs: { xl: "3", md: "6" } },
                    [
                      _c("stats-card", {
                        staticClass: "mb-4 custom-cardbody",
                        attrs: {
                          title: "980",
                          type: "gradient-red",
                          "sub-title": "Usuarios Totales",
                          icon: "ni ni-active-40"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { xl: "3", md: "6" } },
                    [
                      _c("stats-card", {
                        staticClass: "mb-4 custom-cardbody",
                        attrs: {
                          title: "3250",
                          type: "gradient-orange",
                          "sub-title": "Jeans Totales",
                          icon: "ni ni-chart-pie-35"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { xl: "3", md: "6" } },
                    [
                      _c("stats-card", {
                        staticClass: "mb-4 custom-cardbody",
                        attrs: {
                          title: "$1000",
                          icon: "ni ni-money-coins",
                          type: "gradient-green",
                          "sub-title": "Ventas"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { xl: "3", md: "6" } },
                    [
                      _c("stats-card", {
                        staticClass: "mb-4 custom-cardbody",
                        attrs: {
                          title: "$ 1000",
                          type: "gradient-info",
                          "sub-title": "Total Ventas",
                          icon: "ni ni-chart-bar-32"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-container",
            { staticClass: "mt--7", attrs: { fluid: "" } },
            [
              _c(
                "b-row",
                [
                  _c(
                    "b-col",
                    { staticClass: "mb-5 mb-xl-0", attrs: { xl: "9" } },
                    [
                      _c(
                        "card",
                        {
                          staticClass: "custom-card",
                          attrs: { "header-classes": "bg-transparent" }
                        },
                        [
                          _c(
                            "b-row",
                            {
                              attrs: { slot: "header", "align-v": "center" },
                              slot: "header"
                            },
                            [
                              _c("b-col", { attrs: { xl: "6" } }, [
                                _c(
                                  "h3",
                                  { staticClass: "h3 font-medium mb-0" },
                                  [_vm._v("Referencias  mas vendidas  ")]
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "b-col",
                                { attrs: { xl: "6" } },
                                [
                                  _c(
                                    "b-list-group",
                                    {
                                      staticClass:
                                        "list-group-item list-group-horizontal border-0 list-unstyled custom-listgrouphorizontal",
                                      attrs: { horizontal: "" }
                                    },
                                    [
                                      _c(
                                        "b-list-group-item",
                                        {
                                          staticClass:
                                            "list-group-item border-0"
                                        },
                                        [
                                          _c(
                                            "p",
                                            { staticClass: "p-sm text-black" },
                                            [_vm._v("Ref # 1")]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-list-group-item",
                                        {
                                          staticClass:
                                            "list-group-item border-0"
                                        },
                                        [
                                          _c(
                                            "p",
                                            { staticClass: "p-sm text-black" },
                                            [_vm._v("Ref # 2")]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-list-group-item",
                                        {
                                          staticClass:
                                            "list-group-item border-0"
                                        },
                                        [
                                          _c(
                                            "p",
                                            { staticClass: "p-sm text-black" },
                                            [_vm._v("Ref # 3")]
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("bar-chart", {
                            ref: "barChart",
                            attrs: {
                              height: 350,
                              "chart-data": _vm.redBarChart.chartData
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-row",
                { staticClass: "mt-5" },
                [
                  _c(
                    "b-col",
                    { staticClass: "mb-5 mb-xl-0", attrs: { xl: "8" } },
                    [_c("page-visits-table")],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: "mb-5 mb-xl-0", attrs: { xl: "4" } },
                    [_c("social-traffic-table")],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/GoogleMaps.vue?vue&type=template&id=4cae1acf&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/GoogleMaps.vue?vue&type=template&id=4cae1acf& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "base-header",
        { staticClass: "pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success" },
        [
          _c(
            "b-row",
            [
              _c(
                "b-col",
                { attrs: { xl: "3", md: "6" } },
                [
                  _c(
                    "stats-card",
                    {
                      staticClass: "mb-4",
                      attrs: {
                        title: "Total traffic",
                        type: "gradient-red",
                        "sub-title": "350,897",
                        icon: "ni ni-active-40"
                      }
                    },
                    [
                      _c("template", { slot: "footer" }, [
                        _c("span", { staticClass: "text-success mr-2" }, [
                          _vm._v("3.48%")
                        ]),
                        _vm._v(" "),
                        _c("span", { staticClass: "text-nowrap" }, [
                          _vm._v("Since last month")
                        ])
                      ])
                    ],
                    2
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { xl: "3", md: "6" } },
                [
                  _c(
                    "stats-card",
                    {
                      staticClass: "mb-4",
                      attrs: {
                        title: "Total traffic",
                        type: "gradient-orange",
                        "sub-title": "2,356",
                        icon: "ni ni-chart-pie-35"
                      }
                    },
                    [
                      _c("template", { slot: "footer" }, [
                        _c("span", { staticClass: "text-success mr-2" }, [
                          _vm._v("12.18%")
                        ]),
                        _vm._v(" "),
                        _c("span", { staticClass: "text-nowrap" }, [
                          _vm._v("Since last month")
                        ])
                      ])
                    ],
                    2
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { xl: "3", md: "6" } },
                [
                  _c(
                    "stats-card",
                    {
                      staticClass: "mb-4",
                      attrs: {
                        title: "Sales",
                        type: "gradient-green",
                        "sub-title": "924",
                        icon: "ni ni-money-coins"
                      }
                    },
                    [
                      _c("template", { slot: "footer" }, [
                        _c("span", { staticClass: "text-danger mr-2" }, [
                          _vm._v("5.72%")
                        ]),
                        _vm._v(" "),
                        _c("span", { staticClass: "text-nowrap" }, [
                          _vm._v("Since last month")
                        ])
                      ])
                    ],
                    2
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { xl: "3", md: "6" } },
                [
                  _c(
                    "stats-card",
                    {
                      staticClass: "mb-4",
                      attrs: {
                        title: "Performance",
                        type: "gradient-info",
                        "sub-title": "49,65%",
                        icon: "ni ni-chart-bar-32"
                      }
                    },
                    [
                      _c("template", { slot: "footer" }, [
                        _c("span", { staticClass: "text-success mr-2" }, [
                          _vm._v("54.8%")
                        ]),
                        _vm._v(" "),
                        _c("span", { staticClass: "text-nowrap" }, [
                          _vm._v("Since last month")
                        ])
                      ])
                    ],
                    2
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-container",
        { staticClass: "mt--7", attrs: { fluid: "" } },
        [
          _c(
            "b-row",
            [
              _c(
                "b-col",
                [
                  _c(
                    "b-card",
                    { staticClass: "border-0", attrs: { "no-body": "" } },
                    [
                      _c("div", {
                        staticClass: "map-canvas",
                        staticStyle: { height: "600px" },
                        attrs: { id: "map-custom" }
                      })
                    ]
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Pages/About.vue?vue&type=template&id=65dba413&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Pages/About.vue?vue&type=template&id=65dba413& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "b-container",
    { attrs: { fluid: "", id: "viewAbout" } },
    [
      _c(
        "b-row",
        [
          _c("b-col", { attrs: { sm: "12" } }, [
            _c("div", { staticClass: "contentviewBody " }, [
              _c("div", { staticClass: "contentHeader text-center" }, [
                _c(
                  "h3",
                  {
                    staticClass:
                      "text-secondary title-xl text-center font-weight-bold mb-4"
                  },
                  [_vm._v(" GRUPO DE DESARROLLO")]
                ),
                _vm._v(" "),
                _c("p", { staticClass: "p-md text-black text-center " }, [
                  _vm._v(
                    "\n                        Somos un equipo de estudiantes  que son absolutamente increíbles en la creación de soluciones administrativas para web.\n                    "
                  )
                ])
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "contentBody text-center" },
                [
                  _c(
                    "b-row",
                    { staticClass: "d-flex justify-content-center" },
                    [
                      _c("b-col", { attrs: { md: "6" } }, [
                        _c("picture", { staticClass: "contentImage" }, [
                          _c("img", {
                            attrs: { src: "/images/Avatar5.png", alt: "" }
                          })
                        ]),
                        _vm._v(" "),
                        _c("h6", { staticClass: "title-sm" }, [
                          _vm._v("CESAR VIDALES")
                        ]),
                        _vm._v(" "),
                        _c("p", { staticClass: "p-sm" }, [
                          _vm._v("Desarrollador Jr.")
                        ])
                      ]),
                      _vm._v(" "),
                      _c("b-col", { attrs: { md: "6" } }, [
                        _c("picture", { staticClass: "contentImage" }, [
                          _c("img", {
                            attrs: { src: "/images/Avatar5.png", alt: "" }
                          })
                        ]),
                        _vm._v(" "),
                        _c("h6", { staticClass: "title-sm" }, [
                          _vm._v("EIMY GUARNIZO")
                        ]),
                        _vm._v(" "),
                        _c("p", { staticClass: "p-sm" }, [
                          _vm._v("Desarrollador Jr.")
                        ])
                      ]),
                      _vm._v(" "),
                      _c("b-col", { attrs: { md: "4" } }, [
                        _c("picture", { staticClass: "contentImage" }, [
                          _c("img", {
                            attrs: { src: "/images/Avatar5.png", alt: "" }
                          })
                        ]),
                        _vm._v(" "),
                        _c("h6", { staticClass: "title-sm" }, [
                          _vm._v("STIVEN UNIVERSE")
                        ]),
                        _vm._v(" "),
                        _c("p", { staticClass: "p-sm" }, [
                          _vm._v("Desarrollador Jr.")
                        ])
                      ]),
                      _vm._v(" "),
                      _c("b-col", { attrs: { md: "4" } }, [
                        _c("picture", { staticClass: "contentImage" }, [
                          _c("img", {
                            attrs: { src: "/images/Avatar5.png", alt: "" }
                          })
                        ]),
                        _vm._v(" "),
                        _c("h6", { staticClass: "title-sm" }, [_vm._v("DIOS")]),
                        _vm._v(" "),
                        _c("p", { staticClass: "p-sm" }, [
                          _vm._v("Desarrollador Jr.")
                        ])
                      ])
                    ],
                    1
                  )
                ],
                1
              )
            ])
          ])
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Pages/Contact.vue?vue&type=template&id=5fffbfa6&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Pages/Contact.vue?vue&type=template&id=5fffbfa6& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "b-container",
    { attrs: { fluid: "", id: "viewContact" } },
    [
      _c(
        "b-row",
        [
          _c(
            "b-col",
            { staticClass: "pr-lg-2", attrs: { sm: "12", lg: "5" } },
            [
              _c("picture", { staticClass: "imgContact" }, [
                _c("img", { attrs: { src: "/images/contact.svg", alt: "" } })
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { staticClass: "pl-lg-2", attrs: { sm: "12", lg: "7" } },
            [
              _c("h4", { staticClass: "title-lg text-secondary" }, [
                _vm._v("\n              Envianos un mensaje !\n          ")
              ]),
              _vm._v(" "),
              _c(
                "b-container",
                { attrs: { fluid: "" } },
                [
                  _c(
                    "b-row",
                    [
                      _c(
                        "b-col",
                        { attrs: { sm: "12" } },
                        [
                          _vm.show
                            ? _c(
                                "b-form",
                                {
                                  on: {
                                    submit: _vm.onSubmit,
                                    reset: _vm.onReset
                                  }
                                },
                                [
                                  _c(
                                    "b-form-group",
                                    {
                                      staticClass: "custom-form-group mb-3",
                                      attrs: {
                                        id: "input-group-1",
                                        "label-for": "input-1",
                                        description: "",
                                        label: "Nombre:"
                                      }
                                    },
                                    [
                                      _c("b-form-input", {
                                        staticClass: "custom-input ",
                                        attrs: {
                                          id: "input-1",
                                          type: "text",
                                          placeholder: "Emily ",
                                          required: ""
                                        },
                                        model: {
                                          value: _vm.form.name,
                                          callback: function($$v) {
                                            _vm.$set(_vm.form, "name", $$v)
                                          },
                                          expression: "form.name"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-form-group",
                                    {
                                      staticClass: "custom-form-group mb-3",
                                      attrs: {
                                        id: "input-group-2",
                                        "label-for": "input-2",
                                        description: "",
                                        label: "Correo:"
                                      }
                                    },
                                    [
                                      _c("b-form-input", {
                                        staticClass: "custom-input ",
                                        attrs: {
                                          id: "input-2",
                                          type: "email",
                                          placeholder: "Correo@gmail.com",
                                          required: ""
                                        },
                                        model: {
                                          value: _vm.form.email,
                                          callback: function($$v) {
                                            _vm.$set(_vm.form, "email", $$v)
                                          },
                                          expression: "form.email"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-form-row",
                                    [
                                      _c(
                                        "b-form-group",
                                        {
                                          staticClass:
                                            "custom-form-group mb-3 col-sm-12 col-lg-6 ",
                                          attrs: {
                                            id: "input-group-3",
                                            "label-for": "input-3",
                                            description: "",
                                            label: "Telefono:"
                                          }
                                        },
                                        [
                                          _c("b-form-input", {
                                            staticClass: "custom-input",
                                            attrs: {
                                              id: "input-3",
                                              type: "text",
                                              placeholder: "311 550 5552",
                                              required: ""
                                            },
                                            model: {
                                              value: _vm.form.phone,
                                              callback: function($$v) {
                                                _vm.$set(_vm.form, "phone", $$v)
                                              },
                                              expression: "form.phone"
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c("b-form-group", {
                                        staticClass:
                                          "custom-form-group mb-3 col-sm-12 col-lg-6",
                                        attrs: {
                                          id: "input-group-4",
                                          label: "Preferencia de comunicacion:"
                                        },
                                        scopedSlots: _vm._u(
                                          [
                                            {
                                              key: "default",
                                              fn: function(ref) {
                                                var ariaDescribedby =
                                                  ref.ariaDescribedby
                                                return [
                                                  _c(
                                                    "b-form-checkbox-group",
                                                    {
                                                      staticClass:
                                                        "d-flex align-items-center h-100",
                                                      attrs: {
                                                        id: "checkboxes-4",
                                                        "aria-describedby": ariaDescribedby
                                                      },
                                                      model: {
                                                        value: _vm.form.checked,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.form,
                                                            "checked",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "form.checked"
                                                      }
                                                    },
                                                    [
                                                      _c(
                                                        "b-form-checkbox",
                                                        {
                                                          attrs: { value: "me" }
                                                        },
                                                        [_vm._v("Correo")]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "b-form-checkbox",
                                                        {
                                                          attrs: {
                                                            value: "that"
                                                          }
                                                        },
                                                        [_vm._v("Telefono")]
                                                      )
                                                    ],
                                                    1
                                                  )
                                                ]
                                              }
                                            }
                                          ],
                                          null,
                                          false,
                                          2952578102
                                        )
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-form-group",
                                    {
                                      staticClass: "custom-form-group mb-3",
                                      attrs: {
                                        id: "input-group-6",
                                        "label-for": "input-6",
                                        description: "",
                                        label: "Mensaje:"
                                      }
                                    },
                                    [
                                      _c("b-form-textarea", {
                                        staticClass: "customtextArea",
                                        attrs: {
                                          id: "textarea-small",
                                          size: "sm",
                                          placeholder: "Small textarea"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "form-group d-flex justify-content-lg-end justify-content-center"
                                    },
                                    [
                                      _c(
                                        "b-button",
                                        {
                                          staticClass: "custom-btn-secondary",
                                          attrs: {
                                            type: "submit",
                                            disabled: ""
                                          }
                                        },
                                        [_vm._v("Enviar")]
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            : _vm._e()
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Pages/Forgot.vue?vue&type=template&id=1e8104e6&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Pages/Forgot.vue?vue&type=template&id=1e8104e6& ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "b-modal",
    {
      ref: "viewForgot",
      attrs: { id: "viewForgot", "hide-footer": "" },
      scopedSlots: _vm._u([
        {
          key: "modal-header",
          fn: function(ref) {
            var close = ref.close
            return [
              _c("picture", { staticClass: "contentLogo" }, [
                _c("img", { attrs: { src: "/images/logo.svg", alt: "" } })
              ]),
              _vm._v(" "),
              _c(
                "b-button",
                {
                  staticClass: "close custom-close",
                  attrs: { size: "xs" },
                  on: {
                    click: function($event) {
                      return close()
                    }
                  }
                },
                [_c("i", { staticClass: "fas fa-times " })]
              )
            ]
          }
        }
      ])
    },
    [
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c(
            "b-col",
            { staticClass: "justify-content-center", attrs: { sm: "12" } },
            [
              _c(
                "h3",
                { staticClass: "title-xl text-secondary text-center mb-4" },
                [_vm._v("\n             OLVIDASTE TU CONTRASEÑA ?\n          ")]
              ),
              _vm._v(" "),
              _c("p", { staticClass: "p-md text-secondary mb-4" }, [
                _vm._v("Ingrese su correo electronico: ")
              ]),
              _vm._v(" "),
              _c(
                "b-form",
                {
                  staticClass: "customform mb-3 ",
                  on: { submit: _vm.onSubmit, reset: _vm.onReset }
                },
                [
                  _c(
                    "b-form-group",
                    {
                      staticClass: "custom-form-group",
                      attrs: {
                        id: "input-group-1",
                        "label-for": "input-1",
                        description: ""
                      }
                    },
                    [
                      _c("b-form-input", {
                        staticClass: "custom-input",
                        attrs: {
                          id: "input-1",
                          type: "email",
                          placeholder: "corre@gmail.com",
                          required: ""
                        },
                        model: {
                          value: _vm.form.email,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "email", $$v)
                          },
                          expression: "form.email"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "form-group d-flex justify-content-center" },
                    [
                      _c(
                        "b-button",
                        {
                          staticClass: "custom-btn-primary",
                          attrs: { type: "submit" }
                        },
                        [_vm._v("Enviar link")]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Pages/Login.vue?vue&type=template&id=4f3b21ef&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Pages/Login.vue?vue&type=template&id=4f3b21ef& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "b-container",
    { staticClass: "p-0", attrs: { fluid: "", id: "viewLogin" } },
    [
      _c("b-row", [_c("b-col", [_c("ModalForgot")], 1)], 1),
      _vm._v(" "),
      _c(
        "b-row",
        {},
        [
          _c(
            "b-col",
            {
              staticClass: "justify-content-center py-3 pr-md-2",
              attrs: { sm: "12", md: "8" }
            },
            [
              _c(
                "b-container",
                { attrs: { fluid: "" } },
                [
                  _c(
                    "b-row",
                    [
                      _c(
                        "b-col",
                        {
                          staticClass: "justify-content-md-end d-flex mb-4",
                          attrs: { sm: "12" }
                        },
                        [
                          _c(
                            "router-link",
                            { attrs: { to: { name: "welcome" } } },
                            [
                              _c("picture", { staticClass: "contentLogo" }, [
                                _c("img", {
                                  attrs: { src: "/images/logo.svg", alt: "" }
                                })
                              ])
                            ]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("h3", { staticClass: "title-xl  mb-4 text-primary" }, [
                    _vm._v("\n                  INICIO SESION\n              ")
                  ]),
                  _vm._v(" "),
                  _vm.show
                    ? _c(
                        "b-form",
                        {
                          staticClass: "formLogin mb-5 ",
                          on: { submit: _vm.onSubmit, reset: _vm.onReset }
                        },
                        [
                          _c(
                            "b-form-group",
                            {
                              staticClass: "custom-form-group mb-3",
                              attrs: {
                                id: "input-group-1",
                                "label-for": "input-1",
                                description: "",
                                label: "Correo:"
                              }
                            },
                            [
                              _c("b-form-input", {
                                staticClass: "custom-input ",
                                attrs: {
                                  id: "input-1",
                                  type: "email",
                                  placeholder: "Ingrese correo",
                                  required: ""
                                },
                                model: {
                                  value: _vm.form.email,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "email", $$v)
                                  },
                                  expression: "form.email"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-form-group",
                            {
                              staticClass: "custom-form-group mb-5",
                              attrs: {
                                id: "input-group-2",
                                label: "Contraseña:",
                                "label-for": "input-2"
                              }
                            },
                            [
                              _c("b-form-input", {
                                staticClass: "custom-input",
                                attrs: {
                                  id: "input-2",
                                  placeholder: "Ingrese Contraseña",
                                  type: "password",
                                  required: ""
                                },
                                model: {
                                  value: _vm.form.name,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "name", $$v)
                                  },
                                  expression: "form.name"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "form-group d-flex justify-content-center"
                            },
                            [
                              _c(
                                "b-button",
                                {
                                  staticClass: "custom-btn-primary",
                                  attrs: { type: "submit" }
                                },
                                [_vm._v("Iniciar Sesion")]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "b-row",
                    [
                      _c(
                        "b-col",
                        { staticClass: "d-flex justify-content-between" },
                        [
                          _c(
                            "b-link",
                            {
                              directives: [
                                {
                                  name: "b-modal",
                                  rawName: "v-b-modal.viewForgot",
                                  modifiers: { viewForgot: true }
                                }
                              ],
                              staticClass: "text-black"
                            },
                            [_vm._v(" Olvido su contraseña?")]
                          ),
                          _vm._v(" "),
                          _c(
                            "router-link",
                            {
                              staticClass: "text-black",
                              attrs: { to: "/register" }
                            },
                            [_vm._v("Registro")]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            {
              staticClass: "pl-md-2 justify-content-center",
              attrs: { sm: "12", md: "4" }
            },
            [
              _c(
                "div",
                { staticClass: "welcomeback" },
                [
                  _c("div", { staticClass: "welcomebackHeader " }, [
                    _c("h3", { staticClass: "title-xl   text-secondary" }, [
                      _vm._v(
                        "\n                       BIENVENIDO !!\n                  "
                      )
                    ]),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(" "),
                    _c("p", { staticClass: "p-md text-black" }, [
                      _vm._v(
                        "\n                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nulla blanditiis nam. Quidem, deleniti et? Quaerat eum consequatur ea rem! Quaerat cumque dolorem vel nihil? Dolores accusamus voluptatibus iusto similique!\n                  "
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "router-link",
                    {
                      staticClass: " custom-btn-secondary",
                      attrs: { to: { name: "welcome" } }
                    },
                    [_vm._v("Regresar")]
                  )
                ],
                1
              )
            ]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Pages/Register.vue?vue&type=template&id=1eba06e6&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Pages/Register.vue?vue&type=template&id=1eba06e6& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "b-container",
    { staticClass: "p-0", attrs: { fluid: "", id: "viewRegister" } },
    [
      _c(
        "b-row",
        {},
        [
          _c(
            "b-col",
            {
              staticClass: "pr-md-2 justify-content-center",
              attrs: { sm: "12", md: "4" }
            },
            [
              _c(
                "div",
                { staticClass: "welcomeback" },
                [
                  _c(
                    "b-row",
                    [
                      _c(
                        "b-col",
                        {
                          staticClass: "justify-content-md-end d-flex mb-4",
                          attrs: { sm: "12" }
                        },
                        [
                          _c(
                            "router-link",
                            { attrs: { to: { name: "welcome" } } },
                            [
                              _c("picture", { staticClass: "contentLogo" }, [
                                _c("img", {
                                  attrs: { src: "/images/logo.svg", alt: "" }
                                })
                              ])
                            ]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "welcomebackHeader" }, [
                    _c("h3", { staticClass: "title-xl   text-secondary" }, [
                      _vm._v(
                        "\n                          BIENVENIDO !!\n                      "
                      )
                    ]),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(" "),
                    _c("p", { staticClass: "p-md text-black" }, [
                      _vm._v(
                        "\n                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nulla blanditiis nam. Quidem, deleniti et? Quaerat eum consequatur ea rem! Quaerat cumque dolorem vel nihil? Dolores accusamus voluptatibus iusto similique!\n                      "
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "router-link",
                    {
                      staticClass: "custom-btn-secondary",
                      attrs: { to: { name: "login" } }
                    },
                    [_vm._v("Iniciar sesion")]
                  )
                ],
                1
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { staticClass: "py-3 pl-md-2", attrs: { sm: "12", md: "8" } },
            [
              _c(
                "b-container",
                { staticClass: "p-4", attrs: { fluid: "" } },
                [
                  _c(
                    "b-row",
                    { staticClass: "justify-content-center " },
                    [
                      _c("b-col", { attrs: { sm: "12" } }, [
                        _c(
                          "h3",
                          {
                            staticClass:
                              "title-xl  text-center mb-4 text-primary"
                          },
                          [
                            _vm._v(
                              "\n                      CREAR CUENTA\n                      "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "itemSocial  mb-5" },
                          [
                            _c(
                              "b-list-group",
                              {
                                staticClass: "custom-list-group",
                                attrs: { horizontal: "" }
                              },
                              [
                                _c("b-list-group-item", [
                                  _c("i", { staticClass: "fab fa-google" })
                                ]),
                                _vm._v(" "),
                                _c("b-list-group-item", [
                                  _c("i", { staticClass: "fab fa-github" })
                                ])
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { attrs: { sm: "12", lg: "8" } },
                        [
                          _vm.show
                            ? _c(
                                "b-form",
                                {
                                  staticClass: "formLogin ",
                                  on: {
                                    submit: _vm.onSubmit,
                                    reset: _vm.onReset
                                  }
                                },
                                [
                                  _c(
                                    "b-form-group",
                                    {
                                      staticClass: "custom-form-group mb-3",
                                      attrs: {
                                        id: "input-group-1",
                                        "label-for": "input-1",
                                        description: "",
                                        label: "Nombre:"
                                      }
                                    },
                                    [
                                      _c("b-form-input", {
                                        staticClass: "custom-input ",
                                        attrs: {
                                          id: "input-1",
                                          type: "nombre",
                                          placeholder: "Ingrese el nombre",
                                          required: ""
                                        },
                                        model: {
                                          value: _vm.form.email,
                                          callback: function($$v) {
                                            _vm.$set(_vm.form, "email", $$v)
                                          },
                                          expression: "form.email"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-form-group",
                                    {
                                      staticClass: "custom-form-group mb-3",
                                      attrs: {
                                        id: "input-group-1",
                                        "label-for": "input-1",
                                        description: "",
                                        label: "Correo:"
                                      }
                                    },
                                    [
                                      _c("b-form-input", {
                                        staticClass: "custom-input ",
                                        attrs: {
                                          id: "input-1",
                                          type: "email",
                                          placeholder: "Ingrese el correo",
                                          required: ""
                                        },
                                        model: {
                                          value: _vm.form.email,
                                          callback: function($$v) {
                                            _vm.$set(_vm.form, "email", $$v)
                                          },
                                          expression: "form.email"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-form-group",
                                    {
                                      staticClass: "custom-form-group mb-5",
                                      attrs: {
                                        id: "input-group-2",
                                        label: "Contraseña:",
                                        "label-for": "input-2"
                                      }
                                    },
                                    [
                                      _c("b-form-input", {
                                        staticClass: "custom-input",
                                        attrs: {
                                          id: "input-2",
                                          placeholder: "Ingrese Contraseña",
                                          type: "password",
                                          required: ""
                                        },
                                        model: {
                                          value: _vm.form.name,
                                          callback: function($$v) {
                                            _vm.$set(_vm.form, "name", $$v)
                                          },
                                          expression: "form.name"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "form-group d-flex justify-content-center"
                                    },
                                    [
                                      _c(
                                        "b-button",
                                        {
                                          staticClass: "custom-btn-primary",
                                          attrs: { type: "submit" }
                                        },
                                        [_vm._v("Registrarme")]
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            : _vm._e()
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Pages/UserProfile.vue?vue&type=template&id=83b5de38&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Pages/UserProfile.vue?vue&type=template&id=83b5de38& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "custon-paneldashboard", attrs: { id: "viewUserProfile" } },
    [
      _c(
        "div",
        { staticClass: "custon-panelbodydashboard" },
        [
          _c(
            "b-card",
            { staticClass: "card-profile custom-card" },
            [
              _c(
                "div",
                {
                  staticClass:
                    "header pb-4   pt-3 pt-sm-5 d-flex align-items-center profile-header"
                },
                [
                  _c(
                    "b-container",
                    { attrs: { fluid: "" } },
                    [
                      _c(
                        "b-row",
                        [
                          _c("b-col", { attrs: { lg: "3", md: "2" } }, [
                            _c("picture", { staticClass: "avatarInfoUser" }, [
                              _c("img", {
                                attrs: {
                                  src: "images/Avatar5.png",
                                  alt: "FotoAvatar",
                                  srcset: ""
                                }
                              })
                            ])
                          ]),
                          _vm._v(" "),
                          _c("b-col", { attrs: { lg: "7", md: "9" } }, [
                            _c(
                              "h2",
                              {
                                staticClass:
                                  "display-3 text-dark font-weight-bold"
                              },
                              [_vm._v("SERGIO PENAGOS")]
                            ),
                            _vm._v(" "),
                            _c(
                              "p",
                              { staticClass: "text-dark p-md mt-0 mb-5" },
                              [_vm._v("Vendedor")]
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-col", { attrs: { lg: "2", md: "1" } }, [
                            _c(
                              "div",
                              { staticClass: "dropdown open float-right" },
                              [
                                _c("button", {
                                  staticClass:
                                    "btn  btn-sm dropdown-toggle btn-light",
                                  attrs: {
                                    type: "button",
                                    id: "triggerId",
                                    "data-toggle": "dropdown",
                                    "aria-haspopup": "true",
                                    "aria-expanded": "false"
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass: "dropdown-menu",
                                    attrs: { "aria-labelledby": "triggerId" }
                                  },
                                  [
                                    _c(
                                      "router-link",
                                      {
                                        staticClass: "dropdown-item",
                                        attrs: { to: { name: "editprofile" } }
                                      },
                                      [
                                        _c("i", {
                                          staticClass:
                                            "fas fa-pencil-alt text-primary"
                                        }),
                                        _vm._v("Editar Información")
                                      ]
                                    )
                                  ],
                                  1
                                )
                              ]
                            )
                          ])
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-card-body",
                [
                  _c(
                    "b-row",
                    [
                      _c(
                        "b-col",
                        { staticClass: "col-sm-12 col-md-6 mb-3 col-xl-4" },
                        [
                          _c(
                            "p",
                            {
                              staticClass: "p-lg font-weitgh-medium text-black"
                            },
                            [_vm._v("Nombre:")]
                          ),
                          _vm._v(" "),
                          _c(
                            "span",
                            { staticClass: "span-md text-secondary" },
                            [_vm._v("Sergio Andres Penagos ")]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { staticClass: "col-sm-12 col-md-6 mb-3 col-xl-4" },
                        [
                          _c(
                            "p",
                            {
                              staticClass: "p-lg font-weitgh-medium text-black"
                            },
                            [_vm._v("Tipo de documento: ")]
                          ),
                          _vm._v(" "),
                          _c(
                            "span",
                            { staticClass: "span-md text-secondary" },
                            [_vm._v("Cedula ")]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { staticClass: "col-sm-12 col-md-6 mb-3 col-xl-4" },
                        [
                          _c(
                            "p",
                            {
                              staticClass: "p-lg font-weitgh-medium text-black"
                            },
                            [_vm._v("Documento:")]
                          ),
                          _vm._v(" "),
                          _c(
                            "span",
                            { staticClass: "span-md text-secondary" },
                            [_vm._v("1120381370 ")]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { staticClass: "col-sm-12 col-md-6 mb-3 col-xl-4" },
                        [
                          _c(
                            "p",
                            {
                              staticClass: "p-lg font-weitgh-medium text-black"
                            },
                            [_vm._v("Nro. Celular")]
                          ),
                          _vm._v(" "),
                          _c(
                            "span",
                            { staticClass: "span-md text-secondary" },
                            [_vm._v("321 069 9966")]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { staticClass: "col-sm-12 col-md-6 mb-3 col-xl-4" },
                        [
                          _c(
                            "p",
                            {
                              staticClass: "p-lg font-weitgh-medium text-black"
                            },
                            [_vm._v("Correo Electronico: ")]
                          ),
                          _vm._v(" "),
                          _c(
                            "span",
                            { staticClass: "span-md text-secondary" },
                            [_vm._v("marina@gmail.com ")]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { staticClass: "col-sm-12 col-md-6 mb-3 col-xl-4" },
                        [
                          _c(
                            "p",
                            {
                              staticClass: "p-lg font-weitgh-medium text-black"
                            },
                            [_vm._v("Correo empresarial:")]
                          ),
                          _vm._v(" "),
                          _c(
                            "span",
                            { staticClass: "span-md text-secondary" },
                            [_vm._v("Sergio Andres Penagos ")]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { staticClass: "col-sm-12 col-md-6 col-xl-4" },
                        [
                          _c(
                            "p",
                            {
                              staticClass: "p-lg font-weitgh-medium text-black"
                            },
                            [_vm._v("Estado: ")]
                          ),
                          _vm._v(" "),
                          _c("span", { staticClass: "span-md text-primary" }, [
                            _vm._v("Activo ")
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { staticClass: "col-sm-12 col-md-6 col-xl-4" },
                        [
                          _c(
                            "p",
                            {
                              staticClass: "p-lg font-weitgh-medium text-black"
                            },
                            [_vm._v("Rol:")]
                          ),
                          _vm._v(" "),
                          _c(
                            "span",
                            { staticClass: "span-md text-secondary" },
                            [_vm._v("Vendedor ")]
                          )
                        ]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Pages/UserProfile/EditProfileForm.vue?vue&type=template&id=231e9058&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Pages/UserProfile/EditProfileForm.vue?vue&type=template&id=231e9058& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "custon-paneldashboard", attrs: { id: "viewUserProfile" } },
    [
      _c(
        "div",
        { staticClass: "custon-panelbodydashboard" },
        [
          _c(
            "b-card",
            { staticClass: "card-profile custom-card" },
            [
              _c(
                "div",
                {
                  staticClass:
                    "header pb-4   pt-3 pt-sm-5 d-flex align-items-center profile-header"
                },
                [
                  _c(
                    "b-container",
                    { attrs: { fluid: "" } },
                    [
                      _c(
                        "b-row",
                        [
                          _c("b-col", { attrs: { lg: "3", md: "2" } }, [
                            _c("picture", { staticClass: "avatarInfoUser" }, [
                              _c("img", {
                                attrs: {
                                  src: "images/Avatar5.png",
                                  alt: "FotoAvatar",
                                  srcset: ""
                                }
                              })
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "b-col",
                            { attrs: { lg: "7", md: "9" } },
                            [
                              _c(
                                "h2",
                                {
                                  staticClass:
                                    "display-3 text-dark font-weight-bold"
                                },
                                [_vm._v("SERGIO PENAGOS")]
                              ),
                              _vm._v(" "),
                              _c(
                                "p",
                                { staticClass: "text-dark p-md mt-0 mb-5" },
                                [_vm._v("Vendedor")]
                              ),
                              _vm._v(" "),
                              _c("b-button", { staticClass: "btn-border " }, [
                                _vm._v("Cambiar avatar")
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-card-body",
                [
                  _c(
                    "card",
                    { staticClass: "border-0" },
                    [
                      _c(
                        "b-row",
                        {
                          attrs: { slot: "header", "align-v": "center" },
                          slot: "header"
                        },
                        [
                          _c("b-col", { attrs: { cols: "8" } }, [
                            _c("h3", { staticClass: "mb-0" }, [
                              _vm._v("Editar Perfil ")
                            ])
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-form",
                        {
                          on: {
                            submit: function($event) {
                              $event.preventDefault()
                              return _vm.updateProfile($event)
                            }
                          }
                        },
                        [
                          _c(
                            "h6",
                            { staticClass: "heading-small text-muted mb-4" },
                            [_vm._v("Informacion General")]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "pl-lg-4" },
                            [
                              _c(
                                "b-row",
                                [
                                  _c(
                                    "b-col",
                                    { attrs: { lg: "6", xl: "4" } },
                                    [
                                      _c("base-input", {
                                        staticClass: "custom-input",
                                        attrs: {
                                          type: "text",
                                          label: "Nombre:",
                                          placeholder: "Username"
                                        },
                                        model: {
                                          value: _vm.user.username,
                                          callback: function($$v) {
                                            _vm.$set(_vm.user, "username", $$v)
                                          },
                                          expression: "user.username"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-col",
                                    { attrs: { lg: "6", xl: "4" } },
                                    [
                                      _c("base-input", {
                                        staticClass: "custom-input",
                                        attrs: {
                                          type: "text",
                                          label: "Tipo de documento:",
                                          placeholder: "Cedula"
                                        },
                                        model: {
                                          value: _vm.user.username,
                                          callback: function($$v) {
                                            _vm.$set(_vm.user, "username", $$v)
                                          },
                                          expression: "user.username"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-col",
                                    { attrs: { lg: "6", xl: "4" } },
                                    [
                                      _c("base-input", {
                                        staticClass: "custom-input",
                                        attrs: {
                                          type: "text",
                                          label: "Nro de documento:",
                                          placeholder: "11111111"
                                        },
                                        model: {
                                          value: _vm.user.username,
                                          callback: function($$v) {
                                            _vm.$set(_vm.user, "username", $$v)
                                          },
                                          expression: "user.username"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("hr", { staticClass: "my-4" }),
                          _vm._v(" "),
                          _c(
                            "h6",
                            { staticClass: "heading-small text-muted mb-4" },
                            [_vm._v("Información de contacto")]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "pl-lg-4" },
                            [
                              _c(
                                "b-row",
                                [
                                  _c(
                                    "b-col",
                                    { attrs: { md: "6", xl: "4" } },
                                    [
                                      _c("base-input", {
                                        staticClass: "custom-input",
                                        attrs: {
                                          type: "text",
                                          label: "Direccion:",
                                          placeholder: "Cra 1#43b-23"
                                        },
                                        model: {
                                          value: _vm.user.address,
                                          callback: function($$v) {
                                            _vm.$set(_vm.user, "address", $$v)
                                          },
                                          expression: "user.address"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-col",
                                    { attrs: { lg: "4" } },
                                    [
                                      _c("base-input", {
                                        staticClass: "custom-input",
                                        attrs: {
                                          type: "text",
                                          label: "Ciudad:",
                                          placeholder: "Bogota"
                                        },
                                        model: {
                                          value: _vm.user.city,
                                          callback: function($$v) {
                                            _vm.$set(_vm.user, "city", $$v)
                                          },
                                          expression: "user.city"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-col",
                                    { attrs: { lg: "4" } },
                                    [
                                      _c("base-input", {
                                        staticClass: "custom-input",
                                        attrs: {
                                          type: "text",
                                          label: "Pais",
                                          placeholder: "Colombia"
                                        },
                                        model: {
                                          value: _vm.user.country,
                                          callback: function($$v) {
                                            _vm.$set(_vm.user, "country", $$v)
                                          },
                                          expression: "user.country"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-col",
                                    { attrs: { lg: "4" } },
                                    [
                                      _c("base-input", {
                                        staticClass: "custom-input",
                                        attrs: {
                                          label: "Correo",
                                          placeholder: "correo"
                                        },
                                        model: {
                                          value: _vm.user.email,
                                          callback: function($$v) {
                                            _vm.$set(_vm.user, "email", $$v)
                                          },
                                          expression: "user.email"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "b-row",
                                {
                                  staticClass:
                                    "d-flex justify-content-lg-end justify-content-center"
                                },
                                [
                                  _c(
                                    "b-col",
                                    {
                                      staticClass:
                                        "col-sm-12 col-md-6 col-xl-3 "
                                    },
                                    [
                                      _c(
                                        "b-button",
                                        {
                                          staticClass: "custom-btn-secondary",
                                          attrs: { to: { name: "profile" } }
                                        },
                                        [_vm._v("Cancelar")]
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-col",
                                    {
                                      staticClass: "col-sm-12 col-md-6 col-xl-3"
                                    },
                                    [
                                      _c(
                                        "b-button",
                                        {
                                          staticClass: "custom-btn-primary",
                                          attrs: {
                                            type: "submit",
                                            variant: "primary"
                                          }
                                        },
                                        [_vm._v("Guardar")]
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Pages/Welcome.vue?vue&type=template&id=5d56c5e8&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Pages/Welcome.vue?vue&type=template&id=5d56c5e8& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "p-3", attrs: { id: "viewWelcome" } },
    [
      _c(
        "b-row",
        { staticClass: "justify-content-around" },
        [
          _c("b-col", { attrs: { sm: "12", lg: "4" } }, [
            _c("div", { staticClass: "content-text-landing" }, [
              _c("h3", { staticClass: "text-right title-xl" }, [
                _vm._v("\n              SISTEMA DE ADMINISTRACION\n          ")
              ]),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("p", { staticClass: "p-lg text-black" }, [
                _vm._v(
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit veniam error odit distinctio sequi perspiciatis exercitationem, veritatis tempore corporis totam est eligendi fuga maiores cum, quasi quisquam suscipit. Neque, cupiditate."
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("b-col", { attrs: { sm: "12", lg: "7" } }, [
            _c("picture", { staticClass: "imgLanding" }, [
              _c("img", { attrs: { src: "/images/stadistic.svg", alt: "" } })
            ])
          ])
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/RegularTables.vue?vue&type=template&id=b2782bdc&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/RegularTables.vue?vue&type=template&id=b2782bdc& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "base-header",
        { staticClass: "pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success" },
        [
          _c(
            "b-row",
            [
              _c(
                "b-col",
                { attrs: { xl: "3", md: "6" } },
                [
                  _c(
                    "stats-card",
                    {
                      staticClass: "mb-4",
                      attrs: {
                        title: "Total traffic",
                        type: "gradient-red",
                        "sub-title": "350,897",
                        icon: "ni ni-active-40"
                      }
                    },
                    [
                      _c("template", { slot: "footer" }, [
                        _c("span", { staticClass: "text-success mr-2" }, [
                          _vm._v("3.48%")
                        ]),
                        _vm._v(" "),
                        _c("span", { staticClass: "text-nowrap" }, [
                          _vm._v("Since last month")
                        ])
                      ])
                    ],
                    2
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { xl: "3", md: "6" } },
                [
                  _c(
                    "stats-card",
                    {
                      staticClass: "mb-4",
                      attrs: {
                        title: "Total traffic",
                        type: "gradient-orange",
                        "sub-title": "2,356",
                        icon: "ni ni-chart-pie-35"
                      }
                    },
                    [
                      _c("template", { slot: "footer" }, [
                        _c("span", { staticClass: "text-success mr-2" }, [
                          _vm._v("12.18%")
                        ]),
                        _vm._v(" "),
                        _c("span", { staticClass: "text-nowrap" }, [
                          _vm._v("Since last month")
                        ])
                      ])
                    ],
                    2
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { xl: "3", md: "6" } },
                [
                  _c(
                    "stats-card",
                    {
                      staticClass: "mb-4",
                      attrs: {
                        title: "Sales",
                        type: "gradient-green",
                        "sub-title": "924",
                        icon: "ni ni-money-coins"
                      }
                    },
                    [
                      _c("template", { slot: "footer" }, [
                        _c("span", { staticClass: "text-danger mr-2" }, [
                          _vm._v("5.72%")
                        ]),
                        _vm._v(" "),
                        _c("span", { staticClass: "text-nowrap" }, [
                          _vm._v("Since last month")
                        ])
                      ])
                    ],
                    2
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { xl: "3", md: "6" } },
                [
                  _c(
                    "stats-card",
                    {
                      staticClass: "mb-4",
                      attrs: {
                        title: "Performance",
                        type: "gradient-info",
                        "sub-title": "49,65%",
                        icon: "ni ni-chart-bar-32"
                      }
                    },
                    [
                      _c("template", { slot: "footer" }, [
                        _c("span", { staticClass: "text-success mr-2" }, [
                          _vm._v("54.8%")
                        ]),
                        _vm._v(" "),
                        _c("span", { staticClass: "text-nowrap" }, [
                          _vm._v("Since last month")
                        ])
                      ])
                    ],
                    2
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-container",
        { staticClass: "mt--7", attrs: { fluid: "" } },
        [
          _c("b-row", [_c("b-col", [_c("light-table")], 1)], 1),
          _vm._v(" "),
          _c("div", { staticClass: "mt-5" }),
          _vm._v(" "),
          _c("dark-table")
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Sales.vue?vue&type=template&id=7476097d&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Sales.vue?vue&type=template&id=7476097d& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "custon-paneldashboard", attrs: { id: "viewSales" } },
    [
      _c(
        "div",
        { staticClass: "custon-panelbodydashboard" },
        [
          _c(
            "b-card",
            { staticClass: "card-profile custom-card" },
            [
              _c(
                "div",
                {
                  staticClass:
                    "header pb-4 mb-4   pt-3 pt-sm-5 d-flex align-items-center profile-header"
                },
                [
                  _c(
                    "b-container",
                    { attrs: { fluid: "" } },
                    [
                      _c(
                        "b-row",
                        [
                          _c(
                            "b-col",
                            { attrs: { lg: "10", md: "11" } },
                            [
                              _c(
                                "b-form",
                                { staticClass: "customForm mb-5 " },
                                [
                                  _c(
                                    "b-form-group",
                                    {
                                      staticClass: "custom-form-group mb-3",
                                      attrs: {
                                        id: "input-group-1",
                                        "label-for": "input-1",
                                        description: "",
                                        label: "Buscar:"
                                      }
                                    },
                                    [
                                      _c("b-form-input", {
                                        staticClass: "custom-input ",
                                        attrs: {
                                          id: "input-1",
                                          type: "email",
                                          placeholder: "Ingrese correo",
                                          required: ""
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "form-group d-flex justify-content-left "
                                    },
                                    [
                                      _c(
                                        "b-button",
                                        {
                                          staticClass: "custom-btn-primary ",
                                          attrs: {
                                            type: "submit",
                                            variant: "primary"
                                          }
                                        },
                                        [_vm._v("Filtrar")]
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("b-col", { attrs: { lg: "2", md: "1" } }, [
                            _c(
                              "div",
                              { staticClass: "dropdown open float-right" },
                              [
                                _c("button", {
                                  staticClass:
                                    "btn  btn-sm dropdown-toggle btn-light",
                                  attrs: {
                                    type: "button",
                                    id: "triggerId",
                                    "data-toggle": "dropdown",
                                    "aria-haspopup": "true",
                                    "aria-expanded": "false"
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass: "dropdown-menu",
                                    attrs: { "aria-labelledby": "triggerId" }
                                  },
                                  [
                                    _c(
                                      "router-link",
                                      {
                                        staticClass: "dropdown-item",
                                        attrs: { to: "#" }
                                      },
                                      [
                                        _c("i", {
                                          staticClass:
                                            "fas fa-cloud-download-alt text-primary"
                                        }),
                                        _vm._v("Descargar reporte excel")
                                      ]
                                    )
                                  ],
                                  1
                                )
                              ]
                            )
                          ])
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-card-body",
                [
                  _c(
                    "b-container",
                    { staticClass: "mt--7", attrs: { fluid: "" } },
                    [_c("b-row", [_c("b-col", [_c("light-table")], 1)], 1)],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Tables/RegularTables/DarkTable.vue?vue&type=template&id=57563d02&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Tables/RegularTables/DarkTable.vue?vue&type=template&id=57563d02& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "b-card",
    { staticClass: "bg-default shadow", attrs: { "no-body": "" } },
    [
      _c("b-card-header", { staticClass: "bg-transparent border-0" }, [
        _c("h3", { staticClass: "mb-0 text-white" }, [_vm._v("Dark table")])
      ]),
      _vm._v(" "),
      _c(
        "el-table",
        {
          staticClass: "table-responsive table table-dark",
          attrs: { "header-row-class-name": "thead-dark", data: _vm.projects }
        },
        [
          _c("el-table-column", {
            attrs: { label: "Project", "min-width": "310px", prop: "name" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(ref) {
                  var row = ref.row
                  return [
                    _c(
                      "b-media",
                      {
                        staticClass: "align-items-center",
                        attrs: { "no-body": "" }
                      },
                      [
                        _c(
                          "a",
                          { staticClass: "mr-3", attrs: { href: "#" } },
                          [
                            _c("b-img", {
                              staticClass: "avatar",
                              attrs: {
                                rounded: "circle",
                                alt: "Image placeholder",
                                src: row.img
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("b-media-body", [
                          _c(
                            "span",
                            {
                              staticClass: "font-weight-600 name mb-0 text-sm"
                            },
                            [_vm._v(_vm._s(row.title))]
                          )
                        ])
                      ],
                      1
                    )
                  ]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { label: "Budget", prop: "budget", "min-width": "140px" }
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { label: "Status", "min-width": "170px", prop: "status" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(ref) {
                  var row = ref.row
                  return [
                    _c("badge", { staticClass: "badge-dot mr-4" }, [
                      _c("i", { class: "bg-" + row.statusType }),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          staticClass: "status",
                          class: "text-" + row.statusType
                        },
                        [_vm._v(_vm._s(row.status))]
                      )
                    ])
                  ]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c(
            "el-table-column",
            { attrs: { label: "Users", "min-width": "190px" } },
            [
              _c("div", { staticClass: "avatar-group" }, [
                _c(
                  "a",
                  {
                    staticClass: "avatar avatar-sm rounded-circle",
                    attrs: {
                      href: "#",
                      "data-toggle": "tooltip",
                      "data-original-title": "Ryan Tompson"
                    }
                  },
                  [
                    _c("img", {
                      attrs: {
                        alt: "Image placeholder",
                        src: "img/theme/team-1.jpg"
                      }
                    })
                  ]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "avatar avatar-sm rounded-circle",
                    attrs: {
                      href: "#",
                      "data-toggle": "tooltip",
                      "data-original-title": "Romina Hadid"
                    }
                  },
                  [
                    _c("img", {
                      attrs: {
                        alt: "Image placeholder",
                        src: "img/theme/team-2.jpg"
                      }
                    })
                  ]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "avatar avatar-sm rounded-circle",
                    attrs: {
                      href: "#",
                      "data-toggle": "tooltip",
                      "data-original-title": "Alexander Smith"
                    }
                  },
                  [
                    _c("img", {
                      attrs: {
                        alt: "Image placeholder",
                        src: "img/theme/team-3.jpg"
                      }
                    })
                  ]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "avatar avatar-sm rounded-circle",
                    attrs: {
                      href: "#",
                      "data-toggle": "tooltip",
                      "data-original-title": "Jessica Doe"
                    }
                  },
                  [
                    _c("img", {
                      attrs: {
                        alt: "Image placeholder",
                        src: "img/theme/team-4.jpg"
                      }
                    })
                  ]
                )
              ])
            ]
          ),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: {
              label: "Completion",
              prop: "completion",
              "min-width": "240px"
            },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(ref) {
                  var row = ref.row
                  return [
                    _c("div", { staticClass: "d-flex align-items-center" }, [
                      _c("span", { staticClass: "completion mr-2" }, [
                        _vm._v(_vm._s(row.completion) + "%")
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        [
                          _c("base-progress", {
                            attrs: {
                              type: row.statusType,
                              value: row.completion
                            }
                          })
                        ],
                        1
                      )
                    ])
                  ]
                }
              }
            ])
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Tables/RegularTables/LightTable.vue?vue&type=template&id=84aa383e&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Tables/RegularTables/LightTable.vue?vue&type=template&id=84aa383e& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "b-card",
    { attrs: { "no-body": "" } },
    [
      _c(
        "el-table",
        {
          staticClass: "table-responsive table custom-table",
          attrs: { "header-row-class-name": "thead-light", data: _vm.projects }
        },
        [
          _c("el-table-column", {
            attrs: { label: "Id", "min-width": "310px", prop: "name" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(ref) {
                  var row = ref.row
                  return [
                    _c(
                      "b-media",
                      {
                        staticClass: "align-items-center",
                        attrs: { "no-body": "" }
                      },
                      [
                        _c("b-media-body", [
                          _c(
                            "span",
                            {
                              staticClass: "font-weight-600 name mb-0 text-sm"
                            },
                            [_vm._v(_vm._s(row.title))]
                          )
                        ])
                      ],
                      1
                    )
                  ]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { label: "Valor", prop: "budget", "min-width": "140px" }
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { label: "Estatus", "min-width": "170px", prop: "status" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(ref) {
                  var row = ref.row
                  return [
                    _c(
                      "badge",
                      { staticClass: "badge-dot mr-4", attrs: { type: "" } },
                      [
                        _c("i", { class: "bg-" + row.statusType }),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            staticClass: "status",
                            class: "text-" + row.statusType
                          },
                          [_vm._v(_vm._s(row.status))]
                        )
                      ]
                    )
                  ]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { label: "Descirpcion", "min-width": "190px" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(ref) {
                  var row = ref.row
                  return [
                    _c(
                      "b-media",
                      {
                        staticClass: "align-items-center",
                        attrs: { "no-body": "" }
                      },
                      [
                        _c("b-media-body", [
                          _c(
                            "span",
                            {
                              staticClass: "font-weight-600 name mb-0 text-sm"
                            },
                            [_vm._v(_vm._s(row.title))]
                          )
                        ])
                      ],
                      1
                    )
                  ]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: {
              label: "Opciones",
              prop: "completion",
              "min-width": "240px"
            },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function() {
                  return [
                    _c(
                      "div",
                      { staticClass: "d-flex align-items-center" },
                      [
                        _c("b-button", { attrs: { size: "sm" } }, [
                          _c("i", { staticClass: "far fa-eye" })
                        ]),
                        _vm._v(" "),
                        _c("b-button", { attrs: { size: "sm" } }, [
                          _c("i", { staticClass: "fas fa-pencil-alt" })
                        ]),
                        _vm._v(" "),
                        _c("b-button", { attrs: { size: "sm" } }, [
                          _c("i", { staticClass: "fas fa-trash-alt" })
                        ])
                      ],
                      1
                    )
                  ]
                },
                proxy: true
              }
            ])
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-card-footer",
        { staticClass: "py-4 d-flex justify-content-end" },
        [
          _c("base-pagination", {
            attrs: { "per-page": 5, total: 50 },
            model: {
              value: _vm.currentPage,
              callback: function($$v) {
                _vm.currentPage = $$v
              },
              expression: "currentPage"
            }
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Charts/BarChart.js":
/*!****************************************************!*\
  !*** ./resources/js/components/Charts/BarChart.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/es/index.js");
/* harmony import */ var _components_Charts_globalOptionsMixin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Charts/globalOptionsMixin */ "./resources/js/components/Charts/globalOptionsMixin.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'bar-chart',
  "extends": vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["Bar"],
  mixins: [vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["mixins"].reactiveProp, _components_Charts_globalOptionsMixin__WEBPACK_IMPORTED_MODULE_1__["default"]],
  props: {
    extraOptions: {
      type: Object,
      "default": function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      ctx: null
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.$watch('chartData', function (newVal, oldVal) {
      if (!oldVal) {
        _this.renderChart(_this.chartData, _this.extraOptions);
      }
    }, {
      immediate: true
    });
  }
});

/***/ }),

/***/ "./resources/js/components/Charts/LineChart.js":
/*!*****************************************************!*\
  !*** ./resources/js/components/Charts/LineChart.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/es/index.js");
/* harmony import */ var _components_Charts_globalOptionsMixin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Charts/globalOptionsMixin */ "./resources/js/components/Charts/globalOptionsMixin.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'line-chart',
  "extends": vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["Line"],
  mixins: [vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["mixins"].reactiveProp, _components_Charts_globalOptionsMixin__WEBPACK_IMPORTED_MODULE_1__["default"]],
  props: {
    extraOptions: {
      type: Object,
      "default": function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      ctx: null
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.$watch('chartData', function (newVal, oldVal) {
      if (!oldVal) {
        _this.renderChart(_this.chartData, _this.extraOptions);
      }
    }, {
      immediate: true
    });
  }
});

/***/ }),

/***/ "./resources/js/components/Charts/config.js":
/*!**************************************************!*\
  !*** ./resources/js/components/Charts/config.js ***!
  \**************************************************/
/*! exports provided: Charts, initGlobalOptions, basicOptions, blueChartOptions, lineChartOptionsBlue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Charts", function() { return Charts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initGlobalOptions", function() { return initGlobalOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "basicOptions", function() { return basicOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blueChartOptions", function() { return blueChartOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineChartOptionsBlue", function() { return lineChartOptionsBlue; });
/* harmony import */ var _components_Charts_optionHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/Charts/optionHelpers */ "./resources/js/components/Charts/optionHelpers.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Charts = {
  mode: 'light',
  //(themeMode) ? themeMode : 'light';
  fonts: {
    base: 'Open Sans'
  },
  colors: {
    gray: {
      100: '#f6f9fc',
      200: '#e9ecef',
      300: '#dee2e6',
      400: '#ced4da',
      500: '#adb5bd',
      600: '#8898aa',
      700: '#525f7f',
      800: '#32325d',
      900: '#212529'
    },
    theme: {
      'default': '#172b4d',
      'primary': '#0AC5A8',
      'secondary': '#2C3C5B',
      'info': '#11cdef',
      'success': '#2dce89',
      'danger': '#f5365c',
      'warning': '#fb6340'
    },
    black: '#000',
    white: '#FFFFFF',
    transparent: 'transparent'
  }
};

function chartOptions() {
  var colors = Charts.colors,
      mode = Charts.mode,
      fonts = Charts.fonts; // Options

  var options = {
    defaults: {
      global: {
        responsive: true,
        maintainAspectRatio: false,
        defaultColor: mode === 'dark' ? colors.gray[700] : colors.gray[600],
        defaultFontColor: mode === 'dark' ? colors.gray[700] : colors.gray[600],
        defaultFontFamily: fonts.base,
        defaultFontSize: 13,
        layout: {
          padding: 0
        },
        legend: {
          display: false,
          position: 'bottom',
          labels: {
            usePointStyle: true,
            padding: 16
          }
        },
        elements: {
          point: {
            radius: 0,
            backgroundColor: colors.theme['primary']
          },
          line: {
            tension: .4,
            borderWidth: 4,
            borderColor: colors.theme['primary'],
            backgroundColor: colors.transparent,
            borderCapStyle: 'rounded'
          },
          rectangle: {
            backgroundColor: colors.theme['warning']
          },
          arc: {
            backgroundColor: colors.theme['primary'],
            borderColor: mode == 'dark' ? colors.gray[800] : colors.white,
            borderWidth: 4
          }
        },
        tooltips: {
          enabled: true,
          mode: 'index',
          intersect: false
        }
      },
      pie: {
        tooltips: {
          mode: 'point'
        }
      },
      doughnut: {
        tooltips: {
          mode: 'point'
        },
        cutoutPercentage: 83,
        legendCallback: function legendCallback(chart) {
          var data = chart.data;
          var content = '';
          data.labels.forEach(function (label, index) {
            var bgColor = data.datasets[0].backgroundColor[index];
            content += '<span class="chart-legend-item">';
            content += '<i class="chart-legend-indicator" style="background-color: ' + bgColor + '"></i>';
            content += label;
            content += '</span>';
          });
          return content;
        }
      }
    }
  }; // yAxes

  chart_js__WEBPACK_IMPORTED_MODULE_1___default.a.scaleService.updateScaleDefaults('linear', {
    gridLines: {
      borderDash: [2],
      borderDashOffset: [2],
      color: mode === 'dark' ? colors.gray[900] : colors.gray[200],
      drawBorder: false,
      drawTicks: true,
      zeroLineWidth: 1,
      zeroLineColor: mode === 'dark' ? colors.gray[900] : colors.gray[200],
      zeroLineBorderDash: [2],
      zeroLineBorderDashOffset: [2]
    },
    ticks: {
      beginAtZero: true,
      padding: 10,
      callback: function callback(value) {
        if (!(value % 10)) {
          return value;
        }
      }
    }
  }); // xAxes

  chart_js__WEBPACK_IMPORTED_MODULE_1___default.a.scaleService.updateScaleDefaults('category', {
    gridLines: {
      drawBorder: false,
      drawOnChartArea: false,
      drawTicks: false,
      lineWidth: 1,
      zeroLineWidth: 1
    },
    ticks: {
      padding: 20
    },
    maxBarThickness: 10
  });
  return options;
}

;
var initialized = false;
function initGlobalOptions() {
  if (initialized) {
    return;
  }

  Object(_components_Charts_optionHelpers__WEBPACK_IMPORTED_MODULE_0__["parseOptions"])(chart_js__WEBPACK_IMPORTED_MODULE_1___default.a, chartOptions());
  initialized = true;
}
var basicOptions = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  responsive: true
};
var blueChartOptions = {
  scales: {
    yAxes: [{
      gridLines: {
        color: Charts.colors.gray[700],
        zeroLineColor: Charts.colors.gray[700]
      }
    }]
  }
};
var lineChartOptionsBlue = _objectSpread(_objectSpread({}, basicOptions), {}, {
  tooltips: {
    backgroundColor: '#f5f5f5',
    titleFontColor: '#333',
    bodyFontColor: '#666',
    bodySpacing: 4,
    xPadding: 12,
    mode: 'nearest',
    intersect: 0,
    position: 'nearest'
  },
  responsive: true,
  scales: {
    yAxes: [{
      barPercentage: 1.6,
      gridLines: {
        drawBorder: false,
        color: 'rgba(29,140,248,0.0)',
        zeroLineColor: 'transparent'
      },
      ticks: {
        suggestedMin: 60,
        suggestedMax: 125,
        padding: 20,
        fontColor: '#9e9e9e'
      }
    }],
    xAxes: [{
      barPercentage: 1.6,
      gridLines: {
        drawBorder: false,
        color: 'rgba(29,140,248,0.1)',
        zeroLineColor: 'transparent'
      },
      ticks: {
        padding: 20,
        fontColor: '#9e9e9e'
      }
    }]
  }
});

/***/ }),

/***/ "./resources/js/components/Charts/globalOptionsMixin.js":
/*!**************************************************************!*\
  !*** ./resources/js/components/Charts/globalOptionsMixin.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Charts_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/Charts/config */ "./resources/js/components/Charts/config.js");
/* harmony import */ var _roundedCornersExtension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./roundedCornersExtension */ "./resources/js/components/Charts/roundedCornersExtension.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  mounted: function mounted() {
    Object(_components_Charts_config__WEBPACK_IMPORTED_MODULE_0__["initGlobalOptions"])();
  }
});

/***/ }),

/***/ "./resources/js/components/Charts/optionHelpers.js":
/*!*********************************************************!*\
  !*** ./resources/js/components/Charts/optionHelpers.js ***!
  \*********************************************************/
/*! exports provided: parseOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseOptions", function() { return parseOptions; });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// Parse global options
function parseOptions(parent, options) {
  for (var item in options) {
    if (_typeof(options[item]) !== 'object') {
      parent[item] = options[item];
    } else {
      parseOptions(parent[item], options[item]);
    }
  }
}

/***/ }),

/***/ "./resources/js/components/Charts/roundedCornersExtension.js":
/*!*******************************************************************!*\
  !*** ./resources/js/components/Charts/roundedCornersExtension.js ***!
  \*******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_0__);
//
// Chart extension for making the bars rounded
// Code from: https://codepen.io/jedtrow/full/ygRYgo
//


chart_js__WEBPACK_IMPORTED_MODULE_0___default.a.elements.Rectangle.prototype.draw = function () {
  var ctx = this._chart.ctx;
  var vm = this._view;
  var left, right, top, bottom, signX, signY, borderSkipped, radius;
  var borderWidth = vm.borderWidth; // Set Radius Here
  // If radius is large enough to cause drawing errors a max radius is imposed

  var cornerRadius = 6;

  if (!vm.horizontal) {
    // bar
    left = vm.x - vm.width / 2;
    right = vm.x + vm.width / 2;
    top = vm.y;
    bottom = vm.base;
    signX = 1;
    signY = bottom > top ? 1 : -1;
    borderSkipped = vm.borderSkipped || 'bottom';
  } else {
    // horizontal bar
    left = vm.base;
    right = vm.x;
    top = vm.y - vm.height / 2;
    bottom = vm.y + vm.height / 2;
    signX = right > left ? 1 : -1;
    signY = 1;
    borderSkipped = vm.borderSkipped || 'left';
  } // Canvas doesn't allow us to stroke inside the width so we can
  // adjust the sizes to fit if we're setting a stroke on the line


  if (borderWidth) {
    // borderWidth shold be less than bar width and bar height.
    var barSize = Math.min(Math.abs(left - right), Math.abs(top - bottom));
    borderWidth = borderWidth > barSize ? barSize : borderWidth;
    var halfStroke = borderWidth / 2; // Adjust borderWidth when bar top position is near vm.base(zero).

    var borderLeft = left + (borderSkipped !== 'left' ? halfStroke * signX : 0);
    var borderRight = right + (borderSkipped !== 'right' ? -halfStroke * signX : 0);
    var borderTop = top + (borderSkipped !== 'top' ? halfStroke * signY : 0);
    var borderBottom = bottom + (borderSkipped !== 'bottom' ? -halfStroke * signY : 0); // not become a vertical line?

    if (borderLeft !== borderRight) {
      top = borderTop;
      bottom = borderBottom;
    } // not become a horizontal line?


    if (borderTop !== borderBottom) {
      left = borderLeft;
      right = borderRight;
    }
  }

  ctx.beginPath();
  ctx.fillStyle = vm.backgroundColor;
  ctx.strokeStyle = vm.borderColor;
  ctx.lineWidth = borderWidth; // Corner points, from bottom-left to bottom-right clockwise
  // | 1 2 |
  // | 0 3 |

  var corners = [[left, bottom], [left, top], [right, top], [right, bottom]]; // Find first (starting) corner with fallback to 'bottom'

  var borders = ['bottom', 'left', 'top', 'right'];
  var startCorner = borders.indexOf(borderSkipped, 0);

  if (startCorner === -1) {
    startCorner = 0;
  }

  function cornerAt(index) {
    return corners[(startCorner + index) % 4];
  } // Draw rectangle from 'startCorner'


  var corner = cornerAt(0);
  ctx.moveTo(corner[0], corner[1]);

  for (var i = 1; i < 4; i++) {
    corner = cornerAt(i);
    var nextCornerId = i + 1;

    if (nextCornerId == 4) {
      nextCornerId = 0;
    }

    var nextCorner = cornerAt(nextCornerId);
    var width = corners[2][0] - corners[1][0];
    var height = corners[0][1] - corners[1][1];
    var x = corners[1][0];
    var y = corners[1][1];
    var _radius = cornerRadius; // Fix radius being too large

    if (_radius > height / 2) {
      _radius = height / 2;
    }

    if (_radius > width / 2) {
      _radius = width / 2;
    }

    ctx.moveTo(x + _radius, y);
    ctx.lineTo(x + width - _radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + _radius);
    ctx.lineTo(x + width, y + height - _radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - _radius, y + height);
    ctx.lineTo(x + _radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - _radius);
    ctx.lineTo(x, y + _radius);
    ctx.quadraticCurveTo(x, y, x + _radius, y);
  }

  ctx.fill();

  if (borderWidth) {
    ctx.stroke();
  }
};

/***/ }),

/***/ "./resources/js/views/Dashboard.vue":
/*!******************************************!*\
  !*** ./resources/js/views/Dashboard.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dashboard_vue_vue_type_template_id_1f79daf6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=1f79daf6& */ "./resources/js/views/Dashboard.vue?vue&type=template&id=1f79daf6&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./resources/js/views/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Dashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/Dashboard.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_vue_vue_type_template_id_1f79daf6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dashboard_vue_vue_type_template_id_1f79daf6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Dashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Dashboard.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/views/Dashboard.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Dashboard.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/Dashboard.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/Dashboard.vue?vue&type=template&id=1f79daf6&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/Dashboard.vue?vue&type=template&id=1f79daf6& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_1f79daf6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=template&id=1f79daf6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard.vue?vue&type=template&id=1f79daf6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_1f79daf6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_1f79daf6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/GoogleMaps.vue":
/*!*******************************************!*\
  !*** ./resources/js/views/GoogleMaps.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GoogleMaps_vue_vue_type_template_id_4cae1acf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GoogleMaps.vue?vue&type=template&id=4cae1acf& */ "./resources/js/views/GoogleMaps.vue?vue&type=template&id=4cae1acf&");
/* harmony import */ var _GoogleMaps_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GoogleMaps.vue?vue&type=script&lang=js& */ "./resources/js/views/GoogleMaps.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _GoogleMaps_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GoogleMaps_vue_vue_type_template_id_4cae1acf___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GoogleMaps_vue_vue_type_template_id_4cae1acf___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/GoogleMaps.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/GoogleMaps.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/views/GoogleMaps.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GoogleMaps_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./GoogleMaps.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/GoogleMaps.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GoogleMaps_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/GoogleMaps.vue?vue&type=template&id=4cae1acf&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/GoogleMaps.vue?vue&type=template&id=4cae1acf& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GoogleMaps_vue_vue_type_template_id_4cae1acf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./GoogleMaps.vue?vue&type=template&id=4cae1acf& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/GoogleMaps.vue?vue&type=template&id=4cae1acf&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GoogleMaps_vue_vue_type_template_id_4cae1acf___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GoogleMaps_vue_vue_type_template_id_4cae1acf___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Maps/API_KEY.js":
/*!********************************************!*\
  !*** ./resources/js/views/Maps/API_KEY.js ***!
  \********************************************/
/*! exports provided: API_KEY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_KEY", function() { return API_KEY; });
var API_KEY = 'YOUR_API_KEY';

/***/ }),

/***/ "./resources/js/views/Pages/About.vue":
/*!********************************************!*\
  !*** ./resources/js/views/Pages/About.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _About_vue_vue_type_template_id_65dba413___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./About.vue?vue&type=template&id=65dba413& */ "./resources/js/views/Pages/About.vue?vue&type=template&id=65dba413&");
/* harmony import */ var _About_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./About.vue?vue&type=script&lang=js& */ "./resources/js/views/Pages/About.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _About_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _About_vue_vue_type_template_id_65dba413___WEBPACK_IMPORTED_MODULE_0__["render"],
  _About_vue_vue_type_template_id_65dba413___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Pages/About.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Pages/About.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/Pages/About.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./About.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Pages/About.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Pages/About.vue?vue&type=template&id=65dba413&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/Pages/About.vue?vue&type=template&id=65dba413& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_template_id_65dba413___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./About.vue?vue&type=template&id=65dba413& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Pages/About.vue?vue&type=template&id=65dba413&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_template_id_65dba413___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_template_id_65dba413___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Pages/Contact.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/Pages/Contact.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Contact_vue_vue_type_template_id_5fffbfa6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Contact.vue?vue&type=template&id=5fffbfa6& */ "./resources/js/views/Pages/Contact.vue?vue&type=template&id=5fffbfa6&");
/* harmony import */ var _Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Contact.vue?vue&type=script&lang=js& */ "./resources/js/views/Pages/Contact.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Contact_vue_vue_type_template_id_5fffbfa6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Contact_vue_vue_type_template_id_5fffbfa6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Pages/Contact.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Pages/Contact.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/Pages/Contact.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Contact.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Pages/Contact.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Pages/Contact.vue?vue&type=template&id=5fffbfa6&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/Pages/Contact.vue?vue&type=template&id=5fffbfa6& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_template_id_5fffbfa6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Contact.vue?vue&type=template&id=5fffbfa6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Pages/Contact.vue?vue&type=template&id=5fffbfa6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_template_id_5fffbfa6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_template_id_5fffbfa6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Pages/Forgot.vue":
/*!*********************************************!*\
  !*** ./resources/js/views/Pages/Forgot.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Forgot_vue_vue_type_template_id_1e8104e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Forgot.vue?vue&type=template&id=1e8104e6& */ "./resources/js/views/Pages/Forgot.vue?vue&type=template&id=1e8104e6&");
/* harmony import */ var _Forgot_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Forgot.vue?vue&type=script&lang=js& */ "./resources/js/views/Pages/Forgot.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Forgot_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Forgot_vue_vue_type_template_id_1e8104e6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Forgot_vue_vue_type_template_id_1e8104e6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Pages/Forgot.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Pages/Forgot.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/views/Pages/Forgot.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Forgot_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Forgot.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Pages/Forgot.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Forgot_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Pages/Forgot.vue?vue&type=template&id=1e8104e6&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/Pages/Forgot.vue?vue&type=template&id=1e8104e6& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Forgot_vue_vue_type_template_id_1e8104e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Forgot.vue?vue&type=template&id=1e8104e6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Pages/Forgot.vue?vue&type=template&id=1e8104e6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Forgot_vue_vue_type_template_id_1e8104e6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Forgot_vue_vue_type_template_id_1e8104e6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Pages/Login.vue":
/*!********************************************!*\
  !*** ./resources/js/views/Pages/Login.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Login_vue_vue_type_template_id_4f3b21ef___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login.vue?vue&type=template&id=4f3b21ef& */ "./resources/js/views/Pages/Login.vue?vue&type=template&id=4f3b21ef&");
/* harmony import */ var _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.vue?vue&type=script&lang=js& */ "./resources/js/views/Pages/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Login_vue_vue_type_template_id_4f3b21ef___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Login_vue_vue_type_template_id_4f3b21ef___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Pages/Login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Pages/Login.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/Pages/Login.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Pages/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Pages/Login.vue?vue&type=template&id=4f3b21ef&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/Pages/Login.vue?vue&type=template&id=4f3b21ef& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_4f3b21ef___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=template&id=4f3b21ef& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Pages/Login.vue?vue&type=template&id=4f3b21ef&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_4f3b21ef___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_4f3b21ef___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Pages/Register.vue":
/*!***********************************************!*\
  !*** ./resources/js/views/Pages/Register.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Register_vue_vue_type_template_id_1eba06e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=1eba06e6& */ "./resources/js/views/Pages/Register.vue?vue&type=template&id=1eba06e6&");
/* harmony import */ var _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=js& */ "./resources/js/views/Pages/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Register_vue_vue_type_template_id_1eba06e6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Register_vue_vue_type_template_id_1eba06e6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Pages/Register.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Pages/Register.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/views/Pages/Register.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Pages/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Pages/Register.vue?vue&type=template&id=1eba06e6&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/Pages/Register.vue?vue&type=template&id=1eba06e6& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_1eba06e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=template&id=1eba06e6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Pages/Register.vue?vue&type=template&id=1eba06e6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_1eba06e6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_1eba06e6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Pages/UserProfile.vue":
/*!**************************************************!*\
  !*** ./resources/js/views/Pages/UserProfile.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserProfile_vue_vue_type_template_id_83b5de38___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserProfile.vue?vue&type=template&id=83b5de38& */ "./resources/js/views/Pages/UserProfile.vue?vue&type=template&id=83b5de38&");
/* harmony import */ var _UserProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserProfile.vue?vue&type=script&lang=js& */ "./resources/js/views/Pages/UserProfile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserProfile_vue_vue_type_template_id_83b5de38___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserProfile_vue_vue_type_template_id_83b5de38___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Pages/UserProfile.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Pages/UserProfile.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/Pages/UserProfile.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserProfile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Pages/UserProfile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Pages/UserProfile.vue?vue&type=template&id=83b5de38&":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/Pages/UserProfile.vue?vue&type=template&id=83b5de38& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfile_vue_vue_type_template_id_83b5de38___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserProfile.vue?vue&type=template&id=83b5de38& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Pages/UserProfile.vue?vue&type=template&id=83b5de38&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfile_vue_vue_type_template_id_83b5de38___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfile_vue_vue_type_template_id_83b5de38___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Pages/UserProfile/EditProfileForm.vue":
/*!******************************************************************!*\
  !*** ./resources/js/views/Pages/UserProfile/EditProfileForm.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditProfileForm_vue_vue_type_template_id_231e9058___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditProfileForm.vue?vue&type=template&id=231e9058& */ "./resources/js/views/Pages/UserProfile/EditProfileForm.vue?vue&type=template&id=231e9058&");
/* harmony import */ var _EditProfileForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditProfileForm.vue?vue&type=script&lang=js& */ "./resources/js/views/Pages/UserProfile/EditProfileForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EditProfileForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditProfileForm_vue_vue_type_template_id_231e9058___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EditProfileForm_vue_vue_type_template_id_231e9058___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Pages/UserProfile/EditProfileForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Pages/UserProfile/EditProfileForm.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/views/Pages/UserProfile/EditProfileForm.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProfileForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EditProfileForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Pages/UserProfile/EditProfileForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProfileForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Pages/UserProfile/EditProfileForm.vue?vue&type=template&id=231e9058&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/views/Pages/UserProfile/EditProfileForm.vue?vue&type=template&id=231e9058& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProfileForm_vue_vue_type_template_id_231e9058___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EditProfileForm.vue?vue&type=template&id=231e9058& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Pages/UserProfile/EditProfileForm.vue?vue&type=template&id=231e9058&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProfileForm_vue_vue_type_template_id_231e9058___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProfileForm_vue_vue_type_template_id_231e9058___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Pages/Welcome.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/Pages/Welcome.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Welcome_vue_vue_type_template_id_5d56c5e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Welcome.vue?vue&type=template&id=5d56c5e8& */ "./resources/js/views/Pages/Welcome.vue?vue&type=template&id=5d56c5e8&");
/* harmony import */ var _Welcome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Welcome.vue?vue&type=script&lang=js& */ "./resources/js/views/Pages/Welcome.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Welcome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Welcome_vue_vue_type_template_id_5d56c5e8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Welcome_vue_vue_type_template_id_5d56c5e8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Pages/Welcome.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Pages/Welcome.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/Pages/Welcome.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Welcome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Welcome.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Pages/Welcome.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Welcome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Pages/Welcome.vue?vue&type=template&id=5d56c5e8&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/Pages/Welcome.vue?vue&type=template&id=5d56c5e8& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Welcome_vue_vue_type_template_id_5d56c5e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Welcome.vue?vue&type=template&id=5d56c5e8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Pages/Welcome.vue?vue&type=template&id=5d56c5e8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Welcome_vue_vue_type_template_id_5d56c5e8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Welcome_vue_vue_type_template_id_5d56c5e8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/RegularTables.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/RegularTables.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RegularTables_vue_vue_type_template_id_b2782bdc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RegularTables.vue?vue&type=template&id=b2782bdc& */ "./resources/js/views/RegularTables.vue?vue&type=template&id=b2782bdc&");
/* harmony import */ var _RegularTables_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RegularTables.vue?vue&type=script&lang=js& */ "./resources/js/views/RegularTables.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _RegularTables_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RegularTables.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/RegularTables.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _RegularTables_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RegularTables_vue_vue_type_template_id_b2782bdc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RegularTables_vue_vue_type_template_id_b2782bdc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/RegularTables.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/RegularTables.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/RegularTables.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegularTables_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./RegularTables.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/RegularTables.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegularTables_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/RegularTables.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/RegularTables.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegularTables_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./RegularTables.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/RegularTables.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegularTables_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegularTables_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegularTables_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegularTables_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/RegularTables.vue?vue&type=template&id=b2782bdc&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/RegularTables.vue?vue&type=template&id=b2782bdc& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegularTables_vue_vue_type_template_id_b2782bdc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./RegularTables.vue?vue&type=template&id=b2782bdc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/RegularTables.vue?vue&type=template&id=b2782bdc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegularTables_vue_vue_type_template_id_b2782bdc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegularTables_vue_vue_type_template_id_b2782bdc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Sales.vue":
/*!**************************************!*\
  !*** ./resources/js/views/Sales.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Sales_vue_vue_type_template_id_7476097d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sales.vue?vue&type=template&id=7476097d& */ "./resources/js/views/Sales.vue?vue&type=template&id=7476097d&");
/* harmony import */ var _Sales_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sales.vue?vue&type=script&lang=js& */ "./resources/js/views/Sales.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Sales_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Sales_vue_vue_type_template_id_7476097d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Sales_vue_vue_type_template_id_7476097d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Sales.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Sales.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./resources/js/views/Sales.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sales_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Sales.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Sales.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sales_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Sales.vue?vue&type=template&id=7476097d&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/Sales.vue?vue&type=template&id=7476097d& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sales_vue_vue_type_template_id_7476097d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Sales.vue?vue&type=template&id=7476097d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Sales.vue?vue&type=template&id=7476097d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sales_vue_vue_type_template_id_7476097d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sales_vue_vue_type_template_id_7476097d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Tables/RegularTables/DarkTable.vue":
/*!***************************************************************!*\
  !*** ./resources/js/views/Tables/RegularTables/DarkTable.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DarkTable_vue_vue_type_template_id_57563d02___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DarkTable.vue?vue&type=template&id=57563d02& */ "./resources/js/views/Tables/RegularTables/DarkTable.vue?vue&type=template&id=57563d02&");
/* harmony import */ var _DarkTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DarkTable.vue?vue&type=script&lang=js& */ "./resources/js/views/Tables/RegularTables/DarkTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DarkTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DarkTable_vue_vue_type_template_id_57563d02___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DarkTable_vue_vue_type_template_id_57563d02___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Tables/RegularTables/DarkTable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Tables/RegularTables/DarkTable.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/Tables/RegularTables/DarkTable.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DarkTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./DarkTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Tables/RegularTables/DarkTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DarkTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Tables/RegularTables/DarkTable.vue?vue&type=template&id=57563d02&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/views/Tables/RegularTables/DarkTable.vue?vue&type=template&id=57563d02& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DarkTable_vue_vue_type_template_id_57563d02___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./DarkTable.vue?vue&type=template&id=57563d02& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Tables/RegularTables/DarkTable.vue?vue&type=template&id=57563d02&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DarkTable_vue_vue_type_template_id_57563d02___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DarkTable_vue_vue_type_template_id_57563d02___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Tables/RegularTables/LightTable.vue":
/*!****************************************************************!*\
  !*** ./resources/js/views/Tables/RegularTables/LightTable.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LightTable_vue_vue_type_template_id_84aa383e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LightTable.vue?vue&type=template&id=84aa383e& */ "./resources/js/views/Tables/RegularTables/LightTable.vue?vue&type=template&id=84aa383e&");
/* harmony import */ var _LightTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LightTable.vue?vue&type=script&lang=js& */ "./resources/js/views/Tables/RegularTables/LightTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LightTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LightTable_vue_vue_type_template_id_84aa383e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LightTable_vue_vue_type_template_id_84aa383e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Tables/RegularTables/LightTable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Tables/RegularTables/LightTable.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/Tables/RegularTables/LightTable.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LightTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./LightTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Tables/RegularTables/LightTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LightTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Tables/RegularTables/LightTable.vue?vue&type=template&id=84aa383e&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/views/Tables/RegularTables/LightTable.vue?vue&type=template&id=84aa383e& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LightTable_vue_vue_type_template_id_84aa383e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./LightTable.vue?vue&type=template&id=84aa383e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Tables/RegularTables/LightTable.vue?vue&type=template&id=84aa383e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LightTable_vue_vue_type_template_id_84aa383e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LightTable_vue_vue_type_template_id_84aa383e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Tables/projects.js":
/*!***********************************************!*\
  !*** ./resources/js/views/Tables/projects.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  img: 'img/theme/bootstrap.jpg',
  title: 'Argon Design System',
  budget: '$2500 USD',
  status: 'pending',
  statusType: 'warning',
  completion: 60
}, {
  img: 'img/theme/angular.jpg',
  title: 'Angular Now UI Kit PRO',
  budget: '$1800 USD',
  status: 'completed',
  statusType: 'success',
  completion: 100
}, {
  img: 'img/theme/sketch.jpg',
  title: 'Black Dashboard',
  budget: '$3150 USD',
  status: 'delayed',
  statusType: 'danger',
  completion: 72
}, {
  img: 'img/theme/react.jpg',
  title: 'React Material Dashboard',
  budget: '$4400 USD',
  status: 'on schedule',
  statusType: 'info',
  completion: 90
}, {
  img: 'img/theme/vue.jpg',
  title: 'Vue Paper UI Kit PRO',
  budget: '$2200 USD',
  status: 'completed',
  statusType: 'success',
  completion: 100
}, {
  img: 'img/theme/bootstrap.jpg',
  title: 'Argon Design System',
  budget: '$2500 USD',
  status: 'pending',
  statusType: 'warning',
  completion: 60
}, {
  img: 'img/theme/angular.jpg',
  title: 'Angular Now UI Kit PRO',
  budget: '$1800 USD',
  status: 'completed',
  statusType: 'success',
  completion: 100
}, {
  img: 'img/theme/sketch.jpg',
  title: 'Black Dashboard',
  budget: '$3150 USD',
  status: 'delayed',
  statusType: 'danger',
  completion: 72
}, {
  img: 'img/theme/vue.jpg',
  title: 'Vue Paper UI Kit PRO',
  budget: '$2200 USD',
  status: 'completed',
  statusType: 'success',
  completion: 100
}]);

/***/ }),

/***/ "./resources/js/views/Tables/users.js":
/*!********************************************!*\
  !*** ./resources/js/views/Tables/users.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  id: 1,
  name: 'John Michael',
  image: 'img/theme/team-1.jpg',
  createdAt: '10/09/2018',
  product: 'Argon Dashboard PRO',
  active: true
}, {
  id: 2,
  name: 'Alexandra Smith',
  image: 'img/theme/team-2.jpg',
  createdAt: '08/09/2018',
  product: 'Argon Design System',
  active: false
}, {
  id: 3,
  name: 'Samantha Ivy',
  image: 'img/theme/team-3.jpg',
  createdAt: '30/08/2018',
  product: 'Black Dashboard',
  active: false
}, {
  id: 4,
  name: 'John Michael',
  image: 'img/theme/team-1.jpg',
  createdAt: '10/09/2018',
  product: 'Argon Dashboard PRO',
  active: true
}, {
  id: 5,
  name: 'Alexandra Smith',
  image: 'img/theme/team-2.jpg',
  createdAt: '30/09/2018',
  product: 'Vue Argon Dashboard',
  active: true
}]);

/***/ })

}]);