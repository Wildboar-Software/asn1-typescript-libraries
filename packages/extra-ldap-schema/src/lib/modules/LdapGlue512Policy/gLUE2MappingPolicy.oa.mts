/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { gLUE2MappingPolicyShareForeignKey } from "../LdapGlue512Policy/gLUE2MappingPolicyShareForeignKey.oa.mjs";
// export { gLUE2MappingPolicyShareForeignKey } from "../LdapGlue512Policy/gLUE2MappingPolicyShareForeignKey.oa.mjs";
import { id_oc_gLUE2MappingPolicy } from "../LdapGlue512Policy/id-oc-gLUE2MappingPolicy.va.mjs";
// export { id_oc_gLUE2MappingPolicy } from "../LdapGlue512Policy/id-oc-gLUE2MappingPolicy.va.mjs";


/**
 * @summary gLUE2MappingPolicy
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gLUE2MappingPolicy OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { gLUE2MappingPolicyShareForeignKey }
 *   LDAP-NAME                 {"GLUE2MappingPolicy"}
 *   LDAP-DESC                 "Statements, rules or assertions that provide coarse-granularity information about the mapping or UserDomain requests to a Share"
 *   ID                        id-oc-gLUE2MappingPolicy }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gLUE2MappingPolicy: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ gLUE2MappingPolicyShareForeignKey, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "GLUE2MappingPolicy" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Statements, rules or assertions that provide coarse-granularity information about the mapping or UserDomain requests to a Share" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_gLUE2MappingPolicy /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
