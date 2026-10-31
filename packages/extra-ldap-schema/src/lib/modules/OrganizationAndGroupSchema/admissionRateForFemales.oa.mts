/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { id_at_admissionRateForFemales } from "../OrganizationAndGroupSchema/id-at-admissionRateForFemales.va.mjs";


/**
 * @summary admissionRateForFemales
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * admissionRateForFemales ATTRIBUTE ::= {
 *     WITH SYNTAX                 BoundedPercentage
 *     EQUALITY MATCHING RULE      realMatch
 *     ORDERING MATCHING RULE      realOrderingMatch
 *     LDAP-SYNTAX                    real.&id
 *     LDAP-NAME                    {"admissionRateForFemales"}
 *     LDAP-DESC                    "Admission Rate as a Percentage of all Female Applicants / Candidates"
 *     ID                            id-at-admissionRateForFemales
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const admissionRateForFemales: ATTRIBUTE = undefined;

/* eslint-enable */
