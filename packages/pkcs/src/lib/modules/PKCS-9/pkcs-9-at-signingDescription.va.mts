/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { pkcs_9 } from "../PKCS-9/pkcs-9.va.mjs";

/**
 * @summary pkcs_9_at_signingDescription
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pkcs-9-at-signingDescription       OBJECT IDENTIFIER ::= {pkcs-9 13}
 * ```
 *
 * @constant
 */
export const pkcs_9_at_signingDescription: OBJECT_IDENTIFIER = _OID.fromParts(
    [13],
    pkcs_9
);

/* eslint-enable */
