/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { id_at_meanSalary } from "../OrganizationAndGroupSchema/id-at-meanSalary.va.mjs";


/**
 * @summary meanSalary
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * meanSalary ATTRIBUTE ::= {
 *     WITH SYNTAX                 Currency
 *     EQUALITY MATCHING RULE      currencyMatch
 *     ORDERING MATCHING RULE      currencyOrderingMatch
 *     LDAP-SYNTAX                    currencySyntax.&id
 *     LDAP-NAME                    {"meanSalary"}
 *     LDAP-DESC                    "Mean Salary"
 *     ID                            id-at-meanSalary
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const meanSalary: ATTRIBUTE = undefined;

/* eslint-enable */
