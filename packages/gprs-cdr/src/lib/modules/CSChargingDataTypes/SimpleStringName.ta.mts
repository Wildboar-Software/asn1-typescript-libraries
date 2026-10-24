/* eslint-disable */
import {
    type GraphicString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SimpleStringName
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SimpleStringName  ::=  GraphicString
 * ```
 */
export
type SimpleStringName = GraphicString; // GraphicString

export
const _decode_SimpleStringName: $.ASN1Decoder<SimpleStringName> = $._decodeGraphicString;

export
const _encode_SimpleStringName: $.ASN1Encoder<SimpleStringName> = $._encodeGraphicString;

/* eslint-enable */
