/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_pkix_ocsp } from "../OCSP-2013-08/id-pkix-ocsp.va.mjs";

/**
 * @summary id_pkix_ocsp_nocheck
 * @description
 *
 * Certificate extension OID indicating that an OCSP client can trust
 * an Authorized Responder for the lifetime of the responder's
 * certificate without checking that certificate for revocation
 * ([RFC 6960 §4.2.2.2.1](https://datatracker.ietf.org/doc/html/rfc6960#section-4.2.2.2.1)).
 * SHOULD be non-critical; value SHALL be NULL.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-pkix-ocsp-nocheck         OBJECT IDENTIFIER ::= { id-pkix-ocsp 5 }
 * ```
 *
 * @constant
 */
export const id_pkix_ocsp_nocheck: OBJECT_IDENTIFIER = _OID.fromParts(
    [5],
    id_pkix_ocsp
);

/* eslint-enable */
