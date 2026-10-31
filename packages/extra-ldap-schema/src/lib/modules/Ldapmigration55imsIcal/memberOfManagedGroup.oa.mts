/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { DistinguishedName, _decode_DistinguishedName, _encode_DistinguishedName } from "../InformationFramework/DistinguishedName.ta.mjs";
// export { dn } from "../SelectedAttributeTypes/dn.oa.mjs";
// export { id_at_memberOfManagedGroup } from "../Ldapmigration55imsIcal/id-at-memberOfManagedGroup.va.mjs";


/**
 * @summary memberOfManagedGroup
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * memberOfManagedGroup ATTRIBUTE ::= {
 *   WITH SYNTAX               DistinguishedName
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               dn.&id
 *   LDAP-NAME                 {"memberOfManagedGroup"}
 *   LDAP-DESC                 "iPlanet Messaging Server defined attribute"
 *   ID                        id-at-memberOfManagedGroup }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const memberOfManagedGroup: ATTRIBUTE = undefined;

/* eslint-enable */
