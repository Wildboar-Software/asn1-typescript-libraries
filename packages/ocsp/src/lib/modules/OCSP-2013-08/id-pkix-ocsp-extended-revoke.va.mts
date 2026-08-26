/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_pkix_ocsp } from "../OCSP-2013-08/id-pkix-ocsp.va.mjs";

/**
 * @summary id_pkix_ocsp_extended_revoke
 * @description
 *
 * Extension OID for the Extended Revoked Definition response
 * extension
 * ([RFC 6960 §4.4.8](https://datatracker.ietf.org/doc/html/rfc6960#section-4.4.8)).
 * Indicates the responder supports the extended definition of
 * `revoked` to cover non-issued certificates (§2.2). Value SHALL be
 * NULL; MUST NOT be marked critical. MUST appear in
 * `responseExtensions` (not `singleExtensions`) when a response
 * contains `revoked` for a non-issued certificate.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-pkix-ocsp-extended-revoke OBJECT IDENTIFIER ::= { id-pkix-ocsp 9 }
 * ```
 *
 * @constant
 */
export const id_pkix_ocsp_extended_revoke: OBJECT_IDENTIFIER = _OID.fromParts(
    [9],
    id_pkix_ocsp
);

/* eslint-enable */
