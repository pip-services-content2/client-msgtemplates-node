import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { CommandableHttpClient } from 'pip-services3-rpc-nodex';
import { MessageTemplateV1 } from './MessageTemplateV1';
import { IMessageTemplatesClientV1 } from './IMessageTemplatesClientV1';
export declare class MessageTemplatesCommandableHttpClientV1 extends CommandableHttpClient implements IMessageTemplatesClientV1 {
    constructor(config?: any);
    getTemplates(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<MessageTemplateV1>>;
    getTemplateById(correlationId: string, id: string): Promise<MessageTemplateV1>;
    getTemplateByIdOrName(correlationId: string, idOrName: string): Promise<MessageTemplateV1>;
    createTemplate(correlationId: string, template: MessageTemplateV1): Promise<MessageTemplateV1>;
    updateTemplate(correlationId: string, template: MessageTemplateV1): Promise<MessageTemplateV1>;
    deleteTemplateById(correlationId: string, id: string): Promise<MessageTemplateV1>;
}
