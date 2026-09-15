/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    INTEGER,
    IA5String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { EncodingAlgorithm, _decode_EncodingAlgorithm, _encode_EncodingAlgorithm } from "../CSTA-device-feature-types/EncodingAlgorithm.ta.mjs";

import { CurrentState, _decode_CurrentState, _encode_CurrentState } from "../CSTA-device-feature-types/CurrentState.ta.mjs";



/**
 * @summary AttributeInfo
 * @description
 *
 * One voice-unit attribute (query or acknowledgement). Alternatives are
 * encoding algorithm, sampling rate, duration, filename, current
 * position/speed/volume/gain, or current state. Volume and gain are 0..100.
 * ECMA-285 §9.6.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AttributeInfo  ::=  CHOICE
 * {     encodingAlgorithm         [0] IMPLICIT EncodingAlgorithm,
 *     samplingRate             [1] IMPLICIT INTEGER,
 *     duration             [2] IMPLICIT INTEGER,
 *     filename             [3] IMPLICIT IA5String,
 *     currentPosition         [4] IMPLICIT INTEGER,
 *     currentSpeed             [5] IMPLICIT INTEGER,
 *     currentVolume             [6] IMPLICIT INTEGER (0 .. 100),
 *     currentGain             [7] IMPLICIT INTEGER (0 .. 100),
 *     currentState             [8] IMPLICIT CurrentState }
 * ```
 */
export
type AttributeInfo =
    { encodingAlgorithm: EncodingAlgorithm } /* CHOICE_ALT_ROOT */
    | { samplingRate: INTEGER } /* CHOICE_ALT_ROOT */
    | { duration: INTEGER } /* CHOICE_ALT_ROOT */
    | { filename: IA5String } /* CHOICE_ALT_ROOT */
    | { currentPosition: INTEGER } /* CHOICE_ALT_ROOT */
    | { currentSpeed: INTEGER } /* CHOICE_ALT_ROOT */
    | { currentVolume: INTEGER } /* CHOICE_ALT_ROOT */
    | { currentGain: INTEGER } /* CHOICE_ALT_ROOT */
    | { currentState: CurrentState } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_AttributeInfo: $.ASN1Decoder<AttributeInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AttributeInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AttributeInfo (el: _Element): AttributeInfo {
    if (!_cached_decoder_for_AttributeInfo) { _cached_decoder_for_AttributeInfo = $._decode_inextensible_choice<AttributeInfo>({
    "CONTEXT 0": [ "encodingAlgorithm", $._decode_implicit<EncodingAlgorithm>(() => _decode_EncodingAlgorithm) ],
    "CONTEXT 1": [ "samplingRate", $._decode_implicit<INTEGER>(() => $._decodeInteger) ],
    "CONTEXT 2": [ "duration", $._decode_implicit<INTEGER>(() => $._decodeInteger) ],
    "CONTEXT 3": [ "filename", $._decode_implicit<IA5String>(() => $._decodeIA5String) ],
    "CONTEXT 4": [ "currentPosition", $._decode_implicit<INTEGER>(() => $._decodeInteger) ],
    "CONTEXT 5": [ "currentSpeed", $._decode_implicit<INTEGER>(() => $._decodeInteger) ],
    "CONTEXT 6": [ "currentVolume", $._decode_implicit<INTEGER>(() => $._decodeInteger) ],
    "CONTEXT 7": [ "currentGain", $._decode_implicit<INTEGER>(() => $._decodeInteger) ],
    "CONTEXT 8": [ "currentState", $._decode_implicit<CurrentState>(() => _decode_CurrentState) ]
}); }
    return _cached_decoder_for_AttributeInfo(el);
}

let _cached_encoder_for_AttributeInfo: $.ASN1Encoder<AttributeInfo> | null = null;

/**
 * @summary Encodes a(n) AttributeInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeInfo, encoded as an ASN.1 Element.
 */
export
function _encode_AttributeInfo (value: AttributeInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AttributeInfo) { _cached_encoder_for_AttributeInfo = $._encode_choice<AttributeInfo>({
    "encodingAlgorithm": $._encode_implicit(_TagClass.context, 0, () => _encode_EncodingAlgorithm, $.BER),
    "samplingRate": $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER),
    "duration": $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER),
    "filename": $._encode_implicit(_TagClass.context, 3, () => $._encodeIA5String, $.BER),
    "currentPosition": $._encode_implicit(_TagClass.context, 4, () => $._encodeInteger, $.BER),
    "currentSpeed": $._encode_implicit(_TagClass.context, 5, () => $._encodeInteger, $.BER),
    "currentVolume": $._encode_implicit(_TagClass.context, 6, () => $._encodeInteger, $.BER),
    "currentGain": $._encode_implicit(_TagClass.context, 7, () => $._encodeInteger, $.BER),
    "currentState": $._encode_implicit(_TagClass.context, 8, () => _encode_CurrentState, $.BER),
}, $.BER); }
    return _cached_encoder_for_AttributeInfo(value, elGetter);
}


/* eslint-enable */
