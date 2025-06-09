/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../UsefulDefinitions/ID.ta.js";
import { module_ } from "../UsefulDefinitions/module.va.js";
export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta.js";
export { module_ } from "../UsefulDefinitions/module.va.js";

/* START_OF_SYMBOL_DEFINITION serviceAdministration */
/**
 * @summary serviceAdministration
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * serviceAdministration                    ID ::= {module serviceAdministration(33) 9}
 * ```
 *
 * @constant
 */
export const serviceAdministration: ID = new _OID(
    [/* serviceAdministration */ 33, 9],
    module_
);
/* END_OF_SYMBOL_DEFINITION serviceAdministration */

/* eslint-enable */
