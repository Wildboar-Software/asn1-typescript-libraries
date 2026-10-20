/* eslint-disable */
import {
    GraphicString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SIP_Method
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SIP-Method  ::=  GraphicString
 * ```
 */
export
type SIP_Method = GraphicString; // GraphicString

export
const _decode_SIP_Method: $.ASN1Decoder<SIP_Method> = $._decodeGraphicString;

export
const _encode_SIP_Method: $.ASN1Encoder<SIP_Method> = $._encodeGraphicString;

/* eslint-enable */
