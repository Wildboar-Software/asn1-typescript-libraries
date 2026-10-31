/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { memberNoun } from "../OrganizationAndGroupSchema/memberNoun.oa.mjs";
// export { directoryString } from "../SelectedAttributeTypes/directoryString.oa.mjs";
// export { id_at_memberPluralNoun } from "../OrganizationAndGroupSchema/id-at-memberPluralNoun.va.mjs";


/**
 * @summary memberPluralNoun
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * memberPluralNoun ATTRIBUTE ::= {
 *     SUBTYPE OF                  memberNoun
 *     LDAP-SYNTAX                    directoryString.&id
 *     LDAP-NAME                    {"memberPluralNoun"}
 *     LDAP-DESC                    "Plural noun used as a term for members of this group, such as 'Goobers'"
 *     ID                            id-at-memberPluralNoun
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const memberPluralNoun: ATTRIBUTE = undefined;

/* eslint-enable */
