/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    BOOLEAN,
    INTEGER,
    ENUMERATED,
    IA5String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { Volume, _decode_Volume, _encode_Volume } from "../CSTA-physical-device-feature/Volume.ta.mjs";

import {
    AttributeToSet_mode,
    automatic /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    single /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    multiple /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_AttributeToSet_mode,
    _encode_AttributeToSet_mode
} from "../CSTA-set-voice-attribute/AttributeToSet-mode.ta.mjs";



/**
 * @summary AttributeToSet
 * @description
 *
 * Which attribute to set. Alternatives match Query Voice Attribute (speed,
 * volume, gain, grammars, language, mode, retainAudio, timeouts,
 * rejectionThreshold, autoInterruptible, innerXML, interDigitTimeout, preflush)
 * (ECMA-269 §26.1.13.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AttributeToSet  ::=  CHOICE
 * {    currentSpeed            [ 0] IMPLICIT INTEGER,
 *     currentVolume             [ 1] Volume,
 *     currentGain             [ 2] IMPLICIT INTEGER (0 .. 100),
 *     grammars            [ 3] IMPLICIT IA5String,
 *     language            [ 4] IMPLICIT IA5String,
 *     mode                [ 5] IMPLICIT ENUMERATED
 *                     {    automatic    (0),
 *                         single        (1),
 *                         multiple    (2) },
 *     retainAudio            [ 6] IMPLICIT BOOLEAN,
 *     silenceTimeout            [ 7] IMPLICIT INTEGER,
 *     maxTimeout            [ 8] IMPLICIT INTEGER,
 *     babbleTimeout            [ 9] IMPLICIT INTEGER,
 *     endSilence            [10] IMPLICIT INTEGER,
 *     rejectionThreshold        [11] IMPLICIT INTEGER,
 *     autoInterruptible        [12] IMPLICIT BOOLEAN,
 *     innerXML            [13] IMPLICIT IA5String,
 *     interDigitTimeout        [14] IMPLICIT INTEGER,
 *     preflush            [15] IMPLICIT BOOLEAN }
 * ```
 */
export
type AttributeToSet =
    { currentSpeed: INTEGER } /* CHOICE_ALT_ROOT */
    | { currentVolume: Volume } /* CHOICE_ALT_ROOT */
    | { currentGain: INTEGER } /* CHOICE_ALT_ROOT */
    | { grammars: IA5String } /* CHOICE_ALT_ROOT */
    | { language: IA5String } /* CHOICE_ALT_ROOT */
    | { mode: AttributeToSet_mode } /* CHOICE_ALT_ROOT */
    | { retainAudio: BOOLEAN } /* CHOICE_ALT_ROOT */
    | { silenceTimeout: INTEGER } /* CHOICE_ALT_ROOT */
    | { maxTimeout: INTEGER } /* CHOICE_ALT_ROOT */
    | { babbleTimeout: INTEGER } /* CHOICE_ALT_ROOT */
    | { endSilence: INTEGER } /* CHOICE_ALT_ROOT */
    | { rejectionThreshold: INTEGER } /* CHOICE_ALT_ROOT */
    | { autoInterruptible: BOOLEAN } /* CHOICE_ALT_ROOT */
    | { innerXML: IA5String } /* CHOICE_ALT_ROOT */
    | { interDigitTimeout: INTEGER } /* CHOICE_ALT_ROOT */
    | { preflush: BOOLEAN } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_AttributeToSet: $.ASN1Decoder<AttributeToSet> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AttributeToSet
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AttributeToSet (el: _Element): AttributeToSet {
    if (!_cached_decoder_for_AttributeToSet) { _cached_decoder_for_AttributeToSet = $._decode_inextensible_choice<AttributeToSet>({
    "CONTEXT 0": [ "currentSpeed", $._decode_implicit<INTEGER>(() => $._decodeInteger) ],
    "CONTEXT 1": [ "currentVolume", $._decode_explicit<Volume>(() => _decode_Volume) ],
    "CONTEXT 2": [ "currentGain", $._decode_implicit<INTEGER>(() => $._decodeInteger) ],
    "CONTEXT 3": [ "grammars", $._decode_implicit<IA5String>(() => $._decodeIA5String) ],
    "CONTEXT 4": [ "language", $._decode_implicit<IA5String>(() => $._decodeIA5String) ],
    "CONTEXT 5": [ "mode", $._decode_implicit<AttributeToSet_mode>(() => _decode_AttributeToSet_mode) ],
    "CONTEXT 6": [ "retainAudio", $._decode_implicit<BOOLEAN>(() => $._decodeBoolean) ],
    "CONTEXT 7": [ "silenceTimeout", $._decode_implicit<INTEGER>(() => $._decodeInteger) ],
    "CONTEXT 8": [ "maxTimeout", $._decode_implicit<INTEGER>(() => $._decodeInteger) ],
    "CONTEXT 9": [ "babbleTimeout", $._decode_implicit<INTEGER>(() => $._decodeInteger) ],
    "CONTEXT 10": [ "endSilence", $._decode_implicit<INTEGER>(() => $._decodeInteger) ],
    "CONTEXT 11": [ "rejectionThreshold", $._decode_implicit<INTEGER>(() => $._decodeInteger) ],
    "CONTEXT 12": [ "autoInterruptible", $._decode_implicit<BOOLEAN>(() => $._decodeBoolean) ],
    "CONTEXT 13": [ "innerXML", $._decode_implicit<IA5String>(() => $._decodeIA5String) ],
    "CONTEXT 14": [ "interDigitTimeout", $._decode_implicit<INTEGER>(() => $._decodeInteger) ],
    "CONTEXT 15": [ "preflush", $._decode_implicit<BOOLEAN>(() => $._decodeBoolean) ]
}); }
    return _cached_decoder_for_AttributeToSet(el);
}

