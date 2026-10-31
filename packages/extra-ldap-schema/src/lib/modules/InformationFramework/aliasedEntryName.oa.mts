/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { DistinguishedName, _decode_DistinguishedName, _encode_DistinguishedName } from "../InformationFramework/DistinguishedName.ta.mjs";
// export { distinguishedNameMatch } from "../InformationFramework/distinguishedNameMatch.oa.mjs";
// export { dn } from "../SelectedAttributeTypes/dn.oa.mjs";
// export { id_at_aliasedEntryName } from "../InformationFramework/id-at-aliasedEntryName.va.mjs";


/**
 * @summary aliasedEntryName
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * aliasedEntryName ATTRIBUTE ::= {
 *   WITH SYNTAX             DistinguishedName
 *   EQUALITY MATCHING RULE  distinguishedNameMatch
 *   SINGLE VALUE            TRUE
 *   LDAP-SYNTAX             dn.&id
 *   LDAP-NAME               {"aliasedObjectName"}
 *   ID                      id-at-aliasedEntryName }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const aliasedEntryName: ATTRIBUTE = undefined;

/* eslint-enable */
