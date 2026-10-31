/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { numericStringMatch } from "../SelectedAttributeTypes/numericStringMatch.oa.mjs";
// export { numericStringSubstringsMatch } from "../SelectedAttributeTypes/numericStringSubstringsMatch.oa.mjs";
// export { numericString } from "../SelectedAttributeTypes/numericString.oa.mjs";
// export { id_at_birthday } from "../LdapIodine/id-at-birthday.va.mjs";


/**
 * @summary birthday
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * birthday ATTRIBUTE ::= {
 *   WITH SYNTAX               NumericString
 *   EQUALITY MATCHING RULE    numericStringMatch
 *   SUBSTRINGS MATCHING RULE  numericStringSubstringsMatch
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               numericString.&id
 *   LDAP-NAME                 {"birthday", "bday"}
 *   LDAP-DESC                 "The birthday of a person"
 *   ID                        id-at-birthday }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const birthday: ATTRIBUTE = undefined;

/* eslint-enable */
