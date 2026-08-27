/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary Hash
 * @description
 *
 * `OCTET STRING` certificate hash value. In `ESSCertID` this is the SHA-1
 * hash of the entire certificate; in `ESSCertIDv2` it is computed with
 * `hashAlgorithm` (default SHA-256)
 * ([RFC 2634 §5.4.1](https://datatracker.ietf.org/doc/html/rfc2634#section-5.4.1); [RFC 5035 §4](https://datatracker.ietf.org/doc/html/rfc5035#section-4)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Hash  ::=  OCTET STRING
 * ```
 */
export type Hash = OCTET_STRING; // OctetStringType




export const _decode_Hash = $._decodeOctetString;




export const _encode_Hash = $._encodeOctetString;


/* eslint-enable */
