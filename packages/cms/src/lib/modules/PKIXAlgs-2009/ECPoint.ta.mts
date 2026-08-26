/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary ECPoint
 * @description
 *
 * OCTET STRING encoding of an elliptic curve point
 * ([RFC 5480 §2.2](https://datatracker.ietf.org/doc/html/rfc5480#section-2.2)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ECPoint  ::=  OCTET STRING
 * ```
 */
export type ECPoint = OCTET_STRING; // OctetStringType




export const _decode_ECPoint = $._decodeOctetString;




export const _encode_ECPoint = $._encodeOctetString;


/* eslint-enable */
