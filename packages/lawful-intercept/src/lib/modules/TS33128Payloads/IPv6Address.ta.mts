/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IPv6Address
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IPv6Address  ::=  OCTET STRING (SIZE(16))
 * ```
 */
export
type IPv6Address = OCTET_STRING; // OctetStringType

export const _decode_IPv6Address: $.ASN1Decoder<IPv6Address> = $._decodeOctetString;

export const _encode_IPv6Address: $.ASN1Encoder<IPv6Address> = $._encodeOctetString;


/* eslint-enable */
