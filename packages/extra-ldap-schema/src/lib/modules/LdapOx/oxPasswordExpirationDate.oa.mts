/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { generalizedTimeMatch } from "../SelectedAttributeTypes/generalizedTimeMatch.oa.mjs";
// export { generalizedTimeOrderingMatch } from "../SelectedAttributeTypes/generalizedTimeOrderingMatch.oa.mjs";
// export { generalizedTime } from "../SelectedAttributeTypes/generalizedTime.oa.mjs";
// export { id_at_oxPasswordExpirationDate } from "../LdapOx/id-at-oxPasswordExpirationDate.va.mjs";


/**
 * @summary oxPasswordExpirationDate
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * oxPasswordExpirationDate ATTRIBUTE ::= {
 *   WITH SYNTAX               GeneralizedTime
 *   EQUALITY MATCHING RULE    generalizedTimeMatch
 *   ORDERING MATCHING RULE    generalizedTimeOrderingMatch
 *   LDAP-SYNTAX               generalizedTime.&id
 *   LDAP-NAME                 {"oxPasswordExpirationDate"}
 *   LDAP-DESC                 "Password Expiration date, represented as an ISO 8601 (YYYY-MM-DD) format"
 *   ID                        id-at-oxPasswordExpirationDate }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const oxPasswordExpirationDate: ATTRIBUTE = undefined;

/* eslint-enable */
