/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RequestedFrameQuality, _decode_RequestedFrameQuality, _encode_RequestedFrameQuality } from "../CCSDS-SLE-TRANSFER-SERVICE-RAF-STRUCTURES/RequestedFrameQuality.ta.mjs";
// export { RequestedFrameQuality, RequestedFrameQuality_goodFramesOnly /* IMPORTED_LONG_NAMED_INTEGER */, goodFramesOnly /* IMPORTED_SHORT_NAMED_INTEGER */, RequestedFrameQuality_erredFrameOnly /* IMPORTED_LONG_NAMED_INTEGER */, erredFrameOnly /* IMPORTED_SHORT_NAMED_INTEGER */, RequestedFrameQuality_allFrames /* IMPORTED_LONG_NAMED_INTEGER */, allFrames /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_RequestedFrameQuality, _encode_RequestedFrameQuality } from "../CCSDS-SLE-TRANSFER-SERVICE-RAF-STRUCTURES/RequestedFrameQuality.ta.mjs";


/**
 * @summary PermittedFrameQualitySet
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PermittedFrameQualitySet     ::=  SET SIZE (1 .. 3) OF RequestedFrameQuality
 * ```
 */
export
type PermittedFrameQualitySet = RequestedFrameQuality[]; // SetOfType

let _cached_decoder_for_PermittedFrameQualitySet: $.ASN1Decoder<PermittedFrameQualitySet> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PermittedFrameQualitySet
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PermittedFrameQualitySet (el: _Element): PermittedFrameQualitySet {
    if (!_cached_decoder_for_PermittedFrameQualitySet) { _cached_decoder_for_PermittedFrameQualitySet = $._decodeSetOf<RequestedFrameQuality>(() => _decode_RequestedFrameQuality); }
    return _cached_decoder_for_PermittedFrameQualitySet(el);
}

let _cached_encoder_for_PermittedFrameQualitySet: $.ASN1Encoder<PermittedFrameQualitySet> | null = null;

/**
 * @summary Encodes a(n) PermittedFrameQualitySet into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PermittedFrameQualitySet, encoded as an ASN.1 Element.
 */
export
function _encode_PermittedFrameQualitySet (value: PermittedFrameQualitySet, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PermittedFrameQualitySet) { _cached_encoder_for_PermittedFrameQualitySet = $._encodeSetOf<RequestedFrameQuality>(() => _encode_RequestedFrameQuality, $.BER); }
    return _cached_encoder_for_PermittedFrameQualitySet(value, elGetter);
}


/* eslint-enable */
