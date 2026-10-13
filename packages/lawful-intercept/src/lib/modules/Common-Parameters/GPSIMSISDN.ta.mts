/* eslint-disable */
import {
    ASN1Element as _Element,
    NumericString,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary GPSIMSISDN
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GPSIMSISDN  ::=  NumericString (SIZE(1..15))
 * ```
 */
export
type GPSIMSISDN = NumericString; // NumericString
export const _decode_GPSIMSISDN: $.ASN1Decoder<GPSIMSISDN> = (el: _Element): GPSIMSISDN => {
    const value = $._decodeNumericString(el);
    if (value.length < 1 || value.length > 15) {
        throw new ASN1SizeError("GPSIMSISDN violates SIZE constraint");
    }
    return value;
};
export const _encode_GPSIMSISDN: $.ASN1Encoder<GPSIMSISDN> = $._encodeNumericString;


/* eslint-enable */
