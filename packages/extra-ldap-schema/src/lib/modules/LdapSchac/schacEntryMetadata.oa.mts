/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { schacExpiryDate } from "../LdapSchac/schacExpiryDate.oa.mjs";
// export { id_oc_schacEntryMetadata } from "../LdapSchac/id-oc-schacEntryMetadata.va.mjs";


/**
 * @summary schacEntryMetadata
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * schacEntryMetadata OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { schacExpiryDate }
 *   LDAP-NAME                 {"schacEntryMetadata"}
 *   LDAP-DESC                 "Used to contain information about the entry itself, often its status, birth, and death"
 *   ID                        id-oc-schacEntryMetadata }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const schacEntryMetadata: OBJECT_CLASS = undefined;

/* eslint-enable */
