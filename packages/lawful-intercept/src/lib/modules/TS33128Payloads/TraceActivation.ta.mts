/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ExternalASNType, _decode_ExternalASNType, _encode_ExternalASNType } from "../TS33128Payloads/ExternalASNType.ta.mjs";
// export { ExternalASNType, _decode_ExternalASNType, _encode_ExternalASNType } from "../TS33128Payloads/ExternalASNType.ta.mjs";


/**
 * @summary TraceActivation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TraceActivation  ::=  ExternalASNType
 * ```
 */
export
type TraceActivation = ExternalASNType; // DefinedType

let _cached_decoder_for_TraceActivation: $.ASN1Decoder<TraceActivation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TraceActivation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TraceActivation (el: _Element): TraceActivation {
    if (!_cached_decoder_for_TraceActivation) { _cached_decoder_for_TraceActivation = _decode_ExternalASNType; }
    return _cached_decoder_for_TraceActivation(el);
}

let _cached_encoder_for_TraceActivation: $.ASN1Encoder<TraceActivation> | null = null;

/**
 * @summary Encodes a(n) TraceActivation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TraceActivation, encoded as an ASN.1 Element.
 */
export
function _encode_TraceActivation (value: TraceActivation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TraceActivation) { _cached_encoder_for_TraceActivation = _encode_ExternalASNType; }
    return _cached_encoder_for_TraceActivation(value, elGetter);
}


/* eslint-enable */
