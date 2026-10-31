/* eslint-disable */
import {
    type PrintableString
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

export
const _decode_CountryName: $.ASN1Decoder<CountryName> = $._decodePrintableString;

export
const _encode_CountryName: $.ASN1Encoder<CountryName> = $._encodePrintableString;

/* eslint-enable */
