/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { distinguishedName } from "../SelectedAttributeTypes/distinguishedName.oa.mjs";
// export { dn } from "../SelectedAttributeTypes/dn.oa.mjs";
// export { id_at_secretaryDN } from "../OrganizationAndGroupSchema/id-at-secretaryDN.va.mjs";


/**
 * @summary secretaryDN
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * secretaryDN ATTRIBUTE ::= {
 *     SUBTYPE OF                  distinguishedName
 *     LDAP-SYNTAX                 dn.&id
 *     LDAP-NAME                   {"secretaryDN"}
 *     LDAP-DESC                   "DN of the secretary of a group or organization"
 *     ID                          id-at-secretaryDN
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const secretaryDN: ATTRIBUTE = undefined;

/* eslint-enable */
