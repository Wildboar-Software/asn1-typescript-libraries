/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { EpsIRIsContent, _decode_EpsIRIsContent, _encode_EpsIRIsContent } from "../EpsHI2Operations/EpsIRIsContent.ta.mjs";
// export { EpsIRIsContent, _decode_EpsIRIsContent, _encode_EpsIRIsContent } from "../EpsHI2Operations/EpsIRIsContent.ta.mjs";


/**
 * @summary IRIsContent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IRIsContent  ::=  EpsIRIsContent
 * ```
 */
export
type IRIsContent = EpsIRIsContent; // DefinedType

let _cached_decoder_for_IRIsContent: $.ASN1Decoder<IRIsContent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IRIsContent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IRIsContent (el: _Element): IRIsContent {
    if (!_cached_decoder_for_IRIsContent) { _cached_decoder_for_IRIsContent = _decode_EpsIRIsContent; }
    return _cached_decoder_for_IRIsContent(el);
}

let _cached_encoder_for_IRIsContent: $.ASN1Encoder<IRIsContent> | null = null;

/**
 * @summary Encodes a(n) IRIsContent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IRIsContent, encoded as an ASN.1 Element.
 */
export
function _encode_IRIsContent (value: IRIsContent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IRIsContent) { _cached_encoder_for_IRIsContent = _encode_EpsIRIsContent; }
    return _cached_encoder_for_IRIsContent(value, elGetter);
}


/* eslint-enable */
