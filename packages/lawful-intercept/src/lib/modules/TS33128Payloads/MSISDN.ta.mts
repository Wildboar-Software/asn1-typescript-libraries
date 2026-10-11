/* eslint-disable */
import {
    ASN1Element as _Element,
    NumericString
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

export const _decode_MSISDN: $.ASN1Decoder<MSISDN> = $._decodeNumericString;

export const _encode_MSISDN: $.ASN1Encoder<MSISDN> = $._encodeNumericString;


/* eslint-enable */
