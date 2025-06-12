/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { scheme } from "../ANSI-X9-42/scheme.va.js";
export { scheme } from "../ANSI-X9-42/scheme.va.js";

/* START_OF_SYMBOL_DEFINITION dhEphem */
/**
 * @summary dhEphem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dhEphem     OBJECT IDENTIFIER ::= {scheme 2 }
 * ```
 *
 * @constant
 */
export const dhEphem: OBJECT_IDENTIFIER = new _OID([2], scheme);
/* END_OF_SYMBOL_DEFINITION dhEphem */

/* eslint-enable */
