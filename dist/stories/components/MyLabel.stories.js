"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpperCase = exports.Terciary = exports.Secondary = exports.Primary = void 0;
var MyLabel_1 = require("../../components/MyLabel");
var meta = {
    title: "UI/MyLabel",
    component: MyLabel_1.MyLabel,
    argTypes: {
        color: { control: "select" },
        fontColor: { control: "color" },
    },
    tags: ["UIcustom"],
};
exports.default = meta;
exports.Primary = {
    args: {
        label: "Hola mundo",
        size: "normal",
        color: "primary",
    },
};
exports.Secondary = {
    args: {
        label: "Hola mundo",
        size: "normal",
        color: "secondary",
    },
};
exports.Terciary = {
    args: {
        label: "Hola mundo",
        size: "normal",
        color: "tertiary",
    },
};
exports.UpperCase = {
    args: {
        label: "Hola mundo",
        size: "normal",
        allCaps: true,
    },
};
