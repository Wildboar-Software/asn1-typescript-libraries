/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { VettingRequirements, _decode_VettingRequirements, _encode_VettingRequirements } from "../OrganizationAndGroupSchema/VettingRequirements.vsa.mjs";
// export { objectIdentifierMatch } from "../InformationFramework/objectIdentifierMatch.oa.mjs";
// export { oid } from "../SelectedAttributeTypes/oid.oa.mjs";
// export { id_at_vettingRequirements } from "../OrganizationAndGroupSchema/id-at-vettingRequirements.va.mjs";


/**
 * @summary vettingRequirements
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * vettingRequirements ATTRIBUTE ::= {
 *     WITH SYNTAX                    VettingRequirements
 *     EQUALITY MATCHING RULE        objectIdentifierMatch
 *     LDAP-SYNTAX                    oid.&id
 *     LDAP-NAME                    {"vettingRequirements"}
 *     LDAP-DESC                    "The object identifier of a category of vetting procedures required"
 *     ID                            id-at-vettingRequirements
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const vettingRequirements: ATTRIBUTE = undefined;

/* eslint-enable */
