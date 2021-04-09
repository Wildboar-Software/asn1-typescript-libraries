/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { ansi_X9_62 } from "../ANSI-X9-62/ansi-X9-62.va";
export { ansi_X9_62 } from "../ANSI-X9-62/ansi-X9-62.va";

/* START_OF_SYMBOL_DEFINITION id_ecSigType */
/**
 * @summary id_ecSigType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ecSigType OBJECT IDENTIFIER ::= { ansi-X9-62 signatures(4) }
 * ```
 *
 * @constant
 */
export const id_ecSigType: OBJECT_IDENTIFIER = new _OID(
    [/* signatures */ 4],
    ansi_X9_62
);
/* END_OF_SYMBOL_DEFINITION id_ecSigType */

/* eslint-enable */
