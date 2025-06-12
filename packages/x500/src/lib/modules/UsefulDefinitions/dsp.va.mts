/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
import { module_ } from "../UsefulDefinitions/module.va.mjs";
export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta.mjs";
export { module_ } from "../UsefulDefinitions/module.va.mjs";

/* START_OF_SYMBOL_DEFINITION dsp */
/**
 * @summary dsp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dsp                                      ID ::= {module dsp(12) 9}
 * ```
 *
 * @constant
 */
export const dsp: ID = new _OID([/* dsp */ 12, 9], module_);
/* END_OF_SYMBOL_DEFINITION dsp */

/* eslint-enable */
