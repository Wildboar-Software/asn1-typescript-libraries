/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { ansi_X9_62 } from "../ANSI-X9-62/ansi-X9-62.va.mjs";
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
export const id_publicKeyType: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* keyType */ 2],
    ansi_X9_62
);

/* eslint-enable */
