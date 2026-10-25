/* eslint-disable */
import {
    type GraphicString,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary GraphicStringBase
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GraphicStringBase  ::=  GraphicString
 * ```
 */
export
type GraphicStringBase = GraphicString; // GraphicString
export const _decode_GraphicStringBase: $.ASN1Decoder<string> = $._decodeGraphicString;
export const _encode_GraphicStringBase: $.ASN1Encoder<string> = $._encodeGraphicString;


/* eslint-enable */
