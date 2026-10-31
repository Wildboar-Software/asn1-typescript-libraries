/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { caseIgnoreMatch } from "../SelectedAttributeTypes/caseIgnoreMatch.oa.mjs";
// export { printableString } from "../SelectedAttributeTypes/printableString.oa.mjs";
// export { id_at_fipsStateAlphaCode } from "../LdapSchema2ldifNadf/id-at-fipsStateAlphaCode.va.mjs";


/**
 * @summary fipsStateAlphaCode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * fipsStateAlphaCode ATTRIBUTE ::= {
 *   WITH SYNTAX               PrintableString(SIZE (1..2))
 *   EQUALITY MATCHING RULE    caseIgnoreMatch
 *   LDAP-SYNTAX               printableString.&id
 *   LDAP-NAME                 {"fipsStateAlphaCode"}
 *   ID                        id-at-fipsStateAlphaCode }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const fipsStateAlphaCode: ATTRIBUTE = undefined;

/* eslint-enable */
