/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { UUID, _decode_UUID, _encode_UUID } from "../SelectedAttributeTypes/UUID.ta.mjs";
// export { octetStringMatch } from "../SelectedAttributeTypes/octetStringMatch.oa.mjs";
// export { octetStringOrderingMatch } from "../SelectedAttributeTypes/octetStringOrderingMatch.oa.mjs";
// export { octetStringSubstringsMatch } from "../SelectedAttributeTypes/octetStringSubstringsMatch.oa.mjs";


/**
 * @summary syncreplCookie
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * syncreplCookie ATTRIBUTE ::= {
 *     WITH SYNTAX                 UUID
 *     EQUALITY MATCHING RULE         octetStringMatch
 *     ORDERING MATCHING RULE      octetStringOrderingMatch
 *     SUBSTRINGS MATCHING RULE    octetStringSubstringsMatch
 *     SINGLE VALUE                TRUE
 *     NO USER MODIFICATION        TRUE
 *     USAGE                       dSAOperation
 *     LDAP-SYNTAX                 octetString.&id
 *     LDAP-NAME                     {"syncreplCookie"}
 *     LDAP-DESC "syncrepl Cookie for shadow copy"
 *     ID { 1 3 6 1 4 1 4203 666 1 23 }
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const syncreplCookie: ATTRIBUTE = undefined;

/* eslint-enable */
