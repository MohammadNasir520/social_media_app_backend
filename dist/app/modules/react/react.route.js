"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactRoutes = void 0;
const express_1 = __importDefault(require("express"));
const react_controller_1 = require("./react.controller");
const router = express_1.default.Router();
router.put('/create-react', react_controller_1.ReactController.createReact);
router.get('/:id', react_controller_1.ReactController.getAllReactsOfSinglePost);
router.get('/', react_controller_1.ReactController.getSingleReact);
exports.ReactRoutes = router;
