/* eslint-disable */
import {
    NumericString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MMEC
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMEC  ::=  NumericString
 * ```
 */
export
type MMEC = NumericString; // NumericString
export const _decode_MMEC: $.ASN1Decoder<MMEC> = $._decodeNumericString;
export const _encode_MMEC: $.ASN1Encoder<MMEC> = $._encodeNumericString;


/* eslint-enable */
