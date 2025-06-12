/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { ansi_X9_42 } from "../ANSI-X9-42/ansi-X9-42.va.js";
export { ansi_X9_42 } from "../ANSI-X9-42/ansi-X9-42.va.js";

/* START_OF_SYMBOL_DEFINITION keyDerivationMethod */
/**
 * @summary keyDerivationMethod
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * keyDerivationMethod        OBJECT  IDENTIFIER ::= { ansi-X9-42 kdMethods(5) }
 * ```
 *
 * @constant
 */
export const keyDerivationMethod: OBJECT_IDENTIFIER = new _OID(
    [/* kdMethods */ 5],
    ansi_X9_42
);
/* END_OF_SYMBOL_DEFINITION keyDerivationMethod */

/* eslint-enable */
