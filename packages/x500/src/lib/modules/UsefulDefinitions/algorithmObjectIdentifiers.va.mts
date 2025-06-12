/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
import { module_ } from "../UsefulDefinitions/module.va.mjs";
export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta.mjs";
export { module_ } from "../UsefulDefinitions/module.va.mjs";

/* START_OF_SYMBOL_DEFINITION algorithmObjectIdentifiers */
/**
 * @summary algorithmObjectIdentifiers
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * algorithmObjectIdentifiers               ID ::= {module algorithmObjectIdentifiers(8) 9}
 * ```
 *
 * @constant
 */
export const algorithmObjectIdentifiers: ID = new _OID(
    [/* algorithmObjectIdentifiers */ 8, 9],
    module_
);
/* END_OF_SYMBOL_DEFINITION algorithmObjectIdentifiers */

/* eslint-enable */
