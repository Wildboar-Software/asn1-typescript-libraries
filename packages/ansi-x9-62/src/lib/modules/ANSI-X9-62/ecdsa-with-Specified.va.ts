/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_ecSigType } from "../ANSI-X9-62/id-ecSigType.va.js";
export { id_ecSigType } from "../ANSI-X9-62/id-ecSigType.va.js";

/* START_OF_SYMBOL_DEFINITION ecdsa_with_Specified */
/**
 * @summary ecdsa_with_Specified
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ecdsa-with-Specified OBJECT IDENTIFIER ::= {id-ecSigType specified(3)}
 * ```
 *
 * @constant
 */
export const ecdsa_with_Specified: OBJECT_IDENTIFIER = new _OID(
    [/* specified */ 3],
    id_ecSigType
);
/* END_OF_SYMBOL_DEFINITION ecdsa_with_Specified */

/* eslint-enable */
