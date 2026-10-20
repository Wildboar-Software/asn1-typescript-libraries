/* eslint-disable */
import {
    OCTET_STRING
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
const _decode_BMPStringExtended: $.ASN1Decoder<BMPStringExtended> = $._decodeOctetString;

export
const _encode_BMPStringExtended: $.ASN1Encoder<BMPStringExtended> = $._encodeOctetString;

/* eslint-enable */
