/* eslint-disable */
import { ASN1Element as _Element, type OCTET_STRING } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary ECPoint
 * @description
 *
 * Octet-string encoding of a point on E, per §4.3.6. The point at
 * infinity is a single `00` octet. Otherwise a form octet `PC`
 * followed by coordinates (`l = ceil((log2 q)/8)`):
 * compressed `02`/`03` || X; uncompressed `04` || X || Y;
 * hybrid `06`/`07` || X || Y. `02`/`06` vs `03`/`07` encode the
 * compression bit of §4.2: over Fp, the rightmost bit of yP; over
 * F2^m, 0 if xP = 0, else the rightmost bit of yP * xP^{-1}.
 * ANSI X9.62-1998 §6.2, §4.2, §4.3.6.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ECPoint  ::=  OCTET STRING
 * ```
 */
export type ECPoint = OCTET_STRING; // OctetStringType


export const _decode_ECPoint: $.ASN1Decoder<OCTET_STRING> = $._decodeOctetString;


export const _encode_ECPoint: $.ASN1Encoder<OCTET_STRING> = $._encodeOctetString;


/* eslint-enable */
