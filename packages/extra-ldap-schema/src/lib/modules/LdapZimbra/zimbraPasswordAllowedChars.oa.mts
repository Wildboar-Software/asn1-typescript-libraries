/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { DirectoryString, _decode_DirectoryString, _encode_DirectoryString } from "../SelectedAttributeTypes/DirectoryString.ta.mjs";
// export { caseExactMatch } from "../SelectedAttributeTypes/caseExactMatch.oa.mjs";
// export { caseExactSubstringsMatch } from "../SelectedAttributeTypes/caseExactSubstringsMatch.oa.mjs";
// export { directoryString } from "../SelectedAttributeTypes/directoryString.oa.mjs";
// export { id_at_zimbraPasswordAllowedChars } from "../LdapZimbra/id-at-zimbraPasswordAllowedChars.va.mjs";


/**
 * @summary zimbraPasswordAllowedChars
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraPasswordAllowedChars ATTRIBUTE ::= {
 *   WITH SYNTAX               DirectoryString{1024}
 *   EQUALITY MATCHING RULE    caseExactMatch
 *   SUBSTRINGS MATCHING RULE  caseExactSubstringsMatch
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               directoryString.&id
 *   LDAP-NAME                 {"zimbraPasswordAllowedChars"}
 *   LDAP-DESC                 "regex of allowed characters in password"
 *   ID                        id-at-zimbraPasswordAllowedChars }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const zimbraPasswordAllowedChars: ATTRIBUTE = undefined;

/* eslint-enable */
