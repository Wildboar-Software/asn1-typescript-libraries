/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { nsRoleDefinition } from "../LdapCommon389/nsRoleDefinition.oa.mjs";
// export { nsRoleDefinition } from "../LdapCommon389/nsRoleDefinition.oa.mjs";
import { id_oc_nsComplexRoleDefinition } from "../LdapCommon389/id-oc-nsComplexRoleDefinition.va.mjs";
// export { id_oc_nsComplexRoleDefinition } from "../LdapCommon389/id-oc-nsComplexRoleDefinition.va.mjs";


/**
 * @summary nsComplexRoleDefinition
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nsComplexRoleDefinition OBJECT-CLASS ::= {
 *   SUBCLASS OF               { nsRoleDefinition }
 *   LDAP-NAME                 {"nsComplexRoleDefinition"}
 *   LDAP-DESC                 "Netscape defined objectclass"
 *   ID                        id-oc-nsComplexRoleDefinition }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const nsComplexRoleDefinition: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ nsRoleDefinition, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "nsComplexRoleDefinition" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Netscape defined objectclass" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_nsComplexRoleDefinition /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
