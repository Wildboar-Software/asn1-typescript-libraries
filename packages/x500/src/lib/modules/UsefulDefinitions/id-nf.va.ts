/* eslint-disable */
import { ID } from "../UsefulDefinitions/ID.ta.js";
import { nameForm } from "../UsefulDefinitions/nameForm.va.js";
export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta.js";
export { nameForm } from "../UsefulDefinitions/nameForm.va.js";

/* START_OF_SYMBOL_DEFINITION id_nf */
/**
 * @summary id_nf
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-nf                                    ID ::= nameForm
 * ```
 *
 * @constant
 */
export const id_nf: ID = nameForm;
/* END_OF_SYMBOL_DEFINITION id_nf */

/* eslint-enable */
