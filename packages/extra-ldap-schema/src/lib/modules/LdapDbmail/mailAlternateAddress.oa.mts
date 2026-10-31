/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { caseIgnoreIA5Match } from "../SelectedAttributeTypes/caseIgnoreIA5Match.oa.mjs";
// export { ia5String } from "../SelectedAttributeTypes/ia5String.oa.mjs";
// export { id_at_mailAlternateAddress } from "../LdapDbmail/id-at-mailAlternateAddress.va.mjs";


/**
 * @summary mailAlternateAddress
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * mailAlternateAddress ATTRIBUTE ::= {
 *   WITH SYNTAX               IA5String(SIZE (1..256))
 *   EQUALITY MATCHING RULE    caseIgnoreIA5Match
 *   LDAP-SYNTAX               ia5String.&id
 *   LDAP-NAME                 {"mailAlternateAddress"}
 *   LDAP-DESC                 "Secondary (alias) mailaddresses for the same user"
 *   ID                        id-at-mailAlternateAddress }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const mailAlternateAddress: ATTRIBUTE = undefined;

/* eslint-enable */
