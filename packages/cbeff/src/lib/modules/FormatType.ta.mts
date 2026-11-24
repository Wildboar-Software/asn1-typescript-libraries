/* eslint-disable */
import {
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FormatType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FormatType  ::=  OCTET STRING (SIZE(2))
 * ```
 */
export
type FormatType = OCTET_STRING; // OctetStringType

export
const _decode_FormatType: $.ASN1Decoder<FormatType> = $._decodeOctetString;

export
const _encode_FormatType: $.ASN1Encoder<FormatType> = $._encodeOctetString;

/* eslint-enable */
