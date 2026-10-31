/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { numericStringMatch } from "../SelectedAttributeTypes/numericStringMatch.oa.mjs";
// export { numericString } from "../SelectedAttributeTypes/numericString.oa.mjs";
// export { id_at_qmailAccountPurge } from "../LdapQmailNew/id-at-qmailAccountPurge.va.mjs";


/**
 * @summary qmailAccountPurge
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * qmailAccountPurge ATTRIBUTE ::= {
 *   WITH SYNTAX               NumericString
 *   EQUALITY MATCHING RULE    numericStringMatch
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               numericString.&id
 *   LDAP-NAME                 {"qmailAccountPurge"}
 *   LDAP-DESC                 "The earliest date when a mailMessageStore will be purged"
 *   ID                        id-at-qmailAccountPurge }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const qmailAccountPurge: ATTRIBUTE = undefined;

/* eslint-enable */
