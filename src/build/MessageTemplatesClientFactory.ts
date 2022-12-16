import { Descriptor } from 'pip-services3-commons-nodex';
import { Factory } from 'pip-services3-components-nodex';

import { MessageTemplatesNullClientV1 } from '../version1/MessageTemplatesNullClientV1';
import { MessageTemplatesDirectClientV1 } from '../version1/MessageTemplatesDirectClientV1';
import { MessageTemplatesCommandableHttpClientV1 } from '../version1/MessageTemplatesCommandableHttpClientV1';
import { MessageTemplatesCommandableLambdaClientV1 } from '../version1/MessageTemplatesCommandableLambdaClientV1';
import { MessageTemplatesCommandableGrpcClientV1 } from '../version1/MessageTemplatesCommandableGrpcClientV1';
import { MessageTemplatesGrpcClientV1 } from '../version1/MessageTemplatesGrpcClientV1';

export class MessageTemplatesClientFactory extends Factory {
	public static Descriptor: Descriptor = new Descriptor('service-msgtemplates', 'factory', 'default', 'default', '1.0');
	public static NullClientV1Descriptor = new Descriptor('service-msgtemplates', 'client', 'null', 'default', '1.0');
	public static DirectClientV1Descriptor = new Descriptor('service-msgtemplates', 'client', 'direct', 'default', '1.0');
	public static CmdHttpClientV1Descriptor = new Descriptor('service-msgtemplates', 'client', 'commandable-http', 'default', '1.0');
	public static CmdLambdaClientV1Descriptor = new Descriptor('service-msgtemplates', 'client', 'commandable-lambda', 'default', '1.0');
	public static CommandableGrpcClientV1Descriptor = new Descriptor('service-msgtemplates', 'client', 'commandable-grpc', 'default', '1.0');
	public static GrpcClientV1Descriptor = new Descriptor('service-msgtemplates', 'client', 'grpc', 'default', '1.0');
	
	constructor() {
		super();

		this.registerAsType(MessageTemplatesClientFactory.NullClientV1Descriptor, MessageTemplatesNullClientV1);
		this.registerAsType(MessageTemplatesClientFactory.DirectClientV1Descriptor, MessageTemplatesDirectClientV1);
		this.registerAsType(MessageTemplatesClientFactory.CmdHttpClientV1Descriptor, MessageTemplatesCommandableHttpClientV1);
		this.registerAsType(MessageTemplatesClientFactory.CmdLambdaClientV1Descriptor, MessageTemplatesCommandableLambdaClientV1);
		this.registerAsType(MessageTemplatesClientFactory.CommandableGrpcClientV1Descriptor, MessageTemplatesCommandableGrpcClientV1);
		this.registerAsType(MessageTemplatesClientFactory.GrpcClientV1Descriptor, MessageTemplatesGrpcClientV1);
	}
	
}
