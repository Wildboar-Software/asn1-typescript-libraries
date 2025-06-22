/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { ansi_x9_62 } from "../AlgorithmObjectIdentifiers/ansi-x9-62.va.mjs";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta.mjs";
/**
 * @summary secp256r1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * secp256r1       ID ::= { ansi-x9-62 curves(3) prime(1) 7 }
 * ```
 *
 * @constant
 */
export const secp256r1: ID = _OID.fromParts(
    [/* curves */ 3, /* prime */ 1, 7],
    ansi_x9_62
);

/* eslint-enable */
