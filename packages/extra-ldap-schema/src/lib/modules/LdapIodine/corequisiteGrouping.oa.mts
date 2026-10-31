/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_corequisiteGrouping } from "../LdapIodine/id-oc-corequisiteGrouping.va.mjs";

/**
 * @summary corequisiteGrouping
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * corequisiteGrouping OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   LDAP-NAME                 {"corequisiteGrouping"}
 *   ID                        id-oc-corequisiteGrouping }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const corequisiteGrouping: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["corequisiteGrouping"],
    "&id": id_oc_corequisiteGrouping /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
