/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { SEQUENCE, ASN1Element as _Element } from "@wildboar/asn1";
import { LocalConnectionState, _decode_LocalConnectionState, _encode_LocalConnectionState } from "../CSTA-connection-states/LocalConnectionState.ta.mjs";



/**
 * @summary CompoundCallState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CompoundCallState  ::=  SEQUENCE OF LocalConnectionState
 * ```
 */
export
type CompoundCallState = LocalConnectionState[]; // SequenceOfType

let _cached_decoder_for_CompoundCallState: $.ASN1Decoder<CompoundCallState> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CompoundCallState
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CompoundCallState (el: _Element): CompoundCallState {
    if (!_cached_decoder_for_CompoundCallState) { _cached_decoder_for_CompoundCallState = $._decodeSequenceOf<LocalConnectionState>(() => _decode_LocalConnectionState); }
    return _cached_decoder_for_CompoundCallState(el);
}

let _cached_encoder_for_CompoundCallState: $.ASN1Encoder<CompoundCallState> | null = null;

/**
 * @summary Encodes a(n) CompoundCallState into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CompoundCallState, encoded as an ASN.1 Element.
 */
export
function _encode_CompoundCallState (value: CompoundCallState, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CompoundCallState) { _cached_encoder_for_CompoundCallState = $._encodeSequenceOf<LocalConnectionState>(() => _encode_LocalConnectionState, $.BER); }
    return _cached_encoder_for_CompoundCallState(value, elGetter);
}


/* eslint-enable */
