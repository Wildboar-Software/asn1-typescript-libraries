/* eslint-disable */
import {
    GraphicString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CarrierSelectRouting
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CarrierSelectRouting  ::=  GraphicString
 * ```
 */
export
type CarrierSelectRouting = GraphicString; // GraphicString

export
const _decode_CarrierSelectRouting: $.ASN1Decoder<CarrierSelectRouting> = $._decodeGraphicString;

export
const _encode_CarrierSelectRouting: $.ASN1Encoder<CarrierSelectRouting> = $._encodeGraphicString;

/* eslint-enable */
