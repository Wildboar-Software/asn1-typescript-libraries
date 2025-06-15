/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { digestAlgorithm } from "../PKCS5v2-1/digestAlgorithm.va.mjs";

/**
 * @summary id_hmacWithSHA512_256
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-hmacWithSHA512-256 OBJECT IDENTIFIER ::= {digestAlgorithm 13}
 * ```
 *
 * @constant
 */
export const id_hmacWithSHA512_256: OBJECT_IDENTIFIER = new _OID(
    [13],
    digestAlgorithm
);

/* eslint-enable */
