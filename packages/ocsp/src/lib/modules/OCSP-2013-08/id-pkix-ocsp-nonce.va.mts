/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_pkix_ocsp } from "../OCSP-2013-08/id-pkix-ocsp.va.mjs";

/**
 * @summary id_pkix_ocsp_nonce
 * @description
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
