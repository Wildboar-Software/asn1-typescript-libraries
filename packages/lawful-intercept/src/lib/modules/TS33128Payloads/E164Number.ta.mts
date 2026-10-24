/* eslint-disable */
import {
    ASN1Element as _Element,
    type NumericString,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary E164Number
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * E164Number  ::=  NumericString (SIZE(1..15))
 * ```
 */
export
type E164Number = NumericString; // NumericString
export const _decode_E164Number: $.ASN1Decoder<E164Number> = (el: _Element): E164Number => {
    const value = $._decodeNumericString(el);
    if (value.length < 1 || value.length > 15) {
        throw new ASN1SizeError("E164Number violates SIZE constraint");
    }
    return value;
};
export const _encode_E164Number: $.ASN1Encoder<E164Number> = $._encodeNumericString;


/* eslint-enable */
