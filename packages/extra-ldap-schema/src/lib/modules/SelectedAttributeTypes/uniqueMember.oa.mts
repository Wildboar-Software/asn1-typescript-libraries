/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { NameAndOptionalUID, _decode_NameAndOptionalUID, _encode_NameAndOptionalUID } from "../SelectedAttributeTypes/NameAndOptionalUID.ta.mjs";
// export { uniqueMemberMatch } from "../SelectedAttributeTypes/uniqueMemberMatch.oa.mjs";
// export { nameAndOptionalUID } from "../SelectedAttributeTypes/nameAndOptionalUID.oa.mjs";
// export { id_at_uniqueMember } from "../SelectedAttributeTypes/id-at-uniqueMember.va.mjs";


/**
 * @summary uniqueMember
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * uniqueMember ATTRIBUTE ::= {
 *   WITH SYNTAX              NameAndOptionalUID
 *   EQUALITY MATCHING RULE   uniqueMemberMatch
 *   LDAP-SYNTAX              nameAndOptionalUID.&id
 *   LDAP-NAME                {"uniqueMember"}
 *   ID                       id-at-uniqueMember }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const uniqueMember: ATTRIBUTE = undefined;

/* eslint-enable */
