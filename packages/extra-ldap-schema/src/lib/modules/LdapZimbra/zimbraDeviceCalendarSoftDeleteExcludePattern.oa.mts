/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { UnboundedDirectoryString, _decode_UnboundedDirectoryString, _encode_UnboundedDirectoryString } from "../SelectedAttributeTypes/UnboundedDirectoryString.ta.mjs";
// export { caseExactMatch } from "../SelectedAttributeTypes/caseExactMatch.oa.mjs";
// export { caseExactSubstringsMatch } from "../SelectedAttributeTypes/caseExactSubstringsMatch.oa.mjs";
// export { directoryString } from "../SelectedAttributeTypes/directoryString.oa.mjs";
// export { id_at_zimbraDeviceCalendarSoftDeleteExcludePattern } from "../LdapZimbra/id-at-zimbraDeviceCalendarSoftDeleteExcludePattern.va.mjs";


/**
 * @summary zimbraDeviceCalendarSoftDeleteExcludePattern
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraDeviceCalendarSoftDeleteExcludePattern ATTRIBUTE ::= {
 *   WITH SYNTAX               UnboundedDirectoryString
 *   EQUALITY MATCHING RULE    caseExactMatch
 *   SUBSTRINGS MATCHING RULE  caseExactSubstringsMatch
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               directoryString.&id
 *   LDAP-NAME                 {"zimbraDeviceCalendarSoftDeleteExcludePattern"}
 *   LDAP-DESC                 "Regex to be matched for preventing devices from soft deletion of out of range calendar items. Suppose device is set to sync calendar item of 2 months range then server will ONLY send softdelete for out of range (expired) calendar items, if device id DOES NOT match to the regex provided."
 *   ID                        id-at-zimbraDeviceCalendarSoftDeleteExcludePattern }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const zimbraDeviceCalendarSoftDeleteExcludePattern: ATTRIBUTE = undefined;

/* eslint-enable */
