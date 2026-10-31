/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { caseExactMatch } from "../SelectedAttributeTypes/caseExactMatch.oa.mjs";
// export { printableString } from "../SelectedAttributeTypes/printableString.oa.mjs";
// export { id_at_urnC } from "../SelectedAttributeTypes/id-at-urnC.va.mjs";


/**
 * @summary urnC
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * urnC ATTRIBUTE ::= {
 *   WITH SYNTAX              PrintableString
 *   EQUALITY MATCHING RULE   caseExactMatch
 *   SINGLE VALUE             TRUE
 *   LDAP-SYNTAX              printableString.&id
 *   LDAP-NAME                {"urnC"}
 *   ID                       id-at-urnC }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const urnC: ATTRIBUTE = undefined;

/* eslint-enable */
