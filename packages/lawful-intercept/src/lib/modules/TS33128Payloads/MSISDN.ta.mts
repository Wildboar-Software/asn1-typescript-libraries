/* eslint-disable */
import {
    ASN1Element as _Element,
    NumericString,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MSISDN
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MSISDN  ::=  NumericString (SIZE(1..15))
 * ```
 */
export
type MSISDN = NumericString; // NumericString

export function _decode_MSISDN (el: _Element): MSISDN {
    const value = $._decodeNumericString(el);
    if (value.length < 1 || value.length > 15) {
        throw new ASN1SizeError("MSISDN violates the SIZE constraint");
    }
    return value;
}

export const _encode_MSISDN: $.ASN1Encoder<MSISDN> = $._encodeNumericString;


/* eslint-enable */
