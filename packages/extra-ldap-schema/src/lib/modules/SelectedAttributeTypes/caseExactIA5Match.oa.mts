/* eslint-disable */
import { type MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
// export { ia5String } from "../SelectedAttributeTypes/ia5String.oa.mjs";
// export { id_lmr_caseExactIA5Match } from "../SelectedAttributeTypes/id-lmr-caseExactIA5Match.va.mjs";


/**
 * @summary caseExactIA5Match
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * caseExactIA5Match MATCHING-RULE ::= {
 *   SYNTAX       IA5String
 *   LDAP-SYNTAX  ia5String.&id
 *   LDAP-NAME    {"caseExactIA5Match"}
 *   ID           id-lmr-caseExactIA5Match }
 * ```
 * 
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export
const caseExactIA5Match: MATCHING_RULE = undefined;

/* eslint-enable */
