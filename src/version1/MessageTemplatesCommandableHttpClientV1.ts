import { ConfigParams } from 'pip-services3-commons-nodex';

import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { CommandableHttpClient } from 'pip-services3-rpc-nodex';

import { MessageTemplateV1 } from './MessageTemplateV1';
import { IMessageTemplatesClientV1 } from './IMessageTemplatesClientV1';

export class MessageTemplatesCommandableHttpClientV1 extends CommandableHttpClient implements IMessageTemplatesClientV1 {       
    
    constructor(config?: any) {
        super('v1/message_templates');

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }
                
    public async getTemplates(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<MessageTemplateV1>> {
        return await this.callCommand(
            'get_templates',
            correlationId,
            {
                filter: filter,
                paging: paging
            }
        );
    }

    public async getTemplateById(correlationId: string, id: string): Promise<MessageTemplateV1> {
        return await this.callCommand(
            'get_template_by_id',
            correlationId,
            {
                template_id: id
            }
        );     
    }

    public async getTemplateByIdOrName(correlationId: string, idOrName: string): Promise<MessageTemplateV1> {
        return await this.callCommand(
            'get_template_by_id_or_name',
            correlationId,
            {
                id_or_name: idOrName
            }
        );
    }

    public async createTemplate(correlationId: string, template: MessageTemplateV1): Promise<MessageTemplateV1> {
        return await this.callCommand(
            'create_template',
            correlationId,
            {
                template: template
            }
        );
    }

    public async updateTemplate(correlationId: string, template: MessageTemplateV1): Promise<MessageTemplateV1> {
        return await this.callCommand(
            'update_template',
            correlationId,
            {
                template: template
            }
        ); 
    }

    public async deleteTemplateById(correlationId: string, id: string): Promise<MessageTemplateV1> {
        return await this.callCommand(
            'delete_template_by_id',
            correlationId,
            {
                template_id: id
            }
        );
    }
    
}
