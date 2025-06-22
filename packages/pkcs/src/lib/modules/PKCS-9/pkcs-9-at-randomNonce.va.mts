/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { pkcs_9_at } from "../PKCS-9/pkcs-9-at.va.mjs";

/**
 * @summary pkcs_9_at_randomNonce
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pkcs-9-at-randomNonce              OBJECT IDENTIFIER ::= {pkcs-9-at 3}
 * ```
 *
 * @constant
 */
export const pkcs_9_at_randomNonce: OBJECT_IDENTIFIER = _OID.fromParts(
    [3],
    pkcs_9_at
);

/* eslint-enable */
