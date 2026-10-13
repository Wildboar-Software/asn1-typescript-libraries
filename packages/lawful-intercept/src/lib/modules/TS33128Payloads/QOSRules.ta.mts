/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary QOSRules
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * QOSRules  ::=  OCTET STRING
 * ```
 */
export
type QOSRules = OCTET_STRING; // OctetStringType
export const _decode_QOSRules: $.ASN1Decoder<QOSRules> = $._decodeOctetString;
export const _encode_QOSRules: $.ASN1Encoder<QOSRules> = $._encodeOctetString;


/* eslint-enable */
