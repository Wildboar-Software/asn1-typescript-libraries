/* eslint-disable */
import {
    NumericString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NumberDigits
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NumberDigits  ::=  NumericString (SIZE(1..20))
 * ```
 */
export
type NumberDigits = NumericString; // NumericString

export
const _decode_NumberDigits: $.ASN1Decoder<NumberDigits> = $._decodeNumericString;

export
const _encode_NumberDigits: $.ASN1Encoder<NumberDigits> = $._encodeNumericString;

/* eslint-enable */
