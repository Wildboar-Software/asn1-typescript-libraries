/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { UnboundedDirectoryString, _decode_UnboundedDirectoryString, _encode_UnboundedDirectoryString } from "../SelectedAttributeTypes/UnboundedDirectoryString.ta.mjs";
// export { caseIgnoreMatch } from "../SelectedAttributeTypes/caseIgnoreMatch.oa.mjs";
// export { caseIgnoreSubstringsMatch } from "../SelectedAttributeTypes/caseIgnoreSubstringsMatch.oa.mjs";
// export { directoryString } from "../SelectedAttributeTypes/directoryString.oa.mjs";
// export { id_at_zimbraWebClientLoginURLAllowedUA } from "../LdapZimbra/id-at-zimbraWebClientLoginURLAllowedUA.va.mjs";


/**
 * @summary zimbraWebClientLoginURLAllowedUA
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraWebClientLoginURLAllowedUA ATTRIBUTE ::= {
 *   WITH SYNTAX               UnboundedDirectoryString
 *   EQUALITY MATCHING RULE    caseIgnoreMatch
 *   SUBSTRINGS MATCHING RULE  caseIgnoreSubstringsMatch
 *   LDAP-SYNTAX               directoryString.&id
 *   LDAP-NAME                 {"zimbraWebClientLoginURLAllowedUA"}
 *   LDAP-DESC                 "regex to be matched for allowed user agents for honoring zimbraWebClientLoginURL. If not set, all UAs are allowed. If multiple values are set, an UA is allowed as long as it matches any one of the values. e.g. "".*Windows NT.*Firefox/3.*"" will match firefox 3 or later browsers on Windows. "".*MSIE.*Windows NT.*"" will match IE browsers on Windows."
 *   ID                        id-at-zimbraWebClientLoginURLAllowedUA }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const zimbraWebClientLoginURLAllowedUA: ATTRIBUTE = undefined;

/* eslint-enable */
