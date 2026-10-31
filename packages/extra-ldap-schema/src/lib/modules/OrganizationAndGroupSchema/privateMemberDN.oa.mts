/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { member } from "../SelectedAttributeTypes/member.oa.mjs";
// export { dn } from "../SelectedAttributeTypes/dn.oa.mjs";
// export { id_at_privateMemberDN } from "../OrganizationAndGroupSchema/id-at-privateMemberDN.va.mjs";


/**
 * @summary privateMemberDN
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * privateMemberDN ATTRIBUTE ::= {
 *     SUBTYPE OF                  member
 *     LDAP-SYNTAX                 dn.&id
 *     LDAP-NAME                   {"privateMemberDN"}
 *     LDAP-DESC                   "DN of a member whose involvement is private / secret information"
 *     ID                          id-at-privateMemberDN
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const privateMemberDN: ATTRIBUTE = undefined;

/* eslint-enable */
