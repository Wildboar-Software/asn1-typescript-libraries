/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_pkix_ocsp } from "../OCSP-2013-08/id-pkix-ocsp.va.mjs";

/**
 * @summary id_pkix_ocsp_crl
 * @description
 *
 * Extension OID for CRL References (`CrlID`), indicating the CRL on
 * which a revoked or onHold certificate is found
 * ([RFC 6960 §4.4.2](https://datatracker.ietf.org/doc/html/rfc6960#section-4.4.2)).
 * Specified as a `singleExtensions` value.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-pkix-ocsp-crl             OBJECT IDENTIFIER ::= { id-pkix-ocsp 3 }
 * ```
 *
 * @constant
 */
export const id_pkix_ocsp_crl: OBJECT_IDENTIFIER = _OID.fromParts([3], id_pkix_ocsp);

/* eslint-enable */
