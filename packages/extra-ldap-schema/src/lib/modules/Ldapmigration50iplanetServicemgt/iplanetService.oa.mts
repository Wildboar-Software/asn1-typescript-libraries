/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_iplanetService } from "../Ldapmigration50iplanetServicemgt/id-oc-iplanetService.va.mjs";
import { labeledURI } from "../OpenLDAPCoreSchema/labeledURI.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { organizationalUnitName } from "../SelectedAttributeTypes/organizationalUnitName.oa.mjs";
import { iplanetKeyValue } from "./iplanetKeyValue.oa.mjs";
import { iplanetPluginSchema } from "./iplanetPluginSchema.oa.mjs";
import { iplanetServiceSchema } from "./iplanetServiceSchema.oa.mjs";
import { iplanetXMLKeyValue } from "./iplanetXMLKeyValue.oa.mjs";

/**
 * @summary iplanetService
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * iplanetService OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { organizationalUnitName }
 *   MAY CONTAIN               { labeledURI
 *                               | iplanetServiceSchema
 *                               | iplanetKeyValue
 *                               | iplanetXMLKeyValue
 *                               | iplanetPluginSchema
 *                               | description }
 *   LDAP-NAME                 {"iplanetService"}
 *   LDAP-DESC                 "object containing service information"
 *   ID                        id-oc-iplanetService }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const iplanetService: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [organizationalUnitName] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [labeledURI, iplanetServiceSchema, iplanetKeyValue, iplanetXMLKeyValue, iplanetPluginSchema, description] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["iplanetService"],
    "&ldapDesc": "object containing service information" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_iplanetService /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
