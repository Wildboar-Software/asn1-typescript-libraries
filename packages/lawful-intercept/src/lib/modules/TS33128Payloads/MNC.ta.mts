/* eslint-disable */
import {
    ASN1Element as _Element,
    NumericString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MNC
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MNC  ::=  NumericString (SIZE(2..3))
 * ```
 */
export
type MNC = NumericString; // NumericString

export const _decode_MNC: $.ASN1Decoder<MNC> = $._decodeNumericString;

export const _encode_MNC: $.ASN1Encoder<MNC> = $._encodeNumericString;


/* eslint-enable */
