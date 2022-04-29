import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams} from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { IdGenerator } from 'pip-services3-commons-nodex';

import { IMessageTemplatesClientV1 } from './IMessageTemplatesClientV1';
import { MessageTemplateV1 } from './MessageTemplateV1';

export class MessageTemplatesNullClientV1 implements IMessageTemplatesClientV1 {
            
    public async getTemplates(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<MessageTemplateV1>> {
        return new DataPage<MessageTemplateV1>([], 0);
    }

    public async getTemplateById(correlationId: string, id: string): Promise<MessageTemplateV1> {
        return null;
    }

    public async getTemplateByIdOrName(correlationId: string, idOrName: string): Promise<MessageTemplateV1> {
        return null;
    }

    public async createTemplate(correlationId: string, template: MessageTemplateV1): Promise<MessageTemplateV1> {
        template.id = template.id || IdGenerator.nextLong();
        return template;
    }

    public async updateTemplate(correlationId: string, template: MessageTemplateV1): Promise<MessageTemplateV1> {
        return template;
    }

    public deleteTemplateById(correlationId: string, id: string): Promise<MessageTemplateV1> {
        return null;
    }
}