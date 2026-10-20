/* eslint-disable */
import {
    GraphicString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ReasonHeaderInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReasonHeaderInformation  ::=  GraphicString
 * ```
 */
export
type ReasonHeaderInformation = GraphicString; // GraphicString

export
const _decode_ReasonHeaderInformation: $.ASN1Decoder<ReasonHeaderInformation> = $._decodeGraphicString;

export
const _encode_ReasonHeaderInformation: $.ASN1Encoder<ReasonHeaderInformation> = $._encodeGraphicString;

/* eslint-enable */
