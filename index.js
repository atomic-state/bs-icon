"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
/**
 * Renders a Bootstrap Icon
 */
var Icon = function (_a) {
    var name = _a.name;
    return react_1.default.createElement("i", { className: "bi bi-".concat(name) });
};
exports.default = Icon;
//# sourceMappingURL=index.js.map