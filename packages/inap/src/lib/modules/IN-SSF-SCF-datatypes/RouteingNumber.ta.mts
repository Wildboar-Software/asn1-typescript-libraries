/* eslint-disable */
import {
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RouteingNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RouteingNumber  ::= 
 *   OCTET STRING
 * ```
 */
export
type RouteingNumber = OCTET_STRING; // OctetStringType

export
const _decode_RouteingNumber: $.ASN1Decoder<RouteingNumber> = $._decodeOctetString;

export
const _encode_RouteingNumber: $.ASN1Encoder<RouteingNumber> = $._encodeOctetString;

/* eslint-enable */
