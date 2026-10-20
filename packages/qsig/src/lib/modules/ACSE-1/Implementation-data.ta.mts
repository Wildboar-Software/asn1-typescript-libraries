/* eslint-disable */
import {
    GraphicString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Implementation_data
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Implementation-data  ::=  GraphicString
 * ```
 */
export
type Implementation_data = GraphicString; // GraphicString

export
const _decode_Implementation_data: $.ASN1Decoder<Implementation_data> = $._decodeGraphicString;

export
const _encode_Implementation_data: $.ASN1Encoder<Implementation_data> = $._encodeGraphicString;

/* eslint-enable */
