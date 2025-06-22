/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { digestAlgorithm } from "../PKCS5v2-1/digestAlgorithm.va.mjs";

/**
 * @summary id_hmacWithSHA512
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-hmacWithSHA512 OBJECT IDENTIFIER ::= {digestAlgorithm 11}
 * ```
 *
 * @constant
 */
export const id_hmacWithSHA512: OBJECT_IDENTIFIER = _OID.fromParts(
    [11],
    digestAlgorithm
);

/* eslint-enable */
