/* eslint-disable */
import {
    ASN1SizeError,
    type PrintableString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ISO3166CountryCode
 * @description
 *
 * ISO 3166 country code as a printable string of two or three characters.
 *
 * TCG Platform Certificate Profile, Version 2.1, §4.2.22.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ISO3166CountryCode  ::=  PrintableString (SIZE(2..3))
 * ```
 */
export
type ISO3166CountryCode = PrintableString; // PrintableString

export
const _decode_ISO3166CountryCode: $.ASN1Decoder<ISO3166CountryCode> = (el) => {
    const value = $._decodePrintableString(el);
    if (value.length < 2 || value.length > 3) {
        throw new ASN1SizeError("ISO3166CountryCode violates SIZE (2..3)");
    }
    return value;
};

export
const _encode_ISO3166CountryCode: $.ASN1Encoder<ISO3166CountryCode> = $._encodePrintableString;

/* eslint-enable */
