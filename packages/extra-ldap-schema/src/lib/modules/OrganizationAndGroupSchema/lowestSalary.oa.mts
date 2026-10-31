/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { id_at_lowestSalary } from "../OrganizationAndGroupSchema/id-at-lowestSalary.va.mjs";


/**
 * @summary lowestSalary
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * lowestSalary ATTRIBUTE ::= {
 *     WITH SYNTAX                 Currency
 *     EQUALITY MATCHING RULE      currencyMatch
 *     ORDERING MATCHING RULE      currencyOrderingMatch
 *     LDAP-SYNTAX                    currencySyntax.&id
 *     LDAP-NAME                    {"lowestSalary"}
 *     LDAP-DESC                    "Lowest Salary"
 *     ID                            id-at-lowestSalary
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const lowestSalary: ATTRIBUTE = undefined;

/* eslint-enable */
