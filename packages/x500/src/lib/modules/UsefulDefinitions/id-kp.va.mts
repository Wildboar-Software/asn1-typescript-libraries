/* eslint-disable */
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
import { keyPurposes } from "../UsefulDefinitions/keyPurposes.va.mjs";
export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta.mjs";
export { keyPurposes } from "../UsefulDefinitions/keyPurposes.va.mjs";

/* START_OF_SYMBOL_DEFINITION id_kp */
/**
 * @summary id_kp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-kp                                    ID ::= keyPurposes
 * ```
 *
 * @constant
 */
export const id_kp: ID = keyPurposes;
/* END_OF_SYMBOL_DEFINITION id_kp */

/* eslint-enable */
