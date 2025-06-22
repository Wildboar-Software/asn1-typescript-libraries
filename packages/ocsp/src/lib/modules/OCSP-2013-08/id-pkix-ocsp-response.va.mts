/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_pkix_ocsp } from "../OCSP-2013-08/id-pkix-ocsp.va.mjs";

/**
 * @summary id_pkix_ocsp_response
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-pkix-ocsp-response        OBJECT IDENTIFIER ::= { id-pkix-ocsp 4 }
 * ```
 *
 * @constant
 */
export const id_pkix_ocsp_response: OBJECT_IDENTIFIER = _OID.fromParts(
    [4],
    id_pkix_ocsp
);

/* eslint-enable */
