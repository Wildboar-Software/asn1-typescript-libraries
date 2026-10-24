/* eslint-disable */
import {
    type UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary XMLValue
 * @description
 * 
 * The contents of the XML document being reported. Shall be sent as an XML
 * document that matches the schema indicated by the xMLNamespace.
 *
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * XMLValue  ::=  UTF8String
 * ```
 */
export
type XMLValue = UTF8String; // UTF8String
export const _decode_XMLValue: $.ASN1Decoder<XMLValue> = $._decodeUTF8String;
export const _encode_XMLValue: $.ASN1Encoder<XMLValue> = $._encodeUTF8String;


/* eslint-enable */
