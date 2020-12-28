"use strict";

var __rest = (this && this.__rest) || function (s, e) {

    var t = {};

    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)

        t[p] = s[p];

    if (s != null && typeof Object.getOwnPropertySymbols === "function")

        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {

            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))

                t[p[i]] = s[p[i]];

        }

    return t;

};

var __importDefault = (this && this.__importDefault) || function (mod) {

    return (mod && mod.__esModule) ? mod : { "default": mod };

};

Object.defineProperty(exports, "__esModule", { value: true });

const react_1 = __importDefault(require("react"));

const TextArea_module_css_1 = __importDefault(require("./TextArea.module.css"));

const STYLES = ['done', 'wrong'];

const WRAP = ['soft', 'hard'];

const TextArea = (_a) => {

    var { children, style, name, id, placeHolder, value, form, wrap, cols, rows, minLenght, maxLenght, required, readOnly, disabled, autoFocus, resize, className } = _a, rest = __rest(_a, ["children", "style", "name", "id", "placeHolder", "value", "form", "wrap", "cols", "rows", "minLenght", "maxLenght", "required", "readOnly", "disabled", "autoFocus", "resize", "className"]);

    const checkTextAreaStyle = STYLES.includes(style) ? style : '';

    const checkReadOnly = WRAP.includes(wrap) ? wrap : WRAP[0];

    return (react_1.default.createElement("div", { className: `

			${TextArea_module_css_1.default.textarea_wrapper}

			${className}

		` },

        react_1.default.createElement("textarea", Object.assign({ className: `

			textarea

			${TextArea_module_css_1.default.textarea}

			${TextArea_module_css_1.default[`${checkTextAreaStyle}`]}

			${TextArea_module_css_1.default[`${resize ? 'resize' : ''}`]}

		`, name: name, id: id, cols: cols, placeholder: placeHolder, value: value, form: form, wrap: wrap, rows: rows, minLength: minLenght, maxLength: maxLenght, required: required, readOnly: readOnly, disabled: disabled, autoFocus: autoFocus }, rest), children)));

};

exports.default = TextArea;

