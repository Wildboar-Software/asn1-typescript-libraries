/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { digestAlgorithm } from "../PKCS5v2-1/digestAlgorithm.va.mjs";

/**
 * @summary id_hmacWithSHA384
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-hmacWithSHA384 OBJECT IDENTIFIER ::= {digestAlgorithm 10}
 * ```
 *
 * @constant
 */
export const id_hmacWithSHA384: OBJECT_IDENTIFIER = _OID.fromParts(
    [10],
    digestAlgorithm
);

/* eslint-enable */
