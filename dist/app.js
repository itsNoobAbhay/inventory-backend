"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const routes_1 = __importDefault(require("./routes"));
const notFound_1 = __importDefault(require("./middlewares/notFound"));
const globalErrorhandler_1 = __importDefault(require("./middlewares/globalErrorhandler"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, morgan_1.default)('dev'));
app.use((req, res, next) => {
    console.log('Request Origin:', req.headers.origin);
    next();
});
app.use((0, cors_1.default)({
    origin: '*', // Allows all origins
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true, // If you're using cookies/auth headers
}));
app.options('*', (0, cors_1.default)());
// application routes
app.use('/api/v1', routes_1.default);
app.use(globalErrorhandler_1.default);
app.use(notFound_1.default);
exports.default = app;
