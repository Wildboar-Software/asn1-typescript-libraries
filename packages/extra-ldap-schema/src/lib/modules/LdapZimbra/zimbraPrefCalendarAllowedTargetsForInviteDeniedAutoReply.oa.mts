/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { DirectoryString, _decode_DirectoryString, _encode_DirectoryString } from "../SelectedAttributeTypes/DirectoryString.ta.mjs";
// export { caseIgnoreMatch } from "../SelectedAttributeTypes/caseIgnoreMatch.oa.mjs";
// export { caseIgnoreSubstringsMatch } from "../SelectedAttributeTypes/caseIgnoreSubstringsMatch.oa.mjs";
// export { directoryString } from "../SelectedAttributeTypes/directoryString.oa.mjs";
// export { id_at_zimbraPrefCalendarAllowedTargetsForInviteDeniedAutoReply } from "../LdapZimbra/id-at-zimbraPrefCalendarAllowedTargetsForInviteDeniedAutoReply.va.mjs";


/**
 * @summary zimbraPrefCalendarAllowedTargetsForInviteDeniedAutoReply
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraPrefCalendarAllowedTargetsForInviteDeniedAutoReply ATTRIBUTE ::= {
 *   WITH SYNTAX               DirectoryString{32}
 *   EQUALITY MATCHING RULE    caseIgnoreMatch
 *   SUBSTRINGS MATCHING RULE  caseIgnoreSubstringsMatch
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               directoryString.&id
 *   LDAP-NAME                 {"zimbraPrefCalendarAllowedTargetsForInviteDeniedAutoReply"}
 *   LDAP-DESC                 "Allowed recipients if ""zimbraPrefCalendarSendInviteDeniedAutoReply"" is TRUE: internal - Only send ""invite denied"" auto-response if the sender of the original invite is an internal user. sameDomain - Only send ""invite denied"" auto-response if the sender of the original invite is in the same domain as the invitee. all - No restrictions on who to send ""invite denied"" auto-responses to."
 *   ID                        id-at-zimbraPrefCalendarAllowedTargetsForInviteDeniedAutoReply }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const zimbraPrefCalendarAllowedTargetsForInviteDeniedAutoReply: ATTRIBUTE = undefined;

/* eslint-enable */
