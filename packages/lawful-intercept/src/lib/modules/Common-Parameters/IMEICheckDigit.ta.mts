/* eslint-disable */
import {
    ASN1Element as _Element,
    NumericString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IMEICheckDigit
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IMEICheckDigit  ::=  NumericString (SIZE(15))
 * ```
 */
export
type IMEICheckDigit = NumericString; // NumericString
export const _decode_IMEICheckDigit: $.ASN1Decoder<IMEICheckDigit> = $._decodeNumericString;
export const _encode_IMEICheckDigit: $.ASN1Encoder<IMEICheckDigit> = $._encodeNumericString;


/* eslint-enable */
