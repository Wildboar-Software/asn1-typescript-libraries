/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_pkix_ocsp } from "../OCSP-2013-08/id-pkix-ocsp.va.mjs";

/**
 * @summary id_pkix_ocsp_nonce
 * @description
 *
 * Extension OID for the Nonce extension, which cryptographically
 * binds a request and a response to prevent replay attacks
 * ([RFC 6960 §4.4.1](https://datatracker.ietf.org/doc/html/rfc6960#section-4.4.1)).
 * Appears in `requestExtensions` and `responseExtensions`;
 * `extnValue` is the nonce OCTET STRING.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-pkix-ocsp-nonce           OBJECT IDENTIFIER ::= { id-pkix-ocsp 2 }
 * ```
 *
 * @constant
 */
export const id_pkix_ocsp_nonce: OBJECT_IDENTIFIER = _OID.fromParts(
    [2],
    id_pkix_ocsp
);

/* eslint-enable */
