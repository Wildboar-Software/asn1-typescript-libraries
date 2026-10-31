/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { SearchRuleDescription, _decode_SearchRuleDescription, _encode_SearchRuleDescription } from "../InformationFramework/SearchRuleDescription.ta.mjs";
// export { integerFirstComponentMatch } from "../SelectedAttributeTypes/integerFirstComponentMatch.oa.mjs";
// export { id_oa_searchRules } from "../InformationFramework/id-oa-searchRules.va.mjs";


/**
 * @summary searchRules
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * searchRules ATTRIBUTE ::= {
 *   WITH SYNTAX             SearchRuleDescription
 *   EQUALITY MATCHING RULE  integerFirstComponentMatch
 *   USAGE                   directoryOperation
 *   ID                      id-oa-searchRules }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const searchRules: ATTRIBUTE = undefined;

/* eslint-enable */
