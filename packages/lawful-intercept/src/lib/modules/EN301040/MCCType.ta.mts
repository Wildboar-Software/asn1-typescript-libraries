/* eslint-disable */
import {
    ASN1Element as _Element,
    BIT_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MCCType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MCCType  ::=  BIT STRING (SIZE (10))
 * ```
 */
export
type MCCType = BIT_STRING;
export const _decode_MCCType: $.ASN1Decoder<MCCType> = (el: _Element): MCCType => {
    const value = $._decodeBitString(el);
    if (value.length < 10 || value.length > 10) {
        throw new ASN1SizeError("MCCType violates SIZE constraint");
    }
    return value;
};
export const _encode_MCCType: $.ASN1Encoder<MCCType> = $._encodeBitString;


/* eslint-enable */
