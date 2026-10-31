/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { booleanMatch } from "../SelectedAttributeTypes/booleanMatch.oa.mjs";
// export { boolean_ } from "../SelectedAttributeTypes/boolean.oa.mjs";
// export { id_at_hasDrugTestingRequirement } from "../OrganizationAndGroupSchema/id-at-hasDrugTestingRequirement.va.mjs";


/**
 * @summary hasDrugTestingRequirement
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * hasDrugTestingRequirement ATTRIBUTE ::= {
 *     WITH SYNTAX                    BOOLEAN
 *     EQUALITY MATCHING RULE        booleanMatch
 *     LDAP-SYNTAX                    boolean.&id
 *     LDAP-NAME                    {"hasDrugTestingRequirement"}
 *     LDAP-DESC                    "Whether a group / organization requires a passing drug test for membership"
 *     ID                            id-at-hasDrugTestingRequirement
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const hasDrugTestingRequirement: ATTRIBUTE = undefined;

/* eslint-enable */
