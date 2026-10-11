/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary X25Address
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * X25Address  ::=  OCTET STRING (SIZE(1..25))
 * ```
 */
export
type X25Address = OCTET_STRING; // OctetStringType

export const _decode_X25Address: $.ASN1Decoder<X25Address> = $._decodeOctetString;

export const _encode_X25Address: $.ASN1Encoder<X25Address> = $._encodeOctetString;


/* eslint-enable */
