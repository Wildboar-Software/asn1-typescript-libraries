/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary XmlCivicAddress
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * XmlCivicAddress  ::=  UTF8String
 * ```
 */
export
type XmlCivicAddress = UTF8String; // UTF8String
export const _decode_XmlCivicAddress: $.ASN1Decoder<XmlCivicAddress> = $._decodeUTF8String;
export const _encode_XmlCivicAddress: $.ASN1Encoder<XmlCivicAddress> = $._encodeUTF8String;


/* eslint-enable */
