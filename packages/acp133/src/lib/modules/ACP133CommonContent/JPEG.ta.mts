/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary JPEG
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * JPEG  ::=  OCTET STRING
 * ```
 */
export
type JPEG = OCTET_STRING; // OctetStringType
export const _decode_JPEG = $._decodeOctetString;
export const _encode_JPEG = $._encodeOctetString;


/* eslint-enable */
