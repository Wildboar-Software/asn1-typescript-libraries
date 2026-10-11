/* eslint-disable */
import {
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary N3IWFIDNGAP
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * N3IWFIDNGAP  ::=  BIT STRING (SIZE(16))
 * ```
 */
export
type N3IWFIDNGAP = BIT_STRING;

export const _decode_N3IWFIDNGAP: $.ASN1Decoder<N3IWFIDNGAP> = $._decodeBitString;

export const _encode_N3IWFIDNGAP: $.ASN1Encoder<N3IWFIDNGAP> = $._encodeBitString;

/* eslint-enable */
