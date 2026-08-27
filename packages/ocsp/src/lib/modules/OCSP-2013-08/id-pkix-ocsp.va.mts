/* eslint-disable */
import { OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_ad_ocsp } from "@wildboar/x500/PkiPmiExternalDataTypes";

/**
 * @summary id_pkix_ocsp
 * @description
 *
 * Arc for OCSP-specific object identifiers; equal to `id-ad-ocsp`
 * ([RFC 6960 §4.2.1](https://datatracker.ietf.org/doc/html/rfc6960#section-4.2.1)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-pkix-ocsp                 OBJECT IDENTIFIER ::= id-ad-ocsp
 * ```
 *
 * @constant
 */
export const id_pkix_ocsp: OBJECT_IDENTIFIER = id_ad_ocsp;

/* eslint-enable */
