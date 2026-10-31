/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_iplanetServiceComponent } from "../Ldapmigration50iplanetServicemgt/id-oc-iplanetServiceComponent.va.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { organizationalUnitName } from "../SelectedAttributeTypes/organizationalUnitName.oa.mjs";
import { iplanetKeyValue } from "./iplanetKeyValue.oa.mjs";
import { iplanetSMSPriority } from "./iplanetSMSPriority.oa.mjs";
import { iplanetServiceID } from "./iplanetServiceID.oa.mjs";
import { iplanetXMLKeyValue } from "./iplanetXMLKeyValue.oa.mjs";

/**
 * @summary iplanetServiceComponent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * iplanetServiceComponent OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { organizationalUnitName }
 *   MAY CONTAIN               { iplanetServiceID
 *                               | iplanetSMSPriority
 *                               | iplanetKeyValue
 *                               | iplanetXMLKeyValue
 *                               | description }
 *   LDAP-NAME                 {"iplanetServiceComponent"}
 *   LDAP-DESC                 "sub-components of a service"
 *   ID                        id-oc-iplanetServiceComponent }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const iplanetServiceComponent: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [organizationalUnitName] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [iplanetServiceID, iplanetSMSPriority, iplanetKeyValue, iplanetXMLKeyValue, description] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["iplanetServiceComponent"],
    "&ldapDesc": "sub-components of a service" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_iplanetServiceComponent /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
