import { ConfigParams } from 'pip-services3-commons-nodex';
import { IReconfigurable } from 'pip-services3-commons-nodex';
import { IReferenceable } from 'pip-services3-commons-nodex';
import { IReferences } from 'pip-services3-commons-nodex';
import { MessageTemplateV1 } from './MessageTemplateV1';
export declare class MessageTemplatesResolverV1 implements IReferenceable, IReconfigurable {
    private _client;
    private _config;
    private _templates;
    constructor(config?: ConfigParams, references?: IReferences);
    configure(config: ConfigParams): void;
    setReferences(references: IReferences): void;
    put(name: string, template: any): void;
    private retrieveTemplate;
    private createTemplate;
    resolve(name: string): Promise<MessageTemplateV1>;
    static fromTuples(...tuples: any[]): MessageTemplatesResolverV1;
}
