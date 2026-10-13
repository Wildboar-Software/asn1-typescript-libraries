/* eslint-disable */
import {
    ASN1Element as _Element,
    NumericString,
    ASN1SizeError
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
export const _decode_IMEICheckDigit: $.ASN1Decoder<IMEICheckDigit> = (el: _Element): IMEICheckDigit => {
    const value = $._decodeNumericString(el);
    if (value.length < 15 || value.length > 15) {
        throw new ASN1SizeError("IMEICheckDigit violates SIZE constraint");
    }
    return value;
};
export const _encode_IMEICheckDigit: $.ASN1Encoder<IMEICheckDigit> = $._encodeNumericString;


/* eslint-enable */
