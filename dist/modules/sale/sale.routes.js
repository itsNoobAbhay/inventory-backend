"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const verifyAuth_1 = __importDefault(require("../../middlewares/verifyAuth"));
const sale_validator_1 = __importDefault(require("./sale.validator"));
const sale_controllers_1 = __importDefault(require("./sale.controllers"));
const saleRoutes = (0, express_1.Router)();
saleRoutes.use(verifyAuth_1.default);
saleRoutes.get('/days', sale_controllers_1.default.readAllDaily);
saleRoutes.get('/years', sale_controllers_1.default.readAllYearly);
saleRoutes.get('/months', sale_controllers_1.default.readAllMonths);
saleRoutes.get('/weeks', sale_controllers_1.default.readAllWeeks);
saleRoutes.post('/', (0, validateRequest_1.default)(sale_validator_1.default.createSchema), sale_controllers_1.default.create);
saleRoutes.get('/', sale_controllers_1.default.readAll);
saleRoutes.patch('/:id', (0, validateRequest_1.default)(sale_validator_1.default.updateSchema), sale_controllers_1.default.update);
saleRoutes.get('/:id', sale_controllers_1.default.readSingle);
saleRoutes.delete('/:id', sale_controllers_1.default.delete);
exports.default = saleRoutes;
