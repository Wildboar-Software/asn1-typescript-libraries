/* eslint-disable */
import { OBJECT_IDENTIFIER } from "asn1-ts";
import { id_ad_ocsp } from "@wildboar/x500/src/lib/modules/PkiPmiExternalDataTypes/id-ad-ocsp.va.mjs";


/**
 * @summary id_pkix_ocsp
 * @description
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
