/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ds } from "../UsefulDefinitions/ds.va.js";
import { ID } from "../UsefulDefinitions/ID.ta.js";
export { ds } from "../UsefulDefinitions/ds.va.js";
export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta.js";

/* START_OF_SYMBOL_DEFINITION accessControlSchemes */
/**
 * @summary accessControlSchemes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * accessControlSchemes                     ID ::= {ds 28}
 * ```
 *
 * @constant
 */
export const accessControlSchemes: ID = new _OID([28], ds);
/* END_OF_SYMBOL_DEFINITION accessControlSchemes */

/* eslint-enable */
