/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { pkcs_1 } from "../PKCS-1/pkcs-1.va.mjs";

/**
 * @summary sha384WithRSAEncryption
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sha384WithRSAEncryption      OBJECT IDENTIFIER ::= { pkcs-1 12 }
 * ```
 *
 * @constant
 */
export const sha384WithRSAEncryption: OBJECT_IDENTIFIER = _OID.fromParts(
    [12],
    pkcs_1
);

/* eslint-enable */
