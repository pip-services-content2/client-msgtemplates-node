import { Descriptor } from 'pip-services3-commons-nodex';
import { References } from 'pip-services3-commons-nodex';
import { ConsoleLogger } from 'pip-services3-components-nodex';

import { MessageTemplatesMemoryPersistence } from 'service-msgtemplates-node';
import { MessageTemplatesController } from 'service-msgtemplates-node';
import { MessageTemplatesDirectClientV1 } from '../../src/version1/MessageTemplatesDirectClientV1';
import { MessageTemplatesClientFixtureV1 } from './MessageTemplatesClientFixtureV1';

suite('MessageTemplatesDirectClientV1', ()=> {
    let client: MessageTemplatesDirectClientV1;
    let fixture: MessageTemplatesClientFixtureV1;

    suiteSetup(async () => {
        let logger = new ConsoleLogger();
        let persistence = new MessageTemplatesMemoryPersistence();
        let controller = new MessageTemplatesController();

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('pip-services-msgtemplates', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('pip-services-msgtemplates', 'controller', 'default', 'default', '1.0'), controller,
        );
        controller.setReferences(references);

        client = new MessageTemplatesDirectClientV1();
        client.setReferences(references);

        fixture = new MessageTemplatesClientFixtureV1(client);

        await client.open(null);
    });
    
    suiteTeardown(async () => {
        await client.close(null);
    });

    test('CRUD Operations', async () => {
        await fixture.testCrudOperations();
    });

});
