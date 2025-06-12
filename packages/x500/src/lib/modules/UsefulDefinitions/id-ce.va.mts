/* eslint-disable */
import { certificateExtension } from "../UsefulDefinitions/certificateExtension.va.mjs";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
export { certificateExtension } from "../UsefulDefinitions/certificateExtension.va.mjs";
export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta.mjs";

/* START_OF_SYMBOL_DEFINITION id_ce */
/**
 * @summary id_ce
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce                                    ID ::= certificateExtension
 * ```
 *
 * @constant
 */
export const id_ce: ID = certificateExtension;
/* END_OF_SYMBOL_DEFINITION id_ce */

/* eslint-enable */
