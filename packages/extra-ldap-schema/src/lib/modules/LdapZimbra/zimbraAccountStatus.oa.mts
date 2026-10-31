/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { DirectoryString, _decode_DirectoryString, _encode_DirectoryString } from "../SelectedAttributeTypes/DirectoryString.ta.mjs";
// export { caseIgnoreMatch } from "../SelectedAttributeTypes/caseIgnoreMatch.oa.mjs";
// export { caseIgnoreSubstringsMatch } from "../SelectedAttributeTypes/caseIgnoreSubstringsMatch.oa.mjs";
// export { directoryString } from "../SelectedAttributeTypes/directoryString.oa.mjs";
// export { id_at_zimbraAccountStatus } from "../LdapZimbra/id-at-zimbraAccountStatus.va.mjs";


/**
 * @summary zimbraAccountStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraAccountStatus ATTRIBUTE ::= {
 *   WITH SYNTAX               DirectoryString{32}
 *   EQUALITY MATCHING RULE    caseIgnoreMatch
 *   SUBSTRINGS MATCHING RULE  caseIgnoreSubstringsMatch
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               directoryString.&id
 *   LDAP-NAME                 {"zimbraAccountStatus"}
 *   LDAP-DESC                 "account status. active - active lockout - no login until lockout duration is over, mail delivery OK. locked - no login, mail delivery OK. maintenance - no login, no delivery(lmtp server returns 4.x.x Persistent Transient Failure). pending - no login, no delivery(lmtp server returns 5.x.x Permanent Failure), Account behavior is like closed, except that when the status is being set to pending, account addresses are not removed from distribution lists. The use case is for hosted. New account creation based on invites that are not completed until user accepts TOS on account creation confirmation page. closed - no login, no delivery(lmtp server returns 5.x.x Permanent Failure), all addresses (account main email and all aliases) of the account are removed from all distribution lists."
 *   ID                        id-at-zimbraAccountStatus }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const zimbraAccountStatus: ATTRIBUTE = undefined;

/* eslint-enable */
