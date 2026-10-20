/* eslint-disable */
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
// export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta.mjs";
import { matchingRule } from "../UsefulDefinitions/matchingRule.va.mjs";
// export { matchingRule } from "../UsefulDefinitions/matchingRule.va.mjs";


/**
 * @summary id_mr
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-mr ID ::= matchingRule
 * ```
 * 
 * @constant
 */
export
const id_mr: ID = matchingRule;

/* eslint-enable */
