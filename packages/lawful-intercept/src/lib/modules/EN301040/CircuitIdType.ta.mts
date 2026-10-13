/* eslint-disable */
import {
    ASN1Element as _Element,
    NumericString,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CircuitIdType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CircuitIdType  ::=  NumericString (SIZE (20))
 * ```
 */
export
type CircuitIdType = NumericString; // NumericString
export const _decode_CircuitIdType: $.ASN1Decoder<CircuitIdType> = (el: _Element): CircuitIdType => {
    const value = $._decodeNumericString(el);
    if (value.length < 20 || value.length > 20) {
        throw new ASN1SizeError("CircuitIdType violates SIZE constraint");
    }
    return value;
};
export const _encode_CircuitIdType: $.ASN1Encoder<CircuitIdType> = $._encodeNumericString;


/* eslint-enable */
