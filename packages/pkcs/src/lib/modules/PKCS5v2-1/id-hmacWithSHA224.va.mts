/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { digestAlgorithm } from "../PKCS5v2-1/digestAlgorithm.va.mjs";

/**
 * @summary id_hmacWithSHA224
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-hmacWithSHA224 OBJECT IDENTIFIER ::= {digestAlgorithm 8}
 * ```
 *
 * @constant
 */
export const id_hmacWithSHA224: OBJECT_IDENTIFIER = _OID.fromParts(
    [8],
    digestAlgorithm
);

/* eslint-enable */
