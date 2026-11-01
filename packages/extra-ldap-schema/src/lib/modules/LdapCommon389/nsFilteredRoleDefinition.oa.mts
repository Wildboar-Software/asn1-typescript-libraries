/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { nsComplexRoleDefinition } from "../LdapCommon389/nsComplexRoleDefinition.oa.mjs";
// export { nsComplexRoleDefinition } from "../LdapCommon389/nsComplexRoleDefinition.oa.mjs";
import { nsRoleFilter } from "../LdapCommon389/nsRoleFilter.oa.mjs";
// export { nsRoleFilter } from "../LdapCommon389/nsRoleFilter.oa.mjs";
import { id_oc_nsFilteredRoleDefinition } from "../LdapCommon389/id-oc-nsFilteredRoleDefinition.va.mjs";
// export { id_oc_nsFilteredRoleDefinition } from "../LdapCommon389/id-oc-nsFilteredRoleDefinition.va.mjs";


/**
 * @summary nsFilteredRoleDefinition
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nsFilteredRoleDefinition OBJECT-CLASS ::= {
 *   SUBCLASS OF               { nsComplexRoleDefinition }
 *   MUST CONTAIN              { nsRoleFilter }
 *   LDAP-NAME                 {"nsFilteredRoleDefinition"}
 *   LDAP-DESC                 "Netscape defined objectclass"
 *   ID                        id-oc-nsFilteredRoleDefinition }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const nsFilteredRoleDefinition: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ nsComplexRoleDefinition, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ nsRoleFilter, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "nsFilteredRoleDefinition" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Netscape defined objectclass" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_nsFilteredRoleDefinition /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
