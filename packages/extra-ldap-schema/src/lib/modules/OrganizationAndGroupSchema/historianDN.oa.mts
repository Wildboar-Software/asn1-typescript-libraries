/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { distinguishedName } from "../SelectedAttributeTypes/distinguishedName.oa.mjs";
// export { dn } from "../SelectedAttributeTypes/dn.oa.mjs";
// export { id_at_historianDN } from "../OrganizationAndGroupSchema/id-at-historianDN.va.mjs";


/**
 * @summary historianDN
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * historianDN ATTRIBUTE ::= {
 *     SUBTYPE OF                  distinguishedName
 *     LDAP-SYNTAX                 dn.&id
 *     LDAP-NAME                   {"historianDN"}
 *     LDAP-DESC                   "DN of the historian of a group or organization"
 *     ID                          id-at-historianDN
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const historianDN: ATTRIBUTE = undefined;

/* eslint-enable */
