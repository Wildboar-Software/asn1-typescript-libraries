/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_pkix_ocsp } from "../OCSP-2013-08/id-pkix-ocsp.va.mjs";

/**
 * @summary id_pkix_ocsp_response
 * @description
 *
 * Extension OID for Acceptable Response Types
 * (`AcceptableResponses`)
 * ([RFC 6960 §4.4.3](https://datatracker.ietf.org/doc/html/rfc6960#section-4.4.3)).
 * Included as one of the `requestExtensions` so the client can name
 * the response types it understands.
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
