/* eslint-disable */
// export { ia5String } from "../SelectedAttributeTypes/ia5String.oa.mjs";
import { type MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";


/**
 * @summary ia5StringApproxMatch
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ia5StringApproxMatch MATCHING-RULE ::= {
 *     SYNTAX                  IA5String
 *     LDAP-SYNTAX             ia5String.&id
 *     LDAP-NAME               {"ia5StringApproxMatch"}
 *     ID                      { 1 3 6 1 4 1 4203 666 4 5 }
 * }
 * ```
 * 
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export
const ia5StringApproxMatch: MATCHING_RULE = undefined;

/* eslint-enable */
