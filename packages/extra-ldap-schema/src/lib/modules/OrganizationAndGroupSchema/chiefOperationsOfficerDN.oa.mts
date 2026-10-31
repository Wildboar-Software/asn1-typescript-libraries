/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { leaderDN } from "../OrganizationAndGroupSchema/leaderDN.oa.mjs";
// export { dn } from "../SelectedAttributeTypes/dn.oa.mjs";
// export { id_at_chiefOperationsOfficerDN } from "../OrganizationAndGroupSchema/id-at-chiefOperationsOfficerDN.va.mjs";


/**
 * @summary chiefOperationsOfficerDN
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * chiefOperationsOfficerDN ATTRIBUTE ::= {
 *     SUBTYPE OF                  leaderDN
 *     LDAP-SYNTAX                 dn.&id
 *     LDAP-NAME                   {"chiefOperationsOfficerDN"}
 *     LDAP-DESC                   "DN of the Chief Operations Officer (COO)"
 *     ID                          id-at-chiefOperationsOfficerDN
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const chiefOperationsOfficerDN: ATTRIBUTE = undefined;

/* eslint-enable */
