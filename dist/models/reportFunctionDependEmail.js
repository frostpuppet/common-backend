"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const baseModel_1 = __importDefault(require("./baseModel"));
let ReportFunctionDependEmail = class ReportFunctionDependEmail extends baseModel_1.default {
};
__decorate([
    typeorm_1.PrimaryColumn('uuid', { name: 'function_id' }),
    __metadata("design:type", String)
], ReportFunctionDependEmail.prototype, "function_id", void 0);
__decorate([
    typeorm_1.PrimaryColumn('varchar', { name: 'format_email' }),
    __metadata("design:type", String)
], ReportFunctionDependEmail.prototype, "format_email", void 0);
__decorate([
    typeorm_1.PrimaryColumn('uuid', { name: 'report_id' }),
    __metadata("design:type", String)
], ReportFunctionDependEmail.prototype, "report_id", void 0);
ReportFunctionDependEmail = __decorate([
    typeorm_1.Entity('report_function_depend_email', { schema: 'public' })
], ReportFunctionDependEmail);
exports.default = ReportFunctionDependEmail;
