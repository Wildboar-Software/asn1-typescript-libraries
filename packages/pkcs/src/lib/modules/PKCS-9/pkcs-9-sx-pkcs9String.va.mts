/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { pkcs_9_sx } from "../PKCS-9/pkcs-9-sx.va.mjs";

/**
 * @summary pkcs_9_sx_pkcs9String
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pkcs-9-sx-pkcs9String              OBJECT IDENTIFIER ::= {pkcs-9-sx 1}
 * ```
 *
 * @constant
 */
export const pkcs_9_sx_pkcs9String: OBJECT_IDENTIFIER = _OID.fromParts(
    [1],
    pkcs_9_sx
);

/* eslint-enable */
