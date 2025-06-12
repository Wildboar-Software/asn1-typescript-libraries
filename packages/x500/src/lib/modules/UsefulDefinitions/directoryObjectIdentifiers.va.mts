/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
import { module_ } from "../UsefulDefinitions/module.va.mjs";
export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta.mjs";
export { module_ } from "../UsefulDefinitions/module.va.mjs";

/* START_OF_SYMBOL_DEFINITION directoryObjectIdentifiers */
/**
 * @summary directoryObjectIdentifiers
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * directoryObjectIdentifiers               ID ::= {module directoryObjectIdentifiers(9) 9}
 * ```
 *
 * @constant
 */
export const directoryObjectIdentifiers: ID = new _OID(
    [/* directoryObjectIdentifiers */ 9, 9],
    module_
);
/* END_OF_SYMBOL_DEFINITION directoryObjectIdentifiers */

/* eslint-enable */
