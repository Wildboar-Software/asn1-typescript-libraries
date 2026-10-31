/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { octetStringMatch } from "../SelectedAttributeTypes/octetStringMatch.oa.mjs";
// export { octetStringOrderingMatch } from "../SelectedAttributeTypes/octetStringOrderingMatch.oa.mjs";
// export { octetStringSubstringsMatch } from "../SelectedAttributeTypes/octetStringSubstringsMatch.oa.mjs";
// export { octetString } from "../SelectedAttributeTypes/octetString.oa.mjs";


/**
 * @summary userSMIMECertificate
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * userSMIMECertificate ATTRIBUTE ::= {
 *     WITH SYNTAX                        OCTET STRING
 *     EQUALITY MATCHING RULE            octetStringMatch
 *     ORDERING MATCHING RULE            octetStringOrderingMatch
 *     SUBSTRINGS MATCHING RULE        octetStringSubstringsMatch
 *     LDAP-SYNTAX                        octetString.&id
 *     LDAP-NAME                        {"userSMIMECertificate"}
 *     ID                                { 2 16 840 1 113730 3 1 40 }
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const userSMIMECertificate: ATTRIBUTE = undefined;

/* eslint-enable */
