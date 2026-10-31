/* eslint-disable */
import { type MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
// export { PKCS9String, _decode_PKCS9String, _encode_PKCS9String } from "../PKCS-9/PKCS9String.ta.mjs";
// export { pkcs_9_ub_match } from "../PKCS-9/pkcs-9-ub-match.va.mjs";
// export { pkcs_9_mr_caseIgnoreMatch } from "../PKCS-9/pkcs-9-mr-caseIgnoreMatch.va.mjs";


/**
 * @summary pkcs9CaseIgnoreMatch
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * pkcs9CaseIgnoreMatch MATCHING-RULE ::= {
 *         SYNTAX PKCS9String {pkcs-9-ub-match}
 *         ID pkcs-9-mr-caseIgnoreMatch
 * }
 * ```
 * 
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export
const pkcs9CaseIgnoreMatch: MATCHING_RULE = undefined;

/* eslint-enable */
