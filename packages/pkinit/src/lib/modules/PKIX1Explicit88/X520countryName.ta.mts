/* eslint-disable */
import {
    ASN1SizeError,
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
export const _decode_X520countryName = (el: _Element): X520countryName => {
    const value = $._decodePrintableString(el);
    if (value.length !== 2) {
        throw new ASN1SizeError("X520countryName violates SIZE constraint");
    }
    return value;
};
export const _encode_X520countryName = $._encodePrintableString;


/* eslint-enable */
