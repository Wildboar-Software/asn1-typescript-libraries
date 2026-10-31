/* eslint-disable */
// export { ia5String } from "../SelectedAttributeTypes/ia5String.oa.mjs";
import { type MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";


/**
 * @summary caseExactIA5SubstringsMatch
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * caseExactIA5SubstringsMatch MATCHING-RULE ::= {
 *     SYNTAX                  IA5String
 *     LDAP-SYNTAX             ia5String.&id
 *     LDAP-NAME               {"caseExactIA5SubstringsMatch"}
 *     ID                      { 1 3 6 1 4 1 4203 1 2 1 }
 * }
 * ```
 * 
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export
const caseExactIA5SubstringsMatch: MATCHING_RULE = undefined;

/* eslint-enable */
