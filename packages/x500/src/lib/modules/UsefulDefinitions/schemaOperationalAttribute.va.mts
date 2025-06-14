/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ds } from "../UsefulDefinitions/ds.va.mjs";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
/* START_OF_SYMBOL_DEFINITION schemaOperationalAttribute */
/**
 * @summary schemaOperationalAttribute
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * schemaOperationalAttribute               ID ::= {ds 21}
 * ```
 *
 * @constant
 */
export const schemaOperationalAttribute: ID = new _OID([21], ds);
/* END_OF_SYMBOL_DEFINITION schemaOperationalAttribute */

/* eslint-enable */
