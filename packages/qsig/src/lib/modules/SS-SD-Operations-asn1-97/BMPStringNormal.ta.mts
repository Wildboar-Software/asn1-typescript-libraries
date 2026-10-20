/* eslint-disable */
import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary BMPStringNormal
 * @description
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
