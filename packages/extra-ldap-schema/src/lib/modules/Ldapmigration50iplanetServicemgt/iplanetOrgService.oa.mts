/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_iplanetOrgService } from "../Ldapmigration50iplanetServicemgt/id-oc-iplanetOrgService.va.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { organizationalUnitName } from "../SelectedAttributeTypes/organizationalUnitName.oa.mjs";
import { iplanetKeyValue } from "./iplanetKeyValue.oa.mjs";
import { iplanetXMLKeyValue } from "./iplanetXMLKeyValue.oa.mjs";

/**
 * @summary iplanetOrgService
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * iplanetOrgService OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { organizationalUnitName }
 *   MAY CONTAIN               { iplanetKeyValue
 *                               | iplanetXMLKeyValue
 *                               | description }
 *   LDAP-NAME                 {"iplanetOrgService"}
 *   LDAP-DESC                 "service information specific to organizations"
 *   ID                        id-oc-iplanetOrgService }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const iplanetOrgService: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [organizationalUnitName] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [iplanetKeyValue, iplanetXMLKeyValue, description] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["iplanetOrgService"],
    "&ldapDesc": "service information specific to organizations" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_iplanetOrgService /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
