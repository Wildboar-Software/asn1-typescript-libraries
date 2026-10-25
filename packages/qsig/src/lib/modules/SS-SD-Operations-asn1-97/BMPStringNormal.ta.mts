/* eslint-disable */
import {
    type OCTET_STRING,
    type ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary BMPStringNormal
 * @description
 *
 * BMP string of 2 to 64 octets (ECMA-311 §6.3.1). Use it according to ISO/IEC
 * 10646-1 §6.2, coded as a BMPString under ITU-T X.690 §8.20.8, which places
 * two octets in each character. The bound is therefore 1 to 32 characters. This
 * is the only size allowed for keypad information.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-311/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BMPStringNormal  ::=  OCTET STRING (SIZE(2..64))
 * ```
 */
export
type BMPStringNormal = OCTET_STRING; // OctetStringType

export
const _decode_BMPStringNormal = (el: _Element): BMPStringNormal => {
    const value = $._decodeOctetString(el);
    if (value.length < 2 || value.length > 64) {
        throw new ASN1SizeError("BMPStringNormal violates SIZE constraint");
    }
    return value;
};

export
const _encode_BMPStringNormal: $.ASN1Encoder<BMPStringNormal> = $._encodeOctetString;

/* eslint-enable */
