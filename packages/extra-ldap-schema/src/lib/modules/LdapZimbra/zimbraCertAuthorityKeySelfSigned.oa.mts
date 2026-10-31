/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { caseIgnoreIA5Match } from "../SelectedAttributeTypes/caseIgnoreIA5Match.oa.mjs";
// export { caseIgnoreSubstringsMatch } from "../SelectedAttributeTypes/caseIgnoreSubstringsMatch.oa.mjs";
// export { ia5String } from "../SelectedAttributeTypes/ia5String.oa.mjs";
// export { id_at_zimbraCertAuthorityKeySelfSigned } from "../LdapZimbra/id-at-zimbraCertAuthorityKeySelfSigned.va.mjs";


/**
 * @summary zimbraCertAuthorityKeySelfSigned
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraCertAuthorityKeySelfSigned ATTRIBUTE ::= {
 *   WITH SYNTAX               IA5String(SIZE (1..2048))
 *   EQUALITY MATCHING RULE    caseIgnoreIA5Match
 *   SUBSTRINGS MATCHING RULE  caseIgnoreSubstringsMatch
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               ia5String.&id
 *   LDAP-NAME                 {"zimbraCertAuthorityKeySelfSigned"}
 *   LDAP-DESC                 "Please see the documentation for the attribute zimbraCertAuthorityCertSelfSigned. In addition, please note that this attribute is provided at install for convenience during a test install without real certs issued by well known CAs. If you choose to create your own CA for your production uses, please note that it is a bad idea to store your CA-s private key in LDAP, as this data maybe read from zimbraGlobalConfig in the clear."
 *   ID                        id-at-zimbraCertAuthorityKeySelfSigned }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const zimbraCertAuthorityKeySelfSigned: ATTRIBUTE = undefined;

/* eslint-enable */
