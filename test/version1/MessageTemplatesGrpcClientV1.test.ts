import { Descriptor } from 'pip-services3-commons-nodex';
import { ConfigParams } from 'pip-services3-commons-nodex';
import { References } from 'pip-services3-commons-nodex';
import { ConsoleLogger } from 'pip-services3-components-nodex';

import { MessageTemplatesMemoryPersistence } from 'service-msgtemplates-node';
import { MessageTemplatesController } from 'service-msgtemplates-node';
import { MessageTemplatesGrpcServiceV1 } from 'service-msgtemplates-node';
import { MessageTemplatesGrpcClientV1 } from '../../src/version1/MessageTemplatesGrpcClientV1';
import { MessageTemplatesClientFixtureV1 } from './MessageTemplatesClientFixtureV1';

var httpConfig = ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 3000
);

suite('MessageTemplatesGrpcClientV1', ()=> {
    let service: MessageTemplatesGrpcServiceV1;
    let client: MessageTemplatesGrpcClientV1;
    let fixture: MessageTemplatesClientFixtureV1;

    suiteSetup(async () => {
        let logger = new ConsoleLogger();
        let persistence = new MessageTemplatesMemoryPersistence();
        let controller = new MessageTemplatesController();

        service = new MessageTemplatesGrpcServiceV1();
        service.configure(httpConfig);

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('pip-services-msgtemplates', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('pip-services-msgtemplates', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('pip-services-msgtemplates', 'service', 'grpc', 'default', '1.0'), service
        );
        controller.setReferences(references);
        service.setReferences(references);

        client = new MessageTemplatesGrpcClientV1();
        client.setReferences(references);
        client.configure(httpConfig);

        fixture = new MessageTemplatesClientFixtureV1(client);

        await service.open(null);
        await client.open(null);
    });
    
    suiteTeardown(async () => {
        await client.close(null);
        await service.close(null);
    });

    test('CRUD Operations', async () => {
        await fixture.testCrudOperations();
    });

});
