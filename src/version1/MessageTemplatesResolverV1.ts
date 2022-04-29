import { ConfigParams } from 'pip-services3-commons-nodex';
import { IReconfigurable } from 'pip-services3-commons-nodex';
import { IReferenceable } from 'pip-services3-commons-nodex';
import { IReferences } from 'pip-services3-commons-nodex';
import { Descriptor } from 'pip-services3-commons-nodex';
import { StringConverter } from 'pip-services3-commons-nodex';

import { IMessageTemplatesClientV1 } from './IMessageTemplatesClientV1';
import { MessageTemplateV1 } from './MessageTemplateV1';

export class MessageTemplatesResolverV1 implements IReferenceable, IReconfigurable {
    private _client: IMessageTemplatesClientV1;
    private _config: ConfigParams = new ConfigParams();
    private _templates: { [name: string]: MessageTemplateV1 } = {};
	
	public constructor(config?: ConfigParams, references?: IReferences) {
		if (config != null)
			this.configure(config);
		if (references != null)
			this.setReferences(references);
	}

	public configure(config: ConfigParams): void {
		this._config = config.getSection("message_templates");
	}

	public setReferences(references: IReferences): void {
        this._client = references.getOneOptional<IMessageTemplatesClientV1>(
            new Descriptor('pip-services-msgtemplates', 'client', '*', '*', '1.0')
        );
	}

	public put(name: string, template: any): void {
		this._config[name] = template;
	}

    private async retrieveTemplate(name: string, templateName: string): Promise<MessageTemplateV1> {

        if (this._client == null) return null;

        let template = await this._client.getTemplateByIdOrName('msg_resolve', templateName);

        if (template)
            this._templates[name] = template;

        return template
    }

    private createTemplate(name: string, config: ConfigParams): MessageTemplateV1 {

        if (config == null || Object.keys(config).length == 0) {
            return null;
        }

        let template = <MessageTemplateV1> {
            name: name,
            subject: config.getAsObject('subject'),
            text: config.getAsObject('text'),
            html: config.getAsObject('html')
        };

        if (template.subject == null && template.text == null && template.html == null) {
            return null;
        }

        this._templates[name] = template;

        return template;
    }

    public async resolve(name: string): Promise<MessageTemplateV1> {
        
		if (name == null)
			throw new Error("Dependency name cannot be null");

        // Retrieve template first
        let template = this._templates[name];
        if (template) {
            return template;
        }
            
        // Get configuration
        let config = this._config.getSection(name);
        let templateName = this._config.getAsNullableString(name) || config.getAsNullableString('template');

        if (templateName)
            return await this.retrieveTemplate(name, templateName);
        else
            return this.createTemplate(name, config);
	}
	
	public static fromTuples(...tuples: any[]): MessageTemplatesResolverV1 {
		let result = new MessageTemplatesResolverV1();
    	if (tuples == null || tuples.length == 0)
    		return result;
    	
        for (let index = 0; index < tuples.length; index += 2) {
            if (index + 1 >= tuples.length) break;

            let name = StringConverter.toString(tuples[index]);
            let template = tuples[index + 1];

            result.put(name, template);
        }
        
        return result;
	}
}
