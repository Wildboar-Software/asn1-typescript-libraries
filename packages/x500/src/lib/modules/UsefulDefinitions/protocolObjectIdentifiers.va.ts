/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../UsefulDefinitions/ID.ta.js";
import { module_ } from "../UsefulDefinitions/module.va.js";
export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta.js";
export { module_ } from "../UsefulDefinitions/module.va.js";

/* START_OF_SYMBOL_DEFINITION protocolObjectIdentifiers */
/**
 * @summary protocolObjectIdentifiers
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * protocolObjectIdentifiers                ID ::= {module protocolObjectIdentifiers(4) 9}
 * ```
 *
 * @constant
 */
export const protocolObjectIdentifiers: ID = new _OID(
    [/* protocolObjectIdentifiers */ 4, 9],
    module_
);
/* END_OF_SYMBOL_DEFINITION protocolObjectIdentifiers */

/* eslint-enable */
