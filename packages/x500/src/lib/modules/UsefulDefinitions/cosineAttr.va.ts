/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { cosine } from "../UsefulDefinitions/cosine.va.js";
import { ID } from "../UsefulDefinitions/ID.ta.js";
export { cosine } from "../UsefulDefinitions/cosine.va.js";
export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta.js";

/* START_OF_SYMBOL_DEFINITION cosineAttr */
/**
 * @summary cosineAttr
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * cosineAttr          ID ::= {cosine pilotAttributeType(1)}
 * ```
 *
 * @constant
 */
export const cosineAttr: ID = new _OID([/* pilotAttributeType */ 1], cosine);
/* END_OF_SYMBOL_DEFINITION cosineAttr */

/* eslint-enable */
