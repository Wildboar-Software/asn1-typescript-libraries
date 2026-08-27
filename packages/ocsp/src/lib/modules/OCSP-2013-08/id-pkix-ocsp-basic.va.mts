/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_pkix_ocsp } from "../OCSP-2013-08/id-pkix-ocsp.va.mjs";

/**
 * @summary id_pkix_ocsp_basic
 * @description
 *
 * Response type OID for the basic OCSP response
 * (`BasicOCSPResponse`)
 * ([RFC 6960 §4.2.1](https://datatracker.ietf.org/doc/html/rfc6960#section-4.2.1)).
 * Responders SHALL produce and clients SHALL process this type.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-pkix-ocsp-basic           OBJECT IDENTIFIER ::= { id-pkix-ocsp 1 }
 * ```
 *
 * @constant
 */
export const id_pkix_ocsp_basic: OBJECT_IDENTIFIER = _OID.fromParts(
    [1],
    id_pkix_ocsp
);

/* eslint-enable */
