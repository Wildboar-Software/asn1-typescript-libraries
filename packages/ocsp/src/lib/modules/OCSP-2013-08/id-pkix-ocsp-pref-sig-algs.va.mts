/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_pkix_ocsp } from "../OCSP-2013-08/id-pkix-ocsp.va.mjs";

/**
 * @summary id_pkix_ocsp_pref_sig_algs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-pkix-ocsp-pref-sig-algs   OBJECT IDENTIFIER ::= { id-pkix-ocsp 8 }
 * ```
 *
 * @constant
 */
export const id_pkix_ocsp_pref_sig_algs: OBJECT_IDENTIFIER = _OID.fromParts(
    [8],
    id_pkix_ocsp
);

/* eslint-enable */
