/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_pkix_ocsp } from "../OCSP-2013-08/id-pkix-ocsp.va.mjs";

/**
 * @summary id_pkix_ocsp_nocheck
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-pkix-ocsp-nocheck         OBJECT IDENTIFIER ::= { id-pkix-ocsp 5 }
 * ```
 *
 * @constant
 */
export const id_pkix_ocsp_nocheck: OBJECT_IDENTIFIER = new _OID(
    [5],
    id_pkix_ocsp
);

/* eslint-enable */
