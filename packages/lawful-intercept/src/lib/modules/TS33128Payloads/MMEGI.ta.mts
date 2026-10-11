/* eslint-disable */
import {
    ASN1Element as _Element,
    NumericString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MMEGI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMEGI  ::=  NumericString
 * ```
 */
export
type MMEGI = NumericString; // NumericString

export const _decode_MMEGI: $.ASN1Decoder<MMEGI> = $._decodeNumericString;

export const _encode_MMEGI: $.ASN1Encoder<MMEGI> = $._encodeNumericString;


/* eslint-enable */
