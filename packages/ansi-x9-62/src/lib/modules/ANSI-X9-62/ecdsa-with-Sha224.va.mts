/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { ecdsa_with_Specified } from "../ANSI-X9-62/ecdsa-with-Specified.va.mjs";
/**
 * @summary ecdsa_with_Sha224
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ecdsa-with-Sha224 OBJECT IDENTIFIER ::= {ecdsa-with-Specified 1}
 * ```
 *
 * @constant
 */
export const ecdsa_with_Sha224: OBJECT_IDENTIFIER = _OID.fromParts(
    [1],
    ecdsa_with_Specified
);

/* eslint-enable */
