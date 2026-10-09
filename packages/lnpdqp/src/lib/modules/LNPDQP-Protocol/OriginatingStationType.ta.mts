/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary OriginatingStationType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OriginatingStationType  ::=  OCTET STRING (SIZE(1))
 * ```
 */
export
type OriginatingStationType = OCTET_STRING; // OctetStringType
export const _decode_OriginatingStationType = $._decodeOctetString;
export const _encode_OriginatingStationType = $._encodeOctetString;


/* eslint-enable */
