/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
import { module_ } from "../UsefulDefinitions/module.va.mjs";
/* START_OF_SYMBOL_DEFINITION selectedObjectClasses */
/**
 * @summary selectedObjectClasses
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * selectedObjectClasses                    ID ::= {module selectedObjectClasses(6) 9}
 * ```
 *
 * @constant
 */
export const selectedObjectClasses: ID = new _OID(
    [/* selectedObjectClasses */ 6, 9],
    module_
);
/* END_OF_SYMBOL_DEFINITION selectedObjectClasses */

/* eslint-enable */
