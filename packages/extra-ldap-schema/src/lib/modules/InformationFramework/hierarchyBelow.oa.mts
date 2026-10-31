/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { HierarchyBelow, _decode_HierarchyBelow, _encode_HierarchyBelow } from "../InformationFramework/HierarchyBelow.ta.mjs";
// export { booleanMatch } from "../SelectedAttributeTypes/booleanMatch.oa.mjs";
// export { id_oa_hierarchyBelow } from "../InformationFramework/id-oa-hierarchyBelow.va.mjs";


/**
 * @summary hierarchyBelow
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * hierarchyBelow ATTRIBUTE ::= {
 *   WITH SYNTAX             HierarchyBelow
 *   EQUALITY MATCHING RULE  booleanMatch
 *   SINGLE VALUE            TRUE
 *   NO USER MODIFICATION    TRUE
 *   USAGE                   directoryOperation
 *   ID                      id-oa-hierarchyBelow }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const hierarchyBelow: ATTRIBUTE = undefined;

/* eslint-enable */
