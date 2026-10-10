/* eslint-disable */
import { OCTET_STRING } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FloatingPoint
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FloatingPoint  ::=  OCTET STRING
 * ```
 */
export
type FloatingPoint = OCTET_STRING; // OctetStringType
export const _decode_FloatingPoint: $.ASN1Decoder<FloatingPoint> = $._decodeOctetString;
export const _encode_FloatingPoint: $.ASN1Encoder<FloatingPoint> = $._encodeOctetString;


/* eslint-enable */
