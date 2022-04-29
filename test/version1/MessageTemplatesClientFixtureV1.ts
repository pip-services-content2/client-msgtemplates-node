const assert = require('chai').assert;

import { PagingParams, MultiString } from 'pip-services3-commons-nodex';

import { MessageTemplateV1 } from '../../src/version1/MessageTemplateV1';
import { MessageTemplateStatusV1 } from '../../src/version1/MessageTemplateStatusV1';
import { IMessageTemplatesClientV1 } from '../../src/version1/IMessageTemplatesClientV1';

let TEMPLATE1: MessageTemplateV1 = {
    id: '1',
    name: 'template1',
    from: null,
    subject: new MultiString({ en: 'Text 1' }),
    text: new MultiString({ en: 'Text 1' }),
    html: new MultiString({ en: 'Text 1' }),
    status: MessageTemplateStatusV1.Completed
};
let TEMPLATE2: MessageTemplateV1 = {
    id: '2',
    name: 'template2',
    from: null,
    subject: new MultiString({ en: 'Text 2' }),
    text: new MultiString({ en: 'Text 2' }),
    html: new MultiString({ en: 'Text 2' }),
    status: MessageTemplateStatusV1.Completed
};

export class MessageTemplatesClientFixtureV1 {
    private _client: IMessageTemplatesClientV1;
    
    constructor(client: IMessageTemplatesClientV1) {
        this._client = client;
    }
        
    public async testCrudOperations() {
        let template1, template2;

        // Create one template
        template1 = await this._client.createTemplate(null, TEMPLATE1);

        assert.isObject(template1);
        //assert.equal(template1.text.get('en'), TEMPLATE1.text.get('en'));
        assert.equal(template1.name, TEMPLATE1.name);

        // Create another template
        template2 = await this._client.createTemplate(null, TEMPLATE2);

        assert.isObject(template2);
        //assert.equal(template.text.get('en'), TEMPLATE2.text.get('en'));
        assert.equal(template2.name, TEMPLATE2.name);

        // Get all templates
        let page = await this._client.getTemplates(null, null, new PagingParams(0, 5, false));

        assert.isObject(page);
        assert.isTrue(page.data.length >= 2);

        // Get template by name
        let template = await this._client.getTemplateByIdOrName(null, TEMPLATE1.name);
        assert.isObject(template);

        // Update the template
        template1.text.en = 'Updated Content 1';
        template = await this._client.updateTemplate(null, template1);

        assert.isObject(template);
        //assert.equal(template.text.get('en'), 'Updated Content 1');
        assert.equal(template.name, TEMPLATE1.name);

        template1 = template;

        // Delete template
        await this._client.deleteTemplateById(null, template1.id);

        // Try to get delete template
        template = await this._client.getTemplateById(null, template1.id);

        assert.isNull(template || null);
    }
}
