/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { digestAlgorithm } from "../PKCS5v2-1/digestAlgorithm.va.mjs";

/**
 * @summary id_hmacWithSHA1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-hmacWithSHA1 OBJECT IDENTIFIER ::= {digestAlgorithm 7}
 * ```
 *
 * @constant
 */
export const id_hmacWithSHA1: OBJECT_IDENTIFIER = _OID.fromParts(
    [7],
    digestAlgorithm
);

/* eslint-enable */
