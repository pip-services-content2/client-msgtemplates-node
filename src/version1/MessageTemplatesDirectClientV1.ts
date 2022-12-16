import { Descriptor } from 'pip-services3-commons-nodex';
import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams} from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { DirectClient } from 'pip-services3-rpc-nodex';

import { IMessageTemplatesClientV1 } from './IMessageTemplatesClientV1';
//import { IMessageTemplatesController } from 'service-msgtemplates-node';
import { MessageTemplateV1 } from './MessageTemplateV1';

export class MessageTemplatesDirectClientV1 extends DirectClient<any> implements IMessageTemplatesClientV1 {
            
    public constructor() {
        super();
        this._dependencyResolver.put('controller', new Descriptor("service-msgtemplates", "controller", "*", "*", "*"))
    }

    public async getTemplates(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<MessageTemplateV1>> {
        let timing = this.instrument(correlationId, 'message_templates.get_templates');

        try {
            let res = await this._controller.getTemplates(correlationId, filter, paging);
            timing.endTiming();
            return res;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }

    public async getTemplateById(correlationId: string, id: string): Promise<MessageTemplateV1> {
        let timing = this.instrument(correlationId, 'message_templates.get_template_by_id');
        
        try {
            let res = await this._controller.getTemplateById(correlationId, id);
            timing.endTiming();
            return res;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }

    public async getTemplateByIdOrName(correlationId: string, idOrName: string): Promise<MessageTemplateV1> {
        let timing = this.instrument(correlationId, 'message_templates.get_template_by_id_or_name');

        try {
            let res = await this._controller.getTemplateByIdOrName(correlationId, idOrName);
            timing.endTiming();
            return res;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }

    public async createTemplate(correlationId: string, template: MessageTemplateV1): Promise<MessageTemplateV1> {
        let timing = this.instrument(correlationId, 'message_templates.create_template');
        
        try {
            let res = await this._controller.createTemplate(correlationId, template);
            timing.endTiming();
            return res;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }

    public async updateTemplate(correlationId: string, template: MessageTemplateV1): Promise<MessageTemplateV1> {
        let timing = this.instrument(correlationId, 'message_templates.update_template');
        
        try {
            let res = await this._controller.updateTemplate(correlationId, template);
            timing.endTiming();
            return res;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }

    public async deleteTemplateById(correlationId: string, id: string): Promise<MessageTemplateV1> {
        let timing = this.instrument(correlationId, 'message_templates.delete_template_by_id');

        try {
            let res = await this._controller.deleteTemplateById(correlationId, id);
            timing.endTiming();
            return res;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }
}