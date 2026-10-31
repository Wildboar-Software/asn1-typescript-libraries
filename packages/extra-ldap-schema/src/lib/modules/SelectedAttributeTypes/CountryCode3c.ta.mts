/* eslint-disable */
import {
    type PrintableString,
    type ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CountryCode3c
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CountryCode3c  ::=  PrintableString(SIZE (3)) (CONSTRAINED BY { -- ISO 3166 alpha-3 codes only -- })
 * ```
 */
export
type CountryCode3c = PrintableString; // PrintableString

export function _decode_CountryCode3c (el: _Element): CountryCode3c {
    const value = $._decodePrintableString(el);
    if (value.length !== 3) {
        throw new ASN1SizeError("CountryCode3c violates SIZE constraint");
    }
    return value;
}

export
const _encode_CountryCode3c: $.ASN1Encoder<CountryCode3c> = $._encodePrintableString;

/* eslint-enable */
