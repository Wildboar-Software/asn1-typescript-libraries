/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_kp } from "@wildboar/x500/UsefulDefinitions";

/**
 * @summary id_kp_OCSPSigning
 * @description
 *
 * Extended key usage OID for OCSP signing delegation
 * ([RFC 6960 §4.2.2.2](https://datatracker.ietf.org/doc/html/rfc6960#section-4.2.2.2)).
 * Included in the OCSP response signer's certificate to designate
 * Authorized Responder authority. That certificate MUST be issued
 * directly by the CA identified in the request.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-kp-OCSPSigning            OBJECT IDENTIFIER ::= { id-kp 9 }
 * ```
 *
 * @constant
 */
export const id_kp_OCSPSigning: OBJECT_IDENTIFIER = _OID.fromParts([9], id_kp);

/* eslint-enable */
