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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageTemplatesGrpcClientV1 = void 0;
const services = require('../../../src/protos/msgtemplates_v1_grpc_pb');
const messages = require('../../../src/protos/msgtemplates_v1_pb');
const pip_services3_grpc_nodex_1 = require("pip-services3-grpc-nodex");
const MessageTemplatesGrpcConverterV1_1 = require("./MessageTemplatesGrpcConverterV1");
class MessageTemplatesGrpcClientV1 extends pip_services3_grpc_nodex_1.GrpcClient {
    constructor() {
        super(services.MessageTemplatesClient);
    }
    getTemplates(correlationId, filter, paging) {
        return __awaiter(this, void 0, void 0, function* () {
            let request = new messages.MessageTemplatePageRequest();
            MessageTemplatesGrpcConverterV1_1.MessageTemplatesGrpcConverterV1.setMap(request.getFilterMap(), filter);
            request.setPaging(MessageTemplatesGrpcConverterV1_1.MessageTemplatesGrpcConverterV1.fromPagingParams(paging));
            let timing = this.instrument(correlationId, 'msgtemplates.get_templates');
            try {
                let response = yield this.call('get_templates', correlationId, request);
                if (response.error != null)
                    throw MessageTemplatesGrpcConverterV1_1.MessageTemplatesGrpcConverterV1.toError(response.error);
                timing.endTiming();
                return response ? MessageTemplatesGrpcConverterV1_1.MessageTemplatesGrpcConverterV1.toMessageTemplatePage(response.getPage()) : null;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
    getTemplateById(correlationId, templateId) {
        return __awaiter(this, void 0, void 0, function* () {
            let request = new messages.MessageTemplateIdRequest();
            request.setTemplateId(templateId);
            let timing = this.instrument(correlationId, 'msgtemplates.get_template_by_id');
            try {
                let response = yield this.call('get_template_by_id', correlationId, request);
                if (response.error != null)
                    throw MessageTemplatesGrpcConverterV1_1.MessageTemplatesGrpcConverterV1.toError(response.error);
                timing.endTiming();
                return response ? MessageTemplatesGrpcConverterV1_1.MessageTemplatesGrpcConverterV1.toMessageTemplate(response.getTemplate()) : null;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
    getTemplateByIdOrName(correlationId, idOrName) {
        return __awaiter(this, void 0, void 0, function* () {
            let request = new messages.MessageTemplateNameRequest();
            request.setName(idOrName);
            let timing = this.instrument(correlationId, 'msgtemplates.get_template_by_id_or_name');
            try {
                let response = yield this.call('get_template_by_id_or_name', correlationId, request);
                if (response.error != null)
                    throw MessageTemplatesGrpcConverterV1_1.MessageTemplatesGrpcConverterV1.toError(response.error);
                timing.endTiming();
                return response ? MessageTemplatesGrpcConverterV1_1.MessageTemplatesGrpcConverterV1.toMessageTemplate(response.getTemplate()) : null;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
    createTemplate(correlationId, template) {
        return __awaiter(this, void 0, void 0, function* () {
            let templateObj = MessageTemplatesGrpcConverterV1_1.MessageTemplatesGrpcConverterV1.fromMessageTemplate(template);
            let request = new messages.MessageTemplateObjectRequest();
            request.setTemplate(templateObj);
            let timing = this.instrument(correlationId, 'msgtemplates.create_template');
            try {
                let response = yield this.call('create_template', correlationId, request);
                if (response.error != null)
                    throw MessageTemplatesGrpcConverterV1_1.MessageTemplatesGrpcConverterV1.toError(response.error);
                timing.endTiming();
                return response ? MessageTemplatesGrpcConverterV1_1.MessageTemplatesGrpcConverterV1.toMessageTemplate(response.getTemplate()) : null;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
    updateTemplate(correlationId, template) {
        return __awaiter(this, void 0, void 0, function* () {
            let templateObj = MessageTemplatesGrpcConverterV1_1.MessageTemplatesGrpcConverterV1.fromMessageTemplate(template);
            let request = new messages.MessageTemplateObjectRequest();
            request.setTemplate(templateObj);
            let timing = this.instrument(correlationId, 'msgtemplates.update_template');
            try {
                let response = yield this.call('update_template', correlationId, request);
                if (response.error != null)
                    throw MessageTemplatesGrpcConverterV1_1.MessageTemplatesGrpcConverterV1.toError(response.error);
                timing.endTiming();
                return response ? MessageTemplatesGrpcConverterV1_1.MessageTemplatesGrpcConverterV1.toMessageTemplate(response.getTemplate()) : null;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
    deleteTemplateById(correlationId, templateId) {
        return __awaiter(this, void 0, void 0, function* () {
            let request = new messages.MessageTemplateIdRequest();
            request.setTemplateId(templateId);
            let timing = this.instrument(correlationId, 'msgtemplates.delete_template_by_id');
            try {
                let response = yield this.call('delete_template_by_id', correlationId, request);
                if (response.error != null)
                    throw MessageTemplatesGrpcConverterV1_1.MessageTemplatesGrpcConverterV1.toError(response.error);
                timing.endTiming();
                return response ? MessageTemplatesGrpcConverterV1_1.MessageTemplatesGrpcConverterV1.toMessageTemplate(response.getTemplate()) : null;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
}
exports.MessageTemplatesGrpcClientV1 = MessageTemplatesGrpcClientV1;
//# sourceMappingURL=MessageTemplatesGrpcClientV1.js.map