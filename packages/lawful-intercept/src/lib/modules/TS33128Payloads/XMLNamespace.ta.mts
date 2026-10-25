/* eslint-disable */
import {
    type UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary XMLNamespace
 * @description
 * 
 * XML namespace that indicates the schema definition for the reported XMLValue.
 * When using the XMLType as a parameter within a record, the value of the XML
 * namespace shall be clearly indicated if known in the associated description
 * field of the table describing the record.
 *
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * XMLNamespace  ::=  UTF8String
 * ```
 */
export
type XMLNamespace = UTF8String; // UTF8String
export const _decode_XMLNamespace: $.ASN1Decoder<XMLNamespace> = $._decodeUTF8String;
export const _encode_XMLNamespace: $.ASN1Encoder<XMLNamespace> = $._encodeUTF8String;


/* eslint-enable */
