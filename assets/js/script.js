"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const social_media_1 = __importDefault(require("./social-media"));
let sml = new social_media_1.default();
console.log(sml.getGitHub);
