/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    NumericString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary NumberDigits
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NumberDigits  ::=  NumericString(SIZE (1..20))
 * ```
 */
export
type NumberDigits = NumericString; // NumericString
export function _decode_NumberDigits (el: _Element): NumberDigits {
    const value = $._decodeNumericString(el);
    if (value.length < 1 || value.length > 20) {
        throw new ASN1SizeError("NumberDigits violates SIZE constraint");
    }
    return value;
}
export const _encode_NumberDigits: $.ASN1Encoder<NumberDigits> = $._encodeNumericString;

/* eslint-enable */
