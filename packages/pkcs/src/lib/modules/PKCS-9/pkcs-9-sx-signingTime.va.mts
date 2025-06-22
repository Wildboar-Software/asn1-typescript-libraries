/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { pkcs_9_sx } from "../PKCS-9/pkcs-9-sx.va.mjs";

/**
 * @summary pkcs_9_sx_signingTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pkcs-9-sx-signingTime              OBJECT IDENTIFIER ::= {pkcs-9-sx 2}
 * ```
 *
 * @constant
 */
export const pkcs_9_sx_signingTime: OBJECT_IDENTIFIER = _OID.fromParts(
    [2],
    pkcs_9_sx
);

/* eslint-enable */
