/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
import { module_ } from "../UsefulDefinitions/module.va.mjs";
export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta.mjs";
export { module_ } from "../UsefulDefinitions/module.va.mjs";

/* START_OF_SYMBOL_DEFINITION directoryOperationalBindingTypes */
/**
 * @summary directoryOperationalBindingTypes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * directoryOperationalBindingTypes         ID ::= {module directoryOperationalBindingTypes(25) 9}
 * ```
 *
 * @constant
 */
export const directoryOperationalBindingTypes: ID = new _OID(
    [/* directoryOperationalBindingTypes */ 25, 9],
    module_
);
/* END_OF_SYMBOL_DEFINITION directoryOperationalBindingTypes */

/* eslint-enable */
