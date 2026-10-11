/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IPv4Address
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IPv4Address  ::=  OCTET STRING (SIZE(4))
 * ```
 */
export
type IPv4Address = OCTET_STRING; // OctetStringType

export const _decode_IPv4Address: $.ASN1Decoder<IPv4Address> = $._decodeOctetString;

export const _encode_IPv4Address: $.ASN1Encoder<IPv4Address> = $._encodeOctetString;


/* eslint-enable */
