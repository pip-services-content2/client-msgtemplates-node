"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageTemplatesResolverV1 = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_commons_nodex_2 = require("pip-services3-commons-nodex");
const pip_services3_commons_nodex_3 = require("pip-services3-commons-nodex");
class MessageTemplatesResolverV1 {
    constructor(config, references) {
        this._config = new pip_services3_commons_nodex_1.ConfigParams();
        this._templates = {};
        if (config != null)
            this.configure(config);
        if (references != null)
            this.setReferences(references);
    }
    configure(config) {
        this._config = config.getSection("message_templates");
    }
    setReferences(references) {
        this._client = references.getOneOptional(new pip_services3_commons_nodex_2.Descriptor('pip-services-msgtemplates', 'client', '*', '*', '1.0'));
    }
    put(name, template) {
        this._config[name] = template;
    }
    retrieveTemplate(name, templateName) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._client == null)
                return null;
            let template = yield this._client.getTemplateByIdOrName('msg_resolve', templateName);
            if (template)
                this._templates[name] = template;
            return template;
        });
    }
    createTemplate(name, config) {
        if (config == null || Object.keys(config).length == 0) {
            return null;
        }
        let template = {
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
    resolve(name) {
        return __awaiter(this, void 0, void 0, function* () {
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
                return yield this.retrieveTemplate(name, templateName);
            else
                return this.createTemplate(name, config);
        });
    }
    static fromTuples(...tuples) {
        let result = new MessageTemplatesResolverV1();
        if (tuples == null || tuples.length == 0)
            return result;
        for (let index = 0; index < tuples.length; index += 2) {
            if (index + 1 >= tuples.length)
                break;
            let name = pip_services3_commons_nodex_3.StringConverter.toString(tuples[index]);
            let template = tuples[index + 1];
            result.put(name, template);
        }
        return result;
    }
}
exports.MessageTemplatesResolverV1 = MessageTemplatesResolverV1;
//# sourceMappingURL=MessageTemplatesResolverV1.js.map