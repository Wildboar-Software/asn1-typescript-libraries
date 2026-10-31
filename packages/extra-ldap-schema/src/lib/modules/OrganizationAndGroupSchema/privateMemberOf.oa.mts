/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { memberOf } from "../OrganizationAndGroupSchema/memberOf.oa.mjs";
// export { dn } from "../SelectedAttributeTypes/dn.oa.mjs";
// export { id_at_privateMemberOf } from "../OrganizationAndGroupSchema/id-at-privateMemberOf.va.mjs";


/**
 * @summary privateMemberOf
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * privateMemberOf ATTRIBUTE ::= {
 *     SUBTYPE OF                  memberOf
 *     LDAP-SYNTAX                 dn.&id
 *     LDAP-NAME                   {"privateMemberOf"}
 *     LDAP-DESC                   "DN of a group or organization to which this entry is privately / secretly a member"
 *     ID                          id-at-privateMemberOf
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const privateMemberOf: ATTRIBUTE = undefined;

/* eslint-enable */
