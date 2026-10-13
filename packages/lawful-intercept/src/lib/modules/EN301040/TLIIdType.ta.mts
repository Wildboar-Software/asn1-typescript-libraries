/* eslint-disable */
import {
    ASN1Element as _Element,
    BIT_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TLIIdType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TLIIdType  ::=  BIT STRING (SIZE (16))
 * ```
 */
export
type TLIIdType = BIT_STRING;
export const _decode_TLIIdType: $.ASN1Decoder<TLIIdType> = (el: _Element): TLIIdType => {
    const value = $._decodeBitString(el);
    if (value.length < 16 || value.length > 16) {
        throw new ASN1SizeError("TLIIdType violates SIZE constraint");
    }
    return value;
};
export const _encode_TLIIdType: $.ASN1Encoder<TLIIdType> = $._encodeBitString;


/* eslint-enable */
