/* eslint-disable */
import {
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary XmlCivicAddress
 * @description
 * 
 * Civic location as UTF-8 XML. It must conform to the February 2008 XML format
 * for civic location in IETF RFC 5139. One way to carry the civic address of an
 * H(e)NodeB, WLAN hotspot, or cell site.
 * 
 * 3GPP TS 33.108, clause 16 and annex B.3.
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
