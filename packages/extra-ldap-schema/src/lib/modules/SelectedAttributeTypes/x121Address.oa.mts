/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { X121Address, _decode_X121Address, _encode_X121Address } from "../SelectedAttributeTypes/X121Address.ta.mjs";
// export { numericStringMatch } from "../SelectedAttributeTypes/numericStringMatch.oa.mjs";
// export { numericStringSubstringsMatch } from "../SelectedAttributeTypes/numericStringSubstringsMatch.oa.mjs";
// export { numericString } from "../SelectedAttributeTypes/numericString.oa.mjs";
// export { id_at_x121Address } from "../SelectedAttributeTypes/id-at-x121Address.va.mjs";


/**
 * @summary x121Address
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * x121Address ATTRIBUTE ::= {
 *   WITH SYNTAX              X121Address
 *   EQUALITY MATCHING RULE   numericStringMatch
 *   SUBSTRINGS MATCHING RULE numericStringSubstringsMatch
 *   LDAP-SYNTAX              numericString.&id
 *   LDAP-NAME                {"x121Address"}
 *   ID                       id-at-x121Address }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const x121Address: ATTRIBUTE = undefined;

/* eslint-enable */
