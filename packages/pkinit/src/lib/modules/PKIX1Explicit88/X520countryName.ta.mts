/* eslint-disable */
import {
    ASN1Element as _Element,
    PrintableString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary X520countryName
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * X520countryName  ::=      PrintableString (SIZE (2))
 * ```
 */
export
type X520countryName = PrintableString; // PrintableString
export const _decode_X520countryName = $._decodePrintableString;
export const _encode_X520countryName = $._encodePrintableString;


/* eslint-enable */
