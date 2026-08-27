/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary KeyHash
 * @description
 *
 * SHA-1 hash of the responder's public key for `ResponderID.byKey`
 * ([RFC 6960 §4.2.1](https://datatracker.ietf.org/doc/html/rfc6960#section-4.2.1)).
 *
 * > SHA-1 hash of responder's public key (excluding the tag and
 * > length fields)
 * >
 * > — [RFC 6960 §4.2.1](https://datatracker.ietf.org/doc/html/rfc6960#section-4.2.1)
 *
 * Appendix B.1 further clarifies: the SHA-1 hash of the value of the
 * BIT STRING `subjectPublicKey` (excluding the tag, length, and
 * number of unused bits) in the responder's certificate.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KeyHash  ::=  OCTET STRING
 * ```
 */
export type KeyHash = OCTET_STRING; // OctetStringType




export const _decode_KeyHash = $._decodeOctetString;




export const _encode_KeyHash = $._encodeOctetString;


/* eslint-enable */
