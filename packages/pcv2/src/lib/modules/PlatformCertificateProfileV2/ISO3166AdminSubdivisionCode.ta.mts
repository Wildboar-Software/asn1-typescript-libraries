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
 * ISO 3166 administrative subdivision code as a printable string of three to
 * six characters.
 *
 * TCG Platform Certificate Profile, Version 2.1, §4.2.22.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
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
