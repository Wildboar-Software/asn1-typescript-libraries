/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { PostalAddress, _decode_PostalAddress, _encode_PostalAddress } from "../SelectedAttributeTypes/PostalAddress.ta.mjs";
// export { caseIgnoreListMatch } from "../SelectedAttributeTypes/caseIgnoreListMatch.oa.mjs";
// export { caseIgnoreListSubstringsMatch } from "../SelectedAttributeTypes/caseIgnoreListSubstringsMatch.oa.mjs";
// export { postalAddr } from "../SelectedAttributeTypes/postalAddr.oa.mjs";
// export { id_at_homePostalAddress } from "../LdapSchema2ldifCosine/id-at-homePostalAddress.va.mjs";


/**
 * @summary homePostalAddress
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * homePostalAddress ATTRIBUTE ::= {
 *   WITH SYNTAX               PostalAddress
 *   EQUALITY MATCHING RULE    caseIgnoreListMatch
 *   SUBSTRINGS MATCHING RULE  caseIgnoreListSubstringsMatch
 *   LDAP-SYNTAX               postalAddr.&id
 *   LDAP-NAME                 {"homePostalAddress"}
 *   LDAP-DESC                 "RFC1274: home postal address"
 *   ID                        id-at-homePostalAddress }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const homePostalAddress: ATTRIBUTE = undefined;

/* eslint-enable */
