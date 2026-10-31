/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { syncreplCookie } from "../OpenLDAP/syncreplCookie.oa.mjs";


/**
 * @summary syncConsumerSubentry
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * syncConsumerSubentry OBJECT-CLASS ::= {
 *     SUBCLASS OF     {top}
 *     KIND            auxiliary
 *     MAY CONTAIN     {syncreplCookie}
 *     LDAP-NAME        {"syncConsumerSubentry"}
 *     LDAP-DESC       "Persistent Info for SyncRepl Consumer"
 *     ID                { 1 3 6 1 4 1 4203 666 3 5 }
 * }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const syncConsumerSubentry: OBJECT_CLASS = undefined;

/* eslint-enable */
