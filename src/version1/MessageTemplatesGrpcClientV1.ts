const services = require('../../../src/protos/msgtemplates_v1_grpc_pb');
const messages = require('../../../src/protos/msgtemplates_v1_pb');

import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { GrpcClient } from 'pip-services3-grpc-nodex';

import { IMessageTemplatesClientV1 } from './IMessageTemplatesClientV1';
import { MessageTemplateV1 } from './MessageTemplateV1';
import { MessageTemplatesGrpcConverterV1 } from './MessageTemplatesGrpcConverterV1';

export class MessageTemplatesGrpcClientV1 extends GrpcClient implements IMessageTemplatesClientV1 {
        
    public constructor() {
        super(services.MessageTemplatesClient);
    }

    public async getTemplates(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<MessageTemplateV1>> {

        let request = new messages.MessageTemplatePageRequest();

        MessageTemplatesGrpcConverterV1.setMap(request.getFilterMap(), filter);
        request.setPaging(MessageTemplatesGrpcConverterV1.fromPagingParams(paging));

        let timing = this.instrument(correlationId, 'msgtemplates.get_templates');

        try {
            let response = await this.call<any>('get_templates', correlationId, request);

            if (response.error != null)
                throw MessageTemplatesGrpcConverterV1.toError(response.error);

            timing.endTiming();
            return response ? MessageTemplatesGrpcConverterV1.toMessageTemplatePage(response.getPage()) : null;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }

    public async getTemplateById(correlationId: string, templateId: string): Promise<MessageTemplateV1> {

        let request = new messages.MessageTemplateIdRequest();
        request.setTemplateId(templateId);

        let timing = this.instrument(correlationId, 'msgtemplates.get_template_by_id');

        try {
            let response = await this.call<any>('get_template_by_id', correlationId, request);

            if (response.error != null)
                throw MessageTemplatesGrpcConverterV1.toError(response.error);

            timing.endTiming();
            return response ? MessageTemplatesGrpcConverterV1.toMessageTemplate(response.getTemplate()) : null;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }     
    }

    public async getTemplateByIdOrName(correlationId: string, idOrName: string): Promise<MessageTemplateV1> {

        let request = new messages.MessageTemplateNameRequest();
        request.setName(idOrName);

        let timing = this.instrument(correlationId, 'msgtemplates.get_template_by_id_or_name');

        try {
            let response = await this.call<any>('get_template_by_id_or_name', correlationId, request);

            if (response.error != null)
                throw MessageTemplatesGrpcConverterV1.toError(response.error);

            timing.endTiming();
            return response ? MessageTemplatesGrpcConverterV1.toMessageTemplate(response.getTemplate()) : null;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }  
    }

    public async createTemplate(correlationId: string, template: MessageTemplateV1): Promise<MessageTemplateV1> {

        let templateObj = MessageTemplatesGrpcConverterV1.fromMessageTemplate(template);

        let request = new messages.MessageTemplateObjectRequest();
        request.setTemplate(templateObj);

        let timing = this.instrument(correlationId, 'msgtemplates.create_template');

        try {
            let response = await this.call<any>('create_template', correlationId, request);

            if (response.error != null)
                throw MessageTemplatesGrpcConverterV1.toError(response.error);

            timing.endTiming();
            return response ? MessageTemplatesGrpcConverterV1.toMessageTemplate(response.getTemplate()) : null;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }   
    }

    public async updateTemplate(correlationId: string, template: MessageTemplateV1): Promise<MessageTemplateV1> {

        let templateObj = MessageTemplatesGrpcConverterV1.fromMessageTemplate(template);

        let request = new messages.MessageTemplateObjectRequest();
        request.setTemplate(templateObj);
    
        let timing = this.instrument(correlationId, 'msgtemplates.update_template');
        
        try {
            let response = await this.call<any>('update_template', correlationId, request);

            if (response.error != null)
                throw MessageTemplatesGrpcConverterV1.toError(response.error);

            timing.endTiming();
            return response ? MessageTemplatesGrpcConverterV1.toMessageTemplate(response.getTemplate()) : null;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }  
    }

    public async deleteTemplateById(correlationId: string, templateId: string): Promise<MessageTemplateV1> {

        let request = new messages.MessageTemplateIdRequest();
        request.setTemplateId(templateId);

        let timing = this.instrument(correlationId, 'msgtemplates.delete_template_by_id');

        try {
            let response = await this.call<any>('delete_template_by_id', correlationId, request);

            if (response.error != null)
                throw MessageTemplatesGrpcConverterV1.toError(response.error);

            timing.endTiming();
            return response ? MessageTemplatesGrpcConverterV1.toMessageTemplate(response.getTemplate()) : null;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }
  
}
