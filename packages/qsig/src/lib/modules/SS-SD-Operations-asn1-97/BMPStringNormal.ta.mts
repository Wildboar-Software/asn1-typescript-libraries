/* eslint-disable */
import {
    OCTET_STRING
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
const _decode_BMPStringNormal: $.ASN1Decoder<BMPStringNormal> = $._decodeOctetString;

export
const _encode_BMPStringNormal: $.ASN1Encoder<BMPStringNormal> = $._encodeOctetString;

/* eslint-enable */
