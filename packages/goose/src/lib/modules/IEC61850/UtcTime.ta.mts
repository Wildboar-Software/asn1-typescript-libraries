/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary UtcTime
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UtcTime  ::=  OCTET STRING
 * ```
 */
export
type UtcTime = OCTET_STRING; // OctetStringType
export const _decode_UtcTime = $._decodeOctetString;
export const _encode_UtcTime = $._encodeOctetString;


/* eslint-enable */
