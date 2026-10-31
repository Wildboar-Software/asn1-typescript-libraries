/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { booleanMatch } from "../SelectedAttributeTypes/booleanMatch.oa.mjs";
// export { boolean_ } from "../SelectedAttributeTypes/boolean.oa.mjs";
// export { id_at_zimbraDistributionListSendShareMessageToNewMembers } from "../LdapZimbra/id-at-zimbraDistributionListSendShareMessageToNewMembers.va.mjs";


/**
 * @summary zimbraDistributionListSendShareMessageToNewMembers
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraDistributionListSendShareMessageToNewMembers ATTRIBUTE ::= {
 *   WITH SYNTAX               BOOLEAN
 *   EQUALITY MATCHING RULE    booleanMatch
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               boolean.&id
 *   LDAP-NAME                 {"zimbraDistributionListSendShareMessageToNewMembers"}
 *   LDAP-DESC                 "Whether to send an email with all the shares of the group when a new member is added to the group. If not set, default is to send the email."
 *   ID                        id-at-zimbraDistributionListSendShareMessageToNewMembers }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const zimbraDistributionListSendShareMessageToNewMembers: ATTRIBUTE = undefined;

/* eslint-enable */
