/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ansi_x9_62 } from "../AlgorithmObjectIdentifiers/ansi-x9-62.va.mjs";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta.mjs";
/**
 * @summary secp192r1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * secp192r1       ID ::= { ansi-x9-62 curves(3) prime(1) 1 }
 * ```
 *
 * @constant
 */
export const secp192r1: ID = _OID.fromParts(
    [/* curves */ 3, /* prime */ 1, 1],
    ansi_x9_62
);

/* eslint-enable */
