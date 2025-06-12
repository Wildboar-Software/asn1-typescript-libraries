/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
import { module_ } from "../UsefulDefinitions/module.va.mjs";
export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta.mjs";
export { module_ } from "../UsefulDefinitions/module.va.mjs";

/* START_OF_SYMBOL_DEFINITION directoryOSIProtocols */
/**
 * @summary directoryOSIProtocols
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * directoryOSIProtocols                    ID ::= {module directoryOSIProtocols(37) 9}
 * ```
 *
 * @constant
 */
export const directoryOSIProtocols: ID = new _OID(
    [/* directoryOSIProtocols */ 37, 9],
    module_
);
/* END_OF_SYMBOL_DEFINITION directoryOSIProtocols */

/* eslint-enable */
