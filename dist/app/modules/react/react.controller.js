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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactController = void 0;
const react_service_1 = require("./react.service");
const createReact = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const ReactData = __rest(req.body, []);
    const result = yield react_service_1.ReactService.createReact(ReactData);
    res.status(200).json({
        success: true,
        message: 'React created successfully',
        data: result,
    });
});
const getAllReactsOfSinglePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const postId = req.params.id;
    const result = yield react_service_1.ReactService.getAllReactsOfSinglePost(postId);
    res.status(200).json({
        success: true,
        message: 'Reacts retrieved  successfully',
        data: result,
    });
});
const getSingleReact = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield react_service_1.ReactService.getSingleReact(id);
    res.status(200).json({
        success: true,
        message: 'Reacts retrieved  successfully',
        data: result,
    });
});
exports.ReactController = {
    createReact,
    getAllReactsOfSinglePost,
    getSingleReact,
};
