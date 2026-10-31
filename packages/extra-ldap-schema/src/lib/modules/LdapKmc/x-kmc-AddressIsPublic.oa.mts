/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { booleanMatch } from "../SelectedAttributeTypes/booleanMatch.oa.mjs";
// export { boolean_ } from "../SelectedAttributeTypes/boolean.oa.mjs";
// export { id_at_x_kmc_AddressIsPublic } from "../LdapKmc/id-at-x-kmc-AddressIsPublic.va.mjs";


/**
 * @summary x_kmc_AddressIsPublic
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * x-kmc-AddressIsPublic ATTRIBUTE ::= {
 *   WITH SYNTAX               BOOLEAN
 *   EQUALITY MATCHING RULE    booleanMatch
 *   LDAP-SYNTAX               boolean.&id
 *   LDAP-NAME                 {"x-kmc-AddressIsPublic"}
 *   LDAP-DESC                 "Public postalcode and address to all users"
 *   ID                        id-at-x-kmc-AddressIsPublic }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const x_kmc_AddressIsPublic: ATTRIBUTE = undefined;

/* eslint-enable */
