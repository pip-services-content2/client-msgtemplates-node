const assert = require('chai').assert;

import { ConfigParams } from 'pip-services3-commons-nodex';

import { MessageTemplatesResolverV1 } from '../../src/version1/MessageTemplatesResolverV1';

suite('MessageTemplatesResolverV1', () => {
    let resolver: MessageTemplatesResolverV1;

    suiteSetup(() => {
        resolver = new MessageTemplatesResolverV1();
    });

    test('Resolve hardcoded template', async () => {
        resolver.configure(ConfigParams.fromTuples(
            'message_templates.template1.subject', 'Subject1',
            'message_templates.template1.text', 'Text1',
            'message_templates.template1.html', 'Html1'
        ));

        let template = await resolver.resolve('template1');

        assert.isObject(template);
        assert.equal(template.subject, 'Subject1');
        assert.equal(template.text, 'Text1');
        assert.equal(template.html, 'Html1');
    });

    test('Resolve missing template', async () => {
        resolver.configure(ConfigParams.fromTuples(
            'message_templates.template1.subject', 'Subject1',
            'message_templates.template1.text', 'Text1',
            'message_templates.template1.html', 'Html1'
        ));

        let template = await resolver.resolve('template2');

        assert.isNull(template);
    });

    test('Resolve template by id', async () => {
        resolver.configure(ConfigParams.fromTuples(
            'message_templates.template1', '123'
        ));

        let template = await resolver.resolve('template2');

        assert.isNull(template);
    });
    
});
