/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { booleanMatch } from "../SelectedAttributeTypes/booleanMatch.oa.mjs";
// export { boolean_ } from "../SelectedAttributeTypes/boolean.oa.mjs";
// export { id_at_zimbraLmtpPermanentFailureWhenOverQuota } from "../LdapZimbra/id-at-zimbraLmtpPermanentFailureWhenOverQuota.va.mjs";


/**
 * @summary zimbraLmtpPermanentFailureWhenOverQuota
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraLmtpPermanentFailureWhenOverQuota ATTRIBUTE ::= {
 *   WITH SYNTAX               BOOLEAN
 *   EQUALITY MATCHING RULE    booleanMatch
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               boolean.&id
 *   LDAP-NAME                 {"zimbraLmtpPermanentFailureWhenOverQuota"}
 *   LDAP-DESC                 "If true, a permanent failure (552) is returned when the user is over quota. If false, a temporary failure (452) is returned."
 *   ID                        id-at-zimbraLmtpPermanentFailureWhenOverQuota }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const zimbraLmtpPermanentFailureWhenOverQuota: ATTRIBUTE = undefined;

/* eslint-enable */
