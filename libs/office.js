(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Glue4Office"] = factory();
	else
		root["Glue4Office"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@glue42/core/dist/core.es.js":
/*!***************************************************!*\
  !*** ./node_modules/@glue42/core/dist/core.es.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

var MetricTypes = {
    DEFAULT: 0,
    STRING: 1,
    NUMBER: 2,
    COUNT: 3,
    RATE: 4,
    STATISTICS: 6,
    TIMESTAMP: 7,
    ADDRESS: 8,
    TIMESPAN: 10,
    OBJECT: 11
};

function getMetricTypeByValue(metric) {
    if ((metric.value && metric.value.constructor === Date) || metric.type === MetricTypes.TIMESPAN || metric.type === MetricTypes.TIMESTAMP) {
        return "timestamp";
    }
    else if (typeof metric.value === "number") {
        return "number";
    }
    else if (typeof metric.value === "string" || metric.type === MetricTypes.STRING || metric.type === MetricTypes.RATE) {
        return "string";
    }
    else if (typeof metric.value === "object") {
        return "object";
    }
}
function getTypeByValue(value) {
    if (value.constructor === Date) {
        return "timestamp";
    }
    else if (typeof value === "number") {
        return "number";
    }
    else if (typeof value === "string") {
        return "string";
    }
    else if (typeof value === "object") {
        return "object";
    }
    else {
        return "string";
    }
}
function serializeMetric(metric) {
    var serializedMetrics = {};
    var type = getMetricTypeByValue(metric);
    if (type === "object") {
        var values = Object.keys(metric.value).reduce(function (memo, key) {
            var innerType = getTypeByValue(metric.value[key]);
            if (innerType === "object") {
                var composite = defineNestedComposite(metric.value[key]);
                memo[key] = {
                    type: "object",
                    description: "",
                    context: {},
                    composite: composite,
                };
            }
            else {
                memo[key] = {
                    type: innerType,
                    description: "",
                    context: {},
                };
            }
            return memo;
        }, {});
        serializedMetrics.composite = values;
    }
    serializedMetrics.name = normalizeMetricName(metric.path.join("/") + "/" + metric.name);
    serializedMetrics.type = type;
    serializedMetrics.description = metric.description;
    serializedMetrics.context = {};
    return serializedMetrics;
}
function defineNestedComposite(values) {
    return Object.keys(values).reduce(function (memo, key) {
        var type = getTypeByValue(values[key]);
        if (type === "object") {
            memo[key] = {
                type: "object",
                description: "",
                context: {},
                composite: defineNestedComposite(values[key]),
            };
        }
        else {
            memo[key] = {
                type: type,
                description: "",
                context: {},
            };
        }
        return memo;
    }, {});
}
function normalizeMetricName(name) {
    if (typeof name !== "undefined" && name.length > 0 && name[0] !== "/") {
        return "/" + name;
    }
    else {
        return name;
    }
}
function getMetricValueByType(metric) {
    var type = getMetricTypeByValue(metric);
    if (type === "timestamp") {
        return Date.now();
    }
    else {
        return publishNestedComposite(metric.value);
    }
}
function publishNestedComposite(values) {
    if (typeof values !== "object") {
        return values;
    }
    return Object.keys(values).reduce(function (memo, key) {
        var value = values[key];
        if (typeof value === "object" && value.constructor !== Date) {
            memo[key] = publishNestedComposite(value);
        }
        else if (value.constructor === Date) {
            memo[key] = new Date(value).getTime();
        }
        else if (value.constructor === Boolean) {
            memo[key] = value.toString();
        }
        else {
            memo[key] = value;
        }
        return memo;
    }, {});
}
function flatten(arr) {
    return arr.reduce(function (flat, toFlatten) {
        return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
    }, []);
}
function getHighestState(arr) {
    return arr.sort(function (a, b) {
        return b.state - a.state;
    })[0];
}
function aggregateDescription(arr) {
    var msg = "";
    arr.forEach(function (m, idx, a) {
        var path = m.path.join(".");
        if (idx === a.length - 1) {
            msg += path + "." + m.name + ": " + m.description;
        }
        else {
            msg += path + "." + m.name + ": " + m.description + ",";
        }
    });
    if (msg.length > 100) {
        return msg.slice(0, 100) + "...";
    }
    else {
        return msg;
    }
}
function composeMsgForRootStateMetric(system) {
    var aggregatedState = system.root.getAggregateState();
    var merged = flatten(aggregatedState);
    var highestState = getHighestState(merged);
    var aggregateDesc = aggregateDescription(merged);
    return {
        description: aggregateDesc,
        value: highestState.state,
    };
}

function gw3 (connection, config) {
    if (!connection || typeof connection !== "object") {
        throw new Error("Connection is required parameter");
    }
    var joinPromise;
    var session;
    var init = function (repo) {
        var resolveReadyPromise;
        joinPromise = new Promise(function (resolve) {
            resolveReadyPromise = resolve;
        });
        session = connection.domain("metrics", config.logger);
        session.onJoined(function (reconnect) {
            if (!reconnect) {
                resolveReadyPromise();
                resolveReadyPromise = undefined;
            }
            var rootStateMetric = {
                name: "/State",
                type: "object",
                composite: {
                    Description: {
                        type: "string",
                        description: "",
                    },
                    Value: {
                        type: "number",
                        description: "",
                    },
                },
                description: "System state",
                context: {},
            };
            var defineRootMetricsMsg = {
                type: "define",
                metrics: [rootStateMetric],
            };
            session.send(defineRootMetricsMsg);
            if (reconnect) {
                replayRepo(repo);
            }
        });
        session.join(config.identity);
    };
    var replayRepo = function (repo) {
        replaySystem(repo.root);
    };
    var replaySystem = function (system) {
        createSystem(system);
        system.metrics.forEach(function (m) {
            createMetric(m);
        });
        system.subSystems.forEach(function (ss) {
            replaySystem(ss);
        });
    };
    var createSystem = function (system) {
        if (system.parent === undefined) {
            return;
        }
        joinPromise.then(function () {
            var metric = {
                name: normalizeMetricName(system.path.join("/") + "/" + system.name + "/State"),
                type: "object",
                composite: {
                    Description: {
                        type: "string",
                        description: "",
                    },
                    Value: {
                        type: "number",
                        description: "",
                    },
                },
                description: "System state",
                context: {},
            };
            var createMetricsMsg = {
                type: "define",
                metrics: [metric],
            };
            session.send(createMetricsMsg);
        });
    };
    var updateSystem = function (system, state) {
        joinPromise.then(function () {
            var shadowedUpdateMetric = {
                type: "publish",
                values: [{
                        name: normalizeMetricName(system.path.join("/") + "/" + system.name + "/State"),
                        value: {
                            Description: state.description,
                            Value: state.state,
                        },
                        timestamp: Date.now(),
                    }],
            };
            session.send(shadowedUpdateMetric);
            var stateObj = composeMsgForRootStateMetric(system);
            var rootMetric = {
                type: "publish",
                peer_id: connection.peerId,
                values: [{
                        name: "/State",
                        value: {
                            Description: stateObj.description,
                            Value: stateObj.value,
                        },
                        timestamp: Date.now(),
                    }],
            };
            session.send(rootMetric);
        });
    };
    var createMetric = function (metric) {
        var metricClone = cloneMetric(metric);
        joinPromise.then(function () {
            var m = serializeMetric(metricClone);
            var createMetricsMsg = {
                type: "define",
                metrics: [m],
            };
            session.send(createMetricsMsg);
            if (typeof metricClone.value !== "undefined") {
                updateMetricCore(metricClone);
            }
        });
    };
    var updateMetric = function (metric) {
        var metricClone = cloneMetric(metric);
        joinPromise.then(function () { return updateMetricCore(metricClone); });
    };
    var updateMetricCore = function (metric) {
        var value = getMetricValueByType(metric);
        var publishMetricsMsg = {
            type: "publish",
            values: [{
                    name: normalizeMetricName(metric.path.join("/") + "/" + metric.name),
                    value: value,
                    timestamp: Date.now(),
                }],
        };
        session.send(publishMetricsMsg);
    };
    var cloneMetric = function (metric) {
        var metricClone = __assign({}, metric);
        if (typeof metric.value === "object" && metric.value !== null) {
            metricClone.value = __assign({}, metric.value);
        }
        return metricClone;
    };
    return {
        init: init,
        createSystem: createSystem,
        updateSystem: updateSystem,
        createMetric: createMetric,
        updateMetric: updateMetric,
    };
}

function metricToMessage(metric) {
    var definition = getMetricDefinition(metric.name, metric.value, metric.path, metric.type, metric.description, metric.period, metric.resolution, metric.conflation);
    function getMetricDefinition(name, value, path, type, description, period, resolution, conflation) {
        var _definition = {
            name: name,
            description: description,
            type: type ? type : getTypeFromValue(value),
            path: path,
            resolution: resolution,
            period: period,
            conflation: conflation,
        };
        if (_definition.type === MetricTypes.OBJECT) {
            _definition.Composite = Object.keys(value).reduce(function (arr, key) {
                var val = value[key];
                arr.push(getMetricDefinition(key, val, path));
                return arr;
            }, []);
        }
        return _definition;
    }
    function serializeValue(value, _metric) {
        if (value && value.constructor === Date) {
            return {
                value: {
                    type: _valueTypes.indexOf("date"),
                    value: value.valueOf(),
                    isArray: false,
                },
            };
        }
        if (typeof value === "object") {
            return {
                CompositeValue: Object.keys(value).reduce(function (arr, key) {
                    var val = serializeValue(value[key]);
                    val.InnerMetricName = key;
                    arr.push(val);
                    return arr;
                }, []),
            };
        }
        var valueType = _metric ? _metric.getValueType() : undefined;
        valueType = valueType || _valueTypes.indexOf(typeof value);
        return {
            value: {
                type: valueType,
                value: value,
                isArray: false,
            },
        };
    }
    function getTypeFromValue(value) {
        var typeAsString = value.constructor === Date ? "timestamp" : typeof value;
        switch (typeAsString) {
            case "string":
                return MetricTypes.STRING;
            case "number":
                return MetricTypes.NUMBER;
            case "timestamp":
                return MetricTypes.TIMESTAMP;
            case "object":
                return MetricTypes.OBJECT;
        }
        return 0;
    }
    var _valueTypes = [
        "boolean",
        "int",
        "number",
        "long",
        "string",
        "date",
        "object",
    ];
    return {
        id: metric.id,
        instance: metric.repo.instance,
        definition: definition,
        value: serializeValue(metric.value, metric),
    };
}

function gw1 (connection, config) {
    var DEFAULT_HEARTBEAT_INTERVAL = 3000;
    var heartbeatTimer;
    if (!connection || typeof connection !== "object") {
        throw new Error("Connection is required parameter");
    }
    var _connection = connection;
    var heartbeatInterval = config.heartbeatInterval || DEFAULT_HEARTBEAT_INTERVAL;
    var send = function (type, message) {
        _connection.send("metrics", type, message);
    };
    function sendFull(repo) {
        if (!repo.root) {
            return;
        }
        if (repo.root.subSystems.length === 0) {
            return;
        }
        sendFullSystem(repo.root);
    }
    function sendFullSystem(system) {
        createSystem(system);
        system.subSystems.forEach(function (sub) {
            sendFullSystem(sub);
        });
        system.metrics.forEach(function (metric) {
            createMetric(metric);
        });
    }
    function heartbeat(repo) {
        send("HeartbeatMetrics", {
            publishingInterval: heartbeatInterval,
            instance: repo.instance,
        });
    }
    function createSystem(system) {
        if (system.parent !== undefined) {
            send("CreateMetricSystem", {
                id: system.id,
                instance: system.repo.instance,
                definition: {
                    name: system.name,
                    description: system.description,
                    path: system.path,
                },
            });
        }
    }
    function updateSystem(system, state) {
        send("UpdateMetricSystem", {
            id: system.id,
            instance: system.repo.instance,
            state: state,
        });
    }
    function createMetric(metric) {
        send("CreateMetric", metricToMessage(metric));
    }
    function updateMetric(metric) {
        send("UpdateMetric", metricToMessage(metric));
    }
    function init(repo) {
        heartbeat(repo);
        _connection.on("metrics", "MetricsSnapshotRequest", function (instanceInfo) {
            if (instanceInfo.Instance !== repo.instance) {
                return;
            }
            sendFull(repo);
        });
        _connection.disconnected(function () { return clearInterval(heartbeatTimer); });
        if (typeof window !== "undefined" && typeof window.htmlContainer === "undefined") {
            heartbeatTimer = setInterval(function () {
                heartbeat(repo);
            }, heartbeatInterval);
        }
    }
    var me = {
        createSystem: createSystem,
        updateSystem: updateSystem,
        createMetric: createMetric,
        updateMetric: updateMetric,
        init: init,
    };
    return me;
}

var Helpers = {
    validate: function (definition, parent, transport) {
        if (definition === null || typeof definition !== "object") {
            throw new Error("Missing definition");
        }
        if (parent === null || typeof parent !== "object") {
            throw new Error("Missing parent");
        }
        if (transport === null || typeof transport !== "object") {
            throw new Error("Missing transport");
        }
    },
};

function addressMetric(definition, parent, transport, value) {
    Helpers.validate(definition, parent, transport);
    var _transport = transport;
    var _value = value || "";
    var _path = parent.path.slice(0);
    _path.push(parent.name);
    var name = definition.name;
    var description = definition.description;
    var period = definition.period;
    var resolution = definition.resolution;
    var system = parent;
    var repo = parent.repo;
    var conflation = definition.conflation;
    var id = parent.path + "/" + name;
    var type = MetricTypes.ADDRESS;
    function update(newValue) {
        _value = newValue;
        _transport.updateMetric(me);
    }
    function getValueType() {
        return undefined;
    }
    var me = {
        name: name,
        description: description,
        period: period,
        resolution: resolution,
        system: system,
        repo: repo,
        id: id,
        type: type,
        conflation: conflation,
        get value() {
            return _value;
        },
        get path() {
            return _path;
        },
        update: update,
        getValueType: getValueType,
    };
    _transport.createMetric(me);
    return me;
}

function countMetric(definition, parent, transport, value) {
    Helpers.validate(definition, parent, transport);
    var _transport = transport;
    var _value = value || 0;
    var _path = parent.path.slice(0);
    _path.push(parent.name);
    var name = definition.name;
    var description = definition.description;
    var period = definition.period;
    var resolution = definition.resolution;
    var conflation = definition.conflation;
    var system = parent;
    var repo = parent.repo;
    var id = parent.path + "/" + name;
    var type = MetricTypes.COUNT;
    function update(newValue) {
        _value = newValue;
        _transport.updateMetric(me);
    }
    function getValueType() {
        return undefined;
    }
    function incrementBy(num) {
        update(_value + num);
    }
    function increment() {
        incrementBy(1);
    }
    function decrement() {
        incrementBy(-1);
    }
    function decrementBy(num) {
        incrementBy(num * -1);
    }
    var me = {
        name: name,
        description: description,
        period: period,
        resolution: resolution,
        system: system,
        repo: repo,
        id: id,
        type: type,
        conflation: conflation,
        get path() {
            return _path;
        },
        get value() {
            return _value;
        },
        update: update,
        getValueType: getValueType,
        incrementBy: incrementBy,
        increment: increment,
        decrement: decrement,
        decrementBy: decrementBy,
    };
    _transport.createMetric(me);
    return me;
}

function numberMetric(definition, parent, transport, value) {
    Helpers.validate(definition, parent, transport);
    var _transport = transport;
    var _path = parent.path.slice(0);
    var _value = value || 0;
    var name = definition.name;
    var description = definition.description;
    var period = definition.period;
    var resolution = definition.resolution;
    var conflation = definition.conflation;
    var system = parent;
    var repo = parent.repo;
    var id = parent.path + "/" + name;
    var type = MetricTypes.NUMBER;
    _path.push(parent.name);
    function update(newValue) {
        _value = newValue;
        _transport.updateMetric(me);
    }
    function getValueType() {
        return undefined;
    }
    function incrementBy(num) {
        update(_value + num);
    }
    function increment() {
        incrementBy(1);
    }
    function decrement() {
        incrementBy(-1);
    }
    function decrementBy(num) {
        incrementBy(num * -1);
    }
    var me = {
        name: name,
        description: description,
        period: period,
        resolution: resolution,
        system: system,
        repo: repo,
        id: id,
        conflation: conflation,
        get value() {
            return _value;
        },
        type: type,
        get path() {
            return _path;
        },
        update: update,
        getValueType: getValueType,
        incrementBy: incrementBy,
        increment: increment,
        decrement: decrement,
        decrementBy: decrementBy,
    };
    _transport.createMetric(me);
    return me;
}

function objectMetric(definition, parent, transport, value) {
    Helpers.validate(definition, parent, transport);
    var _transport = transport;
    var _value = value || "";
    var _path = parent.path.slice(0);
    _path.push(parent.name);
    var name = definition.name;
    var description = definition.description;
    var period = definition.period;
    var resolution = definition.resolution;
    var conflation = definition.conflation;
    var system = parent;
    var repo = parent.repo;
    var id = parent.path + "/" + name;
    var type = MetricTypes.OBJECT;
    function update(newValue) {
        mergeValues(newValue);
        _transport.updateMetric(me);
    }
    function getValueType() {
        return undefined;
    }
    function mergeValues(values) {
        return Object.keys(_value).forEach(function (k) {
            if (typeof values[k] !== "undefined") {
                _value[k] = values[k];
            }
        });
    }
    var me = {
        name: name,
        description: description,
        period: period,
        resolution: resolution,
        system: system,
        repo: repo,
        id: id,
        type: type,
        conflation: conflation,
        get value() {
            return _value;
        },
        get path() {
            return _path;
        },
        update: update,
        getValueType: getValueType,
    };
    _transport.createMetric(me);
    return me;
}

function rateMetric(definition, parent, transport, value) {
    Helpers.validate(definition, parent, transport);
    var _transport = transport;
    var _value = value || "";
    var _path = parent.path.slice(0);
    _path.push(parent.name);
    var name = definition.name;
    var description = definition.description;
    var period = definition.period;
    var resolution = definition.resolution;
    var conflation = definition.conflation;
    var system = parent;
    var repo = parent.repo;
    var id = parent.path + "/" + name;
    var type = MetricTypes.RATE;
    function update(newValue) {
        _value = newValue;
        _transport.updateMetric(me);
    }
    function getValueType() {
        return undefined;
    }
    var me = {
        name: name,
        description: description,
        period: period,
        resolution: resolution,
        system: system,
        repo: repo,
        id: id,
        type: type,
        conflation: conflation,
        get value() {
            return _value;
        },
        get path() {
            return _path;
        },
        update: update,
        getValueType: getValueType,
    };
    _transport.createMetric(me);
    return me;
}

function statisticsMetric(definition, parent, transport, value) {
    Helpers.validate(definition, parent, transport);
    var _transport = transport;
    var _value = value || "";
    var _path = parent.path.slice(0);
    _path.push(parent.name);
    var name = definition.name;
    var description = definition.description;
    var period = definition.period;
    var resolution = definition.resolution;
    var conflation = definition.conflation;
    var system = parent;
    var repo = parent.repo;
    var id = parent.path + "/" + name;
    var type = MetricTypes.STATISTICS;
    function update(newValue) {
        _value = newValue;
        _transport.updateMetric(me);
    }
    function getValueType() {
        return undefined;
    }
    var me = {
        name: name,
        description: description,
        period: period,
        resolution: resolution,
        system: system,
        repo: repo,
        id: id,
        type: type,
        conflation: conflation,
        get value() {
            return _value;
        },
        get path() {
            return _path;
        },
        update: update,
        getValueType: getValueType,
    };
    _transport.createMetric(me);
    return me;
}

function stringMetric(definition, parent, transport, value) {
    Helpers.validate(definition, parent, transport);
    var _transport = transport;
    var _value = value || "";
    var _path = parent.path.slice(0);
    _path.push(parent.name);
    var name = definition.name;
    var description = definition.description;
    var period = definition.period;
    var resolution = definition.resolution;
    var conflation = definition.conflation;
    var system = parent;
    var repo = parent.repo;
    var id = parent.path + "/" + name;
    var type = MetricTypes.STRING;
    function update(newValue) {
        _value = newValue;
        _transport.updateMetric(me);
    }
    function getValueType() {
        return undefined;
    }
    var me = {
        name: name,
        description: description,
        period: period,
        resolution: resolution,
        system: system,
        repo: repo,
        id: id,
        conflation: conflation,
        get value() {
            return _value;
        },
        get path() {
            return _path;
        },
        type: type,
        update: update,
        getValueType: getValueType,
    };
    _transport.createMetric(me);
    return me;
}

function timespanMetric(definition, parent, transport, value) {
    Helpers.validate(definition, parent, transport);
    var _transport = transport;
    var _value = value || "";
    var _path = parent.path.slice(0);
    _path.push(parent.name);
    var name = definition.name;
    var description = definition.description;
    var period = definition.period;
    var resolution = definition.resolution;
    var conflation = definition.conflation;
    var system = parent;
    var repo = parent.repo;
    var id = parent.path + "/" + name;
    var type = MetricTypes.TIMESPAN;
    function update(newValue) {
        _value = newValue;
        _transport.updateMetric(me);
    }
    function start() {
        update(true);
    }
    function stop() {
        update(false);
    }
    function getValueType() {
        return undefined;
    }
    var me = {
        name: name,
        description: description,
        period: period,
        resolution: resolution,
        system: system,
        repo: repo,
        id: id,
        type: type,
        conflation: conflation,
        get value() {
            return _value;
        },
        get path() {
            return _path;
        },
        update: update,
        start: start,
        stop: stop,
        getValueType: getValueType,
    };
    _transport.createMetric(me);
    return me;
}

function timestampMetric(definition, parent, transport, value) {
    Helpers.validate(definition, parent, transport);
    var _transport = transport;
    var _value = value || "";
    var _path = parent.path.slice(0);
    _path.push(parent.name);
    var name = definition.name;
    var description = definition.description;
    var period = definition.period;
    var resolution = definition.resolution;
    var conflation = definition.conflation;
    var system = parent;
    var repo = parent.repo;
    var id = parent.path + "/" + name;
    var type = MetricTypes.TIMESTAMP;
    function update(newValue) {
        _value = newValue;
        _transport.updateMetric(me);
    }
    function now() {
        update(new Date());
    }
    function getValueType() {
        return undefined;
    }
    var me = {
        name: name,
        description: description,
        period: period,
        resolution: resolution,
        system: system,
        repo: repo,
        id: id,
        type: type,
        conflation: conflation,
        get value() {
            return _value;
        },
        get path() {
            return _path;
        },
        update: update,
        now: now,
        getValueType: getValueType,
    };
    _transport.createMetric(me);
    return me;
}

function system(name, repo, protocol, parent, description) {
    if (!repo) {
        throw new Error("Repository is required");
    }
    if (!protocol) {
        throw new Error("Transport is required");
    }
    var _transport = protocol;
    var _name = name;
    var _description = description || "";
    var _repo = repo;
    var _parent = parent;
    var _path = _buildPath(parent);
    var _state = {};
    var id = _arrayToString(_path, "/") + name;
    var identity = repo.identity;
    var root = repo.root;
    var _subSystems = [];
    var _metrics = [];
    function subSystem(nameSystem, descriptionSystem) {
        if (!nameSystem || nameSystem.length === 0) {
            throw new Error("name is required");
        }
        var match = _subSystems.filter(function (s) { return s.name === nameSystem; });
        if (match.length > 0) {
            return match[0];
        }
        var _system = system(nameSystem, _repo, _transport, me, descriptionSystem);
        _subSystems.push(_system);
        return _system;
    }
    function setState(state, stateDescription) {
        _state = { state: state, description: stateDescription };
        _transport.updateSystem(me, _state);
    }
    function stringMetric$1(definition, value) {
        return _getOrCreateMetric.call(me, definition, MetricTypes.STRING, value, function (metricDef) { return stringMetric(metricDef, me, _transport, value); });
    }
    function numberMetric$1(definition, value) {
        return _getOrCreateMetric.call(me, definition, MetricTypes.NUMBER, value, function (metricDef) { return numberMetric(metricDef, me, _transport, value); });
    }
    function countMetric$1(definition, value) {
        return _getOrCreateMetric.call(this, definition, MetricTypes.COUNT, value, function (metricDef) { return countMetric(metricDef, me, _transport, value); });
    }
    function addressMetric$1(definition, value) {
        return _getOrCreateMetric.call(this, definition, MetricTypes.ADDRESS, value, function (metricDef) { return addressMetric(metricDef, me, _transport, value); });
    }
    function objectMetric$1(definition, value) {
        return _getOrCreateMetric.call(this, definition, MetricTypes.OBJECT, value, function (metricDef) { return objectMetric(metricDef, me, _transport, value); });
    }
    function timespanMetric$1(definition, value) {
        return _getOrCreateMetric.call(this, definition, MetricTypes.TIMESPAN, value, function (metricDef) { return timespanMetric(metricDef, me, _transport, value); });
    }
    function timestampMetric$1(definition, value) {
        return _getOrCreateMetric.call(this, definition, MetricTypes.TIMESTAMP, value, function (metricDef) { return timestampMetric(metricDef, me, _transport, value); });
    }
    function rateMetric$1(definition, value) {
        return _getOrCreateMetric.call(this, definition, MetricTypes.RATE, value, function (metricDef) { return rateMetric(metricDef, me, _transport, value); });
    }
    function statisticsMetric$1(definition, value) {
        return _getOrCreateMetric.call(this, definition, MetricTypes.STATISTICS, value, function (metricDef) { return statisticsMetric(metricDef, me, _transport, value); });
    }
    function _unionToMetricDef(def) {
        var metricDefinition = {};
        if (typeof def === "string") {
            metricDefinition.name = def;
        }
        else {
            metricDefinition = def;
        }
        if (metricDefinition.name === undefined) {
            throw new Error("Metric name is required");
        }
        return metricDefinition;
    }
    function _getOrCreateMetric(definition, expectedType, value, createMetric) {
        var metricDefinition = _unionToMetricDef(definition);
        var matching = _metrics.filter(function (shadowedMetric) { return shadowedMetric.name === metricDefinition.name; });
        if (matching.length > 0) {
            var existing = matching[0];
            if (existing.type !== expectedType) {
                throw new Error("A metric named " + metricDefinition.name + " is already defined with different type.");
            }
            if (typeof value !== "undefined") {
                existing.update(value);
            }
            return existing;
        }
        var metric = createMetric(metricDefinition);
        _metrics.push(metric);
        return metric;
    }
    function _buildPath(shadowedSystem) {
        if (!shadowedSystem || !shadowedSystem.parent) {
            return [];
        }
        var path = _buildPath(shadowedSystem.parent);
        path.push(shadowedSystem.name);
        return path;
    }
    function _arrayToString(path, separator) {
        return ((path && path.length > 0) ? path.join(separator) : "");
    }
    function getAggregateState() {
        var aggState = [];
        if (Object.keys(_state).length > 0) {
            aggState.push({
                name: _name,
                path: _path,
                state: _state.state,
                description: _state.description,
            });
        }
        _subSystems.forEach(function (shadowedSubSystem) {
            var result = shadowedSubSystem.getAggregateState();
            if (result.length > 0) {
                aggState.push.apply(aggState, result);
            }
        });
        return aggState;
    }
    var me = {
        get name() {
            return _name;
        },
        get description() {
            return _description;
        },
        get repo() {
            return _repo;
        },
        get parent() {
            return _parent;
        },
        path: _path,
        id: id,
        identity: identity,
        root: root,
        get subSystems() {
            return _subSystems;
        },
        get metrics() {
            return _metrics;
        },
        subSystem: subSystem,
        getState: function () {
            return _state;
        },
        setState: setState,
        stringMetric: stringMetric$1,
        statisticsMetric: statisticsMetric$1,
        rateMetric: rateMetric$1,
        timestampMetric: timestampMetric$1,
        timespanMetric: timespanMetric$1,
        objectMetric: objectMetric$1,
        addressMetric: addressMetric$1,
        countMetric: countMetric$1,
        numberMetric: numberMetric$1,
        getAggregateState: getAggregateState,
    };
    _transport.createSystem(me);
    return me;
}

function repository(options, protocol) {
    if (!options.identity) {
        throw new Error("Identity missing from metrics configuration");
    }
    if (!options.identity.service || typeof options.identity.service !== "string") {
        throw new Error("Service missing or invalid in metrics identity configuration");
    }
    if (!options.identity.system || typeof options.identity.system !== "string") {
        throw new Error("System missing or invalid in metrics identity configuration");
    }
    if (!options.identity.instance || typeof options.identity.instance !== "string") {
        throw new Error("Instance missing or invalid in metrics identity configuration");
    }
    var identity = options.identity;
    var instance = options.identity.system + "/" + options.identity.service + "/" + options.identity.instance;
    function _initSystemMetrics(rootSystem, useClickStream) {
        if (typeof navigator !== "undefined") {
            rootSystem.stringMetric("UserAgent", navigator.userAgent);
        }
        if (useClickStream && typeof document !== "undefined") {
            var clickStream_1 = rootSystem.subSystem("ClickStream");
            var documentClickHandler = function (e) {
                if (!e.target) {
                    return;
                }
                var target = e.target;
                clickStream_1.objectMetric("LastBrowserEvent", {
                    type: "click",
                    timestamp: new Date(),
                    target: {
                        className: e.target ? target.className : "",
                        id: target.id,
                        type: "<" + target.tagName.toLowerCase() + ">",
                        href: target.href || "",
                    },
                });
            };
            clickStream_1.objectMetric("Page", {
                title: document.title,
                page: window.location.href,
            });
            if (document.addEventListener) {
                document.addEventListener("click", documentClickHandler);
            }
            else {
                document.attachEvent("onclick", documentClickHandler);
            }
        }
        var startTime = rootSystem.stringMetric("StartTime", (new Date()).toString());
        var urlMetric = rootSystem.stringMetric("StartURL", "");
        var appNameMetric = rootSystem.stringMetric("AppName", "");
        if (typeof window !== "undefined") {
            if (typeof window.location !== "undefined") {
                var startUrl = window.location.href;
                urlMetric.update(startUrl);
            }
            if (typeof window.glue42gd !== "undefined") {
                appNameMetric.update(window.glue42gd.appName);
            }
        }
    }
    var _root;
    var me = {
        identity: identity,
        instance: instance,
        get root() {
            return _root;
        },
    };
    protocol.init(me);
    _root = system("", me, protocol);
    _initSystemMetrics(_root, options.clickStream || options.clickStream === undefined);
    return me;
}

var metrics = (function (settings) {
    var options = {
        connection: settings.connection,
        identity: settings.identity,
        logger: settings.logger,
        heartbeatInterval: settings.heartbeatInterval,
        settings: {},
        clickStream: settings.clickStream,
    };
    if (!options.connection || typeof options.connection !== "object") {
        throw new Error("Connection is required parameter");
    }
    var _protocol;
    if (options.connection.protocolVersion === 3) {
        _protocol = gw3(options.connection, settings);
    }
    else {
        _protocol = gw1(options.connection, settings);
    }
    var repo = repository(options, _protocol);
    var rootSystem = repo.root;
    return rootSystem;
});

function createRegistry(options) {
    if (options && options.errorHandling
        && typeof options.errorHandling !== "function"
        && options.errorHandling !== "log"
        && options.errorHandling !== "silent"
        && options.errorHandling !== "throw") {
        throw new Error("Invalid options passed to createRegistry. Prop errorHandling should be [\"log\" | \"silent\" | \"throw\" | (err) => void], but " + typeof options.errorHandling + " was passed");
    }
    var _userErrorHandler = options && typeof options.errorHandling === "function" && options.errorHandling;
    var callbacks = {};
    function add(key, callback) {
        var callbacksForKey = callbacks[key];
        if (!callbacksForKey) {
            callbacksForKey = [];
            callbacks[key] = callbacksForKey;
        }
        callbacksForKey.push(callback);
        return function () {
            var allForKey = callbacks[key];
            if (!allForKey) {
                return;
            }
            allForKey = allForKey.reduce(function (acc, element, index) {
                if (!(element === callback && acc.length === index)) {
                    acc.push(element);
                }
                return acc;
            }, []);
            callbacks[key] = allForKey;
        };
    }
    function execute(key) {
        var argumentsArr = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            argumentsArr[_i - 1] = arguments[_i];
        }
        var callbacksForKey = callbacks[key];
        if (!callbacksForKey || callbacksForKey.length === 0) {
            return [];
        }
        var results = [];
        callbacksForKey.forEach(function (callback) {
            try {
                var result = callback.apply(undefined, argumentsArr);
                results.push(result);
            }
            catch (err) {
                results.push(undefined);
                _handleError(err, key);
            }
        });
        return results;
    }
    function _handleError(exceptionArtifact, key) {
        var errParam = exceptionArtifact instanceof Error ? exceptionArtifact : new Error(exceptionArtifact);
        if (_userErrorHandler) {
            _userErrorHandler(errParam);
            return;
        }
        var msg = "[ERROR] callback-registry: User callback for key \"" + key + "\" failed: " + errParam.stack;
        if (options) {
            switch (options.errorHandling) {
                case "log":
                    return console.error(msg);
                case "silent":
                    return;
                case "throw":
                    throw new Error(msg);
            }
        }
        console.error(msg);
    }
    function clear() {
        callbacks = {};
    }
    function clearKey(key) {
        var callbacksForKey = callbacks[key];
        if (!callbacksForKey) {
            return;
        }
        delete callbacks[key];
    }
    return {
        add: add,
        execute: execute,
        clear: clear,
        clearKey: clearKey
    };
}
createRegistry.default = createRegistry;
var lib = createRegistry;

var ConnectionImpl = (function () {
    function ConnectionImpl(settings) {
        this.messageHandlers = {};
        this.ids = 1;
        this.registry = lib();
        this._connected = false;
        this.isTrace = false;
        this._settings = settings;
        this.logger = settings.logger;
        this.isTrace = this.logger.canPublish("trace");
    }
    ConnectionImpl.prototype.init = function (transport, protocol) {
        this._protocol = protocol;
        this._transport = transport;
        this._transport.onConnectedChanged(this.handleConnectionChanged.bind(this));
        this._transport.onMessage(this.handleTransportMessage.bind(this));
    };
    ConnectionImpl.prototype.send = function (product, type, message, id, options) {
        if (this._transport.isObjectBasedTransport) {
            var msg = this._protocol.createObjectMessage(product, type, message, id);
            if (this.isTrace) {
                this.logger.trace(">> " + JSON.stringify(msg));
            }
            return this._transport.sendObject(msg, product, type, options);
        }
        else {
            var strMessage = this._protocol.createStringMessage(product, type, message, id);
            if (this.isTrace) {
                this.logger.trace(">> " + strMessage + "}");
            }
            return this._transport.send(strMessage, product, type, options);
        }
    };
    ConnectionImpl.prototype.on = function (product, type, messageHandler) {
        type = type.toLowerCase();
        if (this.messageHandlers[type] === undefined) {
            this.messageHandlers[type] = {};
        }
        var id = this.ids++;
        this.messageHandlers[type][id] = messageHandler;
        return {
            type: type,
            id: id,
        };
    };
    ConnectionImpl.prototype.off = function (info) {
        delete this.messageHandlers[info.type.toLowerCase()][info.id];
    };
    Object.defineProperty(ConnectionImpl.prototype, "isConnected", {
        get: function () {
            return this._connected;
        },
        enumerable: true,
        configurable: true
    });
    ConnectionImpl.prototype.connected = function (callback) {
        if (this._connected) {
            callback(this._settings.ws || this._settings.http);
        }
        return this.registry.add("connected", callback);
    };
    ConnectionImpl.prototype.disconnected = function (callback) {
        return this.registry.add("disconnected", callback);
    };
    ConnectionImpl.prototype.login = function (authRequest, reconnect) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this._transport.open()];
                    case 1:
                        _a.sent();
                        return [2, this._protocol.login(authRequest, reconnect)];
                }
            });
        });
    };
    ConnectionImpl.prototype.reconnect = function () {
        return this._transport.reconnect();
    };
    ConnectionImpl.prototype.logout = function () {
        this._protocol.logout();
        this._transport.close();
    };
    ConnectionImpl.prototype.loggedIn = function (callback) {
        return this._protocol.loggedIn(callback);
    };
    Object.defineProperty(ConnectionImpl.prototype, "protocolVersion", {
        get: function () {
            return this._settings.protocolVersion || 1;
        },
        enumerable: true,
        configurable: true
    });
    ConnectionImpl.prototype.toAPI = function () {
        var that = this;
        return {
            send: that.send.bind(that),
            on: that.on.bind(that),
            off: that.off.bind(that),
            login: that.login.bind(that),
            logout: that.logout.bind(that),
            loggedIn: that.loggedIn.bind(that),
            connected: that.connected.bind(that),
            disconnected: that.disconnected.bind(that),
            get protocolVersion() {
                return that.protocolVersion;
            },
            reconnect: that.reconnect.bind(that)
        };
    };
    ConnectionImpl.prototype.distributeMessage = function (message, type) {
        var _this = this;
        var handlers = this.messageHandlers[type.toLowerCase()];
        if (handlers !== undefined) {
            Object.keys(handlers).forEach(function (handlerId) {
                var handler = handlers[handlerId];
                if (handler !== undefined) {
                    try {
                        handler(message);
                    }
                    catch (error) {
                        _this.logger.error("Message handler failed with " + error.stack);
                    }
                }
            });
        }
    };
    ConnectionImpl.prototype.handleConnectionChanged = function (connected) {
        if (this._connected === connected) {
            return;
        }
        this._connected = connected;
        if (connected) {
            this.registry.execute("connected");
        }
        else {
            this.registry.execute("disconnected");
        }
    };
    ConnectionImpl.prototype.handleTransportMessage = function (msg) {
        var msgObj;
        if (typeof msg === "string") {
            msgObj = this._protocol.processStringMessage(msg);
        }
        else {
            msgObj = this._protocol.processObjectMessage(msg);
        }
        if (this.isTrace) {
            this.logger.trace("<< " + JSON.stringify(msgObj));
        }
        this.distributeMessage(msgObj.msg, msgObj.msgType);
    };
    return ConnectionImpl;
}());

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

// Found this seed-based random generator somewhere
// Based on The Central Randomizer 1.3 (C) 1997 by Paul Houle (houle@msc.cornell.edu)

var seed = 1;

/**
 * return a random number based on a seed
 * @param seed
 * @returns {number}
 */
function getNextValue() {
    seed = (seed * 9301 + 49297) % 233280;
    return seed/(233280.0);
}

function setSeed(_seed_) {
    seed = _seed_;
}

var randomFromSeed = {
    nextValue: getNextValue,
    seed: setSeed
};

var ORIGINAL = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-';
var alphabet;
var previousSeed;

var shuffled;

function reset() {
    shuffled = false;
}

function setCharacters(_alphabet_) {
    if (!_alphabet_) {
        if (alphabet !== ORIGINAL) {
            alphabet = ORIGINAL;
            reset();
        }
        return;
    }

    if (_alphabet_ === alphabet) {
        return;
    }

    if (_alphabet_.length !== ORIGINAL.length) {
        throw new Error('Custom alphabet for shortid must be ' + ORIGINAL.length + ' unique characters. You submitted ' + _alphabet_.length + ' characters: ' + _alphabet_);
    }

    var unique = _alphabet_.split('').filter(function(item, ind, arr){
       return ind !== arr.lastIndexOf(item);
    });

    if (unique.length) {
        throw new Error('Custom alphabet for shortid must be ' + ORIGINAL.length + ' unique characters. These characters were not unique: ' + unique.join(', '));
    }

    alphabet = _alphabet_;
    reset();
}

function characters(_alphabet_) {
    setCharacters(_alphabet_);
    return alphabet;
}

function setSeed$1(seed) {
    randomFromSeed.seed(seed);
    if (previousSeed !== seed) {
        reset();
        previousSeed = seed;
    }
}

function shuffle() {
    if (!alphabet) {
        setCharacters(ORIGINAL);
    }

    var sourceArray = alphabet.split('');
    var targetArray = [];
    var r = randomFromSeed.nextValue();
    var characterIndex;

    while (sourceArray.length > 0) {
        r = randomFromSeed.nextValue();
        characterIndex = Math.floor(r * sourceArray.length);
        targetArray.push(sourceArray.splice(characterIndex, 1)[0]);
    }
    return targetArray.join('');
}

function getShuffled() {
    if (shuffled) {
        return shuffled;
    }
    shuffled = shuffle();
    return shuffled;
}

/**
 * lookup shuffled letter
 * @param index
 * @returns {string}
 */
function lookup(index) {
    var alphabetShuffled = getShuffled();
    return alphabetShuffled[index];
}

var alphabet_1 = {
    characters: characters,
    seed: setSeed$1,
    lookup: lookup,
    shuffled: getShuffled
};

var crypto = typeof window === 'object' && (window.crypto || window.msCrypto); // IE 11 uses window.msCrypto

function randomByte() {
    if (!crypto || !crypto.getRandomValues) {
        return Math.floor(Math.random() * 256) & 0x30;
    }
    var dest = new Uint8Array(1);
    crypto.getRandomValues(dest);
    return dest[0] & 0x30;
}

var randomByteBrowser = randomByte;

function encode(lookup, number) {
    var loopCounter = 0;
    var done;

    var str = '';

    while (!done) {
        str = str + lookup( ( (number >> (4 * loopCounter)) & 0x0f ) | randomByteBrowser() );
        done = number < (Math.pow(16, loopCounter + 1 ) );
        loopCounter++;
    }
    return str;
}

var encode_1 = encode;

/**
 * Decode the id to get the version and worker
 * Mainly for debugging and testing.
 * @param id - the shortid-generated id.
 */
function decode(id) {
    var characters = alphabet_1.shuffled();
    return {
        version: characters.indexOf(id.substr(0, 1)) & 0x0f,
        worker: characters.indexOf(id.substr(1, 1)) & 0x0f
    };
}

var decode_1 = decode;

function isShortId(id) {
    if (!id || typeof id !== 'string' || id.length < 6 ) {
        return false;
    }

    var characters = alphabet_1.characters();
    var len = id.length;
    for(var i = 0; i < len;i++) {
        if (characters.indexOf(id[i]) === -1) {
            return false;
        }
    }
    return true;
}

var isValid = isShortId;

var lib$1 = createCommonjsModule(function (module) {






// Ignore all milliseconds before a certain time to reduce the size of the date entropy without sacrificing uniqueness.
// This number should be updated every year or so to keep the generated id short.
// To regenerate `new Date() - 0` and bump the version. Always bump the version!
var REDUCE_TIME = 1459707606518;

// don't change unless we change the algos or REDUCE_TIME
// must be an integer and less than 16
var version = 6;

// if you are using cluster or multiple servers use this to make each instance
// has a unique value for worker
// Note: I don't know if this is automatically set when using third
// party cluster solutions such as pm2.
var clusterWorkerId =  0;

// Counter is used when shortid is called multiple times in one second.
var counter;

// Remember the last time shortid was called in case counter is needed.
var previousSeconds;

/**
 * Generate unique id
 * Returns string id
 */
function generate() {

    var str = '';

    var seconds = Math.floor((Date.now() - REDUCE_TIME) * 0.001);

    if (seconds === previousSeconds) {
        counter++;
    } else {
        counter = 0;
        previousSeconds = seconds;
    }

    str = str + encode_1(alphabet_1.lookup, version);
    str = str + encode_1(alphabet_1.lookup, clusterWorkerId);
    if (counter > 0) {
        str = str + encode_1(alphabet_1.lookup, counter);
    }
    str = str + encode_1(alphabet_1.lookup, seconds);

    return str;
}


/**
 * Set the seed.
 * Highly recommended if you don't want people to try to figure out your id schema.
 * exposed as shortid.seed(int)
 * @param seed Integer value to seed the random alphabet.  ALWAYS USE THE SAME SEED or you might get overlaps.
 */
function seed(seedValue) {
    alphabet_1.seed(seedValue);
    return module.exports;
}

/**
 * Set the cluster worker or machine id
 * exposed as shortid.worker(int)
 * @param workerId worker must be positive integer.  Number less than 16 is recommended.
 * returns shortid module so it can be chained.
 */
function worker(workerId) {
    clusterWorkerId = workerId;
    return module.exports;
}

/**
 *
 * sets new characters to use in the alphabet
 * returns the shuffled alphabet
 */
function characters(newCharacters) {
    if (newCharacters !== undefined) {
        alphabet_1.characters(newCharacters);
    }

    return alphabet_1.shuffled();
}


// Export all other functions as properties of the generate function
module.exports = generate;
module.exports.generate = generate;
module.exports.seed = seed;
module.exports.worker = worker;
module.exports.characters = characters;
module.exports.decode = decode_1;
module.exports.isValid = isValid;
});
var lib_1 = lib$1.generate;
var lib_2 = lib$1.seed;
var lib_3 = lib$1.worker;
var lib_4 = lib$1.characters;
var lib_5 = lib$1.decode;
var lib_6 = lib$1.isValid;

var shortid = lib$1;

function domainSession (domain, connection, logger, successMessages, errorMessages) {
    if (domain == null) {
        domain = "global";
    }
    successMessages = successMessages || ["success"];
    errorMessages = errorMessages || ["error"];
    var isJoined = false;
    var tryReconnecting = false;
    var _latestOptions;
    var _connectionOn = false;
    var callbacks = lib();
    connection.disconnected(handleConnectionDisconnected);
    connection.loggedIn(handleConnectionLoggedIn);
    connection.on(domain, "success", function (msg) { return handleSuccessMessage(msg); });
    connection.on(domain, "error", function (msg) { return handleErrorMessage(msg); });
    connection.on(domain, "result", function (msg) { return handleSuccessMessage(msg); });
    if (successMessages) {
        successMessages.forEach(function (sm) {
            connection.on(domain, sm, function (msg) { return handleSuccessMessage(msg); });
        });
    }
    if (errorMessages) {
        errorMessages.forEach(function (sm) {
            connection.on(domain, sm, function (msg) { return handleErrorMessage(msg); });
        });
    }
    var requestsMap = {};
    function join(options) {
        _latestOptions = options;
        return new Promise(function (resolve, reject) {
            if (isJoined) {
                resolve();
                return;
            }
            var joinPromise;
            if (domain === "global") {
                joinPromise = _connectionOn ? Promise.resolve({}) : Promise.reject("not connected to gateway");
            }
            else {
                logger.debug("joining " + domain);
                var joinMsg = {
                    type: "join",
                    destination: domain,
                    domain: "global",
                    options: options,
                };
                joinPromise = send(joinMsg);
            }
            joinPromise
                .then(function () {
                handleJoined();
                resolve();
            })
                .catch(function (err) {
                logger.debug("error joining " + domain + " domain: " + JSON.stringify(err));
                reject(err);
            });
        });
    }
    function leave() {
        if (domain === "global") {
            return;
        }
        logger.debug("stopping session " + domain + "...");
        var leaveMsg = {
            type: "leave",
            destination: domain,
            domain: "global",
        };
        send(leaveMsg).then(function () {
            isJoined = false;
            callbacks.execute("onLeft");
        });
    }
    function handleJoined() {
        logger.debug("did join " + domain);
        isJoined = true;
        var wasReconnect = tryReconnecting;
        tryReconnecting = false;
        callbacks.execute("onJoined", wasReconnect);
    }
    function handleConnectionDisconnected() {
        _connectionOn = false;
        logger.warn("connection is down");
        isJoined = false;
        tryReconnecting = true;
        callbacks.execute("onLeft", { disconnected: true });
    }
    function handleConnectionLoggedIn() {
        _connectionOn = true;
        if (tryReconnecting) {
            logger.debug("connection is now up - trying to reconnect...");
            join(_latestOptions);
        }
    }
    function onJoined(callback) {
        if (isJoined) {
            callback(false);
        }
        return callbacks.add("onJoined", callback);
    }
    function onLeft(callback) {
        if (!isJoined) {
            callback();
        }
        return callbacks.add("onLeft", callback);
    }
    function handleErrorMessage(msg) {
        if (domain !== msg.domain) {
            return;
        }
        var requestId = msg.request_id;
        var entry = requestsMap[requestId];
        if (!entry) {
            return;
        }
        entry.error(msg);
    }
    function handleSuccessMessage(msg) {
        if (msg.domain !== domain) {
            return;
        }
        var requestId = msg.request_id;
        var entry = requestsMap[requestId];
        if (!entry) {
            return;
        }
        entry.success(msg);
    }
    function getNextRequestId() {
        return shortid();
    }
    function send(msg, tag, options) {
        options = options || {};
        msg.request_id = msg.request_id || getNextRequestId();
        msg.domain = msg.domain || domain;
        if (!options.skipPeerId) {
            msg.peer_id = connection.peerId;
        }
        var requestId = msg.request_id;
        return new Promise(function (resolve, reject) {
            requestsMap[requestId] = {
                success: function (successMsg) {
                    delete requestsMap[requestId];
                    successMsg._tag = tag;
                    resolve(successMsg);
                },
                error: function (errorMsg) {
                    logger.warn("GW error - " + JSON.stringify(errorMsg) + " for request " + JSON.stringify(msg));
                    delete requestsMap[requestId];
                    errorMsg._tag = tag;
                    reject(errorMsg);
                },
            };
            connection
                .send(domain, domain, msg, undefined, options)
                .catch(function (err) {
                requestsMap[requestId].error({ err: err });
            });
        });
    }
    function sendFireAndForget(msg) {
        msg.request_id = msg.request_id ? msg.request_id : getNextRequestId();
        msg.domain = msg.domain || domain;
        msg.peer_id = connection.peerId;
        connection.send(domain, domain, msg);
    }
    return {
        join: join,
        leave: leave,
        onJoined: onJoined,
        onLeft: onLeft,
        send: send,
        sendFireAndForget: sendFireAndForget,
        on: function (type, callback) {
            connection.on(domain, type, function (msg) {
                if (msg.domain !== domain) {
                    return;
                }
                try {
                    callback(msg);
                }
                catch (e) {
                    logger.error("Callback  failed: " + e + " \n msg was: " + JSON.stringify(msg));
                }
            });
        },
        loggedIn: function (callback) { return connection.loggedIn(callback); },
        connected: function (callback) { return connection.connected(callback); },
        disconnected: function (callback) { return connection.disconnected(callback); },
        get peerId() {
            return connection.peerId;
        },
        get domain() {
            return domain;
        },
    };
}

function gw3Protocol (connection, settings, logger) {
    var datePrefix = "#T42_DATE#";
    var datePrefixLen = datePrefix.length;
    var dateMinLen = datePrefixLen + 1;
    var datePrefixFirstChar = datePrefix[0];
    var registry = lib();
    var globalDomain;
    var isLoggedIn = false;
    var shouldTryLogin = true;
    var initialLogin = true;
    var initialLoginAttempts = 3;
    var pingTimer;
    var sessions = [];
    var loginConfig;
    connection.disconnected(handleDisconnected.bind(this));
    ping();
    function processStringMessage(message) {
        var msg = JSON.parse(message, function (key, value) {
            if (typeof value !== "string") {
                return value;
            }
            if (value.length < dateMinLen) {
                return value;
            }
            if (value[0] !== datePrefixFirstChar) {
                return value;
            }
            if (value.substring(0, datePrefixLen) !== datePrefix) {
                return value;
            }
            try {
                var milliseconds = parseInt(value.substring(datePrefixLen, value.length), 10);
                if (isNaN(milliseconds)) {
                    return value;
                }
                return new Date(milliseconds);
            }
            catch (ex) {
                return value;
            }
        });
        return {
            msg: msg,
            msgType: msg.type,
        };
    }
    function createStringMessage(product, type, message, id) {
        var oldToJson = Date.prototype.toJSON;
        try {
            Date.prototype.toJSON = function () {
                return datePrefix + this.getTime();
            };
            var result = JSON.stringify(message);
            return result;
        }
        finally {
            Date.prototype.toJSON = oldToJson;
        }
    }
    function processObjectMessage(message) {
        if (!message.type) {
            throw new Error("Object should have type property");
        }
        return {
            msg: message,
            msgType: message.type,
        };
    }
    function createObjectMessage(product, type, message, id) {
        return message;
    }
    function login(config, reconnect) {
        return __awaiter(this, void 0, void 0, function () {
            var authentication, token, e_1, _a, helloMsg, sendOptions, welcomeMsg, msg, token, _b, err_1;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        logger.debug("logging in...");
                        loginConfig = config;
                        if (!loginConfig) {
                            loginConfig = { username: "", password: "" };
                        }
                        shouldTryLogin = true;
                        authentication = {};
                        connection.gatewayToken = config.gatewayToken;
                        if (!config.gatewayToken) return [3, 5];
                        if (!reconnect) return [3, 4];
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 3, , 4]);
                        return [4, this.getNewGWToken()];
                    case 2:
                        token = _c.sent();
                        config.token = token;
                        return [3, 4];
                    case 3:
                        e_1 = _c.sent();
                        this.logger.warn("failed to get GW token when reconnecting " + ((e_1 === null || e_1 === void 0 ? void 0 : e_1.message) || e_1));
                        return [3, 4];
                    case 4:
                        authentication.method = "gateway-token";
                        authentication.token = config.gatewayToken;
                        connection.gatewayToken = config.gatewayToken;
                        return [3, 8];
                    case 5:
                        if (!(config.flowName === "sspi")) return [3, 7];
                        authentication.provider = "win";
                        authentication.method = "access-token";
                        _a = authentication;
                        return [4, config.flowCallback(config.sessionId, null)];
                    case 6:
                        _a.token =
                            (_c.sent())
                                .data
                                .toString("base64");
                        return [3, 8];
                    case 7:
                        if (config.token) {
                            authentication.method = "access-token";
                            authentication.token = config.token;
                        }
                        else if (config.username) {
                            authentication.method = "secret";
                            authentication.login = config.username;
                            authentication.secret = config.password;
                        }
                        else {
                            throw new Error("invalid auth message" + JSON.stringify(config));
                        }
                        _c.label = 8;
                    case 8:
                        helloMsg = {
                            type: "hello",
                            identity: settings.identity,
                            authentication: authentication
                        };
                        if (config.sessionId) {
                            helloMsg.request_id = config.sessionId;
                        }
                        globalDomain = domainSession("global", connection, logger, [
                            "welcome",
                            "token",
                            "authentication-request"
                        ]);
                        sendOptions = { skipPeerId: true };
                        if (initialLogin) {
                            sendOptions.retryInterval = settings.reconnectInterval;
                            sendOptions.maxRetries = settings.reconnectAttempts;
                        }
                        _c.label = 9;
                    case 9:
                        _c.trys.push([9, 16, 17, 18]);
                        welcomeMsg = void 0;
                        _c.label = 10;
                    case 10:
                        return [4, globalDomain.send(helloMsg, undefined, sendOptions)];
                    case 11:
                        msg = _c.sent();
                        if (!(msg.type === "authentication-request")) return [3, 13];
                        token = Buffer.from(msg.authentication.token, "base64");
                        _b = helloMsg.authentication;
                        return [4, config.flowCallback(config.sessionId, token)];
                    case 12:
                        _b.token =
                            (_c.sent())
                                .data
                                .toString("base64");
                        helloMsg.request_id = config.sessionId;
                        return [3, 10];
                    case 13:
                        if (msg.type === "welcome") {
                            welcomeMsg = msg;
                            return [3, 15];
                        }
                        else if (msg.type === "error") {
                            throw new Error("Authentication failed: " + msg.reason);
                        }
                        else {
                            throw new Error("Unexpected message type during authentication: " + msg.type);
                        }
                    case 14: return [3, 10];
                    case 15:
                        initialLogin = false;
                        logger.debug("login successful with PeerId " + welcomeMsg.peer_id);
                        connection.peerId = welcomeMsg.peer_id;
                        connection.resolvedIdentity = welcomeMsg.resolved_identity;
                        connection.availableDomains = welcomeMsg.available_domains;
                        if (welcomeMsg.options) {
                            connection.token = welcomeMsg.options.access_token;
                            connection.info = welcomeMsg.options.info;
                        }
                        setLoggedIn(true);
                        return [2, welcomeMsg.resolved_identity];
                    case 16:
                        err_1 = _c.sent();
                        logger.error("error sending hello message - " + (err_1.message || err_1.msg || err_1.reason || err_1));
                        throw err_1;
                    case 17:
                        if (config && config.flowCallback && config.sessionId) {
                            config.flowCallback(config.sessionId, null);
                        }
                        return [7];
                    case 18: return [2];
                }
            });
        });
    }
    function logout() {
        logger.debug("logging out...");
        shouldTryLogin = false;
        if (pingTimer) {
            clearTimeout(pingTimer);
        }
        sessions.forEach(function (session) {
            session.leave();
        });
    }
    function loggedIn(callback) {
        if (isLoggedIn) {
            callback();
        }
        return registry.add("onLoggedIn", callback);
    }
    function domain(domainName, domainLogger, successMessages, errorMessages) {
        var session = sessions.filter(function (s) { return s.domain === domainName; })[0];
        if (!session) {
            session = domainSession(domainName, connection, domainLogger, successMessages, errorMessages);
            sessions.push(session);
        }
        return session;
    }
    function handleDisconnected() {
        setLoggedIn(false);
        var tryToLogin = shouldTryLogin;
        if (tryToLogin && initialLogin) {
            if (initialLoginAttempts <= 0) {
                return;
            }
            initialLoginAttempts--;
        }
        logger.debug("disconnected - will try new login?" + shouldTryLogin);
        if (shouldTryLogin) {
            if (!loginConfig) {
                throw new Error("no login info");
            }
            connection.login(loginConfig, true)
                .catch(function () {
                setTimeout(handleDisconnected, 1000);
            });
        }
    }
    function setLoggedIn(value) {
        isLoggedIn = value;
        if (isLoggedIn) {
            registry.execute("onLoggedIn");
        }
    }
    function ping() {
        if (!shouldTryLogin) {
            return;
        }
        if (isLoggedIn) {
            connection.send("", "", { type: "ping" });
        }
        pingTimer = setTimeout(ping, 30 * 1000);
    }
    function authToken() {
        var createTokenReq = {
            type: "create-token"
        };
        if (!this.globalDomain) {
            return Promise.reject(new Error("no global domain session"));
        }
        return globalDomain.send(createTokenReq)
            .then(function (res) {
            return res.token;
        });
    }
    return {
        processStringMessage: processStringMessage,
        createStringMessage: createStringMessage,
        createObjectMessage: createObjectMessage,
        processObjectMessage: processObjectMessage,
        login: login,
        logout: logout,
        loggedIn: loggedIn,
        domain: domain,
        authToken: authToken,
        get isLoggedIn() {
            return isLoggedIn;
        }
    };
}

var HCProtocol = (function () {
    function HCProtocol() {
    }
    HCProtocol.prototype.processStringMessage = function (message) {
        var messageObj = JSON.parse(message);
        return {
            msg: messageObj,
            msgType: messageObj.type,
        };
    };
    HCProtocol.prototype.createStringMessage = function (product, type, message, id) {
        return JSON.stringify(message);
    };
    HCProtocol.prototype.login = function (message) {
        return Promise.resolve({ application: undefined });
    };
    HCProtocol.prototype.logout = function () {
    };
    HCProtocol.prototype.loggedIn = function (callback) {
        callback();
        return function () {
        };
    };
    HCProtocol.prototype.processObjectMessage = function (message) {
        throw new Error("not supported");
    };
    HCProtocol.prototype.createObjectMessage = function (product, type, message, id) {
        throw new Error("not supported");
    };
    Object.defineProperty(HCProtocol.prototype, "isLoggedIn", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    return HCProtocol;
}());

var Utils = (function () {
    function Utils() {
    }
    Utils.getGDMajorVersion = function () {
        if (typeof window === "undefined") {
            return -1;
        }
        if (!window.glueDesktop) {
            return -1;
        }
        if (!window.glueDesktop.version) {
            return -1;
        }
        var ver = Number(window.glueDesktop.version.substr(0, 1));
        return isNaN(ver) ? -1 : ver;
    };
    Utils.isNode = function () {
        if (typeof Utils._isNode !== "undefined") {
            return Utils._isNode;
        }
        try {
            Utils._isNode = Object.prototype.toString.call(global.process) === "[object process]";
        }
        catch (e) {
            Utils._isNode = false;
        }
        return Utils._isNode;
    };
    return Utils;
}());

var PromiseWrapper = (function () {
    function PromiseWrapper() {
        var _this = this;
        this.rejected = false;
        this.resolved = false;
        this.promise = new Promise(function (resolve, reject) {
            _this.resolve = function (t) {
                _this.resolved = true;
                resolve(t);
            };
            _this.reject = function (err) {
                _this.rejected = true;
                reject(err);
            };
        });
    }
    PromiseWrapper.delay = function (time) {
        return new Promise(function (resolve) { return setTimeout(resolve, time); });
    };
    Object.defineProperty(PromiseWrapper.prototype, "ended", {
        get: function () {
            return this.rejected || this.resolved;
        },
        enumerable: true,
        configurable: true
    });
    return PromiseWrapper;
}());

var WebSocketConstructor = Utils.isNode() ? __webpack_require__(/*! ws */ "./node_modules/ws/browser.js") : window.WebSocket;
var WS = (function () {
    function WS(settings, logger) {
        this._running = true;
        this._registry = lib();
        this.settings = settings;
        this.logger = logger;
    }
    WS.prototype.onMessage = function (callback) {
        return this._registry.add("onMessage", callback);
    };
    WS.prototype.send = function (msg, product, type, options) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            options = options || {};
            _this.waitForSocketConnection(function () {
                try {
                    _this.ws.send(msg);
                    resolve();
                }
                catch (e) {
                    reject(e);
                }
            }, reject, options.maxRetries, options.retryInterval);
        });
    };
    WS.prototype.open = function () {
        var _this = this;
        this.logger.info("opening ws...");
        this._running = true;
        return new Promise(function (resolve, reject) {
            _this.waitForSocketConnection(resolve, reject);
        });
    };
    WS.prototype.close = function () {
        this._running = false;
        if (this.ws) {
            this.ws.close();
        }
    };
    WS.prototype.reconnect = function () {
        this.ws.close();
        var pw = new PromiseWrapper();
        this.waitForSocketConnection(function () {
            pw.resolve();
        });
        return pw.promise;
    };
    WS.prototype.onConnectedChanged = function (callback) {
        return this._registry.add("onConnectedChanged", callback);
    };
    WS.prototype.initiateSocket = function () {
        var _this = this;
        this.logger.debug("initiating ws to " + this.settings.ws + "...");
        var pw = new PromiseWrapper();
        this.ws = new WebSocketConstructor(this.settings.ws);
        this.ws.onerror = function (err) {
            var reason = "";
            try {
                reason = JSON.stringify(err);
            }
            catch (error) {
                var seen_1 = new WeakSet();
                var replacer = function (key, value) {
                    if (typeof value === "object" && value !== null) {
                        if (seen_1.has(value)) {
                            return;
                        }
                        seen_1.add(value);
                    }
                    return value;
                };
                reason = JSON.stringify(err, replacer);
            }
            _this.notifyStatusChanged(false, reason);
        };
        this.ws.onclose = function () {
            _this.logger.info("ws closed");
            _this.notifyStatusChanged(false);
        };
        this.ws.onopen = function () {
            _this.logger.debug("ws opened");
            _this.notifyStatusChanged(true);
            pw.resolve();
        };
        this.ws.onmessage = function (message) {
            _this._registry.execute("onMessage", message.data);
        };
        return pw.promise;
    };
    WS.prototype.waitForSocketConnection = function (callback, failed, retriesLeft, retryInterval) {
        var _this = this;
        if (!callback) {
            callback = function () { };
        }
        if (!failed) {
            failed = function () { };
        }
        if (retryInterval === undefined) {
            retryInterval = this.settings.reconnectInterval;
        }
        if (retriesLeft !== undefined) {
            if (retriesLeft === 0) {
                failed("wait for socket on " + this.settings.ws + " failed - no more retries left");
                return;
            }
            this.logger.debug("will retry " + retriesLeft + " more times (every " + retryInterval + " ms)");
        }
        if (!this._running) {
            failed("wait for socket on " + this.settings.ws + " failed - socket closed by user");
            return;
        }
        var initiated = false;
        if (!this.ws || this.ws.readyState > 1) {
            this.initiateSocket()
                .then(function () {
                if (initiated) {
                    return;
                }
                initiated = true;
                callback();
            });
        }
        else if (this.ws.readyState === 1) {
            return callback();
        }
        setTimeout(function () {
            if (initiated) {
                return;
            }
            initiated = true;
            var retries = retriesLeft === undefined ? undefined : retriesLeft - 1;
            _this.waitForSocketConnection(callback, failed, retries, retryInterval);
        }, retryInterval);
    };
    WS.prototype.notifyStatusChanged = function (status, reason) {
        this._registry.execute("onConnectedChanged", status, reason);
    };
    return WS;
}());

var MessageReplayerImpl = (function () {
    function MessageReplayerImpl(specs) {
        this.specsNames = [];
        this.messages = {};
        this.subs = {};
        this.subsRefCount = {};
        this.specs = {};
        for (var _i = 0, specs_1 = specs; _i < specs_1.length; _i++) {
            var spec = specs_1[_i];
            this.specs[spec.name] = spec;
            this.specsNames.push(spec.name);
        }
    }
    MessageReplayerImpl.prototype.init = function (connection) {
        var _this = this;
        this.connection = connection;
        for (var _i = 0, _a = this.specsNames; _i < _a.length; _i++) {
            var name_1 = _a[_i];
            var _loop_1 = function (type) {
                var refCount = this_1.subsRefCount[type];
                if (!refCount) {
                    refCount = 0;
                }
                refCount += 1;
                this_1.subsRefCount[type] = refCount;
                if (refCount > 1) {
                    return "continue";
                }
                var sub = connection.on("glue-core", type, function (msg) { return _this.processMessage(type, msg); });
                this_1.subs[type] = sub;
            };
            var this_1 = this;
            for (var _b = 0, _c = this.specs[name_1].types; _b < _c.length; _b++) {
                var type = _c[_b];
                _loop_1(type);
            }
        }
    };
    MessageReplayerImpl.prototype.processMessage = function (type, msg) {
        if (this.isDone || !msg) {
            return;
        }
        for (var _i = 0, _a = this.specsNames; _i < _a.length; _i++) {
            var name_2 = _a[_i];
            if (this.specs[name_2].types.indexOf(type) !== -1) {
                var messages = this.messages[name_2] || [];
                this.messages[name_2] = messages;
                messages.push(msg);
            }
        }
    };
    MessageReplayerImpl.prototype.drain = function (name, callback) {
        if (callback) {
            (this.messages[name] || []).forEach(callback);
        }
        delete this.messages[name];
        for (var _i = 0, _a = this.specs[name].types; _i < _a.length; _i++) {
            var type = _a[_i];
            this.subsRefCount[type] -= 1;
            if (this.subsRefCount[type] <= 0) {
                this.connection.off(this.subs[type]);
                delete this.subs[type];
                delete this.subsRefCount[type];
            }
        }
        delete this.specs[name];
        if (!this.specs.length) {
            this.isDone = true;
        }
    };
    return MessageReplayerImpl;
}());

var GW3ConnectionImpl = (function (_super) {
    __extends(GW3ConnectionImpl, _super);
    function GW3ConnectionImpl(settings) {
        var _this = _super.call(this, settings) || this;
        if (settings.replaySpecs &&
            settings.replaySpecs.length) {
            _this.replayer = new MessageReplayerImpl(settings.replaySpecs);
        }
        return _this;
    }
    GW3ConnectionImpl.prototype.init = function (transport, protocol) {
        _super.prototype.init.call(this, transport, protocol);
        if (this.replayer) {
            this.replayer.init(this);
        }
        this.gw3Protocol = protocol;
    };
    GW3ConnectionImpl.prototype.toAPI = function () {
        var that = this;
        var superAPI = _super.prototype.toAPI.call(this);
        return {
            domain: that.domain.bind(that),
            get peerId() { return that.peerId; },
            get token() { return that.token; },
            get info() { return that.info; },
            get resolvedIdentity() { return that.resolvedIdentity; },
            get availableDomains() { return that.availableDomains; },
            get gatewayToken() { return that.gatewayToken; },
            get replayer() { return that.replayer; },
            on: superAPI.on,
            send: superAPI.send,
            off: superAPI.off,
            login: superAPI.login,
            logout: superAPI.logout,
            loggedIn: superAPI.loggedIn,
            connected: superAPI.connected,
            disconnected: superAPI.disconnected,
            authToken: that.authToken.bind(that),
            reconnect: superAPI.reconnect,
            get protocolVersion() { return superAPI.protocolVersion; },
        };
    };
    GW3ConnectionImpl.prototype.domain = function (domain, logger, successMessages, errorMessages) {
        return this.gw3Protocol.domain(domain, logger, successMessages, errorMessages);
    };
    GW3ConnectionImpl.prototype.authToken = function () {
        return this.gw3Protocol.authToken();
    };
    Object.defineProperty(GW3ConnectionImpl.prototype, "isConnected", {
        get: function () {
            return this._protocol.isLoggedIn;
        },
        enumerable: true,
        configurable: true
    });
    GW3ConnectionImpl.prototype.connected = function (callback) {
        var _this = this;
        return this._protocol.loggedIn(function () {
            callback(_this._settings.ws);
        });
    };
    return GW3ConnectionImpl;
}(ConnectionImpl));

var GW1Protocol = (function () {
    function GW1Protocol(connection, settings) {
        this._connection = connection;
        this._settings = settings;
    }
    Object.defineProperty(GW1Protocol.prototype, "isLoggedIn", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    GW1Protocol.prototype.processStringMessage = function (message) {
        var messageObj = JSON.parse(message);
        return {
            msg: messageObj.message,
            msgType: messageObj.type,
        };
    };
    GW1Protocol.prototype.createStringMessage = function (product, type, message, id) {
        return JSON.stringify({
            type: type,
            message: message,
            id: id,
        });
    };
    GW1Protocol.prototype.login = function (message) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var sendOptions = {
                retryInterval: _this._settings.reconnectInterval,
                maxRetries: _this._settings.reconnectAttempts
            };
            _this._connection.send("hello", "hello", {}, null, sendOptions)
                .then(function () { return resolve({ application: undefined }); })
                .catch(reject);
        });
    };
    GW1Protocol.prototype.logout = function () {
    };
    GW1Protocol.prototype.loggedIn = function (callback) {
        callback();
        return function () {
        };
    };
    GW1Protocol.prototype.processObjectMessage = function (message) {
        throw new Error("not supported");
    };
    GW1Protocol.prototype.createObjectMessage = function (product, type, message, id) {
        throw new Error("not supported");
    };
    return GW1Protocol;
}());

var HCTransport = (function () {
    function HCTransport() {
        this.connectionId = Math.floor(1e10 * Math.random()).toString();
    }
    HCTransport.prototype.send = function (message, product, type) {
        if (product === "metrics") {
            window.htmlContainer.metricsFacade.send(type, message);
        }
        else if (product === "log") {
            window.htmlContainer.loggingFacade.send(type, message);
        }
        return Promise.resolve(undefined);
    };
    HCTransport.prototype.onConnectedChanged = function (callback) {
        callback(true);
    };
    HCTransport.prototype.onMessage = function (callback) {
    };
    HCTransport.prototype.close = function () {
    };
    HCTransport.prototype.open = function () {
        return Promise.resolve();
    };
    HCTransport.prototype.reconnect = function () {
        return Promise.resolve();
    };
    return HCTransport;
}());

var Inproc = (function () {
    function Inproc(gw, logger) {
        var _this = this;
        this.registry = lib();
        this.gw = gw;
        this.logger = logger;
        this.gw.connect(function (_client, message) {
            _this.messageHandler(message);
        }).then(function (client) {
            _this.client = client;
        });
    }
    Object.defineProperty(Inproc.prototype, "isObjectBasedTransport", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Inproc.prototype.sendObject = function (msg) {
        if (this.client) {
            this.client.send(msg);
            return Promise.resolve(undefined);
        }
        else {
            return Promise.reject("not connected");
        }
    };
    Inproc.prototype.send = function (msg, product, type) {
        return Promise.reject("not supported");
    };
    Inproc.prototype.onMessage = function (callback) {
        return this.registry.add("onMessage", callback);
    };
    Inproc.prototype.onConnectedChanged = function (callback) {
        callback(true);
    };
    Inproc.prototype.close = function () {
    };
    Inproc.prototype.open = function () {
        return Promise.resolve();
    };
    Inproc.prototype.reconnect = function () {
        return Promise.resolve();
    };
    Inproc.prototype.messageHandler = function (msg) {
        this.registry.execute("onMessage", msg);
    };
    return Inproc;
}());

var gatewayConnection = (function (settings) {
    settings = settings || {};
    settings.reconnectAttempts = settings.reconnectAttempts || 10;
    settings.reconnectInterval = settings.reconnectInterval || 500;
    var connection = new ConnectionImpl(settings);
    var logger = settings.logger;
    if (!logger) {
        throw new Error("please pass a logger object");
    }
    var protocol = new HCProtocol();
    var transport = new HCTransport();
    var outsideHC = settings.gdVersion !== 2 || settings.force;
    if (outsideHC) {
        if (settings.gw && settings.gw.facade && settings.protocolVersion === 3) {
            transport = new Inproc(settings.gw.facade, logger.subLogger("inproc"));
        }
        else if (settings.ws !== undefined) {
            transport = new WS(settings, logger.subLogger("ws"));
        }
        else {
            throw new Error("No connection information specified");
        }
        if (settings.protocolVersion === 3) {
            var gw3Connection = new GW3ConnectionImpl(settings);
            var gw3Port = gw3Protocol(gw3Connection, settings, logger.subLogger("gw3"));
            gw3Connection.init(transport, gw3Port);
            return gw3Connection.toAPI();
        }
        else {
            protocol = new GW1Protocol(connection, settings);
        }
    }
    connection.init(transport, protocol);
    return connection.toAPI();
});

var LogLevel = (function () {
    function LogLevel() {
    }
    LogLevel.canPublish = function (level, restriction) {
        var levelIdx = LogLevel.order.indexOf(level);
        var restrictionIdx = LogLevel.order.indexOf(restriction);
        return levelIdx >= restrictionIdx;
    };
    LogLevel.off = "off";
    LogLevel.trace = "trace";
    LogLevel.debug = "debug";
    LogLevel.info = "info";
    LogLevel.warn = "warn";
    LogLevel.error = "error";
    LogLevel.order = [LogLevel.trace, LogLevel.debug, LogLevel.info, LogLevel.warn, LogLevel.error, LogLevel.off];
    return LogLevel;
}());

var Logger = (function () {
    function Logger(name, parent, metricSystem, logFn) {
        this._subloggers = [];
        this.logFn = console;
        this.customLogFn = false;
        this._name = name;
        this._parent = parent;
        if (parent) {
            this._path = parent.path + "." + name;
        }
        else {
            this._path = name;
        }
        this._loggerFullName = "[" + this._path + "]";
        if (typeof metricSystem !== "undefined" && metricSystem) {
            this.metricsLevel("warn", metricSystem.subSystem(name));
        }
        this.includeTimeAndLevel = !logFn;
        if (logFn) {
            this.logFn = logFn;
            this.customLogFn = true;
        }
    }
    Object.defineProperty(Logger.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Logger.prototype, "path", {
        get: function () {
            return this._path;
        },
        enumerable: true,
        configurable: true
    });
    Logger.prototype.subLogger = function (name) {
        var existingSub = this._subloggers.filter(function (subLogger) {
            return subLogger.name === name;
        })[0];
        if (existingSub !== undefined) {
            return existingSub;
        }
        Object.keys(this).forEach(function (key) {
            if (key === name) {
                throw new Error("This sub logger name is not allowed.");
            }
        });
        var sub = new Logger(name, this, undefined, this.customLogFn ? this.logFn : undefined);
        this._subloggers.push(sub);
        return sub;
    };
    Logger.prototype.publishLevel = function (level) {
        var _a;
        if (level !== null && level !== undefined) {
            this._publishLevel = level;
        }
        return this._publishLevel || ((_a = this._parent) === null || _a === void 0 ? void 0 : _a.publishLevel());
    };
    Logger.prototype.consoleLevel = function (level) {
        var _a;
        if (level !== null && level !== undefined) {
            this._consoleLevel = level;
        }
        return this._consoleLevel || ((_a = this._parent) === null || _a === void 0 ? void 0 : _a.consoleLevel());
    };
    Logger.prototype.metricsLevel = function (level, metricsSystem) {
        var _a;
        if (level !== null && level !== undefined) {
            this._metricLevel = level;
        }
        if (metricsSystem !== undefined) {
            if (typeof metricsSystem === "object" && typeof metricsSystem.objectMetric === "function") {
                this._metricSystem = metricsSystem;
            }
            else {
                throw new Error("Please specify metric system");
            }
        }
        return this._metricLevel || ((_a = this._parent) === null || _a === void 0 ? void 0 : _a.metricsLevel());
    };
    Logger.prototype.log = function (message, level) {
        this.publishMessage(level || LogLevel.info, message);
    };
    Logger.prototype.trace = function (message) {
        this.log(message, LogLevel.trace);
    };
    Logger.prototype.debug = function (message) {
        this.log(message, LogLevel.debug);
    };
    Logger.prototype.info = function (message) {
        this.log(message, LogLevel.info);
    };
    Logger.prototype.warn = function (message) {
        this.log(message, LogLevel.warn);
    };
    Logger.prototype.error = function (message) {
        this.log(message, LogLevel.error);
    };
    Logger.prototype.toAPIObject = function () {
        var that = this;
        return {
            name: this.name,
            subLogger: this.subLogger.bind(that),
            publishLevel: this.publishLevel.bind(that),
            consoleLevel: this.consoleLevel.bind(that),
            metricsLevel: this.metricsLevel.bind(that),
            log: this.log.bind(that),
            trace: this.trace.bind(that),
            debug: this.debug.bind(that),
            info: this.info.bind(that),
            warn: this.warn.bind(that),
            error: this.error.bind(that),
            canPublish: this.canPublish.bind(that)
        };
    };
    Logger.prototype.canPublish = function (level) {
        return LogLevel.canPublish(level, this.consoleLevel());
    };
    Logger.prototype.publishMessage = function (level, message) {
        var _a, _b;
        var loggerName = this._loggerFullName;
        if (level === LogLevel.error) {
            var e = new Error();
            if (e.stack) {
                message = message + "\n" +
                    (e.stack.split("\n").slice(3).join("\n"));
            }
        }
        if (LogLevel.canPublish(level, this.consoleLevel())) {
            var prefix = "";
            if (this.includeTimeAndLevel) {
                var date = new Date();
                var time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + ":" + date.getMilliseconds();
                prefix = "[" + time + "] [" + level + "] ";
            }
            var toPrint = "" + prefix + loggerName + ": " + message;
            switch (level) {
                case LogLevel.trace:
                    this.logFn.debug(toPrint);
                    break;
                case LogLevel.debug:
                    if (this.logFn.debug) {
                        this.logFn.debug(toPrint);
                    }
                    else {
                        this.logFn.log(toPrint);
                    }
                    break;
                case LogLevel.info:
                    this.logFn.info(toPrint);
                    break;
                case LogLevel.warn:
                    this.logFn.warn(toPrint);
                    break;
                case LogLevel.error:
                    this.logFn.error(toPrint);
                    break;
            }
        }
        if (LogLevel.canPublish(level, this.publishLevel())) {
            var isInGd3 = Logger.GetConnection && Logger.GetConnection() && Logger.GetConnection().protocolVersion >= 3;
            if (((_a = Logger.Interop) === null || _a === void 0 ? void 0 : _a.methods({ name: Logger.InteropMethodName }).length) > 0) {
                (_b = Logger.Interop) === null || _b === void 0 ? void 0 : _b.invoke(Logger.InteropMethodName, {
                    msg: "" + message,
                    logger: loggerName,
                    level: level
                });
            }
            if (Logger.GetConnection && !isInGd3) {
                Logger.GetConnection().send("log", "LogMessage", {
                    instance: Logger.Instance,
                    level: LogLevel.order.indexOf(level),
                    logger: loggerName,
                    message: message,
                });
            }
        }
        if (LogLevel.canPublish(level, this.metricsLevel())) {
            if (this._metricSystem !== undefined) {
                this._metricSystem.objectMetric("LogMessage", {
                    Level: level,
                    Logger: loggerName,
                    Message: message,
                    Time: new Date(),
                });
                if (level === LogLevel.error) {
                    this._metricSystem.setState(100, message);
                }
            }
        }
    };
    Logger.InteropMethodName = "T42.AppLogger.Log";
    return Logger;
}());

var logger = (function (settings, rootLoggerName, logFn) {
    var identity = settings.identity;
    if (!identity) {
        throw new Error("identity is missing");
    }
    var identityStr = identity.system + "\\" + identity.service + "\\" + identity.instance;
    Logger.Instance = identityStr;
    Logger.GetConnection = settings.getConnection;
    var mainLogger = new Logger("" + rootLoggerName, undefined, undefined, logFn);
    mainLogger.publishLevel(settings.publish || "off");
    mainLogger.consoleLevel(settings.console || "info");
    mainLogger.metricsLevel(settings.metrics || "off");
    var apiLogger = mainLogger.toAPIObject();
    return apiLogger;
});

var InstanceWrapper = (function () {
    function InstanceWrapper(instance, connection) {
        var _this = this;
        this.wrapped = {
            getMethods: getMethods,
            getStreams: getStreams,
        };
        this.refreshWrappedObject(instance);
        if (connection) {
            connection.loggedIn(function () {
                _this.refresh(connection);
            });
            this.refresh(connection);
        }
    }
    InstanceWrapper.prototype.unwrap = function () {
        return this.wrapped;
    };
    InstanceWrapper.prototype.refresh = function (connection) {
        if (!connection) {
            return;
        }
        var resolvedIdentity = connection === null || connection === void 0 ? void 0 : connection.resolvedIdentity;
        var instance = Object.assign({}, resolvedIdentity !== null && resolvedIdentity !== void 0 ? resolvedIdentity : {}, { peerId: connection === null || connection === void 0 ? void 0 : connection.peerId });
        this.refreshWrappedObject(instance);
    };
    InstanceWrapper.prototype.refreshWrappedObject = function (resolvedIdentity) {
        var _a, _b, _c;
        this.wrapped.user = resolvedIdentity.user;
        this.wrapped.instance = resolvedIdentity.instance;
        this.wrapped.application = (_a = resolvedIdentity.application) !== null && _a !== void 0 ? _a : shortid();
        this.wrapped.applicationName = resolvedIdentity.applicationName;
        this.wrapped.pid = (_c = (_b = resolvedIdentity.pid) !== null && _b !== void 0 ? _b : resolvedIdentity.process) !== null && _c !== void 0 ? _c : Math.floor(Math.random() * 10000000000);
        this.wrapped.machine = resolvedIdentity.machine;
        this.wrapped.environment = resolvedIdentity.environment;
        this.wrapped.region = resolvedIdentity.region;
        this.wrapped.windowId = resolvedIdentity.windowId;
        this.wrapped.isLocal = true;
        this.wrapped.api = resolvedIdentity.api;
        this.wrapped.service = resolvedIdentity.service;
        this.wrapped.peerId = resolvedIdentity.peerId;
    };
    return InstanceWrapper;
}());
function getMethods() {
    var _a;
    return (_a = InstanceWrapper.API) === null || _a === void 0 ? void 0 : _a.methodsForInstance(this);
}
function getStreams() {
    var _a;
    return (_a = InstanceWrapper.API) === null || _a === void 0 ? void 0 : _a.methodsForInstance(this).filter(function (m) { return m.supportsStreaming; });
}

function promisify (promise, successCallback, errorCallback) {
    if (typeof successCallback !== "function" && typeof errorCallback !== "function") {
        return promise;
    }
    if (typeof successCallback !== "function") {
        successCallback = function () { };
    }
    else if (typeof errorCallback !== "function") {
        errorCallback = function () { };
    }
    promise.then(successCallback, errorCallback);
}

var NativeAGM = (function () {
    function NativeAGM(instance, helpers, agmFacade) {
        this.instance = instance;
        this.helpers = helpers;
        this.agmFacade = agmFacade;
        this.protocolVersion = this.agmFacade.protocolVersion;
    }
    NativeAGM.prototype.register = function (name, handler) {
        var methodInfoAsObject = this.helpers.stringToObject(name, "name");
        this.helpers.validateMethodInfo(methodInfoAsObject);
        if (this.protocolVersion && this.protocolVersion >= 3) {
            this.agmFacade.register(JSON.stringify(methodInfoAsObject), handler, true);
        }
        else {
            this.agmFacade.register(JSON.stringify(methodInfoAsObject), function (arg, caller) {
                var methodResult = handler(JSON.parse(arg), caller);
                return JSON.stringify(methodResult);
            });
        }
        return Promise.resolve();
    };
    NativeAGM.prototype.registerAsync = function (name, handler) {
        if (!this.agmFacade.registerAsync) {
            throw new Error("not supported in that version of HtmlContainer");
        }
        var methodInfoAsObject = this.helpers.stringToObject(name, "name");
        this.helpers.validateMethodInfo(methodInfoAsObject);
        this.agmFacade.registerAsync(methodInfoAsObject, function (args, instance, tracker) {
            handler(args, instance, function (successArgs) {
                tracker.success(successArgs);
            }, function (error) {
                tracker.error(error);
            });
        });
        return Promise.resolve();
    };
    NativeAGM.prototype.unregister = function (definition) {
        this.agmFacade.unregister(JSON.stringify(this.helpers.stringToObject(definition, "name")));
    };
    NativeAGM.prototype.invoke = function (method, argumentObj, target, options, success, error) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            if (argumentObj === undefined) {
                argumentObj = {};
            }
            if (typeof argumentObj !== "object") {
                reject({ message: "The method arguments must be an object." });
            }
            if (options === undefined) {
                options = {};
            }
            target = _this.helpers.targetArgToObject(target);
            if (_this.agmFacade.invoke2) {
                _this.agmFacade.invoke2(JSON.stringify(_this.helpers.stringToObject(method, "name")), argumentObj, JSON.stringify(target), JSON.stringify(options), function (a) {
                    resolve(a);
                }, function (err) {
                    reject(err);
                });
            }
            else {
                var successProxy = void 0;
                var errorProxy = void 0;
                successProxy = function (args) {
                    var parsed = JSON.parse(args);
                    resolve(parsed);
                };
                errorProxy = function (args) {
                    var parsed = JSON.parse(args);
                    reject(parsed);
                };
                _this.agmFacade.invoke(JSON.stringify(_this.helpers.stringToObject(method, "name")), JSON.stringify(argumentObj), JSON.stringify(target), JSON.stringify(options), successProxy, errorProxy);
            }
        });
        return promisify(promise, success, error);
    };
    NativeAGM.prototype.createStream = function (methodDefinition, options, successCallback, errorCallback) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            if (typeof methodDefinition === "string") {
                methodDefinition = {
                    name: methodDefinition,
                    getServers: function () { return []; },
                };
            }
            if (!options) {
                options = {
                    subscriptionRequestHandler: undefined,
                    subscriptionAddedHandler: undefined,
                    subscriptionRemovedHandler: undefined,
                };
            }
            _this.agmFacade.createStream2(JSON.stringify(methodDefinition), options.subscriptionRequestHandler, options.subscriptionAddedHandler, options.subscriptionRemovedHandler, function (stream) {
                resolve(stream);
            }, function (error) {
                reject(error);
            });
        });
        return promisify(promise, successCallback, errorCallback);
    };
    NativeAGM.prototype.subscribe = function (methodDefinition, parameters, successCallback, errorCallback) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            if (typeof methodDefinition === "undefined") {
                reject("method definition param is required");
            }
            if (parameters === undefined) {
                parameters = {};
            }
            parameters.args = JSON.stringify(parameters.arguments || {});
            parameters.target = _this.helpers.targetArgToObject(parameters.target);
            var name;
            if (typeof methodDefinition === "string") {
                name = methodDefinition;
            }
            else {
                name = methodDefinition.name;
            }
            _this.agmFacade.subscribe2(name, JSON.stringify(parameters), function (sub) {
                resolve(sub);
            }, function (error) {
                reject(error);
            });
        });
        return promisify(promise, successCallback, errorCallback);
    };
    NativeAGM.prototype.servers = function (filter) {
        var _this = this;
        var jsonResult = this.agmFacade.servers(JSON.stringify(this.helpers.stringToObject(filter, "name")));
        var parsedResult = this.helpers.agmParse(jsonResult);
        return parsedResult.map(function (server) {
            return _this.transformServerObject(server);
        });
    };
    NativeAGM.prototype.methods = function (filter) {
        var _this = this;
        var jsonResult = this.agmFacade.methods(JSON.stringify(this.helpers.stringToObject(filter, "name")));
        var parsedResult = this.helpers.agmParse(jsonResult);
        return parsedResult.map(function (method) {
            return _this.transformMethodObject(method);
        });
    };
    NativeAGM.prototype.methodAdded = function (callback) {
        var _this = this;
        var subscribed = true;
        this.agmFacade.methodAdded(function (method) {
            if (subscribed) {
                callback(_this.transformMethodObject(method));
            }
        });
        return function () {
            subscribed = false;
        };
    };
    NativeAGM.prototype.methodRemoved = function (callback) {
        var _this = this;
        var subscribed = true;
        this.agmFacade.methodRemoved(function (method) {
            if (subscribed) {
                callback(_this.transformMethodObject(method));
            }
        });
        return function () {
            subscribed = false;
        };
    };
    NativeAGM.prototype.serverAdded = function (callback) {
        var _this = this;
        var subscribed = true;
        this.agmFacade.serverAdded(function (server) {
            if (subscribed) {
                callback(_this.transformServerObject(server));
            }
        });
        return function () {
            subscribed = false;
        };
    };
    NativeAGM.prototype.serverRemoved = function (callback) {
        var _this = this;
        var subscribed = true;
        this.agmFacade.serverRemoved(function (server) {
            if (subscribed) {
                callback(_this.transformServerObject(server));
            }
        });
        return function () {
            subscribed = false;
        };
    };
    NativeAGM.prototype.serverMethodAdded = function (callback) {
        var _this = this;
        var subscribed = true;
        this.agmFacade.serverMethodAdded(function (info) {
            if (subscribed) {
                callback({
                    server: _this.transformServerObject(info.server),
                    method: _this.transformMethodObject(info.method),
                });
            }
        });
        return function () {
            subscribed = false;
        };
    };
    NativeAGM.prototype.serverMethodRemoved = function (callback) {
        var _this = this;
        var subscribed = true;
        this.agmFacade.serverMethodRemoved(function (info) {
            if (subscribed) {
                callback({
                    server: _this.transformServerObject(info.server),
                    method: _this.transformMethodObject(info.method),
                });
            }
        });
        return function () {
            subscribed = false;
        };
    };
    NativeAGM.prototype.methodsForInstance = function (server) {
        var jsonResult = this.agmFacade.methodsForInstance(JSON.stringify(server));
        var methods = this.helpers.agmParse(jsonResult);
        return methods.map(this.transformMethodObject);
    };
    NativeAGM.prototype.transformMethodObject = function (method) {
        var _this = this;
        if (!method) {
            return undefined;
        }
        if (!method.displayName) {
            method.displayName = method.display_name;
        }
        if (!method.objectTypes) {
            method.objectTypes = method.object_types;
        }
        method.getServers = function () {
            return _this.servers(method.name);
        };
        return method;
    };
    NativeAGM.prototype.transformServerObject = function (server) {
        var _this = this;
        if (!server) {
            return undefined;
        }
        server.getMethods = function () {
            return _this.methodsForInstance(server);
        };
        server.getStreams = function () {
            return _this.methodsForInstance(server).filter(function (method) {
                return method.supportsStreaming;
            });
        };
        return server;
    };
    return NativeAGM;
}());

var Helpers$1 = (function () {
    function Helpers(facade) {
        this.facade = facade;
        this.dateTimeIdentifier = facade.jsonValueDatePrefix;
        this.lenOfIdentifier = this.dateTimeIdentifier.length;
    }
    Helpers.prototype.agmParse = function (str) {
        var _this = this;
        return JSON.parse(str, function (k, v) {
            if (typeof v !== "string") {
                return v;
            }
            if (v[0] !== _this.dateTimeIdentifier[0]) {
                return v;
            }
            if (v.indexOf(_this.dateTimeIdentifier) !== 0) {
                return v;
            }
            var unixTimestampMs = v.substr(_this.lenOfIdentifier);
            return new Date(parseFloat(unixTimestampMs));
        });
    };
    Helpers.prototype.targetArgToObject = function (target) {
        var _this = this;
        target = target || "best";
        if (typeof target === "string") {
            if (target !== "all" && target !== "best") {
                throw new Error(target + " is not a valid target. Valid targets are 'all' and 'best'");
            }
            return { target: target };
        }
        else {
            if (!Array.isArray(target)) {
                target = [target];
            }
            target = target.map(function (e) {
                return _this.convertInstanceToRegex(e);
            });
            return { serverFilter: target };
        }
    };
    Helpers.prototype.convertInstanceToRegex = function (instance) {
        var instanceConverted = {};
        Object.keys(instance).forEach(function (key) {
            var propValue = instance[key];
            instanceConverted[key] = propValue;
            if (typeof propValue === "undefined" || propValue === null) {
                return;
            }
            if (typeof propValue === "string" && propValue !== "") {
                instanceConverted[key] = "^" + instance[key] + "$";
            }
            else if (instance[key].constructor === RegExp) {
                instanceConverted[key] = instance[key].source;
            }
            else {
                instanceConverted[key] = instance[key];
            }
        });
        return instanceConverted;
    };
    Helpers.prototype.validateMethodInfo = function (methodInfo) {
        if (typeof methodInfo === "undefined") {
            throw Error("methodInfo is required argument");
        }
        if (!methodInfo.name) {
            throw Error("methodInfo object must contain name property");
        }
        if (methodInfo.objectTypes) {
            methodInfo.object_types = methodInfo.objectTypes;
        }
        if (methodInfo.displayName) {
            methodInfo.display_name = methodInfo.displayName;
        }
    };
    Helpers.prototype.stringToObject = function (param, stringPropName) {
        if (typeof param === "string") {
            var obj = {};
            obj[stringPropName] = param;
            return obj;
        }
        return param;
    };
    return Helpers;
}());

function nativeAgm (configuration) {
    var facade = window.htmlContainer.jsAgmFacade;
    var cfgAsString = createConfig(configuration);
    return new Promise(function (resolve, reject) {
        var successInit = function (instance) {
            var nativeAGM = new NativeAGM(instance, new Helpers$1(facade), facade);
            nativeAGM.create_stream = nativeAGM.createStream;
            nativeAGM.methods_for_instance = nativeAGM.methodsForInstance;
            nativeAGM.method_added = nativeAGM.methodAdded;
            nativeAGM.method_removed = nativeAGM.methodRemoved;
            nativeAGM.server_added = nativeAGM.serverAdded;
            nativeAGM.server_removed = nativeAGM.serverRemoved;
            nativeAGM.server_method_added = nativeAGM.serverMethodAdded;
            nativeAGM.server_method_removed = nativeAGM.serverMethodRemoved;
            resolve(nativeAGM);
        };
        if (facade.protocolVersion && facade.protocolVersion >= 5 && facade.initAsync) {
            facade.initAsync(cfgAsString, successInit, function (err) {
                reject(err);
            });
        }
        else {
            var instance = facade.init(cfgAsString);
            successInit(instance);
        }
    });
}
var createConfig = function (configuration) {
    if (configuration !== undefined && configuration.metrics !== undefined) {
        configuration.metrics.metricsIdentity = configuration.metrics.identity;
        var metricsConfig = {
            metricsIdentity: configuration.metrics.metricsIdentity,
            path: configuration.metrics.path,
        };
        configuration.metrics = metricsConfig;
    }
    delete configuration.logger;
    return JSON.stringify(configuration);
};

function convertInfoToInstance(info) {
    if (typeof info !== "object") {
        info = {};
    }
    return {
        application: info.ApplicationName,
        environment: info.Environment,
        machine: info.MachineName,
        pid: info.ProcessId,
        region: info.Region,
        service: info.ServiceName,
        user: info.UserName,
        started: info.ProcessStartTime,
    };
}
function isStreamingFlagSet(flags) {
    if (typeof flags !== "number" || isNaN(flags)) {
        return false;
    }
    var mask = 32;
    var result = flags & mask;
    return result === mask;
}
function convertInstance(instance) {
    return {
        ApplicationName: instance.application,
        ProcessId: instance.pid,
        MachineName: instance.machine,
        UserName: instance.user,
        Environment: instance.environment,
        Region: instance.region,
    };
}

var ServerStreaming = (function () {
    function ServerStreaming(connection, instance) {
        this.connection = connection;
        this.instance = instance;
    }
    ServerStreaming.prototype.isStreamMsg = function (msg, method) {
        return (msg &&
            msg.EventStreamAction &&
            msg.EventStreamAction !== 0 &&
            typeof method === "object" &&
            method.definition.supportsStreaming === true);
    };
    ServerStreaming.prototype.pushData = function (streamingMethod, data, branches) {
        var _this = this;
        if (typeof streamingMethod !== "object" || !Array.isArray(streamingMethod.protocolState.branchKeyToStreamIdMap)) {
            return;
        }
        if (typeof data !== "object") {
            throw new Error("Invalid arguments. Data must be an object.");
        }
        if (typeof branches === "string") {
            branches = [branches];
        }
        else if (!Array.isArray(branches) || branches.length <= 0) {
            branches = null;
        }
        var streamIdList = streamingMethod.protocolState.branchKeyToStreamIdMap
            .filter(function (br) {
            return (branches === null || (Boolean(br) && typeof br.key === "string" && branches.indexOf(br.key) >= 0));
        }).map(function (br) {
            return br.streamId;
        });
        var server = convertInstance(this.instance);
        streamIdList.forEach(function (streamId) {
            _this.sendResult({
                EventStreamAction: 5,
                EventStreamSubject: streamingMethod.protocolState.globalEventStreamSubject,
                MethodName: streamingMethod.protocolState.method.Method.Name,
                MethodRequestSubject: streamingMethod.protocolState.method.MethodRequestSubject,
                ResultContextJson: data,
                Server: server,
                StreamId: streamId,
            });
        });
    };
    ServerStreaming.prototype.closeAllSubscriptions = function (streamingMethod, branchKey) {
        var _this = this;
        if (typeof streamingMethod !== "object" || !Array.isArray(streamingMethod.protocolState.branchKeyToStreamIdMap)) {
            return;
        }
        var streamList = streamingMethod.protocolState.branchKeyToStreamIdMap;
        if (typeof branchKey === "string") {
            streamList = streamingMethod.protocolState.branchKeyToStreamIdMap.filter(function (br) {
                return (typeof br === "object" && br.key === branchKey);
            });
        }
        streamList.forEach(function (br) {
            var streamId = br.streamId;
            _this.sendResult({
                EventStreamAction: 2,
                EventStreamSubject: streamingMethod.protocolState.globalEventStreamSubject,
                MethodName: streamingMethod.protocolState.method.Method.Name,
                MethodRequestSubject: streamingMethod.protocolState.method.MethodRequestSubject,
                Server: convertInstance(_this.instance),
                StreamId: streamId,
                Status: 0,
            });
        });
    };
    ServerStreaming.prototype.getBranchList = function (streamingMethod) {
        if (typeof streamingMethod !== "object") {
            return [];
        }
        return this.getUniqueBranchNames(streamingMethod);
    };
    ServerStreaming.prototype.getSubscriptionList = function (streamingMethod, branchKey) {
        if (typeof streamingMethod !== "object") {
            return [];
        }
        var subscriptions = [];
        if (typeof branchKey !== "string") {
            subscriptions = streamingMethod.protocolState.subscriptions;
        }
        else {
            subscriptions = streamingMethod.protocolState.subscriptions.filter(function (sub) {
                return sub.branchKey === branchKey;
            });
        }
        return subscriptions;
    };
    ServerStreaming.prototype.onSubAdded = function (handlerFunc) {
        if (typeof handlerFunc !== "function") {
            return;
        }
        this.subAddedHandler = handlerFunc;
    };
    ServerStreaming.prototype.onSubRemoved = function (handlerFunc) {
        if (typeof handlerFunc !== "function") {
            return;
        }
        this.subRemovedHandler = handlerFunc;
    };
    ServerStreaming.prototype.onSubRequest = function (handlerFunc) {
        if (typeof handlerFunc !== "function") {
            return;
        }
        this.requestHandler = handlerFunc;
    };
    ServerStreaming.prototype.generateNewStreamId = function (streamingMethodName) {
        var appInfo = convertInstance(this.instance);
        return "streamId-jsb_of_" +
            streamingMethodName +
            "__by_" +
            appInfo.ApplicationName +
            "_" +
            shortid();
    };
    ServerStreaming.prototype.rejectRequest = function (requestContext, streamingMethod, reason) {
        if (typeof reason !== "string") {
            reason = "";
        }
        var msg = requestContext.msg;
        this.sendResult({
            EventStreamAction: 2,
            EventStreamSubject: streamingMethod.protocolState.globalEventStreamSubject,
            MethodName: streamingMethod.protocolState.method.Method.Name,
            MethodRequestSubject: streamingMethod.protocolState.method.MethodRequestSubject,
            MethodResponseSubject: msg.MethodResponseSubject,
            MethodVersion: streamingMethod.protocolState.method.Method.Version,
            ResultMessage: reason,
            Server: convertInstance(this.instance),
            StreamId: "default_rejection_streamId",
        });
    };
    ServerStreaming.prototype.pushDataToSingle = function (streamingMethod, subscription, data) {
        if (typeof data !== "object") {
            throw new Error("Invalid arguments. Data must be an object.");
        }
        this.sendResult({
            EventStreamAction: 5,
            EventStreamSubject: subscription.privateEventStreamSubject,
            MethodName: streamingMethod.protocolState.method.Method.Name,
            MethodRequestSubject: streamingMethod.protocolState.method.MethodRequestSubject,
            ResultContextJson: data,
            Server: convertInstance(this.instance),
            StreamId: subscription.streamId,
        });
    };
    ServerStreaming.prototype.closeSingleSubscription = function (streamingMethod, subscription) {
        this.closeIndividualSubscription(streamingMethod, subscription.streamId, subscription.privateEventStreamSubject, true);
    };
    ServerStreaming.prototype.acceptRequestOnBranch = function (requestContext, streamingMethod, branch) {
        if (typeof branch !== "string") {
            branch = "";
        }
        var streamId = this.getStreamId(streamingMethod, branch);
        var msg = requestContext.msg;
        this.sendResult({
            EventStreamAction: 3,
            EventStreamSubject: streamingMethod.protocolState.globalEventStreamSubject,
            InvocationId: msg.Context.InvocationId,
            MethodName: streamingMethod.protocolState.method.Method.Name,
            MethodRequestSubject: streamingMethod.protocolState.method.MethodRequestSubject,
            MethodResponseSubject: msg.MethodResponseSubject,
            MethodVersion: streamingMethod.protocolState.method.Method.Version,
            ResultMessage: "Accepted",
            Server: convertInstance(this.instance),
            StreamId: streamId,
        });
    };
    ServerStreaming.prototype.processSubscriberMsg = function (msg, streamingMethod) {
        if (!(msg && msg.EventStreamAction && msg.EventStreamAction !== 0)) {
            return;
        }
        if (msg.EventStreamAction === 1) {
            this.clientWishesToSubscribe(msg, streamingMethod);
        }
        else if (msg.EventStreamAction === 2) {
            this.clientWishesToUnsubscribe(msg, streamingMethod);
        }
        else if (msg.EventStreamAction === 3) {
            this.clientAcknowledgesItDidSubscribe(msg, streamingMethod);
        }
        else if (msg.EventStreamAction === 4) {
            this.clientPerSubHeartbeat(msg);
        }
    };
    ServerStreaming.prototype.sendResult = function (message) {
        if (typeof message !== "object") {
            throw new Error("Invalid message.");
        }
        if (typeof message.Status !== "number") {
            message.Status = 0;
        }
        this.connection.send("agm", "MethodInvocationResultMessage", message);
    };
    ServerStreaming.prototype.clientWishesToSubscribe = function (msg, streamingMethod) {
        var requestContext = {
            msg: msg,
            arguments: msg.Context.ArgumentsJson || {},
            instance: convertInfoToInstance(msg.Client),
        };
        if (typeof this.requestHandler === "function") {
            this.requestHandler(requestContext, streamingMethod);
        }
    };
    ServerStreaming.prototype.clientWishesToUnsubscribe = function (msg, streamingMethod) {
        if (!(streamingMethod &&
            Array.isArray(streamingMethod.protocolState.subscriptions) &&
            streamingMethod.protocolState.subscriptions.length > 0)) {
            return;
        }
        this.closeIndividualSubscription(streamingMethod, msg.StreamId, msg.EventStreamSubject, false);
    };
    ServerStreaming.prototype.clientAcknowledgesItDidSubscribe = function (msg, streamingMethod) {
        if (typeof msg.StreamId !== "string" || msg.StreamId === "") {
            return;
        }
        var branchKey = this.getBranchKey(streamingMethod, msg.StreamId);
        if (typeof branchKey !== "string") {
            return;
        }
        if (!Array.isArray(streamingMethod.protocolState.subscriptions)) {
            return;
        }
        var subscription = {
            branchKey: branchKey,
            instance: convertInfoToInstance(msg.Client),
            arguments: msg.Context.ArgumentsJson,
            streamId: msg.StreamId,
            privateEventStreamSubject: msg.EventStreamSubject,
            methodResponseSubject: msg.MethodResponseSubject,
        };
        streamingMethod.protocolState.subscriptions.push(subscription);
        if (typeof this.subAddedHandler === "function") {
            this.subAddedHandler(subscription, streamingMethod);
        }
    };
    ServerStreaming.prototype.clientPerSubHeartbeat = function (msg) {
    };
    ServerStreaming.prototype.getBranchKey = function (streamingMethod, streamId) {
        if (typeof streamId !== "string" || typeof streamingMethod !== "object") {
            return;
        }
        var needle = streamingMethod.protocolState.branchKeyToStreamIdMap.filter(function (branch) {
            return branch.streamId === streamId;
        })[0];
        if (typeof needle !== "object" || typeof needle.key !== "string") {
            return;
        }
        return needle.key;
    };
    ServerStreaming.prototype.getStreamId = function (streamingMethod, branchKey) {
        if (typeof branchKey !== "string") {
            branchKey = "";
        }
        var needleBranch = streamingMethod.protocolState.branchKeyToStreamIdMap.filter(function (branch) {
            return branch.key === branchKey;
        })[0];
        var streamId = (needleBranch ? needleBranch.streamId : undefined);
        if (typeof streamId !== "string" || streamId === "") {
            streamId = this.generateNewStreamId(streamingMethod.protocolState.method.Method.Name);
            streamingMethod.protocolState.branchKeyToStreamIdMap.push({ key: branchKey, streamId: streamId });
        }
        return streamId;
    };
    ServerStreaming.prototype.closeIndividualSubscription = function (streamingMethod, streamId, privateEventStreamSubject, sendKickMessage) {
        var subscription = streamingMethod.protocolState.subscriptions.filter(function (subItem) {
            return (subItem.privateEventStreamSubject === privateEventStreamSubject &&
                subItem.streamId === streamId);
        })[0];
        if (typeof subscription !== "object") {
            return;
        }
        var initialLength = streamingMethod.protocolState.subscriptions.length;
        streamingMethod.protocolState.subscriptions = streamingMethod.protocolState.subscriptions.filter(function (subItem) {
            return !(subItem.privateEventStreamSubject === subscription.privateEventStreamSubject &&
                subItem.streamId === subscription.streamId);
        });
        var filteredLength = streamingMethod.protocolState.subscriptions.length;
        if (filteredLength !== (initialLength - 1)) {
            return;
        }
        if (sendKickMessage === true) {
            this.sendResult({
                EventStreamAction: 2,
                EventStreamSubject: privateEventStreamSubject,
                MethodName: streamingMethod.protocolState.method.Method.Name,
                MethodRequestSubject: streamingMethod.protocolState.method.MethodRequestSubject,
                MethodResponseSubject: subscription.methodResponseSubject,
                MethodVersion: streamingMethod.protocolState.method.Method.Version,
                ResponseContextJson: {},
                Server: convertInstance(this.instance),
                StreamId: subscription.streamId,
                Status: 0,
            });
        }
        if (typeof this.subRemovedHandler === "function") {
            this.subRemovedHandler(subscription, streamingMethod);
        }
    };
    ServerStreaming.prototype.getUniqueBranchNames = function (streamingMethod) {
        var keysWithDuplicates = streamingMethod.protocolState.subscriptions.map(function (sub) {
            var result = null;
            if (typeof sub === "object" && typeof sub.branchKey === "string") {
                result = sub.branchKey;
            }
            return result;
        });
        var seen = [];
        var branchArray = keysWithDuplicates.filter(function (bKey) {
            if (bKey === null || seen.indexOf(bKey) >= 0) {
                return false;
            }
            seen.push(bKey);
            return true;
        });
        return branchArray;
    };
    return ServerStreaming;
}());

var HeartbeatInterval = 5000;
var PresenceInterval = 10000;
var ServerProtocol = (function () {
    function ServerProtocol(connection, instance, configuration, serverRepository) {
        var _this = this;
        this.connection = connection;
        this.instance = instance;
        this.serverRepository = serverRepository;
        this.invocationMessagesMap = {};
        this.reqCounter = 0;
        this.callbacks = lib();
        this.streaming = new ServerStreaming(connection, instance);
        connection.on("agm", "MethodInvocationRequestMessage", function (msg) { return _this.handleMethodInvocationMessage(msg); });
        connection.disconnected(this.stopTimers.bind(this));
        this.sendHeartbeat();
        if (this.heartbeatTimer === undefined) {
            this.heartbeatTimer = setInterval(function () { return _this.sendHeartbeat(); }, HeartbeatInterval);
        }
        this.getBranchList = this.streaming.getBranchList;
        this.getSubscriptionList = this.streaming.getSubscriptionList;
        this.closeAllSubscriptions = this.streaming.closeAllSubscriptions;
        this.closeSingleSubscription = this.streaming.closeSingleSubscription;
        this.pushDataToSingle = this.streaming.pushDataToSingle;
        this.pushData = this.streaming.pushData;
        this.onSubRequest = this.streaming.onSubRequest;
        this.acceptRequestOnBranch = this.streaming.acceptRequestOnBranch;
        this.rejectRequest = this.streaming.rejectRequest;
        this.onSubAdded = this.streaming.onSubAdded;
        this.onSubRemoved = this.streaming.onSubRemoved;
    }
    ServerProtocol.prototype.stopTimers = function () {
        clearInterval(this.presenceTimer);
        clearInterval(this.heartbeatTimer);
    };
    ServerProtocol.prototype.unregister = function (info) {
        this.sendPresence();
        return Promise.resolve();
    };
    ServerProtocol.prototype.register = function (repoMethod) {
        var reqSubj = this.nextRequestSubject();
        repoMethod.protocolState.method = this.createNewMethodMessage(repoMethod.definition, reqSubj, false);
        this.announceNewMethod();
        return Promise.resolve();
    };
    ServerProtocol.prototype.createStream = function (repoMethod) {
        var reqSubj = this.nextRequestSubject();
        var streamConverted = this.createNewMethodMessage(repoMethod.definition, reqSubj, true);
        repoMethod.protocolState.method = streamConverted;
        repoMethod.protocolState.globalEventStreamSubject = repoMethod.definition.name + ".jsStream." + shortid();
        repoMethod.protocolState.subscriptions = [];
        repoMethod.protocolState.branchKeyToStreamIdMap = [];
        this.announceNewMethod();
        return Promise.resolve();
    };
    ServerProtocol.prototype.onInvoked = function (callback) {
        this.callbacks.add("onInvoked", callback);
    };
    ServerProtocol.prototype.methodInvocationResult = function (executedMethod, invocationId, err, result) {
        var message = this.invocationMessagesMap[invocationId];
        if (!message) {
            return;
        }
        if (message.MethodResponseSubject === "null") {
            return;
        }
        if (executedMethod === undefined) {
            return;
        }
        var resultMessage = {
            MethodRequestSubject: message.MethodRequestSubject,
            MethodResponseSubject: message.MethodResponseSubject,
            MethodName: executedMethod.protocolState.method.Method.Name,
            InvocationId: invocationId,
            ResultContextJson: result,
            Server: convertInstance(this.instance),
            ResultMessage: err,
            Status: err ? 1 : 0,
        };
        this.connection.send("agm", "MethodInvocationResultMessage", resultMessage);
        delete this.invocationMessagesMap[invocationId];
    };
    ServerProtocol.prototype.nextRequestSubject = function () {
        return "req_" + (this.reqCounter++) + "_" + shortid();
    };
    ServerProtocol.prototype.sendHeartbeat = function () {
        this.connection.send("agm", "ServerHeartbeatMessage", this.constructHeartbeat());
    };
    ServerProtocol.prototype.constructHeartbeat = function () {
        return {
            PublishingInterval: HeartbeatInterval,
            Instance: convertInstance(this.instance),
        };
    };
    ServerProtocol.prototype.constructPresence = function () {
        var methods = this.serverRepository.getList();
        return {
            PublishingInterval: PresenceInterval,
            Instance: convertInstance(this.instance),
            MethodDefinitions: methods.map(function (m) { return m.protocolState.method; }),
        };
    };
    ServerProtocol.prototype.sendPresence = function () {
        this.connection.send("agm", "ServerPresenceMessage", this.constructPresence());
    };
    ServerProtocol.prototype.announceNewMethod = function () {
        var _this = this;
        this.sendPresence();
        if (this.presenceTimer === undefined) {
            this.presenceTimer = setInterval(function () { return _this.sendPresence(); }, PresenceInterval);
        }
    };
    ServerProtocol.prototype.handleMethodInvocationMessage = function (message) {
        var subject = message.MethodRequestSubject;
        var methodList = this.serverRepository.getList();
        var method = methodList.filter(function (m) {
            return m.protocolState.method.MethodRequestSubject === subject;
        })[0];
        if (method === undefined) {
            return;
        }
        if (this.streaming.isStreamMsg(message, method)) {
            this.streaming.processSubscriberMsg(message, method);
            return;
        }
        var invocationId = message.Context.InvocationId;
        this.invocationMessagesMap[invocationId] = message;
        var invocationArgs = {
            args: message.Context.ArgumentsJson,
            instance: convertInfoToInstance(message.Client),
        };
        this.callbacks.execute("onInvoked", method, invocationId, invocationArgs);
    };
    ServerProtocol.prototype.createNewMethodMessage = function (methodIdentifier, subject, stream) {
        if (typeof methodIdentifier === "string") {
            methodIdentifier = { name: methodIdentifier };
        }
        if (typeof methodIdentifier.version !== "number") {
            methodIdentifier.version = 0;
        }
        return {
            Method: {
                Name: methodIdentifier.name,
                InputSignature: methodIdentifier.accepts,
                ResultSignature: methodIdentifier.returns,
                Description: methodIdentifier.description,
                DisplayName: methodIdentifier.displayName,
                Version: methodIdentifier.version,
                ObjectTypeRestrictions: methodIdentifier.objectTypes,
                Flags: stream ? 32 : undefined,
            },
            MethodRequestSubject: subject,
        };
    };
    return ServerProtocol;
}());

var STATUS_AWAITING_ACCEPT = "awaitingAccept";
var STATUS_SUBSCRIBED = "subscribed";
var ERR_MSG_SUB_FAILED = "Subscription failed.";
var ERR_MSG_SUB_REJECTED = "Subscription rejected.";
var ON_CLOSE_MSG_SERVER_INIT = "ServerInitiated";
var ON_CLOSE_MSG_CLIENT_INIT = "ClientInitiated";
var ClientStreaming = (function () {
    function ClientStreaming(configuration, instance, sendRequest, nextResponseSubject) {
        this.configuration = configuration;
        this.instance = instance;
        this.sendRequest = sendRequest;
        this.nextResponseSubject = nextResponseSubject;
        this.subscriptionsList = {};
    }
    ClientStreaming.prototype.subscribe = function (stream, params, targetServers, options, success, error) {
        var _this = this;
        if (targetServers.length === 0) {
            error({
                method: stream.getInfoForUser(),
                message: ERR_MSG_SUB_FAILED + " No available servers matched the target params.",
                called_with: params.arguments,
            });
            return;
        }
        var subscriptionId = "subscriptionId_" + shortid();
        var pendingSub = this.registerSubscription(subscriptionId, stream, params, success, error, options.methodResponseTimeout);
        if (typeof pendingSub !== "object") {
            error({
                method: stream.getInfoForUser(),
                message: ERR_MSG_SUB_FAILED + " Unable to register the user callbacks.",
                called_with: params.arguments,
            });
            return;
        }
        targetServers.forEach(function (target) {
            var responseSubject = _this.nextResponseSubject();
            var requestSubject = stream.info.requestSubject;
            pendingSub.trackedServers.push({
                server: undefined,
                streamId: undefined,
                streamSubjects: {
                    global: undefined,
                    private: undefined,
                },
                methodRequestSubject: requestSubject,
                methodResponseSubject: responseSubject,
            });
            var message = {
                EventStreamAction: 1,
                MethodRequestSubject: requestSubject,
                MethodResponseSubject: responseSubject,
                Client: convertInstance(_this.instance),
                Context: {
                    ArgumentsJson: params.arguments,
                    InvocationId: subscriptionId,
                    MethodName: stream.info.name,
                    ExecutionServer: target.server.info,
                    Timeout: options.methodResponseTimeout,
                },
            };
            _this.sendRequest(message);
        });
    };
    ClientStreaming.prototype.processPublisherMsg = function (msg) {
        if (!(msg && msg.EventStreamAction && msg.EventStreamAction !== 0)) {
            return;
        }
        if (msg.EventStreamAction === 2) {
            this.serverIsKickingASubscriber(msg);
        }
        else if (msg.EventStreamAction === 3) {
            this.serverAcknowledgesGoodSubscription(msg);
        }
        else if (msg.EventStreamAction === 5) {
            this.serverHasPushedSomeDataIntoTheStream(msg);
        }
    };
    ClientStreaming.prototype.registerSubscription = function (subscriptionId, method, params, success, error, timeout) {
        var _this = this;
        this.subscriptionsList[subscriptionId] = {
            status: STATUS_AWAITING_ACCEPT,
            method: method,
            params: params,
            success: success,
            error: error,
            trackedServers: [],
            handlers: {
                onData: [],
                onClosed: [],
            },
            queued: {
                data: [],
                closers: [],
            },
            timeoutId: undefined,
        };
        this.subscriptionsList[subscriptionId].timeoutId = setTimeout(function () {
            if (_this.subscriptionsList[subscriptionId] === undefined) {
                return;
            }
            var subscription = _this.subscriptionsList[subscriptionId];
            if (subscription.status === STATUS_AWAITING_ACCEPT) {
                error({
                    method: method,
                    called_with: params.arguments,
                    message: ERR_MSG_SUB_FAILED + " Subscription attempt timed out after " + timeout + "ms.",
                });
                delete _this.subscriptionsList[subscriptionId];
            }
            else if (subscription.status === STATUS_SUBSCRIBED &&
                subscription.trackedServers.length > 0) {
                subscription.trackedServers = subscription.trackedServers.filter(function (server) {
                    return (typeof server.streamId === "string" && server.streamId !== "");
                });
                subscription.timeoutId = undefined;
                if (subscription.trackedServers.length === 0) {
                    var closersCount = subscription.queued.closers.length;
                    var closingServer_1 = (closersCount > 0) ? subscription.queued.closers[closersCount - 1] : null;
                    subscription.handlers.onClosed.forEach(function (callback) {
                        if (typeof callback === "function") {
                            callback({
                                message: ON_CLOSE_MSG_SERVER_INIT,
                                requestArguments: subscription.params.arguments,
                                server: closingServer_1,
                                stream: subscription.method,
                            });
                        }
                    });
                    delete _this.subscriptionsList[subscriptionId];
                }
            }
        }, timeout);
        return this.subscriptionsList[subscriptionId];
    };
    ClientStreaming.prototype.serverIsKickingASubscriber = function (msg) {
        var _this = this;
        var keys = Object.keys(this.subscriptionsList);
        if (typeof msg.InvocationId === "string" && msg.InvocationId !== "") {
            keys = keys.filter(function (k) { return k === msg.InvocationId; });
        }
        var deletionsList = [];
        keys.forEach(function (key) {
            if (typeof _this.subscriptionsList[key] !== "object") {
                return;
            }
            _this.subscriptionsList[key].trackedServers = _this.subscriptionsList[key].trackedServers.filter(function (server) {
                var isRejecting = (server.methodRequestSubject === msg.MethodRequestSubject && server.methodResponseSubject === msg.MethodResponseSubject);
                var isKicking = (server.streamId === msg.StreamId &&
                    (server.streamSubjects.global === msg.EventStreamSubject || server.streamSubjects.private === msg.EventStreamSubject));
                var isRejectingOrKicking = isRejecting || isKicking;
                return !isRejectingOrKicking;
            });
            if (_this.subscriptionsList[key].trackedServers.length === 0) {
                deletionsList.push(key);
            }
        });
        deletionsList.forEach(function (key) {
            if (typeof _this.subscriptionsList[key] !== "object") {
                return;
            }
            if (_this.subscriptionsList[key].status === STATUS_AWAITING_ACCEPT &&
                typeof _this.subscriptionsList[key].timeoutId === "number") {
                var reason = (typeof msg.ResultMessage === "string" && msg.ResultMessage !== "") ?
                    ' Publisher said "' + msg.ResultMessage + '".' :
                    " No reason given.";
                var callArgs = typeof _this.subscriptionsList[key].params.arguments === "object" ?
                    JSON.stringify(_this.subscriptionsList[key].params.arguments) :
                    "{}";
                _this.subscriptionsList[key].error(ERR_MSG_SUB_REJECTED + reason + " Called with:" + callArgs);
                clearTimeout(_this.subscriptionsList[key].timeoutId);
            }
            else {
                _this.subscriptionsList[key].handlers.onClosed.forEach(function (callback) {
                    if (typeof callback !== "function") {
                        return;
                    }
                    callback({
                        message: ON_CLOSE_MSG_SERVER_INIT,
                        requestArguments: _this.subscriptionsList[key].params.arguments,
                        server: convertInfoToInstance(msg.Server),
                        stream: _this.subscriptionsList[key].method,
                    });
                });
            }
            delete _this.subscriptionsList[key];
        });
    };
    ClientStreaming.prototype.serverAcknowledgesGoodSubscription = function (msg) {
        var _this = this;
        var subscriptionId = msg.InvocationId;
        var subscription = this.subscriptionsList[subscriptionId];
        if (typeof subscription !== "object") {
            return;
        }
        var acceptingServer = subscription.trackedServers.filter(function (server) {
            return (server.methodRequestSubject === msg.MethodRequestSubject &&
                server.methodResponseSubject === msg.MethodResponseSubject);
        })[0];
        if (typeof acceptingServer !== "object") {
            return;
        }
        var isFirstResponse = (subscription.status === STATUS_AWAITING_ACCEPT);
        subscription.status = STATUS_SUBSCRIBED;
        var privateStreamSubject = this.generatePrivateStreamSubject(subscription.method.name);
        if (typeof acceptingServer.streamId === "string" && acceptingServer.streamId !== "") {
            return;
        }
        acceptingServer.server = convertInfoToInstance(msg.Server);
        acceptingServer.streamId = msg.StreamId;
        acceptingServer.streamSubjects.global = msg.EventStreamSubject;
        acceptingServer.streamSubjects.private = privateStreamSubject;
        var confirmatoryRequest = {
            EventStreamAction: 3,
            EventStreamSubject: privateStreamSubject,
            StreamId: msg.StreamId,
            MethodRequestSubject: msg.MethodRequestSubject,
            MethodResponseSubject: acceptingServer.methodResponseSubject,
            Client: convertInstance(this.instance),
            Context: {
                ArgumentsJson: subscription.params.arguments,
                MethodName: subscription.method.name,
            },
        };
        this.sendRequest(confirmatoryRequest);
        if (isFirstResponse) {
            subscription.success({
                onData: function (dataCallback) {
                    if (typeof dataCallback !== "function") {
                        throw new TypeError("The data callback must be a function.");
                    }
                    this.handlers.onData.push(dataCallback);
                    if (this.handlers.onData.length === 1 && this.queued.data.length > 0) {
                        this.queued.data.forEach(function (dataItem) {
                            dataCallback(dataItem);
                        });
                    }
                }.bind(subscription),
                onClosed: function (closedCallback) {
                    if (typeof closedCallback !== "function") {
                        throw new TypeError("The callback must be a function.");
                    }
                    this.handlers.onClosed.push(closedCallback);
                }.bind(subscription),
                onFailed: function () { },
                close: function () { return _this.closeSubscription(subscription, subscriptionId); },
                requestArguments: subscription.params.arguments,
                serverInstance: convertInfoToInstance(msg.Server),
                stream: subscription.method,
            });
        }
    };
    ClientStreaming.prototype.serverHasPushedSomeDataIntoTheStream = function (msg) {
        var _loop_1 = function (key) {
            if (this_1.subscriptionsList.hasOwnProperty(key) && typeof this_1.subscriptionsList[key] === "object") {
                var isPrivateData = void 0;
                var trackedServersFound = this_1.subscriptionsList[key].trackedServers.filter(function (ls) {
                    return (ls.streamId === msg.StreamId &&
                        (ls.streamSubjects.global === msg.EventStreamSubject ||
                            ls.streamSubjects.private === msg.EventStreamSubject));
                });
                if (trackedServersFound.length === 0) {
                    isPrivateData = undefined;
                }
                else if (trackedServersFound[0].streamSubjects.global === msg.EventStreamSubject) {
                    isPrivateData = false;
                }
                else if (trackedServersFound[0].streamSubjects.private === msg.EventStreamSubject) {
                    isPrivateData = true;
                }
                if (isPrivateData !== undefined) {
                    var receivedStreamData_1 = {
                        data: msg.ResultContextJson,
                        server: convertInfoToInstance(msg.Server),
                        requestArguments: this_1.subscriptionsList[key].params.arguments || {},
                        message: msg.ResultMessage,
                        private: isPrivateData,
                    };
                    var onDataHandlers = this_1.subscriptionsList[key].handlers.onData;
                    var queuedData = this_1.subscriptionsList[key].queued.data;
                    if (Array.isArray(onDataHandlers)) {
                        if (onDataHandlers.length > 0) {
                            onDataHandlers.forEach(function (callback) {
                                if (typeof callback === "function") {
                                    callback(receivedStreamData_1);
                                }
                            });
                        }
                        else {
                            queuedData.push(receivedStreamData_1);
                        }
                    }
                }
            }
        };
        var this_1 = this;
        for (var key in this.subscriptionsList) {
            _loop_1(key);
        }
    };
    ClientStreaming.prototype.closeSubscription = function (sub, subId) {
        var _this = this;
        var responseSubject = this.nextResponseSubject();
        sub.trackedServers.forEach(function (server) {
            _this.sendRequest({
                EventStreamAction: 2,
                Client: convertInstance(_this.instance),
                MethodRequestSubject: server.methodRequestSubject,
                MethodResponseSubject: responseSubject,
                StreamId: server.streamId,
                EventStreamSubject: server.streamSubjects.private,
            });
        });
        sub.handlers.onClosed.forEach(function (callback) {
            if (typeof callback === "function") {
                callback({
                    message: ON_CLOSE_MSG_CLIENT_INIT,
                    requestArguments: sub.arguments || {},
                    server: sub.trackedServers[sub.trackedServers.length - 1].server,
                    stream: sub.method,
                });
            }
        });
        delete this.subscriptionsList[subId];
    };
    ClientStreaming.prototype.generatePrivateStreamSubject = function (methodName) {
        var appInfo = convertInstance(this.instance);
        return "ESSpriv-jsb_" +
            appInfo.ApplicationName +
            "_on_" +
            methodName +
            "_" +
            shortid();
    };
    return ClientStreaming;
}());

function rejectAfter(ms, error) {
    if (ms === void 0) { ms = 0; }
    return new Promise(function (resolve, reject) { return setTimeout(function () { return reject(error); }, ms); });
}

var InvokeStatus;
(function (InvokeStatus) {
    InvokeStatus[InvokeStatus["Success"] = 0] = "Success";
    InvokeStatus[InvokeStatus["Error"] = 1] = "Error";
})(InvokeStatus || (InvokeStatus = {}));
var Client = (function () {
    function Client(protocol, repo, instance, configuration) {
        this.protocol = protocol;
        this.repo = repo;
        this.instance = instance;
        this.configuration = configuration;
    }
    Client.prototype.subscribe = function (method, options, successCallback, errorCallback, existingSub) {
        var _this = this;
        var callProtocolSubscribe = function (targetServers, stream, successProxy, errorProxy) {
            var _a;
            options.methodResponseTimeout = (_a = options.methodResponseTimeout) !== null && _a !== void 0 ? _a : options.waitTimeoutMs;
            _this.protocol.client.subscribe(stream, options, targetServers, { methodResponseTimeout: options.waitTimeoutMs }, successProxy, errorProxy, existingSub);
        };
        var promise = new Promise(function (resolve, reject) {
            var successProxy = function (sub) {
                resolve(sub);
            };
            var errorProxy = function (err) {
                reject(err);
            };
            if (!method) {
                reject("Method definition is required. Please, provide either a unique string for a method name or a \u201CmethodDefinition\u201D object with a required \u201Cname\u201D property.");
                return;
            }
            var methodDef;
            if (typeof method === "string") {
                methodDef = { name: method };
            }
            else {
                methodDef = method;
            }
            if (!methodDef.name) {
                reject("Method definition is required. Please, provide either a unique string for a method name or a \u201CmethodDefinition\u201D object with a required \u201Cname\u201D property.");
                return;
            }
            if (options === undefined) {
                options = {};
            }
            var target = options.target;
            if (target === undefined) {
                target = "best";
            }
            if (typeof target === "string" && target !== "all" && target !== "best") {
                reject(new Error("\"" + target + "\" is not a valid target. Valid targets are \"all\", \"best\", or an instance."));
                return;
            }
            if (options.methodResponseTimeout === undefined) {
                options.methodResponseTimeout = options.method_response_timeout;
                if (options.methodResponseTimeout === undefined) {
                    options.methodResponseTimeout = _this.configuration.methodResponseTimeout;
                }
            }
            if (options.waitTimeoutMs === undefined) {
                options.waitTimeoutMs = options.wait_for_method_timeout;
                if (options.waitTimeoutMs === undefined) {
                    options.waitTimeoutMs = _this.configuration.waitTimeoutMs;
                }
            }
            var delayStep = 500;
            var delayTillNow = 0;
            var currentServers = _this.getServerMethodsByFilterAndTarget(methodDef, target);
            if (currentServers.length > 0) {
                callProtocolSubscribe(currentServers, currentServers[0].methods[0], successProxy, errorProxy);
            }
            else {
                var retry_1 = function () {
                    delayTillNow += delayStep;
                    currentServers = _this.getServerMethodsByFilterAndTarget(methodDef, target);
                    if (currentServers.length > 0) {
                        var streamInfo = currentServers[0].methods[0];
                        callProtocolSubscribe(currentServers, streamInfo, successProxy, errorProxy);
                    }
                    else if (delayTillNow >= options.waitTimeoutMs) {
                        var def = typeof method === "string" ? { name: method } : method;
                        var info = {
                            id: undefined,
                            info: def,
                            getInfoForUser: function () {
                                return methodDef;
                            },
                            protocolState: undefined,
                        };
                        callProtocolSubscribe(currentServers, info, successProxy, errorProxy);
                    }
                    else {
                        setTimeout(retry_1, delayStep);
                    }
                };
                setTimeout(retry_1, delayStep);
            }
        });
        return promisify(promise, successCallback, errorCallback);
    };
    Client.prototype.servers = function (methodFilter) {
        var filterCopy = methodFilter === undefined
            ? undefined
            : __assign({}, methodFilter);
        return this.getServers(filterCopy).map(function (serverMethodMap) {
            return serverMethodMap.server.getInfoForUser();
        });
    };
    Client.prototype.methods = function (methodFilter) {
        var filterCopy = __assign({}, methodFilter);
        return this.getMethods(filterCopy).map(function (m) {
            return m.getInfoForUser();
        });
    };
    Client.prototype.methodsForInstance = function (instance) {
        return this.getMethodsForInstance(instance).map(function (m) {
            return m.getInfoForUser();
        });
    };
    Client.prototype.methodAdded = function (callback) {
        return this.repo.onMethodAdded(function (method) {
            callback(method.getInfoForUser());
        });
    };
    Client.prototype.methodRemoved = function (callback) {
        return this.repo.onMethodRemoved(function (method) {
            callback(method.getInfoForUser());
        });
    };
    Client.prototype.serverAdded = function (callback) {
        return this.repo.onServerAdded(function (server) {
            callback(server.getInfoForUser());
        });
    };
    Client.prototype.serverRemoved = function (callback) {
        return this.repo.onServerRemoved(function (server, reason) {
            callback(server.getInfoForUser(), reason);
        });
    };
    Client.prototype.serverMethodAdded = function (callback) {
        return this.repo.onServerMethodAdded(function (server, method) {
            callback({ server: server.getInfoForUser(), method: method.getInfoForUser() });
        });
    };
    Client.prototype.serverMethodRemoved = function (callback) {
        return this.repo.onServerMethodRemoved(function (server, method) {
            callback({ server: server.getInfoForUser(), method: method.getInfoForUser() });
        });
    };
    Client.prototype.invoke = function (methodFilter, argumentObj, target, additionalOptions, success, error) {
        return __awaiter(this, void 0, void 0, function () {
            var getInvokePromise;
            var _this = this;
            return __generator(this, function (_a) {
                getInvokePromise = function () { return __awaiter(_this, void 0, void 0, function () {
                    var methodDefinition, serversMethodMap, err_1, errorObj, timeout, invokePromises, invocationMessages, results, allRejected;
                    var _this = this;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (typeof methodFilter === "string") {
                                    methodDefinition = { name: methodFilter };
                                }
                                else {
                                    methodDefinition = __assign({}, methodFilter);
                                }
                                if (!methodDefinition.name) {
                                    return [2, Promise.reject("Method definition is required. Please, provide either a unique string for a method name or a \u201CmethodDefinition\u201D object with a required \u201Cname\u201D property.")];
                                }
                                if (!argumentObj) {
                                    argumentObj = {};
                                }
                                if (!target) {
                                    target = "best";
                                }
                                if (typeof target === "string" && target !== "all" && target !== "best" && target !== "skipMine") {
                                    return [2, Promise.reject(new Error("\"" + target + "\" is not a valid target. Valid targets are \"all\" and \"best\"."))];
                                }
                                if (!additionalOptions) {
                                    additionalOptions = {};
                                }
                                if (additionalOptions.methodResponseTimeoutMs === undefined) {
                                    additionalOptions.methodResponseTimeoutMs = additionalOptions.method_response_timeout;
                                    if (additionalOptions.methodResponseTimeoutMs === undefined) {
                                        additionalOptions.methodResponseTimeoutMs = this.configuration.methodResponseTimeout;
                                    }
                                }
                                if (additionalOptions.waitTimeoutMs === undefined) {
                                    additionalOptions.waitTimeoutMs = additionalOptions.wait_for_method_timeout;
                                    if (additionalOptions.waitTimeoutMs === undefined) {
                                        additionalOptions.waitTimeoutMs = this.configuration.waitTimeoutMs;
                                    }
                                }
                                if (additionalOptions.waitTimeoutMs !== undefined && typeof additionalOptions.waitTimeoutMs !== "number") {
                                    return [2, Promise.reject(new Error("\"" + additionalOptions.waitTimeoutMs + "\" is not a valid number for \"waitTimeoutMs\" "))];
                                }
                                if (typeof argumentObj !== "object") {
                                    return [2, Promise.reject(new Error("The method arguments must be an object. method: " + methodDefinition.name))];
                                }
                                serversMethodMap = this.getServerMethodsByFilterAndTarget(methodDefinition, target);
                                if (!(serversMethodMap.length === 0)) return [3, 4];
                                _a.label = 1;
                            case 1:
                                _a.trys.push([1, 3, , 4]);
                                return [4, this.tryToAwaitForMethods(methodDefinition, target, additionalOptions)];
                            case 2:
                                serversMethodMap = _a.sent();
                                return [3, 4];
                            case 3:
                                err_1 = _a.sent();
                                errorObj = {
                                    method: methodDefinition,
                                    called_with: argumentObj,
                                    message: "Can not find a method matching " + JSON.stringify(methodFilter) + " with server filter " + JSON.stringify(target) + ". Is the object a valid instance ?",
                                    executed_by: undefined,
                                    returned: undefined,
                                    status: undefined,
                                };
                                return [2, Promise.reject(errorObj)];
                            case 4:
                                timeout = additionalOptions.methodResponseTimeoutMs;
                                invokePromises = serversMethodMap.map(function (serversMethodPair) {
                                    var invId = shortid();
                                    return Promise.race([
                                        _this.protocol.client.invoke(invId, serversMethodPair.methods[0], argumentObj, serversMethodPair.server, additionalOptions),
                                        rejectAfter(timeout, {
                                            invocationId: invId,
                                            message: "Invocation timeout (" + timeout + " ms) reached",
                                            status: InvokeStatus.Error,
                                        })
                                    ]);
                                });
                                return [4, Promise.all(invokePromises)];
                            case 5:
                                invocationMessages = _a.sent();
                                results = this.getInvocationResultObj(invocationMessages, methodDefinition, argumentObj);
                                allRejected = invocationMessages.every(function (result) { return result.status === InvokeStatus.Error; });
                                if (allRejected) {
                                    return [2, Promise.reject(results)];
                                }
                                return [2, results];
                        }
                    });
                }); };
                return [2, promisify(getInvokePromise(), success, error)];
            });
        });
    };
    Client.prototype.getInvocationResultObj = function (invocationResults, method, calledWith) {
        var all_return_values = invocationResults
            .filter(function (invokeMessage) { return invokeMessage.status === InvokeStatus.Success; })
            .reduce(function (allValues, currentValue) {
            allValues = __spreadArrays(allValues, [
                {
                    executed_by: currentValue.instance,
                    returned: currentValue.result,
                    called_with: calledWith,
                    method: method,
                    message: currentValue.message,
                    status: currentValue.status,
                }
            ]);
            return allValues;
        }, []);
        var all_errors = invocationResults
            .filter(function (invokeMessage) { return invokeMessage.status === InvokeStatus.Error; })
            .reduce(function (allErrors, currError) {
            allErrors = __spreadArrays(allErrors, [
                {
                    executed_by: currError.instance,
                    called_with: calledWith,
                    name: method.name,
                    message: currError.message,
                }
            ]);
            return allErrors;
        }, []);
        var invResult = invocationResults[0];
        var result = {
            method: method,
            called_with: calledWith,
            returned: invResult.result,
            executed_by: invResult.instance,
            all_return_values: all_return_values,
            all_errors: all_errors,
            message: invResult.message,
            status: invResult.status
        };
        return result;
    };
    Client.prototype.tryToAwaitForMethods = function (methodDefinition, target, additionalOptions) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (additionalOptions.waitTimeoutMs === 0) {
                reject();
                return;
            }
            var delayStep = 500;
            var delayTillNow = 0;
            var retry = function () {
                delayTillNow += delayStep;
                var serversMethodMap = _this.getServerMethodsByFilterAndTarget(methodDefinition, target);
                if (serversMethodMap.length > 0) {
                    clearInterval(interval);
                    resolve(serversMethodMap);
                }
                else if (delayTillNow >= additionalOptions.waitTimeoutMs) {
                    clearInterval(interval);
                    reject();
                    return;
                }
            };
            var interval = setInterval(retry, delayStep);
        });
    };
    Client.prototype.filterByTarget = function (target, serverMethodMap) {
        var _this = this;
        if (typeof target === "string") {
            if (target === "all") {
                return __spreadArrays(serverMethodMap);
            }
            else if (target === "best") {
                var localMachine = serverMethodMap
                    .find(function (s) { return s.server.info.isLocal; });
                if (localMachine) {
                    return [localMachine];
                }
                if (serverMethodMap[0] !== undefined) {
                    return [serverMethodMap[0]];
                }
            }
            else if (target === "skipMine") {
                return serverMethodMap.filter(function (_a) {
                    var server = _a.server;
                    return server.getInfoForUser().peerId !== _this.instance.peerId;
                });
            }
        }
        else {
            var targetArray = void 0;
            if (!Array.isArray(target)) {
                targetArray = [target];
            }
            else {
                targetArray = target;
            }
            var allServersMatching = targetArray.reduce(function (matches, filter) {
                var myMatches = serverMethodMap.filter(function (serverMethodPair) {
                    return _this.instanceMatch(filter, serverMethodPair.server.info);
                });
                return matches.concat(myMatches);
            }, []);
            return allServersMatching;
        }
        return [];
    };
    Client.prototype.instanceMatch = function (instanceFilter, instanceDefinition) {
        return this.containsProps(instanceFilter, instanceDefinition);
    };
    Client.prototype.methodMatch = function (methodFilter, methodDefinition) {
        return this.containsProps(methodFilter, methodDefinition);
    };
    Client.prototype.containsProps = function (filter, repoMethod) {
        var filterProps = Object.keys(filter)
            .filter(function (prop) {
            return filter[prop] !== undefined
                && typeof filter[prop] !== "function"
                && prop !== "object_types"
                && prop !== "display_name"
                && prop[0] !== "_";
        });
        return filterProps.reduce(function (isMatch, prop) {
            var filterValue = filter[prop];
            var repoMethodValue = repoMethod[prop];
            if (prop === "objectTypes") {
                var containsAllFromFilter = function (filterObjTypes, repoObjectTypes) {
                    var objTypeToContains = filterObjTypes.reduce(function (object, objType) {
                        object[objType] = false;
                        return object;
                    }, {});
                    repoObjectTypes.forEach(function (repoObjType) {
                        if (objTypeToContains[repoObjType] !== undefined) {
                            objTypeToContains[repoObjType] = true;
                        }
                    });
                    var filterIsFullfilled = function () { return Object.keys(objTypeToContains).reduce(function (isFullfiled, objType) {
                        if (!objTypeToContains[objType]) {
                            isFullfiled = false;
                        }
                        return isFullfiled;
                    }, true); };
                    return filterIsFullfilled();
                };
                if (filterValue.length > repoMethodValue.length
                    || containsAllFromFilter(filterValue, repoMethodValue) === false) {
                    isMatch = false;
                }
            }
            else if (String(filterValue).toLowerCase() !== String(repoMethodValue).toLowerCase()) {
                isMatch = false;
            }
            return isMatch;
        }, true);
    };
    Client.prototype.getMethods = function (methodFilter) {
        var _this = this;
        if (methodFilter === undefined) {
            return this.repo.getMethods();
        }
        if (typeof methodFilter === "string") {
            methodFilter = { name: methodFilter };
        }
        var methods = this.repo.getMethods().filter(function (method) {
            return _this.methodMatch(methodFilter, method.info);
        });
        return methods;
    };
    Client.prototype.getMethodsForInstance = function (instanceFilter) {
        var _this = this;
        var allServers = this.repo.getServers();
        var matchingServers = allServers.filter(function (server) {
            return _this.instanceMatch(instanceFilter, server.info);
        });
        if (matchingServers.length === 0) {
            return [];
        }
        var resultMethodsObject = {};
        if (matchingServers.length === 1) {
            resultMethodsObject = matchingServers[0].methods;
        }
        else {
            matchingServers.forEach(function (server) {
                Object.keys(server.methods).forEach(function (methodKey) {
                    var method = server.methods[methodKey];
                    resultMethodsObject[method.id] = method;
                });
            });
        }
        return Object.keys(resultMethodsObject)
            .map(function (key) {
            return resultMethodsObject[key];
        });
    };
    Client.prototype.getServers = function (methodFilter) {
        var _this = this;
        var servers = this.repo.getServers();
        if (methodFilter === undefined) {
            return servers.map(function (server) {
                return { server: server };
            });
        }
        return servers.reduce(function (prev, current) {
            var methodsForServer = _this.repo.getServerMethodsById(current.id);
            var matchingMethods = methodsForServer.filter(function (method) {
                return _this.methodMatch(methodFilter, method.info);
            });
            if (matchingMethods.length > 0) {
                prev.push({ server: current, methods: matchingMethods });
            }
            return prev;
        }, []);
    };
    Client.prototype.getServerMethodsByFilterAndTarget = function (methodFilter, target) {
        var serversMethodMap = this.getServers(methodFilter);
        return this.filterByTarget(target, serversMethodMap);
    };
    return Client;
}());

var numberMissingHeartbeatsToRemove = 3;
var ClientProtocol = (function () {
    function ClientProtocol(connection, instance, configuration, repository) {
        var _this = this;
        this.connection = connection;
        this.instance = instance;
        this.configuration = configuration;
        this.repository = repository;
        this.respCounter = 0;
        this.callbacks = lib();
        this.timers = {};
        this._pendingCallbacks = {};
        this.timers = {};
        this.streaming = new ClientStreaming(configuration, instance, function (msg) {
            connection.send("agm", "MethodInvocationRequestMessage", msg);
        }, function () { return _this.nextResponseSubject(); });
        this.listenForEvents();
    }
    ClientProtocol.prototype.subscribe = function (stream, args, targetServers, options, success, error) {
        this.streaming.subscribe(stream, args, targetServers, options, success, error);
    };
    ClientProtocol.prototype.onInvocationResult = function (callback) {
        this.callbacks.add("onResult", callback);
    };
    ClientProtocol.prototype.invoke = function (_, method, args, target, stuff) {
        var _this = this;
        var id = shortid();
        var methodInfo = method.info;
        var message = {
            MethodRequestSubject: methodInfo.requestSubject,
            MethodResponseSubject: this.nextResponseSubject(),
            Client: convertInstance(this.instance),
            Context: {
                ArgumentsJson: args,
                InvocationId: id,
                MethodName: methodInfo.name,
                ExecutionServer: target.info,
                Timeout: stuff.methodResponseTimeoutMs,
            },
        };
        this.onInvocationResult(function (invocationId, executedBy, status, result, resultMessage) {
            return _this.processInvocationResult(invocationId, executedBy, status, result, resultMessage);
        });
        return new Promise(function (resolve, reject) {
            _this._pendingCallbacks[id] = {
                invocationInfo: {
                    method: method,
                    calledWith: args,
                },
                success: function (data) { return resolve(data); },
                error: function (e) { return reject(e); }
            };
            _this.connection.send("agm", "MethodInvocationRequestMessage", message);
        });
    };
    ClientProtocol.prototype.drainSubscriptions = function () {
        return [];
    };
    ClientProtocol.prototype.nextResponseSubject = function () {
        return "resp_" + (this.respCounter++) + "_" + shortid();
    };
    ClientProtocol.prototype.createServerInfo = function (instance) {
        return {
            machine: instance.MachineName,
            pid: instance.ProcessId,
            user: instance.UserName,
            application: instance.ApplicationName,
            environment: instance.Environment,
            region: instance.Region,
        };
    };
    ClientProtocol.prototype.createMethod = function (methodInfo) {
        var method = methodInfo.Method;
        return {
            name: method.Name,
            accepts: method.InputSignature,
            returns: method.ResultSignature,
            requestSubject: methodInfo.MethodRequestSubject,
            description: method.Description,
            displayName: method.DisplayName,
            version: method.Version,
            objectTypes: method.ObjectTypeRestrictions,
            supportsStreaming: isStreamingFlagSet(method.Flags),
        };
    };
    ClientProtocol.prototype.createServerId = function (serverInfo) {
        if (serverInfo === undefined) {
            return undefined;
        }
        return [serverInfo.application,
            serverInfo.user,
            serverInfo.machine,
            serverInfo.started,
            serverInfo.pid].join("/").toLowerCase();
    };
    ClientProtocol.prototype.processServerPresence = function (presence, isPresence) {
        var instance = presence.Instance;
        var serverInfo = this.createServerInfo(instance);
        var serverId = this.createServerId(serverInfo);
        if (isPresence) {
            serverId = this.repository.addServer(serverInfo, serverId);
            if (presence.PublishingInterval) {
                this.scheduleTimeout(serverId, presence.PublishingInterval);
            }
        }
        else if (presence.PublishingInterval === 0) {
            var server = this.repository.getServerById(serverId);
            if (typeof server !== "undefined") {
                this.repository.removeServerById(serverId);
            }
        }
        if (presence.MethodDefinitions !== undefined) {
            this.updateServerMethods(serverId, presence.MethodDefinitions);
        }
    };
    ClientProtocol.prototype.scheduleTimeout = function (serverId, duration) {
        var _this = this;
        if (duration === -1) {
            return;
        }
        var timer = this.timers[serverId];
        if (timer !== undefined) {
            clearTimeout(timer);
        }
        this.timers[serverId] = setTimeout(function () {
            _this.repository.removeServerById(serverId);
        }, duration * (numberMissingHeartbeatsToRemove + 1));
    };
    ClientProtocol.prototype.updateServerMethods = function (serverId, newMethods) {
        var _this = this;
        var oldMethods = this.repository.getServerMethodsById(serverId);
        var newMethodsReduced = newMethods
            .map(function (nm) { return _this.createMethod(nm); })
            .reduce(function (obj, method) {
            var methodId = _this.repository.createMethodId(method);
            obj[methodId] = method;
            return obj;
        }, {});
        oldMethods.forEach(function (method) {
            if (newMethodsReduced[method.id] === undefined) {
                _this.repository.removeServerMethod(serverId, method.id);
            }
            else {
                delete newMethodsReduced[method.id];
            }
        });
        Object.keys(newMethodsReduced).forEach(function (key) {
            var method = newMethodsReduced[key];
            _this.repository.addServerMethod(serverId, method);
        });
    };
    ClientProtocol.prototype.handleInvokeResultMessage = function (message) {
        if (message && message.EventStreamAction && message.EventStreamAction !== 0) {
            this.streaming.processPublisherMsg(message);
            return;
        }
        var server = message.Server ? this.createServerInfo(message.Server) : undefined;
        var result = message.ResultContextJson;
        if (result && Object.keys(result).length === 0) {
            result = undefined;
        }
        this.callbacks.execute("onResult", message.InvocationId, server, message.Status, result, message.ResultMessage);
    };
    ClientProtocol.prototype.listenForEvents = function () {
        var _this = this;
        this.connection.on("agm", "ServerPresenceMessage", function (msg) {
            _this.processServerPresence(msg, true);
        });
        this.connection.on("agm", "ServerHeartbeatMessage", function (msg) {
            _this.processServerPresence(msg, false);
        });
        this.connection.on("agm", "MethodInvocationResultMessage", function (msg) {
            _this.handleInvokeResultMessage(msg);
        });
    };
    ClientProtocol.prototype.processInvocationResult = function (invocationId, executedBy, status, result, resultMessage) {
        var callback = this._pendingCallbacks[invocationId];
        if (callback === undefined) {
            return;
        }
        if (status === InvokeStatus.Success && typeof callback.success === "function") {
            callback.success({
                invocationId: invocationId,
                instance: executedBy,
                result: result,
                message: resultMessage,
                status: InvokeStatus.Success,
            });
        }
        else if (typeof callback.error === "function") {
            callback.error({
                invocationId: invocationId,
                instance: executedBy,
                result: result,
                message: resultMessage,
                status: InvokeStatus.Error,
            });
        }
        delete this._pendingCallbacks[invocationId];
    };
    return ClientProtocol;
}());

function gW1ProtocolFactory (instance, connection, clientRepository, serverRepository, configuration, getAGM) {
    var unsubscribe = connection.on("agm", "Instance", function (newInstance) {
        getAGM().updateInstance(newInstance);
        connection.off(unsubscribe);
    });
    var server = new ServerProtocol(connection, instance, configuration, serverRepository);
    var client = new ClientProtocol(connection, instance, configuration, clientRepository);
    return new Promise(function (resolve) {
        resolve({
            server: server,
            client: client,
        });
    });
}

var SUBSCRIPTION_REQUEST = "onSubscriptionRequest";
var SUBSCRIPTION_ADDED = "onSubscriptionAdded";
var SUBSCRIPTION_REMOVED = "onSubscriptionRemoved";
var ServerStreaming$1 = (function () {
    function ServerStreaming(session, repository, serverRepository, logger) {
        var _this = this;
        this.session = session;
        this.repository = repository;
        this.serverRepository = serverRepository;
        this.logger = logger;
        this.ERR_URI_SUBSCRIPTION_FAILED = "com.tick42.agm.errors.subscription.failure";
        this.callbacks = lib();
        this.nextStreamId = 0;
        session.on("add-interest", function (msg) {
            _this.handleAddInterest(msg);
        });
        session.on("remove-interest", function (msg) {
            _this.handleRemoveInterest(msg);
        });
    }
    ServerStreaming.prototype.acceptRequestOnBranch = function (requestContext, streamingMethod, branch) {
        if (typeof branch !== "string") {
            branch = "";
        }
        if (typeof streamingMethod.protocolState.subscriptionsMap !== "object") {
            throw new TypeError("The streaming method is missing its subscriptions.");
        }
        if (!Array.isArray(streamingMethod.protocolState.branchKeyToStreamIdMap)) {
            throw new TypeError("The streaming method is missing its branches.");
        }
        var streamId = this.getStreamId(streamingMethod, branch);
        var key = requestContext.msg.subscription_id;
        var subscription = {
            id: key,
            arguments: requestContext.arguments,
            instance: requestContext.instance,
            branchKey: branch,
            streamId: streamId,
            subscribeMsg: requestContext.msg,
        };
        streamingMethod.protocolState.subscriptionsMap[key] = subscription;
        this.session.sendFireAndForget({
            type: "accepted",
            subscription_id: key,
            stream_id: streamId,
        });
        this.callbacks.execute(SUBSCRIPTION_ADDED, subscription, streamingMethod);
    };
    ServerStreaming.prototype.rejectRequest = function (requestContext, streamingMethod, reason) {
        if (typeof reason !== "string") {
            reason = "";
        }
        this.sendSubscriptionFailed("Subscription rejected by user. " + reason, requestContext.msg.subscription_id);
    };
    ServerStreaming.prototype.pushData = function (streamingMethod, data, branches) {
        var _this = this;
        if (typeof streamingMethod !== "object" || !Array.isArray(streamingMethod.protocolState.branchKeyToStreamIdMap)) {
            return;
        }
        if (typeof data !== "object") {
            throw new Error("Invalid arguments. Data must be an object.");
        }
        if (typeof branches === "string") {
            branches = [branches];
        }
        else if (!Array.isArray(branches) || branches.length <= 0) {
            branches = null;
        }
        var streamIdList = streamingMethod.protocolState.branchKeyToStreamIdMap
            .filter(function (br) {
            return (branches === null || (Boolean(br) && typeof br.key === "string" && branches.indexOf(br.key) >= 0));
        }).map(function (br) {
            return br.streamId;
        });
        streamIdList.forEach(function (streamId) {
            var publishMessage = {
                type: "publish",
                stream_id: streamId,
                data: data,
            };
            _this.session.sendFireAndForget(publishMessage);
        });
    };
    ServerStreaming.prototype.pushDataToSingle = function (method, subscription, data) {
        if (typeof data !== "object") {
            throw new Error("Invalid arguments. Data must be an object.");
        }
        var postMessage = {
            type: "post",
            subscription_id: subscription.id,
            data: data,
        };
        this.session.sendFireAndForget(postMessage);
    };
    ServerStreaming.prototype.closeSingleSubscription = function (streamingMethod, subscription) {
        delete streamingMethod.protocolState.subscriptionsMap[subscription.id];
        var dropSubscriptionMessage = {
            type: "drop-subscription",
            subscription_id: subscription.id,
            reason: "Server dropping a single subscription",
        };
        this.session.sendFireAndForget(dropSubscriptionMessage);
        var subscriber = subscription.instance;
        this.callbacks.execute(SUBSCRIPTION_REMOVED, subscription, streamingMethod);
    };
    ServerStreaming.prototype.closeMultipleSubscriptions = function (streamingMethod, branchKey) {
        var _this = this;
        if (typeof streamingMethod !== "object" || typeof streamingMethod.protocolState.subscriptionsMap !== "object") {
            return;
        }
        var subscriptionsToClose = Object.keys(streamingMethod.protocolState.subscriptionsMap)
            .map(function (key) {
            return streamingMethod.protocolState.subscriptionsMap[key];
        });
        if (typeof branchKey === "string") {
            subscriptionsToClose = subscriptionsToClose.filter(function (sub) {
                return sub.branchKey === branchKey;
            });
        }
        subscriptionsToClose.forEach(function (subscription) {
            delete streamingMethod.protocolState.subscriptionsMap[subscription.id];
            var drop = {
                type: "drop-subscription",
                subscription_id: subscription.id,
                reason: "Server dropping all subscriptions on stream_id: " + subscription.streamId,
            };
            _this.session.sendFireAndForget(drop);
        });
    };
    ServerStreaming.prototype.getSubscriptionList = function (streamingMethod, branchKey) {
        if (typeof streamingMethod !== "object") {
            return [];
        }
        var subscriptions = [];
        var allSubscriptions = Object.keys(streamingMethod.protocolState.subscriptionsMap)
            .map(function (key) {
            return streamingMethod.protocolState.subscriptionsMap[key];
        });
        if (typeof branchKey !== "string") {
            subscriptions = allSubscriptions;
        }
        else {
            subscriptions = allSubscriptions.filter(function (sub) {
                return sub.branchKey === branchKey;
            });
        }
        return subscriptions;
    };
    ServerStreaming.prototype.getBranchList = function (streamingMethod) {
        if (typeof streamingMethod !== "object") {
            return [];
        }
        var allSubscriptions = Object.keys(streamingMethod.protocolState.subscriptionsMap)
            .map(function (key) {
            return streamingMethod.protocolState.subscriptionsMap[key];
        });
        var keysWithDuplicates = allSubscriptions.map(function (sub) {
            var result = null;
            if (typeof sub === "object" && typeof sub.branchKey === "string") {
                result = sub.branchKey;
            }
            return result;
        });
        var seen = [];
        var branchArray = keysWithDuplicates.filter(function (bKey) {
            if (bKey === null || seen.indexOf(bKey) >= 0) {
                return false;
            }
            seen.push(bKey);
            return true;
        });
        return branchArray;
    };
    ServerStreaming.prototype.onSubAdded = function (callback) {
        this.onSubscriptionLifetimeEvent(SUBSCRIPTION_ADDED, callback);
    };
    ServerStreaming.prototype.onSubRequest = function (callback) {
        this.onSubscriptionLifetimeEvent(SUBSCRIPTION_REQUEST, callback);
    };
    ServerStreaming.prototype.onSubRemoved = function (callback) {
        this.onSubscriptionLifetimeEvent(SUBSCRIPTION_REMOVED, callback);
    };
    ServerStreaming.prototype.handleRemoveInterest = function (msg) {
        var streamingMethod = this.serverRepository.getById(msg.method_id);
        if (typeof msg.subscription_id !== "string" ||
            typeof streamingMethod !== "object" ||
            typeof streamingMethod.protocolState.subscriptionsMap[msg.subscription_id] !== "object") {
            return;
        }
        var subscription = streamingMethod.protocolState.subscriptionsMap[msg.subscription_id];
        delete streamingMethod.protocolState.subscriptionsMap[msg.subscription_id];
        this.callbacks.execute(SUBSCRIPTION_REMOVED, subscription, streamingMethod);
    };
    ServerStreaming.prototype.onSubscriptionLifetimeEvent = function (eventName, handlerFunc) {
        this.callbacks.add(eventName, handlerFunc);
    };
    ServerStreaming.prototype.getNextStreamId = function () {
        return this.nextStreamId++ + "";
    };
    ServerStreaming.prototype.handleAddInterest = function (msg) {
        var caller = this.repository.getServerById(msg.caller_id);
        var instance = (typeof caller.getInfoForUser === "function") ? caller.getInfoForUser() : null;
        var requestContext = {
            msg: msg,
            arguments: msg.arguments_kv || {},
            instance: instance,
        };
        var streamingMethod = this.serverRepository.getById(msg.method_id);
        if (streamingMethod === undefined) {
            var errorMsg = "No method with id " + msg.method_id + " on this server.";
            this.sendSubscriptionFailed(errorMsg, msg.subscription_id);
            return;
        }
        if (streamingMethod.protocolState.subscriptionsMap &&
            streamingMethod.protocolState.subscriptionsMap[msg.subscription_id]) {
            this.sendSubscriptionFailed("A subscription with id " + msg.subscription_id + " already exists.", msg.subscription_id);
            return;
        }
        this.callbacks.execute(SUBSCRIPTION_REQUEST, requestContext, streamingMethod);
    };
    ServerStreaming.prototype.sendSubscriptionFailed = function (reason, subscriptionId) {
        var errorMessage = {
            type: "error",
            reason_uri: this.ERR_URI_SUBSCRIPTION_FAILED,
            reason: reason,
            request_id: subscriptionId,
        };
        this.session.sendFireAndForget(errorMessage);
    };
    ServerStreaming.prototype.getStreamId = function (streamingMethod, branchKey) {
        if (typeof branchKey !== "string") {
            branchKey = "";
        }
        var needleBranch = streamingMethod.protocolState.branchKeyToStreamIdMap.filter(function (branch) {
            return branch.key === branchKey;
        })[0];
        var streamId = (needleBranch ? needleBranch.streamId : undefined);
        if (typeof streamId !== "string" || streamId === "") {
            streamId = this.getNextStreamId();
            streamingMethod.protocolState.branchKeyToStreamIdMap.push({ key: branchKey, streamId: streamId });
        }
        return streamId;
    };
    return ServerStreaming;
}());

var ServerProtocol$1 = (function () {
    function ServerProtocol(session, clientRepository, serverRepository, logger) {
        var _this = this;
        this.session = session;
        this.clientRepository = clientRepository;
        this.serverRepository = serverRepository;
        this.logger = logger;
        this.callbacks = lib();
        this.streaming = new ServerStreaming$1(session, clientRepository, serverRepository, logger);
        this.session.on("invoke", function (msg) { return _this.handleInvokeMessage(msg); });
    }
    ServerProtocol.prototype.createStream = function (repoMethod) {
        repoMethod.protocolState.subscriptionsMap = {};
        repoMethod.protocolState.branchKeyToStreamIdMap = [];
        return this.register(repoMethod, true);
    };
    ServerProtocol.prototype.register = function (repoMethod, isStreaming) {
        var _this = this;
        var methodDef = repoMethod.definition;
        var flags = { streaming: isStreaming || false };
        var registerMsg = {
            type: "register",
            methods: [{
                    id: repoMethod.repoId,
                    name: methodDef.name,
                    display_name: methodDef.displayName,
                    description: methodDef.description,
                    version: methodDef.version,
                    flags: flags,
                    object_types: methodDef.objectTypes || methodDef.object_types,
                    input_signature: methodDef.accepts,
                    result_signature: methodDef.returns,
                    restrictions: undefined,
                }],
        };
        return this.session.send(registerMsg, { methodId: repoMethod.repoId })
            .then(function () {
            _this.logger.debug("registered method " + repoMethod.definition.name + " with id " + repoMethod.repoId);
        })
            .catch(function (msg) {
            _this.logger.warn("failed to register method " + repoMethod.definition.name + " with id " + repoMethod.repoId + " - " + JSON.stringify(msg));
            throw msg;
        });
    };
    ServerProtocol.prototype.onInvoked = function (callback) {
        this.callbacks.add("onInvoked", callback);
    };
    ServerProtocol.prototype.methodInvocationResult = function (method, invocationId, err, result) {
        var msg;
        if (err || err === "") {
            msg = {
                type: "error",
                request_id: invocationId,
                reason_uri: "agm.errors.client_error",
                reason: err,
                context: result,
                peer_id: undefined,
            };
        }
        else {
            msg = {
                type: "yield",
                invocation_id: invocationId,
                peer_id: this.session.peerId,
                result: result,
                request_id: undefined,
            };
        }
        this.session.sendFireAndForget(msg);
    };
    ServerProtocol.prototype.unregister = function (method) {
        return __awaiter(this, void 0, void 0, function () {
            var msg;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        msg = {
                            type: "unregister",
                            methods: [method.repoId],
                        };
                        return [4, this.session.send(msg)];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    ServerProtocol.prototype.getBranchList = function (method) {
        return this.streaming.getBranchList(method);
    };
    ServerProtocol.prototype.getSubscriptionList = function (method, branchKey) {
        return this.streaming.getSubscriptionList(method, branchKey);
    };
    ServerProtocol.prototype.closeAllSubscriptions = function (method, branchKey) {
        this.streaming.closeMultipleSubscriptions(method, branchKey);
    };
    ServerProtocol.prototype.pushData = function (method, data, branches) {
        this.streaming.pushData(method, data, branches);
    };
    ServerProtocol.prototype.pushDataToSingle = function (method, subscription, data) {
        this.streaming.pushDataToSingle(method, subscription, data);
    };
    ServerProtocol.prototype.closeSingleSubscription = function (method, subscription) {
        this.streaming.closeSingleSubscription(method, subscription);
    };
    ServerProtocol.prototype.acceptRequestOnBranch = function (requestContext, method, branch) {
        this.streaming.acceptRequestOnBranch(requestContext, method, branch);
    };
    ServerProtocol.prototype.rejectRequest = function (requestContext, method, reason) {
        this.streaming.rejectRequest(requestContext, method, reason);
    };
    ServerProtocol.prototype.onSubRequest = function (callback) {
        this.streaming.onSubRequest(callback);
    };
    ServerProtocol.prototype.onSubAdded = function (callback) {
        this.streaming.onSubAdded(callback);
    };
    ServerProtocol.prototype.onSubRemoved = function (callback) {
        this.streaming.onSubRemoved(callback);
    };
    ServerProtocol.prototype.handleInvokeMessage = function (msg) {
        var invocationId = msg.invocation_id;
        var callerId = msg.caller_id;
        var methodId = msg.method_id;
        var args = msg.arguments_kv;
        var methodList = this.serverRepository.getList();
        var method = methodList.filter(function (m) {
            return m.repoId === methodId;
        })[0];
        if (method === undefined) {
            return;
        }
        var client = this.clientRepository.getServerById(callerId);
        var invocationArgs = { args: args, instance: client.getInfoForUser() };
        this.callbacks.execute("onInvoked", method, invocationId, invocationArgs);
    };
    return ServerProtocol;
}());

var UserSubscription = (function () {
    function UserSubscription(repository, subscriptionData) {
        this.repository = repository;
        this.subscriptionData = subscriptionData;
    }
    Object.defineProperty(UserSubscription.prototype, "requestArguments", {
        get: function () {
            return this.subscriptionData.params.arguments;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserSubscription.prototype, "servers", {
        get: function () {
            var _this = this;
            return this.subscriptionData.trackedServers
                .filter(function (pair) { return pair.subscriptionId; })
                .map(function (pair) { return _this.repository.getServerById(pair.serverId).getInfoForUser(); });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserSubscription.prototype, "serverInstance", {
        get: function () {
            return this.servers[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserSubscription.prototype, "stream", {
        get: function () {
            return this.subscriptionData.method.info;
        },
        enumerable: true,
        configurable: true
    });
    UserSubscription.prototype.onData = function (dataCallback) {
        if (typeof dataCallback !== "function") {
            throw new TypeError("The data callback must be a function.");
        }
        this.subscriptionData.handlers.onData.push(dataCallback);
        if (this.subscriptionData.handlers.onData.length === 1 && this.subscriptionData.queued.data.length > 0) {
            this.subscriptionData.queued.data.forEach(function (dataItem) {
                dataCallback(dataItem);
            });
        }
    };
    UserSubscription.prototype.onClosed = function (closedCallback) {
        if (typeof closedCallback !== "function") {
            throw new TypeError("The callback must be a function.");
        }
        this.subscriptionData.handlers.onClosed.push(closedCallback);
    };
    UserSubscription.prototype.onFailed = function (callback) {
    };
    UserSubscription.prototype.onConnected = function (callback) {
        if (typeof callback !== "function") {
            throw new TypeError("The callback must be a function.");
        }
        this.subscriptionData.handlers.onConnected.push(callback);
    };
    UserSubscription.prototype.close = function () {
        this.subscriptionData.close();
    };
    UserSubscription.prototype.setNewSubscription = function (newSub) {
        this.subscriptionData = newSub;
    };
    return UserSubscription;
}());

var STATUS_AWAITING_ACCEPT$1 = "awaitingAccept";
var STATUS_SUBSCRIBED$1 = "subscribed";
var ERR_MSG_SUB_FAILED$1 = "Subscription failed.";
var ERR_MSG_SUB_REJECTED$1 = "Subscription rejected.";
var ON_CLOSE_MSG_SERVER_INIT$1 = "ServerInitiated";
var ON_CLOSE_MSG_CLIENT_INIT$1 = "ClientInitiated";
var ClientStreaming$1 = (function () {
    function ClientStreaming(session, repository, logger) {
        var _this = this;
        this.session = session;
        this.repository = repository;
        this.logger = logger;
        this.subscriptionsList = {};
        this.subscriptionIdToLocalKeyMap = {};
        this.nextSubLocalKey = 0;
        this.handleErrorSubscribing = function (errorResponse) {
            var tag = errorResponse._tag;
            var subLocalKey = tag.subLocalKey;
            var pendingSub = _this.subscriptionsList[subLocalKey];
            if (typeof pendingSub !== "object") {
                return;
            }
            pendingSub.trackedServers = pendingSub.trackedServers.filter(function (server) {
                return server.serverId !== tag.serverId;
            });
            if (pendingSub.trackedServers.length <= 0) {
                clearTimeout(pendingSub.timeoutId);
                if (pendingSub.status === STATUS_AWAITING_ACCEPT$1) {
                    var reason = (typeof errorResponse.reason === "string" && errorResponse.reason !== "") ?
                        ' Publisher said "' + errorResponse.reason + '".' :
                        " No reason given.";
                    var callArgs = typeof pendingSub.params.arguments === "object" ?
                        JSON.stringify(pendingSub.params.arguments) :
                        "{}";
                    pendingSub.error({
                        message: ERR_MSG_SUB_REJECTED$1 + reason + " Called with:" + callArgs,
                        called_with: pendingSub.params.arguments,
                        method: pendingSub.method.getInfoForUser(),
                    });
                }
                else if (pendingSub.status === STATUS_SUBSCRIBED$1) {
                    _this.callOnClosedHandlers(pendingSub);
                }
                delete _this.subscriptionsList[subLocalKey];
            }
        };
        this.handleSubscribed = function (msg) {
            var subLocalKey = msg._tag.subLocalKey;
            var pendingSub = _this.subscriptionsList[subLocalKey];
            if (typeof pendingSub !== "object") {
                return;
            }
            var serverId = msg._tag.serverId;
            var acceptingServer = pendingSub.trackedServers
                .filter(function (server) {
                return server.serverId === serverId;
            })[0];
            if (typeof acceptingServer !== "object") {
                return;
            }
            acceptingServer.subscriptionId = msg.subscription_id;
            _this.subscriptionIdToLocalKeyMap[msg.subscription_id] = subLocalKey;
            var isFirstResponse = (pendingSub.status === STATUS_AWAITING_ACCEPT$1);
            pendingSub.status = STATUS_SUBSCRIBED$1;
            if (isFirstResponse) {
                var reconnect_1 = !!pendingSub.subscription;
                if (reconnect_1) {
                    pendingSub.subscription.setNewSubscription(pendingSub);
                    pendingSub.success(pendingSub.subscription);
                }
                else {
                    var subsObject = new UserSubscription(_this.repository, pendingSub);
                    pendingSub.subscription = subsObject;
                    pendingSub.success(subsObject);
                }
                pendingSub.handlers.onConnected.forEach(function (handler) {
                    var _a;
                    try {
                        handler((_a = pendingSub.subscription) === null || _a === void 0 ? void 0 : _a.serverInstance, reconnect_1);
                    }
                    catch (e) {
                    }
                });
            }
        };
        this.handleEventData = function (msg) {
            var subLocalKey = _this.subscriptionIdToLocalKeyMap[msg.subscription_id];
            if (typeof subLocalKey === "undefined") {
                return;
            }
            var subscription = _this.subscriptionsList[subLocalKey];
            if (typeof subscription !== "object") {
                return;
            }
            var trackedServersFound = subscription.trackedServers.filter(function (server) {
                return server.subscriptionId === msg.subscription_id;
            });
            if (trackedServersFound.length !== 1) {
                return;
            }
            var isPrivateData = msg.oob;
            var sendingServerId = trackedServersFound[0].serverId;
            var receivedStreamData = function () {
                return {
                    data: msg.data,
                    server: _this.repository.getServerById(sendingServerId).getInfoForUser(),
                    requestArguments: subscription.params.arguments,
                    message: null,
                    private: isPrivateData,
                };
            };
            var onDataHandlers = subscription.handlers.onData;
            var queuedData = subscription.queued.data;
            if (onDataHandlers.length > 0) {
                onDataHandlers.forEach(function (callback) {
                    if (typeof callback === "function") {
                        callback(receivedStreamData());
                    }
                });
            }
            else {
                queuedData.push(receivedStreamData());
            }
        };
        this.handleSubscriptionCancelled = function (msg) {
            var subLocalKey = _this.subscriptionIdToLocalKeyMap[msg.subscription_id];
            if (typeof subLocalKey === "undefined") {
                return;
            }
            var subscription = _this.subscriptionsList[subLocalKey];
            if (typeof subscription !== "object") {
                return;
            }
            var expectedNewLength = subscription.trackedServers.length - 1;
            subscription.trackedServers = subscription.trackedServers.filter(function (server) {
                if (server.subscriptionId === msg.subscription_id) {
                    subscription.queued.closers.push(server.serverId);
                    return false;
                }
                else {
                    return true;
                }
            });
            if (subscription.trackedServers.length !== expectedNewLength) {
                return;
            }
            if (subscription.trackedServers.length <= 0) {
                clearTimeout(subscription.timeoutId);
                _this.callOnClosedHandlers(subscription);
                delete _this.subscriptionsList[subLocalKey];
            }
            delete _this.subscriptionIdToLocalKeyMap[msg.subscription_id];
        };
        session.on("subscribed", this.handleSubscribed);
        session.on("event", this.handleEventData);
        session.on("subscription-cancelled", this.handleSubscriptionCancelled);
    }
    ClientStreaming.prototype.subscribe = function (streamingMethod, params, targetServers, stuff, success, error, existingSub) {
        var _this = this;
        if (targetServers.length === 0) {
            error({
                method: streamingMethod.getInfoForUser(),
                called_with: params.arguments,
                message: ERR_MSG_SUB_FAILED$1 + " No available servers matched the target params.",
            });
            return;
        }
        var subLocalKey = this.getNextSubscriptionLocalKey();
        var pendingSub = this.registerSubscription(subLocalKey, streamingMethod, params, success, error, stuff.methodResponseTimeout, existingSub);
        if (typeof pendingSub !== "object") {
            error({
                method: streamingMethod.getInfoForUser(),
                called_with: params.arguments,
                message: ERR_MSG_SUB_FAILED$1 + " Unable to register the user callbacks.",
            });
            return;
        }
        targetServers.forEach(function (target) {
            var serverId = target.server.id;
            var method = target.methods.find(function (m) { return m.info.name === streamingMethod.info.name; });
            pendingSub.trackedServers.push({
                serverId: serverId,
                subscriptionId: undefined,
            });
            var msg = {
                type: "subscribe",
                server_id: serverId,
                method_id: method.protocolState.id,
                arguments_kv: params.arguments,
            };
            _this.session.send(msg, { serverId: serverId, subLocalKey: subLocalKey })
                .then(function (m) { return _this.handleSubscribed(m); })
                .catch(function (err) { return _this.handleErrorSubscribing(err); });
        });
    };
    ClientStreaming.prototype.drainSubscriptions = function () {
        var existing = Object.values(this.subscriptionsList);
        this.subscriptionsList = {};
        this.subscriptionIdToLocalKeyMap = {};
        return existing;
    };
    ClientStreaming.prototype.getNextSubscriptionLocalKey = function () {
        var current = this.nextSubLocalKey;
        this.nextSubLocalKey += 1;
        return current;
    };
    ClientStreaming.prototype.registerSubscription = function (subLocalKey, method, params, success, error, timeout, existingSub) {
        var _this = this;
        var subsInfo = {
            localKey: subLocalKey,
            status: STATUS_AWAITING_ACCEPT$1,
            method: method,
            params: params,
            success: success,
            error: error,
            trackedServers: [],
            handlers: {
                onData: (existingSub === null || existingSub === void 0 ? void 0 : existingSub.handlers.onData) || [],
                onClosed: (existingSub === null || existingSub === void 0 ? void 0 : existingSub.handlers.onClosed) || [],
                onConnected: (existingSub === null || existingSub === void 0 ? void 0 : existingSub.handlers.onConnected) || []
            },
            queued: {
                data: [],
                closers: [],
            },
            timeoutId: undefined,
            close: function () { return _this.closeSubscription(subLocalKey); },
            subscription: existingSub === null || existingSub === void 0 ? void 0 : existingSub.subscription
        };
        if (!existingSub) {
            if (params.onData) {
                subsInfo.handlers.onData.push(params.onData);
            }
            if (params.onClosed) {
                subsInfo.handlers.onClosed.push(params.onClosed);
            }
            if (params.onConnected) {
                subsInfo.handlers.onConnected.push(params.onConnected);
            }
        }
        this.subscriptionsList[subLocalKey] = subsInfo;
        subsInfo.timeoutId = setTimeout(function () {
            if (_this.subscriptionsList[subLocalKey] === undefined) {
                return;
            }
            var pendingSub = _this.subscriptionsList[subLocalKey];
            if (pendingSub.status === STATUS_AWAITING_ACCEPT$1) {
                error({
                    method: method.getInfoForUser(),
                    called_with: params.arguments,
                    message: ERR_MSG_SUB_FAILED$1 + " Subscription attempt timed out after " + timeout + " ms.",
                });
                delete _this.subscriptionsList[subLocalKey];
            }
            else if (pendingSub.status === STATUS_SUBSCRIBED$1 && pendingSub.trackedServers.length > 0) {
                pendingSub.trackedServers = pendingSub.trackedServers.filter(function (server) {
                    return (typeof server.subscriptionId !== "undefined");
                });
                delete pendingSub.timeoutId;
                if (pendingSub.trackedServers.length <= 0) {
                    _this.callOnClosedHandlers(pendingSub);
                    delete _this.subscriptionsList[subLocalKey];
                }
            }
        }, timeout);
        return subsInfo;
    };
    ClientStreaming.prototype.callOnClosedHandlers = function (subscription, reason) {
        var closersCount = subscription.queued.closers.length;
        var closingServerId = (closersCount > 0) ? subscription.queued.closers[closersCount - 1] : null;
        var closingServer = null;
        if (closingServerId !== undefined && typeof closingServerId === "string") {
            closingServer = this.repository.getServerById(closingServerId).getInfoForUser();
        }
        subscription.handlers.onClosed.forEach(function (callback) {
            if (typeof callback !== "function") {
                return;
            }
            callback({
                message: reason || ON_CLOSE_MSG_SERVER_INIT$1,
                requestArguments: subscription.params.arguments,
                server: closingServer,
                stream: subscription.method,
            });
        });
    };
    ClientStreaming.prototype.closeSubscription = function (subLocalKey) {
        var _this = this;
        var subscription = this.subscriptionsList[subLocalKey];
        if (typeof subscription !== "object") {
            return;
        }
        subscription.trackedServers.forEach(function (server) {
            if (typeof server.subscriptionId === "undefined") {
                return;
            }
            subscription.queued.closers.push(server.serverId);
            _this.session.sendFireAndForget({
                type: "unsubscribe",
                subscription_id: server.subscriptionId,
                reason_uri: "",
                reason: ON_CLOSE_MSG_CLIENT_INIT$1,
            });
            delete _this.subscriptionIdToLocalKeyMap[server.subscriptionId];
        });
        subscription.trackedServers = [];
        this.callOnClosedHandlers(subscription, ON_CLOSE_MSG_CLIENT_INIT$1);
        delete this.subscriptionsList[subLocalKey];
    };
    return ClientStreaming;
}());

var ClientProtocol$1 = (function () {
    function ClientProtocol(session, repository, logger) {
        var _this = this;
        this.session = session;
        this.repository = repository;
        this.logger = logger;
        this.callbacks = lib();
        session.on("peer-added", function (msg) { return _this.handlePeerAdded(msg); });
        session.on("peer-removed", function (msg) { return _this.handlePeerRemoved(msg); });
        session.on("methods-added", function (msg) { return _this.handleMethodsAddedMessage(msg); });
        session.on("methods-removed", function (msg) { return _this.handleMethodsRemovedMessage(msg); });
        this.streaming = new ClientStreaming$1(session, repository, logger);
    }
    ClientProtocol.prototype.subscribe = function (stream, args, targetServers, options, success, error, existingSub) {
        this.streaming.subscribe(stream, args, targetServers, options, success, error, existingSub);
    };
    ClientProtocol.prototype.invoke = function (id, method, args, target) {
        var _this = this;
        var serverId = target.id;
        var methodId = method.protocolState.id;
        var msg = {
            type: "call",
            server_id: serverId,
            method_id: methodId,
            arguments_kv: args,
        };
        return this.session.send(msg, { invocationId: id, serverId: serverId })
            .then(function (m) { return _this.handleResultMessage(m); })
            .catch(function (err) { return _this.handleInvocationError(err); });
    };
    ClientProtocol.prototype.drainSubscriptions = function () {
        return this.streaming.drainSubscriptions();
    };
    ClientProtocol.prototype.handlePeerAdded = function (msg) {
        var newPeerId = msg.new_peer_id;
        var remoteId = msg.identity;
        var isLocal = msg.meta ? msg.meta.local : true;
        var pid = Number(remoteId.process);
        var serverInfo = {
            machine: remoteId.machine,
            pid: isNaN(pid) ? remoteId.process : pid,
            instance: remoteId.instance,
            application: remoteId.application,
            applicationName: remoteId.applicationName,
            environment: remoteId.environment,
            region: remoteId.region,
            user: remoteId.user,
            windowId: remoteId.windowId,
            peerId: newPeerId,
            api: remoteId.api,
            isLocal: isLocal
        };
        this.repository.addServer(serverInfo, newPeerId);
    };
    ClientProtocol.prototype.handlePeerRemoved = function (msg) {
        var removedPeerId = msg.removed_id;
        var reason = msg.reason;
        this.repository.removeServerById(removedPeerId, reason);
    };
    ClientProtocol.prototype.handleMethodsAddedMessage = function (msg) {
        var _this = this;
        var serverId = msg.server_id;
        var methods = msg.methods;
        methods.forEach(function (method) {
            var methodInfo = {
                name: method.name,
                displayName: method.display_name,
                description: method.description,
                version: method.version,
                objectTypes: method.object_types || [],
                accepts: method.input_signature,
                returns: method.result_signature,
                supportsStreaming: typeof method.flags !== "undefined" ? method.flags.streaming : false,
            };
            _this.repository.addServerMethod(serverId, methodInfo, { id: method.id });
        });
    };
    ClientProtocol.prototype.handleMethodsRemovedMessage = function (msg) {
        var _this = this;
        var serverId = msg.server_id;
        var methodIdList = msg.methods;
        var server = this.repository.getServerById(serverId);
        var serverMethodKeys = Object.keys(server.methods);
        serverMethodKeys.forEach(function (methodKey) {
            var method = server.methods[methodKey];
            if (methodIdList.indexOf(method.protocolState.id) > -1) {
                _this.repository.removeServerMethod(serverId, methodKey);
            }
        });
    };
    ClientProtocol.prototype.handleResultMessage = function (msg) {
        var invocationId = msg._tag.invocationId;
        var result = msg.result;
        var serverId = msg._tag.serverId;
        var server = this.repository.getServerById(serverId);
        return {
            invocationId: invocationId,
            result: result,
            instance: server.getInfoForUser(),
            status: InvokeStatus.Success,
            message: ""
        };
    };
    ClientProtocol.prototype.handleInvocationError = function (msg) {
        this.logger.debug("handle invocation error " + JSON.stringify(msg));
        var invocationId = msg._tag.invocationId;
        var serverId = msg._tag.serverId;
        var server = this.repository.getServerById(serverId);
        var message = msg.reason;
        var context = msg.context;
        return {
            invocationId: invocationId,
            result: context,
            instance: server.getInfoForUser(),
            status: InvokeStatus.Error,
            message: message
        };
    };
    return ClientProtocol;
}());

function gW3ProtocolFactory (instance, connection, clientRepository, serverRepository, libConfig, getAGM) {
    var logger = libConfig.logger.subLogger("gw3-protocol");
    var resolveReadyPromise;
    var readyPromise = new Promise(function (resolve) {
        resolveReadyPromise = resolve;
    });
    var session = connection.domain("agm", logger.subLogger("domain"), ["subscribed"]);
    var server = new ServerProtocol$1(session, clientRepository, serverRepository, logger.subLogger("server"));
    var client = new ClientProtocol$1(session, clientRepository, logger.subLogger("client"));
    function handleReconnect() {
        logger.info("reconnected - will replay registered methods and subscriptions");
        var existingSubscriptions = client.drainSubscriptions();
        existingSubscriptions.forEach(function (sub) {
            var methodInfo = sub.method.info;
            var params = Object.assign({}, sub.params);
            getAGM().client.subscribe(methodInfo, params, undefined, undefined, sub);
        });
        var registeredMethods = serverRepository.getList();
        serverRepository.reset();
        for (var _i = 0, registeredMethods_1 = registeredMethods; _i < registeredMethods_1.length; _i++) {
            var method = registeredMethods_1[_i];
            var def = method.definition;
            if (method.stream) {
                getAGM().server.createStream(def, method.streamCallbacks, undefined, undefined, method.stream);
            }
            else if (method.theFunction.userCallback) {
                getAGM().register(def, method.theFunction.userCallback);
            }
            else if (method.theFunction.userCallbackAsync) {
                getAGM().registerAsync(def, method.theFunction.userCallbackAsync);
            }
        }
    }
    function handleInitialJoin() {
        resolveReadyPromise({
            client: client,
            server: server,
        });
        resolveReadyPromise = undefined;
    }
    session.onLeft(function () {
        clientRepository.reset();
    });
    session.onJoined(function (reconnect) {
        clientRepository.addServer(instance, connection.peerId);
        if (reconnect) {
            handleReconnect();
        }
        else {
            handleInitialJoin();
        }
    });
    session.join();
    return readyPromise;
}

var ServerSubscription = (function () {
    function ServerSubscription(protocol, repoMethod, subscription) {
        this.protocol = protocol;
        this.repoMethod = repoMethod;
        this.subscription = subscription;
    }
    Object.defineProperty(ServerSubscription.prototype, "stream", {
        get: function () { return this.repoMethod.stream; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServerSubscription.prototype, "arguments", {
        get: function () { return this.subscription.arguments || {}; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServerSubscription.prototype, "branchKey", {
        get: function () { return this.subscription.branchKey; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServerSubscription.prototype, "instance", {
        get: function () { return this.subscription.instance; },
        enumerable: true,
        configurable: true
    });
    ServerSubscription.prototype.close = function () {
        this.protocol.server.closeSingleSubscription(this.repoMethod, this.subscription);
    };
    ServerSubscription.prototype.push = function (data) {
        this.protocol.server.pushDataToSingle(this.repoMethod, this.subscription, data);
    };
    return ServerSubscription;
}());

var Request = (function () {
    function Request(protocol, repoMethod, requestContext) {
        this.protocol = protocol;
        this.repoMethod = repoMethod;
        this.requestContext = requestContext;
        this.arguments = requestContext.arguments;
        this.instance = requestContext.instance;
    }
    Request.prototype.accept = function () {
        this.protocol.server.acceptRequestOnBranch(this.requestContext, this.repoMethod, "");
    };
    Request.prototype.acceptOnBranch = function (branch) {
        this.protocol.server.acceptRequestOnBranch(this.requestContext, this.repoMethod, branch);
    };
    Request.prototype.reject = function (reason) {
        this.protocol.server.rejectRequest(this.requestContext, this.repoMethod, reason);
    };
    return Request;
}());

var ServerStreaming$2 = (function () {
    function ServerStreaming(protocol, server) {
        var _this = this;
        this.protocol = protocol;
        this.server = server;
        protocol.server.onSubRequest(function (rc, rm) { return _this.handleSubRequest(rc, rm); });
        protocol.server.onSubAdded(function (sub, rm) { return _this.handleSubAdded(sub, rm); });
        protocol.server.onSubRemoved(function (sub, rm) { return _this.handleSubRemoved(sub, rm); });
    }
    ServerStreaming.prototype.handleSubRequest = function (requestContext, repoMethod) {
        if (!(repoMethod &&
            repoMethod.streamCallbacks &&
            typeof repoMethod.streamCallbacks.subscriptionRequestHandler === "function")) {
            return;
        }
        var request = new Request(this.protocol, repoMethod, requestContext);
        repoMethod.streamCallbacks.subscriptionRequestHandler(request);
    };
    ServerStreaming.prototype.handleSubAdded = function (subscription, repoMethod) {
        if (!(repoMethod &&
            repoMethod.streamCallbacks &&
            typeof repoMethod.streamCallbacks.subscriptionAddedHandler === "function")) {
            return;
        }
        var sub = new ServerSubscription(this.protocol, repoMethod, subscription);
        repoMethod.streamCallbacks.subscriptionAddedHandler(sub);
    };
    ServerStreaming.prototype.handleSubRemoved = function (subscription, repoMethod) {
        if (!(repoMethod &&
            repoMethod.streamCallbacks &&
            typeof repoMethod.streamCallbacks.subscriptionRemovedHandler === "function")) {
            return;
        }
        var sub = new ServerSubscription(this.protocol, repoMethod, subscription);
        repoMethod.streamCallbacks.subscriptionRemovedHandler(sub);
    };
    return ServerStreaming;
}());

var ServerBranch = (function () {
    function ServerBranch(key, protocol, repoMethod) {
        this.key = key;
        this.protocol = protocol;
        this.repoMethod = repoMethod;
    }
    ServerBranch.prototype.subscriptions = function () {
        var _this = this;
        var subList = this.protocol.server.getSubscriptionList(this.repoMethod, this.key);
        return subList.map(function (sub) {
            return new ServerSubscription(_this.protocol, _this.repoMethod, sub);
        });
    };
    ServerBranch.prototype.close = function () {
        this.protocol.server.closeAllSubscriptions(this.repoMethod, this.key);
    };
    ServerBranch.prototype.push = function (data) {
        this.protocol.server.pushData(this.repoMethod, data, [this.key]);
    };
    return ServerBranch;
}());

var ServerStream = (function () {
    function ServerStream(_protocol, _repoMethod, _server) {
        this._protocol = _protocol;
        this._repoMethod = _repoMethod;
        this._server = _server;
        this.name = this._repoMethod.definition.name;
    }
    ServerStream.prototype.branches = function (key) {
        var _this = this;
        var bList = this._protocol.server.getBranchList(this._repoMethod);
        if (key) {
            if (bList.indexOf(key) > -1) {
                return new ServerBranch(key, this._protocol, this._repoMethod);
            }
            return undefined;
        }
        else {
            return bList.map(function (branchKey) {
                return new ServerBranch(branchKey, _this._protocol, _this._repoMethod);
            });
        }
    };
    ServerStream.prototype.subscriptions = function () {
        var _this = this;
        var subList = this._protocol.server.getSubscriptionList(this._repoMethod);
        return subList.map(function (sub) {
            return new ServerSubscription(_this._protocol, _this._repoMethod, sub);
        });
    };
    Object.defineProperty(ServerStream.prototype, "definition", {
        get: function () {
            var def2 = this._repoMethod.definition;
            return {
                accepts: def2.accepts,
                description: def2.description,
                displayName: def2.displayName,
                name: def2.name,
                objectTypes: def2.objectTypes,
                returns: def2.returns,
                supportsStreaming: def2.supportsStreaming,
            };
        },
        enumerable: true,
        configurable: true
    });
    ServerStream.prototype.close = function () {
        this._protocol.server.closeAllSubscriptions(this._repoMethod);
        this._server.unregister(this._repoMethod.definition, true);
    };
    ServerStream.prototype.push = function (data, branches) {
        if (typeof branches !== "string" && !Array.isArray(branches) && branches !== undefined) {
            throw new Error("invalid branches should be string or string array");
        }
        if (typeof data !== "object") {
            throw new Error("Invalid arguments. Data must be an object.");
        }
        this._protocol.server.pushData(this._repoMethod, data, branches);
    };
    ServerStream.prototype.updateRepoMethod = function (repoMethod) {
        this._repoMethod = repoMethod;
    };
    return ServerStream;
}());

var removeProp = function (object, propNameToRemove) {
    return Object.keys(object).reduce(function (reducedObj, currProp) {
        if (currProp !== propNameToRemove) {
            reducedObj[currProp] = object[currProp];
        }
        return reducedObj;
    }, {});
};

var Server = (function () {
    function Server(protocol, serverRepository) {
        this.protocol = protocol;
        this.serverRepository = serverRepository;
        this.invocations = 0;
        this.currentlyUnregistering = {};
        this.streaming = new ServerStreaming$2(protocol, this);
        this.protocol.server.onInvoked(this.onMethodInvoked.bind(this));
    }
    Server.prototype.createStream = function (streamDef, callbacks, successCallback, errorCallback, existingStream) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            if (!streamDef) {
                reject("The stream name must be unique! Please, provide either a unique string for a stream name to \u201Cglue.interop.createStream()\u201D or a \u201CmethodDefinition\u201D object with a unique \u201Cname\u201D property for the stream.");
                return;
            }
            var streamMethodDefinition;
            if (typeof streamDef === "string") {
                streamMethodDefinition = { name: "" + streamDef };
            }
            else {
                streamMethodDefinition = __assign({}, streamDef);
            }
            if (!streamMethodDefinition.name) {
                return reject("The \u201Cname\u201D property is required for the \u201CstreamDefinition\u201D object and must be unique. Stream definition: " + JSON.stringify(streamMethodDefinition));
            }
            var nameAlreadyExists = _this.serverRepository.getList()
                .some(function (serverMethod) { return serverMethod.definition.name === streamMethodDefinition.name; });
            if (nameAlreadyExists) {
                return reject("A stream with the name \"" + streamMethodDefinition.name + "\" already exists! Please, provide a unique name for the stream.");
            }
            streamMethodDefinition.supportsStreaming = true;
            if (!callbacks) {
                callbacks = {};
            }
            if (typeof callbacks.subscriptionRequestHandler !== "function") {
                callbacks.subscriptionRequestHandler = function (request) {
                    request.accept();
                };
            }
            var repoMethod = {
                definition: streamMethodDefinition,
                streamCallbacks: callbacks,
                protocolState: {},
            };
            _this.serverRepository.add(repoMethod);
            _this.protocol.server.createStream(repoMethod)
                .then(function () {
                var streamUserObject;
                if (existingStream) {
                    streamUserObject = existingStream;
                    existingStream.updateRepoMethod(repoMethod);
                }
                else {
                    streamUserObject = new ServerStream(_this.protocol, repoMethod, _this);
                }
                repoMethod.stream = streamUserObject;
                resolve(streamUserObject);
            })
                .catch(function (err) {
                _this.serverRepository.remove(repoMethod.repoId);
                reject(err);
            });
        });
        return promisify(promise, successCallback, errorCallback);
    };
    Server.prototype.register = function (methodDefinition, callback) {
        var _this = this;
        if (!methodDefinition) {
            return Promise.reject("Method definition is required. Please, provide either a unique string for a method name or a \u201CmethodDefinition\u201D object with a required \u201Cname\u201D property.");
        }
        if (typeof callback !== "function") {
            return Promise.reject("The second parameter must be a callback function. Method: " + (typeof methodDefinition === "string" ? methodDefinition : methodDefinition.name));
        }
        var wrappedCallbackFunction = function (context, resultCallback) { return __awaiter(_this, void 0, void 0, function () {
            var result, resultValue, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        result = callback(context.args, context.instance);
                        if (!(result && typeof result.then === "function")) return [3, 2];
                        return [4, result];
                    case 1:
                        resultValue = _a.sent();
                        resultCallback(null, resultValue);
                        return [3, 3];
                    case 2:
                        resultCallback(null, result);
                        _a.label = 3;
                    case 3: return [3, 5];
                    case 4:
                        e_1 = _a.sent();
                        if (!e_1) {
                            e_1 = "";
                        }
                        resultCallback(e_1, e_1);
                        return [3, 5];
                    case 5: return [2];
                }
            });
        }); };
        wrappedCallbackFunction.userCallback = callback;
        return this.registerCore(methodDefinition, wrappedCallbackFunction);
    };
    Server.prototype.registerAsync = function (methodDefinition, callback) {
        if (!methodDefinition) {
            return Promise.reject("Method definition is required. Please, provide either a unique string for a method name or a \u201CmethodDefinition\u201D object with a required \u201Cname\u201D property.");
        }
        if (typeof callback !== "function") {
            return Promise.reject("The second parameter must be a callback function. Method: " + (typeof methodDefinition === "string" ? methodDefinition : methodDefinition.name));
        }
        var wrappedCallback = function (context, resultCallback) {
            try {
                var resultCalled_1 = false;
                var success = function (result) {
                    if (!resultCalled_1) {
                        resultCallback(null, result);
                    }
                    resultCalled_1 = true;
                };
                var error = function (e) {
                    if (!resultCalled_1) {
                        if (!e) {
                            e = "";
                        }
                        resultCallback(e, e);
                    }
                    resultCalled_1 = true;
                };
                var methodResult = callback(context.args, context.instance, success, error);
                if (methodResult && typeof methodResult.then === "function") {
                    methodResult
                        .then(success)
                        .catch(error);
                }
            }
            catch (e) {
                resultCallback(e, null);
            }
        };
        wrappedCallback.userCallbackAsync = callback;
        return this.registerCore(methodDefinition, wrappedCallback);
    };
    Server.prototype.unregister = function (methodFilter, forStream) {
        if (forStream === void 0) { forStream = false; }
        return __awaiter(this, void 0, void 0, function () {
            var methodDefinition, methodToBeRemoved;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (methodFilter === undefined) {
                            return [2, Promise.reject("Please, provide either a unique string for a name or an object containing a \u201Cname\u201D property.")];
                        }
                        if (!(typeof methodFilter === "function")) return [3, 2];
                        return [4, this.unregisterWithPredicate(methodFilter, forStream)];
                    case 1:
                        _a.sent();
                        return [2];
                    case 2:
                        if (typeof methodFilter === "string") {
                            methodDefinition = { name: methodFilter };
                        }
                        else {
                            methodDefinition = methodFilter;
                        }
                        if (methodDefinition.name === undefined) {
                            return [2, Promise.reject("Method name is required. Cannot find a method if the method name is undefined!")];
                        }
                        methodToBeRemoved = this.serverRepository.getList().find(function (serverMethod) {
                            return serverMethod.definition.name === methodDefinition.name
                                && (serverMethod.definition.supportsStreaming || false) === forStream;
                        });
                        if (!methodToBeRemoved) {
                            return [2, Promise.reject("Method with a name \"" + methodDefinition.name + "\" does not exist or is not registered by your application!")];
                        }
                        return [4, this.removeMethodsOrStreams([methodToBeRemoved])];
                    case 3:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    Server.prototype.unregisterWithPredicate = function (filterPredicate, forStream) {
        return __awaiter(this, void 0, void 0, function () {
            var methodsOrStreamsToRemove;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        methodsOrStreamsToRemove = this.serverRepository.getList()
                            .filter(function (sm) { return filterPredicate(sm.definition); })
                            .filter(function (serverMethod) {
                            return (serverMethod.definition.supportsStreaming || false) === forStream;
                        });
                        if (!methodsOrStreamsToRemove || methodsOrStreamsToRemove.length === 0) {
                            return [2, Promise.reject("Could not find a " + (forStream ? "stream" : "method") + " matching the specified condition!")];
                        }
                        return [4, this.removeMethodsOrStreams(methodsOrStreamsToRemove)];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    Server.prototype.removeMethodsOrStreams = function (methodsToRemove) {
        var _this = this;
        var methodUnregPromises = [];
        methodsToRemove.forEach(function (method) {
            var promise = _this.protocol.server.unregister(method)
                .then(function () {
                _this.serverRepository.remove(method.repoId);
            });
            methodUnregPromises.push(promise);
            _this.addAsCurrentlyUnregistering(method.definition.name, promise);
        });
        return Promise.all(methodUnregPromises);
    };
    Server.prototype.addAsCurrentlyUnregistering = function (methodName, promise) {
        return __awaiter(this, void 0, void 0, function () {
            var timeout;
            var _this = this;
            return __generator(this, function (_a) {
                timeout = new Promise(function (resolve) { return setTimeout(resolve, 5000); });
                this.currentlyUnregistering[methodName] = Promise.race([promise, timeout]).then(function () {
                    removeProp(_this.currentlyUnregistering, methodName);
                });
                return [2];
            });
        });
    };
    Server.prototype.registerCore = function (method, theFunction) {
        return __awaiter(this, void 0, void 0, function () {
            var methodDefinition, unregisterInProgress, nameAlreadyExists, repoMethod;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof method === "string") {
                            methodDefinition = { name: "" + method };
                        }
                        else {
                            methodDefinition = __assign({}, method);
                        }
                        if (!methodDefinition.name) {
                            return [2, Promise.reject("Please, provide a (unique) string value for the \u201Cname\u201D property in the \u201CmethodDefinition\u201D object: " + JSON.stringify(method))];
                        }
                        unregisterInProgress = this.currentlyUnregistering[methodDefinition.name];
                        if (!unregisterInProgress) return [3, 2];
                        return [4, unregisterInProgress];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        nameAlreadyExists = this.serverRepository.getList()
                            .some(function (serverMethod) { return serverMethod.definition.name === methodDefinition.name; });
                        if (nameAlreadyExists) {
                            return [2, Promise.reject("A method with the name \"" + methodDefinition.name + "\" already exists! Please, provide a unique name for the method.")];
                        }
                        if (methodDefinition.supportsStreaming) {
                            return [2, Promise.reject("When you create methods with \u201Cglue.interop.register()\u201D or \u201Cglue.interop.registerAsync()\u201D the property \u201CsupportsStreaming\u201D cannot be \u201Ctrue\u201D. If you want \u201C" + methodDefinition.name + "\u201D to be a stream, please use the \u201Cglue.interop.createStream()\u201D method.")];
                        }
                        repoMethod = this.serverRepository.add({
                            definition: methodDefinition,
                            theFunction: theFunction,
                            protocolState: {},
                        });
                        return [2, this.protocol.server.register(repoMethod)
                                .catch(function (err) {
                                _this.serverRepository.remove(repoMethod.repoId);
                                throw err;
                            })];
                }
            });
        });
    };
    Server.prototype.containsProps = function (filter, methodDefinition) {
        var filterProps = Object.keys(filter)
            .filter(function (prop) {
            return typeof filter[prop] !== "function"
                && prop !== "object_types"
                && prop !== "display_name";
        });
        var methodDefProps = Object.keys(methodDefinition);
        var uniqProps = Array.from(new Set(__spreadArrays(filterProps, methodDefProps)));
        return uniqProps.reduce(function (isMatch, prop) {
            var filterValue = filter[prop];
            var methodDefValue = methodDefinition[prop];
            if (prop === "supportsStreaming") {
                methodDefValue = methodDefValue || false;
                filterValue = filterValue || false;
            }
            if (prop === "objectTypes" && filterValue !== undefined && methodDefValue !== undefined) {
                if (filterValue.length !== methodDefValue.length) {
                    isMatch = false;
                }
                else {
                    var firstObjType = filterValue.sort();
                    var secondObjTypes_1 = methodDefValue.sort();
                    var hasADifference = firstObjType.some(function (objType, index) { return objType !== secondObjTypes_1[index]; });
                    if (hasADifference) {
                        isMatch = false;
                    }
                }
            }
            else if (filterValue !== methodDefValue) {
                isMatch = false;
            }
            return isMatch;
        }, true);
    };
    Server.prototype.onMethodInvoked = function (methodToExecute, invocationId, invocationArgs) {
        var _this = this;
        if (!methodToExecute) {
            return;
        }
        methodToExecute.theFunction(invocationArgs, function (err, result) {
            if (err !== undefined && err !== null) {
                if (err.message && typeof err.message === "string") {
                    err = err.message;
                }
                else if (typeof err !== "string") {
                    try {
                        err = JSON.stringify(err);
                    }
                    catch (unStrException) {
                        err = "un-stringifyable error in onMethodInvoked! Top level prop names: " + Object.keys(err);
                    }
                }
            }
            if (!result || typeof result !== "object" || result.constructor === Array) {
                result = { _result: result };
            }
            _this.protocol.server.methodInvocationResult(methodToExecute, invocationId, err, result);
        });
    };
    return Server;
}());

var AGMImpl = (function () {
    function AGMImpl(protocol, clientRepository, serverRepository, instance, configuration) {
        this.client = new Client(protocol, clientRepository, instance, configuration);
        this.server = new Server(protocol, serverRepository);
        this.instance = instance;
    }
    AGMImpl.prototype.serverRemoved = function (callback) {
        return this.client.serverRemoved(callback);
    };
    AGMImpl.prototype.serverAdded = function (callback) {
        return this.client.serverAdded(callback);
    };
    AGMImpl.prototype.serverMethodRemoved = function (callback) {
        return this.client.serverMethodRemoved(callback);
    };
    AGMImpl.prototype.serverMethodAdded = function (callback) {
        return this.client.serverMethodAdded(callback);
    };
    AGMImpl.prototype.methodRemoved = function (callback) {
        return this.client.methodRemoved(callback);
    };
    AGMImpl.prototype.methodAdded = function (callback) {
        return this.client.methodAdded(callback);
    };
    AGMImpl.prototype.methodsForInstance = function (instance) {
        return this.client.methodsForInstance(instance);
    };
    AGMImpl.prototype.methods = function (methodFilter) {
        return this.client.methods(methodFilter);
    };
    AGMImpl.prototype.servers = function (methodFilter) {
        return this.client.servers(methodFilter);
    };
    AGMImpl.prototype.subscribe = function (method, options, successCallback, errorCallback) {
        return this.client.subscribe(method, options, successCallback, errorCallback);
    };
    AGMImpl.prototype.createStream = function (streamDef, options, successCallback, errorCallback) {
        return this.server.createStream(streamDef, options, successCallback, errorCallback);
    };
    AGMImpl.prototype.unregister = function (methodFilter) {
        return this.server.unregister(methodFilter);
    };
    AGMImpl.prototype.registerAsync = function (methodDefinition, callback) {
        return this.server.registerAsync(methodDefinition, callback);
    };
    AGMImpl.prototype.register = function (methodDefinition, callback) {
        return this.server.register(methodDefinition, callback);
    };
    AGMImpl.prototype.invoke = function (methodFilter, argumentObj, target, additionalOptions, success, error) {
        return this.client.invoke(methodFilter, argumentObj, target, additionalOptions, success, error);
    };
    AGMImpl.prototype.updateInstance = function (newInstance) {
        if (this.instance.machine === undefined) {
            this.instance.machine = newInstance.MachineName || newInstance.machine;
        }
        if (this.instance.user === undefined) {
            this.instance.user = newInstance.UserName || newInstance.user;
        }
        if (this.instance.environment === undefined) {
            this.instance.environment = newInstance.Environment || newInstance.environment;
        }
        if (this.instance.region === undefined) {
            this.instance.region = newInstance.Region || newInstance.region;
        }
    };
    return AGMImpl;
}());

var ClientRepository = (function () {
    function ClientRepository() {
        this.servers = {};
        this.methodsCount = {};
        this.callbacks = lib();
    }
    ClientRepository.prototype.addServer = function (info, serverId) {
        var current = this.servers[serverId];
        if (current) {
            return current.id;
        }
        var serverEntry = {
            id: serverId,
            info: info,
            methods: {},
            getInfoForUser: function () {
                return new InstanceWrapper(serverEntry.info).unwrap();
            },
        };
        this.servers[serverId] = serverEntry;
        this.callbacks.execute("onServerAdded", serverEntry);
        return serverId;
    };
    ClientRepository.prototype.removeServerById = function (id, reason) {
        var _this = this;
        var server = this.servers[id];
        Object.keys(server.methods).forEach(function (methodId) {
            _this.removeServerMethod(id, methodId);
        });
        delete this.servers[id];
        this.callbacks.execute("onServerRemoved", server, reason);
    };
    ClientRepository.prototype.addServerMethod = function (serverId, method, protocolState) {
        if (!protocolState) {
            protocolState = {};
        }
        var server = this.servers[serverId];
        if (!server) {
            throw new Error("server does not exists");
        }
        var methodId = this.createMethodId(method);
        if (server.methods[methodId]) {
            return;
        }
        var that = this;
        var methodEntity = {
            id: methodId,
            info: method,
            getInfoForUser: function () {
                var result = that.createUserMethodInfo(methodEntity.info);
                result.getServers = function () {
                    return that.getServersByMethod(methodId);
                };
                return result;
            },
            protocolState: protocolState,
        };
        server.methods[methodId] = methodEntity;
        if (!this.methodsCount[methodId]) {
            this.methodsCount[methodId] = 0;
            this.callbacks.execute("onMethodAdded", methodEntity);
        }
        this.methodsCount[methodId] = this.methodsCount[methodId] + 1;
        this.callbacks.execute("onServerMethodAdded", server, methodEntity);
    };
    ClientRepository.prototype.createMethodId = function (methodInfo) {
        var accepts = methodInfo.accepts !== undefined ? methodInfo.accepts : "";
        var returns = methodInfo.returns !== undefined ? methodInfo.returns : "";
        return (methodInfo.name + accepts + returns).toLowerCase();
    };
    ClientRepository.prototype.removeServerMethod = function (serverId, methodId) {
        var server = this.servers[serverId];
        if (!server) {
            throw new Error("server does not exists");
        }
        var method = server.methods[methodId];
        delete server.methods[methodId];
        this.methodsCount[methodId] = this.methodsCount[methodId] - 1;
        if (this.methodsCount[methodId] === 0) {
            this.callbacks.execute("onMethodRemoved", method);
        }
        this.callbacks.execute("onServerMethodRemoved", server, method);
    };
    ClientRepository.prototype.getMethods = function () {
        var _this = this;
        var allMethods = {};
        Object.keys(this.servers).forEach(function (serverId) {
            var server = _this.servers[serverId];
            Object.keys(server.methods).forEach(function (methodId) {
                var method = server.methods[methodId];
                allMethods[method.id] = method;
            });
        });
        var methodsAsArray = Object.keys(allMethods).map(function (id) {
            return allMethods[id];
        });
        return methodsAsArray;
    };
    ClientRepository.prototype.getServers = function () {
        var _this = this;
        var allServers = [];
        Object.keys(this.servers).forEach(function (serverId) {
            var server = _this.servers[serverId];
            allServers.push(server);
        });
        return allServers;
    };
    ClientRepository.prototype.getServerMethodsById = function (serverId) {
        var server = this.servers[serverId];
        return Object.keys(server.methods).map(function (id) {
            return server.methods[id];
        });
    };
    ClientRepository.prototype.onServerAdded = function (callback) {
        var unsubscribeFunc = this.callbacks.add("onServerAdded", callback);
        var serversWithMethodsToReplay = this.getServers();
        return this.returnUnsubWithDelayedReplay(unsubscribeFunc, serversWithMethodsToReplay, callback);
    };
    ClientRepository.prototype.onMethodAdded = function (callback) {
        var unsubscribeFunc = this.callbacks.add("onMethodAdded", callback);
        var methodsToReplay = this.getMethods();
        return this.returnUnsubWithDelayedReplay(unsubscribeFunc, methodsToReplay, callback);
    };
    ClientRepository.prototype.onServerMethodAdded = function (callback) {
        var unsubscribeFunc = this.callbacks.add("onServerMethodAdded", callback);
        var unsubCalled = false;
        var servers = this.getServers();
        setTimeout(function () {
            servers.forEach(function (server) {
                var methods = server.methods;
                Object.keys(methods).forEach(function (methodId) {
                    if (!unsubCalled) {
                        callback(server, methods[methodId]);
                    }
                });
            });
        }, 0);
        return function () {
            unsubCalled = true;
            unsubscribeFunc();
        };
    };
    ClientRepository.prototype.onMethodRemoved = function (callback) {
        var unsubscribeFunc = this.callbacks.add("onMethodRemoved", callback);
        return unsubscribeFunc;
    };
    ClientRepository.prototype.onServerRemoved = function (callback) {
        var unsubscribeFunc = this.callbacks.add("onServerRemoved", callback);
        return unsubscribeFunc;
    };
    ClientRepository.prototype.onServerMethodRemoved = function (callback) {
        var unsubscribeFunc = this.callbacks.add("onServerMethodRemoved", callback);
        return unsubscribeFunc;
    };
    ClientRepository.prototype.getServerById = function (id) {
        return this.servers[id];
    };
    ClientRepository.prototype.reset = function () {
        var _this = this;
        Object.keys(this.servers).forEach(function (key) {
            _this.removeServerById(key, "reset");
        });
        this.servers = {};
        this.methodsCount = {};
    };
    ClientRepository.prototype.createUserServerInfo = function (serverInfo) {
        return {
            machine: serverInfo.machine,
            pid: serverInfo.pid,
            user: serverInfo.user,
            application: serverInfo.application,
            applicationName: serverInfo.applicationName,
            environment: serverInfo.environment,
            region: serverInfo.region,
            instance: serverInfo.instance,
            windowId: serverInfo.windowId,
            peerId: serverInfo.peerId,
            isLocal: serverInfo.isLocal,
            api: serverInfo.api
        };
    };
    ClientRepository.prototype.createUserMethodInfo = function (methodInfo) {
        var result = {
            name: methodInfo.name,
            accepts: methodInfo.accepts,
            returns: methodInfo.returns,
            description: methodInfo.description,
            displayName: methodInfo.displayName,
            objectTypes: methodInfo.objectTypes,
            supportsStreaming: methodInfo.supportsStreaming,
        };
        result.object_types = methodInfo.objectTypes;
        result.display_name = methodInfo.displayName;
        result.version = methodInfo.version;
        return result;
    };
    ClientRepository.prototype.getServersByMethod = function (id) {
        var _this = this;
        var allServers = [];
        Object.keys(this.servers).forEach(function (serverId) {
            var server = _this.servers[serverId];
            Object.keys(server.methods).forEach(function (methodId) {
                if (methodId === id) {
                    allServers.push(server.getInfoForUser());
                }
            });
        });
        return allServers;
    };
    ClientRepository.prototype.returnUnsubWithDelayedReplay = function (unsubscribeFunc, collectionToReplay, callback) {
        var unsubCalled = false;
        setTimeout(function () {
            collectionToReplay.forEach(function (item) {
                if (!unsubCalled) {
                    callback(item);
                }
            });
        }, 0);
        return function () {
            unsubCalled = true;
            unsubscribeFunc();
        };
    };
    return ClientRepository;
}());

var ServerRepository = (function () {
    function ServerRepository() {
        this.nextId = 0;
        this.methods = [];
    }
    ServerRepository.prototype.add = function (method) {
        if (typeof method !== "object") {
            return;
        }
        if (method.repoId !== undefined) {
            return;
        }
        method.repoId = String(this.nextId);
        this.nextId += 1;
        this.methods.push(method);
        return method;
    };
    ServerRepository.prototype.remove = function (repoId) {
        if (typeof repoId !== "string") {
            return new TypeError("Expecting a string");
        }
        this.methods = this.methods.filter(function (m) {
            return m.repoId !== repoId;
        });
    };
    ServerRepository.prototype.getById = function (id) {
        if (typeof id !== "string") {
            return undefined;
        }
        return this.methods.filter(function (m) {
            return m.repoId === id;
        })[0];
    };
    ServerRepository.prototype.getList = function () {
        return this.methods.map(function (m) { return m; });
    };
    ServerRepository.prototype.length = function () {
        return this.methods.length;
    };
    ServerRepository.prototype.reset = function () {
        this.methods = [];
    };
    return ServerRepository;
}());

var agm = (function (configuration) {
    if (!configuration.forceGW && configuration.gdVersion === 2) {
        return nativeAgm(configuration);
    }
    if (typeof configuration === "undefined") {
        throw new Error("configuration is required");
    }
    if (typeof configuration.connection === "undefined") {
        throw new Error("configuration.connections is required");
    }
    var connection = configuration.connection;
    if (typeof configuration.methodResponseTimeout !== "number") {
        configuration.methodResponseTimeout = 30 * 1000;
    }
    if (typeof configuration.waitTimeoutMs !== "number") {
        configuration.waitTimeoutMs = 30 * 1000;
    }
    var clientRepository = new ClientRepository();
    var serverRepository = new ServerRepository();
    var protocolPromise;
    var instance = new InstanceWrapper(configuration.instance, connection);
    var agmImpl;
    if (connection.protocolVersion === 3) {
        protocolPromise = gW3ProtocolFactory(instance.unwrap(), connection, clientRepository, serverRepository, configuration, function () { return agmImpl; });
    }
    else {
        protocolPromise = gW1ProtocolFactory(instance.unwrap(), connection, clientRepository, serverRepository, configuration, function () { return agmImpl; });
    }
    return new Promise(function (resolve, reject) {
        protocolPromise.then(function (protocol) {
            agmImpl = new AGMImpl(protocol, clientRepository, serverRepository, instance.unwrap(), configuration);
            InstanceWrapper.API = agmImpl;
            resolve(agmImpl);
        }).catch(function (err) {
            reject(err);
        });
    });
});

function removeEmptyValues(obj) {
    var cleaned = {};
    Object.keys(obj).forEach(function (key) {
        if (obj[key] !== undefined && obj[key] !== null) {
            cleaned[key] = obj[key];
        }
    });
    return cleaned;
}
function keysMatch(obj1, obj2) {
    var keysObj1 = Object.keys(obj1);
    var allMatch = true;
    keysObj1.forEach(function (key) {
        if (obj1[key] !== obj2[key]) {
            allMatch = false;
        }
    });
    return allMatch;
}

var Protocol = (function () {
    function Protocol(connection, logger, session) {
        var _this = this;
        this.publish = function (topic, data, options) {
            var _a = options || {}, routingKey = _a.routingKey, target = _a.target;
            var args = removeEmptyValues({
                type: "publish",
                topic: topic,
                data: data,
                peer_id: _this.peerId,
                routing_key: routingKey,
                target_identity: target
            });
            _this.session.send(args);
        };
        this.subscribe = function (topic, callback, options) {
            return new Promise(function (resolve, reject) {
                var _a = options || {}, routingKey = _a.routingKey, target = _a.target;
                var args = removeEmptyValues({
                    type: "subscribe",
                    topic: topic,
                    peer_id: _this.peerId,
                    routing_key: routingKey,
                    source: target
                });
                _this.session.send(args)
                    .then(function (response) {
                    var subscription_id = response.subscription_id;
                    _this.subscriptions.push({ subscription_id: subscription_id, topic: topic, callback: callback, source: target });
                    resolve({
                        unsubscribe: function () {
                            _this.session.send({ type: "unsubscribe", subscription_id: subscription_id, peer_id: _this.peerId });
                            _this.subscriptions = _this.subscriptions.filter(function (s) { return s.subscription_id !== subscription_id; });
                            return Promise.resolve();
                        }
                    });
                })
                    .catch(function (error) { return reject(error); });
            });
        };
        this.watchOnEvent = function () {
            _this.session.on("event", function (args) {
                var data = args.data, subscription_id = args.subscription_id;
                var source = args["publisher-identity"];
                var subscription = _this.subscriptions.find(function (s) { return s.subscription_id === subscription_id; });
                if (subscription) {
                    if (!subscription.source) {
                        subscription.callback(data, subscription.topic, source);
                    }
                    else {
                        if (keysMatch(subscription.source, source)) {
                            subscription.callback(data, subscription.topic, source);
                        }
                    }
                }
            });
        };
        this.connection = connection;
        this.logger = logger;
        this.session = session;
        this.peerId = connection.peerId;
        this.subscriptions = [];
    }
    return Protocol;
}());
function ProtocolFactory (connection, logger, session) {
    var protocol = new Protocol(connection, logger, session);
    protocol.watchOnEvent();
    return protocol;
}

var successMessages = ["subscribed", "success"];
var bus = (function (configuration) {
    var connection = configuration.connection, logger = configuration.logger;
    var session = connection.domain("bus", logger, successMessages);
    return new Promise(function (resolve, reject) {
        session.join()
            .then(function () {
            var protocol = ProtocolFactory(connection, logger, session);
            resolve(protocol);
        })
            .catch(reject);
    });
});

var GW_MESSAGE_CREATE_CONTEXT = "create-context";
var GW_MESSAGE_ACTIVITY_CREATED = "created";
var GW_MESSAGE_ACTIVITY_DESTROYED = "destroyed";
var GW_MESSAGE_CONTEXT_CREATED = "context-created";
var GW_MESSAGE_CONTEXT_ADDED = "context-added";
var GW_MESSAGE_SUBSCRIBE_CONTEXT = "subscribe-context";
var GW_MESSAGE_SUBSCRIBED_CONTEXT = "subscribed-context";
var GW_MESSAGE_UNSUBSCRIBE_CONTEXT = "unsubscribe-context";
var GW_MESSAGE_DESTROY_CONTEXT = "destroy-context";
var GW_MESSAGE_CONTEXT_DESTROYED = "context-destroyed";
var GW_MESSAGE_UPDATE_CONTEXT = "update-context";
var GW_MESSAGE_CONTEXT_UPDATED = "context-updated";
var GW_MESSAGE_JOINED_ACTIVITY = "joined";

var ContextMessageReplaySpec = {
    get name() {
        return "context";
    },
    get types() {
        return [
            GW_MESSAGE_CREATE_CONTEXT,
            GW_MESSAGE_ACTIVITY_CREATED,
            GW_MESSAGE_ACTIVITY_DESTROYED,
            GW_MESSAGE_CONTEXT_CREATED,
            GW_MESSAGE_CONTEXT_ADDED,
            GW_MESSAGE_SUBSCRIBE_CONTEXT,
            GW_MESSAGE_SUBSCRIBED_CONTEXT,
            GW_MESSAGE_UNSUBSCRIBE_CONTEXT,
            GW_MESSAGE_DESTROY_CONTEXT,
            GW_MESSAGE_CONTEXT_DESTROYED,
            GW_MESSAGE_UPDATE_CONTEXT,
            GW_MESSAGE_CONTEXT_UPDATED,
            GW_MESSAGE_JOINED_ACTIVITY
        ];
    }
};

var version = "4.8.6";

function prepareConfig (configuration, ext, hc, glue42gd, gdVersion) {
    var globalScope;
    if (typeof window !== "undefined") {
        globalScope = window;
    }
    if (typeof global !== "undefined") {
        globalScope = global;
    }
    globalScope = globalScope || {};
    var uid = shortid();
    var nodeStartingContext;
    if (Utils.isNode()) {
        var startingContextString = process.env._GD_STARTING_CONTEXT_;
        if (startingContextString) {
            try {
                nodeStartingContext = JSON.parse(startingContextString);
            }
            catch (_a) {
            }
        }
    }
    var masterConfig = globalScope.GLUE_CONFIG || {};
    var dynamicDefaults = globalScope.GLUE_DEFAULT_CONFIG || {};
    var hardDefaults = getHardDefaults();
    var metricsIdentity = {
        system: getConfigProp("metrics", "system"),
        service: getConfigProp("metrics", "service"),
        instance: getConfigProp("metrics", "instance")
    };
    var disableAutoAppSystem = getConfigProp("metrics", "disableAutoAppSystem");
    function getMetrics() {
        return {
            identity: metricsIdentity,
            disableAutoAppSystem: disableAutoAppSystem
        };
    }
    function getGateway() {
        var _a;
        var force = getConfigProp("gateway", "force");
        var gw = hc === undefined || force;
        if (gw) {
            var gwConfig = getConfigProp("gateway");
            var protocolVersion = getConfigProp("gateway", "protocolVersion");
            var reconnectInterval = getConfigProp("gateway", "reconnectInterval");
            var reconnectAttempts = getConfigProp("gateway", "reconnectAttempts");
            var ws = gwConfig.ws;
            var http = gwConfig.http;
            var inproc = gwConfig.inproc;
            if (!ws && !http && !inproc) {
                if (Utils.isNode() || ("WebSocket" in window && window.WebSocket.CLOSING === 2)) {
                    ws = getConfigProp("gateway", "ws");
                }
                else {
                    http = getConfigProp("gateway", "http");
                }
            }
            var instanceId = void 0;
            var windowId = void 0;
            var pid = void 0;
            var environment = void 0;
            var region = void 0;
            var appName = getApplication();
            var uniqueAppName = appName;
            if (hc) {
                windowId = hc.windowId;
                environment = hc.env.env;
                region = hc.env.region;
            }
            else if (typeof glue42gd !== "undefined") {
                windowId = glue42gd.windowId;
                pid = glue42gd.pid;
                if (glue42gd.env) {
                    environment = glue42gd.env.env;
                    region = glue42gd.env.region;
                }
                uniqueAppName = (_a = glue42gd.application) !== null && _a !== void 0 ? _a : "glue-app";
                instanceId = glue42gd.appInstanceId;
            }
            else if (Utils.isNode()) {
                pid = process.pid;
                if (nodeStartingContext) {
                    environment = nodeStartingContext.env;
                    region = nodeStartingContext.region;
                    instanceId = nodeStartingContext.instanceId;
                }
            }
            var replaySpecs = getConfigProp("gateway", "replaySpecs") || [];
            replaySpecs.push(ContextMessageReplaySpec);
            return {
                identity: {
                    application: uniqueAppName,
                    applicationName: appName,
                    windowId: windowId,
                    instance: instanceId,
                    process: pid,
                    region: region,
                    environment: environment,
                    api: ext.version || version
                },
                reconnectInterval: reconnectInterval,
                ws: ws,
                http: http,
                gw: inproc,
                protocolVersion: protocolVersion,
                reconnectAttempts: reconnectAttempts,
                force: true,
                replaySpecs: replaySpecs,
                gdVersion: gdVersion,
            };
        }
        return { gdVersion: gdVersion };
    }
    function getLogger() {
        var logger = getConfigProp("logger");
        if (typeof logger === "string") {
            return {
                console: logger,
                metrics: "off",
                publish: "off"
            };
        }
        return logger;
    }
    function getAgm() {
        return ifNotFalse(configuration.agm, {
            instance: {
                application: getApplication()
            }
        });
    }
    function getContexts(connectionConfig) {
        if (connectionConfig.protocolVersion < 3) {
            return false;
        }
        var contextConfig = getConfigProp("contexts");
        if (typeof contextConfig === "boolean" && !contextConfig) {
            return false;
        }
        return true;
    }
    function getChannels(contextsEnabled) {
        if (!contextsEnabled) {
            return false;
        }
        var channelsConfig = getConfigProp("channels");
        if (typeof channelsConfig === "boolean" && !channelsConfig) {
            return false;
        }
        return true;
    }
    function getBus(connectionConfig) {
        var contextConfig = getConfigProp("bus");
        if (typeof contextConfig === "boolean" && contextConfig) {
            if (connectionConfig.protocolVersion && connectionConfig.protocolVersion < 3) {
                return false;
            }
            if (gdVersion === 2) {
                return false;
            }
            return true;
        }
        return false;
    }
    function getApplication() {
        return getConfigProp("application");
    }
    function getAuth() {
        return getConfigProp("auth");
    }
    function getHardDefaults() {
        function getMetricsDefaults() {
            var documentTitle = typeof document !== "undefined" ? document.title : "unknown";
            documentTitle = documentTitle || "none";
            if (typeof hc === "undefined") {
                return {
                    system: "Connect.Browser",
                    service: configuration.application || documentTitle,
                    instance: "~" + uid
                };
            }
            if (typeof hc.metricsFacade.getIdentity !== "undefined") {
                var identity = hc.metricsFacade.getIdentity();
                return {
                    system: identity.system,
                    service: identity.service,
                    instance: identity.instance
                };
            }
            return {
                system: "HtmlContainer." + hc.containerName,
                service: "JS." + hc.browserWindowName,
                instance: "~" + hc.machineName
            };
        }
        function getGatewayDefaults() {
            var defaultProtocol = 3;
            var gatewayURL = "localhost:8385";
            var defaultWs = "ws://" + gatewayURL;
            var defaultHttp = "http://" + gatewayURL;
            if (glue42gd) {
                defaultProtocol = 3;
                defaultWs = glue42gd.gwURL;
            }
            if (Utils.isNode() && nodeStartingContext) {
                defaultProtocol = 3;
                defaultWs = nodeStartingContext.gwURL;
            }
            return {
                ws: defaultWs,
                http: defaultHttp,
                protocolVersion: defaultProtocol,
                reconnectInterval: 1000
            };
        }
        function getDefaultApplicationName() {
            if (hc) {
                return hc.containerName + "." + hc.browserWindowName;
            }
            if (glue42gd) {
                return glue42gd.applicationName;
            }
            if (Utils.isNode()) {
                if (nodeStartingContext) {
                    return nodeStartingContext.applicationConfig.name;
                }
                return "NodeJS" + uid;
            }
            if (typeof window !== "undefined" && typeof document !== "undefined") {
                return (window.agm_application || document.title) + uid;
            }
        }
        function getDefaultLogger() {
            return {
                publish: "off",
                console: "error",
                metrics: "off",
            };
        }
        function getDefaultAuth() {
            if (Utils.isNode() && nodeStartingContext) {
                return {
                    gatewayToken: nodeStartingContext.gwToken
                };
            }
        }
        return {
            application: getDefaultApplicationName(),
            metrics: getMetricsDefaults(),
            agm: {},
            gateway: getGatewayDefaults(),
            logger: getDefaultLogger(),
            bus: false,
            auth: getDefaultAuth()
        };
    }
    function getConfigProp(prop1, prop2) {
        var masterConfigProp1 = masterConfig[prop1];
        var userProp1 = configuration[prop1];
        var dynamicDefaultsProp1 = dynamicDefaults[prop1];
        var hardDefaultsProp1 = hardDefaults[prop1];
        if (prop2) {
            if (masterConfigProp1 && masterConfigProp1[prop2] !== undefined) {
                return masterConfigProp1[prop2];
            }
            if (userProp1 && userProp1[prop2] !== undefined) {
                return userProp1[prop2];
            }
            if (dynamicDefaultsProp1 && dynamicDefaultsProp1[prop2] !== undefined) {
                return dynamicDefaultsProp1[prop2];
            }
            if (hardDefaultsProp1 && hardDefaultsProp1[prop2] !== undefined) {
                return hardDefaultsProp1[prop2];
            }
        }
        else {
            if (masterConfigProp1 !== undefined) {
                return masterConfigProp1;
            }
            if (userProp1 !== undefined) {
                return userProp1;
            }
            if (dynamicDefaultsProp1 !== undefined) {
                return dynamicDefaultsProp1;
            }
            if (hardDefaultsProp1 !== undefined) {
                return hardDefaultsProp1;
            }
        }
        return undefined;
    }
    function ifNotFalse(what, then) {
        if (typeof what === "boolean" && !what) {
            return undefined;
        }
        else {
            return then;
        }
    }
    var connection = getGateway();
    var contexts = getContexts(connection);
    var channels = getChannels(contexts);
    var bus = getBus(connection);
    return {
        bus: bus,
        identity: metricsIdentity,
        auth: getAuth(),
        logger: getLogger(),
        connection: connection,
        metrics: getMetrics(),
        agm: getAgm(),
        contexts: contexts,
        channels: channels,
        version: ext.version || version,
        libs: ext.libs,
        customLogger: configuration.customLogger
    };
}

var connection = {
    protocolVersion: -1,
    send: function (product, type, message, id, options) {
        return Promise.resolve(undefined);
    },
    on: function (product, type, messageHandler) {
        return { type: "1", id: 1 };
    },
    off: function (info) {
    },
    login: function (message) {
        return undefined;
    },
    logout: function () {
    },
    loggedIn: function (callback) {
        return undefined;
    },
    connected: function (callback) {
        return undefined;
    },
    disconnected: function (callback) {
        return undefined;
    },
    reconnect: function () {
        return Promise.resolve();
    }
};

function timer () {
    function now() {
        return new Date().getTime();
    }
    var startTime = now();
    var endTime;
    var period;
    function stop() {
        endTime = now();
        period = now() - startTime;
        return period;
    }
    return {
        get startTime() {
            return startTime;
        },
        get endTime() {
            return endTime;
        },
        get period() {
            return period;
        },
        stop: stop
    };
}

var GW3ContextData = (function () {
    function GW3ContextData(contextId, name, isAnnounced, activityId) {
        this.updateCallbacks = {};
        this.contextId = contextId;
        this.name = name;
        this.isAnnounced = isAnnounced;
        this.activityId = activityId;
        this.context = {};
    }
    GW3ContextData.prototype.hasCallbacks = function () {
        return Object.keys(this.updateCallbacks).length > 0;
    };
    GW3ContextData.prototype.getState = function () {
        if (this.isAnnounced && this.hasCallbacks()) {
            return 3;
        }
        if (this.isAnnounced) {
            return 2;
        }
        if (this.hasCallbacks()) {
            return 1;
        }
        return 0;
    };
    return GW3ContextData;
}());

function applyContextDelta(context, delta) {
    if (delta) {
        if (delta.reset) {
            context = __assign({}, delta.reset);
            return context;
        }
        context = deepClone(context, null);
        var added_1 = delta.added;
        var updated_1 = delta.updated;
        var removed = delta.removed;
        if (added_1) {
            Object.keys(added_1).forEach(function (key) {
                context[key] = added_1[key];
            });
        }
        if (updated_1) {
            Object.keys(updated_1).forEach(function (key) {
                mergeObjectsProperties(key, context, updated_1);
            });
        }
        if (removed) {
            removed.forEach(function (key) {
                delete context[key];
            });
        }
    }
    return context;
}
function deepClone(obj, hash) {
    hash = hash || new WeakMap();
    if (Object(obj) !== obj) {
        return obj;
    }
    if (obj instanceof Set) {
        return new Set(obj);
    }
    if (hash.has(obj)) {
        return hash.get(obj);
    }
    var result = obj instanceof Date ? new Date(obj)
        : obj instanceof RegExp ? new RegExp(obj.source, obj.flags)
            : obj.constructor ? new obj.constructor()
                : Object.create(null);
    hash.set(obj, result);
    return Object.assign.apply(Object, __spreadArrays([result], Object.keys(obj).map(function (key) {
        var _a;
        return (_a = {}, _a[key] = deepClone(obj[key], hash), _a);
    })));
}
var mergeObjectsProperties = function (key, what, withWhat) {
    var right = withWhat[key];
    if (right === undefined) {
        return what;
    }
    var left = what[key];
    if (!left || !right) {
        what[key] = right;
        return what;
    }
    if (typeof left === "string" ||
        typeof left === "number" ||
        typeof left === "boolean" ||
        typeof right === "string" ||
        typeof right === "number" ||
        typeof right === "boolean" ||
        Array.isArray(left) ||
        Array.isArray(right)) {
        what[key] = right;
        return what;
    }
    what[key] = Object.assign({}, left, right);
    return what;
};
function deepEqual(x, y) {
    if (x === y) {
        return true;
    }
    if (!(x instanceof Object) || !(y instanceof Object)) {
        return false;
    }
    if (x.constructor !== y.constructor) {
        return false;
    }
    for (var p in x) {
        if (!x.hasOwnProperty(p)) {
            continue;
        }
        if (!y.hasOwnProperty(p)) {
            return false;
        }
        if (x[p] === y[p]) {
            continue;
        }
        if (typeof (x[p]) !== "object") {
            return false;
        }
        if (!deepEqual(x[p], y[p])) {
            return false;
        }
    }
    for (var p in y) {
        if (y.hasOwnProperty(p) && !x.hasOwnProperty(p)) {
            return false;
        }
    }
    return true;
}

var GW3Bridge = (function () {
    function GW3Bridge(config) {
        var _this = this;
        this._contextNameToData = {};
        this._gw3Subscriptions = [];
        this._nextCallbackSubscriptionNumber = 0;
        this._contextNameToId = {};
        this._contextIdToName = {};
        this._connection = config.connection;
        this._logger = config.logger;
        this._gw3Session = this._connection.domain("global", this._logger, [
            GW_MESSAGE_CONTEXT_CREATED,
            GW_MESSAGE_SUBSCRIBED_CONTEXT,
            GW_MESSAGE_CONTEXT_DESTROYED,
            GW_MESSAGE_CONTEXT_UPDATED,
        ]);
        this.subscribeToContextCreatedMessages();
        this.subscribeToContextUpdatedMessages();
        this.subscribeToContextDestroyedMessages();
        this._connection.replayer.drain(ContextMessageReplaySpec.name, function (message) {
            var type = message.type;
            if (!type) {
                return;
            }
            if (type === GW_MESSAGE_CONTEXT_CREATED ||
                type === GW_MESSAGE_CONTEXT_ADDED ||
                type === GW_MESSAGE_ACTIVITY_CREATED) {
                _this.handleContextCreatedMessage(message);
            }
            else if (type === GW_MESSAGE_SUBSCRIBED_CONTEXT ||
                type === GW_MESSAGE_CONTEXT_UPDATED ||
                type === GW_MESSAGE_JOINED_ACTIVITY) {
                _this.handleContextUpdatedMessage(message);
            }
            else if (type === GW_MESSAGE_CONTEXT_DESTROYED ||
                type === GW_MESSAGE_ACTIVITY_DESTROYED) {
                _this.handleContextDestroyedMessage(message);
            }
        });
    }
    GW3Bridge.prototype.dispose = function () {
        for (var _i = 0, _a = this._gw3Subscriptions; _i < _a.length; _i++) {
            var sub = _a[_i];
            this._connection.off(sub);
        }
        this._gw3Subscriptions.length = 0;
        for (var contextName in this._contextNameToData) {
            if (this._contextNameToId.hasOwnProperty(contextName)) {
                delete this._contextNameToData[contextName];
            }
        }
    };
    GW3Bridge.prototype.createContext = function (name, data) {
        var _this = this;
        return this._gw3Session
            .send({
            type: GW_MESSAGE_CREATE_CONTEXT,
            domain: "global",
            name: name,
            data: data,
            lifetime: "retained",
        })
            .then(function (createContextMsg) {
            _this._contextNameToId[name] = createContextMsg.context_id;
            if (!_this._contextIdToName[createContextMsg.context_id]) {
                _this._contextIdToName[createContextMsg.context_id] = name;
                var contextData = _this._contextNameToData[name] || new GW3ContextData(createContextMsg.context_id, name, true, null);
                contextData.isAnnounced = true;
                contextData.name = name;
                contextData.contextId = createContextMsg.context_id;
                _this._contextNameToData[name] = contextData;
                contextData.context = createContextMsg.data;
                contextData.sentExplicitSubscription = true;
                if (contextData.context) {
                    _this.invokeUpdateCallbacks(contextData, contextData.context, null);
                }
                return _this.update(name, data).then(function () { return createContextMsg.context_id; });
            }
            return createContextMsg.context_id;
        });
    };
    GW3Bridge.prototype.all = function () {
        var _this = this;
        return Object.keys(this._contextNameToData)
            .filter(function (name) { return _this._contextNameToData[name].isAnnounced; });
    };
    GW3Bridge.prototype.update = function (name, delta) {
        return __awaiter(this, void 0, void 0, function () {
            var contextData, currentContext, calculatedDelta;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        contextData = this._contextNameToData[name];
                        if (!contextData || !contextData.isAnnounced) {
                            return [2, this.createContext(name, delta)];
                        }
                        currentContext = contextData.context;
                        if (!!contextData.hasCallbacks()) return [3, 2];
                        return [4, this.get(contextData.name, false)];
                    case 1:
                        currentContext = _a.sent();
                        _a.label = 2;
                    case 2:
                        calculatedDelta = this.calculateContextDelta(currentContext, delta);
                        if (!Object.keys(calculatedDelta.added).length
                            && !Object.keys(calculatedDelta.updated).length
                            && !calculatedDelta.removed.length) {
                            return [2, Promise.resolve()];
                        }
                        return [2, this._gw3Session
                                .send({
                                type: GW_MESSAGE_UPDATE_CONTEXT,
                                domain: "global",
                                context_id: contextData.contextId,
                                delta: calculatedDelta,
                            }, {}, { skipPeerId: false })
                                .then(function (gwResponse) {
                                _this.handleUpdated(contextData, calculatedDelta, {
                                    updaterId: gwResponse.peer_id
                                });
                            })];
                }
            });
        });
    };
    GW3Bridge.prototype.set = function (name, data) {
        var _this = this;
        var contextData = this._contextNameToData[name];
        if (!contextData || !contextData.isAnnounced) {
            return this.createContext(name, data);
        }
        return this._gw3Session
            .send({
            type: GW_MESSAGE_UPDATE_CONTEXT,
            domain: "global",
            context_id: contextData.contextId,
            delta: { reset: data },
        }, {}, { skipPeerId: false })
            .then(function (gwResponse) {
            _this.handleUpdated(contextData, { reset: data, added: {}, removed: [], updated: {} }, { updaterId: gwResponse.peer_id });
        });
    };
    GW3Bridge.prototype.get = function (name, resolveImmediately) {
        var _this = this;
        if (resolveImmediately === undefined) {
            resolveImmediately = true;
        }
        var contextData = this._contextNameToData[name];
        if (!contextData ||
            !contextData.isAnnounced ||
            !contextData.hasCallbacks()) {
            if (!resolveImmediately) {
                return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                    var _this = this;
                    return __generator(this, function (_a) {
                        this.subscribe(name, function (data, delta, removed, un) {
                            _this.unsubscribe(un);
                            resolve(data);
                        });
                        return [2];
                    });
                }); });
            }
        }
        return Promise.resolve(contextData && contextData.context);
    };
    GW3Bridge.prototype.subscribe = function (name, callback) {
        var thisCallbackSubscriptionNumber = this._nextCallbackSubscriptionNumber;
        this._nextCallbackSubscriptionNumber += 1;
        var contextData = this._contextNameToData[name];
        if (!contextData ||
            !contextData.isAnnounced) {
            contextData = contextData || new GW3ContextData(undefined, name, false, undefined);
            this._contextNameToData[name] = contextData;
            contextData.updateCallbacks[thisCallbackSubscriptionNumber] = callback;
            return Promise.resolve(thisCallbackSubscriptionNumber);
        }
        var hadCallbacks = contextData.hasCallbacks();
        contextData.updateCallbacks[thisCallbackSubscriptionNumber] = callback;
        if (!hadCallbacks) {
            if (!contextData.joinedActivity) {
                if (contextData.context &&
                    contextData.sentExplicitSubscription) {
                    callback(contextData.context, contextData.context, [], thisCallbackSubscriptionNumber);
                    return Promise.resolve(thisCallbackSubscriptionNumber);
                }
                return this.sendSubscribe(contextData)
                    .then(function () { return thisCallbackSubscriptionNumber; });
            }
            else {
                callback(contextData.context, contextData.context, [], thisCallbackSubscriptionNumber);
                return Promise.resolve(thisCallbackSubscriptionNumber);
            }
        }
        else {
            callback(contextData.context, contextData.context, [], thisCallbackSubscriptionNumber);
            return Promise.resolve(thisCallbackSubscriptionNumber);
        }
    };
    GW3Bridge.prototype.unsubscribe = function (subscriptionKey) {
        for (var _i = 0, _a = Object.keys(this._contextNameToData); _i < _a.length; _i++) {
            var name_1 = _a[_i];
            var contextId = this._contextNameToId[name_1];
            var contextData = this._contextNameToData[name_1];
            if (!contextData) {
                return;
            }
            var hadCallbacks = contextData.hasCallbacks();
            delete contextData.updateCallbacks[subscriptionKey];
            if (contextData.isAnnounced &&
                hadCallbacks &&
                !contextData.hasCallbacks() &&
                contextData.sentExplicitSubscription) {
                this.sendUnsubscribe(contextData);
            }
            if (!contextData.isAnnounced &&
                !contextData.hasCallbacks()) {
                delete this._contextNameToData[name_1];
            }
        }
    };
    GW3Bridge.prototype.handleUpdated = function (contextData, delta, extraData) {
        var oldContext = contextData.context;
        contextData.context = applyContextDelta(contextData.context, delta);
        if (this._contextNameToData[contextData.name] === contextData &&
            !deepEqual(oldContext, contextData.context)) {
            this.invokeUpdateCallbacks(contextData, contextData.context, delta, extraData);
        }
    };
    GW3Bridge.prototype.subscribeToContextCreatedMessages = function () {
        var createdMessageTypes = [
            GW_MESSAGE_CONTEXT_ADDED,
            GW_MESSAGE_CONTEXT_CREATED,
            GW_MESSAGE_ACTIVITY_CREATED,
        ];
        for (var _i = 0, createdMessageTypes_1 = createdMessageTypes; _i < createdMessageTypes_1.length; _i++) {
            var createdMessageType = createdMessageTypes_1[_i];
            var sub = this._connection.on("js-contexts", createdMessageType, this.handleContextCreatedMessage.bind(this));
            this._gw3Subscriptions.push(sub);
        }
    };
    GW3Bridge.prototype.handleContextCreatedMessage = function (contextCreatedMsg) {
        var createdMessageType = contextCreatedMsg.type;
        if (createdMessageType === GW_MESSAGE_ACTIVITY_CREATED) {
            this._contextNameToId[contextCreatedMsg.activity_id] = contextCreatedMsg.context_id;
            this._contextIdToName[contextCreatedMsg.context_id] = contextCreatedMsg.activity_id;
        }
        else if (createdMessageType === GW_MESSAGE_CONTEXT_ADDED) {
            this._contextNameToId[contextCreatedMsg.name] = contextCreatedMsg.context_id;
            this._contextIdToName[contextCreatedMsg.context_id] = contextCreatedMsg.name;
        }
        var name = this._contextIdToName[contextCreatedMsg.context_id];
        if (!name) {
            throw new Error("Received created event for context with unknown name: " + contextCreatedMsg.context_id);
        }
        if (!this._contextNameToId[name]) {
            throw new Error("Received created event for context with unknown id: " + contextCreatedMsg.context_id);
        }
        var contextData = this._contextNameToData[name];
        if (contextData) {
            if (contextData.isAnnounced) {
                return;
            }
            else {
                if (!contextData.hasCallbacks()) {
                    throw new Error("Assertion failure: contextData.hasCallbacks()");
                }
                contextData.isAnnounced = true;
                contextData.contextId = contextCreatedMsg.context_id;
                contextData.activityId = contextCreatedMsg.activity_id;
                if (!contextData.sentExplicitSubscription) {
                    this.sendSubscribe(contextData);
                }
            }
        }
        else {
            this._contextNameToData[name] = contextData =
                new GW3ContextData(contextCreatedMsg.context_id, name, true, contextCreatedMsg.activity_id);
        }
    };
    GW3Bridge.prototype.subscribeToContextUpdatedMessages = function () {
        var updatedMessageTypes = [
            GW_MESSAGE_CONTEXT_UPDATED,
            GW_MESSAGE_SUBSCRIBED_CONTEXT,
            GW_MESSAGE_JOINED_ACTIVITY,
        ];
        for (var _i = 0, updatedMessageTypes_1 = updatedMessageTypes; _i < updatedMessageTypes_1.length; _i++) {
            var updatedMessageType = updatedMessageTypes_1[_i];
            var sub = this._connection.on("js-contexts", updatedMessageType, this.handleContextUpdatedMessage.bind(this));
            this._gw3Subscriptions.push(sub);
        }
    };
    GW3Bridge.prototype.handleContextUpdatedMessage = function (contextUpdatedMsg) {
        var updatedMessageType = contextUpdatedMsg.type;
        var contextId = contextUpdatedMsg.context_id;
        var contextData = this._contextNameToData[this._contextIdToName[contextId]];
        var justSeen = !contextData || !contextData.isAnnounced;
        if (updatedMessageType === GW_MESSAGE_JOINED_ACTIVITY) {
            if (!contextData) {
                contextData = new GW3ContextData(contextId, contextUpdatedMsg.activity_id, true, contextUpdatedMsg.activity_id);
                this._contextNameToData[contextUpdatedMsg.activity_id] = contextData;
                this._contextIdToName[contextId] = contextUpdatedMsg.activity_id;
                this._contextNameToId[contextUpdatedMsg.activity_id] = contextId;
            }
            else {
                contextData.contextId = contextId;
                contextData.isAnnounced = true;
                contextData.activityId = contextUpdatedMsg.activity_id;
            }
            contextData.joinedActivity = true;
        }
        else {
            if (!contextData || !contextData.isAnnounced) {
                if (updatedMessageType === GW_MESSAGE_SUBSCRIBED_CONTEXT) {
                    contextData = contextData || new GW3ContextData(contextId, contextUpdatedMsg.name, true, null);
                    contextData.sentExplicitSubscription = true;
                    this._contextNameToData[contextUpdatedMsg.name] = contextData;
                    this._contextIdToName[contextId] = contextUpdatedMsg.name;
                    this._contextNameToId[contextUpdatedMsg.name] = contextId;
                }
                else {
                    this._logger.error("Received 'update' for unknown context: " + contextId);
                }
                return;
            }
        }
        var oldContext = contextData.context;
        if (updatedMessageType === GW_MESSAGE_SUBSCRIBED_CONTEXT) {
            contextData.context = contextUpdatedMsg.data || {};
        }
        else if (updatedMessageType === GW_MESSAGE_JOINED_ACTIVITY) {
            contextData.context = contextUpdatedMsg.context_snapshot || {};
        }
        else if (updatedMessageType === GW_MESSAGE_CONTEXT_UPDATED) {
            contextData.context = applyContextDelta(contextData.context, contextUpdatedMsg.delta);
        }
        else {
            throw new Error("Unrecognized context update message " + updatedMessageType);
        }
        if (justSeen ||
            !deepEqual(contextData.context, oldContext) ||
            updatedMessageType === GW_MESSAGE_SUBSCRIBED_CONTEXT) {
            this.invokeUpdateCallbacks(contextData, contextData.context, contextUpdatedMsg.delta, { updaterId: contextUpdatedMsg.updater_id });
        }
    };
    GW3Bridge.prototype.invokeUpdateCallbacks = function (contextData, data, delta, extraData) {
        delta = delta || { added: {}, updated: {}, reset: {}, removed: [] };
        for (var updateCallbackIndex in contextData.updateCallbacks) {
            if (contextData.updateCallbacks.hasOwnProperty(updateCallbackIndex)) {
                try {
                    var updateCallback = contextData.updateCallbacks[updateCallbackIndex];
                    updateCallback(deepClone(data), Object.assign({}, delta.added || {}, delta.updated || {}, delta.reset || {}), delta.removed, parseInt(updateCallbackIndex, 10), extraData);
                }
                catch (err) {
                    this._logger.debug("callback error: " + JSON.stringify(err));
                }
            }
        }
    };
    GW3Bridge.prototype.subscribeToContextDestroyedMessages = function () {
        var destroyedMessageTypes = [
            GW_MESSAGE_CONTEXT_DESTROYED,
            GW_MESSAGE_ACTIVITY_DESTROYED,
        ];
        for (var _i = 0, destroyedMessageTypes_1 = destroyedMessageTypes; _i < destroyedMessageTypes_1.length; _i++) {
            var destroyedMessageType = destroyedMessageTypes_1[_i];
            var sub = this._connection.on("js-contexts", destroyedMessageType, this.handleContextDestroyedMessage.bind(this));
            this._gw3Subscriptions.push(sub);
        }
    };
    GW3Bridge.prototype.handleContextDestroyedMessage = function (destroyedMsg) {
        var destroyedMessageType = destroyedMsg.type;
        var contextId;
        var name;
        if (destroyedMessageType === GW_MESSAGE_ACTIVITY_DESTROYED) {
            name = destroyedMsg.activity_id;
            contextId = this._contextNameToId[name];
            if (!contextId) {
                this._logger.error("Received 'destroyed' for unknown activity: " + destroyedMsg.activity_id);
                return;
            }
        }
        else {
            contextId = destroyedMsg.context_id;
            name = this._contextIdToName[contextId];
            if (!name) {
                this._logger.error("Received 'destroyed' for unknown context: " + destroyedMsg.context_id);
                return;
            }
        }
        delete this._contextIdToName[contextId];
        delete this._contextNameToId[name];
        var contextData = this._contextNameToData[name];
        delete this._contextNameToData[name];
        if (!contextData || !contextData.isAnnounced) {
            this._logger.error("Received 'destroyed' for unknown context: " + contextId);
            return;
        }
    };
    GW3Bridge.prototype.sendSubscribe = function (contextData) {
        contextData.sentExplicitSubscription = true;
        return this._gw3Session
            .send({
            type: GW_MESSAGE_SUBSCRIBE_CONTEXT,
            domain: "global",
            context_id: contextData.contextId,
        }).then(function (_) { return undefined; });
    };
    GW3Bridge.prototype.sendUnsubscribe = function (contextData) {
        contextData.sentExplicitSubscription = false;
        return this._gw3Session
            .send({
            type: GW_MESSAGE_UNSUBSCRIBE_CONTEXT,
            domain: "global",
            context_id: contextData.contextId,
        }).then(function (_) { return undefined; });
    };
    GW3Bridge.prototype.calculateContextDelta = function (from, to) {
        var delta = { added: {}, updated: {}, removed: [], reset: null };
        if (from) {
            for (var _i = 0, _a = Object.keys(from); _i < _a.length; _i++) {
                var x = _a[_i];
                if (Object.keys(to).indexOf(x) !== -1
                    && to[x] !== null
                    && !deepEqual(from[x], to[x])) {
                    delta.updated[x] = to[x];
                }
            }
        }
        for (var _b = 0, _c = Object.keys(to); _b < _c.length; _b++) {
            var x = _c[_b];
            if (!from || (Object.keys(from).indexOf(x) === -1)) {
                if (to[x] !== null) {
                    delta.added[x] = to[x];
                }
            }
            else if (to[x] === null) {
                delta.removed.push(x);
            }
        }
        return delta;
    };
    return GW3Bridge;
}());

var HCBridge = (function () {
    function HCBridge(config) {
        this._facade = window.htmlContainer.sharedContextFacade;
    }
    HCBridge.prototype.all = function () {
        var allObj = this._facade.all();
        if (!allObj || !allObj.keys) {
            return [];
        }
        return allObj.keys;
    };
    HCBridge.prototype.update = function (name, delta) {
        this._facade.update(name, delta);
        return Promise.resolve();
    };
    HCBridge.prototype.set = function (name, data) {
        this._facade.set(name, data);
        return Promise.resolve();
    };
    HCBridge.prototype.subscribe = function (name, callback) {
        var snapshot = null;
        var key = this._facade.subscribe(name, function (data, delta, removed) {
            if (!key && key !== 0) {
                snapshot = data;
                return;
            }
            callback(data, delta, removed, key);
        });
        if (snapshot) {
            callback(snapshot, snapshot, [], key);
            snapshot = null;
        }
        return Promise.resolve(key);
    };
    HCBridge.prototype.get = function (name, resolveImmediately) {
        var _this = this;
        if (resolveImmediately) {
            throw new Error("resolveImmediately not supported in HtmlContainer");
        }
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.subscribe(name, function (data, un) {
                    _this.unsubscribe(un);
                    resolve(data);
                });
                return [2];
            });
        }); });
    };
    HCBridge.prototype.unsubscribe = function (key) {
        this._facade.unsubscribe(key);
    };
    return HCBridge;
}());

var ContextsModule = (function () {
    function ContextsModule(config) {
        this.config = config;
        try {
            if (config.gdMajorVersion === 2) {
                var hc = window.htmlContainer;
                if (!hc.sharedContextFacade) {
                    throw new Error("Your version of HtmlContainer does not support contexts."
                        + " Get version 1.46.0.0 or later to have that feature.");
                }
                this._bridge = new HCBridge(config);
            }
            else if (config.connection.protocolVersion === 3) {
                this._bridge = new GW3Bridge(config);
            }
            else {
                throw new Error("To use the Contexts library you must run in the"
                    + " HTML Container or using a connection to Gateway v3.");
            }
        }
        catch (err) {
            throw err;
        }
    }
    ContextsModule.prototype.all = function () {
        return this._bridge.all();
    };
    ContextsModule.prototype.update = function (name, delta) {
        this.checkName(name);
        return this._bridge.update(name, delta);
    };
    ContextsModule.prototype.set = function (name, data) {
        this.checkName(name);
        return this._bridge.set(name, data);
    };
    ContextsModule.prototype.subscribe = function (name, callback) {
        var _this = this;
        this.checkName(name);
        return this._bridge
            .subscribe(name, function (data, delta, removed, key, extraData) { return callback(data, delta, removed, function () { return _this._bridge.unsubscribe(key); }, extraData); })
            .then(function (key) {
            return function () {
                _this._bridge.unsubscribe(key);
            };
        });
    };
    ContextsModule.prototype.get = function (name, resolveImmediately) {
        if (resolveImmediately === false) {
            resolveImmediately = true;
        }
        return this._bridge.get(name, resolveImmediately);
    };
    ContextsModule.prototype.ready = function () {
        return Promise.resolve(this);
    };
    ContextsModule.prototype.checkName = function (name) {
        if (typeof name !== "string" ||
            name === "") {
            throw new Error("'name' must be non-empty string, got '" + name + "'");
        }
    };
    return ContextsModule;
}());

var GlueCore = function (userConfig, ext) {
    var gdVersion = -1;
    var hc;
    var glue42gd;
    var preloadPromise = Promise.resolve();
    if (typeof window !== "undefined") {
        gdVersion = Utils.getGDMajorVersion();
        if (gdVersion === 2) {
            hc = window.htmlContainer;
        }
        else if (gdVersion >= 3) {
            glue42gd = window.glue42gd;
            preloadPromise = window.gdPreloadPromise || preloadPromise;
        }
    }
    var glueInitTimer = timer();
    userConfig = userConfig || {};
    ext = ext || {};
    var internalConfig = prepareConfig(userConfig, ext, hc, glue42gd, gdVersion);
    var _connection;
    var _interop;
    var _logger;
    var _rootMetrics;
    var _metrics;
    var _contexts;
    var _bus;
    var libs = {};
    function registerLib(name, inner, t) {
        inner.initStartTime = t.startTime;
        if (inner.ready) {
            inner.ready().then(function () {
                inner.initTime = t.stop();
                inner.initEndTime = t.endTime;
            });
        }
        else {
            inner.initTime = t.stop();
            inner.initEndTime = t.endTime;
        }
        if (!Array.isArray(name)) {
            name = [name];
        }
        name.forEach(function (n) {
            libs[n] = inner;
            GlueCore[n] = inner;
        });
    }
    function setupConnection() {
        var initTimer = timer();
        internalConfig.connection.logger = _logger.subLogger("connection");
        _connection = gatewayConnection(internalConfig.connection);
        var authPromise = Promise.resolve(internalConfig.auth);
        if (internalConfig.connection && !internalConfig.auth) {
            var protocolVersion = internalConfig.connection.protocolVersion;
            if (!protocolVersion || protocolVersion === 1) {
                registerLib("connection", _connection, initTimer);
                return Promise.resolve({});
            }
            if (protocolVersion === 2) {
                return Promise.reject("You need to provide auth information");
            }
            if (protocolVersion === 3) {
                if (glue42gd) {
                    authPromise = glue42gd.getGWToken().then(function (token) {
                        return {
                            gatewayToken: token
                        };
                    });
                }
                else {
                    authPromise = Promise.reject("You need to provide auth information");
                }
            }
        }
        return authPromise
            .then(function (authConfig) {
            var authRequest;
            if (typeof authConfig === "string" || typeof authConfig === "number") {
                authRequest = {
                    token: authConfig
                };
            }
            else if (Object.prototype.toString.call(authConfig) === "[object Object]") {
                authRequest = authConfig;
            }
            else {
                throw new Error("Invalid auth object - " + JSON.stringify(authConfig));
            }
            return authRequest;
        })
            .then(function (authRequest) {
            return _connection.login(authRequest);
        })
            .then(function (identity) {
            if (identity) {
                if (identity.machine) {
                    internalConfig.agm.instance.machine = identity.machine;
                }
                if (identity.user) {
                    internalConfig.agm.instance.user = identity.user;
                }
            }
            registerLib("connection", _connection, initTimer);
            return internalConfig;
        })
            .catch(function (e) {
            if (_connection) {
                _connection.logout();
            }
            throw e;
        });
    }
    function setupLogger() {
        var _a, _b, _c, _d, _e;
        var initTimer = timer();
        var loggerConfig = {
            identity: internalConfig.identity,
            getConnection: function () {
                return _connection || connection;
            },
            publish: internalConfig.logger.publish || "off",
            console: internalConfig.logger.console || "error",
            metrics: (internalConfig.metrics && internalConfig.logger.metrics) || "off"
        };
        var rootLoggerName = (_c = (_b = (_a = internalConfig === null || internalConfig === void 0 ? void 0 : internalConfig.connection) === null || _a === void 0 ? void 0 : _a.identity) === null || _b === void 0 ? void 0 : _b.application) !== null && _c !== void 0 ? _c : (_e = (_d = internalConfig === null || internalConfig === void 0 ? void 0 : internalConfig.agm) === null || _d === void 0 ? void 0 : _d.instance) === null || _e === void 0 ? void 0 : _e.application;
        _logger = logger(loggerConfig, rootLoggerName, internalConfig.customLogger);
        registerLib("logger", _logger, initTimer);
        return Promise.resolve(undefined);
    }
    function setupMetrics() {
        if (internalConfig.metrics) {
            var initTimer = timer();
            _rootMetrics = metrics({
                identity: internalConfig.metrics.identity,
                connection: internalConfig.metrics ? _connection : connection,
                logger: _logger.subLogger("metrics")
            });
            if (internalConfig.metrics.disableAutoAppSystem) {
                _metrics = _rootMetrics;
            }
            else {
                _metrics = _rootMetrics.subSystem("App");
            }
            var reportingSystem_1 = _metrics.subSystem("reporting");
            var def_1 = {
                name: "features",
                conflation: 1,
            };
            var _featureMetric_1;
            _metrics.featureMetric = function (name, action, payload) {
                if (typeof name === "undefined" || name === "") {
                    throw new Error("name is mandatory");
                }
                else if (typeof action === "undefined" || action === "") {
                    throw new Error("action is mandatory");
                }
                else if (typeof payload === "undefined" || payload === "") {
                    throw new Error("payload is mandatory");
                }
                if (!_featureMetric_1) {
                    _featureMetric_1 = reportingSystem_1.objectMetric(def_1, { name: name, action: action, payload: payload });
                }
                else {
                    _featureMetric_1.update({
                        name: name,
                        action: action,
                        payload: payload
                    });
                }
            };
            var logEventsParent = _metrics.parent || _metrics;
            var logEvents = logEventsParent.subSystem("LogEvents");
            _logger.metricsLevel("warn", logEvents);
            registerLib("metrics", _metrics, initTimer);
        }
        return Promise.resolve(undefined);
    }
    function setupAGM() {
        var initTimer = timer();
        var agmConfig = {
            instance: internalConfig.agm.instance,
            connection: _connection,
            logger: _logger.subLogger("interop"),
            forceGW: internalConfig.connection && internalConfig.connection.force,
            gdVersion: gdVersion,
        };
        return new Promise(function (resolve, reject) {
            agm(agmConfig)
                .then(function (agmLib) {
                _interop = agmLib;
                Logger.Interop = _interop;
                registerLib(["interop", "agm"], _interop, initTimer);
                resolve(internalConfig);
            })
                .catch(function (err) {
                return reject(err);
            });
        });
    }
    function setupContexts() {
        var hasActivities = (internalConfig.activities && _connection.protocolVersion === 3);
        var needsContexts = internalConfig.contexts || hasActivities;
        if (needsContexts) {
            var initTimer = timer();
            _contexts = new ContextsModule({
                connection: _connection,
                logger: _logger.subLogger("contexts"),
                gdMajorVersion: gdVersion
            });
            registerLib("contexts", _contexts, initTimer);
            return _contexts;
        }
        else {
            var replayer = _connection.replayer;
            if (replayer) {
                replayer.drain(ContextMessageReplaySpec.name, null);
            }
        }
    }
    function setupExternalLibs(externalLibs) {
        try {
            externalLibs.forEach(function (lib) {
                setupExternalLib(lib.name, lib.create);
            });
            return Promise.resolve();
        }
        catch (e) {
            return Promise.reject(e);
        }
    }
    function setupExternalLib(name, createCallback) {
        var initTimer = timer();
        var lib = createCallback(libs);
        if (lib) {
            registerLib(name, lib, initTimer);
        }
    }
    function waitForLibs() {
        var libsReadyPromises = Object.keys(libs).map(function (key) {
            var lib = libs[key];
            return lib.ready ?
                lib.ready() : Promise.resolve();
        });
        return Promise.all(libsReadyPromises);
    }
    function constructGlueObject() {
        var feedbackFunc = function (feedbackInfo) {
            if (!_interop) {
                return;
            }
            _interop.invoke("T42.ACS.Feedback", feedbackInfo, "best");
        };
        var info = {
            coreVersion: version,
            version: internalConfig.version
        };
        glueInitTimer.stop();
        var glue = {
            interop: _interop,
            agm: _interop,
            metrics: _metrics,
            connection: _connection,
            bus: _bus,
            logger: _logger,
            contexts: _contexts,
            feedback: feedbackFunc,
            info: info,
            version: internalConfig.version,
            userConfig: userConfig,
            done: function () {
                _connection.logout();
                return Promise.resolve();
            }
        };
        glue.performance = {
            get glueVer() {
                return internalConfig.version;
            },
            get glueConfig() {
                return JSON.stringify(userConfig);
            },
            get browser() {
                return window.performance.timing.toJSON();
            },
            get memory() {
                return window.performance.memory;
            },
            get initTimes() {
                var result = Object.keys(glue)
                    .filter(function (key) {
                    var _a;
                    if (key === "initTimes" || key === "agm") {
                        return false;
                    }
                    return (_a = glue[key]) === null || _a === void 0 ? void 0 : _a.initTime;
                })
                    .map(function (key) {
                    return {
                        name: key,
                        time: glue[key].initTime,
                        startTime: glue[key].initStartTime,
                        endTime: glue[key].initEndTime
                    };
                });
                result.push({
                    name: "glue",
                    startTime: glueInitTimer.startTime,
                    endTime: glueInitTimer.endTime,
                    time: glueInitTimer.period
                });
                return result;
            }
        };
        Object.keys(libs).forEach(function (key) {
            var lib = libs[key];
            glue[key] = lib;
        });
        glue.config = {};
        Object.keys(internalConfig).forEach(function (k) {
            glue.config[k] = internalConfig[k];
        });
        if (ext.extOptions) {
            Object.keys(ext.extOptions).forEach(function (k) {
                glue.config[k] = ext.extOptions[k];
            });
        }
        if (ext.enrichGlue) {
            ext.enrichGlue(glue);
        }
        if (hc && hc.perfDataNeeded && hc.updatePerfData) {
            var delay = hc.perfDataDelay || 100;
            setTimeout(function () {
                hc.updatePerfData(glue.performance);
            }, delay);
        }
        if (glue42gd && glue42gd.updatePerfData) {
            glue42gd.updatePerfData(glue.performance);
        }
        return glue;
    }
    function setupBus() {
        if (!internalConfig.bus) {
            return Promise.resolve(undefined);
        }
        var initTimer = timer();
        var busSettings = {
            connection: _connection,
            logger: _logger.subLogger("bus")
        };
        return new Promise(function (resolve, reject) {
            bus(busSettings)
                .then(function (busLib) {
                _bus = busLib;
                registerLib("bus", _bus, initTimer);
                resolve();
            })
                .catch(function (err) {
                return reject(err);
            });
        });
    }
    return preloadPromise
        .then(setupLogger)
        .then(setupConnection)
        .then(function () { return Promise.all([setupMetrics(), setupAGM(), setupContexts(), setupBus()]); })
        .then(function () {
        return setupExternalLibs(internalConfig.libs || []);
    })
        .then(waitForLibs)
        .then(constructGlueObject)
        .catch(function (err) {
        return Promise.reject({
            err: err,
            libs: libs
        });
    });
};

if (typeof window !== "undefined") {
    window.GlueCore = GlueCore;
}
GlueCore.default = GlueCore;
GlueCore.version = version;

/* harmony default export */ __webpack_exports__["default"] = (GlueCore);
//# sourceMappingURL=core.es.js.map


/***/ }),

/***/ "./node_modules/callback-registry/lib/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/callback-registry/lib/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function createRegistry(options) {
    if (options && options.errorHandling
        && typeof options.errorHandling !== "function"
        && options.errorHandling !== "log"
        && options.errorHandling !== "silent"
        && options.errorHandling !== "throw") {
        throw new Error("Invalid options passed to createRegistry. Prop errorHandling should be [\"log\" | \"silent\" | \"throw\" | (err) => void], but " + typeof options.errorHandling + " was passed");
    }
    var _userErrorHandler = options && typeof options.errorHandling === "function" && options.errorHandling;
    var callbacks = {};

    function add(key, callback) {
        var callbacksForKey = callbacks[key];
        if (!callbacksForKey) {
            callbacksForKey = [];
            callbacks[key] = callbacksForKey;
        }
        callbacksForKey.push(callback);
        return function() {
            var allForKey = callbacks[key];
            if (!allForKey) {
                return;
            }
            allForKey = allForKey.reduce(function(acc, element, index) {
                if (!(element === callback && acc.length === index)) {
                    acc.push(element);
                }
                return acc;
            }, []);
            callbacks[key] = allForKey;
        };
    }

    function execute(key) {
        var argumentsArr = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            argumentsArr[_i - 1] = arguments[_i];
        }
        var callbacksForKey = callbacks[key];
        if (!callbacksForKey || callbacksForKey.length === 0) {
            return [];
        }
        var results = [];
        callbacksForKey.forEach(function(callback) {
            try {
                var result = callback.apply(undefined, argumentsArr);
                results.push(result);
            } catch (err) {
                results.push(undefined);
                _handleError(err, key);
            }
        });
        return results;
    }

    function executeAsync(key) {
        var argumentsArr = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            argumentsArr[_i - 1] = arguments[_i];
        }
        var callbacksForKey = callbacks[key];
        if (!callbacksForKey || callbacksForKey.length === 0) {
            return [];
        }
        return Promise.all(callbacksForKey.map(function(callback) {
            return new Promise((resolve, reject) => {
                if (typeof callback === "function") {
                    const res = callback.apply(undefined, argumentsArr)
                    resolve(res);
                } else {
                    callback.apply(undefined, argumentsArr)
                        .catch((err) => {
                            _handleError(err, key);
                            return undefined
                        }).then((re) => resolve(re));
                }
            })
        }));
    }

    function _handleError(exceptionArtifact, key) {
        var errParam = exceptionArtifact instanceof Error ? exceptionArtifact : new Error(exceptionArtifact);
        if (_userErrorHandler) {
            _userErrorHandler(errParam);
            return;
        }
        var msg = "[ERROR] callback-registry: User callback for key \"" + key + "\" failed: " + errParam.stack;
        if (options) {
            switch (options.errorHandling) {
                case "log":
                    return console.error(msg);
                case "silent":
                    return;
                case "throw":
                    throw new Error(msg);
            }
        }
        console.error(msg);
    }

    function clear() {
        callbacks = {};
    }

    return {
        add: add,
        execute: execute,
        executeAsync: executeAsync,
        clear: clear
    };
}
;
createRegistry.default = createRegistry;
module.exports = createRegistry;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/shortid/index.js":
/*!***************************************!*\
  !*** ./node_modules/shortid/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = __webpack_require__(/*! ./lib/index */ "./node_modules/shortid/lib/index.js");


/***/ }),

/***/ "./node_modules/shortid/lib/alphabet.js":
/*!**********************************************!*\
  !*** ./node_modules/shortid/lib/alphabet.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var randomFromSeed = __webpack_require__(/*! ./random/random-from-seed */ "./node_modules/shortid/lib/random/random-from-seed.js");

var ORIGINAL = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-';
var alphabet;
var previousSeed;

var shuffled;

function reset() {
    shuffled = false;
}

function setCharacters(_alphabet_) {
    if (!_alphabet_) {
        if (alphabet !== ORIGINAL) {
            alphabet = ORIGINAL;
            reset();
        }
        return;
    }

    if (_alphabet_ === alphabet) {
        return;
    }

    if (_alphabet_.length !== ORIGINAL.length) {
        throw new Error('Custom alphabet for shortid must be ' + ORIGINAL.length + ' unique characters. You submitted ' + _alphabet_.length + ' characters: ' + _alphabet_);
    }

    var unique = _alphabet_.split('').filter(function(item, ind, arr){
       return ind !== arr.lastIndexOf(item);
    });

    if (unique.length) {
        throw new Error('Custom alphabet for shortid must be ' + ORIGINAL.length + ' unique characters. These characters were not unique: ' + unique.join(', '));
    }

    alphabet = _alphabet_;
    reset();
}

function characters(_alphabet_) {
    setCharacters(_alphabet_);
    return alphabet;
}

function setSeed(seed) {
    randomFromSeed.seed(seed);
    if (previousSeed !== seed) {
        reset();
        previousSeed = seed;
    }
}

function shuffle() {
    if (!alphabet) {
        setCharacters(ORIGINAL);
    }

    var sourceArray = alphabet.split('');
    var targetArray = [];
    var r = randomFromSeed.nextValue();
    var characterIndex;

    while (sourceArray.length > 0) {
        r = randomFromSeed.nextValue();
        characterIndex = Math.floor(r * sourceArray.length);
        targetArray.push(sourceArray.splice(characterIndex, 1)[0]);
    }
    return targetArray.join('');
}

function getShuffled() {
    if (shuffled) {
        return shuffled;
    }
    shuffled = shuffle();
    return shuffled;
}

/**
 * lookup shuffled letter
 * @param index
 * @returns {string}
 */
function lookup(index) {
    var alphabetShuffled = getShuffled();
    return alphabetShuffled[index];
}

module.exports = {
    characters: characters,
    seed: setSeed,
    lookup: lookup,
    shuffled: getShuffled
};


/***/ }),

/***/ "./node_modules/shortid/lib/decode.js":
/*!********************************************!*\
  !*** ./node_modules/shortid/lib/decode.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var alphabet = __webpack_require__(/*! ./alphabet */ "./node_modules/shortid/lib/alphabet.js");

/**
 * Decode the id to get the version and worker
 * Mainly for debugging and testing.
 * @param id - the shortid-generated id.
 */
function decode(id) {
    var characters = alphabet.shuffled();
    return {
        version: characters.indexOf(id.substr(0, 1)) & 0x0f,
        worker: characters.indexOf(id.substr(1, 1)) & 0x0f
    };
}

module.exports = decode;


/***/ }),

/***/ "./node_modules/shortid/lib/encode.js":
/*!********************************************!*\
  !*** ./node_modules/shortid/lib/encode.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var randomByte = __webpack_require__(/*! ./random/random-byte */ "./node_modules/shortid/lib/random/random-byte-browser.js");

function encode(lookup, number) {
    var loopCounter = 0;
    var done;

    var str = '';

    while (!done) {
        str = str + lookup( ( (number >> (4 * loopCounter)) & 0x0f ) | randomByte() );
        done = number < (Math.pow(16, loopCounter + 1 ) );
        loopCounter++;
    }
    return str;
}

module.exports = encode;


/***/ }),

/***/ "./node_modules/shortid/lib/index.js":
/*!*******************************************!*\
  !*** ./node_modules/shortid/lib/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var alphabet = __webpack_require__(/*! ./alphabet */ "./node_modules/shortid/lib/alphabet.js");
var encode = __webpack_require__(/*! ./encode */ "./node_modules/shortid/lib/encode.js");
var decode = __webpack_require__(/*! ./decode */ "./node_modules/shortid/lib/decode.js");
var isValid = __webpack_require__(/*! ./is-valid */ "./node_modules/shortid/lib/is-valid.js");

// Ignore all milliseconds before a certain time to reduce the size of the date entropy without sacrificing uniqueness.
// This number should be updated every year or so to keep the generated id short.
// To regenerate `new Date() - 0` and bump the version. Always bump the version!
var REDUCE_TIME = 1459707606518;

// don't change unless we change the algos or REDUCE_TIME
// must be an integer and less than 16
var version = 6;

// if you are using cluster or multiple servers use this to make each instance
// has a unique value for worker
// Note: I don't know if this is automatically set when using third
// party cluster solutions such as pm2.
var clusterWorkerId = __webpack_require__(/*! ./util/cluster-worker-id */ "./node_modules/shortid/lib/util/cluster-worker-id-browser.js") || 0;

// Counter is used when shortid is called multiple times in one second.
var counter;

// Remember the last time shortid was called in case counter is needed.
var previousSeconds;

/**
 * Generate unique id
 * Returns string id
 */
function generate() {

    var str = '';

    var seconds = Math.floor((Date.now() - REDUCE_TIME) * 0.001);

    if (seconds === previousSeconds) {
        counter++;
    } else {
        counter = 0;
        previousSeconds = seconds;
    }

    str = str + encode(alphabet.lookup, version);
    str = str + encode(alphabet.lookup, clusterWorkerId);
    if (counter > 0) {
        str = str + encode(alphabet.lookup, counter);
    }
    str = str + encode(alphabet.lookup, seconds);

    return str;
}


/**
 * Set the seed.
 * Highly recommended if you don't want people to try to figure out your id schema.
 * exposed as shortid.seed(int)
 * @param seed Integer value to seed the random alphabet.  ALWAYS USE THE SAME SEED or you might get overlaps.
 */
function seed(seedValue) {
    alphabet.seed(seedValue);
    return module.exports;
}

/**
 * Set the cluster worker or machine id
 * exposed as shortid.worker(int)
 * @param workerId worker must be positive integer.  Number less than 16 is recommended.
 * returns shortid module so it can be chained.
 */
function worker(workerId) {
    clusterWorkerId = workerId;
    return module.exports;
}

/**
 *
 * sets new characters to use in the alphabet
 * returns the shuffled alphabet
 */
function characters(newCharacters) {
    if (newCharacters !== undefined) {
        alphabet.characters(newCharacters);
    }

    return alphabet.shuffled();
}


// Export all other functions as properties of the generate function
module.exports = generate;
module.exports.generate = generate;
module.exports.seed = seed;
module.exports.worker = worker;
module.exports.characters = characters;
module.exports.decode = decode;
module.exports.isValid = isValid;


/***/ }),

/***/ "./node_modules/shortid/lib/is-valid.js":
/*!**********************************************!*\
  !*** ./node_modules/shortid/lib/is-valid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var alphabet = __webpack_require__(/*! ./alphabet */ "./node_modules/shortid/lib/alphabet.js");

function isShortId(id) {
    if (!id || typeof id !== 'string' || id.length < 6 ) {
        return false;
    }

    var characters = alphabet.characters();
    var len = id.length;
    for(var i = 0; i < len;i++) {
        if (characters.indexOf(id[i]) === -1) {
            return false;
        }
    }
    return true;
}

module.exports = isShortId;


/***/ }),

/***/ "./node_modules/shortid/lib/random/random-byte-browser.js":
/*!****************************************************************!*\
  !*** ./node_modules/shortid/lib/random/random-byte-browser.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var crypto = typeof window === 'object' && (window.crypto || window.msCrypto); // IE 11 uses window.msCrypto

function randomByte() {
    if (!crypto || !crypto.getRandomValues) {
        return Math.floor(Math.random() * 256) & 0x30;
    }
    var dest = new Uint8Array(1);
    crypto.getRandomValues(dest);
    return dest[0] & 0x30;
}

module.exports = randomByte;


/***/ }),

/***/ "./node_modules/shortid/lib/random/random-from-seed.js":
/*!*************************************************************!*\
  !*** ./node_modules/shortid/lib/random/random-from-seed.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Found this seed-based random generator somewhere
// Based on The Central Randomizer 1.3 (C) 1997 by Paul Houle (houle@msc.cornell.edu)

var seed = 1;

/**
 * return a random number based on a seed
 * @param seed
 * @returns {number}
 */
function getNextValue() {
    seed = (seed * 9301 + 49297) % 233280;
    return seed/(233280.0);
}

function setSeed(_seed_) {
    seed = _seed_;
}

module.exports = {
    nextValue: getNextValue,
    seed: setSeed
};


/***/ }),

/***/ "./node_modules/shortid/lib/util/cluster-worker-id-browser.js":
/*!********************************************************************!*\
  !*** ./node_modules/shortid/lib/util/cluster-worker-id-browser.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = 0;


/***/ }),

/***/ "./node_modules/ws/browser.js":
/*!************************************!*\
  !*** ./node_modules/ws/browser.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function() {
  throw new Error(
    'ws does not work in the browser. Browser clients must use the native ' +
      'WebSocket object'
  );
};


/***/ }),

/***/ "./src/config.ts":
/*!***********************!*\
  !*** ./src/config.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (options) {
    function getLibConfig(value, defaultMode, trueMode) {
        if (typeof value === "boolean" && !value) {
            return undefined;
        }
        var mode = getModeAsString(value, defaultMode, trueMode);
        if (typeof value === "object") {
            value.mode = mode;
            return value;
        }
        return {
            mode: mode,
        };
    }
    function getModeAsString(value, defaultMode, trueMode) {
        if (typeof value === "object") {
            return getModeAsString(value.mode, defaultMode, trueMode) + "";
        }
        else if (typeof value === "undefined") {
            if (typeof defaultMode === "boolean" && !defaultMode) {
                return undefined;
            }
            else {
                return defaultMode + "";
            }
        }
        else if (typeof value === "boolean") {
            if (value) {
                return ((trueMode === undefined) ? defaultMode : trueMode) + "";
            }
            else {
                return undefined;
            }
        }
        return value + "";
    }
    return {
        outlook: getLibConfig(options.outlook, true),
        excel: getLibConfig(options.excel, true),
        word: getLibConfig(options.word, true),
    };
});


/***/ }),

/***/ "./src/excel/const.ts":
/*!****************************!*\
  !*** ./src/excel/const.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowGridMethodName = "T42.ExcelPad.ShowGrid";
exports.ValidateShowGridMethodName = "ValidateShowGrid";


/***/ }),

/***/ "./src/excel/excel.ts":
/*!****************************!*\
  !*** ./src/excel/excel.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var callback_registry_1 = __webpack_require__(/*! callback-registry */ "./node_modules/callback-registry/lib/index.js");
var const_1 = __webpack_require__(/*! ./const */ "./src/excel/const.ts");
var sheet_1 = __webpack_require__(/*! ./sheet */ "./src/excel/sheet.ts");
var utils_1 = __webpack_require__(/*! ./utils */ "./src/excel/utils.ts");
var version_1 = __webpack_require__(/*! ../version */ "./src/version.ts");
var ExcelImp = (function () {
    function ExcelImp(agm) {
        var _this = this;
        this._registry = callback_registry_1.default();
        this._sheets = {};
        this._isExcelStarted = false;
        this.init = function () {
            return _this.registerAgmMethod();
        };
        this.openSheet = function (sheetData) {
            return new Promise(function (resolve, reject) {
                if (!sheetData) {
                    reject("Can not open a sheet without config");
                    return;
                }
                if (!sheetData.columnConfig || !Array.isArray(sheetData.columnConfig)) {
                    reject("Missing or incorrect type `columnConfig` property");
                    return;
                }
                if (!sheetData.data || !Array.isArray(sheetData.data)) {
                    reject("Missing or incorrect type of `data` property");
                    return;
                }
                var convertedParams = utils_1.convertParams(sheetData.columnConfig, sheetData.data, sheetData.options);
                var successHandler = function (r) {
                    if (utils_1.parseAgmResult(r)) {
                        var _a = sheetData.options, worksheet = _a.worksheet, workbook = _a.workbook;
                        var id = convertedParams.params.cookie || utils_1.getSheetId(workbook, worksheet);
                        var sheet = _this.createSheet(id, sheetData, false);
                        resolve(sheet.asSheetAPI);
                    }
                };
                var errorHandler = function (err) {
                    reject(err);
                };
                return _this.invokeShowGridMethod(convertedParams.params, convertedParams.agmOptions).then(successHandler).catch(errorHandler);
            });
        };
        this.onAddinStatusChanged = function (callback) {
            return _this._registry.add("onAddinStatusChanged", callback);
        };
        this.getWorkbooks = function () { return __awaiter(_this, void 0, void 0, function () {
            var result, workbooks, parsed;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this._agm.invoke("T42.ExcelScript.GetState")];
                    case 1:
                        result = _a.sent();
                        workbooks = result.returned.state;
                        parsed = workbooks.map(function (book) {
                            var worksheets = book.worksheets.map(function (_a) {
                                var name = _a.name;
                                var id = _this.getCookieFromState(book) || utils_1.getSheetId(book.name, name);
                                var sheet = _this._sheets[id];
                                if (!sheet) {
                                    sheet = _this.createSheet(id, { columnConfig: [], options: { worksheet: name, workbook: book.name } }, false);
                                }
                                return sheet.asSheetAPI;
                            });
                            return __assign(__assign({}, book), { worksheets: worksheets });
                        });
                        return [2, parsed];
                }
            });
        }); };
        this.getWorksheets = function () { return __awaiter(_this, void 0, void 0, function () {
            var result, workbooks, workSheets;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this._agm.invoke("T42.ExcelScript.GetState")];
                    case 1:
                        result = _a.sent();
                        workbooks = result.returned.state;
                        workSheets = [];
                        workbooks.forEach(function (book) {
                            book.worksheets.forEach(function (_a) {
                                var name = _a.name;
                                var id = _this.getCookieFromState(book) || utils_1.getSheetId(book.name, name);
                                var sheet = _this._sheets[id];
                                if (!sheet) {
                                    sheet = _this.createSheet(id, { columnConfig: [], options: { worksheet: name, workbook: book.name } }, false);
                                }
                                workSheets.push(sheet.asSheetAPI);
                            });
                        });
                        return [2, workSheets];
                }
            });
        }); };
        this.onNewWorksheet = function (callback) {
            return _this._registry.add("onNewWorksheet", callback);
        };
        this.getCookieFromState = function (book) {
            var _a, _b, _c;
            var keyName = "ExcelPad.cookie";
            var cookieState = (_b = (_a = book) === null || _a === void 0 ? void 0 : _a.modulesState) === null || _b === void 0 ? void 0 : _b.find(function (state) { var _a; return ((_a = state) === null || _a === void 0 ? void 0 : _a.key) === keyName; });
            return (_c = cookieState) === null || _c === void 0 ? void 0 : _c.value;
        };
        this.createSheet = function (id, sheetData, fireEvent) {
            if (sheetData === void 0) { sheetData = { columnConfig: [] }; }
            if (fireEvent === void 0) { fireEvent = true; }
            var sheet = new sheet_1.default(id, sheetData, _this.invokeShowGridMethod.bind(_this));
            _this._sheets[id] = sheet;
            if (fireEvent) {
                _this._registry.execute("onNewWorksheet", sheet.asSheetAPI);
            }
            return sheet;
        };
        this.createExcelFirstSheet = function (id, args, fireEvent) {
            if (fireEvent === void 0) { fireEvent = true; }
            var worksheet = args.worksheet, workbook = args.workbook;
            var columnConfig = JSON.parse(args.columnsAsJSON)
                .map(function (columnName) { var _a; return ({ fieldName: (_a = columnName) === null || _a === void 0 ? void 0 : _a.toLowerCase(), header: columnName }); });
            var data = JSON.parse(args.dataAsJSON);
            var options = { worksheet: worksheet, workbook: workbook, response: "image" };
            return _this.createSheet(id, { columnConfig: columnConfig, data: data, options: options }, fireEvent);
        };
        this._agm = agm;
    }
    Object.defineProperty(ExcelImp.prototype, "all", {
        get: function () {
            var _this = this;
            return Object.keys(this._sheets).map(function (k) {
                return _this._sheets[k].asSheetAPI;
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExcelImp.prototype, "addinStatus", {
        get: function () {
            return this._isExcelStarted;
        },
        enumerable: true,
        configurable: true
    });
    ExcelImp.prototype.registerAgmMethod = function () {
        return __awaiter(this, void 0, void 0, function () {
            var methods, waitForMethod;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this._agm.register({
                            name: const_1.ValidateShowGridMethodName,
                            accepts: "string cookie, string workbook, string worksheet, string updateType, string dataAsJSON",
                        }, function (args, caller) { return __awaiter(_this, void 0, void 0, function () {
                            var cookie, workbook, worksheet, id, currentSheet, asSheetAPI, wasPartiallyCreatedOnGet, result;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        console.log("args", args, this._sheets);
                                        cookie = args.cookie, workbook = args.workbook, worksheet = args.worksheet;
                                        if (!(workbook && worksheet)) return [3, 2];
                                        id = cookie || utils_1.getSheetId(workbook, worksheet);
                                        currentSheet = this._sheets[id];
                                        if (!currentSheet) {
                                            currentSheet = this.createExcelFirstSheet(id, args);
                                        }
                                        else {
                                            asSheetAPI = currentSheet.asSheetAPI;
                                            wasPartiallyCreatedOnGet = !asSheetAPI.columnConfig || asSheetAPI.columnConfig.length === 0 || !asSheetAPI.workbook;
                                            if (wasPartiallyCreatedOnGet) {
                                                currentSheet = this.createExcelFirstSheet(id, args);
                                            }
                                        }
                                        return [4, currentSheet._onUpdate(args)];
                                    case 1:
                                        result = _a.sent();
                                        return [2, result];
                                    case 2: return [2, undefined];
                                }
                            });
                        }); })];
                    case 1:
                        _a.sent();
                        return [4, this._agm.methods({ name: const_1.ShowGridMethodName })];
                    case 2:
                        methods = _a.sent();
                        waitForMethod = function () { return new Promise(function (resolve) {
                            _this._agm.methodAdded(function (method) {
                                if (method.name === const_1.ShowGridMethodName) {
                                    _this._isExcelStarted = true;
                                    _this._registry.execute("onAddinStatusChanged", true);
                                    resolve();
                                }
                            });
                        }); };
                        if (methods.length !== 0) {
                            this._isExcelStarted = true;
                            this._registry.execute("onAddinStatusChanged", true);
                        }
                        else {
                            waitForMethod();
                        }
                        this._agm.methodRemoved(function (method) {
                            if (method.name === const_1.ShowGridMethodName) {
                                waitForMethod();
                                _this._isExcelStarted = false;
                                _this._registry.execute("onAddinStatusChanged", false);
                            }
                        });
                        return [2];
                }
            });
        });
    };
    ExcelImp.prototype.invokeShowGridMethod = function (params, agmOptions) {
        var _this = this;
        params.g4oVersion = version_1.version;
        return new Promise(function (resolve, reject) {
            if (_this._isExcelStarted) {
                agmOptions.method_response_timeout = agmOptions.methodResponseTimeoutMs;
                _this._agm.invoke(const_1.ShowGridMethodName, params, null, agmOptions)
                    .then(function (response) {
                    resolve(response);
                }).catch(function (e) {
                    reject(e);
                });
            }
            else {
                reject("Microsoft Excel with Tick42 Add-in is not running");
            }
        });
    };
    return ExcelImp;
}());
exports.default = ExcelImp;


/***/ }),

/***/ "./src/excel/main.ts":
/*!***************************!*\
  !*** ./src/excel/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var excel_1 = __webpack_require__(/*! ./excel */ "./src/excel/excel.ts");
exports.default = (function (config) {
    var excel = new excel_1.default(config.agm);
    var methodsRegistered = excel.init();
    function ready() {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, methodsRegistered];
                    case 1:
                        _a.sent();
                        return [2, api];
                }
            });
        });
    }
    var api = {
        ready: ready,
        openSheet: excel.openSheet,
        get sheets() {
            return excel.all;
        },
        onAddinStatusChanged: excel.onAddinStatusChanged,
        onNewWorksheet: excel.onNewWorksheet,
        get addinStatus() {
            return excel.addinStatus;
        },
        getWorkbooks: excel.getWorkbooks,
        getWorksheets: excel.getWorksheets,
    };
    return api;
});


/***/ }),

/***/ "./src/excel/sheet.ts":
/*!****************************!*\
  !*** ./src/excel/sheet.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var callback_registry_1 = __webpack_require__(/*! callback-registry */ "./node_modules/callback-registry/lib/index.js");
var utils_1 = __webpack_require__(/*! ./utils */ "./src/excel/utils.ts");
function executeAsync(registry, key) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    return __awaiter(this, void 0, void 0, function () {
        var results;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    results = registry.execute.apply(registry, __spreadArrays([key], args));
                    return [4, Promise.all(results.map(function (result) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!(result && typeof result.then === "function")) return [3, 2];
                                        return [4, result];
                                    case 1:
                                        _a.sent();
                                        _a.label = 2;
                                    case 2: return [2, result];
                                }
                            });
                        }); }))];
                case 1:
                    _a.sent();
                    return [2];
            }
        });
    });
}
var SheetImpl = (function () {
    function SheetImpl(id, config, invokeShowGrid) {
        var _this = this;
        this._registry = callback_registry_1.default({ errorHandling: "throw" });
        this.errorCallback = function (errors) {
            _this._validationResponse = {
                isValid: false,
                errorsAsJSON: JSON.stringify(errors),
            };
        };
        this.doneCallback = function () {
            _this._validationResponse = {
                isValid: true,
            };
        };
        this._id = id;
        this._name = config.options ? config.options.worksheet : "";
        this._data = config.data;
        this._workbook = config.options ? config.options.workbook : "";
        this._columns = config.columnConfig;
        this._options = config.options;
        this._invokeMethod = invokeShowGrid;
    }
    Object.defineProperty(SheetImpl.prototype, "asSheetAPI", {
        get: function () {
            var _this = this;
            var that = this;
            if (!this._sheet) {
                this._sheet = {
                    name: this._name,
                    workbook: this._workbook,
                    options: this._options,
                    get data() {
                        return that._data;
                    },
                    get columnConfig() {
                        return that._columns;
                    },
                    update: function (data) { return _this.update(data); },
                    onChanged: function (callback) { return _this.onChanged(callback); },
                    onChanging: function (callback) { return _this.onChanging(callback); },
                    changeColumnConfig: function (columnConfig, data) { return _this.changeColumnConfig(columnConfig, data); },
                };
            }
            return this._sheet;
        },
        enumerable: true,
        configurable: true
    });
    SheetImpl.prototype.changeColumnConfig = function (columnConfig, data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!columnConfig) {
                reject("Can not change column in the sheet without columnConfig");
                return;
            }
            if (!data) {
                data = _this._data;
            }
            var convertedParams = utils_1.convertParams(columnConfig, data, _this._options, _this._id);
            var successHandler = function () {
                _this._data = data;
                resolve();
            };
            _this._invokeMethod(convertedParams.params, convertedParams.agmOptions)
                .then(successHandler)
                .catch(reject);
        });
    };
    SheetImpl.prototype.update = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!data || !Array.isArray(data)) {
                reject("Can not update sheet with empty or incorrect type `data`");
                return;
            }
            var convertedParams = utils_1.convertParams(_this._columns, data, _this._options, _this._id);
            _this._invokeMethod(convertedParams.params, convertedParams.agmOptions)
                .then(function () {
                resolve();
            })
                .catch(reject);
        });
    };
    SheetImpl.prototype.onChanged = function (callback) {
        return this._registry.add("on-changed", function (data, error, done, delta) { return callback(data, error, done, delta); });
    };
    SheetImpl.prototype.onChanging = function (callback) {
        return this._registry.add("on-changing", callback);
    };
    SheetImpl.prototype._onUpdate = function (args) {
        return __awaiter(this, void 0, void 0, function () {
            var delta, columns, allDeltas;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._name = args.worksheet;
                        this._workbook = args.workbook;
                        this._registry.execute("on-changing", {
                            chunkIndex: args.chunkIndex,
                            totalChunks: args.totalChunks,
                        });
                        try {
                            delta = JSON.parse(args.dataAsJSON);
                            columns = JSON.parse(args.columnsAsJSON);
                        }
                        catch (error) {
                            this._deltaCache = null;
                            console.error(error);
                            return [2];
                        }
                        this._data = this.mergeData(args, delta, columns);
                        if (!args.totalChunks ||
                            args.updateType !== "row") {
                            this._deltaCache = null;
                        }
                        else {
                            if (args.chunkIndex === 0) {
                                this._deltaCache = [delta];
                            }
                            else if (this._deltaCache) {
                                this._deltaCache.push(delta);
                            }
                        }
                        if (!(!args.totalChunks ||
                            args.chunkIndex === args.totalChunks - 1)) return [3, 5];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, , 3, 4]);
                        allDeltas = this._deltaCache && utils_1.flatten(this._deltaCache);
                        return [4, executeAsync(this._registry, "on-changed", this._data, this.errorCallback, this.doneCallback, allDeltas)];
                    case 2:
                        _a.sent();
                        return [3, 4];
                    case 3:
                        this._deltaCache = null;
                        return [7];
                    case 4: return [3, 6];
                    case 5:
                        this._validationResponse = {
                            isValid: true,
                        };
                        _a.label = 6;
                    case 6: return [2, this._validationResponse];
                }
            });
        });
    };
    SheetImpl.prototype.mergeData = function (args, delta, columnConfig) {
        var _this = this;
        var _a;
        if (args.updateType === "image") {
            var columnHeaderRow_1 = (_a = delta.find(function (d) { return d.rowAfterIndex === 1; })) === null || _a === void 0 ? void 0 : _a.row;
            if (!columnHeaderRow_1) {
                columnHeaderRow_1 = __spreadArrays(columnConfig);
                if (!columnHeaderRow_1 || columnHeaderRow_1.length === 0) {
                    console.error("No columns received update will be ignored !");
                }
            }
            var data = delta.reduce(function (res, currDelta, index) {
                if (index !== 0) {
                    var row_1 = {};
                    currDelta.row.forEach(function (rowValue, col) {
                        var colHeader = columnHeaderRow_1[col];
                        if (colHeader !== undefined && colHeader !== null) {
                            var headerSameAsConfig = columnConfig.find(function (c) { return c.header === colHeader; });
                            var colName = void 0;
                            if (headerSameAsConfig) {
                                colName = headerSameAsConfig.fieldName || utils_1.camelize(colHeader);
                            }
                            else {
                                colName = utils_1.camelize(colHeader);
                            }
                            row_1[colName] = rowValue;
                        }
                    });
                    res.push(row_1);
                }
                return res;
            }, []);
            return data;
        }
        var dataAfterMerged = [];
        var isRowMode = (args.updateType === "row");
        if (isRowMode) {
            dataAfterMerged = __spreadArrays(this._data);
        }
        var from = (delta[0].action === "deleted" ? delta.length - 1 : 0);
        var toExclusive = (delta[0].action === "deleted" ? -1 : delta.length);
        var step = (delta[0].action === "deleted" ? -1 : +1);
        var _loop_1 = function (ii) {
            var deltaItem = delta[ii];
            var rowBeforeIndex = deltaItem.rowBeforeIndex, rowAfterIndex = deltaItem.rowAfterIndex, action = deltaItem.action, row = deltaItem.row, deltaRowAfter = deltaItem.rowAfter;
            var beforeActualIndex = rowBeforeIndex - 1;
            var afterActualIndex = rowAfterIndex - 1;
            var rowAfter = deltaRowAfter || row;
            if (!action || !isRowMode) {
                if (rowAfter.length) {
                    var obj_1 = {};
                    this_1._columns.forEach(function (x, i) {
                        obj_1[x.fieldName] = rowAfter[i];
                    });
                    dataAfterMerged[afterActualIndex] = obj_1;
                }
                else {
                    dataAfterMerged[afterActualIndex] = rowAfter;
                }
            }
            else if (action === "unchanged") {
                dataAfterMerged[afterActualIndex] = this_1._data[beforeActualIndex];
            }
            else if (action === "deleted") {
                if (isRowMode) {
                    dataAfterMerged.splice(beforeActualIndex >= 0 ? beforeActualIndex : 0, deltaItem.count || 1);
                }
            }
            else if (action === "modified") {
                Object.keys(row).forEach(function (i) {
                    var updateFieldData = row[i];
                    if (updateFieldData === null &&
                        (!rowAfter || rowAfter[i] || rowAfter[i] === "" || rowAfter[i] === 0)) {
                        return;
                    }
                    var fieldName = _this._columns[i].fieldName;
                    var rowData = _this._data[beforeActualIndex];
                    rowData[fieldName] = updateFieldData;
                    dataAfterMerged[beforeActualIndex] = rowData;
                });
            }
            else if (action === "inserted") {
                var insertedObj_1 = {};
                Object.keys(rowAfter).forEach(function (updateFieldDataIx, i) {
                    var fieldName = _this._columns[i].fieldName;
                    insertedObj_1[fieldName] = rowAfter[updateFieldDataIx] || undefined;
                });
                dataAfterMerged.splice(beforeActualIndex, 0, insertedObj_1);
            }
        };
        var this_1 = this;
        for (var ii = from; ii !== toExclusive; ii += step) {
            _loop_1(ii);
        }
        return dataAfterMerged;
    };
    return SheetImpl;
}());
exports.default = SheetImpl;


/***/ }),

/***/ "./src/excel/utils.ts":
/*!****************************!*\
  !*** ./src/excel/utils.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var shortid = __webpack_require__(/*! shortid */ "./node_modules/shortid/index.js");
function getColumnsAsJson(columns) {
    var modifiedColumns = columns.map(function (col) {
        var column = {
            name: col.fieldName || "",
            text: col.header || col.fieldName,
            foregroundColor: col.foregroundColor || "",
            backgroundColor: col.backgroundColor || "",
            width: isNumber(col.width) ? col.width : null,
        };
        if (col.validation) {
            column.validation = {
                type: ("xlValidate" + col.validation.type),
                alert: ("xlValidAlert" + col.validation.alert),
                list: col.validation.list || null,
            };
        }
        return column;
    });
    return modifiedColumns;
}
function formatDate(date) {
    var timezoneOffsetInHours = -(date.getTimezoneOffset() / 60);
    var sign = timezoneOffsetInHours >= 0 ? "+" : "-";
    var leadingZero = (Math.abs(timezoneOffsetInHours) < 10) ? "0" : "";
    var correctedDate = new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
    correctedDate.setHours(date.getHours() + timezoneOffsetInHours);
    var iso = correctedDate.toISOString().replace("Z", "");
    var suffix = (date.getTimezoneOffset() % 60) + "";
    if (suffix.length < 2) {
        suffix = "0" + suffix;
    }
    return iso + sign + leadingZero + Math.abs(timezoneOffsetInHours).toString() + ":" + suffix;
}
function getDataAsJson(columns, data) {
    var modifiedData = data.map(function (row) {
        var dataList = [];
        columns
            .map(function (col) { return ({ forceText: col.forceText, preserveEmptyString: col.preserveEmptyString, name: col.fieldName }); })
            .forEach(function (_a) {
            var forceText = _a.forceText, preserveEmptyString = _a.preserveEmptyString, name = _a.name;
            var rowValue = row[name] || row[name.toLowerCase()]
                || row[Object.keys(row).find(function (key) { return key.toLowerCase() === name.toLowerCase(); })];
            var item;
            if (forceText && isFinite(rowValue)) {
                item = "'" + rowValue;
            }
            else if (preserveEmptyString && (rowValue === null || rowValue === undefined || rowValue === "")) {
                item = "'";
            }
            else if (typeof rowValue === "number" && isFinite(rowValue)) {
                item = rowValue;
            }
            else if (rowValue instanceof Date) {
                item = formatDate(rowValue);
            }
            else {
                item = rowValue || "";
            }
            dataList.push(item);
        });
        return { data: dataList };
    });
    return modifiedData;
}
function getShowGridParams(options) {
    var methodOptions = {
        clearGrid: {
            default: true,
            friendlyName: undefined,
        },
        workbook: {
            default: shortid.generate(),
            friendlyName: undefined,
        },
        dataWorksheet: {
            default: shortid.generate(),
            friendlyName: "worksheet",
        },
        templateWorkbook: undefined,
        viewWorksheet: {
            friendlyName: "templateWorksheet",
        },
        inhibitLocalSave: undefined,
        glueMethod: {
            default: "ValidateShowGrid",
            friendlyName: undefined,
        },
        buttonText: undefined,
        buttonRange: {
            default: "A1",
            friendlyName: undefined,
        },
        topLeft: {
            default: "A1",
            friendlyName: undefined,
        },
        triggers: {
            default: ["save"],
            friendlyName: "updateTrigger",
        },
        dataRangeName: undefined,
        window: undefined,
        chunkSize: {
            default: 1000,
            friendlyName: undefined,
        },
        disableErrorViewer: undefined,
        autostart: undefined,
        displayName: undefined,
        timeoutMs: undefined,
    };
    var updatedOptions = {};
    options = options || {};
    Object.keys(methodOptions).forEach(function (key) {
        var value = methodOptions[key];
        var friendlyName = value ? value.friendlyName : undefined;
        var defaultValue = value ? value.default : undefined;
        if (friendlyName) {
            updatedOptions[key] = options[friendlyName];
        }
        else {
            updatedOptions[key] = options[key];
        }
        if (value && updatedOptions[key] === undefined) {
            updatedOptions[key] = defaultValue;
        }
    });
    var _loop_1 = function (key) {
        if ((!(key in methodOptions) ||
            (methodOptions[key] &&
                methodOptions[key].friendlyName &&
                methodOptions[key].friendlyName !== key)) &&
            !Object.keys(methodOptions).some(function (x) { return methodOptions[x] && methodOptions[x].friendlyName === key; })) {
            updatedOptions[key] = options[key];
        }
    };
    for (var key in options) {
        _loop_1(key);
    }
    return updatedOptions;
}
function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
function parseAgmResult(r) {
    var resp;
    try {
        resp = JSON.parse(r.returned.result).success;
    }
    catch (error) {
        resp = false;
    }
    return resp;
}
exports.parseAgmResult = parseAgmResult;
function convertParams(columns, data, options, cookie) {
    var params = {
        columnsAsJSON: JSON.stringify(getColumnsAsJson(columns)),
        dataAsJSON: JSON.stringify(getDataAsJson(columns, data)),
        cookie: cookie ? cookie : shortid.generate(),
        response: options.response === "image" ? "image" : "row",
    };
    var agmOptions = options && { methodResponseTimeoutMs: options.timeoutMs };
    var mappedParams = getShowGridParams(options);
    var combinedParams = __assign(__assign({}, params), mappedParams);
    delete combinedParams.timeoutMs;
    return {
        params: combinedParams,
        agmOptions: agmOptions,
    };
}
exports.convertParams = convertParams;
function flatten(arr) {
    var flattenedArray = [];
    for (var ii = 0; ii < arr.length; ++ii) {
        var current = arr[ii];
        flattenedArray.push.apply(flattenedArray, current);
    }
    return flattenedArray;
}
exports.flatten = flatten;
function camelize(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
        if (+match === 0) {
            return "";
        }
        return index === 0 ? match.toLowerCase() : match.toUpperCase();
    });
}
exports.camelize = camelize;
exports.sheetIdSeparator = "_";
function getSheetId(workbook, worksheet) {
    return workbook + exports.sheetIdSeparator + worksheet;
}
exports.getSheetId = getSheetId;


/***/ }),

/***/ "./src/glue4office.ts":
/*!****************************!*\
  !*** ./src/glue4office.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @glue42/core */ "./node_modules/@glue42/core/dist/core.es.js");
var main_1 = __webpack_require__(/*! ./word/main */ "./src/word/main.ts");
var main_2 = __webpack_require__(/*! ./excel/main */ "./src/excel/main.ts");
var main_3 = __webpack_require__(/*! ./outlook/main */ "./src/outlook/main.ts");
var config_1 = __webpack_require__(/*! ./config */ "./src/config.ts");
var version_1 = __webpack_require__(/*! ./version */ "./src/version.ts");
exports.default = (function (options) {
    options = options || {};
    var glueConfig = config_1.default(options);
    function createOutlook(core) {
        if (glueConfig.outlook) {
            return main_3.default({ agm: core.agm });
        }
    }
    function createExcel(core) {
        if (glueConfig.excel) {
            return main_2.default({ agm: core.agm });
        }
    }
    function createWord(core) {
        if (glueConfig.word) {
            return main_1.default({ agm: core.agm });
        }
    }
    var ext = {
        libs: [
            { name: "outlook", create: createOutlook },
            { name: "excel", create: createExcel },
            { name: "word", create: createWord },
        ],
        version: version_1.version,
        enrichGlue: function (glue) {
            glue.config.outlook = glueConfig.outlook;
            glue.config.excel = glueConfig.excel;
            glue.config.word = glueConfig.word;
        },
    };
    function extendExistingGlue(glue) {
        glue.outlook = createOutlook(glue);
        glue.excel = createExcel(glue);
        glue.word = createWord(glue);
        ext.enrichGlue(glue);
    }
    if (options.glue) {
        extendExistingGlue(options.glue);
        return Promise.resolve(options.glue);
    }
    return core_1.default(options, ext);
});


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var main_1 = __webpack_require__(/*! ./main */ "./src/main.ts");
module.exports = main_1.default;


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var glue4office_1 = __webpack_require__(/*! ./glue4office */ "./src/glue4office.ts");
var version_1 = __webpack_require__(/*! ./version */ "./src/version.ts");
glue4office_1.default.version = version_1.version;
if (typeof window !== "undefined") {
    window.Glue4Office = glue4office_1.default;
}
glue4office_1.default.default = glue4office_1.default;
exports.default = glue4office_1.default;


/***/ }),

/***/ "./src/outlook/dictionaries/ChunkDataDictionary.ts":
/*!*********************************************************!*\
  !*** ./src/outlook/dictionaries/ChunkDataDictionary.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ChunkDataDictionary = (function () {
    function ChunkDataDictionary() {
        this.items = {};
    }
    ChunkDataDictionary.prototype.containsKey = function (key) {
        return this.items.hasOwnProperty(key);
    };
    ChunkDataDictionary.prototype.add = function (key, value) {
        if (this.containsKey(key)) {
            this.items[key].push(value);
        }
        else {
            this.items[key] = [value];
        }
    };
    ChunkDataDictionary.prototype.remove = function (key) {
        delete this.items[key];
    };
    ChunkDataDictionary.prototype.get = function (key) {
        return this.items[key];
    };
    return ChunkDataDictionary;
}());
exports.ChunkDataDictionary = ChunkDataDictionary;
exports.default = new ChunkDataDictionary();


/***/ }),

/***/ "./src/outlook/dictionaries/CreateItemDictionary.ts":
/*!**********************************************************!*\
  !*** ./src/outlook/dictionaries/CreateItemDictionary.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CreateItemDictionary = (function () {
    function CreateItemDictionary() {
        this.items = {};
    }
    CreateItemDictionary.prototype.containsKey = function (key) {
        return this.items.hasOwnProperty(key);
    };
    CreateItemDictionary.prototype.add = function (key, value) {
        this.items[key] = value;
    };
    CreateItemDictionary.prototype.remove = function (key) {
        delete this.items[key];
    };
    CreateItemDictionary.prototype.get = function (key) {
        return this.items[key];
    };
    return CreateItemDictionary;
}());
exports.CreateItemDictionary = CreateItemDictionary;
exports.default = new CreateItemDictionary();


/***/ }),

/***/ "./src/outlook/dictionaries/GetAttachmentDictionary.ts":
/*!*************************************************************!*\
  !*** ./src/outlook/dictionaries/GetAttachmentDictionary.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GetAttachmentDictionary = (function () {
    function GetAttachmentDictionary() {
        this.items = {};
    }
    GetAttachmentDictionary.prototype.containsKey = function (key) {
        return this.items.hasOwnProperty(key);
    };
    GetAttachmentDictionary.prototype.add = function (key, value) {
        this.items[key] = value;
    };
    GetAttachmentDictionary.prototype.remove = function (key) {
        delete this.items[key];
    };
    GetAttachmentDictionary.prototype.get = function (key) {
        return this.items[key];
    };
    return GetAttachmentDictionary;
}());
exports.GetAttachmentDictionary = GetAttachmentDictionary;
exports.default = new GetAttachmentDictionary();


/***/ }),

/***/ "./src/outlook/dictionaries/GetItemAsMsgDictionary.ts":
/*!************************************************************!*\
  !*** ./src/outlook/dictionaries/GetItemAsMsgDictionary.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GetItemAsMsgDictionary = (function () {
    function GetItemAsMsgDictionary() {
        this.items = {};
    }
    GetItemAsMsgDictionary.prototype.containsKey = function (key) {
        return this.items.hasOwnProperty(key);
    };
    GetItemAsMsgDictionary.prototype.add = function (key, value) {
        this.items[key] = value;
    };
    GetItemAsMsgDictionary.prototype.remove = function (key) {
        delete this.items[key];
    };
    GetItemAsMsgDictionary.prototype.get = function (key) {
        return this.items[key];
    };
    return GetItemAsMsgDictionary;
}());
exports.GetItemAsMsgDictionary = GetItemAsMsgDictionary;
exports.default = new GetItemAsMsgDictionary();


/***/ }),

/***/ "./src/outlook/dictionaries/TrackEmailDictionary.ts":
/*!**********************************************************!*\
  !*** ./src/outlook/dictionaries/TrackEmailDictionary.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TrackEmailDictionary = (function () {
    function TrackEmailDictionary() {
        this.items = {};
    }
    TrackEmailDictionary.prototype.containsIds = function (ids) {
        var key = this.getOutlookId(ids);
        return this.items.hasOwnProperty(key);
    };
    TrackEmailDictionary.prototype.add = function (emailIds, ids) {
        var key = this.getOutlookId(emailIds);
        this.items[key] = ids;
    };
    TrackEmailDictionary.prototype.remove = function (ids) {
        var key = this.getOutlookId(ids);
        delete this.items[key];
    };
    TrackEmailDictionary.prototype.get = function (ids) {
        var key = this.getOutlookId(ids);
        return this.items[key];
    };
    TrackEmailDictionary.prototype.getOutlookId = function (ids) {
        return ids.filter(function (id) { return id.systemName.indexOf("Outlook") === 0; })[0].nativeId;
    };
    return TrackEmailDictionary;
}());
exports.TrackEmailDictionary = TrackEmailDictionary;
exports.default = new TrackEmailDictionary();


/***/ }),

/***/ "./src/outlook/dictionaries/TrackItemDictionary.ts":
/*!*********************************************************!*\
  !*** ./src/outlook/dictionaries/TrackItemDictionary.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TrackItemDictionary = (function () {
    function TrackItemDictionary() {
        this.items = {};
    }
    TrackItemDictionary.prototype.containsIds = function (ids) {
        var key = this.getOutlookId(ids);
        return this.items.hasOwnProperty(key);
    };
    TrackItemDictionary.prototype.add = function (emailIds, ids) {
        var key = this.getOutlookId(emailIds);
        this.items[key] = ids;
    };
    TrackItemDictionary.prototype.remove = function (ids) {
        var key = this.getOutlookId(ids);
        delete this.items[key];
    };
    TrackItemDictionary.prototype.get = function (ids) {
        var key = this.getOutlookId(ids);
        return this.items[key];
    };
    TrackItemDictionary.prototype.getOutlookId = function (ids) {
        return ids.filter(function (id) { return id.systemName.indexOf("Outlook") === 0; })[0].nativeId;
    };
    return TrackItemDictionary;
}());
exports.TrackItemDictionary = TrackItemDictionary;
exports.default = new TrackItemDictionary();


/***/ }),

/***/ "./src/outlook/helpers/createItem.ts":
/*!*******************************************!*\
  !*** ./src/outlook/helpers/createItem.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var validations_1 = __webpack_require__(/*! ./validations */ "./src/outlook/helpers/validations.ts");
var methodNames_1 = __webpack_require__(/*! ./methodNames */ "./src/outlook/helpers/methodNames.ts");
var index_1 = __webpack_require__(/*! ./index */ "./src/outlook/helpers/index.ts");
var CreateItemDictionary_1 = __webpack_require__(/*! ../dictionaries/CreateItemDictionary */ "./src/outlook/dictionaries/CreateItemDictionary.ts");
var chunkSize = 800000;
exports.createItem = function (agm, item, itemType, options) {
    var isT42Email = itemType === "email";
    var isT42Task = itemType === "task";
    options = options ? options : {};
    var onCanceled = options.onCanceled;
    return new Promise(function (resolve, reject) {
        var validItem = validateAndParseCreateItemParams(item);
        validations_1.validateNewItemOptions(options);
        var internalCookie = new Date().getTime().toString();
        var createItemObject = {
            ItemType: itemType,
            Cookie: internalCookie,
            OnSendMethod: methodNames_1.OnSendMethodName,
            OnCancelMethod: methodNames_1.OnCancelMethodName,
        };
        if (isT42Email) {
            createItemObject.t42value = index_1.convertToT42Email(validItem);
        }
        else if (isT42Task) {
            createItemObject.t42value = index_1.convertToT42Task(validItem);
        }
        var successHandler = function () {
            var onSent = isT42Email
                ? options.onSent
                : options.onSaved;
            CreateItemDictionary_1.default.add(internalCookie, { onSent: onSent, onCanceled: onCanceled });
            resolve();
        };
        var errorHandler = function (err) {
            reject(err.message);
            return;
        };
        var showItem = function (r) {
            var showItemObject = r.returned;
            agm.invoke(methodNames_1.ShowItemMethodName, showItemObject)
                .then(successHandler)
                .catch(errorHandler);
        };
        var attachments = validItem.attachments;
        if (attachments && attachments.length > 0) {
            if (isT42Email) {
                createItemObject.t42value.attachments = [];
            }
            else {
                createItemObject.AttachFiles = [];
            }
            var att = attachments[0];
            var createNewFile = typeof att.data === "string";
            if (createNewFile) {
                Promise.all(attachments
                    .map(function (file) { return __awaiter(void 0, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        file.truncate = true;
                        file.encoding = "base64";
                        if (new Blob([file.data]).size > 1000000) {
                            return [2, chunkAndAppendAttachment(agm, file, file.data, isT42Email, createItemObject)];
                        }
                        else {
                            return [2, agm.invoke(methodNames_1.TmpFilesAppendMethodName, file)
                                    .then(function (returnedFile) {
                                    var fileName = returnedFile.returned.Filename;
                                    if (isT42Email) {
                                        createItemObject.t42value.attachments
                                            .push({ name: fileName });
                                    }
                                    else {
                                        createItemObject.AttachFiles.push(fileName);
                                    }
                                })
                                    .catch(function (err) { return window.console.warn("Not able to create attachment file"); })];
                        }
                        return [2];
                    });
                }); }))
                    .then(function () {
                    agm.invoke(methodNames_1.CreateItemMethodName, createItemObject)
                        .then(showItem)
                        .catch(function (err) { return reject(err.message); });
                })
                    .catch(function (err) { return reject(err.message); });
            }
            else if (typeof attachments[0] === "string") {
                attachments.map(function (file) {
                    return isT42Email
                        ? createItemObject.t42value.attachments
                            .push({ name: file })
                        : createItemObject.AttachFiles.push(file);
                });
                agm.invoke(methodNames_1.CreateItemMethodName, createItemObject)
                    .then(showItem)
                    .catch(function (err) { return reject(err.message); });
            }
            else {
                reject(index_1.attachmentsErrorMessage);
            }
        }
        else {
            agm.invoke(methodNames_1.CreateItemMethodName, createItemObject)
                .then(showItem)
                .catch(function (err) { return reject(err.message); });
        }
    });
};
var validateAndParseCreateItemParams = function (params) {
    var validParams = parseCreateItemParams(params);
    if (validParams.attachments) {
        validParams.attachments = validations_1.validateAttachments(params.attachments);
    }
    if (validParams.startDate) {
        validParams.startDate = validations_1.validateDate(validParams.startDate, "startDate");
    }
    if (validParams.dueDate) {
        validParams.dueDate = validations_1.validateDate(validParams.dueDate, "dueDate");
    }
    if (validParams.reminderTime) {
        validParams.reminderTime = validations_1.validateDate(validParams.reminderTime, "reminderTime");
    }
    if (validParams.priority) {
        validParams.priority = validations_1.validatePriority(validParams.priority);
    }
    return validParams;
};
var parseCreateItemParams = function (params) {
    var newParams = Object.keys(params)
        .reduce(function (prev, curr) {
        prev[curr] = params[curr];
        return prev;
    }, {});
    if (newParams.subject) {
        newParams.subject = newParams.subject.toString();
    }
    if (newParams.body) {
        newParams.body = newParams.body.toString();
    }
    if (newParams.bodyHtml) {
        newParams.bodyHtml = newParams
            .bodyHtml.toString();
    }
    if (newParams.sender) {
        newParams.sender.toString();
    }
    return newParams;
};
var chunkAndAppendAttachment = function (agm, file, data, isT42Email, createItemObject) {
    return new Promise(function (resolve) {
        var _a = updateChunkFile(file, data), chunkFile = _a.chunkFile, chunkData = _a.chunkData;
        invokeFileAppend(agm, chunkFile, chunkData, resolve, isT42Email, createItemObject);
    });
};
var invokeFileAppend = function (agm, file, data, resolve, isT42Email, createItemObject) {
    agm.invoke(methodNames_1.TmpFilesAppendMethodName, file)
        .then(function (returnedFile) {
        if (data.length > 0) {
            file.truncate = false;
            var _a = updateChunkFile(file, data), chunkFile = _a.chunkFile, chunkData = _a.chunkData;
            return invokeFileAppend(agm, chunkFile, chunkData, resolve, isT42Email, createItemObject);
        }
        else {
            var fileName = returnedFile.returned.Filename;
            if (isT42Email) {
                createItemObject.t42value.attachments
                    .push({ name: fileName });
            }
            else {
                createItemObject.AttachFiles.push(fileName);
            }
            resolve();
        }
    })
        .catch(function () {
        window.console.warn("Not able to create attachment file");
    });
};
var updateChunkFile = function (file, data) {
    file.data = data.slice(0, chunkSize);
    data = data.slice(chunkSize, data.length);
    return { chunkFile: file, chunkData: data };
};


/***/ }),

/***/ "./src/outlook/helpers/index.ts":
/*!**************************************!*\
  !*** ./src/outlook/helpers/index.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = __webpack_require__(/*! ../types */ "./src/outlook/types.ts");
var methodNames_1 = __webpack_require__(/*! ./methodNames */ "./src/outlook/helpers/methodNames.ts");
var validations_1 = __webpack_require__(/*! ./validations */ "./src/outlook/helpers/validations.ts");
exports.attachmentsErrorMessage = "Invalid type of \"attachments\" element, expected array of strings for " +
    "existing attachments or array of \"{data: string, fileName: string}\" for dynamically created attachments";
exports.isOutlookEnabled = function (agm) { return agm.methods({ name: methodNames_1.CreateItemMethodName }).length > 0; };
exports.getOlDefaultFolders = function () {
    return {
        $SentMail: 5,
        $Inbox: 6,
    };
};
exports.concatChunkData = function (data) {
    var result = "";
    data.forEach(function (chunk) {
        result += exports.encodeData(chunk);
    });
    return result;
};
exports.encodeData = function (data) { return atob(data); };
exports.decodeData = function (data) { return btoa(data); };
exports.generateConversationId = function () {
    return {
        systemName: Math.random().toString(36).substr(2, 10),
        nativeId: new Date().getTime().toString(),
    };
};
exports.convertToT42Email = function (email) {
    var t42ValueEmail = {
        attachments: email.attachments || [],
        body: email.body,
        bodyHtml: email.bodyHtml,
        subject: email.subject,
    };
    var newEmail = validations_1.validateRecipients(email);
    ["to", "cc", "bcc"].forEach(function (contactListName) {
        var receiver = newEmail[contactListName];
        if (receiver) {
            var newList_1 = [];
            receiver.forEach(function (contactEmail) {
                newList_1.push({ emails: [contactEmail] });
            });
            t42ValueEmail[contactListName] = newList_1;
        }
        if (newEmail.sender) {
            t42ValueEmail.sender = { emails: [newEmail.sender] };
        }
    });
    return t42ValueEmail;
};
exports.convertToT42Task = function (task) {
    return {
        attachments: task.attachments || [],
        body: task.body,
        dueDate: task.dueDate,
        importance: getTaskImportance(task.priority),
        reminderTime: task.reminderTime,
        startDate: task.startDate,
        subject: task.subject,
    };
};
var getTaskImportance = function (priority) {
    return typeof types_1.TaskPriority[priority] === "number" ? types_1.TaskPriority[priority] : types_1.TaskPriority.normal;
};
exports.getTaskPriority = function (importance) {
    if (types_1.TaskPriority.low === importance) {
        return "low";
    }
    else if (types_1.TaskPriority.high === importance) {
        return "high";
    }
    return "normal";
};


/***/ }),

/***/ "./src/outlook/helpers/methodNames.ts":
/*!********************************************!*\
  !*** ./src/outlook/helpers/methodNames.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateItemMethodName = "T42.Outlook.CreateItem";
exports.ShowItemMethodName = "T42.Outlook.ShowItem";
exports.SaveItemMethodName = "T42.Outlook.SaveItem";
exports.OnSendMethodName = "T42.Outlook.OnSendMethod";
exports.OnCancelMethodName = "T42.Outlook.OnCancelMethod";
exports.OnEmailReceivedMethodName = "T42.Outlook.OnEmailReceived";
exports.OnTaskCreatedMethodName = "T42.Outlook.OnTaskCreated";
exports.OutlookGetAttachmentMethodName = "T42.Outlook.GetAttachment";
exports.CreateLocalEmailMethodName = "T42.Outlook.CreateLocalEmail";
exports.OutlookGetItemAsMsgMethodName = "T42.Outlook.GetItemAsMsgMethod";
exports.TmpFilesAppendMethodName = "T42.TmpFiles.Append";
exports.OnTrackEmailMethodName = "T42.CRM.TrackEmail";
exports.OnUntrackEmailMethodName = "T42.CRM.UntrackEmail";
exports.OnTrackItemMethodName = "T42.CRM.TrackCalendarItem";
exports.OnUntrackItemMethodName = "T42.CRM.UntrackCalendarItem";
exports.CRMGetAttachmentMethodName = "T42.CRM.GetAttachment";
exports.CRMGetItemAsMsgMethodName = "T42.CRM.GetItemAsMsg";
exports.SyncTrackEmailMethodName = "T42.CRM.SyncTrackEmail";
exports.SyncUntrackEmailMethodName = "T42.CRM.SyncUntrackEmail";
exports.SyncTrackCalendarItemMethodName = "T42.CRM.SyncTrackCalendarItem";
exports.SyncUntrackCalendarItemMethodName = "T42.CRM.SyncUntrackCalendarItem";
exports.SecureReplyMethodName = "T42.CRM.SecureReply";
exports.DisplaySecureMailMethodName = "T42.CRM.DisplaySecureMail";


/***/ }),

/***/ "./src/outlook/helpers/validations.ts":
/*!********************************************!*\
  !*** ./src/outlook/helpers/validations.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(/*! ./index */ "./src/outlook/helpers/index.ts");
exports.validateRecipients = function (email) {
    var recipientProps = ["to", "cc", "bcc"];
    return Object.keys(email).reduce(function (prev, curr) {
        if (recipientProps.indexOf(curr) >= 0) {
            var receiver = email[curr];
            if (!Array.isArray(receiver)) {
                prev[curr] = [receiver.toString()];
                return prev;
            }
            else {
                prev[curr] = [];
                receiver.forEach(function (contactEmail) {
                    prev[curr].push(contactEmail.toString());
                });
            }
        }
        prev[curr] = email[curr];
        return prev;
    }, {});
};
exports.validateAttachments = function (attachments) {
    if (!Array.isArray(attachments)) {
        throw new Error(index_1.attachmentsErrorMessage);
    }
    if (attachments.length === 0) {
        return attachments;
    }
    var isValid = true;
    var firstAtt = attachments[0];
    if (firstAtt.data !== undefined || firstAtt.fileName !== undefined) {
        attachments.forEach(function (att) {
            if (typeof att.data !== "string" || typeof att.fileName !== "string") {
                window.console.warn(index_1.attachmentsErrorMessage);
                isValid = false;
            }
        });
    }
    else {
        attachments.forEach(function (att) {
            if (typeof att !== "string") {
                window.console.warn(index_1.attachmentsErrorMessage);
                isValid = false;
            }
        });
    }
    return isValid ? attachments : null;
};
exports.validateDate = function (date, propertyName) {
    var newDate = new Date(date);
    var dateUnix = newDate.getTime();
    if (isNaN(dateUnix)) {
        window.console.warn("Invalid type of \"" + propertyName + "\", expected \"Date\" or unix timestamp number");
        return null;
    }
    return date;
};
exports.validatePriority = function (priority) {
    var listOfPriorities = ["low", "normal", "high"];
    if (typeof priority !== "string") {
        window.console.warn("Invalid type of \"priority\", expected \"string\", one of: \"low\", \"normal\" or \"high\"");
        return "normal";
    }
    if (listOfPriorities.indexOf(priority) < 0) {
        throw new Error("Invalid type of \"priority\", expected \"string\", one of: \"low\", \"normal\" or \"high\"");
    }
    return priority;
};
exports.validateNewItemOptions = function (options) {
    if (options.onSent && typeof options.onSent !== "function") {
        throw new Error("Invalid type of \"onSent\" callback, expected function");
    }
    if (options.onSaved && typeof options.onSaved !== "function") {
        throw new Error("Invalid type of \"onSaved\" callback, expected function");
    }
    if (options.onCanceled && typeof options.onCanceled !== "function") {
        throw new Error("Invalid type of \"onCanceled\" callback, expected function");
    }
};
exports.validateLocalEmailParameters = function (agm, localEmailParams) {
    if (!index_1.isOutlookEnabled(agm)) {
        throw new Error("The method \"createLocalEmail\" is not available");
    }
    if (!localEmailParams) {
        throw new Error("\"localEmailParams\" of type object are mandatory");
    }
    if (!localEmailParams.sender) {
        throw new Error("The property \"sender\" in \"localEmailParams\" is mandatory");
    }
    else if (typeof localEmailParams.sender !== "string") {
        throw new Error("Invalid type of \"sender\", expected string");
    }
    if (!localEmailParams.to) {
        throw new Error("The property \"to\" in \"localEmailParams\" is mandatory");
    }
    else if (typeof localEmailParams.to !== "string" && !Array.isArray(localEmailParams.to)) {
        throw new Error("Invalid type of \"to\", expected string or string[]");
    }
    if (!localEmailParams.subject) {
        throw new Error("The property \"subject\" in \"localEmailParams\" is mandatory");
    }
    else if (typeof localEmailParams.subject !== "string") {
        throw new Error("Invalid type of \"subject\", expected string");
    }
};
exports.validateLocation = function (location) {
    if (typeof location !== "string" && !location.ids) {
        throw new Error("Invalid location");
    }
    if (typeof location === "string" && location.indexOf("$") === 0) {
        var defaultFolders = index_1.getOlDefaultFolders();
        if (typeof defaultFolders[location] !== "number") {
            throw new Error("Invalid location");
        }
    }
};
exports.validateCalendarEventParameters = function (agm, action, event) {
    if (!index_1.isOutlookEnabled(agm)) {
        var methodName = action === "track" ? "trackEmail" : "untrackEmail";
        throw new Error("The method " + methodName + " is not available");
    }
    if (!event || (!event.ids || event.ids.length === 0)) {
        throw new Error("Invalid meeting / appointment");
    }
};
exports.validateId = function (id) {
    if (!id.systemName || !id.nativeId) {
        throw new Error("Invalid type of conversationId, expected \"{systemName: string, nativeId: string\"");
    }
    var systemName = id.systemName.toString();
    var nativeId = id.nativeId.toString();
    return { systemName: systemName, nativeId: nativeId };
};


/***/ }),

/***/ "./src/outlook/items/AttachmentImplementation.ts":
/*!*******************************************************!*\
  !*** ./src/outlook/items/AttachmentImplementation.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var getAttachment_1 = __webpack_require__(/*! ../methods/getAttachment */ "./src/outlook/methods/getAttachment.ts");
var AttachmentImpl = (function () {
    function AttachmentImpl(attachment, agm, parent) {
        this.cookie = attachment.cookie;
        this.emailIds = attachment.emailIds;
        this.data = attachment.data;
        this.ids = attachment.ids;
        this.name = attachment.name;
        this.sizeHint = attachment.sizeHint;
        this.errorMessage = attachment.errorMessage;
        this.more = attachment.more;
        this.success = attachment.success;
        this.agm = agm;
        if (parent) {
            this.parent = parent;
        }
    }
    AttachmentImpl.prototype.getData = function (callback) {
        return getAttachment_1.getAttachment(this.agm, this.emailIds, this.ids, callback);
    };
    return AttachmentImpl;
}());
exports.AttachmentImpl = AttachmentImpl;


/***/ }),

/***/ "./src/outlook/items/EmailImplementation.ts":
/*!**************************************************!*\
  !*** ./src/outlook/items/EmailImplementation.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Manager_1 = __webpack_require__(/*! ./Manager */ "./src/outlook/items/Manager.ts");
var AttachmentImplementation_1 = __webpack_require__(/*! ./AttachmentImplementation */ "./src/outlook/items/AttachmentImplementation.ts");
var EmailImpl = (function () {
    function EmailImpl(email, agm) {
        var _this = this;
        if (email.attachments && email.attachments.length > 0) {
            this.attachments = [];
            email.attachments.forEach(function (att) {
                _this.attachments.push(new AttachmentImplementation_1.AttachmentImpl(att, agm, _this));
            });
        }
        this.bcc = email.bcc;
        this.body = email.body;
        this.bodyHtml = email.bodyHtml;
        this.cc = email.cc;
        this.date = email.date;
        this.ids = email.ids;
        this.sender = email.sender;
        this.subject = email.subject;
        this.to = email.to;
        this.entityType = email.entityType;
    }
    EmailImpl.prototype.show = function () {
        return Manager_1.default.showItemMethod(this.ids, "showEmail");
    };
    EmailImpl.prototype.saveToFile = function () {
        return Manager_1.default.saveItemMethod(this.ids, "saveEmail");
    };
    EmailImpl.prototype.getAsMsg = function () {
        return Manager_1.default.getItemAsMsg(this.ids);
    };
    EmailImpl.prototype.track = function (conversationId) {
        return Manager_1.default.handleTrackingEmails("track", this.ids, conversationId);
    };
    EmailImpl.prototype.untrack = function () {
        return Manager_1.default.handleTrackingEmails("untrack", this.ids);
    };
    return EmailImpl;
}());
exports.EmailImpl = EmailImpl;


/***/ }),

/***/ "./src/outlook/items/Manager.ts":
/*!**************************************!*\
  !*** ./src/outlook/items/Manager.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(/*! ../helpers/index */ "./src/outlook/helpers/index.ts");
var methodNames_1 = __webpack_require__(/*! ../helpers/methodNames */ "./src/outlook/helpers/methodNames.ts");
var validations_1 = __webpack_require__(/*! ../helpers/validations */ "./src/outlook/helpers/validations.ts");
var GetItemAsMsgDictionary_1 = __webpack_require__(/*! ../dictionaries/GetItemAsMsgDictionary */ "./src/outlook/dictionaries/GetItemAsMsgDictionary.ts");
var TrackEmailDictionary_1 = __webpack_require__(/*! ../dictionaries/TrackEmailDictionary */ "./src/outlook/dictionaries/TrackEmailDictionary.ts");
var Manager = (function () {
    function Manager() {
    }
    Manager.prototype.init = function (agm) {
        this.agm = agm;
    };
    Manager.prototype.showItemMethod = function (ids, methodName) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!index_1.isOutlookEnabled(_this.agm)) {
                reject("The method \"" + methodName + "\" is not available");
                return;
            }
            ids = _this.validateIds(ids);
            var successHandler = function () {
                resolve(ids);
            };
            var errorHandler = function (err) {
                reject(err.message);
                return;
            };
            _this.agm.invoke(methodNames_1.ShowItemMethodName, { itemT42Ids: ids })
                .then(function () { return successHandler(); })
                .catch(function (err) { return errorHandler(err); });
        });
    };
    Manager.prototype.saveItemMethod = function (ids, methodName) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!index_1.isOutlookEnabled(_this.agm)) {
                reject("The method \"" + methodName + "\" is not available");
                return;
            }
            var successHandler = function (r) {
                resolve(r.returned.url);
            };
            var errorHandler = function (err) {
                reject(err.message);
                return;
            };
            _this.agm.invoke(methodNames_1.SaveItemMethodName, { itemT42Ids: ids })
                .then(function (r) { return successHandler(r); })
                .catch(function (err) { return errorHandler(err); });
        });
    };
    Manager.prototype.getItemAsMsg = function (ids) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!index_1.isOutlookEnabled(_this.agm)) {
                reject("The method \"getAsMsg\" is not available");
                return;
            }
            var cookie = new Date().getTime().toString();
            var successHandler = function () {
                GetItemAsMsgDictionary_1.default.add(cookie, { resolve: resolve, reject: reject });
            };
            var errorHandler = function (err) {
                reject(err.message);
                return;
            };
            var getItemOptions = {
                itemIds: ids,
                callback: methodNames_1.OutlookGetItemAsMsgMethodName,
                cookie: cookie,
            };
            _this.agm.invoke(methodNames_1.CRMGetItemAsMsgMethodName, getItemOptions)
                .then(function () { return successHandler(); })
                .catch(function (err) { return errorHandler(err); });
        });
    };
    Manager.prototype.handleTrackingEmails = function (action, emailIds, conversationId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!index_1.isOutlookEnabled(_this.agm)) {
                reject("The method \"" + action + "\" is not available");
                return;
            }
            var id = conversationId ? validations_1.validateId(conversationId) : null;
            var isTrackEmail = action === "track";
            var conversationIds = _this.combineConversationIds(emailIds, id, isTrackEmail);
            var successHandler = function () {
                resolve({ emailIds: emailIds, conversationIds: conversationIds });
                if (!isTrackEmail) {
                    TrackEmailDictionary_1.default.remove(emailIds);
                    var untrackIds = emailIds.filter(function (ids) { return ids.systemName === ("Outlook.ConversationId"); });
                    TrackEmailDictionary_1.default.add(emailIds, untrackIds);
                }
            };
            var errorHandler = function (err) {
                reject(err.message);
                return;
            };
            var methodName = isTrackEmail ? methodNames_1.SyncTrackEmailMethodName : methodNames_1.SyncUntrackEmailMethodName;
            var params = { emailIds: emailIds, conversationIds: conversationIds };
            return _this.agm.invoke(methodName, params)
                .then(successHandler)
                .catch(errorHandler);
        });
    };
    Manager.prototype.validateIds = function (ids) {
        if (!ids) {
            throw new Error("\"ids\" are mandatory");
        }
        if (!Array.isArray(ids) || ids.length === 0) {
            throw new Error("Invalid type of ids");
        }
        return ids.map(function (id) { return validations_1.validateId(id); });
    };
    Manager.prototype.combineConversationIds = function (ids, conversationId, isTrackEmail) {
        var conversationIds = TrackEmailDictionary_1.default.containsIds(ids) ? TrackEmailDictionary_1.default.get(ids) : [];
        if (isTrackEmail) {
            var newConversationIds = conversationId ? conversationId : index_1.generateConversationId();
            conversationIds.push(newConversationIds);
            if (!TrackEmailDictionary_1.default.containsIds(ids)) {
                TrackEmailDictionary_1.default.add(ids, conversationIds);
            }
        }
        return conversationIds;
    };
    return Manager;
}());
exports.Manager = Manager;
exports.default = new Manager();


/***/ }),

/***/ "./src/outlook/items/TaskImplementation.ts":
/*!*************************************************!*\
  !*** ./src/outlook/items/TaskImplementation.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Manager_1 = __webpack_require__(/*! ./Manager */ "./src/outlook/items/Manager.ts");
var AttachmentImplementation_1 = __webpack_require__(/*! ./AttachmentImplementation */ "./src/outlook/items/AttachmentImplementation.ts");
var index_1 = __webpack_require__(/*! ../helpers/index */ "./src/outlook/helpers/index.ts");
var TaskImpl = (function () {
    function TaskImpl(task, agm) {
        var _this = this;
        if (task.attachments && task.attachments.length > 0) {
            this.attachments = [];
            task.attachments.forEach(function (att) {
                _this.attachments.push(new AttachmentImplementation_1.AttachmentImpl(att, agm, _this));
            });
        }
        this.actualWork = task.actualWork;
        this.body = task.body;
        this.creationTime = task.creationTime;
        this.dateCompleted = task.dateCompleted;
        this.dueDate = task.dueDate;
        this.ids = task.ids;
        this.priority = index_1.getTaskPriority(task.importance);
        this.reminderTime = task.reminderTime;
        this.startDate = task.startDate;
        this.subject = task.subject;
        this.entityType = task.entityType;
    }
    TaskImpl.prototype.show = function () {
        return Manager_1.default.showItemMethod(this.ids, "showTask");
    };
    TaskImpl.prototype.saveToFile = function () {
        return Manager_1.default.saveItemMethod(this.ids, "saveTask");
    };
    return TaskImpl;
}());
exports.TaskImpl = TaskImpl;


/***/ }),

/***/ "./src/outlook/main.ts":
/*!*****************************!*\
  !*** ./src/outlook/main.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var callback_registry_1 = __webpack_require__(/*! callback-registry */ "./node_modules/callback-registry/lib/index.js");
var Manager_1 = __webpack_require__(/*! ./items/Manager */ "./src/outlook/items/Manager.ts");
var createEmail_1 = __webpack_require__(/*! ./methods/createEmail */ "./src/outlook/methods/createEmail.ts");
var createLocalEmail_1 = __webpack_require__(/*! ./methods/createLocalEmail */ "./src/outlook/methods/createLocalEmail.ts");
var createTask_1 = __webpack_require__(/*! ./methods/createTask */ "./src/outlook/methods/createTask.ts");
var registerAgmMethods_1 = __webpack_require__(/*! ./registerAgmMethods */ "./src/outlook/registerAgmMethods.ts");
var handleTrackingItems_1 = __webpack_require__(/*! ./methods/handleTrackingItems */ "./src/outlook/methods/handleTrackingItems.ts");
var itemFromJSON_1 = __webpack_require__(/*! ./methods/itemFromJSON */ "./src/outlook/methods/itemFromJSON.ts");
var registerEventListeners_1 = __webpack_require__(/*! ./registerEventListeners */ "./src/outlook/registerEventListeners.ts");
function default_1(config) {
    var outlook;
    if (!config.agm) {
        throw Error("config.agm is required");
    }
    var callbacks = callback_registry_1.default();
    var agm = config.agm;
    Manager_1.default.init(agm);
    registerAgmMethods_1.registerAgmMethods(agm, callbacks);
    registerEventListeners_1.registerEventListeners(agm, callbacks);
    var onAddinStatusChanged = function (callback) {
        return registerEventListeners_1.registerOnAddinStatusChanged(agm, callback, callbacks);
    };
    var onEmailReceived = function (callback) {
        return registerEventListeners_1.registerOnEmailReceived(agm, callback, callbacks);
    };
    var onTaskCreated = function (callback) {
        return registerEventListeners_1.registerOnTaskCreated(agm, callback, callbacks);
    };
    var onTrackEmail = function (callback) {
        return registerEventListeners_1.registerTrackEmail(agm, callback, callbacks);
    };
    var onUntrackEmail = function (callback) {
        return registerEventListeners_1.registerUntrackEmail(agm, callback, callbacks);
    };
    var onTrackCalendarEvent = function (callback) {
        return registerEventListeners_1.registerTrackItem(agm, callback, callbacks);
    };
    var onUntrackCalendarEvent = function (callback) {
        return registerEventListeners_1.registerUntrackItem(agm, callback, callbacks);
    };
    var onSecureReply = function (callback) {
        return registerEventListeners_1.registerSecureReply(agm, callback, callbacks);
    };
    var onDisplaySecureEmail = function (callback) {
        return registerEventListeners_1.registerDisplaySecureEmail(agm, callback, callbacks);
    };
    var ready = function () { return new Promise(function (resolve) {
        resolve(outlook);
    }); };
    var newEmail = function (emailParams, options) {
        if (emailParams === void 0) { emailParams = {}; }
        return createEmail_1.createEmail(agm, emailParams, options);
    };
    var trackCalendarEvent = function (event, conversationId) {
        return handleTrackingItems_1.handleTrackingItems(agm, "track", event, conversationId);
    };
    var untrackCalendarEvent = function (event) {
        return handleTrackingItems_1.handleTrackingItems(agm, "untrack", event);
    };
    var createLocalEmail = function (localEmailParams) {
        return createLocalEmail_1.createLocalEmailMethod(agm, localEmailParams);
    };
    var newTask = function (taskParams, options) {
        if (taskParams === void 0) { taskParams = {}; }
        return createTask_1.createTask(agm, taskParams, options);
    };
    var emailFromJSON = function (email) { return itemFromJSON_1.itemFromJSON(email, agm, "email"); };
    var taskFromJSON = function (task) { return itemFromJSON_1.itemFromJSON(task, agm, "task"); };
    var attachmentFromJSON = function (attachment) { return itemFromJSON_1.itemFromJSON(attachment, agm, "attachment"); };
    var showEmail = function (ids) {
        return Manager_1.default.showItemMethod(ids, "showEmail");
    };
    var showTask = function (ids) {
        return Manager_1.default.showItemMethod(ids, "showTask");
    };
    outlook = {
        ready: ready,
        newEmail: newEmail,
        trackCalendarEvent: trackCalendarEvent,
        untrackCalendarEvent: untrackCalendarEvent,
        createLocalEmail: createLocalEmail,
        newTask: newTask,
        emailFromJSON: emailFromJSON,
        taskFromJSON: taskFromJSON,
        attachmentFromJSON: attachmentFromJSON,
        showEmail: showEmail,
        showTask: showTask,
        onAddinStatusChanged: onAddinStatusChanged,
        onEmailReceived: onEmailReceived,
        onTaskCreated: onTaskCreated,
        onTrackEmail: onTrackEmail,
        onUntrackEmail: onUntrackEmail,
        onTrackCalendarEvent: onTrackCalendarEvent,
        onUntrackCalendarEvent: onUntrackCalendarEvent,
        onSecureReply: onSecureReply,
        onDisplaySecureEmail: onDisplaySecureEmail,
        get addinStatus() {
            return registerEventListeners_1.connected;
        },
    };
    return outlook;
}
exports.default = default_1;


/***/ }),

/***/ "./src/outlook/methods/createEmail.ts":
/*!********************************************!*\
  !*** ./src/outlook/methods/createEmail.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = __webpack_require__(/*! ../helpers */ "./src/outlook/helpers/index.ts");
var createItem_1 = __webpack_require__(/*! ../helpers/createItem */ "./src/outlook/helpers/createItem.ts");
exports.createEmail = function (agm, email, options) {
    return new Promise(function (resolve, reject) {
        if (!helpers_1.isOutlookEnabled(agm)) {
            reject("The method \"newEmail\" is not available");
            return;
        }
        return createItem_1.createItem(agm, email, "email", options)
            .then(function () { return resolve(); })
            .catch(reject);
    });
};


/***/ }),

/***/ "./src/outlook/methods/createLocalEmail.ts":
/*!*************************************************!*\
  !*** ./src/outlook/methods/createLocalEmail.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(/*! ../helpers/index */ "./src/outlook/helpers/index.ts");
var EmailImplementation_1 = __webpack_require__(/*! ../items/EmailImplementation */ "./src/outlook/items/EmailImplementation.ts");
var methodNames_1 = __webpack_require__(/*! ../helpers/methodNames */ "./src/outlook/helpers/methodNames.ts");
var validations_1 = __webpack_require__(/*! ../helpers/validations */ "./src/outlook/helpers/validations.ts");
var createLocalEmail = function (ids, emailParams) {
    var localEmail = __assign(__assign({}, index_1.convertToT42Email(emailParams)), { ids: ids });
    Object.keys(localEmail).forEach(function (key) {
        if (!localEmail[key]) {
            delete localEmail[key];
        }
    });
    return localEmail;
};
exports.createLocalEmailMethod = function (agm, localEmailParams) {
    return new Promise(function (resolve, reject) {
        validations_1.validateLocalEmailParameters(agm, localEmailParams);
        var successHandler = function (res, emailParams) {
            var localEmail = new EmailImplementation_1.EmailImpl(createLocalEmail(res.returned.localEmailIds, emailParams), agm);
            resolve(localEmail);
        };
        var errorHandler = function (err) {
            reject(err.message);
            return;
        };
        if (localEmailParams.location) {
            validations_1.validateLocation(localEmailParams.location);
        }
        return agm.invoke(methodNames_1.CreateLocalEmailMethodName, getParams(localEmailParams))
            .then(function (res) { return successHandler(res, localEmailParams); })
            .catch(function (err) { return errorHandler(err); });
    });
};
var getT42Email = function (localEmailParams) {
    return Object.keys(localEmailParams).reduce(function (obj, key) {
        if (key === "additionalProps") {
            return obj;
        }
        obj[key] = localEmailParams[key];
        return obj;
    }, {});
};
var getLocation = function (location) {
    var defaultFolders = index_1.getOlDefaultFolders();
    if (!location) {
        return { defaultFolderIndex: defaultFolders.$Inbox };
    }
    var emailIds = location.ids;
    if (emailIds && emailIds[0].nativeId && emailIds[0].systemName) {
        return { parentItemIds: emailIds };
    }
    if (typeof location === "string") {
        if (location.indexOf("$") < 0) {
            return { folderPath: location };
        }
        if (typeof defaultFolders[location] === "number") {
            return { defaultFolderIndex: defaultFolders[location] };
        }
    }
    return { defaultFolderIndex: defaultFolders.$Inbox };
};
var getParams = function (localEmailParams) {
    var params = {
        location: getLocation(localEmailParams.location),
        email: index_1.convertToT42Email(getT42Email(localEmailParams)),
    };
    if (localEmailParams.additionalProps) {
        params.additionalProps = localEmailParams.additionalProps;
    }
    return params;
};


/***/ }),

/***/ "./src/outlook/methods/createTask.ts":
/*!*******************************************!*\
  !*** ./src/outlook/methods/createTask.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(/*! ../helpers/index */ "./src/outlook/helpers/index.ts");
var createItem_1 = __webpack_require__(/*! ../helpers/createItem */ "./src/outlook/helpers/createItem.ts");
exports.createTask = function (agm, task, options) {
    return new Promise(function (resolve, reject) {
        if (!index_1.isOutlookEnabled(agm)) {
            reject("The method \"newTask\" is not available");
            return;
        }
        createItem_1.createItem(agm, task, "task", options)
            .then(function () { return resolve(); })
            .catch(reject);
    });
};


/***/ }),

/***/ "./src/outlook/methods/getAttachment.ts":
/*!**********************************************!*\
  !*** ./src/outlook/methods/getAttachment.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(/*! ../helpers/index */ "./src/outlook/helpers/index.ts");
var methodNames_1 = __webpack_require__(/*! ../helpers/methodNames */ "./src/outlook/helpers/methodNames.ts");
var GetAttachmentDictionary_1 = __webpack_require__(/*! ../dictionaries/GetAttachmentDictionary */ "./src/outlook/dictionaries/GetAttachmentDictionary.ts");
exports.getAttachment = function (agm, emailIds, ids, callback) {
    return new Promise(function (resolve, reject) {
        if (!index_1.isOutlookEnabled(agm)) {
            reject("The method \"getAttachments\" is not available");
            return;
        }
        var cookie = new Date().getTime().toString();
        var successHandler = function () {
            GetAttachmentDictionary_1.default.add(cookie, { callback: callback, resolve: resolve, reject: reject });
        };
        var errorHandler = function (err) {
            reject(err.message);
            return;
        };
        var getAttachmentOptions = {
            emailIds: emailIds,
            attachmentIds: ids,
            callback: methodNames_1.OutlookGetAttachmentMethodName,
            cookie: cookie,
        };
        return agm.invoke(methodNames_1.CRMGetAttachmentMethodName, getAttachmentOptions)
            .then(function () { return successHandler(); })
            .catch(function (err) { return errorHandler(err); });
    });
};


/***/ }),

/***/ "./src/outlook/methods/handleTrackingItems.ts":
/*!****************************************************!*\
  !*** ./src/outlook/methods/handleTrackingItems.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(/*! ../helpers/index */ "./src/outlook/helpers/index.ts");
var methodNames_1 = __webpack_require__(/*! ../helpers/methodNames */ "./src/outlook/helpers/methodNames.ts");
var validations_1 = __webpack_require__(/*! ../helpers/validations */ "./src/outlook/helpers/validations.ts");
var TrackItemDictionary_1 = __webpack_require__(/*! ../dictionaries/TrackItemDictionary */ "./src/outlook/dictionaries/TrackItemDictionary.ts");
var combineConversationIds = function (event, conversationId, isTrackEmail) {
    var conversationIds = TrackItemDictionary_1.default.containsIds(event.ids) ? TrackItemDictionary_1.default.get(event.ids) : [];
    if (isTrackEmail) {
        var newConversationIds = conversationId ? conversationId : index_1.generateConversationId();
        conversationIds.push(newConversationIds);
        if (!TrackItemDictionary_1.default.containsIds(event.ids)) {
            TrackItemDictionary_1.default.add(event.ids, conversationIds);
        }
    }
    return conversationIds;
};
exports.handleTrackingItems = function (agm, action, event, conversationId) {
    return new Promise(function (resolve, reject) {
        validations_1.validateCalendarEventParameters(agm, action, event);
        var id = conversationId ? validations_1.validateId(conversationId) : null;
        var isTrackItem = action === "track";
        var conversationIds = combineConversationIds(event, id, isTrackItem);
        var successHandler = function () {
            var response = { event: event, conversationIds: conversationIds };
            resolve(response);
            if (!isTrackItem) {
                TrackItemDictionary_1.default.remove(event.ids);
                var untrackIds = event.ids.filter(function (ids) { return ids.systemName === ("Outlook.ConversationId"); });
                TrackItemDictionary_1.default.add(event.ids, untrackIds);
            }
        };
        var errorHandler = function (err) {
            reject(err.message);
            return;
        };
        var methodName = isTrackItem ? methodNames_1.SyncTrackCalendarItemMethodName : methodNames_1.SyncUntrackCalendarItemMethodName;
        var params = { itemIds: event.ids, conversationIds: conversationIds };
        return agm.invoke(methodName, params)
            .then(function (res) { return successHandler(); })
            .catch(function (err) { return errorHandler(err); });
    });
};


/***/ }),

/***/ "./src/outlook/methods/itemFromJSON.ts":
/*!*********************************************!*\
  !*** ./src/outlook/methods/itemFromJSON.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TaskImplementation_1 = __webpack_require__(/*! ../items/TaskImplementation */ "./src/outlook/items/TaskImplementation.ts");
var EmailImplementation_1 = __webpack_require__(/*! ../items/EmailImplementation */ "./src/outlook/items/EmailImplementation.ts");
var AttachmentImplementation_1 = __webpack_require__(/*! ../items/AttachmentImplementation */ "./src/outlook/items/AttachmentImplementation.ts");
exports.itemFromJSON = function (item, agm, itemType) {
    if (!item) {
        throw new Error(itemType + " is mandatory");
    }
    if (!item.ids) {
        throw new Error(itemType + " ids property is mandatory");
    }
    if (itemType === "email") {
        return new EmailImplementation_1.EmailImpl(item, agm);
    }
    else if (itemType === "task") {
        return new TaskImplementation_1.TaskImpl(item, agm);
    }
    else {
        return new AttachmentImplementation_1.AttachmentImpl(item, agm);
    }
};


/***/ }),

/***/ "./src/outlook/registerAgmMethods.ts":
/*!*******************************************!*\
  !*** ./src/outlook/registerAgmMethods.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var EmailImplementation_1 = __webpack_require__(/*! ./items/EmailImplementation */ "./src/outlook/items/EmailImplementation.ts");
var TaskImplementation_1 = __webpack_require__(/*! ./items/TaskImplementation */ "./src/outlook/items/TaskImplementation.ts");
var index_1 = __webpack_require__(/*! ./helpers/index */ "./src/outlook/helpers/index.ts");
var methodNames_1 = __webpack_require__(/*! ./helpers/methodNames */ "./src/outlook/helpers/methodNames.ts");
var CreateItemDictionary_1 = __webpack_require__(/*! ./dictionaries/CreateItemDictionary */ "./src/outlook/dictionaries/CreateItemDictionary.ts");
var GetAttachmentDictionary_1 = __webpack_require__(/*! ./dictionaries/GetAttachmentDictionary */ "./src/outlook/dictionaries/GetAttachmentDictionary.ts");
var ChunkDataDictionary_1 = __webpack_require__(/*! ./dictionaries/ChunkDataDictionary */ "./src/outlook/dictionaries/ChunkDataDictionary.ts");
var GetItemAsMsgDictionary_1 = __webpack_require__(/*! ./dictionaries/GetItemAsMsgDictionary */ "./src/outlook/dictionaries/GetItemAsMsgDictionary.ts");
var TrackEmailDictionary_1 = __webpack_require__(/*! ./dictionaries/TrackEmailDictionary */ "./src/outlook/dictionaries/TrackEmailDictionary.ts");
var TrackItemDictionary_1 = __webpack_require__(/*! ./dictionaries/TrackItemDictionary */ "./src/outlook/dictionaries/TrackItemDictionary.ts");
var registerOnEmailReceived = function (agm, callbacks) {
    return agm.register(methodNames_1.OnEmailReceivedMethodName, function (args) {
        var email = new EmailImplementation_1.EmailImpl(args.email, agm);
        callbacks.execute("onEmailReceived", email);
        return { email: email };
    });
};
var registerOnTaskCreated = function (agm, callbacks) {
    return agm.register(methodNames_1.OnTaskCreatedMethodName, function (args) {
        var task = new TaskImplementation_1.TaskImpl(args, agm);
        callbacks.execute("onTaskCreated", task);
        return { task: task };
    });
};
var registerOnSendMethod = function (agm) {
    return agm.register(methodNames_1.OnSendMethodName, function (args) {
        var cookie = args.cookie, email = args.email, task = args.task;
        if (!CreateItemDictionary_1.default.containsKey(cookie) ||
            typeof CreateItemDictionary_1.default.get(cookie).onSent !== "function") {
            return;
        }
        if (email && !task) {
            CreateItemDictionary_1.default.get(cookie).onSent(new EmailImplementation_1.EmailImpl(email, agm));
            return { cookie: cookie, email: email };
        }
        else if (!email && task) {
            CreateItemDictionary_1.default.get(cookie).onSent(new TaskImplementation_1.TaskImpl(task, agm));
            return { cookie: cookie, task: task };
        }
        CreateItemDictionary_1.default.remove(cookie);
    });
};
var registerOnCancelMethod = function (agm) {
    return agm.register(methodNames_1.OnCancelMethodName, function (args) {
        var cookie = args.cookie;
        if (!CreateItemDictionary_1.default.containsKey(cookie) ||
            typeof CreateItemDictionary_1.default.get(cookie).onCanceled !== "function") {
            return;
        }
        CreateItemDictionary_1.default.get(cookie).onCanceled();
        CreateItemDictionary_1.default.remove(cookie);
        return { cookie: cookie };
    });
};
var getChunkDataSuccessCallback = function (methodCallbacksDictionary, cookie) {
    var attachmentData = index_1.concatChunkData(ChunkDataDictionary_1.default.get(cookie));
    if (methodCallbacksDictionary.containsKey(cookie)) {
        methodCallbacksDictionary.get(cookie).resolve(index_1.decodeData(attachmentData));
    }
    ChunkDataDictionary_1.default.remove(cookie);
    methodCallbacksDictionary.remove(cookie);
};
var getChunkDataErrorCallback = function (methodCallbacksDictionary, cookie, errorMessage) {
    if (methodCallbacksDictionary.containsKey(cookie)) {
        methodCallbacksDictionary.get(cookie).reject(errorMessage);
    }
    ChunkDataDictionary_1.default.remove(cookie);
    methodCallbacksDictionary.remove(cookie);
};
var executeGetDataCallback = function (percent, cookie) {
    if (percent <= 100 &&
        GetAttachmentDictionary_1.default.containsKey(cookie) &&
        typeof GetAttachmentDictionary_1.default.get(cookie).callback === "function") {
        GetAttachmentDictionary_1.default.get(cookie).callback(percent);
    }
};
var registerGetAttachment = function (agm) {
    var percent = 0;
    return agm.register(methodNames_1.OutlookGetAttachmentMethodName, function (args) {
        var cookie = args.cookie, data = args.data, errorMessage = args.errorMessage, success = args.success, more = args.more, length = args.length, totalLength = args.totalLength;
        ChunkDataDictionary_1.default.add(cookie, data);
        if (success) {
            percent += (length / totalLength) * 100;
            executeGetDataCallback(percent, cookie);
            if (!more) {
                if (percent < 100) {
                    executeGetDataCallback(100, cookie);
                }
                percent = 0;
                getChunkDataSuccessCallback(GetAttachmentDictionary_1.default, cookie);
            }
        }
        else {
            percent = 0;
            getChunkDataErrorCallback(GetAttachmentDictionary_1.default, cookie, errorMessage);
        }
        return {};
    });
};
var registerGetItemAsMsgMethod = function (agm) {
    return agm.register(methodNames_1.OutlookGetItemAsMsgMethodName, function (args) {
        var cookie = args.cookie, data = args.data, errorMessage = args.errorMessage, success = args.success, more = args.more;
        ChunkDataDictionary_1.default.add(cookie, data);
        if (success) {
            if (!more) {
                getChunkDataSuccessCallback(GetItemAsMsgDictionary_1.default, cookie);
            }
        }
        else {
            getChunkDataErrorCallback(GetItemAsMsgDictionary_1.default, cookie, errorMessage);
        }
        return {};
    });
};
exports.registerCRMTrackEmail = function (agm, callbacks) {
    return agm.register(methodNames_1.OnTrackEmailMethodName, function (args) {
        var conversationIds = args.conversationIds;
        var email = new EmailImplementation_1.EmailImpl(args.email, agm);
        TrackEmailDictionary_1.default.add(email.ids, conversationIds);
        callbacks.execute("onEmailTracked", { conversationIds: conversationIds, email: email });
        return {};
    });
};
exports.registerCRMUntrackEmail = function (agm, callbacks) {
    return agm.register(methodNames_1.OnUntrackEmailMethodName, function (args) {
        var conversationIds = args.conversationIds, emailIds = args.emailIds;
        callbacks.execute("onEmailUntracked", { conversationIds: conversationIds, emailIds: emailIds });
        return {};
    });
};
exports.registerCRMTrackItem = function (agm, callbacks) {
    return agm.register(methodNames_1.OnTrackItemMethodName, function (args) {
        var conversationIds = args.conversationIds, item = args.item;
        TrackItemDictionary_1.default.add(item.ids, conversationIds);
        callbacks.execute("onItemTracked", { conversationIds: conversationIds, event: item });
        return { conversationIds: conversationIds, event: item };
    });
};
exports.registerCRMUntrackItem = function (agm, callbacks) {
    return agm.register(methodNames_1.OnUntrackItemMethodName, function (args) {
        var conversationIds = args.conversationIds, itemIds = args.itemIds;
        callbacks.execute("onItemUntracked", { conversationIds: conversationIds, eventIds: itemIds });
        return { conversationIds: conversationIds, eventIds: itemIds };
    });
};
var registerSecureReply = function (agm, callbacks) {
    return agm.register(methodNames_1.SecureReplyMethodName, function (args) {
        var email = new EmailImplementation_1.EmailImpl(args.inReplyToMail, agm);
        callbacks.execute("onSecureReply", email);
        return { email: email };
    });
};
var registerDisplaySecureEmail = function (agm, callbacks) {
    return agm.register(methodNames_1.DisplaySecureMailMethodName, function (args) {
        var email = new EmailImplementation_1.EmailImpl(args.inReplyToMail, agm);
        callbacks.execute("onDisplaySecureEmail", email);
        return { email: email };
    });
};
exports.registerAgmMethods = function (agm, callbacks) {
    registerOnEmailReceived(agm, callbacks);
    registerOnTaskCreated(agm, callbacks);
    registerOnSendMethod(agm);
    registerOnCancelMethod(agm);
    registerGetItemAsMsgMethod(agm);
    registerGetAttachment(agm);
    registerSecureReply(agm, callbacks);
    registerDisplaySecureEmail(agm, callbacks);
};


/***/ }),

/***/ "./src/outlook/registerEventListeners.ts":
/*!***********************************************!*\
  !*** ./src/outlook/registerEventListeners.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(/*! ./helpers/index */ "./src/outlook/helpers/index.ts");
var registerAgmMethods_1 = __webpack_require__(/*! ./registerAgmMethods */ "./src/outlook/registerAgmMethods.ts");
var methodNames_1 = __webpack_require__(/*! ./helpers/methodNames */ "./src/outlook/helpers/methodNames.ts");
exports.connected = false;
var onOutlookEnabled = function (agm, callbacks) {
    if (index_1.isOutlookEnabled(agm)) {
        exports.connected = true;
    }
    agm.methodAdded(function (m) {
        if (m.name === methodNames_1.CreateItemMethodName) {
            if (exports.connected === false) {
                exports.connected = true;
                callbacks.execute("onAddinStatusChanged", { connected: exports.connected });
            }
        }
    });
};
var onOutlookDisabled = function (agm, callbacks) {
    agm.methodRemoved(function (m) {
        if (m.name === methodNames_1.CreateItemMethodName) {
            exports.connected = false;
            callbacks.execute("onAddinStatusChanged", { connected: exports.connected });
        }
    });
};
exports.registerEventListeners = function (agm, callbacks) {
    onOutlookEnabled(agm, callbacks);
    onOutlookDisabled(agm, callbacks);
};
exports.registerOnAddinStatusChanged = function (agm, callback, callbacks) {
    callback({ connected: exports.connected });
    return callbacks.add("onAddinStatusChanged", callback);
};
exports.registerOnEmailReceived = function (agm, callback, callbacks) {
    return callbacks.add("onEmailReceived", callback);
};
exports.registerOnTaskCreated = function (agm, callback, callbacks) {
    return callbacks.add("onTaskCreated", callback);
};
var unsubscribeFunction = function (uns, agm, methodName) {
    uns();
    if (agm.methods({ name: methodName }).length > 0) {
        agm.unregister(methodName);
    }
};
exports.registerTrackEmail = function (agm, callback, callbacks) {
    if (agm.methods({ name: methodNames_1.OnTrackEmailMethodName }).length === 0) {
        registerAgmMethods_1.registerCRMTrackEmail(agm, callbacks);
        var uns_1 = callbacks.add("onEmailTracked", callback);
        return function () { return unsubscribeFunction(uns_1, agm, methodNames_1.OnTrackEmailMethodName); };
    }
    else {
        throw Error("Another client has already subscribed for tracking emails");
    }
};
exports.registerUntrackEmail = function (agm, callback, callbacks) {
    if (agm.methods({ name: methodNames_1.OnUntrackEmailMethodName }).length === 0) {
        registerAgmMethods_1.registerCRMUntrackEmail(agm, callbacks);
        var uns_2 = callbacks.add("onEmailUntracked", callback);
        return function () { return unsubscribeFunction(uns_2, agm, methodNames_1.OnUntrackEmailMethodName); };
    }
    else {
        throw Error("Another client has already subscribed for untracking emails");
    }
};
exports.registerTrackItem = function (agm, callback, callbacks) {
    if (agm.methods({ name: methodNames_1.OnTrackItemMethodName }).length === 0) {
        registerAgmMethods_1.registerCRMTrackItem(agm, callbacks);
        var uns_3 = callbacks.add("onItemTracked", callback);
        return function () { return unsubscribeFunction(uns_3, agm, methodNames_1.OnTrackItemMethodName); };
    }
    else {
        throw Error("Another client has already subscribed for tracking calendar events");
    }
};
exports.registerUntrackItem = function (agm, callback, callbacks) {
    if (agm.methods({ name: methodNames_1.OnUntrackItemMethodName }).length === 0) {
        registerAgmMethods_1.registerCRMUntrackItem(agm, callbacks);
        var uns_4 = callbacks.add("onItemUntracked", callback);
        return function () { return unsubscribeFunction(uns_4, agm, methodNames_1.OnUntrackItemMethodName); };
    }
    else {
        throw Error("Another client has already subscribed for untracking calendar events");
    }
};
exports.registerSecureReply = function (agm, callback, callbacks) {
    return callbacks.add("onSecureReply", callback);
};
exports.registerDisplaySecureEmail = function (agm, callback, callbacks) {
    return callbacks.add("onDisplaySecureEmail", callback);
};


/***/ }),

/***/ "./src/outlook/types.ts":
/*!******************************!*\
  !*** ./src/outlook/types.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TaskPriority;
(function (TaskPriority) {
    TaskPriority[TaskPriority["low"] = 0] = "low";
    TaskPriority[TaskPriority["normal"] = 1] = "normal";
    TaskPriority[TaskPriority["high"] = 2] = "high";
})(TaskPriority = exports.TaskPriority || (exports.TaskPriority = {}));


/***/ }),

/***/ "./src/version.ts":
/*!************************!*\
  !*** ./src/version.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.version = "1.7.3";


/***/ }),

/***/ "./src/word/const.ts":
/*!***************************!*\
  !*** ./src/word/const.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CloseMethodName = "T42.WordEditor.Closed";
exports.EditHtmlMethodName = "T42.Word.HtmlEdit";
exports.ReceiveHtmlMethodName = "T42.Word.HtmlReceive";
exports.ReturnHtmlMethodName = "T42.Word.ReturnHtml";
exports.OnReturnHtmlMethodName = "T42.Word.OnReturnHtml";
exports.ChunkSize = 4000000;


/***/ }),

/***/ "./src/word/document.ts":
/*!******************************!*\
  !*** ./src/word/document.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var const_1 = __webpack_require__(/*! ./const */ "./src/word/const.ts");
var CallbackFactory = __webpack_require__(/*! callback-registry */ "./node_modules/callback-registry/lib/index.js");
exports.default = (function (cookie, config, agm) {
    var _registry = CallbackFactory();
    var name = config.name;
    var data = config.data;
    var _html = "";
    var _docx = "";
    var getHtmlPromise;
    function onClose(callback) {
        return _registry.add("on-closed", callback);
    }
    function _close() {
        _registry.execute("on-closed");
    }
    function getHtml(callback) {
        return new Promise(function (resolve, reject) {
            agm.invoke(const_1.ReturnHtmlMethodName, {
                cookie: cookie,
                callbackMethod: const_1.OnReturnHtmlMethodName,
            });
            getHtmlPromise = resolve;
        });
    }
    function onChanged(callback) {
        return _registry.add("on-changed", callback);
    }
    function _combineChunks(newData, cb) {
        if (newData.length === newData.totalLength && newData.lengthDocx === newData.totalLengthDocx) {
            _html = newData.html;
            _docx = newData.docx;
            cb(_html, _docx);
        }
        else {
            if (newData.offset === 0) {
                _html = "";
            }
            if (newData.offsetDocx === 0) {
                _docx = "";
            }
            if (newData.html && newData.html.length > 0) {
                _html = _html.substr(0, newData.offset) + newData.html +
                    _html.substr(newData.offset + newData.length);
            }
            if (newData.docx && newData.docx.length > 0) {
                _docx = _docx.substr(0, newData.offsetDocx) + newData.docx +
                    _docx.substr(newData.offsetDocx + newData.lengthDocx);
            }
            var docxTotal = newData.totalLengthDocx || 0;
            if ((newData.totalLength === _html.length) &&
                (docxTotal === 0 || docxTotal === _docx.length)) {
                cb(_html, _docx);
            }
        }
    }
    function _onHtml(newData) {
        _combineChunks(newData, function (html, docx) {
            getHtmlPromise(html);
        });
    }
    function _onChanged(newData) {
        _combineChunks(newData, function (html, docx) {
            api.data = html;
            _registry.execute("on-changed", api.data, docx);
        });
    }
    var api = {
        name: name,
        data: data,
        getHtml: getHtml,
        onClose: onClose,
        onChanged: onChanged,
    };
    var events = {
        _onChanged: _onChanged,
        _close: _close,
        _onHtml: _onHtml,
    };
    return {
        documentApi: api,
        documentEvents: events,
    };
});


/***/ }),

/***/ "./src/word/main.ts":
/*!**************************!*\
  !*** ./src/word/main.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var const_1 = __webpack_require__(/*! ./const */ "./src/word/const.ts");
var document_1 = __webpack_require__(/*! ./document */ "./src/word/document.ts");
var utils_1 = __webpack_require__(/*! ./utils */ "./src/word/utils.ts");
var CallbackFactory = __webpack_require__(/*! callback-registry */ "./node_modules/callback-registry/lib/index.js");
exports.default = (function (config) {
    var agm = config.agm;
    var _registry = CallbackFactory();
    var connected = false;
    var documents = {};
    function openDocument(options) {
        return new Promise(function (resolve, reject) {
            var internalConfig = utils_1.mapOptions(options);
            var successHandler = function (args) {
                internalConfig.cookie = args.returned.sessionId;
                var doc = document_1.default(internalConfig.cookie, options, agm);
                documents[internalConfig.cookie] = doc;
                resolve(doc.documentApi);
            };
            var errorHandler = function (e) {
                console.warn(e);
                reject(e);
            };
            var offset = 0;
            var chunks = 0;
            var chunkedData = [];
            while (offset < options.data.length) {
                chunkedData.push(options.data.substr(offset, const_1.ChunkSize));
                offset += const_1.ChunkSize;
            }
            function sendChunks(args) {
                var chunk = chunkedData.splice(0, 1);
                if (chunk.length === 0) {
                    successHandler(args);
                    return;
                }
                internalConfig.sendDocx = true;
                if (options.isDocx) {
                    internalConfig.docx = chunk[0];
                    internalConfig.lengthDocx = chunk[0].length;
                    internalConfig.totalLengthDocx = options.data.length;
                    internalConfig.offsetDocx = chunks * const_1.ChunkSize;
                }
                else {
                    internalConfig.html = chunk[0];
                    internalConfig.length = chunk[0].length;
                    internalConfig.totalLength = options.data.length;
                    internalConfig.offset = chunks * const_1.ChunkSize;
                }
                invokeEditHtmlMethod(internalConfig).then(sendChunks).catch(errorHandler);
                chunks++;
            }
            sendChunks();
        });
    }
    agm.methodAdded(function (method) {
        if (method.name === const_1.EditHtmlMethodName) {
            if (connected === false) {
                connected = true;
                _registry.execute("onStatusChanged", { connected: connected });
            }
        }
    });
    agm.methodRemoved(function (method) {
        if (method.name === const_1.EditHtmlMethodName) {
            connected = false;
            _registry.execute("onStatusChanged", { connected: connected });
        }
    });
    agm.register(const_1.ReceiveHtmlMethodName, function (args, caller) {
        var document = documents[args.cookie];
        if (document) {
            document.documentEvents._onChanged(args);
        }
        return undefined;
    });
    agm.register(const_1.OnReturnHtmlMethodName, function (args, caller) {
        var document = documents[args.cookie];
        if (document) {
            document.documentEvents._onHtml(args);
        }
        return undefined;
    });
    agm.register({
        name: const_1.CloseMethodName,
        accepts: "String documentName, String cookie",
    }, function (args, caller) {
        var document = documents[args.cookie];
        if (document) {
            document.documentEvents._close();
        }
        delete documents[args.cookie];
        return undefined;
    });
    function invokeEditHtmlMethod(options) {
        return new Promise(function (resolve, reject) {
            if (!connected) {
                reject("Microsoft Word with Tick42 Add-in is not running");
            }
            else {
                agm.invoke(const_1.EditHtmlMethodName, options).then(resolve).catch(reject);
            }
        });
    }
    function ready() {
        return new Promise(function (resolve, reject) {
            resolve(api);
        });
    }
    function onAddinStatusChanged(callback) {
        if (agm.methods({ name: const_1.EditHtmlMethodName }).length > 0) {
            connected = true;
        }
        callback({ connected: connected });
        return _registry.add("onStatusChanged", callback);
    }
    var api = {
        get all() {
            return Object.keys(documents).map(function (k) {
                return documents[k].documentApi;
            });
        },
        openDocument: openDocument,
        ready: ready,
        onAddinStatusChanged: onAddinStatusChanged,
        get addinStatus() {
            return connected;
        },
    };
    return api;
});


/***/ }),

/***/ "./src/word/utils.ts":
/*!***************************!*\
  !*** ./src/word/utils.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var const_1 = __webpack_require__(/*! ./const */ "./src/word/const.ts");
function mapOptions(data) {
    var mappedOptions = {
        displayName: "",
        documentName: data.name,
        templateName: data.templateName,
        onSaved: const_1.ReceiveHtmlMethodName,
        onClosed: const_1.CloseMethodName,
    };
    return mappedOptions;
}
exports.mapOptions = mapOptions;


/***/ })

/******/ });
});
//# sourceMappingURL=office.js.map