/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { membersCount } from "../OrganizationAndGroupSchema/membersCount.oa.mjs";
// export { integer } from "../SelectedAttributeTypes/integer.oa.mjs";
// export { id_at_activeMembersCount } from "../OrganizationAndGroupSchema/id-at-activeMembersCount.va.mjs";


/**
 * @summary activeMembersCount
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * activeMembersCount ATTRIBUTE ::= {
 *     SUBTYPE OF                  membersCount
 *     LDAP-SYNTAX                    integer.&id
 *     LDAP-NAME                    {"activeMembersCount"}
 *     LDAP-DESC                    "The active number of members, in contrast to dormant, reserve, retired, etc. members"
 *     ID                            id-at-activeMembersCount
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const activeMembersCount: ATTRIBUTE = undefined;

/* eslint-enable */
