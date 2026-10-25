/* eslint-disable */
import {
    type UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EncapsulatedMIMEEntity
 * @description
 * 
 * Shall contain the entire MIME entity (see RFC 2045 [114] clause 2.4) in the
 * original encoding.
 *
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EncapsulatedMIMEEntity  ::=  UTF8String
 * ```
 */
export
type EncapsulatedMIMEEntity = UTF8String; // UTF8String
export const _decode_EncapsulatedMIMEEntity: $.ASN1Decoder<EncapsulatedMIMEEntity> = $._decodeUTF8String;
export const _encode_EncapsulatedMIMEEntity: $.ASN1Encoder<EncapsulatedMIMEEntity> = $._encodeUTF8String;


/* eslint-enable */
