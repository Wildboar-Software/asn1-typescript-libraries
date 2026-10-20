/* eslint-disable */
import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary BMPStringExtended
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BMPStringExtended  ::=  OCTET STRING (SIZE(2..160))
 * ```
 */
export
type BMPStringExtended = OCTET_STRING; // OctetStringType

export
const _decode_BMPStringExtended = (el: _Element): BMPStringExtended => {
    const value = $._decodeOctetString(el);
    if (value.length < 2 || value.length > 160) {
        throw new ASN1SizeError("BMPStringExtended violates SIZE constraint");
    }
    return value;
};

export
const _encode_BMPStringExtended: $.ASN1Encoder<BMPStringExtended> = $._encodeOctetString;

/* eslint-enable */
