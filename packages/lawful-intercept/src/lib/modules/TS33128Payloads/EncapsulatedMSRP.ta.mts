/* eslint-disable */
import {
    type UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EncapsulatedMSRP
 * @description
 * 
 * Shall contain the entire MSRP Message in the original encoding.
 *
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EncapsulatedMSRP  ::=  UTF8String
 * ```
 */
export
type EncapsulatedMSRP = UTF8String; // UTF8String
export const _decode_EncapsulatedMSRP: $.ASN1Decoder<EncapsulatedMSRP> = $._decodeUTF8String;
export const _encode_EncapsulatedMSRP: $.ASN1Encoder<EncapsulatedMSRP> = $._encodeUTF8String;


/* eslint-enable */
