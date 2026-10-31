/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { leaderDN } from "../OrganizationAndGroupSchema/leaderDN.oa.mjs";
// export { dn } from "../SelectedAttributeTypes/dn.oa.mjs";
// export { id_at_chiefDiversityOfficerDN } from "../OrganizationAndGroupSchema/id-at-chiefDiversityOfficerDN.va.mjs";


/**
 * @summary chiefDiversityOfficerDN
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * chiefDiversityOfficerDN ATTRIBUTE ::= {
 *     SUBTYPE OF                  leaderDN
 *     LDAP-SYNTAX                 dn.&id
 *     LDAP-NAME                   {"chiefDiversityOfficerDN"}
 *     LDAP-DESC                   "DN of the Chief Diversity Officer (CDO)"
 *     ID                          id-at-chiefDiversityOfficerDN
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const chiefDiversityOfficerDN: ATTRIBUTE = undefined;

/* eslint-enable */
