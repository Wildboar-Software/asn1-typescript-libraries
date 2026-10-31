/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { schacUserStatus } from "../LdapSchac/schacUserStatus.oa.mjs";
// export { id_oc_schacUserEntitlements } from "../LdapSchac/id-oc-schacUserEntitlements.va.mjs";


/**
 * @summary schacUserEntitlements
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * schacUserEntitlements OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { schacUserStatus }
 *   LDAP-NAME                 {"schacUserEntitlements"}
 *   LDAP-DESC                 "Authorization for services"
 *   ID                        id-oc-schacUserEntitlements }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const schacUserEntitlements: OBJECT_CLASS = undefined;

/* eslint-enable */
