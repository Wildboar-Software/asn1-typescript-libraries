/* eslint-disable */
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
import { matchingRestriction } from "../UsefulDefinitions/matchingRestriction.va.mjs";
export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta.mjs";
export { matchingRestriction } from "../UsefulDefinitions/matchingRestriction.va.mjs";

/* START_OF_SYMBOL_DEFINITION id_mre */
/**
 * @summary id_mre
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mre                                   ID ::= matchingRestriction
 * ```
 *
 * @constant
 */
export const id_mre: ID = matchingRestriction;
/* END_OF_SYMBOL_DEFINITION id_mre */

/* eslint-enable */
