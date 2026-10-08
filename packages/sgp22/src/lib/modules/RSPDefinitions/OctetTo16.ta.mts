/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary OctetTo16
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OctetTo16  ::=  OCTET STRING (SIZE(1..16))
 * ```
 */
export
type OctetTo16 = OCTET_STRING; // OctetStringType
export const _decode_OctetTo16 = $._decodeOctetString;
export const _encode_OctetTo16 = $._encodeOctetString;


/* eslint-enable */
