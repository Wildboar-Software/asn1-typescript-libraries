/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_ecSigType } from "../ANSI-X9-62/id-ecSigType.va.mjs";
export { id_ecSigType } from "../ANSI-X9-62/id-ecSigType.va.mjs";

/* START_OF_SYMBOL_DEFINITION ecdsa_with_Recommended */
/**
 * @summary ecdsa_with_Recommended
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ecdsa-with-Recommended OBJECT IDENTIFIER ::= {id-ecSigType recommended(2)}
 * ```
 *
 * @constant
 */
export const ecdsa_with_Recommended: OBJECT_IDENTIFIER = new _OID(
    [/* recommended */ 2],
    id_ecSigType
);
/* END_OF_SYMBOL_DEFINITION ecdsa_with_Recommended */

/* eslint-enable */
