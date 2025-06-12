/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_characteristic_two_basis } from "../ANSI-X9-62/id-characteristic-two-basis.va.mjs";
export { id_characteristic_two_basis } from "../ANSI-X9-62/id-characteristic-two-basis.va.mjs";

/* START_OF_SYMBOL_DEFINITION ppBasis */
/**
 * @summary ppBasis
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ppBasis OBJECT IDENTIFIER ::= { id-characteristic-two-basis pentanomial(3) }
 * ```
 *
 * @constant
 */
export const ppBasis: OBJECT_IDENTIFIER = new _OID(
    [/* pentanomial */ 3],
    id_characteristic_two_basis
);
/* END_OF_SYMBOL_DEFINITION ppBasis */

/* eslint-enable */
