"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageTemplatesClientFactory = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_components_nodex_1 = require("pip-services3-components-nodex");
const MessageTemplatesNullClientV1_1 = require("../version1/MessageTemplatesNullClientV1");
const MessageTemplatesDirectClientV1_1 = require("../version1/MessageTemplatesDirectClientV1");
const MessageTemplatesCommandableHttpClientV1_1 = require("../version1/MessageTemplatesCommandableHttpClientV1");
const MessageTemplatesCommandableLambdaClientV1_1 = require("../version1/MessageTemplatesCommandableLambdaClientV1");
const MessageTemplatesCommandableGrpcClientV1_1 = require("../version1/MessageTemplatesCommandableGrpcClientV1");
const MessageTemplatesGrpcClientV1_1 = require("../version1/MessageTemplatesGrpcClientV1");
class MessageTemplatesClientFactory extends pip_services3_components_nodex_1.Factory {
    constructor() {
        super();
        this.registerAsType(MessageTemplatesClientFactory.NullClientV1Descriptor, MessageTemplatesNullClientV1_1.MessageTemplatesNullClientV1);
        this.registerAsType(MessageTemplatesClientFactory.DirectClientV1Descriptor, MessageTemplatesDirectClientV1_1.MessageTemplatesDirectClientV1);
        this.registerAsType(MessageTemplatesClientFactory.CmdHttpClientV1Descriptor, MessageTemplatesCommandableHttpClientV1_1.MessageTemplatesCommandableHttpClientV1);
        this.registerAsType(MessageTemplatesClientFactory.CmdLambdaClientV1Descriptor, MessageTemplatesCommandableLambdaClientV1_1.MessageTemplatesCommandableLambdaClientV1);
        this.registerAsType(MessageTemplatesClientFactory.CommandableGrpcClientV1Descriptor, MessageTemplatesCommandableGrpcClientV1_1.MessageTemplatesCommandableGrpcClientV1);
        this.registerAsType(MessageTemplatesClientFactory.GrpcClientV1Descriptor, MessageTemplatesGrpcClientV1_1.MessageTemplatesGrpcClientV1);
    }
}
exports.MessageTemplatesClientFactory = MessageTemplatesClientFactory;
MessageTemplatesClientFactory.Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-msgtemplates', 'factory', 'default', 'default', '1.0');
MessageTemplatesClientFactory.NullClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-msgtemplates', 'client', 'null', 'default', '1.0');
MessageTemplatesClientFactory.DirectClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-msgtemplates', 'client', 'direct', 'default', '1.0');
MessageTemplatesClientFactory.CmdHttpClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-msgtemplates', 'client', 'commandable-http', 'default', '1.0');
MessageTemplatesClientFactory.CmdLambdaClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-msgtemplates', 'client', 'commandable-lambda', 'default', '1.0');
MessageTemplatesClientFactory.CommandableGrpcClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-msgtemplates', 'client', 'commandable-grpc', 'default', '1.0');
MessageTemplatesClientFactory.GrpcClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-msgtemplates', 'client', 'grpc', 'default', '1.0');
//# sourceMappingURL=MessageTemplatesClientFactory.js.map