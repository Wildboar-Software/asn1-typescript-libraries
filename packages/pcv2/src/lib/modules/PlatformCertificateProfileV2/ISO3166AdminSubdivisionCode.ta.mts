/* eslint-disable */
import {
    ASN1SizeError,
    PrintableString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ISO3166AdminSubdivisionCode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ISO3166AdminSubdivisionCode  ::=  PrintableString (SIZE (3..6))
 * ```
 */
export
type ISO3166AdminSubdivisionCode = PrintableString; // PrintableString

export
const _decode_ISO3166AdminSubdivisionCode: $.ASN1Decoder<ISO3166AdminSubdivisionCode> = (el) => {
    const value = $._decodePrintableString(el);
    if (value.length < 3 || value.length > 6) {
        throw new ASN1SizeError("ISO3166AdminSubdivisionCode violates SIZE (3..6)");
    }
    return value;
};

export
const _encode_ISO3166AdminSubdivisionCode: $.ASN1Encoder<ISO3166AdminSubdivisionCode> = $._encodePrintableString;

/* eslint-enable */
