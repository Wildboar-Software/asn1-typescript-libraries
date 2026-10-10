/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MtpAddress
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MtpAddress  ::=  OCTET STRING(SIZE(2..4))
 * ```
 */
export
type MtpAddress = OCTET_STRING; // OctetStringType
export const _decode_MtpAddress = $._decodeOctetString;
export const _encode_MtpAddress = $._encodeOctetString;


/* eslint-enable */
