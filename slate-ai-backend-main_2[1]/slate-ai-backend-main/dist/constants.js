"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GEMINI_API_KEY = exports.ENV = exports.PORT = exports.SERVER_URL = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.SERVER_URL = '0.0.0.0';
exports.PORT = process.env.PORT || '10000';
exports.ENV = process.env.NODE_ENV || 'production';
exports.GEMINI_API_KEY = process.env.GEMINI_API_KEY;
