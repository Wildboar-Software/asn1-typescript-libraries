/* eslint-disable */
import {
    ASN1Element as _Element,
    NumericString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IMSI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IMSI  ::=  NumericString (SIZE(6..15))
 * ```
 */
export
type IMSI = NumericString; // NumericString

export const _decode_IMSI: $.ASN1Decoder<IMSI> = $._decodeNumericString;

export const _encode_IMSI: $.ASN1Encoder<IMSI> = $._encodeNumericString;


/* eslint-enable */
