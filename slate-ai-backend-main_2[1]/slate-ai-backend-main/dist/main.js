"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const constants_1 = require("./constants");
const route_1 = __importDefault(require("./calculator/route"));
const app = (0, express_1.default)();
// Middleware
app.use((0, cors_1.default)({
    origin: '*', // Allow all origins
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
    credentials: false // Set to true if using cookies or HTTP authentication
}));
app.use(express_1.default.json({ limit: '50mb' }));
// Routes
app.get('/', (req, res) => {
    res.json({ message: "Server is running" });
});
app.use('/calculate', route_1.default);
// Start server
//@ts-ignore
const server = app.listen(parseInt(constants_1.PORT), constants_1.SERVER_URL, () => {
    console.log(`Server running at http://${constants_1.SERVER_URL}:${constants_1.PORT}`);
});
// Graceful shutdown
process.on('SIGTERM', () => {
    console.info('SIGTERM signal received.');
    server.close(() => {
        console.log('Server closed.');
    });
});
// if (ENV === 'dev') {
//   // For development, you might want to use something like nodemon
//   // This would be configured in package.json, not directly in the code
// }
