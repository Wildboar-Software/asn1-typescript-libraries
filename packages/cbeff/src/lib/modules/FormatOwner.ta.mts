/* eslint-disable */
import {
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FormatOwner
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FormatOwner  ::=  OCTET STRING (SIZE(2))
 * ```
 */
export
type FormatOwner = OCTET_STRING; // OctetStringType

export
const _decode_FormatOwner: $.ASN1Decoder<FormatOwner> = $._decodeOctetString;

export
const _encode_FormatOwner: $.ASN1Encoder<FormatOwner> = $._encodeOctetString;

/* eslint-enable */