let _cached_encoder_for_AttributeToSet: $.ASN1Encoder<AttributeToSet> | null = null;

/**
 * @summary Encodes a(n) AttributeToSet into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeToSet, encoded as an ASN.1 Element.
 */
export
function _encode_AttributeToSet (value: AttributeToSet, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AttributeToSet) { _cached_encoder_for_AttributeToSet = $._encode_choice<AttributeToSet>({
    "currentSpeed": $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER),
    "currentVolume": $._encode_explicit(_TagClass.context, 1, () => _encode_Volume, $.BER),
    "currentGain": $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER),
    "grammars": $._encode_implicit(_TagClass.context, 3, () => $._encodeIA5String, $.BER),
    "language": $._encode_implicit(_TagClass.context, 4, () => $._encodeIA5String, $.BER),
    "mode": $._encode_implicit(_TagClass.context, 5, () => _encode_AttributeToSet_mode, $.BER),
    "retainAudio": $._encode_implicit(_TagClass.context, 6, () => $._encodeBoolean, $.BER),
    "silenceTimeout": $._encode_implicit(_TagClass.context, 7, () => $._encodeInteger, $.BER),
    "maxTimeout": $._encode_implicit(_TagClass.context, 8, () => $._encodeInteger, $.BER),
    "babbleTimeout": $._encode_implicit(_TagClass.context, 9, () => $._encodeInteger, $.BER),
    "endSilence": $._encode_implicit(_TagClass.context, 10, () => $._encodeInteger, $.BER),
    "rejectionThreshold": $._encode_implicit(_TagClass.context, 11, () => $._encodeInteger, $.BER),
    "autoInterruptible": $._encode_implicit(_TagClass.context, 12, () => $._encodeBoolean, $.BER),
    "innerXML": $._encode_implicit(_TagClass.context, 13, () => $._encodeIA5String, $.BER),
    "interDigitTimeout": $._encode_implicit(_TagClass.context, 14, () => $._encodeInteger, $.BER),
    "preflush": $._encode_implicit(_TagClass.context, 15, () => $._encodeBoolean, $.BER),
}, $.BER); }
    return _cached_encoder_for_AttributeToSet(value, elGetter);
}


/* eslint-enable */
