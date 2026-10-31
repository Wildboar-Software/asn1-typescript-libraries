/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { DistinguishedName, _decode_DistinguishedName, _encode_DistinguishedName } from "../InformationFramework/DistinguishedName.ta.mjs";
// export { distinguishedNameMatch } from "../InformationFramework/distinguishedNameMatch.oa.mjs";
// export { dn } from "../SelectedAttributeTypes/dn.oa.mjs";
// export { id_at_oxAssociatedClient } from "../LdapOx/id-at-oxAssociatedClient.va.mjs";


/**
 * @summary oxAssociatedClient
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * oxAssociatedClient ATTRIBUTE ::= {
 *   WITH SYNTAX               DistinguishedName
 *   EQUALITY MATCHING RULE    distinguishedNameMatch
 *   LDAP-SYNTAX               dn.&id
 *   LDAP-NAME                 {"oxAssociatedClient", "associatedClient"}
 *   LDAP-DESC                 "Associate the dn of an OAuth2 client with a person or UMA Resource Set."
 *   ID                        id-at-oxAssociatedClient }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const oxAssociatedClient: ATTRIBUTE = undefined;

/* eslint-enable */
