/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { ansi_X9_62 } from "../ANSI-X9-62/ansi-X9-62.va";
export { ansi_X9_62 } from "../ANSI-X9-62/ansi-X9-62.va";

/* START_OF_SYMBOL_DEFINITION id_publicKeyType */
/**
 * @summary id_publicKeyType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-publicKeyType OBJECT IDENTIFIER ::= { ansi-X9-62 keyType(2) }
 * ```
 *
 * @constant
 */
export const id_publicKeyType: OBJECT_IDENTIFIER = new _OID(
    [/* keyType */ 2],
    ansi_X9_62
);
/* END_OF_SYMBOL_DEFINITION id_publicKeyType */

/* eslint-enable */
