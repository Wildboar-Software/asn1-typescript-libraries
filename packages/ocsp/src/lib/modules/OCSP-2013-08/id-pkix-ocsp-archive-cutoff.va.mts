/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_pkix_ocsp } from "../OCSP-2013-08/id-pkix-ocsp.va.mjs";

/**
 * @summary id_pkix_ocsp_archive_cutoff
 * @description
 *
 * Extension OID for Archive Cutoff (`ArchiveCutoff`)
 * ([RFC 6960 §4.4.4](https://datatracker.ietf.org/doc/html/rfc6960#section-4.4.4)).
 * Provided as an OCSP `singleExtensions` extension of syntax
 * `GeneralizedTime`.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-pkix-ocsp-archive-cutoff  OBJECT IDENTIFIER ::= { id-pkix-ocsp 6 }
 * ```
 *
 * @constant
 */
export const id_pkix_ocsp_archive_cutoff: OBJECT_IDENTIFIER = _OID.fromParts(
    [6],
    id_pkix_ocsp
);

/* eslint-enable */
