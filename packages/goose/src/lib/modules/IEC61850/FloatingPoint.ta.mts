/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
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
export const _decode_FloatingPoint = $._decodeOctetString;
export const _encode_FloatingPoint = $._encodeOctetString;


/* eslint-enable */
