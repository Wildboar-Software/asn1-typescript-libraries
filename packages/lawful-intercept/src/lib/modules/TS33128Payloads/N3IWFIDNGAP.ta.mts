/* eslint-disable */
import {
    ASN1Element as _Element,
    BIT_STRING,
    ASN1SizeError
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
export const _decode_N3IWFIDNGAP: $.ASN1Decoder<N3IWFIDNGAP> = (el: _Element): N3IWFIDNGAP => {
    const value = $._decodeBitString(el);
    if (value.length < 16 || value.length > 16) {
        throw new ASN1SizeError("N3IWFIDNGAP violates SIZE constraint");
    }
    return value;
};
export const _encode_N3IWFIDNGAP: $.ASN1Encoder<N3IWFIDNGAP> = $._encodeBitString;


/* eslint-enable */
