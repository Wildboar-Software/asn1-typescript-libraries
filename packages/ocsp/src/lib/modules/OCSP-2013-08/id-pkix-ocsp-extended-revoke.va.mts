/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_pkix_ocsp } from "../OCSP-2013-08/id-pkix-ocsp.va.mjs";

/**
 * @summary id_pkix_ocsp_extended_revoke
 * @description
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
