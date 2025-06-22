/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { digestAlgorithm } from "../PKCS5v2-1/digestAlgorithm.va.mjs";

/**
 * @summary id_hmacWithSHA512_224
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-hmacWithSHA512-224 OBJECT IDENTIFIER ::= {digestAlgorithm 12}
 * ```
 *
 * @constant
 */
export const id_hmacWithSHA512_224: OBJECT_IDENTIFIER = _OID.fromParts(
    [12],
    digestAlgorithm
);

/* eslint-enable */
