/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { integerMatch } from "../SelectedAttributeTypes/integerMatch.oa.mjs";
// export { integer } from "../SelectedAttributeTypes/integer.oa.mjs";
// export { id_at_zimbraMobilePolicyMaxCalendarAgeFilter } from "../LdapZimbra/id-at-zimbraMobilePolicyMaxCalendarAgeFilter.va.mjs";


/**
 * @summary zimbraMobilePolicyMaxCalendarAgeFilter
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraMobilePolicyMaxCalendarAgeFilter ATTRIBUTE ::= {
 *   WITH SYNTAX               INTEGER
 *   EQUALITY MATCHING RULE    integerMatch
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               integer.&id
 *   LDAP-NAME                 {"zimbraMobilePolicyMaxCalendarAgeFilter"}
 *   LDAP-DESC                 "the maximum range of calendar days that can be synchronized to the device; 0 - PAST ALL 4 - Two Weeks 5 - One Month 6 - Three Months 7 - Six Months ignored if zimbraFeatureMobilePolicyEnabled=FALSE or zimbraMobilePolicyMaxCalendarAgeFilter value is set to -1, 1, 2 or, 3"
 *   ID                        id-at-zimbraMobilePolicyMaxCalendarAgeFilter }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const zimbraMobilePolicyMaxCalendarAgeFilter: ATTRIBUTE = undefined;

/* eslint-enable */
