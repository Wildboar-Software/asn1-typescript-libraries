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
 * Derived from the MSISDN defined in TS 23.003 [19] clause 3.3.
 *
 * 3GPP TS 33.128, clause 8.3.3.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MSISDN  ::=  NumericString (SIZE(1..15))
 * ```
 */
export
type MSISDN = NumericString; // NumericString
export const _decode_MSISDN: $.ASN1Decoder<MSISDN> = (el: _Element): MSISDN => {
    const value = $._decodeNumericString(el);
    if (value.length < 1 || value.length > 15) {
        throw new ASN1SizeError("MSISDN violates SIZE constraint");
    }
    return value;
};
export const _encode_MSISDN: $.ASN1Encoder<MSISDN> = $._encodeNumericString;


/* eslint-enable */
