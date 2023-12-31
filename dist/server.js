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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const envConfig_1 = __importDefault(require("./envConfig"));
function connectDb() {
    return __awaiter(this, void 0, void 0, function* () {
        const server = app_1.app.listen(envConfig_1.default.port, () => {
            console.log("server running on port", envConfig_1.default.port);
        });
        const existServer = () => {
            if (server) {
                server.close(() => {
                    console.log("server is closed");
                });
            }
            process.exit(1);
        };
        const unexpectedErrorHandler = (error) => {
            console.log(error);
            existServer();
        };
        process.on("uncaughtException", unexpectedErrorHandler);
        process.on("unhandledRejection", unexpectedErrorHandler);
    });
}
connectDb();
