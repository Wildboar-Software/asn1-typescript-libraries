/* eslint-disable */
import {
    ASN1Element as _Element,
    NumericString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IMEI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IMEI  ::=  NumericString (SIZE(14))
 * ```
 */
export
type IMEI = NumericString; // NumericString
export const _decode_IMEI: $.ASN1Decoder<IMEI> = $._decodeNumericString;
export const _encode_IMEI: $.ASN1Encoder<IMEI> = $._encodeNumericString;


/* eslint-enable */
