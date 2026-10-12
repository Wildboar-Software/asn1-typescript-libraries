/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SMSAddress
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMSAddress  ::=  OCTET STRING(SIZE(2..12))
 * ```
 */
export
type SMSAddress = OCTET_STRING; // OctetStringType
export const _decode_SMSAddress: $.ASN1Decoder<SMSAddress> = $._decodeOctetString;
export const _encode_SMSAddress: $.ASN1Encoder<SMSAddress> = $._encodeOctetString;


/* eslint-enable */
