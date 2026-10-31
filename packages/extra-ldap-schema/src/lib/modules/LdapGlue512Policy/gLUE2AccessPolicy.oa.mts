/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { gLUE2AccessPolicyEndpointForeignKey } from "../LdapGlue512Policy/gLUE2AccessPolicyEndpointForeignKey.oa.mjs";
// export { id_oc_gLUE2AccessPolicy } from "../LdapGlue512Policy/id-oc-gLUE2AccessPolicy.va.mjs";


/**
 * @summary gLUE2AccessPolicy
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gLUE2AccessPolicy OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { gLUE2AccessPolicyEndpointForeignKey }
 *   LDAP-NAME                 {"GLUE2AccessPolicy"}
 *   LDAP-DESC                 "Statements, rules or assertions that provide coarse-granularity information about the authorization of access by groups of actors to an Endpoint"
 *   ID                        id-oc-gLUE2AccessPolicy }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gLUE2AccessPolicy: OBJECT_CLASS = undefined;

/* eslint-enable */
