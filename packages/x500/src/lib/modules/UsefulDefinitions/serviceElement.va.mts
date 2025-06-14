/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ds } from "../UsefulDefinitions/ds.va.mjs";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
/* START_OF_SYMBOL_DEFINITION serviceElement */
/**
 * @summary serviceElement
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * serviceElement                           ID ::= {ds 2}
 * ```
 *
 * @constant
 */
export const serviceElement: ID = new _OID([2], ds);
/* END_OF_SYMBOL_DEFINITION serviceElement */

/* eslint-enable */
