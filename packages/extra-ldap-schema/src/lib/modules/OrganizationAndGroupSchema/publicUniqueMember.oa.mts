/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { uniqueMember } from "../SelectedAttributeTypes/uniqueMember.oa.mjs";
// export { id_at_publicUniqueMember } from "../OrganizationAndGroupSchema/id-at-publicUniqueMember.va.mjs";


/**
 * @summary publicUniqueMember
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * publicUniqueMember ATTRIBUTE ::= {
 *     SUBTYPE OF                  uniqueMember
 *     LDAP-SYNTAX                 nameAndOptionalUID.&id
 *     LDAP-NAME                   {"publicUniqueMember"}
 *     LDAP-DESC                   "A member whose involvement is public / non-secret information"
 *     ID                          id-at-publicUniqueMember
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const publicUniqueMember: ATTRIBUTE = undefined;

/* eslint-enable */
