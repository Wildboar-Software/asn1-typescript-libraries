/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_pkix_ocsp } from "../OCSP-2013-08/id-pkix-ocsp.va.mjs";

/**
 * @summary id_pkix_ocsp_service_locator
 * @description
 *
 * Extension OID for Service Locator (`ServiceLocator`)
 * ([RFC 6960 §4.4.6](https://datatracker.ietf.org/doc/html/rfc6960#section-4.4.6)).
 * Included as one of the `singleRequestExtensions` in requests for
 * request routing to an authoritative OCSP server.
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
