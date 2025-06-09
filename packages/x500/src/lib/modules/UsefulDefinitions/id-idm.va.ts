/* eslint-disable */
import { ID } from "../UsefulDefinitions/ID.ta.js";
import { idmProtocol } from "../UsefulDefinitions/idmProtocol.va.js";
export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta.js";
export { idmProtocol } from "../UsefulDefinitions/idmProtocol.va.js";

/* START_OF_SYMBOL_DEFINITION id_idm */
/**
 * @summary id_idm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-idm                                   ID ::= idmProtocol
 * ```
 *
 * @constant
 */
export const id_idm: ID = idmProtocol;
/* END_OF_SYMBOL_DEFINITION id_idm */

/* eslint-enable */
