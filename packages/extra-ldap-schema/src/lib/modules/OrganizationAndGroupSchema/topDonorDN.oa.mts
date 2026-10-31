/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { donorDN } from "../OrganizationAndGroupSchema/donorDN.oa.mjs";
// export { dn } from "../SelectedAttributeTypes/dn.oa.mjs";
// export { id_at_topDonorDN } from "../OrganizationAndGroupSchema/id-at-topDonorDN.va.mjs";


/**
 * @summary topDonorDN
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * topDonorDN ATTRIBUTE ::= {
 *     SUBTYPE OF                  donorDN
 *     LDAP-SYNTAX                 dn.&id
 *     LDAP-NAME                   {"topDonorDN"}
 *     LDAP-DESC                   "DN of a top donor to this person or organization"
 *     ID                          id-at-topDonorDN
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const topDonorDN: ATTRIBUTE = undefined;

/* eslint-enable */
