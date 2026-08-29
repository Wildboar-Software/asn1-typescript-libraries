/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary FieldElement
 * @description
 *
 * Octet-string encoding of an element of Fq. Length is
 * `l = ceil((log2 q)/8)` octets. For Fp, the integer in `[0, p-1]`
 * converted per §4.3.1. For F2^m, the m-bit string packed into l
 * octets; unused high bits of the first octet are zero.
 * ANSI X9.62-1998 §6.2, §4.3.3.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FieldElement  ::=  OCTET STRING
 * ```
 */
export type FieldElement = OCTET_STRING; // OctetStringType


export const _decode_FieldElement = $._decodeOctetString;


export const _encode_FieldElement = $._encodeOctetString;


/* eslint-enable */
