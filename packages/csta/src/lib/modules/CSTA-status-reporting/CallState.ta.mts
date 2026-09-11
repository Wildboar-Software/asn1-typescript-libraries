/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { NULL, ASN1Element as _Element, ASN1TagClass as _TagClass } from "@wildboar/asn1";
import { CompoundCallState, _decode_CompoundCallState, _encode_CompoundCallState } from "../CSTA-status-reporting/CompoundCallState.ta.mjs";

import { SimpleCallState, _decode_SimpleCallState, _encode_SimpleCallState } from "../CSTA-status-reporting/SimpleCallState.ta.mjs";



/**
 * @summary CallState
 * @description
 *
 * Call state in a snapshot: compound list, simple two-party state, or unknown.
 * ECMA-269 §6.1.4, §16.1.2.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/ ECMA-269}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallState  ::=  CHOICE
 * {    compoundCallState         [0] IMPLICIT CompoundCallState,
 *     simpleCallState         [1] IMPLICIT SimpleCallState,
 *     unknown             [2] IMPLICIT NULL }
 * ```
 */
export
type CallState =
    { compoundCallState: CompoundCallState } /* CHOICE_ALT_ROOT */
    | { simpleCallState: SimpleCallState } /* CHOICE_ALT_ROOT */
    | { unknown: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_CallState: $.ASN1Decoder<CallState> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CallState
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CallState (el: _Element): CallState {
    if (!_cached_decoder_for_CallState) { _cached_decoder_for_CallState = $._decode_inextensible_choice<CallState>({
    "CONTEXT 0": [ "compoundCallState", $._decode_implicit<CompoundCallState>(() => _decode_CompoundCallState) ],
    "CONTEXT 1": [ "simpleCallState", $._decode_implicit<SimpleCallState>(() => _decode_SimpleCallState) ],
    "CONTEXT 2": [ "unknown", $._decode_implicit<NULL>(() => $._decodeNull) ]
}); }
    return _cached_decoder_for_CallState(el);
}

let _cached_encoder_for_CallState: $.ASN1Encoder<CallState> | null = null;

/**
 * @summary Encodes a(n) CallState into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallState, encoded as an ASN.1 Element.
 */
export
function _encode_CallState (value: CallState, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CallState) { _cached_encoder_for_CallState = $._encode_choice<CallState>({
    "compoundCallState": $._encode_implicit(_TagClass.context, 0, () => _encode_CompoundCallState, $.BER),
    "simpleCallState": $._encode_implicit(_TagClass.context, 1, () => _encode_SimpleCallState, $.BER),
    "unknown": $._encode_implicit(_TagClass.context, 2, () => $._encodeNull, $.BER),
}, $.BER); }
    return _cached_encoder_for_CallState(value, elGetter);
}


/* eslint-enable */
