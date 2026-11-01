/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { corequisiteGrouping } from "../LdapIodine/corequisiteGrouping.oa.mjs";
import { id_oc_corequisiteANDGrouping } from "../LdapIodine/id-oc-corequisiteANDGrouping.va.mjs";

/**
 * @summary corequisiteANDGrouping
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * corequisiteANDGrouping OBJECT-CLASS ::= {
 *   SUBCLASS OF               { corequisiteGrouping }
 *   LDAP-NAME                 {"corequisiteANDGrouping"}
 *   ID                        id-oc-corequisiteANDGrouping }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const corequisiteANDGrouping: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ corequisiteGrouping, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "corequisiteANDGrouping" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_corequisiteANDGrouping /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
