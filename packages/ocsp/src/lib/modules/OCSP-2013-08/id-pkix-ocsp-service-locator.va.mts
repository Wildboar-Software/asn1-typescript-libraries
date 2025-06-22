/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_pkix_ocsp } from "../OCSP-2013-08/id-pkix-ocsp.va.mjs";

/**
 * @summary id_pkix_ocsp_service_locator
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-pkix-ocsp-service-locator OBJECT IDENTIFIER ::= { id-pkix-ocsp 7 }
 * ```
 *
 * @constant
 */
export const id_pkix_ocsp_service_locator: OBJECT_IDENTIFIER = _OID.fromParts(
    [7],
    id_pkix_ocsp
);

/* eslint-enable */
