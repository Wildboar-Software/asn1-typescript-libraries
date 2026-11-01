/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { organizationalUnitName } from "../SelectedAttributeTypes/organizationalUnitName.oa.mjs";
import { id_oc_iplanetService } from "../Ldapmigration50iplanetServicemgt/id-oc-iplanetService.va.mjs";
import { labeledURI } from "../OpenLDAPCoreSchema/labeledURI.oa.mjs";
import { iplanetServiceSchema } from "../Ldapmigration50iplanetServicemgt/iplanetServiceSchema.oa.mjs";
import { iplanetKeyValue } from "../Ldapmigration50iplanetServicemgt/iplanetKeyValue.oa.mjs";
import { iplanetXMLKeyValue } from "../Ldapmigration50iplanetServicemgt/iplanetXMLKeyValue.oa.mjs";
import { iplanetPluginSchema } from "../Ldapmigration50iplanetServicemgt/iplanetPluginSchema.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";


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
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ organizationalUnitName, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ labeledURI, iplanetServiceSchema, iplanetKeyValue, iplanetXMLKeyValue, iplanetPluginSchema, description, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "iplanetService" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "object containing service information" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_iplanetService /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

