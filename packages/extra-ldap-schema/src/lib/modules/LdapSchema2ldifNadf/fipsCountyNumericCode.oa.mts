/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { numericStringMatch } from "../SelectedAttributeTypes/numericStringMatch.oa.mjs";
// export { numericString } from "../SelectedAttributeTypes/numericString.oa.mjs";
// export { id_at_fipsCountyNumericCode } from "../LdapSchema2ldifNadf/id-at-fipsCountyNumericCode.va.mjs";


/**
 * @summary fipsCountyNumericCode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * fipsCountyNumericCode ATTRIBUTE ::= {
 *   WITH SYNTAX               NumericString(SIZE (1..5))
 *   EQUALITY MATCHING RULE    numericStringMatch
 *   LDAP-SYNTAX               numericString.&id
 *   LDAP-NAME                 {"fipsCountyNumericCode"}
 *   ID                        id-at-fipsCountyNumericCode }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const fipsCountyNumericCode: ATTRIBUTE = undefined;

/* eslint-enable */
