/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { id_oc_nadfApplicationEntity } from "../LdapSchema2ldifNadf/id-oc-nadfApplicationEntity.va.mjs";
import { supportedApplicationContext } from "../SelectedAttributeTypes/supportedApplicationContext.oa.mjs";
import { applicationEntity } from "../SelectedObjectClasses/applicationEntity.oa.mjs";

/**
 * @summary nadfApplicationEntity
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nadfApplicationEntity OBJECT-CLASS ::= {
 *   SUBCLASS OF               { applicationEntity }
 *   MUST CONTAIN              { supportedApplicationContext }
 *   LDAP-NAME                 {"nadfApplicationEntity"}
 *   ID                        id-oc-nadfApplicationEntity }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const nadfApplicationEntity: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [applicationEntity] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [supportedApplicationContext] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["nadfApplicationEntity"],
    "&id": id_oc_nadfApplicationEntity /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
