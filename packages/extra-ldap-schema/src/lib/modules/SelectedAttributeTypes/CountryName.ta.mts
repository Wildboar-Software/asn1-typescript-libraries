/* eslint-disable */
import {
    type PrintableString,
    type ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CountryName
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CountryName  ::=  PrintableString(SIZE (2)) (CONSTRAINED BY { -- ISO 3166 alpha-2 codes only -- })
 * ```
 */
export
type CountryName = PrintableString; // PrintableString

export function _decode_CountryName (el: _Element): CountryName {
    const value = $._decodePrintableString(el);
    if (value.length !== 2) {
        throw new ASN1SizeError("CountryName violates SIZE constraint");
    }
    return value;
}

export
const _encode_CountryName: $.ASN1Encoder<CountryName> = $._encodePrintableString;

/* eslint-enable */
