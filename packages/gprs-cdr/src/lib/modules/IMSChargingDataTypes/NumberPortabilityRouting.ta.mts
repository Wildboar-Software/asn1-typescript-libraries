/* eslint-disable */
import {
    GraphicString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NumberPortabilityRouting
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NumberPortabilityRouting  ::=  GraphicString
 * ```
 */
export
type NumberPortabilityRouting = GraphicString; // GraphicString

export
const _decode_NumberPortabilityRouting: $.ASN1Decoder<NumberPortabilityRouting> = $._decodeGraphicString;

export
const _encode_NumberPortabilityRouting: $.ASN1Encoder<NumberPortabilityRouting> = $._encodeGraphicString;

/* eslint-enable */
