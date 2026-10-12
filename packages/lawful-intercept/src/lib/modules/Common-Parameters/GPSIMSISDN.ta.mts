/* eslint-disable */
import {
    ASN1Element as _Element,
    NumericString
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
export const _decode_GPSIMSISDN: $.ASN1Decoder<GPSIMSISDN> = $._decodeNumericString;
export const _encode_GPSIMSISDN: $.ASN1Encoder<GPSIMSISDN> = $._encodeNumericString;


/* eslint-enable */
