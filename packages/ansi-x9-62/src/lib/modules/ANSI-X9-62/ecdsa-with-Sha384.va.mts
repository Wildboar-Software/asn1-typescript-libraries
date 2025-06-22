/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { ecdsa_with_Specified } from "../ANSI-X9-62/ecdsa-with-Specified.va.mjs";
/**
 * @summary ecdsa_with_Sha384
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ecdsa-with-Sha384 OBJECT IDENTIFIER ::= {ecdsa-with-Specified 3}
 * ```
 *
 * @constant
 */
export const ecdsa_with_Sha384: OBJECT_IDENTIFIER = _OID.fromParts(
    [3],
    ecdsa_with_Specified
);

/* eslint-enable */
