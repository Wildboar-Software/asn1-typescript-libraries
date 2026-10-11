/* eslint-disable */
import {
    ASN1Element as _Element,
    NumericString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IMEISV
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IMEISV  ::=  NumericString (SIZE(16))
 * ```
 */
export
type IMEISV = NumericString; // NumericString

export const _decode_IMEISV: $.ASN1Decoder<IMEISV> = $._decodeNumericString;

export const _encode_IMEISV: $.ASN1Encoder<IMEISV> = $._encodeNumericString;


/* eslint-enable */
