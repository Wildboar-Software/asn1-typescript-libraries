/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { corequisiteGrouping } from "../LdapIodine/corequisiteGrouping.oa.mjs";
import { id_oc_corequisiteORGrouping } from "../LdapIodine/id-oc-corequisiteORGrouping.va.mjs";

/**
 * @summary corequisiteORGrouping
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * corequisiteORGrouping OBJECT-CLASS ::= {
 *   SUBCLASS OF               { corequisiteGrouping }
 *   LDAP-NAME                 {"corequisiteORGrouping"}
 *   ID                        id-oc-corequisiteORGrouping }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const corequisiteORGrouping: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ corequisiteGrouping, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "corequisiteORGrouping" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_corequisiteORGrouping /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
